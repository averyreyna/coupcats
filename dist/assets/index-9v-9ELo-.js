var Gc=Object.defineProperty;var Hc=(r,n,e)=>n in r?Gc(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e;var Xa=(r,n,e)=>Hc(r,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var Gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xl={exports:{}},Po={},Fl={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=Symbol.for("react.element"),bc=Symbol.for("react.portal"),Qc=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Xc=Symbol.for("react.memo"),qc=Symbol.for("react.lazy"),qa=Symbol.iterator;function rd(r){return r===null||typeof r!="object"?null:(r=qa&&r[qa]||r["@@iterator"],typeof r=="function"?r:null)}var wl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},El=Object.assign,Al={};function Se(r,n,e){this.props=r,this.context=n,this.refs=Al,this.updater=e||wl}Se.prototype.isReactComponent={};Se.prototype.setState=function(r,n){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,n,"setState")};Se.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Vl(){}Vl.prototype=Se.prototype;function ta(r,n,e){this.props=r,this.context=n,this.refs=Al,this.updater=e||wl}var oa=ta.prototype=new Vl;oa.constructor=ta;El(oa,Se.prototype);oa.isPureReactComponent=!0;var ru=Array.isArray,kl=Object.prototype.hasOwnProperty,ia={current:null},Nl={key:!0,ref:!0,__self:!0,__source:!0};function Ml(r,n,e){var t,o={},i=null,a=null;if(n!=null)for(t in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)kl.call(n,t)&&!Nl.hasOwnProperty(t)&&(o[t]=n[t]);var u=arguments.length-2;if(u===1)o.children=e;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(r&&r.defaultProps)for(t in u=r.defaultProps,u)o[t]===void 0&&(o[t]=u[t]);return{$$typeof:ct,type:r,key:i,ref:a,props:o,_owner:ia.current}}function nd(r,n){return{$$typeof:ct,type:r.type,key:n,ref:r.ref,props:r.props,_owner:r._owner}}function aa(r){return typeof r=="object"&&r!==null&&r.$$typeof===ct}function ed(r){var n={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(e){return n[e]})}var nu=/\/+/g;function Oo(r,n){return typeof r=="object"&&r!==null&&r.key!=null?ed(""+r.key):n.toString(36)}function jt(r,n,e,t,o){var i=typeof r;(i==="undefined"||i==="boolean")&&(r=null);var a=!1;if(r===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(r.$$typeof){case ct:case bc:a=!0}}if(a)return a=r,o=o(a),r=t===""?"."+Oo(a,0):t,ru(o)?(e="",r!=null&&(e=r.replace(nu,"$&/")+"/"),jt(o,n,e,"",function(c){return c})):o!=null&&(aa(o)&&(o=nd(o,e+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(nu,"$&/")+"/")+r)),n.push(o)),1;if(a=0,t=t===""?".":t+":",ru(r))for(var u=0;u<r.length;u++){i=r[u];var l=t+Oo(i,u);a+=jt(i,n,e,l,o)}else if(l=rd(r),typeof l=="function")for(r=l.call(r),u=0;!(i=r.next()).done;)i=i.value,l=t+Oo(i,u++),a+=jt(i,n,e,l,o);else if(i==="object")throw n=String(r),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function gt(r,n,e){if(r==null)return r;var t=[],o=0;return jt(r,t,"","",function(i){return n.call(e,i,o++)}),t}function td(r){if(r._status===-1){var n=r._result;n=n(),n.then(function(e){(r._status===0||r._status===-1)&&(r._status=1,r._result=e)},function(e){(r._status===0||r._status===-1)&&(r._status=2,r._result=e)}),r._status===-1&&(r._status=0,r._result=n)}if(r._status===1)return r._result.default;throw r._result}var cr={current:null},Ot={transition:null},od={ReactCurrentDispatcher:cr,ReactCurrentBatchConfig:Ot,ReactCurrentOwner:ia};function Tl(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:gt,forEach:function(r,n,e){gt(r,function(){n.apply(this,arguments)},e)},count:function(r){var n=0;return gt(r,function(){n++}),n},toArray:function(r){return gt(r,function(n){return n})||[]},only:function(r){if(!aa(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};_.Component=Se;_.Fragment=Qc;_.Profiler=Yc;_.PureComponent=ta;_.StrictMode=Wc;_.Suspense=Jc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;_.act=Tl;_.cloneElement=function(r,n,e){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var t=El({},r.props),o=r.key,i=r.ref,a=r._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=ia.current),n.key!==void 0&&(o=""+n.key),r.type&&r.type.defaultProps)var u=r.type.defaultProps;for(l in n)kl.call(n,l)&&!Nl.hasOwnProperty(l)&&(t[l]=n[l]===void 0&&u!==void 0?u[l]:n[l])}var l=arguments.length-2;if(l===1)t.children=e;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];t.children=u}return{$$typeof:ct,type:r.type,key:o,ref:i,props:t,_owner:a}};_.createContext=function(r){return r={$$typeof:Kc,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:$c,_context:r},r.Consumer=r};_.createElement=Ml;_.createFactory=function(r){var n=Ml.bind(null,r);return n.type=r,n};_.createRef=function(){return{current:null}};_.forwardRef=function(r){return{$$typeof:Zc,render:r}};_.isValidElement=aa;_.lazy=function(r){return{$$typeof:qc,_payload:{_status:-1,_result:r},_init:td}};_.memo=function(r,n){return{$$typeof:Xc,type:r,compare:n===void 0?null:n}};_.startTransition=function(r){var n=Ot.transition;Ot.transition={};try{r()}finally{Ot.transition=n}};_.unstable_act=Tl;_.useCallback=function(r,n){return cr.current.useCallback(r,n)};_.useContext=function(r){return cr.current.useContext(r)};_.useDebugValue=function(){};_.useDeferredValue=function(r){return cr.current.useDeferredValue(r)};_.useEffect=function(r,n){return cr.current.useEffect(r,n)};_.useId=function(){return cr.current.useId()};_.useImperativeHandle=function(r,n,e){return cr.current.useImperativeHandle(r,n,e)};_.useInsertionEffect=function(r,n){return cr.current.useInsertionEffect(r,n)};_.useLayoutEffect=function(r,n){return cr.current.useLayoutEffect(r,n)};_.useMemo=function(r,n){return cr.current.useMemo(r,n)};_.useReducer=function(r,n,e){return cr.current.useReducer(r,n,e)};_.useRef=function(r){return cr.current.useRef(r)};_.useState=function(r){return cr.current.useState(r)};_.useSyncExternalStore=function(r,n,e){return cr.current.useSyncExternalStore(r,n,e)};_.useTransition=function(){return cr.current.useTransition()};_.version="18.3.1";Fl.exports=_;var S=Fl.exports;const ht=Uc(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=S,ad=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),ld=Object.prototype.hasOwnProperty,sd=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cd={key:!0,ref:!0,__self:!0,__source:!0};function Ll(r,n,e){var t,o={},i=null,a=null;e!==void 0&&(i=""+e),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(t in n)ld.call(n,t)&&!cd.hasOwnProperty(t)&&(o[t]=n[t]);if(r&&r.defaultProps)for(t in n=r.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:ad,type:r,key:i,ref:a,props:o,_owner:sd.current}}Po.Fragment=ud;Po.jsx=Ll;Po.jsxs=Ll;xl.exports=Po;var d=xl.exports,Rl={exports:{}},wr={},_l={exports:{}},jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function n(V,T){var M=V.length;V.push(T);r:for(;0<M;){var O=M-1>>>1,$=V[O];if(0<o($,T))V[O]=T,V[M]=$,M=O;else break r}}function e(V){return V.length===0?null:V[0]}function t(V){if(V.length===0)return null;var T=V[0],M=V.pop();if(M!==T){V[0]=M;r:for(var O=0,$=V.length,Qn=$>>>1;O<Qn;){var Gr=2*(O+1)-1,Wn=V[Gr],Hr=Gr+1,ln=V[Hr];if(0>o(Wn,M))Hr<$&&0>o(ln,Wn)?(V[O]=ln,V[Hr]=M,O=Hr):(V[O]=Wn,V[Gr]=M,O=Gr);else if(Hr<$&&0>o(ln,M))V[O]=ln,V[Hr]=M,O=Hr;else break r}}return T}function o(V,T){var M=V.sortIndex-T.sortIndex;return M!==0?M:V.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;r.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();r.unstable_now=function(){return a.now()-u}}var l=[],c=[],m=1,f=null,g=3,P=!1,h=!1,F=!1,A=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(V){for(var T=e(c);T!==null;){if(T.callback===null)t(c);else if(T.startTime<=V)t(c),T.sortIndex=T.expirationTime,n(l,T);else break;T=e(c)}}function C(V){if(F=!1,p(V),!h)if(e(l)!==null)h=!0,rr(w);else{var T=e(c);T!==null&&Pr(C,T.startTime-V)}}function w(V,T){h=!1,F&&(F=!1,y(N),N=-1),P=!0;var M=g;try{for(p(T),f=e(l);f!==null&&(!(f.expirationTime>T)||V&&!yr());){var O=f.callback;if(typeof O=="function"){f.callback=null,g=f.priorityLevel;var $=O(f.expirationTime<=T);T=r.unstable_now(),typeof $=="function"?f.callback=$:f===e(l)&&t(l),p(T)}else t(l);f=e(l)}if(f!==null)var Qn=!0;else{var Gr=e(c);Gr!==null&&Pr(C,Gr.startTime-T),Qn=!1}return Qn}finally{f=null,g=M,P=!1}}var v=!1,E=null,N=-1,G=5,R=-1;function yr(){return!(r.unstable_now()-R<G)}function an(){if(E!==null){var V=r.unstable_now();R=V;var T=!0;try{T=E(!0,V)}finally{T?un():(v=!1,E=null)}}else v=!1}var un;if(typeof s=="function")un=function(){s(an)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,mt=Ee.port2;Ee.port1.onmessage=an,un=function(){mt.postMessage(null)}}else un=function(){A(an,0)};function rr(V){E=V,v||(v=!0,un())}function Pr(V,T){N=A(function(){V(r.unstable_now())},T)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){h||P||(h=!0,rr(w))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return e(l)},r.unstable_next=function(V){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var M=g;g=T;try{return V()}finally{g=M}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,T){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var M=g;g=V;try{return T()}finally{g=M}},r.unstable_scheduleCallback=function(V,T,M){var O=r.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?O+M:O):M=O,V){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=M+$,V={id:m++,callback:T,priorityLevel:V,startTime:M,expirationTime:$,sortIndex:-1},M>O?(V.sortIndex=M,n(c,V),e(l)===null&&V===e(c)&&(F?(y(N),N=-1):F=!0,Pr(C,M-O))):(V.sortIndex=$,n(l,V),h||P||(h=!0,rr(w))),V},r.unstable_shouldYield=yr,r.unstable_wrapCallback=function(V){var T=g;return function(){var M=g;g=T;try{return V.apply(this,arguments)}finally{g=M}}}})(jl);_l.exports=jl;var dd=_l.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=S,Fr=dd;function x(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,e=1;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ol=new Set,Ye={};function Hn(r,n){pe(r,n),pe(r+"Capture",n)}function pe(r,n){for(Ye[r]=n,r=0;r<n.length;r++)Ol.add(n[r])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=Object.prototype.hasOwnProperty,pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function fd(r){return li.call(tu,r)?!0:li.call(eu,r)?!1:pd.test(r)?tu[r]=!0:(eu[r]=!0,!1)}function md(r,n,e,t){if(e!==null&&e.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function gd(r,n,e,t){if(n===null||typeof n>"u"||md(r,n,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function dr(r,n,e,t,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=r,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var tr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){tr[r]=new dr(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];tr[n]=new dr(n,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){tr[r]=new dr(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){tr[r]=new dr(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){tr[r]=new dr(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){tr[r]=new dr(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){tr[r]=new dr(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){tr[r]=new dr(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){tr[r]=new dr(r,5,!1,r.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function la(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(ua,la);tr[n]=new dr(n,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(ua,la);tr[n]=new dr(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(ua,la);tr[n]=new dr(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){tr[r]=new dr(r,1,!1,r.toLowerCase(),null,!1,!1)});tr.xlinkHref=new dr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){tr[r]=new dr(r,1,!1,r.toLowerCase(),null,!0,!0)});function sa(r,n,e,t){var o=tr.hasOwnProperty(n)?tr[n]:null;(o!==null?o.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gd(n,e,o,t)&&(e=null),t||o===null?fd(n)&&(e===null?r.removeAttribute(n):r.setAttribute(n,""+e)):o.mustUseProperty?r[o.propertyName]=e===null?o.type===3?!1:"":e:(n=o.attributeName,t=o.attributeNamespace,e===null?r.removeAttribute(n):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,t?r.setAttributeNS(t,n,e):r.setAttribute(n,e))))}var tn=yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ct=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Dl=Symbol.for("react.provider"),Bl=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),zl=Symbol.for("react.offscreen"),ou=Symbol.iterator;function Ae(r){return r===null||typeof r!="object"?null:(r=ou&&r[ou]||r["@@iterator"],typeof r=="function"?r:null)}var Q=Object.assign,Do;function _e(r){if(Do===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Do=n&&n[1]||""}return`
`+Do+r}var Bo=!1;function zo(r,n){if(!r||Bo)return"";Bo=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(r,[],n)}else{try{n.call()}catch(c){t=c}r.call(n.prototype)}else{try{throw Error()}catch(c){t=c}r()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=t.stack.split(`
`),a=o.length-1,u=i.length-1;1<=a&&0<=u&&o[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||o[a]!==i[u]){var l=`
`+o[a].replace(" at new "," at ");return r.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",r.displayName)),l}while(1<=a&&0<=u);break}}}finally{Bo=!1,Error.prepareStackTrace=e}return(r=r?r.displayName||r.name:"")?_e(r):""}function hd(r){switch(r.tag){case 5:return _e(r.type);case 16:return _e("Lazy");case 13:return _e("Suspense");case 19:return _e("SuspenseList");case 0:case 2:case 15:return r=zo(r.type,!1),r;case 11:return r=zo(r.type.render,!1),r;case 1:return r=zo(r.type,!0),r;default:return""}}function yi(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Zn:return"Fragment";case Kn:return"Portal";case si:return"Profiler";case ca:return"StrictMode";case ci:return"Suspense";case di:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Bl:return(r.displayName||"Context")+".Consumer";case Dl:return(r._context.displayName||"Context")+".Provider";case da:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ya:return n=r.displayName||null,n!==null?n:yi(r.type)||"Memo";case cn:n=r._payload,r=r._init;try{return yi(r(n))}catch{}}return null}function Cd(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yi(n);case 8:return n===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Il(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pd(r){var n=Il(r)?"checked":"value",e=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),t=""+r[n];if(!r.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,i=e.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){t=""+a,i.call(this,a)}}),Object.defineProperty(r,n,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function Pt(r){r._valueTracker||(r._valueTracker=Pd(r))}function Gl(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var e=n.getValue(),t="";return r&&(t=Il(r)?r.checked?"true":"false":r.value),r=t,r!==e?(n.setValue(r),!0):!1}function Yt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function pi(r,n){var e=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??r._wrapperState.initialChecked})}function iu(r,n){var e=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;e=En(n.value!=null?n.value:e),r._wrapperState={initialChecked:t,initialValue:e,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hl(r,n){n=n.checked,n!=null&&sa(r,"checked",n,!1)}function fi(r,n){Hl(r,n);var e=En(n.value),t=n.type;if(e!=null)t==="number"?(e===0&&r.value===""||r.value!=e)&&(r.value=""+e):r.value!==""+e&&(r.value=""+e);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?mi(r,n.type,e):n.hasOwnProperty("defaultValue")&&mi(r,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function au(r,n,e){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,e||n===r.value||(r.value=n),r.defaultValue=n}e=r.name,e!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,e!==""&&(r.name=e)}function mi(r,n,e){(n!=="number"||Yt(r.ownerDocument)!==r)&&(e==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+e&&(r.defaultValue=""+e))}var je=Array.isArray;function ue(r,n,e,t){if(r=r.options,n){n={};for(var o=0;o<e.length;o++)n["$"+e[o]]=!0;for(e=0;e<r.length;e++)o=n.hasOwnProperty("$"+r[e].value),r[e].selected!==o&&(r[e].selected=o),o&&t&&(r[e].defaultSelected=!0)}else{for(e=""+En(e),n=null,o=0;o<r.length;o++){if(r[o].value===e){r[o].selected=!0,t&&(r[o].defaultSelected=!0);return}n!==null||r[o].disabled||(n=r[o])}n!==null&&(n.selected=!0)}}function gi(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function uu(r,n){var e=n.value;if(e==null){if(e=n.children,n=n.defaultValue,e!=null){if(n!=null)throw Error(x(92));if(je(e)){if(1<e.length)throw Error(x(93));e=e[0]}n=e}n==null&&(n=""),e=n}r._wrapperState={initialValue:En(e)}}function Ul(r,n){var e=En(n.value),t=En(n.defaultValue);e!=null&&(e=""+e,e!==r.value&&(r.value=e),n.defaultValue==null&&r.defaultValue!==e&&(r.defaultValue=e)),t!=null&&(r.defaultValue=""+t)}function lu(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function bl(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?bl(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var vt,Ql=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,e,t,o){MSApp.execUnsafeLocalFunction(function(){return r(n,e,t,o)})}:r}(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(vt=vt||document.createElement("div"),vt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function $e(r,n){if(n){var e=r.firstChild;if(e&&e===r.lastChild&&e.nodeType===3){e.nodeValue=n;return}}r.textContent=n}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vd=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(r){vd.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),Be[n]=Be[r]})});function Wl(r,n,e){return n==null||typeof n=="boolean"||n===""?"":e||typeof n!="number"||n===0||Be.hasOwnProperty(r)&&Be[r]?(""+n).trim():n+"px"}function Yl(r,n){r=r.style;for(var e in n)if(n.hasOwnProperty(e)){var t=e.indexOf("--")===0,o=Wl(e,n[e],t);e==="float"&&(e="cssFloat"),t?r.setProperty(e,o):r[e]=o}}var Sd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(r,n){if(n){if(Sd[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function Pi(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function pa(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Si=null,le=null,se=null;function su(r){if(r=pt(r)){if(typeof Si!="function")throw Error(x(280));var n=r.stateNode;n&&(n=wo(n),Si(r.stateNode,r.type,n))}}function $l(r){le?se?se.push(r):se=[r]:le=r}function Kl(){if(le){var r=le,n=se;if(se=le=null,su(r),n)for(r=0;r<n.length;r++)su(n[r])}}function Zl(r,n){return r(n)}function Jl(){}var Io=!1;function Xl(r,n,e){if(Io)return r(n,e);Io=!0;try{return Zl(r,n,e)}finally{Io=!1,(le!==null||se!==null)&&(Jl(),Kl())}}function Ke(r,n){var e=r.stateNode;if(e===null)return null;var t=wo(e);if(t===null)return null;e=t[n];r:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break r;default:r=!1}if(r)return null;if(e&&typeof e!="function")throw Error(x(231,n,typeof e));return e}var xi=!1;if(qr)try{var Ve={};Object.defineProperty(Ve,"passive",{get:function(){xi=!0}}),window.addEventListener("test",Ve,Ve),window.removeEventListener("test",Ve,Ve)}catch{xi=!1}function xd(r,n,e,t,o,i,a,u,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(e,c)}catch(m){this.onError(m)}}var ze=!1,$t=null,Kt=!1,Fi=null,Fd={onError:function(r){ze=!0,$t=r}};function wd(r,n,e,t,o,i,a,u,l){ze=!1,$t=null,xd.apply(Fd,arguments)}function Ed(r,n,e,t,o,i,a,u,l){if(wd.apply(this,arguments),ze){if(ze){var c=$t;ze=!1,$t=null}else throw Error(x(198));Kt||(Kt=!0,Fi=c)}}function Un(r){var n=r,e=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,n.flags&4098&&(e=n.return),r=n.return;while(r)}return n.tag===3?e:null}function ql(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function cu(r){if(Un(r)!==r)throw Error(x(188))}function Ad(r){var n=r.alternate;if(!n){if(n=Un(r),n===null)throw Error(x(188));return n!==r?null:r}for(var e=r,t=n;;){var o=e.return;if(o===null)break;var i=o.alternate;if(i===null){if(t=o.return,t!==null){e=t;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===e)return cu(o),r;if(i===t)return cu(o),n;i=i.sibling}throw Error(x(188))}if(e.return!==t.return)e=o,t=i;else{for(var a=!1,u=o.child;u;){if(u===e){a=!0,e=o,t=i;break}if(u===t){a=!0,t=o,e=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===e){a=!0,e=i,t=o;break}if(u===t){a=!0,t=i,e=o;break}u=u.sibling}if(!a)throw Error(x(189))}}if(e.alternate!==t)throw Error(x(190))}if(e.tag!==3)throw Error(x(188));return e.stateNode.current===e?r:n}function rs(r){return r=Ad(r),r!==null?ns(r):null}function ns(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=ns(r);if(n!==null)return n;r=r.sibling}return null}var es=Fr.unstable_scheduleCallback,du=Fr.unstable_cancelCallback,Vd=Fr.unstable_shouldYield,kd=Fr.unstable_requestPaint,Y=Fr.unstable_now,Nd=Fr.unstable_getCurrentPriorityLevel,fa=Fr.unstable_ImmediatePriority,ts=Fr.unstable_UserBlockingPriority,Zt=Fr.unstable_NormalPriority,Md=Fr.unstable_LowPriority,os=Fr.unstable_IdlePriority,vo=null,Wr=null;function Td(r){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(vo,r,void 0,(r.current.flags&128)===128)}catch{}}var Dr=Math.clz32?Math.clz32:_d,Ld=Math.log,Rd=Math.LN2;function _d(r){return r>>>=0,r===0?32:31-(Ld(r)/Rd|0)|0}var St=64,xt=4194304;function Oe(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Jt(r,n){var e=r.pendingLanes;if(e===0)return 0;var t=0,o=r.suspendedLanes,i=r.pingedLanes,a=e&268435455;if(a!==0){var u=a&~o;u!==0?t=Oe(u):(i&=a,i!==0&&(t=Oe(i)))}else a=e&~o,a!==0?t=Oe(a):i!==0&&(t=Oe(i));if(t===0)return 0;if(n!==0&&n!==t&&!(n&o)&&(o=t&-t,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(t&4&&(t|=e&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=t;0<n;)e=31-Dr(n),o=1<<e,t|=r[e],n&=~o;return t}function jd(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(r,n){for(var e=r.suspendedLanes,t=r.pingedLanes,o=r.expirationTimes,i=r.pendingLanes;0<i;){var a=31-Dr(i),u=1<<a,l=o[a];l===-1?(!(u&e)||u&t)&&(o[a]=jd(u,n)):l<=n&&(r.expiredLanes|=u),i&=~u}}function wi(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function is(){var r=St;return St<<=1,!(St&4194240)&&(St=64),r}function Go(r){for(var n=[],e=0;31>e;e++)n.push(r);return n}function dt(r,n,e){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-Dr(n),r[n]=e}function Dd(r,n){var e=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<e;){var o=31-Dr(e),i=1<<o;n[o]=0,t[o]=-1,r[o]=-1,e&=~i}}function ma(r,n){var e=r.entangledLanes|=n;for(r=r.entanglements;e;){var t=31-Dr(e),o=1<<t;o&n|r[t]&n&&(r[t]|=n),e&=~o}}var D=0;function as(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var us,ga,ls,ss,cs,Ei=!1,Ft=[],hn=null,Cn=null,Pn=null,Ze=new Map,Je=new Map,yn=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(r,n){switch(r){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ze.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Je.delete(n.pointerId)}}function ke(r,n,e,t,o,i){return r===null||r.nativeEvent!==i?(r={blockedOn:n,domEventName:e,eventSystemFlags:t,nativeEvent:i,targetContainers:[o]},n!==null&&(n=pt(n),n!==null&&ga(n)),r):(r.eventSystemFlags|=t,n=r.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),r)}function zd(r,n,e,t,o){switch(n){case"focusin":return hn=ke(hn,r,n,e,t,o),!0;case"dragenter":return Cn=ke(Cn,r,n,e,t,o),!0;case"mouseover":return Pn=ke(Pn,r,n,e,t,o),!0;case"pointerover":var i=o.pointerId;return Ze.set(i,ke(Ze.get(i)||null,r,n,e,t,o)),!0;case"gotpointercapture":return i=o.pointerId,Je.set(i,ke(Je.get(i)||null,r,n,e,t,o)),!0}return!1}function ds(r){var n=Ln(r.target);if(n!==null){var e=Un(n);if(e!==null){if(n=e.tag,n===13){if(n=ql(e),n!==null){r.blockedOn=n,cs(r.priority,function(){ls(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){r.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Dt(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var e=Ai(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(e===null){e=r.nativeEvent;var t=new e.constructor(e.type,e);vi=t,e.target.dispatchEvent(t),vi=null}else return n=pt(e),n!==null&&ga(n),r.blockedOn=e,!1;n.shift()}return!0}function pu(r,n,e){Dt(r)&&e.delete(n)}function Id(){Ei=!1,hn!==null&&Dt(hn)&&(hn=null),Cn!==null&&Dt(Cn)&&(Cn=null),Pn!==null&&Dt(Pn)&&(Pn=null),Ze.forEach(pu),Je.forEach(pu)}function Ne(r,n){r.blockedOn===n&&(r.blockedOn=null,Ei||(Ei=!0,Fr.unstable_scheduleCallback(Fr.unstable_NormalPriority,Id)))}function Xe(r){function n(o){return Ne(o,r)}if(0<Ft.length){Ne(Ft[0],r);for(var e=1;e<Ft.length;e++){var t=Ft[e];t.blockedOn===r&&(t.blockedOn=null)}}for(hn!==null&&Ne(hn,r),Cn!==null&&Ne(Cn,r),Pn!==null&&Ne(Pn,r),Ze.forEach(n),Je.forEach(n),e=0;e<yn.length;e++)t=yn[e],t.blockedOn===r&&(t.blockedOn=null);for(;0<yn.length&&(e=yn[0],e.blockedOn===null);)ds(e),e.blockedOn===null&&yn.shift()}var ce=tn.ReactCurrentBatchConfig,Xt=!0;function Gd(r,n,e,t){var o=D,i=ce.transition;ce.transition=null;try{D=1,ha(r,n,e,t)}finally{D=o,ce.transition=i}}function Hd(r,n,e,t){var o=D,i=ce.transition;ce.transition=null;try{D=4,ha(r,n,e,t)}finally{D=o,ce.transition=i}}function ha(r,n,e,t){if(Xt){var o=Ai(r,n,e,t);if(o===null)Jo(r,n,t,qt,e),yu(r,t);else if(zd(o,r,n,e,t))t.stopPropagation();else if(yu(r,t),n&4&&-1<Bd.indexOf(r)){for(;o!==null;){var i=pt(o);if(i!==null&&us(i),i=Ai(r,n,e,t),i===null&&Jo(r,n,t,qt,e),i===o)break;o=i}o!==null&&t.stopPropagation()}else Jo(r,n,t,null,e)}}var qt=null;function Ai(r,n,e,t){if(qt=null,r=pa(t),r=Ln(r),r!==null)if(n=Un(r),n===null)r=null;else if(e=n.tag,e===13){if(r=ql(n),r!==null)return r;r=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return qt=r,null}function ys(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case fa:return 1;case ts:return 4;case Zt:case Md:return 16;case os:return 536870912;default:return 16}default:return 16}}var fn=null,Ca=null,Bt=null;function ps(){if(Bt)return Bt;var r,n=Ca,e=n.length,t,o="value"in fn?fn.value:fn.textContent,i=o.length;for(r=0;r<e&&n[r]===o[r];r++);var a=e-r;for(t=1;t<=a&&n[e-t]===o[i-t];t++);return Bt=o.slice(r,1<t?1-t:void 0)}function zt(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function wt(){return!0}function fu(){return!1}function Er(r){function n(e,t,o,i,a){this._reactName=e,this._targetInst=o,this.type=t,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(e=r[u],this[u]=e?e(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wt:fu,this.isPropagationStopped=fu,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),n}var xe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Er(xe),yt=Q({},xe,{view:0,detail:0}),Ud=Er(yt),Ho,Uo,Me,So=Q({},yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Me&&(Me&&r.type==="mousemove"?(Ho=r.screenX-Me.screenX,Uo=r.screenY-Me.screenY):Uo=Ho=0,Me=r),Ho)},movementY:function(r){return"movementY"in r?r.movementY:Uo}}),mu=Er(So),bd=Q({},So,{dataTransfer:0}),Qd=Er(bd),Wd=Q({},yt,{relatedTarget:0}),bo=Er(Wd),Yd=Q({},xe,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Er(Yd),Kd=Q({},xe,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Zd=Er(Kd),Jd=Q({},xe,{data:0}),gu=Er(Jd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=ry[r])?!!n[r]:!1}function va(){return ny}var ey=Q({},yt,{key:function(r){if(r.key){var n=Xd[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=zt(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(r){return r.type==="keypress"?zt(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zt(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ty=Er(ey),oy=Q({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=Er(oy),iy=Q({},yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),ay=Er(iy),uy=Q({},xe,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Er(uy),sy=Q({},So,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Er(sy),dy=[9,13,27,32],Sa=qr&&"CompositionEvent"in window,Ie=null;qr&&"documentMode"in document&&(Ie=document.documentMode);var yy=qr&&"TextEvent"in window&&!Ie,fs=qr&&(!Sa||Ie&&8<Ie&&11>=Ie),Cu=" ",Pu=!1;function ms(r,n){switch(r){case"keyup":return dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gs(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Jn=!1;function py(r,n){switch(r){case"compositionend":return gs(n);case"keypress":return n.which!==32?null:(Pu=!0,Cu);case"textInput":return r=n.data,r===Cu&&Pu?null:r;default:return null}}function fy(r,n){if(Jn)return r==="compositionend"||!Sa&&ms(r,n)?(r=ps(),Bt=Ca=fn=null,Jn=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fs&&n.locale!=="ko"?null:n.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!my[r.type]:n==="textarea"}function hs(r,n,e,t){$l(t),n=ro(n,"onChange"),0<n.length&&(e=new Pa("onChange","change",null,e,t),r.push({event:e,listeners:n}))}var Ge=null,qe=null;function gy(r){ks(r,0)}function xo(r){var n=re(r);if(Gl(n))return r}function hy(r,n){if(r==="change")return n}var Cs=!1;if(qr){var Qo;if(qr){var Wo="oninput"in document;if(!Wo){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Wo=typeof Su.oninput=="function"}Qo=Wo}else Qo=!1;Cs=Qo&&(!document.documentMode||9<document.documentMode)}function xu(){Ge&&(Ge.detachEvent("onpropertychange",Ps),qe=Ge=null)}function Ps(r){if(r.propertyName==="value"&&xo(qe)){var n=[];hs(n,qe,r,pa(r)),Xl(gy,n)}}function Cy(r,n,e){r==="focusin"?(xu(),Ge=n,qe=e,Ge.attachEvent("onpropertychange",Ps)):r==="focusout"&&xu()}function Py(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return xo(qe)}function vy(r,n){if(r==="click")return xo(n)}function Sy(r,n){if(r==="input"||r==="change")return xo(n)}function xy(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var zr=typeof Object.is=="function"?Object.is:xy;function rt(r,n){if(zr(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var e=Object.keys(r),t=Object.keys(n);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var o=e[t];if(!li.call(n,o)||!zr(r[o],n[o]))return!1}return!0}function Fu(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function wu(r,n){var e=Fu(r);r=0;for(var t;e;){if(e.nodeType===3){if(t=r+e.textContent.length,r<=n&&t>=n)return{node:e,offset:n-r};r=t}r:{for(;e;){if(e.nextSibling){e=e.nextSibling;break r}e=e.parentNode}e=void 0}e=Fu(e)}}function vs(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?vs(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function Ss(){for(var r=window,n=Yt();n instanceof r.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)r=n.contentWindow;else break;n=Yt(r.document)}return n}function xa(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function Fy(r){var n=Ss(),e=r.focusedElem,t=r.selectionRange;if(n!==e&&e&&e.ownerDocument&&vs(e.ownerDocument.documentElement,e)){if(t!==null&&xa(e)){if(n=t.start,r=t.end,r===void 0&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(r=(n=e.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var o=e.textContent.length,i=Math.min(t.start,o);t=t.end===void 0?i:Math.min(t.end,o),!r.extend&&i>t&&(o=t,t=i,i=o),o=wu(e,i);var a=wu(e,t);o&&a&&(r.rangeCount!==1||r.anchorNode!==o.node||r.anchorOffset!==o.offset||r.focusNode!==a.node||r.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),r.removeAllRanges(),i>t?(r.addRange(n),r.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),r.addRange(n)))}}for(n=[],r=e;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<n.length;e++)r=n[e],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var wy=qr&&"documentMode"in document&&11>=document.documentMode,Xn=null,Vi=null,He=null,ki=!1;function Eu(r,n,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ki||Xn==null||Xn!==Yt(t)||(t=Xn,"selectionStart"in t&&xa(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),He&&rt(He,t)||(He=t,t=ro(Vi,"onSelect"),0<t.length&&(n=new Pa("onSelect","select",null,n,e),r.push({event:n,listeners:t}),n.target=Xn)))}function Et(r,n){var e={};return e[r.toLowerCase()]=n.toLowerCase(),e["Webkit"+r]="webkit"+n,e["Moz"+r]="moz"+n,e}var qn={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionend:Et("Transition","TransitionEnd")},Yo={},xs={};qr&&(xs=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Fo(r){if(Yo[r])return Yo[r];if(!qn[r])return r;var n=qn[r],e;for(e in n)if(n.hasOwnProperty(e)&&e in xs)return Yo[r]=n[e];return r}var Fs=Fo("animationend"),ws=Fo("animationiteration"),Es=Fo("animationstart"),As=Fo("transitionend"),Vs=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(r,n){Vs.set(r,n),Hn(n,[r])}for(var $o=0;$o<Au.length;$o++){var Ko=Au[$o],Ey=Ko.toLowerCase(),Ay=Ko[0].toUpperCase()+Ko.slice(1);Vn(Ey,"on"+Ay)}Vn(Fs,"onAnimationEnd");Vn(ws,"onAnimationIteration");Vn(Es,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(As,"onTransitionEnd");pe("onMouseEnter",["mouseout","mouseover"]);pe("onMouseLeave",["mouseout","mouseover"]);pe("onPointerEnter",["pointerout","pointerover"]);pe("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var De="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(De));function Vu(r,n,e){var t=r.type||"unknown-event";r.currentTarget=e,Ed(t,n,void 0,r),r.currentTarget=null}function ks(r,n){n=(n&4)!==0;for(var e=0;e<r.length;e++){var t=r[e],o=t.event;t=t.listeners;r:{var i=void 0;if(n)for(var a=t.length-1;0<=a;a--){var u=t[a],l=u.instance,c=u.currentTarget;if(u=u.listener,l!==i&&o.isPropagationStopped())break r;Vu(o,u,c),i=l}else for(a=0;a<t.length;a++){if(u=t[a],l=u.instance,c=u.currentTarget,u=u.listener,l!==i&&o.isPropagationStopped())break r;Vu(o,u,c),i=l}}}if(Kt)throw r=Fi,Kt=!1,Fi=null,r}function z(r,n){var e=n[Ri];e===void 0&&(e=n[Ri]=new Set);var t=r+"__bubble";e.has(t)||(Ns(n,r,2,!1),e.add(t))}function Zo(r,n,e){var t=0;n&&(t|=4),Ns(e,r,t,n)}var At="_reactListening"+Math.random().toString(36).slice(2);function nt(r){if(!r[At]){r[At]=!0,Ol.forEach(function(e){e!=="selectionchange"&&(Vy.has(e)||Zo(e,!1,r),Zo(e,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[At]||(n[At]=!0,Zo("selectionchange",!1,n))}}function Ns(r,n,e,t){switch(ys(n)){case 1:var o=Gd;break;case 4:o=Hd;break;default:o=ha}e=o.bind(null,n,e,r),o=void 0,!xi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),t?o!==void 0?r.addEventListener(n,e,{capture:!0,passive:o}):r.addEventListener(n,e,!0):o!==void 0?r.addEventListener(n,e,{passive:o}):r.addEventListener(n,e,!1)}function Jo(r,n,e,t,o){var i=t;if(!(n&1)&&!(n&2)&&t!==null)r:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var u=t.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(a===4)for(a=t.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;u!==null;){if(a=Ln(u),a===null)return;if(l=a.tag,l===5||l===6){t=i=a;continue r}u=u.parentNode}}t=t.return}Xl(function(){var c=i,m=pa(e),f=[];r:{var g=Vs.get(r);if(g!==void 0){var P=Pa,h=r;switch(r){case"keypress":if(zt(e)===0)break r;case"keydown":case"keyup":P=ty;break;case"focusin":h="focus",P=bo;break;case"focusout":h="blur",P=bo;break;case"beforeblur":case"afterblur":P=bo;break;case"click":if(e.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ay;break;case Fs:case ws:case Es:P=$d;break;case As:P=ly;break;case"scroll":P=Ud;break;case"wheel":P=cy;break;case"copy":case"cut":case"paste":P=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=hu}var F=(n&4)!==0,A=!F&&r==="scroll",y=F?g!==null?g+"Capture":null:g;F=[];for(var s=c,p;s!==null;){p=s;var C=p.stateNode;if(p.tag===5&&C!==null&&(p=C,y!==null&&(C=Ke(s,y),C!=null&&F.push(et(s,C,p)))),A)break;s=s.return}0<F.length&&(g=new P(g,h,null,e,m),f.push({event:g,listeners:F}))}}if(!(n&7)){r:{if(g=r==="mouseover"||r==="pointerover",P=r==="mouseout"||r==="pointerout",g&&e!==vi&&(h=e.relatedTarget||e.fromElement)&&(Ln(h)||h[rn]))break r;if((P||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,P?(h=e.relatedTarget||e.toElement,P=c,h=h?Ln(h):null,h!==null&&(A=Un(h),h!==A||h.tag!==5&&h.tag!==6)&&(h=null)):(P=null,h=c),P!==h)){if(F=mu,C="onMouseLeave",y="onMouseEnter",s="mouse",(r==="pointerout"||r==="pointerover")&&(F=hu,C="onPointerLeave",y="onPointerEnter",s="pointer"),A=P==null?g:re(P),p=h==null?g:re(h),g=new F(C,s+"leave",P,e,m),g.target=A,g.relatedTarget=p,C=null,Ln(m)===c&&(F=new F(y,s+"enter",h,e,m),F.target=p,F.relatedTarget=A,C=F),A=C,P&&h)n:{for(F=P,y=h,s=0,p=F;p;p=Yn(p))s++;for(p=0,C=y;C;C=Yn(C))p++;for(;0<s-p;)F=Yn(F),s--;for(;0<p-s;)y=Yn(y),p--;for(;s--;){if(F===y||y!==null&&F===y.alternate)break n;F=Yn(F),y=Yn(y)}F=null}else F=null;P!==null&&ku(f,g,P,F,!1),h!==null&&A!==null&&ku(f,A,h,F,!0)}}r:{if(g=c?re(c):window,P=g.nodeName&&g.nodeName.toLowerCase(),P==="select"||P==="input"&&g.type==="file")var w=hy;else if(vu(g))if(Cs)w=Sy;else{w=Py;var v=Cy}else(P=g.nodeName)&&P.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=vy);if(w&&(w=w(r,c))){hs(f,w,e,m);break r}v&&v(r,g,c),r==="focusout"&&(v=g._wrapperState)&&v.controlled&&g.type==="number"&&mi(g,"number",g.value)}switch(v=c?re(c):window,r){case"focusin":(vu(v)||v.contentEditable==="true")&&(Xn=v,Vi=c,He=null);break;case"focusout":He=Vi=Xn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,Eu(f,e,m);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Eu(f,e,m)}var E;if(Sa)r:{switch(r){case"compositionstart":var N="onCompositionStart";break r;case"compositionend":N="onCompositionEnd";break r;case"compositionupdate":N="onCompositionUpdate";break r}N=void 0}else Jn?ms(r,e)&&(N="onCompositionEnd"):r==="keydown"&&e.keyCode===229&&(N="onCompositionStart");N&&(fs&&e.locale!=="ko"&&(Jn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Jn&&(E=ps()):(fn=m,Ca="value"in fn?fn.value:fn.textContent,Jn=!0)),v=ro(c,N),0<v.length&&(N=new gu(N,r,null,e,m),f.push({event:N,listeners:v}),E?N.data=E:(E=gs(e),E!==null&&(N.data=E)))),(E=yy?py(r,e):fy(r,e))&&(c=ro(c,"onBeforeInput"),0<c.length&&(m=new gu("onBeforeInput","beforeinput",null,e,m),f.push({event:m,listeners:c}),m.data=E))}ks(f,n)})}function et(r,n,e){return{instance:r,listener:n,currentTarget:e}}function ro(r,n){for(var e=n+"Capture",t=[];r!==null;){var o=r,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ke(r,e),i!=null&&t.unshift(et(r,i,o)),i=Ke(r,n),i!=null&&t.push(et(r,i,o))),r=r.return}return t}function Yn(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ku(r,n,e,t,o){for(var i=n._reactName,a=[];e!==null&&e!==t;){var u=e,l=u.alternate,c=u.stateNode;if(l!==null&&l===t)break;u.tag===5&&c!==null&&(u=c,o?(l=Ke(e,i),l!=null&&a.unshift(et(e,l,u))):o||(l=Ke(e,i),l!=null&&a.push(et(e,l,u)))),e=e.return}a.length!==0&&r.push({event:n,listeners:a})}var ky=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Nu(r){return(typeof r=="string"?r:""+r).replace(ky,`
`).replace(Ny,"")}function Vt(r,n,e){if(n=Nu(n),Nu(r)!==n&&e)throw Error(x(425))}function no(){}var Ni=null,Mi=null;function Ti(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(r){return Mu.resolve(null).then(r).catch(Ly)}:Li;function Ly(r){setTimeout(function(){throw r})}function Xo(r,n){var e=n,t=0;do{var o=e.nextSibling;if(r.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(t===0){r.removeChild(o),Xe(n);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=o}while(e);Xe(n)}function vn(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function Tu(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var e=r.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return r;n--}else e==="/$"&&n++}r=r.previousSibling}return null}var Fe=Math.random().toString(36).slice(2),Qr="__reactFiber$"+Fe,tt="__reactProps$"+Fe,rn="__reactContainer$"+Fe,Ri="__reactEvents$"+Fe,Ry="__reactListeners$"+Fe,_y="__reactHandles$"+Fe;function Ln(r){var n=r[Qr];if(n)return n;for(var e=r.parentNode;e;){if(n=e[rn]||e[Qr]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(r=Tu(r);r!==null;){if(e=r[Qr])return e;r=Tu(r)}return n}r=e,e=r.parentNode}return null}function pt(r){return r=r[Qr]||r[rn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function re(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(x(33))}function wo(r){return r[tt]||null}var _i=[],ne=-1;function kn(r){return{current:r}}function I(r){0>ne||(r.current=_i[ne],_i[ne]=null,ne--)}function B(r,n){ne++,_i[ne]=r.current,r.current=n}var An={},ur=kn(An),gr=kn(!1),Dn=An;function fe(r,n){var e=r.type.contextTypes;if(!e)return An;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in e)o[i]=n[i];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=o),o}function hr(r){return r=r.childContextTypes,r!=null}function eo(){I(gr),I(ur)}function Lu(r,n,e){if(ur.current!==An)throw Error(x(168));B(ur,n),B(gr,e)}function Ms(r,n,e){var t=r.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var o in t)if(!(o in n))throw Error(x(108,Cd(r)||"Unknown",o));return Q({},e,t)}function to(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||An,Dn=ur.current,B(ur,r),B(gr,gr.current),!0}function Ru(r,n,e){var t=r.stateNode;if(!t)throw Error(x(169));e?(r=Ms(r,n,Dn),t.__reactInternalMemoizedMergedChildContext=r,I(gr),I(ur),B(ur,r)):I(gr),B(gr,e)}var Kr=null,Eo=!1,qo=!1;function Ts(r){Kr===null?Kr=[r]:Kr.push(r)}function jy(r){Eo=!0,Ts(r)}function Nn(){if(!qo&&Kr!==null){qo=!0;var r=0,n=D;try{var e=Kr;for(D=1;r<e.length;r++){var t=e[r];do t=t(!0);while(t!==null)}Kr=null,Eo=!1}catch(o){throw Kr!==null&&(Kr=Kr.slice(r+1)),es(fa,Nn),o}finally{D=n,qo=!1}}return null}var ee=[],te=0,oo=null,io=0,Ar=[],Vr=0,Bn=null,Zr=1,Jr="";function Mn(r,n){ee[te++]=io,ee[te++]=oo,oo=r,io=n}function Ls(r,n,e){Ar[Vr++]=Zr,Ar[Vr++]=Jr,Ar[Vr++]=Bn,Bn=r;var t=Zr;r=Jr;var o=32-Dr(t)-1;t&=~(1<<o),e+=1;var i=32-Dr(n)+o;if(30<i){var a=o-o%5;i=(t&(1<<a)-1).toString(32),t>>=a,o-=a,Zr=1<<32-Dr(n)+o|e<<o|t,Jr=i+r}else Zr=1<<i|e<<o|t,Jr=r}function Fa(r){r.return!==null&&(Mn(r,1),Ls(r,1,0))}function wa(r){for(;r===oo;)oo=ee[--te],ee[te]=null,io=ee[--te],ee[te]=null;for(;r===Bn;)Bn=Ar[--Vr],Ar[Vr]=null,Jr=Ar[--Vr],Ar[Vr]=null,Zr=Ar[--Vr],Ar[Vr]=null}var xr=null,Sr=null,H=!1,Or=null;function Rs(r,n){var e=Nr(5,null,null,0);e.elementType="DELETED",e.stateNode=n,e.return=r,n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)}function _u(r,n){switch(r.tag){case 5:var e=r.type;return n=n.nodeType!==1||e.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,xr=r,Sr=vn(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,xr=r,Sr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(e=Bn!==null?{id:Zr,overflow:Jr}:null,r.memoizedState={dehydrated:n,treeContext:e,retryLane:1073741824},e=Nr(18,null,null,0),e.stateNode=n,e.return=r,r.child=e,xr=r,Sr=null,!0):!1;default:return!1}}function ji(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Oi(r){if(H){var n=Sr;if(n){var e=n;if(!_u(r,n)){if(ji(r))throw Error(x(418));n=vn(e.nextSibling);var t=xr;n&&_u(r,n)?Rs(t,e):(r.flags=r.flags&-4097|2,H=!1,xr=r)}}else{if(ji(r))throw Error(x(418));r.flags=r.flags&-4097|2,H=!1,xr=r}}}function ju(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;xr=r}function kt(r){if(r!==xr)return!1;if(!H)return ju(r),H=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!Ti(r.type,r.memoizedProps)),n&&(n=Sr)){if(ji(r))throw _s(),Error(x(418));for(;n;)Rs(r,n),n=vn(n.nextSibling)}if(ju(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(x(317));r:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var e=r.data;if(e==="/$"){if(n===0){Sr=vn(r.nextSibling);break r}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++}r=r.nextSibling}Sr=null}}else Sr=xr?vn(r.stateNode.nextSibling):null;return!0}function _s(){for(var r=Sr;r;)r=vn(r.nextSibling)}function me(){Sr=xr=null,H=!1}function Ea(r){Or===null?Or=[r]:Or.push(r)}var Oy=tn.ReactCurrentBatchConfig;function Te(r,n,e){if(r=e.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(x(309));var t=e.stateNode}if(!t)throw Error(x(147,r));var o=t,i=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=o.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof r!="string")throw Error(x(284));if(!e._owner)throw Error(x(290,r))}return r}function Nt(r,n){throw r=Object.prototype.toString.call(n),Error(x(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function Ou(r){var n=r._init;return n(r._payload)}function js(r){function n(y,s){if(r){var p=y.deletions;p===null?(y.deletions=[s],y.flags|=16):p.push(s)}}function e(y,s){if(!r)return null;for(;s!==null;)n(y,s),s=s.sibling;return null}function t(y,s){for(y=new Map;s!==null;)s.key!==null?y.set(s.key,s):y.set(s.index,s),s=s.sibling;return y}function o(y,s){return y=wn(y,s),y.index=0,y.sibling=null,y}function i(y,s,p){return y.index=p,r?(p=y.alternate,p!==null?(p=p.index,p<s?(y.flags|=2,s):p):(y.flags|=2,s)):(y.flags|=1048576,s)}function a(y){return r&&y.alternate===null&&(y.flags|=2),y}function u(y,s,p,C){return s===null||s.tag!==6?(s=ai(p,y.mode,C),s.return=y,s):(s=o(s,p),s.return=y,s)}function l(y,s,p,C){var w=p.type;return w===Zn?m(y,s,p.props.children,C,p.key):s!==null&&(s.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===cn&&Ou(w)===s.type)?(C=o(s,p.props),C.ref=Te(y,s,p),C.return=y,C):(C=Wt(p.type,p.key,p.props,null,y.mode,C),C.ref=Te(y,s,p),C.return=y,C)}function c(y,s,p,C){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=ui(p,y.mode,C),s.return=y,s):(s=o(s,p.children||[]),s.return=y,s)}function m(y,s,p,C,w){return s===null||s.tag!==7?(s=On(p,y.mode,C,w),s.return=y,s):(s=o(s,p),s.return=y,s)}function f(y,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ai(""+s,y.mode,p),s.return=y,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ct:return p=Wt(s.type,s.key,s.props,null,y.mode,p),p.ref=Te(y,null,s),p.return=y,p;case Kn:return s=ui(s,y.mode,p),s.return=y,s;case cn:var C=s._init;return f(y,C(s._payload),p)}if(je(s)||Ae(s))return s=On(s,y.mode,p,null),s.return=y,s;Nt(y,s)}return null}function g(y,s,p,C){var w=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:u(y,s,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ct:return p.key===w?l(y,s,p,C):null;case Kn:return p.key===w?c(y,s,p,C):null;case cn:return w=p._init,g(y,s,w(p._payload),C)}if(je(p)||Ae(p))return w!==null?null:m(y,s,p,C,null);Nt(y,p)}return null}function P(y,s,p,C,w){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(p)||null,u(s,y,""+C,w);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ct:return y=y.get(C.key===null?p:C.key)||null,l(s,y,C,w);case Kn:return y=y.get(C.key===null?p:C.key)||null,c(s,y,C,w);case cn:var v=C._init;return P(y,s,p,v(C._payload),w)}if(je(C)||Ae(C))return y=y.get(p)||null,m(s,y,C,w,null);Nt(s,C)}return null}function h(y,s,p,C){for(var w=null,v=null,E=s,N=s=0,G=null;E!==null&&N<p.length;N++){E.index>N?(G=E,E=null):G=E.sibling;var R=g(y,E,p[N],C);if(R===null){E===null&&(E=G);break}r&&E&&R.alternate===null&&n(y,E),s=i(R,s,N),v===null?w=R:v.sibling=R,v=R,E=G}if(N===p.length)return e(y,E),H&&Mn(y,N),w;if(E===null){for(;N<p.length;N++)E=f(y,p[N],C),E!==null&&(s=i(E,s,N),v===null?w=E:v.sibling=E,v=E);return H&&Mn(y,N),w}for(E=t(y,E);N<p.length;N++)G=P(E,y,N,p[N],C),G!==null&&(r&&G.alternate!==null&&E.delete(G.key===null?N:G.key),s=i(G,s,N),v===null?w=G:v.sibling=G,v=G);return r&&E.forEach(function(yr){return n(y,yr)}),H&&Mn(y,N),w}function F(y,s,p,C){var w=Ae(p);if(typeof w!="function")throw Error(x(150));if(p=w.call(p),p==null)throw Error(x(151));for(var v=w=null,E=s,N=s=0,G=null,R=p.next();E!==null&&!R.done;N++,R=p.next()){E.index>N?(G=E,E=null):G=E.sibling;var yr=g(y,E,R.value,C);if(yr===null){E===null&&(E=G);break}r&&E&&yr.alternate===null&&n(y,E),s=i(yr,s,N),v===null?w=yr:v.sibling=yr,v=yr,E=G}if(R.done)return e(y,E),H&&Mn(y,N),w;if(E===null){for(;!R.done;N++,R=p.next())R=f(y,R.value,C),R!==null&&(s=i(R,s,N),v===null?w=R:v.sibling=R,v=R);return H&&Mn(y,N),w}for(E=t(y,E);!R.done;N++,R=p.next())R=P(E,y,N,R.value,C),R!==null&&(r&&R.alternate!==null&&E.delete(R.key===null?N:R.key),s=i(R,s,N),v===null?w=R:v.sibling=R,v=R);return r&&E.forEach(function(an){return n(y,an)}),H&&Mn(y,N),w}function A(y,s,p,C){if(typeof p=="object"&&p!==null&&p.type===Zn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ct:r:{for(var w=p.key,v=s;v!==null;){if(v.key===w){if(w=p.type,w===Zn){if(v.tag===7){e(y,v.sibling),s=o(v,p.props.children),s.return=y,y=s;break r}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===cn&&Ou(w)===v.type){e(y,v.sibling),s=o(v,p.props),s.ref=Te(y,v,p),s.return=y,y=s;break r}e(y,v);break}else n(y,v);v=v.sibling}p.type===Zn?(s=On(p.props.children,y.mode,C,p.key),s.return=y,y=s):(C=Wt(p.type,p.key,p.props,null,y.mode,C),C.ref=Te(y,s,p),C.return=y,y=C)}return a(y);case Kn:r:{for(v=p.key;s!==null;){if(s.key===v)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){e(y,s.sibling),s=o(s,p.children||[]),s.return=y,y=s;break r}else{e(y,s);break}else n(y,s);s=s.sibling}s=ui(p,y.mode,C),s.return=y,y=s}return a(y);case cn:return v=p._init,A(y,s,v(p._payload),C)}if(je(p))return h(y,s,p,C);if(Ae(p))return F(y,s,p,C);Nt(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(e(y,s.sibling),s=o(s,p),s.return=y,y=s):(e(y,s),s=ai(p,y.mode,C),s.return=y,y=s),a(y)):e(y,s)}return A}var ge=js(!0),Os=js(!1),ao=kn(null),uo=null,oe=null,Aa=null;function Va(){Aa=oe=uo=null}function ka(r){var n=ao.current;I(ao),r._currentValue=n}function Di(r,n,e){for(;r!==null;){var t=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),r===e)break;r=r.return}}function de(r,n){uo=r,Aa=oe=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&n&&(mr=!0),r.firstContext=null)}function Tr(r){var n=r._currentValue;if(Aa!==r)if(r={context:r,memoizedValue:n,next:null},oe===null){if(uo===null)throw Error(x(308));oe=r,uo.dependencies={lanes:0,firstContext:r}}else oe=oe.next=r;return n}var Rn=null;function Na(r){Rn===null?Rn=[r]:Rn.push(r)}function Ds(r,n,e,t){var o=n.interleaved;return o===null?(e.next=e,Na(n)):(e.next=o.next,o.next=e),n.interleaved=e,nn(r,t)}function nn(r,n){r.lanes|=n;var e=r.alternate;for(e!==null&&(e.lanes|=n),e=r,r=r.return;r!==null;)r.childLanes|=n,e=r.alternate,e!==null&&(e.childLanes|=n),e=r,r=r.return;return e.tag===3?e.stateNode:null}var dn=!1;function Ma(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bs(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Xr(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(r,n,e){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,j&2){var o=t.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n,nn(r,e)}return o=t.interleaved,o===null?(n.next=n,Na(t)):(n.next=o.next,o.next=n),t.interleaved=n,nn(r,e)}function It(r,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194240)!==0)){var t=n.lanes;t&=r.pendingLanes,e|=t,n.lanes=e,ma(r,e)}}function Du(r,n){var e=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var o=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var a={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};i===null?o=i=a:i=i.next=a,e=e.next}while(e!==null);i===null?o=i=n:i=i.next=n}else o=i=n;e={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:t.shared,effects:t.effects},r.updateQueue=e;return}r=e.lastBaseUpdate,r===null?e.firstBaseUpdate=n:r.next=n,e.lastBaseUpdate=n}function lo(r,n,e,t){var o=r.updateQueue;dn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var l=u,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var m=r.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==a&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,m=c=l=null,u=i;do{var g=u.lane,P=u.eventTime;if((t&g)===g){m!==null&&(m=m.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});r:{var h=r,F=u;switch(g=n,P=e,F.tag){case 1:if(h=F.payload,typeof h=="function"){f=h.call(P,f,g);break r}f=h;break r;case 3:h.flags=h.flags&-65537|128;case 0:if(h=F.payload,g=typeof h=="function"?h.call(P,f,g):h,g==null)break r;f=Q({},f,g);break r;case 2:dn=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else P={eventTime:P,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=P,l=f):m=m.next=P,a|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=m,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);In|=a,r.lanes=a,r.memoizedState=f}}function Bu(r,n,e){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var t=r[n],o=t.callback;if(o!==null){if(t.callback=null,t=e,typeof o!="function")throw Error(x(191,o));o.call(t)}}}var ft={},Yr=kn(ft),ot=kn(ft),it=kn(ft);function _n(r){if(r===ft)throw Error(x(174));return r}function Ta(r,n){switch(B(it,n),B(ot,r),B(Yr,ft),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hi(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=hi(n,r)}I(Yr),B(Yr,n)}function he(){I(Yr),I(ot),I(it)}function zs(r){_n(it.current);var n=_n(Yr.current),e=hi(n,r.type);n!==e&&(B(ot,r),B(Yr,e))}function La(r){ot.current===r&&(I(Yr),I(ot))}var U=kn(0);function so(r){for(var n=r;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ri=[];function Ra(){for(var r=0;r<ri.length;r++)ri[r]._workInProgressVersionPrimary=null;ri.length=0}var Gt=tn.ReactCurrentDispatcher,ni=tn.ReactCurrentBatchConfig,zn=0,b=null,Z=null,X=null,co=!1,Ue=!1,at=0,Dy=0;function or(){throw Error(x(321))}function _a(r,n){if(n===null)return!1;for(var e=0;e<n.length&&e<r.length;e++)if(!zr(r[e],n[e]))return!1;return!0}function ja(r,n,e,t,o,i){if(zn=i,b=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Gt.current=r===null||r.memoizedState===null?Gy:Hy,r=e(t,o),Ue){i=0;do{if(Ue=!1,at=0,25<=i)throw Error(x(301));i+=1,X=Z=null,n.updateQueue=null,Gt.current=Uy,r=e(t,o)}while(Ue)}if(Gt.current=yo,n=Z!==null&&Z.next!==null,zn=0,X=Z=b=null,co=!1,n)throw Error(x(300));return r}function Oa(){var r=at!==0;return at=0,r}function br(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?b.memoizedState=X=r:X=X.next=r,X}function Lr(){if(Z===null){var r=b.alternate;r=r!==null?r.memoizedState:null}else r=Z.next;var n=X===null?b.memoizedState:X.next;if(n!==null)X=n,Z=r;else{if(r===null)throw Error(x(310));Z=r,r={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},X===null?b.memoizedState=X=r:X=X.next=r}return X}function ut(r,n){return typeof n=="function"?n(r):n}function ei(r){var n=Lr(),e=n.queue;if(e===null)throw Error(x(311));e.lastRenderedReducer=r;var t=Z,o=t.baseQueue,i=e.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}t.baseQueue=o=i,e.pending=null}if(o!==null){i=o.next,t=t.baseState;var u=a=null,l=null,c=i;do{var m=c.lane;if((zn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:r(t,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(u=l=f,a=t):l=l.next=f,b.lanes|=m,In|=m}c=c.next}while(c!==null&&c!==i);l===null?a=t:l.next=u,zr(t,n.memoizedState)||(mr=!0),n.memoizedState=t,n.baseState=a,n.baseQueue=l,e.lastRenderedState=t}if(r=e.interleaved,r!==null){o=r;do i=o.lane,b.lanes|=i,In|=i,o=o.next;while(o!==r)}else o===null&&(e.lanes=0);return[n.memoizedState,e.dispatch]}function ti(r){var n=Lr(),e=n.queue;if(e===null)throw Error(x(311));e.lastRenderedReducer=r;var t=e.dispatch,o=e.pending,i=n.memoizedState;if(o!==null){e.pending=null;var a=o=o.next;do i=r(i,a.action),a=a.next;while(a!==o);zr(i,n.memoizedState)||(mr=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,t]}function Is(){}function Gs(r,n){var e=b,t=Lr(),o=n(),i=!zr(t.memoizedState,o);if(i&&(t.memoizedState=o,mr=!0),t=t.queue,Da(bs.bind(null,e,t,r),[r]),t.getSnapshot!==n||i||X!==null&&X.memoizedState.tag&1){if(e.flags|=2048,lt(9,Us.bind(null,e,t,o,n),void 0,null),q===null)throw Error(x(349));zn&30||Hs(e,n,o)}return o}function Hs(r,n,e){r.flags|=16384,r={getSnapshot:n,value:e},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.stores=[r]):(e=n.stores,e===null?n.stores=[r]:e.push(r))}function Us(r,n,e,t){n.value=e,n.getSnapshot=t,Qs(n)&&Ws(r)}function bs(r,n,e){return e(function(){Qs(n)&&Ws(r)})}function Qs(r){var n=r.getSnapshot;r=r.value;try{var e=n();return!zr(r,e)}catch{return!0}}function Ws(r){var n=nn(r,1);n!==null&&Br(n,r,1,-1)}function zu(r){var n=br();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ut,lastRenderedState:r},n.queue=r,r=r.dispatch=Iy.bind(null,b,r),[n.memoizedState,r]}function lt(r,n,e,t){return r={tag:r,create:n,destroy:e,deps:t,next:null},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.lastEffect=r.next=r):(e=n.lastEffect,e===null?n.lastEffect=r.next=r:(t=e.next,e.next=r,r.next=t,n.lastEffect=r)),r}function Ys(){return Lr().memoizedState}function Ht(r,n,e,t){var o=br();b.flags|=r,o.memoizedState=lt(1|n,e,void 0,t===void 0?null:t)}function Ao(r,n,e,t){var o=Lr();t=t===void 0?null:t;var i=void 0;if(Z!==null){var a=Z.memoizedState;if(i=a.destroy,t!==null&&_a(t,a.deps)){o.memoizedState=lt(n,e,i,t);return}}b.flags|=r,o.memoizedState=lt(1|n,e,i,t)}function Iu(r,n){return Ht(8390656,8,r,n)}function Da(r,n){return Ao(2048,8,r,n)}function $s(r,n){return Ao(4,2,r,n)}function Ks(r,n){return Ao(4,4,r,n)}function Zs(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function Js(r,n,e){return e=e!=null?e.concat([r]):null,Ao(4,4,Zs.bind(null,n,r),e)}function Ba(){}function Xs(r,n){var e=Lr();n=n===void 0?null:n;var t=e.memoizedState;return t!==null&&n!==null&&_a(n,t[1])?t[0]:(e.memoizedState=[r,n],r)}function qs(r,n){var e=Lr();n=n===void 0?null:n;var t=e.memoizedState;return t!==null&&n!==null&&_a(n,t[1])?t[0]:(r=r(),e.memoizedState=[r,n],r)}function rc(r,n,e){return zn&21?(zr(e,n)||(e=is(),b.lanes|=e,In|=e,r.baseState=!0),n):(r.baseState&&(r.baseState=!1,mr=!0),r.memoizedState=e)}function By(r,n){var e=D;D=e!==0&&4>e?e:4,r(!0);var t=ni.transition;ni.transition={};try{r(!1),n()}finally{D=e,ni.transition=t}}function nc(){return Lr().memoizedState}function zy(r,n,e){var t=Fn(r);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},ec(r))tc(n,e);else if(e=Ds(r,n,e,t),e!==null){var o=sr();Br(e,r,t,o),oc(e,n,t)}}function Iy(r,n,e){var t=Fn(r),o={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(ec(r))tc(n,o);else{var i=r.alternate;if(r.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,e);if(o.hasEagerState=!0,o.eagerState=u,zr(u,a)){var l=n.interleaved;l===null?(o.next=o,Na(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}e=Ds(r,n,o,t),e!==null&&(o=sr(),Br(e,r,t,o),oc(e,n,t))}}function ec(r){var n=r.alternate;return r===b||n!==null&&n===b}function tc(r,n){Ue=co=!0;var e=r.pending;e===null?n.next=n:(n.next=e.next,e.next=n),r.pending=n}function oc(r,n,e){if(e&4194240){var t=n.lanes;t&=r.pendingLanes,e|=t,n.lanes=e,ma(r,e)}}var yo={readContext:Tr,useCallback:or,useContext:or,useEffect:or,useImperativeHandle:or,useInsertionEffect:or,useLayoutEffect:or,useMemo:or,useReducer:or,useRef:or,useState:or,useDebugValue:or,useDeferredValue:or,useTransition:or,useMutableSource:or,useSyncExternalStore:or,useId:or,unstable_isNewReconciler:!1},Gy={readContext:Tr,useCallback:function(r,n){return br().memoizedState=[r,n===void 0?null:n],r},useContext:Tr,useEffect:Iu,useImperativeHandle:function(r,n,e){return e=e!=null?e.concat([r]):null,Ht(4194308,4,Zs.bind(null,n,r),e)},useLayoutEffect:function(r,n){return Ht(4194308,4,r,n)},useInsertionEffect:function(r,n){return Ht(4,2,r,n)},useMemo:function(r,n){var e=br();return n=n===void 0?null:n,r=r(),e.memoizedState=[r,n],r},useReducer:function(r,n,e){var t=br();return n=e!==void 0?e(n):n,t.memoizedState=t.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},t.queue=r,r=r.dispatch=zy.bind(null,b,r),[t.memoizedState,r]},useRef:function(r){var n=br();return r={current:r},n.memoizedState=r},useState:zu,useDebugValue:Ba,useDeferredValue:function(r){return br().memoizedState=r},useTransition:function(){var r=zu(!1),n=r[0];return r=By.bind(null,r[1]),br().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,e){var t=b,o=br();if(H){if(e===void 0)throw Error(x(407));e=e()}else{if(e=n(),q===null)throw Error(x(349));zn&30||Hs(t,n,e)}o.memoizedState=e;var i={value:e,getSnapshot:n};return o.queue=i,Iu(bs.bind(null,t,i,r),[r]),t.flags|=2048,lt(9,Us.bind(null,t,i,e,n),void 0,null),e},useId:function(){var r=br(),n=q.identifierPrefix;if(H){var e=Jr,t=Zr;e=(t&~(1<<32-Dr(t)-1)).toString(32)+e,n=":"+n+"R"+e,e=at++,0<e&&(n+="H"+e.toString(32)),n+=":"}else e=Dy++,n=":"+n+"r"+e.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},Hy={readContext:Tr,useCallback:Xs,useContext:Tr,useEffect:Da,useImperativeHandle:Js,useInsertionEffect:$s,useLayoutEffect:Ks,useMemo:qs,useReducer:ei,useRef:Ys,useState:function(){return ei(ut)},useDebugValue:Ba,useDeferredValue:function(r){var n=Lr();return rc(n,Z.memoizedState,r)},useTransition:function(){var r=ei(ut)[0],n=Lr().memoizedState;return[r,n]},useMutableSource:Is,useSyncExternalStore:Gs,useId:nc,unstable_isNewReconciler:!1},Uy={readContext:Tr,useCallback:Xs,useContext:Tr,useEffect:Da,useImperativeHandle:Js,useInsertionEffect:$s,useLayoutEffect:Ks,useMemo:qs,useReducer:ti,useRef:Ys,useState:function(){return ti(ut)},useDebugValue:Ba,useDeferredValue:function(r){var n=Lr();return Z===null?n.memoizedState=r:rc(n,Z.memoizedState,r)},useTransition:function(){var r=ti(ut)[0],n=Lr().memoizedState;return[r,n]},useMutableSource:Is,useSyncExternalStore:Gs,useId:nc,unstable_isNewReconciler:!1};function _r(r,n){if(r&&r.defaultProps){n=Q({},n),r=r.defaultProps;for(var e in r)n[e]===void 0&&(n[e]=r[e]);return n}return n}function Bi(r,n,e,t){n=r.memoizedState,e=e(t,n),e=e==null?n:Q({},n,e),r.memoizedState=e,r.lanes===0&&(r.updateQueue.baseState=e)}var Vo={isMounted:function(r){return(r=r._reactInternals)?Un(r)===r:!1},enqueueSetState:function(r,n,e){r=r._reactInternals;var t=sr(),o=Fn(r),i=Xr(t,o);i.payload=n,e!=null&&(i.callback=e),n=Sn(r,i,o),n!==null&&(Br(n,r,o,t),It(n,r,o))},enqueueReplaceState:function(r,n,e){r=r._reactInternals;var t=sr(),o=Fn(r),i=Xr(t,o);i.tag=1,i.payload=n,e!=null&&(i.callback=e),n=Sn(r,i,o),n!==null&&(Br(n,r,o,t),It(n,r,o))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var e=sr(),t=Fn(r),o=Xr(e,t);o.tag=2,n!=null&&(o.callback=n),n=Sn(r,o,t),n!==null&&(Br(n,r,t,e),It(n,r,t))}};function Gu(r,n,e,t,o,i,a){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,i,a):n.prototype&&n.prototype.isPureReactComponent?!rt(e,t)||!rt(o,i):!0}function ic(r,n,e){var t=!1,o=An,i=n.contextType;return typeof i=="object"&&i!==null?i=Tr(i):(o=hr(n)?Dn:ur.current,t=n.contextTypes,i=(t=t!=null)?fe(r,o):An),n=new n(e,i),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Vo,r.stateNode=n,n._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=i),n}function Hu(r,n,e,t){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,t),n.state!==r&&Vo.enqueueReplaceState(n,n.state,null)}function zi(r,n,e,t){var o=r.stateNode;o.props=e,o.state=r.memoizedState,o.refs={},Ma(r);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Tr(i):(i=hr(n)?Dn:ur.current,o.context=fe(r,i)),o.state=r.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Bi(r,n,i,e),o.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Vo.enqueueReplaceState(o,o.state,null),lo(r,e,o,t),o.state=r.memoizedState),typeof o.componentDidMount=="function"&&(r.flags|=4194308)}function Ce(r,n){try{var e="",t=n;do e+=hd(t),t=t.return;while(t);var o=e}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:r,source:n,stack:o,digest:null}}function oi(r,n,e){return{value:r,source:null,stack:e??null,digest:n??null}}function Ii(r,n){try{console.error(n.value)}catch(e){setTimeout(function(){throw e})}}var by=typeof WeakMap=="function"?WeakMap:Map;function ac(r,n,e){e=Xr(-1,e),e.tag=3,e.payload={element:null};var t=n.value;return e.callback=function(){fo||(fo=!0,Zi=t),Ii(r,n)},e}function uc(r,n,e){e=Xr(-1,e),e.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var o=n.value;e.payload=function(){return t(o)},e.callback=function(){Ii(r,n)}}var i=r.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Ii(r,n),typeof t!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),e}function Uu(r,n,e){var t=r.pingCache;if(t===null){t=r.pingCache=new by;var o=new Set;t.set(n,o)}else o=t.get(n),o===void 0&&(o=new Set,t.set(n,o));o.has(e)||(o.add(e),r=o1.bind(null,r,n,e),n.then(r,r))}function bu(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function Qu(r,n,e,t,o){return r.mode&1?(r.flags|=65536,r.lanes=o,r):(r===n?r.flags|=65536:(r.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(n=Xr(-1,1),n.tag=2,Sn(e,n,1))),e.lanes|=1),r)}var Qy=tn.ReactCurrentOwner,mr=!1;function lr(r,n,e,t){n.child=r===null?Os(n,null,e,t):ge(n,r.child,e,t)}function Wu(r,n,e,t,o){e=e.render;var i=n.ref;return de(n,o),t=ja(r,n,e,t,i,o),e=Oa(),r!==null&&!mr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~o,en(r,n,o)):(H&&e&&Fa(n),n.flags|=1,lr(r,n,t,o),n.child)}function Yu(r,n,e,t,o){if(r===null){var i=e.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(n.tag=15,n.type=i,lc(r,n,i,t,o)):(r=Wt(e.type,null,t,n,n.mode,o),r.ref=n.ref,r.return=n,n.child=r)}if(i=r.child,!(r.lanes&o)){var a=i.memoizedProps;if(e=e.compare,e=e!==null?e:rt,e(a,t)&&r.ref===n.ref)return en(r,n,o)}return n.flags|=1,r=wn(i,t),r.ref=n.ref,r.return=n,n.child=r}function lc(r,n,e,t,o){if(r!==null){var i=r.memoizedProps;if(rt(i,t)&&r.ref===n.ref)if(mr=!1,n.pendingProps=t=i,(r.lanes&o)!==0)r.flags&131072&&(mr=!0);else return n.lanes=r.lanes,en(r,n,o)}return Gi(r,n,e,t,o)}function sc(r,n,e){var t=n.pendingProps,o=t.children,i=r!==null?r.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(ae,vr),vr|=e;else{if(!(e&1073741824))return r=i!==null?i.baseLanes|e:e,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,B(ae,vr),vr|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:e,B(ae,vr),vr|=t}else i!==null?(t=i.baseLanes|e,n.memoizedState=null):t=e,B(ae,vr),vr|=t;return lr(r,n,o,e),n.child}function cc(r,n){var e=n.ref;(r===null&&e!==null||r!==null&&r.ref!==e)&&(n.flags|=512,n.flags|=2097152)}function Gi(r,n,e,t,o){var i=hr(e)?Dn:ur.current;return i=fe(n,i),de(n,o),e=ja(r,n,e,t,i,o),t=Oa(),r!==null&&!mr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~o,en(r,n,o)):(H&&t&&Fa(n),n.flags|=1,lr(r,n,e,o),n.child)}function $u(r,n,e,t,o){if(hr(e)){var i=!0;to(n)}else i=!1;if(de(n,o),n.stateNode===null)Ut(r,n),ic(n,e,t),zi(n,e,t,o),t=!0;else if(r===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var l=a.context,c=e.contextType;typeof c=="object"&&c!==null?c=Tr(c):(c=hr(e)?Dn:ur.current,c=fe(n,c));var m=e.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==t||l!==c)&&Hu(n,a,t,c),dn=!1;var g=n.memoizedState;a.state=g,lo(n,t,a,o),l=n.memoizedState,u!==t||g!==l||gr.current||dn?(typeof m=="function"&&(Bi(n,e,m,t),l=n.memoizedState),(u=dn||Gu(n,e,u,t,g,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=l),a.props=t,a.state=l,a.context=c,t=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{a=n.stateNode,Bs(r,n),u=n.memoizedProps,c=n.type===n.elementType?u:_r(n.type,u),a.props=c,f=n.pendingProps,g=a.context,l=e.contextType,typeof l=="object"&&l!==null?l=Tr(l):(l=hr(e)?Dn:ur.current,l=fe(n,l));var P=e.getDerivedStateFromProps;(m=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==f||g!==l)&&Hu(n,a,t,l),dn=!1,g=n.memoizedState,a.state=g,lo(n,t,a,o);var h=n.memoizedState;u!==f||g!==h||gr.current||dn?(typeof P=="function"&&(Bi(n,e,P,t),h=n.memoizedState),(c=dn||Gu(n,e,c,t,g,h,l)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,h,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=h),a.props=t,a.state=h,a.context=l,t=c):(typeof a.componentDidUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=1024),t=!1)}return Hi(r,n,e,t,i,o)}function Hi(r,n,e,t,o,i){cc(r,n);var a=(n.flags&128)!==0;if(!t&&!a)return o&&Ru(n,e,!1),en(r,n,i);t=n.stateNode,Qy.current=n;var u=a&&typeof e.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,r!==null&&a?(n.child=ge(n,r.child,null,i),n.child=ge(n,null,u,i)):lr(r,n,u,i),n.memoizedState=t.state,o&&Ru(n,e,!0),n.child}function dc(r){var n=r.stateNode;n.pendingContext?Lu(r,n.pendingContext,n.pendingContext!==n.context):n.context&&Lu(r,n.context,!1),Ta(r,n.containerInfo)}function Ku(r,n,e,t,o){return me(),Ea(o),n.flags|=256,lr(r,n,e,t),n.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function bi(r){return{baseLanes:r,cachePool:null,transitions:null}}function yc(r,n,e){var t=n.pendingProps,o=U.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=r!==null&&r.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(o|=1),B(U,o&1),r===null)return Oi(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(n.mode&1?r.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=t.children,r=t.fallback,i?(t=n.mode,i=n.child,a={mode:"hidden",children:a},!(t&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Mo(a,t,0,null),r=On(r,t,e,null),i.return=n,r.return=n,i.sibling=r,n.child=i,n.child.memoizedState=bi(e),n.memoizedState=Ui,r):za(n,a));if(o=r.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Wy(r,n,a,t,u,o,e);if(i){i=t.fallback,a=n.mode,o=r.child,u=o.sibling;var l={mode:"hidden",children:t.children};return!(a&1)&&n.child!==o?(t=n.child,t.childLanes=0,t.pendingProps=l,n.deletions=null):(t=wn(o,l),t.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=wn(u,i):(i=On(i,a,e,null),i.flags|=2),i.return=n,t.return=n,t.sibling=i,n.child=t,t=i,i=n.child,a=r.child.memoizedState,a=a===null?bi(e):{baseLanes:a.baseLanes|e,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=r.childLanes&~e,n.memoizedState=Ui,t}return i=r.child,r=i.sibling,t=wn(i,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=e),t.return=n,t.sibling=null,r!==null&&(e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)),n.child=t,n.memoizedState=null,t}function za(r,n){return n=Mo({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function Mt(r,n,e,t){return t!==null&&Ea(t),ge(n,r.child,null,e),r=za(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function Wy(r,n,e,t,o,i,a){if(e)return n.flags&256?(n.flags&=-257,t=oi(Error(x(422))),Mt(r,n,a,t)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(i=t.fallback,o=n.mode,t=Mo({mode:"visible",children:t.children},o,0,null),i=On(i,o,a,null),i.flags|=2,t.return=n,i.return=n,t.sibling=i,n.child=t,n.mode&1&&ge(n,r.child,null,a),n.child.memoizedState=bi(a),n.memoizedState=Ui,i);if(!(n.mode&1))return Mt(r,n,a,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var u=t.dgst;return t=u,i=Error(x(419)),t=oi(i,t,void 0),Mt(r,n,a,t)}if(u=(a&r.childLanes)!==0,mr||u){if(t=q,t!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,nn(r,o),Br(t,r,o,-1))}return Qa(),t=oi(Error(x(421))),Mt(r,n,a,t)}return o.data==="$?"?(n.flags|=128,n.child=r.child,n=i1.bind(null,r),o._reactRetry=n,null):(r=i.treeContext,Sr=vn(o.nextSibling),xr=n,H=!0,Or=null,r!==null&&(Ar[Vr++]=Zr,Ar[Vr++]=Jr,Ar[Vr++]=Bn,Zr=r.id,Jr=r.overflow,Bn=n),n=za(n,t.children),n.flags|=4096,n)}function Zu(r,n,e){r.lanes|=n;var t=r.alternate;t!==null&&(t.lanes|=n),Di(r.return,n,e)}function ii(r,n,e,t,o){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=e,i.tailMode=o)}function pc(r,n,e){var t=n.pendingProps,o=t.revealOrder,i=t.tail;if(lr(r,n,t.children,e),t=U.current,t&2)t=t&1|2,n.flags|=128;else{if(r!==null&&r.flags&128)r:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Zu(r,e,n);else if(r.tag===19)Zu(r,e,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break r;for(;r.sibling===null;){if(r.return===null||r.return===n)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(B(U,t),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(e=n.child,o=null;e!==null;)r=e.alternate,r!==null&&so(r)===null&&(o=e),e=e.sibling;e=o,e===null?(o=n.child,n.child=null):(o=e.sibling,e.sibling=null),ii(n,!1,o,e,i);break;case"backwards":for(e=null,o=n.child,n.child=null;o!==null;){if(r=o.alternate,r!==null&&so(r)===null){n.child=o;break}r=o.sibling,o.sibling=e,e=o,o=r}ii(n,!0,e,null,i);break;case"together":ii(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ut(r,n){!(n.mode&1)&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function en(r,n,e){if(r!==null&&(n.dependencies=r.dependencies),In|=n.lanes,!(e&n.childLanes))return null;if(r!==null&&n.child!==r.child)throw Error(x(153));if(n.child!==null){for(r=n.child,e=wn(r,r.pendingProps),n.child=e,e.return=n;r.sibling!==null;)r=r.sibling,e=e.sibling=wn(r,r.pendingProps),e.return=n;e.sibling=null}return n.child}function Yy(r,n,e){switch(n.tag){case 3:dc(n),me();break;case 5:zs(n);break;case 1:hr(n.type)&&to(n);break;case 4:Ta(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,o=n.memoizedProps.value;B(ao,t._currentValue),t._currentValue=o;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(B(U,U.current&1),n.flags|=128,null):e&n.child.childLanes?yc(r,n,e):(B(U,U.current&1),r=en(r,n,e),r!==null?r.sibling:null);B(U,U.current&1);break;case 19:if(t=(e&n.childLanes)!==0,r.flags&128){if(t)return pc(r,n,e);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(U,U.current),t)break;return null;case 22:case 23:return n.lanes=0,sc(r,n,e)}return en(r,n,e)}var fc,Qi,mc,gc;fc=function(r,n){for(var e=n.child;e!==null;){if(e.tag===5||e.tag===6)r.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Qi=function(){};mc=function(r,n,e,t){var o=r.memoizedProps;if(o!==t){r=n.stateNode,_n(Yr.current);var i=null;switch(e){case"input":o=pi(r,o),t=pi(r,t),i=[];break;case"select":o=Q({},o,{value:void 0}),t=Q({},t,{value:void 0}),i=[];break;case"textarea":o=gi(r,o),t=gi(r,t),i=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=no)}Ci(e,t);var a;e=null;for(c in o)if(!t.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(a in u)u.hasOwnProperty(a)&&(e||(e={}),e[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ye.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in t){var l=t[c];if(u=o!=null?o[c]:void 0,t.hasOwnProperty(c)&&l!==u&&(l!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(e||(e={}),e[a]="");for(a in l)l.hasOwnProperty(a)&&u[a]!==l[a]&&(e||(e={}),e[a]=l[a])}else e||(i||(i=[]),i.push(c,e)),e=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ye.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&z("scroll",r),i||u===l||(i=[])):(i=i||[]).push(c,l))}e&&(i=i||[]).push("style",e);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};gc=function(r,n,e,t){e!==t&&(n.flags|=4)};function Le(r,n){if(!H)switch(r.tailMode){case"hidden":n=r.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?r.tail=null:e.sibling=null;break;case"collapsed":e=r.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function ir(r){var n=r.alternate!==null&&r.alternate.child===r.child,e=0,t=0;if(n)for(var o=r.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=r,o=o.sibling;else for(o=r.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=r,o=o.sibling;return r.subtreeFlags|=t,r.childLanes=e,n}function $y(r,n,e){var t=n.pendingProps;switch(wa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ir(n),null;case 1:return hr(n.type)&&eo(),ir(n),null;case 3:return t=n.stateNode,he(),I(gr),I(ur),Ra(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(kt(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Or!==null&&(qi(Or),Or=null))),Qi(r,n),ir(n),null;case 5:La(n);var o=_n(it.current);if(e=n.type,r!==null&&n.stateNode!=null)mc(r,n,e,t,o),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(x(166));return ir(n),null}if(r=_n(Yr.current),kt(n)){t=n.stateNode,e=n.type;var i=n.memoizedProps;switch(t[Qr]=n,t[tt]=i,r=(n.mode&1)!==0,e){case"dialog":z("cancel",t),z("close",t);break;case"iframe":case"object":case"embed":z("load",t);break;case"video":case"audio":for(o=0;o<De.length;o++)z(De[o],t);break;case"source":z("error",t);break;case"img":case"image":case"link":z("error",t),z("load",t);break;case"details":z("toggle",t);break;case"input":iu(t,i),z("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},z("invalid",t);break;case"textarea":uu(t,i),z("invalid",t)}Ci(e,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?t.textContent!==u&&(i.suppressHydrationWarning!==!0&&Vt(t.textContent,u,r),o=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Vt(t.textContent,u,r),o=["children",""+u]):Ye.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&z("scroll",t)}switch(e){case"input":Pt(t),au(t,i,!0);break;case"textarea":Pt(t),lu(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=no)}t=o,n.updateQueue=t,t!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=bl(e)),r==="http://www.w3.org/1999/xhtml"?e==="script"?(r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=a.createElement(e,{is:t.is}):(r=a.createElement(e),e==="select"&&(a=r,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):r=a.createElementNS(r,e),r[Qr]=n,r[tt]=t,fc(r,n,!1,!1),n.stateNode=r;r:{switch(a=Pi(e,t),e){case"dialog":z("cancel",r),z("close",r),o=t;break;case"iframe":case"object":case"embed":z("load",r),o=t;break;case"video":case"audio":for(o=0;o<De.length;o++)z(De[o],r);o=t;break;case"source":z("error",r),o=t;break;case"img":case"image":case"link":z("error",r),z("load",r),o=t;break;case"details":z("toggle",r),o=t;break;case"input":iu(r,t),o=pi(r,t),z("invalid",r);break;case"option":o=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},o=Q({},t,{value:void 0}),z("invalid",r);break;case"textarea":uu(r,t),o=gi(r,t),z("invalid",r);break;default:o=t}Ci(e,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var l=u[i];i==="style"?Yl(r,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ql(r,l)):i==="children"?typeof l=="string"?(e!=="textarea"||l!=="")&&$e(r,l):typeof l=="number"&&$e(r,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ye.hasOwnProperty(i)?l!=null&&i==="onScroll"&&z("scroll",r):l!=null&&sa(r,i,l,a))}switch(e){case"input":Pt(r),au(r,t,!1);break;case"textarea":Pt(r),lu(r);break;case"option":t.value!=null&&r.setAttribute("value",""+En(t.value));break;case"select":r.multiple=!!t.multiple,i=t.value,i!=null?ue(r,!!t.multiple,i,!1):t.defaultValue!=null&&ue(r,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(r.onclick=no)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break r;case"img":t=!0;break r;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ir(n),null;case 6:if(r&&n.stateNode!=null)gc(r,n,r.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(x(166));if(e=_n(it.current),_n(Yr.current),kt(n)){if(t=n.stateNode,e=n.memoizedProps,t[Qr]=n,(i=t.nodeValue!==e)&&(r=xr,r!==null))switch(r.tag){case 3:Vt(t.nodeValue,e,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Vt(t.nodeValue,e,(r.mode&1)!==0)}i&&(n.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[Qr]=n,n.stateNode=t}return ir(n),null;case 13:if(I(U),t=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(H&&Sr!==null&&n.mode&1&&!(n.flags&128))_s(),me(),n.flags|=98560,i=!1;else if(i=kt(n),t!==null&&t.dehydrated!==null){if(r===null){if(!i)throw Error(x(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Qr]=n}else me(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ir(n),i=!1}else Or!==null&&(qi(Or),Or=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=e,n):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(r===null||U.current&1?J===0&&(J=3):Qa())),n.updateQueue!==null&&(n.flags|=4),ir(n),null);case 4:return he(),Qi(r,n),r===null&&nt(n.stateNode.containerInfo),ir(n),null;case 10:return ka(n.type._context),ir(n),null;case 17:return hr(n.type)&&eo(),ir(n),null;case 19:if(I(U),i=n.memoizedState,i===null)return ir(n),null;if(t=(n.flags&128)!==0,a=i.rendering,a===null)if(t)Le(i,!1);else{if(J!==0||r!==null&&r.flags&128)for(r=n.child;r!==null;){if(a=so(r),a!==null){for(n.flags|=128,Le(i,!1),t=a.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=e,e=n.child;e!==null;)i=e,r=t,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,r=a.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e=e.sibling;return B(U,U.current&1|2),n.child}r=r.sibling}i.tail!==null&&Y()>Pe&&(n.flags|=128,t=!0,Le(i,!1),n.lanes=4194304)}else{if(!t)if(r=so(a),r!==null){if(n.flags|=128,t=!0,e=r.updateQueue,e!==null&&(n.updateQueue=e,n.flags|=4),Le(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!H)return ir(n),null}else 2*Y()-i.renderingStartTime>Pe&&e!==1073741824&&(n.flags|=128,t=!0,Le(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(e=i.last,e!==null?e.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,e=U.current,B(U,t?e&1|2:e&1),n):(ir(n),null);case 22:case 23:return ba(),t=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?vr&1073741824&&(ir(n),n.subtreeFlags&6&&(n.flags|=8192)):ir(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function Ky(r,n){switch(wa(n),n.tag){case 1:return hr(n.type)&&eo(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return he(),I(gr),I(ur),Ra(),r=n.flags,r&65536&&!(r&128)?(n.flags=r&-65537|128,n):null;case 5:return La(n),null;case 13:if(I(U),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(x(340));me()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return I(U),null;case 4:return he(),null;case 10:return ka(n.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var Tt=!1,ar=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,k=null;function ie(r,n){var e=r.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){W(r,n,t)}else e.current=null}function Wi(r,n,e){try{e()}catch(t){W(r,n,t)}}var Ju=!1;function Jy(r,n){if(Ni=Xt,r=Ss(),xa(r)){if("selectionStart"in r)var e={start:r.selectionStart,end:r.selectionEnd};else r:{e=(e=r.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var o=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break r}var a=0,u=-1,l=-1,c=0,m=0,f=r,g=null;n:for(;;){for(var P;f!==e||o!==0&&f.nodeType!==3||(u=a+o),f!==i||t!==0&&f.nodeType!==3||(l=a+t),f.nodeType===3&&(a+=f.nodeValue.length),(P=f.firstChild)!==null;)g=f,f=P;for(;;){if(f===r)break n;if(g===e&&++c===o&&(u=a),g===i&&++m===t&&(l=a),(P=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=P}e=u===-1||l===-1?null:{start:u,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(Mi={focusedElem:r,selectionRange:e},Xt=!1,k=n;k!==null;)if(n=k,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,k=r;else for(;k!==null;){n=k;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var F=h.memoizedProps,A=h.memoizedState,y=n.stateNode,s=y.getSnapshotBeforeUpdate(n.elementType===n.type?F:_r(n.type,F),A);y.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(C){W(n,n.return,C)}if(r=n.sibling,r!==null){r.return=n.return,k=r;break}k=n.return}return h=Ju,Ju=!1,h}function be(r,n,e){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&r)===r){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wi(n,e,i)}o=o.next}while(o!==t)}}function ko(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var e=n=n.next;do{if((e.tag&r)===r){var t=e.create;e.destroy=t()}e=e.next}while(e!==n)}}function Yi(r){var n=r.ref;if(n!==null){var e=r.stateNode;switch(r.tag){case 5:r=e;break;default:r=e}typeof n=="function"?n(r):n.current=r}}function hc(r){var n=r.alternate;n!==null&&(r.alternate=null,hc(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[Qr],delete n[tt],delete n[Ri],delete n[Ry],delete n[_y])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Cc(r){return r.tag===5||r.tag===3||r.tag===4}function Xu(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||Cc(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue r;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function $i(r,n,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?e.nodeType===8?e.parentNode.insertBefore(r,n):e.insertBefore(r,n):(e.nodeType===8?(n=e.parentNode,n.insertBefore(r,e)):(n=e,n.appendChild(r)),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=no));else if(t!==4&&(r=r.child,r!==null))for($i(r,n,e),r=r.sibling;r!==null;)$i(r,n,e),r=r.sibling}function Ki(r,n,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?e.insertBefore(r,n):e.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(Ki(r,n,e),r=r.sibling;r!==null;)Ki(r,n,e),r=r.sibling}var nr=null,jr=!1;function sn(r,n,e){for(e=e.child;e!==null;)Pc(r,n,e),e=e.sibling}function Pc(r,n,e){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(vo,e)}catch{}switch(e.tag){case 5:ar||ie(e,n);case 6:var t=nr,o=jr;nr=null,sn(r,n,e),nr=t,jr=o,nr!==null&&(jr?(r=nr,e=e.stateNode,r.nodeType===8?r.parentNode.removeChild(e):r.removeChild(e)):nr.removeChild(e.stateNode));break;case 18:nr!==null&&(jr?(r=nr,e=e.stateNode,r.nodeType===8?Xo(r.parentNode,e):r.nodeType===1&&Xo(r,e),Xe(r)):Xo(nr,e.stateNode));break;case 4:t=nr,o=jr,nr=e.stateNode.containerInfo,jr=!0,sn(r,n,e),nr=t,jr=o;break;case 0:case 11:case 14:case 15:if(!ar&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Wi(e,n,a),o=o.next}while(o!==t)}sn(r,n,e);break;case 1:if(!ar&&(ie(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(u){W(e,n,u)}sn(r,n,e);break;case 21:sn(r,n,e);break;case 22:e.mode&1?(ar=(t=ar)||e.memoizedState!==null,sn(r,n,e),ar=t):sn(r,n,e);break;default:sn(r,n,e)}}function qu(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var e=r.stateNode;e===null&&(e=r.stateNode=new Zy),n.forEach(function(t){var o=a1.bind(null,r,t);e.has(t)||(e.add(t),t.then(o,o))})}}function Rr(r,n){var e=n.deletions;if(e!==null)for(var t=0;t<e.length;t++){var o=e[t];try{var i=r,a=n,u=a;r:for(;u!==null;){switch(u.tag){case 5:nr=u.stateNode,jr=!1;break r;case 3:nr=u.stateNode.containerInfo,jr=!0;break r;case 4:nr=u.stateNode.containerInfo,jr=!0;break r}u=u.return}if(nr===null)throw Error(x(160));Pc(i,a,o),nr=null,jr=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){W(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vc(n,r),n=n.sibling}function vc(r,n){var e=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Rr(n,r),Ur(r),t&4){try{be(3,r,r.return),ko(3,r)}catch(F){W(r,r.return,F)}try{be(5,r,r.return)}catch(F){W(r,r.return,F)}}break;case 1:Rr(n,r),Ur(r),t&512&&e!==null&&ie(e,e.return);break;case 5:if(Rr(n,r),Ur(r),t&512&&e!==null&&ie(e,e.return),r.flags&32){var o=r.stateNode;try{$e(o,"")}catch(F){W(r,r.return,F)}}if(t&4&&(o=r.stateNode,o!=null)){var i=r.memoizedProps,a=e!==null?e.memoizedProps:i,u=r.type,l=r.updateQueue;if(r.updateQueue=null,l!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Hl(o,i),Pi(u,a);var c=Pi(u,i);for(a=0;a<l.length;a+=2){var m=l[a],f=l[a+1];m==="style"?Yl(o,f):m==="dangerouslySetInnerHTML"?Ql(o,f):m==="children"?$e(o,f):sa(o,m,f,c)}switch(u){case"input":fi(o,i);break;case"textarea":Ul(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?ue(o,!!i.multiple,P,!1):g!==!!i.multiple&&(i.defaultValue!=null?ue(o,!!i.multiple,i.defaultValue,!0):ue(o,!!i.multiple,i.multiple?[]:"",!1))}o[tt]=i}catch(F){W(r,r.return,F)}}break;case 6:if(Rr(n,r),Ur(r),t&4){if(r.stateNode===null)throw Error(x(162));o=r.stateNode,i=r.memoizedProps;try{o.nodeValue=i}catch(F){W(r,r.return,F)}}break;case 3:if(Rr(n,r),Ur(r),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Xe(n.containerInfo)}catch(F){W(r,r.return,F)}break;case 4:Rr(n,r),Ur(r);break;case 13:Rr(n,r),Ur(r),o=r.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ha=Y())),t&4&&qu(r);break;case 22:if(m=e!==null&&e.memoizedState!==null,r.mode&1?(ar=(c=ar)||m,Rr(n,r),ar=c):Rr(n,r),Ur(r),t&8192){if(c=r.memoizedState!==null,(r.stateNode.isHidden=c)&&!m&&r.mode&1)for(k=r,m=r.child;m!==null;){for(f=k=m;k!==null;){switch(g=k,P=g.child,g.tag){case 0:case 11:case 14:case 15:be(4,g,g.return);break;case 1:ie(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){t=g,e=g.return;try{n=t,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(F){W(t,e,F)}}break;case 5:ie(g,g.return);break;case 22:if(g.memoizedState!==null){nl(f);continue}}P!==null?(P.return=g,k=P):nl(f)}m=m.sibling}r:for(m=null,f=r;;){if(f.tag===5){if(m===null){m=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=Wl("display",a))}catch(F){W(r,r.return,F)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(F){W(r,r.return,F)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===r)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break r;for(;f.sibling===null;){if(f.return===null||f.return===r)break r;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rr(n,r),Ur(r),t&4&&qu(r);break;case 21:break;default:Rr(n,r),Ur(r)}}function Ur(r){var n=r.flags;if(n&2){try{r:{for(var e=r.return;e!==null;){if(Cc(e)){var t=e;break r}e=e.return}throw Error(x(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&($e(o,""),t.flags&=-33);var i=Xu(r);Ki(r,i,o);break;case 3:case 4:var a=t.stateNode.containerInfo,u=Xu(r);$i(r,u,a);break;default:throw Error(x(161))}}catch(l){W(r,r.return,l)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function Xy(r,n,e){k=r,Sc(r)}function Sc(r,n,e){for(var t=(r.mode&1)!==0;k!==null;){var o=k,i=o.child;if(o.tag===22&&t){var a=o.memoizedState!==null||Tt;if(!a){var u=o.alternate,l=u!==null&&u.memoizedState!==null||ar;u=Tt;var c=ar;if(Tt=a,(ar=l)&&!c)for(k=o;k!==null;)a=k,l=a.child,a.tag===22&&a.memoizedState!==null?el(o):l!==null?(l.return=a,k=l):el(o);for(;i!==null;)k=i,Sc(i),i=i.sibling;k=o,Tt=u,ar=c}rl(r)}else o.subtreeFlags&8772&&i!==null?(i.return=o,k=i):rl(r)}}function rl(r){for(;k!==null;){var n=k;if(n.flags&8772){var e=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ar||ko(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!ar)if(e===null)t.componentDidMount();else{var o=n.elementType===n.type?e.memoizedProps:_r(n.type,e.memoizedProps);t.componentDidUpdate(o,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Bu(n,i,t);break;case 3:var a=n.updateQueue;if(a!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Bu(n,a,e)}break;case 5:var u=n.stateNode;if(e===null&&n.flags&4){e=u;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break;case"img":l.src&&(e.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Xe(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ar||n.flags&512&&Yi(n)}catch(g){W(n,n.return,g)}}if(n===r){k=null;break}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}}function nl(r){for(;k!==null;){var n=k;if(n===r){k=null;break}var e=n.sibling;if(e!==null){e.return=n.return,k=e;break}k=n.return}}function el(r){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var e=n.return;try{ko(4,n)}catch(l){W(n,e,l)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var o=n.return;try{t.componentDidMount()}catch(l){W(n,o,l)}}var i=n.return;try{Yi(n)}catch(l){W(n,i,l)}break;case 5:var a=n.return;try{Yi(n)}catch(l){W(n,a,l)}}}catch(l){W(n,n.return,l)}if(n===r){k=null;break}var u=n.sibling;if(u!==null){u.return=n.return,k=u;break}k=n.return}}var qy=Math.ceil,po=tn.ReactCurrentDispatcher,Ia=tn.ReactCurrentOwner,Mr=tn.ReactCurrentBatchConfig,j=0,q=null,K=null,er=0,vr=0,ae=kn(0),J=0,st=null,In=0,No=0,Ga=0,Qe=null,pr=null,Ha=0,Pe=1/0,$r=null,fo=!1,Zi=null,xn=null,Lt=!1,mn=null,mo=0,We=0,Ji=null,bt=-1,Qt=0;function sr(){return j&6?Y():bt!==-1?bt:bt=Y()}function Fn(r){return r.mode&1?j&2&&er!==0?er&-er:Oy.transition!==null?(Qt===0&&(Qt=is()),Qt):(r=D,r!==0||(r=window.event,r=r===void 0?16:ys(r.type)),r):1}function Br(r,n,e,t){if(50<We)throw We=0,Ji=null,Error(x(185));dt(r,e,t),(!(j&2)||r!==q)&&(r===q&&(!(j&2)&&(No|=e),J===4&&pn(r,er)),Cr(r,t),e===1&&j===0&&!(n.mode&1)&&(Pe=Y()+500,Eo&&Nn()))}function Cr(r,n){var e=r.callbackNode;Od(r,n);var t=Jt(r,r===q?er:0);if(t===0)e!==null&&du(e),r.callbackNode=null,r.callbackPriority=0;else if(n=t&-t,r.callbackPriority!==n){if(e!=null&&du(e),n===1)r.tag===0?jy(tl.bind(null,r)):Ts(tl.bind(null,r)),Ty(function(){!(j&6)&&Nn()}),e=null;else{switch(as(t)){case 1:e=fa;break;case 4:e=ts;break;case 16:e=Zt;break;case 536870912:e=os;break;default:e=Zt}e=Nc(e,xc.bind(null,r))}r.callbackPriority=n,r.callbackNode=e}}function xc(r,n){if(bt=-1,Qt=0,j&6)throw Error(x(327));var e=r.callbackNode;if(ye()&&r.callbackNode!==e)return null;var t=Jt(r,r===q?er:0);if(t===0)return null;if(t&30||t&r.expiredLanes||n)n=go(r,t);else{n=t;var o=j;j|=2;var i=wc();(q!==r||er!==n)&&($r=null,Pe=Y()+500,jn(r,n));do try{e1();break}catch(u){Fc(r,u)}while(!0);Va(),po.current=i,j=o,K!==null?n=0:(q=null,er=0,n=J)}if(n!==0){if(n===2&&(o=wi(r),o!==0&&(t=o,n=Xi(r,o))),n===1)throw e=st,jn(r,0),pn(r,t),Cr(r,Y()),e;if(n===6)pn(r,t);else{if(o=r.current.alternate,!(t&30)&&!r1(o)&&(n=go(r,t),n===2&&(i=wi(r),i!==0&&(t=i,n=Xi(r,i))),n===1))throw e=st,jn(r,0),pn(r,t),Cr(r,Y()),e;switch(r.finishedWork=o,r.finishedLanes=t,n){case 0:case 1:throw Error(x(345));case 2:Tn(r,pr,$r);break;case 3:if(pn(r,t),(t&130023424)===t&&(n=Ha+500-Y(),10<n)){if(Jt(r,0)!==0)break;if(o=r.suspendedLanes,(o&t)!==t){sr(),r.pingedLanes|=r.suspendedLanes&o;break}r.timeoutHandle=Li(Tn.bind(null,r,pr,$r),n);break}Tn(r,pr,$r);break;case 4:if(pn(r,t),(t&4194240)===t)break;for(n=r.eventTimes,o=-1;0<t;){var a=31-Dr(t);i=1<<a,a=n[a],a>o&&(o=a),t&=~i}if(t=o,t=Y()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*qy(t/1960))-t,10<t){r.timeoutHandle=Li(Tn.bind(null,r,pr,$r),t);break}Tn(r,pr,$r);break;case 5:Tn(r,pr,$r);break;default:throw Error(x(329))}}}return Cr(r,Y()),r.callbackNode===e?xc.bind(null,r):null}function Xi(r,n){var e=Qe;return r.current.memoizedState.isDehydrated&&(jn(r,n).flags|=256),r=go(r,n),r!==2&&(n=pr,pr=e,n!==null&&qi(n)),r}function qi(r){pr===null?pr=r:pr.push.apply(pr,r)}function r1(r){for(var n=r;;){if(n.flags&16384){var e=n.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var o=e[t],i=o.getSnapshot;o=o.value;try{if(!zr(i(),o))return!1}catch{return!1}}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(r,n){for(n&=~Ga,n&=~No,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var e=31-Dr(n),t=1<<e;r[e]=-1,n&=~t}}function tl(r){if(j&6)throw Error(x(327));ye();var n=Jt(r,0);if(!(n&1))return Cr(r,Y()),null;var e=go(r,n);if(r.tag!==0&&e===2){var t=wi(r);t!==0&&(n=t,e=Xi(r,t))}if(e===1)throw e=st,jn(r,0),pn(r,n),Cr(r,Y()),e;if(e===6)throw Error(x(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,Tn(r,pr,$r),Cr(r,Y()),null}function Ua(r,n){var e=j;j|=1;try{return r(n)}finally{j=e,j===0&&(Pe=Y()+500,Eo&&Nn())}}function Gn(r){mn!==null&&mn.tag===0&&!(j&6)&&ye();var n=j;j|=1;var e=Mr.transition,t=D;try{if(Mr.transition=null,D=1,r)return r()}finally{D=t,Mr.transition=e,j=n,!(j&6)&&Nn()}}function ba(){vr=ae.current,I(ae)}function jn(r,n){r.finishedWork=null,r.finishedLanes=0;var e=r.timeoutHandle;if(e!==-1&&(r.timeoutHandle=-1,My(e)),K!==null)for(e=K.return;e!==null;){var t=e;switch(wa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&eo();break;case 3:he(),I(gr),I(ur),Ra();break;case 5:La(t);break;case 4:he();break;case 13:I(U);break;case 19:I(U);break;case 10:ka(t.type._context);break;case 22:case 23:ba()}e=e.return}if(q=r,K=r=wn(r.current,null),er=vr=n,J=0,st=null,Ga=No=In=0,pr=Qe=null,Rn!==null){for(n=0;n<Rn.length;n++)if(e=Rn[n],t=e.interleaved,t!==null){e.interleaved=null;var o=t.next,i=e.pending;if(i!==null){var a=i.next;i.next=o,t.next=a}e.pending=t}Rn=null}return r}function Fc(r,n){do{var e=K;try{if(Va(),Gt.current=yo,co){for(var t=b.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}co=!1}if(zn=0,X=Z=b=null,Ue=!1,at=0,Ia.current=null,e===null||e.return===null){J=1,st=n,K=null;break}r:{var i=r,a=e.return,u=e,l=n;if(n=er,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=u,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var P=bu(a);if(P!==null){P.flags&=-257,Qu(P,a,u,i,n),P.mode&1&&Uu(i,c,n),n=P,l=c;var h=n.updateQueue;if(h===null){var F=new Set;F.add(l),n.updateQueue=F}else h.add(l);break r}else{if(!(n&1)){Uu(i,c,n),Qa();break r}l=Error(x(426))}}else if(H&&u.mode&1){var A=bu(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Qu(A,a,u,i,n),Ea(Ce(l,u));break r}}i=l=Ce(l,u),J!==4&&(J=2),Qe===null?Qe=[i]:Qe.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var y=ac(i,l,n);Du(i,y);break r;case 1:u=l;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xn===null||!xn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var C=uc(i,u,n);Du(i,C);break r}}i=i.return}while(i!==null)}Ac(e)}catch(w){n=w,K===e&&e!==null&&(K=e=e.return);continue}break}while(!0)}function wc(){var r=po.current;return po.current=yo,r===null?yo:r}function Qa(){(J===0||J===3||J===2)&&(J=4),q===null||!(In&268435455)&&!(No&268435455)||pn(q,er)}function go(r,n){var e=j;j|=2;var t=wc();(q!==r||er!==n)&&($r=null,jn(r,n));do try{n1();break}catch(o){Fc(r,o)}while(!0);if(Va(),j=e,po.current=t,K!==null)throw Error(x(261));return q=null,er=0,J}function n1(){for(;K!==null;)Ec(K)}function e1(){for(;K!==null&&!Vd();)Ec(K)}function Ec(r){var n=kc(r.alternate,r,vr);r.memoizedProps=r.pendingProps,n===null?Ac(r):K=n,Ia.current=null}function Ac(r){var n=r;do{var e=n.alternate;if(r=n.return,n.flags&32768){if(e=Ky(e,n),e!==null){e.flags&=32767,K=e;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{J=6,K=null;return}}else if(e=$y(e,n,vr),e!==null){K=e;return}if(n=n.sibling,n!==null){K=n;return}K=n=r}while(n!==null);J===0&&(J=5)}function Tn(r,n,e){var t=D,o=Mr.transition;try{Mr.transition=null,D=1,t1(r,n,e,t)}finally{Mr.transition=o,D=t}return null}function t1(r,n,e,t){do ye();while(mn!==null);if(j&6)throw Error(x(327));e=r.finishedWork;var o=r.finishedLanes;if(e===null)return null;if(r.finishedWork=null,r.finishedLanes=0,e===r.current)throw Error(x(177));r.callbackNode=null,r.callbackPriority=0;var i=e.lanes|e.childLanes;if(Dd(r,i),r===q&&(K=q=null,er=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||Lt||(Lt=!0,Nc(Zt,function(){return ye(),null})),i=(e.flags&15990)!==0,e.subtreeFlags&15990||i){i=Mr.transition,Mr.transition=null;var a=D;D=1;var u=j;j|=4,Ia.current=null,Jy(r,e),vc(e,r),Fy(Mi),Xt=!!Ni,Mi=Ni=null,r.current=e,Xy(e),kd(),j=u,D=a,Mr.transition=i}else r.current=e;if(Lt&&(Lt=!1,mn=r,mo=o),i=r.pendingLanes,i===0&&(xn=null),Td(e.stateNode),Cr(r,Y()),n!==null)for(t=r.onRecoverableError,e=0;e<n.length;e++)o=n[e],t(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,r=Zi,Zi=null,r;return mo&1&&r.tag!==0&&ye(),i=r.pendingLanes,i&1?r===Ji?We++:(We=0,Ji=r):We=0,Nn(),null}function ye(){if(mn!==null){var r=as(mo),n=Mr.transition,e=D;try{if(Mr.transition=null,D=16>r?16:r,mn===null)var t=!1;else{if(r=mn,mn=null,mo=0,j&6)throw Error(x(331));var o=j;for(j|=4,k=r.current;k!==null;){var i=k,a=i.child;if(k.flags&16){var u=i.deletions;if(u!==null){for(var l=0;l<u.length;l++){var c=u[l];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:be(8,m,i)}var f=m.child;if(f!==null)f.return=m,k=f;else for(;k!==null;){m=k;var g=m.sibling,P=m.return;if(hc(m),m===c){k=null;break}if(g!==null){g.return=P,k=g;break}k=P}}}var h=i.alternate;if(h!==null){var F=h.child;if(F!==null){h.child=null;do{var A=F.sibling;F.sibling=null,F=A}while(F!==null)}}k=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,k=a;else r:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:be(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,k=y;break r}k=i.return}}var s=r.current;for(k=s;k!==null;){a=k;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,k=p;else r:for(a=s;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ko(9,u)}}catch(w){W(u,u.return,w)}if(u===a){k=null;break r}var C=u.sibling;if(C!==null){C.return=u.return,k=C;break r}k=u.return}}if(j=o,Nn(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot(vo,r)}catch{}t=!0}return t}finally{D=e,Mr.transition=n}}return!1}function ol(r,n,e){n=Ce(e,n),n=ac(r,n,1),r=Sn(r,n,1),n=sr(),r!==null&&(dt(r,1,n),Cr(r,n))}function W(r,n,e){if(r.tag===3)ol(r,r,e);else for(;n!==null;){if(n.tag===3){ol(n,r,e);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(xn===null||!xn.has(t))){r=Ce(e,r),r=uc(n,r,1),n=Sn(n,r,1),r=sr(),n!==null&&(dt(n,1,r),Cr(n,r));break}}n=n.return}}function o1(r,n,e){var t=r.pingCache;t!==null&&t.delete(n),n=sr(),r.pingedLanes|=r.suspendedLanes&e,q===r&&(er&e)===e&&(J===4||J===3&&(er&130023424)===er&&500>Y()-Ha?jn(r,0):Ga|=e),Cr(r,n)}function Vc(r,n){n===0&&(r.mode&1?(n=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):n=1);var e=sr();r=nn(r,n),r!==null&&(dt(r,n,e),Cr(r,e))}function i1(r){var n=r.memoizedState,e=0;n!==null&&(e=n.retryLane),Vc(r,e)}function a1(r,n){var e=0;switch(r.tag){case 13:var t=r.stateNode,o=r.memoizedState;o!==null&&(e=o.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(x(314))}t!==null&&t.delete(n),Vc(r,e)}var kc;kc=function(r,n,e){if(r!==null)if(r.memoizedProps!==n.pendingProps||gr.current)mr=!0;else{if(!(r.lanes&e)&&!(n.flags&128))return mr=!1,Yy(r,n,e);mr=!!(r.flags&131072)}else mr=!1,H&&n.flags&1048576&&Ls(n,io,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Ut(r,n),r=n.pendingProps;var o=fe(n,ur.current);de(n,e),o=ja(null,n,t,r,o,e);var i=Oa();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,hr(t)?(i=!0,to(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ma(n),o.updater=Vo,n.stateNode=o,o._reactInternals=n,zi(n,t,r,e),n=Hi(null,n,t,!0,i,e)):(n.tag=0,H&&i&&Fa(n),lr(null,n,o,e),n=n.child),n;case 16:t=n.elementType;r:{switch(Ut(r,n),r=n.pendingProps,o=t._init,t=o(t._payload),n.type=t,o=n.tag=l1(t),r=_r(t,r),o){case 0:n=Gi(null,n,t,r,e);break r;case 1:n=$u(null,n,t,r,e);break r;case 11:n=Wu(null,n,t,r,e);break r;case 14:n=Yu(null,n,t,_r(t.type,r),e);break r}throw Error(x(306,t,""))}return n;case 0:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:_r(t,o),Gi(r,n,t,o,e);case 1:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:_r(t,o),$u(r,n,t,o,e);case 3:r:{if(dc(n),r===null)throw Error(x(387));t=n.pendingProps,i=n.memoizedState,o=i.element,Bs(r,n),lo(n,t,null,e);var a=n.memoizedState;if(t=a.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Ce(Error(x(423)),n),n=Ku(r,n,t,e,o);break r}else if(t!==o){o=Ce(Error(x(424)),n),n=Ku(r,n,t,e,o);break r}else for(Sr=vn(n.stateNode.containerInfo.firstChild),xr=n,H=!0,Or=null,e=Os(n,null,t,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(me(),t===o){n=en(r,n,e);break r}lr(r,n,t,e)}n=n.child}return n;case 5:return zs(n),r===null&&Oi(n),t=n.type,o=n.pendingProps,i=r!==null?r.memoizedProps:null,a=o.children,Ti(t,o)?a=null:i!==null&&Ti(t,i)&&(n.flags|=32),cc(r,n),lr(r,n,a,e),n.child;case 6:return r===null&&Oi(n),null;case 13:return yc(r,n,e);case 4:return Ta(n,n.stateNode.containerInfo),t=n.pendingProps,r===null?n.child=ge(n,null,t,e):lr(r,n,t,e),n.child;case 11:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:_r(t,o),Wu(r,n,t,o,e);case 7:return lr(r,n,n.pendingProps,e),n.child;case 8:return lr(r,n,n.pendingProps.children,e),n.child;case 12:return lr(r,n,n.pendingProps.children,e),n.child;case 10:r:{if(t=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,B(ao,t._currentValue),t._currentValue=a,i!==null)if(zr(i.value,a)){if(i.children===o.children&&!gr.current){n=en(r,n,e);break r}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var l=u.firstContext;l!==null;){if(l.context===t){if(i.tag===1){l=Xr(-1,e&-e),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}i.lanes|=e,l=i.alternate,l!==null&&(l.lanes|=e),Di(i.return,e,n),u.lanes|=e;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(x(341));a.lanes|=e,u=a.alternate,u!==null&&(u.lanes|=e),Di(a,e,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}lr(r,n,o.children,e),n=n.child}return n;case 9:return o=n.type,t=n.pendingProps.children,de(n,e),o=Tr(o),t=t(o),n.flags|=1,lr(r,n,t,e),n.child;case 14:return t=n.type,o=_r(t,n.pendingProps),o=_r(t.type,o),Yu(r,n,t,o,e);case 15:return lc(r,n,n.type,n.pendingProps,e);case 17:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:_r(t,o),Ut(r,n),n.tag=1,hr(t)?(r=!0,to(n)):r=!1,de(n,e),ic(n,t,o),zi(n,t,o,e),Hi(null,n,t,!0,r,e);case 19:return pc(r,n,e);case 22:return sc(r,n,e)}throw Error(x(156,n.tag))};function Nc(r,n){return es(r,n)}function u1(r,n,e,t){this.tag=r,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(r,n,e,t){return new u1(r,n,e,t)}function Wa(r){return r=r.prototype,!(!r||!r.isReactComponent)}function l1(r){if(typeof r=="function")return Wa(r)?1:0;if(r!=null){if(r=r.$$typeof,r===da)return 11;if(r===ya)return 14}return 2}function wn(r,n){var e=r.alternate;return e===null?(e=Nr(r.tag,n,r.key,r.mode),e.elementType=r.elementType,e.type=r.type,e.stateNode=r.stateNode,e.alternate=r,r.alternate=e):(e.pendingProps=n,e.type=r.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=r.flags&14680064,e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=r.sibling,e.index=r.index,e.ref=r.ref,e}function Wt(r,n,e,t,o,i){var a=2;if(t=r,typeof r=="function")Wa(r)&&(a=1);else if(typeof r=="string")a=5;else r:switch(r){case Zn:return On(e.children,o,i,n);case ca:a=8,o|=8;break;case si:return r=Nr(12,e,n,o|2),r.elementType=si,r.lanes=i,r;case ci:return r=Nr(13,e,n,o),r.elementType=ci,r.lanes=i,r;case di:return r=Nr(19,e,n,o),r.elementType=di,r.lanes=i,r;case zl:return Mo(e,o,i,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Dl:a=10;break r;case Bl:a=9;break r;case da:a=11;break r;case ya:a=14;break r;case cn:a=16,t=null;break r}throw Error(x(130,r==null?r:typeof r,""))}return n=Nr(a,e,n,o),n.elementType=r,n.type=t,n.lanes=i,n}function On(r,n,e,t){return r=Nr(7,r,t,n),r.lanes=e,r}function Mo(r,n,e,t){return r=Nr(22,r,t,n),r.elementType=zl,r.lanes=e,r.stateNode={isHidden:!1},r}function ai(r,n,e){return r=Nr(6,r,null,n),r.lanes=e,r}function ui(r,n,e){return n=Nr(4,r.children!==null?r.children:[],r.key,n),n.lanes=e,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function s1(r,n,e,t,o){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ya(r,n,e,t,o,i,a,u,l){return r=new s1(r,n,e,u,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Nr(3,null,null,n),r.current=i,i.stateNode=r,i.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(i),r}function c1(r,n,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:t==null?null:""+t,children:r,containerInfo:n,implementation:e}}function Mc(r){if(!r)return An;r=r._reactInternals;r:{if(Un(r)!==r||r.tag!==1)throw Error(x(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break r;case 1:if(hr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break r}}n=n.return}while(n!==null);throw Error(x(171))}if(r.tag===1){var e=r.type;if(hr(e))return Ms(r,e,n)}return n}function Tc(r,n,e,t,o,i,a,u,l){return r=Ya(e,t,!0,r,o,i,a,u,l),r.context=Mc(null),e=r.current,t=sr(),o=Fn(e),i=Xr(t,o),i.callback=n??null,Sn(e,i,o),r.current.lanes=o,dt(r,o,t),Cr(r,t),r}function To(r,n,e,t){var o=n.current,i=sr(),a=Fn(o);return e=Mc(e),n.context===null?n.context=e:n.pendingContext=e,n=Xr(i,a),n.payload={element:r},t=t===void 0?null:t,t!==null&&(n.callback=t),r=Sn(o,n,a),r!==null&&(Br(r,o,a,i),It(r,o,a)),a}function ho(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function il(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var e=r.retryLane;r.retryLane=e!==0&&e<n?e:n}}function $a(r,n){il(r,n),(r=r.alternate)&&il(r,n)}function d1(){return null}var Lc=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ka(r){this._internalRoot=r}Lo.prototype.render=Ka.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(x(409));To(r,n,null,null)};Lo.prototype.unmount=Ka.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;Gn(function(){To(null,r,null,null)}),n[rn]=null}};function Lo(r){this._internalRoot=r}Lo.prototype.unstable_scheduleHydration=function(r){if(r){var n=ss();r={blockedOn:null,target:r,priority:n};for(var e=0;e<yn.length&&n!==0&&n<yn[e].priority;e++);yn.splice(e,0,r),e===0&&ds(r)}};function Za(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ro(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function al(){}function y1(r,n,e,t,o){if(o){if(typeof t=="function"){var i=t;t=function(){var c=ho(a);i.call(c)}}var a=Tc(n,t,r,0,null,!1,!1,"",al);return r._reactRootContainer=a,r[rn]=a.current,nt(r.nodeType===8?r.parentNode:r),Gn(),a}for(;o=r.lastChild;)r.removeChild(o);if(typeof t=="function"){var u=t;t=function(){var c=ho(l);u.call(c)}}var l=Ya(r,0,!1,null,null,!1,!1,"",al);return r._reactRootContainer=l,r[rn]=l.current,nt(r.nodeType===8?r.parentNode:r),Gn(function(){To(n,l,e,t)}),l}function _o(r,n,e,t,o){var i=e._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var u=o;o=function(){var l=ho(a);u.call(l)}}To(n,a,r,o)}else a=y1(e,n,r,o,t);return ho(a)}us=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var e=Oe(n.pendingLanes);e!==0&&(ma(n,e|1),Cr(n,Y()),!(j&6)&&(Pe=Y()+500,Nn()))}break;case 13:Gn(function(){var t=nn(r,1);if(t!==null){var o=sr();Br(t,r,1,o)}}),$a(r,1)}};ga=function(r){if(r.tag===13){var n=nn(r,134217728);if(n!==null){var e=sr();Br(n,r,134217728,e)}$a(r,134217728)}};ls=function(r){if(r.tag===13){var n=Fn(r),e=nn(r,n);if(e!==null){var t=sr();Br(e,r,n,t)}$a(r,n)}};ss=function(){return D};cs=function(r,n){var e=D;try{return D=r,n()}finally{D=e}};Si=function(r,n,e){switch(n){case"input":if(fi(r,e),n=e.name,e.type==="radio"&&n!=null){for(e=r;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<e.length;n++){var t=e[n];if(t!==r&&t.form===r.form){var o=wo(t);if(!o)throw Error(x(90));Gl(t),fi(t,o)}}}break;case"textarea":Ul(r,e);break;case"select":n=e.value,n!=null&&ue(r,!!e.multiple,n,!1)}};Zl=Ua;Jl=Gn;var p1={usingClientEntryPoint:!1,Events:[pt,re,wo,$l,Kl,Ua]},Re={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f1={bundleType:Re.bundleType,version:Re.version,rendererPackageName:Re.rendererPackageName,rendererConfig:Re.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=rs(r),r===null?null:r.stateNode},findFiberByHostInstance:Re.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rt.isDisabled&&Rt.supportsFiber)try{vo=Rt.inject(f1),Wr=Rt}catch{}}wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;wr.createPortal=function(r,n){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(n))throw Error(x(200));return c1(r,n,null,e)};wr.createRoot=function(r,n){if(!Za(r))throw Error(x(299));var e=!1,t="",o=Lc;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ya(r,1,!1,null,null,e,!1,t,o),r[rn]=n.current,nt(r.nodeType===8?r.parentNode:r),new Ka(n)};wr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(x(188)):(r=Object.keys(r).join(","),Error(x(268,r)));return r=rs(n),r=r===null?null:r.stateNode,r};wr.flushSync=function(r){return Gn(r)};wr.hydrate=function(r,n,e){if(!Ro(n))throw Error(x(200));return _o(null,r,n,!0,e)};wr.hydrateRoot=function(r,n,e){if(!Za(r))throw Error(x(405));var t=e!=null&&e.hydratedSources||null,o=!1,i="",a=Lc;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),n=Tc(n,null,r,1,e??null,o,!1,i,a),r[rn]=n.current,nt(r),t)for(r=0;r<t.length;r++)e=t[r],o=e._getVersion,o=o(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,o]:n.mutableSourceEagerHydrationData.push(e,o);return new Lo(n)};wr.render=function(r,n,e){if(!Ro(n))throw Error(x(200));return _o(null,r,n,!1,e)};wr.unmountComponentAtNode=function(r){if(!Ro(r))throw Error(x(40));return r._reactRootContainer?(Gn(function(){_o(null,null,r,!1,function(){r._reactRootContainer=null,r[rn]=null})}),!0):!1};wr.unstable_batchedUpdates=Ua;wr.unstable_renderSubtreeIntoContainer=function(r,n,e,t){if(!Ro(e))throw Error(x(200));if(r==null||r._reactInternals===void 0)throw Error(x(38));return _o(r,n,e,!1,t)};wr.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(r){console.error(r)}}Rc(),Rl.exports=wr;var Ja=Rl.exports,_c,ul=Ja;_c=ul.createRoot,ul.hydrateRoot;const m1="modulepreload",g1=function(r){return"/"+r},ll={},h1=function(n,e,t){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(l=>{if(l=g1(l),l in ll)return;ll[l]=!0;const c=l.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":m1,c||(f.as="script"),f.crossOrigin="",f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),c)return new Promise((g,P)=>{f.addEventListener("load",g),f.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return o.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return n().catch(i)})},C1=S.createContext(null);function P1(r,n){const e=Array.isArray(r)?r[0]:r?r.x:0,t=Array.isArray(r)?r[1]:r?r.y:0,o=Array.isArray(n)?n[0]:n?n.x:0,i=Array.isArray(n)?n[1]:n?n.y:0;return e===o&&t===i}function fr(r,n){if(r===n)return!0;if(!r||!n)return!1;if(Array.isArray(r)){if(!Array.isArray(n)||r.length!==n.length)return!1;for(let e=0;e<r.length;e++)if(!fr(r[e],n[e]))return!1;return!0}else if(Array.isArray(n))return!1;if(typeof r=="object"&&typeof n=="object"){const e=Object.keys(r),t=Object.keys(n);if(e.length!==t.length)return!1;for(const o of e)if(!n.hasOwnProperty(o)||!fr(r[o],n[o]))return!1;return!0}return!1}function sl(r){return{longitude:r.center.lng,latitude:r.center.lat,zoom:r.zoom,pitch:r.pitch,bearing:r.bearing,padding:r.padding}}function cl(r,n){const e=n.viewState||n,t={};if("longitude"in e&&"latitude"in e&&(e.longitude!==r.center.lng||e.latitude!==r.center.lat)){const o=r.center.constructor;t.center=new o(e.longitude,e.latitude)}return"zoom"in e&&e.zoom!==r.zoom&&(t.zoom=e.zoom),"bearing"in e&&e.bearing!==r.bearing&&(t.bearing=e.bearing),"pitch"in e&&e.pitch!==r.pitch&&(t.pitch=e.pitch),e.padding&&r.padding&&!fr(e.padding,r.padding)&&(t.padding=e.padding),t}const v1=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function dl(r){if(!r)return null;if(typeof r=="string"||("toJS"in r&&(r=r.toJS()),!r.layers))return r;const n={};for(const t of r.layers)n[t.id]=t;const e=r.layers.map(t=>{let o=null;"interactive"in t&&(o=Object.assign({},t),delete o.interactive);const i=n[t.ref];if(i){o=o||Object.assign({},t),delete o.ref;for(const a of v1)a in i&&(o[a]=i[a])}return o||t});return{...r,layers:e}}const yl={version:8,sources:{},layers:[]},pl={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},fl={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},ml={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},S1=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],x1=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class ve{constructor(n,e,t){this._map=null,this._internalUpdate=!1,this._hoveredFeatures=null,this._propsedCameraUpdate=null,this._styleComponents={},this._onEvent=o=>{const i=this.props[ml[o.type]];i?i(o):o.type==="error"&&console.error(o.error)},this._onCameraEvent=o=>{if(this._internalUpdate)return;o.viewState=this._propsedCameraUpdate||sl(this._map.transform);const i=this.props[fl[o.type]];i&&i(o)},this._onCameraUpdate=o=>this._internalUpdate?o:(this._propsedCameraUpdate=sl(o),cl(o,this.props)),this._onPointerEvent=o=>{(o.type==="mousemove"||o.type==="mouseout")&&this._updateHover(o);const i=this.props[pl[o.type]];i&&(this.props.interactiveLayerIds&&o.type!=="mouseover"&&o.type!=="mouseout"&&(o.features=this._hoveredFeatures||this._queryRenderedFeatures(o.point)),i(o),delete o.features)},this._MapClass=n,this.props=e,this._initialize(t)}get map(){return this._map}setProps(n){const e=this.props;this.props=n;const t=this._updateSettings(n,e),o=this._updateSize(n),i=this._updateViewState(n);this._updateStyle(n,e),this._updateStyleComponents(n),this._updateHandlers(n,e),(t||o||i&&!this._map.isMoving())&&this.redraw()}static reuse(n,e){const t=ve.savedMaps.pop();if(!t)return null;const o=t.map,i=o.getContainer();for(e.className=i.className;i.childNodes.length>0;)e.appendChild(i.childNodes[0]);o._container=e;const a=o._resizeObserver;a&&(a.disconnect(),a.observe(e)),t.setProps({...n,styleDiffing:!1}),o.resize();const{initialViewState:u}=n;return u&&(u.bounds?o.fitBounds(u.bounds,{...u.fitBoundsOptions,duration:0}):t._updateViewState(u)),o.isStyleLoaded()?o.fire("load"):o.once("style.load",()=>o.fire("load")),o._update(),t}_initialize(n){const{props:e}=this,{mapStyle:t=yl}=e,o={...e,...e.initialViewState,container:n,style:dl(t)},i=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),e.gl){const u=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=u,e.gl)}const a=new this._MapClass(o);i.padding&&a.setPadding(i.padding),e.cursor&&(a.getCanvas().style.cursor=e.cursor),a.transformCameraUpdate=this._onCameraUpdate,a.on("style.load",()=>{var u;this._styleComponents={light:a.getLight(),sky:a.getSky(),projection:(u=a.getProjection)==null?void 0:u.call(a),terrain:a.getTerrain()},this._updateStyleComponents(this.props)}),a.on("sourcedata",()=>{this._updateStyleComponents(this.props)});for(const u in pl)a.on(u,this._onPointerEvent);for(const u in fl)a.on(u,this._onCameraEvent);for(const u in ml)a.on(u,this._onEvent);this._map=a}recycle(){const e=this.map.getContainer().querySelector("[mapboxgl-children]");e==null||e.remove(),ve.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const n=this._map;n.style&&(n._frame&&(n._frame.cancel(),n._frame=null),n._render())}_updateSize(n){const{viewState:e}=n;if(e){const t=this._map;if(e.width!==t.transform.width||e.height!==t.transform.height)return t.resize(),!0}return!1}_updateViewState(n){const e=this._map,t=e.transform;if(!e.isMoving()){const i=cl(t,n);if(Object.keys(i).length>0)return this._internalUpdate=!0,e.jumpTo(i),this._internalUpdate=!1,!0}return!1}_updateSettings(n,e){const t=this._map;let o=!1;for(const i of S1)if(i in n&&!fr(n[i],e[i])){o=!0;const a=t[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(t,n[i])}return o}_updateStyle(n,e){if(n.cursor!==e.cursor&&(this._map.getCanvas().style.cursor=n.cursor||""),n.mapStyle!==e.mapStyle){const{mapStyle:t=yl,styleDiffing:o=!0}=n,i={diff:o};"localIdeographFontFamily"in n&&(i.localIdeographFontFamily=n.localIdeographFontFamily),this._map.setStyle(dl(t),i)}}_updateStyleComponents({light:n,projection:e,sky:t,terrain:o}){var u,l;const i=this._map,a=this._styleComponents;i.style._loaded&&(n&&!fr(n,a.light)&&(a.light=n,i.setLight(n)),e&&!fr(e,a.projection)&&e!==((u=a.projection)==null?void 0:u.type)&&(a.projection=typeof e=="string"?{type:e}:e,(l=i.setProjection)==null||l.call(i,a.projection)),t&&!fr(t,a.sky)&&(a.sky=t,i.setSky(t)),o!==void 0&&!fr(o,a.terrain)&&(!o||i.getSource(o.source))&&(a.terrain=o,i.setTerrain(o)))}_updateHandlers(n,e){const t=this._map;for(const o of x1){const i=n[o]??!0,a=e[o]??!0;fr(i,a)||(i?t[o].enable(i):t[o].disable())}}_queryRenderedFeatures(n){const e=this._map,{interactiveLayerIds:t=[]}=this.props;try{return e.queryRenderedFeatures(n,{layers:t.filter(e.getLayer.bind(e))})}catch{return[]}}_updateHover(n){var o;const{props:e}=this;if(e.interactiveLayerIds&&(e.onMouseMove||e.onMouseEnter||e.onMouseLeave)){const i=n.type,a=((o=this._hoveredFeatures)==null?void 0:o.length)>0,u=this._queryRenderedFeatures(n.point),l=u.length>0;!l&&a&&(n.type="mouseleave",this._onPointerEvent(n)),this._hoveredFeatures=u,l&&!a&&(n.type="mouseenter",this._onPointerEvent(n)),n.type=i}else this._hoveredFeatures=null}}ve.savedMaps=[];const F1=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function w1(r){if(!r)return null;const n=r.map,e={getMap:()=>n};for(const t of E1(n))!(t in e)&&!F1.includes(t)&&(e[t]=n[t].bind(n));return e}function E1(r){const n=new Set;let e=r;for(;e;){for(const t of Object.getOwnPropertyNames(e))t[0]!=="_"&&typeof r[t]=="function"&&t!=="fire"&&t!=="setEventedParent"&&n.add(t);e=Object.getPrototypeOf(e)}return Array.from(n)}const A1=typeof document<"u"?S.useLayoutEffect:S.useEffect;function V1(r,n){const{RTLTextPlugin:e,maxParallelImageRequests:t,workerCount:o,workerUrl:i}=n;if(e&&r.getRTLTextPluginStatus&&r.getRTLTextPluginStatus()==="unavailable"){const{pluginUrl:a,lazy:u=!0}=typeof e=="string"?{pluginUrl:e}:e;r.setRTLTextPlugin(a,l=>{l&&console.error(l)},u)}t!==void 0&&r.setMaxParallelImageRequests(t),o!==void 0&&r.setWorkerCount(o),i!==void 0&&r.setWorkerUrl(i)}const we=S.createContext(null);function k1(r,n){const e=S.useContext(C1),[t,o]=S.useState(null),i=S.useRef(),{current:a}=S.useRef({mapLib:null,map:null});S.useEffect(()=>{const c=r.mapLib;let m=!0,f;return Promise.resolve(c||h1(()=>import("./maplibre-gl-CTt8-zMZ.js").then(g=>g.m),[])).then(g=>{if(!m)return;if(!g)throw new Error("Invalid mapLib");const P="Map"in g?g:g.default;if(!P.Map)throw new Error("Invalid mapLib");V1(P,r),r.reuseMaps&&(f=ve.reuse(r,i.current)),f||(f=new ve(P.Map,r,i.current)),a.map=w1(f),a.mapLib=P,o(f),e==null||e.onMapMount(a.map,r.id)}).catch(g=>{const{onError:P}=r;P?P({type:"error",target:null,originalEvent:null,error:g}):console.error(g)}),()=>{m=!1,f&&(e==null||e.onMapUnmount(r.id),r.reuseMaps?f.recycle():f.destroy())}},[]),A1(()=>{t&&t.setProps(r)}),S.useImperativeHandle(n,()=>a.map,[t]);const u=S.useMemo(()=>({position:"relative",width:"100%",height:"100%",...r.style}),[r.style]),l={height:"100%"};return S.createElement("div",{id:r.id,ref:i,style:u},t&&S.createElement(we.Provider,{value:a},S.createElement("div",{"mapboxgl-children":"",style:l},r.children)))}const N1=S.forwardRef(k1),M1=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function on(r,n){if(!r||!n)return;const e=r.style;for(const t in n){const o=n[t];Number.isFinite(o)&&!M1.test(t)?e[t]=`${o}px`:e[t]=o}}function jc(r,n){if(r===n)return null;const e=gl(r),t=gl(n),o=[];for(const i of t)e.has(i)||o.push(i);for(const i of e)t.has(i)||o.push(i);return o.length===0?null:o}function gl(r){return new Set(r?r.trim().split(/\s+/):[])}S.memo(S.forwardRef((r,n)=>{const{map:e,mapLib:t}=S.useContext(we),o=S.useRef({props:r}),i=S.useMemo(()=>{let y=!1;S.Children.forEach(r.children,C=>{C&&(y=!0)});const s={...r,element:y?document.createElement("div"):void 0},p=new t.Marker(s);return p.setLngLat([r.longitude,r.latitude]),p.getElement().addEventListener("click",C=>{var w,v;(v=(w=o.current.props).onClick)==null||v.call(w,{type:"click",target:p,originalEvent:C})}),p.on("dragstart",C=>{var v,E;const w=C;w.lngLat=i.getLngLat(),(E=(v=o.current.props).onDragStart)==null||E.call(v,w)}),p.on("drag",C=>{var v,E;const w=C;w.lngLat=i.getLngLat(),(E=(v=o.current.props).onDrag)==null||E.call(v,w)}),p.on("dragend",C=>{var v,E;const w=C;w.lngLat=i.getLngLat(),(E=(v=o.current.props).onDragEnd)==null||E.call(v,w)}),p},[]);S.useEffect(()=>(i.addTo(e.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:u,offset:l,style:c,draggable:m=!1,popup:f=null,rotation:g=0,rotationAlignment:P="auto",pitchAlignment:h="auto"}=r;S.useEffect(()=>{on(i.getElement(),c)},[c]),S.useImperativeHandle(n,()=>i,[]);const F=o.current.props;(i.getLngLat().lng!==a||i.getLngLat().lat!==u)&&i.setLngLat([a,u]),l&&!P1(i.getOffset(),l)&&i.setOffset(l),i.isDraggable()!==m&&i.setDraggable(m),i.getRotation()!==g&&i.setRotation(g),i.getRotationAlignment()!==P&&i.setRotationAlignment(P),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==f&&i.setPopup(f);const A=jc(F.className,r.className);if(A)for(const y of A)i.toggleClassName(y);return o.current.props=r,Ja.createPortal(r.children,i.getElement())}));const T1=S.memo(S.forwardRef((r,n)=>{const{map:e,mapLib:t}=S.useContext(we),o=S.useMemo(()=>document.createElement("div"),[]),i=S.useRef({props:r}),a=S.useMemo(()=>{const u={...r},l=new t.Popup(u);return l.setLngLat([r.longitude,r.latitude]),l.once("open",c=>{var m,f;(f=(m=i.current.props).onOpen)==null||f.call(m,c)}),l},[]);if(S.useEffect(()=>{const u=l=>{var c,m;(m=(c=i.current.props).onClose)==null||m.call(c,l)};return a.on("close",u),a.setDOMContent(o).addTo(e.getMap()),()=>{a.off("close",u),a.isOpen()&&a.remove()}},[]),S.useEffect(()=>{on(a.getElement(),r.style)},[r.style]),S.useImperativeHandle(n,()=>a,[]),a.isOpen()){const u=i.current.props;(a.getLngLat().lng!==r.longitude||a.getLngLat().lat!==r.latitude)&&a.setLngLat([r.longitude,r.latitude]),r.offset&&!fr(u.offset,r.offset)&&a.setOffset(r.offset),(u.anchor!==r.anchor||u.maxWidth!==r.maxWidth)&&(a.options.anchor=r.anchor,a.setMaxWidth(r.maxWidth));const l=jc(u.className,r.className);if(l)for(const c of l)a.toggleClassName(c);i.current.props=r}return Ja.createPortal(r.children,o)}));function bn(r,n,e,t){const o=S.useContext(we),i=S.useMemo(()=>r(o),[]);return S.useEffect(()=>{const a=n,u=null,l=typeof n=="function"?n:null,{map:c}=o;return c.hasControl(i)||(c.addControl(i,a==null?void 0:a.position),u&&u(o)),()=>{l&&l(o),c.hasControl(i)&&c.removeControl(i)}},[]),i}function L1(r){const n=bn(({mapLib:e})=>new e.AttributionControl(r),{position:r.position});return S.useEffect(()=>{on(n._container,r.style)},[r.style]),null}S.memo(L1);function R1(r){const n=bn(({mapLib:e})=>new e.FullscreenControl({container:r.containerId&&document.getElementById(r.containerId)}),{position:r.position});return S.useEffect(()=>{on(n._controlContainer,r.style)},[r.style]),null}S.memo(R1);function _1(r,n){const e=S.useRef({props:r}),t=bn(({mapLib:o})=>{const i=new o.GeolocateControl(r),a=i._setupUI;return i._setupUI=()=>{i._container.hasChildNodes()||a()},i.on("geolocate",u=>{var l,c;(c=(l=e.current.props).onGeolocate)==null||c.call(l,u)}),i.on("error",u=>{var l,c;(c=(l=e.current.props).onError)==null||c.call(l,u)}),i.on("outofmaxbounds",u=>{var l,c;(c=(l=e.current.props).onOutOfMaxBounds)==null||c.call(l,u)}),i.on("trackuserlocationstart",u=>{var l,c;(c=(l=e.current.props).onTrackUserLocationStart)==null||c.call(l,u)}),i.on("trackuserlocationend",u=>{var l,c;(c=(l=e.current.props).onTrackUserLocationEnd)==null||c.call(l,u)}),i},{position:r.position});return e.current.props=r,S.useImperativeHandle(n,()=>t,[]),S.useEffect(()=>{on(t._container,r.style)},[r.style]),null}S.memo(S.forwardRef(_1));function j1(r){const n=bn(({mapLib:e})=>new e.NavigationControl(r),{position:r.position});return S.useEffect(()=>{on(n._container,r.style)},[r.style]),null}S.memo(j1);function O1(r){const n=bn(({mapLib:i})=>new i.ScaleControl(r),{position:r.position}),e=S.useRef(r),t=e.current;e.current=r;const{style:o}=r;return r.maxWidth!==void 0&&r.maxWidth!==t.maxWidth&&(n.options.maxWidth=r.maxWidth),r.unit!==void 0&&r.unit!==t.unit&&n.setUnit(r.unit),S.useEffect(()=>{on(n._container,o)},[o]),null}S.memo(O1);function D1(r){const n=bn(({mapLib:e})=>new e.TerrainControl(r),{position:r.position});return S.useEffect(()=>{on(n._container,r.style)},[r.style]),null}S.memo(D1);function B1(r){const n=bn(({mapLib:e})=>new e.LogoControl(r),{position:r.position});return S.useEffect(()=>{on(n._container,r.style)},[r.style]),null}S.memo(B1);function Co(r,n){if(!r)throw new Error(n)}let z1=0;function I1(r,n,e){if(r.style&&r.style._loaded){const t={...e};return delete t.id,delete t.children,r.addSource(n,t),r.getSource(n)}return null}function G1(r,n,e){var a,u,l;Co(n.id===e.id,"source id changed"),Co(n.type===e.type,"source type changed");let t="",o=0;for(const c in n)c!=="children"&&c!=="id"&&!fr(e[c],n[c])&&(t=c,o++);if(!o)return;const i=n.type;if(i==="geojson")r.setData(n.data);else if(i==="image")r.updateImage({url:n.url,coordinates:n.coordinates});else switch(t){case"coordinates":(a=r.setCoordinates)==null||a.call(r,n.coordinates);break;case"url":(u=r.setUrl)==null||u.call(r,n.url);break;case"tiles":(l=r.setTiles)==null||l.call(r,n.tiles);break;default:console.warn(`Unable to update <Source> prop: ${t}`)}}function hl(r){const n=S.useContext(we).map.getMap(),e=S.useRef(r),[,t]=S.useState(0),o=S.useMemo(()=>r.id||`jsx-source-${z1++}`,[]);S.useEffect(()=>{if(n){const a=()=>setTimeout(()=>t(u=>u+1),0);return n.on("styledata",a),a(),()=>{var u;if(n.off("styledata",a),n.style&&n.style._loaded&&n.getSource(o)){const l=(u=n.getStyle())==null?void 0:u.layers;if(l)for(const c of l)c.source===o&&n.removeLayer(c.id);n.removeSource(o)}}}},[n]);let i=n&&n.style&&n.getSource(o);return i?G1(i,r,e.current):i=I1(n,o,r),e.current=r,i&&S.Children.map(r.children,a=>a&&S.cloneElement(a,{source:o}))||null}function H1(r,n,e,t){if(Co(e.id===t.id,"layer id changed"),Co(e.type===t.type,"layer type changed"),e.type==="custom"||t.type==="custom")return;const{layout:o={},paint:i={},filter:a,minzoom:u,maxzoom:l,beforeId:c}=e;if(c!==t.beforeId&&r.moveLayer(n,c),o!==t.layout){const m=t.layout||{};for(const f in o)fr(o[f],m[f])||r.setLayoutProperty(n,f,o[f]);for(const f in m)o.hasOwnProperty(f)||r.setLayoutProperty(n,f,void 0)}if(i!==t.paint){const m=t.paint||{};for(const f in i)fr(i[f],m[f])||r.setPaintProperty(n,f,i[f]);for(const f in m)i.hasOwnProperty(f)||r.setPaintProperty(n,f,void 0)}fr(a,t.filter)||r.setFilter(n,a),(u!==t.minzoom||l!==t.maxzoom)&&r.setLayerZoomRange(n,u,l)}function U1(r,n,e){if(r.style&&r.style._loaded&&(!("source"in e)||r.getSource(e.source))){const t={...e,id:n};delete t.beforeId,r.addLayer(t,e.beforeId)}}let b1=0;function Cl(r){const n=S.useContext(we).map.getMap(),e=S.useRef(r),[,t]=S.useState(0),o=S.useMemo(()=>r.id||`jsx-layer-${b1++}`,[]);if(S.useEffect(()=>{if(n){const a=()=>t(u=>u+1);return n.on("styledata",a),a(),()=>{n.off("styledata",a),n.style&&n.style._loaded&&n.getLayer(o)&&n.removeLayer(o)}}},[n]),n&&n.style&&n.getLayer(o))try{H1(n,o,r,e.current)}catch(a){console.warn(a)}else U1(n,o,r);return e.current=r,null}const kr={successful:"#f59e0b",failed:"#ef4444",attempted:"#f97316",plot:"#64748b",alleged:"#64748b"},$n={successful:"Successful",failed:"Failed",attempted:"Attempted",plot:"Plot",alleged:"Alleged"},Oc={successful:{color:kr.successful,label:$n.successful,badgeClass:"bg-emerald-500/20 text-emerald-300",dotClass:"bg-emerald-400"},failed:{color:kr.failed,label:$n.failed,badgeClass:"bg-red-500/20 text-red-300",dotClass:"bg-red-400"},attempted:{color:kr.attempted,label:$n.attempted,badgeClass:"bg-amber-500/20 text-amber-300",dotClass:"bg-amber-400"},plot:{color:kr.plot,label:$n.plot,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"},alleged:{color:kr.alleged,label:$n.alleged,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"}};function Dc(r){return new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function Q1({event:r}){const n=Oc[r.outcome];return d.jsxs("div",{className:"popup-enter min-w-[240px] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-gray-700/50 bg-[#1a1d26] shadow-xl pt-7 pr-7 pb-3 pl-3",style:{fontFamily:"'DM Sans', sans-serif"},children:[d.jsx("div",{className:"font-mono text-xs text-gray-500",style:{fontFamily:"'JetBrains Mono', monospace"},children:r.id}),d.jsx("h3",{className:"mt-1 text-sm font-bold text-white",children:r.country}),d.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[d.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${n.badgeClass}`,children:[d.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${n.dotClass}`}),n.label]}),d.jsx("span",{className:"rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-400",children:"Geolocated"})]}),r.description&&d.jsx("p",{className:"mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed",children:r.description}),d.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500",children:[d.jsx(W1,{className:"h-3.5 w-3.5 shrink-0"}),Dc(r.date)]})]})}function W1({className:r}){return d.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":!0,children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}const Y1=["successful","failed"];function $1(){return d.jsxs("div",{className:"absolute bottom-20 right-[max(1rem,env(safe-area-inset-right))] z-10 rounded-lg border border-gray-700/50 bg-[#1a1d26]/95 px-3 py-2 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4",children:[d.jsx("div",{className:"mb-1.5 text-xs font-medium text-gray-400",children:"Outcome"}),d.jsx("div",{className:"flex flex-col gap-1",children:Y1.map(r=>d.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300",children:[d.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full border border-gray-600",style:{backgroundColor:kr[r]}}),$n[r]]},r))})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bc=(...r)=>r.filter((n,e,t)=>!!n&&n.trim()!==""&&t.indexOf(n)===e).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=S.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:e=2,absoluteStrokeWidth:t,className:o="",children:i,iconNode:a,...u},l)=>S.createElement("svg",{ref:l,...Z1,width:n,height:n,stroke:r,strokeWidth:t?Number(e)*24/Number(n):e,className:Bc("lucide",o),...u},[...a.map(([c,m])=>S.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=(r,n)=>{const e=S.forwardRef(({className:t,...o},i)=>S.createElement(J1,{ref:i,iconNode:n,className:Bc(`lucide-${K1(r)}`,t),...o}));return e.displayName=`${r}`,e};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=Ir("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Ir("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=Ir("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=Ir("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Ir("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Ir("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Ir("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Ir("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=Ir("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=Ir("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Ir("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Pl=[{id:"home",icon:ra,label:"Home"},{id:"events",icon:np,label:"Events"},{id:"filters",icon:q1,label:"Filters"},{id:"about",icon:rp,label:"About"}];function up({activeNav:r,onNavChange:n}){const[e,t]=S.useState(!1);return d.jsxs("aside",{className:`flex h-14 w-full shrink-0 flex-row items-center justify-around border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] transition-[width] duration-300 ease-in-out md:h-full md:flex-col md:justify-start md:border-r md:border-t-0 md:pb-0 ${e?"md:w-[72px]":"md:w-[280px]"}`,children:[d.jsxs("div",{className:"flex flex-1 items-center justify-around gap-0 md:hidden",children:[d.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:d.jsx(ra,{className:"h-5 w-5"})}),Pl.map(({id:o,icon:i,label:a})=>{const u=r===o;return d.jsx("button",{type:"button",onClick:()=>n(o),className:`flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-800/60 ${u?"text-amber-400":"text-gray-400"}`,title:a,children:d.jsx(i,{className:"h-5 w-5"})},o)})]}),d.jsxs("div",{className:"hidden md:flex md:h-full md:w-full md:flex-col",children:[d.jsxs("div",{className:"flex min-h-[56px] items-center gap-3 border-b border-gray-800 px-3",children:[d.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:d.jsx(ra,{className:"h-5 w-5"})}),!e&&d.jsx("span",{className:"truncate text-sm font-semibold text-white",children:"CoupView"})]}),d.jsx("nav",{className:"flex flex-1 flex-col gap-0.5 overflow-hidden py-2",children:Pl.map(({id:o,icon:i,label:a})=>{const u=r===o;return d.jsxs("button",{type:"button",onClick:()=>n(o),className:`
                  flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200
                  hover:scale-[1.02] hover:bg-gray-800/60
                  ${e?"justify-center px-0":""}
                  ${u?"border-l-2 border-amber-500 bg-gray-800/40":"border-l-2 border-transparent"}
                `,title:e?a:void 0,children:[d.jsx(i,{className:`h-5 w-5 shrink-0 ${u?"text-amber-400":"text-gray-400"}`}),!e&&d.jsx("span",{className:`truncate text-sm ${u?"text-white":"text-gray-300"}`,children:a})]},o)})}),d.jsxs("div",{className:"border-t border-gray-800 py-2",children:[d.jsxs("button",{type:"button",className:"flex w-full items-center gap-3 px-3 py-2.5 text-left text-gray-400 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/60 hover:text-gray-300",title:e?"Settings":void 0,children:[d.jsx(ip,{className:"h-5 w-5 shrink-0"}),!e&&d.jsx("span",{className:"truncate text-sm",children:"Settings"})]}),d.jsx("button",{type:"button",onClick:()=>t(o=>!o),className:"flex w-full items-center justify-center gap-3 px-3 py-2.5 text-gray-400 transition-all duration-200 hover:bg-gray-800/60 hover:text-gray-300",title:e?"Expand sidebar":"Collapse sidebar",children:e?d.jsx(tp,{className:"h-5 w-5"}):d.jsxs(d.Fragment,{children:[d.jsx(ep,{className:"h-5 w-5 shrink-0"}),d.jsx("span",{className:"truncate text-sm",children:"Collapse"})]})})]})]})]})}function _t({label:r,children:n,className:e=""}){const[t,o]=S.useState(!1),i=S.useRef(null);return S.useEffect(()=>{const a=u=>{i.current&&!i.current.contains(u.target)&&o(!1)};if(t)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[t]),d.jsxs("div",{className:`relative shrink-0 ${e}`,ref:i,children:[d.jsxs("button",{type:"button",onClick:()=>o(a=>!a),className:"flex min-h-[44px] items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800/80 px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-gray-700/80",children:[r,d.jsx(zc,{className:`h-4 w-4 shrink-0 transition-transform ${t?"rotate-180":""}`})]}),t&&d.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 min-w-0 rounded-lg border border-gray-700 bg-[#1a1d26] py-2 shadow-xl md:left-auto md:right-0 md:min-w-[180px]",children:n})]})}function gn({label:r,checked:n,onChange:e}){return d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800",children:[d.jsx("input",{type:"checkbox",checked:n,onChange:e,className:"h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"}),d.jsx("span",{className:"text-sm text-gray-200",children:r})]})}const vl=r=>{let n;const e=new Set,t=(c,m)=>{const f=typeof c=="function"?c(n):c;if(!Object.is(f,n)){const g=n;n=m??(typeof f!="object"||f===null)?f:Object.assign({},n,f),e.forEach(P=>P(n,g))}},o=()=>n,u={setState:t,getState:o,getInitialState:()=>l,subscribe:c=>(e.add(c),()=>e.delete(c))},l=n=r(t,o,u);return u},lp=r=>r?vl(r):vl,sp=r=>r;function cp(r,n=sp){const e=ht.useSyncExternalStore(r.subscribe,ht.useCallback(()=>n(r.getState()),[r,n]),ht.useCallback(()=>n(r.getInitialState()),[r,n]));return ht.useDebugValue(e),e}const Sl=r=>{const n=lp(r),e=t=>cp(n,t);return Object.assign(e,n),e},dp=r=>r?Sl(r):Sl,na=[1950,2030];function yp(r){if(r.length===0)return na;const n=Math.min(...r),e=Math.max(...r);return[n,e+9]}const L=dp(r=>({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:na,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026],viewMode:"events",setYearRange:n=>r({yearRange:n}),setSearchQuery:n=>r({searchQuery:n}),toggleOutcome:n=>r(e=>({selectedOutcomes:e.selectedOutcomes.includes(n)?e.selectedOutcomes.filter(t=>t!==n):[...e.selectedOutcomes,n]})),toggleRegion:n=>r(e=>({selectedRegions:e.selectedRegions.includes(n)?e.selectedRegions.filter(t=>t!==n):[...e.selectedRegions,n]})),toggleDecade:n=>r(e=>{const t=e.selectedDecades.includes(n)?e.selectedDecades.filter(o=>o!==n):[...e.selectedDecades,n].sort((o,i)=>o-i);return{selectedDecades:t,dateRange:yp(t)}}),setDateRange:n=>r({dateRange:n}),toggleTag:n=>r(e=>({selectedTags:e.selectedTags.includes(n)?e.selectedTags.filter(t=>t!==n):[...e.selectedTags,n]})),reset:()=>r({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:na,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026]}),setViewMode:n=>r({viewMode:n}),setSelectedEvent:n=>r({selectedEvent:n}),setSelectedCountry:n=>r({selectedCountry:n})})),pp=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"}],fp=[1950,1960,1970,1980,1990,2e3,2010,2020];function mp({regions:r,tags:n}){const e=L(h=>h.searchQuery),t=L(h=>h.setSearchQuery),o=L(h=>h.selectedOutcomes),i=L(h=>h.toggleOutcome),a=L(h=>h.selectedDecades),u=L(h=>h.toggleDecade),l=L(h=>h.selectedRegions),c=L(h=>h.toggleRegion),m=L(h=>h.selectedTags),f=L(h=>h.toggleTag),g=L(h=>h.viewMode),P=L(h=>h.setViewMode);return d.jsxs("div",{className:"absolute left-0 right-0 top-0 z-10 flex flex-col gap-2 border-b border-gray-800/50 bg-[#0f1117]/80 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-4 md:px-4",children:[d.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:d.jsxs("div",{className:"relative flex w-full max-w-md items-center",children:[d.jsx(op,{className:"absolute left-3 h-4 w-4 text-gray-500"}),d.jsx("input",{type:"search",value:e,onChange:h=>t(h.target.value),placeholder:"Search for anything...",className:"min-h-[44px] w-full rounded-lg border border-gray-700 bg-gray-800/90 py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"})]})}),d.jsxs("div",{className:"flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto pb-1 md:overflow-visible md:pb-0",children:[d.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-800/50 p-1",children:[d.jsx("button",{onClick:()=>P("events"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="events"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Events"}),d.jsx("button",{onClick:()=>P("risk"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="risk"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Coup Risk"})]}),g==="events"&&d.jsxs(d.Fragment,{children:[d.jsx(_t,{label:"Status",children:d.jsx("div",{className:"flex flex-col gap-0.5 px-2",children:pp.map(({value:h,label:F})=>d.jsx(gn,{label:F,checked:o.includes(h),onChange:()=>i(h)},h))})}),d.jsx(_t,{label:"Date",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:fp.map(h=>d.jsx(gn,{label:`${h}s`,checked:a.includes(h),onChange:()=>u(h)},h))})}),d.jsx(_t,{label:"Region",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:r.length===0?d.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No regions in data"}):r.map(h=>d.jsx(gn,{label:h,checked:l.includes(h),onChange:()=>c(h)},h))})}),d.jsx(_t,{label:"Tags",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:n.length===0?d.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No tags in data"}):n.map(h=>d.jsx(gn,{label:h,checked:m.includes(h),onChange:()=>f(h)},h))})})]})]})]})}function Ic(r,n){if(!n.trim())return!0;const e=n.trim().toLowerCase(),t=(r.title??"").toLowerCase(),o=(r.country??"").toLowerCase(),i=(r.description??"").toLowerCase(),a=(r.tags??[]).join(" ").toLowerCase();return t.includes(e)||o.includes(e)||i.includes(e)||a.includes(e)}function gp(r,n){return n.length===0?!0:n.includes(r.outcome)}function hp(r,n){return n.length===0?!0:n.includes(r.region)}function Cp(r,[n,e]){return r.year>=n&&r.year<=e}function Pp(r,n){if(n.length===0)return!0;const e=r.tags??[];return n.some(t=>e.includes(t))}function vp(r,n){return r.filter(e=>Ic(e,n.searchQuery)&&gp(e,n.selectedOutcomes)&&hp(e,n.selectedRegions)&&Cp(e,n.dateRange)&&Pp(e,n.selectedTags))}function Sp(r,n){const e=[];if(r.selectedOutcomes.length>0){const a=["in",["get","outcome"],["literal",r.selectedOutcomes]];e.push(a)}if(r.selectedRegions.length>0){const a=["in",["get","region"],["literal",r.selectedRegions]];e.push(a)}const[t,o]=r.dateRange,i=["all",[">=",["get","year"],t],["<=",["get","year"],o]];if(e.push(i),r.selectedTags.length>0){const a=new Set(n.filter(u=>{const l=u.tags??[];return r.selectedTags.some(c=>l.includes(c))}).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];e.push(u)}}if(r.searchQuery.trim()){const a=new Set(n.filter(u=>Ic(u,r.searchQuery)).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];e.push(u)}else return["==",["literal",!0],!1]}if(e.length!==0)return e.length===1?e[0]:["all",...e]}function xp(r){if(!r||r.length!==2)return"🏳️";const n=127462,e=n+r.toUpperCase().charCodeAt(0)-65,t=n+r.toUpperCase().charCodeAt(1)-65;return String.fromCodePoint(e,t)}function Fp({allEvents:r,mapRef:n}){const[e,t]=S.useState("date-desc"),[o,i]=S.useState(!1),a=L(A=>A.searchQuery),u=L(A=>A.selectedOutcomes),l=L(A=>A.selectedRegions),c=L(A=>A.dateRange),m=L(A=>A.selectedTags),f=L(A=>A.setSelectedEvent),g=S.useMemo(()=>vp(r,{searchQuery:a,selectedOutcomes:u,selectedRegions:l,dateRange:c,selectedTags:m}),[r,a,u,l,c,m]),P=S.useMemo(()=>{const A=[...g];return e==="date-desc"?A.sort((y,s)=>new Date(s.date).getTime()-new Date(y.date).getTime()):e==="date-asc"?A.sort((y,s)=>new Date(y.date).getTime()-new Date(s.date).getTime()):e==="country-asc"&&A.sort((y,s)=>y.country.localeCompare(s.country)),A},[g,e]),h=A=>{var s;const y=(s=n.current)==null?void 0:s.getMap();y&&y.flyTo({center:[A.longitude,A.latitude],zoom:5,duration:800}),f(A)},F=e==="date-desc"?"Newest first":e==="date-asc"?"Oldest first":"Country A–Z";return d.jsxs("div",{className:"flex w-full shrink-0 flex-col border-r border-gray-800 bg-[#0f1117] md:w-[320px]",children:[d.jsx("div",{className:"flex flex-shrink-0 justify-center pt-2 md:hidden","aria-hidden":!0,children:d.jsx("div",{className:"h-1 w-10 rounded-full bg-gray-600"})}),d.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[d.jsxs("span",{className:"text-sm font-medium text-gray-300",children:[P.length," event",P.length!==1?"s":""]}),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{type:"button",onClick:()=>i(A=>!A),className:"flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded border border-gray-700 bg-gray-800/80 px-2 py-1.5 text-xs text-gray-300 hover:bg-gray-700/80 md:min-h-0 md:min-w-0 md:justify-start",children:[F,d.jsx(zc,{className:"h-3.5 w-3.5"})]}),o&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 z-40","aria-hiddenx":!0,onClick:()=>i(!1)}),d.jsx("div",{className:"absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded border border-gray-700 bg-[#1a1d26] py-1 shadow-xl",children:[["date-desc","Newest first"],["date-asc","Oldest first"],["country-asc","Country A–Z"]].map(([A,y])=>d.jsx("button",{type:"button",onClick:()=>{t(A),i(!1)},className:"w-full px-3 py-1.5 text-left text-sm text-gray-200 hover:bg-gray-800",children:y},A))})]})]})]}),d.jsx("div",{className:"panel-scroll flex-1 overflow-y-auto",children:P.length===0?d.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 px-4 py-12 text-center text-sm text-gray-500",children:[d.jsx("p",{children:"No events match the current filters."}),d.jsx("p",{className:"text-xs",children:"Try adjusting search or filters."})]}):d.jsx("ul",{className:"divide-y divide-gray-800",children:P.map(A=>{const y=Oc[A.outcome];return d.jsx("li",{children:d.jsxs("button",{type:"button",onClick:()=>h(A),className:"flex min-h-[52px] w-full flex-col justify-center gap-1 px-4 py-3.5 text-left transition-colors hover:bg-gray-800/60",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-lg leading-none",children:xp(A.countryCode)}),d.jsx("span",{className:"truncate text-sm font-medium text-white",children:A.country})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs ${y.badgeClass}`,children:y.label}),d.jsx("span",{className:"text-xs text-gray-500",children:Dc(A.date)})]}),A.description&&d.jsx("p",{className:"line-clamp-1 text-xs text-gray-400",children:A.description})]})},A.id)})})})]})}function wp({country:r,events:n,onClose:e}){return d.jsxs("div",{className:"flex w-full shrink-0 flex-col border-l border-gray-800 bg-[#0f1117] md:w-[320px]",children:[d.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[d.jsx("span",{className:"truncate text-sm font-medium text-gray-300",children:r}),d.jsx("button",{type:"button",onClick:e,className:"flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-700 bg-gray-800/80 p-1 text-gray-400 hover:bg-gray-700/80 md:min-h-0 md:min-w-0",children:d.jsx(ap,{className:"h-4 w-4"})})]}),d.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-3 py-3 md:px-4",children:d.jsxs("div",{className:"text-sm text-gray-300",children:[d.jsxs("p",{className:"mb-2",children:[d.jsx("span",{className:"font-medium text-gray-200",children:n.length})," ","coup",n.length!==1?"s":""," in this country"]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Country details coming soon..."})]})})]})}const Ep=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"},{value:"attempted",label:"Attempted"},{value:"plot",label:"Plot"},{value:"alleged",label:"Alleged"}],Ap=[1950,1960,1970,1980,1990,2e3,2010,2020];function Vp({onClose:r,regions:n,tags:e}){const t=L(s=>s.selectedOutcomes),o=L(s=>s.toggleOutcome),i=L(s=>s.selectedDecades),a=L(s=>s.toggleDecade),u=L(s=>s.selectedRegions),l=L(s=>s.toggleRegion),c=L(s=>s.selectedTags),m=L(s=>s.toggleTag),f=L(s=>s.yearRange),g=L(s=>s.setYearRange),P=L(s=>s.reset),h=1950,F=2026,A=(f[0]-h)/(F-h)*100,y=(f[1]-h)/(F-h)*100;return d.jsxs("div",{className:"flex h-full w-full flex-col bg-[#0f1117] text-white",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 px-4 py-3",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-sm font-semibold",children:"Filters"}),d.jsx("p",{className:"text-xs text-gray-400",children:"Advanced filtering options"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",onClick:P,className:"rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-gray-700",children:"Reset"}),d.jsx("button",{type:"button",onClick:r,className:"rounded-md px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white",children:"Close"})]})]}),d.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4",children:d.jsxs("div",{className:"flex flex-col gap-6",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-400",children:"Timeline"}),d.jsxs("div",{className:"rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300",children:[f[0]," — ",f[1]]})]}),d.jsxs("div",{className:"rounded-2xl border border-gray-800 bg-[#151925] p-4 shadow-sm",children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between text-xs text-gray-500",children:[d.jsx("span",{children:h}),d.jsx("span",{children:F})]}),d.jsxs("div",{className:"relative h-10",children:[d.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-gray-700"}),d.jsx("div",{className:"absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-amber-500",style:{left:`${A}%`,width:`${y-A}%`}}),d.jsx("input",{type:"range",min:h,max:F,value:f[0],onChange:s=>{const p=Number(s.target.value);p<=f[1]&&g([p,f[1]])},className:"timeline-slider absolute inset-0 w-full"}),d.jsx("input",{type:"range",min:h,max:F,value:f[1],onChange:s=>{const p=Number(s.target.value);p>=f[0]&&g([f[0],p])},className:"timeline-slider absolute inset-0 w-full"})]}),d.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[d.jsx("button",{type:"button",onClick:()=>g([1950,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"All"}),d.jsx("button",{type:"button",onClick:()=>g([1950,1990]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Cold War"}),d.jsx("button",{type:"button",onClick:()=>g([1991,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Post-1990"})]})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Status"}),d.jsx("div",{className:"flex flex-col gap-1",children:Ep.map(({value:s,label:p})=>d.jsx(gn,{label:p,checked:t.includes(s),onChange:()=>o(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Date"}),d.jsx("div",{className:"flex flex-col gap-1",children:Ap.map(s=>d.jsx(gn,{label:`${s}s`,checked:i.includes(s),onChange:()=>a(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Region"}),d.jsx("div",{className:"flex flex-col gap-1",children:n.map(s=>d.jsx(gn,{label:s,checked:u.includes(s),onChange:()=>l(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Tags"}),d.jsx("div",{className:"flex flex-col gap-1",children:e.map(s=>d.jsx(gn,{label:s,checked:c.includes(s),onChange:()=>m(s)},s))})]})]})})]})}function kp({children:r,mapRef:n,allEvents:e}){const[t,o]=S.useState("home"),i=L(m=>m.selectedCountry),a=L(m=>m.setSelectedCountry),u=S.useMemo(()=>[...new Set(e.map(m=>m.region))].sort(),[e]),l=S.useMemo(()=>[...new Set(e.flatMap(m=>m.tags??[]))].sort(),[e]),c=S.useMemo(()=>e.filter(m=>m.country===i),[e,i]);return d.jsxs("div",{className:"flex h-screen w-screen flex-col overflow-hidden md:flex-row",children:[d.jsx(up,{activeNav:t,onNavChange:o}),d.jsxs("div",{className:"flex min-h-0 min-w-0 flex-1 flex-col",children:[d.jsx(mp,{regions:u,tags:l}),d.jsxs("div",{className:"relative flex min-h-0 flex-1 min-w-0",children:[t==="events"&&d.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(Fp,{allEvents:e,mapRef:n})}),i&&d.jsx("div",{className:"fixed bottom-0 right-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-l md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(wp,{country:i,events:c,onClose:()=>a(null)})}),t==="filters"&&d.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(Vp,{onClose:()=>o("home"),regions:u,tags:l})}),d.jsx("div",{className:"min-h-0 min-w-0 flex-1",children:r})]})]})]})}const Np=`{\r
  "type": "FeatureCollection",\r
  "features": [\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2025A",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2025-11-26",\r
        "year": 2025,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ2025B",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "2025-12-07",\r
        "year": 2025,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          47.5361,\r
          -18.9137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MG2025C",\r
        "country": "Madagascar",\r
        "countryCode": "MG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -18.9137,\r
        "longitude": 47.5361,\r
        "date": "2025-10-12",\r
        "year": 2025,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO2024D",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "2024-06-26",\r
        "year": 2024,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD2024E",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "2024-08-05",\r
        "year": 2024,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE2023F",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "2023-07-26",\r
        "year": 2023,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          9.4537,\r
          0.3925\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GA2023G",\r
        "country": "Gabon",\r
        "countryCode": "GA",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3925,\r
        "longitude": 9.4537,\r
        "date": "2023-08-30",\r
        "year": 2023,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD2023H",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "2023-04-15",\r
        "year": 2023,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          6.7273,\r
          0.3365\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ST2022I",\r
        "country": "Sao Tome and Principe",\r
        "countryCode": "ST",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3365,\r
        "longitude": 6.7273,\r
        "date": "2022-11-25",\r
        "year": 2022,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2022J",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2022-02-01",\r
        "year": 2022,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF2022K",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "2022-01-23",\r
        "year": 2022,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF2022L",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "2022-09-30",\r
        "year": 2022,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML2021M",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "2021-05-21",\r
        "year": 2021,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE2021N",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "2021-03-31",\r
        "year": 2021,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN2021O",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "2021-09-05",\r
        "year": 2021,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD2021P",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "2021-04-20",\r
        "year": 2021,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD2021Q",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "2021-09-21",\r
        "year": 2021,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD2021R",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "2021-10-25",\r
        "year": 2021,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          96.1297,\r
          19.745\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MM2021S",\r
        "country": "Myanmar",\r
        "countryCode": "MM",\r
        "region": "Southeast Asia",\r
        "latitude": 19.745,\r
        "longitude": 96.1297,\r
        "date": "2021-02-01",\r
        "year": 2021,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML2020T",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "2020-08-18",\r
        "year": 2020,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          9.4537,\r
          0.3925\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GA2019U",\r
        "country": "Gabon",\r
        "countryCode": "GA",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3925,\r
        "longitude": 9.4537,\r
        "date": "2019-01-07",\r
        "year": 2019,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD2019V",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "2019-04-11",\r
        "year": 2019,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.0539,\r
          -17.8294\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ZW2017W",\r
        "country": "Zimbabwe",\r
        "countryCode": "ZW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -17.8294,\r
        "longitude": 31.0539,\r
        "date": "2017-11-15",\r
        "year": 2017,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR2016X",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "2016-07-15",\r
        "year": 2016,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF2015Y",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "2015-09-17",\r
        "year": 2015,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI2015Z",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "2015-05-13",\r
        "year": 2015,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          30.5186,\r
          50.4454\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UA2014A",\r
        "country": "Ukraine",\r
        "countryCode": "UA",\r
        "region": "Europe",\r
        "latitude": 50.4454,\r
        "longitude": 30.5186,\r
        "date": "2014-02-22",\r
        "year": 2014,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF2014B",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "2014-10-30",\r
        "year": 2014,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          27.4833,\r
          -29.3167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LS2014C",\r
        "country": "Lesotho",\r
        "countryCode": "LS",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -29.3167,\r
        "longitude": 27.4833,\r
        "date": "2014-08-30",\r
        "year": 2014,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH2014D",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "2014-05-22",\r
        "year": 2014,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.2394,\r
          30.0392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EG2013E",\r
        "country": "Egypt",\r
        "countryCode": "EG",\r
        "region": "North Africa",\r
        "latitude": 30.0392,\r
        "longitude": 31.2394,\r
        "date": "2013-07-03",\r
        "year": 2013,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2012F",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2012-04-12",\r
        "year": 2012,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML2012G",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "2012-03-22",\r
        "year": 2012,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML2012H",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "2012-05-01",\r
        "year": 2012,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD2012I",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "2012-11-22",\r
        "year": 2012,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          73.5089,\r
          4.1748\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MV2012J",\r
        "country": "Maldives",\r
        "countryCode": "MV",\r
        "region": "South Asia",\r
        "latitude": 4.1748,\r
        "longitude": 73.5089,\r
        "date": "2012-02-07",\r
        "year": 2012,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          147.1797,\r
          -9.4431\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PG2012K",\r
        "country": "Papua New Guinea",\r
        "countryCode": "PG",\r
        "region": "Oceania",\r
        "latitude": -9.4431,\r
        "longitude": 147.1797,\r
        "date": "2012-01-26",\r
        "year": 2012,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN2011L",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "2011-07-19",\r
        "year": 2011,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.2394,\r
          30.0392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EG2011M",\r
        "country": "Egypt",\r
        "countryCode": "EG",\r
        "region": "North Africa",\r
        "latitude": 30.0392,\r
        "longitude": 31.2394,\r
        "date": "2011-02-11",\r
        "year": 2011,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2010N",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2010-04-01",\r
        "year": 2010,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE2010O",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "2010-02-18",\r
        "year": 2010,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          47.5361,\r
          -18.9137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MG2010P",\r
        "country": "Madagascar",\r
        "countryCode": "MG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -18.9137,\r
        "longitude": 47.5361,\r
        "date": "2010-11-17",\r
        "year": 2010,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN2009Q",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "2009-06-28",\r
        "year": 2009,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          47.5361,\r
          -18.9137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MG2009R",\r
        "country": "Madagascar",\r
        "countryCode": "MG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -18.9137,\r
        "longitude": 47.5361,\r
        "date": "2009-03-17",\r
        "year": 2009,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2008S",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2008-11-23",\r
        "year": 2008,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR2008T",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "2008-08-06",\r
        "year": 2008,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN2008U",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "2008-12-23",\r
        "year": 2008,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD2006V",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "2006-03-13",\r
        "year": 2006,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH2006W",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "2006-09-19",\r
        "year": 2006,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          178.4415,\r
          -18.1416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-FJ2006X",\r
        "country": "Fiji",\r
        "countryCode": "FJ",\r
        "region": "Oceania",\r
        "latitude": -18.1416,\r
        "longitude": 178.4415,\r
        "date": "2006-12-05",\r
        "year": 2006,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR2005Y",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "2005-08-03",\r
        "year": 2005,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG2005Z",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "2005-02-05",\r
        "year": 2005,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.3136,\r
          -4.3276\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CD2004A",\r
        "country": "Democratic Republic of the Congo",\r
        "countryCode": "CD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.3276,\r
        "longitude": 15.3136,\r
        "date": "2004-03-28",\r
        "year": 2004,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.3136,\r
          -4.3276\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CD2004B",\r
        "country": "Democratic Republic of the Congo",\r
        "countryCode": "CD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.3276,\r
        "longitude": 15.3136,\r
        "date": "2004-06-11",\r
        "year": 2004,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          6.7273,\r
          0.3365\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ST2003C",\r
        "country": "Sao Tome and Principe",\r
        "countryCode": "ST",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3365,\r
        "longitude": 6.7273,\r
        "date": "2003-07-16",\r
        "year": 2003,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2003D",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2003-09-14",\r
        "year": 2003,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR2003E",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "2003-06-08",\r
        "year": 2003,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          18.555,\r
          4.3612\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CF2003F",\r
        "country": "Central African Republic",\r
        "countryCode": "CF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 4.3612,\r
        "longitude": 18.555,\r
        "date": "2003-03-15",\r
        "year": 2003,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE2002G",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "2002-04-12",\r
        "year": 2002,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -4.0268,\r
          5.3453\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CI2002H",\r
        "country": "Ivory Coast",\r
        "countryCode": "CI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.3453,\r
        "longitude": -4.0268,\r
        "date": "2002-09-19",\r
        "year": 2002,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -4.0268,\r
          5.3453\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CI2001I",\r
        "country": "Ivory Coast",\r
        "countryCode": "CI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.3453,\r
        "longitude": -4.0268,\r
        "date": "2001-01-06",\r
        "year": 2001,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          18.555,\r
          4.3612\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CF2001J",\r
        "country": "Central African Republic",\r
        "countryCode": "CF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 4.3612,\r
        "longitude": 18.555,\r
        "date": "2001-05-28",\r
        "year": 2001,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI2001K",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "2001-04-18",\r
        "year": 2001,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI2001L",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "2001-07-22",\r
        "year": 2001,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC2000M",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "2000-01-21",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE2000N",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "2000-10-30",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -57.6359,\r
          -25.3007\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PY2000O",\r
        "country": "Paraguay",\r
        "countryCode": "PY",\r
        "region": "South America",\r
        "latitude": -25.3007,\r
        "longitude": -57.6359,\r
        "date": "2000-05-18",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW2000P",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "2000-11-23",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -4.0268,\r
          5.3453\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CI2000Q",\r
        "country": "Ivory Coast",\r
        "countryCode": "CI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.3453,\r
        "longitude": -4.0268,\r
        "date": "2000-09-18",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.1447,\r
          11.5877\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DJ2000R",\r
        "country": "Djibouti",\r
        "countryCode": "DJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.5877,\r
        "longitude": 43.1447,\r
        "date": "2000-12-07",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM2000S",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "2000-03-21",\r
        "year": 2000,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          178.4415,\r
          -18.1416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-FJ2000T",\r
        "country": "Fiji",\r
        "countryCode": "FJ",\r
        "region": "Oceania",\r
        "latitude": -18.1416,\r
        "longitude": 178.4415,\r
        "date": "2000-05-29",\r
        "year": 2000,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1999U",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1999-07-30",\r
        "year": 1999,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW1999V",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "1999-05-07",\r
        "year": 1999,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE1999W",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "1999-04-09",\r
        "year": 1999,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -4.0268,\r
          5.3453\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CI1999X",\r
        "country": "Ivory Coast",\r
        "countryCode": "CI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.3453,\r
        "longitude": -4.0268,\r
        "date": "1999-12-24",\r
        "year": 1999,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1999Y",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1999-04-30",\r
        "year": 1999,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          73.0594,\r
          33.7035\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PK1999Z",\r
        "country": "Pakistan",\r
        "countryCode": "PK",\r
        "region": "South Asia",\r
        "latitude": 33.7035,\r
        "longitude": 73.0594,\r
        "date": "1999-10-12",\r
        "year": 1999,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW1998A",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "1998-06-07",\r
        "year": 1998,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1997B",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1997-05-25",\r
        "year": 1997,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          28.2771,\r
          -15.4134\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ZM1997C",\r
        "country": "Zambia",\r
        "countryCode": "ZM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -15.4134,\r
        "longitude": 28.2771,\r
        "date": "1997-10-28",\r
        "year": 1997,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          104.916,\r
          11.5625\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KH1997D",\r
        "country": "Cambodia",\r
        "countryCode": "KH",\r
        "region": "Southeast Asia",\r
        "latitude": 11.5625,\r
        "longitude": 104.916,\r
        "date": "1997-07-05",\r
        "year": 1997,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE1996E",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "1996-01-27",\r
        "year": 1996,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN1996F",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "1996-02-03",\r
        "year": 1996,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1996G",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1996-01-16",\r
        "year": 1996,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1996H",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1996-07-25",\r
        "year": 1996,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          51.5245,\r
          25.2747\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-QA1996I",\r
        "country": "Qatar",\r
        "countryCode": "QA",\r
        "region": "Middle East",\r
        "latitude": 25.2747,\r
        "longitude": 51.5245,\r
        "date": "1996-02-20",\r
        "year": 1996,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1996J",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1996-05-20",\r
        "year": 1996,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          49.892,\r
          40.3777\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AZ1995K",\r
        "country": "Azerbaijan",\r
        "countryCode": "AZ",\r
        "region": "Central Asia",\r
        "latitude": 40.3777,\r
        "longitude": 49.892,\r
        "date": "1995-03-13",\r
        "year": 1995,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          6.7273,\r
          0.3365\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ST1995L",\r
        "country": "Sao Tome and Principe",\r
        "countryCode": "ST",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3365,\r
        "longitude": 6.7273,\r
        "date": "1995-08-15",\r
        "year": 1995,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1995M",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1995-10-02",\r
        "year": 1995,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1995N",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1995-06-15",\r
        "year": 1995,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          51.5245,\r
          25.2747\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-QA1995O",\r
        "country": "Qatar",\r
        "countryCode": "QA",\r
        "region": "Middle East",\r
        "latitude": 25.2747,\r
        "longitude": 51.5245,\r
        "date": "1995-06-27",\r
        "year": 1995,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          49.892,\r
          40.3777\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AZ1994P",\r
        "country": "Azerbaijan",\r
        "countryCode": "AZ",\r
        "region": "Central Asia",\r
        "latitude": 40.3777,\r
        "longitude": 49.892,\r
        "date": "1994-10-04",\r
        "year": 1994,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -16.6794,\r
          13.4531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GM1994Q",\r
        "country": "Gambia",\r
        "countryCode": "GM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.4531,\r
        "longitude": -16.6794,\r
        "date": "1994-07-23",\r
        "year": 1994,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -16.6794,\r
          13.4531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GM1994R",\r
        "country": "Gambia",\r
        "countryCode": "GM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.4531,\r
        "longitude": -16.6794,\r
        "date": "1994-11-11",\r
        "year": 1994,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -10.7969,\r
          6.3005\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LR1994S",\r
        "country": "Liberia",\r
        "countryCode": "LR",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3005,\r
        "longitude": -10.7969,\r
        "date": "1994-09-15",\r
        "year": 1994,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          30.0579,\r
          -1.9474\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-RW1994T",\r
        "country": "Rwanda",\r
        "countryCode": "RW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -1.9474,\r
        "longitude": 30.0579,\r
        "date": "1994-04-07",\r
        "year": 1994,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          27.4833,\r
          -29.3167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LS1994U",\r
        "country": "Lesotho",\r
        "countryCode": "LS",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -29.3167,\r
        "longitude": 27.4833,\r
        "date": "1994-08-17",\r
        "year": 1994,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1993V",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1993-11-17",\r
        "year": 1993,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD1993W",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "1993-01-27",\r
        "year": 1993,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1993X",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1993-07-03",\r
        "year": 1993,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1993Y",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1993-10-21",\r
        "year": 1993,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          13.1875,\r
          32.8752\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LY1993Z",\r
        "country": "Libya",\r
        "countryCode": "LY",\r
        "region": "North Africa",\r
        "latitude": 32.8752,\r
        "longitude": 13.1875,\r
        "date": "1993-10-23",\r
        "year": 1993,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1992A",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1992-02-04",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1992B",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1992-11-27",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1992C",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1992-11-13",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1992D",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1992-04-30",\r
        "year": 1992,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1992E",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1992-12-29",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          47.5361,\r
          -18.9137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MG1992F",\r
        "country": "Madagascar",\r
        "countryCode": "MG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -18.9137,\r
        "longitude": 47.5361,\r
        "date": "1992-07-29",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1992G",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1992-09-26",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          3.042,\r
          36.7525\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DZ1992H",\r
        "country": "Algeria",\r
        "countryCode": "DZ",\r
        "region": "North Africa",\r
        "latitude": 36.7525,\r
        "longitude": 3.042,\r
        "date": "1992-01-11",\r
        "year": 1992,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1992I",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1992-06-15",\r
        "year": 1992,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          69.1725,\r
          34.5289\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AF1992J",\r
        "country": "Afghanistan",\r
        "countryCode": "AF",\r
        "region": "South Asia",\r
        "latitude": 34.5289,\r
        "longitude": 69.1725,\r
        "date": "1992-04-15",\r
        "year": 1992,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1991K",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1991-01-07",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1991L",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1991-09-30",\r
        "year": 1991,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          37.6218,\r
          55.755\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-RU1991M",\r
        "country": "Russia",\r
        "countryCode": "RU",\r
        "region": "Europe",\r
        "latitude": 55.755,\r
        "longitude": 37.6218,\r
        "date": "1991-08-21",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML1991N",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "1991-03-26",\r
        "year": 1991,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML1991O",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "1991-07-14",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1991P",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1991-10-01",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1991Q",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1991-10-07",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1991R",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1991-11-28",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1991S",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1991-12-15",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD1991T",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "1991-10-13",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          27.4833,\r
          -29.3167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LS1991U",\r
        "country": "Lesotho",\r
        "countryCode": "LS",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -29.3167,\r
        "longitude": 27.4833,\r
        "date": "1991-04-30",\r
        "year": 1991,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1991V",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1991-08-03",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1991W",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1991-09-23",\r
        "year": 1991,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1991X",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1991-02-23",\r
        "year": 1991,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1990Y",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1990-04-22",\r
        "year": 1990,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          28.2771,\r
          -15.4134\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ZM1990Z",\r
        "country": "Zambia",\r
        "countryCode": "ZM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -15.4134,\r
        "longitude": 28.2771,\r
        "date": "1990-06-30",\r
        "year": 1990,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          69.1725,\r
          34.5289\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AF1990A",\r
        "country": "Afghanistan",\r
        "countryCode": "AF",\r
        "region": "South Asia",\r
        "latitude": 34.5289,\r
        "longitude": 69.1725,\r
        "date": "1990-03-07",\r
        "year": 1990,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          120.9822,\r
          14.6042\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PH1990B",\r
        "country": "Philippines",\r
        "countryCode": "PH",\r
        "region": "Southeast Asia",\r
        "latitude": 14.6042,\r
        "longitude": 120.9822,\r
        "date": "1990-10-04",\r
        "year": 1990,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          147.1797,\r
          -9.4431\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PG1990C",\r
        "country": "Papua New Guinea",\r
        "countryCode": "PG",\r
        "region": "Oceania",\r
        "latitude": -9.4431,\r
        "longitude": 147.1797,\r
        "date": "1990-03-14",\r
        "year": 1990,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1989D",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1989-04-02",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1989E",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1989-04-05",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1989F",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1989-05-09",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -79.5196,\r
          8.9958\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PA1989G",\r
        "country": "Panama",\r
        "countryCode": "PA",\r
        "region": "Central America",\r
        "latitude": 8.9958,\r
        "longitude": -79.5196,\r
        "date": "1989-10-03",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -57.6359,\r
          -25.3007\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PY1989H",\r
        "country": "Paraguay",\r
        "countryCode": "PY",\r
        "region": "South America",\r
        "latitude": -25.3007,\r
        "longitude": -57.6359,\r
        "date": "1989-02-03",\r
        "year": 1989,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD1989I",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "1989-04-01",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          38.7469,\r
          9.025\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ET1989J",\r
        "country": "Ethiopia",\r
        "countryCode": "ET",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.025,\r
        "longitude": 38.7469,\r
        "date": "1989-05-16",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1989K",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1989-11-26",\r
        "year": 1989,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1989L",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1989-06-30",\r
        "year": 1989,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          120.9822,\r
          14.6042\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PH1989M",\r
        "country": "Philippines",\r
        "countryCode": "PH",\r
        "region": "Southeast Asia",\r
        "latitude": 14.6042,\r
        "longitude": 120.9822,\r
        "date": "1989-12-01",\r
        "year": 1989,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1988N",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1988-06-20",\r
        "year": 1988,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1988O",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1988-09-18",\r
        "year": 1988,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1988P",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1988-05-11",\r
        "year": 1988,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -79.5196,\r
          8.9958\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PA1988Q",\r
        "country": "Panama",\r
        "countryCode": "PA",\r
        "region": "Central America",\r
        "latitude": 8.9958,\r
        "longitude": -79.5196,\r
        "date": "1988-03-16",\r
        "year": 1988,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1988R",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1988-12-02",\r
        "year": 1988,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          96.1297,\r
          19.745\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MM1988S",\r
        "country": "Myanmar",\r
        "countryCode": "MM",\r
        "region": "Southeast Asia",\r
        "latitude": 19.745,\r
        "longitude": 96.1297,\r
        "date": "1988-09-18",\r
        "year": 1988,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1987T",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1987-10-15",\r
        "year": 1987,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1987U",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1987-03-23",\r
        "year": 1987,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1987V",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1987-09-03",\r
        "year": 1987,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1987W",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1987-11-30",\r
        "year": 1987,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          10.1658,\r
          36.819\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TN1987X",\r
        "country": "Tunisia",\r
        "countryCode": "TN",\r
        "region": "North Africa",\r
        "latitude": 36.819,\r
        "longitude": 10.1658,\r
        "date": "1987-11-07",\r
        "year": 1987,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          54.3618,\r
          24.4648\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AE1987Y",\r
        "country": "United Arab Emirates",\r
        "countryCode": "AE",\r
        "region": "Middle East",\r
        "latitude": 24.4648,\r
        "longitude": 54.3618,\r
        "date": "1987-06-16",\r
        "year": 1987,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          120.9822,\r
          14.6042\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PH1987Z",\r
        "country": "Philippines",\r
        "countryCode": "PH",\r
        "region": "Southeast Asia",\r
        "latitude": 14.6042,\r
        "longitude": 120.9822,\r
        "date": "1987-01-27",\r
        "year": 1987,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          120.9822,\r
          14.6042\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PH1987A",\r
        "country": "Philippines",\r
        "countryCode": "PH",\r
        "region": "Southeast Asia",\r
        "latitude": 14.6042,\r
        "longitude": 120.9822,\r
        "date": "1987-08-27",\r
        "year": 1987,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          178.4415,\r
          -18.1416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-FJ1987B",\r
        "country": "Fiji",\r
        "countryCode": "FJ",\r
        "region": "Oceania",\r
        "latitude": -18.1416,\r
        "longitude": 178.4415,\r
        "date": "1987-05-14",\r
        "year": 1987,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1986C",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1986-02-07",\r
        "year": 1986,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1986D",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1986-03-08",\r
        "year": 1986,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          8.7833,\r
          3.75\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GQ1986E",\r
        "country": "Equatorial Guinea",\r
        "countryCode": "GQ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 3.75,\r
        "longitude": 8.7833,\r
        "date": "1986-07-19",\r
        "year": 1986,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          27.4833,\r
          -29.3167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LS1986F",\r
        "country": "Lesotho",\r
        "countryCode": "LS",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -29.3167,\r
        "longitude": 27.4833,\r
        "date": "1986-01-20",\r
        "year": 1986,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.0187,\r
          12.7855\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1986G",\r
        "country": "Yemen People's Republic; S. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 12.7855,\r
        "longitude": 45.0187,\r
        "date": "1986-01-13",\r
        "year": 1986,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          120.9822,\r
          14.6042\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PH1986H",\r
        "country": "Philippines",\r
        "countryCode": "PH",\r
        "region": "Southeast Asia",\r
        "latitude": 14.6042,\r
        "longitude": 120.9822,\r
        "date": "1986-07-06",\r
        "year": 1986,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN1985I",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "1985-07-04",\r
        "year": 1985,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -10.7969,\r
          6.3005\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LR1985J",\r
        "country": "Liberia",\r
        "countryCode": "LR",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3005,\r
        "longitude": -10.7969,\r
        "date": "1985-04-01",\r
        "year": 1985,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -10.7969,\r
          6.3005\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LR1985K",\r
        "country": "Liberia",\r
        "countryCode": "LR",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3005,\r
        "longitude": -10.7969,\r
        "date": "1985-11-12",\r
        "year": 1985,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1985L",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1985-08-27",\r
        "year": 1985,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5822,\r
          0.3163\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UG1985M",\r
        "country": "Uganda",\r
        "countryCode": "UG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3163,\r
        "longitude": 32.5822,\r
        "date": "1985-07-27",\r
        "year": 1985,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1985N",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1985-03-08",\r
        "year": 1985,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1985O",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1985-04-06",\r
        "year": 1985,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1985P",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1985-09-09",\r
        "year": 1985,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1984Q",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1984-06-30",\r
        "year": 1984,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR1984R",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "1984-12-12",\r
        "year": 1984,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.6476,\r
          9.5716\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GN1984S",\r
        "country": "Guinea",\r
        "countryCode": "GN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.5716,\r
        "longitude": -13.6476,\r
        "date": "1984-04-03",\r
        "year": 1984,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1984T",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1984-03-23",\r
        "year": 1984,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          11.5167,\r
          3.8667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CM1984U",\r
        "country": "Cameroon",\r
        "countryCode": "CM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 3.8667,\r
        "longitude": 11.5167,\r
        "date": "1984-04-06",\r
        "year": 1984,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -61.7485,\r
          12.0564\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GD1983V",\r
        "country": "Grenada",\r
        "countryCode": "GD",\r
        "region": "Caribbean",\r
        "latitude": 12.0564,\r
        "longitude": -61.7485,\r
        "date": "1983-10-14",\r
        "year": 1983,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1983W",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1983-08-08",\r
        "year": 1983,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE1983X",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "1983-10-05",\r
        "year": 1983,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1983Y",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1983-08-04",\r
        "year": 1983,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1983Z",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1983-06-19",\r
        "year": 1983,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1983A",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1983-12-31",\r
        "year": 1983,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.1333,\r
          -26.3167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SZ1983B",\r
        "country": "Swaziland",\r
        "countryCode": "SZ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -26.3167,\r
        "longitude": 31.1333,\r
        "date": "1983-08-10",\r
        "year": 1983,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1982C",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1982-03-23",\r
        "year": 1982,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR1982D",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "1982-02-06",\r
        "year": 1982,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1982E",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1982-11-07",\r
        "year": 1982,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1982F",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1982-11-23",\r
        "year": 1982,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.8167,\r
          -1.2833\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KE1982G",\r
        "country": "Kenya",\r
        "countryCode": "KE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -1.2833,\r
        "longitude": 36.8167,\r
        "date": "1982-08-01",\r
        "year": 1982,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1982H",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1982-01-31",\r
        "year": 1982,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1982I",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1982-03-24",\r
        "year": 1982,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -61.3881,\r
          15.3017\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DM1981J",\r
        "country": "Dominica",\r
        "countryCode": "DM",\r
        "region": "Caribbean",\r
        "latitude": 15.3017,\r
        "longitude": -61.3881,\r
        "date": "1981-12-19",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1981K",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1981-05-15",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1981L",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1981-05-25",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1981M",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1981-06-27",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1981N",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1981-08-03",\r
        "year": 1981,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -3.7026,\r
          40.4165\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ES1981O",\r
        "country": "Spain",\r
        "countryCode": "ES",\r
        "region": "Europe",\r
        "latitude": 40.4165,\r
        "longitude": -3.7026,\r
        "date": "1981-02-23",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -16.6794,\r
          13.4531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GM1981P",\r
        "country": "Gambia",\r
        "countryCode": "GM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.4531,\r
        "longitude": -16.6794,\r
        "date": "1981-07-29",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1981Q",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1981-12-31",\r
        "year": 1981,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          18.555,\r
          4.3612\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CF1981R",\r
        "country": "Central African Republic",\r
        "countryCode": "CF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 4.3612,\r
        "longitude": 18.555,\r
        "date": "1981-09-01",\r
        "year": 1981,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1981S",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1981-05-30",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1981T",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1981-04-01",\r
        "year": 1981,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -55.1668,\r
          5.8664\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SR1980U",\r
        "country": "Suriname",\r
        "countryCode": "SR",\r
        "region": "South America",\r
        "latitude": 5.8664,\r
        "longitude": -55.1668,\r
        "date": "1980-02-25",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -55.1668,\r
          5.8664\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SR1980V",\r
        "country": "Suriname",\r
        "countryCode": "SR",\r
        "region": "South America",\r
        "latitude": 5.8664,\r
        "longitude": -55.1668,\r
        "date": "1980-08-15",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1980W",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1980-07-17",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.5977,\r
          11.8636\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GW1980X",\r
        "country": "Guinea-Bissau",\r
        "countryCode": "GW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 11.8636,\r
        "longitude": -15.5977,\r
        "date": "1980-11-15",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR1980Y",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "1980-01-04",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1980Z",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1980-11-25",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -10.7969,\r
          6.3005\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LR1980A",\r
        "country": "Liberia",\r
        "countryCode": "LR",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3005,\r
        "longitude": -10.7969,\r
        "date": "1980-04-12",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5822,\r
          0.3163\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UG1980B",\r
        "country": "Uganda",\r
        "countryCode": "UG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3163,\r
        "longitude": 32.5822,\r
        "date": "1980-05-11",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          28.2771,\r
          -15.4134\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ZM1980C",\r
        "country": "Zambia",\r
        "countryCode": "ZM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -15.4134,\r
        "longitude": 28.2771,\r
        "date": "1980-10-16",\r
        "year": 1980,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR1980D",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "1980-09-10",\r
        "year": 1980,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -61.7485,\r
          12.0564\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GD1979E",\r
        "country": "Grenada",\r
        "countryCode": "GD",\r
        "region": "Caribbean",\r
        "latitude": 12.0564,\r
        "longitude": -61.7485,\r
        "date": "1979-03-13",\r
        "year": 1979,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -89.1872,\r
          13.6894\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SV1979F",\r
        "country": "El Salvador",\r
        "countryCode": "SV",\r
        "region": "Central America",\r
        "latitude": 13.6894,\r
        "longitude": -89.1872,\r
        "date": "1979-10-15",\r
        "year": 1979,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1979G",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1979-10-11",\r
        "year": 1979,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1979H",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1979-11-01",\r
        "year": 1979,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          8.7833,\r
          3.75\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GQ1979I",\r
        "country": "Equatorial Guinea",\r
        "countryCode": "GQ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 3.75,\r
        "longitude": 8.7833,\r
        "date": "1979-08-03",\r
        "year": 1979,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1979J",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1979-05-15",\r
        "year": 1979,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1979K",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1979-06-04",\r
        "year": 1979,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1978L",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1978-08-07",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1978M",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1978-07-21",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1978N",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1978-11-24",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML1978O",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "1978-02-15",\r
        "year": 1978,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -15.9785,\r
          18.0858\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MR1978P",\r
        "country": "Mauritania",\r
        "countryCode": "MR",\r
        "region": "North Africa",\r
        "latitude": 18.0858,\r
        "longitude": -15.9785,\r
        "date": "1978-07-10",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1978Q",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1978-07-05",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.3435,\r
          2.0416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SO1978R",\r
        "country": "Somalia",\r
        "countryCode": "SO",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 2.0416,\r
        "longitude": 45.3435,\r
        "date": "1978-04-09",\r
        "year": 1978,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1978S",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1978-05-12",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.2078,\r
          15.3531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1978T",\r
        "country": "Yemen Arab Republic; N. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 15.3531,\r
        "longitude": 44.2078,\r
        "date": "1978-10-15",\r
        "year": 1978,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.0187,\r
          12.7855\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1978U",\r
        "country": "Yemen People's Republic; S. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 12.7855,\r
        "longitude": 45.0187,\r
        "date": "1978-06-26",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          69.1725,\r
          34.5289\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AF1978V",\r
        "country": "Afghanistan",\r
        "countryCode": "AF",\r
        "region": "South Asia",\r
        "latitude": 34.5289,\r
        "longitude": 69.1725,\r
        "date": "1978-04-27",\r
        "year": 1978,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          104.916,\r
          11.5625\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KH1978W",\r
        "country": "Cambodia",\r
        "countryCode": "KH",\r
        "region": "Southeast Asia",\r
        "latitude": 11.5625,\r
        "longitude": 104.916,\r
        "date": "1978-05-15",\r
        "year": 1978,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1977X",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1977-10-21",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD1977Y",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "1977-04-01",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          38.7469,\r
          9.025\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ET1977Z",\r
        "country": "Ethiopia",\r
        "countryCode": "ET",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.025,\r
        "longitude": 38.7469,\r
        "date": "1977-02-03",\r
        "year": 1977,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          13.2343,\r
          -8.8368\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AO1977A",\r
        "country": "Angola",\r
        "countryCode": "AO",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -8.8368,\r
        "longitude": 13.2343,\r
        "date": "1977-05-27",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          55.45,\r
          -4.6167\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SC1977B",\r
        "country": "Seychelles",\r
        "countryCode": "SC",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.6167,\r
        "longitude": 55.45,\r
        "date": "1977-06-05",\r
        "year": 1977,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1977C",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1977-02-03",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          73.0594,\r
          33.7035\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PK1977D",\r
        "country": "Pakistan",\r
        "countryCode": "PK",\r
        "region": "South Asia",\r
        "latitude": 33.7035,\r
        "longitude": 73.0594,\r
        "date": "1977-07-05",\r
        "year": 1977,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1977E",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1977-10-02",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1977F",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1977-03-26",\r
        "year": 1977,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1977G",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1977-10-20",\r
        "year": 1977,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1976H",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1976-01-11",\r
        "year": 1976,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1976I",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1976-03-24",\r
        "year": 1976,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -56.1674,\r
          -34.8335\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UY1976J",\r
        "country": "Uruguay",\r
        "countryCode": "UY",\r
        "region": "South America",\r
        "latitude": -34.8335,\r
        "longitude": -56.1674,\r
        "date": "1976-06-12",\r
        "year": 1976,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE1976K",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "1976-03-15",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1976L",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1976-02-13",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          18.555,\r
          4.3612\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CF1976M",\r
        "country": "Central African Republic",\r
        "countryCode": "CF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 4.3612,\r
        "longitude": 18.555,\r
        "date": "1976-02-05",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1976N",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1976-11-01",\r
        "year": 1976,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1976O",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1976-07-02",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          35.4833,\r
          33.9\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LB1976P",\r
        "country": "Lebanon",\r
        "countryCode": "LB",\r
        "region": "Middle East",\r
        "latitude": 33.9,\r
        "longitude": 35.4833,\r
        "date": "1976-03-12",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          96.1297,\r
          19.745\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MM1976Q",\r
        "country": "Myanmar",\r
        "countryCode": "MM",\r
        "region": "Southeast Asia",\r
        "latitude": 19.745,\r
        "longitude": 96.1297,\r
        "date": "1976-07-02",\r
        "year": 1976,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1976R",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1976-10-06",\r
        "year": 1976,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1975S",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1975-04-22",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1975T",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1975-09-01",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1975U",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1975-08-29",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1975V",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1975-12-18",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1975W",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1975-12-23",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -9.1399,\r
          38.7169\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PT1975X",\r
        "country": "Portugal",\r
        "countryCode": "PT",\r
        "region": "Europe",\r
        "latitude": 38.7169,\r
        "longitude": -9.1399,\r
        "date": "1975-03-11",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -9.1399,\r
          38.7169\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PT1975Y",\r
        "country": "Portugal",\r
        "countryCode": "PT",\r
        "region": "Europe",\r
        "latitude": 38.7169,\r
        "longitude": -9.1399,\r
        "date": "1975-11-25",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1975Z",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1975-01-21",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1975A",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1975-07-29",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.0444,\r
          12.1067\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TD1975B",\r
        "country": "Chad",\r
        "countryCode": "TD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.1067,\r
        "longitude": 15.0444,\r
        "date": "1975-04-13",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5892,\r
          -25.9653\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MZ1975C",\r
        "country": "Mozambique",\r
        "countryCode": "MZ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -25.9653,\r
        "longitude": 32.5892,\r
        "date": "1975-12-17",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          43.2551,\r
          -11.7022\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KM1975D",\r
        "country": "Comoros",\r
        "countryCode": "KM",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -11.7022,\r
        "longitude": 43.2551,\r
        "date": "1975-08-03",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          13.1875,\r
          32.8752\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LY1975E",\r
        "country": "Libya",\r
        "countryCode": "LY",\r
        "region": "North Africa",\r
        "latitude": 32.8752,\r
        "longitude": 13.1875,\r
        "date": "1975-08-05",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1975F",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1975-09-05",\r
        "year": 1975,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1975G",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1975-08-15",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          90.4074,\r
          23.7104\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BD1975H",\r
        "country": "Bangladesh",\r
        "countryCode": "BD",\r
        "region": "South Asia",\r
        "latitude": 23.7104,\r
        "longitude": 90.4074,\r
        "date": "1975-11-07",\r
        "year": 1975,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1974I",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1974-06-05",\r
        "year": 1974,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -9.1399,\r
          38.7169\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PT1974J",\r
        "country": "Portugal",\r
        "countryCode": "PT",\r
        "region": "Europe",\r
        "latitude": 38.7169,\r
        "longitude": -9.1399,\r
        "date": "1974-04-25",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          33.3669,\r
          35.1595\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CY1974K",\r
        "country": "Cyprus",\r
        "countryCode": "CY",\r
        "region": "Europe",\r
        "latitude": 35.1595,\r
        "longitude": 33.3669,\r
        "date": "1974-07-15",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.1098,\r
          13.5137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NE1974L",\r
        "country": "Niger",\r
        "countryCode": "NE",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 13.5137,\r
        "longitude": 2.1098,\r
        "date": "1974-04-15",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1974M",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1974-02-08",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5822,\r
          0.3163\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UG1974N",\r
        "country": "Uganda",\r
        "countryCode": "UG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3163,\r
        "longitude": 32.5822,\r
        "date": "1974-03-23",\r
        "year": 1974,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5822,\r
          0.3163\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UG1974O",\r
        "country": "Uganda",\r
        "countryCode": "UG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3163,\r
        "longitude": 32.5822,\r
        "date": "1974-11-11",\r
        "year": 1974,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          38.7469,\r
          9.025\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ET1974P",\r
        "country": "Ethiopia",\r
        "countryCode": "ET",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.025,\r
        "longitude": 38.7469,\r
        "date": "1974-09-12",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          47.5361,\r
          -18.9137\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MG1974Q",\r
        "country": "Madagascar",\r
        "countryCode": "MG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -18.9137,\r
        "longitude": 47.5361,\r
        "date": "1974-12-31",\r
        "year": 1974,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.2078,\r
          15.3531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1974R",\r
        "country": "Yemen Arab Republic; N. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 15.3531,\r
        "longitude": 44.2078,\r
        "date": "1974-06-13",\r
        "year": 1974,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -70.6483,\r
          -33.4569\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CL1973S",\r
        "country": "Chile",\r
        "countryCode": "CL",\r
        "region": "South America",\r
        "latitude": -33.4569,\r
        "longitude": -70.6483,\r
        "date": "1973-06-29",\r
        "year": 1973,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -70.6483,\r
          -33.4569\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CL1973T",\r
        "country": "Chile",\r
        "countryCode": "CL",\r
        "region": "South America",\r
        "latitude": -33.4569,\r
        "longitude": -70.6483,\r
        "date": "1973-09-11",\r
        "year": 1973,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -56.1674,\r
          -34.8335\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UY1973U",\r
        "country": "Uruguay",\r
        "countryCode": "UY",\r
        "region": "South America",\r
        "latitude": -34.8335,\r
        "longitude": -56.1674,\r
        "date": "1973-02-10",\r
        "year": 1973,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          23.749,\r
          37.9534\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GR1973V",\r
        "country": "Greece",\r
        "countryCode": "GR",\r
        "region": "Europe",\r
        "latitude": 37.9534,\r
        "longitude": 23.749,\r
        "date": "1973-11-25",\r
        "year": 1973,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          30.0579,\r
          -1.9474\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-RW1973W",\r
        "country": "Rwanda",\r
        "countryCode": "RW",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -1.9474,\r
        "longitude": 30.0579,\r
        "date": "1973-07-05",\r
        "year": 1973,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1973X",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1973-06-30",\r
        "year": 1973,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          69.1725,\r
          34.5289\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AF1973Y",\r
        "country": "Afghanistan",\r
        "countryCode": "AF",\r
        "region": "South Asia",\r
        "latitude": 34.5289,\r
        "longitude": 69.1725,\r
        "date": "1973-07-17",\r
        "year": 1973,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1973Z",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1973-08-20",\r
        "year": 1973,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1972A",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1972-12-04",\r
        "year": 1972,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -89.1872,\r
          13.6894\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SV1972B",\r
        "country": "El Salvador",\r
        "countryCode": "SV",\r
        "region": "Central America",\r
        "latitude": 13.6894,\r
        "longitude": -89.1872,\r
        "date": "1972-03-25",\r
        "year": 1972,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1972C",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1972-02-15",\r
        "year": 1972,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1972D",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1972-02-23",\r
        "year": 1972,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1972E",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1972-10-26",\r
        "year": 1972,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1972F",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1972-01-13",\r
        "year": 1972,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1972G",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1972-02-22",\r
        "year": 1972,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -6.8326,\r
          34.0133\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MA1972H",\r
        "country": "Morocco",\r
        "countryCode": "MA",\r
        "region": "North Africa",\r
        "latitude": 34.0133,\r
        "longitude": -6.8326,\r
        "date": "1972-08-16",\r
        "year": 1972,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          51.5245,\r
          25.2747\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-QA1972I",\r
        "country": "Qatar",\r
        "countryCode": "QA",\r
        "region": "Middle East",\r
        "latitude": 25.2747,\r
        "longitude": 51.5245,\r
        "date": "1972-02-22",\r
        "year": 1972,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          54.3618,\r
          24.4648\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AE1972J",\r
        "country": "United Arab Emirates",\r
        "countryCode": "AE",\r
        "region": "Middle East",\r
        "latitude": 24.4648,\r
        "longitude": 54.3618,\r
        "date": "1972-01-25",\r
        "year": 1972,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1971K",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1971-01-10",\r
        "year": 1971,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1971L",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1971-08-22",\r
        "year": 1971,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1971M",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1971-03-22",\r
        "year": 1971,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1971N",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1971-10-08",\r
        "year": 1971,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1971O",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1971-03-23",\r
        "year": 1971,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5822,\r
          0.3163\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-UG1971P",\r
        "country": "Uganda",\r
        "countryCode": "UG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3163,\r
        "longitude": 32.5822,\r
        "date": "1971-01-25",\r
        "year": 1971,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -6.8326,\r
          34.0133\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MA1971Q",\r
        "country": "Morocco",\r
        "countryCode": "MA",\r
        "region": "North Africa",\r
        "latitude": 34.0133,\r
        "longitude": -6.8326,\r
        "date": "1971-07-10",\r
        "year": 1971,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1971R",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1971-07-19",\r
        "year": 1971,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR1971S",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "1971-03-12",\r
        "year": 1971,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          73.0594,\r
          33.7035\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PK1971T",\r
        "country": "Pakistan",\r
        "countryCode": "PK",\r
        "region": "South Asia",\r
        "latitude": 33.7035,\r
        "longitude": 73.0594,\r
        "date": "1971-12-19",\r
        "year": 1971,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1970U",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1970-04-24",\r
        "year": 1970,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1970V",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1970-10-06",\r
        "year": 1970,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1970W",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1970-06-08",\r
        "year": 1970,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1970X",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1970-03-22",\r
        "year": 1970,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1970Y",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1970-01-20",\r
        "year": 1970,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1970Z",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1970-11-13",\r
        "year": 1970,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          58.5922,\r
          23.6139\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-OM1970A",\r
        "country": "Oman",\r
        "countryCode": "OM",\r
        "region": "Middle East",\r
        "latitude": 23.6139,\r
        "longitude": 58.5922,\r
        "date": "1970-07-26",\r
        "year": 1970,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          104.916,\r
          11.5625\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KH1970B",\r
        "country": "Cambodia",\r
        "countryCode": "KH",\r
        "region": "Southeast Asia",\r
        "latitude": 11.5625,\r
        "longitude": 104.916,\r
        "date": "1970-03-18",\r
        "year": 1970,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -79.5196,\r
          8.9958\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PA1969C",\r
        "country": "Panama",\r
        "countryCode": "PA",\r
        "region": "Central America",\r
        "latitude": 8.9958,\r
        "longitude": -79.5196,\r
        "date": "1969-12-14",\r
        "year": 1969,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1969D",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1969-08-31",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1969E",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1969-09-26",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          8.7833,\r
          3.75\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GQ1969F",\r
        "country": "Equatorial Guinea",\r
        "countryCode": "GQ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 3.75,\r
        "longitude": 8.7833,\r
        "date": "1969-03-05",\r
        "year": 1969,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1969G",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1969-12-10",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1969H",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1969-11-08",\r
        "year": 1969,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.3435,\r
          2.0416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SO1969I",\r
        "country": "Somalia",\r
        "countryCode": "SO",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 2.0416,\r
        "longitude": 45.3435,\r
        "date": "1969-10-21",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          13.1875,\r
          32.8752\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LY1969J",\r
        "country": "Libya",\r
        "countryCode": "LY",\r
        "region": "North Africa",\r
        "latitude": 32.8752,\r
        "longitude": 13.1875,\r
        "date": "1969-09-01",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1969K",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1969-05-25",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1969L",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1969-03-01",\r
        "year": 1969,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -79.5196,\r
          8.9958\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PA1968M",\r
        "country": "Panama",\r
        "countryCode": "PA",\r
        "region": "Central America",\r
        "latitude": 8.9958,\r
        "longitude": -79.5196,\r
        "date": "1968-10-12",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1968N",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1968-10-03",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -8,\r
          12.65\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ML1968O",\r
        "country": "Mali",\r
        "countryCode": "ML",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.65,\r
        "longitude": -8,\r
        "date": "1968-11-19",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1968P",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1968-04-18",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1968Q",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1968-08-03",\r
        "year": 1968,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1968R",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1968-09-04",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1968S",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1968-07-17",\r
        "year": 1968,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1968T",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1968-08-11",\r
        "year": 1968,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.0187,\r
          12.7855\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1968U",\r
        "country": "Yemen People's Republic; S. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 12.7855,\r
        "longitude": 45.0187,\r
        "date": "1968-03-20",\r
        "year": 1968,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.0187,\r
          12.7855\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1968V",\r
        "country": "Yemen People's Republic; S. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 12.7855,\r
        "longitude": 45.0187,\r
        "date": "1968-08-31",\r
        "year": 1968,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          23.749,\r
          37.9534\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GR1967W",\r
        "country": "Greece",\r
        "countryCode": "GR",\r
        "region": "Europe",\r
        "latitude": 37.9534,\r
        "longitude": 23.749,\r
        "date": "1967-04-21",\r
        "year": 1967,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          23.749,\r
          37.9534\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GR1967X",\r
        "country": "Greece",\r
        "countryCode": "GR",\r
        "region": "Europe",\r
        "latitude": 37.9534,\r
        "longitude": 23.749,\r
        "date": "1967-12-13",\r
        "year": 1967,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1967Y",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1967-12-17",\r
        "year": 1967,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1967Z",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1967-03-21",\r
        "year": 1967,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -13.2299,\r
          8.484\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SL1967A",\r
        "country": "Sierra Leone",\r
        "countryCode": "SL",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 8.484,\r
        "longitude": -13.2299,\r
        "date": "1967-03-23",\r
        "year": 1967,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1967B",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1967-04-17",\r
        "year": 1967,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1967C",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1967-01-13",\r
        "year": 1967,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          3.042,\r
          36.7525\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DZ1967D",\r
        "country": "Algeria",\r
        "countryCode": "DZ",\r
        "region": "North Africa",\r
        "latitude": 36.7525,\r
        "longitude": 3.042,\r
        "date": "1967-12-14",\r
        "year": 1967,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.2078,\r
          15.3531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1967E",\r
        "country": "Yemen Arab Republic; N. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 15.3531,\r
        "longitude": 44.2078,\r
        "date": "1967-11-04",\r
        "year": 1967,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1966F",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1966-10-30",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1966G",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1966-03-29",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1966H",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1966-06-28",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -1.5383,\r
          12.3642\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BF1966I",\r
        "country": "Burkina Faso",\r
        "countryCode": "BF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 12.3642,\r
        "longitude": -1.5383,\r
        "date": "1966-01-03",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -0.1969,\r
          5.556\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GH1966J",\r
        "country": "Ghana",\r
        "countryCode": "GH",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 5.556,\r
        "longitude": -0.1969,\r
        "date": "1966-02-24",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1966K",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1966-01-15",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          7.4898,\r
          9.0574\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-NG1966L",\r
        "country": "Nigeria",\r
        "countryCode": "NG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.0574,\r
        "longitude": 7.4898,\r
        "date": "1966-07-29",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          18.555,\r
          4.3612\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CF1966M",\r
        "country": "Central African Republic",\r
        "countryCode": "CF",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 4.3612,\r
        "longitude": 18.555,\r
        "date": "1966-01-01",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1966N",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1966-06-27",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1966O",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1966-07-08",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1966P",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1966-11-28",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1966Q",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1966-12-18",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1966R",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1966-12-28",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1966S",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1966-06-30",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1966T",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1966-02-23",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1966U",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1966-09-08",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1966V",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1966-10-21",\r
        "year": 1966,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.8416,\r
          -6.2118\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ID1966W",\r
        "country": "Indonesia",\r
        "countryCode": "ID",\r
        "region": "Southeast Asia",\r
        "latitude": -6.2118,\r
        "longitude": 106.8416,\r
        "date": "1966-03-12",\r
        "year": 1966,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -69.9018,\r
          18.4896\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DO1965X",\r
        "country": "Dominican Republic",\r
        "countryCode": "DO",\r
        "region": "Caribbean",\r
        "latitude": 18.4896,\r
        "longitude": -69.9018,\r
        "date": "1965-04-25",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -69.9018,\r
          18.4896\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DO1965Y",\r
        "country": "Dominican Republic",\r
        "countryCode": "DO",\r
        "region": "Caribbean",\r
        "latitude": 18.4896,\r
        "longitude": -69.9018,\r
        "date": "1965-11-22",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1965Z",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1965-11-29",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1965A",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1965-12-22",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.3136,\r
          -4.3276\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CD1965B",\r
        "country": "Democratic Republic of the Congo",\r
        "countryCode": "CD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.3276,\r
        "longitude": 15.3136,\r
        "date": "1965-11-25",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          29.3644,\r
          -3.3822\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BI1965C",\r
        "country": "Burundi",\r
        "countryCode": "BI",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -3.3822,\r
        "longitude": 29.3644,\r
        "date": "1965-10-18",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          3.042,\r
          36.7525\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DZ1965D",\r
        "country": "Algeria",\r
        "countryCode": "DZ",\r
        "region": "North Africa",\r
        "latitude": 36.7525,\r
        "longitude": 3.042,\r
        "date": "1965-06-19",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1965E",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1965-09-16",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1965F",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1965-01-31",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1965G",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1965-03-28",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1965H",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1965-04-16",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1965I",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1965-01-27",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1965J",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1965-02-19",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1965K",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1965-06-11",\r
        "year": 1965,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.8416,\r
          -6.2118\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ID1965L",\r
        "country": "Indonesia",\r
        "countryCode": "ID",\r
        "region": "Southeast Asia",\r
        "latitude": -6.2118,\r
        "longitude": 106.8416,\r
        "date": "1965-10-01",\r
        "year": 1965,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1964M",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1964-03-30",\r
        "year": 1964,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1964N",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1964-04-01",\r
        "year": 1964,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1964O",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1964-11-03",\r
        "year": 1964,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          9.4537,\r
          0.3925\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GA1964P",\r
        "country": "Gabon",\r
        "countryCode": "GA",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 0.3925,\r
        "longitude": 9.4537,\r
        "date": "1964-02-17",\r
        "year": 1964,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          3.042,\r
          36.7525\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DZ1964Q",\r
        "country": "Algeria",\r
        "countryCode": "DZ",\r
        "region": "North Africa",\r
        "latitude": 36.7525,\r
        "longitude": 3.042,\r
        "date": "1964-06-30",\r
        "year": 1964,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1964R",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1964-04-19",\r
        "year": 1964,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1964S",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1964-01-30",\r
        "year": 1964,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1964T",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1964-09-13",\r
        "year": 1964,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -69.9018,\r
          18.4896\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DO1963U",\r
        "country": "Dominican Republic",\r
        "countryCode": "DO",\r
        "region": "Caribbean",\r
        "latitude": 18.4896,\r
        "longitude": -69.9018,\r
        "date": "1963-09-25",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1963V",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1963-03-30",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1963W",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1963-10-03",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1963X",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1963-07-11",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1963Y",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1963-03-03",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1963Z",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1963-09-12",\r
        "year": 1963,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1963A",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1963-04-02",\r
        "year": 1963,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          2.4183,\r
          6.3654\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BJ1963B",\r
        "country": "Benin",\r
        "countryCode": "BJ",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.3654,\r
        "longitude": 2.4183,\r
        "date": "1963-10-28",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          1.2123,\r
          6.1375\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TG1963C",\r
        "country": "Togo",\r
        "countryCode": "TG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 6.1375,\r
        "longitude": 1.2123,\r
        "date": "1963-01-13",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.2832,\r
          -4.2658\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CG1963D",\r
        "country": "Congo",\r
        "countryCode": "CG",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.2658,\r
        "longitude": 15.2832,\r
        "date": "1963-08-15",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR1963E",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "1963-05-20",\r
        "year": 1963,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1963F",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1963-02-08",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1963G",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1963-11-18",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1963H",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1963-03-08",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1963I",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1963-07-18",\r
        "year": 1963,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1963J",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1963-11-01",\r
        "year": 1963,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -69.9018,\r
          18.4896\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-DO1962K",\r
        "country": "Dominican Republic",\r
        "countryCode": "DO",\r
        "region": "Caribbean",\r
        "latitude": 18.4896,\r
        "longitude": -69.9018,\r
        "date": "1962-01-16",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1962L",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1962-11-25",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1962M",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1962-05-04",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1962N",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1962-06-02",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1962O",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1962-07-18",\r
        "year": 1962,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1962P",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1962-03-28",\r
        "year": 1962,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1962Q",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1962-08-08",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1962R",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1962-09-19",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -9.1399,\r
          38.7169\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PT1962S",\r
        "country": "Portugal",\r
        "countryCode": "PT",\r
        "region": "Europe",\r
        "latitude": 38.7169,\r
        "longitude": -9.1399,\r
        "date": "1962-01-01",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -17.4441,\r
          14.6937\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SN1962T",\r
        "country": "Senegal",\r
        "countryCode": "SN",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 14.6937,\r
        "longitude": -17.4441,\r
        "date": "1962-12-17",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR1962U",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "1962-02-22",\r
        "year": 1962,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1962V",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1962-03-28",\r
        "year": 1962,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.2078,\r
          15.3531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1962W",\r
        "country": "Yemen Arab Republic; N. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 15.3531,\r
        "longitude": 44.2078,\r
        "date": "1962-09-27",\r
        "year": 1962,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          96.1297,\r
          19.745\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MM1962X",\r
        "country": "Myanmar",\r
        "countryCode": "MM",\r
        "region": "Southeast Asia",\r
        "latitude": 19.745,\r
        "longitude": 96.1297,\r
        "date": "1962-03-02",\r
        "year": 1962,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -89.1872,\r
          13.6894\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SV1961Y",\r
        "country": "El Salvador",\r
        "countryCode": "SV",\r
        "region": "Central America",\r
        "latitude": 13.6894,\r
        "longitude": -89.1872,\r
        "date": "1961-01-25",\r
        "year": 1961,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -74.0818,\r
          4.6097\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CO1961Z",\r
        "country": "Colombia",\r
        "countryCode": "CO",\r
        "region": "South America",\r
        "latitude": 4.6097,\r
        "longitude": -74.0818,\r
        "date": "1961-10-11",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1961A",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1961-02-20",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1961B",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1961-06-26",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1961C",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1961-11-08",\r
        "year": 1961,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1961D",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1961-08-11",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          45.3435,\r
          2.0416\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SO1961E",\r
        "country": "Somalia",\r
        "countryCode": "SO",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 2.0416,\r
        "longitude": 45.3435,\r
        "date": "1961-12-10",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          38.7469,\r
          9.025\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ET1961F",\r
        "country": "Ethiopia",\r
        "countryCode": "ET",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.025,\r
        "longitude": 38.7469,\r
        "date": "1961-12-14",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1961G",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1961-09-28",\r
        "year": 1961,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          35.4833,\r
          33.9\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LB1961H",\r
        "country": "Lebanon",\r
        "countryCode": "LB",\r
        "region": "Middle East",\r
        "latitude": 33.9,\r
        "longitude": 35.4833,\r
        "date": "1961-12-31",\r
        "year": 1961,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          126.9778,\r
          37.5683\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-KR1961I",\r
        "country": "South Korea",\r
        "countryCode": "KR",\r
        "region": "East Asia",\r
        "latitude": 37.5683,\r
        "longitude": 126.9778,\r
        "date": "1961-05-16",\r
        "year": 1961,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1960J",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1960-11-13",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -89.1872,\r
          13.6894\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SV1960K",\r
        "country": "El Salvador",\r
        "countryCode": "SV",\r
        "region": "Central America",\r
        "latitude": 13.6894,\r
        "longitude": -89.1872,\r
        "date": "1960-10-26",\r
        "year": 1960,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1960L",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1960-09-12",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1960M",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1960-03-19",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1960N",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1960-06-13",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1960O",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1960-11-30",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          15.3136,\r
          -4.3276\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CD1960P",\r
        "country": "Democratic Republic of the Congo",\r
        "countryCode": "CD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": -4.3276,\r
        "longitude": 15.3136,\r
        "date": "1960-09-14",\r
        "year": 1960,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          38.7469,\r
          9.025\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-ET1960Q",\r
        "country": "Ethiopia",\r
        "countryCode": "ET",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 9.025,\r
        "longitude": 38.7469,\r
        "date": "1960-12-14",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.8543,\r
          39.9199\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TR1960R",\r
        "country": "Turkey",\r
        "countryCode": "TR",\r
        "region": "Europe",\r
        "latitude": 39.9199,\r
        "longitude": 32.8543,\r
        "date": "1960-05-27",\r
        "year": 1960,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1960S",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1960-08-09",\r
        "year": 1960,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          102.6,\r
          17.9667\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-LA1960T",\r
        "country": "Laos",\r
        "countryCode": "LA",\r
        "region": "Southeast Asia",\r
        "latitude": 17.9667,\r
        "longitude": 102.6,\r
        "date": "1960-12-08",\r
        "year": 1960,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          106.6297,\r
          10.8231\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VN1960U",\r
        "country": "Republic of Vietnam",\r
        "countryCode": "VN",\r
        "region": "East Asia",\r
        "latitude": 10.8231,\r
        "longitude": 106.6297,\r
        "date": "1960-11-11",\r
        "year": 1960,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1959V",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1959-07-12",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1959W",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1959-12-03",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1959X",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1959-04-19",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1959Y",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1959-05-21",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1959Z",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1959-11-09",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1959A",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1959-03-07",\r
        "year": 1959,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -74.0818,\r
          4.6097\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CO1958B",\r
        "country": "Colombia",\r
        "countryCode": "CO",\r
        "region": "South America",\r
        "latitude": 4.6097,\r
        "longitude": -74.0818,\r
        "date": "1958-05-02",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1958C",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1958-01-01",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1958D",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1958-07-22",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1958E",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1958-09-07",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1958F",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1958-10-21",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          32.5324,\r
          15.5518\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SD1958G",\r
        "country": "Sudan",\r
        "countryCode": "SD",\r
        "region": "Sub-Saharan Africa",\r
        "latitude": 15.5518,\r
        "longitude": 32.5324,\r
        "date": "1958-11-17",\r
        "year": 1958,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.4009,\r
          33.3406\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IQ1958H",\r
        "country": "Iraq",\r
        "countryCode": "IQ",\r
        "region": "Middle East",\r
        "latitude": 33.3406,\r
        "longitude": 44.4009,\r
        "date": "1958-07-14",\r
        "year": 1958,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          35.945,\r
          31.9552\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-JO1958I",\r
        "country": "Jordan",\r
        "countryCode": "JO",\r
        "region": "Middle East",\r
        "latitude": 31.9552,\r
        "longitude": 35.945,\r
        "date": "1958-07-01",\r
        "year": 1958,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          73.0594,\r
          33.7035\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PK1958J",\r
        "country": "Pakistan",\r
        "countryCode": "PK",\r
        "region": "South Asia",\r
        "latitude": 33.7035,\r
        "longitude": 73.0594,\r
        "date": "1958-10-27",\r
        "year": 1958,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          96.1297,\r
          19.745\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-MM1958K",\r
        "country": "Myanmar",\r
        "countryCode": "MM",\r
        "region": "Southeast Asia",\r
        "latitude": 19.745,\r
        "longitude": 96.1297,\r
        "date": "1958-09-26",\r
        "year": 1958,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1958L",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1958-10-20",\r
        "year": 1958,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -82.3785,\r
          23.1195\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CU1957M",\r
        "country": "Cuba",\r
        "countryCode": "CU",\r
        "region": "Caribbean",\r
        "latitude": 23.1195,\r
        "longitude": -82.3785,\r
        "date": "1957-09-05",\r
        "year": 1957,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1957N",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1957-04-02",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1957O",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1957-05-21",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1957P",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1957-06-14",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1957Q",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1957-10-24",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -74.0818,\r
          4.6097\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CO1957R",\r
        "country": "Colombia",\r
        "countryCode": "CO",\r
        "region": "South America",\r
        "latitude": 4.6097,\r
        "longitude": -74.0818,\r
        "date": "1957-05-10",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          35.945,\r
          31.9552\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-JO1957S",\r
        "country": "Jordan",\r
        "countryCode": "JO",\r
        "region": "Middle East",\r
        "latitude": 31.9552,\r
        "longitude": 35.945,\r
        "date": "1957-04-13",\r
        "year": 1957,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1957T",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1957-09-16",\r
        "year": 1957,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1956U",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1956-12-12",\r
        "year": 1956,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1956V",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1956-08-01",\r
        "year": 1956,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -87.2068,\r
          14.0818\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HN1956W",\r
        "country": "Honduras",\r
        "countryCode": "HN",\r
        "region": "Central America",\r
        "latitude": 14.0818,\r
        "longitude": -87.2068,\r
        "date": "1956-10-21",\r
        "year": 1956,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1956X",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1956-08-07",\r
        "year": 1956,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1956Y",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1956-02-16",\r
        "year": 1956,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1956Z",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1956-06-09",\r
        "year": 1956,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1955A",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1955-01-20",\r
        "year": 1955,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -47.9297,\r
          -15.7797\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BR1955B",\r
        "country": "Brazil",\r
        "countryCode": "BR",\r
        "region": "South America",\r
        "latitude": -15.7797,\r
        "longitude": -47.9297,\r
        "date": "1955-11-11",\r
        "year": 1955,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -57.6359,\r
          -25.3007\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PY1955C",\r
        "country": "Paraguay",\r
        "countryCode": "PY",\r
        "region": "South America",\r
        "latitude": -25.3007,\r
        "longitude": -57.6359,\r
        "date": "1955-12-21",\r
        "year": 1955,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1955D",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1955-06-16",\r
        "year": 1955,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1955E",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1955-09-16",\r
        "year": 1955,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1955F",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1955-11-13",\r
        "year": 1955,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          44.2078,\r
          15.3531\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-YE1955G",\r
        "country": "Yemen Arab Republic; N. Yemen",\r
        "countryCode": "YE",\r
        "region": "Middle East",\r
        "latitude": 15.3531,\r
        "longitude": 44.2078,\r
        "date": "1955-04-02",\r
        "year": 1955,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -90.5307,\r
          14.6127\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-GT1954H",\r
        "country": "Guatemala",\r
        "countryCode": "GT",\r
        "region": "Central America",\r
        "latitude": 14.6127,\r
        "longitude": -90.5307,\r
        "date": "1954-06-29",\r
        "year": 1954,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1954I",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1954-12-23",\r
        "year": 1954,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -77.0282,\r
          -12.0432\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PE1954J",\r
        "country": "Peru",\r
        "countryCode": "PE",\r
        "region": "South America",\r
        "latitude": -12.0432,\r
        "longitude": -77.0282,\r
        "date": "1954-08-10",\r
        "year": 1954,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -57.6359,\r
          -25.3007\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PY1954K",\r
        "country": "Paraguay",\r
        "countryCode": "PY",\r
        "region": "South America",\r
        "latitude": -25.3007,\r
        "longitude": -57.6359,\r
        "date": "1954-05-05",\r
        "year": 1954,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.2394,\r
          30.0392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EG1954L",\r
        "country": "Egypt",\r
        "countryCode": "EG",\r
        "region": "North Africa",\r
        "latitude": 30.0392,\r
        "longitude": 31.2394,\r
        "date": "1954-02-27",\r
        "year": 1954,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1954M",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1954-02-25",\r
        "year": 1954,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -74.0818,\r
          4.6097\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CO1953N",\r
        "country": "Colombia",\r
        "countryCode": "CO",\r
        "region": "South America",\r
        "latitude": 4.6097,\r
        "longitude": -74.0818,\r
        "date": "1953-06-13",\r
        "year": 1953,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1953O",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1953-01-06",\r
        "year": 1953,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          51.4215,\r
          35.6944\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-IR1953P",\r
        "country": "Iran",\r
        "countryCode": "IR",\r
        "region": "Middle East",\r
        "latitude": 35.6944,\r
        "longitude": 51.4215,\r
        "date": "1953-08-13",\r
        "year": 1953,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -82.3785,\r
          23.1195\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-CU1952Q",\r
        "country": "Cuba",\r
        "countryCode": "CU",\r
        "region": "Caribbean",\r
        "latitude": 23.1195,\r
        "longitude": -82.3785,\r
        "date": "1952-03-10",\r
        "year": 1952,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -66.8792,\r
          10.488\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-VE1952R",\r
        "country": "Venezuela",\r
        "countryCode": "VE",\r
        "region": "South America",\r
        "latitude": 10.488,\r
        "longitude": -66.8792,\r
        "date": "1952-09-29",\r
        "year": 1952,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -78.525,\r
          -0.2299\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EC1952S",\r
        "country": "Ecuador",\r
        "countryCode": "EC",\r
        "region": "South America",\r
        "latitude": -0.2299,\r
        "longitude": -78.525,\r
        "date": "1952-03-03",\r
        "year": 1952,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1952T",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1952-04-09",\r
        "year": 1952,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          31.2394,\r
          30.0392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-EG1952U",\r
        "country": "Egypt",\r
        "countryCode": "EG",\r
        "region": "North Africa",\r
        "latitude": 30.0392,\r
        "longitude": 31.2394,\r
        "date": "1952-07-23",\r
        "year": 1952,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -79.5196,\r
          8.9958\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-PA1951V",\r
        "country": "Panama",\r
        "countryCode": "PA",\r
        "region": "Central America",\r
        "latitude": 8.9958,\r
        "longitude": -79.5196,\r
        "date": "1951-05-09",\r
        "year": 1951,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1951W",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1951-05-16",\r
        "year": 1951,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -58.4004,\r
          -34.6051\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-AR1951X",\r
        "country": "Argentina",\r
        "countryCode": "AR",\r
        "region": "South America",\r
        "latitude": -34.6051,\r
        "longitude": -58.4004,\r
        "date": "1951-09-28",\r
        "year": 1951,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          36.3084,\r
          33.5086\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-SY1951Y",\r
        "country": "Syria",\r
        "countryCode": "SY",\r
        "region": "Middle East",\r
        "latitude": 33.5086,\r
        "longitude": 36.3084,\r
        "date": "1951-11-29",\r
        "year": 1951,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1951Z",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1951-06-29",\r
        "year": 1951,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          100.5252,\r
          13.722\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-TH1951A",\r
        "country": "Thailand",\r
        "countryCode": "TH",\r
        "region": "Southeast Asia",\r
        "latitude": 13.722,\r
        "longitude": 100.5252,\r
        "date": "1951-11-29",\r
        "year": 1951,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -72.335,\r
          18.5392\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-HT1950B",\r
        "country": "Haiti",\r
        "countryCode": "HT",\r
        "region": "Caribbean",\r
        "latitude": 18.5392,\r
        "longitude": -72.335,\r
        "date": "1950-05-10",\r
        "year": 1950,\r
        "outcome": "successful",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "geometry": {\r
        "type": "Point",\r
        "coordinates": [\r
          -68.15,\r
          -16.5\r
        ]\r
      },\r
      "properties": {\r
        "id": "CPV-BO1950C",\r
        "country": "Bolivia",\r
        "countryCode": "BO",\r
        "region": "South America",\r
        "latitude": -16.5,\r
        "longitude": -68.15,\r
        "date": "1950-07-22",\r
        "year": 1950,\r
        "outcome": "failed",\r
        "tags": [\r
          "military"\r
        ]\r
      }\r
    }\r
  ]\r
}`,ea=JSON.parse(Np);function Mp(r){const n=new Set(r.map(e=>e.id));return{...ea,features:(ea.features??[]).filter(e=>n.has(e.properties.id))}}function Tp(){return(ea.features??[]).map(r=>r.properties)}function Lp({mapRef:r,sourceId:n}){const[e,t]=S.useState(null),o=S.useCallback(a=>{var c,m;const u=(c=r.current)==null?void 0:c.getMap();if(!u||!((m=a.features)!=null&&m.length))return;const l=a.features[0];l.id!=null&&(e!=null&&e!==l.id&&u.setFeatureState({source:n,id:e},{hover:!1}),t(l.id),u.getCanvas().style.cursor="pointer",u.setFeatureState({source:n,id:l.id},{hover:!0}))},[e,r,n]),i=S.useCallback(()=>{var u;const a=(u=r.current)==null?void 0:u.getMap();a&&(e!=null&&(a.setFeatureState({source:n,id:e},{hover:!1}),t(null)),a.getCanvas().style.cursor="")},[e,r,n]);return{onMouseEnter:o,onMouseLeave:i}}function Rp(r){S.useEffect(()=>{const n=e=>{e.key==="Escape"&&r(null)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[r])}function _p({mapRef:r,layerIds:n,setSelectedEvent:e}){S.useEffect(()=>{var i;const t=(i=r.current)==null?void 0:i.getMap();if(!t)return;const o=a=>{t.queryRenderedFeatures([a.point.x,a.point.y],{layers:n}).length===0&&e(null)};return t.on("click",o),()=>{t.off("click",o)}},[n,r,e])}const jp="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",Op={"circle-radius":["case",["boolean",["feature-state","hover"],!1],14,10],"circle-color":["match",["get","outcome"],"successful",kr.successful,"failed",kr.failed,"attempted",kr.attempted,"plot",kr.plot,"alleged",kr.alleged,kr.alleged],"circle-stroke-width":2,"circle-stroke-color":"#020617","circle-opacity":1};function Dp(){const r=S.useRef(null),[n,e]=S.useState(!1),[t,o]=S.useState(null),i=S.useMemo(()=>Tp(),[]),a=L(v=>v.yearRange),u=L(v=>v.viewMode),l=S.useMemo(()=>i.filter(v=>v.year>=a[0]&&v.year<=a[1]),[i,a]);S.useEffect(()=>{fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson").then(v=>v.json()).then(v=>o(v)).catch(v=>console.error("Failed to load countries GeoJSON:",v))},[]);const c=L(v=>v.selectedEvent),m=L(v=>v.setSelectedEvent),f=L(v=>v.setSelectedCountry),g=L(v=>v.searchQuery),P=L(v=>v.selectedOutcomes),h=L(v=>v.selectedRegions),F=L(v=>v.dateRange),A=L(v=>v.selectedTags),y=S.useMemo(()=>Sp({searchQuery:g,selectedOutcomes:P,selectedRegions:h,dateRange:F,selectedTags:A},i),[g,P,h,F,A,i]),s={id:"coup-circles",type:"circle",source:"coups",paint:Op,filter:y},{onMouseEnter:p,onMouseLeave:C}=Lp({mapRef:r,sourceId:"coups"}),w=S.useCallback(v=>{var G,R,yr,an,un,Ee,mt;const E=(G=v.features)==null?void 0:G.find(rr=>{var Pr;return((Pr=rr.layer)==null?void 0:Pr.id)==="coup-circles"});if(E){const rr=E.properties;m(rr),f(rr.country);return}const N=(R=v.features)==null?void 0:R.find(rr=>{var Pr;return((Pr=rr.layer)==null?void 0:Pr.id)==="countries-fill"});if(N){const rr=((yr=N.properties)==null?void 0:yr.ADMIN)||((an=N.properties)==null?void 0:an.name);if(rr){f(rr),m(null);return}}if(t&&t.features){let rr=null,Pr=1/0;for(const V of t.features){const T=((un=V.properties)==null?void 0:un.ADMIN)||((Ee=V.properties)==null?void 0:Ee.name);if(!T)continue;const M=V.geometry;if(!M)continue;let O=[];if(M.type==="Polygon"&&M.coordinates[0]?O=M.coordinates[0]:M.type==="MultiPolygon"&&(mt=M.coordinates[0])!=null&&mt[0]&&(O=M.coordinates[0][0]),O.length>0){const $=O.reduce((ln,jo)=>ln+jo[0],0)/O.length,Qn=O.reduce((ln,jo)=>ln+jo[1],0)/O.length,Gr=$-v.lngLat.lng,Wn=Qn-v.lngLat.lat,Hr=Math.sqrt(Gr*Gr+Wn*Wn);Hr<Pr&&(Pr=Hr,rr=T)}}if(rr&&Pr<15){f(rr),m(null);return}}m(null),f(null)},[m,f,t]);return _p({mapRef:r,layerIds:["coup-circles"],setSelectedEvent:m}),Rp(m),d.jsx(kp,{mapRef:r,allEvents:i,children:d.jsx("div",{className:"relative h-full w-full",children:u==="events"?d.jsxs(d.Fragment,{children:[!n&&d.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]",children:d.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500"})}),d.jsxs(N1,{ref:r,initialViewState:{longitude:20,latitude:15,zoom:2},mapStyle:jp,interactiveLayerIds:["coup-circles","countries-fill"],onMouseEnter:p,onMouseLeave:C,onClick:w,onLoad:()=>e(!0),children:[d.jsx(hl,{id:"coups",type:"geojson",data:Mp(l),promoteId:"id",children:d.jsx(Cl,{...s})}),t&&d.jsx(hl,{id:"countries",type:"geojson",data:t,children:d.jsx(Cl,{id:"countries-fill",type:"fill",paint:{"fill-color":"rgba(0,0,0,0)","fill-opacity":0}})}),c&&d.jsx(T1,{longitude:c.longitude,latitude:c.latitude,onClose:()=>m(null),closeButton:!0,closeOnClick:!1,children:d.jsx(Q1,{event:c})})]}),d.jsx($1,{})]}):d.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#0f1117]",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Coup Risk View"}),d.jsx("p",{className:"text-gray-400",children:"Risk analysis visualization coming soon"})]})})})})}function Bp({error:r,resetErrorBoundary:n}){return d.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0f1117] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-center",children:[d.jsx(X1,{className:"h-12 w-12 text-amber-500"}),d.jsx("h1",{className:"text-lg font-semibold text-white",children:"Something went wrong"}),d.jsx("p",{className:"max-w-md text-sm text-gray-400",children:r.message}),n&&d.jsx("button",{type:"button",onClick:n,className:"rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/30",children:"Try again"})]})}class zp extends S.Component{constructor(){super(...arguments);Xa(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught:",e,t)}render(){return this.state.error?d.jsx(Bp,{error:this.state.error,resetErrorBoundary:()=>this.setState({error:null})}):this.props.children}}_c(document.getElementById("root")).render(d.jsx(S.StrictMode,{children:d.jsx(zp,{children:d.jsx(Dp,{})})}));export{Gp as c,Uc as g};
