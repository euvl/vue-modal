!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(global,function(){return i={},o.m=n=[function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e),n.d(e,"getModalsContainer",function(){return ft});function i(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{class:e.containerClass},[n("transition",{attrs:{name:e.guaranteedOverlayTransition},on:{"before-enter":e.beforeOverlayTransitionEnter,"after-enter":e.afterOverlayTransitionEnter,"before-leave":e.beforeOverlayTransitionLeave,"after-leave":e.afterOverlayTransitionLeave}},[e.visibility.overlay?n("div",{staticClass:"vm--overlay",attrs:{"data-modal":e.name,"aria-expanded":e.visibility.overlay.toString()},on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.onOverlayClick(t)},touchstart:function(t){return t.target!==t.currentTarget?null:e.onOverlayClick(t)}}},[n("div",{staticClass:"vm--top-right-slot"},[e._t("top-right")],2)]):e._e()]),e._ssrNode(" "),n("transition",{attrs:{name:e.guaranteedModalTransition},on:{"before-enter":e.beforeModalTransitionEnter,"after-enter":e.afterModalTransitionEnter,"before-leave":e.beforeModalTransitionLeave,"after-leave":e.afterModalTransitionLeave}},[e.visibility.modal?n("div",{ref:"modal",class:e.modalClass,style:e.modalStyle,attrs:{"aria-expanded":e.visibility.modal.toString()}},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?n("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight},on:{resize:e.handleModalResize}}):e._e()],2):e._e()])],2):e._e()}function o(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[])}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o._withStripped=i._withStripped=!0;function l(t,e,n){return n<t?t:e<n?e:n}function a(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}function u(t){return t.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var n=s(e,2);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}({},t,r({},n[0],n[1]))},{})}function f(t){return t.touches&&0<t.touches.length?t.touches[0]:t}var d=function(t){var e=0<arguments.length&&void 0!==t?t:0;return function(){return(e++).toString()}}(),v=["INPUT","TEXTAREA","SELECT"];function c(t,e,n,i,o,r,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}var h=c({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return["vue-modal-resizer",{clicked:this.clicked}]}},methods:{start:function(t){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement;if(e){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop,o=Math.min(a(),this.maxWidth),r=Math.min(window.innerHeight,this.maxHeight);n=l(this.minWidth,o,n),i=l(this.minHeight,r,i),this.size={width:n,height:i},e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size})}}}},o,[],!1,function(t){var e=n(3);e.__inject__&&e.__inject__(t)},null,"0e5a7cbe");h.options.__file="src/Resizer.vue";var p=h.exports;var m=function t(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.timestamp=Date.now(),this.id=d(),Object.keys(n).forEach(function(t){e[t]=n[t]})};function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){switch(y(t)){case"number":return{type:"px",value:t};case"string":return function(e){if("auto"===e)return{type:e,value:0};var t=w.find(function(t){return t.regexp.test(e)});return t?{type:t.name,value:parseFloat(e)}:{type:"",value:e}}(t);default:return{type:"",value:t}}}function g(t){if("string"!=typeof t)return 0<=t;var e=b(t);return("%"===e.type||"px"===e.type)&&0<e.value}var _="[-+]?[0-9]*.?[0-9]+",w=[{name:"px",regexp:new RegExp("^".concat(_,"px$"))},{name:"%",regexp:new RegExp("^".concat(_,"%$"))},{name:"px",regexp:new RegExp("^".concat(_,"$"))}],E=function(){if("undefined"!=typeof Map)return Map;function i(t,n){var i=-1;return t.some(function(t,e){return t[0]===n&&(i=e,!0)}),i}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=i(this.__entries__,t),n=this.__entries__[e];return n&&n[1]},t.prototype.set=function(t,e){var n=i(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},t.prototype.delete=function(t){var e=this.__entries__,n=i(e,t);~n&&e.splice(n,1)},t.prototype.has=function(t){return!!~i(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];t.call(e,o[1],o[0])}},t;function t(){this.__entries__=[]}}(),T="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,O="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),S="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(O):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},x=2;var M=["top","right","bottom","left","width","height","size","weight"],L="undefined"!=typeof MutationObserver,j=($.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},$.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},$.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},$.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),0<t.length},$.prototype.connect_=function(){T&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),L?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},$.prototype.disconnect_=function(){T&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},$.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;M.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},$.getInstance=function(){return this.instance_||(this.instance_=new $),this.instance_},$.instance_=null,$);function $(){function t(){r&&(r=!1,i()),s&&n()}function e(){S(t)}function n(){var t=Date.now();if(r){if(t-a<x)return;s=!0}else s=!(r=!0),setTimeout(e,o);a=t}var i,o,r,s,a;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(i=this.refresh.bind(this),s=r=!(o=20),a=0,n)}var C=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},z=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||O},A=P(0,0,0,0);function k(t){return parseFloat(t)||0}function R(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.reduce(function(t,e){return t+k(n["border-"+e+"-width"])},0)}function H(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return A;var i,o=z(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=t["padding-"+o];e[o]=k(r)}return e}(o),s=r.left+r.right,a=r.top+r.bottom,u=k(o.width),c=k(o.height);if("border-box"===o.boxSizing&&(Math.round(u+s)!==e&&(u-=R(o,"left","right")+s),Math.round(c+a)!==n&&(c-=R(o,"top","bottom")+a)),(i=t)!==z(i).document.documentElement){var l=Math.round(u+s)-e,d=Math.round(c+a)-n;1!==Math.abs(l)&&(u-=l),1!==Math.abs(d)&&(c-=d)}return P(r.left,r.top,u,c)}var W="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof z(t).SVGGraphicsElement}:function(t){return t instanceof z(t).SVGElement&&"function"==typeof t.getBBox};function N(t){return T?W(t)?P(0,0,(e=t.getBBox()).width,e.height):H(t):A;var e}function P(t,e,n,i){return{x:t,y:e,width:n,height:i}}var D=(I.prototype.isActive=function(){var t=N(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},I.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},I);function I(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=P(0,0,0,0),this.target=t}var B=function(t,e){var n,i,o,r,s,a,u,c=(i=(n=e).x,o=n.y,r=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(a.prototype),C(u,{x:i,y:o,width:r,height:s,top:o,right:i+r,bottom:s+o,left:i}),u);C(this,{target:t,contentRect:c})},X=(F.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof z(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new D(t)),this.controller_.addObserver(this),this.controller_.refresh())}},F.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof z(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},F.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},F.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},F.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new B(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},F.prototype.clearActive=function(){this.activeObservations_.splice(0)},F.prototype.hasActive=function(){return 0<this.activeObservations_.length},F);function F(t,e,n){if(this.activeObservations_=[],this.observations_=new E,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}var V=new("undefined"!=typeof WeakMap?WeakMap:E),G=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=j.getInstance(),i=new X(e,n,this);V.set(this,i)};["observe","unobserve","disconnect"].forEach(function(e){G.prototype[e]=function(){var t;return(t=V.get(this))[e].apply(t,arguments)}});var U=void 0!==O.ResizeObserver?O.ResizeObserver:G,q=window&&window.ResizeObserver?ResizeObserver:U;function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J="vm-transition--default",Q="enter",Z="entering",tt="leave",et="leavng";var nt=c({name:"VueJsModal",props:{name:{required:!0,type:String},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"vm-transition--overlay"},transition:{type:String,default:"vm-transition--modal"},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:g},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||g(t)}},pivotX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},pivotY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:p},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,shiftLeft:0,shiftTop:0,modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0}},created:function(){this.setInitialSize()},beforeMount:function(){pt.event.$on("toggle",this.onToggle),window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},mounted:function(){var n=this;this.resizeObserver=new q(function(t){if(0<t.length){var e=K(t,1)[0];n.modal.renderedHeight=e.contentRect.height}})},beforeDestroy:function(){pt.event.$off("toggle",this.onToggle),window.removeEventListener("resize",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp),this.scrollable&&document.body.classList.remove("vm__block-scroll")},computed:{hasTransitionFinished:function(){return this.visibility.modal===this.visibility.overlay},guaranteedOverlayTransition:function(){return this.overlayTransition||J},guaranteedModalTransition:function(){return this.transition||J},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.pivotX,r=this.pivotY,s=e-this.trueModalWidth,a=t-this.trueModalHeight,u=i+r*a;return{left:parseInt(l(0,s,n+o*s)),top:parseInt(l(0,a,u))}},trueModalWidth:function(){var t=this.viewportWidth,e=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===e.widthType?t/100*e.width:e.width;if(n){var s=Math.max(i,Math.min(t,o));return l(i,s,r)}return r},trueModalHeight:function(){var t=this.viewportHeight,e=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,r=this.maxHeight,s="%"===e.heightType?t/100*e.height:e.height;if(n)return this.modal.renderedHeight;if(i){var a=Math.max(o,Math.min(t,r));return l(o,a,s)}return s},containerClass:function(){return["vm--container",this.scrollable&&this.isAutoHeight&&"scrollable"]},modalClass:function(){return["vm--modal-box",this.classes]},stylesProp:function(){return"string"==typeof this.styles?u(this.styles):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}]},isComponentReadyToBeDestroyed:function(){return this.overlayTransitionState===tt&&this.modalTransitionState===tt}},watch:{isComponentReadyToBeDestroyed:function(t){t&&(this.visible=!1)}},methods:{startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},beforeOverlayTransitionEnter:function(){this.overlayTransitionState=Z},afterOverlayTransitionEnter:function(){this.overlayTransitionState=Q},beforeOverlayTransitionLeave:function(){this.overlayTransitionState=et},afterOverlayTransitionLeave:function(){this.overlayTransitionState=tt},beforeModalTransitionEnter:function(){var t=this;this.modalTransitionState=Z,this.$nextTick(function(){t.resizeObserver.observe(t.$refs.modal)})},afterModalTransitionEnter:function(){this.modalTransitionState=Q,this.addDraggableListeners();var t=this.createModalEvent({state:"opened"});this.$emit("opened",t)},beforeModalTransitionLeave:function(){this.modalTransitionState=et,this.resizeObserver.unobserve(this.$refs.modal)},afterModalTransitionLeave:function(){this.modalTransitionState=tt;var t=this.createModalEvent({state:"closed"});this.$emit("closed",t)},onToggle:function(t,e,n){if(this.name===t){var i=void 0===e?!this.visible:e;this.toggle(i,n)}},setInitialSize:function(){var t=this.modal,e=b(this.width),n=b(this.height);t.width=e.value,t.widthType=e.type,t.height=n.value,t.heightType=n.type},onEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.viewportWidth=a(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(t){var e=0<arguments.length&&void 0!==t?t:{};return new m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){Y(e,t,n[t])})}return e}({name:this.name,ref:this.$refs.modal||null},e))},handleModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height;var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},open:function(t){var e=this;"undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),this.reset&&(this.setInitialSize(),this.shiftLeft=0,this.shiftTop=0),this.scrollable&&document.body.classList.add("vm__block-scroll");var n=!1,i=this.createModalEvent({cancel:function(){n=!0},state:"before-open",params:t});this.$emit("before-open",i),n||(this.visible=!0,this.$nextTick(function(){e.startTransitionEnter()}))},close:function(t){this.scrollable&&document.body.classList.remove("vm__block-scroll");var e=!1,n=this.createModalEvent({cancel:function(){e=!0},state:"before-close",params:t});this.$emit("before-close",n),e||this.startTransitionLeave()},toggle:function(t,e){this.visible!==t&&(t?this.open(e):this.close(e))},getDraggableElement:function(){return!0===this.draggable?this.$refs.modal:"string"==typeof this.draggable?this.$refs.modal.querySelector(this.draggable):null},onOverlayClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var s=this;if(this.draggable){var t=this.getDraggableElement();if(t){var a=0,u=0,c=0,l=0,e=function(t){var e=t.target;if(!(n=e)||-1===v.indexOf(n.nodeName)){var n,i=f(t),o=i.clientX,r=i.clientY;document.addEventListener("mousemove",d),document.addEventListener("touchmove",d),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=o,u=r,c=s.shiftLeft,l=s.shiftTop}},d=function(t){var e=f(t),n=e.clientX,i=e.clientY;s.shiftLeft=c+n-a,s.shiftTop=l+i-u,t.preventDefault()},h=function t(e){s.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",d),document.removeEventListener("touchmove",d),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()};t.addEventListener("mousedown",e),t.addEventListener("touchstart",e)}}},ensureShiftInWindowBounds:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.pivotX,r=this.pivotY,s=e-this.trueModalWidth,a=t-this.trueModalHeight,u=n+o*s,c=i+r*a;this.shiftLeft-=u-l(0,s,u),this.shiftTop-=c-l(0,a,c)}}},i,[],!1,function(t){var e=n(4);e.__inject__&&e.__inject__(t)},null,"536170a6");nt.options.__file="src/Modal.vue";function it(){var n=this,t=n.$createElement,i=n._self._c||t;return i(n.$modal.context.componentName,{tag:"component",attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(t){n.$emit("opened",t)},closed:function(t){n.$emit("closed",t)}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(t,e){return i("button",{key:e,class:t.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(t.title)},on:{click:function(t){t.stopPropagation(),n.click(e,t)}}},[n._v("\n      "+n._s(t.title)+"\n    ")])})):i("div",{staticClass:"vue-dialog-buttons-none"})])}var ot=nt.exports;it._withStripped=!0;var rt=c({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){window.addEventListener("keyup",this.onKeyUp),this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",t)},click:function(t,e,n){var i=2<arguments.length&&void 0!==n?n:"click",o=this.buttons[t];o&&"function"==typeof o.handler?o.handler(t,e,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(t){if(13===t.which&&0<this.buttons.length){var e=1===this.buttons.length?0:this.buttons.findIndex(function(t){return t.default});-1!==e&&this.click(e,t,"keypress")}}}},it,[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},null,"0c67a010");rt.options.__file="src/Dialog.vue";function st(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(e){return i("modal",n._g(n._b({key:e.id,on:{closed:function(t){n.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[i(e.component,n._g(n._b({tag:"component",on:{close:function(t){n.$modal.hide(e.modalAttrs.name)}}},"component",e.componentAttrs,!1),n.$listeners))],1)}))}var at=rt.exports;function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}st._withStripped=!0;var ct=c({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(t,e,n,i){var o=this,r=1<arguments.length&&void 0!==e?e:{},s=2<arguments.length&&void 0!==n?n:{},a=3<arguments.length&&void 0!==i?i:{},u=d(),c=s.name||"_dynamic_modal_"+u;this.modals.push({id:u,modalAttrs:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){ut(e,t,n[t])})}return e}({},s,{name:c}),modalListeners:a,component:t,componentAttrs:r}),this.$nextTick(function(){o.$modal.show(c)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},st,[],!1,null,null,"431cd08a");ct.options.__file="src/ModalsContainer.vue";var lt=ct.exports;function dt(t){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ft=function(t,e,n){if(!n._dynamicContainer&&e.injectModalsContainer){var i=(o=document.createElement("div"),document.body.appendChild(o),o);new t({parent:n,render:function(t){return t(lt)}}).$mount(i)}var o;return n._dynamicContainer},vt={install:function(s,t){var a=1<arguments.length&&void 0!==t?t:{};if(!this.installed){this.installed=!0,this.event=new s,this.rootInstance=null;var e=a.componentName||"Modal",u=a.dynamicDefaults||{},o=function(t,e,n,i){var o=n&&n.root?n.root:vt.rootInstance,r=ft(s,a,o);r?r.add(t,e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(t){ht(e,t,n[t])})}return e}({},u,n),i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};s.prototype.$modal={get context(){return{componentName:e}},show:function(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];switch(dt(t)){case"string":return function(t,e){vt.event.$emit("toggle",t,!0,e)}.apply(void 0,[t].concat(n));case"object":case"function":return a.dynamic?o.apply(void 0,[t].concat(n)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",t)}},hide:function(t,e){vt.event.$emit("toggle",t,!1,e)},toggle:function(t,e){vt.event.$emit("toggle",t,void 0,e)}},s.component(e,ot),a.dialog&&s.component("VDialog",at),a.dynamic&&(s.component("ModalsContainer",lt),s.mixin({beforeMount:function(){null===vt.rootInstance&&(vt.rootInstance=this.$root)}}))}}},pt=e.default=vt}],o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=6);function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,i});