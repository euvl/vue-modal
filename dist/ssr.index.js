!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(global,function(){return i={},o.m=n=[function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("27d83796",i,!1,t)}},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("0e783494",i,!1,t)}},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(4).default;t.exports.__inject__=function(t){o("17757f60",i,!1,t)}},function(t,e){t.exports=function(n){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&n[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),a.push(r))}},a}},function(t,e,n){"use strict";function i(t,e,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return r(i._styles)}}),i._renderStyles=r);var o=i._styles||(i._styles={});(n?function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,o=0;o<i.length;o++){var r=i[o],a=r.media||"default",s=t[a];s?s.ids.indexOf(r.id)<0&&(s.ids.push(r.id),s.css+="\n"+r.css):t[a]={ids:[r.id],css:r.css,media:r.media}}}:function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,o=0;o<i.length;o++){var r=i[o];t[r.id]={ids:[r.id],css:r.css,media:r.media}}})(o,e=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}(t,e))}}function r(t){var e="";for(var n in t){var i=t[n];e+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return i})},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.vue-js-modal-transition--overlay-enter-active,\n.vue-js-modal-transition--overlay-leave-active {\n  transition: all 50ms;\n}\n.vue-js-modal-transition--overlay-enter,\n.vue-js-modal-transition--overlay-leave-active {\n  opacity: 0;\n}\n.vue-js-modal-transition--modal-enter-active,\n.vue-js-modal-transition--modal-leave-active {\n  transition: all 400ms;\n}\n.vue-js-modal-transition--modal-enter,\n.vue-js-modal-transition--modal-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.vue-js-modal-transition--default-enter-active,\n.vue-js-modal-transition--default-leave-active {\n  transition: all 2ms;\n}\n.vue-js-modal-transition--default-enter,\n.vue-js-modal-transition--default-leave-active {\n  opacity: 0;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n",""])},function(t,e,n){"use strict";n.r(e),n.d(e,"getModalsContainer",function(){return ut});function i(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.guaranteedOverlayTransition},on:{"before-enter":e.beforeOverlayTransitionEnter,"after-enter":e.afterOverlayTransitionEnter,"after-leave":e.afterOverlayTransitionLeave}},[e.visibility.overlay?n("div",{ref:"overlay",class:e.overlayClass,attrs:{"aria-expanded":e.visibility.overlay.toString(),"data-modal":e.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.onBackgroundClick(t)},touchstart:function(t){return t.target!==t.currentTarget?null:e.onBackgroundClick(t)}}},[n("div",{staticClass:"v--modal-top-right"},[e._t("top-right")],2),e._v(" "),n("transition",{attrs:{name:e.guaranteedModalTransition},on:{"after-enter":e.afterModalTransitionEnter,"before-leave":e.beforeModalTransitionLeave,"after-leave":e.afterModalTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight},on:{resize:e.handleModalResize}}):e._e()],2):e._e()])],1)]):e._e()])}function o(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[])}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o._withStripped=i._withStripped=!0;function c(t,e,n){return n<t?t:e<n?e:n}function s(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}function u(t){return t.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var n=a(e,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}({},t,r({},n[0],n[1]))},{})}var d=function(t){var e=0<arguments.length&&void 0!==t?t:0;return function(){return(e++).toString()}}();function l(t,e,n,i,o,r,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var h=l({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(t){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement;if(e){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop,o=Math.min(s(),this.maxWidth),r=Math.min(window.innerHeight,this.maxHeight);n=c(this.minWidth,o,n),i=c(this.minHeight,r,i),this.size={width:n,height:i},e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size})}}}},o,[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},null,"0e5a7cbe");h.options.__file="src/Resizer.vue";var f=h.exports;function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=d();return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){v(e,t,n[t])})}return e}({timestamp:Date.now(),id:e,canceled:!1},t)};function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){switch(m(t)){case"number":return{type:"px",value:t};case"string":return function(e){if("auto"===e)return{type:e,value:0};var t=_.find(function(t){return t.regexp.test(e)});return t?{type:t.name,value:parseFloat(e)}:{type:"",value:e}}(t);default:return{type:"",value:t}}}function g(t){if("string"!=typeof t)return 0<=t;var e=b(t);return("%"===e.type||"px"===e.type)&&0<e.value}var y="[-+]?[0-9]*.?[0-9]+",_=[{name:"px",regexp:new RegExp("^".concat(y,"px$"))},{name:"%",regexp:new RegExp("^".concat(y,"%$"))},{name:"px",regexp:new RegExp("^".concat(y,"$"))}],w=function(){if("undefined"!=typeof Map)return Map;function i(t,n){var i=-1;return t.some(function(t,e){return t[0]===n&&(i=e,!0)}),i}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=i(this.__entries__,t),n=this.__entries__[e];return n&&n[1]},t.prototype.set=function(t,e){var n=i(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},t.prototype.delete=function(t){var e=this.__entries__,n=i(e,t);~n&&e.splice(n,1)},t.prototype.has=function(t){return!!~i(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];t.call(e,o[1],o[0])}},t;function t(){this.__entries__=[]}}(),x="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,E="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),O="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(E):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},T=2;var j=["top","right","bottom","left","width","height","size","weight"],S="undefined"!=typeof MutationObserver,M=(k.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},k.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},k.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},k.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),0<t.length},k.prototype.connect_=function(){x&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),S?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},k.prototype.disconnect_=function(){x&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},k.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;j.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},k.getInstance=function(){return this.instance_||(this.instance_=new k),this.instance_},k.instance_=null,k);function k(){function t(){r&&(r=!1,i()),a&&n()}function e(){O(t)}function n(){var t=Date.now();if(r){if(t-s<T)return;a=!0}else a=!(r=!0),setTimeout(e,o);s=t}var i,o,r,a,s;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(i=this.refresh.bind(this),a=r=!(o=20),s=0,n)}var z=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},L=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||E},C=N(0,0,0,0);function A(t){return parseFloat(t)||0}function $(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.reduce(function(t,e){return t+A(n["border-"+e+"-width"])},0)}function R(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return C;var i,o=L(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=t["padding-"+o];e[o]=A(r)}return e}(o),a=r.left+r.right,s=r.top+r.bottom,u=A(o.width),l=A(o.height);if("border-box"===o.boxSizing&&(Math.round(u+a)!==e&&(u-=$(o,"left","right")+a),Math.round(l+s)!==n&&(l-=$(o,"top","bottom")+s)),(i=t)!==L(i).document.documentElement){var c=Math.round(u+a)-e,d=Math.round(l+s)-n;1!==Math.abs(c)&&(u-=c),1!==Math.abs(d)&&(l-=d)}return N(r.left,r.top,u,l)}var H="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof L(t).SVGGraphicsElement}:function(t){return t instanceof L(t).SVGElement&&"function"==typeof t.getBBox};function P(t){return x?H(t)?N(0,0,(e=t.getBBox()).width,e.height):R(t):C;var e}function N(t,e,n,i){return{x:t,y:e,width:n,height:i}}var W=(D.prototype.isActive=function(){var t=P(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},D.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},D);function D(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=N(0,0,0,0),this.target=t}var I=function(t,e){var n,i,o,r,a,s,u,l=(i=(n=e).x,o=n.y,r=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),z(u,{x:i,y:o,width:r,height:a,top:o,right:i+r,bottom:a+o,left:i}),u);z(this,{target:t,contentRect:l})},B=(V.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof L(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new W(t)),this.controller_.addObserver(this),this.controller_.refresh())}},V.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof L(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},V.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},V.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},V.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new I(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},V.prototype.clearActive=function(){this.activeObservations_.splice(0)},V.prototype.hasActive=function(){return 0<this.activeObservations_.length},V);function V(t,e,n){if(this.activeObservations_=[],this.observations_=new w,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}var X=new("undefined"!=typeof WeakMap?WeakMap:w),U=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=M.getInstance(),i=new B(e,n,this);X.set(this,i)};["observe","unobserve","disconnect"].forEach(function(e){U.prototype[e]=function(){var t;return(t=X.get(this))[e].apply(t,arguments)}});var F=void 0!==E.ResizeObserver?E.ResizeObserver:U,G=window&&window.ResizeObserver?ResizeObserver:F;function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var K="vue-js-modal-transition--default";var J=l({name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0,validator:function(t){return 0<t&&console.warn('[vue-js-modal] "delay" property is deprecated.'),!0}},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"vue-js-modal-transition--overlay"},transition:{type:String,default:"vue-js-modal-transition--modal"},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:g},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||g(t)}},pivotX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},pivotY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:f},data:function(){return{visible:!1,isVisibilityChanging:!1,visibility:{modal:!1,overlay:!1},shiftLeft:0,shiftTop:0,modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0,mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){ct.event.$on("toggle",this.onToggle),window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},mounted:function(){var n=this;this.resizeObserver=new G(function(t){if(0<t.length){var e=q(t,1)[0];n.modal.renderedHeight=e.contentRect.height}})},beforeDestroy:function(){ct.event.$off("toggle",this.onToggle),window.removeEventListener("resize",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{guaranteedOverlayTransition:function(){return this.overlayTransition||K},guaranteedModalTransition:function(){return this.transition||K},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.pivotX,r=this.pivotY,a=e-this.trueModalWidth,s=t-this.trueModalHeight,u=i+r*s;return{left:parseInt(c(0,a,n+o*a)),top:parseInt(c(0,s,u))}},trueModalWidth:function(){var t=this.viewportWidth,e=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===e.widthType?t/100*e.width:e.width,a=Math.max(i,Math.min(t,o));return n?c(i,a,r):r},trueModalHeight:function(){var t=this.viewportHeight,e=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,r=this.maxHeight,a="%"===e.heightType?t/100*e.height:e.height;if(n)return this.modal.renderedHeight;var s=Math.max(o,Math.min(t,r));return i?c(o,s,a):a},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},stylesProp:function(){return"string"==typeof this.styles?u(this.styles):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}]}},watch:{visible:function(t){t?this.visibility.overlay=!0:this.visibility.modal=!1}},methods:{beforeOverlayTransitionEnter:function(){this.isVisibilityChanging=!0},afterOverlayTransitionEnter:function(){this.visibility.modal=!0},afterOverlayTransitionLeave:function(){this.isVisibilityChanging=!1;var t=this.createModalEvent({state:"closed"});this.$emit("closed",t)},afterModalTransitionEnter:function(){this.isVisibilityChanging=!1,this.resizeObserver.observe(this.$refs.modal);var t=this.createModalEvent({state:"opened"});this.$emit("opened",t)},beforeModalTransitionLeave:function(){this.isVisibilityChanging=!0,this.resizeObserver.unobserve(this.$refs.modal)},afterModalTransitionLeave:function(){this.visibility.overlay=!1},onToggle:function(t,e,n){if(this.name===t){var i=void 0===e?!this.visible:e;this.toggle(i,n)}},setInitialSize:function(){var t=this.modal,e=b(this.width),n=b(this.height);t.width=e.value,t.widthType=e.type,t.height=n.value,t.heightType=n.type},onEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.viewportWidth=s(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(t){var e=0<arguments.length&&void 0!==t?t:{};return new p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){Y(e,t,n[t])})}return e}({name:this.name,ref:this.$refs.modal||null},e))},handleModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height;var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},toggle:function(t,e){var n=this.reset,i=this.scrollable,o=this.visible;if(o!==t){var r=!o,a=o?"before-close":"before-open";o&&("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shiftLeft=0,this.shiftTop=0),i&&document.body.classList.add("v--modal-block-scroll")),r&&i&&document.body.classList.remove("v--modal-block-scroll");var s=!1,u=this.createModalEvent({stop:function(){s=!0},state:t,params:e});this.$emit(a,u),s||(this.visible=t)}},getDraggableElement:function(){var t="string"!=typeof this.draggable?".v--modal-box":this.draggable;return t?this.$refs.overlay.querySelector(t):null},onBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var r=this;if(this.draggable){var t=this.getDraggableElement();if(t){var a=0,s=0,u=0,l=0,c=function(t){return t.touches&&0<t.touches.length?t.touches[0]:t},e=function(t){var e=t.target;if(!e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName&&"SELECT"!==e.nodeName){var n=c(t),i=n.clientX,o=n.clientY;document.addEventListener("mousemove",d),document.addEventListener("touchmove",d),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=i,s=o,u=r.shiftLeft,l=r.shiftTop}},d=function(t){var e=c(t),n=e.clientX,i=e.clientY;r.shiftLeft=u+n-a,r.shiftTop=l+i-s,t.preventDefault()},h=function t(e){r.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",d),document.removeEventListener("touchmove",d),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}}},ensureShiftInWindowBounds:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.pivotX,r=this.pivotY,a=e-this.trueModalWidth,s=t-this.trueModalHeight,u=n+o*a,l=i+r*s;this.shiftLeft-=u-c(0,a,u),this.shiftTop-=l-c(0,s,l)}}},i,[],!1,function(t){var e=n(7);e.__inject__&&e.__inject__(t)},null,"536170a6");J.options.__file="src/Modal.vue";function Q(){var n=this,t=n.$createElement,i=n._self._c||t;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(t){n.$emit("opened",t)},closed:function(t){n.$emit("closed",t)}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(t,e){return i("button",{key:e,class:t.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(t.title)},on:{click:function(t){t.stopPropagation(),n.click(e,t)}}},[n._v("\n      "+n._s(t.title)+"\n    ")])})):i("div",{staticClass:"vue-dialog-buttons-none"})])}var Z=J.exports;Q._withStripped=!0;var tt=l({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){window.addEventListener("keyup",this.onKeyUp),this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",t)},click:function(t,e,n){var i=2<arguments.length&&void 0!==n?n:"click",o=this.buttons[t];o&&"function"==typeof o.handler?o.handler(t,e,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(t){if(13===t.which&&0<this.buttons.length){var e=1===this.buttons.length?0:this.buttons.findIndex(function(t){return t.default});-1!==e&&this.click(e,t,"keypress")}}}},Q,[],!1,function(t){var e=n(9);e.__inject__&&e.__inject__(t)},null,"0c67a010");tt.options.__file="src/Dialog.vue";function et(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(e){return i("modal",n._g(n._b({key:e.id,on:{closed:function(t){n.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[i(e.component,n._g(n._b({tag:"component",on:{close:function(t){n.$modal.hide(e.modalAttrs.name)}}},"component",e.componentAttrs,!1),n.$listeners))],1)}))}var nt=tt.exports;function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}et._withStripped=!0;var ot=l({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(t,e,n,i){var o=this,r=1<arguments.length&&void 0!==e?e:{},a=2<arguments.length&&void 0!==n?n:{},s=3<arguments.length&&void 0!==i?i:{},u=d(),l=a.name||"_dynamic_modal_"+u;this.modals.push({id:u,modalAttrs:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){it(e,t,n[t])})}return e}({},a,{name:l}),modalListeners:s,component:t,componentAttrs:r}),this.$nextTick(function(){o.$modal.show(l)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},et,[],!1,null,null,"431cd08a");ot.options.__file="src/ModalsContainer.vue";var rt=ot.exports;function at(t){return(at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ut=function(t,e,n){if(!n._dynamicContainer&&e.injectModalsContainer){var i=(o=document.createElement("div"),document.body.appendChild(o),o);new t({parent:n,render:function(t){return t(rt)}}).$mount(i)}var o;return n._dynamicContainer},lt={install:function(a,t){var s=1<arguments.length&&void 0!==t?t:{};if(!this.installed){this.installed=!0,this.event=new a,this.rootInstance=null;var e=s.componentName||"Modal",u=s.dynamicDefaults||{},o=function(t,e,n,i){var o=n&&n.root?n.root:lt.rootInstance,r=ut(a,s,o);r?r.add(t,e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){st(e,t,n[t])})}return e}({},u,n),i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};a.prototype.$modal={show:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];switch(at(t)){case"string":return function(t,e){lt.event.$emit("toggle",t,!0,e)}.apply(void 0,[t].concat(n));case"object":case"function":return s.dynamic?o.apply(void 0,[t].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",t)}},hide:function(t,e){lt.event.$emit("toggle",t,!1,e)},toggle:function(t,e){lt.event.$emit("toggle",t,void 0,e)}},a.component(e,Z),s.dialog&&a.component("VDialog",nt),s.dynamic&&(a.component("ModalsContainer",rt),a.mixin({beforeMount:function(){null===lt.rootInstance&&(lt.rootInstance=this.$root)}}))}}},ct=e.default=lt}],o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=11);function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,i});