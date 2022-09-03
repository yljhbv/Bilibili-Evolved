!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/mpv-output-playlist"]=t():e["video/download/mpv-output-playlist"]=t()}(self,(function(){return function(){var e={391:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,".rpc-config.download-video-config-section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0;\n  align-items: stretch;\n}\n.rpc-config.download-video-config-section > * {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.rpc-config.download-video-config-section > *:not(:last-child) {\n  margin-bottom: 12px;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:h(f,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,m=0;function h(e,t){var n,o,i;if(t.singleton){var r=m++;n=v||(v=l(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=l(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);s[i].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},686:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rpc-config download-video-config-section"},[n("div",{staticClass:"profile-dir"},[n("div",{staticClass:"profile-item-name"},[e._v("命令路径:")]),e._v(" "),n("TextBox",{on:{blur:e.saveInfo},model:{value:e.mpvInfo.dir,callback:function(t){e.$set(e.mpvInfo,"dir",t)},expression:"mpvInfo.dir"}})],1),e._v(" "),n("div",{staticClass:"profile-host"},[n("div",{staticClass:"profile-item-name"},[e._v("主机:")]),e._v(" "),n("TextBox",{on:{blur:e.saveInfo},model:{value:e.mpvInfo.host,callback:function(t){e.$set(e.mpvInfo,"host",t)},expression:"mpvInfo.host"}})],1),e._v(" "),n("div",{staticClass:"profile-port"},[n("div",{staticClass:"profile-item-name"},[e._v("端口:")]),e._v(" "),n("TextBox",{on:{blur:e.saveInfo},model:{value:e.mpvInfo.port,callback:function(t){e.$set(e.mpvInfo,"port",t)},expression:"mpvInfo.port"}})],1)])};o._withStripped=!0;var i=coreApis.settings,r=coreApis.ui;const{options:s}=(0,i.getComponentSettings)("downloadVideo"),a={dir:"mpv",host:"127.0.0.1",port:"50000",...s};var c=Vue.extend({components:{TextBox:r.TextBox},data:()=>({mpvInfo:a}),methods:{saveInfo(){Object.assign(s,a)}}}),l=n(379),u=n.n(l),d=n(391),f=n.n(d),p={insert:"head",singleton:!1};u()(f(),p),f().locals;var v=function(e,t,n,o,i,r,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(c,o,[],!1,null,null,null);v.options.__file="registry/lib/plugins/video/download/mpv-output-playlist/MpvConfig.vue";var m=v.exports}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.d(o,{plugin:function(){return a}});var e=coreApis.ajax,t=coreApis.toast,i=coreApis.utils.constants,r=coreApis.utils.log;const s={name:"mpv-playlist",displayName:"MPV播放",description:"格式选择flv，千万不能选音画分离的dash。建议把mpv.exe所在目录加进环境变量。",runAction:async(n,o)=>{const{infos:s}=n,{mpvInfo:a}=o,c=s.flatMap((e=>e.titledFragments)).map((e=>e.url)),l=s.flatMap((e=>e.titledFragments)).map((e=>e.title)),u={dir:a.dir,referer:"https://www.bilibili.com/","user-agent":i.UserAgent,urls:c,titles:l},d=`http://${a.host}:${a.port}`,f=await(0,e.postJson)(d,u),p=JSON.parse(f);p.success?t.Toast.success(`成功发送了请求: ${p.message}`,"MPV播放",3e3):(0,r.logError)(p.message)},component:()=>Promise.resolve().then(n.bind(n,686)).then((e=>e.default))},a={name:"downloadVideo.outputs.mpv-playlist",displayName:"下载视频 - MPV 播放支持（列表）",author:{name:"wuliic",link:"https://github.com/wullic"},description:"为下载视频增加 MPV 输出支持,支持列表播放，配置方式请参考 [playwithmpv](https://github.com/videoanywhere/playwithmpv)",setup:e=>{let{addData:t}=e;t("downloadVideo.outputs",(e=>{e.push(s)}))},commitHash:"f2317de5ed47e57d0053aef1890c81e1216cbfe5",coreVersion:"2.4.0"}}(),o=o.plugin}()}));