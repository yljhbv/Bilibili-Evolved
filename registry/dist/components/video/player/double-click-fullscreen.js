!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/double-click-fullscreen"]=t():e["video/player/double-click-fullscreen"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={241:e=>{e.exports=coreApis.componentApis.video.playerAgent},104:e=>{e.exports=coreApis.observer},847:e=>{e.exports=coreApis.utils}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>l[e]=()=>o[e]));return l.default=()=>o,n.d(i,l),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};n.d(i,{component:()=>a});const l=coreApis.componentApis.define,s=coreApis.utils.urls,c=(0,l.defineOptionsMetadata)({preventSingleClick:{displayName:"双击时阻止单击事件",defaultValue:!0}}),a=(0,l.defineComponentMetadata)({name:"doubleClickFullscreen",displayName:"双击全屏",description:"为视频播放器启用双击全屏功能, 请注意不能和 `启用双击控制` 一同使用.",entry:async e=>{let{settings:t}=e;const{videoChange:o}=await Promise.resolve().then(n.t.bind(n,104,23));o((async()=>{const{DoubleClickEvent:e}=await Promise.resolve().then(n.t.bind(n,847,23)),{playerAgent:o}=await Promise.resolve().then(n.t.bind(n,241,23)),r=await o.query.danmakuTipLayer();if(null===r)return void console.error("playerArea not found");const i="double-click-fullscreen";if(!r.classList.contains(i)){r.classList.add(i);const n=o.query.video.container.sync(),l=new e((()=>o.fullscreen()),t.options.preventSingleClick);l.singleClickHandler=()=>o.togglePlay(),l.bind(n)}}))},tags:[componentsTags.video],options:c,urlInclude:s.playerUrls,commitHash:"7d2bf04d2234b556d16c08c749fa52d8bf4dcfa4",coreVersion:"2.10.0"});return i=i.component})()));