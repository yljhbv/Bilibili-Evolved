!function(i,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["touch/double-click-control"]=o():i["touch/double-click-control"]=o()}(self,(function(){return function(){var i,o,e={332:function(i,o,e){var l=e(645)((function(i){return i[1]}));l.push([i.id,".disable-original-hover .bilibili-player-video-control-bottom,\n.disable-original-hover .bilibili-player-video-control-mask,\n.disable-original-hover .bilibili-player-video-progress-shadow {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover .bilibili-player-video-control-wrap {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: -7px !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-bottom, .disable-original-hover.touch-video-control-show .bilibili-player-video-control-mask {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  bottom: 32px !important;\n}\n.disable-original-hover #bilibili_pbp,\n.disable-original-hover #bilibili_pbp_canvas {\n  left: 0 !important;\n  width: 100% !important;\n  opacity: 0 !important;\n}\n.disable-original-hover #bilibili_pbp.pin,\n.disable-original-hover #bilibili_pbp_canvas.pin {\n  opacity: 1 !important;\n  bottom: 3px !important;\n}\n.disable-original-hover #bilibili_pbp_pin {\n  opacity: 0 !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp,\n.disable-original-hover.touch-video-control-show #bilibili_pbp_canvas {\n  opacity: 1 !important;\n  bottom: calc(100% - 2px) !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp_pin {\n  right: -8px !important;\n  opacity: 1 !important;\n}\n@media screen and (min-width: 750px) {\n  .mode-fullscreen .disable-original-hover #bilibili_pbp.pin,\n.mode-fullscreen .disable-original-hover #bilibili_pbp_canvas.pin, .mode-webfullscreen .disable-original-hover #bilibili_pbp.pin,\n.mode-webfullscreen .disable-original-hover #bilibili_pbp_canvas.pin {\n    bottom: 4px !important;\n  }\n  .mode-fullscreen .disable-original-hover.touch-video-control-show #bilibili_pbp,\n.mode-fullscreen .disable-original-hover.touch-video-control-show #bilibili_pbp_canvas, .mode-webfullscreen .disable-original-hover.touch-video-control-show #bilibili_pbp,\n.mode-webfullscreen .disable-original-hover.touch-video-control-show #bilibili_pbp_canvas {\n    bottom: calc(100% + 5px) !important;\n  }\n}\n.disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bc, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bl, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-br {\n  bottom: 20px !important;\n}\n.disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 54px !important;\n}\n.mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .mode-fullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 68px !important;\n}\n\n@media screen and (min-width: 750px) {\n  .player .bilibili-player.mode-fullscreen .disable-original-hover .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: -7px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 49px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 49px !important;\n  }\n}",""]),i.exports=l},645:function(i){"use strict";
// eslint-disable-next-line func-names
i.exports=function(i){var o=[];return o.toString=function(){return this.map((function(o){var e=i(o);return o[2]?"@media ".concat(o[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
o.i=function(i,e,l){"string"==typeof i&&(
// eslint-disable-next-line no-param-reassign
i=[[null,i,""]]);var t={};if(l)for(var n=0;n<this.length;n++){
// eslint-disable-next-line prefer-destructuring
var r=this[n][0];null!=r&&(t[r]=!0)}for(var a=0;a<i.length;a++){var b=[].concat(i[a]);l&&t[b[0]]||(e&&(b[2]?b[2]="".concat(e," and ").concat(b[2]):b[2]=e),o.push(b))}},o}},445:function(i,o,e){var l=e(332);i.exports="string"==typeof l?l:l.toString()},109:function(i){"use strict";i.exports=coreApis.utils}},l={};function t(i){var o=l[i];if(void 0!==o)return o.exports;var n=l[i]={id:i,exports:{}};return e[i](n,n.exports,t),n.exports}t.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(o,{a:o}),o},o=Object.getPrototypeOf?function(i){return Object.getPrototypeOf(i)}:function(i){return i.__proto__},t.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var n=Object.create(null);t.r(n);var r={};i=i||[null,o({}),o([]),o(o)];for(var a=2&l&&e;"object"==typeof a&&!~i.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((function(i){r[i]=function(){return e[i]}}));return r.default=function(){return e},t.d(n,r),n},t.d=function(i,o){for(var e in o)t.o(o,e)&&!t.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:o[e]})},t.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};return function(){"use strict";t.d(n,{component:function(){return b}});var i=coreApis.componentApis.video.playerAgent,o=coreApis.observer,e=coreApis.style,l=coreApis.utils.urls,r=t(445),a=t.n(r);const b={name:"doubleClickControl",displayName:"启用双击控制",description:{"zh-CN":"将操作方式更改为: 单击显示/隐藏控制栏, 双击播放/暂停."},tags:[componentsTags.touch],enabledByDefault:navigator.maxTouchPoints>0,urlInclude:l.playerUrls,entry:async()=>{(0,e.addStyle)(a());const l="disable-original-hover";(0,o.videoChange)((async()=>{const o=await i.playerAgent.query.playerArea();if(o.classList.contains(l))return;o.classList.add(l);const e=i.playerAgent.query.video.container.sync(),{DoubleClickEvent:n}=await Promise.resolve().then(t.t.bind(t,109,23)),r=new n((()=>i.playerAgent.togglePlay()),!0);r.singleClickHandler=()=>{o.classList.toggle("touch-video-control-show")},r.bind(e)}))}}}(),n=n.component}()}));