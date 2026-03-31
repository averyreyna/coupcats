var rd=Object.defineProperty;var od=(n,e,t)=>e in n?rd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var du=(n,e,t)=>od(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function id(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rl={exports:{}},ko={},jl={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),ad=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),fd=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),yu=Symbol.iterator;function md(n){return n===null||typeof n!="object"?null:(n=yu&&n[yu]||n["@@iterator"],typeof n=="function"?n:null)}var Dl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ol=Object.assign,Bl={};function Nt(n,e,t){this.props=n,this.context=e,this.refs=Bl,this.updater=t||Dl}Nt.prototype.isReactComponent={};Nt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Nt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function zl(){}zl.prototype=Nt.prototype;function pa(n,e,t){this.props=n,this.context=e,this.refs=Bl,this.updater=t||Dl}var fa=pa.prototype=new zl;fa.constructor=pa;Ol(fa,Nt.prototype);fa.isPureReactComponent=!0;var pu=Array.isArray,bl=Object.prototype.hasOwnProperty,ga={current:null},Il={key:!0,ref:!0,__self:!0,__source:!0};function Gl(n,e,t){var r,o={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)bl.call(e,r)&&!Il.hasOwnProperty(r)&&(o[r]=e[r]);var u=arguments.length-2;if(u===1)o.children=t;else if(1<u){for(var l=Array(u),d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}if(n&&n.defaultProps)for(r in u=n.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Cr,type:n,key:i,ref:a,props:o,_owner:ga.current}}function hd(n,e){return{$$typeof:Cr,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ma(n){return typeof n=="object"&&n!==null&&n.$$typeof===Cr}function Cd(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var fu=/\/+/g;function Wo(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Cd(""+n.key):e.toString(36)}function Ur(n,e,t,r,o){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Cr:case ad:a=!0}}if(a)return a=n,o=o(a),n=r===""?"."+Wo(a,0):r,pu(o)?(t="",n!=null&&(t=n.replace(fu,"$&/")+"/"),Ur(o,e,t,"",function(d){return d})):o!=null&&(ma(o)&&(o=hd(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(fu,"$&/")+"/")+n)),e.push(o)),1;if(a=0,r=r===""?".":r+":",pu(n))for(var u=0;u<n.length;u++){i=n[u];var l=r+Wo(i,u);a+=Ur(i,e,t,l,o)}else if(l=md(n),typeof l=="function")for(n=l.call(n),u=0;!(i=n.next()).done;)i=i.value,l=r+Wo(i,u++),a+=Ur(i,e,t,l,o);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(n,e,t){if(n==null)return n;var r=[],o=0;return Ur(n,r,"","",function(i){return e.call(t,i,o++)}),r}function vd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var gn={current:null},Yr={transition:null},Pd={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:ga};function Hl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:wr,forEach:function(n,e,t){wr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wr(n,function(){e++}),e},toArray:function(n){return wr(n,function(e){return e})||[]},only:function(n){if(!ma(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};j.Component=Nt;j.Fragment=ud;j.Profiler=sd;j.PureComponent=pa;j.StrictMode=ld;j.Suspense=pd;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd;j.act=Hl;j.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Ol({},n.props),o=n.key,i=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=ga.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var u=n.type.defaultProps;for(l in e)bl.call(e,l)&&!Il.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&u!==void 0?u[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Cr,type:n.type,key:o,ref:i,props:r,_owner:a}};j.createContext=function(n){return n={$$typeof:dd,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cd,_context:n},n.Consumer=n};j.createElement=Gl;j.createFactory=function(n){var e=Gl.bind(null,n);return e.type=n,e};j.createRef=function(){return{current:null}};j.forwardRef=function(n){return{$$typeof:yd,render:n}};j.isValidElement=ma;j.lazy=function(n){return{$$typeof:gd,_payload:{_status:-1,_result:n},_init:vd}};j.memo=function(n,e){return{$$typeof:fd,type:n,compare:e===void 0?null:e}};j.startTransition=function(n){var e=Yr.transition;Yr.transition={};try{n()}finally{Yr.transition=e}};j.unstable_act=Hl;j.useCallback=function(n,e){return gn.current.useCallback(n,e)};j.useContext=function(n){return gn.current.useContext(n)};j.useDebugValue=function(){};j.useDeferredValue=function(n){return gn.current.useDeferredValue(n)};j.useEffect=function(n,e){return gn.current.useEffect(n,e)};j.useId=function(){return gn.current.useId()};j.useImperativeHandle=function(n,e,t){return gn.current.useImperativeHandle(n,e,t)};j.useInsertionEffect=function(n,e){return gn.current.useInsertionEffect(n,e)};j.useLayoutEffect=function(n,e){return gn.current.useLayoutEffect(n,e)};j.useMemo=function(n,e){return gn.current.useMemo(n,e)};j.useReducer=function(n,e,t){return gn.current.useReducer(n,e,t)};j.useRef=function(n){return gn.current.useRef(n)};j.useState=function(n){return gn.current.useState(n)};j.useSyncExternalStore=function(n,e,t){return gn.current.useSyncExternalStore(n,e,t)};j.useTransition=function(){return gn.current.useTransition()};j.version="18.3.1";jl.exports=j;var C=jl.exports;const Fr=id(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=C,xd=Symbol.for("react.element"),wd=Symbol.for("react.fragment"),Fd=Object.prototype.hasOwnProperty,Ed=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ad={key:!0,ref:!0,__self:!0,__source:!0};function Ul(n,e,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Fd.call(e,r)&&!Ad.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:xd,type:n,key:i,ref:a,props:o,_owner:Ed.current}}ko.Fragment=wd;ko.jsx=Ul;ko.jsxs=Ul;Rl.exports=ko;var c=Rl.exports,Yl={exports:{}},Tn={},Wl={exports:{}},Ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,M){var L=F.length;F.push(M);n:for(;0<L;){var z=L-1>>>1,Z=F[z];if(0<o(Z,M))F[z]=M,F[L]=Z,L=z;else break n}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var M=F[0],L=F.pop();if(L!==M){F[0]=L;n:for(var z=0,Z=F.length,je=Z>>>1;z<je;){var J=2*(z+1)-1,An=F[J],bn=J+1,De=F[bn];if(0>o(An,L))bn<Z&&0>o(De,An)?(F[z]=De,F[bn]=L,z=bn):(F[z]=An,F[J]=L,z=J);else if(bn<Z&&0>o(De,L))F[z]=De,F[bn]=L,z=bn;else break n}}return M}function o(F,M){var L=F.sortIndex-M.sortIndex;return L!==0?L:F.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();n.unstable_now=function(){return a.now()-u}}var l=[],d=[],m=1,f=null,g=3,P=!1,h=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(F){for(var M=t(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=F)r(d),M.sortIndex=M.expirationTime,e(l,M);else break;M=t(d)}}function v(F){if(x=!1,p(F),!h)if(t(l)!==null)h=!0,hn(w);else{var M=t(d);M!==null&&Cn(v,M.startTime-F)}}function w(F,M){h=!1,x&&(x=!1,y(N),N=-1),P=!0;var L=g;try{for(p(M),f=t(l);f!==null&&(!(f.expirationTime>M)||F&&!En());){var z=f.callback;if(typeof z=="function"){f.callback=null,g=f.priorityLevel;var Z=z(f.expirationTime<=M);M=n.unstable_now(),typeof Z=="function"?f.callback=Z:f===t(l)&&r(l),p(M)}else r(l);f=t(l)}if(f!==null)var je=!0;else{var J=t(d);J!==null&&Cn(v,J.startTime-M),je=!1}return je}finally{f=null,g=L,P=!1}}var A=!1,V=null,N=-1,H=5,_=-1;function En(){return!(n.unstable_now()-_<H)}function _e(){if(V!==null){var F=n.unstable_now();_=F;var M=!0;try{M=V(!0,F)}finally{M?Re():(A=!1,V=null)}}else A=!1}var Re;if(typeof s=="function")Re=function(){s(_e)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,nn=T.port2;T.port1.onmessage=_e,Re=function(){nn.postMessage(null)}}else Re=function(){E(_e,0)};function hn(F){V=F,A||(A=!0,Re())}function Cn(F,M){N=E(function(){F(n.unstable_now())},M)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){h||P||(h=!0,hn(w))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var L=g;g=M;try{return F()}finally{g=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,M){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var L=g;g=F;try{return M()}finally{g=L}},n.unstable_scheduleCallback=function(F,M,L){var z=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?z+L:z):L=z,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,F={id:m++,callback:M,priorityLevel:F,startTime:L,expirationTime:Z,sortIndex:-1},L>z?(F.sortIndex=L,e(d,F),t(l)===null&&F===t(d)&&(x?(y(N),N=-1):x=!0,Cn(v,L-z))):(F.sortIndex=Z,e(l,F),h||P||(h=!0,hn(w))),F},n.unstable_shouldYield=En,n.unstable_wrapCallback=function(F){var M=g;return function(){var L=g;g=M;try{return F.apply(this,arguments)}finally{g=L}}}})(Ql);Wl.exports=Ql;var Vd=Wl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=C,Mn=Vd;function S(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $l=new Set,er={};function Je(n,e){St(n,e),St(n+"Capture",e)}function St(n,e){for(er[n]=e,n=0;n<e.length;n++)$l.add(e[n])}var ae=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=Object.prototype.hasOwnProperty,Nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},mu={};function Md(n){return Ci.call(mu,n)?!0:Ci.call(gu,n)?!1:Nd.test(n)?mu[n]=!0:(gu[n]=!0,!1)}function Td(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Ld(n,e,t,r){if(e===null||typeof e>"u"||Td(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(n,e,t,r,o,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ln[e]=new mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function Ca(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ha,Ca);ln[e]=new mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ha,Ca);ln[e]=new mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ha,Ca);ln[e]=new mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new mn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function va(n,e,t,r){var o=ln.hasOwnProperty(e)?ln[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ld(e,t,o,r)&&(t=null),r||o===null?Md(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):o.mustUseProperty?n[o.propertyName]=t===null?o.type===3?!1:"":t:(e=o.attributeName,r=o.attributeNamespace,t===null?n.removeAttribute(e):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var ce=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),rt=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),Pa=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),Kl=Symbol.for("react.provider"),Zl=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),Pi=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),Jl=Symbol.for("react.offscreen"),hu=Symbol.iterator;function _t(n){return n===null||typeof n!="object"?null:(n=hu&&n[hu]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,Qo;function Gt(n){if(Qo===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Qo=e&&e[1]||""}return`
`+Qo+n}var $o=!1;function Ko(n,e){if(!n||$o)return"";$o=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(n,[],e)}else{try{e.call()}catch(d){r=d}n.call(e.prototype)}else{try{throw Error()}catch(d){r=d}n()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,u=i.length-1;1<=a&&0<=u&&o[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||o[a]!==i[u]){var l=`
`+o[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=u);break}}}finally{$o=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Gt(n):""}function _d(n){switch(n.tag){case 5:return Gt(n.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 2:case 15:return n=Ko(n.type,!1),n;case 11:return n=Ko(n.type.render,!1),n;case 1:return n=Ko(n.type,!0),n;default:return""}}function xi(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ot:return"Fragment";case rt:return"Portal";case vi:return"Profiler";case Pa:return"StrictMode";case Pi:return"Suspense";case Si:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Zl:return(n.displayName||"Context")+".Consumer";case Kl:return(n._context.displayName||"Context")+".Provider";case Sa:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xa:return e=n.displayName||null,e!==null?e:xi(n.type)||"Memo";case pe:e=n._payload,n=n._init;try{return xi(n(e))}catch{}}return null}function Rd(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(e);case 8:return e===Pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ke(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xl(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jd(n){var e=Xl(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ar(n){n._valueTracker||(n._valueTracker=jd(n))}function ql(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Xl(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function to(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,e){var t=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Cu(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ke(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ns(n,e){e=e.checked,e!=null&&va(n,"checked",e,!1)}function Fi(n,e){ns(n,e);var t=ke(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ei(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ei(n,e.type,ke(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vu(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ei(n,e,t){(e!=="number"||to(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ht=Array.isArray;function gt(n,e,t,r){if(n=n.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<n.length;t++)o=e.hasOwnProperty("$"+n[t].value),n[t].selected!==o&&(n[t].selected=o),o&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ke(t),e=null,o=0;o<n.length;o++){if(n[o].value===t){n[o].selected=!0,r&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function Ai(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pu(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(S(92));if(Ht(t)){if(1<t.length)throw Error(S(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ke(t)}}function es(n,e){var t=ke(e.value),r=ke(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Su(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ts(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ts(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,rs=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,o){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,o)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function tr(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dd=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(n){Dd.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wt[e]=Wt[n]})});function os(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wt.hasOwnProperty(n)&&Wt[n]?(""+e).trim():e+"px"}function is(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=os(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,o):n[t]=o}}var Od=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(n,e){if(e){if(Od[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ni(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function wa(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ti=null,mt=null,ht=null;function xu(n){if(n=Sr(n)){if(typeof Ti!="function")throw Error(S(280));var e=n.stateNode;e&&(e=_o(e),Ti(n.stateNode,n.type,e))}}function as(n){mt?ht?ht.push(n):ht=[n]:mt=n}function us(){if(mt){var n=mt,e=ht;if(ht=mt=null,xu(n),e)for(n=0;n<e.length;n++)xu(e[n])}}function ls(n,e){return n(e)}function ss(){}var Zo=!1;function cs(n,e,t){if(Zo)return n(e,t);Zo=!0;try{return ls(n,e,t)}finally{Zo=!1,(mt!==null||ht!==null)&&(ss(),us())}}function rr(n,e){var t=n.stateNode;if(t===null)return null;var r=_o(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(S(231,e,typeof t));return t}var Li=!1;if(ae)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{Li=!1}function Bd(n,e,t,r,o,i,a,u,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(t,d)}catch(m){this.onError(m)}}var Qt=!1,ro=null,oo=!1,_i=null,zd={onError:function(n){Qt=!0,ro=n}};function bd(n,e,t,r,o,i,a,u,l){Qt=!1,ro=null,Bd.apply(zd,arguments)}function Id(n,e,t,r,o,i,a,u,l){if(bd.apply(this,arguments),Qt){if(Qt){var d=ro;Qt=!1,ro=null}else throw Error(S(198));oo||(oo=!0,_i=d)}}function Xe(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ds(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function wu(n){if(Xe(n)!==n)throw Error(S(188))}function Gd(n){var e=n.alternate;if(!e){if(e=Xe(n),e===null)throw Error(S(188));return e!==n?null:n}for(var t=n,r=e;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return wu(o),n;if(i===r)return wu(o),e;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,u=o.child;u;){if(u===t){a=!0,t=o,r=i;break}if(u===r){a=!0,r=o,t=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===t){a=!0,t=i,r=o;break}if(u===r){a=!0,r=i,t=o;break}u=u.sibling}if(!a)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?n:e}function ys(n){return n=Gd(n),n!==null?ps(n):null}function ps(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ps(n);if(e!==null)return e;n=n.sibling}return null}var fs=Mn.unstable_scheduleCallback,Fu=Mn.unstable_cancelCallback,Hd=Mn.unstable_shouldYield,Ud=Mn.unstable_requestPaint,X=Mn.unstable_now,Yd=Mn.unstable_getCurrentPriorityLevel,Fa=Mn.unstable_ImmediatePriority,gs=Mn.unstable_UserBlockingPriority,io=Mn.unstable_NormalPriority,Wd=Mn.unstable_LowPriority,ms=Mn.unstable_IdlePriority,No=null,Xn=null;function Qd(n){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(No,n,void 0,(n.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Zd,$d=Math.log,Kd=Math.LN2;function Zd(n){return n>>>=0,n===0?32:31-($d(n)/Kd|0)|0}var kr=64,Nr=4194304;function Ut(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ao(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,o=n.suspendedLanes,i=n.pingedLanes,a=t&268435455;if(a!==0){var u=a&~o;u!==0?r=Ut(u):(i&=a,i!==0&&(r=Ut(i)))}else a=t&~o,a!==0?r=Ut(a):i!==0&&(r=Ut(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Yn(e),o=1<<t,r|=n[t],e&=~o;return r}function Jd(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,o=n.expirationTimes,i=n.pendingLanes;0<i;){var a=31-Yn(i),u=1<<a,l=o[a];l===-1?(!(u&t)||u&r)&&(o[a]=Jd(u,e)):l<=e&&(n.expiredLanes|=u),i&=~u}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function hs(){var n=kr;return kr<<=1,!(kr&4194240)&&(kr=64),n}function Jo(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Yn(e),n[e]=t}function qd(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var o=31-Yn(t),i=1<<o;e[o]=0,r[o]=-1,n[o]=-1,t&=~i}}function Ea(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Yn(t),o=1<<r;o&e|n[r]&e&&(n[r]|=e),t&=~o}}var B=0;function Cs(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var vs,Aa,Ps,Ss,xs,ji=!1,Mr=[],Pe=null,Se=null,xe=null,or=new Map,ir=new Map,ge=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(n,e){switch(n){case"focusin":case"focusout":Pe=null;break;case"dragenter":case"dragleave":Se=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":or.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(e.pointerId)}}function jt(n,e,t,r,o,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=Sr(e),e!==null&&Aa(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function ey(n,e,t,r,o){switch(e){case"focusin":return Pe=jt(Pe,n,e,t,r,o),!0;case"dragenter":return Se=jt(Se,n,e,t,r,o),!0;case"mouseover":return xe=jt(xe,n,e,t,r,o),!0;case"pointerover":var i=o.pointerId;return or.set(i,jt(or.get(i)||null,n,e,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ir.set(i,jt(ir.get(i)||null,n,e,t,r,o)),!0}return!1}function ws(n){var e=Ie(n.target);if(e!==null){var t=Xe(e);if(t!==null){if(e=t.tag,e===13){if(e=ds(t),e!==null){n.blockedOn=e,xs(n.priority,function(){Ps(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Di(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Mi=r,t.target.dispatchEvent(r),Mi=null}else return e=Sr(t),e!==null&&Aa(e),n.blockedOn=t,!1;e.shift()}return!0}function Au(n,e,t){Wr(n)&&t.delete(e)}function ty(){ji=!1,Pe!==null&&Wr(Pe)&&(Pe=null),Se!==null&&Wr(Se)&&(Se=null),xe!==null&&Wr(xe)&&(xe=null),or.forEach(Au),ir.forEach(Au)}function Dt(n,e){n.blockedOn===e&&(n.blockedOn=null,ji||(ji=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,ty)))}function ar(n){function e(o){return Dt(o,n)}if(0<Mr.length){Dt(Mr[0],n);for(var t=1;t<Mr.length;t++){var r=Mr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Pe!==null&&Dt(Pe,n),Se!==null&&Dt(Se,n),xe!==null&&Dt(xe,n),or.forEach(e),ir.forEach(e),t=0;t<ge.length;t++)r=ge[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ge.length&&(t=ge[0],t.blockedOn===null);)ws(t),t.blockedOn===null&&ge.shift()}var Ct=ce.ReactCurrentBatchConfig,uo=!0;function ry(n,e,t,r){var o=B,i=Ct.transition;Ct.transition=null;try{B=1,Va(n,e,t,r)}finally{B=o,Ct.transition=i}}function oy(n,e,t,r){var o=B,i=Ct.transition;Ct.transition=null;try{B=4,Va(n,e,t,r)}finally{B=o,Ct.transition=i}}function Va(n,e,t,r){if(uo){var o=Di(n,e,t,r);if(o===null)ui(n,e,r,lo,t),Eu(n,r);else if(ey(o,n,e,t,r))r.stopPropagation();else if(Eu(n,r),e&4&&-1<ny.indexOf(n)){for(;o!==null;){var i=Sr(o);if(i!==null&&vs(i),i=Di(n,e,t,r),i===null&&ui(n,e,r,lo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ui(n,e,r,null,t)}}var lo=null;function Di(n,e,t,r){if(lo=null,n=wa(r),n=Ie(n),n!==null)if(e=Xe(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ds(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return lo=n,null}function Fs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yd()){case Fa:return 1;case gs:return 4;case io:case Wd:return 16;case ms:return 536870912;default:return 16}default:return 16}}var he=null,ka=null,Qr=null;function Es(){if(Qr)return Qr;var n,e=ka,t=e.length,r,o="value"in he?he.value:he.textContent,i=o.length;for(n=0;n<t&&e[n]===o[n];n++);var a=t-n;for(r=1;r<=a&&e[t-r]===o[i-r];r++);return Qr=o.slice(n,1<r?1-r:void 0)}function $r(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Tr(){return!0}function Vu(){return!1}function Ln(n){function e(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tr:Vu,this.isPropagationStopped=Vu,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),e}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Ln(Mt),Pr=Q({},Mt,{view:0,detail:0}),iy=Ln(Pr),Xo,qo,Ot,Mo=Q({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ot&&(Ot&&n.type==="mousemove"?(Xo=n.screenX-Ot.screenX,qo=n.screenY-Ot.screenY):qo=Xo=0,Ot=n),Xo)},movementY:function(n){return"movementY"in n?n.movementY:qo}}),ku=Ln(Mo),ay=Q({},Mo,{dataTransfer:0}),uy=Ln(ay),ly=Q({},Pr,{relatedTarget:0}),ni=Ln(ly),sy=Q({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Ln(sy),dy=Q({},Mt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yy=Ln(dy),py=Q({},Mt,{data:0}),Nu=Ln(py),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=my[n])?!!e[n]:!1}function Ma(){return hy}var Cy=Q({},Pr,{key:function(n){if(n.key){var e=fy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$r(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(n){return n.type==="keypress"?$r(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$r(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vy=Ln(Cy),Py=Q({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Ln(Py),Sy=Q({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),xy=Ln(Sy),wy=Q({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Ln(wy),Ey=Q({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Ln(Ey),Vy=[9,13,27,32],Ta=ae&&"CompositionEvent"in window,$t=null;ae&&"documentMode"in document&&($t=document.documentMode);var ky=ae&&"TextEvent"in window&&!$t,As=ae&&(!Ta||$t&&8<$t&&11>=$t),Tu=" ",Lu=!1;function Vs(n,e){switch(n){case"keyup":return Vy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var it=!1;function Ny(n,e){switch(n){case"compositionend":return ks(e);case"keypress":return e.which!==32?null:(Lu=!0,Tu);case"textInput":return n=e.data,n===Tu&&Lu?null:n;default:return null}}function My(n,e){if(it)return n==="compositionend"||!Ta&&Vs(n,e)?(n=Es(),Qr=ka=he=null,it=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return As&&e.locale!=="ko"?null:e.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ty[n.type]:e==="textarea"}function Ns(n,e,t,r){as(r),e=so(e,"onChange"),0<e.length&&(t=new Na("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Kt=null,ur=null;function Ly(n){bs(n,0)}function To(n){var e=lt(n);if(ql(e))return n}function _y(n,e){if(n==="change")return e}var Ms=!1;if(ae){var ei;if(ae){var ti="oninput"in document;if(!ti){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),ti=typeof Ru.oninput=="function"}ei=ti}else ei=!1;Ms=ei&&(!document.documentMode||9<document.documentMode)}function ju(){Kt&&(Kt.detachEvent("onpropertychange",Ts),ur=Kt=null)}function Ts(n){if(n.propertyName==="value"&&To(ur)){var e=[];Ns(e,ur,n,wa(n)),cs(Ly,e)}}function Ry(n,e,t){n==="focusin"?(ju(),Kt=e,ur=t,Kt.attachEvent("onpropertychange",Ts)):n==="focusout"&&ju()}function jy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(ur)}function Dy(n,e){if(n==="click")return To(e)}function Oy(n,e){if(n==="input"||n==="change")return To(e)}function By(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Qn=typeof Object.is=="function"?Object.is:By;function lr(n,e){if(Qn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ci.call(e,o)||!Qn(n[o],e[o]))return!1}return!0}function Du(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ou(n,e){var t=Du(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Du(t)}}function Ls(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ls(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _s(){for(var n=window,e=to();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=to(n.document)}return e}function La(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function zy(n){var e=_s(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ls(t.ownerDocument.documentElement,t)){if(r!==null&&La(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!n.extend&&i>r&&(o=r,r=i,i=o),o=Ou(t,i);var a=Ou(t,r);o&&a&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var by=ae&&"documentMode"in document&&11>=document.documentMode,at=null,Oi=null,Zt=null,Bi=!1;function Bu(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bi||at==null||at!==to(r)||(r=at,"selectionStart"in r&&La(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zt&&lr(Zt,r)||(Zt=r,r=so(Oi,"onSelect"),0<r.length&&(e=new Na("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=at)))}function Lr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ut={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},ri={},Rs={};ae&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete ut.animationend.animation,delete ut.animationiteration.animation,delete ut.animationstart.animation),"TransitionEvent"in window||delete ut.transitionend.transition);function Lo(n){if(ri[n])return ri[n];if(!ut[n])return n;var e=ut[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Rs)return ri[n]=e[t];return n}var js=Lo("animationend"),Ds=Lo("animationiteration"),Os=Lo("animationstart"),Bs=Lo("transitionend"),zs=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Me(n,e){zs.set(n,e),Je(e,[n])}for(var oi=0;oi<zu.length;oi++){var ii=zu[oi],Iy=ii.toLowerCase(),Gy=ii[0].toUpperCase()+ii.slice(1);Me(Iy,"on"+Gy)}Me(js,"onAnimationEnd");Me(Ds,"onAnimationIteration");Me(Os,"onAnimationStart");Me("dblclick","onDoubleClick");Me("focusin","onFocus");Me("focusout","onBlur");Me(Bs,"onTransitionEnd");St("onMouseEnter",["mouseout","mouseover"]);St("onMouseLeave",["mouseout","mouseover"]);St("onPointerEnter",["pointerout","pointerover"]);St("onPointerLeave",["pointerout","pointerover"]);Je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Je("onBeforeInput",["compositionend","keypress","textInput","paste"]);Je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yt));function bu(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Id(r,e,void 0,n),n.currentTarget=null}function bs(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],o=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var u=r[a],l=u.instance,d=u.currentTarget;if(u=u.listener,l!==i&&o.isPropagationStopped())break n;bu(o,u,d),i=l}else for(a=0;a<r.length;a++){if(u=r[a],l=u.instance,d=u.currentTarget,u=u.listener,l!==i&&o.isPropagationStopped())break n;bu(o,u,d),i=l}}}if(oo)throw n=_i,oo=!1,_i=null,n}function I(n,e){var t=e[Hi];t===void 0&&(t=e[Hi]=new Set);var r=n+"__bubble";t.has(r)||(Is(e,n,2,!1),t.add(r))}function ai(n,e,t){var r=0;e&&(r|=4),Is(t,n,r,e)}var _r="_reactListening"+Math.random().toString(36).slice(2);function sr(n){if(!n[_r]){n[_r]=!0,$l.forEach(function(t){t!=="selectionchange"&&(Hy.has(t)||ai(t,!1,n),ai(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_r]||(e[_r]=!0,ai("selectionchange",!1,e))}}function Is(n,e,t,r){switch(Fs(e)){case 1:var o=ry;break;case 4:o=oy;break;default:o=Va}t=o.bind(null,e,t,n),o=void 0,!Li||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?n.addEventListener(e,t,{capture:!0,passive:o}):n.addEventListener(e,t,!0):o!==void 0?n.addEventListener(e,t,{passive:o}):n.addEventListener(e,t,!1)}function ui(n,e,t,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;u!==null;){if(a=Ie(u),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue n}u=u.parentNode}}r=r.return}cs(function(){var d=i,m=wa(t),f=[];n:{var g=zs.get(n);if(g!==void 0){var P=Na,h=n;switch(n){case"keypress":if($r(t)===0)break n;case"keydown":case"keyup":P=vy;break;case"focusin":h="focus",P=ni;break;case"focusout":h="blur",P=ni;break;case"beforeblur":case"afterblur":P=ni;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=xy;break;case js:case Ds:case Os:P=cy;break;case Bs:P=Fy;break;case"scroll":P=iy;break;case"wheel":P=Ay;break;case"copy":case"cut":case"paste":P=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Mu}var x=(e&4)!==0,E=!x&&n==="scroll",y=x?g!==null?g+"Capture":null:g;x=[];for(var s=d,p;s!==null;){p=s;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,y!==null&&(v=rr(s,y),v!=null&&x.push(cr(s,v,p)))),E)break;s=s.return}0<x.length&&(g=new P(g,h,null,t,m),f.push({event:g,listeners:x}))}}if(!(e&7)){n:{if(g=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",g&&t!==Mi&&(h=t.relatedTarget||t.fromElement)&&(Ie(h)||h[ue]))break n;if((P||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,P?(h=t.relatedTarget||t.toElement,P=d,h=h?Ie(h):null,h!==null&&(E=Xe(h),h!==E||h.tag!==5&&h.tag!==6)&&(h=null)):(P=null,h=d),P!==h)){if(x=ku,v="onMouseLeave",y="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(x=Mu,v="onPointerLeave",y="onPointerEnter",s="pointer"),E=P==null?g:lt(P),p=h==null?g:lt(h),g=new x(v,s+"leave",P,t,m),g.target=E,g.relatedTarget=p,v=null,Ie(m)===d&&(x=new x(y,s+"enter",h,t,m),x.target=p,x.relatedTarget=E,v=x),E=v,P&&h)e:{for(x=P,y=h,s=0,p=x;p;p=nt(p))s++;for(p=0,v=y;v;v=nt(v))p++;for(;0<s-p;)x=nt(x),s--;for(;0<p-s;)y=nt(y),p--;for(;s--;){if(x===y||y!==null&&x===y.alternate)break e;x=nt(x),y=nt(y)}x=null}else x=null;P!==null&&Iu(f,g,P,x,!1),h!==null&&E!==null&&Iu(f,E,h,x,!0)}}n:{if(g=d?lt(d):window,P=g.nodeName&&g.nodeName.toLowerCase(),P==="select"||P==="input"&&g.type==="file")var w=_y;else if(_u(g))if(Ms)w=Oy;else{w=jy;var A=Ry}else(P=g.nodeName)&&P.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=Dy);if(w&&(w=w(n,d))){Ns(f,w,t,m);break n}A&&A(n,g,d),n==="focusout"&&(A=g._wrapperState)&&A.controlled&&g.type==="number"&&Ei(g,"number",g.value)}switch(A=d?lt(d):window,n){case"focusin":(_u(A)||A.contentEditable==="true")&&(at=A,Oi=d,Zt=null);break;case"focusout":Zt=Oi=at=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,Bu(f,t,m);break;case"selectionchange":if(by)break;case"keydown":case"keyup":Bu(f,t,m)}var V;if(Ta)n:{switch(n){case"compositionstart":var N="onCompositionStart";break n;case"compositionend":N="onCompositionEnd";break n;case"compositionupdate":N="onCompositionUpdate";break n}N=void 0}else it?Vs(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(As&&t.locale!=="ko"&&(it||N!=="onCompositionStart"?N==="onCompositionEnd"&&it&&(V=Es()):(he=m,ka="value"in he?he.value:he.textContent,it=!0)),A=so(d,N),0<A.length&&(N=new Nu(N,n,null,t,m),f.push({event:N,listeners:A}),V?N.data=V:(V=ks(t),V!==null&&(N.data=V)))),(V=ky?Ny(n,t):My(n,t))&&(d=so(d,"onBeforeInput"),0<d.length&&(m=new Nu("onBeforeInput","beforeinput",null,t,m),f.push({event:m,listeners:d}),m.data=V))}bs(f,e)})}function cr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function so(n,e){for(var t=e+"Capture",r=[];n!==null;){var o=n,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=rr(n,t),i!=null&&r.unshift(cr(n,i,o)),i=rr(n,e),i!=null&&r.push(cr(n,i,o))),n=n.return}return r}function nt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Iu(n,e,t,r,o){for(var i=e._reactName,a=[];t!==null&&t!==r;){var u=t,l=u.alternate,d=u.stateNode;if(l!==null&&l===r)break;u.tag===5&&d!==null&&(u=d,o?(l=rr(t,i),l!=null&&a.unshift(cr(t,l,u))):o||(l=rr(t,i),l!=null&&a.push(cr(t,l,u)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Uy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Gu(n){return(typeof n=="string"?n:""+n).replace(Uy,`
`).replace(Yy,"")}function Rr(n,e,t){if(e=Gu(e),Gu(n)!==e&&t)throw Error(S(425))}function co(){}var zi=null,bi=null;function Ii(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(n){return Hu.resolve(null).then(n).catch($y)}:Gi;function $y(n){setTimeout(function(){throw n})}function li(n,e){var t=e,r=0;do{var o=t.nextSibling;if(n.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){n.removeChild(o),ar(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);ar(e)}function we(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Uu(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Tt,dr="__reactProps$"+Tt,ue="__reactContainer$"+Tt,Hi="__reactEvents$"+Tt,Ky="__reactListeners$"+Tt,Zy="__reactHandles$"+Tt;function Ie(n){var e=n[Jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ue]||t[Jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Uu(n);n!==null;){if(t=n[Jn])return t;n=Uu(n)}return e}n=t,t=n.parentNode}return null}function Sr(n){return n=n[Jn]||n[ue],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(S(33))}function _o(n){return n[dr]||null}var Ui=[],st=-1;function Te(n){return{current:n}}function G(n){0>st||(n.current=Ui[st],Ui[st]=null,st--)}function b(n,e){st++,Ui[st]=n.current,n.current=e}var Ne={},yn=Te(Ne),xn=Te(!1),We=Ne;function xt(n,e){var t=n.type.contextTypes;if(!t)return Ne;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=o),o}function wn(n){return n=n.childContextTypes,n!=null}function yo(){G(xn),G(yn)}function Yu(n,e,t){if(yn.current!==Ne)throw Error(S(168));b(yn,e),b(xn,t)}function Gs(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(S(108,Rd(n)||"Unknown",o));return Q({},t,r)}function po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ne,We=yn.current,b(yn,n),b(xn,xn.current),!0}function Wu(n,e,t){var r=n.stateNode;if(!r)throw Error(S(169));t?(n=Gs(n,e,We),r.__reactInternalMemoizedMergedChildContext=n,G(xn),G(yn),b(yn,n)):G(xn),b(xn,t)}var te=null,Ro=!1,si=!1;function Hs(n){te===null?te=[n]:te.push(n)}function Jy(n){Ro=!0,Hs(n)}function Le(){if(!si&&te!==null){si=!0;var n=0,e=B;try{var t=te;for(B=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}te=null,Ro=!1}catch(o){throw te!==null&&(te=te.slice(n+1)),fs(Fa,Le),o}finally{B=e,si=!1}}return null}var ct=[],dt=0,fo=null,go=0,_n=[],Rn=0,Qe=null,re=1,oe="";function ze(n,e){ct[dt++]=go,ct[dt++]=fo,fo=n,go=e}function Us(n,e,t){_n[Rn++]=re,_n[Rn++]=oe,_n[Rn++]=Qe,Qe=n;var r=re;n=oe;var o=32-Yn(r)-1;r&=~(1<<o),t+=1;var i=32-Yn(e)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,re=1<<32-Yn(e)+o|t<<o|r,oe=i+n}else re=1<<i|t<<o|r,oe=n}function _a(n){n.return!==null&&(ze(n,1),Us(n,1,0))}function Ra(n){for(;n===fo;)fo=ct[--dt],ct[dt]=null,go=ct[--dt],ct[dt]=null;for(;n===Qe;)Qe=_n[--Rn],_n[Rn]=null,oe=_n[--Rn],_n[Rn]=null,re=_n[--Rn],_n[Rn]=null}var Nn=null,kn=null,U=!1,Un=null;function Ys(n,e){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Qu(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,kn=we(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Qe!==null?{id:re,overflow:oe}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,kn=null,!0):!1;default:return!1}}function Yi(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wi(n){if(U){var e=kn;if(e){var t=e;if(!Qu(n,e)){if(Yi(n))throw Error(S(418));e=we(t.nextSibling);var r=Nn;e&&Qu(n,e)?Ys(r,t):(n.flags=n.flags&-4097|2,U=!1,Nn=n)}}else{if(Yi(n))throw Error(S(418));n.flags=n.flags&-4097|2,U=!1,Nn=n}}}function $u(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function jr(n){if(n!==Nn)return!1;if(!U)return $u(n),U=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ii(n.type,n.memoizedProps)),e&&(e=kn)){if(Yi(n))throw Ws(),Error(S(418));for(;e;)Ys(n,e),e=we(e.nextSibling)}if($u(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=we(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=Nn?we(n.stateNode.nextSibling):null;return!0}function Ws(){for(var n=kn;n;)n=we(n.nextSibling)}function wt(){kn=Nn=null,U=!1}function ja(n){Un===null?Un=[n]:Un.push(n)}var Xy=ce.ReactCurrentBatchConfig;function Bt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,n));var o=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var u=o.refs;a===null?delete u[i]:u[i]=a},e._stringRef=i,e)}if(typeof n!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,n))}return n}function Dr(n,e){throw n=Object.prototype.toString.call(e),Error(S(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ku(n){var e=n._init;return e(n._payload)}function Qs(n){function e(y,s){if(n){var p=y.deletions;p===null?(y.deletions=[s],y.flags|=16):p.push(s)}}function t(y,s){if(!n)return null;for(;s!==null;)e(y,s),s=s.sibling;return null}function r(y,s){for(y=new Map;s!==null;)s.key!==null?y.set(s.key,s):y.set(s.index,s),s=s.sibling;return y}function o(y,s){return y=Ve(y,s),y.index=0,y.sibling=null,y}function i(y,s,p){return y.index=p,n?(p=y.alternate,p!==null?(p=p.index,p<s?(y.flags|=2,s):p):(y.flags|=2,s)):(y.flags|=1048576,s)}function a(y){return n&&y.alternate===null&&(y.flags|=2),y}function u(y,s,p,v){return s===null||s.tag!==6?(s=mi(p,y.mode,v),s.return=y,s):(s=o(s,p),s.return=y,s)}function l(y,s,p,v){var w=p.type;return w===ot?m(y,s,p.props.children,v,p.key):s!==null&&(s.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pe&&Ku(w)===s.type)?(v=o(s,p.props),v.ref=Bt(y,s,p),v.return=y,v):(v=eo(p.type,p.key,p.props,null,y.mode,v),v.ref=Bt(y,s,p),v.return=y,v)}function d(y,s,p,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=hi(p,y.mode,v),s.return=y,s):(s=o(s,p.children||[]),s.return=y,s)}function m(y,s,p,v,w){return s===null||s.tag!==7?(s=Ye(p,y.mode,v,w),s.return=y,s):(s=o(s,p),s.return=y,s)}function f(y,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=mi(""+s,y.mode,p),s.return=y,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Er:return p=eo(s.type,s.key,s.props,null,y.mode,p),p.ref=Bt(y,null,s),p.return=y,p;case rt:return s=hi(s,y.mode,p),s.return=y,s;case pe:var v=s._init;return f(y,v(s._payload),p)}if(Ht(s)||_t(s))return s=Ye(s,y.mode,p,null),s.return=y,s;Dr(y,s)}return null}function g(y,s,p,v){var w=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:u(y,s,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return p.key===w?l(y,s,p,v):null;case rt:return p.key===w?d(y,s,p,v):null;case pe:return w=p._init,g(y,s,w(p._payload),v)}if(Ht(p)||_t(p))return w!==null?null:m(y,s,p,v,null);Dr(y,p)}return null}function P(y,s,p,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return y=y.get(p)||null,u(s,y,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Er:return y=y.get(v.key===null?p:v.key)||null,l(s,y,v,w);case rt:return y=y.get(v.key===null?p:v.key)||null,d(s,y,v,w);case pe:var A=v._init;return P(y,s,p,A(v._payload),w)}if(Ht(v)||_t(v))return y=y.get(p)||null,m(s,y,v,w,null);Dr(s,v)}return null}function h(y,s,p,v){for(var w=null,A=null,V=s,N=s=0,H=null;V!==null&&N<p.length;N++){V.index>N?(H=V,V=null):H=V.sibling;var _=g(y,V,p[N],v);if(_===null){V===null&&(V=H);break}n&&V&&_.alternate===null&&e(y,V),s=i(_,s,N),A===null?w=_:A.sibling=_,A=_,V=H}if(N===p.length)return t(y,V),U&&ze(y,N),w;if(V===null){for(;N<p.length;N++)V=f(y,p[N],v),V!==null&&(s=i(V,s,N),A===null?w=V:A.sibling=V,A=V);return U&&ze(y,N),w}for(V=r(y,V);N<p.length;N++)H=P(V,y,N,p[N],v),H!==null&&(n&&H.alternate!==null&&V.delete(H.key===null?N:H.key),s=i(H,s,N),A===null?w=H:A.sibling=H,A=H);return n&&V.forEach(function(En){return e(y,En)}),U&&ze(y,N),w}function x(y,s,p,v){var w=_t(p);if(typeof w!="function")throw Error(S(150));if(p=w.call(p),p==null)throw Error(S(151));for(var A=w=null,V=s,N=s=0,H=null,_=p.next();V!==null&&!_.done;N++,_=p.next()){V.index>N?(H=V,V=null):H=V.sibling;var En=g(y,V,_.value,v);if(En===null){V===null&&(V=H);break}n&&V&&En.alternate===null&&e(y,V),s=i(En,s,N),A===null?w=En:A.sibling=En,A=En,V=H}if(_.done)return t(y,V),U&&ze(y,N),w;if(V===null){for(;!_.done;N++,_=p.next())_=f(y,_.value,v),_!==null&&(s=i(_,s,N),A===null?w=_:A.sibling=_,A=_);return U&&ze(y,N),w}for(V=r(y,V);!_.done;N++,_=p.next())_=P(V,y,N,_.value,v),_!==null&&(n&&_.alternate!==null&&V.delete(_.key===null?N:_.key),s=i(_,s,N),A===null?w=_:A.sibling=_,A=_);return n&&V.forEach(function(_e){return e(y,_e)}),U&&ze(y,N),w}function E(y,s,p,v){if(typeof p=="object"&&p!==null&&p.type===ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:n:{for(var w=p.key,A=s;A!==null;){if(A.key===w){if(w=p.type,w===ot){if(A.tag===7){t(y,A.sibling),s=o(A,p.props.children),s.return=y,y=s;break n}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pe&&Ku(w)===A.type){t(y,A.sibling),s=o(A,p.props),s.ref=Bt(y,A,p),s.return=y,y=s;break n}t(y,A);break}else e(y,A);A=A.sibling}p.type===ot?(s=Ye(p.props.children,y.mode,v,p.key),s.return=y,y=s):(v=eo(p.type,p.key,p.props,null,y.mode,v),v.ref=Bt(y,s,p),v.return=y,y=v)}return a(y);case rt:n:{for(A=p.key;s!==null;){if(s.key===A)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){t(y,s.sibling),s=o(s,p.children||[]),s.return=y,y=s;break n}else{t(y,s);break}else e(y,s);s=s.sibling}s=hi(p,y.mode,v),s.return=y,y=s}return a(y);case pe:return A=p._init,E(y,s,A(p._payload),v)}if(Ht(p))return h(y,s,p,v);if(_t(p))return x(y,s,p,v);Dr(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(t(y,s.sibling),s=o(s,p),s.return=y,y=s):(t(y,s),s=mi(p,y.mode,v),s.return=y,y=s),a(y)):t(y,s)}return E}var Ft=Qs(!0),$s=Qs(!1),mo=Te(null),ho=null,yt=null,Da=null;function Oa(){Da=yt=ho=null}function Ba(n){var e=mo.current;G(mo),n._currentValue=e}function Qi(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function vt(n,e){ho=n,Da=yt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Sn=!0),n.firstContext=null)}function Bn(n){var e=n._currentValue;if(Da!==n)if(n={context:n,memoizedValue:e,next:null},yt===null){if(ho===null)throw Error(S(308));yt=n,ho.dependencies={lanes:0,firstContext:n}}else yt=yt.next=n;return e}var Ge=null;function za(n){Ge===null?Ge=[n]:Ge.push(n)}function Ks(n,e,t,r){var o=e.interleaved;return o===null?(t.next=t,za(e)):(t.next=o.next,o.next=t),e.interleaved=t,le(n,r)}function le(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fe=!1;function ba(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zs(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ie(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Fe(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,le(n,t)}return o=r.interleaved,o===null?(e.next=e,za(r)):(e.next=o.next,o.next=e),r.interleaved=e,le(n,t)}function Kr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ea(n,t)}}function Zu(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=e:i=i.next=e}else o=i=e;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Co(n,e,t,r){var o=n.updateQueue;fe=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var l=u,d=l.next;l.next=null,a===null?i=d:a.next=d,a=l;var m=n.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==a&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,m=d=l=null,u=i;do{var g=u.lane,P=u.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});n:{var h=n,x=u;switch(g=e,P=t,x.tag){case 1:if(h=x.payload,typeof h=="function"){f=h.call(P,f,g);break n}f=h;break n;case 3:h.flags=h.flags&-65537|128;case 0:if(h=x.payload,g=typeof h=="function"?h.call(P,f,g):h,g==null)break n;f=Q({},f,g);break n;case 2:fe=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else P={eventTime:P,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=P,l=f):m=m.next=P,a|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=f),o.baseState=l,o.firstBaseUpdate=d,o.lastBaseUpdate=m,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Ke|=a,n.lanes=a,n.memoizedState=f}}function Ju(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var xr={},qn=Te(xr),yr=Te(xr),pr=Te(xr);function He(n){if(n===xr)throw Error(S(174));return n}function Ia(n,e){switch(b(pr,e),b(yr,n),b(qn,xr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vi(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Vi(e,n)}G(qn),b(qn,e)}function Et(){G(qn),G(yr),G(pr)}function Js(n){He(pr.current);var e=He(qn.current),t=Vi(e,n.type);e!==t&&(b(yr,n),b(qn,t))}function Ga(n){yr.current===n&&(G(qn),G(yr))}var Y=Te(0);function vo(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ci=[];function Ha(){for(var n=0;n<ci.length;n++)ci[n]._workInProgressVersionPrimary=null;ci.length=0}var Zr=ce.ReactCurrentDispatcher,di=ce.ReactCurrentBatchConfig,$e=0,W=null,en=null,rn=null,Po=!1,Jt=!1,fr=0,qy=0;function sn(){throw Error(S(321))}function Ua(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Qn(n[t],e[t]))return!1;return!0}function Ya(n,e,t,r,o,i){if($e=i,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zr.current=n===null||n.memoizedState===null?r1:o1,n=t(r,o),Jt){i=0;do{if(Jt=!1,fr=0,25<=i)throw Error(S(301));i+=1,rn=en=null,e.updateQueue=null,Zr.current=i1,n=t(r,o)}while(Jt)}if(Zr.current=So,e=en!==null&&en.next!==null,$e=0,rn=en=W=null,Po=!1,e)throw Error(S(300));return n}function Wa(){var n=fr!==0;return fr=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?W.memoizedState=rn=n:rn=rn.next=n,rn}function zn(){if(en===null){var n=W.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var e=rn===null?W.memoizedState:rn.next;if(e!==null)rn=e,en=n;else{if(n===null)throw Error(S(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},rn===null?W.memoizedState=rn=n:rn=rn.next=n}return rn}function gr(n,e){return typeof e=="function"?e(n):e}function yi(n){var e=zn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var r=en,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=a=null,l=null,d=i;do{var m=d.lane;if(($e&m)===m)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:n(r,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(u=l=f,a=r):l=l.next=f,W.lanes|=m,Ke|=m}d=d.next}while(d!==null&&d!==i);l===null?a=r:l.next=u,Qn(r,e.memoizedState)||(Sn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=l,t.lastRenderedState=r}if(n=t.interleaved,n!==null){o=n;do i=o.lane,W.lanes|=i,Ke|=i,o=o.next;while(o!==n)}else o===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pi(n){var e=zn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var r=t.dispatch,o=t.pending,i=e.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=n(i,a.action),a=a.next;while(a!==o);Qn(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Xs(){}function qs(n,e){var t=W,r=zn(),o=e(),i=!Qn(r.memoizedState,o);if(i&&(r.memoizedState=o,Sn=!0),r=r.queue,Qa(tc.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||rn!==null&&rn.memoizedState.tag&1){if(t.flags|=2048,mr(9,ec.bind(null,t,r,o,e),void 0,null),on===null)throw Error(S(349));$e&30||nc(t,e,o)}return o}function nc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ec(n,e,t,r){e.value=t,e.getSnapshot=r,rc(e)&&oc(n)}function tc(n,e,t){return t(function(){rc(e)&&oc(n)})}function rc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Qn(n,t)}catch{return!0}}function oc(n){var e=le(n,1);e!==null&&Wn(e,n,1,-1)}function Xu(n){var e=Zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},e.queue=n,n=n.dispatch=t1.bind(null,W,n),[e.memoizedState,n]}function mr(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function ic(){return zn().memoizedState}function Jr(n,e,t,r){var o=Zn();W.flags|=n,o.memoizedState=mr(1|e,t,void 0,r===void 0?null:r)}function jo(n,e,t,r){var o=zn();r=r===void 0?null:r;var i=void 0;if(en!==null){var a=en.memoizedState;if(i=a.destroy,r!==null&&Ua(r,a.deps)){o.memoizedState=mr(e,t,i,r);return}}W.flags|=n,o.memoizedState=mr(1|e,t,i,r)}function qu(n,e){return Jr(8390656,8,n,e)}function Qa(n,e){return jo(2048,8,n,e)}function ac(n,e){return jo(4,2,n,e)}function uc(n,e){return jo(4,4,n,e)}function lc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function sc(n,e,t){return t=t!=null?t.concat([n]):null,jo(4,4,lc.bind(null,e,n),t)}function $a(){}function cc(n,e){var t=zn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Ua(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function dc(n,e){var t=zn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Ua(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function yc(n,e,t){return $e&21?(Qn(t,e)||(t=hs(),W.lanes|=t,Ke|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Sn=!0),n.memoizedState=t)}function n1(n,e){var t=B;B=t!==0&&4>t?t:4,n(!0);var r=di.transition;di.transition={};try{n(!1),e()}finally{B=t,di.transition=r}}function pc(){return zn().memoizedState}function e1(n,e,t){var r=Ae(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fc(n))gc(e,t);else if(t=Ks(n,e,t,r),t!==null){var o=fn();Wn(t,n,r,o),mc(t,e,r)}}function t1(n,e,t){var r=Ae(n),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fc(n))gc(e,o);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,u=i(a,t);if(o.hasEagerState=!0,o.eagerState=u,Qn(u,a)){var l=e.interleaved;l===null?(o.next=o,za(e)):(o.next=l.next,l.next=o),e.interleaved=o;return}}catch{}finally{}t=Ks(n,e,o,r),t!==null&&(o=fn(),Wn(t,n,r,o),mc(t,e,r))}}function fc(n){var e=n.alternate;return n===W||e!==null&&e===W}function gc(n,e){Jt=Po=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function mc(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ea(n,t)}}var So={readContext:Bn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},r1={readContext:Bn,useCallback:function(n,e){return Zn().memoizedState=[n,e===void 0?null:e],n},useContext:Bn,useEffect:qu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Jr(4194308,4,lc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Jr(4194308,4,n,e)},useInsertionEffect:function(n,e){return Jr(4,2,n,e)},useMemo:function(n,e){var t=Zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Zn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=e1.bind(null,W,n),[r.memoizedState,n]},useRef:function(n){var e=Zn();return n={current:n},e.memoizedState=n},useState:Xu,useDebugValue:$a,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=Xu(!1),e=n[0];return n=n1.bind(null,n[1]),Zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=W,o=Zn();if(U){if(t===void 0)throw Error(S(407));t=t()}else{if(t=e(),on===null)throw Error(S(349));$e&30||nc(r,e,t)}o.memoizedState=t;var i={value:t,getSnapshot:e};return o.queue=i,qu(tc.bind(null,r,i,n),[n]),r.flags|=2048,mr(9,ec.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=Zn(),e=on.identifierPrefix;if(U){var t=oe,r=re;t=(r&~(1<<32-Yn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=fr++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=qy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},o1={readContext:Bn,useCallback:cc,useContext:Bn,useEffect:Qa,useImperativeHandle:sc,useInsertionEffect:ac,useLayoutEffect:uc,useMemo:dc,useReducer:yi,useRef:ic,useState:function(){return yi(gr)},useDebugValue:$a,useDeferredValue:function(n){var e=zn();return yc(e,en.memoizedState,n)},useTransition:function(){var n=yi(gr)[0],e=zn().memoizedState;return[n,e]},useMutableSource:Xs,useSyncExternalStore:qs,useId:pc,unstable_isNewReconciler:!1},i1={readContext:Bn,useCallback:cc,useContext:Bn,useEffect:Qa,useImperativeHandle:sc,useInsertionEffect:ac,useLayoutEffect:uc,useMemo:dc,useReducer:pi,useRef:ic,useState:function(){return pi(gr)},useDebugValue:$a,useDeferredValue:function(n){var e=zn();return en===null?e.memoizedState=n:yc(e,en.memoizedState,n)},useTransition:function(){var n=pi(gr)[0],e=zn().memoizedState;return[n,e]},useMutableSource:Xs,useSyncExternalStore:qs,useId:pc,unstable_isNewReconciler:!1};function Gn(n,e){if(n&&n.defaultProps){e=Q({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function $i(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Q({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Do={isMounted:function(n){return(n=n._reactInternals)?Xe(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=fn(),o=Ae(n),i=ie(r,o);i.payload=e,t!=null&&(i.callback=t),e=Fe(n,i,o),e!==null&&(Wn(e,n,o,r),Kr(e,n,o))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=fn(),o=Ae(n),i=ie(r,o);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Fe(n,i,o),e!==null&&(Wn(e,n,o,r),Kr(e,n,o))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),r=Ae(n),o=ie(t,r);o.tag=2,e!=null&&(o.callback=e),e=Fe(n,o,r),e!==null&&(Wn(e,n,r,t),Kr(e,n,r))}};function nl(n,e,t,r,o,i,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!lr(t,r)||!lr(o,i):!0}function hc(n,e,t){var r=!1,o=Ne,i=e.contextType;return typeof i=="object"&&i!==null?i=Bn(i):(o=wn(e)?We:yn.current,r=e.contextTypes,i=(r=r!=null)?xt(n,o):Ne),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Do,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=i),e}function el(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Do.enqueueReplaceState(e,e.state,null)}function Ki(n,e,t,r){var o=n.stateNode;o.props=t,o.state=n.memoizedState,o.refs={},ba(n);var i=e.contextType;typeof i=="object"&&i!==null?o.context=Bn(i):(i=wn(e)?We:yn.current,o.context=xt(n,i)),o.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&($i(n,e,i,t),o.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Do.enqueueReplaceState(o,o.state,null),Co(n,t,o,r),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function At(n,e){try{var t="",r=e;do t+=_d(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:o,digest:null}}function fi(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Zi(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function Cc(n,e,t){t=ie(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){wo||(wo=!0,aa=r),Zi(n,e)},t}function vc(n,e,t){t=ie(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;t.payload=function(){return r(o)},t.callback=function(){Zi(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Zi(n,e),typeof r!="function"&&(Ee===null?Ee=new Set([this]):Ee.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function tl(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new a1;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(t)||(o.add(t),n=P1.bind(null,n,e,t),e.then(n,n))}function rl(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ol(n,e,t,r,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ie(-1,1),e.tag=2,Fe(t,e,1))),t.lanes|=1),n)}var u1=ce.ReactCurrentOwner,Sn=!1;function pn(n,e,t,r){e.child=n===null?$s(e,null,t,r):Ft(e,n.child,t,r)}function il(n,e,t,r,o){t=t.render;var i=e.ref;return vt(e,o),r=Ya(n,e,t,r,i,o),t=Wa(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,se(n,e,o)):(U&&t&&_a(e),e.flags|=1,pn(n,e,r,o),e.child)}function al(n,e,t,r,o){if(n===null){var i=t.type;return typeof i=="function"&&!tu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Pc(n,e,i,r,o)):(n=eo(t.type,null,r,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:lr,t(a,r)&&n.ref===e.ref)return se(n,e,o)}return e.flags|=1,n=Ve(i,r),n.ref=e.ref,n.return=e,e.child=n}function Pc(n,e,t,r,o){if(n!==null){var i=n.memoizedProps;if(lr(i,r)&&n.ref===e.ref)if(Sn=!1,e.pendingProps=r=i,(n.lanes&o)!==0)n.flags&131072&&(Sn=!0);else return e.lanes=n.lanes,se(n,e,o)}return Ji(n,e,t,r,o)}function Sc(n,e,t){var r=e.pendingProps,o=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(ft,Vn),Vn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,b(ft,Vn),Vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,b(ft,Vn),Vn|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,b(ft,Vn),Vn|=r;return pn(n,e,o,t),e.child}function xc(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ji(n,e,t,r,o){var i=wn(t)?We:yn.current;return i=xt(e,i),vt(e,o),t=Ya(n,e,t,r,i,o),r=Wa(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,se(n,e,o)):(U&&r&&_a(e),e.flags|=1,pn(n,e,t,o),e.child)}function ul(n,e,t,r,o){if(wn(t)){var i=!0;po(e)}else i=!1;if(vt(e,o),e.stateNode===null)Xr(n,e),hc(e,t,r),Ki(e,t,r,o),r=!0;else if(n===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var l=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=Bn(d):(d=wn(t)?We:yn.current,d=xt(e,d));var m=t.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||l!==d)&&el(e,a,r,d),fe=!1;var g=e.memoizedState;a.state=g,Co(e,r,a,o),l=e.memoizedState,u!==r||g!==l||xn.current||fe?(typeof m=="function"&&($i(e,t,m,r),l=e.memoizedState),(u=fe||nl(e,t,u,r,g,l,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),a.props=r,a.state=l,a.context=d,r=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Zs(n,e),u=e.memoizedProps,d=e.type===e.elementType?u:Gn(e.type,u),a.props=d,f=e.pendingProps,g=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=wn(t)?We:yn.current,l=xt(e,l));var P=t.getDerivedStateFromProps;(m=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==f||g!==l)&&el(e,a,r,l),fe=!1,g=e.memoizedState,a.state=g,Co(e,r,a,o);var h=e.memoizedState;u!==f||g!==h||xn.current||fe?(typeof P=="function"&&($i(e,t,P,r),h=e.memoizedState),(d=fe||nl(e,t,d,r,g,h,l)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=h),a.props=r,a.state=h,a.context=l,r=d):(typeof a.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),r=!1)}return Xi(n,e,t,r,i,o)}function Xi(n,e,t,r,o,i){xc(n,e);var a=(e.flags&128)!==0;if(!r&&!a)return o&&Wu(e,t,!1),se(n,e,i);r=e.stateNode,u1.current=e;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&a?(e.child=Ft(e,n.child,null,i),e.child=Ft(e,null,u,i)):pn(n,e,u,i),e.memoizedState=r.state,o&&Wu(e,t,!0),e.child}function wc(n){var e=n.stateNode;e.pendingContext?Yu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Yu(n,e.context,!1),Ia(n,e.containerInfo)}function ll(n,e,t,r,o){return wt(),ja(o),e.flags|=256,pn(n,e,t,r),e.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function na(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fc(n,e,t){var r=e.pendingProps,o=Y.current,i=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=n!==null&&n.memoizedState===null?!1:(o&2)!==0),u?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),b(Y,o&1),n===null)return Wi(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,n=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zo(a,r,0,null),n=Ye(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=na(t),e.memoizedState=qi,n):Ka(e,a));if(o=n.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return l1(n,e,a,r,u,o,t);if(i){i=r.fallback,a=e.mode,o=n.child,u=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ve(o,l),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Ve(u,i):(i=Ye(i,a,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=n.child.memoizedState,a=a===null?na(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=n.childLanes&~t,e.memoizedState=qi,r}return i=n.child,n=i.sibling,r=Ve(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Ka(n,e){return e=zo({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Or(n,e,t,r){return r!==null&&ja(r),Ft(e,n.child,null,t),n=Ka(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function l1(n,e,t,r,o,i,a){if(t)return e.flags&256?(e.flags&=-257,r=fi(Error(S(422))),Or(n,e,a,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=zo({mode:"visible",children:r.children},o,0,null),i=Ye(i,o,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ft(e,n.child,null,a),e.child.memoizedState=na(a),e.memoizedState=qi,i);if(!(e.mode&1))return Or(n,e,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=fi(i,r,void 0),Or(n,e,a,r)}if(u=(a&n.childLanes)!==0,Sn||u){if(r=on,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,le(n,o),Wn(r,n,o,-1))}return eu(),r=fi(Error(S(421))),Or(n,e,a,r)}return o.data==="$?"?(e.flags|=128,e.child=n.child,e=S1.bind(null,n),o._reactRetry=e,null):(n=i.treeContext,kn=we(o.nextSibling),Nn=e,U=!0,Un=null,n!==null&&(_n[Rn++]=re,_n[Rn++]=oe,_n[Rn++]=Qe,re=n.id,oe=n.overflow,Qe=e),e=Ka(e,r.children),e.flags|=4096,e)}function sl(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Qi(n.return,e,t)}function gi(n,e,t,r,o){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ec(n,e,t){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(pn(n,e,r.children,t),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sl(n,t,e);else if(n.tag===19)sl(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(b(Y,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(t=e.child,o=null;t!==null;)n=t.alternate,n!==null&&vo(n)===null&&(o=t),t=t.sibling;t=o,t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),gi(e,!1,o,t,i);break;case"backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&vo(n)===null){e.child=o;break}n=o.sibling,o.sibling=t,t=o,o=n}gi(e,!0,t,null,i);break;case"together":gi(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function se(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ke|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(S(153));if(e.child!==null){for(n=e.child,t=Ve(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ve(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function s1(n,e,t){switch(e.tag){case 3:wc(e),wt();break;case 5:Js(e);break;case 1:wn(e.type)&&po(e);break;case 4:Ia(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;b(mo,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(b(Y,Y.current&1),e.flags|=128,null):t&e.child.childLanes?Fc(n,e,t):(b(Y,Y.current&1),n=se(n,e,t),n!==null?n.sibling:null);b(Y,Y.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Ec(n,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),b(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,Sc(n,e,t)}return se(n,e,t)}var Ac,ea,Vc,kc;Ac=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ea=function(){};Vc=function(n,e,t,r){var o=n.memoizedProps;if(o!==r){n=e.stateNode,He(qn.current);var i=null;switch(t){case"input":o=wi(n,o),r=wi(n,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Ai(n,o),r=Ai(n,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=co)}ki(t,r);var a;t=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var u=o[d];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(er.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(u=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&l!==u&&(l!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&u[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(d,t)),t=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(er.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&I("scroll",n),i||u===l||(i=[])):(i=i||[]).push(d,l))}t&&(i=i||[]).push("style",t);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};kc=function(n,e,t,r){t!==r&&(e.flags|=4)};function zt(n,e){if(!U)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function c1(n,e,t){var r=e.pendingProps;switch(Ra(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return wn(e.type)&&yo(),cn(e),null;case 3:return r=e.stateNode,Et(),G(xn),G(yn),Ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(jr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(sa(Un),Un=null))),ea(n,e),cn(e),null;case 5:Ga(e);var o=He(pr.current);if(t=e.type,n!==null&&e.stateNode!=null)Vc(n,e,t,r,o),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return cn(e),null}if(n=He(qn.current),jr(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[Jn]=e,r[dr]=i,n=(e.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<Yt.length;o++)I(Yt[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Cu(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Pu(r,i),I("invalid",r)}ki(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,n),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,n),o=["children",""+u]):er.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&I("scroll",r)}switch(t){case"input":Ar(r),vu(r,i,!0);break;case"textarea":Ar(r),Su(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=co)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ts(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=a.createElement(t,{is:r.is}):(n=a.createElement(t),t==="select"&&(a=n,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):n=a.createElementNS(n,t),n[Jn]=e,n[dr]=r,Ac(n,e,!1,!1),e.stateNode=n;n:{switch(a=Ni(t,r),t){case"dialog":I("cancel",n),I("close",n),o=r;break;case"iframe":case"object":case"embed":I("load",n),o=r;break;case"video":case"audio":for(o=0;o<Yt.length;o++)I(Yt[o],n);o=r;break;case"source":I("error",n),o=r;break;case"img":case"image":case"link":I("error",n),I("load",n),o=r;break;case"details":I("toggle",n),o=r;break;case"input":Cu(n,r),o=wi(n,r),I("invalid",n);break;case"option":o=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),I("invalid",n);break;case"textarea":Pu(n,r),o=Ai(n,r),I("invalid",n);break;default:o=r}ki(t,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var l=u[i];i==="style"?is(n,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rs(n,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&tr(n,l):typeof l=="number"&&tr(n,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(er.hasOwnProperty(i)?l!=null&&i==="onScroll"&&I("scroll",n):l!=null&&va(n,i,l,a))}switch(t){case"input":Ar(n),vu(n,r,!1);break;case"textarea":Ar(n),Su(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ke(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?gt(n,!!r.multiple,i,!1):r.defaultValue!=null&&gt(n,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=co)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(n&&e.stateNode!=null)kc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(t=He(pr.current),He(qn.current),jr(e)){if(r=e.stateNode,t=e.memoizedProps,r[Jn]=e,(i=r.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Rr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return cn(e),null;case 13:if(G(Y),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(U&&kn!==null&&e.mode&1&&!(e.flags&128))Ws(),wt(),e.flags|=98560,i=!1;else if(i=jr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(S(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Jn]=e}else wt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),i=!1}else Un!==null&&(sa(Un),Un=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Y.current&1?tn===0&&(tn=3):eu())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return Et(),ea(n,e),n===null&&sr(e.stateNode.containerInfo),cn(e),null;case 10:return Ba(e.type._context),cn(e),null;case 17:return wn(e.type)&&yo(),cn(e),null;case 19:if(G(Y),i=e.memoizedState,i===null)return cn(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)zt(i,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=vo(n),a!==null){for(e.flags|=128,zt(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,n=a.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return b(Y,Y.current&1|2),e.child}n=n.sibling}i.tail!==null&&X()>Vt&&(e.flags|=128,r=!0,zt(i,!1),e.lanes=4194304)}else{if(!r)if(n=vo(a),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),zt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return cn(e),null}else 2*X()-i.renderingStartTime>Vt&&t!==1073741824&&(e.flags|=128,r=!0,zt(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=X(),e.sibling=null,t=Y.current,b(Y,r?t&1|2:t&1),e):(cn(e),null);case 22:case 23:return nu(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function d1(n,e){switch(Ra(e),e.tag){case 1:return wn(e.type)&&yo(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Et(),G(xn),G(yn),Ha(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ga(e),null;case 13:if(G(Y),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(S(340));wt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return G(Y),null;case 4:return Et(),null;case 10:return Ba(e.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Br=!1,dn=!1,y1=typeof WeakSet=="function"?WeakSet:Set,k=null;function pt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(n,e,r)}else t.current=null}function ta(n,e,t){try{t()}catch(r){K(n,e,r)}}var cl=!1;function p1(n,e){if(zi=uo,n=_s(),La(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var a=0,u=-1,l=-1,d=0,m=0,f=n,g=null;e:for(;;){for(var P;f!==t||o!==0&&f.nodeType!==3||(u=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(P=f.firstChild)!==null;)g=f,f=P;for(;;){if(f===n)break e;if(g===t&&++d===o&&(u=a),g===i&&++m===r&&(l=a),(P=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=P}t=u===-1||l===-1?null:{start:u,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bi={focusedElem:n,selectionRange:t},uo=!1,k=e;k!==null;)if(e=k,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,k=n;else for(;k!==null;){e=k;try{var h=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var x=h.memoizedProps,E=h.memoizedState,y=e.stateNode,s=y.getSnapshotBeforeUpdate(e.elementType===e.type?x:Gn(e.type,x),E);y.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){K(e,e.return,v)}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}return h=cl,cl=!1,h}function Xt(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var i=o.destroy;o.destroy=void 0,i!==void 0&&ta(e,t,i)}o=o.next}while(o!==r)}}function Oo(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function ra(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Nc(n){var e=n.alternate;e!==null&&(n.alternate=null,Nc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Jn],delete e[dr],delete e[Hi],delete e[Ky],delete e[Zy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mc(n){return n.tag===5||n.tag===3||n.tag===4}function dl(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Mc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oa(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=co));else if(r!==4&&(n=n.child,n!==null))for(oa(n,e,t),n=n.sibling;n!==null;)oa(n,e,t),n=n.sibling}function ia(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(ia(n,e,t),n=n.sibling;n!==null;)ia(n,e,t),n=n.sibling}var an=null,Hn=!1;function ye(n,e,t){for(t=t.child;t!==null;)Tc(n,e,t),t=t.sibling}function Tc(n,e,t){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(No,t)}catch{}switch(t.tag){case 5:dn||pt(t,e);case 6:var r=an,o=Hn;an=null,ye(n,e,t),an=r,Hn=o,an!==null&&(Hn?(n=an,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):an.removeChild(t.stateNode));break;case 18:an!==null&&(Hn?(n=an,t=t.stateNode,n.nodeType===8?li(n.parentNode,t):n.nodeType===1&&li(n,t),ar(n)):li(an,t.stateNode));break;case 4:r=an,o=Hn,an=t.stateNode.containerInfo,Hn=!0,ye(n,e,t),an=r,Hn=o;break;case 0:case 11:case 14:case 15:if(!dn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ta(t,e,a),o=o.next}while(o!==r)}ye(n,e,t);break;case 1:if(!dn&&(pt(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){K(t,e,u)}ye(n,e,t);break;case 21:ye(n,e,t);break;case 22:t.mode&1?(dn=(r=dn)||t.memoizedState!==null,ye(n,e,t),dn=r):ye(n,e,t);break;default:ye(n,e,t)}}function yl(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new y1),e.forEach(function(r){var o=x1.bind(null,n,r);t.has(r)||(t.add(r),r.then(o,o))})}}function In(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=n,a=e,u=a;n:for(;u!==null;){switch(u.tag){case 5:an=u.stateNode,Hn=!1;break n;case 3:an=u.stateNode.containerInfo,Hn=!0;break n;case 4:an=u.stateNode.containerInfo,Hn=!0;break n}u=u.return}if(an===null)throw Error(S(160));Tc(i,a,o),an=null,Hn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(d){K(o,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lc(e,n),e=e.sibling}function Lc(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(In(e,n),Kn(n),r&4){try{Xt(3,n,n.return),Oo(3,n)}catch(x){K(n,n.return,x)}try{Xt(5,n,n.return)}catch(x){K(n,n.return,x)}}break;case 1:In(e,n),Kn(n),r&512&&t!==null&&pt(t,t.return);break;case 5:if(In(e,n),Kn(n),r&512&&t!==null&&pt(t,t.return),n.flags&32){var o=n.stateNode;try{tr(o,"")}catch(x){K(n,n.return,x)}}if(r&4&&(o=n.stateNode,o!=null)){var i=n.memoizedProps,a=t!==null?t.memoizedProps:i,u=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ns(o,i),Ni(u,a);var d=Ni(u,i);for(a=0;a<l.length;a+=2){var m=l[a],f=l[a+1];m==="style"?is(o,f):m==="dangerouslySetInnerHTML"?rs(o,f):m==="children"?tr(o,f):va(o,m,f,d)}switch(u){case"input":Fi(o,i);break;case"textarea":es(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?gt(o,!!i.multiple,P,!1):g!==!!i.multiple&&(i.defaultValue!=null?gt(o,!!i.multiple,i.defaultValue,!0):gt(o,!!i.multiple,i.multiple?[]:"",!1))}o[dr]=i}catch(x){K(n,n.return,x)}}break;case 6:if(In(e,n),Kn(n),r&4){if(n.stateNode===null)throw Error(S(162));o=n.stateNode,i=n.memoizedProps;try{o.nodeValue=i}catch(x){K(n,n.return,x)}}break;case 3:if(In(e,n),Kn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ar(e.containerInfo)}catch(x){K(n,n.return,x)}break;case 4:In(e,n),Kn(n);break;case 13:In(e,n),Kn(n),o=n.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=X())),r&4&&yl(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(dn=(d=dn)||m,In(e,n),dn=d):In(e,n),Kn(n),r&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!m&&n.mode&1)for(k=n,m=n.child;m!==null;){for(f=k=m;k!==null;){switch(g=k,P=g.child,g.tag){case 0:case 11:case 14:case 15:Xt(4,g,g.return);break;case 1:pt(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){r=g,t=g.return;try{e=r,h.props=e.memoizedProps,h.state=e.memoizedState,h.componentWillUnmount()}catch(x){K(r,t,x)}}break;case 5:pt(g,g.return);break;case 22:if(g.memoizedState!==null){fl(f);continue}}P!==null?(P.return=g,k=P):fl(f)}m=m.sibling}n:for(m=null,f=n;;){if(f.tag===5){if(m===null){m=f;try{o=f.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=os("display",a))}catch(x){K(n,n.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(x){K(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break n;for(;f.sibling===null;){if(f.return===null||f.return===n)break n;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,n),Kn(n),r&4&&yl(n);break;case 21:break;default:In(e,n),Kn(n)}}function Kn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Mc(t)){var r=t;break n}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(tr(o,""),r.flags&=-33);var i=dl(n);ia(n,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,u=dl(n);oa(n,u,a);break;default:throw Error(S(161))}}catch(l){K(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function f1(n,e,t){k=n,_c(n)}function _c(n,e,t){for(var r=(n.mode&1)!==0;k!==null;){var o=k,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Br;if(!a){var u=o.alternate,l=u!==null&&u.memoizedState!==null||dn;u=Br;var d=dn;if(Br=a,(dn=l)&&!d)for(k=o;k!==null;)a=k,l=a.child,a.tag===22&&a.memoizedState!==null?gl(o):l!==null?(l.return=a,k=l):gl(o);for(;i!==null;)k=i,_c(i),i=i.sibling;k=o,Br=u,dn=d}pl(n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,k=i):pl(n)}}function pl(n){for(;k!==null;){var e=k;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Oo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dn)if(t===null)r.componentDidMount();else{var o=e.elementType===e.type?t.memoizedProps:Gn(e.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ju(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ju(e,a,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ar(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}dn||e.flags&512&&ra(e)}catch(g){K(e,e.return,g)}}if(e===n){k=null;break}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}}function fl(n){for(;k!==null;){var e=k;if(e===n){k=null;break}var t=e.sibling;if(t!==null){t.return=e.return,k=t;break}k=e.return}}function gl(n){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Oo(4,e)}catch(l){K(e,t,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(l){K(e,o,l)}}var i=e.return;try{ra(e)}catch(l){K(e,i,l)}break;case 5:var a=e.return;try{ra(e)}catch(l){K(e,a,l)}}}catch(l){K(e,e.return,l)}if(e===n){k=null;break}var u=e.sibling;if(u!==null){u.return=e.return,k=u;break}k=e.return}}var g1=Math.ceil,xo=ce.ReactCurrentDispatcher,Za=ce.ReactCurrentOwner,On=ce.ReactCurrentBatchConfig,D=0,on=null,q=null,un=0,Vn=0,ft=Te(0),tn=0,hr=null,Ke=0,Bo=0,Ja=0,qt=null,vn=null,Xa=0,Vt=1/0,ee=null,wo=!1,aa=null,Ee=null,zr=!1,Ce=null,Fo=0,nr=0,ua=null,qr=-1,no=0;function fn(){return D&6?X():qr!==-1?qr:qr=X()}function Ae(n){return n.mode&1?D&2&&un!==0?un&-un:Xy.transition!==null?(no===0&&(no=hs()),no):(n=B,n!==0||(n=window.event,n=n===void 0?16:Fs(n.type)),n):1}function Wn(n,e,t,r){if(50<nr)throw nr=0,ua=null,Error(S(185));vr(n,t,r),(!(D&2)||n!==on)&&(n===on&&(!(D&2)&&(Bo|=t),tn===4&&me(n,un)),Fn(n,r),t===1&&D===0&&!(e.mode&1)&&(Vt=X()+500,Ro&&Le()))}function Fn(n,e){var t=n.callbackNode;Xd(n,e);var r=ao(n,n===on?un:0);if(r===0)t!==null&&Fu(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Fu(t),e===1)n.tag===0?Jy(ml.bind(null,n)):Hs(ml.bind(null,n)),Qy(function(){!(D&6)&&Le()}),t=null;else{switch(Cs(r)){case 1:t=Fa;break;case 4:t=gs;break;case 16:t=io;break;case 536870912:t=ms;break;default:t=io}t=Ic(t,Rc.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Rc(n,e){if(qr=-1,no=0,D&6)throw Error(S(327));var t=n.callbackNode;if(Pt()&&n.callbackNode!==t)return null;var r=ao(n,n===on?un:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Eo(n,r);else{e=r;var o=D;D|=2;var i=Dc();(on!==n||un!==e)&&(ee=null,Vt=X()+500,Ue(n,e));do try{C1();break}catch(u){jc(n,u)}while(!0);Oa(),xo.current=i,D=o,q!==null?e=0:(on=null,un=0,e=tn)}if(e!==0){if(e===2&&(o=Ri(n),o!==0&&(r=o,e=la(n,o))),e===1)throw t=hr,Ue(n,0),me(n,r),Fn(n,X()),t;if(e===6)me(n,r);else{if(o=n.current.alternate,!(r&30)&&!m1(o)&&(e=Eo(n,r),e===2&&(i=Ri(n),i!==0&&(r=i,e=la(n,i))),e===1))throw t=hr,Ue(n,0),me(n,r),Fn(n,X()),t;switch(n.finishedWork=o,n.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:be(n,vn,ee);break;case 3:if(me(n,r),(r&130023424)===r&&(e=Xa+500-X(),10<e)){if(ao(n,0)!==0)break;if(o=n.suspendedLanes,(o&r)!==r){fn(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=Gi(be.bind(null,n,vn,ee),e);break}be(n,vn,ee);break;case 4:if(me(n,r),(r&4194240)===r)break;for(e=n.eventTimes,o=-1;0<r;){var a=31-Yn(r);i=1<<a,a=e[a],a>o&&(o=a),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g1(r/1960))-r,10<r){n.timeoutHandle=Gi(be.bind(null,n,vn,ee),r);break}be(n,vn,ee);break;case 5:be(n,vn,ee);break;default:throw Error(S(329))}}}return Fn(n,X()),n.callbackNode===t?Rc.bind(null,n):null}function la(n,e){var t=qt;return n.current.memoizedState.isDehydrated&&(Ue(n,e).flags|=256),n=Eo(n,e),n!==2&&(e=vn,vn=t,e!==null&&sa(e)),n}function sa(n){vn===null?vn=n:vn.push.apply(vn,n)}function m1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Qn(i(),o))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function me(n,e){for(e&=~Ja,e&=~Bo,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Yn(e),r=1<<t;n[t]=-1,e&=~r}}function ml(n){if(D&6)throw Error(S(327));Pt();var e=ao(n,0);if(!(e&1))return Fn(n,X()),null;var t=Eo(n,e);if(n.tag!==0&&t===2){var r=Ri(n);r!==0&&(e=r,t=la(n,r))}if(t===1)throw t=hr,Ue(n,0),me(n,e),Fn(n,X()),t;if(t===6)throw Error(S(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,be(n,vn,ee),Fn(n,X()),null}function qa(n,e){var t=D;D|=1;try{return n(e)}finally{D=t,D===0&&(Vt=X()+500,Ro&&Le())}}function Ze(n){Ce!==null&&Ce.tag===0&&!(D&6)&&Pt();var e=D;D|=1;var t=On.transition,r=B;try{if(On.transition=null,B=1,n)return n()}finally{B=r,On.transition=t,D=e,!(D&6)&&Le()}}function nu(){Vn=ft.current,G(ft)}function Ue(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Wy(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(Ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Et(),G(xn),G(yn),Ha();break;case 5:Ga(r);break;case 4:Et();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Ba(r.type._context);break;case 22:case 23:nu()}t=t.return}if(on=n,q=n=Ve(n.current,null),un=Vn=e,tn=0,hr=null,Ja=Bo=Ke=0,vn=qt=null,Ge!==null){for(e=0;e<Ge.length;e++)if(t=Ge[e],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}Ge=null}return n}function jc(n,e){do{var t=q;try{if(Oa(),Zr.current=So,Po){for(var r=W.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if($e=0,rn=en=W=null,Jt=!1,fr=0,Za.current=null,t===null||t.return===null){tn=1,hr=e,q=null;break}n:{var i=n,a=t.return,u=t,l=e;if(e=un,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,m=u,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var P=rl(a);if(P!==null){P.flags&=-257,ol(P,a,u,i,e),P.mode&1&&tl(i,d,e),e=P,l=d;var h=e.updateQueue;if(h===null){var x=new Set;x.add(l),e.updateQueue=x}else h.add(l);break n}else{if(!(e&1)){tl(i,d,e),eu();break n}l=Error(S(426))}}else if(U&&u.mode&1){var E=rl(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ol(E,a,u,i,e),ja(At(l,u));break n}}i=l=At(l,u),tn!==4&&(tn=2),qt===null?qt=[i]:qt.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var y=Cc(i,l,e);Zu(i,y);break n;case 1:u=l;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ee===null||!Ee.has(p)))){i.flags|=65536,e&=-e,i.lanes|=e;var v=vc(i,u,e);Zu(i,v);break n}}i=i.return}while(i!==null)}Bc(t)}catch(w){e=w,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Dc(){var n=xo.current;return xo.current=So,n===null?So:n}function eu(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||!(Ke&268435455)&&!(Bo&268435455)||me(on,un)}function Eo(n,e){var t=D;D|=2;var r=Dc();(on!==n||un!==e)&&(ee=null,Ue(n,e));do try{h1();break}catch(o){jc(n,o)}while(!0);if(Oa(),D=t,xo.current=r,q!==null)throw Error(S(261));return on=null,un=0,tn}function h1(){for(;q!==null;)Oc(q)}function C1(){for(;q!==null&&!Hd();)Oc(q)}function Oc(n){var e=bc(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,e===null?Bc(n):q=e,Za.current=null}function Bc(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=d1(t,e),t!==null){t.flags&=32767,q=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,q=null;return}}else if(t=c1(t,e,Vn),t!==null){q=t;return}if(e=e.sibling,e!==null){q=e;return}q=e=n}while(e!==null);tn===0&&(tn=5)}function be(n,e,t){var r=B,o=On.transition;try{On.transition=null,B=1,v1(n,e,t,r)}finally{On.transition=o,B=r}return null}function v1(n,e,t,r){do Pt();while(Ce!==null);if(D&6)throw Error(S(327));t=n.finishedWork;var o=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(S(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(qd(n,i),n===on&&(q=on=null,un=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||zr||(zr=!0,Ic(io,function(){return Pt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=On.transition,On.transition=null;var a=B;B=1;var u=D;D|=4,Za.current=null,p1(n,t),Lc(t,n),zy(bi),uo=!!zi,bi=zi=null,n.current=t,f1(t),Ud(),D=u,B=a,On.transition=i}else n.current=t;if(zr&&(zr=!1,Ce=n,Fo=o),i=n.pendingLanes,i===0&&(Ee=null),Qd(t.stateNode),Fn(n,X()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)o=e[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,n=aa,aa=null,n;return Fo&1&&n.tag!==0&&Pt(),i=n.pendingLanes,i&1?n===ua?nr++:(nr=0,ua=n):nr=0,Le(),null}function Pt(){if(Ce!==null){var n=Cs(Fo),e=On.transition,t=B;try{if(On.transition=null,B=16>n?16:n,Ce===null)var r=!1;else{if(n=Ce,Ce=null,Fo=0,D&6)throw Error(S(331));var o=D;for(D|=4,k=n.current;k!==null;){var i=k,a=i.child;if(k.flags&16){var u=i.deletions;if(u!==null){for(var l=0;l<u.length;l++){var d=u[l];for(k=d;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:Xt(8,m,i)}var f=m.child;if(f!==null)f.return=m,k=f;else for(;k!==null;){m=k;var g=m.sibling,P=m.return;if(Nc(m),m===d){k=null;break}if(g!==null){g.return=P,k=g;break}k=P}}}var h=i.alternate;if(h!==null){var x=h.child;if(x!==null){h.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}k=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,k=a;else n:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,k=y;break n}k=i.return}}var s=n.current;for(k=s;k!==null;){a=k;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,k=p;else n:for(a=s;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Oo(9,u)}}catch(w){K(u,u.return,w)}if(u===a){k=null;break n}var v=u.sibling;if(v!==null){v.return=u.return,k=v;break n}k=u.return}}if(D=o,Le(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(No,n)}catch{}r=!0}return r}finally{B=t,On.transition=e}}return!1}function hl(n,e,t){e=At(t,e),e=Cc(n,e,1),n=Fe(n,e,1),e=fn(),n!==null&&(vr(n,1,e),Fn(n,e))}function K(n,e,t){if(n.tag===3)hl(n,n,t);else for(;e!==null;){if(e.tag===3){hl(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ee===null||!Ee.has(r))){n=At(t,n),n=vc(e,n,1),e=Fe(e,n,1),n=fn(),e!==null&&(vr(e,1,n),Fn(e,n));break}}e=e.return}}function P1(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,on===n&&(un&t)===t&&(tn===4||tn===3&&(un&130023424)===un&&500>X()-Xa?Ue(n,0):Ja|=t),Fn(n,e)}function zc(n,e){e===0&&(n.mode&1?(e=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):e=1);var t=fn();n=le(n,e),n!==null&&(vr(n,e,t),Fn(n,t))}function S1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zc(n,t)}function x1(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,o=n.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),zc(n,t)}var bc;bc=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xn.current)Sn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Sn=!1,s1(n,e,t);Sn=!!(n.flags&131072)}else Sn=!1,U&&e.flags&1048576&&Us(e,go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xr(n,e),n=e.pendingProps;var o=xt(e,yn.current);vt(e,t),o=Ya(null,e,r,n,o,t);var i=Wa();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(r)?(i=!0,po(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ba(e),o.updater=Do,e.stateNode=o,o._reactInternals=e,Ki(e,r,n,t),e=Xi(null,e,r,!0,i,t)):(e.tag=0,U&&i&&_a(e),pn(null,e,o,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Xr(n,e),n=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=F1(r),n=Gn(r,n),o){case 0:e=Ji(null,e,r,n,t);break n;case 1:e=ul(null,e,r,n,t);break n;case 11:e=il(null,e,r,n,t);break n;case 14:e=al(null,e,r,Gn(r.type,n),t);break n}throw Error(S(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Gn(r,o),Ji(n,e,r,o,t);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Gn(r,o),ul(n,e,r,o,t);case 3:n:{if(wc(e),n===null)throw Error(S(387));r=e.pendingProps,i=e.memoizedState,o=i.element,Zs(n,e),Co(e,r,null,t);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=At(Error(S(423)),e),e=ll(n,e,r,t,o);break n}else if(r!==o){o=At(Error(S(424)),e),e=ll(n,e,r,t,o);break n}else for(kn=we(e.stateNode.containerInfo.firstChild),Nn=e,U=!0,Un=null,t=$s(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wt(),r===o){e=se(n,e,t);break n}pn(n,e,r,t)}e=e.child}return e;case 5:return Js(e),n===null&&Wi(e),r=e.type,o=e.pendingProps,i=n!==null?n.memoizedProps:null,a=o.children,Ii(r,o)?a=null:i!==null&&Ii(r,i)&&(e.flags|=32),xc(n,e),pn(n,e,a,t),e.child;case 6:return n===null&&Wi(e),null;case 13:return Fc(n,e,t);case 4:return Ia(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Ft(e,null,r,t):pn(n,e,r,t),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Gn(r,o),il(n,e,r,o,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,a=o.value,b(mo,r._currentValue),r._currentValue=a,i!==null)if(Qn(i.value,a)){if(i.children===o.children&&!xn.current){e=se(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var l=u.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=ie(-1,t&-t),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?l.next=l:(l.next=m.next,m.next=l),d.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Qi(i.return,t,e),u.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),Qi(a,t,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}pn(n,e,o.children,t),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,vt(e,t),o=Bn(o),r=r(o),e.flags|=1,pn(n,e,r,t),e.child;case 14:return r=e.type,o=Gn(r,e.pendingProps),o=Gn(r.type,o),al(n,e,r,o,t);case 15:return Pc(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Gn(r,o),Xr(n,e),e.tag=1,wn(r)?(n=!0,po(e)):n=!1,vt(e,t),hc(e,r,o),Ki(e,r,o,t),Xi(null,e,r,!0,n,t);case 19:return Ec(n,e,t);case 22:return Sc(n,e,t)}throw Error(S(156,e.tag))};function Ic(n,e){return fs(n,e)}function w1(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,e,t,r){return new w1(n,e,t,r)}function tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function F1(n){if(typeof n=="function")return tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Sa)return 11;if(n===xa)return 14}return 2}function Ve(n,e){var t=n.alternate;return t===null?(t=Dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function eo(n,e,t,r,o,i){var a=2;if(r=n,typeof n=="function")tu(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case ot:return Ye(t.children,o,i,e);case Pa:a=8,o|=8;break;case vi:return n=Dn(12,t,e,o|2),n.elementType=vi,n.lanes=i,n;case Pi:return n=Dn(13,t,e,o),n.elementType=Pi,n.lanes=i,n;case Si:return n=Dn(19,t,e,o),n.elementType=Si,n.lanes=i,n;case Jl:return zo(t,o,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Kl:a=10;break n;case Zl:a=9;break n;case Sa:a=11;break n;case xa:a=14;break n;case pe:a=16,r=null;break n}throw Error(S(130,n==null?n:typeof n,""))}return e=Dn(a,t,e,o),e.elementType=n,e.type=r,e.lanes=i,e}function Ye(n,e,t,r){return n=Dn(7,n,r,e),n.lanes=t,n}function zo(n,e,t,r){return n=Dn(22,n,r,e),n.elementType=Jl,n.lanes=t,n.stateNode={isHidden:!1},n}function mi(n,e,t){return n=Dn(6,n,null,e),n.lanes=t,n}function hi(n,e,t){return e=Dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function E1(n,e,t,r,o){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ru(n,e,t,r,o,i,a,u,l){return n=new E1(n,e,t,u,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Dn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(i),n}function A1(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rt,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function Gc(n){if(!n)return Ne;n=n._reactInternals;n:{if(Xe(n)!==n||n.tag!==1)throw Error(S(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(S(171))}if(n.tag===1){var t=n.type;if(wn(t))return Gs(n,t,e)}return e}function Hc(n,e,t,r,o,i,a,u,l){return n=ru(t,r,!0,n,o,i,a,u,l),n.context=Gc(null),t=n.current,r=fn(),o=Ae(t),i=ie(r,o),i.callback=e??null,Fe(t,i,o),n.current.lanes=o,vr(n,o,r),Fn(n,r),n}function bo(n,e,t,r){var o=e.current,i=fn(),a=Ae(o);return t=Gc(t),e.context===null?e.context=t:e.pendingContext=t,e=ie(i,a),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=Fe(o,e,a),n!==null&&(Wn(n,o,a,i),Kr(n,o,a)),a}function Ao(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cl(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ou(n,e){Cl(n,e),(n=n.alternate)&&Cl(n,e)}function V1(){return null}var Uc=typeof reportError=="function"?reportError:function(n){console.error(n)};function iu(n){this._internalRoot=n}Io.prototype.render=iu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(S(409));bo(n,e,null,null)};Io.prototype.unmount=iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ze(function(){bo(null,n,null,null)}),e[ue]=null}};function Io(n){this._internalRoot=n}Io.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ss();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ge.length&&e!==0&&e<ge[t].priority;t++);ge.splice(t,0,n),t===0&&ws(n)}};function au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Go(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vl(){}function k1(n,e,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Ao(a);i.call(d)}}var a=Hc(e,r,n,0,null,!1,!1,"",vl);return n._reactRootContainer=a,n[ue]=a.current,sr(n.nodeType===8?n.parentNode:n),Ze(),a}for(;o=n.lastChild;)n.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var d=Ao(l);u.call(d)}}var l=ru(n,0,!1,null,null,!1,!1,"",vl);return n._reactRootContainer=l,n[ue]=l.current,sr(n.nodeType===8?n.parentNode:n),Ze(function(){bo(e,l,t,r)}),l}function Ho(n,e,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var u=o;o=function(){var l=Ao(a);u.call(l)}}bo(e,a,n,o)}else a=k1(t,e,n,o,r);return Ao(a)}vs=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ut(e.pendingLanes);t!==0&&(Ea(e,t|1),Fn(e,X()),!(D&6)&&(Vt=X()+500,Le()))}break;case 13:Ze(function(){var r=le(n,1);if(r!==null){var o=fn();Wn(r,n,1,o)}}),ou(n,1)}};Aa=function(n){if(n.tag===13){var e=le(n,134217728);if(e!==null){var t=fn();Wn(e,n,134217728,t)}ou(n,134217728)}};Ps=function(n){if(n.tag===13){var e=Ae(n),t=le(n,e);if(t!==null){var r=fn();Wn(t,n,e,r)}ou(n,e)}};Ss=function(){return B};xs=function(n,e){var t=B;try{return B=n,e()}finally{B=t}};Ti=function(n,e,t){switch(e){case"input":if(Fi(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var o=_o(r);if(!o)throw Error(S(90));ql(r),Fi(r,o)}}}break;case"textarea":es(n,t);break;case"select":e=t.value,e!=null&&gt(n,!!t.multiple,e,!1)}};ls=qa;ss=Ze;var N1={usingClientEntryPoint:!1,Events:[Sr,lt,_o,as,us,qa]},bt={findFiberByHostInstance:Ie,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M1={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ys(n),n===null?null:n.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{No=br.inject(M1),Xn=br}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;Tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(e))throw Error(S(200));return A1(n,e,null,t)};Tn.createRoot=function(n,e){if(!au(n))throw Error(S(299));var t=!1,r="",o=Uc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=ru(n,1,!1,null,null,t,!1,r,o),n[ue]=e.current,sr(n.nodeType===8?n.parentNode:n),new iu(e)};Tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(S(188)):(n=Object.keys(n).join(","),Error(S(268,n)));return n=ys(e),n=n===null?null:n.stateNode,n};Tn.flushSync=function(n){return Ze(n)};Tn.hydrate=function(n,e,t){if(!Go(e))throw Error(S(200));return Ho(null,n,e,!0,t)};Tn.hydrateRoot=function(n,e,t){if(!au(n))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Uc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Hc(e,null,n,1,t??null,o,!1,i,a),n[ue]=e.current,sr(n),r)for(n=0;n<r.length;n++)t=r[n],o=t._getVersion,o=o(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,o]:e.mutableSourceEagerHydrationData.push(t,o);return new Io(e)};Tn.render=function(n,e,t){if(!Go(e))throw Error(S(200));return Ho(null,n,e,!1,t)};Tn.unmountComponentAtNode=function(n){if(!Go(n))throw Error(S(40));return n._reactRootContainer?(Ze(function(){Ho(null,null,n,!1,function(){n._reactRootContainer=null,n[ue]=null})}),!0):!1};Tn.unstable_batchedUpdates=qa;Tn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Go(t))throw Error(S(200));if(n==null||n._reactInternals===void 0)throw Error(S(38));return Ho(n,e,t,!1,r)};Tn.version="18.3.1-next-f1338f8080-20240426";function Yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc)}catch(n){console.error(n)}}Yc(),Yl.exports=Tn;var uu=Yl.exports,Wc,Pl=uu;Wc=Pl.createRoot,Pl.hydrateRoot;const T1="modulepreload",L1=function(n){return"/"+n},Sl={},_1=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=L1(l),l in Sl)return;Sl[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":T1,d||(f.as="script"),f.crossOrigin="",f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),d)return new Promise((g,P)=>{f.addEventListener("load",g),f.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return o.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return e().catch(i)})},R1=C.createContext(null);function j1(n,e){const t=Array.isArray(n)?n[0]:n?n.x:0,r=Array.isArray(n)?n[1]:n?n.y:0,o=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0;return t===o&&r===i}function Pn(n,e){if(n===e)return!0;if(!n||!e)return!1;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Pn(n[t],e[t]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof n=="object"&&typeof e=="object"){const t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(const o of t)if(!e.hasOwnProperty(o)||!Pn(n[o],e[o]))return!1;return!0}return!1}function xl(n){return{longitude:n.center.lng,latitude:n.center.lat,zoom:n.zoom,pitch:n.pitch,bearing:n.bearing,padding:n.padding}}function wl(n,e){const t=e.viewState||e,r={};if("longitude"in t&&"latitude"in t&&(t.longitude!==n.center.lng||t.latitude!==n.center.lat)){const o=n.center.constructor;r.center=new o(t.longitude,t.latitude)}return"zoom"in t&&t.zoom!==n.zoom&&(r.zoom=t.zoom),"bearing"in t&&t.bearing!==n.bearing&&(r.bearing=t.bearing),"pitch"in t&&t.pitch!==n.pitch&&(r.pitch=t.pitch),t.padding&&n.padding&&!Pn(t.padding,n.padding)&&(r.padding=t.padding),r}const D1=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function Fl(n){if(!n)return null;if(typeof n=="string"||("toJS"in n&&(n=n.toJS()),!n.layers))return n;const e={};for(const r of n.layers)e[r.id]=r;const t=n.layers.map(r=>{let o=null;"interactive"in r&&(o=Object.assign({},r),delete o.interactive);const i=e[r.ref];if(i){o=o||Object.assign({},r),delete o.ref;for(const a of D1)a in i&&(o[a]=i[a])}return o||r});return{...n,layers:t}}const El={version:8,sources:{},layers:[]},Al={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},Vl={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},kl={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},O1=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],B1=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class kt{constructor(e,t,r){this._map=null,this._internalUpdate=!1,this._hoveredFeatures=null,this._propsedCameraUpdate=null,this._styleComponents={},this._onEvent=o=>{const i=this.props[kl[o.type]];i?i(o):o.type==="error"&&console.error(o.error)},this._onCameraEvent=o=>{if(this._internalUpdate)return;o.viewState=this._propsedCameraUpdate||xl(this._map.transform);const i=this.props[Vl[o.type]];i&&i(o)},this._onCameraUpdate=o=>this._internalUpdate?o:(this._propsedCameraUpdate=xl(o),wl(o,this.props)),this._onPointerEvent=o=>{(o.type==="mousemove"||o.type==="mouseout")&&this._updateHover(o);const i=this.props[Al[o.type]];i&&(this.props.interactiveLayerIds&&o.type!=="mouseover"&&o.type!=="mouseout"&&(o.features=this._hoveredFeatures||this._queryRenderedFeatures(o.point)),i(o),delete o.features)},this._MapClass=e,this.props=t,this._initialize(r)}get map(){return this._map}setProps(e){const t=this.props;this.props=e;const r=this._updateSettings(e,t),o=this._updateSize(e),i=this._updateViewState(e);this._updateStyle(e,t),this._updateStyleComponents(e),this._updateHandlers(e,t),(r||o||i&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const r=kt.savedMaps.pop();if(!r)return null;const o=r.map,i=o.getContainer();for(t.className=i.className;i.childNodes.length>0;)t.appendChild(i.childNodes[0]);o._container=t;const a=o._resizeObserver;a&&(a.disconnect(),a.observe(t)),r.setProps({...e,styleDiffing:!1}),o.resize();const{initialViewState:u}=e;return u&&(u.bounds?o.fitBounds(u.bounds,{...u.fitBoundsOptions,duration:0}):r._updateViewState(u)),o.isStyleLoaded()?o.fire("load"):o.once("style.load",()=>o.fire("load")),o._update(),r}_initialize(e){const{props:t}=this,{mapStyle:r=El}=t,o={...t,...t.initialViewState,container:e,style:Fl(r)},i=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),t.gl){const u=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=u,t.gl)}const a=new this._MapClass(o);i.padding&&a.setPadding(i.padding),t.cursor&&(a.getCanvas().style.cursor=t.cursor),a.transformCameraUpdate=this._onCameraUpdate,a.on("style.load",()=>{var u;this._styleComponents={light:a.getLight(),sky:a.getSky(),projection:(u=a.getProjection)==null?void 0:u.call(a),terrain:a.getTerrain()},this._updateStyleComponents(this.props)}),a.on("sourcedata",()=>{this._updateStyleComponents(this.props)});for(const u in Al)a.on(u,this._onPointerEvent);for(const u in Vl)a.on(u,this._onCameraEvent);for(const u in kl)a.on(u,this._onEvent);this._map=a}recycle(){const t=this.map.getContainer().querySelector("[mapboxgl-children]");t==null||t.remove(),kt.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_updateSize(e){const{viewState:t}=e;if(t){const r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e){const t=this._map,r=t.transform;if(!t.isMoving()){const i=wl(r,e);if(Object.keys(i).length>0)return this._internalUpdate=!0,t.jumpTo(i),this._internalUpdate=!1,!0}return!1}_updateSettings(e,t){const r=this._map;let o=!1;for(const i of O1)if(i in e&&!Pn(e[i],t[i])){o=!0;const a=r[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(r,e[i])}return o}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){const{mapStyle:r=El,styleDiffing:o=!0}=e,i={diff:o};"localIdeographFontFamily"in e&&(i.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(Fl(r),i)}}_updateStyleComponents({light:e,projection:t,sky:r,terrain:o}){var u,l;const i=this._map,a=this._styleComponents;i.style._loaded&&(e&&!Pn(e,a.light)&&(a.light=e,i.setLight(e)),t&&!Pn(t,a.projection)&&t!==((u=a.projection)==null?void 0:u.type)&&(a.projection=typeof t=="string"?{type:t}:t,(l=i.setProjection)==null||l.call(i,a.projection)),r&&!Pn(r,a.sky)&&(a.sky=r,i.setSky(r)),o!==void 0&&!Pn(o,a.terrain)&&(!o||i.getSource(o.source))&&(a.terrain=o,i.setTerrain(o)))}_updateHandlers(e,t){const r=this._map;for(const o of B1){const i=e[o]??!0,a=t[o]??!0;Pn(i,a)||(i?r[o].enable(i):r[o].disable())}}_queryRenderedFeatures(e){const t=this._map,{interactiveLayerIds:r=[]}=this.props;try{return t.queryRenderedFeatures(e,{layers:r.filter(t.getLayer.bind(t))})}catch{return[]}}_updateHover(e){var o;const{props:t}=this;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){const i=e.type,a=((o=this._hoveredFeatures)==null?void 0:o.length)>0,u=this._queryRenderedFeatures(e.point),l=u.length>0;!l&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=u,l&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=i}else this._hoveredFeatures=null}}kt.savedMaps=[];const z1=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function b1(n){if(!n)return null;const e=n.map,t={getMap:()=>e};for(const r of I1(e))!(r in t)&&!z1.includes(r)&&(t[r]=e[r].bind(e));return t}function I1(n){const e=new Set;let t=n;for(;t;){for(const r of Object.getOwnPropertyNames(t))r[0]!=="_"&&typeof n[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);t=Object.getPrototypeOf(t)}return Array.from(e)}const G1=typeof document<"u"?C.useLayoutEffect:C.useEffect;function H1(n,e){const{RTLTextPlugin:t,maxParallelImageRequests:r,workerCount:o,workerUrl:i}=e;if(t&&n.getRTLTextPluginStatus&&n.getRTLTextPluginStatus()==="unavailable"){const{pluginUrl:a,lazy:u=!0}=typeof t=="string"?{pluginUrl:t}:t;n.setRTLTextPlugin(a,l=>{l&&console.error(l)},u)}r!==void 0&&n.setMaxParallelImageRequests(r),o!==void 0&&n.setWorkerCount(o),i!==void 0&&n.setWorkerUrl(i)}const Lt=C.createContext(null);function U1(n,e){const t=C.useContext(R1),[r,o]=C.useState(null),i=C.useRef(),{current:a}=C.useRef({mapLib:null,map:null});C.useEffect(()=>{const d=n.mapLib;let m=!0,f;return Promise.resolve(d||_1(()=>import("./maplibre-gl-CuIngXYy.js").then(g=>g.m),[])).then(g=>{if(!m)return;if(!g)throw new Error("Invalid mapLib");const P="Map"in g?g:g.default;if(!P.Map)throw new Error("Invalid mapLib");H1(P,n),n.reuseMaps&&(f=kt.reuse(n,i.current)),f||(f=new kt(P.Map,n,i.current)),a.map=b1(f),a.mapLib=P,o(f),t==null||t.onMapMount(a.map,n.id)}).catch(g=>{const{onError:P}=n;P?P({type:"error",target:null,originalEvent:null,error:g}):console.error(g)}),()=>{m=!1,f&&(t==null||t.onMapUnmount(n.id),n.reuseMaps?f.recycle():f.destroy())}},[]),G1(()=>{r&&r.setProps(n)}),C.useImperativeHandle(e,()=>a.map,[r]);const u=C.useMemo(()=>({position:"relative",width:"100%",height:"100%",...n.style}),[n.style]),l={height:"100%"};return C.createElement("div",{id:n.id,ref:i,style:u},r&&C.createElement(Lt.Provider,{value:a},C.createElement("div",{"mapboxgl-children":"",style:l},n.children)))}const Y1=C.forwardRef(U1),W1=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function de(n,e){if(!n||!e)return;const t=n.style;for(const r in e){const o=e[r];Number.isFinite(o)&&!W1.test(r)?t[r]=`${o}px`:t[r]=o}}function Qc(n,e){if(n===e)return null;const t=Nl(n),r=Nl(e),o=[];for(const i of r)t.has(i)||o.push(i);for(const i of t)r.has(i)||o.push(i);return o.length===0?null:o}function Nl(n){return new Set(n?n.trim().split(/\s+/):[])}C.memo(C.forwardRef((n,e)=>{const{map:t,mapLib:r}=C.useContext(Lt),o=C.useRef({props:n}),i=C.useMemo(()=>{let y=!1;C.Children.forEach(n.children,v=>{v&&(y=!0)});const s={...n,element:y?document.createElement("div"):void 0},p=new r.Marker(s);return p.setLngLat([n.longitude,n.latitude]),p.getElement().addEventListener("click",v=>{var w,A;(A=(w=o.current.props).onClick)==null||A.call(w,{type:"click",target:p,originalEvent:v})}),p.on("dragstart",v=>{var A,V;const w=v;w.lngLat=i.getLngLat(),(V=(A=o.current.props).onDragStart)==null||V.call(A,w)}),p.on("drag",v=>{var A,V;const w=v;w.lngLat=i.getLngLat(),(V=(A=o.current.props).onDrag)==null||V.call(A,w)}),p.on("dragend",v=>{var A,V;const w=v;w.lngLat=i.getLngLat(),(V=(A=o.current.props).onDragEnd)==null||V.call(A,w)}),p},[]);C.useEffect(()=>(i.addTo(t.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:u,offset:l,style:d,draggable:m=!1,popup:f=null,rotation:g=0,rotationAlignment:P="auto",pitchAlignment:h="auto"}=n;C.useEffect(()=>{de(i.getElement(),d)},[d]),C.useImperativeHandle(e,()=>i,[]);const x=o.current.props;(i.getLngLat().lng!==a||i.getLngLat().lat!==u)&&i.setLngLat([a,u]),l&&!j1(i.getOffset(),l)&&i.setOffset(l),i.isDraggable()!==m&&i.setDraggable(m),i.getRotation()!==g&&i.setRotation(g),i.getRotationAlignment()!==P&&i.setRotationAlignment(P),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==f&&i.setPopup(f);const E=Qc(x.className,n.className);if(E)for(const y of E)i.toggleClassName(y);return o.current.props=n,uu.createPortal(n.children,i.getElement())}));const Q1=C.memo(C.forwardRef((n,e)=>{const{map:t,mapLib:r}=C.useContext(Lt),o=C.useMemo(()=>document.createElement("div"),[]),i=C.useRef({props:n}),a=C.useMemo(()=>{const u={...n},l=new r.Popup(u);return l.setLngLat([n.longitude,n.latitude]),l.once("open",d=>{var m,f;(f=(m=i.current.props).onOpen)==null||f.call(m,d)}),l},[]);if(C.useEffect(()=>{const u=l=>{var d,m;(m=(d=i.current.props).onClose)==null||m.call(d,l)};return a.on("close",u),a.setDOMContent(o).addTo(t.getMap()),()=>{a.off("close",u),a.isOpen()&&a.remove()}},[]),C.useEffect(()=>{de(a.getElement(),n.style)},[n.style]),C.useImperativeHandle(e,()=>a,[]),a.isOpen()){const u=i.current.props;(a.getLngLat().lng!==n.longitude||a.getLngLat().lat!==n.latitude)&&a.setLngLat([n.longitude,n.latitude]),n.offset&&!Pn(u.offset,n.offset)&&a.setOffset(n.offset),(u.anchor!==n.anchor||u.maxWidth!==n.maxWidth)&&(a.options.anchor=n.anchor,a.setMaxWidth(n.maxWidth));const l=Qc(u.className,n.className);if(l)for(const d of l)a.toggleClassName(d);i.current.props=n}return uu.createPortal(n.children,o)}));function qe(n,e,t,r){const o=C.useContext(Lt),i=C.useMemo(()=>n(o),[]);return C.useEffect(()=>{const a=e,u=null,l=typeof e=="function"?e:null,{map:d}=o;return d.hasControl(i)||(d.addControl(i,a==null?void 0:a.position),u&&u(o)),()=>{l&&l(o),d.hasControl(i)&&d.removeControl(i)}},[]),i}function $1(n){const e=qe(({mapLib:t})=>new t.AttributionControl(n),{position:n.position});return C.useEffect(()=>{de(e._container,n.style)},[n.style]),null}C.memo($1);function K1(n){const e=qe(({mapLib:t})=>new t.FullscreenControl({container:n.containerId&&document.getElementById(n.containerId)}),{position:n.position});return C.useEffect(()=>{de(e._controlContainer,n.style)},[n.style]),null}C.memo(K1);function Z1(n,e){const t=C.useRef({props:n}),r=qe(({mapLib:o})=>{const i=new o.GeolocateControl(n),a=i._setupUI;return i._setupUI=()=>{i._container.hasChildNodes()||a()},i.on("geolocate",u=>{var l,d;(d=(l=t.current.props).onGeolocate)==null||d.call(l,u)}),i.on("error",u=>{var l,d;(d=(l=t.current.props).onError)==null||d.call(l,u)}),i.on("outofmaxbounds",u=>{var l,d;(d=(l=t.current.props).onOutOfMaxBounds)==null||d.call(l,u)}),i.on("trackuserlocationstart",u=>{var l,d;(d=(l=t.current.props).onTrackUserLocationStart)==null||d.call(l,u)}),i.on("trackuserlocationend",u=>{var l,d;(d=(l=t.current.props).onTrackUserLocationEnd)==null||d.call(l,u)}),i},{position:n.position});return t.current.props=n,C.useImperativeHandle(e,()=>r,[]),C.useEffect(()=>{de(r._container,n.style)},[n.style]),null}C.memo(C.forwardRef(Z1));function J1(n){const e=qe(({mapLib:t})=>new t.NavigationControl(n),{position:n.position});return C.useEffect(()=>{de(e._container,n.style)},[n.style]),null}C.memo(J1);function X1(n){const e=qe(({mapLib:i})=>new i.ScaleControl(n),{position:n.position}),t=C.useRef(n),r=t.current;t.current=n;const{style:o}=n;return n.maxWidth!==void 0&&n.maxWidth!==r.maxWidth&&(e.options.maxWidth=n.maxWidth),n.unit!==void 0&&n.unit!==r.unit&&e.setUnit(n.unit),C.useEffect(()=>{de(e._container,o)},[o]),null}C.memo(X1);function q1(n){const e=qe(({mapLib:t})=>new t.TerrainControl(n),{position:n.position});return C.useEffect(()=>{de(e._container,n.style)},[n.style]),null}C.memo(q1);function np(n){const e=qe(({mapLib:t})=>new t.LogoControl(n),{position:n.position});return C.useEffect(()=>{de(e._container,n.style)},[n.style]),null}C.memo(np);function Vo(n,e){if(!n)throw new Error(e)}let ep=0;function tp(n,e,t){if(n.style&&n.style._loaded){const r={...t};return delete r.id,delete r.children,n.addSource(e,r),n.getSource(e)}return null}function rp(n,e,t){var a,u,l;Vo(e.id===t.id,"source id changed"),Vo(e.type===t.type,"source type changed");let r="",o=0;for(const d in e)d!=="children"&&d!=="id"&&!Pn(t[d],e[d])&&(r=d,o++);if(!o)return;const i=e.type;if(i==="geojson")n.setData(e.data);else if(i==="image")n.updateImage({url:e.url,coordinates:e.coordinates});else switch(r){case"coordinates":(a=n.setCoordinates)==null||a.call(n,e.coordinates);break;case"url":(u=n.setUrl)==null||u.call(n,e.url);break;case"tiles":(l=n.setTiles)==null||l.call(n,e.tiles);break;default:console.warn(`Unable to update <Source> prop: ${r}`)}}function Ml(n){const e=C.useContext(Lt).map.getMap(),t=C.useRef(n),[,r]=C.useState(0),o=C.useMemo(()=>n.id||`jsx-source-${ep++}`,[]);C.useEffect(()=>{if(e){const a=()=>setTimeout(()=>r(u=>u+1),0);return e.on("styledata",a),a(),()=>{var u;if(e.off("styledata",a),e.style&&e.style._loaded&&e.getSource(o)){const l=(u=e.getStyle())==null?void 0:u.layers;if(l)for(const d of l)d.source===o&&e.removeLayer(d.id);e.removeSource(o)}}}},[e]);let i=e&&e.style&&e.getSource(o);return i?rp(i,n,t.current):i=tp(e,o,n),t.current=n,i&&C.Children.map(n.children,a=>a&&C.cloneElement(a,{source:o}))||null}function op(n,e,t,r){if(Vo(t.id===r.id,"layer id changed"),Vo(t.type===r.type,"layer type changed"),t.type==="custom"||r.type==="custom")return;const{layout:o={},paint:i={},filter:a,minzoom:u,maxzoom:l,beforeId:d}=t;if(d!==r.beforeId&&n.moveLayer(e,d),o!==r.layout){const m=r.layout||{};for(const f in o)Pn(o[f],m[f])||n.setLayoutProperty(e,f,o[f]);for(const f in m)o.hasOwnProperty(f)||n.setLayoutProperty(e,f,void 0)}if(i!==r.paint){const m=r.paint||{};for(const f in i)Pn(i[f],m[f])||n.setPaintProperty(e,f,i[f]);for(const f in m)i.hasOwnProperty(f)||n.setPaintProperty(e,f,void 0)}Pn(a,r.filter)||n.setFilter(e,a),(u!==r.minzoom||l!==r.maxzoom)&&n.setLayerZoomRange(e,u,l)}function ip(n,e,t){if(n.style&&n.style._loaded&&(!("source"in t)||n.getSource(t.source))){const r={...t,id:e};delete r.beforeId,n.addLayer(r,t.beforeId)}}let ap=0;function Ir(n){const e=C.useContext(Lt).map.getMap(),t=C.useRef(n),[,r]=C.useState(0),o=C.useMemo(()=>n.id||`jsx-layer-${ap++}`,[]);if(C.useEffect(()=>{if(e){const a=()=>r(u=>u+1);return e.on("styledata",a),a(),()=>{e.off("styledata",a),e.style&&e.style._loaded&&e.getLayer(o)&&e.removeLayer(o)}}},[e]),e&&e.style&&e.getLayer(o))try{op(e,o,n,t.current)}catch(a){console.warn(a)}else ip(e,o,n);return t.current=n,null}function O(n){const e=Number(n);return isNaN(e)?0:e}function ne(n,e=3){const t=Number(n);return isNaN(t)?"N/A":t.toFixed(e)}function up({value:n,invert:e=!1}){const t=Math.min(Math.max(n,0),1)*100,r=e?n>.66?"bg-red-500":n>.33?"bg-yellow-500":"bg-green-500":n>.66?"bg-green-500":n>.33?"bg-yellow-500":"bg-red-500";return c.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1.5 mt-1",children:c.jsx("div",{className:`${r} h-1.5 rounded-full transition-all`,style:{width:`${t}%`}})})}function It({title:n,children:e}){return c.jsxs("div",{className:"mb-5",children:[c.jsx("h3",{className:"text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3",children:n}),c.jsx("div",{className:"space-y-3",children:e})]})}function $({label:n,value:e,display:t,bar:r,invert:o}){return c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsx("span",{className:"text-gray-400 text-sm",children:n}),c.jsx("span",{className:"text-white text-sm font-medium",children:t})]}),r&&c.jsx(up,{value:e,invert:o})]})}function lp({prediction:n,onClose:e}){if(!n)return null;const t=n.prediction_prob,r=t!=null&&!isNaN(t),o=r?t<.05?"Very Low":t<.15?"Moderate":t<.3?"Elevated":"High":"No Prediction Available",i=r?t<.05?"text-green-400":t<.15?"text-yellow-400":t<.3?"text-orange-400":"text-red-400":"text-gray-400",a=n.liberal_democracy?"Liberal Democracy":n.electoral_democracy?"Electoral Democracy":n.electoral_autocracy?"Electoral Autocracy":n.closed_autocracy?"Closed Autocracy":"Unknown";return c.jsxs("div",{className:"absolute right-0 top-0 h-full w-80 bg-[#0f1117] border-l border-gray-800 z-10 flex flex-col shadow-2xl",children:[c.jsxs("div",{className:"flex items-start justify-between p-4 border-b border-gray-800",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"font-bold text-white text-xl",children:n.country}),c.jsxs("p",{className:"text-gray-400 text-xs mt-0.5",children:[n.year," · Month ",n.month]})]}),c.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white text-lg mt-0.5",children:"✕"})]}),c.jsxs("div",{className:"px-4 py-3 border-b border-gray-800 bg-[#13151f]",children:[c.jsxs("div",{className:"flex justify-between items-center mb-1",children:[c.jsx("span",{className:"text-gray-400 text-sm",children:"Coup Probability"}),c.jsx("span",{className:`font-bold text-lg ${i}`,children:r?`${(t*100).toFixed(4)}%`:"N/A"})]}),r?c.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:c.jsx("div",{className:`h-2 rounded-full transition-all ${t<.05?"bg-green-500":t<.15?"bg-yellow-500":t<.3?"bg-orange-500":"bg-red-500"}`,style:{width:`${Math.min(t/.3,1)*100}%`}})}):c.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2"}),c.jsx("p",{className:`text-xs mt-1 font-medium ${i}`,children:r?`${o} Risk`:o})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[c.jsxs(It,{title:"Governance",children:[c.jsx($,{label:"Regime Type",value:0,display:a}),c.jsx($,{label:"Democracy Level",value:O(n.Democracy_level),display:ne(n.Democracy_level),bar:!0}),c.jsx($,{label:"Military Regime",value:O(n.Military_regime),display:O(n.Military_regime)===1?"Yes":"No"}),c.jsx($,{label:"Military Influence",value:O(n.Military_influence),display:O(n.Military_influence)===1?"Yes":"No"}),c.jsx($,{label:"Leader Age",value:O(n.Leader_age)/100,display:n.Leader_age!=null?`${n.Leader_age} years`:"N/A"}),c.jsx($,{label:"Leader Duration",value:O(n.Leader_duration)/30,display:n.Leader_duration!=null?`${n.Leader_duration} years`:"N/A"})]}),c.jsxs(It,{title:"Economy",children:[c.jsx($,{label:"GDP per Capita (log)",value:0,display:ne(n.GDP_per_cap,4)}),c.jsx($,{label:"Change in GDP per Capita",value:(O(n.Change_GDP_per_cap)+.2)/.4,display:n.Change_GDP_per_cap!=null?`${(O(n.Change_GDP_per_cap)*100).toFixed(2)}%`:"N/A",bar:!0}),c.jsx($,{label:"Inflation",value:Math.min(O(n.Inflation)/20,1),display:n.Inflation!=null?`${O(n.Inflation).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),c.jsx($,{label:"Trade (% of GDP)",value:Math.min(O(n.Trade)/100,1),display:n.Trade!=null?`${O(n.Trade).toFixed(2)}%`:"N/A",bar:!0})]}),c.jsxs(It,{title:"Society",children:[c.jsx($,{label:"Women's Political Participation",value:O(n.Women_political_participation),display:ne(n.Women_political_participation),bar:!0}),c.jsx($,{label:"Women's Civil Liberties",value:O(n.wom_civlib),display:ne(n.wom_civlib),bar:!0}),c.jsx($,{label:"Women's Political Employment",value:O(n.women_polemp),display:ne(n.women_polemp),bar:!0}),c.jsx($,{label:"Protests",value:Math.min(O(n.Protests)/5,1),display:ne(n.Protests),bar:!0,invert:!0}),c.jsx($,{label:"Civil Wars",value:O(n.Civil_wars),display:O(n.Civil_wars)===1?"Yes":"No"})]}),c.jsxs(It,{title:"Military",children:[c.jsx($,{label:"Military Expenditure",value:Math.min(O(n.milex)/30,1),display:n.milex!=null?`${O(n.milex).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),c.jsx($,{label:"Military Personnel",value:Math.min(O(n.milper)/10,1),display:ne(n.milper,4),bar:!0}),c.jsx($,{label:"Soldier Quality",value:Math.min(O(n.solqual)/5,1),display:ne(n.solqual,4),bar:!0}),c.jsx($,{label:"Mobilization Concentration",value:O(n.mobil_conc),display:ne(n.mobil_conc),bar:!0})]}),c.jsxs(It,{title:"Context",children:[c.jsx($,{label:"Neighboring Coup",value:O(n.neighboring_coup),display:O(n.neighboring_coup)===1?"Yes":"No"}),c.jsx($,{label:"Cold War Period",value:O(n.Cold_war),display:O(n.Cold_war)===1?"Yes":"No"}),c.jsx($,{label:"Foreign Visit",value:O(n.visit),display:O(n.visit)===1?"Yes":"No"})]})]})]})}const jn={successful:"#f59e0b",failed:"#ef4444",attempted:"#f97316",plot:"#64748b",alleged:"#64748b"},et={successful:"Successful",failed:"Failed",attempted:"Attempted",plot:"Plot",alleged:"Alleged"},$c={successful:{color:jn.successful,label:et.successful,badgeClass:"bg-emerald-500/20 text-emerald-300",dotClass:"bg-emerald-400"},failed:{color:jn.failed,label:et.failed,badgeClass:"bg-red-500/20 text-red-300",dotClass:"bg-red-400"},attempted:{color:jn.attempted,label:et.attempted,badgeClass:"bg-amber-500/20 text-amber-300",dotClass:"bg-amber-400"},plot:{color:jn.plot,label:et.plot,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"},alleged:{color:jn.alleged,label:et.alleged,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"}};function Kc(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function sp({event:n}){const e=$c[n.outcome];return c.jsxs("div",{className:"popup-enter min-w-[240px] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-gray-700/50 bg-[#1a1d26] shadow-xl pt-7 pr-7 pb-3 pl-3",style:{fontFamily:"'DM Sans', sans-serif"},children:[c.jsx("div",{className:"font-mono text-xs text-gray-500",style:{fontFamily:"'JetBrains Mono', monospace"},children:n.id}),c.jsx("h3",{className:"mt-1 text-sm font-bold text-white",children:n.country}),c.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[c.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${e.badgeClass}`,children:[c.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${e.dotClass}`}),e.label]}),c.jsx("span",{className:"rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-400",children:"Geolocated"})]}),n.description&&c.jsx("p",{className:"mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed",children:n.description}),c.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500",children:[c.jsx(cp,{className:"h-3.5 w-3.5 shrink-0"}),Kc(n.date)]})]})}function cp({className:n}){return c.jsx("svg",{className:n,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":!0,children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}const dp=["successful","failed"];function yp(){return c.jsxs("div",{className:"absolute bottom-20 right-[max(1rem,env(safe-area-inset-right))] z-10 rounded-lg border border-gray-700/50 bg-[#1a1d26]/95 px-3 py-2 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4",children:[c.jsx("div",{className:"mb-1.5 text-xs font-medium text-gray-400",children:"Outcome"}),c.jsx("div",{className:"flex flex-col gap-1",children:dp.map(n=>c.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300",children:[c.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full border border-gray-600",style:{backgroundColor:jn[n]}}),et[n]]},n))})]})}const pp={"Antigua & Barbuda":"Antigua and Barbuda",Bahamas:"The Bahamas",Congo:"Republic of the Congo","Czech Republic":"Czechia","East Timor":"East Timor",Macedonia:"North Macedonia","Sao Tome and Principe":"São Tomé and Principe","St. Kitts and Nevis":"Saint Kitts and Nevis","St. Lucia":"Saint Lucia","St. Vincent and the Grenadines":"Saint Vincent and the Grenadines",Swaziland:"eSwatini",Tanzania:"United Republic of Tanzania","United States":"United States of America"};function Zc(n){return pp[n]??n}function tt(n){const e=Math.max(0,Math.min(1,n));if(e<=.5){const t=e/.5,r=30,o=41,i=59,a=245,u=158,l=11,d=Math.round(r+(a-r)*t),m=Math.round(o+(u-o)*t),f=Math.round(i+(l-i)*t);return`#${d.toString(16).padStart(2,"0")}${m.toString(16).padStart(2,"0")}${f.toString(16).padStart(2,"0")}`}else{const t=(e-.5)/.5,r=245,o=158,i=11,a=220,u=38,l=38,d=Math.round(r+(a-r)*t),m=Math.round(o+(u-o)*t),f=Math.round(i+(l-i)*t);return`#${d.toString(16).padStart(2,"0")}${m.toString(16).padStart(2,"0")}${f.toString(16).padStart(2,"0")}`}}const Jc="#0f172a";function fp(n){const e=new Map;for(const o of n){if(o.prediction_prob==null||isNaN(o.prediction_prob))continue;const i=Zc(o.country),a=e.get(i);(!a||o.year>a.year||o.year===a.year&&o.month>a.month)&&e.set(i,o)}const t=Math.max(...[...e.values()].map(o=>o.prediction_prob),.001),r=[];for(const[o,i]of e){const a=Math.min(i.prediction_prob/t,1);r.push(o,tt(a))}return["match",["get","name"],...r,Jc]}function gp(){const n=`linear-gradient(to right, ${tt(0)}, ${tt(.25)}, ${tt(.5)}, ${tt(.75)}, ${tt(1)})`;return c.jsxs("div",{className:"absolute bottom-4 right-4 z-20 rounded-lg border border-gray-700 bg-[#0f1117]/95 p-4 backdrop-blur-sm max-w-xs",children:[c.jsx("div",{className:"text-xs font-semibold text-gray-300 mb-3",children:"CURRENT COUP RISK"}),c.jsx("div",{className:"w-full h-5 rounded border border-gray-600 mb-1",style:{background:n}}),c.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-3",children:[c.jsx("span",{children:"Low Risk"}),c.jsx("span",{children:"High Risk"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[c.jsx("div",{className:"w-4 h-4 rounded border border-gray-600 shrink-0",style:{background:Jc}}),c.jsx("span",{children:"No Data"})]}),c.jsx("div",{className:"text-xs text-gray-500 italic mt-2",children:"Click a country to see risk details."})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xc=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=C.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...u},l)=>C.createElement("svg",{ref:l,...hp,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Xc("lucide",o),...u},[...a.map(([d,m])=>C.createElement(d,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(n,e)=>{const t=C.forwardRef(({className:r,...o},i)=>C.createElement(Cp,{ref:i,iconNode:e,className:Xc(`lucide-${mp(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=$n("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=$n("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=$n("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=$n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=$n("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=$n("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=$n("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=$n("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=$n("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=$n("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=$n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Tl=[{id:"home",icon:ca,label:"Home"},{id:"events",icon:xp,label:"Events"},{id:"filters",icon:Pp,label:"Filters"},{id:"about",icon:Sp,label:"About"}];function kp({activeNav:n,onNavChange:e}){const[t,r]=C.useState(!1);return c.jsxs("aside",{className:`flex h-14 w-full shrink-0 flex-row items-center justify-around border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] transition-[width] duration-300 ease-in-out md:h-full md:flex-col md:justify-start md:border-r md:border-t-0 md:pb-0 ${t?"md:w-[72px]":"md:w-[280px]"}`,children:[c.jsxs("div",{className:"flex flex-1 items-center justify-around gap-0 md:hidden",children:[c.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:c.jsx(ca,{className:"h-5 w-5"})}),Tl.map(({id:o,icon:i,label:a})=>{const u=n===o;return c.jsx("button",{type:"button",onClick:()=>e(o),className:`flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-800/60 ${u?"text-amber-400":"text-gray-400"}`,title:a,children:c.jsx(i,{className:"h-5 w-5"})},o)})]}),c.jsxs("div",{className:"hidden md:flex md:h-full md:w-full md:flex-col",children:[c.jsxs("div",{className:"flex min-h-[56px] items-center gap-3 border-b border-gray-800 px-3",children:[c.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:c.jsx(ca,{className:"h-5 w-5"})}),!t&&c.jsx("span",{className:"truncate text-sm font-semibold text-white",children:"CoupView"})]}),c.jsx("nav",{className:"flex flex-1 flex-col gap-0.5 overflow-hidden py-2",children:Tl.map(({id:o,icon:i,label:a})=>{const u=n===o;return c.jsxs("button",{type:"button",onClick:()=>e(o),className:`
                  flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200
                  hover:scale-[1.02] hover:bg-gray-800/60
                  ${t?"justify-center px-0":""}
                  ${u?"border-l-2 border-amber-500 bg-gray-800/40":"border-l-2 border-transparent"}
                `,title:t?a:void 0,children:[c.jsx(i,{className:`h-5 w-5 shrink-0 ${u?"text-amber-400":"text-gray-400"}`}),!t&&c.jsx("span",{className:`truncate text-sm ${u?"text-white":"text-gray-300"}`,children:a})]},o)})}),c.jsxs("div",{className:"border-t border-gray-800 py-2",children:[c.jsxs("button",{type:"button",className:"flex w-full items-center gap-3 px-3 py-2.5 text-left text-gray-400 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/60 hover:text-gray-300",title:t?"Settings":void 0,children:[c.jsx(Ap,{className:"h-5 w-5 shrink-0"}),!t&&c.jsx("span",{className:"truncate text-sm",children:"Settings"})]}),c.jsx("button",{type:"button",onClick:()=>r(o=>!o),className:"flex w-full items-center justify-center gap-3 px-3 py-2.5 text-gray-400 transition-all duration-200 hover:bg-gray-800/60 hover:text-gray-300",title:t?"Expand sidebar":"Collapse sidebar",children:t?c.jsx(Fp,{className:"h-5 w-5"}):c.jsxs(c.Fragment,{children:[c.jsx(wp,{className:"h-5 w-5 shrink-0"}),c.jsx("span",{className:"truncate text-sm",children:"Collapse"})]})})]})]})]})}function Gr({label:n,children:e,className:t=""}){const[r,o]=C.useState(!1),i=C.useRef(null);return C.useEffect(()=>{const a=u=>{i.current&&!i.current.contains(u.target)&&o(!1)};if(r)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[r]),c.jsxs("div",{className:`relative shrink-0 ${t}`,ref:i,children:[c.jsxs("button",{type:"button",onClick:()=>o(a=>!a),className:"flex min-h-[44px] items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800/80 px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-gray-700/80",children:[n,c.jsx(qc,{className:`h-4 w-4 shrink-0 transition-transform ${r?"rotate-180":""}`})]}),r&&c.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 min-w-0 rounded-lg border border-gray-700 bg-[#1a1d26] py-2 shadow-xl md:left-auto md:right-0 md:min-w-[180px]",children:e})]})}function ve({label:n,checked:e,onChange:t}){return c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800",children:[c.jsx("input",{type:"checkbox",checked:e,onChange:t,className:"h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"}),c.jsx("span",{className:"text-sm text-gray-200",children:n})]})}const Ll=n=>{let e;const t=new Set,r=(d,m)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const g=e;e=m??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(P=>P(e,g))}},o=()=>e,u={setState:r,getState:o,getInitialState:()=>l,subscribe:d=>(t.add(d),()=>t.delete(d))},l=e=n(r,o,u);return u},Np=n=>n?Ll(n):Ll,Mp=n=>n;function Tp(n,e=Mp){const t=Fr.useSyncExternalStore(n.subscribe,Fr.useCallback(()=>e(n.getState()),[n,e]),Fr.useCallback(()=>e(n.getInitialState()),[n,e]));return Fr.useDebugValue(t),t}const _l=n=>{const e=Np(n),t=r=>Tp(e,r);return Object.assign(t,e),t},Lp=n=>n?_l(n):_l,da=[1950,2030];function _p(n){if(n.length===0)return da;const e=Math.min(...n),t=Math.max(...n);return[e,t+9]}const R=Lp(n=>({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:da,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026],viewMode:"events",setYearRange:e=>n({yearRange:e}),setSearchQuery:e=>n({searchQuery:e}),toggleOutcome:e=>n(t=>({selectedOutcomes:t.selectedOutcomes.includes(e)?t.selectedOutcomes.filter(r=>r!==e):[...t.selectedOutcomes,e]})),toggleRegion:e=>n(t=>({selectedRegions:t.selectedRegions.includes(e)?t.selectedRegions.filter(r=>r!==e):[...t.selectedRegions,e]})),toggleDecade:e=>n(t=>{const r=t.selectedDecades.includes(e)?t.selectedDecades.filter(o=>o!==e):[...t.selectedDecades,e].sort((o,i)=>o-i);return{selectedDecades:r,dateRange:_p(r)}}),setDateRange:e=>n({dateRange:e}),toggleTag:e=>n(t=>({selectedTags:t.selectedTags.includes(e)?t.selectedTags.filter(r=>r!==e):[...t.selectedTags,e]})),reset:()=>n({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:da,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026]}),setViewMode:e=>n({viewMode:e}),setSelectedEvent:e=>n({selectedEvent:e}),setSelectedCountry:e=>n({selectedCountry:e})})),Rp=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"}],jp=[1950,1960,1970,1980,1990,2e3,2010,2020];function Dp({regions:n,tags:e}){const t=R(h=>h.searchQuery),r=R(h=>h.setSearchQuery),o=R(h=>h.selectedOutcomes),i=R(h=>h.toggleOutcome),a=R(h=>h.selectedDecades),u=R(h=>h.toggleDecade),l=R(h=>h.selectedRegions),d=R(h=>h.toggleRegion),m=R(h=>h.selectedTags),f=R(h=>h.toggleTag),g=R(h=>h.viewMode),P=R(h=>h.setViewMode);return c.jsxs("div",{className:"absolute left-0 right-0 top-0 z-10 flex flex-col gap-2 border-b border-gray-800/50 bg-[#0f1117]/80 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-4 md:px-4",children:[c.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:c.jsxs("div",{className:"relative flex w-full max-w-md items-center",children:[c.jsx(Ep,{className:"absolute left-3 h-4 w-4 text-gray-500"}),c.jsx("input",{type:"search",value:t,onChange:h=>r(h.target.value),placeholder:"Search for anything...",className:"min-h-[44px] w-full rounded-lg border border-gray-700 bg-gray-800/90 py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"})]})}),c.jsxs("div",{className:"flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto pb-1 md:overflow-visible md:pb-0",children:[c.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-800/50 p-1",children:[c.jsx("button",{onClick:()=>P("events"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="events"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Events"}),c.jsx("button",{onClick:()=>P("risk"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="risk"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Coup Risk"})]}),g==="events"&&c.jsxs(c.Fragment,{children:[c.jsx(Gr,{label:"Status",children:c.jsx("div",{className:"flex flex-col gap-0.5 px-2",children:Rp.map(({value:h,label:x})=>c.jsx(ve,{label:x,checked:o.includes(h),onChange:()=>i(h)},h))})}),c.jsx(Gr,{label:"Date",children:c.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:jp.map(h=>c.jsx(ve,{label:`${h}s`,checked:a.includes(h),onChange:()=>u(h)},h))})}),c.jsx(Gr,{label:"Region",children:c.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:n.length===0?c.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No regions in data"}):n.map(h=>c.jsx(ve,{label:h,checked:l.includes(h),onChange:()=>d(h)},h))})}),c.jsx(Gr,{label:"Tags",children:c.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:e.length===0?c.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No tags in data"}):e.map(h=>c.jsx(ve,{label:h,checked:m.includes(h),onChange:()=>f(h)},h))})})]})]})]})}function nd(n,e){if(!e.trim())return!0;const t=e.trim().toLowerCase(),r=(n.title??"").toLowerCase(),o=(n.country??"").toLowerCase(),i=(n.description??"").toLowerCase(),a=(n.tags??[]).join(" ").toLowerCase();return r.includes(t)||o.includes(t)||i.includes(t)||a.includes(t)}function Op(n,e){return e.length===0?!0:e.includes(n.outcome)}function Bp(n,e){return e.length===0?!0:e.includes(n.region)}function zp(n,[e,t]){return n.year>=e&&n.year<=t}function bp(n,e){if(e.length===0)return!0;const t=n.tags??[];return e.some(r=>t.includes(r))}function Ip(n,e){return n.filter(t=>nd(t,e.searchQuery)&&Op(t,e.selectedOutcomes)&&Bp(t,e.selectedRegions)&&zp(t,e.dateRange)&&bp(t,e.selectedTags))}function Gp(n,e){const t=[];if(n.selectedOutcomes.length>0){const a=["in",["get","outcome"],["literal",n.selectedOutcomes]];t.push(a)}if(n.selectedRegions.length>0){const a=["in",["get","region"],["literal",n.selectedRegions]];t.push(a)}const[r,o]=n.dateRange,i=["all",[">=",["get","year"],r],["<=",["get","year"],o]];if(t.push(i),n.selectedTags.length>0){const a=new Set(e.filter(u=>{const l=u.tags??[];return n.selectedTags.some(d=>l.includes(d))}).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];t.push(u)}}if(n.searchQuery.trim()){const a=new Set(e.filter(u=>nd(u,n.searchQuery)).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];t.push(u)}else return["==",["literal",!0],!1]}if(t.length!==0)return t.length===1?t[0]:["all",...t]}function Hp(n){if(!n||n.length!==2)return"🏳️";const e=127462,t=e+n.toUpperCase().charCodeAt(0)-65,r=e+n.toUpperCase().charCodeAt(1)-65;return String.fromCodePoint(t,r)}function Up({allEvents:n,mapRef:e}){const[t,r]=C.useState("date-desc"),[o,i]=C.useState(!1),a=R(E=>E.searchQuery),u=R(E=>E.selectedOutcomes),l=R(E=>E.selectedRegions),d=R(E=>E.dateRange),m=R(E=>E.selectedTags),f=R(E=>E.setSelectedEvent),g=C.useMemo(()=>Ip(n,{searchQuery:a,selectedOutcomes:u,selectedRegions:l,dateRange:d,selectedTags:m}),[n,a,u,l,d,m]),P=C.useMemo(()=>{const E=[...g];return t==="date-desc"?E.sort((y,s)=>new Date(s.date).getTime()-new Date(y.date).getTime()):t==="date-asc"?E.sort((y,s)=>new Date(y.date).getTime()-new Date(s.date).getTime()):t==="country-asc"&&E.sort((y,s)=>y.country.localeCompare(s.country)),E},[g,t]),h=E=>{var s;const y=(s=e.current)==null?void 0:s.getMap();y&&y.flyTo({center:[E.longitude,E.latitude],zoom:5,duration:800}),f(E)},x=t==="date-desc"?"Newest first":t==="date-asc"?"Oldest first":"Country A–Z";return c.jsxs("div",{className:"flex w-full shrink-0 flex-col border-r border-gray-800 bg-[#0f1117] md:w-[320px]",children:[c.jsx("div",{className:"flex flex-shrink-0 justify-center pt-2 md:hidden","aria-hidden":!0,children:c.jsx("div",{className:"h-1 w-10 rounded-full bg-gray-600"})}),c.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[c.jsxs("span",{className:"text-sm font-medium text-gray-300",children:[P.length," event",P.length!==1?"s":""]}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{type:"button",onClick:()=>i(E=>!E),className:"flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded border border-gray-700 bg-gray-800/80 px-2 py-1.5 text-xs text-gray-300 hover:bg-gray-700/80 md:min-h-0 md:min-w-0 md:justify-start",children:[x,c.jsx(qc,{className:"h-3.5 w-3.5"})]}),o&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-40","aria-hiddenx":!0,onClick:()=>i(!1)}),c.jsx("div",{className:"absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded border border-gray-700 bg-[#1a1d26] py-1 shadow-xl",children:[["date-desc","Newest first"],["date-asc","Oldest first"],["country-asc","Country A–Z"]].map(([E,y])=>c.jsx("button",{type:"button",onClick:()=>{r(E),i(!1)},className:"w-full px-3 py-1.5 text-left text-sm text-gray-200 hover:bg-gray-800",children:y},E))})]})]})]}),c.jsx("div",{className:"panel-scroll flex-1 overflow-y-auto",children:P.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 px-4 py-12 text-center text-sm text-gray-500",children:[c.jsx("p",{children:"No events match the current filters."}),c.jsx("p",{className:"text-xs",children:"Try adjusting search or filters."})]}):c.jsx("ul",{className:"divide-y divide-gray-800",children:P.map(E=>{const y=$c[E.outcome];return c.jsx("li",{children:c.jsxs("button",{type:"button",onClick:()=>h(E),className:"flex min-h-[52px] w-full flex-col justify-center gap-1 px-4 py-3.5 text-left transition-colors hover:bg-gray-800/60",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-lg leading-none",children:Hp(E.countryCode)}),c.jsx("span",{className:"truncate text-sm font-medium text-white",children:E.country})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs ${y.badgeClass}`,children:y.label}),c.jsx("span",{className:"text-xs text-gray-500",children:Kc(E.date)})]}),E.description&&c.jsx("p",{className:"line-clamp-1 text-xs text-gray-400",children:E.description})]})},E.id)})})})]})}function Yp({country:n,events:e,onClose:t}){return c.jsxs("div",{className:"flex w-full shrink-0 flex-col border-l border-gray-800 bg-[#0f1117] md:w-[320px]",children:[c.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[c.jsx("span",{className:"truncate text-sm font-medium text-gray-300",children:n}),c.jsx("button",{type:"button",onClick:t,className:"flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-700 bg-gray-800/80 p-1 text-gray-400 hover:bg-gray-700/80 md:min-h-0 md:min-w-0",children:c.jsx(Vp,{className:"h-4 w-4"})})]}),c.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-3 py-3 md:px-4",children:c.jsxs("div",{className:"text-sm text-gray-300",children:[c.jsxs("p",{className:"mb-2",children:[c.jsx("span",{className:"font-medium text-gray-200",children:e.length})," ","coup",e.length!==1?"s":""," in this country"]}),c.jsx("p",{className:"text-xs text-gray-500",children:"Country details coming soon..."})]})})]})}const Wp=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"},{value:"attempted",label:"Attempted"},{value:"plot",label:"Plot"},{value:"alleged",label:"Alleged"}],Qp=[1950,1960,1970,1980,1990,2e3,2010,2020];function $p({onClose:n,regions:e,tags:t}){const r=R(s=>s.selectedOutcomes),o=R(s=>s.toggleOutcome),i=R(s=>s.selectedDecades),a=R(s=>s.toggleDecade),u=R(s=>s.selectedRegions),l=R(s=>s.toggleRegion),d=R(s=>s.selectedTags),m=R(s=>s.toggleTag),f=R(s=>s.yearRange),g=R(s=>s.setYearRange),P=R(s=>s.reset),h=1950,x=2026,E=(f[0]-h)/(x-h)*100,y=(f[1]-h)/(x-h)*100;return c.jsxs("div",{className:"flex h-full w-full flex-col bg-[#0f1117] text-white",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 px-4 py-3",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-sm font-semibold",children:"Filters"}),c.jsx("p",{className:"text-xs text-gray-400",children:"Advanced filtering options"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:P,className:"rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-gray-700",children:"Reset"}),c.jsx("button",{type:"button",onClick:n,className:"rounded-md px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white",children:"Close"})]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4",children:c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[c.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-400",children:"Timeline"}),c.jsxs("div",{className:"rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300",children:[f[0]," — ",f[1]]})]}),c.jsxs("div",{className:"rounded-2xl border border-gray-800 bg-[#151925] p-4 shadow-sm",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between text-xs text-gray-500",children:[c.jsx("span",{children:h}),c.jsx("span",{children:x})]}),c.jsxs("div",{className:"relative h-10",children:[c.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-gray-700"}),c.jsx("div",{className:"absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-amber-500",style:{left:`${E}%`,width:`${y-E}%`}}),c.jsx("input",{type:"range",min:h,max:x,value:f[0],onChange:s=>{const p=Number(s.target.value);p<=f[1]&&g([p,f[1]])},className:"timeline-slider absolute inset-0 w-full"}),c.jsx("input",{type:"range",min:h,max:x,value:f[1],onChange:s=>{const p=Number(s.target.value);p>=f[0]&&g([f[0],p])},className:"timeline-slider absolute inset-0 w-full"})]}),c.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[c.jsx("button",{type:"button",onClick:()=>g([1950,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"All"}),c.jsx("button",{type:"button",onClick:()=>g([1950,1990]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Cold War"}),c.jsx("button",{type:"button",onClick:()=>g([1991,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Post-1990"})]})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Status"}),c.jsx("div",{className:"flex flex-col gap-1",children:Wp.map(({value:s,label:p})=>c.jsx(ve,{label:p,checked:r.includes(s),onChange:()=>o(s)},s))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Date"}),c.jsx("div",{className:"flex flex-col gap-1",children:Qp.map(s=>c.jsx(ve,{label:`${s}s`,checked:i.includes(s),onChange:()=>a(s)},s))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Region"}),c.jsx("div",{className:"flex flex-col gap-1",children:e.map(s=>c.jsx(ve,{label:s,checked:u.includes(s),onChange:()=>l(s)},s))})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Tags"}),c.jsx("div",{className:"flex flex-col gap-1",children:t.map(s=>c.jsx(ve,{label:s,checked:d.includes(s),onChange:()=>m(s)},s))})]})]})})]})}function Kp({children:n,mapRef:e,allEvents:t}){const[r,o]=C.useState("home"),i=R(m=>m.selectedCountry),a=R(m=>m.setSelectedCountry),u=C.useMemo(()=>[...new Set(t.map(m=>m.region))].sort(),[t]),l=C.useMemo(()=>[...new Set(t.flatMap(m=>m.tags??[]))].sort(),[t]),d=C.useMemo(()=>t.filter(m=>m.country===i),[t,i]);return c.jsxs("div",{className:"flex h-screen w-screen flex-col overflow-hidden md:flex-row",children:[c.jsx(kp,{activeNav:r,onNavChange:o}),c.jsxs("div",{className:"flex min-h-0 min-w-0 flex-1 flex-col",children:[c.jsx(Dp,{regions:u,tags:l}),c.jsxs("div",{className:"relative flex min-h-0 flex-1 min-w-0",children:[r==="events"&&c.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:c.jsx(Up,{allEvents:t,mapRef:e})}),i&&c.jsx("div",{className:"fixed bottom-0 right-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-l md:border-t-0 md:pb-0 md:shadow-none",children:c.jsx(Yp,{country:i,events:d,onClose:()=>a(null)})}),r==="filters"&&c.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:c.jsx($p,{onClose:()=>o("home"),regions:u,tags:l})}),c.jsx("div",{className:"min-h-0 min-w-0 flex-1",children:n})]})]})]})}const Zp=`{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2025A",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2025-11-26",
        "year": 2025,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ2025B",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "2025-12-07",
        "year": 2025,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.5361,
          -18.9137
        ]
      },
      "properties": {
        "id": "CPV-MG2025C",
        "country": "Madagascar",
        "countryCode": "MG",
        "region": "Sub-Saharan Africa",
        "latitude": -18.9137,
        "longitude": 47.5361,
        "date": "2025-10-12",
        "year": 2025,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO2024D",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "2024-06-26",
        "year": 2024,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD2024E",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "2024-08-05",
        "year": 2024,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE2023F",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "2023-07-26",
        "year": 2023,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.4537,
          0.3925
        ]
      },
      "properties": {
        "id": "CPV-GA2023G",
        "country": "Gabon",
        "countryCode": "GA",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3925,
        "longitude": 9.4537,
        "date": "2023-08-30",
        "year": 2023,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD2023H",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "2023-04-15",
        "year": 2023,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.7273,
          0.3365
        ]
      },
      "properties": {
        "id": "CPV-ST2022I",
        "country": "Sao Tome and Principe",
        "countryCode": "ST",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3365,
        "longitude": 6.7273,
        "date": "2022-11-25",
        "year": 2022,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2022J",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2022-02-01",
        "year": 2022,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF2022K",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "2022-01-23",
        "year": 2022,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF2022L",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "2022-09-30",
        "year": 2022,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML2021M",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "2021-05-21",
        "year": 2021,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE2021N",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "2021-03-31",
        "year": 2021,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN2021O",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "2021-09-05",
        "year": 2021,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD2021P",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "2021-04-20",
        "year": 2021,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD2021Q",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "2021-09-21",
        "year": 2021,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD2021R",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "2021-10-25",
        "year": 2021,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          96.1297,
          19.745
        ]
      },
      "properties": {
        "id": "CPV-MM2021S",
        "country": "Myanmar",
        "countryCode": "MM",
        "region": "Southeast Asia",
        "latitude": 19.745,
        "longitude": 96.1297,
        "date": "2021-02-01",
        "year": 2021,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML2020T",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "2020-08-18",
        "year": 2020,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.4537,
          0.3925
        ]
      },
      "properties": {
        "id": "CPV-GA2019U",
        "country": "Gabon",
        "countryCode": "GA",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3925,
        "longitude": 9.4537,
        "date": "2019-01-07",
        "year": 2019,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD2019V",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "2019-04-11",
        "year": 2019,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.0539,
          -17.8294
        ]
      },
      "properties": {
        "id": "CPV-ZW2017W",
        "country": "Zimbabwe",
        "countryCode": "ZW",
        "region": "Sub-Saharan Africa",
        "latitude": -17.8294,
        "longitude": 31.0539,
        "date": "2017-11-15",
        "year": 2017,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR2016X",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "2016-07-15",
        "year": 2016,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF2015Y",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "2015-09-17",
        "year": 2015,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI2015Z",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "2015-05-13",
        "year": 2015,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.5186,
          50.4454
        ]
      },
      "properties": {
        "id": "CPV-UA2014A",
        "country": "Ukraine",
        "countryCode": "UA",
        "region": "Europe",
        "latitude": 50.4454,
        "longitude": 30.5186,
        "date": "2014-02-22",
        "year": 2014,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF2014B",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "2014-10-30",
        "year": 2014,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.4833,
          -29.3167
        ]
      },
      "properties": {
        "id": "CPV-LS2014C",
        "country": "Lesotho",
        "countryCode": "LS",
        "region": "Sub-Saharan Africa",
        "latitude": -29.3167,
        "longitude": 27.4833,
        "date": "2014-08-30",
        "year": 2014,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH2014D",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "2014-05-22",
        "year": 2014,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.2394,
          30.0392
        ]
      },
      "properties": {
        "id": "CPV-EG2013E",
        "country": "Egypt",
        "countryCode": "EG",
        "region": "North Africa",
        "latitude": 30.0392,
        "longitude": 31.2394,
        "date": "2013-07-03",
        "year": 2013,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2012F",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2012-04-12",
        "year": 2012,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML2012G",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "2012-03-22",
        "year": 2012,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML2012H",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "2012-05-01",
        "year": 2012,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD2012I",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "2012-11-22",
        "year": 2012,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.5089,
          4.1748
        ]
      },
      "properties": {
        "id": "CPV-MV2012J",
        "country": "Maldives",
        "countryCode": "MV",
        "region": "South Asia",
        "latitude": 4.1748,
        "longitude": 73.5089,
        "date": "2012-02-07",
        "year": 2012,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          147.1797,
          -9.4431
        ]
      },
      "properties": {
        "id": "CPV-PG2012K",
        "country": "Papua New Guinea",
        "countryCode": "PG",
        "region": "Oceania",
        "latitude": -9.4431,
        "longitude": 147.1797,
        "date": "2012-01-26",
        "year": 2012,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN2011L",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "2011-07-19",
        "year": 2011,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.2394,
          30.0392
        ]
      },
      "properties": {
        "id": "CPV-EG2011M",
        "country": "Egypt",
        "countryCode": "EG",
        "region": "North Africa",
        "latitude": 30.0392,
        "longitude": 31.2394,
        "date": "2011-02-11",
        "year": 2011,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2010N",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2010-04-01",
        "year": 2010,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE2010O",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "2010-02-18",
        "year": 2010,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.5361,
          -18.9137
        ]
      },
      "properties": {
        "id": "CPV-MG2010P",
        "country": "Madagascar",
        "countryCode": "MG",
        "region": "Sub-Saharan Africa",
        "latitude": -18.9137,
        "longitude": 47.5361,
        "date": "2010-11-17",
        "year": 2010,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN2009Q",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "2009-06-28",
        "year": 2009,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.5361,
          -18.9137
        ]
      },
      "properties": {
        "id": "CPV-MG2009R",
        "country": "Madagascar",
        "countryCode": "MG",
        "region": "Sub-Saharan Africa",
        "latitude": -18.9137,
        "longitude": 47.5361,
        "date": "2009-03-17",
        "year": 2009,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2008S",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2008-11-23",
        "year": 2008,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR2008T",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "2008-08-06",
        "year": 2008,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN2008U",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "2008-12-23",
        "year": 2008,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD2006V",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "2006-03-13",
        "year": 2006,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH2006W",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "2006-09-19",
        "year": 2006,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          178.4415,
          -18.1416
        ]
      },
      "properties": {
        "id": "CPV-FJ2006X",
        "country": "Fiji",
        "countryCode": "FJ",
        "region": "Oceania",
        "latitude": -18.1416,
        "longitude": 178.4415,
        "date": "2006-12-05",
        "year": 2006,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR2005Y",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "2005-08-03",
        "year": 2005,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG2005Z",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "2005-02-05",
        "year": 2005,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.3136,
          -4.3276
        ]
      },
      "properties": {
        "id": "CPV-CD2004A",
        "country": "Democratic Republic of the Congo",
        "countryCode": "CD",
        "region": "Sub-Saharan Africa",
        "latitude": -4.3276,
        "longitude": 15.3136,
        "date": "2004-03-28",
        "year": 2004,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.3136,
          -4.3276
        ]
      },
      "properties": {
        "id": "CPV-CD2004B",
        "country": "Democratic Republic of the Congo",
        "countryCode": "CD",
        "region": "Sub-Saharan Africa",
        "latitude": -4.3276,
        "longitude": 15.3136,
        "date": "2004-06-11",
        "year": 2004,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.7273,
          0.3365
        ]
      },
      "properties": {
        "id": "CPV-ST2003C",
        "country": "Sao Tome and Principe",
        "countryCode": "ST",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3365,
        "longitude": 6.7273,
        "date": "2003-07-16",
        "year": 2003,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2003D",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2003-09-14",
        "year": 2003,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR2003E",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "2003-06-08",
        "year": 2003,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.555,
          4.3612
        ]
      },
      "properties": {
        "id": "CPV-CF2003F",
        "country": "Central African Republic",
        "countryCode": "CF",
        "region": "Sub-Saharan Africa",
        "latitude": 4.3612,
        "longitude": 18.555,
        "date": "2003-03-15",
        "year": 2003,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE2002G",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "2002-04-12",
        "year": 2002,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.0268,
          5.3453
        ]
      },
      "properties": {
        "id": "CPV-CI2002H",
        "country": "Ivory Coast",
        "countryCode": "CI",
        "region": "Sub-Saharan Africa",
        "latitude": 5.3453,
        "longitude": -4.0268,
        "date": "2002-09-19",
        "year": 2002,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.0268,
          5.3453
        ]
      },
      "properties": {
        "id": "CPV-CI2001I",
        "country": "Ivory Coast",
        "countryCode": "CI",
        "region": "Sub-Saharan Africa",
        "latitude": 5.3453,
        "longitude": -4.0268,
        "date": "2001-01-06",
        "year": 2001,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.555,
          4.3612
        ]
      },
      "properties": {
        "id": "CPV-CF2001J",
        "country": "Central African Republic",
        "countryCode": "CF",
        "region": "Sub-Saharan Africa",
        "latitude": 4.3612,
        "longitude": 18.555,
        "date": "2001-05-28",
        "year": 2001,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI2001K",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "2001-04-18",
        "year": 2001,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI2001L",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "2001-07-22",
        "year": 2001,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC2000M",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "2000-01-21",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE2000N",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "2000-10-30",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -57.6359,
          -25.3007
        ]
      },
      "properties": {
        "id": "CPV-PY2000O",
        "country": "Paraguay",
        "countryCode": "PY",
        "region": "South America",
        "latitude": -25.3007,
        "longitude": -57.6359,
        "date": "2000-05-18",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW2000P",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "2000-11-23",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.0268,
          5.3453
        ]
      },
      "properties": {
        "id": "CPV-CI2000Q",
        "country": "Ivory Coast",
        "countryCode": "CI",
        "region": "Sub-Saharan Africa",
        "latitude": 5.3453,
        "longitude": -4.0268,
        "date": "2000-09-18",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.1447,
          11.5877
        ]
      },
      "properties": {
        "id": "CPV-DJ2000R",
        "country": "Djibouti",
        "countryCode": "DJ",
        "region": "Sub-Saharan Africa",
        "latitude": 11.5877,
        "longitude": 43.1447,
        "date": "2000-12-07",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM2000S",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "2000-03-21",
        "year": 2000,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          178.4415,
          -18.1416
        ]
      },
      "properties": {
        "id": "CPV-FJ2000T",
        "country": "Fiji",
        "countryCode": "FJ",
        "region": "Oceania",
        "latitude": -18.1416,
        "longitude": 178.4415,
        "date": "2000-05-29",
        "year": 2000,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1999U",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1999-07-30",
        "year": 1999,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW1999V",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "1999-05-07",
        "year": 1999,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE1999W",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "1999-04-09",
        "year": 1999,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.0268,
          5.3453
        ]
      },
      "properties": {
        "id": "CPV-CI1999X",
        "country": "Ivory Coast",
        "countryCode": "CI",
        "region": "Sub-Saharan Africa",
        "latitude": 5.3453,
        "longitude": -4.0268,
        "date": "1999-12-24",
        "year": 1999,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1999Y",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1999-04-30",
        "year": 1999,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0594,
          33.7035
        ]
      },
      "properties": {
        "id": "CPV-PK1999Z",
        "country": "Pakistan",
        "countryCode": "PK",
        "region": "South Asia",
        "latitude": 33.7035,
        "longitude": 73.0594,
        "date": "1999-10-12",
        "year": 1999,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW1998A",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "1998-06-07",
        "year": 1998,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1997B",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1997-05-25",
        "year": 1997,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.2771,
          -15.4134
        ]
      },
      "properties": {
        "id": "CPV-ZM1997C",
        "country": "Zambia",
        "countryCode": "ZM",
        "region": "Sub-Saharan Africa",
        "latitude": -15.4134,
        "longitude": 28.2771,
        "date": "1997-10-28",
        "year": 1997,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          104.916,
          11.5625
        ]
      },
      "properties": {
        "id": "CPV-KH1997D",
        "country": "Cambodia",
        "countryCode": "KH",
        "region": "Southeast Asia",
        "latitude": 11.5625,
        "longitude": 104.916,
        "date": "1997-07-05",
        "year": 1997,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE1996E",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "1996-01-27",
        "year": 1996,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN1996F",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "1996-02-03",
        "year": 1996,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1996G",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1996-01-16",
        "year": 1996,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1996H",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1996-07-25",
        "year": 1996,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          51.5245,
          25.2747
        ]
      },
      "properties": {
        "id": "CPV-QA1996I",
        "country": "Qatar",
        "countryCode": "QA",
        "region": "Middle East",
        "latitude": 25.2747,
        "longitude": 51.5245,
        "date": "1996-02-20",
        "year": 1996,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1996J",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1996-05-20",
        "year": 1996,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          49.892,
          40.3777
        ]
      },
      "properties": {
        "id": "CPV-AZ1995K",
        "country": "Azerbaijan",
        "countryCode": "AZ",
        "region": "Central Asia",
        "latitude": 40.3777,
        "longitude": 49.892,
        "date": "1995-03-13",
        "year": 1995,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.7273,
          0.3365
        ]
      },
      "properties": {
        "id": "CPV-ST1995L",
        "country": "Sao Tome and Principe",
        "countryCode": "ST",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3365,
        "longitude": 6.7273,
        "date": "1995-08-15",
        "year": 1995,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1995M",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1995-10-02",
        "year": 1995,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1995N",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1995-06-15",
        "year": 1995,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          51.5245,
          25.2747
        ]
      },
      "properties": {
        "id": "CPV-QA1995O",
        "country": "Qatar",
        "countryCode": "QA",
        "region": "Middle East",
        "latitude": 25.2747,
        "longitude": 51.5245,
        "date": "1995-06-27",
        "year": 1995,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          49.892,
          40.3777
        ]
      },
      "properties": {
        "id": "CPV-AZ1994P",
        "country": "Azerbaijan",
        "countryCode": "AZ",
        "region": "Central Asia",
        "latitude": 40.3777,
        "longitude": 49.892,
        "date": "1994-10-04",
        "year": 1994,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.6794,
          13.4531
        ]
      },
      "properties": {
        "id": "CPV-GM1994Q",
        "country": "Gambia",
        "countryCode": "GM",
        "region": "Sub-Saharan Africa",
        "latitude": 13.4531,
        "longitude": -16.6794,
        "date": "1994-07-23",
        "year": 1994,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.6794,
          13.4531
        ]
      },
      "properties": {
        "id": "CPV-GM1994R",
        "country": "Gambia",
        "countryCode": "GM",
        "region": "Sub-Saharan Africa",
        "latitude": 13.4531,
        "longitude": -16.6794,
        "date": "1994-11-11",
        "year": 1994,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -10.7969,
          6.3005
        ]
      },
      "properties": {
        "id": "CPV-LR1994S",
        "country": "Liberia",
        "countryCode": "LR",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3005,
        "longitude": -10.7969,
        "date": "1994-09-15",
        "year": 1994,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.0579,
          -1.9474
        ]
      },
      "properties": {
        "id": "CPV-RW1994T",
        "country": "Rwanda",
        "countryCode": "RW",
        "region": "Sub-Saharan Africa",
        "latitude": -1.9474,
        "longitude": 30.0579,
        "date": "1994-04-07",
        "year": 1994,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.4833,
          -29.3167
        ]
      },
      "properties": {
        "id": "CPV-LS1994U",
        "country": "Lesotho",
        "countryCode": "LS",
        "region": "Sub-Saharan Africa",
        "latitude": -29.3167,
        "longitude": 27.4833,
        "date": "1994-08-17",
        "year": 1994,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1993V",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1993-11-17",
        "year": 1993,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD1993W",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "1993-01-27",
        "year": 1993,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1993X",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1993-07-03",
        "year": 1993,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1993Y",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1993-10-21",
        "year": 1993,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.1875,
          32.8752
        ]
      },
      "properties": {
        "id": "CPV-LY1993Z",
        "country": "Libya",
        "countryCode": "LY",
        "region": "North Africa",
        "latitude": 32.8752,
        "longitude": 13.1875,
        "date": "1993-10-23",
        "year": 1993,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1992A",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1992-02-04",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1992B",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1992-11-27",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1992C",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1992-11-13",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1992D",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1992-04-30",
        "year": 1992,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1992E",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1992-12-29",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.5361,
          -18.9137
        ]
      },
      "properties": {
        "id": "CPV-MG1992F",
        "country": "Madagascar",
        "countryCode": "MG",
        "region": "Sub-Saharan Africa",
        "latitude": -18.9137,
        "longitude": 47.5361,
        "date": "1992-07-29",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1992G",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1992-09-26",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.042,
          36.7525
        ]
      },
      "properties": {
        "id": "CPV-DZ1992H",
        "country": "Algeria",
        "countryCode": "DZ",
        "region": "North Africa",
        "latitude": 36.7525,
        "longitude": 3.042,
        "date": "1992-01-11",
        "year": 1992,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1992I",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1992-06-15",
        "year": 1992,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          69.1725,
          34.5289
        ]
      },
      "properties": {
        "id": "CPV-AF1992J",
        "country": "Afghanistan",
        "countryCode": "AF",
        "region": "South Asia",
        "latitude": 34.5289,
        "longitude": 69.1725,
        "date": "1992-04-15",
        "year": 1992,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1991K",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1991-01-07",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1991L",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1991-09-30",
        "year": 1991,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          37.6218,
          55.755
        ]
      },
      "properties": {
        "id": "CPV-RU1991M",
        "country": "Russia",
        "countryCode": "RU",
        "region": "Europe",
        "latitude": 55.755,
        "longitude": 37.6218,
        "date": "1991-08-21",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML1991N",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "1991-03-26",
        "year": 1991,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML1991O",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "1991-07-14",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1991P",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1991-10-01",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1991Q",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1991-10-07",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1991R",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1991-11-28",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1991S",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1991-12-15",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD1991T",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "1991-10-13",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.4833,
          -29.3167
        ]
      },
      "properties": {
        "id": "CPV-LS1991U",
        "country": "Lesotho",
        "countryCode": "LS",
        "region": "Sub-Saharan Africa",
        "latitude": -29.3167,
        "longitude": 27.4833,
        "date": "1991-04-30",
        "year": 1991,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1991V",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1991-08-03",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1991W",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1991-09-23",
        "year": 1991,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1991X",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1991-02-23",
        "year": 1991,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1990Y",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1990-04-22",
        "year": 1990,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.2771,
          -15.4134
        ]
      },
      "properties": {
        "id": "CPV-ZM1990Z",
        "country": "Zambia",
        "countryCode": "ZM",
        "region": "Sub-Saharan Africa",
        "latitude": -15.4134,
        "longitude": 28.2771,
        "date": "1990-06-30",
        "year": 1990,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          69.1725,
          34.5289
        ]
      },
      "properties": {
        "id": "CPV-AF1990A",
        "country": "Afghanistan",
        "countryCode": "AF",
        "region": "South Asia",
        "latitude": 34.5289,
        "longitude": 69.1725,
        "date": "1990-03-07",
        "year": 1990,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      },
      "properties": {
        "id": "CPV-PH1990B",
        "country": "Philippines",
        "countryCode": "PH",
        "region": "Southeast Asia",
        "latitude": 14.6042,
        "longitude": 120.9822,
        "date": "1990-10-04",
        "year": 1990,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          147.1797,
          -9.4431
        ]
      },
      "properties": {
        "id": "CPV-PG1990C",
        "country": "Papua New Guinea",
        "countryCode": "PG",
        "region": "Oceania",
        "latitude": -9.4431,
        "longitude": 147.1797,
        "date": "1990-03-14",
        "year": 1990,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1989D",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1989-04-02",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1989E",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1989-04-05",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1989F",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1989-05-09",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5196,
          8.9958
        ]
      },
      "properties": {
        "id": "CPV-PA1989G",
        "country": "Panama",
        "countryCode": "PA",
        "region": "Central America",
        "latitude": 8.9958,
        "longitude": -79.5196,
        "date": "1989-10-03",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -57.6359,
          -25.3007
        ]
      },
      "properties": {
        "id": "CPV-PY1989H",
        "country": "Paraguay",
        "countryCode": "PY",
        "region": "South America",
        "latitude": -25.3007,
        "longitude": -57.6359,
        "date": "1989-02-03",
        "year": 1989,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD1989I",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "1989-04-01",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.7469,
          9.025
        ]
      },
      "properties": {
        "id": "CPV-ET1989J",
        "country": "Ethiopia",
        "countryCode": "ET",
        "region": "Sub-Saharan Africa",
        "latitude": 9.025,
        "longitude": 38.7469,
        "date": "1989-05-16",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1989K",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1989-11-26",
        "year": 1989,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1989L",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1989-06-30",
        "year": 1989,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      },
      "properties": {
        "id": "CPV-PH1989M",
        "country": "Philippines",
        "countryCode": "PH",
        "region": "Southeast Asia",
        "latitude": 14.6042,
        "longitude": 120.9822,
        "date": "1989-12-01",
        "year": 1989,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1988N",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1988-06-20",
        "year": 1988,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1988O",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1988-09-18",
        "year": 1988,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1988P",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1988-05-11",
        "year": 1988,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5196,
          8.9958
        ]
      },
      "properties": {
        "id": "CPV-PA1988Q",
        "country": "Panama",
        "countryCode": "PA",
        "region": "Central America",
        "latitude": 8.9958,
        "longitude": -79.5196,
        "date": "1988-03-16",
        "year": 1988,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1988R",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1988-12-02",
        "year": 1988,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          96.1297,
          19.745
        ]
      },
      "properties": {
        "id": "CPV-MM1988S",
        "country": "Myanmar",
        "countryCode": "MM",
        "region": "Southeast Asia",
        "latitude": 19.745,
        "longitude": 96.1297,
        "date": "1988-09-18",
        "year": 1988,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1987T",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1987-10-15",
        "year": 1987,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1987U",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1987-03-23",
        "year": 1987,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1987V",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1987-09-03",
        "year": 1987,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1987W",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1987-11-30",
        "year": 1987,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.1658,
          36.819
        ]
      },
      "properties": {
        "id": "CPV-TN1987X",
        "country": "Tunisia",
        "countryCode": "TN",
        "region": "North Africa",
        "latitude": 36.819,
        "longitude": 10.1658,
        "date": "1987-11-07",
        "year": 1987,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.3618,
          24.4648
        ]
      },
      "properties": {
        "id": "CPV-AE1987Y",
        "country": "United Arab Emirates",
        "countryCode": "AE",
        "region": "Middle East",
        "latitude": 24.4648,
        "longitude": 54.3618,
        "date": "1987-06-16",
        "year": 1987,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      },
      "properties": {
        "id": "CPV-PH1987Z",
        "country": "Philippines",
        "countryCode": "PH",
        "region": "Southeast Asia",
        "latitude": 14.6042,
        "longitude": 120.9822,
        "date": "1987-01-27",
        "year": 1987,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      },
      "properties": {
        "id": "CPV-PH1987A",
        "country": "Philippines",
        "countryCode": "PH",
        "region": "Southeast Asia",
        "latitude": 14.6042,
        "longitude": 120.9822,
        "date": "1987-08-27",
        "year": 1987,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          178.4415,
          -18.1416
        ]
      },
      "properties": {
        "id": "CPV-FJ1987B",
        "country": "Fiji",
        "countryCode": "FJ",
        "region": "Oceania",
        "latitude": -18.1416,
        "longitude": 178.4415,
        "date": "1987-05-14",
        "year": 1987,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1986C",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1986-02-07",
        "year": 1986,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1986D",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1986-03-08",
        "year": 1986,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.7833,
          3.75
        ]
      },
      "properties": {
        "id": "CPV-GQ1986E",
        "country": "Equatorial Guinea",
        "countryCode": "GQ",
        "region": "Sub-Saharan Africa",
        "latitude": 3.75,
        "longitude": 8.7833,
        "date": "1986-07-19",
        "year": 1986,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.4833,
          -29.3167
        ]
      },
      "properties": {
        "id": "CPV-LS1986F",
        "country": "Lesotho",
        "countryCode": "LS",
        "region": "Sub-Saharan Africa",
        "latitude": -29.3167,
        "longitude": 27.4833,
        "date": "1986-01-20",
        "year": 1986,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.0187,
          12.7855
        ]
      },
      "properties": {
        "id": "CPV-YE1986G",
        "country": "Yemen People's Republic; S. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 12.7855,
        "longitude": 45.0187,
        "date": "1986-01-13",
        "year": 1986,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      },
      "properties": {
        "id": "CPV-PH1986H",
        "country": "Philippines",
        "countryCode": "PH",
        "region": "Southeast Asia",
        "latitude": 14.6042,
        "longitude": 120.9822,
        "date": "1986-07-06",
        "year": 1986,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN1985I",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "1985-07-04",
        "year": 1985,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -10.7969,
          6.3005
        ]
      },
      "properties": {
        "id": "CPV-LR1985J",
        "country": "Liberia",
        "countryCode": "LR",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3005,
        "longitude": -10.7969,
        "date": "1985-04-01",
        "year": 1985,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -10.7969,
          6.3005
        ]
      },
      "properties": {
        "id": "CPV-LR1985K",
        "country": "Liberia",
        "countryCode": "LR",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3005,
        "longitude": -10.7969,
        "date": "1985-11-12",
        "year": 1985,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1985L",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1985-08-27",
        "year": 1985,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5822,
          0.3163
        ]
      },
      "properties": {
        "id": "CPV-UG1985M",
        "country": "Uganda",
        "countryCode": "UG",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3163,
        "longitude": 32.5822,
        "date": "1985-07-27",
        "year": 1985,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1985N",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1985-03-08",
        "year": 1985,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1985O",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1985-04-06",
        "year": 1985,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1985P",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1985-09-09",
        "year": 1985,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1984Q",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1984-06-30",
        "year": 1984,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR1984R",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "1984-12-12",
        "year": 1984,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.6476,
          9.5716
        ]
      },
      "properties": {
        "id": "CPV-GN1984S",
        "country": "Guinea",
        "countryCode": "GN",
        "region": "Sub-Saharan Africa",
        "latitude": 9.5716,
        "longitude": -13.6476,
        "date": "1984-04-03",
        "year": 1984,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1984T",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1984-03-23",
        "year": 1984,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.5167,
          3.8667
        ]
      },
      "properties": {
        "id": "CPV-CM1984U",
        "country": "Cameroon",
        "countryCode": "CM",
        "region": "Sub-Saharan Africa",
        "latitude": 3.8667,
        "longitude": 11.5167,
        "date": "1984-04-06",
        "year": 1984,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -61.7485,
          12.0564
        ]
      },
      "properties": {
        "id": "CPV-GD1983V",
        "country": "Grenada",
        "countryCode": "GD",
        "region": "Caribbean",
        "latitude": 12.0564,
        "longitude": -61.7485,
        "date": "1983-10-14",
        "year": 1983,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1983W",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1983-08-08",
        "year": 1983,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE1983X",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "1983-10-05",
        "year": 1983,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1983Y",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1983-08-04",
        "year": 1983,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1983Z",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1983-06-19",
        "year": 1983,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1983A",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1983-12-31",
        "year": 1983,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.1333,
          -26.3167
        ]
      },
      "properties": {
        "id": "CPV-SZ1983B",
        "country": "Swaziland",
        "countryCode": "SZ",
        "region": "Sub-Saharan Africa",
        "latitude": -26.3167,
        "longitude": 31.1333,
        "date": "1983-08-10",
        "year": 1983,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1982C",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1982-03-23",
        "year": 1982,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR1982D",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "1982-02-06",
        "year": 1982,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1982E",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1982-11-07",
        "year": 1982,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1982F",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1982-11-23",
        "year": 1982,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.8167,
          -1.2833
        ]
      },
      "properties": {
        "id": "CPV-KE1982G",
        "country": "Kenya",
        "countryCode": "KE",
        "region": "Sub-Saharan Africa",
        "latitude": -1.2833,
        "longitude": 36.8167,
        "date": "1982-08-01",
        "year": 1982,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1982H",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1982-01-31",
        "year": 1982,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1982I",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1982-03-24",
        "year": 1982,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -61.3881,
          15.3017
        ]
      },
      "properties": {
        "id": "CPV-DM1981J",
        "country": "Dominica",
        "countryCode": "DM",
        "region": "Caribbean",
        "latitude": 15.3017,
        "longitude": -61.3881,
        "date": "1981-12-19",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1981K",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1981-05-15",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1981L",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1981-05-25",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1981M",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1981-06-27",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1981N",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1981-08-03",
        "year": 1981,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.7026,
          40.4165
        ]
      },
      "properties": {
        "id": "CPV-ES1981O",
        "country": "Spain",
        "countryCode": "ES",
        "region": "Europe",
        "latitude": 40.4165,
        "longitude": -3.7026,
        "date": "1981-02-23",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.6794,
          13.4531
        ]
      },
      "properties": {
        "id": "CPV-GM1981P",
        "country": "Gambia",
        "countryCode": "GM",
        "region": "Sub-Saharan Africa",
        "latitude": 13.4531,
        "longitude": -16.6794,
        "date": "1981-07-29",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1981Q",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1981-12-31",
        "year": 1981,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.555,
          4.3612
        ]
      },
      "properties": {
        "id": "CPV-CF1981R",
        "country": "Central African Republic",
        "countryCode": "CF",
        "region": "Sub-Saharan Africa",
        "latitude": 4.3612,
        "longitude": 18.555,
        "date": "1981-09-01",
        "year": 1981,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1981S",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1981-05-30",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1981T",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1981-04-01",
        "year": 1981,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -55.1668,
          5.8664
        ]
      },
      "properties": {
        "id": "CPV-SR1980U",
        "country": "Suriname",
        "countryCode": "SR",
        "region": "South America",
        "latitude": 5.8664,
        "longitude": -55.1668,
        "date": "1980-02-25",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -55.1668,
          5.8664
        ]
      },
      "properties": {
        "id": "CPV-SR1980V",
        "country": "Suriname",
        "countryCode": "SR",
        "region": "South America",
        "latitude": 5.8664,
        "longitude": -55.1668,
        "date": "1980-08-15",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1980W",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1980-07-17",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.5977,
          11.8636
        ]
      },
      "properties": {
        "id": "CPV-GW1980X",
        "country": "Guinea-Bissau",
        "countryCode": "GW",
        "region": "Sub-Saharan Africa",
        "latitude": 11.8636,
        "longitude": -15.5977,
        "date": "1980-11-15",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR1980Y",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "1980-01-04",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1980Z",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1980-11-25",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -10.7969,
          6.3005
        ]
      },
      "properties": {
        "id": "CPV-LR1980A",
        "country": "Liberia",
        "countryCode": "LR",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3005,
        "longitude": -10.7969,
        "date": "1980-04-12",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5822,
          0.3163
        ]
      },
      "properties": {
        "id": "CPV-UG1980B",
        "country": "Uganda",
        "countryCode": "UG",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3163,
        "longitude": 32.5822,
        "date": "1980-05-11",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.2771,
          -15.4134
        ]
      },
      "properties": {
        "id": "CPV-ZM1980C",
        "country": "Zambia",
        "countryCode": "ZM",
        "region": "Sub-Saharan Africa",
        "latitude": -15.4134,
        "longitude": 28.2771,
        "date": "1980-10-16",
        "year": 1980,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR1980D",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "1980-09-10",
        "year": 1980,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -61.7485,
          12.0564
        ]
      },
      "properties": {
        "id": "CPV-GD1979E",
        "country": "Grenada",
        "countryCode": "GD",
        "region": "Caribbean",
        "latitude": 12.0564,
        "longitude": -61.7485,
        "date": "1979-03-13",
        "year": 1979,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.1872,
          13.6894
        ]
      },
      "properties": {
        "id": "CPV-SV1979F",
        "country": "El Salvador",
        "countryCode": "SV",
        "region": "Central America",
        "latitude": 13.6894,
        "longitude": -89.1872,
        "date": "1979-10-15",
        "year": 1979,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1979G",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1979-10-11",
        "year": 1979,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1979H",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1979-11-01",
        "year": 1979,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.7833,
          3.75
        ]
      },
      "properties": {
        "id": "CPV-GQ1979I",
        "country": "Equatorial Guinea",
        "countryCode": "GQ",
        "region": "Sub-Saharan Africa",
        "latitude": 3.75,
        "longitude": 8.7833,
        "date": "1979-08-03",
        "year": 1979,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1979J",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1979-05-15",
        "year": 1979,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1979K",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1979-06-04",
        "year": 1979,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1978L",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1978-08-07",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1978M",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1978-07-21",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1978N",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1978-11-24",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML1978O",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "1978-02-15",
        "year": 1978,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.9785,
          18.0858
        ]
      },
      "properties": {
        "id": "CPV-MR1978P",
        "country": "Mauritania",
        "countryCode": "MR",
        "region": "North Africa",
        "latitude": 18.0858,
        "longitude": -15.9785,
        "date": "1978-07-10",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1978Q",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1978-07-05",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.3435,
          2.0416
        ]
      },
      "properties": {
        "id": "CPV-SO1978R",
        "country": "Somalia",
        "countryCode": "SO",
        "region": "Sub-Saharan Africa",
        "latitude": 2.0416,
        "longitude": 45.3435,
        "date": "1978-04-09",
        "year": 1978,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1978S",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1978-05-12",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.2078,
          15.3531
        ]
      },
      "properties": {
        "id": "CPV-YE1978T",
        "country": "Yemen Arab Republic; N. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 15.3531,
        "longitude": 44.2078,
        "date": "1978-10-15",
        "year": 1978,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.0187,
          12.7855
        ]
      },
      "properties": {
        "id": "CPV-YE1978U",
        "country": "Yemen People's Republic; S. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 12.7855,
        "longitude": 45.0187,
        "date": "1978-06-26",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          69.1725,
          34.5289
        ]
      },
      "properties": {
        "id": "CPV-AF1978V",
        "country": "Afghanistan",
        "countryCode": "AF",
        "region": "South Asia",
        "latitude": 34.5289,
        "longitude": 69.1725,
        "date": "1978-04-27",
        "year": 1978,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          104.916,
          11.5625
        ]
      },
      "properties": {
        "id": "CPV-KH1978W",
        "country": "Cambodia",
        "countryCode": "KH",
        "region": "Southeast Asia",
        "latitude": 11.5625,
        "longitude": 104.916,
        "date": "1978-05-15",
        "year": 1978,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1977X",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1977-10-21",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD1977Y",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "1977-04-01",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.7469,
          9.025
        ]
      },
      "properties": {
        "id": "CPV-ET1977Z",
        "country": "Ethiopia",
        "countryCode": "ET",
        "region": "Sub-Saharan Africa",
        "latitude": 9.025,
        "longitude": 38.7469,
        "date": "1977-02-03",
        "year": 1977,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.2343,
          -8.8368
        ]
      },
      "properties": {
        "id": "CPV-AO1977A",
        "country": "Angola",
        "countryCode": "AO",
        "region": "Sub-Saharan Africa",
        "latitude": -8.8368,
        "longitude": 13.2343,
        "date": "1977-05-27",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.45,
          -4.6167
        ]
      },
      "properties": {
        "id": "CPV-SC1977B",
        "country": "Seychelles",
        "countryCode": "SC",
        "region": "Sub-Saharan Africa",
        "latitude": -4.6167,
        "longitude": 55.45,
        "date": "1977-06-05",
        "year": 1977,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1977C",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1977-02-03",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0594,
          33.7035
        ]
      },
      "properties": {
        "id": "CPV-PK1977D",
        "country": "Pakistan",
        "countryCode": "PK",
        "region": "South Asia",
        "latitude": 33.7035,
        "longitude": 73.0594,
        "date": "1977-07-05",
        "year": 1977,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1977E",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1977-10-02",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1977F",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1977-03-26",
        "year": 1977,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1977G",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1977-10-20",
        "year": 1977,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1976H",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1976-01-11",
        "year": 1976,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1976I",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1976-03-24",
        "year": 1976,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -56.1674,
          -34.8335
        ]
      },
      "properties": {
        "id": "CPV-UY1976J",
        "country": "Uruguay",
        "countryCode": "UY",
        "region": "South America",
        "latitude": -34.8335,
        "longitude": -56.1674,
        "date": "1976-06-12",
        "year": 1976,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE1976K",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "1976-03-15",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1976L",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1976-02-13",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.555,
          4.3612
        ]
      },
      "properties": {
        "id": "CPV-CF1976M",
        "country": "Central African Republic",
        "countryCode": "CF",
        "region": "Sub-Saharan Africa",
        "latitude": 4.3612,
        "longitude": 18.555,
        "date": "1976-02-05",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1976N",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1976-11-01",
        "year": 1976,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1976O",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1976-07-02",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.4833,
          33.9
        ]
      },
      "properties": {
        "id": "CPV-LB1976P",
        "country": "Lebanon",
        "countryCode": "LB",
        "region": "Middle East",
        "latitude": 33.9,
        "longitude": 35.4833,
        "date": "1976-03-12",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          96.1297,
          19.745
        ]
      },
      "properties": {
        "id": "CPV-MM1976Q",
        "country": "Myanmar",
        "countryCode": "MM",
        "region": "Southeast Asia",
        "latitude": 19.745,
        "longitude": 96.1297,
        "date": "1976-07-02",
        "year": 1976,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1976R",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1976-10-06",
        "year": 1976,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1975S",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1975-04-22",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1975T",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1975-09-01",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1975U",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1975-08-29",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1975V",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1975-12-18",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1975W",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1975-12-23",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.1399,
          38.7169
        ]
      },
      "properties": {
        "id": "CPV-PT1975X",
        "country": "Portugal",
        "countryCode": "PT",
        "region": "Europe",
        "latitude": 38.7169,
        "longitude": -9.1399,
        "date": "1975-03-11",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.1399,
          38.7169
        ]
      },
      "properties": {
        "id": "CPV-PT1975Y",
        "country": "Portugal",
        "countryCode": "PT",
        "region": "Europe",
        "latitude": 38.7169,
        "longitude": -9.1399,
        "date": "1975-11-25",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1975Z",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1975-01-21",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1975A",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1975-07-29",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0444,
          12.1067
        ]
      },
      "properties": {
        "id": "CPV-TD1975B",
        "country": "Chad",
        "countryCode": "TD",
        "region": "Sub-Saharan Africa",
        "latitude": 12.1067,
        "longitude": 15.0444,
        "date": "1975-04-13",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5892,
          -25.9653
        ]
      },
      "properties": {
        "id": "CPV-MZ1975C",
        "country": "Mozambique",
        "countryCode": "MZ",
        "region": "Sub-Saharan Africa",
        "latitude": -25.9653,
        "longitude": 32.5892,
        "date": "1975-12-17",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          43.2551,
          -11.7022
        ]
      },
      "properties": {
        "id": "CPV-KM1975D",
        "country": "Comoros",
        "countryCode": "KM",
        "region": "Sub-Saharan Africa",
        "latitude": -11.7022,
        "longitude": 43.2551,
        "date": "1975-08-03",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.1875,
          32.8752
        ]
      },
      "properties": {
        "id": "CPV-LY1975E",
        "country": "Libya",
        "countryCode": "LY",
        "region": "North Africa",
        "latitude": 32.8752,
        "longitude": 13.1875,
        "date": "1975-08-05",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1975F",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1975-09-05",
        "year": 1975,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1975G",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1975-08-15",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.4074,
          23.7104
        ]
      },
      "properties": {
        "id": "CPV-BD1975H",
        "country": "Bangladesh",
        "countryCode": "BD",
        "region": "South Asia",
        "latitude": 23.7104,
        "longitude": 90.4074,
        "date": "1975-11-07",
        "year": 1975,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1974I",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1974-06-05",
        "year": 1974,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.1399,
          38.7169
        ]
      },
      "properties": {
        "id": "CPV-PT1974J",
        "country": "Portugal",
        "countryCode": "PT",
        "region": "Europe",
        "latitude": 38.7169,
        "longitude": -9.1399,
        "date": "1974-04-25",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          33.3669,
          35.1595
        ]
      },
      "properties": {
        "id": "CPV-CY1974K",
        "country": "Cyprus",
        "countryCode": "CY",
        "region": "Europe",
        "latitude": 35.1595,
        "longitude": 33.3669,
        "date": "1974-07-15",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.1098,
          13.5137
        ]
      },
      "properties": {
        "id": "CPV-NE1974L",
        "country": "Niger",
        "countryCode": "NE",
        "region": "Sub-Saharan Africa",
        "latitude": 13.5137,
        "longitude": 2.1098,
        "date": "1974-04-15",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1974M",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1974-02-08",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5822,
          0.3163
        ]
      },
      "properties": {
        "id": "CPV-UG1974N",
        "country": "Uganda",
        "countryCode": "UG",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3163,
        "longitude": 32.5822,
        "date": "1974-03-23",
        "year": 1974,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5822,
          0.3163
        ]
      },
      "properties": {
        "id": "CPV-UG1974O",
        "country": "Uganda",
        "countryCode": "UG",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3163,
        "longitude": 32.5822,
        "date": "1974-11-11",
        "year": 1974,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.7469,
          9.025
        ]
      },
      "properties": {
        "id": "CPV-ET1974P",
        "country": "Ethiopia",
        "countryCode": "ET",
        "region": "Sub-Saharan Africa",
        "latitude": 9.025,
        "longitude": 38.7469,
        "date": "1974-09-12",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.5361,
          -18.9137
        ]
      },
      "properties": {
        "id": "CPV-MG1974Q",
        "country": "Madagascar",
        "countryCode": "MG",
        "region": "Sub-Saharan Africa",
        "latitude": -18.9137,
        "longitude": 47.5361,
        "date": "1974-12-31",
        "year": 1974,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.2078,
          15.3531
        ]
      },
      "properties": {
        "id": "CPV-YE1974R",
        "country": "Yemen Arab Republic; N. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 15.3531,
        "longitude": 44.2078,
        "date": "1974-06-13",
        "year": 1974,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.6483,
          -33.4569
        ]
      },
      "properties": {
        "id": "CPV-CL1973S",
        "country": "Chile",
        "countryCode": "CL",
        "region": "South America",
        "latitude": -33.4569,
        "longitude": -70.6483,
        "date": "1973-06-29",
        "year": 1973,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.6483,
          -33.4569
        ]
      },
      "properties": {
        "id": "CPV-CL1973T",
        "country": "Chile",
        "countryCode": "CL",
        "region": "South America",
        "latitude": -33.4569,
        "longitude": -70.6483,
        "date": "1973-09-11",
        "year": 1973,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -56.1674,
          -34.8335
        ]
      },
      "properties": {
        "id": "CPV-UY1973U",
        "country": "Uruguay",
        "countryCode": "UY",
        "region": "South America",
        "latitude": -34.8335,
        "longitude": -56.1674,
        "date": "1973-02-10",
        "year": 1973,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.749,
          37.9534
        ]
      },
      "properties": {
        "id": "CPV-GR1973V",
        "country": "Greece",
        "countryCode": "GR",
        "region": "Europe",
        "latitude": 37.9534,
        "longitude": 23.749,
        "date": "1973-11-25",
        "year": 1973,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.0579,
          -1.9474
        ]
      },
      "properties": {
        "id": "CPV-RW1973W",
        "country": "Rwanda",
        "countryCode": "RW",
        "region": "Sub-Saharan Africa",
        "latitude": -1.9474,
        "longitude": 30.0579,
        "date": "1973-07-05",
        "year": 1973,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1973X",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1973-06-30",
        "year": 1973,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          69.1725,
          34.5289
        ]
      },
      "properties": {
        "id": "CPV-AF1973Y",
        "country": "Afghanistan",
        "countryCode": "AF",
        "region": "South Asia",
        "latitude": 34.5289,
        "longitude": 69.1725,
        "date": "1973-07-17",
        "year": 1973,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1973Z",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1973-08-20",
        "year": 1973,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1972A",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1972-12-04",
        "year": 1972,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.1872,
          13.6894
        ]
      },
      "properties": {
        "id": "CPV-SV1972B",
        "country": "El Salvador",
        "countryCode": "SV",
        "region": "Central America",
        "latitude": 13.6894,
        "longitude": -89.1872,
        "date": "1972-03-25",
        "year": 1972,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1972C",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1972-02-15",
        "year": 1972,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1972D",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1972-02-23",
        "year": 1972,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1972E",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1972-10-26",
        "year": 1972,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1972F",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1972-01-13",
        "year": 1972,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1972G",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1972-02-22",
        "year": 1972,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -6.8326,
          34.0133
        ]
      },
      "properties": {
        "id": "CPV-MA1972H",
        "country": "Morocco",
        "countryCode": "MA",
        "region": "North Africa",
        "latitude": 34.0133,
        "longitude": -6.8326,
        "date": "1972-08-16",
        "year": 1972,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          51.5245,
          25.2747
        ]
      },
      "properties": {
        "id": "CPV-QA1972I",
        "country": "Qatar",
        "countryCode": "QA",
        "region": "Middle East",
        "latitude": 25.2747,
        "longitude": 51.5245,
        "date": "1972-02-22",
        "year": 1972,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          54.3618,
          24.4648
        ]
      },
      "properties": {
        "id": "CPV-AE1972J",
        "country": "United Arab Emirates",
        "countryCode": "AE",
        "region": "Middle East",
        "latitude": 24.4648,
        "longitude": 54.3618,
        "date": "1972-01-25",
        "year": 1972,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1971K",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1971-01-10",
        "year": 1971,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1971L",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1971-08-22",
        "year": 1971,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1971M",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1971-03-22",
        "year": 1971,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1971N",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1971-10-08",
        "year": 1971,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1971O",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1971-03-23",
        "year": 1971,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5822,
          0.3163
        ]
      },
      "properties": {
        "id": "CPV-UG1971P",
        "country": "Uganda",
        "countryCode": "UG",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3163,
        "longitude": 32.5822,
        "date": "1971-01-25",
        "year": 1971,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -6.8326,
          34.0133
        ]
      },
      "properties": {
        "id": "CPV-MA1971Q",
        "country": "Morocco",
        "countryCode": "MA",
        "region": "North Africa",
        "latitude": 34.0133,
        "longitude": -6.8326,
        "date": "1971-07-10",
        "year": 1971,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1971R",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1971-07-19",
        "year": 1971,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR1971S",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "1971-03-12",
        "year": 1971,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0594,
          33.7035
        ]
      },
      "properties": {
        "id": "CPV-PK1971T",
        "country": "Pakistan",
        "countryCode": "PK",
        "region": "South Asia",
        "latitude": 33.7035,
        "longitude": 73.0594,
        "date": "1971-12-19",
        "year": 1971,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1970U",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1970-04-24",
        "year": 1970,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1970V",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1970-10-06",
        "year": 1970,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1970W",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1970-06-08",
        "year": 1970,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1970X",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1970-03-22",
        "year": 1970,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1970Y",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1970-01-20",
        "year": 1970,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1970Z",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1970-11-13",
        "year": 1970,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          58.5922,
          23.6139
        ]
      },
      "properties": {
        "id": "CPV-OM1970A",
        "country": "Oman",
        "countryCode": "OM",
        "region": "Middle East",
        "latitude": 23.6139,
        "longitude": 58.5922,
        "date": "1970-07-26",
        "year": 1970,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          104.916,
          11.5625
        ]
      },
      "properties": {
        "id": "CPV-KH1970B",
        "country": "Cambodia",
        "countryCode": "KH",
        "region": "Southeast Asia",
        "latitude": 11.5625,
        "longitude": 104.916,
        "date": "1970-03-18",
        "year": 1970,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5196,
          8.9958
        ]
      },
      "properties": {
        "id": "CPV-PA1969C",
        "country": "Panama",
        "countryCode": "PA",
        "region": "Central America",
        "latitude": 8.9958,
        "longitude": -79.5196,
        "date": "1969-12-14",
        "year": 1969,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1969D",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1969-08-31",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1969E",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1969-09-26",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.7833,
          3.75
        ]
      },
      "properties": {
        "id": "CPV-GQ1969F",
        "country": "Equatorial Guinea",
        "countryCode": "GQ",
        "region": "Sub-Saharan Africa",
        "latitude": 3.75,
        "longitude": 8.7833,
        "date": "1969-03-05",
        "year": 1969,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1969G",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1969-12-10",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1969H",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1969-11-08",
        "year": 1969,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.3435,
          2.0416
        ]
      },
      "properties": {
        "id": "CPV-SO1969I",
        "country": "Somalia",
        "countryCode": "SO",
        "region": "Sub-Saharan Africa",
        "latitude": 2.0416,
        "longitude": 45.3435,
        "date": "1969-10-21",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.1875,
          32.8752
        ]
      },
      "properties": {
        "id": "CPV-LY1969J",
        "country": "Libya",
        "countryCode": "LY",
        "region": "North Africa",
        "latitude": 32.8752,
        "longitude": 13.1875,
        "date": "1969-09-01",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1969K",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1969-05-25",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1969L",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1969-03-01",
        "year": 1969,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5196,
          8.9958
        ]
      },
      "properties": {
        "id": "CPV-PA1968M",
        "country": "Panama",
        "countryCode": "PA",
        "region": "Central America",
        "latitude": 8.9958,
        "longitude": -79.5196,
        "date": "1968-10-12",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1968N",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1968-10-03",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -8,
          12.65
        ]
      },
      "properties": {
        "id": "CPV-ML1968O",
        "country": "Mali",
        "countryCode": "ML",
        "region": "Sub-Saharan Africa",
        "latitude": 12.65,
        "longitude": -8,
        "date": "1968-11-19",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1968P",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1968-04-18",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1968Q",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1968-08-03",
        "year": 1968,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1968R",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1968-09-04",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1968S",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1968-07-17",
        "year": 1968,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1968T",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1968-08-11",
        "year": 1968,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.0187,
          12.7855
        ]
      },
      "properties": {
        "id": "CPV-YE1968U",
        "country": "Yemen People's Republic; S. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 12.7855,
        "longitude": 45.0187,
        "date": "1968-03-20",
        "year": 1968,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.0187,
          12.7855
        ]
      },
      "properties": {
        "id": "CPV-YE1968V",
        "country": "Yemen People's Republic; S. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 12.7855,
        "longitude": 45.0187,
        "date": "1968-08-31",
        "year": 1968,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.749,
          37.9534
        ]
      },
      "properties": {
        "id": "CPV-GR1967W",
        "country": "Greece",
        "countryCode": "GR",
        "region": "Europe",
        "latitude": 37.9534,
        "longitude": 23.749,
        "date": "1967-04-21",
        "year": 1967,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.749,
          37.9534
        ]
      },
      "properties": {
        "id": "CPV-GR1967X",
        "country": "Greece",
        "countryCode": "GR",
        "region": "Europe",
        "latitude": 37.9534,
        "longitude": 23.749,
        "date": "1967-12-13",
        "year": 1967,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1967Y",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1967-12-17",
        "year": 1967,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1967Z",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1967-03-21",
        "year": 1967,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.2299,
          8.484
        ]
      },
      "properties": {
        "id": "CPV-SL1967A",
        "country": "Sierra Leone",
        "countryCode": "SL",
        "region": "Sub-Saharan Africa",
        "latitude": 8.484,
        "longitude": -13.2299,
        "date": "1967-03-23",
        "year": 1967,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1967B",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1967-04-17",
        "year": 1967,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1967C",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1967-01-13",
        "year": 1967,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.042,
          36.7525
        ]
      },
      "properties": {
        "id": "CPV-DZ1967D",
        "country": "Algeria",
        "countryCode": "DZ",
        "region": "North Africa",
        "latitude": 36.7525,
        "longitude": 3.042,
        "date": "1967-12-14",
        "year": 1967,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.2078,
          15.3531
        ]
      },
      "properties": {
        "id": "CPV-YE1967E",
        "country": "Yemen Arab Republic; N. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 15.3531,
        "longitude": 44.2078,
        "date": "1967-11-04",
        "year": 1967,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1966F",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1966-10-30",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1966G",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1966-03-29",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1966H",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1966-06-28",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.5383,
          12.3642
        ]
      },
      "properties": {
        "id": "CPV-BF1966I",
        "country": "Burkina Faso",
        "countryCode": "BF",
        "region": "Sub-Saharan Africa",
        "latitude": 12.3642,
        "longitude": -1.5383,
        "date": "1966-01-03",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.1969,
          5.556
        ]
      },
      "properties": {
        "id": "CPV-GH1966J",
        "country": "Ghana",
        "countryCode": "GH",
        "region": "Sub-Saharan Africa",
        "latitude": 5.556,
        "longitude": -0.1969,
        "date": "1966-02-24",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1966K",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1966-01-15",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.4898,
          9.0574
        ]
      },
      "properties": {
        "id": "CPV-NG1966L",
        "country": "Nigeria",
        "countryCode": "NG",
        "region": "Sub-Saharan Africa",
        "latitude": 9.0574,
        "longitude": 7.4898,
        "date": "1966-07-29",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.555,
          4.3612
        ]
      },
      "properties": {
        "id": "CPV-CF1966M",
        "country": "Central African Republic",
        "countryCode": "CF",
        "region": "Sub-Saharan Africa",
        "latitude": 4.3612,
        "longitude": 18.555,
        "date": "1966-01-01",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1966N",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1966-06-27",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1966O",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1966-07-08",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1966P",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1966-11-28",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1966Q",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1966-12-18",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1966R",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1966-12-28",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1966S",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1966-06-30",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1966T",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1966-02-23",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1966U",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1966-09-08",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1966V",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1966-10-21",
        "year": 1966,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.8416,
          -6.2118
        ]
      },
      "properties": {
        "id": "CPV-ID1966W",
        "country": "Indonesia",
        "countryCode": "ID",
        "region": "Southeast Asia",
        "latitude": -6.2118,
        "longitude": 106.8416,
        "date": "1966-03-12",
        "year": 1966,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.9018,
          18.4896
        ]
      },
      "properties": {
        "id": "CPV-DO1965X",
        "country": "Dominican Republic",
        "countryCode": "DO",
        "region": "Caribbean",
        "latitude": 18.4896,
        "longitude": -69.9018,
        "date": "1965-04-25",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.9018,
          18.4896
        ]
      },
      "properties": {
        "id": "CPV-DO1965Y",
        "country": "Dominican Republic",
        "countryCode": "DO",
        "region": "Caribbean",
        "latitude": 18.4896,
        "longitude": -69.9018,
        "date": "1965-11-22",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1965Z",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1965-11-29",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1965A",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1965-12-22",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.3136,
          -4.3276
        ]
      },
      "properties": {
        "id": "CPV-CD1965B",
        "country": "Democratic Republic of the Congo",
        "countryCode": "CD",
        "region": "Sub-Saharan Africa",
        "latitude": -4.3276,
        "longitude": 15.3136,
        "date": "1965-11-25",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.3644,
          -3.3822
        ]
      },
      "properties": {
        "id": "CPV-BI1965C",
        "country": "Burundi",
        "countryCode": "BI",
        "region": "Sub-Saharan Africa",
        "latitude": -3.3822,
        "longitude": 29.3644,
        "date": "1965-10-18",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.042,
          36.7525
        ]
      },
      "properties": {
        "id": "CPV-DZ1965D",
        "country": "Algeria",
        "countryCode": "DZ",
        "region": "North Africa",
        "latitude": 36.7525,
        "longitude": 3.042,
        "date": "1965-06-19",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1965E",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1965-09-16",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1965F",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1965-01-31",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1965G",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1965-03-28",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1965H",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1965-04-16",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1965I",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1965-01-27",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1965J",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1965-02-19",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1965K",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1965-06-11",
        "year": 1965,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.8416,
          -6.2118
        ]
      },
      "properties": {
        "id": "CPV-ID1965L",
        "country": "Indonesia",
        "countryCode": "ID",
        "region": "Southeast Asia",
        "latitude": -6.2118,
        "longitude": 106.8416,
        "date": "1965-10-01",
        "year": 1965,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1964M",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1964-03-30",
        "year": 1964,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1964N",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1964-04-01",
        "year": 1964,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1964O",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1964-11-03",
        "year": 1964,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.4537,
          0.3925
        ]
      },
      "properties": {
        "id": "CPV-GA1964P",
        "country": "Gabon",
        "countryCode": "GA",
        "region": "Sub-Saharan Africa",
        "latitude": 0.3925,
        "longitude": 9.4537,
        "date": "1964-02-17",
        "year": 1964,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.042,
          36.7525
        ]
      },
      "properties": {
        "id": "CPV-DZ1964Q",
        "country": "Algeria",
        "countryCode": "DZ",
        "region": "North Africa",
        "latitude": 36.7525,
        "longitude": 3.042,
        "date": "1964-06-30",
        "year": 1964,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1964R",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1964-04-19",
        "year": 1964,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1964S",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1964-01-30",
        "year": 1964,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1964T",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1964-09-13",
        "year": 1964,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.9018,
          18.4896
        ]
      },
      "properties": {
        "id": "CPV-DO1963U",
        "country": "Dominican Republic",
        "countryCode": "DO",
        "region": "Caribbean",
        "latitude": 18.4896,
        "longitude": -69.9018,
        "date": "1963-09-25",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1963V",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1963-03-30",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1963W",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1963-10-03",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1963X",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1963-07-11",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1963Y",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1963-03-03",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1963Z",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1963-09-12",
        "year": 1963,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1963A",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1963-04-02",
        "year": 1963,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.4183,
          6.3654
        ]
      },
      "properties": {
        "id": "CPV-BJ1963B",
        "country": "Benin",
        "countryCode": "BJ",
        "region": "Sub-Saharan Africa",
        "latitude": 6.3654,
        "longitude": 2.4183,
        "date": "1963-10-28",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.2123,
          6.1375
        ]
      },
      "properties": {
        "id": "CPV-TG1963C",
        "country": "Togo",
        "countryCode": "TG",
        "region": "Sub-Saharan Africa",
        "latitude": 6.1375,
        "longitude": 1.2123,
        "date": "1963-01-13",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.2832,
          -4.2658
        ]
      },
      "properties": {
        "id": "CPV-CG1963D",
        "country": "Congo",
        "countryCode": "CG",
        "region": "Sub-Saharan Africa",
        "latitude": -4.2658,
        "longitude": 15.2832,
        "date": "1963-08-15",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR1963E",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "1963-05-20",
        "year": 1963,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1963F",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1963-02-08",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1963G",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1963-11-18",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1963H",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1963-03-08",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1963I",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1963-07-18",
        "year": 1963,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1963J",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1963-11-01",
        "year": 1963,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.9018,
          18.4896
        ]
      },
      "properties": {
        "id": "CPV-DO1962K",
        "country": "Dominican Republic",
        "countryCode": "DO",
        "region": "Caribbean",
        "latitude": 18.4896,
        "longitude": -69.9018,
        "date": "1962-01-16",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1962L",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1962-11-25",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1962M",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1962-05-04",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1962N",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1962-06-02",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1962O",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1962-07-18",
        "year": 1962,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1962P",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1962-03-28",
        "year": 1962,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1962Q",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1962-08-08",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1962R",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1962-09-19",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.1399,
          38.7169
        ]
      },
      "properties": {
        "id": "CPV-PT1962S",
        "country": "Portugal",
        "countryCode": "PT",
        "region": "Europe",
        "latitude": 38.7169,
        "longitude": -9.1399,
        "date": "1962-01-01",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -17.4441,
          14.6937
        ]
      },
      "properties": {
        "id": "CPV-SN1962T",
        "country": "Senegal",
        "countryCode": "SN",
        "region": "Sub-Saharan Africa",
        "latitude": 14.6937,
        "longitude": -17.4441,
        "date": "1962-12-17",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR1962U",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "1962-02-22",
        "year": 1962,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1962V",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1962-03-28",
        "year": 1962,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.2078,
          15.3531
        ]
      },
      "properties": {
        "id": "CPV-YE1962W",
        "country": "Yemen Arab Republic; N. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 15.3531,
        "longitude": 44.2078,
        "date": "1962-09-27",
        "year": 1962,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          96.1297,
          19.745
        ]
      },
      "properties": {
        "id": "CPV-MM1962X",
        "country": "Myanmar",
        "countryCode": "MM",
        "region": "Southeast Asia",
        "latitude": 19.745,
        "longitude": 96.1297,
        "date": "1962-03-02",
        "year": 1962,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.1872,
          13.6894
        ]
      },
      "properties": {
        "id": "CPV-SV1961Y",
        "country": "El Salvador",
        "countryCode": "SV",
        "region": "Central America",
        "latitude": 13.6894,
        "longitude": -89.1872,
        "date": "1961-01-25",
        "year": 1961,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0818,
          4.6097
        ]
      },
      "properties": {
        "id": "CPV-CO1961Z",
        "country": "Colombia",
        "countryCode": "CO",
        "region": "South America",
        "latitude": 4.6097,
        "longitude": -74.0818,
        "date": "1961-10-11",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1961A",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1961-02-20",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1961B",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1961-06-26",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1961C",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1961-11-08",
        "year": 1961,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1961D",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1961-08-11",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          45.3435,
          2.0416
        ]
      },
      "properties": {
        "id": "CPV-SO1961E",
        "country": "Somalia",
        "countryCode": "SO",
        "region": "Sub-Saharan Africa",
        "latitude": 2.0416,
        "longitude": 45.3435,
        "date": "1961-12-10",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.7469,
          9.025
        ]
      },
      "properties": {
        "id": "CPV-ET1961F",
        "country": "Ethiopia",
        "countryCode": "ET",
        "region": "Sub-Saharan Africa",
        "latitude": 9.025,
        "longitude": 38.7469,
        "date": "1961-12-14",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1961G",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1961-09-28",
        "year": 1961,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.4833,
          33.9
        ]
      },
      "properties": {
        "id": "CPV-LB1961H",
        "country": "Lebanon",
        "countryCode": "LB",
        "region": "Middle East",
        "latitude": 33.9,
        "longitude": 35.4833,
        "date": "1961-12-31",
        "year": 1961,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          126.9778,
          37.5683
        ]
      },
      "properties": {
        "id": "CPV-KR1961I",
        "country": "South Korea",
        "countryCode": "KR",
        "region": "East Asia",
        "latitude": 37.5683,
        "longitude": 126.9778,
        "date": "1961-05-16",
        "year": 1961,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1960J",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1960-11-13",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.1872,
          13.6894
        ]
      },
      "properties": {
        "id": "CPV-SV1960K",
        "country": "El Salvador",
        "countryCode": "SV",
        "region": "Central America",
        "latitude": 13.6894,
        "longitude": -89.1872,
        "date": "1960-10-26",
        "year": 1960,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1960L",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1960-09-12",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1960M",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1960-03-19",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1960N",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1960-06-13",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1960O",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1960-11-30",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.3136,
          -4.3276
        ]
      },
      "properties": {
        "id": "CPV-CD1960P",
        "country": "Democratic Republic of the Congo",
        "countryCode": "CD",
        "region": "Sub-Saharan Africa",
        "latitude": -4.3276,
        "longitude": 15.3136,
        "date": "1960-09-14",
        "year": 1960,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.7469,
          9.025
        ]
      },
      "properties": {
        "id": "CPV-ET1960Q",
        "country": "Ethiopia",
        "countryCode": "ET",
        "region": "Sub-Saharan Africa",
        "latitude": 9.025,
        "longitude": 38.7469,
        "date": "1960-12-14",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.8543,
          39.9199
        ]
      },
      "properties": {
        "id": "CPV-TR1960R",
        "country": "Turkey",
        "countryCode": "TR",
        "region": "Europe",
        "latitude": 39.9199,
        "longitude": 32.8543,
        "date": "1960-05-27",
        "year": 1960,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1960S",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1960-08-09",
        "year": 1960,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.6,
          17.9667
        ]
      },
      "properties": {
        "id": "CPV-LA1960T",
        "country": "Laos",
        "countryCode": "LA",
        "region": "Southeast Asia",
        "latitude": 17.9667,
        "longitude": 102.6,
        "date": "1960-12-08",
        "year": 1960,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6297,
          10.8231
        ]
      },
      "properties": {
        "id": "CPV-VN1960U",
        "country": "Republic of Vietnam",
        "countryCode": "VN",
        "region": "East Asia",
        "latitude": 10.8231,
        "longitude": 106.6297,
        "date": "1960-11-11",
        "year": 1960,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1959V",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1959-07-12",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1959W",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1959-12-03",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1959X",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1959-04-19",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1959Y",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1959-05-21",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1959Z",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1959-11-09",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1959A",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1959-03-07",
        "year": 1959,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0818,
          4.6097
        ]
      },
      "properties": {
        "id": "CPV-CO1958B",
        "country": "Colombia",
        "countryCode": "CO",
        "region": "South America",
        "latitude": 4.6097,
        "longitude": -74.0818,
        "date": "1958-05-02",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1958C",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1958-01-01",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1958D",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1958-07-22",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1958E",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1958-09-07",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1958F",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1958-10-21",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.5324,
          15.5518
        ]
      },
      "properties": {
        "id": "CPV-SD1958G",
        "country": "Sudan",
        "countryCode": "SD",
        "region": "Sub-Saharan Africa",
        "latitude": 15.5518,
        "longitude": 32.5324,
        "date": "1958-11-17",
        "year": 1958,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.4009,
          33.3406
        ]
      },
      "properties": {
        "id": "CPV-IQ1958H",
        "country": "Iraq",
        "countryCode": "IQ",
        "region": "Middle East",
        "latitude": 33.3406,
        "longitude": 44.4009,
        "date": "1958-07-14",
        "year": 1958,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.945,
          31.9552
        ]
      },
      "properties": {
        "id": "CPV-JO1958I",
        "country": "Jordan",
        "countryCode": "JO",
        "region": "Middle East",
        "latitude": 31.9552,
        "longitude": 35.945,
        "date": "1958-07-01",
        "year": 1958,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0594,
          33.7035
        ]
      },
      "properties": {
        "id": "CPV-PK1958J",
        "country": "Pakistan",
        "countryCode": "PK",
        "region": "South Asia",
        "latitude": 33.7035,
        "longitude": 73.0594,
        "date": "1958-10-27",
        "year": 1958,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          96.1297,
          19.745
        ]
      },
      "properties": {
        "id": "CPV-MM1958K",
        "country": "Myanmar",
        "countryCode": "MM",
        "region": "Southeast Asia",
        "latitude": 19.745,
        "longitude": 96.1297,
        "date": "1958-09-26",
        "year": 1958,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1958L",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1958-10-20",
        "year": 1958,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3785,
          23.1195
        ]
      },
      "properties": {
        "id": "CPV-CU1957M",
        "country": "Cuba",
        "countryCode": "CU",
        "region": "Caribbean",
        "latitude": 23.1195,
        "longitude": -82.3785,
        "date": "1957-09-05",
        "year": 1957,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1957N",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1957-04-02",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1957O",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1957-05-21",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1957P",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1957-06-14",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1957Q",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1957-10-24",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0818,
          4.6097
        ]
      },
      "properties": {
        "id": "CPV-CO1957R",
        "country": "Colombia",
        "countryCode": "CO",
        "region": "South America",
        "latitude": 4.6097,
        "longitude": -74.0818,
        "date": "1957-05-10",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.945,
          31.9552
        ]
      },
      "properties": {
        "id": "CPV-JO1957S",
        "country": "Jordan",
        "countryCode": "JO",
        "region": "Middle East",
        "latitude": 31.9552,
        "longitude": 35.945,
        "date": "1957-04-13",
        "year": 1957,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1957T",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1957-09-16",
        "year": 1957,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1956U",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1956-12-12",
        "year": 1956,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1956V",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1956-08-01",
        "year": 1956,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.2068,
          14.0818
        ]
      },
      "properties": {
        "id": "CPV-HN1956W",
        "country": "Honduras",
        "countryCode": "HN",
        "region": "Central America",
        "latitude": 14.0818,
        "longitude": -87.2068,
        "date": "1956-10-21",
        "year": 1956,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1956X",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1956-08-07",
        "year": 1956,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1956Y",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1956-02-16",
        "year": 1956,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1956Z",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1956-06-09",
        "year": 1956,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1955A",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1955-01-20",
        "year": 1955,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.9297,
          -15.7797
        ]
      },
      "properties": {
        "id": "CPV-BR1955B",
        "country": "Brazil",
        "countryCode": "BR",
        "region": "South America",
        "latitude": -15.7797,
        "longitude": -47.9297,
        "date": "1955-11-11",
        "year": 1955,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -57.6359,
          -25.3007
        ]
      },
      "properties": {
        "id": "CPV-PY1955C",
        "country": "Paraguay",
        "countryCode": "PY",
        "region": "South America",
        "latitude": -25.3007,
        "longitude": -57.6359,
        "date": "1955-12-21",
        "year": 1955,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1955D",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1955-06-16",
        "year": 1955,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1955E",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1955-09-16",
        "year": 1955,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1955F",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1955-11-13",
        "year": 1955,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.2078,
          15.3531
        ]
      },
      "properties": {
        "id": "CPV-YE1955G",
        "country": "Yemen Arab Republic; N. Yemen",
        "countryCode": "YE",
        "region": "Middle East",
        "latitude": 15.3531,
        "longitude": 44.2078,
        "date": "1955-04-02",
        "year": 1955,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5307,
          14.6127
        ]
      },
      "properties": {
        "id": "CPV-GT1954H",
        "country": "Guatemala",
        "countryCode": "GT",
        "region": "Central America",
        "latitude": 14.6127,
        "longitude": -90.5307,
        "date": "1954-06-29",
        "year": 1954,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1954I",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1954-12-23",
        "year": 1954,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.0282,
          -12.0432
        ]
      },
      "properties": {
        "id": "CPV-PE1954J",
        "country": "Peru",
        "countryCode": "PE",
        "region": "South America",
        "latitude": -12.0432,
        "longitude": -77.0282,
        "date": "1954-08-10",
        "year": 1954,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -57.6359,
          -25.3007
        ]
      },
      "properties": {
        "id": "CPV-PY1954K",
        "country": "Paraguay",
        "countryCode": "PY",
        "region": "South America",
        "latitude": -25.3007,
        "longitude": -57.6359,
        "date": "1954-05-05",
        "year": 1954,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.2394,
          30.0392
        ]
      },
      "properties": {
        "id": "CPV-EG1954L",
        "country": "Egypt",
        "countryCode": "EG",
        "region": "North Africa",
        "latitude": 30.0392,
        "longitude": 31.2394,
        "date": "1954-02-27",
        "year": 1954,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1954M",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1954-02-25",
        "year": 1954,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0818,
          4.6097
        ]
      },
      "properties": {
        "id": "CPV-CO1953N",
        "country": "Colombia",
        "countryCode": "CO",
        "region": "South America",
        "latitude": 4.6097,
        "longitude": -74.0818,
        "date": "1953-06-13",
        "year": 1953,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1953O",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1953-01-06",
        "year": 1953,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          51.4215,
          35.6944
        ]
      },
      "properties": {
        "id": "CPV-IR1953P",
        "country": "Iran",
        "countryCode": "IR",
        "region": "Middle East",
        "latitude": 35.6944,
        "longitude": 51.4215,
        "date": "1953-08-13",
        "year": 1953,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3785,
          23.1195
        ]
      },
      "properties": {
        "id": "CPV-CU1952Q",
        "country": "Cuba",
        "countryCode": "CU",
        "region": "Caribbean",
        "latitude": 23.1195,
        "longitude": -82.3785,
        "date": "1952-03-10",
        "year": 1952,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.8792,
          10.488
        ]
      },
      "properties": {
        "id": "CPV-VE1952R",
        "country": "Venezuela",
        "countryCode": "VE",
        "region": "South America",
        "latitude": 10.488,
        "longitude": -66.8792,
        "date": "1952-09-29",
        "year": 1952,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.525,
          -0.2299
        ]
      },
      "properties": {
        "id": "CPV-EC1952S",
        "country": "Ecuador",
        "countryCode": "EC",
        "region": "South America",
        "latitude": -0.2299,
        "longitude": -78.525,
        "date": "1952-03-03",
        "year": 1952,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1952T",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1952-04-09",
        "year": 1952,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.2394,
          30.0392
        ]
      },
      "properties": {
        "id": "CPV-EG1952U",
        "country": "Egypt",
        "countryCode": "EG",
        "region": "North Africa",
        "latitude": 30.0392,
        "longitude": 31.2394,
        "date": "1952-07-23",
        "year": 1952,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.5196,
          8.9958
        ]
      },
      "properties": {
        "id": "CPV-PA1951V",
        "country": "Panama",
        "countryCode": "PA",
        "region": "Central America",
        "latitude": 8.9958,
        "longitude": -79.5196,
        "date": "1951-05-09",
        "year": 1951,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1951W",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1951-05-16",
        "year": 1951,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.4004,
          -34.6051
        ]
      },
      "properties": {
        "id": "CPV-AR1951X",
        "country": "Argentina",
        "countryCode": "AR",
        "region": "South America",
        "latitude": -34.6051,
        "longitude": -58.4004,
        "date": "1951-09-28",
        "year": 1951,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.3084,
          33.5086
        ]
      },
      "properties": {
        "id": "CPV-SY1951Y",
        "country": "Syria",
        "countryCode": "SY",
        "region": "Middle East",
        "latitude": 33.5086,
        "longitude": 36.3084,
        "date": "1951-11-29",
        "year": 1951,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1951Z",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1951-06-29",
        "year": 1951,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          100.5252,
          13.722
        ]
      },
      "properties": {
        "id": "CPV-TH1951A",
        "country": "Thailand",
        "countryCode": "TH",
        "region": "Southeast Asia",
        "latitude": 13.722,
        "longitude": 100.5252,
        "date": "1951-11-29",
        "year": 1951,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.335,
          18.5392
        ]
      },
      "properties": {
        "id": "CPV-HT1950B",
        "country": "Haiti",
        "countryCode": "HT",
        "region": "Caribbean",
        "latitude": 18.5392,
        "longitude": -72.335,
        "date": "1950-05-10",
        "year": 1950,
        "outcome": "successful",
        "tags": [
          "military"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.15,
          -16.5
        ]
      },
      "properties": {
        "id": "CPV-BO1950C",
        "country": "Bolivia",
        "countryCode": "BO",
        "region": "South America",
        "latitude": -16.5,
        "longitude": -68.15,
        "date": "1950-07-22",
        "year": 1950,
        "outcome": "failed",
        "tags": [
          "military"
        ]
      }
    }
  ]
}`,Jp={2:{country:"United States of America",latitude:39.5,longitude:-98.35},20:{country:"Canada",latitude:60,longitude:-96},31:{country:"Bahamas",latitude:24.25,longitude:-76},40:{country:"Cuba",latitude:22,longitude:-80},41:{country:"Haiti",latitude:19,longitude:-72.33},42:{country:"Dominican Republic",latitude:19,longitude:-70.67},51:{country:"Jamaica",latitude:18.11,longitude:-77.3},52:{country:"Trinidad and Tobago",latitude:10.45,longitude:-61.33},53:{country:"Barbados",latitude:13.19,longitude:-59.54},54:{country:"Dominica",latitude:15.42,longitude:-61.37},55:{country:"Grenada",latitude:12.12,longitude:-61.68},56:{country:"St. Lucia",latitude:13.88,longitude:-60.97},57:{country:"St. Vincent and the Grenadines",latitude:13.25,longitude:-61.2},58:{country:"Antigua & Barbuda",latitude:17.07,longitude:-61.8},60:{country:"St. Kitts and Nevis",latitude:17.35,longitude:-62.78},70:{country:"Mexico",latitude:23.63,longitude:-102.55},80:{country:"Belize",latitude:17.25,longitude:-88.76},90:{country:"Guatemala",latitude:15.78,longitude:-90.23},91:{country:"Honduras",latitude:15.2,longitude:-86.24},92:{country:"El Salvador",latitude:13.79,longitude:-88.9},93:{country:"Nicaragua",latitude:12.87,longitude:-85.21},94:{country:"Costa Rica",latitude:9.75,longitude:-83.75},95:{country:"Panama",latitude:8.54,longitude:-80.78},100:{country:"Colombia",latitude:4,longitude:-72},101:{country:"Venezuela",latitude:8,longitude:-66},110:{country:"Guyana",latitude:5,longitude:-59},115:{country:"Suriname",latitude:4,longitude:-56},130:{country:"Ecuador",latitude:-2,longitude:-77.5},135:{country:"Peru",latitude:-9,longitude:-75},140:{country:"Brazil",latitude:-10,longitude:-55},145:{country:"Bolivia",latitude:-17,longitude:-65},150:{country:"Paraguay",latitude:-23,longitude:-58},155:{country:"Chile",latitude:-30,longitude:-71},160:{country:"Argentina",latitude:-34,longitude:-64},165:{country:"Uruguay",latitude:-33,longitude:-56},200:{country:"United Kingdom",latitude:54,longitude:-2},205:{country:"Ireland",latitude:53.41,longitude:-8.24},210:{country:"Netherlands",latitude:52.13,longitude:5.29},211:{country:"Belgium",latitude:50.5,longitude:4.47},212:{country:"Luxembourg",latitude:49.82,longitude:6.13},220:{country:"France",latitude:46.23,longitude:2.21},221:{country:"Monaco",latitude:43.74,longitude:7.41},223:{country:"Liechtenstein",latitude:47.14,longitude:9.55},225:{country:"Switzerland",latitude:46.82,longitude:8.23},230:{country:"Spain",latitude:40,longitude:-4},232:{country:"Andorra",latitude:42.55,longitude:1.57},235:{country:"Portugal",latitude:39.6,longitude:-8},240:{country:"Hanover",latitude:52.37,longitude:9.73},245:{country:"Bavaria",latitude:48.92,longitude:11.41},255:{country:"Germany",latitude:51.17,longitude:10.45},260:{country:"German Federal Republic",latitude:51.17,longitude:10.45},265:{country:"German Democratic Republic",latitude:52.17,longitude:12.63},267:{country:"Baden",latitude:48.52,longitude:8.05},269:{country:"Saxony",latitude:51.1,longitude:13.2},271:{country:"Wuerttemberg",latitude:48.66,longitude:9.35},273:{country:"Hesse Electoral",latitude:51.31,longitude:9.49},275:{country:"Hesse Grand Ducal",latitude:49.87,longitude:8.65},280:{country:"Mecklenburg Schwerin",latitude:53.61,longitude:11.41},290:{country:"Poland",latitude:52.22,longitude:19.14},300:{country:"Austria-Hungary",latitude:47.5,longitude:15},305:{country:"Austria",latitude:47.52,longitude:14.55},310:{country:"Hungary",latitude:47.16,longitude:19.5},315:{country:"Czechoslovakia",latitude:49.75,longitude:15.5},316:{country:"Czech Republic",latitude:49.82,longitude:15.47},317:{country:"Slovakia",latitude:48.67,longitude:19.7},325:{country:"Italy",latitude:42.83,longitude:12.83},327:{country:"Papal States",latitude:41.9,longitude:12.45},329:{country:"Two Sicilies",latitude:40.85,longitude:14.27},331:{country:"San Marino",latitude:43.76,longitude:12.7},332:{country:"Modena",latitude:44.65,longitude:10.92},335:{country:"Parma",latitude:44.8,longitude:10.33},337:{country:"Tuscany",latitude:43.77,longitude:11.25},338:{country:"Malta",latitude:35.94,longitude:14.38},339:{country:"Albania",latitude:41.15,longitude:20.17},341:{country:"Montenegro",latitude:42.71,longitude:19.37},343:{country:"Macedonia",latitude:41.61,longitude:21.75},344:{country:"Croatia",latitude:45.17,longitude:15.5},345:{country:"Yugoslavia",latitude:44.02,longitude:21.09},346:{country:"Bosnia and Herzegovina",latitude:44.17,longitude:17.77},347:{country:"Kosovo",latitude:42.58,longitude:20.9},349:{country:"Slovenia",latitude:46.15,longitude:14.99},350:{country:"Greece",latitude:39.07,longitude:21.82},352:{country:"Cyprus",latitude:35.13,longitude:33.43},355:{country:"Bulgaria",latitude:42.73,longitude:25.49},359:{country:"Moldova",latitude:47.41,longitude:28.37},360:{country:"Romania",latitude:45.94,longitude:24.97},365:{country:"Russia",latitude:60,longitude:100},366:{country:"Estonia",latitude:58.6,longitude:25.01},367:{country:"Latvia",latitude:56.88,longitude:24.6},368:{country:"Lithuania",latitude:55.17,longitude:23.88},369:{country:"Ukraine",latitude:48.38,longitude:31.17},370:{country:"Belarus",latitude:53.71,longitude:27.97},371:{country:"Armenia",latitude:40.07,longitude:45.04},372:{country:"Georgia",latitude:42.32,longitude:43.36},373:{country:"Azerbaijan",latitude:40.14,longitude:47.58},375:{country:"Finland",latitude:64,longitude:26},380:{country:"Sweden",latitude:62,longitude:15},385:{country:"Norway",latitude:64.57,longitude:17.89},390:{country:"Denmark",latitude:56.26,longitude:9.5},395:{country:"Iceland",latitude:65,longitude:-18},402:{country:"Cape Verde",latitude:16,longitude:-24},403:{country:"Sao Tome and Principe",latitude:.19,longitude:6.61},404:{country:"Guinea-Bissau",latitude:11.8,longitude:-15.18},411:{country:"Equatorial Guinea",latitude:1.65,longitude:10.27},420:{country:"Gambia",latitude:13.44,longitude:-15.31},432:{country:"Mali",latitude:17.57,longitude:-3.99},433:{country:"Senegal",latitude:14.5,longitude:-14.45},434:{country:"Benin",latitude:9.54,longitude:2.34},435:{country:"Mauritania",latitude:20.25,longitude:-10.34},436:{country:"Niger",latitude:17.61,longitude:8.08},437:{country:"Ivory Coast",latitude:7.54,longitude:-5.55},438:{country:"Guinea",latitude:11,longitude:-10.94},439:{country:"Burkina Faso",latitude:12.36,longitude:-1.53},450:{country:"Liberia",latitude:6.43,longitude:-9.43},451:{country:"Sierra Leone",latitude:8.46,longitude:-11.78},452:{country:"Ghana",latitude:7.95,longitude:-1.02},461:{country:"Togo",latitude:8,longitude:1.17},471:{country:"Cameroon",latitude:3.86,longitude:11.52},475:{country:"Nigeria",latitude:10,longitude:8.68},481:{country:"Gabon",latitude:-.8,longitude:11.61},482:{country:"Central African Republic",latitude:6.61,longitude:20.94},483:{country:"Chad",latitude:15.45,longitude:18.73},484:{country:"Congo",latitude:-.23,longitude:15.83},490:{country:"Democratic Republic of the Congo",latitude:-4.04,longitude:21.76},500:{country:"Uganda",latitude:1.37,longitude:32.29},501:{country:"Kenya",latitude:1,longitude:38},510:{country:"Tanzania",latitude:-6.37,longitude:34.89},511:{country:"Zanzibar",latitude:-6.16,longitude:39.19},516:{country:"Burundi",latitude:-3.38,longitude:29.92},517:{country:"Rwanda",latitude:-1.94,longitude:29.87},520:{country:"Somalia",latitude:5.15,longitude:46.2},522:{country:"Djibouti",latitude:11.83,longitude:42.59},530:{country:"Ethiopia",latitude:9.15,longitude:40.49},531:{country:"Eritrea",latitude:15.18,longitude:39.78},540:{country:"Angola",latitude:-11.2,longitude:17.87},541:{country:"Mozambique",latitude:-17.28,longitude:35.55},551:{country:"Zambia",latitude:-13.13,longitude:27.85},552:{country:"Zimbabwe",latitude:-19.02,longitude:29.15},553:{country:"Malawi",latitude:-13.25,longitude:34.3},560:{country:"South Africa",latitude:-28.47,longitude:24.68},565:{country:"Namibia",latitude:-22.96,longitude:18.49},570:{country:"Lesotho",latitude:-29.61,longitude:28.23},571:{country:"Botswana",latitude:-22.33,longitude:24.68},572:{country:"Swaziland",latitude:-26.52,longitude:31.47},580:{country:"Madagascar",latitude:-19.37,longitude:46.71},581:{country:"Comoros",latitude:-11.71,longitude:43.34},590:{country:"Mauritius",latitude:-20.35,longitude:57.59},591:{country:"Seychelles",latitude:-4.68,longitude:55.49},600:{country:"Morocco",latitude:31.79,longitude:-7.09},615:{country:"Algeria",latitude:28.03,longitude:1.66},616:{country:"Tunisia",latitude:34,longitude:9},620:{country:"Libya",latitude:26.34,longitude:17.23},625:{country:"Sudan",latitude:15.55,longitude:30.23},626:{country:"South Sudan",latitude:7,longitude:30},630:{country:"Iran",latitude:32.42,longitude:53.69},640:{country:"Turkey",latitude:38.96,longitude:35.24},645:{country:"Iraq",latitude:33.22,longitude:43.68},651:{country:"Egypt",latitude:26.82,longitude:30.8},652:{country:"Syria",latitude:34.8,longitude:39.06},660:{country:"Lebanon",latitude:33.87,longitude:35.86},663:{country:"Jordan",latitude:31.24,longitude:36.51},666:{country:"Israel",latitude:31.05,longitude:35},670:{country:"Saudi Arabia",latitude:24,longitude:45},678:{country:"Yemen Arab Republic",latitude:15.55,longitude:48.52},679:{country:"Yemen",latitude:15.55,longitude:48.52},680:{country:"Yemen People's Republic",latitude:13.5,longitude:44},690:{country:"Kuwait",latitude:29.31,longitude:47.48},692:{country:"Bahrain",latitude:26.03,longitude:50.55},694:{country:"Qatar",latitude:25.35,longitude:51.18},696:{country:"United Arab Emirates",latitude:24.47,longitude:54.37},698:{country:"Oman",latitude:21.51,longitude:57},700:{country:"Afghanistan",latitude:33.94,longitude:67.71},701:{country:"Turkmenistan",latitude:39.6,longitude:59.56},702:{country:"Tajikistan",latitude:38.86,longitude:71.28},703:{country:"Kyrgyzstan",latitude:41.2,longitude:74.77},704:{country:"Uzbekistan",latitude:41.38,longitude:64.59},705:{country:"Kazakhstan",latitude:48.02,longitude:66.92},710:{country:"China",latitude:35.86,longitude:104.2},712:{country:"Mongolia",latitude:46.86,longitude:103.85},713:{country:"Taiwan",latitude:23.7,longitude:121},730:{country:"Korea",latitude:36,longitude:127.5},731:{country:"North Korea",latitude:40.34,longitude:127.51},732:{country:"South Korea",latitude:36,longitude:127.5},740:{country:"Japan",latitude:36.2,longitude:138.25},750:{country:"India",latitude:22,longitude:78},760:{country:"Bhutan",latitude:27.51,longitude:90.43},770:{country:"Pakistan",latitude:30.38,longitude:69.35},771:{country:"Bangladesh",latitude:23.68,longitude:90.36},775:{country:"Myanmar",latitude:17.11,longitude:95.96},780:{country:"Sri Lanka",latitude:7.87,longitude:80.77},781:{country:"Maldives",latitude:3.2,longitude:73.22},790:{country:"Nepal",latitude:28.39,longitude:84.12},800:{country:"Thailand",latitude:15.87,longitude:100.99},811:{country:"Cambodia",latitude:12.57,longitude:104.99},812:{country:"Laos",latitude:17.97,longitude:102.64},816:{country:"Vietnam",latitude:16.16,longitude:107.84},817:{country:"Republic of Vietnam",latitude:12.7,longitude:108},820:{country:"Malaysia",latitude:2.53,longitude:112.5},830:{country:"Singapore",latitude:1.35,longitude:103.82},835:{country:"Brunei",latitude:4.94,longitude:114.95},840:{country:"Philippines",latitude:13,longitude:122},850:{country:"Indonesia",latitude:-2.55,longitude:118.02},860:{country:"East Timor",latitude:-8.87,longitude:125.73},900:{country:"Australia",latitude:-25.27,longitude:133.78},910:{country:"Papua New Guinea",latitude:-6.31,longitude:143.96},920:{country:"New Zealand",latitude:-40.9,longitude:174.89},935:{country:"Vanuatu",latitude:-15.38,longitude:166.96},940:{country:"Solomon Islands",latitude:-9.65,longitude:160.16},946:{country:"Kiribati",latitude:-3.37,longitude:-168.73},947:{country:"Tuvalu",latitude:-7.11,longitude:177.65},950:{country:"Fiji",latitude:-17.71,longitude:178.07},955:{country:"Tonga",latitude:-21.18,longitude:-175.2},970:{country:"Nauru",latitude:-.53,longitude:166.93},983:{country:"Marshall Islands",latitude:7.13,longitude:171.18},986:{country:"Palau",latitude:7.52,longitude:134.58},987:{country:"Federated States of Micronesia",latitude:6.89,longitude:158.22},990:{country:"Samoa",latitude:-13.76,longitude:-172.1}};function Xp(n){return Jp[n]}const ya=JSON.parse(Zp);function qp(n){const e=new Set(n.map(t=>t.id));return{...ya,features:(ya.features??[]).filter(t=>e.has(t.properties.id))}}function nf(){return(ya.features??[]).map(n=>n.properties)}const ef="https://raw.githubusercontent.com/thynec/CoupCats/refs/heads/main/recent_data.json";let Hr=null;function tf(n){return{type:"FeatureCollection",features:n.map(t=>{const r=Xp(t.ccode);return r?{type:"Feature",id:"${p.ccode}-${p.year}-${p.month}",geometry:{type:"Point",coordinates:[r.longitude,r.latitude]},properties:{...t,latitude:r.latitude,longitude:r.longitude}}:null}).filter(t=>t!==null)}}async function rf(){if(Hr)return Hr;const n=await fetch(ef);if(!n.ok)throw new Error("Failed to fetch predictions: ${response.status}");const e=await n.json();return Hr=tf(e),Hr}function of({mapRef:n,sourceId:e}){const[t,r]=C.useState(null),o=C.useCallback(a=>{var d,m;const u=(d=n.current)==null?void 0:d.getMap();if(!u||!((m=a.features)!=null&&m.length))return;const l=a.features[0];l.id!=null&&(t!=null&&t!==l.id&&u.setFeatureState({source:e,id:t},{hover:!1}),r(l.id),u.getCanvas().style.cursor="pointer",u.setFeatureState({source:e,id:l.id},{hover:!0}))},[t,n,e]),i=C.useCallback(()=>{var u;const a=(u=n.current)==null?void 0:u.getMap();a&&(t!=null&&(a.setFeatureState({source:e,id:t},{hover:!1}),r(null)),a.getCanvas().style.cursor="")},[t,n,e]);return{onMouseEnter:o,onMouseLeave:i}}function af(n){C.useEffect(()=>{const e=t=>{t.key==="Escape"&&n(null)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n])}function uf({mapRef:n,layerIds:e,setSelectedEvent:t}){C.useEffect(()=>{var i;const r=(i=n.current)==null?void 0:i.getMap();if(!r)return;const o=a=>{r.queryRenderedFeatures([a.point.x,a.point.y],{layers:e}).length===0&&t(null)};return r.on("click",o),()=>{r.off("click",o)}},[e,n,t])}const lf="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",sf={"circle-radius":["case",["boolean",["feature-state","hover"],!1],14,10],"circle-color":["match",["get","outcome"],"successful",jn.successful,"failed",jn.failed,"attempted",jn.attempted,"plot",jn.plot,"alleged",jn.alleged,jn.alleged],"circle-stroke-width":2,"circle-stroke-color":"#020617","circle-opacity":1};function cf(){const n=C.useRef(null),[e,t]=C.useState(!1),[r,o]=C.useState(null),i=C.useMemo(()=>nf(),[]),a=R(T=>T.yearRange),u=R(T=>T.viewMode),l=C.useMemo(()=>i.filter(T=>T.year>=a[0]&&T.year<=a[1]),[i,a]);C.useEffect(()=>{fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson").then(T=>T.json()).then(T=>o(T)).catch(T=>console.error("Failed to load countries GeoJSON:",T))},[]);const[d,m]=C.useState([]),[f,g]=C.useState(null);C.useEffect(()=>{rf().then(T=>{m((T.features??[]).map(nn=>nn.properties))}).catch(T=>console.error("Prediction load error:",T))},[]);const P=C.useMemo(()=>u!=="risk"||d.length===0?null:fp(d),[u,d]),h=R(T=>T.selectedEvent),x=R(T=>T.setSelectedEvent),E=R(T=>T.setSelectedCountry),y=R(T=>T.searchQuery),s=R(T=>T.selectedOutcomes),p=R(T=>T.selectedRegions),v=R(T=>T.dateRange),w=R(T=>T.selectedTags),A=C.useMemo(()=>Gp({searchQuery:y,selectedOutcomes:s,selectedRegions:p,dateRange:v,selectedTags:w},i),[y,s,p,v,w,i]),V={id:"coup-circles",type:"circle",source:"coups",paint:sf,filter:A},{onMouseEnter:N,onMouseLeave:H}=of({mapRef:n,sourceId:"coups"}),_=C.useRef(null),En=C.useCallback(T=>{var F,M;const nn=(F=n.current)==null?void 0:F.getMap();if(!nn)return;const hn=(M=T.features)==null?void 0:M.find(L=>{var z;return((z=L.layer)==null?void 0:z.id)==="countries-fill"}),Cn=(hn==null?void 0:hn.id)??null;Cn!==_.current&&(_.current!=null&&nn.setFeatureState({source:"countries",id:_.current},{hover:!1}),Cn!=null&&(nn.setFeatureState({source:"countries",id:Cn},{hover:!0}),nn.getCanvas().style.cursor="pointer"),_.current=Cn)},[n]),_e=C.useCallback(()=>{var nn;const T=(nn=n.current)==null?void 0:nn.getMap();T&&_.current!=null&&(T.setFeatureState({source:"countries",id:_.current},{hover:!1}),_.current=null),H()},[n,H]),Re=C.useCallback(T=>{var Cn,F,M,L,z,Z,je;const nn=(Cn=T.features)==null?void 0:Cn.find(J=>{var An;return((An=J.layer)==null?void 0:An.id)==="coup-circles"});if(nn){const J=nn.properties;x(J),E(J.country);return}const hn=(F=T.features)==null?void 0:F.find(J=>{var An;return((An=J.layer)==null?void 0:An.id)==="countries-fill"});if(hn){const J=((M=hn.properties)==null?void 0:M.ADMIN)||((L=hn.properties)==null?void 0:L.name);if(J){E(J),x(null);return}}if(r&&r.features){let J=null,An=1/0;for(const bn of r.features){const De=((z=bn.properties)==null?void 0:z.ADMIN)||((Z=bn.properties)==null?void 0:Z.name);if(!De)continue;const Oe=bn.geometry;if(!Oe)continue;let Be=[];if(Oe.type==="Polygon"&&Oe.coordinates[0]?Be=Oe.coordinates[0]:Oe.type==="MultiPolygon"&&(je=Oe.coordinates[0])!=null&&je[0]&&(Be=Oe.coordinates[0][0]),Be.length>0){const ed=Be.reduce((Uo,Yo)=>Uo+Yo[0],0)/Be.length,td=Be.reduce((Uo,Yo)=>Uo+Yo[1],0)/Be.length,lu=ed-T.lngLat.lng,su=td-T.lngLat.lat,cu=Math.sqrt(lu*lu+su*su);cu<An&&(An=cu,J=De)}}if(J&&An<15){E(J),x(null);return}}x(null),E(null)},[x,E,r]);return uf({mapRef:n,layerIds:["coup-circles"],setSelectedEvent:x}),af(x),C.useEffect(()=>{u==="risk"?x(null):g(null)},[u,x,g]),c.jsx(Kp,{mapRef:n,allEvents:i,children:c.jsxs("div",{className:"relative h-full w-full",children:[!e&&c.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]",children:c.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500"})}),c.jsxs(Y1,{ref:n,initialViewState:{longitude:20,latitude:15,zoom:2},mapStyle:lf,interactiveLayerIds:u==="events"?["coup-circles","countries-fill"]:["countries-fill"],onMouseEnter:N,onMouseMove:En,onMouseLeave:_e,onClick:T=>{var hn,Cn;const nn=(hn=T.features)==null?void 0:hn[0];if(!nn){x(null),g(null);return}if(nn.layer.id==="coup-circles")Re(T);else if(nn.layer.id==="countries-fill"&&u==="risk"){const F=(Cn=nn.properties)==null?void 0:Cn.name;if(F){const M=d.find(L=>L.country===F||Zc(L.country)===F);M&&g(M)}}},onLoad:()=>t(!0),children:[r&&c.jsxs(Ml,{id:"countries",type:"geojson",data:r,promoteId:"name",children:[c.jsx(Ir,{id:"countries-fill",type:"fill",paint:{"fill-color":u==="risk"&&P?P:"rgba(0,0,0,0)","fill-opacity":u==="risk"?.85:0}}),c.jsx(Ir,{id:"countries-outline",type:"line",paint:{"line-color":"#334155","line-width":.5}}),c.jsx(Ir,{id:"countries-hover-outline",type:"line",paint:{"line-color":"#e2e8f0","line-width":["case",["boolean",["feature-state","hover"],!1],2,0]}})]}),u==="events"&&c.jsx(Ml,{id:"coups",type:"geojson",data:qp(l),promoteId:"id",children:c.jsx(Ir,{...V})}),u==="events"&&h&&c.jsx(Q1,{longitude:h.longitude,latitude:h.latitude,onClose:()=>x(null),closeButton:!0,closeOnClick:!1,children:c.jsx(sp,{event:h})})]}),c.jsx(lp,{prediction:f,onClose:()=>g(null)}),u==="events"?c.jsx(yp,{}):c.jsx(gp,{})]})})}function df({error:n,resetErrorBoundary:e}){return c.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0f1117] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-center",children:[c.jsx(vp,{className:"h-12 w-12 text-amber-500"}),c.jsx("h1",{className:"text-lg font-semibold text-white",children:"Something went wrong"}),c.jsx("p",{className:"max-w-md text-sm text-gray-400",children:n.message}),e&&c.jsx("button",{type:"button",onClick:e,className:"rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/30",children:"Try again"})]})}class yf extends C.Component{constructor(){super(...arguments);du(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("ErrorBoundary caught:",t,r)}render(){return this.state.error?c.jsx(df,{error:this.state.error,resetErrorBoundary:()=>this.setState({error:null})}):this.props.children}}Wc(document.getElementById("root")).render(c.jsx(C.StrictMode,{children:c.jsx(yf,{children:c.jsx(cf,{})})}));export{ff as c,id as g};
