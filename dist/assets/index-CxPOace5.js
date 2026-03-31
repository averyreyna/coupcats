var Jc=Object.defineProperty;var Xc=(r,n,e)=>n in r?Jc(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e;var su=(r,n,e)=>Xc(r,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tl={exports:{}},Fo={},Ll={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=Symbol.for("react.element"),rd=Symbol.for("react.portal"),nd=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),id=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),ld=Symbol.for("react.memo"),sd=Symbol.for("react.lazy"),cu=Symbol.iterator;function cd(r){return r===null||typeof r!="object"?null:(r=cu&&r[cu]||r["@@iterator"],typeof r=="function"?r:null)}var _l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,jl={};function Fe(r,n,e){this.props=r,this.context=n,this.refs=jl,this.updater=e||_l}Fe.prototype.isReactComponent={};Fe.prototype.setState=function(r,n){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,n,"setState")};Fe.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Dl(){}Dl.prototype=Fe.prototype;function da(r,n,e){this.props=r,this.context=n,this.refs=jl,this.updater=e||_l}var ya=da.prototype=new Dl;ya.constructor=da;Rl(ya,Fe.prototype);ya.isPureReactComponent=!0;var du=Array.isArray,Ol=Object.prototype.hasOwnProperty,pa={current:null},Bl={key:!0,ref:!0,__self:!0,__source:!0};function zl(r,n,e){var t,o={},i=null,a=null;if(n!=null)for(t in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Ol.call(n,t)&&!Bl.hasOwnProperty(t)&&(o[t]=n[t]);var u=arguments.length-2;if(u===1)o.children=e;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(r&&r.defaultProps)for(t in u=r.defaultProps,u)o[t]===void 0&&(o[t]=u[t]);return{$$typeof:ft,type:r,key:i,ref:a,props:o,_owner:pa.current}}function dd(r,n){return{$$typeof:ft,type:r.type,key:n,ref:r.ref,props:r.props,_owner:r._owner}}function fa(r){return typeof r=="object"&&r!==null&&r.$$typeof===ft}function yd(r){var n={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(e){return n[e]})}var yu=/\/+/g;function Go(r,n){return typeof r=="object"&&r!==null&&r.key!=null?yd(""+r.key):n.toString(36)}function It(r,n,e,t,o){var i=typeof r;(i==="undefined"||i==="boolean")&&(r=null);var a=!1;if(r===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(r.$$typeof){case ft:case rd:a=!0}}if(a)return a=r,o=o(a),r=t===""?"."+Go(a,0):t,du(o)?(e="",r!=null&&(e=r.replace(yu,"$&/")+"/"),It(o,n,e,"",function(c){return c})):o!=null&&(fa(o)&&(o=dd(o,e+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(yu,"$&/")+"/")+r)),n.push(o)),1;if(a=0,t=t===""?".":t+":",du(r))for(var u=0;u<r.length;u++){i=r[u];var l=t+Go(i,u);a+=It(i,n,e,l,o)}else if(l=cd(r),typeof l=="function")for(r=l.call(r),u=0;!(i=r.next()).done;)i=i.value,l=t+Go(i,u++),a+=It(i,n,e,l,o);else if(i==="object")throw n=String(r),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Pt(r,n,e){if(r==null)return r;var t=[],o=0;return It(r,t,"","",function(i){return n.call(e,i,o++)}),t}function pd(r){if(r._status===-1){var n=r._result;n=n(),n.then(function(e){(r._status===0||r._status===-1)&&(r._status=1,r._result=e)},function(e){(r._status===0||r._status===-1)&&(r._status=2,r._result=e)}),r._status===-1&&(r._status=0,r._result=n)}if(r._status===1)return r._result.default;throw r._result}var fr={current:null},bt={transition:null},fd={ReactCurrentDispatcher:fr,ReactCurrentBatchConfig:bt,ReactCurrentOwner:pa};function Il(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Pt,forEach:function(r,n,e){Pt(r,function(){n.apply(this,arguments)},e)},count:function(r){var n=0;return Pt(r,function(){n++}),n},toArray:function(r){return Pt(r,function(n){return n})||[]},only:function(r){if(!fa(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};j.Component=Fe;j.Fragment=nd;j.Profiler=td;j.PureComponent=da;j.StrictMode=ed;j.Suspense=ud;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd;j.act=Il;j.cloneElement=function(r,n,e){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var t=Rl({},r.props),o=r.key,i=r.ref,a=r._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=pa.current),n.key!==void 0&&(o=""+n.key),r.type&&r.type.defaultProps)var u=r.type.defaultProps;for(l in n)Ol.call(n,l)&&!Bl.hasOwnProperty(l)&&(t[l]=n[l]===void 0&&u!==void 0?u[l]:n[l])}var l=arguments.length-2;if(l===1)t.children=e;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];t.children=u}return{$$typeof:ft,type:r.type,key:o,ref:i,props:t,_owner:a}};j.createContext=function(r){return r={$$typeof:id,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:od,_context:r},r.Consumer=r};j.createElement=zl;j.createFactory=function(r){var n=zl.bind(null,r);return n.type=r,n};j.createRef=function(){return{current:null}};j.forwardRef=function(r){return{$$typeof:ad,render:r}};j.isValidElement=fa;j.lazy=function(r){return{$$typeof:sd,_payload:{_status:-1,_result:r},_init:pd}};j.memo=function(r,n){return{$$typeof:ld,type:r,compare:n===void 0?null:n}};j.startTransition=function(r){var n=bt.transition;bt.transition={};try{r()}finally{bt.transition=n}};j.unstable_act=Il;j.useCallback=function(r,n){return fr.current.useCallback(r,n)};j.useContext=function(r){return fr.current.useContext(r)};j.useDebugValue=function(){};j.useDeferredValue=function(r){return fr.current.useDeferredValue(r)};j.useEffect=function(r,n){return fr.current.useEffect(r,n)};j.useId=function(){return fr.current.useId()};j.useImperativeHandle=function(r,n,e){return fr.current.useImperativeHandle(r,n,e)};j.useInsertionEffect=function(r,n){return fr.current.useInsertionEffect(r,n)};j.useLayoutEffect=function(r,n){return fr.current.useLayoutEffect(r,n)};j.useMemo=function(r,n){return fr.current.useMemo(r,n)};j.useReducer=function(r,n,e){return fr.current.useReducer(r,n,e)};j.useRef=function(r){return fr.current.useRef(r)};j.useState=function(r){return fr.current.useState(r)};j.useSyncExternalStore=function(r,n,e){return fr.current.useSyncExternalStore(r,n,e)};j.useTransition=function(){return fr.current.useTransition()};j.version="18.3.1";Ll.exports=j;var v=Ll.exports;const St=qc(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=v,md=Symbol.for("react.element"),hd=Symbol.for("react.fragment"),Cd=Object.prototype.hasOwnProperty,vd=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pd={key:!0,ref:!0,__self:!0,__source:!0};function bl(r,n,e){var t,o={},i=null,a=null;e!==void 0&&(i=""+e),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(t in n)Cd.call(n,t)&&!Pd.hasOwnProperty(t)&&(o[t]=n[t]);if(r&&r.defaultProps)for(t in n=r.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:md,type:r,key:i,ref:a,props:o,_owner:vd.current}}Fo.Fragment=hd;Fo.jsx=bl;Fo.jsxs=bl;Tl.exports=Fo;var d=Tl.exports,Gl={exports:{}},Ar={},Hl={exports:{}},Ul={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function n(V,T){var L=V.length;V.push(T);r:for(;0<L;){var D=L-1>>>1,I=V[D];if(0<o(I,T))V[D]=T,V[L]=I,L=D;else break r}}function e(V){return V.length===0?null:V[0]}function t(V){if(V.length===0)return null;var T=V[0],L=V.pop();if(L!==T){V[0]=L;r:for(var D=0,I=V.length,cn=I>>>1;D<cn;){var Yr=2*(D+1)-1,Dr=V[Yr],dr=Yr+1,Kn=V[dr];if(0>o(Dr,L))dr<I&&0>o(Kn,Dr)?(V[D]=Kn,V[dr]=L,D=dr):(V[D]=Dr,V[Yr]=L,D=Yr);else if(dr<I&&0>o(Kn,L))V[D]=Kn,V[dr]=L,D=dr;else break r}}return T}function o(V,T){var L=V.sortIndex-T.sortIndex;return L!==0?L:V.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;r.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();r.unstable_now=function(){return a.now()-u}}var l=[],c=[],m=1,f=null,g=3,P=!1,h=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(V){for(var T=e(c);T!==null;){if(T.callback===null)t(c);else if(T.startTime<=V)t(c),T.sortIndex=T.expirationTime,n(l,T);else break;T=e(c)}}function C(V){if(x=!1,p(V),!h)if(e(l)!==null)h=!0,Wn(w);else{var T=e(c);T!==null&&$n(C,T.startTime-V)}}function w(V,T){h=!1,x&&(x=!1,y(M),M=-1),P=!0;var L=g;try{for(p(T),f=e(l);f!==null&&(!(f.expirationTime>T)||V&&!N());){var D=f.callback;if(typeof D=="function"){f.callback=null,g=f.priorityLevel;var I=D(f.expirationTime<=T);T=r.unstable_now(),typeof I=="function"?f.callback=I:f===e(l)&&t(l),p(T)}else t(l);f=e(l)}if(f!==null)var cn=!0;else{var Yr=e(c);Yr!==null&&$n(C,Yr.startTime-T),cn=!1}return cn}finally{f=null,g=L,P=!1}}var F=!1,A=null,M=-1,Y=5,R=-1;function N(){return!(r.unstable_now()-R<Y)}function cr(){if(A!==null){var V=r.unstable_now();R=V;var T=!0;try{T=A(!0,V)}finally{T?kr():(F=!1,A=null)}}else F=!1}var kr;if(typeof s=="function")kr=function(){s(cr)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,vt=ke.port2;ke.port1.onmessage=cr,kr=function(){vt.postMessage(null)}}else kr=function(){E(cr,0)};function Wn(V){A=V,F||(F=!0,kr())}function $n(V,T){M=E(function(){V(r.unstable_now())},T)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){h||P||(h=!0,Wn(w))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return e(l)},r.unstable_next=function(V){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var L=g;g=T;try{return V()}finally{g=L}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,T){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var L=g;g=V;try{return T()}finally{g=L}},r.unstable_scheduleCallback=function(V,T,L){var D=r.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,V){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=L+I,V={id:m++,callback:T,priorityLevel:V,startTime:L,expirationTime:I,sortIndex:-1},L>D?(V.sortIndex=L,n(c,V),e(l)===null&&V===e(c)&&(x?(y(M),M=-1):x=!0,$n(C,L-D))):(V.sortIndex=I,n(l,V),h||P||(h=!0,Wn(w))),V},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(V){var T=g;return function(){var L=g;g=T;try{return V.apply(this,arguments)}finally{g=L}}}})(Ul);Hl.exports=Ul;var Sd=Hl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=v,Er=Sd;function S(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,e=1;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yl=new Set,Je={};function Un(r,n){me(r,n),me(r+"Capture",n)}function me(r,n){for(Je[r]=n,r=0;r<n.length;r++)Yl.add(n[r])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},fu={};function Fd(r){return mi.call(fu,r)?!0:mi.call(pu,r)?!1:wd.test(r)?fu[r]=!0:(pu[r]=!0,!1)}function Ed(r,n,e,t){if(e!==null&&e.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function Ad(r,n,e,t){if(n===null||typeof n>"u"||Ed(r,n,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function gr(r,n,e,t,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=r,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ir={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){ir[r]=new gr(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];ir[n]=new gr(n,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){ir[r]=new gr(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){ir[r]=new gr(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){ir[r]=new gr(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){ir[r]=new gr(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){ir[r]=new gr(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){ir[r]=new gr(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){ir[r]=new gr(r,5,!1,r.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function ma(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(ga,ma);ir[n]=new gr(n,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(ga,ma);ir[n]=new gr(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(ga,ma);ir[n]=new gr(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){ir[r]=new gr(r,1,!1,r.toLowerCase(),null,!1,!1)});ir.xlinkHref=new gr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){ir[r]=new gr(r,1,!1,r.toLowerCase(),null,!0,!0)});function ha(r,n,e,t){var o=ir.hasOwnProperty(n)?ir[n]:null;(o!==null?o.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ad(n,e,o,t)&&(e=null),t||o===null?Fd(n)&&(e===null?r.removeAttribute(n):r.setAttribute(n,""+e)):o.mustUseProperty?r[o.propertyName]=e===null?o.type===3?!1:"":e:(n=o.attributeName,t=o.attributeNamespace,e===null?r.removeAttribute(n):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,t?r.setAttributeNS(t,n,e):r.setAttribute(n,e))))}var ln=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xt=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Ql=Symbol.for("react.provider"),Wl=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),$l=Symbol.for("react.offscreen"),gu=Symbol.iterator;function Ne(r){return r===null||typeof r!="object"?null:(r=gu&&r[gu]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,Ho;function Be(r){if(Ho===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ho=n&&n[1]||""}return`
`+Ho+r}var Uo=!1;function Yo(r,n){if(!r||Uo)return"";Uo=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(r,[],n)}else{try{n.call()}catch(c){t=c}r.call(n.prototype)}else{try{throw Error()}catch(c){t=c}r()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=t.stack.split(`
`),a=o.length-1,u=i.length-1;1<=a&&0<=u&&o[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||o[a]!==i[u]){var l=`
`+o[a].replace(" at new "," at ");return r.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",r.displayName)),l}while(1<=a&&0<=u);break}}}finally{Uo=!1,Error.prepareStackTrace=e}return(r=r?r.displayName||r.name:"")?Be(r):""}function Vd(r){switch(r.tag){case 5:return Be(r.type);case 16:return Be("Lazy");case 13:return Be("Suspense");case 19:return Be("SuspenseList");case 0:case 2:case 15:return r=Yo(r.type,!1),r;case 11:return r=Yo(r.type.render,!1),r;case 1:return r=Yo(r.type,!0),r;default:return""}}function Pi(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case qn:return"Fragment";case Xn:return"Portal";case hi:return"Profiler";case Ca:return"StrictMode";case Ci:return"Suspense";case vi:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Wl:return(r.displayName||"Context")+".Consumer";case Ql:return(r._context.displayName||"Context")+".Provider";case va:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Pa:return n=r.displayName||null,n!==null?n:Pi(r.type)||"Memo";case yn:n=r._payload,r=r._init;try{return Pi(r(n))}catch{}}return null}function kd(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pi(n);case 8:return n===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vn(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Kl(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nd(r){var n=Kl(r)?"checked":"value",e=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),t=""+r[n];if(!r.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,i=e.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){t=""+a,i.call(this,a)}}),Object.defineProperty(r,n,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function wt(r){r._valueTracker||(r._valueTracker=Nd(r))}function Zl(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var e=n.getValue(),t="";return r&&(t=Kl(r)?r.checked?"true":"false":r.value),r=t,r!==e?(n.setValue(r),!0):!1}function Xt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Si(r,n){var e=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??r._wrapperState.initialChecked})}function mu(r,n){var e=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;e=Vn(n.value!=null?n.value:e),r._wrapperState={initialChecked:t,initialValue:e,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jl(r,n){n=n.checked,n!=null&&ha(r,"checked",n,!1)}function xi(r,n){Jl(r,n);var e=Vn(n.value),t=n.type;if(e!=null)t==="number"?(e===0&&r.value===""||r.value!=e)&&(r.value=""+e):r.value!==""+e&&(r.value=""+e);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?wi(r,n.type,e):n.hasOwnProperty("defaultValue")&&wi(r,n.type,Vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function hu(r,n,e){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,e||n===r.value||(r.value=n),r.defaultValue=n}e=r.name,e!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,e!==""&&(r.name=e)}function wi(r,n,e){(n!=="number"||Xt(r.ownerDocument)!==r)&&(e==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+e&&(r.defaultValue=""+e))}var ze=Array.isArray;function ce(r,n,e,t){if(r=r.options,n){n={};for(var o=0;o<e.length;o++)n["$"+e[o]]=!0;for(e=0;e<r.length;e++)o=n.hasOwnProperty("$"+r[e].value),r[e].selected!==o&&(r[e].selected=o),o&&t&&(r[e].defaultSelected=!0)}else{for(e=""+Vn(e),n=null,o=0;o<r.length;o++){if(r[o].value===e){r[o].selected=!0,t&&(r[o].defaultSelected=!0);return}n!==null||r[o].disabled||(n=r[o])}n!==null&&(n.selected=!0)}}function Fi(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Cu(r,n){var e=n.value;if(e==null){if(e=n.children,n=n.defaultValue,e!=null){if(n!=null)throw Error(S(92));if(ze(e)){if(1<e.length)throw Error(S(93));e=e[0]}n=e}n==null&&(n=""),e=n}r._wrapperState={initialValue:Vn(e)}}function Xl(r,n){var e=Vn(n.value),t=Vn(n.defaultValue);e!=null&&(e=""+e,e!==r.value&&(r.value=e),n.defaultValue==null&&r.defaultValue!==e&&(r.defaultValue=e)),t!=null&&(r.defaultValue=""+t)}function vu(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function ql(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?ql(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ft,rs=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,e,t,o){MSApp.execUnsafeLocalFunction(function(){return r(n,e,t,o)})}:r}(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(Ft=Ft||document.createElement("div"),Ft.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ft.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function Xe(r,n){if(n){var e=r.firstChild;if(e&&e===r.lastChild&&e.nodeType===3){e.nodeValue=n;return}}r.textContent=n}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Md=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(r){Md.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),Ge[n]=Ge[r]})});function ns(r,n,e){return n==null||typeof n=="boolean"||n===""?"":e||typeof n!="number"||n===0||Ge.hasOwnProperty(r)&&Ge[r]?(""+n).trim():n+"px"}function es(r,n){r=r.style;for(var e in n)if(n.hasOwnProperty(e)){var t=e.indexOf("--")===0,o=ns(e,n[e],t);e==="float"&&(e="cssFloat"),t?r.setProperty(e,o):r[e]=o}}var Td=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(r,n){if(n){if(Td[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Vi(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function Sa(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ni=null,de=null,ye=null;function Pu(r){if(r=ht(r)){if(typeof Ni!="function")throw Error(S(280));var n=r.stateNode;n&&(n=No(n),Ni(r.stateNode,r.type,n))}}function ts(r){de?ye?ye.push(r):ye=[r]:de=r}function os(){if(de){var r=de,n=ye;if(ye=de=null,Pu(r),n)for(r=0;r<n.length;r++)Pu(n[r])}}function is(r,n){return r(n)}function as(){}var Qo=!1;function us(r,n,e){if(Qo)return r(n,e);Qo=!0;try{return is(r,n,e)}finally{Qo=!1,(de!==null||ye!==null)&&(as(),os())}}function qe(r,n){var e=r.stateNode;if(e===null)return null;var t=No(e);if(t===null)return null;e=t[n];r:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break r;default:r=!1}if(r)return null;if(e&&typeof e!="function")throw Error(S(231,n,typeof e));return e}var Mi=!1;if(tn)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch{Mi=!1}function Ld(r,n,e,t,o,i,a,u,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(e,c)}catch(m){this.onError(m)}}var He=!1,qt=null,ro=!1,Ti=null,_d={onError:function(r){He=!0,qt=r}};function Rd(r,n,e,t,o,i,a,u,l){He=!1,qt=null,Ld.apply(_d,arguments)}function jd(r,n,e,t,o,i,a,u,l){if(Rd.apply(this,arguments),He){if(He){var c=qt;He=!1,qt=null}else throw Error(S(198));ro||(ro=!0,Ti=c)}}function Yn(r){var n=r,e=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,n.flags&4098&&(e=n.return),r=n.return;while(r)}return n.tag===3?e:null}function ls(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function Su(r){if(Yn(r)!==r)throw Error(S(188))}function Dd(r){var n=r.alternate;if(!n){if(n=Yn(r),n===null)throw Error(S(188));return n!==r?null:r}for(var e=r,t=n;;){var o=e.return;if(o===null)break;var i=o.alternate;if(i===null){if(t=o.return,t!==null){e=t;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===e)return Su(o),r;if(i===t)return Su(o),n;i=i.sibling}throw Error(S(188))}if(e.return!==t.return)e=o,t=i;else{for(var a=!1,u=o.child;u;){if(u===e){a=!0,e=o,t=i;break}if(u===t){a=!0,t=o,e=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===e){a=!0,e=i,t=o;break}if(u===t){a=!0,t=i,e=o;break}u=u.sibling}if(!a)throw Error(S(189))}}if(e.alternate!==t)throw Error(S(190))}if(e.tag!==3)throw Error(S(188));return e.stateNode.current===e?r:n}function ss(r){return r=Dd(r),r!==null?cs(r):null}function cs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=cs(r);if(n!==null)return n;r=r.sibling}return null}var ds=Er.unstable_scheduleCallback,xu=Er.unstable_cancelCallback,Od=Er.unstable_shouldYield,Bd=Er.unstable_requestPaint,J=Er.unstable_now,zd=Er.unstable_getCurrentPriorityLevel,xa=Er.unstable_ImmediatePriority,ys=Er.unstable_UserBlockingPriority,no=Er.unstable_NormalPriority,Id=Er.unstable_LowPriority,ps=Er.unstable_IdlePriority,Eo=null,Kr=null;function bd(r){if(Kr&&typeof Kr.onCommitFiberRoot=="function")try{Kr.onCommitFiberRoot(Eo,r,void 0,(r.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:Ud,Gd=Math.log,Hd=Math.LN2;function Ud(r){return r>>>=0,r===0?32:31-(Gd(r)/Hd|0)|0}var Et=64,At=4194304;function Ie(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function eo(r,n){var e=r.pendingLanes;if(e===0)return 0;var t=0,o=r.suspendedLanes,i=r.pingedLanes,a=e&268435455;if(a!==0){var u=a&~o;u!==0?t=Ie(u):(i&=a,i!==0&&(t=Ie(i)))}else a=e&~o,a!==0?t=Ie(a):i!==0&&(t=Ie(i));if(t===0)return 0;if(n!==0&&n!==t&&!(n&o)&&(o=t&-t,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(t&4&&(t|=e&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=t;0<n;)e=31-br(n),o=1<<e,t|=r[e],n&=~o;return t}function Yd(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(r,n){for(var e=r.suspendedLanes,t=r.pingedLanes,o=r.expirationTimes,i=r.pendingLanes;0<i;){var a=31-br(i),u=1<<a,l=o[a];l===-1?(!(u&e)||u&t)&&(o[a]=Yd(u,n)):l<=n&&(r.expiredLanes|=u),i&=~u}}function Li(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function fs(){var r=Et;return Et<<=1,!(Et&4194240)&&(Et=64),r}function Wo(r){for(var n=[],e=0;31>e;e++)n.push(r);return n}function gt(r,n,e){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-br(n),r[n]=e}function Wd(r,n){var e=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<e;){var o=31-br(e),i=1<<o;n[o]=0,t[o]=-1,r[o]=-1,e&=~i}}function wa(r,n){var e=r.entangledLanes|=n;for(r=r.entanglements;e;){var t=31-br(e),o=1<<t;o&n|r[t]&n&&(r[t]|=n),e&=~o}}var z=0;function gs(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var ms,Fa,hs,Cs,vs,_i=!1,Vt=[],vn=null,Pn=null,Sn=null,rt=new Map,nt=new Map,fn=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(r,n){switch(r){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":rt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nt.delete(n.pointerId)}}function Te(r,n,e,t,o,i){return r===null||r.nativeEvent!==i?(r={blockedOn:n,domEventName:e,eventSystemFlags:t,nativeEvent:i,targetContainers:[o]},n!==null&&(n=ht(n),n!==null&&Fa(n)),r):(r.eventSystemFlags|=t,n=r.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),r)}function Kd(r,n,e,t,o){switch(n){case"focusin":return vn=Te(vn,r,n,e,t,o),!0;case"dragenter":return Pn=Te(Pn,r,n,e,t,o),!0;case"mouseover":return Sn=Te(Sn,r,n,e,t,o),!0;case"pointerover":var i=o.pointerId;return rt.set(i,Te(rt.get(i)||null,r,n,e,t,o)),!0;case"gotpointercapture":return i=o.pointerId,nt.set(i,Te(nt.get(i)||null,r,n,e,t,o)),!0}return!1}function Ps(r){var n=Rn(r.target);if(n!==null){var e=Yn(n);if(e!==null){if(n=e.tag,n===13){if(n=ls(e),n!==null){r.blockedOn=n,vs(r.priority,function(){hs(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){r.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Gt(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var e=Ri(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(e===null){e=r.nativeEvent;var t=new e.constructor(e.type,e);ki=t,e.target.dispatchEvent(t),ki=null}else return n=ht(e),n!==null&&Fa(n),r.blockedOn=e,!1;n.shift()}return!0}function Fu(r,n,e){Gt(r)&&e.delete(n)}function Zd(){_i=!1,vn!==null&&Gt(vn)&&(vn=null),Pn!==null&&Gt(Pn)&&(Pn=null),Sn!==null&&Gt(Sn)&&(Sn=null),rt.forEach(Fu),nt.forEach(Fu)}function Le(r,n){r.blockedOn===n&&(r.blockedOn=null,_i||(_i=!0,Er.unstable_scheduleCallback(Er.unstable_NormalPriority,Zd)))}function et(r){function n(o){return Le(o,r)}if(0<Vt.length){Le(Vt[0],r);for(var e=1;e<Vt.length;e++){var t=Vt[e];t.blockedOn===r&&(t.blockedOn=null)}}for(vn!==null&&Le(vn,r),Pn!==null&&Le(Pn,r),Sn!==null&&Le(Sn,r),rt.forEach(n),nt.forEach(n),e=0;e<fn.length;e++)t=fn[e],t.blockedOn===r&&(t.blockedOn=null);for(;0<fn.length&&(e=fn[0],e.blockedOn===null);)Ps(e),e.blockedOn===null&&fn.shift()}var pe=ln.ReactCurrentBatchConfig,to=!0;function Jd(r,n,e,t){var o=z,i=pe.transition;pe.transition=null;try{z=1,Ea(r,n,e,t)}finally{z=o,pe.transition=i}}function Xd(r,n,e,t){var o=z,i=pe.transition;pe.transition=null;try{z=4,Ea(r,n,e,t)}finally{z=o,pe.transition=i}}function Ea(r,n,e,t){if(to){var o=Ri(r,n,e,t);if(o===null)ti(r,n,t,oo,e),wu(r,t);else if(Kd(o,r,n,e,t))t.stopPropagation();else if(wu(r,t),n&4&&-1<$d.indexOf(r)){for(;o!==null;){var i=ht(o);if(i!==null&&ms(i),i=Ri(r,n,e,t),i===null&&ti(r,n,t,oo,e),i===o)break;o=i}o!==null&&t.stopPropagation()}else ti(r,n,t,null,e)}}var oo=null;function Ri(r,n,e,t){if(oo=null,r=Sa(t),r=Rn(r),r!==null)if(n=Yn(r),n===null)r=null;else if(e=n.tag,e===13){if(r=ls(n),r!==null)return r;r=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return oo=r,null}function Ss(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case xa:return 1;case ys:return 4;case no:case Id:return 16;case ps:return 536870912;default:return 16}default:return 16}}var mn=null,Aa=null,Ht=null;function xs(){if(Ht)return Ht;var r,n=Aa,e=n.length,t,o="value"in mn?mn.value:mn.textContent,i=o.length;for(r=0;r<e&&n[r]===o[r];r++);var a=e-r;for(t=1;t<=a&&n[e-t]===o[i-t];t++);return Ht=o.slice(r,1<t?1-t:void 0)}function Ut(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function kt(){return!0}function Eu(){return!1}function Vr(r){function n(e,t,o,i,a){this._reactName=e,this._targetInst=o,this.type=t,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(e=r[u],this[u]=e?e(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kt:Eu,this.isPropagationStopped=Eu,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=kt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=kt)},persist:function(){},isPersistent:kt}),n}var Ee={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Vr(Ee),mt=$({},Ee,{view:0,detail:0}),qd=Vr(mt),$o,Ko,_e,Ao=$({},mt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==_e&&(_e&&r.type==="mousemove"?($o=r.screenX-_e.screenX,Ko=r.screenY-_e.screenY):Ko=$o=0,_e=r),$o)},movementY:function(r){return"movementY"in r?r.movementY:Ko}}),Au=Vr(Ao),ry=$({},Ao,{dataTransfer:0}),ny=Vr(ry),ey=$({},mt,{relatedTarget:0}),Zo=Vr(ey),ty=$({},Ee,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Vr(ty),iy=$({},Ee,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ay=Vr(iy),uy=$({},Ee,{data:0}),Vu=Vr(uy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=cy[r])?!!n[r]:!1}function ka(){return dy}var yy=$({},mt,{key:function(r){if(r.key){var n=ly[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=Ut(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(r){return r.type==="keypress"?Ut(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ut(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),py=Vr(yy),fy=$({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Vr(fy),gy=$({},mt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),my=Vr(gy),hy=$({},Ee,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Vr(hy),vy=$({},Ao,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Vr(vy),Sy=[9,13,27,32],Na=tn&&"CompositionEvent"in window,Ue=null;tn&&"documentMode"in document&&(Ue=document.documentMode);var xy=tn&&"TextEvent"in window&&!Ue,ws=tn&&(!Na||Ue&&8<Ue&&11>=Ue),Nu=" ",Mu=!1;function Fs(r,n){switch(r){case"keyup":return Sy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Es(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var re=!1;function wy(r,n){switch(r){case"compositionend":return Es(n);case"keypress":return n.which!==32?null:(Mu=!0,Nu);case"textInput":return r=n.data,r===Nu&&Mu?null:r;default:return null}}function Fy(r,n){if(re)return r==="compositionend"||!Na&&Fs(r,n)?(r=xs(),Ht=Aa=mn=null,re=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ws&&n.locale!=="ko"?null:n.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!Ey[r.type]:n==="textarea"}function As(r,n,e,t){ts(t),n=io(n,"onChange"),0<n.length&&(e=new Va("onChange","change",null,e,t),r.push({event:e,listeners:n}))}var Ye=null,tt=null;function Ay(r){Os(r,0)}function Vo(r){var n=te(r);if(Zl(n))return r}function Vy(r,n){if(r==="change")return n}var Vs=!1;if(tn){var Jo;if(tn){var Xo="oninput"in document;if(!Xo){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Xo=typeof Lu.oninput=="function"}Jo=Xo}else Jo=!1;Vs=Jo&&(!document.documentMode||9<document.documentMode)}function _u(){Ye&&(Ye.detachEvent("onpropertychange",ks),tt=Ye=null)}function ks(r){if(r.propertyName==="value"&&Vo(tt)){var n=[];As(n,tt,r,Sa(r)),us(Ay,n)}}function ky(r,n,e){r==="focusin"?(_u(),Ye=n,tt=e,Ye.attachEvent("onpropertychange",ks)):r==="focusout"&&_u()}function Ny(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vo(tt)}function My(r,n){if(r==="click")return Vo(n)}function Ty(r,n){if(r==="input"||r==="change")return Vo(n)}function Ly(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var Hr=typeof Object.is=="function"?Object.is:Ly;function ot(r,n){if(Hr(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var e=Object.keys(r),t=Object.keys(n);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var o=e[t];if(!mi.call(n,o)||!Hr(r[o],n[o]))return!1}return!0}function Ru(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ju(r,n){var e=Ru(r);r=0;for(var t;e;){if(e.nodeType===3){if(t=r+e.textContent.length,r<=n&&t>=n)return{node:e,offset:n-r};r=t}r:{for(;e;){if(e.nextSibling){e=e.nextSibling;break r}e=e.parentNode}e=void 0}e=Ru(e)}}function Ns(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?Ns(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function Ms(){for(var r=window,n=Xt();n instanceof r.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)r=n.contentWindow;else break;n=Xt(r.document)}return n}function Ma(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function _y(r){var n=Ms(),e=r.focusedElem,t=r.selectionRange;if(n!==e&&e&&e.ownerDocument&&Ns(e.ownerDocument.documentElement,e)){if(t!==null&&Ma(e)){if(n=t.start,r=t.end,r===void 0&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(r=(n=e.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var o=e.textContent.length,i=Math.min(t.start,o);t=t.end===void 0?i:Math.min(t.end,o),!r.extend&&i>t&&(o=t,t=i,i=o),o=ju(e,i);var a=ju(e,t);o&&a&&(r.rangeCount!==1||r.anchorNode!==o.node||r.anchorOffset!==o.offset||r.focusNode!==a.node||r.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),r.removeAllRanges(),i>t?(r.addRange(n),r.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),r.addRange(n)))}}for(n=[],r=e;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<n.length;e++)r=n[e],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Ry=tn&&"documentMode"in document&&11>=document.documentMode,ne=null,ji=null,Qe=null,Di=!1;function Du(r,n,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Di||ne==null||ne!==Xt(t)||(t=ne,"selectionStart"in t&&Ma(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Qe&&ot(Qe,t)||(Qe=t,t=io(ji,"onSelect"),0<t.length&&(n=new Va("onSelect","select",null,n,e),r.push({event:n,listeners:t}),n.target=ne)))}function Nt(r,n){var e={};return e[r.toLowerCase()]=n.toLowerCase(),e["Webkit"+r]="webkit"+n,e["Moz"+r]="moz"+n,e}var ee={animationend:Nt("Animation","AnimationEnd"),animationiteration:Nt("Animation","AnimationIteration"),animationstart:Nt("Animation","AnimationStart"),transitionend:Nt("Transition","TransitionEnd")},qo={},Ts={};tn&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete ee.animationend.animation,delete ee.animationiteration.animation,delete ee.animationstart.animation),"TransitionEvent"in window||delete ee.transitionend.transition);function ko(r){if(qo[r])return qo[r];if(!ee[r])return r;var n=ee[r],e;for(e in n)if(n.hasOwnProperty(e)&&e in Ts)return qo[r]=n[e];return r}var Ls=ko("animationend"),_s=ko("animationiteration"),Rs=ko("animationstart"),js=ko("transitionend"),Ds=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(r,n){Ds.set(r,n),Un(n,[r])}for(var ri=0;ri<Ou.length;ri++){var ni=Ou[ri],jy=ni.toLowerCase(),Dy=ni[0].toUpperCase()+ni.slice(1);Nn(jy,"on"+Dy)}Nn(Ls,"onAnimationEnd");Nn(_s,"onAnimationIteration");Nn(Rs,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(js,"onTransitionEnd");me("onMouseEnter",["mouseout","mouseover"]);me("onMouseLeave",["mouseout","mouseover"]);me("onPointerEnter",["pointerout","pointerover"]);me("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var be="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(be));function Bu(r,n,e){var t=r.type||"unknown-event";r.currentTarget=e,jd(t,n,void 0,r),r.currentTarget=null}function Os(r,n){n=(n&4)!==0;for(var e=0;e<r.length;e++){var t=r[e],o=t.event;t=t.listeners;r:{var i=void 0;if(n)for(var a=t.length-1;0<=a;a--){var u=t[a],l=u.instance,c=u.currentTarget;if(u=u.listener,l!==i&&o.isPropagationStopped())break r;Bu(o,u,c),i=l}else for(a=0;a<t.length;a++){if(u=t[a],l=u.instance,c=u.currentTarget,u=u.listener,l!==i&&o.isPropagationStopped())break r;Bu(o,u,c),i=l}}}if(ro)throw r=Ti,ro=!1,Ti=null,r}function G(r,n){var e=n[bi];e===void 0&&(e=n[bi]=new Set);var t=r+"__bubble";e.has(t)||(Bs(n,r,2,!1),e.add(t))}function ei(r,n,e){var t=0;n&&(t|=4),Bs(e,r,t,n)}var Mt="_reactListening"+Math.random().toString(36).slice(2);function it(r){if(!r[Mt]){r[Mt]=!0,Yl.forEach(function(e){e!=="selectionchange"&&(Oy.has(e)||ei(e,!1,r),ei(e,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[Mt]||(n[Mt]=!0,ei("selectionchange",!1,n))}}function Bs(r,n,e,t){switch(Ss(n)){case 1:var o=Jd;break;case 4:o=Xd;break;default:o=Ea}e=o.bind(null,n,e,r),o=void 0,!Mi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),t?o!==void 0?r.addEventListener(n,e,{capture:!0,passive:o}):r.addEventListener(n,e,!0):o!==void 0?r.addEventListener(n,e,{passive:o}):r.addEventListener(n,e,!1)}function ti(r,n,e,t,o){var i=t;if(!(n&1)&&!(n&2)&&t!==null)r:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var u=t.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(a===4)for(a=t.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;u!==null;){if(a=Rn(u),a===null)return;if(l=a.tag,l===5||l===6){t=i=a;continue r}u=u.parentNode}}t=t.return}us(function(){var c=i,m=Sa(e),f=[];r:{var g=Ds.get(r);if(g!==void 0){var P=Va,h=r;switch(r){case"keypress":if(Ut(e)===0)break r;case"keydown":case"keyup":P=py;break;case"focusin":h="focus",P=Zo;break;case"focusout":h="blur",P=Zo;break;case"beforeblur":case"afterblur":P=Zo;break;case"click":if(e.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=my;break;case Ls:case _s:case Rs:P=oy;break;case js:P=Cy;break;case"scroll":P=qd;break;case"wheel":P=Py;break;case"copy":case"cut":case"paste":P=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ku}var x=(n&4)!==0,E=!x&&r==="scroll",y=x?g!==null?g+"Capture":null:g;x=[];for(var s=c,p;s!==null;){p=s;var C=p.stateNode;if(p.tag===5&&C!==null&&(p=C,y!==null&&(C=qe(s,y),C!=null&&x.push(at(s,C,p)))),E)break;s=s.return}0<x.length&&(g=new P(g,h,null,e,m),f.push({event:g,listeners:x}))}}if(!(n&7)){r:{if(g=r==="mouseover"||r==="pointerover",P=r==="mouseout"||r==="pointerout",g&&e!==ki&&(h=e.relatedTarget||e.fromElement)&&(Rn(h)||h[on]))break r;if((P||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,P?(h=e.relatedTarget||e.toElement,P=c,h=h?Rn(h):null,h!==null&&(E=Yn(h),h!==E||h.tag!==5&&h.tag!==6)&&(h=null)):(P=null,h=c),P!==h)){if(x=Au,C="onMouseLeave",y="onMouseEnter",s="mouse",(r==="pointerout"||r==="pointerover")&&(x=ku,C="onPointerLeave",y="onPointerEnter",s="pointer"),E=P==null?g:te(P),p=h==null?g:te(h),g=new x(C,s+"leave",P,e,m),g.target=E,g.relatedTarget=p,C=null,Rn(m)===c&&(x=new x(y,s+"enter",h,e,m),x.target=p,x.relatedTarget=E,C=x),E=C,P&&h)n:{for(x=P,y=h,s=0,p=x;p;p=Zn(p))s++;for(p=0,C=y;C;C=Zn(C))p++;for(;0<s-p;)x=Zn(x),s--;for(;0<p-s;)y=Zn(y),p--;for(;s--;){if(x===y||y!==null&&x===y.alternate)break n;x=Zn(x),y=Zn(y)}x=null}else x=null;P!==null&&zu(f,g,P,x,!1),h!==null&&E!==null&&zu(f,E,h,x,!0)}}r:{if(g=c?te(c):window,P=g.nodeName&&g.nodeName.toLowerCase(),P==="select"||P==="input"&&g.type==="file")var w=Vy;else if(Tu(g))if(Vs)w=Ty;else{w=Ny;var F=ky}else(P=g.nodeName)&&P.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=My);if(w&&(w=w(r,c))){As(f,w,e,m);break r}F&&F(r,g,c),r==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&wi(g,"number",g.value)}switch(F=c?te(c):window,r){case"focusin":(Tu(F)||F.contentEditable==="true")&&(ne=F,ji=c,Qe=null);break;case"focusout":Qe=ji=ne=null;break;case"mousedown":Di=!0;break;case"contextmenu":case"mouseup":case"dragend":Di=!1,Du(f,e,m);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Du(f,e,m)}var A;if(Na)r:{switch(r){case"compositionstart":var M="onCompositionStart";break r;case"compositionend":M="onCompositionEnd";break r;case"compositionupdate":M="onCompositionUpdate";break r}M=void 0}else re?Fs(r,e)&&(M="onCompositionEnd"):r==="keydown"&&e.keyCode===229&&(M="onCompositionStart");M&&(ws&&e.locale!=="ko"&&(re||M!=="onCompositionStart"?M==="onCompositionEnd"&&re&&(A=xs()):(mn=m,Aa="value"in mn?mn.value:mn.textContent,re=!0)),F=io(c,M),0<F.length&&(M=new Vu(M,r,null,e,m),f.push({event:M,listeners:F}),A?M.data=A:(A=Es(e),A!==null&&(M.data=A)))),(A=xy?wy(r,e):Fy(r,e))&&(c=io(c,"onBeforeInput"),0<c.length&&(m=new Vu("onBeforeInput","beforeinput",null,e,m),f.push({event:m,listeners:c}),m.data=A))}Os(f,n)})}function at(r,n,e){return{instance:r,listener:n,currentTarget:e}}function io(r,n){for(var e=n+"Capture",t=[];r!==null;){var o=r,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qe(r,e),i!=null&&t.unshift(at(r,i,o)),i=qe(r,n),i!=null&&t.push(at(r,i,o))),r=r.return}return t}function Zn(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function zu(r,n,e,t,o){for(var i=n._reactName,a=[];e!==null&&e!==t;){var u=e,l=u.alternate,c=u.stateNode;if(l!==null&&l===t)break;u.tag===5&&c!==null&&(u=c,o?(l=qe(e,i),l!=null&&a.unshift(at(e,l,u))):o||(l=qe(e,i),l!=null&&a.push(at(e,l,u)))),e=e.return}a.length!==0&&r.push({event:n,listeners:a})}var By=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Iu(r){return(typeof r=="string"?r:""+r).replace(By,`
`).replace(zy,"")}function Tt(r,n,e){if(n=Iu(n),Iu(r)!==n&&e)throw Error(S(425))}function ao(){}var Oi=null,Bi=null;function zi(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(r){return bu.resolve(null).then(r).catch(Gy)}:Ii;function Gy(r){setTimeout(function(){throw r})}function oi(r,n){var e=n,t=0;do{var o=e.nextSibling;if(r.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(t===0){r.removeChild(o),et(n);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=o}while(e);et(n)}function xn(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function Gu(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var e=r.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return r;n--}else e==="/$"&&n++}r=r.previousSibling}return null}var Ae=Math.random().toString(36).slice(2),$r="__reactFiber$"+Ae,ut="__reactProps$"+Ae,on="__reactContainer$"+Ae,bi="__reactEvents$"+Ae,Hy="__reactListeners$"+Ae,Uy="__reactHandles$"+Ae;function Rn(r){var n=r[$r];if(n)return n;for(var e=r.parentNode;e;){if(n=e[on]||e[$r]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(r=Gu(r);r!==null;){if(e=r[$r])return e;r=Gu(r)}return n}r=e,e=r.parentNode}return null}function ht(r){return r=r[$r]||r[on],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function te(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(S(33))}function No(r){return r[ut]||null}var Gi=[],oe=-1;function Mn(r){return{current:r}}function H(r){0>oe||(r.current=Gi[oe],Gi[oe]=null,oe--)}function b(r,n){oe++,Gi[oe]=r.current,r.current=n}var kn={},sr=Mn(kn),vr=Mn(!1),zn=kn;function he(r,n){var e=r.type.contextTypes;if(!e)return kn;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in e)o[i]=n[i];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=o),o}function Pr(r){return r=r.childContextTypes,r!=null}function uo(){H(vr),H(sr)}function Hu(r,n,e){if(sr.current!==kn)throw Error(S(168));b(sr,n),b(vr,e)}function zs(r,n,e){var t=r.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var o in t)if(!(o in n))throw Error(S(108,kd(r)||"Unknown",o));return $({},e,t)}function lo(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||kn,zn=sr.current,b(sr,r),b(vr,vr.current),!0}function Uu(r,n,e){var t=r.stateNode;if(!t)throw Error(S(169));e?(r=zs(r,n,zn),t.__reactInternalMemoizedMergedChildContext=r,H(vr),H(sr),b(sr,r)):H(vr),b(vr,e)}var qr=null,Mo=!1,ii=!1;function Is(r){qr===null?qr=[r]:qr.push(r)}function Yy(r){Mo=!0,Is(r)}function Tn(){if(!ii&&qr!==null){ii=!0;var r=0,n=z;try{var e=qr;for(z=1;r<e.length;r++){var t=e[r];do t=t(!0);while(t!==null)}qr=null,Mo=!1}catch(o){throw qr!==null&&(qr=qr.slice(r+1)),ds(xa,Tn),o}finally{z=n,ii=!1}}return null}var ie=[],ae=0,so=null,co=0,Nr=[],Mr=0,In=null,rn=1,nn="";function Ln(r,n){ie[ae++]=co,ie[ae++]=so,so=r,co=n}function bs(r,n,e){Nr[Mr++]=rn,Nr[Mr++]=nn,Nr[Mr++]=In,In=r;var t=rn;r=nn;var o=32-br(t)-1;t&=~(1<<o),e+=1;var i=32-br(n)+o;if(30<i){var a=o-o%5;i=(t&(1<<a)-1).toString(32),t>>=a,o-=a,rn=1<<32-br(n)+o|e<<o|t,nn=i+r}else rn=1<<i|e<<o|t,nn=r}function Ta(r){r.return!==null&&(Ln(r,1),bs(r,1,0))}function La(r){for(;r===so;)so=ie[--ae],ie[ae]=null,co=ie[--ae],ie[ae]=null;for(;r===In;)In=Nr[--Mr],Nr[Mr]=null,nn=Nr[--Mr],Nr[Mr]=null,rn=Nr[--Mr],Nr[Mr]=null}var Fr=null,wr=null,U=!1,Ir=null;function Gs(r,n){var e=Lr(5,null,null,0);e.elementType="DELETED",e.stateNode=n,e.return=r,n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)}function Yu(r,n){switch(r.tag){case 5:var e=r.type;return n=n.nodeType!==1||e.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,Fr=r,wr=xn(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,Fr=r,wr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(e=In!==null?{id:rn,overflow:nn}:null,r.memoizedState={dehydrated:n,treeContext:e,retryLane:1073741824},e=Lr(18,null,null,0),e.stateNode=n,e.return=r,r.child=e,Fr=r,wr=null,!0):!1;default:return!1}}function Hi(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ui(r){if(U){var n=wr;if(n){var e=n;if(!Yu(r,n)){if(Hi(r))throw Error(S(418));n=xn(e.nextSibling);var t=Fr;n&&Yu(r,n)?Gs(t,e):(r.flags=r.flags&-4097|2,U=!1,Fr=r)}}else{if(Hi(r))throw Error(S(418));r.flags=r.flags&-4097|2,U=!1,Fr=r}}}function Qu(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Fr=r}function Lt(r){if(r!==Fr)return!1;if(!U)return Qu(r),U=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!zi(r.type,r.memoizedProps)),n&&(n=wr)){if(Hi(r))throw Hs(),Error(S(418));for(;n;)Gs(r,n),n=xn(n.nextSibling)}if(Qu(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var e=r.data;if(e==="/$"){if(n===0){wr=xn(r.nextSibling);break r}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++}r=r.nextSibling}wr=null}}else wr=Fr?xn(r.stateNode.nextSibling):null;return!0}function Hs(){for(var r=wr;r;)r=xn(r.nextSibling)}function Ce(){wr=Fr=null,U=!1}function _a(r){Ir===null?Ir=[r]:Ir.push(r)}var Qy=ln.ReactCurrentBatchConfig;function Re(r,n,e){if(r=e.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(S(309));var t=e.stateNode}if(!t)throw Error(S(147,r));var o=t,i=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=o.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof r!="string")throw Error(S(284));if(!e._owner)throw Error(S(290,r))}return r}function _t(r,n){throw r=Object.prototype.toString.call(n),Error(S(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function Wu(r){var n=r._init;return n(r._payload)}function Us(r){function n(y,s){if(r){var p=y.deletions;p===null?(y.deletions=[s],y.flags|=16):p.push(s)}}function e(y,s){if(!r)return null;for(;s!==null;)n(y,s),s=s.sibling;return null}function t(y,s){for(y=new Map;s!==null;)s.key!==null?y.set(s.key,s):y.set(s.index,s),s=s.sibling;return y}function o(y,s){return y=An(y,s),y.index=0,y.sibling=null,y}function i(y,s,p){return y.index=p,r?(p=y.alternate,p!==null?(p=p.index,p<s?(y.flags|=2,s):p):(y.flags|=2,s)):(y.flags|=1048576,s)}function a(y){return r&&y.alternate===null&&(y.flags|=2),y}function u(y,s,p,C){return s===null||s.tag!==6?(s=yi(p,y.mode,C),s.return=y,s):(s=o(s,p),s.return=y,s)}function l(y,s,p,C){var w=p.type;return w===qn?m(y,s,p.props.children,C,p.key):s!==null&&(s.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yn&&Wu(w)===s.type)?(C=o(s,p.props),C.ref=Re(y,s,p),C.return=y,C):(C=Jt(p.type,p.key,p.props,null,y.mode,C),C.ref=Re(y,s,p),C.return=y,C)}function c(y,s,p,C){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=pi(p,y.mode,C),s.return=y,s):(s=o(s,p.children||[]),s.return=y,s)}function m(y,s,p,C,w){return s===null||s.tag!==7?(s=Bn(p,y.mode,C,w),s.return=y,s):(s=o(s,p),s.return=y,s)}function f(y,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=yi(""+s,y.mode,p),s.return=y,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case xt:return p=Jt(s.type,s.key,s.props,null,y.mode,p),p.ref=Re(y,null,s),p.return=y,p;case Xn:return s=pi(s,y.mode,p),s.return=y,s;case yn:var C=s._init;return f(y,C(s._payload),p)}if(ze(s)||Ne(s))return s=Bn(s,y.mode,p,null),s.return=y,s;_t(y,s)}return null}function g(y,s,p,C){var w=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:u(y,s,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xt:return p.key===w?l(y,s,p,C):null;case Xn:return p.key===w?c(y,s,p,C):null;case yn:return w=p._init,g(y,s,w(p._payload),C)}if(ze(p)||Ne(p))return w!==null?null:m(y,s,p,C,null);_t(y,p)}return null}function P(y,s,p,C,w){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(p)||null,u(s,y,""+C,w);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xt:return y=y.get(C.key===null?p:C.key)||null,l(s,y,C,w);case Xn:return y=y.get(C.key===null?p:C.key)||null,c(s,y,C,w);case yn:var F=C._init;return P(y,s,p,F(C._payload),w)}if(ze(C)||Ne(C))return y=y.get(p)||null,m(s,y,C,w,null);_t(s,C)}return null}function h(y,s,p,C){for(var w=null,F=null,A=s,M=s=0,Y=null;A!==null&&M<p.length;M++){A.index>M?(Y=A,A=null):Y=A.sibling;var R=g(y,A,p[M],C);if(R===null){A===null&&(A=Y);break}r&&A&&R.alternate===null&&n(y,A),s=i(R,s,M),F===null?w=R:F.sibling=R,F=R,A=Y}if(M===p.length)return e(y,A),U&&Ln(y,M),w;if(A===null){for(;M<p.length;M++)A=f(y,p[M],C),A!==null&&(s=i(A,s,M),F===null?w=A:F.sibling=A,F=A);return U&&Ln(y,M),w}for(A=t(y,A);M<p.length;M++)Y=P(A,y,M,p[M],C),Y!==null&&(r&&Y.alternate!==null&&A.delete(Y.key===null?M:Y.key),s=i(Y,s,M),F===null?w=Y:F.sibling=Y,F=Y);return r&&A.forEach(function(N){return n(y,N)}),U&&Ln(y,M),w}function x(y,s,p,C){var w=Ne(p);if(typeof w!="function")throw Error(S(150));if(p=w.call(p),p==null)throw Error(S(151));for(var F=w=null,A=s,M=s=0,Y=null,R=p.next();A!==null&&!R.done;M++,R=p.next()){A.index>M?(Y=A,A=null):Y=A.sibling;var N=g(y,A,R.value,C);if(N===null){A===null&&(A=Y);break}r&&A&&N.alternate===null&&n(y,A),s=i(N,s,M),F===null?w=N:F.sibling=N,F=N,A=Y}if(R.done)return e(y,A),U&&Ln(y,M),w;if(A===null){for(;!R.done;M++,R=p.next())R=f(y,R.value,C),R!==null&&(s=i(R,s,M),F===null?w=R:F.sibling=R,F=R);return U&&Ln(y,M),w}for(A=t(y,A);!R.done;M++,R=p.next())R=P(A,y,M,R.value,C),R!==null&&(r&&R.alternate!==null&&A.delete(R.key===null?M:R.key),s=i(R,s,M),F===null?w=R:F.sibling=R,F=R);return r&&A.forEach(function(cr){return n(y,cr)}),U&&Ln(y,M),w}function E(y,s,p,C){if(typeof p=="object"&&p!==null&&p.type===qn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xt:r:{for(var w=p.key,F=s;F!==null;){if(F.key===w){if(w=p.type,w===qn){if(F.tag===7){e(y,F.sibling),s=o(F,p.props.children),s.return=y,y=s;break r}}else if(F.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yn&&Wu(w)===F.type){e(y,F.sibling),s=o(F,p.props),s.ref=Re(y,F,p),s.return=y,y=s;break r}e(y,F);break}else n(y,F);F=F.sibling}p.type===qn?(s=Bn(p.props.children,y.mode,C,p.key),s.return=y,y=s):(C=Jt(p.type,p.key,p.props,null,y.mode,C),C.ref=Re(y,s,p),C.return=y,y=C)}return a(y);case Xn:r:{for(F=p.key;s!==null;){if(s.key===F)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){e(y,s.sibling),s=o(s,p.children||[]),s.return=y,y=s;break r}else{e(y,s);break}else n(y,s);s=s.sibling}s=pi(p,y.mode,C),s.return=y,y=s}return a(y);case yn:return F=p._init,E(y,s,F(p._payload),C)}if(ze(p))return h(y,s,p,C);if(Ne(p))return x(y,s,p,C);_t(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(e(y,s.sibling),s=o(s,p),s.return=y,y=s):(e(y,s),s=yi(p,y.mode,C),s.return=y,y=s),a(y)):e(y,s)}return E}var ve=Us(!0),Ys=Us(!1),yo=Mn(null),po=null,ue=null,Ra=null;function ja(){Ra=ue=po=null}function Da(r){var n=yo.current;H(yo),r._currentValue=n}function Yi(r,n,e){for(;r!==null;){var t=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),r===e)break;r=r.return}}function fe(r,n){po=r,Ra=ue=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&n&&(Cr=!0),r.firstContext=null)}function Rr(r){var n=r._currentValue;if(Ra!==r)if(r={context:r,memoizedValue:n,next:null},ue===null){if(po===null)throw Error(S(308));ue=r,po.dependencies={lanes:0,firstContext:r}}else ue=ue.next=r;return n}var jn=null;function Oa(r){jn===null?jn=[r]:jn.push(r)}function Qs(r,n,e,t){var o=n.interleaved;return o===null?(e.next=e,Oa(n)):(e.next=o.next,o.next=e),n.interleaved=e,an(r,t)}function an(r,n){r.lanes|=n;var e=r.alternate;for(e!==null&&(e.lanes|=n),e=r,r=r.return;r!==null;)r.childLanes|=n,e=r.alternate,e!==null&&(e.childLanes|=n),e=r,r=r.return;return e.tag===3?e.stateNode:null}var pn=!1;function Ba(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ws(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function en(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(r,n,e){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,O&2){var o=t.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n,an(r,e)}return o=t.interleaved,o===null?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,an(r,e)}function Yt(r,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194240)!==0)){var t=n.lanes;t&=r.pendingLanes,e|=t,n.lanes=e,wa(r,e)}}function $u(r,n){var e=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var o=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var a={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};i===null?o=i=a:i=i.next=a,e=e.next}while(e!==null);i===null?o=i=n:i=i.next=n}else o=i=n;e={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:t.shared,effects:t.effects},r.updateQueue=e;return}r=e.lastBaseUpdate,r===null?e.firstBaseUpdate=n:r.next=n,e.lastBaseUpdate=n}function fo(r,n,e,t){var o=r.updateQueue;pn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var l=u,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var m=r.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==a&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,m=c=l=null,u=i;do{var g=u.lane,P=u.eventTime;if((t&g)===g){m!==null&&(m=m.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});r:{var h=r,x=u;switch(g=n,P=e,x.tag){case 1:if(h=x.payload,typeof h=="function"){f=h.call(P,f,g);break r}f=h;break r;case 3:h.flags=h.flags&-65537|128;case 0:if(h=x.payload,g=typeof h=="function"?h.call(P,f,g):h,g==null)break r;f=$({},f,g);break r;case 2:pn=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else P={eventTime:P,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=P,l=f):m=m.next=P,a|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=m,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Gn|=a,r.lanes=a,r.memoizedState=f}}function Ku(r,n,e){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var t=r[n],o=t.callback;if(o!==null){if(t.callback=null,t=e,typeof o!="function")throw Error(S(191,o));o.call(t)}}}var Ct={},Zr=Mn(Ct),lt=Mn(Ct),st=Mn(Ct);function Dn(r){if(r===Ct)throw Error(S(174));return r}function za(r,n){switch(b(st,n),b(lt,r),b(Zr,Ct),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ei(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=Ei(n,r)}H(Zr),b(Zr,n)}function Pe(){H(Zr),H(lt),H(st)}function $s(r){Dn(st.current);var n=Dn(Zr.current),e=Ei(n,r.type);n!==e&&(b(lt,r),b(Zr,e))}function Ia(r){lt.current===r&&(H(Zr),H(lt))}var Q=Mn(0);function go(r){for(var n=r;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ai=[];function ba(){for(var r=0;r<ai.length;r++)ai[r]._workInProgressVersionPrimary=null;ai.length=0}var Qt=ln.ReactCurrentDispatcher,ui=ln.ReactCurrentBatchConfig,bn=0,W=null,q=null,nr=null,mo=!1,We=!1,ct=0,Wy=0;function ar(){throw Error(S(321))}function Ga(r,n){if(n===null)return!1;for(var e=0;e<n.length&&e<r.length;e++)if(!Hr(r[e],n[e]))return!1;return!0}function Ha(r,n,e,t,o,i){if(bn=i,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Qt.current=r===null||r.memoizedState===null?Jy:Xy,r=e(t,o),We){i=0;do{if(We=!1,ct=0,25<=i)throw Error(S(301));i+=1,nr=q=null,n.updateQueue=null,Qt.current=qy,r=e(t,o)}while(We)}if(Qt.current=ho,n=q!==null&&q.next!==null,bn=0,nr=q=W=null,mo=!1,n)throw Error(S(300));return r}function Ua(){var r=ct!==0;return ct=0,r}function Wr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nr===null?W.memoizedState=nr=r:nr=nr.next=r,nr}function jr(){if(q===null){var r=W.alternate;r=r!==null?r.memoizedState:null}else r=q.next;var n=nr===null?W.memoizedState:nr.next;if(n!==null)nr=n,q=r;else{if(r===null)throw Error(S(310));q=r,r={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},nr===null?W.memoizedState=nr=r:nr=nr.next=r}return nr}function dt(r,n){return typeof n=="function"?n(r):n}function li(r){var n=jr(),e=n.queue;if(e===null)throw Error(S(311));e.lastRenderedReducer=r;var t=q,o=t.baseQueue,i=e.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}t.baseQueue=o=i,e.pending=null}if(o!==null){i=o.next,t=t.baseState;var u=a=null,l=null,c=i;do{var m=c.lane;if((bn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:r(t,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(u=l=f,a=t):l=l.next=f,W.lanes|=m,Gn|=m}c=c.next}while(c!==null&&c!==i);l===null?a=t:l.next=u,Hr(t,n.memoizedState)||(Cr=!0),n.memoizedState=t,n.baseState=a,n.baseQueue=l,e.lastRenderedState=t}if(r=e.interleaved,r!==null){o=r;do i=o.lane,W.lanes|=i,Gn|=i,o=o.next;while(o!==r)}else o===null&&(e.lanes=0);return[n.memoizedState,e.dispatch]}function si(r){var n=jr(),e=n.queue;if(e===null)throw Error(S(311));e.lastRenderedReducer=r;var t=e.dispatch,o=e.pending,i=n.memoizedState;if(o!==null){e.pending=null;var a=o=o.next;do i=r(i,a.action),a=a.next;while(a!==o);Hr(i,n.memoizedState)||(Cr=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,t]}function Ks(){}function Zs(r,n){var e=W,t=jr(),o=n(),i=!Hr(t.memoizedState,o);if(i&&(t.memoizedState=o,Cr=!0),t=t.queue,Ya(qs.bind(null,e,t,r),[r]),t.getSnapshot!==n||i||nr!==null&&nr.memoizedState.tag&1){if(e.flags|=2048,yt(9,Xs.bind(null,e,t,o,n),void 0,null),er===null)throw Error(S(349));bn&30||Js(e,n,o)}return o}function Js(r,n,e){r.flags|=16384,r={getSnapshot:n,value:e},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[r]):(e=n.stores,e===null?n.stores=[r]:e.push(r))}function Xs(r,n,e,t){n.value=e,n.getSnapshot=t,rc(n)&&nc(r)}function qs(r,n,e){return e(function(){rc(n)&&nc(r)})}function rc(r){var n=r.getSnapshot;r=r.value;try{var e=n();return!Hr(r,e)}catch{return!0}}function nc(r){var n=an(r,1);n!==null&&Gr(n,r,1,-1)}function Zu(r){var n=Wr();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:r},n.queue=r,r=r.dispatch=Zy.bind(null,W,r),[n.memoizedState,r]}function yt(r,n,e,t){return r={tag:r,create:n,destroy:e,deps:t,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=r.next=r):(e=n.lastEffect,e===null?n.lastEffect=r.next=r:(t=e.next,e.next=r,r.next=t,n.lastEffect=r)),r}function ec(){return jr().memoizedState}function Wt(r,n,e,t){var o=Wr();W.flags|=r,o.memoizedState=yt(1|n,e,void 0,t===void 0?null:t)}function To(r,n,e,t){var o=jr();t=t===void 0?null:t;var i=void 0;if(q!==null){var a=q.memoizedState;if(i=a.destroy,t!==null&&Ga(t,a.deps)){o.memoizedState=yt(n,e,i,t);return}}W.flags|=r,o.memoizedState=yt(1|n,e,i,t)}function Ju(r,n){return Wt(8390656,8,r,n)}function Ya(r,n){return To(2048,8,r,n)}function tc(r,n){return To(4,2,r,n)}function oc(r,n){return To(4,4,r,n)}function ic(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function ac(r,n,e){return e=e!=null?e.concat([r]):null,To(4,4,ic.bind(null,n,r),e)}function Qa(){}function uc(r,n){var e=jr();n=n===void 0?null:n;var t=e.memoizedState;return t!==null&&n!==null&&Ga(n,t[1])?t[0]:(e.memoizedState=[r,n],r)}function lc(r,n){var e=jr();n=n===void 0?null:n;var t=e.memoizedState;return t!==null&&n!==null&&Ga(n,t[1])?t[0]:(r=r(),e.memoizedState=[r,n],r)}function sc(r,n,e){return bn&21?(Hr(e,n)||(e=fs(),W.lanes|=e,Gn|=e,r.baseState=!0),n):(r.baseState&&(r.baseState=!1,Cr=!0),r.memoizedState=e)}function $y(r,n){var e=z;z=e!==0&&4>e?e:4,r(!0);var t=ui.transition;ui.transition={};try{r(!1),n()}finally{z=e,ui.transition=t}}function cc(){return jr().memoizedState}function Ky(r,n,e){var t=En(r);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},dc(r))yc(n,e);else if(e=Qs(r,n,e,t),e!==null){var o=pr();Gr(e,r,t,o),pc(e,n,t)}}function Zy(r,n,e){var t=En(r),o={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(dc(r))yc(n,o);else{var i=r.alternate;if(r.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,e);if(o.hasEagerState=!0,o.eagerState=u,Hr(u,a)){var l=n.interleaved;l===null?(o.next=o,Oa(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}e=Qs(r,n,o,t),e!==null&&(o=pr(),Gr(e,r,t,o),pc(e,n,t))}}function dc(r){var n=r.alternate;return r===W||n!==null&&n===W}function yc(r,n){We=mo=!0;var e=r.pending;e===null?n.next=n:(n.next=e.next,e.next=n),r.pending=n}function pc(r,n,e){if(e&4194240){var t=n.lanes;t&=r.pendingLanes,e|=t,n.lanes=e,wa(r,e)}}var ho={readContext:Rr,useCallback:ar,useContext:ar,useEffect:ar,useImperativeHandle:ar,useInsertionEffect:ar,useLayoutEffect:ar,useMemo:ar,useReducer:ar,useRef:ar,useState:ar,useDebugValue:ar,useDeferredValue:ar,useTransition:ar,useMutableSource:ar,useSyncExternalStore:ar,useId:ar,unstable_isNewReconciler:!1},Jy={readContext:Rr,useCallback:function(r,n){return Wr().memoizedState=[r,n===void 0?null:n],r},useContext:Rr,useEffect:Ju,useImperativeHandle:function(r,n,e){return e=e!=null?e.concat([r]):null,Wt(4194308,4,ic.bind(null,n,r),e)},useLayoutEffect:function(r,n){return Wt(4194308,4,r,n)},useInsertionEffect:function(r,n){return Wt(4,2,r,n)},useMemo:function(r,n){var e=Wr();return n=n===void 0?null:n,r=r(),e.memoizedState=[r,n],r},useReducer:function(r,n,e){var t=Wr();return n=e!==void 0?e(n):n,t.memoizedState=t.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},t.queue=r,r=r.dispatch=Ky.bind(null,W,r),[t.memoizedState,r]},useRef:function(r){var n=Wr();return r={current:r},n.memoizedState=r},useState:Zu,useDebugValue:Qa,useDeferredValue:function(r){return Wr().memoizedState=r},useTransition:function(){var r=Zu(!1),n=r[0];return r=$y.bind(null,r[1]),Wr().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,e){var t=W,o=Wr();if(U){if(e===void 0)throw Error(S(407));e=e()}else{if(e=n(),er===null)throw Error(S(349));bn&30||Js(t,n,e)}o.memoizedState=e;var i={value:e,getSnapshot:n};return o.queue=i,Ju(qs.bind(null,t,i,r),[r]),t.flags|=2048,yt(9,Xs.bind(null,t,i,e,n),void 0,null),e},useId:function(){var r=Wr(),n=er.identifierPrefix;if(U){var e=nn,t=rn;e=(t&~(1<<32-br(t)-1)).toString(32)+e,n=":"+n+"R"+e,e=ct++,0<e&&(n+="H"+e.toString(32)),n+=":"}else e=Wy++,n=":"+n+"r"+e.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},Xy={readContext:Rr,useCallback:uc,useContext:Rr,useEffect:Ya,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:oc,useMemo:lc,useReducer:li,useRef:ec,useState:function(){return li(dt)},useDebugValue:Qa,useDeferredValue:function(r){var n=jr();return sc(n,q.memoizedState,r)},useTransition:function(){var r=li(dt)[0],n=jr().memoizedState;return[r,n]},useMutableSource:Ks,useSyncExternalStore:Zs,useId:cc,unstable_isNewReconciler:!1},qy={readContext:Rr,useCallback:uc,useContext:Rr,useEffect:Ya,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:oc,useMemo:lc,useReducer:si,useRef:ec,useState:function(){return si(dt)},useDebugValue:Qa,useDeferredValue:function(r){var n=jr();return q===null?n.memoizedState=r:sc(n,q.memoizedState,r)},useTransition:function(){var r=si(dt)[0],n=jr().memoizedState;return[r,n]},useMutableSource:Ks,useSyncExternalStore:Zs,useId:cc,unstable_isNewReconciler:!1};function Br(r,n){if(r&&r.defaultProps){n=$({},n),r=r.defaultProps;for(var e in r)n[e]===void 0&&(n[e]=r[e]);return n}return n}function Qi(r,n,e,t){n=r.memoizedState,e=e(t,n),e=e==null?n:$({},n,e),r.memoizedState=e,r.lanes===0&&(r.updateQueue.baseState=e)}var Lo={isMounted:function(r){return(r=r._reactInternals)?Yn(r)===r:!1},enqueueSetState:function(r,n,e){r=r._reactInternals;var t=pr(),o=En(r),i=en(t,o);i.payload=n,e!=null&&(i.callback=e),n=wn(r,i,o),n!==null&&(Gr(n,r,o,t),Yt(n,r,o))},enqueueReplaceState:function(r,n,e){r=r._reactInternals;var t=pr(),o=En(r),i=en(t,o);i.tag=1,i.payload=n,e!=null&&(i.callback=e),n=wn(r,i,o),n!==null&&(Gr(n,r,o,t),Yt(n,r,o))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var e=pr(),t=En(r),o=en(e,t);o.tag=2,n!=null&&(o.callback=n),n=wn(r,o,t),n!==null&&(Gr(n,r,t,e),Yt(n,r,t))}};function Xu(r,n,e,t,o,i,a){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,i,a):n.prototype&&n.prototype.isPureReactComponent?!ot(e,t)||!ot(o,i):!0}function fc(r,n,e){var t=!1,o=kn,i=n.contextType;return typeof i=="object"&&i!==null?i=Rr(i):(o=Pr(n)?zn:sr.current,t=n.contextTypes,i=(t=t!=null)?he(r,o):kn),n=new n(e,i),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Lo,r.stateNode=n,n._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=i),n}function qu(r,n,e,t){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,t),n.state!==r&&Lo.enqueueReplaceState(n,n.state,null)}function Wi(r,n,e,t){var o=r.stateNode;o.props=e,o.state=r.memoizedState,o.refs={},Ba(r);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Rr(i):(i=Pr(n)?zn:sr.current,o.context=he(r,i)),o.state=r.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Qi(r,n,i,e),o.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Lo.enqueueReplaceState(o,o.state,null),fo(r,e,o,t),o.state=r.memoizedState),typeof o.componentDidMount=="function"&&(r.flags|=4194308)}function Se(r,n){try{var e="",t=n;do e+=Vd(t),t=t.return;while(t);var o=e}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:r,source:n,stack:o,digest:null}}function ci(r,n,e){return{value:r,source:null,stack:e??null,digest:n??null}}function $i(r,n){try{console.error(n.value)}catch(e){setTimeout(function(){throw e})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function gc(r,n,e){e=en(-1,e),e.tag=3,e.payload={element:null};var t=n.value;return e.callback=function(){vo||(vo=!0,oa=t),$i(r,n)},e}function mc(r,n,e){e=en(-1,e),e.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var o=n.value;e.payload=function(){return t(o)},e.callback=function(){$i(r,n)}}var i=r.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){$i(r,n),typeof t!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),e}function rl(r,n,e){var t=r.pingCache;if(t===null){t=r.pingCache=new r1;var o=new Set;t.set(n,o)}else o=t.get(n),o===void 0&&(o=new Set,t.set(n,o));o.has(e)||(o.add(e),r=f1.bind(null,r,n,e),n.then(r,r))}function nl(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function el(r,n,e,t,o){return r.mode&1?(r.flags|=65536,r.lanes=o,r):(r===n?r.flags|=65536:(r.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(n=en(-1,1),n.tag=2,wn(e,n,1))),e.lanes|=1),r)}var n1=ln.ReactCurrentOwner,Cr=!1;function yr(r,n,e,t){n.child=r===null?Ys(n,null,e,t):ve(n,r.child,e,t)}function tl(r,n,e,t,o){e=e.render;var i=n.ref;return fe(n,o),t=Ha(r,n,e,t,i,o),e=Ua(),r!==null&&!Cr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~o,un(r,n,o)):(U&&e&&Ta(n),n.flags|=1,yr(r,n,t,o),n.child)}function ol(r,n,e,t,o){if(r===null){var i=e.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(n.tag=15,n.type=i,hc(r,n,i,t,o)):(r=Jt(e.type,null,t,n,n.mode,o),r.ref=n.ref,r.return=n,n.child=r)}if(i=r.child,!(r.lanes&o)){var a=i.memoizedProps;if(e=e.compare,e=e!==null?e:ot,e(a,t)&&r.ref===n.ref)return un(r,n,o)}return n.flags|=1,r=An(i,t),r.ref=n.ref,r.return=n,n.child=r}function hc(r,n,e,t,o){if(r!==null){var i=r.memoizedProps;if(ot(i,t)&&r.ref===n.ref)if(Cr=!1,n.pendingProps=t=i,(r.lanes&o)!==0)r.flags&131072&&(Cr=!0);else return n.lanes=r.lanes,un(r,n,o)}return Ki(r,n,e,t,o)}function Cc(r,n,e){var t=n.pendingProps,o=t.children,i=r!==null?r.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(se,xr),xr|=e;else{if(!(e&1073741824))return r=i!==null?i.baseLanes|e:e,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,b(se,xr),xr|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:e,b(se,xr),xr|=t}else i!==null?(t=i.baseLanes|e,n.memoizedState=null):t=e,b(se,xr),xr|=t;return yr(r,n,o,e),n.child}function vc(r,n){var e=n.ref;(r===null&&e!==null||r!==null&&r.ref!==e)&&(n.flags|=512,n.flags|=2097152)}function Ki(r,n,e,t,o){var i=Pr(e)?zn:sr.current;return i=he(n,i),fe(n,o),e=Ha(r,n,e,t,i,o),t=Ua(),r!==null&&!Cr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~o,un(r,n,o)):(U&&t&&Ta(n),n.flags|=1,yr(r,n,e,o),n.child)}function il(r,n,e,t,o){if(Pr(e)){var i=!0;lo(n)}else i=!1;if(fe(n,o),n.stateNode===null)$t(r,n),fc(n,e,t),Wi(n,e,t,o),t=!0;else if(r===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var l=a.context,c=e.contextType;typeof c=="object"&&c!==null?c=Rr(c):(c=Pr(e)?zn:sr.current,c=he(n,c));var m=e.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==t||l!==c)&&qu(n,a,t,c),pn=!1;var g=n.memoizedState;a.state=g,fo(n,t,a,o),l=n.memoizedState,u!==t||g!==l||vr.current||pn?(typeof m=="function"&&(Qi(n,e,m,t),l=n.memoizedState),(u=pn||Xu(n,e,u,t,g,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=l),a.props=t,a.state=l,a.context=c,t=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{a=n.stateNode,Ws(r,n),u=n.memoizedProps,c=n.type===n.elementType?u:Br(n.type,u),a.props=c,f=n.pendingProps,g=a.context,l=e.contextType,typeof l=="object"&&l!==null?l=Rr(l):(l=Pr(e)?zn:sr.current,l=he(n,l));var P=e.getDerivedStateFromProps;(m=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==f||g!==l)&&qu(n,a,t,l),pn=!1,g=n.memoizedState,a.state=g,fo(n,t,a,o);var h=n.memoizedState;u!==f||g!==h||vr.current||pn?(typeof P=="function"&&(Qi(n,e,P,t),h=n.memoizedState),(c=pn||Xu(n,e,c,t,g,h,l)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,h,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=h),a.props=t,a.state=h,a.context=l,t=c):(typeof a.componentDidUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&g===r.memoizedState||(n.flags|=1024),t=!1)}return Zi(r,n,e,t,i,o)}function Zi(r,n,e,t,o,i){vc(r,n);var a=(n.flags&128)!==0;if(!t&&!a)return o&&Uu(n,e,!1),un(r,n,i);t=n.stateNode,n1.current=n;var u=a&&typeof e.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,r!==null&&a?(n.child=ve(n,r.child,null,i),n.child=ve(n,null,u,i)):yr(r,n,u,i),n.memoizedState=t.state,o&&Uu(n,e,!0),n.child}function Pc(r){var n=r.stateNode;n.pendingContext?Hu(r,n.pendingContext,n.pendingContext!==n.context):n.context&&Hu(r,n.context,!1),za(r,n.containerInfo)}function al(r,n,e,t,o){return Ce(),_a(o),n.flags|=256,yr(r,n,e,t),n.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function Xi(r){return{baseLanes:r,cachePool:null,transitions:null}}function Sc(r,n,e){var t=n.pendingProps,o=Q.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=r!==null&&r.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(o|=1),b(Q,o&1),r===null)return Ui(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(n.mode&1?r.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=t.children,r=t.fallback,i?(t=n.mode,i=n.child,a={mode:"hidden",children:a},!(t&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=jo(a,t,0,null),r=Bn(r,t,e,null),i.return=n,r.return=n,i.sibling=r,n.child=i,n.child.memoizedState=Xi(e),n.memoizedState=Ji,r):Wa(n,a));if(o=r.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return e1(r,n,a,t,u,o,e);if(i){i=t.fallback,a=n.mode,o=r.child,u=o.sibling;var l={mode:"hidden",children:t.children};return!(a&1)&&n.child!==o?(t=n.child,t.childLanes=0,t.pendingProps=l,n.deletions=null):(t=An(o,l),t.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=An(u,i):(i=Bn(i,a,e,null),i.flags|=2),i.return=n,t.return=n,t.sibling=i,n.child=t,t=i,i=n.child,a=r.child.memoizedState,a=a===null?Xi(e):{baseLanes:a.baseLanes|e,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=r.childLanes&~e,n.memoizedState=Ji,t}return i=r.child,r=i.sibling,t=An(i,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=e),t.return=n,t.sibling=null,r!==null&&(e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)),n.child=t,n.memoizedState=null,t}function Wa(r,n){return n=jo({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function Rt(r,n,e,t){return t!==null&&_a(t),ve(n,r.child,null,e),r=Wa(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function e1(r,n,e,t,o,i,a){if(e)return n.flags&256?(n.flags&=-257,t=ci(Error(S(422))),Rt(r,n,a,t)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(i=t.fallback,o=n.mode,t=jo({mode:"visible",children:t.children},o,0,null),i=Bn(i,o,a,null),i.flags|=2,t.return=n,i.return=n,t.sibling=i,n.child=t,n.mode&1&&ve(n,r.child,null,a),n.child.memoizedState=Xi(a),n.memoizedState=Ji,i);if(!(n.mode&1))return Rt(r,n,a,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var u=t.dgst;return t=u,i=Error(S(419)),t=ci(i,t,void 0),Rt(r,n,a,t)}if(u=(a&r.childLanes)!==0,Cr||u){if(t=er,t!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,an(r,o),Gr(t,r,o,-1))}return qa(),t=ci(Error(S(421))),Rt(r,n,a,t)}return o.data==="$?"?(n.flags|=128,n.child=r.child,n=g1.bind(null,r),o._reactRetry=n,null):(r=i.treeContext,wr=xn(o.nextSibling),Fr=n,U=!0,Ir=null,r!==null&&(Nr[Mr++]=rn,Nr[Mr++]=nn,Nr[Mr++]=In,rn=r.id,nn=r.overflow,In=n),n=Wa(n,t.children),n.flags|=4096,n)}function ul(r,n,e){r.lanes|=n;var t=r.alternate;t!==null&&(t.lanes|=n),Yi(r.return,n,e)}function di(r,n,e,t,o){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=e,i.tailMode=o)}function xc(r,n,e){var t=n.pendingProps,o=t.revealOrder,i=t.tail;if(yr(r,n,t.children,e),t=Q.current,t&2)t=t&1|2,n.flags|=128;else{if(r!==null&&r.flags&128)r:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ul(r,e,n);else if(r.tag===19)ul(r,e,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break r;for(;r.sibling===null;){if(r.return===null||r.return===n)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(b(Q,t),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(e=n.child,o=null;e!==null;)r=e.alternate,r!==null&&go(r)===null&&(o=e),e=e.sibling;e=o,e===null?(o=n.child,n.child=null):(o=e.sibling,e.sibling=null),di(n,!1,o,e,i);break;case"backwards":for(e=null,o=n.child,n.child=null;o!==null;){if(r=o.alternate,r!==null&&go(r)===null){n.child=o;break}r=o.sibling,o.sibling=e,e=o,o=r}di(n,!0,e,null,i);break;case"together":di(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $t(r,n){!(n.mode&1)&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function un(r,n,e){if(r!==null&&(n.dependencies=r.dependencies),Gn|=n.lanes,!(e&n.childLanes))return null;if(r!==null&&n.child!==r.child)throw Error(S(153));if(n.child!==null){for(r=n.child,e=An(r,r.pendingProps),n.child=e,e.return=n;r.sibling!==null;)r=r.sibling,e=e.sibling=An(r,r.pendingProps),e.return=n;e.sibling=null}return n.child}function t1(r,n,e){switch(n.tag){case 3:Pc(n),Ce();break;case 5:$s(n);break;case 1:Pr(n.type)&&lo(n);break;case 4:za(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,o=n.memoizedProps.value;b(yo,t._currentValue),t._currentValue=o;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(b(Q,Q.current&1),n.flags|=128,null):e&n.child.childLanes?Sc(r,n,e):(b(Q,Q.current&1),r=un(r,n,e),r!==null?r.sibling:null);b(Q,Q.current&1);break;case 19:if(t=(e&n.childLanes)!==0,r.flags&128){if(t)return xc(r,n,e);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),b(Q,Q.current),t)break;return null;case 22:case 23:return n.lanes=0,Cc(r,n,e)}return un(r,n,e)}var wc,qi,Fc,Ec;wc=function(r,n){for(var e=n.child;e!==null;){if(e.tag===5||e.tag===6)r.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};qi=function(){};Fc=function(r,n,e,t){var o=r.memoizedProps;if(o!==t){r=n.stateNode,Dn(Zr.current);var i=null;switch(e){case"input":o=Si(r,o),t=Si(r,t),i=[];break;case"select":o=$({},o,{value:void 0}),t=$({},t,{value:void 0}),i=[];break;case"textarea":o=Fi(r,o),t=Fi(r,t),i=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=ao)}Ai(e,t);var a;e=null;for(c in o)if(!t.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(a in u)u.hasOwnProperty(a)&&(e||(e={}),e[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Je.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in t){var l=t[c];if(u=o!=null?o[c]:void 0,t.hasOwnProperty(c)&&l!==u&&(l!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(e||(e={}),e[a]="");for(a in l)l.hasOwnProperty(a)&&u[a]!==l[a]&&(e||(e={}),e[a]=l[a])}else e||(i||(i=[]),i.push(c,e)),e=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Je.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&G("scroll",r),i||u===l||(i=[])):(i=i||[]).push(c,l))}e&&(i=i||[]).push("style",e);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Ec=function(r,n,e,t){e!==t&&(n.flags|=4)};function je(r,n){if(!U)switch(r.tailMode){case"hidden":n=r.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?r.tail=null:e.sibling=null;break;case"collapsed":e=r.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function ur(r){var n=r.alternate!==null&&r.alternate.child===r.child,e=0,t=0;if(n)for(var o=r.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=r,o=o.sibling;else for(o=r.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=r,o=o.sibling;return r.subtreeFlags|=t,r.childLanes=e,n}function o1(r,n,e){var t=n.pendingProps;switch(La(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ur(n),null;case 1:return Pr(n.type)&&uo(),ur(n),null;case 3:return t=n.stateNode,Pe(),H(vr),H(sr),ba(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(Lt(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ir!==null&&(ua(Ir),Ir=null))),qi(r,n),ur(n),null;case 5:Ia(n);var o=Dn(st.current);if(e=n.type,r!==null&&n.stateNode!=null)Fc(r,n,e,t,o),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(S(166));return ur(n),null}if(r=Dn(Zr.current),Lt(n)){t=n.stateNode,e=n.type;var i=n.memoizedProps;switch(t[$r]=n,t[ut]=i,r=(n.mode&1)!==0,e){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(o=0;o<be.length;o++)G(be[o],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":mu(t,i),G("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},G("invalid",t);break;case"textarea":Cu(t,i),G("invalid",t)}Ai(e,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?t.textContent!==u&&(i.suppressHydrationWarning!==!0&&Tt(t.textContent,u,r),o=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Tt(t.textContent,u,r),o=["children",""+u]):Je.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&G("scroll",t)}switch(e){case"input":wt(t),hu(t,i,!0);break;case"textarea":wt(t),vu(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=ao)}t=o,n.updateQueue=t,t!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ql(e)),r==="http://www.w3.org/1999/xhtml"?e==="script"?(r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=a.createElement(e,{is:t.is}):(r=a.createElement(e),e==="select"&&(a=r,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):r=a.createElementNS(r,e),r[$r]=n,r[ut]=t,wc(r,n,!1,!1),n.stateNode=r;r:{switch(a=Vi(e,t),e){case"dialog":G("cancel",r),G("close",r),o=t;break;case"iframe":case"object":case"embed":G("load",r),o=t;break;case"video":case"audio":for(o=0;o<be.length;o++)G(be[o],r);o=t;break;case"source":G("error",r),o=t;break;case"img":case"image":case"link":G("error",r),G("load",r),o=t;break;case"details":G("toggle",r),o=t;break;case"input":mu(r,t),o=Si(r,t),G("invalid",r);break;case"option":o=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},o=$({},t,{value:void 0}),G("invalid",r);break;case"textarea":Cu(r,t),o=Fi(r,t),G("invalid",r);break;default:o=t}Ai(e,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var l=u[i];i==="style"?es(r,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rs(r,l)):i==="children"?typeof l=="string"?(e!=="textarea"||l!=="")&&Xe(r,l):typeof l=="number"&&Xe(r,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Je.hasOwnProperty(i)?l!=null&&i==="onScroll"&&G("scroll",r):l!=null&&ha(r,i,l,a))}switch(e){case"input":wt(r),hu(r,t,!1);break;case"textarea":wt(r),vu(r);break;case"option":t.value!=null&&r.setAttribute("value",""+Vn(t.value));break;case"select":r.multiple=!!t.multiple,i=t.value,i!=null?ce(r,!!t.multiple,i,!1):t.defaultValue!=null&&ce(r,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(r.onclick=ao)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break r;case"img":t=!0;break r;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ur(n),null;case 6:if(r&&n.stateNode!=null)Ec(r,n,r.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(S(166));if(e=Dn(st.current),Dn(Zr.current),Lt(n)){if(t=n.stateNode,e=n.memoizedProps,t[$r]=n,(i=t.nodeValue!==e)&&(r=Fr,r!==null))switch(r.tag){case 3:Tt(t.nodeValue,e,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Tt(t.nodeValue,e,(r.mode&1)!==0)}i&&(n.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[$r]=n,n.stateNode=t}return ur(n),null;case 13:if(H(Q),t=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(U&&wr!==null&&n.mode&1&&!(n.flags&128))Hs(),Ce(),n.flags|=98560,i=!1;else if(i=Lt(n),t!==null&&t.dehydrated!==null){if(r===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[$r]=n}else Ce(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ur(n),i=!1}else Ir!==null&&(ua(Ir),Ir=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=e,n):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(r===null||Q.current&1?rr===0&&(rr=3):qa())),n.updateQueue!==null&&(n.flags|=4),ur(n),null);case 4:return Pe(),qi(r,n),r===null&&it(n.stateNode.containerInfo),ur(n),null;case 10:return Da(n.type._context),ur(n),null;case 17:return Pr(n.type)&&uo(),ur(n),null;case 19:if(H(Q),i=n.memoizedState,i===null)return ur(n),null;if(t=(n.flags&128)!==0,a=i.rendering,a===null)if(t)je(i,!1);else{if(rr!==0||r!==null&&r.flags&128)for(r=n.child;r!==null;){if(a=go(r),a!==null){for(n.flags|=128,je(i,!1),t=a.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=e,e=n.child;e!==null;)i=e,r=t,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,r=a.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e=e.sibling;return b(Q,Q.current&1|2),n.child}r=r.sibling}i.tail!==null&&J()>xe&&(n.flags|=128,t=!0,je(i,!1),n.lanes=4194304)}else{if(!t)if(r=go(a),r!==null){if(n.flags|=128,t=!0,e=r.updateQueue,e!==null&&(n.updateQueue=e,n.flags|=4),je(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return ur(n),null}else 2*J()-i.renderingStartTime>xe&&e!==1073741824&&(n.flags|=128,t=!0,je(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(e=i.last,e!==null?e.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,e=Q.current,b(Q,t?e&1|2:e&1),n):(ur(n),null);case 22:case 23:return Xa(),t=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?xr&1073741824&&(ur(n),n.subtreeFlags&6&&(n.flags|=8192)):ur(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function i1(r,n){switch(La(n),n.tag){case 1:return Pr(n.type)&&uo(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return Pe(),H(vr),H(sr),ba(),r=n.flags,r&65536&&!(r&128)?(n.flags=r&-65537|128,n):null;case 5:return Ia(n),null;case 13:if(H(Q),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(S(340));Ce()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return H(Q),null;case 4:return Pe(),null;case 10:return Da(n.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var jt=!1,lr=!1,a1=typeof WeakSet=="function"?WeakSet:Set,k=null;function le(r,n){var e=r.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){Z(r,n,t)}else e.current=null}function ra(r,n,e){try{e()}catch(t){Z(r,n,t)}}var ll=!1;function u1(r,n){if(Oi=to,r=Ms(),Ma(r)){if("selectionStart"in r)var e={start:r.selectionStart,end:r.selectionEnd};else r:{e=(e=r.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var o=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break r}var a=0,u=-1,l=-1,c=0,m=0,f=r,g=null;n:for(;;){for(var P;f!==e||o!==0&&f.nodeType!==3||(u=a+o),f!==i||t!==0&&f.nodeType!==3||(l=a+t),f.nodeType===3&&(a+=f.nodeValue.length),(P=f.firstChild)!==null;)g=f,f=P;for(;;){if(f===r)break n;if(g===e&&++c===o&&(u=a),g===i&&++m===t&&(l=a),(P=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=P}e=u===-1||l===-1?null:{start:u,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(Bi={focusedElem:r,selectionRange:e},to=!1,k=n;k!==null;)if(n=k,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,k=r;else for(;k!==null;){n=k;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var x=h.memoizedProps,E=h.memoizedState,y=n.stateNode,s=y.getSnapshotBeforeUpdate(n.elementType===n.type?x:Br(n.type,x),E);y.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){Z(n,n.return,C)}if(r=n.sibling,r!==null){r.return=n.return,k=r;break}k=n.return}return h=ll,ll=!1,h}function $e(r,n,e){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&r)===r){var i=o.destroy;o.destroy=void 0,i!==void 0&&ra(n,e,i)}o=o.next}while(o!==t)}}function _o(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var e=n=n.next;do{if((e.tag&r)===r){var t=e.create;e.destroy=t()}e=e.next}while(e!==n)}}function na(r){var n=r.ref;if(n!==null){var e=r.stateNode;switch(r.tag){case 5:r=e;break;default:r=e}typeof n=="function"?n(r):n.current=r}}function Ac(r){var n=r.alternate;n!==null&&(r.alternate=null,Ac(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[$r],delete n[ut],delete n[bi],delete n[Hy],delete n[Uy])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Vc(r){return r.tag===5||r.tag===3||r.tag===4}function sl(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||Vc(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue r;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ea(r,n,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?e.nodeType===8?e.parentNode.insertBefore(r,n):e.insertBefore(r,n):(e.nodeType===8?(n=e.parentNode,n.insertBefore(r,e)):(n=e,n.appendChild(r)),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=ao));else if(t!==4&&(r=r.child,r!==null))for(ea(r,n,e),r=r.sibling;r!==null;)ea(r,n,e),r=r.sibling}function ta(r,n,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?e.insertBefore(r,n):e.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(ta(r,n,e),r=r.sibling;r!==null;)ta(r,n,e),r=r.sibling}var tr=null,zr=!1;function dn(r,n,e){for(e=e.child;e!==null;)kc(r,n,e),e=e.sibling}function kc(r,n,e){if(Kr&&typeof Kr.onCommitFiberUnmount=="function")try{Kr.onCommitFiberUnmount(Eo,e)}catch{}switch(e.tag){case 5:lr||le(e,n);case 6:var t=tr,o=zr;tr=null,dn(r,n,e),tr=t,zr=o,tr!==null&&(zr?(r=tr,e=e.stateNode,r.nodeType===8?r.parentNode.removeChild(e):r.removeChild(e)):tr.removeChild(e.stateNode));break;case 18:tr!==null&&(zr?(r=tr,e=e.stateNode,r.nodeType===8?oi(r.parentNode,e):r.nodeType===1&&oi(r,e),et(r)):oi(tr,e.stateNode));break;case 4:t=tr,o=zr,tr=e.stateNode.containerInfo,zr=!0,dn(r,n,e),tr=t,zr=o;break;case 0:case 11:case 14:case 15:if(!lr&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ra(e,n,a),o=o.next}while(o!==t)}dn(r,n,e);break;case 1:if(!lr&&(le(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(u){Z(e,n,u)}dn(r,n,e);break;case 21:dn(r,n,e);break;case 22:e.mode&1?(lr=(t=lr)||e.memoizedState!==null,dn(r,n,e),lr=t):dn(r,n,e);break;default:dn(r,n,e)}}function cl(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var e=r.stateNode;e===null&&(e=r.stateNode=new a1),n.forEach(function(t){var o=m1.bind(null,r,t);e.has(t)||(e.add(t),t.then(o,o))})}}function Or(r,n){var e=n.deletions;if(e!==null)for(var t=0;t<e.length;t++){var o=e[t];try{var i=r,a=n,u=a;r:for(;u!==null;){switch(u.tag){case 5:tr=u.stateNode,zr=!1;break r;case 3:tr=u.stateNode.containerInfo,zr=!0;break r;case 4:tr=u.stateNode.containerInfo,zr=!0;break r}u=u.return}if(tr===null)throw Error(S(160));kc(i,a,o),tr=null,zr=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){Z(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,r),n=n.sibling}function Nc(r,n){var e=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Or(n,r),Qr(r),t&4){try{$e(3,r,r.return),_o(3,r)}catch(x){Z(r,r.return,x)}try{$e(5,r,r.return)}catch(x){Z(r,r.return,x)}}break;case 1:Or(n,r),Qr(r),t&512&&e!==null&&le(e,e.return);break;case 5:if(Or(n,r),Qr(r),t&512&&e!==null&&le(e,e.return),r.flags&32){var o=r.stateNode;try{Xe(o,"")}catch(x){Z(r,r.return,x)}}if(t&4&&(o=r.stateNode,o!=null)){var i=r.memoizedProps,a=e!==null?e.memoizedProps:i,u=r.type,l=r.updateQueue;if(r.updateQueue=null,l!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Jl(o,i),Vi(u,a);var c=Vi(u,i);for(a=0;a<l.length;a+=2){var m=l[a],f=l[a+1];m==="style"?es(o,f):m==="dangerouslySetInnerHTML"?rs(o,f):m==="children"?Xe(o,f):ha(o,m,f,c)}switch(u){case"input":xi(o,i);break;case"textarea":Xl(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?ce(o,!!i.multiple,P,!1):g!==!!i.multiple&&(i.defaultValue!=null?ce(o,!!i.multiple,i.defaultValue,!0):ce(o,!!i.multiple,i.multiple?[]:"",!1))}o[ut]=i}catch(x){Z(r,r.return,x)}}break;case 6:if(Or(n,r),Qr(r),t&4){if(r.stateNode===null)throw Error(S(162));o=r.stateNode,i=r.memoizedProps;try{o.nodeValue=i}catch(x){Z(r,r.return,x)}}break;case 3:if(Or(n,r),Qr(r),t&4&&e!==null&&e.memoizedState.isDehydrated)try{et(n.containerInfo)}catch(x){Z(r,r.return,x)}break;case 4:Or(n,r),Qr(r);break;case 13:Or(n,r),Qr(r),o=r.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Za=J())),t&4&&cl(r);break;case 22:if(m=e!==null&&e.memoizedState!==null,r.mode&1?(lr=(c=lr)||m,Or(n,r),lr=c):Or(n,r),Qr(r),t&8192){if(c=r.memoizedState!==null,(r.stateNode.isHidden=c)&&!m&&r.mode&1)for(k=r,m=r.child;m!==null;){for(f=k=m;k!==null;){switch(g=k,P=g.child,g.tag){case 0:case 11:case 14:case 15:$e(4,g,g.return);break;case 1:le(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){t=g,e=g.return;try{n=t,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(x){Z(t,e,x)}}break;case 5:le(g,g.return);break;case 22:if(g.memoizedState!==null){yl(f);continue}}P!==null?(P.return=g,k=P):yl(f)}m=m.sibling}r:for(m=null,f=r;;){if(f.tag===5){if(m===null){m=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=ns("display",a))}catch(x){Z(r,r.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Z(r,r.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===r)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break r;for(;f.sibling===null;){if(f.return===null||f.return===r)break r;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Or(n,r),Qr(r),t&4&&cl(r);break;case 21:break;default:Or(n,r),Qr(r)}}function Qr(r){var n=r.flags;if(n&2){try{r:{for(var e=r.return;e!==null;){if(Vc(e)){var t=e;break r}e=e.return}throw Error(S(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(Xe(o,""),t.flags&=-33);var i=sl(r);ta(r,i,o);break;case 3:case 4:var a=t.stateNode.containerInfo,u=sl(r);ea(r,u,a);break;default:throw Error(S(161))}}catch(l){Z(r,r.return,l)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function l1(r,n,e){k=r,Mc(r)}function Mc(r,n,e){for(var t=(r.mode&1)!==0;k!==null;){var o=k,i=o.child;if(o.tag===22&&t){var a=o.memoizedState!==null||jt;if(!a){var u=o.alternate,l=u!==null&&u.memoizedState!==null||lr;u=jt;var c=lr;if(jt=a,(lr=l)&&!c)for(k=o;k!==null;)a=k,l=a.child,a.tag===22&&a.memoizedState!==null?pl(o):l!==null?(l.return=a,k=l):pl(o);for(;i!==null;)k=i,Mc(i),i=i.sibling;k=o,jt=u,lr=c}dl(r)}else o.subtreeFlags&8772&&i!==null?(i.return=o,k=i):dl(r)}}function dl(r){for(;k!==null;){var n=k;if(n.flags&8772){var e=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:lr||_o(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!lr)if(e===null)t.componentDidMount();else{var o=n.elementType===n.type?e.memoizedProps:Br(n.type,e.memoizedProps);t.componentDidUpdate(o,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ku(n,i,t);break;case 3:var a=n.updateQueue;if(a!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ku(n,a,e)}break;case 5:var u=n.stateNode;if(e===null&&n.flags&4){e=u;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break;case"img":l.src&&(e.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&et(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}lr||n.flags&512&&na(n)}catch(g){Z(n,n.return,g)}}if(n===r){k=null;break}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}}function yl(r){for(;k!==null;){var n=k;if(n===r){k=null;break}var e=n.sibling;if(e!==null){e.return=n.return,k=e;break}k=n.return}}function pl(r){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var e=n.return;try{_o(4,n)}catch(l){Z(n,e,l)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var o=n.return;try{t.componentDidMount()}catch(l){Z(n,o,l)}}var i=n.return;try{na(n)}catch(l){Z(n,i,l)}break;case 5:var a=n.return;try{na(n)}catch(l){Z(n,a,l)}}}catch(l){Z(n,n.return,l)}if(n===r){k=null;break}var u=n.sibling;if(u!==null){u.return=n.return,k=u;break}k=n.return}}var s1=Math.ceil,Co=ln.ReactCurrentDispatcher,$a=ln.ReactCurrentOwner,_r=ln.ReactCurrentBatchConfig,O=0,er=null,X=null,or=0,xr=0,se=Mn(0),rr=0,pt=null,Gn=0,Ro=0,Ka=0,Ke=null,mr=null,Za=0,xe=1/0,Xr=null,vo=!1,oa=null,Fn=null,Dt=!1,hn=null,Po=0,Ze=0,ia=null,Kt=-1,Zt=0;function pr(){return O&6?J():Kt!==-1?Kt:Kt=J()}function En(r){return r.mode&1?O&2&&or!==0?or&-or:Qy.transition!==null?(Zt===0&&(Zt=fs()),Zt):(r=z,r!==0||(r=window.event,r=r===void 0?16:Ss(r.type)),r):1}function Gr(r,n,e,t){if(50<Ze)throw Ze=0,ia=null,Error(S(185));gt(r,e,t),(!(O&2)||r!==er)&&(r===er&&(!(O&2)&&(Ro|=e),rr===4&&gn(r,or)),Sr(r,t),e===1&&O===0&&!(n.mode&1)&&(xe=J()+500,Mo&&Tn()))}function Sr(r,n){var e=r.callbackNode;Qd(r,n);var t=eo(r,r===er?or:0);if(t===0)e!==null&&xu(e),r.callbackNode=null,r.callbackPriority=0;else if(n=t&-t,r.callbackPriority!==n){if(e!=null&&xu(e),n===1)r.tag===0?Yy(fl.bind(null,r)):Is(fl.bind(null,r)),by(function(){!(O&6)&&Tn()}),e=null;else{switch(gs(t)){case 1:e=xa;break;case 4:e=ys;break;case 16:e=no;break;case 536870912:e=ps;break;default:e=no}e=Bc(e,Tc.bind(null,r))}r.callbackPriority=n,r.callbackNode=e}}function Tc(r,n){if(Kt=-1,Zt=0,O&6)throw Error(S(327));var e=r.callbackNode;if(ge()&&r.callbackNode!==e)return null;var t=eo(r,r===er?or:0);if(t===0)return null;if(t&30||t&r.expiredLanes||n)n=So(r,t);else{n=t;var o=O;O|=2;var i=_c();(er!==r||or!==n)&&(Xr=null,xe=J()+500,On(r,n));do try{y1();break}catch(u){Lc(r,u)}while(!0);ja(),Co.current=i,O=o,X!==null?n=0:(er=null,or=0,n=rr)}if(n!==0){if(n===2&&(o=Li(r),o!==0&&(t=o,n=aa(r,o))),n===1)throw e=pt,On(r,0),gn(r,t),Sr(r,J()),e;if(n===6)gn(r,t);else{if(o=r.current.alternate,!(t&30)&&!c1(o)&&(n=So(r,t),n===2&&(i=Li(r),i!==0&&(t=i,n=aa(r,i))),n===1))throw e=pt,On(r,0),gn(r,t),Sr(r,J()),e;switch(r.finishedWork=o,r.finishedLanes=t,n){case 0:case 1:throw Error(S(345));case 2:_n(r,mr,Xr);break;case 3:if(gn(r,t),(t&130023424)===t&&(n=Za+500-J(),10<n)){if(eo(r,0)!==0)break;if(o=r.suspendedLanes,(o&t)!==t){pr(),r.pingedLanes|=r.suspendedLanes&o;break}r.timeoutHandle=Ii(_n.bind(null,r,mr,Xr),n);break}_n(r,mr,Xr);break;case 4:if(gn(r,t),(t&4194240)===t)break;for(n=r.eventTimes,o=-1;0<t;){var a=31-br(t);i=1<<a,a=n[a],a>o&&(o=a),t&=~i}if(t=o,t=J()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*s1(t/1960))-t,10<t){r.timeoutHandle=Ii(_n.bind(null,r,mr,Xr),t);break}_n(r,mr,Xr);break;case 5:_n(r,mr,Xr);break;default:throw Error(S(329))}}}return Sr(r,J()),r.callbackNode===e?Tc.bind(null,r):null}function aa(r,n){var e=Ke;return r.current.memoizedState.isDehydrated&&(On(r,n).flags|=256),r=So(r,n),r!==2&&(n=mr,mr=e,n!==null&&ua(n)),r}function ua(r){mr===null?mr=r:mr.push.apply(mr,r)}function c1(r){for(var n=r;;){if(n.flags&16384){var e=n.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var o=e[t],i=o.getSnapshot;o=o.value;try{if(!Hr(i(),o))return!1}catch{return!1}}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gn(r,n){for(n&=~Ka,n&=~Ro,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var e=31-br(n),t=1<<e;r[e]=-1,n&=~t}}function fl(r){if(O&6)throw Error(S(327));ge();var n=eo(r,0);if(!(n&1))return Sr(r,J()),null;var e=So(r,n);if(r.tag!==0&&e===2){var t=Li(r);t!==0&&(n=t,e=aa(r,t))}if(e===1)throw e=pt,On(r,0),gn(r,n),Sr(r,J()),e;if(e===6)throw Error(S(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,_n(r,mr,Xr),Sr(r,J()),null}function Ja(r,n){var e=O;O|=1;try{return r(n)}finally{O=e,O===0&&(xe=J()+500,Mo&&Tn())}}function Hn(r){hn!==null&&hn.tag===0&&!(O&6)&&ge();var n=O;O|=1;var e=_r.transition,t=z;try{if(_r.transition=null,z=1,r)return r()}finally{z=t,_r.transition=e,O=n,!(O&6)&&Tn()}}function Xa(){xr=se.current,H(se)}function On(r,n){r.finishedWork=null,r.finishedLanes=0;var e=r.timeoutHandle;if(e!==-1&&(r.timeoutHandle=-1,Iy(e)),X!==null)for(e=X.return;e!==null;){var t=e;switch(La(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&uo();break;case 3:Pe(),H(vr),H(sr),ba();break;case 5:Ia(t);break;case 4:Pe();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Da(t.type._context);break;case 22:case 23:Xa()}e=e.return}if(er=r,X=r=An(r.current,null),or=xr=n,rr=0,pt=null,Ka=Ro=Gn=0,mr=Ke=null,jn!==null){for(n=0;n<jn.length;n++)if(e=jn[n],t=e.interleaved,t!==null){e.interleaved=null;var o=t.next,i=e.pending;if(i!==null){var a=i.next;i.next=o,t.next=a}e.pending=t}jn=null}return r}function Lc(r,n){do{var e=X;try{if(ja(),Qt.current=ho,mo){for(var t=W.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}mo=!1}if(bn=0,nr=q=W=null,We=!1,ct=0,$a.current=null,e===null||e.return===null){rr=1,pt=n,X=null;break}r:{var i=r,a=e.return,u=e,l=n;if(n=or,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=u,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var P=nl(a);if(P!==null){P.flags&=-257,el(P,a,u,i,n),P.mode&1&&rl(i,c,n),n=P,l=c;var h=n.updateQueue;if(h===null){var x=new Set;x.add(l),n.updateQueue=x}else h.add(l);break r}else{if(!(n&1)){rl(i,c,n),qa();break r}l=Error(S(426))}}else if(U&&u.mode&1){var E=nl(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),el(E,a,u,i,n),_a(Se(l,u));break r}}i=l=Se(l,u),rr!==4&&(rr=2),Ke===null?Ke=[i]:Ke.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var y=gc(i,l,n);$u(i,y);break r;case 1:u=l;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Fn===null||!Fn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var C=mc(i,u,n);$u(i,C);break r}}i=i.return}while(i!==null)}jc(e)}catch(w){n=w,X===e&&e!==null&&(X=e=e.return);continue}break}while(!0)}function _c(){var r=Co.current;return Co.current=ho,r===null?ho:r}function qa(){(rr===0||rr===3||rr===2)&&(rr=4),er===null||!(Gn&268435455)&&!(Ro&268435455)||gn(er,or)}function So(r,n){var e=O;O|=2;var t=_c();(er!==r||or!==n)&&(Xr=null,On(r,n));do try{d1();break}catch(o){Lc(r,o)}while(!0);if(ja(),O=e,Co.current=t,X!==null)throw Error(S(261));return er=null,or=0,rr}function d1(){for(;X!==null;)Rc(X)}function y1(){for(;X!==null&&!Od();)Rc(X)}function Rc(r){var n=Oc(r.alternate,r,xr);r.memoizedProps=r.pendingProps,n===null?jc(r):X=n,$a.current=null}function jc(r){var n=r;do{var e=n.alternate;if(r=n.return,n.flags&32768){if(e=i1(e,n),e!==null){e.flags&=32767,X=e;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{rr=6,X=null;return}}else if(e=o1(e,n,xr),e!==null){X=e;return}if(n=n.sibling,n!==null){X=n;return}X=n=r}while(n!==null);rr===0&&(rr=5)}function _n(r,n,e){var t=z,o=_r.transition;try{_r.transition=null,z=1,p1(r,n,e,t)}finally{_r.transition=o,z=t}return null}function p1(r,n,e,t){do ge();while(hn!==null);if(O&6)throw Error(S(327));e=r.finishedWork;var o=r.finishedLanes;if(e===null)return null;if(r.finishedWork=null,r.finishedLanes=0,e===r.current)throw Error(S(177));r.callbackNode=null,r.callbackPriority=0;var i=e.lanes|e.childLanes;if(Wd(r,i),r===er&&(X=er=null,or=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||Dt||(Dt=!0,Bc(no,function(){return ge(),null})),i=(e.flags&15990)!==0,e.subtreeFlags&15990||i){i=_r.transition,_r.transition=null;var a=z;z=1;var u=O;O|=4,$a.current=null,u1(r,e),Nc(e,r),_y(Bi),to=!!Oi,Bi=Oi=null,r.current=e,l1(e),Bd(),O=u,z=a,_r.transition=i}else r.current=e;if(Dt&&(Dt=!1,hn=r,Po=o),i=r.pendingLanes,i===0&&(Fn=null),bd(e.stateNode),Sr(r,J()),n!==null)for(t=r.onRecoverableError,e=0;e<n.length;e++)o=n[e],t(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,r=oa,oa=null,r;return Po&1&&r.tag!==0&&ge(),i=r.pendingLanes,i&1?r===ia?Ze++:(Ze=0,ia=r):Ze=0,Tn(),null}function ge(){if(hn!==null){var r=gs(Po),n=_r.transition,e=z;try{if(_r.transition=null,z=16>r?16:r,hn===null)var t=!1;else{if(r=hn,hn=null,Po=0,O&6)throw Error(S(331));var o=O;for(O|=4,k=r.current;k!==null;){var i=k,a=i.child;if(k.flags&16){var u=i.deletions;if(u!==null){for(var l=0;l<u.length;l++){var c=u[l];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:$e(8,m,i)}var f=m.child;if(f!==null)f.return=m,k=f;else for(;k!==null;){m=k;var g=m.sibling,P=m.return;if(Ac(m),m===c){k=null;break}if(g!==null){g.return=P,k=g;break}k=P}}}var h=i.alternate;if(h!==null){var x=h.child;if(x!==null){h.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}k=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,k=a;else r:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$e(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,k=y;break r}k=i.return}}var s=r.current;for(k=s;k!==null;){a=k;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,k=p;else r:for(a=s;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:_o(9,u)}}catch(w){Z(u,u.return,w)}if(u===a){k=null;break r}var C=u.sibling;if(C!==null){C.return=u.return,k=C;break r}k=u.return}}if(O=o,Tn(),Kr&&typeof Kr.onPostCommitFiberRoot=="function")try{Kr.onPostCommitFiberRoot(Eo,r)}catch{}t=!0}return t}finally{z=e,_r.transition=n}}return!1}function gl(r,n,e){n=Se(e,n),n=gc(r,n,1),r=wn(r,n,1),n=pr(),r!==null&&(gt(r,1,n),Sr(r,n))}function Z(r,n,e){if(r.tag===3)gl(r,r,e);else for(;n!==null;){if(n.tag===3){gl(n,r,e);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Fn===null||!Fn.has(t))){r=Se(e,r),r=mc(n,r,1),n=wn(n,r,1),r=pr(),n!==null&&(gt(n,1,r),Sr(n,r));break}}n=n.return}}function f1(r,n,e){var t=r.pingCache;t!==null&&t.delete(n),n=pr(),r.pingedLanes|=r.suspendedLanes&e,er===r&&(or&e)===e&&(rr===4||rr===3&&(or&130023424)===or&&500>J()-Za?On(r,0):Ka|=e),Sr(r,n)}function Dc(r,n){n===0&&(r.mode&1?(n=At,At<<=1,!(At&130023424)&&(At=4194304)):n=1);var e=pr();r=an(r,n),r!==null&&(gt(r,n,e),Sr(r,e))}function g1(r){var n=r.memoizedState,e=0;n!==null&&(e=n.retryLane),Dc(r,e)}function m1(r,n){var e=0;switch(r.tag){case 13:var t=r.stateNode,o=r.memoizedState;o!==null&&(e=o.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(S(314))}t!==null&&t.delete(n),Dc(r,e)}var Oc;Oc=function(r,n,e){if(r!==null)if(r.memoizedProps!==n.pendingProps||vr.current)Cr=!0;else{if(!(r.lanes&e)&&!(n.flags&128))return Cr=!1,t1(r,n,e);Cr=!!(r.flags&131072)}else Cr=!1,U&&n.flags&1048576&&bs(n,co,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;$t(r,n),r=n.pendingProps;var o=he(n,sr.current);fe(n,e),o=Ha(null,n,t,r,o,e);var i=Ua();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pr(t)?(i=!0,lo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ba(n),o.updater=Lo,n.stateNode=o,o._reactInternals=n,Wi(n,t,r,e),n=Zi(null,n,t,!0,i,e)):(n.tag=0,U&&i&&Ta(n),yr(null,n,o,e),n=n.child),n;case 16:t=n.elementType;r:{switch($t(r,n),r=n.pendingProps,o=t._init,t=o(t._payload),n.type=t,o=n.tag=C1(t),r=Br(t,r),o){case 0:n=Ki(null,n,t,r,e);break r;case 1:n=il(null,n,t,r,e);break r;case 11:n=tl(null,n,t,r,e);break r;case 14:n=ol(null,n,t,Br(t.type,r),e);break r}throw Error(S(306,t,""))}return n;case 0:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Br(t,o),Ki(r,n,t,o,e);case 1:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Br(t,o),il(r,n,t,o,e);case 3:r:{if(Pc(n),r===null)throw Error(S(387));t=n.pendingProps,i=n.memoizedState,o=i.element,Ws(r,n),fo(n,t,null,e);var a=n.memoizedState;if(t=a.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Se(Error(S(423)),n),n=al(r,n,t,e,o);break r}else if(t!==o){o=Se(Error(S(424)),n),n=al(r,n,t,e,o);break r}else for(wr=xn(n.stateNode.containerInfo.firstChild),Fr=n,U=!0,Ir=null,e=Ys(n,null,t,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ce(),t===o){n=un(r,n,e);break r}yr(r,n,t,e)}n=n.child}return n;case 5:return $s(n),r===null&&Ui(n),t=n.type,o=n.pendingProps,i=r!==null?r.memoizedProps:null,a=o.children,zi(t,o)?a=null:i!==null&&zi(t,i)&&(n.flags|=32),vc(r,n),yr(r,n,a,e),n.child;case 6:return r===null&&Ui(n),null;case 13:return Sc(r,n,e);case 4:return za(n,n.stateNode.containerInfo),t=n.pendingProps,r===null?n.child=ve(n,null,t,e):yr(r,n,t,e),n.child;case 11:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Br(t,o),tl(r,n,t,o,e);case 7:return yr(r,n,n.pendingProps,e),n.child;case 8:return yr(r,n,n.pendingProps.children,e),n.child;case 12:return yr(r,n,n.pendingProps.children,e),n.child;case 10:r:{if(t=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,b(yo,t._currentValue),t._currentValue=a,i!==null)if(Hr(i.value,a)){if(i.children===o.children&&!vr.current){n=un(r,n,e);break r}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var l=u.firstContext;l!==null;){if(l.context===t){if(i.tag===1){l=en(-1,e&-e),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}i.lanes|=e,l=i.alternate,l!==null&&(l.lanes|=e),Yi(i.return,e,n),u.lanes|=e;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=e,u=a.alternate,u!==null&&(u.lanes|=e),Yi(a,e,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}yr(r,n,o.children,e),n=n.child}return n;case 9:return o=n.type,t=n.pendingProps.children,fe(n,e),o=Rr(o),t=t(o),n.flags|=1,yr(r,n,t,e),n.child;case 14:return t=n.type,o=Br(t,n.pendingProps),o=Br(t.type,o),ol(r,n,t,o,e);case 15:return hc(r,n,n.type,n.pendingProps,e);case 17:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Br(t,o),$t(r,n),n.tag=1,Pr(t)?(r=!0,lo(n)):r=!1,fe(n,e),fc(n,t,o),Wi(n,t,o,e),Zi(null,n,t,!0,r,e);case 19:return xc(r,n,e);case 22:return Cc(r,n,e)}throw Error(S(156,n.tag))};function Bc(r,n){return ds(r,n)}function h1(r,n,e,t){this.tag=r,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lr(r,n,e,t){return new h1(r,n,e,t)}function ru(r){return r=r.prototype,!(!r||!r.isReactComponent)}function C1(r){if(typeof r=="function")return ru(r)?1:0;if(r!=null){if(r=r.$$typeof,r===va)return 11;if(r===Pa)return 14}return 2}function An(r,n){var e=r.alternate;return e===null?(e=Lr(r.tag,n,r.key,r.mode),e.elementType=r.elementType,e.type=r.type,e.stateNode=r.stateNode,e.alternate=r,r.alternate=e):(e.pendingProps=n,e.type=r.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=r.flags&14680064,e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=r.sibling,e.index=r.index,e.ref=r.ref,e}function Jt(r,n,e,t,o,i){var a=2;if(t=r,typeof r=="function")ru(r)&&(a=1);else if(typeof r=="string")a=5;else r:switch(r){case qn:return Bn(e.children,o,i,n);case Ca:a=8,o|=8;break;case hi:return r=Lr(12,e,n,o|2),r.elementType=hi,r.lanes=i,r;case Ci:return r=Lr(13,e,n,o),r.elementType=Ci,r.lanes=i,r;case vi:return r=Lr(19,e,n,o),r.elementType=vi,r.lanes=i,r;case $l:return jo(e,o,i,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Ql:a=10;break r;case Wl:a=9;break r;case va:a=11;break r;case Pa:a=14;break r;case yn:a=16,t=null;break r}throw Error(S(130,r==null?r:typeof r,""))}return n=Lr(a,e,n,o),n.elementType=r,n.type=t,n.lanes=i,n}function Bn(r,n,e,t){return r=Lr(7,r,t,n),r.lanes=e,r}function jo(r,n,e,t){return r=Lr(22,r,t,n),r.elementType=$l,r.lanes=e,r.stateNode={isHidden:!1},r}function yi(r,n,e){return r=Lr(6,r,null,n),r.lanes=e,r}function pi(r,n,e){return n=Lr(4,r.children!==null?r.children:[],r.key,n),n.lanes=e,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function v1(r,n,e,t,o){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nu(r,n,e,t,o,i,a,u,l){return r=new v1(r,n,e,u,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Lr(3,null,null,n),r.current=i,i.stateNode=r,i.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(i),r}function P1(r,n,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:t==null?null:""+t,children:r,containerInfo:n,implementation:e}}function zc(r){if(!r)return kn;r=r._reactInternals;r:{if(Yn(r)!==r||r.tag!==1)throw Error(S(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break r;case 1:if(Pr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break r}}n=n.return}while(n!==null);throw Error(S(171))}if(r.tag===1){var e=r.type;if(Pr(e))return zs(r,e,n)}return n}function Ic(r,n,e,t,o,i,a,u,l){return r=nu(e,t,!0,r,o,i,a,u,l),r.context=zc(null),e=r.current,t=pr(),o=En(e),i=en(t,o),i.callback=n??null,wn(e,i,o),r.current.lanes=o,gt(r,o,t),Sr(r,t),r}function Do(r,n,e,t){var o=n.current,i=pr(),a=En(o);return e=zc(e),n.context===null?n.context=e:n.pendingContext=e,n=en(i,a),n.payload={element:r},t=t===void 0?null:t,t!==null&&(n.callback=t),r=wn(o,n,a),r!==null&&(Gr(r,o,a,i),Yt(r,o,a)),a}function xo(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ml(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var e=r.retryLane;r.retryLane=e!==0&&e<n?e:n}}function eu(r,n){ml(r,n),(r=r.alternate)&&ml(r,n)}function S1(){return null}var bc=typeof reportError=="function"?reportError:function(r){console.error(r)};function tu(r){this._internalRoot=r}Oo.prototype.render=tu.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(S(409));Do(r,n,null,null)};Oo.prototype.unmount=tu.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;Hn(function(){Do(null,r,null,null)}),n[on]=null}};function Oo(r){this._internalRoot=r}Oo.prototype.unstable_scheduleHydration=function(r){if(r){var n=Cs();r={blockedOn:null,target:r,priority:n};for(var e=0;e<fn.length&&n!==0&&n<fn[e].priority;e++);fn.splice(e,0,r),e===0&&Ps(r)}};function ou(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Bo(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hl(){}function x1(r,n,e,t,o){if(o){if(typeof t=="function"){var i=t;t=function(){var c=xo(a);i.call(c)}}var a=Ic(n,t,r,0,null,!1,!1,"",hl);return r._reactRootContainer=a,r[on]=a.current,it(r.nodeType===8?r.parentNode:r),Hn(),a}for(;o=r.lastChild;)r.removeChild(o);if(typeof t=="function"){var u=t;t=function(){var c=xo(l);u.call(c)}}var l=nu(r,0,!1,null,null,!1,!1,"",hl);return r._reactRootContainer=l,r[on]=l.current,it(r.nodeType===8?r.parentNode:r),Hn(function(){Do(n,l,e,t)}),l}function zo(r,n,e,t,o){var i=e._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var u=o;o=function(){var l=xo(a);u.call(l)}}Do(n,a,r,o)}else a=x1(e,n,r,o,t);return xo(a)}ms=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var e=Ie(n.pendingLanes);e!==0&&(wa(n,e|1),Sr(n,J()),!(O&6)&&(xe=J()+500,Tn()))}break;case 13:Hn(function(){var t=an(r,1);if(t!==null){var o=pr();Gr(t,r,1,o)}}),eu(r,1)}};Fa=function(r){if(r.tag===13){var n=an(r,134217728);if(n!==null){var e=pr();Gr(n,r,134217728,e)}eu(r,134217728)}};hs=function(r){if(r.tag===13){var n=En(r),e=an(r,n);if(e!==null){var t=pr();Gr(e,r,n,t)}eu(r,n)}};Cs=function(){return z};vs=function(r,n){var e=z;try{return z=r,n()}finally{z=e}};Ni=function(r,n,e){switch(n){case"input":if(xi(r,e),n=e.name,e.type==="radio"&&n!=null){for(e=r;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<e.length;n++){var t=e[n];if(t!==r&&t.form===r.form){var o=No(t);if(!o)throw Error(S(90));Zl(t),xi(t,o)}}}break;case"textarea":Xl(r,e);break;case"select":n=e.value,n!=null&&ce(r,!!e.multiple,n,!1)}};is=Ja;as=Hn;var w1={usingClientEntryPoint:!1,Events:[ht,te,No,ts,os,Ja]},De={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F1={bundleType:De.bundleType,version:De.version,rendererPackageName:De.rendererPackageName,rendererConfig:De.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ss(r),r===null?null:r.stateNode},findFiberByHostInstance:De.findFiberByHostInstance||S1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ot=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ot.isDisabled&&Ot.supportsFiber)try{Eo=Ot.inject(F1),Kr=Ot}catch{}}Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;Ar.createPortal=function(r,n){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(n))throw Error(S(200));return P1(r,n,null,e)};Ar.createRoot=function(r,n){if(!ou(r))throw Error(S(299));var e=!1,t="",o=bc;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=nu(r,1,!1,null,null,e,!1,t,o),r[on]=n.current,it(r.nodeType===8?r.parentNode:r),new tu(n)};Ar.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(S(188)):(r=Object.keys(r).join(","),Error(S(268,r)));return r=ss(n),r=r===null?null:r.stateNode,r};Ar.flushSync=function(r){return Hn(r)};Ar.hydrate=function(r,n,e){if(!Bo(n))throw Error(S(200));return zo(null,r,n,!0,e)};Ar.hydrateRoot=function(r,n,e){if(!ou(r))throw Error(S(405));var t=e!=null&&e.hydratedSources||null,o=!1,i="",a=bc;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),n=Ic(n,null,r,1,e??null,o,!1,i,a),r[on]=n.current,it(r),t)for(r=0;r<t.length;r++)e=t[r],o=e._getVersion,o=o(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,o]:n.mutableSourceEagerHydrationData.push(e,o);return new Oo(n)};Ar.render=function(r,n,e){if(!Bo(n))throw Error(S(200));return zo(null,r,n,!1,e)};Ar.unmountComponentAtNode=function(r){if(!Bo(r))throw Error(S(40));return r._reactRootContainer?(Hn(function(){zo(null,null,r,!1,function(){r._reactRootContainer=null,r[on]=null})}),!0):!1};Ar.unstable_batchedUpdates=Ja;Ar.unstable_renderSubtreeIntoContainer=function(r,n,e,t){if(!Bo(e))throw Error(S(200));if(r==null||r._reactInternals===void 0)throw Error(S(38));return zo(r,n,e,!1,t)};Ar.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(r){console.error(r)}}Gc(),Gl.exports=Ar;var iu=Gl.exports,Hc,Cl=iu;Hc=Cl.createRoot,Cl.hydrateRoot;const E1="modulepreload",A1=function(r){return"/"+r},vl={},V1=function(n,e,t){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(l=>{if(l=A1(l),l in vl)return;vl[l]=!0;const c=l.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":E1,c||(f.as="script"),f.crossOrigin="",f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),c)return new Promise((g,P)=>{f.addEventListener("load",g),f.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return o.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return n().catch(i)})},k1=v.createContext(null);function N1(r,n){const e=Array.isArray(r)?r[0]:r?r.x:0,t=Array.isArray(r)?r[1]:r?r.y:0,o=Array.isArray(n)?n[0]:n?n.x:0,i=Array.isArray(n)?n[1]:n?n.y:0;return e===o&&t===i}function hr(r,n){if(r===n)return!0;if(!r||!n)return!1;if(Array.isArray(r)){if(!Array.isArray(n)||r.length!==n.length)return!1;for(let e=0;e<r.length;e++)if(!hr(r[e],n[e]))return!1;return!0}else if(Array.isArray(n))return!1;if(typeof r=="object"&&typeof n=="object"){const e=Object.keys(r),t=Object.keys(n);if(e.length!==t.length)return!1;for(const o of e)if(!n.hasOwnProperty(o)||!hr(r[o],n[o]))return!1;return!0}return!1}function Pl(r){return{longitude:r.center.lng,latitude:r.center.lat,zoom:r.zoom,pitch:r.pitch,bearing:r.bearing,padding:r.padding}}function Sl(r,n){const e=n.viewState||n,t={};if("longitude"in e&&"latitude"in e&&(e.longitude!==r.center.lng||e.latitude!==r.center.lat)){const o=r.center.constructor;t.center=new o(e.longitude,e.latitude)}return"zoom"in e&&e.zoom!==r.zoom&&(t.zoom=e.zoom),"bearing"in e&&e.bearing!==r.bearing&&(t.bearing=e.bearing),"pitch"in e&&e.pitch!==r.pitch&&(t.pitch=e.pitch),e.padding&&r.padding&&!hr(e.padding,r.padding)&&(t.padding=e.padding),t}const M1=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function xl(r){if(!r)return null;if(typeof r=="string"||("toJS"in r&&(r=r.toJS()),!r.layers))return r;const n={};for(const t of r.layers)n[t.id]=t;const e=r.layers.map(t=>{let o=null;"interactive"in t&&(o=Object.assign({},t),delete o.interactive);const i=n[t.ref];if(i){o=o||Object.assign({},t),delete o.ref;for(const a of M1)a in i&&(o[a]=i[a])}return o||t});return{...r,layers:e}}const wl={version:8,sources:{},layers:[]},Fl={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},El={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},Al={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},T1=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],L1=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class we{constructor(n,e,t){this._map=null,this._internalUpdate=!1,this._hoveredFeatures=null,this._propsedCameraUpdate=null,this._styleComponents={},this._onEvent=o=>{const i=this.props[Al[o.type]];i?i(o):o.type==="error"&&console.error(o.error)},this._onCameraEvent=o=>{if(this._internalUpdate)return;o.viewState=this._propsedCameraUpdate||Pl(this._map.transform);const i=this.props[El[o.type]];i&&i(o)},this._onCameraUpdate=o=>this._internalUpdate?o:(this._propsedCameraUpdate=Pl(o),Sl(o,this.props)),this._onPointerEvent=o=>{(o.type==="mousemove"||o.type==="mouseout")&&this._updateHover(o);const i=this.props[Fl[o.type]];i&&(this.props.interactiveLayerIds&&o.type!=="mouseover"&&o.type!=="mouseout"&&(o.features=this._hoveredFeatures||this._queryRenderedFeatures(o.point)),i(o),delete o.features)},this._MapClass=n,this.props=e,this._initialize(t)}get map(){return this._map}setProps(n){const e=this.props;this.props=n;const t=this._updateSettings(n,e),o=this._updateSize(n),i=this._updateViewState(n);this._updateStyle(n,e),this._updateStyleComponents(n),this._updateHandlers(n,e),(t||o||i&&!this._map.isMoving())&&this.redraw()}static reuse(n,e){const t=we.savedMaps.pop();if(!t)return null;const o=t.map,i=o.getContainer();for(e.className=i.className;i.childNodes.length>0;)e.appendChild(i.childNodes[0]);o._container=e;const a=o._resizeObserver;a&&(a.disconnect(),a.observe(e)),t.setProps({...n,styleDiffing:!1}),o.resize();const{initialViewState:u}=n;return u&&(u.bounds?o.fitBounds(u.bounds,{...u.fitBoundsOptions,duration:0}):t._updateViewState(u)),o.isStyleLoaded()?o.fire("load"):o.once("style.load",()=>o.fire("load")),o._update(),t}_initialize(n){const{props:e}=this,{mapStyle:t=wl}=e,o={...e,...e.initialViewState,container:n,style:xl(t)},i=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),e.gl){const u=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=u,e.gl)}const a=new this._MapClass(o);i.padding&&a.setPadding(i.padding),e.cursor&&(a.getCanvas().style.cursor=e.cursor),a.transformCameraUpdate=this._onCameraUpdate,a.on("style.load",()=>{var u;this._styleComponents={light:a.getLight(),sky:a.getSky(),projection:(u=a.getProjection)==null?void 0:u.call(a),terrain:a.getTerrain()},this._updateStyleComponents(this.props)}),a.on("sourcedata",()=>{this._updateStyleComponents(this.props)});for(const u in Fl)a.on(u,this._onPointerEvent);for(const u in El)a.on(u,this._onCameraEvent);for(const u in Al)a.on(u,this._onEvent);this._map=a}recycle(){const e=this.map.getContainer().querySelector("[mapboxgl-children]");e==null||e.remove(),we.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const n=this._map;n.style&&(n._frame&&(n._frame.cancel(),n._frame=null),n._render())}_updateSize(n){const{viewState:e}=n;if(e){const t=this._map;if(e.width!==t.transform.width||e.height!==t.transform.height)return t.resize(),!0}return!1}_updateViewState(n){const e=this._map,t=e.transform;if(!e.isMoving()){const i=Sl(t,n);if(Object.keys(i).length>0)return this._internalUpdate=!0,e.jumpTo(i),this._internalUpdate=!1,!0}return!1}_updateSettings(n,e){const t=this._map;let o=!1;for(const i of T1)if(i in n&&!hr(n[i],e[i])){o=!0;const a=t[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(t,n[i])}return o}_updateStyle(n,e){if(n.cursor!==e.cursor&&(this._map.getCanvas().style.cursor=n.cursor||""),n.mapStyle!==e.mapStyle){const{mapStyle:t=wl,styleDiffing:o=!0}=n,i={diff:o};"localIdeographFontFamily"in n&&(i.localIdeographFontFamily=n.localIdeographFontFamily),this._map.setStyle(xl(t),i)}}_updateStyleComponents({light:n,projection:e,sky:t,terrain:o}){var u,l;const i=this._map,a=this._styleComponents;i.style._loaded&&(n&&!hr(n,a.light)&&(a.light=n,i.setLight(n)),e&&!hr(e,a.projection)&&e!==((u=a.projection)==null?void 0:u.type)&&(a.projection=typeof e=="string"?{type:e}:e,(l=i.setProjection)==null||l.call(i,a.projection)),t&&!hr(t,a.sky)&&(a.sky=t,i.setSky(t)),o!==void 0&&!hr(o,a.terrain)&&(!o||i.getSource(o.source))&&(a.terrain=o,i.setTerrain(o)))}_updateHandlers(n,e){const t=this._map;for(const o of L1){const i=n[o]??!0,a=e[o]??!0;hr(i,a)||(i?t[o].enable(i):t[o].disable())}}_queryRenderedFeatures(n){const e=this._map,{interactiveLayerIds:t=[]}=this.props;try{return e.queryRenderedFeatures(n,{layers:t.filter(e.getLayer.bind(e))})}catch{return[]}}_updateHover(n){var o;const{props:e}=this;if(e.interactiveLayerIds&&(e.onMouseMove||e.onMouseEnter||e.onMouseLeave)){const i=n.type,a=((o=this._hoveredFeatures)==null?void 0:o.length)>0,u=this._queryRenderedFeatures(n.point),l=u.length>0;!l&&a&&(n.type="mouseleave",this._onPointerEvent(n)),this._hoveredFeatures=u,l&&!a&&(n.type="mouseenter",this._onPointerEvent(n)),n.type=i}else this._hoveredFeatures=null}}we.savedMaps=[];const _1=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function R1(r){if(!r)return null;const n=r.map,e={getMap:()=>n};for(const t of j1(n))!(t in e)&&!_1.includes(t)&&(e[t]=n[t].bind(n));return e}function j1(r){const n=new Set;let e=r;for(;e;){for(const t of Object.getOwnPropertyNames(e))t[0]!=="_"&&typeof r[t]=="function"&&t!=="fire"&&t!=="setEventedParent"&&n.add(t);e=Object.getPrototypeOf(e)}return Array.from(n)}const D1=typeof document<"u"?v.useLayoutEffect:v.useEffect;function O1(r,n){const{RTLTextPlugin:e,maxParallelImageRequests:t,workerCount:o,workerUrl:i}=n;if(e&&r.getRTLTextPluginStatus&&r.getRTLTextPluginStatus()==="unavailable"){const{pluginUrl:a,lazy:u=!0}=typeof e=="string"?{pluginUrl:e}:e;r.setRTLTextPlugin(a,l=>{l&&console.error(l)},u)}t!==void 0&&r.setMaxParallelImageRequests(t),o!==void 0&&r.setWorkerCount(o),i!==void 0&&r.setWorkerUrl(i)}const Ve=v.createContext(null);function B1(r,n){const e=v.useContext(k1),[t,o]=v.useState(null),i=v.useRef(),{current:a}=v.useRef({mapLib:null,map:null});v.useEffect(()=>{const c=r.mapLib;let m=!0,f;return Promise.resolve(c||V1(()=>import("./maplibre-gl-CLtaB3RB.js").then(g=>g.m),[])).then(g=>{if(!m)return;if(!g)throw new Error("Invalid mapLib");const P="Map"in g?g:g.default;if(!P.Map)throw new Error("Invalid mapLib");O1(P,r),r.reuseMaps&&(f=we.reuse(r,i.current)),f||(f=new we(P.Map,r,i.current)),a.map=R1(f),a.mapLib=P,o(f),e==null||e.onMapMount(a.map,r.id)}).catch(g=>{const{onError:P}=r;P?P({type:"error",target:null,originalEvent:null,error:g}):console.error(g)}),()=>{m=!1,f&&(e==null||e.onMapUnmount(r.id),r.reuseMaps?f.recycle():f.destroy())}},[]),D1(()=>{t&&t.setProps(r)}),v.useImperativeHandle(n,()=>a.map,[t]);const u=v.useMemo(()=>({position:"relative",width:"100%",height:"100%",...r.style}),[r.style]),l={height:"100%"};return v.createElement("div",{id:r.id,ref:i,style:u},t&&v.createElement(Ve.Provider,{value:a},v.createElement("div",{"mapboxgl-children":"",style:l},r.children)))}const z1=v.forwardRef(B1),I1=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function sn(r,n){if(!r||!n)return;const e=r.style;for(const t in n){const o=n[t];Number.isFinite(o)&&!I1.test(t)?e[t]=`${o}px`:e[t]=o}}function Uc(r,n){if(r===n)return null;const e=Vl(r),t=Vl(n),o=[];for(const i of t)e.has(i)||o.push(i);for(const i of e)t.has(i)||o.push(i);return o.length===0?null:o}function Vl(r){return new Set(r?r.trim().split(/\s+/):[])}v.memo(v.forwardRef((r,n)=>{const{map:e,mapLib:t}=v.useContext(Ve),o=v.useRef({props:r}),i=v.useMemo(()=>{let y=!1;v.Children.forEach(r.children,C=>{C&&(y=!0)});const s={...r,element:y?document.createElement("div"):void 0},p=new t.Marker(s);return p.setLngLat([r.longitude,r.latitude]),p.getElement().addEventListener("click",C=>{var w,F;(F=(w=o.current.props).onClick)==null||F.call(w,{type:"click",target:p,originalEvent:C})}),p.on("dragstart",C=>{var F,A;const w=C;w.lngLat=i.getLngLat(),(A=(F=o.current.props).onDragStart)==null||A.call(F,w)}),p.on("drag",C=>{var F,A;const w=C;w.lngLat=i.getLngLat(),(A=(F=o.current.props).onDrag)==null||A.call(F,w)}),p.on("dragend",C=>{var F,A;const w=C;w.lngLat=i.getLngLat(),(A=(F=o.current.props).onDragEnd)==null||A.call(F,w)}),p},[]);v.useEffect(()=>(i.addTo(e.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:u,offset:l,style:c,draggable:m=!1,popup:f=null,rotation:g=0,rotationAlignment:P="auto",pitchAlignment:h="auto"}=r;v.useEffect(()=>{sn(i.getElement(),c)},[c]),v.useImperativeHandle(n,()=>i,[]);const x=o.current.props;(i.getLngLat().lng!==a||i.getLngLat().lat!==u)&&i.setLngLat([a,u]),l&&!N1(i.getOffset(),l)&&i.setOffset(l),i.isDraggable()!==m&&i.setDraggable(m),i.getRotation()!==g&&i.setRotation(g),i.getRotationAlignment()!==P&&i.setRotationAlignment(P),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==f&&i.setPopup(f);const E=Uc(x.className,r.className);if(E)for(const y of E)i.toggleClassName(y);return o.current.props=r,iu.createPortal(r.children,i.getElement())}));const b1=v.memo(v.forwardRef((r,n)=>{const{map:e,mapLib:t}=v.useContext(Ve),o=v.useMemo(()=>document.createElement("div"),[]),i=v.useRef({props:r}),a=v.useMemo(()=>{const u={...r},l=new t.Popup(u);return l.setLngLat([r.longitude,r.latitude]),l.once("open",c=>{var m,f;(f=(m=i.current.props).onOpen)==null||f.call(m,c)}),l},[]);if(v.useEffect(()=>{const u=l=>{var c,m;(m=(c=i.current.props).onClose)==null||m.call(c,l)};return a.on("close",u),a.setDOMContent(o).addTo(e.getMap()),()=>{a.off("close",u),a.isOpen()&&a.remove()}},[]),v.useEffect(()=>{sn(a.getElement(),r.style)},[r.style]),v.useImperativeHandle(n,()=>a,[]),a.isOpen()){const u=i.current.props;(a.getLngLat().lng!==r.longitude||a.getLngLat().lat!==r.latitude)&&a.setLngLat([r.longitude,r.latitude]),r.offset&&!hr(u.offset,r.offset)&&a.setOffset(r.offset),(u.anchor!==r.anchor||u.maxWidth!==r.maxWidth)&&(a.options.anchor=r.anchor,a.setMaxWidth(r.maxWidth));const l=Uc(u.className,r.className);if(l)for(const c of l)a.toggleClassName(c);i.current.props=r}return iu.createPortal(r.children,o)}));function Qn(r,n,e,t){const o=v.useContext(Ve),i=v.useMemo(()=>r(o),[]);return v.useEffect(()=>{const a=n,u=null,l=typeof n=="function"?n:null,{map:c}=o;return c.hasControl(i)||(c.addControl(i,a==null?void 0:a.position),u&&u(o)),()=>{l&&l(o),c.hasControl(i)&&c.removeControl(i)}},[]),i}function G1(r){const n=Qn(({mapLib:e})=>new e.AttributionControl(r),{position:r.position});return v.useEffect(()=>{sn(n._container,r.style)},[r.style]),null}v.memo(G1);function H1(r){const n=Qn(({mapLib:e})=>new e.FullscreenControl({container:r.containerId&&document.getElementById(r.containerId)}),{position:r.position});return v.useEffect(()=>{sn(n._controlContainer,r.style)},[r.style]),null}v.memo(H1);function U1(r,n){const e=v.useRef({props:r}),t=Qn(({mapLib:o})=>{const i=new o.GeolocateControl(r),a=i._setupUI;return i._setupUI=()=>{i._container.hasChildNodes()||a()},i.on("geolocate",u=>{var l,c;(c=(l=e.current.props).onGeolocate)==null||c.call(l,u)}),i.on("error",u=>{var l,c;(c=(l=e.current.props).onError)==null||c.call(l,u)}),i.on("outofmaxbounds",u=>{var l,c;(c=(l=e.current.props).onOutOfMaxBounds)==null||c.call(l,u)}),i.on("trackuserlocationstart",u=>{var l,c;(c=(l=e.current.props).onTrackUserLocationStart)==null||c.call(l,u)}),i.on("trackuserlocationend",u=>{var l,c;(c=(l=e.current.props).onTrackUserLocationEnd)==null||c.call(l,u)}),i},{position:r.position});return e.current.props=r,v.useImperativeHandle(n,()=>t,[]),v.useEffect(()=>{sn(t._container,r.style)},[r.style]),null}v.memo(v.forwardRef(U1));function Y1(r){const n=Qn(({mapLib:e})=>new e.NavigationControl(r),{position:r.position});return v.useEffect(()=>{sn(n._container,r.style)},[r.style]),null}v.memo(Y1);function Q1(r){const n=Qn(({mapLib:i})=>new i.ScaleControl(r),{position:r.position}),e=v.useRef(r),t=e.current;e.current=r;const{style:o}=r;return r.maxWidth!==void 0&&r.maxWidth!==t.maxWidth&&(n.options.maxWidth=r.maxWidth),r.unit!==void 0&&r.unit!==t.unit&&n.setUnit(r.unit),v.useEffect(()=>{sn(n._container,o)},[o]),null}v.memo(Q1);function W1(r){const n=Qn(({mapLib:e})=>new e.TerrainControl(r),{position:r.position});return v.useEffect(()=>{sn(n._container,r.style)},[r.style]),null}v.memo(W1);function $1(r){const n=Qn(({mapLib:e})=>new e.LogoControl(r),{position:r.position});return v.useEffect(()=>{sn(n._container,r.style)},[r.style]),null}v.memo($1);function wo(r,n){if(!r)throw new Error(n)}let K1=0;function Z1(r,n,e){if(r.style&&r.style._loaded){const t={...e};return delete t.id,delete t.children,r.addSource(n,t),r.getSource(n)}return null}function J1(r,n,e){var a,u,l;wo(n.id===e.id,"source id changed"),wo(n.type===e.type,"source type changed");let t="",o=0;for(const c in n)c!=="children"&&c!=="id"&&!hr(e[c],n[c])&&(t=c,o++);if(!o)return;const i=n.type;if(i==="geojson")r.setData(n.data);else if(i==="image")r.updateImage({url:n.url,coordinates:n.coordinates});else switch(t){case"coordinates":(a=r.setCoordinates)==null||a.call(r,n.coordinates);break;case"url":(u=r.setUrl)==null||u.call(r,n.url);break;case"tiles":(l=r.setTiles)==null||l.call(r,n.tiles);break;default:console.warn(`Unable to update <Source> prop: ${t}`)}}function fi(r){const n=v.useContext(Ve).map.getMap(),e=v.useRef(r),[,t]=v.useState(0),o=v.useMemo(()=>r.id||`jsx-source-${K1++}`,[]);v.useEffect(()=>{if(n){const a=()=>setTimeout(()=>t(u=>u+1),0);return n.on("styledata",a),a(),()=>{var u;if(n.off("styledata",a),n.style&&n.style._loaded&&n.getSource(o)){const l=(u=n.getStyle())==null?void 0:u.layers;if(l)for(const c of l)c.source===o&&n.removeLayer(c.id);n.removeSource(o)}}}},[n]);let i=n&&n.style&&n.getSource(o);return i?J1(i,r,e.current):i=Z1(n,o,r),e.current=r,i&&v.Children.map(r.children,a=>a&&v.cloneElement(a,{source:o}))||null}function X1(r,n,e,t){if(wo(e.id===t.id,"layer id changed"),wo(e.type===t.type,"layer type changed"),e.type==="custom"||t.type==="custom")return;const{layout:o={},paint:i={},filter:a,minzoom:u,maxzoom:l,beforeId:c}=e;if(c!==t.beforeId&&r.moveLayer(n,c),o!==t.layout){const m=t.layout||{};for(const f in o)hr(o[f],m[f])||r.setLayoutProperty(n,f,o[f]);for(const f in m)o.hasOwnProperty(f)||r.setLayoutProperty(n,f,void 0)}if(i!==t.paint){const m=t.paint||{};for(const f in i)hr(i[f],m[f])||r.setPaintProperty(n,f,i[f]);for(const f in m)i.hasOwnProperty(f)||r.setPaintProperty(n,f,void 0)}hr(a,t.filter)||r.setFilter(n,a),(u!==t.minzoom||l!==t.maxzoom)&&r.setLayerZoomRange(n,u,l)}function q1(r,n,e){if(r.style&&r.style._loaded&&(!("source"in e)||r.getSource(e.source))){const t={...e,id:n};delete t.beforeId,r.addLayer(t,e.beforeId)}}let rp=0;function gi(r){const n=v.useContext(Ve).map.getMap(),e=v.useRef(r),[,t]=v.useState(0),o=v.useMemo(()=>r.id||`jsx-layer-${rp++}`,[]);if(v.useEffect(()=>{if(n){const a=()=>t(u=>u+1);return n.on("styledata",a),a(),()=>{n.off("styledata",a),n.style&&n.style._loaded&&n.getLayer(o)&&n.removeLayer(o)}}},[n]),n&&n.style&&n.getLayer(o))try{X1(n,o,r,e.current)}catch(a){console.warn(a)}else q1(n,o,r);return e.current=r,null}function B(r){const n=Number(r);return isNaN(n)?0:n}function Jr(r,n=3){const e=Number(r);return isNaN(e)?"N/A":e.toFixed(n)}function np({value:r,invert:n=!1}){const e=Math.min(Math.max(r,0),1)*100,t=n?r>.66?"bg-red-500":r>.33?"bg-yellow-500":"bg-green-500":r>.66?"bg-green-500":r>.33?"bg-yellow-500":"bg-red-500";return d.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1.5 mt-1",children:d.jsx("div",{className:`${t} h-1.5 rounded-full transition-all`,style:{width:`${e}%`}})})}function Oe({title:r,children:n}){return d.jsxs("div",{className:"mb-5",children:[d.jsx("h3",{className:"text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3",children:r}),d.jsx("div",{className:"space-y-3",children:n})]})}function K({label:r,value:n,display:e,bar:t,invert:o}){return d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-gray-400 text-sm",children:r}),d.jsx("span",{className:"text-white text-sm font-medium",children:e})]}),t&&d.jsx(np,{value:n,invert:o})]})}function ep({prediction:r,onClose:n}){if(!r)return null;const e=r.prediction_prob,t=e<.05?"Very Low":e<.15?"Moderate":e<.3?"Elevated":"High",o=e<.05?"text-green-400":e<.15?"text-yellow-400":e<.3?"text-orange-400":"text-red-400",i=r.liberal_democracy?"Liberal Democracy":r.electoral_democracy?"Electoral Democracy":r.electoral_autocracy?"Electoral Autocracy":r.closed_autocracy?"Closed Autocracy":"Unknown";return d.jsxs("div",{className:"absolute right-0 top-0 h-full w-80 bg-[#0f1117] border-l border-gray-800 z-10 flex flex-col shadow-2xl",children:[d.jsxs("div",{className:"flex items-start justify-between p-4 border-b border-gray-800",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"font-bold text-white text-xl",children:r.country}),d.jsxs("p",{className:"text-gray-400 text-xs mt-0.5",children:[r.year," · Month ",r.month]})]}),d.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white text-lg mt-0.5",children:"✕"})]}),d.jsxs("div",{className:"px-4 py-3 border-b border-gray-800 bg-[#13151f]",children:[d.jsxs("div",{className:"flex justify-between items-center mb-1",children:[d.jsx("span",{className:"text-gray-400 text-sm",children:"Coup Probability"}),d.jsxs("span",{className:`font-bold text-lg ${o}`,children:[(e*100).toFixed(4),"%"]})]}),d.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:d.jsx("div",{className:`h-2 rounded-full transition-all ${e<.05?"bg-green-500":e<.15?"bg-yellow-500":e<.3?"bg-orange-500":"bg-red-500"}`,style:{width:`${Math.min(e/.3,1)*100}%`}})}),d.jsxs("p",{className:`text-xs mt-1 font-medium ${o}`,children:[t," Risk"]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[d.jsxs(Oe,{title:"Governance",children:[d.jsx(K,{label:"Regime Type",value:0,display:i}),d.jsx(K,{label:"Democracy Level",value:B(r.Democracy_level),display:Jr(r.Democracy_level),bar:!0}),d.jsx(K,{label:"Military Regime",value:B(r.Military_regime),display:B(r.Military_regime)===1?"Yes":"No"}),d.jsx(K,{label:"Military Influence",value:B(r.Military_influence),display:B(r.Military_influence)===1?"Yes":"No"}),d.jsx(K,{label:"Leader Age",value:B(r.Leader_age)/100,display:r.Leader_age!=null?`${r.Leader_age} years`:"N/A"}),d.jsx(K,{label:"Leader Duration",value:B(r.Leader_duration)/30,display:r.Leader_duration!=null?`${r.Leader_duration} years`:"N/A"})]}),d.jsxs(Oe,{title:"Economy",children:[d.jsx(K,{label:"GDP per Capita (log)",value:0,display:Jr(r.GDP_per_cap,4)}),d.jsx(K,{label:"Change in GDP per Capita",value:(B(r.Change_GDP_per_cap)+.2)/.4,display:r.Change_GDP_per_cap!=null?`${(B(r.Change_GDP_per_cap)*100).toFixed(2)}%`:"N/A",bar:!0}),d.jsx(K,{label:"Inflation",value:Math.min(B(r.Inflation)/20,1),display:r.Inflation!=null?`${B(r.Inflation).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),d.jsx(K,{label:"Trade (% of GDP)",value:Math.min(B(r.Trade)/100,1),display:r.Trade!=null?`${B(r.Trade).toFixed(2)}%`:"N/A",bar:!0})]}),d.jsxs(Oe,{title:"Society",children:[d.jsx(K,{label:"Women's Political Participation",value:B(r.Women_political_participation),display:Jr(r.Women_political_participation),bar:!0}),d.jsx(K,{label:"Women's Civil Liberties",value:B(r.wom_civlib),display:Jr(r.wom_civlib),bar:!0}),d.jsx(K,{label:"Women's Political Employment",value:B(r.women_polemp),display:Jr(r.women_polemp),bar:!0}),d.jsx(K,{label:"Protests",value:Math.min(B(r.Protests)/5,1),display:Jr(r.Protests),bar:!0,invert:!0}),d.jsx(K,{label:"Civil Wars",value:B(r.Civil_wars),display:B(r.Civil_wars)===1?"Yes":"No"})]}),d.jsxs(Oe,{title:"Military",children:[d.jsx(K,{label:"Military Expenditure",value:Math.min(B(r.milex)/30,1),display:r.milex!=null?`${B(r.milex).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),d.jsx(K,{label:"Military Personnel",value:Math.min(B(r.milper)/10,1),display:Jr(r.milper,4),bar:!0}),d.jsx(K,{label:"Soldier Quality",value:Math.min(B(r.solqual)/5,1),display:Jr(r.solqual,4),bar:!0}),d.jsx(K,{label:"Mobilization Concentration",value:B(r.mobil_conc),display:Jr(r.mobil_conc),bar:!0})]}),d.jsxs(Oe,{title:"Context",children:[d.jsx(K,{label:"Neighboring Coup",value:B(r.neighboring_coup),display:B(r.neighboring_coup)===1?"Yes":"No"}),d.jsx(K,{label:"Cold War Period",value:B(r.Cold_war),display:B(r.Cold_war)===1?"Yes":"No"}),d.jsx(K,{label:"Foreign Visit",value:B(r.visit),display:B(r.visit)===1?"Yes":"No"})]})]})]})}const Tr={successful:"#f59e0b",failed:"#ef4444",attempted:"#f97316",plot:"#64748b",alleged:"#64748b"},Jn={successful:"Successful",failed:"Failed",attempted:"Attempted",plot:"Plot",alleged:"Alleged"},Yc={successful:{color:Tr.successful,label:Jn.successful,badgeClass:"bg-emerald-500/20 text-emerald-300",dotClass:"bg-emerald-400"},failed:{color:Tr.failed,label:Jn.failed,badgeClass:"bg-red-500/20 text-red-300",dotClass:"bg-red-400"},attempted:{color:Tr.attempted,label:Jn.attempted,badgeClass:"bg-amber-500/20 text-amber-300",dotClass:"bg-amber-400"},plot:{color:Tr.plot,label:Jn.plot,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"},alleged:{color:Tr.alleged,label:Jn.alleged,badgeClass:"bg-slate-500/20 text-slate-300",dotClass:"bg-slate-400"}};function Qc(r){return new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function tp({event:r}){const n=Yc[r.outcome];return d.jsxs("div",{className:"popup-enter min-w-[240px] max-w-[min(320px,calc(100vw-2rem))] rounded-lg border border-gray-700/50 bg-[#1a1d26] shadow-xl pt-7 pr-7 pb-3 pl-3",style:{fontFamily:"'DM Sans', sans-serif"},children:[d.jsx("div",{className:"font-mono text-xs text-gray-500",style:{fontFamily:"'JetBrains Mono', monospace"},children:r.id}),d.jsx("h3",{className:"mt-1 text-sm font-bold text-white",children:r.country}),d.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center gap-1.5",children:[d.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${n.badgeClass}`,children:[d.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${n.dotClass}`}),n.label]}),d.jsx("span",{className:"rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-400",children:"Geolocated"})]}),r.description&&d.jsx("p",{className:"mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed",children:r.description}),d.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1 text-xs text-gray-500",children:[d.jsx(op,{className:"h-3.5 w-3.5 shrink-0"}),Qc(r.date)]})]})}function op({className:r}){return d.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":!0,children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}const ip=["successful","failed"];function ap(){return d.jsxs("div",{className:"absolute bottom-20 right-[max(1rem,env(safe-area-inset-right))] z-10 rounded-lg border border-gray-700/50 bg-[#1a1d26]/95 px-3 py-2 shadow-lg backdrop-blur-sm md:bottom-4 md:right-4",children:[d.jsx("div",{className:"mb-1.5 text-xs font-medium text-gray-400",children:"Outcome"}),d.jsx("div",{className:"flex flex-col gap-1",children:ip.map(r=>d.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300",children:[d.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full border border-gray-600",style:{backgroundColor:Tr[r]}}),Jn[r]]},r))})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wc=(...r)=>r.filter((n,e,t)=>!!n&&n.trim()!==""&&t.indexOf(n)===e).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=v.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:e=2,absoluteStrokeWidth:t,className:o="",children:i,iconNode:a,...u},l)=>v.createElement("svg",{ref:l,...lp,width:n,height:n,stroke:r,strokeWidth:t?Number(e)*24/Number(n):e,className:Wc("lucide",o),...u},[...a.map(([c,m])=>v.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=(r,n)=>{const e=v.forwardRef(({className:t,...o},i)=>v.createElement(sp,{ref:i,iconNode:n,className:Wc(`lucide-${up(r)}`,t),...o}));return e.displayName=`${r}`,e};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=Ur("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Ur("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Ur("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Ur("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Ur("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Ur("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Ur("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=Ur("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Ur("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=Ur("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Ur("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),kl=[{id:"home",icon:la,label:"Home"},{id:"events",icon:pp,label:"Events"},{id:"filters",icon:dp,label:"Filters"},{id:"about",icon:yp,label:"About"}];function vp({activeNav:r,onNavChange:n}){const[e,t]=v.useState(!1);return d.jsxs("aside",{className:`flex h-14 w-full shrink-0 flex-row items-center justify-around border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] transition-[width] duration-300 ease-in-out md:h-full md:flex-col md:justify-start md:border-r md:border-t-0 md:pb-0 ${e?"md:w-[72px]":"md:w-[280px]"}`,children:[d.jsxs("div",{className:"flex flex-1 items-center justify-around gap-0 md:hidden",children:[d.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:d.jsx(la,{className:"h-5 w-5"})}),kl.map(({id:o,icon:i,label:a})=>{const u=r===o;return d.jsx("button",{type:"button",onClick:()=>n(o),className:`flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-800/60 ${u?"text-amber-400":"text-gray-400"}`,title:a,children:d.jsx(i,{className:"h-5 w-5"})},o)})]}),d.jsxs("div",{className:"hidden md:flex md:h-full md:w-full md:flex-col",children:[d.jsxs("div",{className:"flex min-h-[56px] items-center gap-3 border-b border-gray-800 px-3",children:[d.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400",children:d.jsx(la,{className:"h-5 w-5"})}),!e&&d.jsx("span",{className:"truncate text-sm font-semibold text-white",children:"CoupView"})]}),d.jsx("nav",{className:"flex flex-1 flex-col gap-0.5 overflow-hidden py-2",children:kl.map(({id:o,icon:i,label:a})=>{const u=r===o;return d.jsxs("button",{type:"button",onClick:()=>n(o),className:`
                  flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200
                  hover:scale-[1.02] hover:bg-gray-800/60
                  ${e?"justify-center px-0":""}
                  ${u?"border-l-2 border-amber-500 bg-gray-800/40":"border-l-2 border-transparent"}
                `,title:e?a:void 0,children:[d.jsx(i,{className:`h-5 w-5 shrink-0 ${u?"text-amber-400":"text-gray-400"}`}),!e&&d.jsx("span",{className:`truncate text-sm ${u?"text-white":"text-gray-300"}`,children:a})]},o)})}),d.jsxs("div",{className:"border-t border-gray-800 py-2",children:[d.jsxs("button",{type:"button",className:"flex w-full items-center gap-3 px-3 py-2.5 text-left text-gray-400 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/60 hover:text-gray-300",title:e?"Settings":void 0,children:[d.jsx(hp,{className:"h-5 w-5 shrink-0"}),!e&&d.jsx("span",{className:"truncate text-sm",children:"Settings"})]}),d.jsx("button",{type:"button",onClick:()=>t(o=>!o),className:"flex w-full items-center justify-center gap-3 px-3 py-2.5 text-gray-400 transition-all duration-200 hover:bg-gray-800/60 hover:text-gray-300",title:e?"Expand sidebar":"Collapse sidebar",children:e?d.jsx(gp,{className:"h-5 w-5"}):d.jsxs(d.Fragment,{children:[d.jsx(fp,{className:"h-5 w-5 shrink-0"}),d.jsx("span",{className:"truncate text-sm",children:"Collapse"})]})})]})]})]})}function Bt({label:r,children:n,className:e=""}){const[t,o]=v.useState(!1),i=v.useRef(null);return v.useEffect(()=>{const a=u=>{i.current&&!i.current.contains(u.target)&&o(!1)};if(t)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[t]),d.jsxs("div",{className:`relative shrink-0 ${e}`,ref:i,children:[d.jsxs("button",{type:"button",onClick:()=>o(a=>!a),className:"flex min-h-[44px] items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800/80 px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-gray-700/80",children:[r,d.jsx($c,{className:`h-4 w-4 shrink-0 transition-transform ${t?"rotate-180":""}`})]}),t&&d.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 min-w-0 rounded-lg border border-gray-700 bg-[#1a1d26] py-2 shadow-xl md:left-auto md:right-0 md:min-w-[180px]",children:n})]})}function Cn({label:r,checked:n,onChange:e}){return d.jsxs("label",{className:"flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-800",children:[d.jsx("input",{type:"checkbox",checked:n,onChange:e,className:"h-4 w-4 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/50"}),d.jsx("span",{className:"text-sm text-gray-200",children:r})]})}const Nl=r=>{let n;const e=new Set,t=(c,m)=>{const f=typeof c=="function"?c(n):c;if(!Object.is(f,n)){const g=n;n=m??(typeof f!="object"||f===null)?f:Object.assign({},n,f),e.forEach(P=>P(n,g))}},o=()=>n,u={setState:t,getState:o,getInitialState:()=>l,subscribe:c=>(e.add(c),()=>e.delete(c))},l=n=r(t,o,u);return u},Pp=r=>r?Nl(r):Nl,Sp=r=>r;function xp(r,n=Sp){const e=St.useSyncExternalStore(r.subscribe,St.useCallback(()=>n(r.getState()),[r,n]),St.useCallback(()=>n(r.getInitialState()),[r,n]));return St.useDebugValue(e),e}const Ml=r=>{const n=Pp(r),e=t=>xp(n,t);return Object.assign(e,n),e},wp=r=>r?Ml(r):Ml,sa=[1950,2030];function Fp(r){if(r.length===0)return sa;const n=Math.min(...r),e=Math.max(...r);return[n,e+9]}const _=wp(r=>({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:sa,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026],viewMode:"events",setYearRange:n=>r({yearRange:n}),setSearchQuery:n=>r({searchQuery:n}),toggleOutcome:n=>r(e=>({selectedOutcomes:e.selectedOutcomes.includes(n)?e.selectedOutcomes.filter(t=>t!==n):[...e.selectedOutcomes,n]})),toggleRegion:n=>r(e=>({selectedRegions:e.selectedRegions.includes(n)?e.selectedRegions.filter(t=>t!==n):[...e.selectedRegions,n]})),toggleDecade:n=>r(e=>{const t=e.selectedDecades.includes(n)?e.selectedDecades.filter(o=>o!==n):[...e.selectedDecades,n].sort((o,i)=>o-i);return{selectedDecades:t,dateRange:Fp(t)}}),setDateRange:n=>r({dateRange:n}),toggleTag:n=>r(e=>({selectedTags:e.selectedTags.includes(n)?e.selectedTags.filter(t=>t!==n):[...e.selectedTags,n]})),reset:()=>r({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:sa,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026]}),setViewMode:n=>r({viewMode:n}),setSelectedEvent:n=>r({selectedEvent:n}),setSelectedCountry:n=>r({selectedCountry:n})})),Ep=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"}],Ap=[1950,1960,1970,1980,1990,2e3,2010,2020];function Vp({regions:r,tags:n}){const e=_(h=>h.searchQuery),t=_(h=>h.setSearchQuery),o=_(h=>h.selectedOutcomes),i=_(h=>h.toggleOutcome),a=_(h=>h.selectedDecades),u=_(h=>h.toggleDecade),l=_(h=>h.selectedRegions),c=_(h=>h.toggleRegion),m=_(h=>h.selectedTags),f=_(h=>h.toggleTag),g=_(h=>h.viewMode),P=_(h=>h.setViewMode);return d.jsxs("div",{className:"absolute left-0 right-0 top-0 z-10 flex flex-col gap-2 border-b border-gray-800/50 bg-[#0f1117]/80 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-4 md:px-4",children:[d.jsx("div",{className:"flex min-w-0 flex-1 items-center",children:d.jsxs("div",{className:"relative flex w-full max-w-md items-center",children:[d.jsx(mp,{className:"absolute left-3 h-4 w-4 text-gray-500"}),d.jsx("input",{type:"search",value:e,onChange:h=>t(h.target.value),placeholder:"Search for anything...",className:"min-h-[44px] w-full rounded-lg border border-gray-700 bg-gray-800/90 py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"})]})}),d.jsxs("div",{className:"flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto pb-1 md:overflow-visible md:pb-0",children:[d.jsxs("div",{className:"flex items-center gap-1 rounded-lg border border-gray-700 bg-gray-800/50 p-1",children:[d.jsx("button",{onClick:()=>P("events"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="events"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Events"}),d.jsx("button",{onClick:()=>P("risk"),className:`px-3 py-1.5 rounded text-sm font-medium transition-colors ${g==="risk"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"text-gray-400 hover:text-gray-200"}`,children:"Coup Risk"})]}),g==="events"&&d.jsxs(d.Fragment,{children:[d.jsx(Bt,{label:"Status",children:d.jsx("div",{className:"flex flex-col gap-0.5 px-2",children:Ep.map(({value:h,label:x})=>d.jsx(Cn,{label:x,checked:o.includes(h),onChange:()=>i(h)},h))})}),d.jsx(Bt,{label:"Date",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:Ap.map(h=>d.jsx(Cn,{label:`${h}s`,checked:a.includes(h),onChange:()=>u(h)},h))})}),d.jsx(Bt,{label:"Region",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:r.length===0?d.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No regions in data"}):r.map(h=>d.jsx(Cn,{label:h,checked:l.includes(h),onChange:()=>c(h)},h))})}),d.jsx(Bt,{label:"Tags",children:d.jsx("div",{className:"flex max-h-48 flex-col gap-0.5 overflow-y-auto px-2 py-1",children:n.length===0?d.jsx("span",{className:"px-2 py-2 text-sm text-gray-500",children:"No tags in data"}):n.map(h=>d.jsx(Cn,{label:h,checked:m.includes(h),onChange:()=>f(h)},h))})})]})]})]})}function Kc(r,n){if(!n.trim())return!0;const e=n.trim().toLowerCase(),t=(r.title??"").toLowerCase(),o=(r.country??"").toLowerCase(),i=(r.description??"").toLowerCase(),a=(r.tags??[]).join(" ").toLowerCase();return t.includes(e)||o.includes(e)||i.includes(e)||a.includes(e)}function kp(r,n){return n.length===0?!0:n.includes(r.outcome)}function Np(r,n){return n.length===0?!0:n.includes(r.region)}function Mp(r,[n,e]){return r.year>=n&&r.year<=e}function Tp(r,n){if(n.length===0)return!0;const e=r.tags??[];return n.some(t=>e.includes(t))}function Lp(r,n){return r.filter(e=>Kc(e,n.searchQuery)&&kp(e,n.selectedOutcomes)&&Np(e,n.selectedRegions)&&Mp(e,n.dateRange)&&Tp(e,n.selectedTags))}function _p(r,n){const e=[];if(r.selectedOutcomes.length>0){const a=["in",["get","outcome"],["literal",r.selectedOutcomes]];e.push(a)}if(r.selectedRegions.length>0){const a=["in",["get","region"],["literal",r.selectedRegions]];e.push(a)}const[t,o]=r.dateRange,i=["all",[">=",["get","year"],t],["<=",["get","year"],o]];if(e.push(i),r.selectedTags.length>0){const a=new Set(n.filter(u=>{const l=u.tags??[];return r.selectedTags.some(c=>l.includes(c))}).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];e.push(u)}}if(r.searchQuery.trim()){const a=new Set(n.filter(u=>Kc(u,r.searchQuery)).map(u=>u.id));if(a.size>0){const u=["in",["get","id"],["literal",Array.from(a)]];e.push(u)}else return["==",["literal",!0],!1]}if(e.length!==0)return e.length===1?e[0]:["all",...e]}function Rp(r){if(!r||r.length!==2)return"🏳️";const n=127462,e=n+r.toUpperCase().charCodeAt(0)-65,t=n+r.toUpperCase().charCodeAt(1)-65;return String.fromCodePoint(e,t)}function jp({allEvents:r,mapRef:n}){const[e,t]=v.useState("date-desc"),[o,i]=v.useState(!1),a=_(E=>E.searchQuery),u=_(E=>E.selectedOutcomes),l=_(E=>E.selectedRegions),c=_(E=>E.dateRange),m=_(E=>E.selectedTags),f=_(E=>E.setSelectedEvent),g=v.useMemo(()=>Lp(r,{searchQuery:a,selectedOutcomes:u,selectedRegions:l,dateRange:c,selectedTags:m}),[r,a,u,l,c,m]),P=v.useMemo(()=>{const E=[...g];return e==="date-desc"?E.sort((y,s)=>new Date(s.date).getTime()-new Date(y.date).getTime()):e==="date-asc"?E.sort((y,s)=>new Date(y.date).getTime()-new Date(s.date).getTime()):e==="country-asc"&&E.sort((y,s)=>y.country.localeCompare(s.country)),E},[g,e]),h=E=>{var s;const y=(s=n.current)==null?void 0:s.getMap();y&&y.flyTo({center:[E.longitude,E.latitude],zoom:5,duration:800}),f(E)},x=e==="date-desc"?"Newest first":e==="date-asc"?"Oldest first":"Country A–Z";return d.jsxs("div",{className:"flex w-full shrink-0 flex-col border-r border-gray-800 bg-[#0f1117] md:w-[320px]",children:[d.jsx("div",{className:"flex flex-shrink-0 justify-center pt-2 md:hidden","aria-hidden":!0,children:d.jsx("div",{className:"h-1 w-10 rounded-full bg-gray-600"})}),d.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[d.jsxs("span",{className:"text-sm font-medium text-gray-300",children:[P.length," event",P.length!==1?"s":""]}),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{type:"button",onClick:()=>i(E=>!E),className:"flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded border border-gray-700 bg-gray-800/80 px-2 py-1.5 text-xs text-gray-300 hover:bg-gray-700/80 md:min-h-0 md:min-w-0 md:justify-start",children:[x,d.jsx($c,{className:"h-3.5 w-3.5"})]}),o&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 z-40","aria-hiddenx":!0,onClick:()=>i(!1)}),d.jsx("div",{className:"absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded border border-gray-700 bg-[#1a1d26] py-1 shadow-xl",children:[["date-desc","Newest first"],["date-asc","Oldest first"],["country-asc","Country A–Z"]].map(([E,y])=>d.jsx("button",{type:"button",onClick:()=>{t(E),i(!1)},className:"w-full px-3 py-1.5 text-left text-sm text-gray-200 hover:bg-gray-800",children:y},E))})]})]})]}),d.jsx("div",{className:"panel-scroll flex-1 overflow-y-auto",children:P.length===0?d.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 px-4 py-12 text-center text-sm text-gray-500",children:[d.jsx("p",{children:"No events match the current filters."}),d.jsx("p",{className:"text-xs",children:"Try adjusting search or filters."})]}):d.jsx("ul",{className:"divide-y divide-gray-800",children:P.map(E=>{const y=Yc[E.outcome];return d.jsx("li",{children:d.jsxs("button",{type:"button",onClick:()=>h(E),className:"flex min-h-[52px] w-full flex-col justify-center gap-1 px-4 py-3.5 text-left transition-colors hover:bg-gray-800/60",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-lg leading-none",children:Rp(E.countryCode)}),d.jsx("span",{className:"truncate text-sm font-medium text-white",children:E.country})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs ${y.badgeClass}`,children:y.label}),d.jsx("span",{className:"text-xs text-gray-500",children:Qc(E.date)})]}),E.description&&d.jsx("p",{className:"line-clamp-1 text-xs text-gray-400",children:E.description})]})},E.id)})})})]})}function Dp({country:r,events:n,onClose:e}){return d.jsxs("div",{className:"flex w-full shrink-0 flex-col border-l border-gray-800 bg-[#0f1117] md:w-[320px]",children:[d.jsxs("div",{className:"flex min-h-[44px] items-center justify-between border-b border-gray-800 px-3 py-2.5 md:px-4 md:py-3",children:[d.jsx("span",{className:"truncate text-sm font-medium text-gray-300",children:r}),d.jsx("button",{type:"button",onClick:e,className:"flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-700 bg-gray-800/80 p-1 text-gray-400 hover:bg-gray-700/80 md:min-h-0 md:min-w-0",children:d.jsx(Cp,{className:"h-4 w-4"})})]}),d.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto px-3 py-3 md:px-4",children:d.jsxs("div",{className:"text-sm text-gray-300",children:[d.jsxs("p",{className:"mb-2",children:[d.jsx("span",{className:"font-medium text-gray-200",children:n.length})," ","coup",n.length!==1?"s":""," in this country"]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Country details coming soon..."})]})})]})}const Op=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"},{value:"attempted",label:"Attempted"},{value:"plot",label:"Plot"},{value:"alleged",label:"Alleged"}],Bp=[1950,1960,1970,1980,1990,2e3,2010,2020];function zp({onClose:r,regions:n,tags:e}){const t=_(s=>s.selectedOutcomes),o=_(s=>s.toggleOutcome),i=_(s=>s.selectedDecades),a=_(s=>s.toggleDecade),u=_(s=>s.selectedRegions),l=_(s=>s.toggleRegion),c=_(s=>s.selectedTags),m=_(s=>s.toggleTag),f=_(s=>s.yearRange),g=_(s=>s.setYearRange),P=_(s=>s.reset),h=1950,x=2026,E=(f[0]-h)/(x-h)*100,y=(f[1]-h)/(x-h)*100;return d.jsxs("div",{className:"flex h-full w-full flex-col bg-[#0f1117] text-white",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 px-4 py-3",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-sm font-semibold",children:"Filters"}),d.jsx("p",{className:"text-xs text-gray-400",children:"Advanced filtering options"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",onClick:P,className:"rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-gray-700",children:"Reset"}),d.jsx("button",{type:"button",onClick:r,className:"rounded-md px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white",children:"Close"})]})]}),d.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4",children:d.jsxs("div",{className:"flex flex-col gap-6",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[d.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wide text-gray-400",children:"Timeline"}),d.jsxs("div",{className:"rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300",children:[f[0]," — ",f[1]]})]}),d.jsxs("div",{className:"rounded-2xl border border-gray-800 bg-[#151925] p-4 shadow-sm",children:[d.jsxs("div",{className:"mb-4 flex items-center justify-between text-xs text-gray-500",children:[d.jsx("span",{children:h}),d.jsx("span",{children:x})]}),d.jsxs("div",{className:"relative h-10",children:[d.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-gray-700"}),d.jsx("div",{className:"absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-amber-500",style:{left:`${E}%`,width:`${y-E}%`}}),d.jsx("input",{type:"range",min:h,max:x,value:f[0],onChange:s=>{const p=Number(s.target.value);p<=f[1]&&g([p,f[1]])},className:"timeline-slider absolute inset-0 w-full"}),d.jsx("input",{type:"range",min:h,max:x,value:f[1],onChange:s=>{const p=Number(s.target.value);p>=f[0]&&g([f[0],p])},className:"timeline-slider absolute inset-0 w-full"})]}),d.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[d.jsx("button",{type:"button",onClick:()=>g([1950,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"All"}),d.jsx("button",{type:"button",onClick:()=>g([1950,1990]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Cold War"}),d.jsx("button",{type:"button",onClick:()=>g([1991,2026]),className:"rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-gray-700",children:"Post-1990"})]})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Status"}),d.jsx("div",{className:"flex flex-col gap-1",children:Op.map(({value:s,label:p})=>d.jsx(Cn,{label:p,checked:t.includes(s),onChange:()=>o(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Date"}),d.jsx("div",{className:"flex flex-col gap-1",children:Bp.map(s=>d.jsx(Cn,{label:`${s}s`,checked:i.includes(s),onChange:()=>a(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Region"}),d.jsx("div",{className:"flex flex-col gap-1",children:n.map(s=>d.jsx(Cn,{label:s,checked:u.includes(s),onChange:()=>l(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-xs font-semibold uppercase text-gray-400",children:"Tags"}),d.jsx("div",{className:"flex flex-col gap-1",children:e.map(s=>d.jsx(Cn,{label:s,checked:c.includes(s),onChange:()=>m(s)},s))})]})]})})]})}function Ip({children:r,mapRef:n,allEvents:e}){const[t,o]=v.useState("home"),i=_(m=>m.selectedCountry),a=_(m=>m.setSelectedCountry),u=v.useMemo(()=>[...new Set(e.map(m=>m.region))].sort(),[e]),l=v.useMemo(()=>[...new Set(e.flatMap(m=>m.tags??[]))].sort(),[e]),c=v.useMemo(()=>e.filter(m=>m.country===i),[e,i]);return d.jsxs("div",{className:"flex h-screen w-screen flex-col overflow-hidden md:flex-row",children:[d.jsx(vp,{activeNav:t,onNavChange:o}),d.jsxs("div",{className:"flex min-h-0 min-w-0 flex-1 flex-col",children:[d.jsx(Vp,{regions:u,tags:l}),d.jsxs("div",{className:"relative flex min-h-0 flex-1 min-w-0",children:[t==="events"&&d.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(jp,{allEvents:e,mapRef:n})}),i&&d.jsx("div",{className:"fixed bottom-0 right-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-l md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(Dp,{country:i,events:c,onClose:()=>a(null)})}),t==="filters"&&d.jsx("div",{className:"fixed bottom-0 left-0 z-30 flex max-h-[85vh] w-full shrink-0 overflow-hidden rounded-t-xl border-t border-gray-800 bg-[#0f1117] pb-[env(safe-area-inset-bottom)] shadow-2xl transition-all duration-300 ease-out md:relative md:w-[320px] md:max-h-none md:rounded-none md:border-r md:border-t-0 md:pb-0 md:shadow-none",children:d.jsx(zp,{onClose:()=>o("home"),regions:u,tags:l})}),d.jsx("div",{className:"min-h-0 min-w-0 flex-1",children:r})]})]})]})}const bp=`{\r
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
}`,Gp={2:{country:"United States of America",latitude:39.5,longitude:-98.35},20:{country:"Canada",latitude:60,longitude:-96},31:{country:"Bahamas",latitude:24.25,longitude:-76},40:{country:"Cuba",latitude:22,longitude:-80},41:{country:"Haiti",latitude:19,longitude:-72.33},42:{country:"Dominican Republic",latitude:19,longitude:-70.67},51:{country:"Jamaica",latitude:18.11,longitude:-77.3},52:{country:"Trinidad and Tobago",latitude:10.45,longitude:-61.33},53:{country:"Barbados",latitude:13.19,longitude:-59.54},54:{country:"Dominica",latitude:15.42,longitude:-61.37},55:{country:"Grenada",latitude:12.12,longitude:-61.68},56:{country:"St. Lucia",latitude:13.88,longitude:-60.97},57:{country:"St. Vincent and the Grenadines",latitude:13.25,longitude:-61.2},58:{country:"Antigua & Barbuda",latitude:17.07,longitude:-61.8},60:{country:"St. Kitts and Nevis",latitude:17.35,longitude:-62.78},70:{country:"Mexico",latitude:23.63,longitude:-102.55},80:{country:"Belize",latitude:17.25,longitude:-88.76},90:{country:"Guatemala",latitude:15.78,longitude:-90.23},91:{country:"Honduras",latitude:15.2,longitude:-86.24},92:{country:"El Salvador",latitude:13.79,longitude:-88.9},93:{country:"Nicaragua",latitude:12.87,longitude:-85.21},94:{country:"Costa Rica",latitude:9.75,longitude:-83.75},95:{country:"Panama",latitude:8.54,longitude:-80.78},100:{country:"Colombia",latitude:4,longitude:-72},101:{country:"Venezuela",latitude:8,longitude:-66},110:{country:"Guyana",latitude:5,longitude:-59},115:{country:"Suriname",latitude:4,longitude:-56},130:{country:"Ecuador",latitude:-2,longitude:-77.5},135:{country:"Peru",latitude:-9,longitude:-75},140:{country:"Brazil",latitude:-10,longitude:-55},145:{country:"Bolivia",latitude:-17,longitude:-65},150:{country:"Paraguay",latitude:-23,longitude:-58},155:{country:"Chile",latitude:-30,longitude:-71},160:{country:"Argentina",latitude:-34,longitude:-64},165:{country:"Uruguay",latitude:-33,longitude:-56},200:{country:"United Kingdom",latitude:54,longitude:-2},205:{country:"Ireland",latitude:53.41,longitude:-8.24},210:{country:"Netherlands",latitude:52.13,longitude:5.29},211:{country:"Belgium",latitude:50.5,longitude:4.47},212:{country:"Luxembourg",latitude:49.82,longitude:6.13},220:{country:"France",latitude:46.23,longitude:2.21},221:{country:"Monaco",latitude:43.74,longitude:7.41},223:{country:"Liechtenstein",latitude:47.14,longitude:9.55},225:{country:"Switzerland",latitude:46.82,longitude:8.23},230:{country:"Spain",latitude:40,longitude:-4},232:{country:"Andorra",latitude:42.55,longitude:1.57},235:{country:"Portugal",latitude:39.6,longitude:-8},240:{country:"Hanover",latitude:52.37,longitude:9.73},245:{country:"Bavaria",latitude:48.92,longitude:11.41},255:{country:"Germany",latitude:51.17,longitude:10.45},260:{country:"German Federal Republic",latitude:51.17,longitude:10.45},265:{country:"German Democratic Republic",latitude:52.17,longitude:12.63},267:{country:"Baden",latitude:48.52,longitude:8.05},269:{country:"Saxony",latitude:51.1,longitude:13.2},271:{country:"Wuerttemberg",latitude:48.66,longitude:9.35},273:{country:"Hesse Electoral",latitude:51.31,longitude:9.49},275:{country:"Hesse Grand Ducal",latitude:49.87,longitude:8.65},280:{country:"Mecklenburg Schwerin",latitude:53.61,longitude:11.41},290:{country:"Poland",latitude:52.22,longitude:19.14},300:{country:"Austria-Hungary",latitude:47.5,longitude:15},305:{country:"Austria",latitude:47.52,longitude:14.55},310:{country:"Hungary",latitude:47.16,longitude:19.5},315:{country:"Czechoslovakia",latitude:49.75,longitude:15.5},316:{country:"Czech Republic",latitude:49.82,longitude:15.47},317:{country:"Slovakia",latitude:48.67,longitude:19.7},325:{country:"Italy",latitude:42.83,longitude:12.83},327:{country:"Papal States",latitude:41.9,longitude:12.45},329:{country:"Two Sicilies",latitude:40.85,longitude:14.27},331:{country:"San Marino",latitude:43.76,longitude:12.7},332:{country:"Modena",latitude:44.65,longitude:10.92},335:{country:"Parma",latitude:44.8,longitude:10.33},337:{country:"Tuscany",latitude:43.77,longitude:11.25},338:{country:"Malta",latitude:35.94,longitude:14.38},339:{country:"Albania",latitude:41.15,longitude:20.17},341:{country:"Montenegro",latitude:42.71,longitude:19.37},343:{country:"Macedonia",latitude:41.61,longitude:21.75},344:{country:"Croatia",latitude:45.17,longitude:15.5},345:{country:"Yugoslavia",latitude:44.02,longitude:21.09},346:{country:"Bosnia and Herzegovina",latitude:44.17,longitude:17.77},347:{country:"Kosovo",latitude:42.58,longitude:20.9},349:{country:"Slovenia",latitude:46.15,longitude:14.99},350:{country:"Greece",latitude:39.07,longitude:21.82},352:{country:"Cyprus",latitude:35.13,longitude:33.43},355:{country:"Bulgaria",latitude:42.73,longitude:25.49},359:{country:"Moldova",latitude:47.41,longitude:28.37},360:{country:"Romania",latitude:45.94,longitude:24.97},365:{country:"Russia",latitude:60,longitude:100},366:{country:"Estonia",latitude:58.6,longitude:25.01},367:{country:"Latvia",latitude:56.88,longitude:24.6},368:{country:"Lithuania",latitude:55.17,longitude:23.88},369:{country:"Ukraine",latitude:48.38,longitude:31.17},370:{country:"Belarus",latitude:53.71,longitude:27.97},371:{country:"Armenia",latitude:40.07,longitude:45.04},372:{country:"Georgia",latitude:42.32,longitude:43.36},373:{country:"Azerbaijan",latitude:40.14,longitude:47.58},375:{country:"Finland",latitude:64,longitude:26},380:{country:"Sweden",latitude:62,longitude:15},385:{country:"Norway",latitude:64.57,longitude:17.89},390:{country:"Denmark",latitude:56.26,longitude:9.5},395:{country:"Iceland",latitude:65,longitude:-18},402:{country:"Cape Verde",latitude:16,longitude:-24},403:{country:"Sao Tome and Principe",latitude:.19,longitude:6.61},404:{country:"Guinea-Bissau",latitude:11.8,longitude:-15.18},411:{country:"Equatorial Guinea",latitude:1.65,longitude:10.27},420:{country:"Gambia",latitude:13.44,longitude:-15.31},432:{country:"Mali",latitude:17.57,longitude:-3.99},433:{country:"Senegal",latitude:14.5,longitude:-14.45},434:{country:"Benin",latitude:9.54,longitude:2.34},435:{country:"Mauritania",latitude:20.25,longitude:-10.34},436:{country:"Niger",latitude:17.61,longitude:8.08},437:{country:"Ivory Coast",latitude:7.54,longitude:-5.55},438:{country:"Guinea",latitude:11,longitude:-10.94},439:{country:"Burkina Faso",latitude:12.36,longitude:-1.53},450:{country:"Liberia",latitude:6.43,longitude:-9.43},451:{country:"Sierra Leone",latitude:8.46,longitude:-11.78},452:{country:"Ghana",latitude:7.95,longitude:-1.02},461:{country:"Togo",latitude:8,longitude:1.17},471:{country:"Cameroon",latitude:3.86,longitude:11.52},475:{country:"Nigeria",latitude:10,longitude:8.68},481:{country:"Gabon",latitude:-.8,longitude:11.61},482:{country:"Central African Republic",latitude:6.61,longitude:20.94},483:{country:"Chad",latitude:15.45,longitude:18.73},484:{country:"Congo",latitude:-.23,longitude:15.83},490:{country:"Democratic Republic of the Congo",latitude:-4.04,longitude:21.76},500:{country:"Uganda",latitude:1.37,longitude:32.29},501:{country:"Kenya",latitude:1,longitude:38},510:{country:"Tanzania",latitude:-6.37,longitude:34.89},511:{country:"Zanzibar",latitude:-6.16,longitude:39.19},516:{country:"Burundi",latitude:-3.38,longitude:29.92},517:{country:"Rwanda",latitude:-1.94,longitude:29.87},520:{country:"Somalia",latitude:5.15,longitude:46.2},522:{country:"Djibouti",latitude:11.83,longitude:42.59},530:{country:"Ethiopia",latitude:9.15,longitude:40.49},531:{country:"Eritrea",latitude:15.18,longitude:39.78},540:{country:"Angola",latitude:-11.2,longitude:17.87},541:{country:"Mozambique",latitude:-17.28,longitude:35.55},551:{country:"Zambia",latitude:-13.13,longitude:27.85},552:{country:"Zimbabwe",latitude:-19.02,longitude:29.15},553:{country:"Malawi",latitude:-13.25,longitude:34.3},560:{country:"South Africa",latitude:-28.47,longitude:24.68},565:{country:"Namibia",latitude:-22.96,longitude:18.49},570:{country:"Lesotho",latitude:-29.61,longitude:28.23},571:{country:"Botswana",latitude:-22.33,longitude:24.68},572:{country:"Swaziland",latitude:-26.52,longitude:31.47},580:{country:"Madagascar",latitude:-19.37,longitude:46.71},581:{country:"Comoros",latitude:-11.71,longitude:43.34},590:{country:"Mauritius",latitude:-20.35,longitude:57.59},591:{country:"Seychelles",latitude:-4.68,longitude:55.49},600:{country:"Morocco",latitude:31.79,longitude:-7.09},615:{country:"Algeria",latitude:28.03,longitude:1.66},616:{country:"Tunisia",latitude:34,longitude:9},620:{country:"Libya",latitude:26.34,longitude:17.23},625:{country:"Sudan",latitude:15.55,longitude:30.23},626:{country:"South Sudan",latitude:7,longitude:30},630:{country:"Iran",latitude:32.42,longitude:53.69},640:{country:"Turkey",latitude:38.96,longitude:35.24},645:{country:"Iraq",latitude:33.22,longitude:43.68},651:{country:"Egypt",latitude:26.82,longitude:30.8},652:{country:"Syria",latitude:34.8,longitude:39.06},660:{country:"Lebanon",latitude:33.87,longitude:35.86},663:{country:"Jordan",latitude:31.24,longitude:36.51},666:{country:"Israel",latitude:31.05,longitude:35},670:{country:"Saudi Arabia",latitude:24,longitude:45},678:{country:"Yemen Arab Republic",latitude:15.55,longitude:48.52},679:{country:"Yemen",latitude:15.55,longitude:48.52},680:{country:"Yemen People's Republic",latitude:13.5,longitude:44},690:{country:"Kuwait",latitude:29.31,longitude:47.48},692:{country:"Bahrain",latitude:26.03,longitude:50.55},694:{country:"Qatar",latitude:25.35,longitude:51.18},696:{country:"United Arab Emirates",latitude:24.47,longitude:54.37},698:{country:"Oman",latitude:21.51,longitude:57},700:{country:"Afghanistan",latitude:33.94,longitude:67.71},701:{country:"Turkmenistan",latitude:39.6,longitude:59.56},702:{country:"Tajikistan",latitude:38.86,longitude:71.28},703:{country:"Kyrgyzstan",latitude:41.2,longitude:74.77},704:{country:"Uzbekistan",latitude:41.38,longitude:64.59},705:{country:"Kazakhstan",latitude:48.02,longitude:66.92},710:{country:"China",latitude:35.86,longitude:104.2},712:{country:"Mongolia",latitude:46.86,longitude:103.85},713:{country:"Taiwan",latitude:23.7,longitude:121},730:{country:"Korea",latitude:36,longitude:127.5},731:{country:"North Korea",latitude:40.34,longitude:127.51},732:{country:"South Korea",latitude:36,longitude:127.5},740:{country:"Japan",latitude:36.2,longitude:138.25},750:{country:"India",latitude:22,longitude:78},760:{country:"Bhutan",latitude:27.51,longitude:90.43},770:{country:"Pakistan",latitude:30.38,longitude:69.35},771:{country:"Bangladesh",latitude:23.68,longitude:90.36},775:{country:"Myanmar",latitude:17.11,longitude:95.96},780:{country:"Sri Lanka",latitude:7.87,longitude:80.77},781:{country:"Maldives",latitude:3.2,longitude:73.22},790:{country:"Nepal",latitude:28.39,longitude:84.12},800:{country:"Thailand",latitude:15.87,longitude:100.99},811:{country:"Cambodia",latitude:12.57,longitude:104.99},812:{country:"Laos",latitude:17.97,longitude:102.64},816:{country:"Vietnam",latitude:16.16,longitude:107.84},817:{country:"Republic of Vietnam",latitude:12.7,longitude:108},820:{country:"Malaysia",latitude:2.53,longitude:112.5},830:{country:"Singapore",latitude:1.35,longitude:103.82},835:{country:"Brunei",latitude:4.94,longitude:114.95},840:{country:"Philippines",latitude:13,longitude:122},850:{country:"Indonesia",latitude:-2.55,longitude:118.02},860:{country:"East Timor",latitude:-8.87,longitude:125.73},900:{country:"Australia",latitude:-25.27,longitude:133.78},910:{country:"Papua New Guinea",latitude:-6.31,longitude:143.96},920:{country:"New Zealand",latitude:-40.9,longitude:174.89},935:{country:"Vanuatu",latitude:-15.38,longitude:166.96},940:{country:"Solomon Islands",latitude:-9.65,longitude:160.16},946:{country:"Kiribati",latitude:-3.37,longitude:-168.73},947:{country:"Tuvalu",latitude:-7.11,longitude:177.65},950:{country:"Fiji",latitude:-17.71,longitude:178.07},955:{country:"Tonga",latitude:-21.18,longitude:-175.2},970:{country:"Nauru",latitude:-.53,longitude:166.93},983:{country:"Marshall Islands",latitude:7.13,longitude:171.18},986:{country:"Palau",latitude:7.52,longitude:134.58},987:{country:"Federated States of Micronesia",latitude:6.89,longitude:158.22},990:{country:"Samoa",latitude:-13.76,longitude:-172.1}};function Hp(r){return Gp[r]}const ca=JSON.parse(bp);function Up(r){const n=new Set(r.map(e=>e.id));return{...ca,features:(ca.features??[]).filter(e=>n.has(e.properties.id))}}function Yp(){return(ca.features??[]).map(r=>r.properties)}const Qp="https://raw.githubusercontent.com/thynec/CoupCats/refs/heads/main/recent_data.json";let zt=null;function Wp(r){return{type:"FeatureCollection",features:r.map(e=>{const t=Hp(e.ccode);return t?{type:"Feature",id:"${p.ccode}-${p.year}-${p.month}",geometry:{type:"Point",coordinates:[t.longitude,t.latitude]},properties:{...e,latitude:t.latitude,longitude:t.longitude}}:null}).filter(e=>e!==null)}}async function $p(){if(zt)return zt;const r=await fetch(Qp);if(!r.ok)throw new Error("Failed to fetch predictions: ${response.status}");const n=await r.json();return zt=Wp(n),zt}function Kp({mapRef:r,sourceId:n}){const[e,t]=v.useState(null),o=v.useCallback(a=>{var c,m;const u=(c=r.current)==null?void 0:c.getMap();if(!u||!((m=a.features)!=null&&m.length))return;const l=a.features[0];l.id!=null&&(e!=null&&e!==l.id&&u.setFeatureState({source:n,id:e},{hover:!1}),t(l.id),u.getCanvas().style.cursor="pointer",u.setFeatureState({source:n,id:l.id},{hover:!0}))},[e,r,n]),i=v.useCallback(()=>{var u;const a=(u=r.current)==null?void 0:u.getMap();a&&(e!=null&&(a.setFeatureState({source:n,id:e},{hover:!1}),t(null)),a.getCanvas().style.cursor="")},[e,r,n]);return{onMouseEnter:o,onMouseLeave:i}}function Zp(r){v.useEffect(()=>{const n=e=>{e.key==="Escape"&&r(null)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[r])}function Jp({mapRef:r,layerIds:n,setSelectedEvent:e}){v.useEffect(()=>{var i;const t=(i=r.current)==null?void 0:i.getMap();if(!t)return;const o=a=>{t.queryRenderedFeatures([a.point.x,a.point.y],{layers:n}).length===0&&e(null)};return t.on("click",o),()=>{t.off("click",o)}},[n,r,e])}const Xp="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",qp={"circle-radius":["case",["boolean",["feature-state","hover"],!1],14,10],"circle-color":["match",["get","outcome"],"successful",Tr.successful,"failed",Tr.failed,"attempted",Tr.attempted,"plot",Tr.plot,"alleged",Tr.alleged,Tr.alleged],"circle-stroke-width":2,"circle-stroke-color":"#020617","circle-opacity":1},rf={id:"prediction-circles",type:"circle",source:"predictions",paint:{"circle-radius":["case",["boolean",["feature-state","hover"],!1],14,10],"circle-color":["interpolate",["linear"],["get","prediction_prob"],0,"#22c55e",.05,"#eab308",.15,"#f97316",.3,"#ef4444"],"circle-stroke-width":2,"circle-stroke-color":"#020617","circle-opacity":.85}};function nf(){const r=v.useRef(null),[n,e]=v.useState(!1),[t,o]=v.useState(null),i=v.useMemo(()=>Yp(),[]),a=_(N=>N.yearRange),u=_(N=>N.viewMode),l=v.useMemo(()=>i.filter(N=>N.year>=a[0]&&N.year<=a[1]),[i,a]);v.useEffect(()=>{fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson").then(N=>N.json()).then(N=>o(N)).catch(N=>console.error("Failed to load countries GeoJSON:",N))},[]);const[c,m]=v.useState(null),[f,g]=v.useState(null);v.useEffect(()=>{$p().then(N=>{m(N)}).catch(N=>{console.error("Prediction load error:",N)})},[]);const P=_(N=>N.selectedEvent),h=_(N=>N.setSelectedEvent),x=_(N=>N.setSelectedCountry),E=_(N=>N.searchQuery),y=_(N=>N.selectedOutcomes),s=_(N=>N.selectedRegions),p=_(N=>N.dateRange),C=_(N=>N.selectedTags),w=v.useMemo(()=>_p({searchQuery:E,selectedOutcomes:y,selectedRegions:s,dateRange:p,selectedTags:C},i),[E,y,s,p,C,i]),F={id:"coup-circles",type:"circle",source:"coups",paint:qp,filter:w},{onMouseEnter:A,onMouseLeave:M}=Kp({mapRef:r,sourceId:"coups"}),Y=v.useCallback(N=>{var cr;(cr=N.features)!=null&&cr.length&&N.features[0].properties?g(N.features[0].properties):g(null)},[g]),R=v.useCallback(N=>{var ke,vt,Wn,$n,V,T,L;const cr=(ke=N.features)==null?void 0:ke.find(D=>{var I;return((I=D.layer)==null?void 0:I.id)==="coup-circles"});if(cr){const D=cr.properties;h(D),x(D.country);return}const kr=(vt=N.features)==null?void 0:vt.find(D=>{var I;return((I=D.layer)==null?void 0:I.id)==="countries-fill"});if(kr){const D=((Wn=kr.properties)==null?void 0:Wn.ADMIN)||(($n=kr.properties)==null?void 0:$n.name);if(D){x(D),h(null);return}}if(t&&t.features){let D=null,I=1/0;for(const cn of t.features){const Yr=((V=cn.properties)==null?void 0:V.ADMIN)||((T=cn.properties)==null?void 0:T.name);if(!Yr)continue;const Dr=cn.geometry;if(!Dr)continue;let dr=[];if(Dr.type==="Polygon"&&Dr.coordinates[0]?dr=Dr.coordinates[0]:Dr.type==="MultiPolygon"&&(L=Dr.coordinates[0])!=null&&L[0]&&(dr=Dr.coordinates[0][0]),dr.length>0){const Kn=dr.reduce((Io,bo)=>Io+bo[0],0)/dr.length,Zc=dr.reduce((Io,bo)=>Io+bo[1],0)/dr.length,au=Kn-N.lngLat.lng,uu=Zc-N.lngLat.lat,lu=Math.sqrt(au*au+uu*uu);lu<I&&(I=lu,D=Yr)}}if(D&&I<15){x(D),h(null);return}}h(null),x(null)},[h,x,t]);return Jp({mapRef:r,layerIds:["coup-circles"],setSelectedEvent:h}),Zp(h),v.useEffect(()=>{u==="risk"?h(null):g(null)},[u,h,g]),d.jsx(Ip,{mapRef:r,allEvents:i,children:d.jsxs("div",{className:"relative h-full w-full",children:[!n&&d.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-[#0f1117]",children:d.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-amber-500/30 border-t-amber-500"})}),d.jsxs(z1,{ref:r,initialViewState:{longitude:20,latitude:15,zoom:2},mapStyle:Xp,interactiveLayerIds:u==="events"?["coup-circles","countries-fill"]:["prediction-circles"],onMouseEnter:A,onMouseLeave:M,onClick:N=>{var kr;const cr=(kr=N.features)==null?void 0:kr[0];if(!cr){h(null),g(null);return}cr.layer.id==="coup-circles"?R(N):cr.layer.id==="prediction-circles"&&Y(N)},onLoad:()=>e(!0),children:[u==="events"&&d.jsx(fi,{id:"coups",type:"geojson",data:Up(l),promoteId:"id",children:d.jsx(gi,{...F})}),u==="events"&&t&&d.jsx(fi,{id:"countries",type:"geojson",data:t,children:d.jsx(gi,{id:"countries-fill",type:"fill",paint:{"fill-color":"rgba(0,0,0,0)","fill-opacity":0}})}),u!=="events"&&c&&d.jsx(fi,{id:"predictions",type:"geojson",data:c,promoteId:"id",children:d.jsx(gi,{...rf})}),u==="events"&&P&&d.jsx(b1,{longitude:P.longitude,latitude:P.latitude,onClose:()=>h(null),closeButton:!0,closeOnClick:!1,children:d.jsx(tp,{event:P})})]}),d.jsx(ep,{prediction:f,onClose:()=>g(null)}),d.jsx(ap,{})]})})}function ef({error:r,resetErrorBoundary:n}){return d.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0f1117] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-center",children:[d.jsx(cp,{className:"h-12 w-12 text-amber-500"}),d.jsx("h1",{className:"text-lg font-semibold text-white",children:"Something went wrong"}),d.jsx("p",{className:"max-w-md text-sm text-gray-400",children:r.message}),n&&d.jsx("button",{type:"button",onClick:n,className:"rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/30",children:"Try again"})]})}class tf extends v.Component{constructor(){super(...arguments);su(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught:",e,t)}render(){return this.state.error?d.jsx(ef,{error:this.state.error,resetErrorBoundary:()=>this.setState({error:null})}):this.props.children}}Hc(document.getElementById("root")).render(d.jsx(v.StrictMode,{children:d.jsx(tf,{children:d.jsx(nf,{})})}));export{af as c,qc as g};
