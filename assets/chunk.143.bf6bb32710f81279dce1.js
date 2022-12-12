var __ember_auto_import__;(()=>{var e={545:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>i})
const n=require("@ember/template-factory"),o=require("@ember/component"),a=require("@glimmer/component")
var d=t.n(a),s=(0,n.createTemplateFactory)({id:"/QPQAMma",block:'[[[10,0],[14,0,"mobiledoc-canvas"],[12],[1,"\\n  "],[11,0],[4,[38,0],[[30,1],[30,2],[30,3]],null],[12],[1,"\\n  "],[13],[1,"\\n"],[13]],["@content","@atoms","@cards"],false,["mobiledoc-dom-renderer"]]',moduleName:"(unknown template module)",isStrictMode:!1})
class i extends(d()){}(0,o.setComponentTemplate)(s,i)},752:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>x})
const n=require("ember-modifier")
var o=t.n(n)
function a(e,r){return e.createTextNode(function(e){return e.replace(/  /g,"  ").replace(/\t/g," ")}(r))}function d(e){return e.toLowerCase()}const s="dom",i={name:"image",type:s,render(e){let{payload:r,env:{dom:t}}=e,n=t.createElement("img")
return n.src=r.src,n}},l=["p","h1","h2","h3","h4","h5","h6","blockquote","pull-quote","aside"].map(d),c=["p","h1","h2","h3","h4","h5","h6","blockquote","aside"].map(d),h=["ul","ol"].map(d),m=["b","i","strong","em","a","u","sub","sup","s","code"].map(d)
function u(e,r){return-1!==e.indexOf(r)}function p(e,r){switch(e=d(e),r){case 1:return u(l,e)
case 3:return u(h,e)
default:throw new Error(`Cannot validate tagName for unknown section type "${r}"`)}}function f(e){return e=d(e),u(c,e)}function w(e){return e=d(e),u(m,e)}const _=/.+:/i,k=["javascript","vbscript"]
function C(e){let r={}
for(let t=0;t<e.length;t+=2){let n=e[t],o=e[t+1]
r[n.toLowerCase()]=o}return r}const b=["data-md-text-align"]
function E(e,r,t){if(n=r,-1===b.indexOf(n))throw new Error(`Cannot use attribute: ${r}`)
var n
e.setAttribute(r,t)}function y(e,r){let t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return f(e)?(t=r.createElement(e),Object.keys(n).forEach((e=>{E(t,e,n[e])}))):(t=r.createElement("div"),t.setAttribute("class",e)),t}function g(e,r,t){let n=r.createElement(e)
return Object.keys(t).forEach((r=>{let o=t[r]
o=function(e,r,t){return"a"===e&&"href"===r?function(e){let r=function(e){let r=e&&e.match(_)
return r&&r[0]&&r[0].split(":")[0]||""}(e).toLowerCase().replace(/ /g,"")
return function(e,r){for(let t=0;t<e.length;t++)if(e[t]===r)return!0
return!1}(k,r)?`unsafe:${e}`:e}(t):t}(e,r,o),n.setAttribute(r,o)})),n}const v="0.2.0"
class A{constructor(e,r){let{cards:t,cardOptions:n,unknownCardHandler:o,markupElementRenderer:a,sectionElementRenderer:d,dom:s}=r,{version:i,sections:l}=e
!function(e){if(e!==v)throw new Error(`Unexpected Mobiledoc version "${e}"`)}(i)
const[c,h]=l
this.dom=s,this.root=s.createDocumentFragment(),this.markerTypes=c,this.sections=h,this.cards=t,this.cardOptions=n,this.unknownCardHandler=o||this._defaultUnknownCardHandler,this.sectionElementRenderer={__default__:y},Object.keys(d).forEach((e=>{this.sectionElementRenderer[e.toLowerCase()]=d[e]})),this.markupElementRenderer={__default__:g},Object.keys(a).forEach((e=>{this.markupElementRenderer[e.toLowerCase()]=a[e]})),this._renderCallbacks=[],this._teardownCallbacks=[],this._renderedChildNodes=[]}get _defaultUnknownCardHandler(){return e=>{let{env:{name:r}}=e
throw new Error(`Card "${r}" not found but no unknownCardHandler was registered`)}}render(){this.sections.forEach((e=>{let r=this.renderSection(e)
r&&this.root.appendChild(r)}))
for(let r=0;r<this._renderCallbacks.length;r++)this._renderCallbacks[r]()
this._renderedChildNodes=[]
let e=this.root.firstChild
for(;e;)this._renderedChildNodes.push(e),e=e.nextSibling
return{result:this.root,teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()
for(let e=0;e<this._renderedChildNodes.length;e++){let r=this._renderedChildNodes[e]
r.parentNode&&r.parentNode.removeChild(r)}}renderSection(e){const[r]=e
switch(r){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error(`Cannot render mobiledoc section of type "${r}"`)}}renderMarkersOnElement(e,r){let t=[e],n=e
for(let d=0,s=r.length;d<s;d++){let e=r[d],[s,i,l]=e
for(let r=0,a=s.length;r<a;r++){let e=this.markerTypes[s[r]],[a,d=[]]=e
w(a)?(o=this.renderMarkupElement(a,d),n.appendChild(o),t.push(o),n=o):i--}n.appendChild(a(this.dom,l))
for(let r=0,o=i;r<o;r++)t.pop(),n=t[t.length-1]}var o}renderMarkupElement(e,r){return e=e.toLowerCase(),r=C(r),this.markupElementRendererFor(e)(e,this.dom,r)}markupElementRendererFor(e){return this.markupElementRenderer[e]||this.markupElementRenderer.__default__}renderListItem(e){const r=this.dom.createElement("li")
return this.renderMarkersOnElement(r,e),r}renderListSection(e){let[r,t,n]=e
if(!p(t,3))return
const o=this.dom.createElement(t)
return n.forEach((e=>{o.appendChild(this.renderListItem(e))})),o}renderImageSection(e){let[r,t]=e,n=this.dom.createElement("img")
return n.src=t,n}findCard(e){for(let r=0;r<this.cards.length;r++)if(this.cards[r].name===e)return this.cards[r]
return e===i.name?i:this._createUnknownCard(e)}_createUnknownCard(e){return{name:e,type:s,render:this.unknownCardHandler}}_createCardArgument(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,dom:this.dom,didRender:e=>this._registerRenderCallback(e),onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:r}}_registerRenderCallback(e){this._renderCallbacks.push(e)}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}renderCardSection(e){let[r,t,n]=e,o=this.findCard(t),a=this._createCardArgument(o,n),d=o.render(a)
return this._validateCardRender(d,o.name),d}_validateCardRender(e,r){if(e&&"object"!=typeof e)throw new Error(`Card "${r}" must render ${s}, but result was "${e}"`)}renderMarkupSection(e){let[r,t,n]=e
if(t=t.toLowerCase(),!p(t,1))return
let o=this.sectionElementRendererFor(t)(t,this.dom)
return this.renderMarkersOnElement(o,n),o}sectionElementRendererFor(e){return this.sectionElementRenderer[e]||this.sectionElementRenderer.__default__}}const R="0.3.0",$="0.3.1",S="0.3.2"
class O{constructor(e,r){let{cards:t,cardOptions:n,atoms:o,unknownCardHandler:a,unknownAtomHandler:d,markupElementRenderer:s,sectionElementRenderer:i,dom:l}=r,{version:c,sections:h,atoms:m,cards:u,markups:p}=e
!function(e){switch(e){case R:case $:case S:return
default:throw new Error(`Unexpected Mobiledoc version "${e}"`)}}(c),this.dom=l,this.root=this.dom.createDocumentFragment(),this.sections=h,this.atomTypes=m,this.cardTypes=u,this.markerTypes=p,this.cards=t,this.atoms=o,this.cardOptions=n,this.unknownCardHandler=a||this._defaultUnknownCardHandler,this.unknownAtomHandler=d||this._defaultUnknownAtomHandler,this.sectionElementRenderer={__default__:y},Object.keys(i).forEach((e=>{this.sectionElementRenderer[e.toLowerCase()]=i[e]})),this.markupElementRenderer={__default__:g},Object.keys(s).forEach((e=>{this.markupElementRenderer[e.toLowerCase()]=s[e]})),this._renderCallbacks=[],this._teardownCallbacks=[]}get _defaultUnknownCardHandler(){return e=>{let{env:{name:r}}=e
throw new Error(`Card "${r}" not found but no unknownCardHandler was registered`)}}get _defaultUnknownAtomHandler(){return e=>{let{env:{name:r}}=e
throw new Error(`Atom "${r}" not found but no unknownAtomHandler was registered`)}}render(){this.sections.forEach((e=>{let r=this.renderSection(e)
r&&this.root.appendChild(r)}))
for(let e=0;e<this._renderCallbacks.length;e++)this._renderCallbacks[e]()
return this._renderedChildNodes=Array.prototype.slice.call(this.root.childNodes),{result:this.root,teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()
for(let e=0;e<this._renderedChildNodes.length;e++){let r=this._renderedChildNodes[e]
r.parentNode&&r.parentNode.removeChild(r)}}renderSection(e){const[r]=e
switch(r){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error(`Cannot render mobiledoc section of type "${r}"`)}}renderMarkersOnElement(e,r){let t=[e],n=e
for(let d=0,s=r.length;d<s;d++){let e=r[d],[s,i,l,c]=e
for(let r=0,a=i.length;r<a;r++){let e=this.markerTypes[i[r]],[a,d=[]]=e
w(a)?(o=this.renderMarkupElement(a,d),n.appendChild(o),t.push(o),n=o):l--}switch(s){case 0:n.appendChild(a(this.dom,c))
break
case 1:n.appendChild(this._renderAtom(c))
break
default:throw new Error(`Unknown markup type (${s})`)}for(let r=0,o=l;r<o;r++)t.pop(),n=t[t.length-1]}var o}renderMarkupElement(e,r){return e=e.toLowerCase(),r=C(r),this.markupElementRendererFor(e)(e,this.dom,r)}markupElementRendererFor(e){return this.markupElementRenderer[e]||this.markupElementRenderer.__default__}renderListItem(e){const r=this.dom.createElement("li")
return this.renderMarkersOnElement(r,e),r}renderListSection(e){let[r,t,n]=e
if(!p(t,3))return
const o=this.dom.createElement(t)
return n.forEach((e=>{o.appendChild(this.renderListItem(e))})),o}renderImageSection(e){let[r,t]=e,n=this.dom.createElement("img")
return n.src=t,n}findCard(e){for(let r=0;r<this.cards.length;r++)if(this.cards[r].name===e)return this.cards[r]
return e===i.name?i:this._createUnknownCard(e)}_findCardByIndex(e){let r=this.cardTypes[e]
if(!r)throw new Error(`No card definition found at index ${e}`)
let[t,n]=r
return{card:this.findCard(t),payload:n}}_createUnknownCard(e){return{name:e,type:s,render:this.unknownCardHandler}}_createCardArgument(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,dom:this.dom,didRender:e=>this._registerRenderCallback(e),onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:r}}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}_registerRenderCallback(e){this._renderCallbacks.push(e)}renderCardSection(e){let[r,t]=e,{card:n,payload:o}=this._findCardByIndex(t),a=this._createCardArgument(n,o),d=n.render(a)
return this._validateCardRender(d,n.name),d}_validateCardRender(e,r){if(e&&"object"!=typeof e)throw new Error(`Card "${r}" must render ${s}, but result was "${e}"`)}findAtom(e){for(let r=0;r<this.atoms.length;r++)if(this.atoms[r].name===e)return this.atoms[r]
return this._createUnknownAtom(e)}_createUnknownAtom(e){return{name:e,type:s,render:this.unknownAtomHandler}}_createAtomArgument(e,r,t){return{env:{name:e.name,isInEditor:!1,dom:this.dom,onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,value:r,payload:t}}_validateAtomRender(e,r){if(e&&"object"!=typeof e)throw new Error(`Atom "${r}" must render ${s}, but result was "${e}"`)}_findAtomByIndex(e){let r=this.atomTypes[e]
if(!r)throw new Error(`No atom definition found at index ${e}`)
let[t,n,o]=r
return{atom:this.findAtom(t),value:n,payload:o}}_renderAtom(e){let{atom:r,value:t,payload:n}=this._findAtomByIndex(e),o=this._createAtomArgument(r,t,n),d=r.render(o)
return this._validateAtomRender(d,r.name),d||a(this.dom,"")}renderMarkupSection(e){let[r,t,n,o=[]]=e
if(t=t.toLowerCase(),!p(t,1))return
let a=C(o),d=this.sectionElementRendererFor(t)(t,this.dom,a)
return this.renderMarkersOnElement(d,n),d}sectionElementRendererFor(e){return this.sectionElementRenderer[e]||this.sectionElementRenderer.__default__}}class x extends(o()){modify(e,r){let[t,n=[],o=[]]=r
if(!this.renderer){const r={mobiledoc:t}
this.renderer=new class{constructor(){let{cards:e=[],atoms:r=[],cardOptions:t={},unknownCardHandler:n,unknownAtomHandler:o,markupElementRenderer:a={},sectionElementRenderer:d={},dom:i,markupSanitizer:l=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(function(e){if(!Array.isArray(e))throw new Error("`cards` must be passed as an array")
for(let r=0;r<e.length;r++){let t=e[r]
if(t.type!==s)throw new Error(`Card "${t.name}" must be of type "${s}", was "${t.type}"`)
if(!t.render)throw new Error(`Card "${t.name}" must define \`render\``)}}(e),function(e){if(!Array.isArray(e))throw new Error("`atoms` must be passed as an array")
for(let r=0;r<e.length;r++){let t=e[r]
if(t.type!==s)throw new Error(`Atom "${t.name}" must be type "${s}", was "${t.type}"`)
if(!t.render)throw new Error(`Atom "${t.name}" must define \`render\``)}}(r),!i){if("undefined"==typeof window)throw new Error("A `dom` option must be provided to the renderer when running without window.document")
i=window.document}this.options={cards:e,atoms:r,cardOptions:t,unknownCardHandler:n,unknownAtomHandler:o,markupElementRenderer:a,sectionElementRenderer:d,dom:i,markupSanitizer:l}}render(e){let{version:r}=e
switch(r){case v:case void 0:case null:return new A(e,this.options).render()
case R:case $:case S:return new O(e,this.options).render()
default:throw new Error(`Unexpected Mobiledoc version "${r}"`)}}}({cards:o,atoms:n,cardOptions:[]})
let{result:a}=this.renderer.render(r.mobiledoc)
e.appendChild(a)}}}},869:(e,r,t)=>{var n,o
e.exports=(n=_eai_d,o=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?o("_eai_dyn_"+e):o("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return o("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},n("cb-ember-mobiledoc-dom-renderer/components/mobiledoc/dom-renderer",[],(function(){return t(545)})),void n("cb-ember-mobiledoc-dom-renderer/modifiers/mobiledoc-dom-renderer",[],(function(){return t(752)})))},88:function(e,r){window._eai_r=require,window._eai_d=define}},r={}
function t(n){var o=r[n]
if(void 0!==o)return o.exports
var a=r[n]={exports:{}}
return e[n].call(a.exports,a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(88)
var n=t(869)
__ember_auto_import__=n})()
