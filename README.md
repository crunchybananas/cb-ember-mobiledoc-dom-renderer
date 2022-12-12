cb-ember-mobiledoc-dom-renderer
==============================================================================

[![CI](https://github.com/crunchybananas/cb-ember-mobiledoc-dom-renderer/actions/workflows/ci.yml/badge.svg)](https://github.com/crunchybananas/cb-ember-mobiledoc-renderer/actions/workflows/ci.yml)

A simple wrapper for [MobileDoc](https://bustle.github.io/mobiledoc-kit/demo/).
Heavily inspired by https://github.com/bustle/ember-mobiledoc-dom-renderer but using
modern Ember techniques.

Compatibility
------------------------------------------------------------------------------

* Ember.js v4.0.0 or above
* Embroider or ember-auto-import v2

### Demo

https://crunchybananas.github.io/cb-ember-mobiledoc-dom-renderer/


Installation
------------------------------------------------------------------------------

```
ember install cb-ember-mobiledoc-dom-renderer
```

### Linking Library for Development

To link this package locally for development, execute the following, where
`<project-root>` is the root of the project using this library as a dependency:

```
cd packages/cb-ember-mobiledoc-dom-renderer/
npm link

cd <project-root>
npm link cb-ember-mobiledoc-dom-renderer
```

To unlink this project:

```
cd <project-root>
npm unlink --no-save cb-ember-mobiledoc-dom-renderer

cd packages/cb-ember-mobiledoc-dom-renderer/
npm unlink

```

Note that after unlinking, you may need to delete `node_modules` and reinstall
the dependencies. Sometimes simply reinstalling the dependencies after relinking
doesn't work.

#### Linking for Test App

The test app isn't automatically linked to the local repo. To run the test app
on the local codebase it must also be linked in the same fashion as above:

```
cd packages/cb-ember-mobiledoc-dom-renderer/
npm link

cd ../test-app/
npm link cb-ember-mobiledoc-dom-renderer
```

Note that you may need to delete `node_modules` in the `test-app` directory
before linking and then reinstall the dependencies for the link to work.


Why this addon?
------------------------------------------------------------------------------
We love this addon and have many projects using the official addon provided by
Bustle. Over the past few years that addon has not received as much attention
and has prevented some projects of our from moving to Ember 4.0+. The goal with
this addon is to provide the smallest amount of custom code and to rely on the
native implementation as much as possible.

Development
------------------------------------------------------------------------------

Run `ember serve` from packages/test-app and navigate to http://localhost:4200
in your browser.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
