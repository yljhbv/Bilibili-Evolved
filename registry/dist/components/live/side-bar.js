!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["live/side-bar"]=e():n["live/side-bar"]=e()}(self,(function(){return function(){var n,e,r={510:function(n,e,r){var t=r(645)((function(n){return n[1]}));t.push([n.id,'.side-bar-cntr {\n  transition: 0.24s ease-out !important;\n  overflow: visible !important;\n  transform: translateZ(0) translateX(100%) !important;\n}\n.side-bar-cntr:hover {\n  transform: translateZ(0) !important;\n}\n.side-bar-cntr::after {\n  right: calc(100% + 4px);\n  transform: translateY(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  border: 4px solid #aaa;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\nbody.dark .side-bar-cntr::after {\n  border: 4px solid #eee;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.side-bar-cntr::before {\n  right: calc(100% - 8px);\n  transform: translateY(-50%);\n  width: 32px;\n  height: 48px;\n  border-radius: 8px 0 0 8px;\n  background-color: #fff;\n  border: 1px solid #e9eaec;\n}\nbody.dark .side-bar-cntr::before {\n  background-color: #222;\n  border-color: transparent;\n}\n.side-bar-cntr::before, .side-bar-cntr::after {\n  content: "";\n  transition: 0.24s ease-out;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n}\n.side-bar-cntr:hover::after, .side-bar-cntr:hover::before {\n  opacity: 0;\n}',""]),n.exports=t},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,r,t){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},331:function(n,e,r){var t=r(510);t&&t.__esModule&&(t=t.default),n.exports="string"==typeof t?t:t.toString()}},t={};function o(n){var e=t[n];if(void 0!==e)return e.exports;var i=t[n]={id:n,exports:{}};return r[n](i,i.exports,o),i.exports}e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(r,t){if(1&t&&(r=this(r)),8&t)return r;if("object"==typeof r&&r){if(4&t&&r.__esModule)return r;if(16&t&&"function"==typeof r.then)return r}var i=Object.create(null);o.r(i);var a={};n=n||[null,e({}),e([]),e(e)];for(var c=2&t&&r;"object"==typeof c&&!~n.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(n){a[n]=function(){return r[n]}}));return a.default=function(){return r},o.d(i,a),i},o.d=function(n,e){for(var r in e)o.o(e,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return r}});var n=coreApis.componentApis.define,e=coreApis.utils.urls;const r=(0,n.defineComponentMetadata)({name:"collapseLiveSideBar",entry:none,instantStyles:[{name:"collapseLiveSideBar",style:()=>Promise.resolve().then(o.t.bind(o,331,23))}],displayName:"自动收起直播侧栏",description:'自动收起直播间右边偏下的侧栏. (上面有个 "关注" 的面板)',tags:[componentsTags.live,componentsTags.style],urlInclude:e.liveUrls,commitHash:"f2317de5ed47e57d0053aef1890c81e1216cbfe5",coreVersion:"2.4.0"})}(),i=i.component}()}));