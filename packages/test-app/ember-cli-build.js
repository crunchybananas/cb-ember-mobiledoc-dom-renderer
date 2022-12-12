'use strict';

// For Ember on Node.js 15+, set in NODE_OPTIONS:
// export NODE_OPTIONS="--require /Users/bardzusny/node-15-for-ember-monkeypatching.js"

// 1. Don't exit Node process on uncaught exceptions, keeping Node 14 behaviour. Required to not crash Ember server on type errors thrown by ember-cli-typescript
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log('Node NOT Exiting...');
});

// 2. Monkey-patching Array.prototype.forEach: to detect specific build step call from a specific file, based on a stack trace - and add special sauce for it to work OK with Node 15+:
//
// Error
// at Array.forEach (/Users/bardzusny/this-file.js:24:17)
// at dispatchQueuedRequests (/Users/bardzusny/code/ember-app/node_modules/workerpool/lib/WorkerHandler.js:240:21)
// ...

let specialForEachRegexp = new RegExp(
  'at dispatchQueuedRequests.*node_modules/workerpool/lib/WorkerHandler.js'
);

let origForEach = Array.prototype.forEach;

Array.prototype.forEach = function () {
  if (specialForEachRegexp.test(new Error().stack.split('\n')[2])) {
    let sendFunc = arguments[0];
    return origForEach.bind(this)((req) => sendFunc(req)); // sendFunc must receive only one argument, otherwise it errors out
  }

  return origForEach.bind(this)(...arguments);
};

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['cb-ember-mobiledoc-dom-renderer'],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app);
};
