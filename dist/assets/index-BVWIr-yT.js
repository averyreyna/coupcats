var Rd=Object.defineProperty;var Md=(n,e,t)=>e in n?Rd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var kl=(n,e,t)=>Md(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ld(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ts={exports:{}},To={},rs={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),Bd=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Fl=Symbol.iterator;function Yd(n){return n===null||typeof n!="object"?null:(n=Fl&&n[Fl]||n["@@iterator"],typeof n=="function"?n:null)}var os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},is=Object.assign,as={};function Nt(n,e,t){this.props=n,this.context=e,this.refs=as,this.updater=t||os}Nt.prototype.isReactComponent={};Nt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Nt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ls(){}ls.prototype=Nt.prototype;function ka(n,e,t){this.props=n,this.context=e,this.refs=as,this.updater=t||os}var Fa=ka.prototype=new ls;Fa.constructor=ka;is(Fa,Nt.prototype);Fa.isPureReactComponent=!0;var Al=Array.isArray,us=Object.prototype.hasOwnProperty,Aa={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function cs(n,e,t){var r,o={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)us.call(e,r)&&!ss.hasOwnProperty(r)&&(o[r]=e[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(n&&n.defaultProps)for(r in l=n.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:xr,type:n,key:i,ref:a,props:o,_owner:Aa.current}}function Qd(n,e){return{$$typeof:xr,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ea(n){return typeof n=="object"&&n!==null&&n.$$typeof===xr}function $d(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var El=/\/+/g;function Xo(n,e){return typeof n=="object"&&n!==null&&n.key!=null?$d(""+n.key):e.toString(36)}function Qr(n,e,t,r,o){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case xr:case Bd:a=!0}}if(a)return a=n,o=o(a),n=r===""?"."+Xo(a,0):r,Al(o)?(t="",n!=null&&(t=n.replace(El,"$&/")+"/"),Qr(o,e,t,"",function(c){return c})):o!=null&&(Ea(o)&&(o=Qd(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(El,"$&/")+"/")+n)),e.push(o)),1;if(a=0,r=r===""?".":r+":",Al(n))for(var l=0;l<n.length;l++){i=n[l];var u=r+Xo(i,l);a+=Qr(i,e,t,u,o)}else if(u=Yd(n),typeof u=="function")for(n=u.call(n),l=0;!(i=n.next()).done;)i=i.value,u=r+Xo(i,l++),a+=Qr(i,e,t,u,o);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Er(n,e,t){if(n==null)return n;var r=[],o=0;return Qr(n,r,"","",function(i){return e.call(t,i,o++)}),r}function Kd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Cn={current:null},$r={transition:null},Zd={ReactCurrentDispatcher:Cn,ReactCurrentBatchConfig:$r,ReactCurrentOwner:Aa};function ds(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Er,forEach:function(n,e,t){Er(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Er(n,function(){e++}),e},toArray:function(n){return Er(n,function(e){return e})||[]},only:function(n){if(!Ea(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};B.Component=Nt;B.Fragment=jd;B.Profiler=Dd;B.PureComponent=ka;B.StrictMode=Id;B.Suspense=Hd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd;B.act=ds;B.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=is({},n.props),o=n.key,i=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=Aa.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(u in e)us.call(e,u)&&!ss.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xr,type:n.type,key:o,ref:i,props:r,_owner:a}};B.createContext=function(n){return n={$$typeof:zd,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Od,_context:n},n.Consumer=n};B.createElement=cs;B.createFactory=function(n){var e=cs.bind(null,n);return e.type=n,e};B.createRef=function(){return{current:null}};B.forwardRef=function(n){return{$$typeof:Gd,render:n}};B.isValidElement=Ea;B.lazy=function(n){return{$$typeof:Ud,_payload:{_status:-1,_result:n},_init:Kd}};B.memo=function(n,e){return{$$typeof:Wd,type:n,compare:e===void 0?null:e}};B.startTransition=function(n){var e=$r.transition;$r.transition={};try{n()}finally{$r.transition=e}};B.unstable_act=ds;B.useCallback=function(n,e){return Cn.current.useCallback(n,e)};B.useContext=function(n){return Cn.current.useContext(n)};B.useDebugValue=function(){};B.useDeferredValue=function(n){return Cn.current.useDeferredValue(n)};B.useEffect=function(n,e){return Cn.current.useEffect(n,e)};B.useId=function(){return Cn.current.useId()};B.useImperativeHandle=function(n,e,t){return Cn.current.useImperativeHandle(n,e,t)};B.useInsertionEffect=function(n,e){return Cn.current.useInsertionEffect(n,e)};B.useLayoutEffect=function(n,e){return Cn.current.useLayoutEffect(n,e)};B.useMemo=function(n,e){return Cn.current.useMemo(n,e)};B.useReducer=function(n,e,t){return Cn.current.useReducer(n,e,t)};B.useRef=function(n){return Cn.current.useRef(n)};B.useState=function(n){return Cn.current.useState(n)};B.useSyncExternalStore=function(n,e,t){return Cn.current.useSyncExternalStore(n,e,t)};B.useTransition=function(){return Cn.current.useTransition()};B.version="18.3.1";rs.exports=B;var P=rs.exports;const br=Ld(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=P,Jd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,ey=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function ys(n,e,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)ny.call(e,r)&&!ty.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:Jd,type:n,key:i,ref:a,props:o,_owner:ey.current}}To.Fragment=qd;To.jsx=ys;To.jsxs=ys;ts.exports=To;var d=ts.exports,ps={exports:{}},Tn={},fs={exports:{}},gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(A,T){var M=A.length;A.push(T);n:for(;0<M;){var j=M-1>>>1,z=A[j];if(0<o(z,T))A[j]=T,A[M]=z,M=j;else break n}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var T=A[0],M=A.pop();if(M!==T){A[0]=M;n:for(var j=0,z=A.length,ge=z>>>1;j<ge;){var Xn=2*(j+1)-1,zn=A[Xn],gn=Xn+1,nt=A[gn];if(0>o(zn,M))gn<z&&0>o(nt,zn)?(A[j]=nt,A[gn]=M,j=gn):(A[j]=zn,A[Xn]=M,j=Xn);else if(gn<z&&0>o(nt,M))A[j]=nt,A[gn]=M,j=gn;else break n}}return T}function o(A,T){var M=A.sortIndex-T.sortIndex;return M!==0?M:A.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();n.unstable_now=function(){return a.now()-l}}var u=[],c=[],m=1,p=null,g=3,v=!1,h=!1,x=!1,F=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var T=t(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=A)r(c),T.sortIndex=T.expirationTime,e(u,T);else break;T=t(c)}}function S(A){if(x=!1,f(A),!h)if(t(u)!==null)h=!0,ln(k);else{var T=t(c);T!==null&&On(S,T.startTime-A)}}function k(A,T){h=!1,x&&(x=!1,y(N),N=-1),v=!0;var M=g;try{for(f(T),p=t(u);p!==null&&(!(p.expirationTime>T)||A&&!_());){var j=p.callback;if(typeof j=="function"){p.callback=null,g=p.priorityLevel;var z=j(p.expirationTime<=T);T=n.unstable_now(),typeof z=="function"?p.callback=z:p===t(u)&&r(u),f(T)}else r(u);p=t(u)}if(p!==null)var ge=!0;else{var Xn=t(c);Xn!==null&&On(S,Xn.startTime-T),ge=!1}return ge}finally{p=null,g=M,v=!1}}var E=!1,b=null,N=-1,Y=5,L=-1;function _(){return!(n.unstable_now()-L<Y)}function en(){if(b!==null){var A=n.unstable_now();L=A;var T=!0;try{T=b(!0,A)}finally{T?Sn():(E=!1,b=null)}}else E=!1}var Sn;if(typeof s=="function")Sn=function(){s(en)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,En=Zn.port2;Zn.port1.onmessage=en,Sn=function(){En.postMessage(null)}}else Sn=function(){F(en,0)};function ln(A){b=A,E||(E=!0,Sn())}function On(A,T){N=F(function(){A(n.unstable_now())},T)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){h||v||(h=!0,ln(k))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(A){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var M=g;g=T;try{return A()}finally{g=M}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,T){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=g;g=A;try{return T()}finally{g=M}},n.unstable_scheduleCallback=function(A,T,M){var j=n.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?j+M:j):M=j,A){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=M+z,A={id:m++,callback:T,priorityLevel:A,startTime:M,expirationTime:z,sortIndex:-1},M>j?(A.sortIndex=M,e(c,A),t(u)===null&&A===t(c)&&(x?(y(N),N=-1):x=!0,On(S,M-j))):(A.sortIndex=z,e(u,A),h||v||(h=!0,ln(k))),A},n.unstable_shouldYield=_,n.unstable_wrapCallback=function(A){var T=g;return function(){var M=g;g=T;try{return A.apply(this,arguments)}finally{g=M}}}})(gs);fs.exports=gs;var ry=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=P,_n=ry;function w(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,ir={};function Xe(n,e){xt(n,e),xt(n+"Capture",e)}function xt(n,e){for(ir[n]=e,n=0;n<e.length;n++)ms.add(e[n])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bl={},Vl={};function ay(n){return bi.call(Vl,n)?!0:bi.call(bl,n)?!1:iy.test(n)?Vl[n]=!0:(bl[n]=!0,!1)}function ly(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function uy(n,e,t,r){if(e===null||typeof e>"u"||ly(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(n,e,t,r,o,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){cn[n]=new vn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];cn[e]=new vn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){cn[n]=new vn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){cn[n]=new vn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){cn[n]=new vn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){cn[n]=new vn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){cn[n]=new vn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){cn[n]=new vn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){cn[n]=new vn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ba=/[\-:]([a-z])/g;function Va(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ba,Va);cn[e]=new vn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ba,Va);cn[e]=new vn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ba,Va);cn[e]=new vn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){cn[n]=new vn(n,1,!1,n.toLowerCase(),null,!1,!1)});cn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){cn[n]=new vn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Na(n,e,t,r){var o=cn.hasOwnProperty(e)?cn[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uy(e,t,o,r)&&(t=null),r||o===null?ay(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):o.mustUseProperty?n[o.propertyName]=t===null?o.type===3?!1:"":t:(e=o.attributeName,r=o.attributeNamespace,t===null?n.removeAttribute(e):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var pe=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),ot=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),hs=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Nl=Symbol.iterator;function Mt(n){return n===null||typeof n!="object"?null:(n=Nl&&n[Nl]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,Jo;function Yt(n){if(Jo===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jo=e&&e[1]||""}return`
`+Jo+n}var qo=!1;function ni(n,e){if(!n||qo)return"";qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=a&&0<=l);break}}}finally{qo=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Yt(n):""}function sy(n){switch(n.tag){case 5:return Yt(n.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 2:case 15:return n=ni(n.type,!1),n;case 11:return n=ni(n.type.render,!1),n;case 1:return n=ni(n.type,!0),n;default:return""}}function Ti(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case it:return"Fragment";case ot:return"Portal";case Vi:return"Profiler";case _a:return"StrictMode";case Ni:return"Suspense";case _i:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cs:return(n.displayName||"Context")+".Consumer";case hs:return(n._context.displayName||"Context")+".Provider";case Ta:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ra:return e=n.displayName||null,e!==null?e:Ti(n.type)||"Memo";case he:e=n._payload,n=n._init;try{return Ti(n(e))}catch{}}return null}function cy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ti(e);case 8:return e===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ss(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dy(n){var e=Ss(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Nr(n){n._valueTracker||(n._valueTracker=dy(n))}function Ps(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Ss(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function io(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ri(n,e){var t=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _l(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Te(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xs(n,e){e=e.checked,e!=null&&Na(n,"checked",e,!1)}function Mi(n,e){xs(n,e);var t=Te(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Li(n,e.type,t):e.hasOwnProperty("defaultValue")&&Li(n,e.type,Te(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Tl(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Li(n,e,t){(e!=="number"||io(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Qt=Array.isArray;function mt(n,e,t,r){if(n=n.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<n.length;t++)o=e.hasOwnProperty("$"+n[t].value),n[t].selected!==o&&(n[t].selected=o),o&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Te(t),e=null,o=0;o<n.length;o++){if(n[o].value===t){n[o].selected=!0,r&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function Bi(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rl(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(w(92));if(Qt(t)){if(1<t.length)throw Error(w(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Te(t)}}function ws(n,e){var t=Te(e.value),r=Te(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Ml(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ks(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ks(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,Fs=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,o){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,o)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ar(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(n){yy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zt[e]=Zt[n]})});function As(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Zt.hasOwnProperty(n)&&Zt[n]?(""+e).trim():e+"px"}function Es(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=As(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,o):n[t]=o}}var py=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(n,e){if(e){if(py[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Di(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ma(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zi=null,ht=null,Ct=null;function Ll(n){if(n=Fr(n)){if(typeof zi!="function")throw Error(w(280));var e=n.stateNode;e&&(e=jo(e),zi(n.stateNode,n.type,e))}}function bs(n){ht?Ct?Ct.push(n):Ct=[n]:ht=n}function Vs(){if(ht){var n=ht,e=Ct;if(Ct=ht=null,Ll(n),e)for(n=0;n<e.length;n++)Ll(e[n])}}function Ns(n,e){return n(e)}function _s(){}var ei=!1;function Ts(n,e,t){if(ei)return n(e,t);ei=!0;try{return Ns(n,e,t)}finally{ei=!1,(ht!==null||Ct!==null)&&(_s(),Vs())}}function lr(n,e){var t=n.stateNode;if(t===null)return null;var r=jo(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(w(231,e,typeof t));return t}var Gi=!1;if(se)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{Gi=!1}function fy(n,e,t,r,o,i,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var Xt=!1,ao=null,lo=!1,Hi=null,gy={onError:function(n){Xt=!0,ao=n}};function my(n,e,t,r,o,i,a,l,u){Xt=!1,ao=null,fy.apply(gy,arguments)}function hy(n,e,t,r,o,i,a,l,u){if(my.apply(this,arguments),Xt){if(Xt){var c=ao;Xt=!1,ao=null}else throw Error(w(198));lo||(lo=!0,Hi=c)}}function Je(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Rs(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Bl(n){if(Je(n)!==n)throw Error(w(188))}function Cy(n){var e=n.alternate;if(!e){if(e=Je(n),e===null)throw Error(w(188));return e!==n?null:n}for(var t=n,r=e;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Bl(o),n;if(i===r)return Bl(o),e;i=i.sibling}throw Error(w(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?n:e}function Ms(n){return n=Cy(n),n!==null?Ls(n):null}function Ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ls(n);if(e!==null)return e;n=n.sibling}return null}var Bs=_n.unstable_scheduleCallback,jl=_n.unstable_cancelCallback,vy=_n.unstable_shouldYield,Sy=_n.unstable_requestPaint,J=_n.unstable_now,Py=_n.unstable_getCurrentPriorityLevel,La=_n.unstable_ImmediatePriority,js=_n.unstable_UserBlockingPriority,uo=_n.unstable_NormalPriority,xy=_n.unstable_LowPriority,Is=_n.unstable_IdlePriority,Ro=null,ee=null;function wy(n){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(Ro,n,void 0,(n.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:Ay,ky=Math.log,Fy=Math.LN2;function Ay(n){return n>>>=0,n===0?32:31-(ky(n)/Fy|0)|0}var Tr=64,Rr=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function so(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,o=n.suspendedLanes,i=n.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=$t(l):(i&=a,i!==0&&(r=$t(i)))}else a=t&~o,a!==0?r=$t(a):i!==0&&(r=$t(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Yn(e),o=1<<t,r|=n[t],e&=~o;return r}function Ey(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,o=n.expirationTimes,i=n.pendingLanes;0<i;){var a=31-Yn(i),l=1<<a,u=o[a];u===-1?(!(l&t)||l&r)&&(o[a]=Ey(l,e)):u<=e&&(n.expiredLanes|=l),i&=~l}}function Wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ds(){var n=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),n}function ti(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function wr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Yn(e),n[e]=t}function Vy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var o=31-Yn(t),i=1<<o;e[o]=0,r[o]=-1,n[o]=-1,t&=~i}}function Ba(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Yn(t),o=1<<r;o&e|n[r]&e&&(n[r]|=e),t&=~o}}var O=0;function Os(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zs,ja,Gs,Hs,Ws,Ui=!1,Mr=[],ke=null,Fe=null,Ae=null,ur=new Map,sr=new Map,ve=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(n,e){switch(n){case"focusin":case"focusout":ke=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":Ae=null;break;case"pointerover":case"pointerout":ur.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(e.pointerId)}}function Bt(n,e,t,r,o,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=Fr(e),e!==null&&ja(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function _y(n,e,t,r,o){switch(e){case"focusin":return ke=Bt(ke,n,e,t,r,o),!0;case"dragenter":return Fe=Bt(Fe,n,e,t,r,o),!0;case"mouseover":return Ae=Bt(Ae,n,e,t,r,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,Bt(ur.get(i)||null,n,e,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,sr.set(i,Bt(sr.get(i)||null,n,e,t,r,o)),!0}return!1}function Us(n){var e=Oe(n.target);if(e!==null){var t=Je(e);if(t!==null){if(e=t.tag,e===13){if(e=Rs(t),e!==null){n.blockedOn=e,Ws(n.priority,function(){Gs(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Yi(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Oi=r,t.target.dispatchEvent(r),Oi=null}else return e=Fr(t),e!==null&&ja(e),n.blockedOn=t,!1;e.shift()}return!0}function Dl(n,e,t){Kr(n)&&t.delete(e)}function Ty(){Ui=!1,ke!==null&&Kr(ke)&&(ke=null),Fe!==null&&Kr(Fe)&&(Fe=null),Ae!==null&&Kr(Ae)&&(Ae=null),ur.forEach(Dl),sr.forEach(Dl)}function jt(n,e){n.blockedOn===e&&(n.blockedOn=null,Ui||(Ui=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Ty)))}function cr(n){function e(o){return jt(o,n)}if(0<Mr.length){jt(Mr[0],n);for(var t=1;t<Mr.length;t++){var r=Mr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(ke!==null&&jt(ke,n),Fe!==null&&jt(Fe,n),Ae!==null&&jt(Ae,n),ur.forEach(e),sr.forEach(e),t=0;t<ve.length;t++)r=ve[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ve.length&&(t=ve[0],t.blockedOn===null);)Us(t),t.blockedOn===null&&ve.shift()}var vt=pe.ReactCurrentBatchConfig,co=!0;function Ry(n,e,t,r){var o=O,i=vt.transition;vt.transition=null;try{O=1,Ia(n,e,t,r)}finally{O=o,vt.transition=i}}function My(n,e,t,r){var o=O,i=vt.transition;vt.transition=null;try{O=4,Ia(n,e,t,r)}finally{O=o,vt.transition=i}}function Ia(n,e,t,r){if(co){var o=Yi(n,e,t,r);if(o===null)yi(n,e,r,yo,t),Il(n,r);else if(_y(o,n,e,t,r))r.stopPropagation();else if(Il(n,r),e&4&&-1<Ny.indexOf(n)){for(;o!==null;){var i=Fr(o);if(i!==null&&zs(i),i=Yi(n,e,t,r),i===null&&yi(n,e,r,yo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else yi(n,e,r,null,t)}}var yo=null;function Yi(n,e,t,r){if(yo=null,n=Ma(r),n=Oe(n),n!==null)if(e=Je(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Rs(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yo=n,null}function Ys(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Py()){case La:return 1;case js:return 4;case uo:case xy:return 16;case Is:return 536870912;default:return 16}default:return 16}}var Pe=null,Da=null,Zr=null;function Qs(){if(Zr)return Zr;var n,e=Da,t=e.length,r,o="value"in Pe?Pe.value:Pe.textContent,i=o.length;for(n=0;n<t&&e[n]===o[n];n++);var a=t-n;for(r=1;r<=a&&e[t-r]===o[i-r];r++);return Zr=o.slice(n,1<r?1-r:void 0)}function Xr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Lr(){return!0}function Ol(){return!1}function Rn(n){function e(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:Ol,this.isPropagationStopped=Ol,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),e}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Rn(_t),kr=K({},_t,{view:0,detail:0}),Ly=Rn(kr),ri,oi,It,Mo=K({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==It&&(It&&n.type==="mousemove"?(ri=n.screenX-It.screenX,oi=n.screenY-It.screenY):oi=ri=0,It=n),ri)},movementY:function(n){return"movementY"in n?n.movementY:oi}}),zl=Rn(Mo),By=K({},Mo,{dataTransfer:0}),jy=Rn(By),Iy=K({},kr,{relatedTarget:0}),ii=Rn(Iy),Dy=K({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Rn(Dy),zy=K({},_t,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gy=Rn(zy),Hy=K({},_t,{data:0}),Gl=Rn(Hy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Yy[n])?!!e[n]:!1}function za(){return Qy}var $y=K({},kr,{key:function(n){if(n.key){var e=Wy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Uy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(n){return n.type==="keypress"?Xr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ky=Rn($y),Zy=K({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Rn(Zy),Xy=K({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Jy=Rn(Xy),qy=K({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=Rn(qy),ep=K({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Rn(ep),rp=[9,13,27,32],Ga=se&&"CompositionEvent"in window,Jt=null;se&&"documentMode"in document&&(Jt=document.documentMode);var op=se&&"TextEvent"in window&&!Jt,$s=se&&(!Ga||Jt&&8<Jt&&11>=Jt),Wl=" ",Ul=!1;function Ks(n,e){switch(n){case"keyup":return rp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var at=!1;function ip(n,e){switch(n){case"compositionend":return Zs(e);case"keypress":return e.which!==32?null:(Ul=!0,Wl);case"textInput":return n=e.data,n===Wl&&Ul?null:n;default:return null}}function ap(n,e){if(at)return n==="compositionend"||!Ga&&Ks(n,e)?(n=Qs(),Zr=Da=Pe=null,at=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $s&&e.locale!=="ko"?null:e.data;default:return null}}var lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lp[n.type]:e==="textarea"}function Xs(n,e,t,r){bs(r),e=po(e,"onChange"),0<e.length&&(t=new Oa("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var qt=null,dr=null;function up(n){uc(n,0)}function Lo(n){var e=st(n);if(Ps(e))return n}function sp(n,e){if(n==="change")return e}var Js=!1;if(se){var ai;if(se){var li="oninput"in document;if(!li){var Ql=document.createElement("div");Ql.setAttribute("oninput","return;"),li=typeof Ql.oninput=="function"}ai=li}else ai=!1;Js=ai&&(!document.documentMode||9<document.documentMode)}function $l(){qt&&(qt.detachEvent("onpropertychange",qs),dr=qt=null)}function qs(n){if(n.propertyName==="value"&&Lo(dr)){var e=[];Xs(e,dr,n,Ma(n)),Ts(up,e)}}function cp(n,e,t){n==="focusin"?($l(),qt=e,dr=t,qt.attachEvent("onpropertychange",qs)):n==="focusout"&&$l()}function dp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lo(dr)}function yp(n,e){if(n==="click")return Lo(e)}function pp(n,e){if(n==="input"||n==="change")return Lo(e)}function fp(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:fp;function yr(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!bi.call(e,o)||!$n(n[o],e[o]))return!1}return!0}function Kl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zl(n,e){var t=Kl(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Kl(t)}}function nc(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?nc(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ec(){for(var n=window,e=io();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=io(n.document)}return e}function Ha(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gp(n){var e=ec(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&nc(t.ownerDocument.documentElement,t)){if(r!==null&&Ha(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!n.extend&&i>r&&(o=r,r=i,i=o),o=Zl(t,i);var a=Zl(t,r);o&&a&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mp=se&&"documentMode"in document&&11>=document.documentMode,lt=null,Qi=null,nr=null,$i=!1;function Xl(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||lt==null||lt!==io(r)||(r=lt,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&yr(nr,r)||(nr=r,r=po(Qi,"onSelect"),0<r.length&&(e=new Oa("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=lt)))}function Br(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ut={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},ui={},tc={};se&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete ut.animationend.animation,delete ut.animationiteration.animation,delete ut.animationstart.animation),"TransitionEvent"in window||delete ut.transitionend.transition);function Bo(n){if(ui[n])return ui[n];if(!ut[n])return n;var e=ut[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in tc)return ui[n]=e[t];return n}var rc=Bo("animationend"),oc=Bo("animationiteration"),ic=Bo("animationstart"),ac=Bo("transitionend"),lc=new Map,Jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Me(n,e){lc.set(n,e),Xe(e,[n])}for(var si=0;si<Jl.length;si++){var ci=Jl[si],hp=ci.toLowerCase(),Cp=ci[0].toUpperCase()+ci.slice(1);Me(hp,"on"+Cp)}Me(rc,"onAnimationEnd");Me(oc,"onAnimationIteration");Me(ic,"onAnimationStart");Me("dblclick","onDoubleClick");Me("focusin","onFocus");Me("focusout","onBlur");Me(ac,"onTransitionEnd");xt("onMouseEnter",["mouseout","mouseover"]);xt("onMouseLeave",["mouseout","mouseover"]);xt("onPointerEnter",["pointerout","pointerover"]);xt("onPointerLeave",["pointerout","pointerover"]);Xe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));function ql(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,hy(r,e,void 0,n),n.currentTarget=null}function uc(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],o=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break n;ql(o,l,c),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break n;ql(o,l,c),i=u}}}if(lo)throw n=Hi,lo=!1,Hi=null,n}function H(n,e){var t=e[qi];t===void 0&&(t=e[qi]=new Set);var r=n+"__bubble";t.has(r)||(sc(e,n,2,!1),t.add(r))}function di(n,e,t){var r=0;e&&(r|=4),sc(t,n,r,e)}var jr="_reactListening"+Math.random().toString(36).slice(2);function pr(n){if(!n[jr]){n[jr]=!0,ms.forEach(function(t){t!=="selectionchange"&&(vp.has(t)||di(t,!1,n),di(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[jr]||(e[jr]=!0,di("selectionchange",!1,e))}}function sc(n,e,t,r){switch(Ys(e)){case 1:var o=Ry;break;case 4:o=My;break;default:o=Ia}t=o.bind(null,e,t,n),o=void 0,!Gi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?n.addEventListener(e,t,{capture:!0,passive:o}):n.addEventListener(e,t,!0):o!==void 0?n.addEventListener(e,t,{passive:o}):n.addEventListener(e,t,!1)}function yi(n,e,t,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Oe(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue n}l=l.parentNode}}r=r.return}Ts(function(){var c=i,m=Ma(t),p=[];n:{var g=lc.get(n);if(g!==void 0){var v=Oa,h=n;switch(n){case"keypress":if(Xr(t)===0)break n;case"keydown":case"keyup":v=Ky;break;case"focusin":h="focus",v=ii;break;case"focusout":h="blur",v=ii;break;case"beforeblur":case"afterblur":v=ii;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jy;break;case rc:case oc:case ic:v=Oy;break;case ac:v=np;break;case"scroll":v=Ly;break;case"wheel":v=tp;break;case"copy":case"cut":case"paste":v=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hl}var x=(e&4)!==0,F=!x&&n==="scroll",y=x?g!==null?g+"Capture":null:g;x=[];for(var s=c,f;s!==null;){f=s;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,y!==null&&(S=lr(s,y),S!=null&&x.push(fr(s,S,f)))),F)break;s=s.return}0<x.length&&(g=new v(g,h,null,t,m),p.push({event:g,listeners:x}))}}if(!(e&7)){n:{if(g=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",g&&t!==Oi&&(h=t.relatedTarget||t.fromElement)&&(Oe(h)||h[ce]))break n;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(h=t.relatedTarget||t.toElement,v=c,h=h?Oe(h):null,h!==null&&(F=Je(h),h!==F||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=c),v!==h)){if(x=zl,S="onMouseLeave",y="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(x=Hl,S="onPointerLeave",y="onPointerEnter",s="pointer"),F=v==null?g:st(v),f=h==null?g:st(h),g=new x(S,s+"leave",v,t,m),g.target=F,g.relatedTarget=f,S=null,Oe(m)===c&&(x=new x(y,s+"enter",h,t,m),x.target=f,x.relatedTarget=F,S=x),F=S,v&&h)e:{for(x=v,y=h,s=0,f=x;f;f=et(f))s++;for(f=0,S=y;S;S=et(S))f++;for(;0<s-f;)x=et(x),s--;for(;0<f-s;)y=et(y),f--;for(;s--;){if(x===y||y!==null&&x===y.alternate)break e;x=et(x),y=et(y)}x=null}else x=null;v!==null&&nu(p,g,v,x,!1),h!==null&&F!==null&&nu(p,F,h,x,!0)}}n:{if(g=c?st(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=sp;else if(Yl(g))if(Js)k=pp;else{k=dp;var E=cp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=yp);if(k&&(k=k(n,c))){Xs(p,k,t,m);break n}E&&E(n,g,c),n==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Li(g,"number",g.value)}switch(E=c?st(c):window,n){case"focusin":(Yl(E)||E.contentEditable==="true")&&(lt=E,Qi=c,nr=null);break;case"focusout":nr=Qi=lt=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Xl(p,t,m);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":Xl(p,t,m)}var b;if(Ga)n:{switch(n){case"compositionstart":var N="onCompositionStart";break n;case"compositionend":N="onCompositionEnd";break n;case"compositionupdate":N="onCompositionUpdate";break n}N=void 0}else at?Ks(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&($s&&t.locale!=="ko"&&(at||N!=="onCompositionStart"?N==="onCompositionEnd"&&at&&(b=Qs()):(Pe=m,Da="value"in Pe?Pe.value:Pe.textContent,at=!0)),E=po(c,N),0<E.length&&(N=new Gl(N,n,null,t,m),p.push({event:N,listeners:E}),b?N.data=b:(b=Zs(t),b!==null&&(N.data=b)))),(b=op?ip(n,t):ap(n,t))&&(c=po(c,"onBeforeInput"),0<c.length&&(m=new Gl("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=b))}uc(p,e)})}function fr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function po(n,e){for(var t=e+"Capture",r=[];n!==null;){var o=n,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=lr(n,t),i!=null&&r.unshift(fr(n,i,o)),i=lr(n,e),i!=null&&r.push(fr(n,i,o))),n=n.return}return r}function et(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function nu(n,e,t,r,o){for(var i=e._reactName,a=[];t!==null&&t!==r;){var l=t,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=lr(t,i),u!=null&&a.unshift(fr(t,u,l))):o||(u=lr(t,i),u!=null&&a.push(fr(t,u,l)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Sp=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function eu(n){return(typeof n=="string"?n:""+n).replace(Sp,`
`).replace(Pp,"")}function Ir(n,e,t){if(e=eu(e),eu(n)!==e&&t)throw Error(w(425))}function fo(){}var Ki=null,Zi=null;function Xi(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(n){return tu.resolve(null).then(n).catch(kp)}:Ji;function kp(n){setTimeout(function(){throw n})}function pi(n,e){var t=e,r=0;do{var o=t.nextSibling;if(n.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){n.removeChild(o),cr(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);cr(e)}function Ee(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ru(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),ne="__reactFiber$"+Tt,gr="__reactProps$"+Tt,ce="__reactContainer$"+Tt,qi="__reactEvents$"+Tt,Fp="__reactListeners$"+Tt,Ap="__reactHandles$"+Tt;function Oe(n){var e=n[ne];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ce]||t[ne]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ru(n);n!==null;){if(t=n[ne])return t;n=ru(n)}return e}n=t,t=n.parentNode}return null}function Fr(n){return n=n[ne]||n[ce],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function st(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(w(33))}function jo(n){return n[gr]||null}var na=[],ct=-1;function Le(n){return{current:n}}function W(n){0>ct||(n.current=na[ct],na[ct]=null,ct--)}function G(n,e){ct++,na[ct]=n.current,n.current=e}var Re={},fn=Le(Re),kn=Le(!1),Ye=Re;function wt(n,e){var t=n.type.contextTypes;if(!t)return Re;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=o),o}function Fn(n){return n=n.childContextTypes,n!=null}function go(){W(kn),W(fn)}function ou(n,e,t){if(fn.current!==Re)throw Error(w(168));G(fn,e),G(kn,t)}function cc(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(w(108,cy(n)||"Unknown",o));return K({},t,r)}function mo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Re,Ye=fn.current,G(fn,n),G(kn,kn.current),!0}function iu(n,e,t){var r=n.stateNode;if(!r)throw Error(w(169));t?(n=cc(n,e,Ye),r.__reactInternalMemoizedMergedChildContext=n,W(kn),W(fn),G(fn,n)):W(kn),G(kn,t)}var ie=null,Io=!1,fi=!1;function dc(n){ie===null?ie=[n]:ie.push(n)}function Ep(n){Io=!0,dc(n)}function Be(){if(!fi&&ie!==null){fi=!0;var n=0,e=O;try{var t=ie;for(O=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}ie=null,Io=!1}catch(o){throw ie!==null&&(ie=ie.slice(n+1)),Bs(La,Be),o}finally{O=e,fi=!1}}return null}var dt=[],yt=0,ho=null,Co=0,Mn=[],Ln=0,Qe=null,ae=1,le="";function je(n,e){dt[yt++]=Co,dt[yt++]=ho,ho=n,Co=e}function yc(n,e,t){Mn[Ln++]=ae,Mn[Ln++]=le,Mn[Ln++]=Qe,Qe=n;var r=ae;n=le;var o=32-Yn(r)-1;r&=~(1<<o),t+=1;var i=32-Yn(e)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ae=1<<32-Yn(e)+o|t<<o|r,le=i+n}else ae=1<<i|t<<o|r,le=n}function Wa(n){n.return!==null&&(je(n,1),yc(n,1,0))}function Ua(n){for(;n===ho;)ho=dt[--yt],dt[yt]=null,Co=dt[--yt],dt[yt]=null;for(;n===Qe;)Qe=Mn[--Ln],Mn[Ln]=null,le=Mn[--Ln],Mn[Ln]=null,ae=Mn[--Ln],Mn[Ln]=null}var Nn=null,Vn=null,U=!1,Un=null;function pc(n,e){var t=Bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function au(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Vn=Ee(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Qe!==null?{id:ae,overflow:le}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Vn=null,!0):!1;default:return!1}}function ea(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ta(n){if(U){var e=Vn;if(e){var t=e;if(!au(n,e)){if(ea(n))throw Error(w(418));e=Ee(t.nextSibling);var r=Nn;e&&au(n,e)?pc(r,t):(n.flags=n.flags&-4097|2,U=!1,Nn=n)}}else{if(ea(n))throw Error(w(418));n.flags=n.flags&-4097|2,U=!1,Nn=n}}}function lu(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Dr(n){if(n!==Nn)return!1;if(!U)return lu(n),U=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xi(n.type,n.memoizedProps)),e&&(e=Vn)){if(ea(n))throw fc(),Error(w(418));for(;e;)pc(n,e),e=Ee(e.nextSibling)}if(lu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Vn=Ee(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Vn=null}}else Vn=Nn?Ee(n.stateNode.nextSibling):null;return!0}function fc(){for(var n=Vn;n;)n=Ee(n.nextSibling)}function kt(){Vn=Nn=null,U=!1}function Ya(n){Un===null?Un=[n]:Un.push(n)}var bp=pe.ReactCurrentBatchConfig;function Dt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,n));var o=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof n!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,n))}return n}function Or(n,e){throw n=Object.prototype.toString.call(e),Error(w(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function uu(n){var e=n._init;return e(n._payload)}function gc(n){function e(y,s){if(n){var f=y.deletions;f===null?(y.deletions=[s],y.flags|=16):f.push(s)}}function t(y,s){if(!n)return null;for(;s!==null;)e(y,s),s=s.sibling;return null}function r(y,s){for(y=new Map;s!==null;)s.key!==null?y.set(s.key,s):y.set(s.index,s),s=s.sibling;return y}function o(y,s){return y=_e(y,s),y.index=0,y.sibling=null,y}function i(y,s,f){return y.index=f,n?(f=y.alternate,f!==null?(f=f.index,f<s?(y.flags|=2,s):f):(y.flags|=2,s)):(y.flags|=1048576,s)}function a(y){return n&&y.alternate===null&&(y.flags|=2),y}function l(y,s,f,S){return s===null||s.tag!==6?(s=Pi(f,y.mode,S),s.return=y,s):(s=o(s,f),s.return=y,s)}function u(y,s,f,S){var k=f.type;return k===it?m(y,s,f.props.children,S,f.key):s!==null&&(s.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===he&&uu(k)===s.type)?(S=o(s,f.props),S.ref=Dt(y,s,f),S.return=y,S):(S=oo(f.type,f.key,f.props,null,y.mode,S),S.ref=Dt(y,s,f),S.return=y,S)}function c(y,s,f,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=xi(f,y.mode,S),s.return=y,s):(s=o(s,f.children||[]),s.return=y,s)}function m(y,s,f,S,k){return s===null||s.tag!==7?(s=Ue(f,y.mode,S,k),s.return=y,s):(s=o(s,f),s.return=y,s)}function p(y,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Pi(""+s,y.mode,f),s.return=y,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Vr:return f=oo(s.type,s.key,s.props,null,y.mode,f),f.ref=Dt(y,null,s),f.return=y,f;case ot:return s=xi(s,y.mode,f),s.return=y,s;case he:var S=s._init;return p(y,S(s._payload),f)}if(Qt(s)||Mt(s))return s=Ue(s,y.mode,f,null),s.return=y,s;Or(y,s)}return null}function g(y,s,f,S){var k=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:l(y,s,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vr:return f.key===k?u(y,s,f,S):null;case ot:return f.key===k?c(y,s,f,S):null;case he:return k=f._init,g(y,s,k(f._payload),S)}if(Qt(f)||Mt(f))return k!==null?null:m(y,s,f,S,null);Or(y,f)}return null}function v(y,s,f,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(f)||null,l(s,y,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vr:return y=y.get(S.key===null?f:S.key)||null,u(s,y,S,k);case ot:return y=y.get(S.key===null?f:S.key)||null,c(s,y,S,k);case he:var E=S._init;return v(y,s,f,E(S._payload),k)}if(Qt(S)||Mt(S))return y=y.get(f)||null,m(s,y,S,k,null);Or(s,S)}return null}function h(y,s,f,S){for(var k=null,E=null,b=s,N=s=0,Y=null;b!==null&&N<f.length;N++){b.index>N?(Y=b,b=null):Y=b.sibling;var L=g(y,b,f[N],S);if(L===null){b===null&&(b=Y);break}n&&b&&L.alternate===null&&e(y,b),s=i(L,s,N),E===null?k=L:E.sibling=L,E=L,b=Y}if(N===f.length)return t(y,b),U&&je(y,N),k;if(b===null){for(;N<f.length;N++)b=p(y,f[N],S),b!==null&&(s=i(b,s,N),E===null?k=b:E.sibling=b,E=b);return U&&je(y,N),k}for(b=r(y,b);N<f.length;N++)Y=v(b,y,N,f[N],S),Y!==null&&(n&&Y.alternate!==null&&b.delete(Y.key===null?N:Y.key),s=i(Y,s,N),E===null?k=Y:E.sibling=Y,E=Y);return n&&b.forEach(function(_){return e(y,_)}),U&&je(y,N),k}function x(y,s,f,S){var k=Mt(f);if(typeof k!="function")throw Error(w(150));if(f=k.call(f),f==null)throw Error(w(151));for(var E=k=null,b=s,N=s=0,Y=null,L=f.next();b!==null&&!L.done;N++,L=f.next()){b.index>N?(Y=b,b=null):Y=b.sibling;var _=g(y,b,L.value,S);if(_===null){b===null&&(b=Y);break}n&&b&&_.alternate===null&&e(y,b),s=i(_,s,N),E===null?k=_:E.sibling=_,E=_,b=Y}if(L.done)return t(y,b),U&&je(y,N),k;if(b===null){for(;!L.done;N++,L=f.next())L=p(y,L.value,S),L!==null&&(s=i(L,s,N),E===null?k=L:E.sibling=L,E=L);return U&&je(y,N),k}for(b=r(y,b);!L.done;N++,L=f.next())L=v(b,y,N,L.value,S),L!==null&&(n&&L.alternate!==null&&b.delete(L.key===null?N:L.key),s=i(L,s,N),E===null?k=L:E.sibling=L,E=L);return n&&b.forEach(function(en){return e(y,en)}),U&&je(y,N),k}function F(y,s,f,S){if(typeof f=="object"&&f!==null&&f.type===it&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Vr:n:{for(var k=f.key,E=s;E!==null;){if(E.key===k){if(k=f.type,k===it){if(E.tag===7){t(y,E.sibling),s=o(E,f.props.children),s.return=y,y=s;break n}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===he&&uu(k)===E.type){t(y,E.sibling),s=o(E,f.props),s.ref=Dt(y,E,f),s.return=y,y=s;break n}t(y,E);break}else e(y,E);E=E.sibling}f.type===it?(s=Ue(f.props.children,y.mode,S,f.key),s.return=y,y=s):(S=oo(f.type,f.key,f.props,null,y.mode,S),S.ref=Dt(y,s,f),S.return=y,y=S)}return a(y);case ot:n:{for(E=f.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(y,s.sibling),s=o(s,f.children||[]),s.return=y,y=s;break n}else{t(y,s);break}else e(y,s);s=s.sibling}s=xi(f,y.mode,S),s.return=y,y=s}return a(y);case he:return E=f._init,F(y,s,E(f._payload),S)}if(Qt(f))return h(y,s,f,S);if(Mt(f))return x(y,s,f,S);Or(y,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(t(y,s.sibling),s=o(s,f),s.return=y,y=s):(t(y,s),s=Pi(f,y.mode,S),s.return=y,y=s),a(y)):t(y,s)}return F}var Ft=gc(!0),mc=gc(!1),vo=Le(null),So=null,pt=null,Qa=null;function $a(){Qa=pt=So=null}function Ka(n){var e=vo.current;W(vo),n._currentValue=e}function ra(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function St(n,e){So=n,Qa=pt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(wn=!0),n.firstContext=null)}function In(n){var e=n._currentValue;if(Qa!==n)if(n={context:n,memoizedValue:e,next:null},pt===null){if(So===null)throw Error(w(308));pt=n,So.dependencies={lanes:0,firstContext:n}}else pt=pt.next=n;return e}var ze=null;function Za(n){ze===null?ze=[n]:ze.push(n)}function hc(n,e,t,r){var o=e.interleaved;return o===null?(t.next=t,Za(e)):(t.next=o.next,o.next=t),e.interleaved=t,de(n,r)}function de(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ce=!1;function Xa(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ue(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function be(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,de(n,t)}return o=r.interleaved,o===null?(e.next=e,Za(r)):(e.next=o.next,o.next=e),r.interleaved=e,de(n,t)}function Jr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ba(n,t)}}function su(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=e:i=i.next=e}else o=i=e;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Po(n,e,t,r){var o=n.updateQueue;Ce=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var m=n.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,m=c=u=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var h=n,x=l;switch(g=e,v=t,x.tag){case 1:if(h=x.payload,typeof h=="function"){p=h.call(v,p,g);break n}p=h;break n;case 3:h.flags=h.flags&-65537|128;case 0:if(h=x.payload,g=typeof h=="function"?h.call(v,p,g):h,g==null)break n;p=K({},p,g);break n;case 2:Ce=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=v,u=p):m=m.next=v,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=m,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Ke|=a,n.lanes=a,n.memoizedState=p}}function cu(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var Ar={},te=Le(Ar),mr=Le(Ar),hr=Le(Ar);function Ge(n){if(n===Ar)throw Error(w(174));return n}function Ja(n,e){switch(G(hr,e),G(mr,n),G(te,Ar),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ji(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ji(e,n)}W(te),G(te,e)}function At(){W(te),W(mr),W(hr)}function vc(n){Ge(hr.current);var e=Ge(te.current),t=ji(e,n.type);e!==t&&(G(mr,n),G(te,t))}function qa(n){mr.current===n&&(W(te),W(mr))}var Q=Le(0);function xo(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gi=[];function nl(){for(var n=0;n<gi.length;n++)gi[n]._workInProgressVersionPrimary=null;gi.length=0}var qr=pe.ReactCurrentDispatcher,mi=pe.ReactCurrentBatchConfig,$e=0,$=null,tn=null,on=null,wo=!1,er=!1,Cr=0,Vp=0;function dn(){throw Error(w(321))}function el(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!$n(n[t],e[t]))return!1;return!0}function tl(n,e,t,r,o,i){if($e=i,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qr.current=n===null||n.memoizedState===null?Rp:Mp,n=t(r,o),er){i=0;do{if(er=!1,Cr=0,25<=i)throw Error(w(301));i+=1,on=tn=null,e.updateQueue=null,qr.current=Lp,n=t(r,o)}while(er)}if(qr.current=ko,e=tn!==null&&tn.next!==null,$e=0,on=tn=$=null,wo=!1,e)throw Error(w(300));return n}function rl(){var n=Cr!==0;return Cr=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?$.memoizedState=on=n:on=on.next=n,on}function Dn(){if(tn===null){var n=$.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=on===null?$.memoizedState:on.next;if(e!==null)on=e,tn=n;else{if(n===null)throw Error(w(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?$.memoizedState=on=n:on=on.next=n}return on}function vr(n,e){return typeof e=="function"?e(n):e}function hi(n){var e=Dn(),t=e.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=n;var r=tn,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,c=i;do{var m=c.lane;if(($e&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,a=r):u=u.next=p,$.lanes|=m,Ke|=m}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=l,$n(r,e.memoizedState)||(wn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){o=n;do i=o.lane,$.lanes|=i,Ke|=i,o=o.next;while(o!==n)}else o===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ci(n){var e=Dn(),t=e.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=n;var r=t.dispatch,o=t.pending,i=e.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=n(i,a.action),a=a.next;while(a!==o);$n(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Sc(){}function Pc(n,e){var t=$,r=Dn(),o=e(),i=!$n(r.memoizedState,o);if(i&&(r.memoizedState=o,wn=!0),r=r.queue,ol(kc.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||on!==null&&on.memoizedState.tag&1){if(t.flags|=2048,Sr(9,wc.bind(null,t,r,o,e),void 0,null),an===null)throw Error(w(349));$e&30||xc(t,e,o)}return o}function xc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function wc(n,e,t,r){e.value=t,e.getSnapshot=r,Fc(e)&&Ac(n)}function kc(n,e,t){return t(function(){Fc(e)&&Ac(n)})}function Fc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!$n(n,t)}catch{return!0}}function Ac(n){var e=de(n,1);e!==null&&Qn(e,n,1,-1)}function du(n){var e=qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:n},e.queue=n,n=n.dispatch=Tp.bind(null,$,n),[e.memoizedState,n]}function Sr(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function Ec(){return Dn().memoizedState}function no(n,e,t,r){var o=qn();$.flags|=n,o.memoizedState=Sr(1|e,t,void 0,r===void 0?null:r)}function Do(n,e,t,r){var o=Dn();r=r===void 0?null:r;var i=void 0;if(tn!==null){var a=tn.memoizedState;if(i=a.destroy,r!==null&&el(r,a.deps)){o.memoizedState=Sr(e,t,i,r);return}}$.flags|=n,o.memoizedState=Sr(1|e,t,i,r)}function yu(n,e){return no(8390656,8,n,e)}function ol(n,e){return Do(2048,8,n,e)}function bc(n,e){return Do(4,2,n,e)}function Vc(n,e){return Do(4,4,n,e)}function Nc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _c(n,e,t){return t=t!=null?t.concat([n]):null,Do(4,4,Nc.bind(null,e,n),t)}function il(){}function Tc(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&el(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Rc(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&el(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Mc(n,e,t){return $e&21?($n(t,e)||(t=Ds(),$.lanes|=t,Ke|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,wn=!0),n.memoizedState=t)}function Np(n,e){var t=O;O=t!==0&&4>t?t:4,n(!0);var r=mi.transition;mi.transition={};try{n(!1),e()}finally{O=t,mi.transition=r}}function Lc(){return Dn().memoizedState}function _p(n,e,t){var r=Ne(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bc(n))jc(e,t);else if(t=hc(n,e,t,r),t!==null){var o=hn();Qn(t,n,r,o),Ic(t,e,r)}}function Tp(n,e,t){var r=Ne(n),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bc(n))jc(e,o);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,$n(l,a)){var u=e.interleaved;u===null?(o.next=o,Za(e)):(o.next=u.next,u.next=o),e.interleaved=o;return}}catch{}finally{}t=hc(n,e,o,r),t!==null&&(o=hn(),Qn(t,n,r,o),Ic(t,e,r))}}function Bc(n){var e=n.alternate;return n===$||e!==null&&e===$}function jc(n,e){er=wo=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ic(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Ba(n,t)}}var ko={readContext:In,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Rp={readContext:In,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:In,useEffect:yu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,no(4194308,4,Nc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return no(4194308,4,n,e)},useInsertionEffect:function(n,e){return no(4,2,n,e)},useMemo:function(n,e){var t=qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=qn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=_p.bind(null,$,n),[r.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:du,useDebugValue:il,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=du(!1),e=n[0];return n=Np.bind(null,n[1]),qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=$,o=qn();if(U){if(t===void 0)throw Error(w(407));t=t()}else{if(t=e(),an===null)throw Error(w(349));$e&30||xc(r,e,t)}o.memoizedState=t;var i={value:t,getSnapshot:e};return o.queue=i,yu(kc.bind(null,r,i,n),[n]),r.flags|=2048,Sr(9,wc.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=qn(),e=an.identifierPrefix;if(U){var t=le,r=ae;t=(r&~(1<<32-Yn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Cr++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Vp++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Mp={readContext:In,useCallback:Tc,useContext:In,useEffect:ol,useImperativeHandle:_c,useInsertionEffect:bc,useLayoutEffect:Vc,useMemo:Rc,useReducer:hi,useRef:Ec,useState:function(){return hi(vr)},useDebugValue:il,useDeferredValue:function(n){var e=Dn();return Mc(e,tn.memoizedState,n)},useTransition:function(){var n=hi(vr)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:Sc,useSyncExternalStore:Pc,useId:Lc,unstable_isNewReconciler:!1},Lp={readContext:In,useCallback:Tc,useContext:In,useEffect:ol,useImperativeHandle:_c,useInsertionEffect:bc,useLayoutEffect:Vc,useMemo:Rc,useReducer:Ci,useRef:Ec,useState:function(){return Ci(vr)},useDebugValue:il,useDeferredValue:function(n){var e=Dn();return tn===null?e.memoizedState=n:Mc(e,tn.memoizedState,n)},useTransition:function(){var n=Ci(vr)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:Sc,useSyncExternalStore:Pc,useId:Lc,unstable_isNewReconciler:!1};function Hn(n,e){if(n&&n.defaultProps){e=K({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function oa(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:K({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Oo={isMounted:function(n){return(n=n._reactInternals)?Je(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=hn(),o=Ne(n),i=ue(r,o);i.payload=e,t!=null&&(i.callback=t),e=be(n,i,o),e!==null&&(Qn(e,n,o,r),Jr(e,n,o))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=hn(),o=Ne(n),i=ue(r,o);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=be(n,i,o),e!==null&&(Qn(e,n,o,r),Jr(e,n,o))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),r=Ne(n),o=ue(t,r);o.tag=2,e!=null&&(o.callback=e),e=be(n,o,r),e!==null&&(Qn(e,n,r,t),Jr(e,n,r))}};function pu(n,e,t,r,o,i,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!yr(t,r)||!yr(o,i):!0}function Dc(n,e,t){var r=!1,o=Re,i=e.contextType;return typeof i=="object"&&i!==null?i=In(i):(o=Fn(e)?Ye:fn.current,r=e.contextTypes,i=(r=r!=null)?wt(n,o):Re),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oo,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=i),e}function fu(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Oo.enqueueReplaceState(e,e.state,null)}function ia(n,e,t,r){var o=n.stateNode;o.props=t,o.state=n.memoizedState,o.refs={},Xa(n);var i=e.contextType;typeof i=="object"&&i!==null?o.context=In(i):(i=Fn(e)?Ye:fn.current,o.context=wt(n,i)),o.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(oa(n,e,i,t),o.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Oo.enqueueReplaceState(o,o.state,null),Po(n,t,o,r),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function Et(n,e){try{var t="",r=e;do t+=sy(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:o,digest:null}}function vi(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function aa(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function Oc(n,e,t){t=ue(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Ao||(Ao=!0,ma=r),aa(n,e)},t}function zc(n,e,t){t=ue(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;t.payload=function(){return r(o)},t.callback=function(){aa(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){aa(n,e),typeof r!="function"&&(Ve===null?Ve=new Set([this]):Ve.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function gu(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Bp;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(t)||(o.add(t),n=Zp.bind(null,n,e,t),e.then(n,n))}function mu(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function hu(n,e,t,r,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ue(-1,1),e.tag=2,be(t,e,1))),t.lanes|=1),n)}var jp=pe.ReactCurrentOwner,wn=!1;function mn(n,e,t,r){e.child=n===null?mc(e,null,t,r):Ft(e,n.child,t,r)}function Cu(n,e,t,r,o){t=t.render;var i=e.ref;return St(e,o),r=tl(n,e,t,r,i,o),t=rl(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,ye(n,e,o)):(U&&t&&Wa(e),e.flags|=1,mn(n,e,r,o),e.child)}function vu(n,e,t,r,o){if(n===null){var i=t.type;return typeof i=="function"&&!pl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Gc(n,e,i,r,o)):(n=oo(t.type,null,r,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:yr,t(a,r)&&n.ref===e.ref)return ye(n,e,o)}return e.flags|=1,n=_e(i,r),n.ref=e.ref,n.return=e,e.child=n}function Gc(n,e,t,r,o){if(n!==null){var i=n.memoizedProps;if(yr(i,r)&&n.ref===e.ref)if(wn=!1,e.pendingProps=r=i,(n.lanes&o)!==0)n.flags&131072&&(wn=!0);else return e.lanes=n.lanes,ye(n,e,o)}return la(n,e,t,r,o)}function Hc(n,e,t){var r=e.pendingProps,o=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(gt,bn),bn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,G(gt,bn),bn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,G(gt,bn),bn|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,G(gt,bn),bn|=r;return mn(n,e,o,t),e.child}function Wc(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function la(n,e,t,r,o){var i=Fn(t)?Ye:fn.current;return i=wt(e,i),St(e,o),t=tl(n,e,t,r,i,o),r=rl(),n!==null&&!wn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,ye(n,e,o)):(U&&r&&Wa(e),e.flags|=1,mn(n,e,t,o),e.child)}function Su(n,e,t,r,o){if(Fn(t)){var i=!0;mo(e)}else i=!1;if(St(e,o),e.stateNode===null)eo(n,e),Dc(e,t,r),ia(e,t,r,o),r=!0;else if(n===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=In(c):(c=Fn(t)?Ye:fn.current,c=wt(e,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==c)&&fu(e,a,r,c),Ce=!1;var g=e.memoizedState;a.state=g,Po(e,r,a,o),u=e.memoizedState,l!==r||g!==u||kn.current||Ce?(typeof m=="function"&&(oa(e,t,m,r),u=e.memoizedState),(l=Ce||pu(e,t,l,r,g,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Cc(n,e),l=e.memoizedProps,c=e.type===e.elementType?l:Hn(e.type,l),a.props=c,p=e.pendingProps,g=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=In(u):(u=Fn(t)?Ye:fn.current,u=wt(e,u));var v=t.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==u)&&fu(e,a,r,u),Ce=!1,g=e.memoizedState,a.state=g,Po(e,r,a,o);var h=e.memoizedState;l!==p||g!==h||kn.current||Ce?(typeof v=="function"&&(oa(e,t,v,r),h=e.memoizedState),(c=Ce||pu(e,t,c,r,g,h,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=h),a.props=r,a.state=h,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),r=!1)}return ua(n,e,t,r,i,o)}function ua(n,e,t,r,o,i){Wc(n,e);var a=(e.flags&128)!==0;if(!r&&!a)return o&&iu(e,t,!1),ye(n,e,i);r=e.stateNode,jp.current=e;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&a?(e.child=Ft(e,n.child,null,i),e.child=Ft(e,null,l,i)):mn(n,e,l,i),e.memoizedState=r.state,o&&iu(e,t,!0),e.child}function Uc(n){var e=n.stateNode;e.pendingContext?ou(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ou(n,e.context,!1),Ja(n,e.containerInfo)}function Pu(n,e,t,r,o){return kt(),Ya(o),e.flags|=256,mn(n,e,t,r),e.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ca(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yc(n,e,t){var r=e.pendingProps,o=Q.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=n!==null&&n.memoizedState===null?!1:(o&2)!==0),l?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),G(Q,o&1),n===null)return ta(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,n=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ho(a,r,0,null),n=Ue(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=ca(t),e.memoizedState=sa,n):al(e,a));if(o=n.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Ip(n,e,a,r,l,o,t);if(i){i=r.fallback,a=e.mode,o=n.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_e(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=_e(l,i):(i=Ue(i,a,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=n.child.memoizedState,a=a===null?ca(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=n.childLanes&~t,e.memoizedState=sa,r}return i=n.child,n=i.sibling,r=_e(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function al(n,e){return e=Ho({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function zr(n,e,t,r){return r!==null&&Ya(r),Ft(e,n.child,null,t),n=al(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ip(n,e,t,r,o,i,a){if(t)return e.flags&256?(e.flags&=-257,r=vi(Error(w(422))),zr(n,e,a,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=Ho({mode:"visible",children:r.children},o,0,null),i=Ue(i,o,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ft(e,n.child,null,a),e.child.memoizedState=ca(a),e.memoizedState=sa,i);if(!(e.mode&1))return zr(n,e,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(w(419)),r=vi(i,r,void 0),zr(n,e,a,r)}if(l=(a&n.childLanes)!==0,wn||l){if(r=an,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,de(n,o),Qn(r,n,o,-1))}return yl(),r=vi(Error(w(421))),zr(n,e,a,r)}return o.data==="$?"?(e.flags|=128,e.child=n.child,e=Xp.bind(null,n),o._reactRetry=e,null):(n=i.treeContext,Vn=Ee(o.nextSibling),Nn=e,U=!0,Un=null,n!==null&&(Mn[Ln++]=ae,Mn[Ln++]=le,Mn[Ln++]=Qe,ae=n.id,le=n.overflow,Qe=e),e=al(e,r.children),e.flags|=4096,e)}function xu(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),ra(n.return,e,t)}function Si(n,e,t,r,o){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Qc(n,e,t){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(mn(n,e,r.children,t),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xu(n,t,e);else if(n.tag===19)xu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(G(Q,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(t=e.child,o=null;t!==null;)n=t.alternate,n!==null&&xo(n)===null&&(o=t),t=t.sibling;t=o,t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),Si(e,!1,o,t,i);break;case"backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&xo(n)===null){e.child=o;break}n=o.sibling,o.sibling=t,t=o,o=n}Si(e,!0,t,null,i);break;case"together":Si(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eo(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ye(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ke|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(w(153));if(e.child!==null){for(n=e.child,t=_e(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=_e(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Dp(n,e,t){switch(e.tag){case 3:Uc(e),kt();break;case 5:vc(e);break;case 1:Fn(e.type)&&mo(e);break;case 4:Ja(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;G(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(Q,Q.current&1),e.flags|=128,null):t&e.child.childLanes?Yc(n,e,t):(G(Q,Q.current&1),n=ye(n,e,t),n!==null?n.sibling:null);G(Q,Q.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Qc(n,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,Hc(n,e,t)}return ye(n,e,t)}var $c,da,Kc,Zc;$c=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};da=function(){};Kc=function(n,e,t,r){var o=n.memoizedProps;if(o!==r){n=e.stateNode,Ge(te.current);var i=null;switch(t){case"input":o=Ri(n,o),r=Ri(n,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=Bi(n,o),r=Bi(n,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=fo)}Ii(t,r);var a;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(t||(t={}),t[a]=u[a])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",n),i||l===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Zc=function(n,e,t,r){t!==r&&(e.flags|=4)};function Ot(n,e){if(!U)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function yn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function Op(n,e,t){var r=e.pendingProps;switch(Ua(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(e),null;case 1:return Fn(e.type)&&go(),yn(e),null;case 3:return r=e.stateNode,At(),W(kn),W(fn),nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Dr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(va(Un),Un=null))),da(n,e),yn(e),null;case 5:qa(e);var o=Ge(hr.current);if(t=e.type,n!==null&&e.stateNode!=null)Kc(n,e,t,r,o),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return yn(e),null}if(n=Ge(te.current),Dr(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[ne]=e,r[gr]=i,n=(e.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<Kt.length;o++)H(Kt[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":_l(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Rl(r,i),H("invalid",r)}Ii(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ir(r.textContent,l,n),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ir(r.textContent,l,n),o=["children",""+l]):ir.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(t){case"input":Nr(r),Tl(r,i,!0);break;case"textarea":Nr(r),Ml(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fo)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ks(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=a.createElement(t,{is:r.is}):(n=a.createElement(t),t==="select"&&(a=n,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):n=a.createElementNS(n,t),n[ne]=e,n[gr]=r,$c(n,e,!1,!1),e.stateNode=n;n:{switch(a=Di(t,r),t){case"dialog":H("cancel",n),H("close",n),o=r;break;case"iframe":case"object":case"embed":H("load",n),o=r;break;case"video":case"audio":for(o=0;o<Kt.length;o++)H(Kt[o],n);o=r;break;case"source":H("error",n),o=r;break;case"img":case"image":case"link":H("error",n),H("load",n),o=r;break;case"details":H("toggle",n),o=r;break;case"input":_l(n,r),o=Ri(n,r),H("invalid",n);break;case"option":o=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),H("invalid",n);break;case"textarea":Rl(n,r),o=Bi(n,r),H("invalid",n);break;default:o=r}Ii(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Es(n,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fs(n,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ar(n,u):typeof u=="number"&&ar(n,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ir.hasOwnProperty(i)?u!=null&&i==="onScroll"&&H("scroll",n):u!=null&&Na(n,i,u,a))}switch(t){case"input":Nr(n),Tl(n,r,!1);break;case"textarea":Nr(n),Ml(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Te(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?mt(n,!!r.multiple,i,!1):r.defaultValue!=null&&mt(n,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=fo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yn(e),null;case 6:if(n&&e.stateNode!=null)Zc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(t=Ge(hr.current),Ge(te.current),Dr(e)){if(r=e.stateNode,t=e.memoizedProps,r[ne]=e,(i=r.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Ir(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ne]=e,e.stateNode=r}return yn(e),null;case 13:if(W(Q),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(U&&Vn!==null&&e.mode&1&&!(e.flags&128))fc(),kt(),e.flags|=98560,i=!1;else if(i=Dr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(w(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[ne]=e}else kt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yn(e),i=!1}else Un!==null&&(va(Un),Un=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Q.current&1?rn===0&&(rn=3):yl())),e.updateQueue!==null&&(e.flags|=4),yn(e),null);case 4:return At(),da(n,e),n===null&&pr(e.stateNode.containerInfo),yn(e),null;case 10:return Ka(e.type._context),yn(e),null;case 17:return Fn(e.type)&&go(),yn(e),null;case 19:if(W(Q),i=e.memoizedState,i===null)return yn(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Ot(i,!1);else{if(rn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=xo(n),a!==null){for(e.flags|=128,Ot(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,n=a.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return G(Q,Q.current&1|2),e.child}n=n.sibling}i.tail!==null&&J()>bt&&(e.flags|=128,r=!0,Ot(i,!1),e.lanes=4194304)}else{if(!r)if(n=xo(a),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ot(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return yn(e),null}else 2*J()-i.renderingStartTime>bt&&t!==1073741824&&(e.flags|=128,r=!0,Ot(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=J(),e.sibling=null,t=Q.current,G(Q,r?t&1|2:t&1),e):(yn(e),null);case 22:case 23:return dl(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bn&1073741824&&(yn(e),e.subtreeFlags&6&&(e.flags|=8192)):yn(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function zp(n,e){switch(Ua(e),e.tag){case 1:return Fn(e.type)&&go(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return At(),W(kn),W(fn),nl(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return qa(e),null;case 13:if(W(Q),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(w(340));kt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return W(Q),null;case 4:return At(),null;case 10:return Ka(e.type._context),null;case 22:case 23:return dl(),null;case 24:return null;default:return null}}var Gr=!1,pn=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,V=null;function ft(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){X(n,e,r)}else t.current=null}function ya(n,e,t){try{t()}catch(r){X(n,e,r)}}var wu=!1;function Hp(n,e){if(Ki=co,n=ec(),Ha(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var a=0,l=-1,u=-1,c=0,m=0,p=n,g=null;e:for(;;){for(var v;p!==t||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===n)break e;if(g===t&&++c===o&&(l=a),g===i&&++m===r&&(u=a),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zi={focusedElem:n,selectionRange:t},co=!1,V=e;V!==null;)if(e=V,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,V=n;else for(;V!==null;){e=V;try{var h=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var x=h.memoizedProps,F=h.memoizedState,y=e.stateNode,s=y.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),F);y.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(S){X(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}return h=wu,wu=!1,h}function tr(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var i=o.destroy;o.destroy=void 0,i!==void 0&&ya(e,t,i)}o=o.next}while(o!==r)}}function zo(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function pa(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Xc(n){var e=n.alternate;e!==null&&(n.alternate=null,Xc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ne],delete e[gr],delete e[qi],delete e[Fp],delete e[Ap])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jc(n){return n.tag===5||n.tag===3||n.tag===4}function ku(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Jc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fa(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fo));else if(r!==4&&(n=n.child,n!==null))for(fa(n,e,t),n=n.sibling;n!==null;)fa(n,e,t),n=n.sibling}function ga(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(ga(n,e,t),n=n.sibling;n!==null;)ga(n,e,t),n=n.sibling}var un=null,Wn=!1;function me(n,e,t){for(t=t.child;t!==null;)qc(n,e,t),t=t.sibling}function qc(n,e,t){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(Ro,t)}catch{}switch(t.tag){case 5:pn||ft(t,e);case 6:var r=un,o=Wn;un=null,me(n,e,t),un=r,Wn=o,un!==null&&(Wn?(n=un,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):un.removeChild(t.stateNode));break;case 18:un!==null&&(Wn?(n=un,t=t.stateNode,n.nodeType===8?pi(n.parentNode,t):n.nodeType===1&&pi(n,t),cr(n)):pi(un,t.stateNode));break;case 4:r=un,o=Wn,un=t.stateNode.containerInfo,Wn=!0,me(n,e,t),un=r,Wn=o;break;case 0:case 11:case 14:case 15:if(!pn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ya(t,e,a),o=o.next}while(o!==r)}me(n,e,t);break;case 1:if(!pn&&(ft(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){X(t,e,l)}me(n,e,t);break;case 21:me(n,e,t);break;case 22:t.mode&1?(pn=(r=pn)||t.memoizedState!==null,me(n,e,t),pn=r):me(n,e,t);break;default:me(n,e,t)}}function Fu(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Gp),e.forEach(function(r){var o=Jp.bind(null,n,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=n,a=e,l=a;n:for(;l!==null;){switch(l.tag){case 5:un=l.stateNode,Wn=!1;break n;case 3:un=l.stateNode.containerInfo,Wn=!0;break n;case 4:un=l.stateNode.containerInfo,Wn=!0;break n}l=l.return}if(un===null)throw Error(w(160));qc(i,a,o),un=null,Wn=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){X(o,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nd(e,n),e=e.sibling}function nd(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),Jn(n),r&4){try{tr(3,n,n.return),zo(3,n)}catch(x){X(n,n.return,x)}try{tr(5,n,n.return)}catch(x){X(n,n.return,x)}}break;case 1:Gn(e,n),Jn(n),r&512&&t!==null&&ft(t,t.return);break;case 5:if(Gn(e,n),Jn(n),r&512&&t!==null&&ft(t,t.return),n.flags&32){var o=n.stateNode;try{ar(o,"")}catch(x){X(n,n.return,x)}}if(r&4&&(o=n.stateNode,o!=null)){var i=n.memoizedProps,a=t!==null?t.memoizedProps:i,l=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xs(o,i),Di(l,a);var c=Di(l,i);for(a=0;a<u.length;a+=2){var m=u[a],p=u[a+1];m==="style"?Es(o,p):m==="dangerouslySetInnerHTML"?Fs(o,p):m==="children"?ar(o,p):Na(o,m,p,c)}switch(l){case"input":Mi(o,i);break;case"textarea":ws(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?mt(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?mt(o,!!i.multiple,i.defaultValue,!0):mt(o,!!i.multiple,i.multiple?[]:"",!1))}o[gr]=i}catch(x){X(n,n.return,x)}}break;case 6:if(Gn(e,n),Jn(n),r&4){if(n.stateNode===null)throw Error(w(162));o=n.stateNode,i=n.memoizedProps;try{o.nodeValue=i}catch(x){X(n,n.return,x)}}break;case 3:if(Gn(e,n),Jn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{cr(e.containerInfo)}catch(x){X(n,n.return,x)}break;case 4:Gn(e,n),Jn(n);break;case 13:Gn(e,n),Jn(n),o=n.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(sl=J())),r&4&&Fu(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(pn=(c=pn)||m,Gn(e,n),pn=c):Gn(e,n),Jn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(V=n,m=n.child;m!==null;){for(p=V=m;V!==null;){switch(g=V,v=g.child,g.tag){case 0:case 11:case 14:case 15:tr(4,g,g.return);break;case 1:ft(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){r=g,t=g.return;try{e=r,h.props=e.memoizedProps,h.state=e.memoizedState,h.componentWillUnmount()}catch(x){X(r,t,x)}}break;case 5:ft(g,g.return);break;case 22:if(g.memoizedState!==null){Eu(p);continue}}v!==null?(v.return=g,V=v):Eu(p)}m=m.sibling}n:for(m=null,p=n;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=As("display",a))}catch(x){X(n,n.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){X(n,n.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break n;for(;p.sibling===null;){if(p.return===null||p.return===n)break n;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,n),Jn(n),r&4&&Fu(n);break;case 21:break;default:Gn(e,n),Jn(n)}}function Jn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Jc(t)){var r=t;break n}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=ku(n);ga(n,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ku(n);fa(n,l,a);break;default:throw Error(w(161))}}catch(u){X(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Wp(n,e,t){V=n,ed(n)}function ed(n,e,t){for(var r=(n.mode&1)!==0;V!==null;){var o=V,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Gr;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||pn;l=Gr;var c=pn;if(Gr=a,(pn=u)&&!c)for(V=o;V!==null;)a=V,u=a.child,a.tag===22&&a.memoizedState!==null?bu(o):u!==null?(u.return=a,V=u):bu(o);for(;i!==null;)V=i,ed(i),i=i.sibling;V=o,Gr=l,pn=c}Au(n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,V=i):Au(n)}}function Au(n){for(;V!==null;){var e=V;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||zo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pn)if(t===null)r.componentDidMount();else{var o=e.elementType===e.type?t.memoizedProps:Hn(e.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cu(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}cu(e,a,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&cr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}pn||e.flags&512&&pa(e)}catch(g){X(e,e.return,g)}}if(e===n){V=null;break}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}}function Eu(n){for(;V!==null;){var e=V;if(e===n){V=null;break}var t=e.sibling;if(t!==null){t.return=e.return,V=t;break}V=e.return}}function bu(n){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{zo(4,e)}catch(u){X(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(u){X(e,o,u)}}var i=e.return;try{pa(e)}catch(u){X(e,i,u)}break;case 5:var a=e.return;try{pa(e)}catch(u){X(e,a,u)}}}catch(u){X(e,e.return,u)}if(e===n){V=null;break}var l=e.sibling;if(l!==null){l.return=e.return,V=l;break}V=e.return}}var Up=Math.ceil,Fo=pe.ReactCurrentDispatcher,ll=pe.ReactCurrentOwner,jn=pe.ReactCurrentBatchConfig,I=0,an=null,nn=null,sn=0,bn=0,gt=Le(0),rn=0,Pr=null,Ke=0,Go=0,ul=0,rr=null,Pn=null,sl=0,bt=1/0,oe=null,Ao=!1,ma=null,Ve=null,Hr=!1,xe=null,Eo=0,or=0,ha=null,to=-1,ro=0;function hn(){return I&6?J():to!==-1?to:to=J()}function Ne(n){return n.mode&1?I&2&&sn!==0?sn&-sn:bp.transition!==null?(ro===0&&(ro=Ds()),ro):(n=O,n!==0||(n=window.event,n=n===void 0?16:Ys(n.type)),n):1}function Qn(n,e,t,r){if(50<or)throw or=0,ha=null,Error(w(185));wr(n,t,r),(!(I&2)||n!==an)&&(n===an&&(!(I&2)&&(Go|=t),rn===4&&Se(n,sn)),An(n,r),t===1&&I===0&&!(e.mode&1)&&(bt=J()+500,Io&&Be()))}function An(n,e){var t=n.callbackNode;by(n,e);var r=so(n,n===an?sn:0);if(r===0)t!==null&&jl(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&jl(t),e===1)n.tag===0?Ep(Vu.bind(null,n)):dc(Vu.bind(null,n)),wp(function(){!(I&6)&&Be()}),t=null;else{switch(Os(r)){case 1:t=La;break;case 4:t=js;break;case 16:t=uo;break;case 536870912:t=Is;break;default:t=uo}t=sd(t,td.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function td(n,e){if(to=-1,ro=0,I&6)throw Error(w(327));var t=n.callbackNode;if(Pt()&&n.callbackNode!==t)return null;var r=so(n,n===an?sn:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=bo(n,r);else{e=r;var o=I;I|=2;var i=od();(an!==n||sn!==e)&&(oe=null,bt=J()+500,We(n,e));do try{$p();break}catch(l){rd(n,l)}while(!0);$a(),Fo.current=i,I=o,nn!==null?e=0:(an=null,sn=0,e=rn)}if(e!==0){if(e===2&&(o=Wi(n),o!==0&&(r=o,e=Ca(n,o))),e===1)throw t=Pr,We(n,0),Se(n,r),An(n,J()),t;if(e===6)Se(n,r);else{if(o=n.current.alternate,!(r&30)&&!Yp(o)&&(e=bo(n,r),e===2&&(i=Wi(n),i!==0&&(r=i,e=Ca(n,i))),e===1))throw t=Pr,We(n,0),Se(n,r),An(n,J()),t;switch(n.finishedWork=o,n.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Ie(n,Pn,oe);break;case 3:if(Se(n,r),(r&130023424)===r&&(e=sl+500-J(),10<e)){if(so(n,0)!==0)break;if(o=n.suspendedLanes,(o&r)!==r){hn(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=Ji(Ie.bind(null,n,Pn,oe),e);break}Ie(n,Pn,oe);break;case 4:if(Se(n,r),(r&4194240)===r)break;for(e=n.eventTimes,o=-1;0<r;){var a=31-Yn(r);i=1<<a,a=e[a],a>o&&(o=a),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Up(r/1960))-r,10<r){n.timeoutHandle=Ji(Ie.bind(null,n,Pn,oe),r);break}Ie(n,Pn,oe);break;case 5:Ie(n,Pn,oe);break;default:throw Error(w(329))}}}return An(n,J()),n.callbackNode===t?td.bind(null,n):null}function Ca(n,e){var t=rr;return n.current.memoizedState.isDehydrated&&(We(n,e).flags|=256),n=bo(n,e),n!==2&&(e=Pn,Pn=t,e!==null&&va(e)),n}function va(n){Pn===null?Pn=n:Pn.push.apply(Pn,n)}function Yp(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!$n(i(),o))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Se(n,e){for(e&=~ul,e&=~Go,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Yn(e),r=1<<t;n[t]=-1,e&=~r}}function Vu(n){if(I&6)throw Error(w(327));Pt();var e=so(n,0);if(!(e&1))return An(n,J()),null;var t=bo(n,e);if(n.tag!==0&&t===2){var r=Wi(n);r!==0&&(e=r,t=Ca(n,r))}if(t===1)throw t=Pr,We(n,0),Se(n,e),An(n,J()),t;if(t===6)throw Error(w(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ie(n,Pn,oe),An(n,J()),null}function cl(n,e){var t=I;I|=1;try{return n(e)}finally{I=t,I===0&&(bt=J()+500,Io&&Be())}}function Ze(n){xe!==null&&xe.tag===0&&!(I&6)&&Pt();var e=I;I|=1;var t=jn.transition,r=O;try{if(jn.transition=null,O=1,n)return n()}finally{O=r,jn.transition=t,I=e,!(I&6)&&Be()}}function dl(){bn=gt.current,W(gt)}function We(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,xp(t)),nn!==null)for(t=nn.return;t!==null;){var r=t;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:At(),W(kn),W(fn),nl();break;case 5:qa(r);break;case 4:At();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Ka(r.type._context);break;case 22:case 23:dl()}t=t.return}if(an=n,nn=n=_e(n.current,null),sn=bn=e,rn=0,Pr=null,ul=Go=Ke=0,Pn=rr=null,ze!==null){for(e=0;e<ze.length;e++)if(t=ze[e],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}ze=null}return n}function rd(n,e){do{var t=nn;try{if($a(),qr.current=ko,wo){for(var r=$.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wo=!1}if($e=0,on=tn=$=null,er=!1,Cr=0,ll.current=null,t===null||t.return===null){rn=1,Pr=e,nn=null;break}n:{var i=n,a=t.return,l=t,u=e;if(e=sn,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=mu(a);if(v!==null){v.flags&=-257,hu(v,a,l,i,e),v.mode&1&&gu(i,c,e),e=v,u=c;var h=e.updateQueue;if(h===null){var x=new Set;x.add(u),e.updateQueue=x}else h.add(u);break n}else{if(!(e&1)){gu(i,c,e),yl();break n}u=Error(w(426))}}else if(U&&l.mode&1){var F=mu(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),hu(F,a,l,i,e),Ya(Et(u,l));break n}}i=u=Et(u,l),rn!==4&&(rn=2),rr===null?rr=[i]:rr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var y=Oc(i,u,e);su(i,y);break n;case 1:l=u;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ve===null||!Ve.has(f)))){i.flags|=65536,e&=-e,i.lanes|=e;var S=zc(i,l,e);su(i,S);break n}}i=i.return}while(i!==null)}ad(t)}catch(k){e=k,nn===t&&t!==null&&(nn=t=t.return);continue}break}while(!0)}function od(){var n=Fo.current;return Fo.current=ko,n===null?ko:n}function yl(){(rn===0||rn===3||rn===2)&&(rn=4),an===null||!(Ke&268435455)&&!(Go&268435455)||Se(an,sn)}function bo(n,e){var t=I;I|=2;var r=od();(an!==n||sn!==e)&&(oe=null,We(n,e));do try{Qp();break}catch(o){rd(n,o)}while(!0);if($a(),I=t,Fo.current=r,nn!==null)throw Error(w(261));return an=null,sn=0,rn}function Qp(){for(;nn!==null;)id(nn)}function $p(){for(;nn!==null&&!vy();)id(nn)}function id(n){var e=ud(n.alternate,n,bn);n.memoizedProps=n.pendingProps,e===null?ad(n):nn=e,ll.current=null}function ad(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zp(t,e),t!==null){t.flags&=32767,nn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,nn=null;return}}else if(t=Op(t,e,bn),t!==null){nn=t;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=n}while(e!==null);rn===0&&(rn=5)}function Ie(n,e,t){var r=O,o=jn.transition;try{jn.transition=null,O=1,Kp(n,e,t,r)}finally{jn.transition=o,O=r}return null}function Kp(n,e,t,r){do Pt();while(xe!==null);if(I&6)throw Error(w(327));t=n.finishedWork;var o=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(w(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(Vy(n,i),n===an&&(nn=an=null,sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hr||(Hr=!0,sd(uo,function(){return Pt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=jn.transition,jn.transition=null;var a=O;O=1;var l=I;I|=4,ll.current=null,Hp(n,t),nd(t,n),gp(Zi),co=!!Ki,Zi=Ki=null,n.current=t,Wp(t),Sy(),I=l,O=a,jn.transition=i}else n.current=t;if(Hr&&(Hr=!1,xe=n,Eo=o),i=n.pendingLanes,i===0&&(Ve=null),wy(t.stateNode),An(n,J()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)o=e[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ao)throw Ao=!1,n=ma,ma=null,n;return Eo&1&&n.tag!==0&&Pt(),i=n.pendingLanes,i&1?n===ha?or++:(or=0,ha=n):or=0,Be(),null}function Pt(){if(xe!==null){var n=Os(Eo),e=jn.transition,t=O;try{if(jn.transition=null,O=16>n?16:n,xe===null)var r=!1;else{if(n=xe,xe=null,Eo=0,I&6)throw Error(w(331));var o=I;for(I|=4,V=n.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(V=c;V!==null;){var m=V;switch(m.tag){case 0:case 11:case 15:tr(8,m,i)}var p=m.child;if(p!==null)p.return=m,V=p;else for(;V!==null;){m=V;var g=m.sibling,v=m.return;if(Xc(m),m===c){V=null;break}if(g!==null){g.return=v,V=g;break}V=v}}}var h=i.alternate;if(h!==null){var x=h.child;if(x!==null){h.child=null;do{var F=x.sibling;x.sibling=null,x=F}while(x!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else n:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,V=y;break n}V=i.return}}var s=n.current;for(V=s;V!==null;){a=V;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,V=f;else n:for(a=s;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zo(9,l)}}catch(k){X(l,l.return,k)}if(l===a){V=null;break n}var S=l.sibling;if(S!==null){S.return=l.return,V=S;break n}V=l.return}}if(I=o,Be(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(Ro,n)}catch{}r=!0}return r}finally{O=t,jn.transition=e}}return!1}function Nu(n,e,t){e=Et(t,e),e=Oc(n,e,1),n=be(n,e,1),e=hn(),n!==null&&(wr(n,1,e),An(n,e))}function X(n,e,t){if(n.tag===3)Nu(n,n,t);else for(;e!==null;){if(e.tag===3){Nu(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ve===null||!Ve.has(r))){n=Et(t,n),n=zc(e,n,1),e=be(e,n,1),n=hn(),e!==null&&(wr(e,1,n),An(e,n));break}}e=e.return}}function Zp(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,an===n&&(sn&t)===t&&(rn===4||rn===3&&(sn&130023424)===sn&&500>J()-sl?We(n,0):ul|=t),An(n,e)}function ld(n,e){e===0&&(n.mode&1?(e=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):e=1);var t=hn();n=de(n,e),n!==null&&(wr(n,e,t),An(n,t))}function Xp(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ld(n,t)}function Jp(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,o=n.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),ld(n,t)}var ud;ud=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||kn.current)wn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return wn=!1,Dp(n,e,t);wn=!!(n.flags&131072)}else wn=!1,U&&e.flags&1048576&&yc(e,Co,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eo(n,e),n=e.pendingProps;var o=wt(e,fn.current);St(e,t),o=tl(null,e,r,n,o,t);var i=rl();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fn(r)?(i=!0,mo(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xa(e),o.updater=Oo,e.stateNode=o,o._reactInternals=e,ia(e,r,n,t),e=ua(null,e,r,!0,i,t)):(e.tag=0,U&&i&&Wa(e),mn(null,e,o,t),e=e.child),e;case 16:r=e.elementType;n:{switch(eo(n,e),n=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=n1(r),n=Hn(r,n),o){case 0:e=la(null,e,r,n,t);break n;case 1:e=Su(null,e,r,n,t);break n;case 11:e=Cu(null,e,r,n,t);break n;case 14:e=vu(null,e,r,Hn(r.type,n),t);break n}throw Error(w(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Hn(r,o),la(n,e,r,o,t);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Hn(r,o),Su(n,e,r,o,t);case 3:n:{if(Uc(e),n===null)throw Error(w(387));r=e.pendingProps,i=e.memoizedState,o=i.element,Cc(n,e),Po(e,r,null,t);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=Et(Error(w(423)),e),e=Pu(n,e,r,t,o);break n}else if(r!==o){o=Et(Error(w(424)),e),e=Pu(n,e,r,t,o);break n}else for(Vn=Ee(e.stateNode.containerInfo.firstChild),Nn=e,U=!0,Un=null,t=mc(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(kt(),r===o){e=ye(n,e,t);break n}mn(n,e,r,t)}e=e.child}return e;case 5:return vc(e),n===null&&ta(e),r=e.type,o=e.pendingProps,i=n!==null?n.memoizedProps:null,a=o.children,Xi(r,o)?a=null:i!==null&&Xi(r,i)&&(e.flags|=32),Wc(n,e),mn(n,e,a,t),e.child;case 6:return n===null&&ta(e),null;case 13:return Yc(n,e,t);case 4:return Ja(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Ft(e,null,r,t):mn(n,e,r,t),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Hn(r,o),Cu(n,e,r,o,t);case 7:return mn(n,e,e.pendingProps,t),e.child;case 8:return mn(n,e,e.pendingProps.children,t),e.child;case 12:return mn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,a=o.value,G(vo,r._currentValue),r._currentValue=a,i!==null)if($n(i.value,a)){if(i.children===o.children&&!kn.current){e=ye(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ue(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ra(i.return,t,e),l.lanes|=t;break}u=u.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),ra(a,t,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}mn(n,e,o.children,t),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,St(e,t),o=In(o),r=r(o),e.flags|=1,mn(n,e,r,t),e.child;case 14:return r=e.type,o=Hn(r,e.pendingProps),o=Hn(r.type,o),vu(n,e,r,o,t);case 15:return Gc(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:Hn(r,o),eo(n,e),e.tag=1,Fn(r)?(n=!0,mo(e)):n=!1,St(e,t),Dc(e,r,o),ia(e,r,o,t),ua(null,e,r,!0,n,t);case 19:return Qc(n,e,t);case 22:return Hc(n,e,t)}throw Error(w(156,e.tag))};function sd(n,e){return Bs(n,e)}function qp(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(n,e,t,r){return new qp(n,e,t,r)}function pl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function n1(n){if(typeof n=="function")return pl(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ta)return 11;if(n===Ra)return 14}return 2}function _e(n,e){var t=n.alternate;return t===null?(t=Bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function oo(n,e,t,r,o,i){var a=2;if(r=n,typeof n=="function")pl(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case it:return Ue(t.children,o,i,e);case _a:a=8,o|=8;break;case Vi:return n=Bn(12,t,e,o|2),n.elementType=Vi,n.lanes=i,n;case Ni:return n=Bn(13,t,e,o),n.elementType=Ni,n.lanes=i,n;case _i:return n=Bn(19,t,e,o),n.elementType=_i,n.lanes=i,n;case vs:return Ho(t,o,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case hs:a=10;break n;case Cs:a=9;break n;case Ta:a=11;break n;case Ra:a=14;break n;case he:a=16,r=null;break n}throw Error(w(130,n==null?n:typeof n,""))}return e=Bn(a,t,e,o),e.elementType=n,e.type=r,e.lanes=i,e}function Ue(n,e,t,r){return n=Bn(7,n,r,e),n.lanes=t,n}function Ho(n,e,t,r){return n=Bn(22,n,r,e),n.elementType=vs,n.lanes=t,n.stateNode={isHidden:!1},n}function Pi(n,e,t){return n=Bn(6,n,null,e),n.lanes=t,n}function xi(n,e,t){return e=Bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function e1(n,e,t,r,o){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fl(n,e,t,r,o,i,a,l,u){return n=new e1(n,e,t,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(i),n}function t1(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function cd(n){if(!n)return Re;n=n._reactInternals;n:{if(Je(n)!==n||n.tag!==1)throw Error(w(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(Fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(w(171))}if(n.tag===1){var t=n.type;if(Fn(t))return cc(n,t,e)}return e}function dd(n,e,t,r,o,i,a,l,u){return n=fl(t,r,!0,n,o,i,a,l,u),n.context=cd(null),t=n.current,r=hn(),o=Ne(t),i=ue(r,o),i.callback=e??null,be(t,i,o),n.current.lanes=o,wr(n,o,r),An(n,r),n}function Wo(n,e,t,r){var o=e.current,i=hn(),a=Ne(o);return t=cd(t),e.context===null?e.context=t:e.pendingContext=t,e=ue(i,a),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=be(o,e,a),n!==null&&(Qn(n,o,a,i),Jr(n,o,a)),a}function Vo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _u(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function gl(n,e){_u(n,e),(n=n.alternate)&&_u(n,e)}function r1(){return null}var yd=typeof reportError=="function"?reportError:function(n){console.error(n)};function ml(n){this._internalRoot=n}Uo.prototype.render=ml.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(w(409));Wo(n,e,null,null)};Uo.prototype.unmount=ml.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ze(function(){Wo(null,n,null,null)}),e[ce]=null}};function Uo(n){this._internalRoot=n}Uo.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hs();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ve.length&&e!==0&&e<ve[t].priority;t++);ve.splice(t,0,n),t===0&&Us(n)}};function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function o1(n,e,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Vo(a);i.call(c)}}var a=dd(e,r,n,0,null,!1,!1,"",Tu);return n._reactRootContainer=a,n[ce]=a.current,pr(n.nodeType===8?n.parentNode:n),Ze(),a}for(;o=n.lastChild;)n.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Vo(u);l.call(c)}}var u=fl(n,0,!1,null,null,!1,!1,"",Tu);return n._reactRootContainer=u,n[ce]=u.current,pr(n.nodeType===8?n.parentNode:n),Ze(function(){Wo(e,u,t,r)}),u}function Qo(n,e,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=Vo(a);l.call(u)}}Wo(e,a,n,o)}else a=o1(t,e,n,o,r);return Vo(a)}zs=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=$t(e.pendingLanes);t!==0&&(Ba(e,t|1),An(e,J()),!(I&6)&&(bt=J()+500,Be()))}break;case 13:Ze(function(){var r=de(n,1);if(r!==null){var o=hn();Qn(r,n,1,o)}}),gl(n,1)}};ja=function(n){if(n.tag===13){var e=de(n,134217728);if(e!==null){var t=hn();Qn(e,n,134217728,t)}gl(n,134217728)}};Gs=function(n){if(n.tag===13){var e=Ne(n),t=de(n,e);if(t!==null){var r=hn();Qn(t,n,e,r)}gl(n,e)}};Hs=function(){return O};Ws=function(n,e){var t=O;try{return O=n,e()}finally{O=t}};zi=function(n,e,t){switch(e){case"input":if(Mi(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var o=jo(r);if(!o)throw Error(w(90));Ps(r),Mi(r,o)}}}break;case"textarea":ws(n,t);break;case"select":e=t.value,e!=null&&mt(n,!!t.multiple,e,!1)}};Ns=cl;_s=Ze;var i1={usingClientEntryPoint:!1,Events:[Fr,st,jo,bs,Vs,cl]},zt={findFiberByHostInstance:Oe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a1={bundleType:zt.bundleType,version:zt.version,rendererPackageName:zt.rendererPackageName,rendererConfig:zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ms(n),n===null?null:n.stateNode},findFiberByHostInstance:zt.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Ro=Wr.inject(a1),ee=Wr}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;Tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hl(e))throw Error(w(200));return t1(n,e,null,t)};Tn.createRoot=function(n,e){if(!hl(n))throw Error(w(299));var t=!1,r="",o=yd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=fl(n,1,!1,null,null,t,!1,r,o),n[ce]=e.current,pr(n.nodeType===8?n.parentNode:n),new ml(e)};Tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(w(188)):(n=Object.keys(n).join(","),Error(w(268,n)));return n=Ms(e),n=n===null?null:n.stateNode,n};Tn.flushSync=function(n){return Ze(n)};Tn.hydrate=function(n,e,t){if(!Yo(e))throw Error(w(200));return Qo(null,n,e,!0,t)};Tn.hydrateRoot=function(n,e,t){if(!hl(n))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=yd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=dd(e,null,n,1,t??null,o,!1,i,a),n[ce]=e.current,pr(n),r)for(n=0;n<r.length;n++)t=r[n],o=t._getVersion,o=o(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,o]:e.mutableSourceEagerHydrationData.push(t,o);return new Uo(e)};Tn.render=function(n,e,t){if(!Yo(e))throw Error(w(200));return Qo(null,n,e,!1,t)};Tn.unmountComponentAtNode=function(n){if(!Yo(n))throw Error(w(40));return n._reactRootContainer?(Ze(function(){Qo(null,null,n,!1,function(){n._reactRootContainer=null,n[ce]=null})}),!0):!1};Tn.unstable_batchedUpdates=cl;Tn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Yo(t))throw Error(w(200));if(n==null||n._reactInternals===void 0)throw Error(w(38));return Qo(n,e,t,!1,r)};Tn.version="18.3.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(n){console.error(n)}}pd(),ps.exports=Tn;var Cl=ps.exports,fd,Ru=Cl;fd=Ru.createRoot,Ru.hydrateRoot;function Sa(n){return typeof n=="object"&&n!=null&&!Array.isArray(n)}var l1=n=>typeof n=="object"&&n!==null;function gd(n){return Object.fromEntries(Object.entries(n??{}).filter(([e,t])=>t!==void 0))}var u1=n=>n==="base";function s1(n){return n.slice().filter(e=>!u1(e))}function Mu(n){return String.fromCharCode(n+(n>25?39:97))}function c1(n){let e="",t;for(t=Math.abs(n);t>52;t=t/52|0)e=Mu(t%52)+e;return Mu(t%52)+e}function d1(n,e){let t=e.length;for(;t;)n=n*33^e.charCodeAt(--t);return n}function y1(n){return c1(d1(5381,n)>>>0)}var md=/\s*!(important)?/i;function p1(n){return typeof n=="string"?md.test(n):!1}function f1(n){return typeof n=="string"?n.replace(md,"").trim():n}function hd(n){return typeof n=="string"?n.replaceAll(" ","_"):n}var $o=n=>{const e=new Map;return(...r)=>{const o=JSON.stringify(r);if(e.has(o))return e.get(o);const i=n(...r);return e.set(o,i),i}},g1=new Set(["__proto__","constructor","prototype"]);function vl(...n){return n.reduce((e,t)=>(t&&Object.keys(t).forEach(r=>{if(g1.has(r))return;const o=e[r],i=t[r];Sa(o)&&Sa(i)?e[r]=vl(o,i):e[r]=i}),e),{})}var m1=n=>n!=null;function Cd(n,e,t={}){const{stop:r,getKey:o}=t;function i(a,l=[]){if(l1(a)){const u={};for(const[c,m]of Object.entries(a)){const p=(o==null?void 0:o(c,m))??c,g=[...l,p];if(r!=null&&r(a,g))return e(a,l);const v=i(m,g);m1(v)&&(u[p]=v)}return u}return e(a,l)}return i(n)}function h1(n,e){return n.reduce((t,r,o)=>{const i=e[o];return r!=null&&(t[i]=r),t},{})}function vd(n,e,t=!0){const{utility:r,conditions:o}=e,{hasShorthand:i,resolveShorthand:a}=r;return Cd(n,l=>Array.isArray(l)?h1(l,o.breakpoints.keys):l,{stop:l=>Array.isArray(l),getKey:t?l=>i?a(l):l:void 0})}var C1={shift:n=>n,finalize:n=>n,breakpoints:{keys:[]}},v1=n=>typeof n=="string"?n.replaceAll(/[\n\s]+/g," "):n;function S1(n){const{utility:e,hash:t,conditions:r=C1}=n,o=a=>[e.prefix,a].filter(Boolean).join("-"),i=(a,l)=>{let u;if(t){const c=[...r.finalize(a),l];u=o(e.toHash(c,y1))}else u=[...r.finalize(a),o(l)].join(":");return u};return $o(({base:a,...l}={})=>{const u=Object.assign(l,a),c=vd(u,n),m=new Set;return Cd(c,(p,g)=>{if(p==null)return;const v=p1(p),[h,...x]=r.shift(g),F=s1(x),y=e.transform(h,f1(v1(p)));let s=i(F,y.className);v&&(s=`${s}!`),m.add(s)}),Array.from(m).join(" ")})}function P1(...n){return n.flat().filter(e=>Sa(e)&&Object.keys(gd(e)).length>0)}function x1(n){function e(o){const i=P1(...o);return i.length===1?i:i.map(a=>vd(a,n))}function t(...o){return vl(...e(o))}function r(...o){return Object.assign({},...e(o))}return{mergeCss:$o(t),assignCss:r}}var w1=/([A-Z])/g,k1=/^ms-/,F1=$o(n=>n.startsWith("--")?n:n.replace(w1,"-$1").replace(k1,"-ms-").toLowerCase()),A1="cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";`${A1.split(",").join("|")}`;function E1(n,...e){const t=Object.getOwnPropertyDescriptors(n),r=Object.keys(t),o=a=>{const l={};for(let u=0;u<a.length;u++){const c=a[u];t[c]&&(Object.defineProperty(l,c,t[c]),delete t[c])}return l},i=a=>o(Array.isArray(a)?a:r.filter(a));return e.map(i).concat(o(r))}var b1=(...n)=>{const e=n.reduce((t,r)=>(r&&r.forEach(o=>t.add(o)),t),new Set([]));return Array.from(e)};const V1="_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,smToMd,smToLg,smToXl,mdToLg,mdToXl,lgToXl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base",Sd=new Set(V1.split(",")),N1=/^@|&|&$/;function Lu(n){return Sd.has(n)||N1.test(n)}const _1=/^_/,T1=/&|@/;function R1(n){return n.map(e=>Sd.has(e)?e.replace(_1,""):T1.test(e)?`[${hd(e.trim())}]`:e)}function M1(n){return n.sort((e,t)=>{const r=Lu(e),o=Lu(t);return r&&!o?1:!r&&o?-1:0})}const L1="aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,WebkitTextFillColor:wktf-c,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle",Pd=new Map,xd=new Map;L1.split(",").forEach(n=>{const[e,t]=n.split(":"),[r,...o]=t.split("/");Pd.set(e,r),o.length&&o.forEach(i=>{xd.set(i==="1"?r:i,e)})});const Bu=n=>xd.get(n)||n,wd={conditions:{shift:M1,finalize:R1,breakpoints:{keys:["base","sm","md","lg","xl"]}},utility:{transform:(n,e)=>{const t=Bu(n);return{className:`${Pd.get(t)||F1(t)}_${hd(e)}`}},hasShorthand:!0,toHash:(n,e)=>e(n.join(":")),resolveShorthand:Bu}},B1=S1(wd),C=(...n)=>B1(He(...n));C.raw=(...n)=>He(...n);const{mergeCss:He}=x1(wd);function j1(){let n="",e=0,t;for(;e<arguments.length;)(t=arguments[e++])&&typeof t=="string"&&(n&&(n+=" "),n+=t);return n}const ju=n=>({base:{},variants:{},defaultVariants:{},compoundVariants:[],...n});function Sl(n){const{base:e,variants:t,defaultVariants:r,compoundVariants:o}=ju(n),i=g=>({...r,...gd(g)});function a(g={}){var F;const v=i(g);let h={...e};for(const[y,s]of Object.entries(v))(F=t[y])!=null&&F[s]&&(h=He(h,t[y][s]));const x=I1(o,v);return He(h,x)}function l(g){const v=ju(g.config),h=b1(g.variantKeys,Object.keys(t));return Sl({base:He(e,v.base),variants:Object.fromEntries(h.map(x=>[x,He(t[x],v.variants[x])])),defaultVariants:vl(r,v.defaultVariants),compoundVariants:[...o,...v.compoundVariants]})}function u(g){return C(a(g))}const c=Object.keys(t);function m(g){return E1(g,c)}const p=Object.fromEntries(Object.entries(t).map(([g,v])=>[g,Object.keys(v)]));return Object.assign($o(u),{__cva__:!0,variantMap:p,variantKeys:c,raw:a,config:n,merge:l,splitVariantProps:m,getVariantProps:i})}function I1(n,e){let t={};return n.forEach(r=>{Object.entries(r).every(([i,a])=>i==="css"?!0:(Array.isArray(a)?a:[a]).some(u=>e[i]===u))&&(t=He(t,r.css))}),t}const D1="modulepreload",O1=function(n){return"/"+n},Iu={},z1=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=O1(u),u in Iu)return;Iu[u]=!0;const c=u.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":D1,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},G1=P.createContext(null);function H1(n,e){const t=Array.isArray(n)?n[0]:n?n.x:0,r=Array.isArray(n)?n[1]:n?n.y:0,o=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0;return t===o&&r===i}function xn(n,e){if(n===e)return!0;if(!n||!e)return!1;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!xn(n[t],e[t]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof n=="object"&&typeof e=="object"){const t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(const o of t)if(!e.hasOwnProperty(o)||!xn(n[o],e[o]))return!1;return!0}return!1}function Du(n){return{longitude:n.center.lng,latitude:n.center.lat,zoom:n.zoom,pitch:n.pitch,bearing:n.bearing,padding:n.padding}}function Ou(n,e){const t=e.viewState||e,r={};if("longitude"in t&&"latitude"in t&&(t.longitude!==n.center.lng||t.latitude!==n.center.lat)){const o=n.center.constructor;r.center=new o(t.longitude,t.latitude)}return"zoom"in t&&t.zoom!==n.zoom&&(r.zoom=t.zoom),"bearing"in t&&t.bearing!==n.bearing&&(r.bearing=t.bearing),"pitch"in t&&t.pitch!==n.pitch&&(r.pitch=t.pitch),t.padding&&n.padding&&!xn(t.padding,n.padding)&&(r.padding=t.padding),r}const W1=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function zu(n){if(!n)return null;if(typeof n=="string"||("toJS"in n&&(n=n.toJS()),!n.layers))return n;const e={};for(const r of n.layers)e[r.id]=r;const t=n.layers.map(r=>{let o=null;"interactive"in r&&(o=Object.assign({},r),delete o.interactive);const i=e[r.ref];if(i){o=o||Object.assign({},r),delete o.ref;for(const a of W1)a in i&&(o[a]=i[a])}return o||r});return{...n,layers:t}}const Gu={version:8,sources:{},layers:[]},Hu={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},Wu={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},Uu={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},U1=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],Y1=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class Vt{constructor(e,t,r){this._map=null,this._internalUpdate=!1,this._hoveredFeatures=null,this._propsedCameraUpdate=null,this._styleComponents={},this._onEvent=o=>{const i=this.props[Uu[o.type]];i?i(o):o.type==="error"&&console.error(o.error)},this._onCameraEvent=o=>{if(this._internalUpdate)return;o.viewState=this._propsedCameraUpdate||Du(this._map.transform);const i=this.props[Wu[o.type]];i&&i(o)},this._onCameraUpdate=o=>this._internalUpdate?o:(this._propsedCameraUpdate=Du(o),Ou(o,this.props)),this._onPointerEvent=o=>{(o.type==="mousemove"||o.type==="mouseout")&&this._updateHover(o);const i=this.props[Hu[o.type]];i&&(this.props.interactiveLayerIds&&o.type!=="mouseover"&&o.type!=="mouseout"&&(o.features=this._hoveredFeatures||this._queryRenderedFeatures(o.point)),i(o),delete o.features)},this._MapClass=e,this.props=t,this._initialize(r)}get map(){return this._map}setProps(e){const t=this.props;this.props=e;const r=this._updateSettings(e,t),o=this._updateSize(e),i=this._updateViewState(e);this._updateStyle(e,t),this._updateStyleComponents(e),this._updateHandlers(e,t),(r||o||i&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const r=Vt.savedMaps.pop();if(!r)return null;const o=r.map,i=o.getContainer();for(t.className=i.className;i.childNodes.length>0;)t.appendChild(i.childNodes[0]);o._container=t;const a=o._resizeObserver;a&&(a.disconnect(),a.observe(t)),r.setProps({...e,styleDiffing:!1}),o.resize();const{initialViewState:l}=e;return l&&(l.bounds?o.fitBounds(l.bounds,{...l.fitBoundsOptions,duration:0}):r._updateViewState(l)),o.isStyleLoaded()?o.fire("load"):o.once("style.load",()=>o.fire("load")),o._update(),r}_initialize(e){const{props:t}=this,{mapStyle:r=Gu}=t,o={...t,...t.initialViewState,container:e,style:zu(r)},i=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),t.gl){const l=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=l,t.gl)}const a=new this._MapClass(o);i.padding&&a.setPadding(i.padding),t.cursor&&(a.getCanvas().style.cursor=t.cursor),a.transformCameraUpdate=this._onCameraUpdate,a.on("style.load",()=>{var l;this._styleComponents={light:a.getLight(),sky:a.getSky(),projection:(l=a.getProjection)==null?void 0:l.call(a),terrain:a.getTerrain()},this._updateStyleComponents(this.props)}),a.on("sourcedata",()=>{this._updateStyleComponents(this.props)});for(const l in Hu)a.on(l,this._onPointerEvent);for(const l in Wu)a.on(l,this._onCameraEvent);for(const l in Uu)a.on(l,this._onEvent);this._map=a}recycle(){const t=this.map.getContainer().querySelector("[mapboxgl-children]");t==null||t.remove(),Vt.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_updateSize(e){const{viewState:t}=e;if(t){const r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e){const t=this._map,r=t.transform;if(!t.isMoving()){const i=Ou(r,e);if(Object.keys(i).length>0)return this._internalUpdate=!0,t.jumpTo(i),this._internalUpdate=!1,!0}return!1}_updateSettings(e,t){const r=this._map;let o=!1;for(const i of U1)if(i in e&&!xn(e[i],t[i])){o=!0;const a=r[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(r,e[i])}return o}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){const{mapStyle:r=Gu,styleDiffing:o=!0}=e,i={diff:o};"localIdeographFontFamily"in e&&(i.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(zu(r),i)}}_updateStyleComponents({light:e,projection:t,sky:r,terrain:o}){var l,u;const i=this._map,a=this._styleComponents;i.style._loaded&&(e&&!xn(e,a.light)&&(a.light=e,i.setLight(e)),t&&!xn(t,a.projection)&&t!==((l=a.projection)==null?void 0:l.type)&&(a.projection=typeof t=="string"?{type:t}:t,(u=i.setProjection)==null||u.call(i,a.projection)),r&&!xn(r,a.sky)&&(a.sky=r,i.setSky(r)),o!==void 0&&!xn(o,a.terrain)&&(!o||i.getSource(o.source))&&(a.terrain=o,i.setTerrain(o)))}_updateHandlers(e,t){const r=this._map;for(const o of Y1){const i=e[o]??!0,a=t[o]??!0;xn(i,a)||(i?r[o].enable(i):r[o].disable())}}_queryRenderedFeatures(e){const t=this._map,{interactiveLayerIds:r=[]}=this.props;try{return t.queryRenderedFeatures(e,{layers:r.filter(t.getLayer.bind(t))})}catch{return[]}}_updateHover(e){var o;const{props:t}=this;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){const i=e.type,a=((o=this._hoveredFeatures)==null?void 0:o.length)>0,l=this._queryRenderedFeatures(e.point),u=l.length>0;!u&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=l,u&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=i}else this._hoveredFeatures=null}}Vt.savedMaps=[];const Q1=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function $1(n){if(!n)return null;const e=n.map,t={getMap:()=>e};for(const r of K1(e))!(r in t)&&!Q1.includes(r)&&(t[r]=e[r].bind(e));return t}function K1(n){const e=new Set;let t=n;for(;t;){for(const r of Object.getOwnPropertyNames(t))r[0]!=="_"&&typeof n[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);t=Object.getPrototypeOf(t)}return Array.from(e)}const Z1=typeof document<"u"?P.useLayoutEffect:P.useEffect;function X1(n,e){const{RTLTextPlugin:t,maxParallelImageRequests:r,workerCount:o,workerUrl:i}=e;if(t&&n.getRTLTextPluginStatus&&n.getRTLTextPluginStatus()==="unavailable"){const{pluginUrl:a,lazy:l=!0}=typeof t=="string"?{pluginUrl:t}:t;n.setRTLTextPlugin(a,u=>{u&&console.error(u)},l)}r!==void 0&&n.setMaxParallelImageRequests(r),o!==void 0&&n.setWorkerCount(o),i!==void 0&&n.setWorkerUrl(i)}const Rt=P.createContext(null);function J1(n,e){const t=P.useContext(G1),[r,o]=P.useState(null),i=P.useRef(),{current:a}=P.useRef({mapLib:null,map:null});P.useEffect(()=>{const c=n.mapLib;let m=!0,p;return Promise.resolve(c||z1(()=>import("./maplibre-gl-DpYeNkrs.js").then(g=>g.m),[])).then(g=>{if(!m)return;if(!g)throw new Error("Invalid mapLib");const v="Map"in g?g:g.default;if(!v.Map)throw new Error("Invalid mapLib");X1(v,n),n.reuseMaps&&(p=Vt.reuse(n,i.current)),p||(p=new Vt(v.Map,n,i.current)),a.map=$1(p),a.mapLib=v,o(p),t==null||t.onMapMount(a.map,n.id)}).catch(g=>{const{onError:v}=n;v?v({type:"error",target:null,originalEvent:null,error:g}):console.error(g)}),()=>{m=!1,p&&(t==null||t.onMapUnmount(n.id),n.reuseMaps?p.recycle():p.destroy())}},[]),Z1(()=>{r&&r.setProps(n)}),P.useImperativeHandle(e,()=>a.map,[r]);const l=P.useMemo(()=>({position:"relative",width:"100%",height:"100%",...n.style}),[n.style]),u={height:"100%"};return P.createElement("div",{id:n.id,ref:i,style:l},r&&P.createElement(Rt.Provider,{value:a},P.createElement("div",{"mapboxgl-children":"",style:u},n.children)))}const q1=P.forwardRef(J1),nf=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function fe(n,e){if(!n||!e)return;const t=n.style;for(const r in e){const o=e[r];Number.isFinite(o)&&!nf.test(r)?t[r]=`${o}px`:t[r]=o}}function kd(n,e){if(n===e)return null;const t=Yu(n),r=Yu(e),o=[];for(const i of r)t.has(i)||o.push(i);for(const i of t)r.has(i)||o.push(i);return o.length===0?null:o}function Yu(n){return new Set(n?n.trim().split(/\s+/):[])}P.memo(P.forwardRef((n,e)=>{const{map:t,mapLib:r}=P.useContext(Rt),o=P.useRef({props:n}),i=P.useMemo(()=>{let y=!1;P.Children.forEach(n.children,S=>{S&&(y=!0)});const s={...n,element:y?document.createElement("div"):void 0},f=new r.Marker(s);return f.setLngLat([n.longitude,n.latitude]),f.getElement().addEventListener("click",S=>{var k,E;(E=(k=o.current.props).onClick)==null||E.call(k,{type:"click",target:f,originalEvent:S})}),f.on("dragstart",S=>{var E,b;const k=S;k.lngLat=i.getLngLat(),(b=(E=o.current.props).onDragStart)==null||b.call(E,k)}),f.on("drag",S=>{var E,b;const k=S;k.lngLat=i.getLngLat(),(b=(E=o.current.props).onDrag)==null||b.call(E,k)}),f.on("dragend",S=>{var E,b;const k=S;k.lngLat=i.getLngLat(),(b=(E=o.current.props).onDragEnd)==null||b.call(E,k)}),f},[]);P.useEffect(()=>(i.addTo(t.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:l,offset:u,style:c,draggable:m=!1,popup:p=null,rotation:g=0,rotationAlignment:v="auto",pitchAlignment:h="auto"}=n;P.useEffect(()=>{fe(i.getElement(),c)},[c]),P.useImperativeHandle(e,()=>i,[]);const x=o.current.props;(i.getLngLat().lng!==a||i.getLngLat().lat!==l)&&i.setLngLat([a,l]),u&&!H1(i.getOffset(),u)&&i.setOffset(u),i.isDraggable()!==m&&i.setDraggable(m),i.getRotation()!==g&&i.setRotation(g),i.getRotationAlignment()!==v&&i.setRotationAlignment(v),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==p&&i.setPopup(p);const F=kd(x.className,n.className);if(F)for(const y of F)i.toggleClassName(y);return o.current.props=n,Cl.createPortal(n.children,i.getElement())}));const ef=P.memo(P.forwardRef((n,e)=>{const{map:t,mapLib:r}=P.useContext(Rt),o=P.useMemo(()=>document.createElement("div"),[]),i=P.useRef({props:n}),a=P.useMemo(()=>{const l={...n},u=new r.Popup(l);return u.setLngLat([n.longitude,n.latitude]),u.once("open",c=>{var m,p;(p=(m=i.current.props).onOpen)==null||p.call(m,c)}),u},[]);if(P.useEffect(()=>{const l=u=>{var c,m;(m=(c=i.current.props).onClose)==null||m.call(c,u)};return a.on("close",l),a.setDOMContent(o).addTo(t.getMap()),()=>{a.off("close",l),a.isOpen()&&a.remove()}},[]),P.useEffect(()=>{fe(a.getElement(),n.style)},[n.style]),P.useImperativeHandle(e,()=>a,[]),a.isOpen()){const l=i.current.props;(a.getLngLat().lng!==n.longitude||a.getLngLat().lat!==n.latitude)&&a.setLngLat([n.longitude,n.latitude]),n.offset&&!xn(l.offset,n.offset)&&a.setOffset(n.offset),(l.anchor!==n.anchor||l.maxWidth!==n.maxWidth)&&(a.options.anchor=n.anchor,a.setMaxWidth(n.maxWidth));const u=kd(l.className,n.className);if(u)for(const c of u)a.toggleClassName(c);i.current.props=n}return Cl.createPortal(n.children,o)}));function qe(n,e,t,r){const o=P.useContext(Rt),i=P.useMemo(()=>n(o),[]);return P.useEffect(()=>{const a=e,l=null,u=typeof e=="function"?e:null,{map:c}=o;return c.hasControl(i)||(c.addControl(i,a==null?void 0:a.position),l&&l(o)),()=>{u&&u(o),c.hasControl(i)&&c.removeControl(i)}},[]),i}function tf(n){const e=qe(({mapLib:t})=>new t.AttributionControl(n),{position:n.position});return P.useEffect(()=>{fe(e._container,n.style)},[n.style]),null}P.memo(tf);function rf(n){const e=qe(({mapLib:t})=>new t.FullscreenControl({container:n.containerId&&document.getElementById(n.containerId)}),{position:n.position});return P.useEffect(()=>{fe(e._controlContainer,n.style)},[n.style]),null}P.memo(rf);function of(n,e){const t=P.useRef({props:n}),r=qe(({mapLib:o})=>{const i=new o.GeolocateControl(n),a=i._setupUI;return i._setupUI=()=>{i._container.hasChildNodes()||a()},i.on("geolocate",l=>{var u,c;(c=(u=t.current.props).onGeolocate)==null||c.call(u,l)}),i.on("error",l=>{var u,c;(c=(u=t.current.props).onError)==null||c.call(u,l)}),i.on("outofmaxbounds",l=>{var u,c;(c=(u=t.current.props).onOutOfMaxBounds)==null||c.call(u,l)}),i.on("trackuserlocationstart",l=>{var u,c;(c=(u=t.current.props).onTrackUserLocationStart)==null||c.call(u,l)}),i.on("trackuserlocationend",l=>{var u,c;(c=(u=t.current.props).onTrackUserLocationEnd)==null||c.call(u,l)}),i},{position:n.position});return t.current.props=n,P.useImperativeHandle(e,()=>r,[]),P.useEffect(()=>{fe(r._container,n.style)},[n.style]),null}P.memo(P.forwardRef(of));function af(n){const e=qe(({mapLib:t})=>new t.NavigationControl(n),{position:n.position});return P.useEffect(()=>{fe(e._container,n.style)},[n.style]),null}P.memo(af);function lf(n){const e=qe(({mapLib:i})=>new i.ScaleControl(n),{position:n.position}),t=P.useRef(n),r=t.current;t.current=n;const{style:o}=n;return n.maxWidth!==void 0&&n.maxWidth!==r.maxWidth&&(e.options.maxWidth=n.maxWidth),n.unit!==void 0&&n.unit!==r.unit&&e.setUnit(n.unit),P.useEffect(()=>{fe(e._container,o)},[o]),null}P.memo(lf);function uf(n){const e=qe(({mapLib:t})=>new t.TerrainControl(n),{position:n.position});return P.useEffect(()=>{fe(e._container,n.style)},[n.style]),null}P.memo(uf);function sf(n){const e=qe(({mapLib:t})=>new t.LogoControl(n),{position:n.position});return P.useEffect(()=>{fe(e._container,n.style)},[n.style]),null}P.memo(sf);function No(n,e){if(!n)throw new Error(e)}let cf=0;function df(n,e,t){if(n.style&&n.style._loaded){const r={...t};return delete r.id,delete r.children,n.addSource(e,r),n.getSource(e)}return null}function yf(n,e,t){var a,l,u;No(e.id===t.id,"source id changed"),No(e.type===t.type,"source type changed");let r="",o=0;for(const c in e)c!=="children"&&c!=="id"&&!xn(t[c],e[c])&&(r=c,o++);if(!o)return;const i=e.type;if(i==="geojson")n.setData(e.data);else if(i==="image")n.updateImage({url:e.url,coordinates:e.coordinates});else switch(r){case"coordinates":(a=n.setCoordinates)==null||a.call(n,e.coordinates);break;case"url":(l=n.setUrl)==null||l.call(n,e.url);break;case"tiles":(u=n.setTiles)==null||u.call(n,e.tiles);break;default:console.warn(`Unable to update <Source> prop: ${r}`)}}function wi(n){const e=P.useContext(Rt).map.getMap(),t=P.useRef(n),[,r]=P.useState(0),o=P.useMemo(()=>n.id||`jsx-source-${cf++}`,[]);P.useEffect(()=>{if(e){const a=()=>setTimeout(()=>r(l=>l+1),0);return e.on("styledata",a),a(),()=>{var l;if(e.off("styledata",a),e.style&&e.style._loaded&&e.getSource(o)){const u=(l=e.getStyle())==null?void 0:l.layers;if(u)for(const c of u)c.source===o&&e.removeLayer(c.id);e.removeSource(o)}}}},[e]);let i=e&&e.style&&e.getSource(o);return i?yf(i,n,t.current):i=df(e,o,n),t.current=n,i&&P.Children.map(n.children,a=>a&&P.cloneElement(a,{source:o}))||null}function pf(n,e,t,r){if(No(t.id===r.id,"layer id changed"),No(t.type===r.type,"layer type changed"),t.type==="custom"||r.type==="custom")return;const{layout:o={},paint:i={},filter:a,minzoom:l,maxzoom:u,beforeId:c}=t;if(c!==r.beforeId&&n.moveLayer(e,c),o!==r.layout){const m=r.layout||{};for(const p in o)xn(o[p],m[p])||n.setLayoutProperty(e,p,o[p]);for(const p in m)o.hasOwnProperty(p)||n.setLayoutProperty(e,p,void 0)}if(i!==r.paint){const m=r.paint||{};for(const p in i)xn(i[p],m[p])||n.setPaintProperty(e,p,i[p]);for(const p in m)i.hasOwnProperty(p)||n.setPaintProperty(e,p,void 0)}xn(a,r.filter)||n.setFilter(e,a),(l!==r.minzoom||u!==r.maxzoom)&&n.setLayerZoomRange(e,l,u)}function ff(n,e,t){if(n.style&&n.style._loaded&&(!("source"in t)||n.getSource(t.source))){const r={...t,id:e};delete r.beforeId,n.addLayer(r,t.beforeId)}}let gf=0;function ki(n){const e=P.useContext(Rt).map.getMap(),t=P.useRef(n),[,r]=P.useState(0),o=P.useMemo(()=>n.id||`jsx-layer-${gf++}`,[]);if(P.useEffect(()=>{if(e){const a=()=>r(l=>l+1);return e.on("styledata",a),a(),()=>{e.off("styledata",a),e.style&&e.style._loaded&&e.getLayer(o)&&e.removeLayer(o)}}},[e]),e&&e.style&&e.getLayer(o))try{pf(e,o,n,t.current)}catch(a){console.warn(a)}else ff(e,o,n);return t.current=n,null}const Fi={orange:"#FF6A00",rose:"#D44866",teal:"#009C76"},_o={500:"#ADB5BD",600:"#6C757D"},tt={successful:Fi.teal,failed:Fi.rose,attempted:Fi.orange,plot:_o[600],alleged:_o[600]},q={veryLow:"#22c55e",moderate:"#eab308",elevated:"#f97316",high:"#ef4444",null:_o[500]},mf=[{stop:0,color:q.veryLow,label:"< 5% (Very Low)"},{stop:.05,color:q.moderate,label:"5–15% (Moderate)"},{stop:.15,color:q.elevated,label:"15–30% (Elevated)"},{stop:.3,color:q.high,label:"> 30% (High)"}];function D(n){const e=Number(n);return isNaN(e)?0:e}function re(n,e=3){const t=Number(n);return isNaN(t)?"N/A":t.toFixed(e)}function hf({value:n,invert:e=!1}){const t=Math.min(Math.max(n,0),1)*100,r=e?n>.66?q.high:n>.33?q.moderate:q.veryLow:n>.66?q.veryLow:n>.33?q.moderate:q.high;return d.jsx("div",{className:C({width:"full",backgroundColor:"var(--colors-bg-active)",borderRadius:"full",height:"1.5",marginTop:"1"}),children:d.jsx("div",{className:C({height:"1.5",borderRadius:"full",transition:"all"}),style:{width:`${t}%`,backgroundColor:r}})})}function Gt({title:n,children:e}){return d.jsxs("div",{className:C({marginBottom:"5"}),children:[d.jsx("h3",{className:C({fontSize:"xs",fontWeight:"semibold",textTransform:"uppercase",letterSpacing:"widest",color:"var(--colors-accent-text)",marginBottom:"3"}),children:n}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"3"}),children:e})]})}function Z({label:n,value:e,display:t,bar:r,invert:o}){return d.jsxs("div",{children:[d.jsxs("div",{className:C({display:"flex",justifyContent:"space-between",alignItems:"center"}),children:[d.jsx("span",{className:C({fontSize:"sm",color:"var(--colors-text-muted)"}),children:n}),d.jsx("span",{className:C({fontSize:"sm",fontWeight:"medium",color:"var(--colors-text-primary)"}),children:t})]}),r&&d.jsx(hf,{value:e,invert:o})]})}function Cf({prediction:n,onClose:e}){if(!n)return null;const t=n.prediction_prob,r=t!=null&&isFinite(t),o=r?t<.05?"Very Low":t<.15?"Moderate":t<.3?"Elevated":"High":"Unknown",i=r?t<.05?q.veryLow:t<.15?q.moderate:t<.3?q.elevated:q.high:q.null,a=r?t<.05?q.veryLow:t<.15?q.moderate:t<.3?q.elevated:q.high:q.null,l=n.liberal_democracy?"Liberal Democracy":n.electoral_democracy?"Electoral Democracy":n.electoral_autocracy?"Electoral Autocracy":n.closed_autocracy?"Closed Autocracy":"Unknown";return d.jsxs("div",{className:C({position:"absolute",right:"0",top:"0",height:"full",width:"80",backgroundColor:"var(--colors-bg-panel)",borderLeftWidth:"1px",borderLeftStyle:"solid",borderLeftColor:"var(--colors-border-default)",zIndex:"10",display:"flex",flexDirection:"column",boxShadow:"var(--shadows-xl)"}),children:[d.jsxs("div",{className:C({display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"4",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)"}),children:[d.jsxs("div",{children:[d.jsx("h2",{className:C({fontWeight:"bold",color:"var(--colors-text-primary)",fontSize:"xl"}),children:n.country}),d.jsxs("p",{className:C({fontSize:"xs",color:"var(--colors-text-muted)",marginTop:"0.5"}),children:[n.year," · Month ",n.month]})]}),d.jsx("button",{onClick:e,className:C({fontSize:"lg",marginTop:"0.5",cursor:"pointer",color:"var(--colors-text-muted)",_hover:{color:"var(--colors-text-primary)"}}),children:"✕"})]}),d.jsxs("div",{className:C({paddingInline:"4",paddingBlock:"3",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-subtle)"}),children:[d.jsxs("div",{className:C({display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1"}),children:[d.jsx("span",{className:C({fontSize:"sm",color:"var(--colors-text-muted)"}),children:"Coup Probability"}),d.jsx("span",{className:C({fontWeight:"bold",fontSize:"lg"}),style:{color:i},children:r?`${(t*100).toFixed(4)}%`:"N/A"})]}),d.jsx("div",{className:C({width:"full",backgroundColor:"var(--colors-bg-active)",borderRadius:"full",height:"2"}),children:d.jsx("div",{className:C({height:"2",borderRadius:"full",transition:"all"}),style:{width:r?`${Math.min(t/.3,1)*100}%`:"0%",backgroundColor:a}})}),d.jsxs("p",{className:C({fontSize:"xs",marginTop:"1",fontWeight:"medium"}),style:{color:i},children:[o," Risk"]})]}),d.jsxs("div",{className:C({flex:"1",overflowY:"auto",padding:"4"}),children:[d.jsxs(Gt,{title:"Governance",children:[d.jsx(Z,{label:"Regime Type",value:0,display:l}),d.jsx(Z,{label:"Democracy Level",value:D(n.Democracy_level),display:re(n.Democracy_level),bar:!0}),d.jsx(Z,{label:"Military Regime",value:D(n.Military_regime),display:D(n.Military_regime)===1?"Yes":"No"}),d.jsx(Z,{label:"Military Influence",value:D(n.Military_influence),display:D(n.Military_influence)===1?"Yes":"No"}),d.jsx(Z,{label:"Leader Age",value:D(n.Leader_age)/100,display:n.Leader_age!=null?`${n.Leader_age} years`:"N/A"}),d.jsx(Z,{label:"Leader Duration",value:D(n.Leader_duration)/30,display:n.Leader_duration!=null?`${n.Leader_duration} years`:"N/A"})]}),d.jsxs(Gt,{title:"Economy",children:[d.jsx(Z,{label:"GDP per Capita (log)",value:0,display:re(n.GDP_per_cap,4)}),d.jsx(Z,{label:"Change in GDP per Capita",value:(D(n.Change_GDP_per_cap)+.2)/.4,display:n.Change_GDP_per_cap!=null?`${(D(n.Change_GDP_per_cap)*100).toFixed(2)}%`:"N/A",bar:!0}),d.jsx(Z,{label:"Inflation",value:Math.min(D(n.Inflation)/20,1),display:n.Inflation!=null?`${D(n.Inflation).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),d.jsx(Z,{label:"Trade (% of GDP)",value:Math.min(D(n.Trade)/100,1),display:n.Trade!=null?`${D(n.Trade).toFixed(2)}%`:"N/A",bar:!0})]}),d.jsxs(Gt,{title:"Society",children:[d.jsx(Z,{label:"Women's Political Participation",value:D(n.Women_political_participation),display:re(n.Women_political_participation),bar:!0}),d.jsx(Z,{label:"Women's Civil Liberties",value:D(n.wom_civlib),display:re(n.wom_civlib),bar:!0}),d.jsx(Z,{label:"Women's Political Employment",value:D(n.women_polemp),display:re(n.women_polemp),bar:!0}),d.jsx(Z,{label:"Protests",value:Math.min(D(n.Protests)/5,1),display:re(n.Protests),bar:!0,invert:!0}),d.jsx(Z,{label:"Civil Wars",value:D(n.Civil_wars),display:D(n.Civil_wars)===1?"Yes":"No"})]}),d.jsxs(Gt,{title:"Military",children:[d.jsx(Z,{label:"Military Expenditure",value:Math.min(D(n.milex)/30,1),display:n.milex!=null?`${D(n.milex).toFixed(2)}%`:"N/A",bar:!0,invert:!0}),d.jsx(Z,{label:"Military Personnel",value:Math.min(D(n.milper)/10,1),display:re(n.milper,4),bar:!0}),d.jsx(Z,{label:"Soldier Quality",value:Math.min(D(n.solqual)/5,1),display:re(n.solqual,4),bar:!0}),d.jsx(Z,{label:"Mobilization Concentration",value:D(n.mobil_conc),display:re(n.mobil_conc),bar:!0})]}),d.jsxs(Gt,{title:"Context",children:[d.jsx(Z,{label:"Neighboring Coup",value:D(n.neighboring_coup),display:D(n.neighboring_coup)===1?"Yes":"No"}),d.jsx(Z,{label:"Cold War Period",value:D(n.Cold_war),display:D(n.Cold_war)===1?"Yes":"No"}),d.jsx(Z,{label:"Foreign Visit",value:D(n.visit),display:D(n.visit)===1?"Yes":"No"})]})]})]})}const De=tt,rt={successful:"Successful",failed:"Failed",attempted:"Attempted",plot:"Plot",alleged:"Alleged"},vf=mf,Fd=_o[500],Ht=Sl({base:{display:"inline-flex",alignItems:"center",gap:"1",borderRadius:"full",paddingInline:"2",paddingBlock:"0.5",fontSize:"xs",fontWeight:"medium"},variants:{outcome:{successful:{backgroundColor:"color-mix(in srgb, #009C76 15%, transparent)",color:"color-mix(in srgb, #009C76 80%, #343A40)"},failed:{backgroundColor:"color-mix(in srgb, #D44866 15%, transparent)",color:"color-mix(in srgb, #D44866 80%, #343A40)"},attempted:{backgroundColor:"color-mix(in srgb, #FF6A00 15%, transparent)",color:"color-mix(in srgb, #FF6A00 80%, #343A40)"},plot:{backgroundColor:"color-mix(in srgb, #6C757D 15%, transparent)",color:"#6C757D"},alleged:{backgroundColor:"color-mix(in srgb, #6C757D 15%, transparent)",color:"#6C757D"}}},defaultVariants:{outcome:"plot"}}),Wt=Sl({base:{display:"inline-block",height:"1.5",width:"1.5",borderRadius:"full",flexShrink:"0"},variants:{outcome:{successful:{backgroundColor:"#009C76"},failed:{backgroundColor:"#D44866"},attempted:{backgroundColor:"#FF6A00"},plot:{backgroundColor:"#ADB5BD"},alleged:{backgroundColor:"#ADB5BD"}}},defaultVariants:{outcome:"plot"}}),Ad={successful:{color:tt.successful,label:rt.successful,badgeClass:Ht({outcome:"successful"}),dotClass:Wt({outcome:"successful"})},failed:{color:tt.failed,label:rt.failed,badgeClass:Ht({outcome:"failed"}),dotClass:Wt({outcome:"failed"})},attempted:{color:tt.attempted,label:rt.attempted,badgeClass:Ht({outcome:"attempted"}),dotClass:Wt({outcome:"attempted"})},plot:{color:tt.plot,label:rt.plot,badgeClass:Ht({outcome:"plot"}),dotClass:Wt({outcome:"plot"})},alleged:{color:tt.alleged,label:rt.alleged,badgeClass:Ht({outcome:"alleged"}),dotClass:Wt({outcome:"alleged"})}};function Ed(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}const Sf=C({minWidth:"240px",maxWidth:"min(320px, calc(100vw - 2rem))",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",boxShadow:"var(--shadows-xl)",paddingTop:"7",paddingRight:"7",paddingBottom:"3",paddingLeft:"3",fontFamily:"var(--fonts-sans)"}),Pf=C({fontSize:"xs",color:"var(--colors-text-subtle)",fontFamily:"var(--fonts-mono)"}),xf=C({marginTop:"1",fontSize:"sm",fontWeight:"bold",color:"var(--colors-text-primary)"}),wf=C({marginTop:"1.5",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"1.5"}),kf=C({borderRadius:"full",backgroundColor:"var(--colors-bg-muted)",paddingInline:"2",paddingBlock:"0.5",fontSize:"xs",color:"var(--colors-text-muted)"}),Ff=C({marginTop:"1.5",fontSize:"xs",color:"var(--colors-text-muted)",lineHeight:"relaxed",overflow:"hidden",display:"-webkit-box",WebkitLineClamp:"2"}),Af=C({marginTop:"1.5",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1",fontSize:"xs",color:"var(--colors-text-subtle)"});function Ef({event:n}){const e=Ad[n.outcome];return d.jsxs("div",{className:`popup-enter ${Sf}`,children:[d.jsx("div",{className:Pf,children:n.id}),d.jsx("h3",{className:xf,children:n.country}),d.jsxs("div",{className:wf,children:[d.jsxs("span",{className:e.badgeClass,children:[d.jsx("span",{className:e.dotClass}),e.label]}),d.jsx("span",{className:kf,children:"Geolocated"})]}),n.description&&d.jsx("p",{className:Ff,style:{WebkitBoxOrient:"vertical"},children:n.description}),d.jsxs("div",{className:Af,children:[d.jsx(bf,{className:C({height:"3.5",width:"3.5",flexShrink:"0"})}),Ed(n.date)]})]})}function bf({className:n}){return d.jsx("svg",{className:n,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":!0,children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}const Qu=n=>{let e;const t=new Set,r=(c,m)=>{const p=typeof c=="function"?c(e):c;if(!Object.is(p,e)){const g=e;e=m??(typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(v=>v(e,g))}},o=()=>e,l={setState:r,getState:o,getInitialState:()=>u,subscribe:c=>(t.add(c),()=>t.delete(c))},u=e=n(r,o,l);return l},Vf=n=>n?Qu(n):Qu,Nf=n=>n;function _f(n,e=Nf){const t=br.useSyncExternalStore(n.subscribe,br.useCallback(()=>e(n.getState()),[n,e]),br.useCallback(()=>e(n.getInitialState()),[n,e]));return br.useDebugValue(t),t}const $u=n=>{const e=Vf(n),t=r=>_f(e,r);return Object.assign(t,e),t},Tf=n=>n?$u(n):$u,Pa=[1950,2030];function Rf(n){if(n.length===0)return Pa;const e=Math.min(...n),t=Math.max(...n);return[e,t+9]}const R=Tf(n=>({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:Pa,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026],viewMode:"events",setYearRange:e=>n({yearRange:e}),setSearchQuery:e=>n({searchQuery:e}),toggleOutcome:e=>n(t=>({selectedOutcomes:t.selectedOutcomes.includes(e)?t.selectedOutcomes.filter(r=>r!==e):[...t.selectedOutcomes,e]})),toggleRegion:e=>n(t=>({selectedRegions:t.selectedRegions.includes(e)?t.selectedRegions.filter(r=>r!==e):[...t.selectedRegions,e]})),toggleDecade:e=>n(t=>{const r=t.selectedDecades.includes(e)?t.selectedDecades.filter(o=>o!==e):[...t.selectedDecades,e].sort((o,i)=>o-i);return{selectedDecades:r,dateRange:Rf(r)}}),setDateRange:e=>n({dateRange:e}),toggleTag:e=>n(t=>({selectedTags:t.selectedTags.includes(e)?t.selectedTags.filter(r=>r!==e):[...t.selectedTags,e]})),reset:()=>n({searchQuery:"",selectedOutcomes:[],selectedRegions:[],selectedDecades:[],dateRange:Pa,selectedTags:[],selectedEvent:null,selectedCountry:null,yearRange:[1950,2026]}),setViewMode:e=>n({viewMode:e}),setSelectedEvent:e=>n({selectedEvent:e}),setSelectedCountry:e=>n({selectedCountry:e})})),Mf=["successful","failed"],Ku=C({position:"absolute",bottom:"20",right:"max(1rem, env(safe-area-inset-right))",zIndex:"10",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingInline:"3",paddingBlock:"2",boxShadow:"var(--shadows-lg)",backdropFilter:"blur(4px)",md:{bottom:"4",right:"4"}}),Zu=C({marginBottom:"1.5",fontSize:"xs",fontWeight:"medium",color:"var(--colors-text-muted)"}),Ai=C({display:"flex",alignItems:"center",gap:"2",fontSize:"xs",color:"var(--colors-text-secondary)"}),Xu=C({height:"2.5",width:"2.5",flexShrink:"0",borderRadius:"sm",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)"});function Lf(){return R(e=>e.viewMode)==="risk"?d.jsxs("div",{className:Ku,children:[d.jsx("div",{className:Zu,children:"Coup Risk"}),d.jsxs("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:[vf.map(({color:e,label:t})=>d.jsxs("div",{className:Ai,children:[d.jsx("span",{className:Xu,style:{backgroundColor:e}}),t]},t)),d.jsxs("div",{className:Ai,children:[d.jsx("span",{className:Xu,style:{backgroundColor:Fd}}),"No data"]})]})]}):d.jsxs("div",{className:Ku,children:[d.jsx("div",{className:Zu,children:"Outcome"}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:Mf.map(e=>d.jsxs("div",{className:Ai,children:[d.jsx("span",{className:C({height:"2.5",width:"2.5",flexShrink:"0",borderRadius:"full",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)"}),style:{backgroundColor:De[e]}}),rt[e]]},e))})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bd=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=P.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},u)=>P.createElement("svg",{ref:u,...jf,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:bd("lucide",o),...l},[...a.map(([c,m])=>P.createElement(c,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(n,e)=>{const t=P.forwardRef(({className:r,...o},i)=>P.createElement(If,{ref:i,iconNode:e,className:bd(`lucide-${Bf(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Kn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=Kn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=Kn("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=Kn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=Kn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=Kn("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=Kn("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Kn("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Kn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=Kn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=Kn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ju=[{id:"home",icon:xa,label:"Home"},{id:"events",icon:Gf,label:"Events"},{id:"filters",icon:Of,label:"Filters"},{id:"about",icon:zf,label:"About"}],qu=C({display:"flex",height:"9",width:"9",flexShrink:"0",alignItems:"center",justifyContent:"center",borderRadius:"lg",backgroundColor:"var(--colors-accent-muted)",color:"var(--colors-accent-text)"});function $f({activeNav:n,onNavChange:e}){const[t,r]=P.useState(!1);return d.jsxs("aside",{className:C({display:"flex",height:"14",width:"full",flexShrink:"0",flexDirection:"row",alignItems:"center",justifyContent:"space-around",borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingBottom:"env(safe-area-inset-bottom)",transition:"width 300ms ease-in-out",md:{height:"full",flexDirection:"column",justifyContent:"flex-start",borderTopWidth:"0",borderRightWidth:"1px",borderRightStyle:"solid",borderRightColor:"var(--colors-border-default)",paddingBottom:"0",width:t?"72px":"280px"}}),children:[d.jsxs("div",{className:C({display:"flex",flex:"1",alignItems:"center",justifyContent:"space-around",gap:"0",md:{display:"none"}}),children:[d.jsx("div",{className:qu,children:d.jsx(xa,{className:C({height:"5",width:"5"})})}),Ju.map(({id:o,icon:i,label:a})=>{const l=n===o;return d.jsx("button",{type:"button",onClick:()=>e(o),className:C({display:"flex",minHeight:"44px",minWidth:"44px",flexShrink:"0",alignItems:"center",justifyContent:"center",borderRadius:"lg",cursor:"pointer",color:l?"var(--colors-accent-text)":"var(--colors-text-muted)",_hover:{backgroundColor:"var(--colors-bg-hover)"}}),title:a,children:d.jsx(i,{className:C({height:"5",width:"5"})})},o)})]}),d.jsxs("div",{className:C({display:"none",md:{display:"flex",height:"full",width:"full",flexDirection:"column"}}),children:[d.jsxs("div",{className:C({display:"flex",minHeight:"56px",alignItems:"center",gap:"3",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",paddingInline:"3"}),children:[d.jsx("div",{className:qu,children:d.jsx(xa,{className:C({height:"5",width:"5"})})}),!t&&d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm",fontWeight:"semibold",color:"var(--colors-text-primary)"}),children:"CoupView"})]}),d.jsx("nav",{className:C({display:"flex",flex:"1",flexDirection:"column",gap:"0.5",overflow:"hidden",paddingBlock:"2"}),children:Ju.map(({id:o,icon:i,label:a})=>{const l=n===o;return d.jsxs("button",{type:"button",onClick:()=>e(o),className:C({display:"flex",alignItems:"center",gap:"3",paddingInline:t?"0":"3",paddingBlock:"2.5",justifyContent:t?"center":"flex-start",textAlign:"left",cursor:"pointer",borderLeftWidth:"2px",borderLeftStyle:"solid",borderLeftColor:l?"var(--colors-accent-default)":"transparent",backgroundColor:l?"var(--colors-accent-muted)":"transparent",_hover:{backgroundColor:"var(--colors-bg-hover)",transform:"scale(1.02)"}}),title:t?a:void 0,children:[d.jsx(i,{className:C({height:"5",width:"5",flexShrink:"0",color:l?"var(--colors-accent-text)":"var(--colors-text-muted)"})}),!t&&d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm",color:l?"var(--colors-text-primary)":"var(--colors-text-secondary)"}),children:a})]},o)})}),d.jsxs("div",{className:C({borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"var(--colors-border-default)",paddingBlock:"2"}),children:[d.jsxs("button",{type:"button",className:C({display:"flex",width:"full",alignItems:"center",gap:"3",paddingInline:"3",paddingBlock:"2.5",textAlign:"left",cursor:"pointer",color:"var(--colors-text-muted)",_hover:{backgroundColor:"var(--colors-bg-hover)",color:"var(--colors-text-secondary)",transform:"scale(1.02)"}}),title:t?"Settings":void 0,children:[d.jsx(Yf,{className:C({height:"5",width:"5",flexShrink:"0"})}),!t&&d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm"}),children:"Settings"})]}),d.jsx("button",{type:"button",onClick:()=>r(o=>!o),className:C({display:"flex",width:"full",alignItems:"center",justifyContent:"center",gap:"3",paddingInline:"3",paddingBlock:"2.5",cursor:"pointer",color:"var(--colors-text-muted)",_hover:{backgroundColor:"var(--colors-bg-hover)",color:"var(--colors-text-secondary)"}}),title:t?"Expand sidebar":"Collapse sidebar",children:t?d.jsx(Wf,{className:C({height:"5",width:"5"})}):d.jsxs(d.Fragment,{children:[d.jsx(Hf,{className:C({height:"5",width:"5",flexShrink:"0"})}),d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm"}),children:"Collapse"})]})})]})]})]})}const Kf=C({display:"flex",minHeight:"44px",alignItems:"center",gap:"1.5",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-panel)",paddingInline:"3",paddingBlock:"2.5",fontSize:"sm",color:"var(--colors-text-secondary)",transition:"colors",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"}}),Zf=C({position:"absolute",left:"0",right:"0",top:"100%",zIndex:"50",marginTop:"1",minWidth:"0",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingBlock:"2",boxShadow:"var(--shadows-xl)",md:{left:"auto",minWidth:"180px"}});function Ur({label:n,children:e,className:t=""}){const[r,o]=P.useState(!1),i=P.useRef(null);return P.useEffect(()=>{const a=l=>{i.current&&!i.current.contains(l.target)&&o(!1)};if(r)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[r]),d.jsxs("div",{className:j1(C({position:"relative",flexShrink:"0"}),t),ref:i,children:[d.jsxs("button",{type:"button",onClick:()=>o(a=>!a),className:Kf,children:[n,d.jsx(Vd,{className:C({height:"4",width:"4",flexShrink:"0",transition:"transform"}),style:{transform:r?"rotate(180deg)":"rotate(0deg)"}})]}),r&&d.jsx("div",{className:Zf,children:e})]})}const Xf=C({display:"flex",cursor:"pointer",alignItems:"center",gap:"2",borderRadius:"sm",paddingInline:"2",paddingBlock:"1.5",_hover:{backgroundColor:"var(--colors-bg-hover)"}}),Jf=C({height:"4",width:"4",borderRadius:"sm",accentColor:"var(--colors-accent-default)",cursor:"pointer"}),qf=C({fontSize:"sm",color:"var(--colors-text-secondary)"});function we({label:n,checked:e,onChange:t}){return d.jsxs("label",{className:Xf,children:[d.jsx("input",{type:"checkbox",checked:e,onChange:t,className:Jf}),d.jsx("span",{className:qf,children:n})]})}const ng=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"}],eg=[1950,1960,1970,1980,1990,2e3,2010,2020],tg=C({position:"absolute",left:"0",right:"0",top:"0",zIndex:"10",display:"flex",flexDirection:"column",gap:"2",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",backgroundColor:"color-mix(in srgb, var(--colors-bg-app) 85%, transparent)",backdropFilter:"blur(8px)",paddingInline:"3",paddingBlock:"3",paddingTop:"max(0.75rem, env(safe-area-inset-top))",md:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:"4",paddingInline:"4"}}),rg=C({display:"flex",minWidth:"0",flex:"1",alignItems:"center"}),og=C({position:"relative",display:"flex",width:"full",maxWidth:"md",alignItems:"center"}),ig=C({minHeight:"44px",width:"full",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-panel)",paddingBlock:"2.5",paddingLeft:"9",paddingRight:"3",fontSize:"sm",color:"var(--colors-text-primary)",_placeholder:{color:"var(--colors-text-subtle)"},_focus:{outline:"none",borderColor:"var(--colors-accent-default)",boxShadow:"0 0 0 3px color-mix(in srgb, #FF6A00 15%, transparent)"}}),ag=C({display:"flex",minWidth:"0",flexShrink:"0",alignItems:"center",gap:"2",overflowX:"auto",paddingBottom:"1",md:{overflow:"visible",paddingBottom:"0"}}),lg=C({display:"flex",alignItems:"center",gap:"1",borderRadius:"lg",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-muted)",padding:"1"});function ns(n){return C({paddingInline:"3",paddingBlock:"1.5",borderRadius:"sm",fontSize:"sm",fontWeight:"medium",cursor:"pointer",...n?{backgroundColor:"var(--colors-accent-muted)",color:"var(--colors-accent-text)",borderWidth:"1px",borderStyle:"solid",borderColor:"color-mix(in srgb, #FF6A00 30%, transparent)"}:{color:"var(--colors-text-muted)",_hover:{color:"var(--colors-text-secondary)"}}})}function ug({regions:n,tags:e}){const t=R(h=>h.searchQuery),r=R(h=>h.setSearchQuery),o=R(h=>h.selectedOutcomes),i=R(h=>h.toggleOutcome),a=R(h=>h.selectedDecades),l=R(h=>h.toggleDecade),u=R(h=>h.selectedRegions),c=R(h=>h.toggleRegion),m=R(h=>h.selectedTags),p=R(h=>h.toggleTag),g=R(h=>h.viewMode),v=R(h=>h.setViewMode);return d.jsxs("div",{className:tg,children:[d.jsx("div",{className:rg,children:d.jsxs("div",{className:og,children:[d.jsx(Uf,{className:C({position:"absolute",left:"3",height:"4",width:"4",color:"var(--colors-text-subtle)"})}),d.jsx("input",{type:"search",value:t,onChange:h=>r(h.target.value),placeholder:"Search for anything...",className:ig})]})}),d.jsxs("div",{className:ag,children:[d.jsxs("div",{className:lg,children:[d.jsx("button",{onClick:()=>v("events"),className:ns(g==="events"),children:"Events"}),d.jsx("button",{onClick:()=>v("risk"),className:ns(g==="risk"),children:"Coup Risk"})]}),g==="events"&&d.jsxs(d.Fragment,{children:[d.jsx(Ur,{label:"Status",children:d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"0.5",paddingInline:"2"}),children:ng.map(({value:h,label:x})=>d.jsx(we,{label:x,checked:o.includes(h),onChange:()=>i(h)},h))})}),d.jsx(Ur,{label:"Date",children:d.jsx("div",{className:C({display:"flex",maxHeight:"48",flexDirection:"column",gap:"0.5",overflowY:"auto",paddingInline:"2",paddingBlock:"1"}),children:eg.map(h=>d.jsx(we,{label:`${h}s`,checked:a.includes(h),onChange:()=>l(h)},h))})}),d.jsx(Ur,{label:"Region",children:d.jsx("div",{className:C({display:"flex",maxHeight:"48",flexDirection:"column",gap:"0.5",overflowY:"auto",paddingInline:"2",paddingBlock:"1"}),children:n.length===0?d.jsx("span",{className:C({paddingInline:"2",paddingBlock:"2",fontSize:"sm",color:"var(--colors-text-subtle)"}),children:"No regions in data"}):n.map(h=>d.jsx(we,{label:h,checked:u.includes(h),onChange:()=>c(h)},h))})}),d.jsx(Ur,{label:"Tags",children:d.jsx("div",{className:C({display:"flex",maxHeight:"48",flexDirection:"column",gap:"0.5",overflowY:"auto",paddingInline:"2",paddingBlock:"1"}),children:e.length===0?d.jsx("span",{className:C({paddingInline:"2",paddingBlock:"2",fontSize:"sm",color:"var(--colors-text-subtle)"}),children:"No tags in data"}):e.map(h=>d.jsx(we,{label:h,checked:m.includes(h),onChange:()=>p(h)},h))})})]})]})]})}function Nd(n,e){if(!e.trim())return!0;const t=e.trim().toLowerCase(),r=(n.title??"").toLowerCase(),o=(n.country??"").toLowerCase(),i=(n.description??"").toLowerCase(),a=(n.tags??[]).join(" ").toLowerCase();return r.includes(t)||o.includes(t)||i.includes(t)||a.includes(t)}function sg(n,e){return e.length===0?!0:e.includes(n.outcome)}function cg(n,e){return e.length===0?!0:e.includes(n.region)}function dg(n,[e,t]){return n.year>=e&&n.year<=t}function yg(n,e){if(e.length===0)return!0;const t=n.tags??[];return e.some(r=>t.includes(r))}function pg(n,e){return n.filter(t=>Nd(t,e.searchQuery)&&sg(t,e.selectedOutcomes)&&cg(t,e.selectedRegions)&&dg(t,e.dateRange)&&yg(t,e.selectedTags))}function fg(n,e){const t=[];if(n.selectedOutcomes.length>0){const a=["in",["get","outcome"],["literal",n.selectedOutcomes]];t.push(a)}if(n.selectedRegions.length>0){const a=["in",["get","region"],["literal",n.selectedRegions]];t.push(a)}const[r,o]=n.dateRange,i=["all",[">=",["get","year"],r],["<=",["get","year"],o]];if(t.push(i),n.selectedTags.length>0){const a=new Set(e.filter(l=>{const u=l.tags??[];return n.selectedTags.some(c=>u.includes(c))}).map(l=>l.id));if(a.size>0){const l=["in",["get","id"],["literal",Array.from(a)]];t.push(l)}}if(n.searchQuery.trim()){const a=new Set(e.filter(l=>Nd(l,n.searchQuery)).map(l=>l.id));if(a.size>0){const l=["in",["get","id"],["literal",Array.from(a)]];t.push(l)}else return["==",["literal",!0],!1]}if(t.length!==0)return t.length===1?t[0]:["all",...t]}function gg(n){if(!n||n.length!==2)return"🏳️";const e=127462,t=e+n.toUpperCase().charCodeAt(0)-65,r=e+n.toUpperCase().charCodeAt(1)-65;return String.fromCodePoint(t,r)}const mg=C({display:"flex",width:"full",flexShrink:"0",flexDirection:"column",borderRightWidth:"1px",borderRightStyle:"solid",borderRightColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",md:{width:"320px"}}),hg=C({display:"flex",minHeight:"44px",alignItems:"center",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",paddingInline:"3",paddingBlock:"2.5",md:{paddingInline:"4",paddingBlock:"3"}}),Cg=C({display:"flex",minHeight:"44px",minWidth:"44px",alignItems:"center",justifyContent:"center",gap:"1",borderRadius:"sm",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-muted)",paddingInline:"2",paddingBlock:"1.5",fontSize:"xs",color:"var(--colors-text-secondary)",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"},md:{minHeight:"auto",minWidth:"auto",justifyContent:"flex-start"}}),vg=C({position:"absolute",right:"0",top:"100%",zIndex:"50",marginTop:"1",minWidth:"140px",borderRadius:"sm",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingBlock:"1",boxShadow:"var(--shadows-xl)"}),Sg=C({width:"full",paddingInline:"3",paddingBlock:"1.5",textAlign:"left",fontSize:"sm",color:"var(--colors-text-secondary)",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"}}),Pg=C({display:"flex",minHeight:"52px",width:"full",flexDirection:"column",justifyContent:"center",gap:"1",paddingInline:"4",paddingBlock:"3.5",textAlign:"left",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"}});function xg({allEvents:n,mapRef:e}){const[t,r]=P.useState("date-desc"),[o,i]=P.useState(!1),a=R(F=>F.searchQuery),l=R(F=>F.selectedOutcomes),u=R(F=>F.selectedRegions),c=R(F=>F.dateRange),m=R(F=>F.selectedTags),p=R(F=>F.setSelectedEvent),g=P.useMemo(()=>pg(n,{searchQuery:a,selectedOutcomes:l,selectedRegions:u,dateRange:c,selectedTags:m}),[n,a,l,u,c,m]),v=P.useMemo(()=>{const F=[...g];return t==="date-desc"?F.sort((y,s)=>new Date(s.date).getTime()-new Date(y.date).getTime()):t==="date-asc"?F.sort((y,s)=>new Date(y.date).getTime()-new Date(s.date).getTime()):t==="country-asc"&&F.sort((y,s)=>y.country.localeCompare(s.country)),F},[g,t]),h=F=>{var s;const y=(s=e.current)==null?void 0:s.getMap();y&&y.flyTo({center:[F.longitude,F.latitude],zoom:5,duration:800}),p(F)},x=t==="date-desc"?"Newest first":t==="date-asc"?"Oldest first":"Country A–Z";return d.jsxs("div",{className:mg,children:[d.jsx("div",{className:C({display:"flex",flexShrink:"0",justifyContent:"center",paddingTop:"2",md:{display:"none"}}),"aria-hidden":!0,children:d.jsx("div",{className:C({height:"1",width:"10",borderRadius:"full",backgroundColor:"var(--colors-bg-active)"})})}),d.jsxs("div",{className:hg,children:[d.jsxs("span",{className:C({fontSize:"sm",fontWeight:"medium",color:"var(--colors-text-secondary)"}),children:[v.length," event",v.length!==1?"s":""]}),d.jsxs("div",{className:C({position:"relative"}),children:[d.jsxs("button",{type:"button",onClick:()=>i(F=>!F),className:Cg,children:[x,d.jsx(Vd,{className:C({height:"3.5",width:"3.5"})})]}),o&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:C({position:"fixed",inset:"0",zIndex:"40"}),"aria-hidden":!0,onClick:()=>i(!1)}),d.jsx("div",{className:vg,children:[["date-desc","Newest first"],["date-asc","Oldest first"],["country-asc","Country A–Z"]].map(([F,y])=>d.jsx("button",{type:"button",onClick:()=>{r(F),i(!1)},className:Sg,children:y},F))})]})]})]}),d.jsx("div",{className:"panel-scroll",style:{flex:1,overflowY:"auto"},children:v.length===0?d.jsxs("div",{className:C({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2",paddingInline:"4",paddingBlock:"12",textAlign:"center",fontSize:"sm",color:"var(--colors-text-subtle)"}),children:[d.jsx("p",{children:"No events match the current filters."}),d.jsx("p",{className:C({fontSize:"xs"}),children:"Try adjusting search or filters."})]}):d.jsx("ul",{className:C({"& > li + li":{borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"var(--colors-border-default)"}}),children:v.map(F=>{const y=Ad[F.outcome];return d.jsx("li",{children:d.jsxs("button",{type:"button",onClick:()=>h(F),className:Pg,children:[d.jsxs("div",{className:C({display:"flex",alignItems:"center",gap:"2"}),children:[d.jsx("span",{className:C({fontSize:"lg",lineHeight:"none"}),children:gg(F.countryCode)}),d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm",fontWeight:"medium",color:"var(--colors-text-primary)"}),children:F.country})]}),d.jsxs("div",{className:C({display:"flex",flexWrap:"wrap",alignItems:"center",gap:"2"}),children:[d.jsx("span",{className:y.badgeClass,children:y.label}),d.jsx("span",{className:C({fontSize:"xs",color:"var(--colors-text-subtle)"}),children:Ed(F.date)})]}),F.description&&d.jsx("p",{className:C({overflow:"hidden",display:"-webkit-box",WebkitLineClamp:"1",fontSize:"xs",color:"var(--colors-text-muted)"}),style:{WebkitBoxOrient:"vertical"},children:F.description})]})},F.id)})})})]})}const wg=C({display:"flex",width:"full",flexShrink:"0",flexDirection:"column",borderLeftWidth:"1px",borderLeftStyle:"solid",borderLeftColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",md:{width:"320px"}}),kg=C({display:"flex",minHeight:"44px",alignItems:"center",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",paddingInline:"3",paddingBlock:"2.5",md:{paddingInline:"4",paddingBlock:"3"}}),Fg=C({display:"flex",minHeight:"44px",minWidth:"44px",alignItems:"center",justifyContent:"center",borderRadius:"sm",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-muted)",padding:"1",color:"var(--colors-text-muted)",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"},md:{minHeight:"auto",minWidth:"auto"}});function Ag({country:n,events:e,onClose:t}){return d.jsxs("div",{className:wg,children:[d.jsxs("div",{className:kg,children:[d.jsx("span",{className:C({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"sm",fontWeight:"medium",color:"var(--colors-text-secondary)"}),children:n}),d.jsx("button",{type:"button",onClick:t,className:Fg,children:d.jsx(Qf,{className:C({height:"4",width:"4"})})})]}),d.jsx("div",{className:C({minHeight:"0",flex:"1",overflowY:"auto",paddingInline:"3",paddingBlock:"3",md:{paddingInline:"4"}}),children:d.jsxs("div",{className:C({fontSize:"sm",color:"var(--colors-text-secondary)"}),children:[d.jsxs("p",{className:C({marginBottom:"2"}),children:[d.jsx("span",{className:C({fontWeight:"medium",color:"var(--colors-text-primary)"}),children:e.length})," ","coup",e.length!==1?"s":""," in this country"]}),d.jsx("p",{className:C({fontSize:"xs",color:"var(--colors-text-subtle)"}),children:"Country details coming soon..."})]})})]})}const Eg=[{value:"successful",label:"Successful"},{value:"failed",label:"Failed"},{value:"attempted",label:"Attempted"},{value:"plot",label:"Plot"},{value:"alleged",label:"Alleged"}],bg=[1950,1960,1970,1980,1990,2e3,2010,2020],Ut=C({marginBottom:"2",fontSize:"xs",fontWeight:"semibold",textTransform:"uppercase",letterSpacing:"wide",color:"var(--colors-text-muted)"}),Ei=C({borderRadius:"full",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-muted)",paddingInline:"3",paddingBlock:"1",fontSize:"xs",color:"var(--colors-text-secondary)",cursor:"pointer",transition:"background-color",_hover:{backgroundColor:"var(--colors-bg-hover)"}});function Vg({onClose:n,regions:e,tags:t}){const r=R(s=>s.selectedOutcomes),o=R(s=>s.toggleOutcome),i=R(s=>s.selectedDecades),a=R(s=>s.toggleDecade),l=R(s=>s.selectedRegions),u=R(s=>s.toggleRegion),c=R(s=>s.selectedTags),m=R(s=>s.toggleTag),p=R(s=>s.yearRange),g=R(s=>s.setYearRange),v=R(s=>s.reset),h=1950,x=2026,F=(p[0]-h)/(x-h)*100,y=(p[1]-h)/(x-h)*100;return d.jsxs("div",{className:C({display:"flex",height:"full",width:"full",flexDirection:"column",backgroundColor:"var(--colors-bg-panel)",color:"var(--colors-text-primary)"}),children:[d.jsxs("div",{className:C({display:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"var(--colors-border-default)",paddingInline:"4",paddingBlock:"3"}),children:[d.jsxs("div",{children:[d.jsx("h2",{className:C({fontSize:"sm",fontWeight:"semibold",color:"var(--colors-text-primary)"}),children:"Filters"}),d.jsx("p",{className:C({fontSize:"xs",color:"var(--colors-text-muted)"}),children:"Advanced filtering options"})]}),d.jsxs("div",{className:C({display:"flex",alignItems:"center",gap:"2"}),children:[d.jsx("button",{type:"button",onClick:v,className:C({borderRadius:"md",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-strong)",backgroundColor:"var(--colors-bg-muted)",paddingInline:"3",paddingBlock:"1.5",fontSize:"xs",color:"var(--colors-text-secondary)",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)"}}),children:"Reset"}),d.jsx("button",{type:"button",onClick:n,className:C({borderRadius:"md",paddingInline:"3",paddingBlock:"1.5",fontSize:"sm",color:"var(--colors-text-secondary)",cursor:"pointer",_hover:{backgroundColor:"var(--colors-bg-hover)",color:"var(--colors-text-primary)"}}),children:"Close"})]})]}),d.jsx("div",{className:C({flex:"1",overflowY:"auto",paddingInline:"4",paddingBlock:"4"}),children:d.jsxs("div",{className:C({display:"flex",flexDirection:"column",gap:"6"}),children:[d.jsxs("div",{children:[d.jsxs("div",{className:C({marginBottom:"3",display:"flex",alignItems:"center",justifyContent:"space-between"}),children:[d.jsx("h3",{className:Ut,children:"Timeline"}),d.jsxs("div",{className:C({borderRadius:"full",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-accent-muted)",backgroundColor:"var(--colors-accent-muted)",paddingInline:"3",paddingBlock:"1",fontSize:"xs",fontWeight:"medium",color:"var(--colors-accent-text)"}),children:[p[0]," — ",p[1]]})]}),d.jsxs("div",{className:C({borderRadius:"2xl",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-subtle)",padding:"4",boxShadow:"var(--shadows-sm)"}),children:[d.jsxs("div",{className:C({marginBottom:"4",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"xs",color:"var(--colors-text-subtle)"}),children:[d.jsx("span",{children:h}),d.jsx("span",{children:x})]}),d.jsxs("div",{className:C({position:"relative",height:"10"}),children:[d.jsx("div",{className:C({position:"absolute",top:"50%",left:"0",right:"0",height:"2",transform:"translateY(-50%)",borderRadius:"full",backgroundColor:"var(--colors-bg-active)"})}),d.jsx("div",{className:C({position:"absolute",top:"50%",height:"2",transform:"translateY(-50%)",borderRadius:"full",backgroundColor:"var(--colors-accent-default)"}),style:{left:`${F}%`,width:`${y-F}%`}}),d.jsx("input",{type:"range",min:h,max:x,value:p[0],onChange:s=>{const f=Number(s.target.value);f<=p[1]&&g([f,p[1]])},className:"timeline-slider",style:{position:"absolute",inset:0,width:"100%"}}),d.jsx("input",{type:"range",min:h,max:x,value:p[1],onChange:s=>{const f=Number(s.target.value);f>=p[0]&&g([p[0],f])},className:"timeline-slider",style:{position:"absolute",inset:0,width:"100%"}})]}),d.jsxs("div",{className:C({marginTop:"4",display:"flex",flexWrap:"wrap",gap:"2"}),children:[d.jsx("button",{type:"button",onClick:()=>g([1950,2026]),className:Ei,children:"All"}),d.jsx("button",{type:"button",onClick:()=>g([1950,1990]),className:Ei,children:"Cold War"}),d.jsx("button",{type:"button",onClick:()=>g([1991,2026]),className:Ei,children:"Post-1990"})]})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:Ut,children:"Status"}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:Eg.map(({value:s,label:f})=>d.jsx(we,{label:f,checked:r.includes(s),onChange:()=>o(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:Ut,children:"Date"}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:bg.map(s=>d.jsx(we,{label:`${s}s`,checked:i.includes(s),onChange:()=>a(s)},s))})]}),d.jsxs("div",{children:[d.jsx("h3",{className:Ut,children:"Region"}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:e.map(s=>d.jsx(we,{label:s,checked:l.includes(s),onChange:()=>u(s)},s))})]}),t.length>0&&d.jsxs("div",{children:[d.jsx("h3",{className:Ut,children:"Tags"}),d.jsx("div",{className:C({display:"flex",flexDirection:"column",gap:"1"}),children:t.map(s=>d.jsx(we,{label:s,checked:c.includes(s),onChange:()=>m(s)},s))})]})]})})]})}const es=C({position:"fixed",bottom:"0",left:"0",zIndex:"30",display:"flex",maxHeight:"85vh",width:"full",flexShrink:"0",overflow:"hidden",borderTopLeftRadius:"xl",borderTopRightRadius:"xl",borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingBottom:"env(safe-area-inset-bottom)",boxShadow:"var(--shadows-xl)",transition:"all 300ms ease-out",md:{position:"relative",bottom:"auto",left:"auto",maxHeight:"none",width:"320px",borderTopWidth:"0",borderTopLeftRadius:"0",borderTopRightRadius:"0",borderRightWidth:"1px",borderRightStyle:"solid",borderRightColor:"var(--colors-border-default)",paddingBottom:"0",boxShadow:"none"}}),Ng=C({position:"fixed",bottom:"0",right:"0",zIndex:"30",display:"flex",maxHeight:"85vh",width:"full",flexShrink:"0",overflow:"hidden",borderTopLeftRadius:"xl",borderTopRightRadius:"xl",borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"var(--colors-border-default)",backgroundColor:"var(--colors-bg-panel)",paddingBottom:"env(safe-area-inset-bottom)",boxShadow:"var(--shadows-xl)",transition:"all 300ms ease-out",md:{position:"relative",bottom:"auto",right:"auto",maxHeight:"none",width:"320px",borderTopWidth:"0",borderTopLeftRadius:"0",borderTopRightRadius:"0",borderLeftWidth:"1px",borderLeftStyle:"solid",borderLeftColor:"var(--colors-border-default)",paddingBottom:"0",boxShadow:"none"}});function _g({children:n,mapRef:e,allEvents:t}){const[r,o]=P.useState("home"),i=R(m=>m.selectedCountry),a=R(m=>m.setSelectedCountry),l=P.useMemo(()=>[...new Set(t.map(m=>m.region))].sort(),[t]),u=P.useMemo(()=>[...new Set(t.flatMap(m=>m.tags??[]))].sort(),[t]),c=P.useMemo(()=>t.filter(m=>m.country===i),[t,i]);return d.jsxs("div",{className:C({display:"flex",height:"100vh",width:"100vw",flexDirection:"column",overflow:"hidden",md:{flexDirection:"row"}}),children:[d.jsx($f,{activeNav:r,onNavChange:o}),d.jsxs("div",{className:C({display:"flex",minHeight:"0",minWidth:"0",flex:"1",flexDirection:"column"}),children:[d.jsx(ug,{regions:l,tags:u}),d.jsxs("div",{className:C({position:"relative",display:"flex",minHeight:"0",flex:"1",minWidth:"0"}),children:[r==="events"&&d.jsx("div",{className:es,children:d.jsx(xg,{allEvents:t,mapRef:e})}),i&&d.jsx("div",{className:Ng,children:d.jsx(Ag,{country:i,events:c,onClose:()=>a(null)})}),r==="filters"&&d.jsx("div",{className:es,children:d.jsx(Vg,{onClose:()=>o("home"),regions:l,tags:u})}),d.jsx("div",{className:C({minHeight:"0",minWidth:"0",flex:"1"}),children:n})]})]})]})}const Tg=`{
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
}`,Rg={2:{country:"United States of America",latitude:39.5,longitude:-98.35},20:{country:"Canada",latitude:60,longitude:-96},31:{country:"Bahamas",latitude:24.25,longitude:-76},40:{country:"Cuba",latitude:22,longitude:-80},41:{country:"Haiti",latitude:19,longitude:-72.33},42:{country:"Dominican Republic",latitude:19,longitude:-70.67},51:{country:"Jamaica",latitude:18.11,longitude:-77.3},52:{country:"Trinidad and Tobago",latitude:10.45,longitude:-61.33},53:{country:"Barbados",latitude:13.19,longitude:-59.54},54:{country:"Dominica",latitude:15.42,longitude:-61.37},55:{country:"Grenada",latitude:12.12,longitude:-61.68},56:{country:"St. Lucia",latitude:13.88,longitude:-60.97},57:{country:"St. Vincent and the Grenadines",latitude:13.25,longitude:-61.2},58:{country:"Antigua & Barbuda",latitude:17.07,longitude:-61.8},60:{country:"St. Kitts and Nevis",latitude:17.35,longitude:-62.78},70:{country:"Mexico",latitude:23.63,longitude:-102.55},80:{country:"Belize",latitude:17.25,longitude:-88.76},90:{country:"Guatemala",latitude:15.78,longitude:-90.23},91:{country:"Honduras",latitude:15.2,longitude:-86.24},92:{country:"El Salvador",latitude:13.79,longitude:-88.9},93:{country:"Nicaragua",latitude:12.87,longitude:-85.21},94:{country:"Costa Rica",latitude:9.75,longitude:-83.75},95:{country:"Panama",latitude:8.54,longitude:-80.78},100:{country:"Colombia",latitude:4,longitude:-72},101:{country:"Venezuela",latitude:8,longitude:-66},110:{country:"Guyana",latitude:5,longitude:-59},115:{country:"Suriname",latitude:4,longitude:-56},130:{country:"Ecuador",latitude:-2,longitude:-77.5},135:{country:"Peru",latitude:-9,longitude:-75},140:{country:"Brazil",latitude:-10,longitude:-55},145:{country:"Bolivia",latitude:-17,longitude:-65},150:{country:"Paraguay",latitude:-23,longitude:-58},155:{country:"Chile",latitude:-30,longitude:-71},160:{country:"Argentina",latitude:-34,longitude:-64},165:{country:"Uruguay",latitude:-33,longitude:-56},200:{country:"United Kingdom",latitude:54,longitude:-2},205:{country:"Ireland",latitude:53.41,longitude:-8.24},210:{country:"Netherlands",latitude:52.13,longitude:5.29},211:{country:"Belgium",latitude:50.5,longitude:4.47},212:{country:"Luxembourg",latitude:49.82,longitude:6.13},220:{country:"France",latitude:46.23,longitude:2.21},221:{country:"Monaco",latitude:43.74,longitude:7.41},223:{country:"Liechtenstein",latitude:47.14,longitude:9.55},225:{country:"Switzerland",latitude:46.82,longitude:8.23},230:{country:"Spain",latitude:40,longitude:-4},232:{country:"Andorra",latitude:42.55,longitude:1.57},235:{country:"Portugal",latitude:39.6,longitude:-8},240:{country:"Hanover",latitude:52.37,longitude:9.73},245:{country:"Bavaria",latitude:48.92,longitude:11.41},255:{country:"Germany",latitude:51.17,longitude:10.45},260:{country:"German Federal Republic",latitude:51.17,longitude:10.45},265:{country:"German Democratic Republic",latitude:52.17,longitude:12.63},267:{country:"Baden",latitude:48.52,longitude:8.05},269:{country:"Saxony",latitude:51.1,longitude:13.2},271:{country:"Wuerttemberg",latitude:48.66,longitude:9.35},273:{country:"Hesse Electoral",latitude:51.31,longitude:9.49},275:{country:"Hesse Grand Ducal",latitude:49.87,longitude:8.65},280:{country:"Mecklenburg Schwerin",latitude:53.61,longitude:11.41},290:{country:"Poland",latitude:52.22,longitude:19.14},300:{country:"Austria-Hungary",latitude:47.5,longitude:15},305:{country:"Austria",latitude:47.52,longitude:14.55},310:{country:"Hungary",latitude:47.16,longitude:19.5},315:{country:"Czechoslovakia",latitude:49.75,longitude:15.5},316:{country:"Czech Republic",latitude:49.82,longitude:15.47},317:{country:"Slovakia",latitude:48.67,longitude:19.7},325:{country:"Italy",latitude:42.83,longitude:12.83},327:{country:"Papal States",latitude:41.9,longitude:12.45},329:{country:"Two Sicilies",latitude:40.85,longitude:14.27},331:{country:"San Marino",latitude:43.76,longitude:12.7},332:{country:"Modena",latitude:44.65,longitude:10.92},335:{country:"Parma",latitude:44.8,longitude:10.33},337:{country:"Tuscany",latitude:43.77,longitude:11.25},338:{country:"Malta",latitude:35.94,longitude:14.38},339:{country:"Albania",latitude:41.15,longitude:20.17},341:{country:"Montenegro",latitude:42.71,longitude:19.37},343:{country:"Macedonia",latitude:41.61,longitude:21.75},344:{country:"Croatia",latitude:45.17,longitude:15.5},345:{country:"Yugoslavia",latitude:44.02,longitude:21.09},346:{country:"Bosnia and Herzegovina",latitude:44.17,longitude:17.77},347:{country:"Kosovo",latitude:42.58,longitude:20.9},349:{country:"Slovenia",latitude:46.15,longitude:14.99},350:{country:"Greece",latitude:39.07,longitude:21.82},352:{country:"Cyprus",latitude:35.13,longitude:33.43},355:{country:"Bulgaria",latitude:42.73,longitude:25.49},359:{country:"Moldova",latitude:47.41,longitude:28.37},360:{country:"Romania",latitude:45.94,longitude:24.97},365:{country:"Russia",latitude:60,longitude:100},366:{country:"Estonia",latitude:58.6,longitude:25.01},367:{country:"Latvia",latitude:56.88,longitude:24.6},368:{country:"Lithuania",latitude:55.17,longitude:23.88},369:{country:"Ukraine",latitude:48.38,longitude:31.17},370:{country:"Belarus",latitude:53.71,longitude:27.97},371:{country:"Armenia",latitude:40.07,longitude:45.04},372:{country:"Georgia",latitude:42.32,longitude:43.36},373:{country:"Azerbaijan",latitude:40.14,longitude:47.58},375:{country:"Finland",latitude:64,longitude:26},380:{country:"Sweden",latitude:62,longitude:15},385:{country:"Norway",latitude:64.57,longitude:17.89},390:{country:"Denmark",latitude:56.26,longitude:9.5},395:{country:"Iceland",latitude:65,longitude:-18},402:{country:"Cape Verde",latitude:16,longitude:-24},403:{country:"Sao Tome and Principe",latitude:.19,longitude:6.61},404:{country:"Guinea-Bissau",latitude:11.8,longitude:-15.18},411:{country:"Equatorial Guinea",latitude:1.65,longitude:10.27},420:{country:"Gambia",latitude:13.44,longitude:-15.31},432:{country:"Mali",latitude:17.57,longitude:-3.99},433:{country:"Senegal",latitude:14.5,longitude:-14.45},434:{country:"Benin",latitude:9.54,longitude:2.34},435:{country:"Mauritania",latitude:20.25,longitude:-10.34},436:{country:"Niger",latitude:17.61,longitude:8.08},437:{country:"Ivory Coast",latitude:7.54,longitude:-5.55},438:{country:"Guinea",latitude:11,longitude:-10.94},439:{country:"Burkina Faso",latitude:12.36,longitude:-1.53},450:{country:"Liberia",latitude:6.43,longitude:-9.43},451:{country:"Sierra Leone",latitude:8.46,longitude:-11.78},452:{country:"Ghana",latitude:7.95,longitude:-1.02},461:{country:"Togo",latitude:8,longitude:1.17},471:{country:"Cameroon",latitude:3.86,longitude:11.52},475:{country:"Nigeria",latitude:10,longitude:8.68},481:{country:"Gabon",latitude:-.8,longitude:11.61},482:{country:"Central African Republic",latitude:6.61,longitude:20.94},483:{country:"Chad",latitude:15.45,longitude:18.73},484:{country:"Congo",latitude:-.23,longitude:15.83},490:{country:"Democratic Republic of the Congo",latitude:-4.04,longitude:21.76},500:{country:"Uganda",latitude:1.37,longitude:32.29},501:{country:"Kenya",latitude:1,longitude:38},510:{country:"Tanzania",latitude:-6.37,longitude:34.89},511:{country:"Zanzibar",latitude:-6.16,longitude:39.19},516:{country:"Burundi",latitude:-3.38,longitude:29.92},517:{country:"Rwanda",latitude:-1.94,longitude:29.87},520:{country:"Somalia",latitude:5.15,longitude:46.2},522:{country:"Djibouti",latitude:11.83,longitude:42.59},530:{country:"Ethiopia",latitude:9.15,longitude:40.49},531:{country:"Eritrea",latitude:15.18,longitude:39.78},540:{country:"Angola",latitude:-11.2,longitude:17.87},541:{country:"Mozambique",latitude:-17.28,longitude:35.55},551:{country:"Zambia",latitude:-13.13,longitude:27.85},552:{country:"Zimbabwe",latitude:-19.02,longitude:29.15},553:{country:"Malawi",latitude:-13.25,longitude:34.3},560:{country:"South Africa",latitude:-28.47,longitude:24.68},565:{country:"Namibia",latitude:-22.96,longitude:18.49},570:{country:"Lesotho",latitude:-29.61,longitude:28.23},571:{country:"Botswana",latitude:-22.33,longitude:24.68},572:{country:"Swaziland",latitude:-26.52,longitude:31.47},580:{country:"Madagascar",latitude:-19.37,longitude:46.71},581:{country:"Comoros",latitude:-11.71,longitude:43.34},590:{country:"Mauritius",latitude:-20.35,longitude:57.59},591:{country:"Seychelles",latitude:-4.68,longitude:55.49},600:{country:"Morocco",latitude:31.79,longitude:-7.09},615:{country:"Algeria",latitude:28.03,longitude:1.66},616:{country:"Tunisia",latitude:34,longitude:9},620:{country:"Libya",latitude:26.34,longitude:17.23},625:{country:"Sudan",latitude:15.55,longitude:30.23},626:{country:"South Sudan",latitude:7,longitude:30},630:{country:"Iran",latitude:32.42,longitude:53.69},640:{country:"Turkey",latitude:38.96,longitude:35.24},645:{country:"Iraq",latitude:33.22,longitude:43.68},651:{country:"Egypt",latitude:26.82,longitude:30.8},652:{country:"Syria",latitude:34.8,longitude:39.06},660:{country:"Lebanon",latitude:33.87,longitude:35.86},663:{country:"Jordan",latitude:31.24,longitude:36.51},666:{country:"Israel",latitude:31.05,longitude:35},670:{country:"Saudi Arabia",latitude:24,longitude:45},678:{country:"Yemen Arab Republic",latitude:15.55,longitude:48.52},679:{country:"Yemen",latitude:15.55,longitude:48.52},680:{country:"Yemen People's Republic",latitude:13.5,longitude:44},690:{country:"Kuwait",latitude:29.31,longitude:47.48},692:{country:"Bahrain",latitude:26.03,longitude:50.55},694:{country:"Qatar",latitude:25.35,longitude:51.18},696:{country:"United Arab Emirates",latitude:24.47,longitude:54.37},698:{country:"Oman",latitude:21.51,longitude:57},700:{country:"Afghanistan",latitude:33.94,longitude:67.71},701:{country:"Turkmenistan",latitude:39.6,longitude:59.56},702:{country:"Tajikistan",latitude:38.86,longitude:71.28},703:{country:"Kyrgyzstan",latitude:41.2,longitude:74.77},704:{country:"Uzbekistan",latitude:41.38,longitude:64.59},705:{country:"Kazakhstan",latitude:48.02,longitude:66.92},710:{country:"China",latitude:35.86,longitude:104.2},712:{country:"Mongolia",latitude:46.86,longitude:103.85},713:{country:"Taiwan",latitude:23.7,longitude:121},730:{country:"Korea",latitude:36,longitude:127.5},731:{country:"North Korea",latitude:40.34,longitude:127.51},732:{country:"South Korea",latitude:36,longitude:127.5},740:{country:"Japan",latitude:36.2,longitude:138.25},750:{country:"India",latitude:22,longitude:78},760:{country:"Bhutan",latitude:27.51,longitude:90.43},770:{country:"Pakistan",latitude:30.38,longitude:69.35},771:{country:"Bangladesh",latitude:23.68,longitude:90.36},775:{country:"Myanmar",latitude:17.11,longitude:95.96},780:{country:"Sri Lanka",latitude:7.87,longitude:80.77},781:{country:"Maldives",latitude:3.2,longitude:73.22},790:{country:"Nepal",latitude:28.39,longitude:84.12},800:{country:"Thailand",latitude:15.87,longitude:100.99},811:{country:"Cambodia",latitude:12.57,longitude:104.99},812:{country:"Laos",latitude:17.97,longitude:102.64},816:{country:"Vietnam",latitude:16.16,longitude:107.84},817:{country:"Republic of Vietnam",latitude:12.7,longitude:108},820:{country:"Malaysia",latitude:2.53,longitude:112.5},830:{country:"Singapore",latitude:1.35,longitude:103.82},835:{country:"Brunei",latitude:4.94,longitude:114.95},840:{country:"Philippines",latitude:13,longitude:122},850:{country:"Indonesia",latitude:-2.55,longitude:118.02},860:{country:"East Timor",latitude:-8.87,longitude:125.73},900:{country:"Australia",latitude:-25.27,longitude:133.78},910:{country:"Papua New Guinea",latitude:-6.31,longitude:143.96},920:{country:"New Zealand",latitude:-40.9,longitude:174.89},935:{country:"Vanuatu",latitude:-15.38,longitude:166.96},940:{country:"Solomon Islands",latitude:-9.65,longitude:160.16},946:{country:"Kiribati",latitude:-3.37,longitude:-168.73},947:{country:"Tuvalu",latitude:-7.11,longitude:177.65},950:{country:"Fiji",latitude:-17.71,longitude:178.07},955:{country:"Tonga",latitude:-21.18,longitude:-175.2},970:{country:"Nauru",latitude:-.53,longitude:166.93},983:{country:"Marshall Islands",latitude:7.13,longitude:171.18},986:{country:"Palau",latitude:7.52,longitude:134.58},987:{country:"Federated States of Micronesia",latitude:6.89,longitude:158.22},990:{country:"Samoa",latitude:-13.76,longitude:-172.1}};function Mg(n){return Rg[n]}const _d={"ivory coast":"côte d'ivoire",swaziland:"eswatini","czech republic":"czechia",macedonia:"north macedonia",congo:"republic of the congo"};function Lg(n){const e=new Map;for(const t of n){const r=t.country.toLowerCase().trim(),o=_d[r]??r;e.set(o,t.prediction_prob??null)}return e}const wa=JSON.parse(Tg);function Bg(n){const e=new Set(n.map(t=>t.id));return{...wa,features:(wa.features??[]).filter(t=>e.has(t.properties.id))}}function jg(){return(wa.features??[]).map(n=>n.properties)}const Ig="https://raw.githubusercontent.com/thynec/CoupCats/refs/heads/main/recent_data.json";let Yr=null;function Dg(n){return{type:"FeatureCollection",features:n.map(t=>{const r=Mg(t.ccode);return r?{type:"Feature",id:"${p.ccode}-${p.year}-${p.month}",geometry:{type:"Point",coordinates:[r.longitude,r.latitude]},properties:{...t,prediction_prob:typeof t.prediction_prob=="number"&&isFinite(t.prediction_prob)?t.prediction_prob:null,latitude:r.latitude,longitude:r.longitude}}:null}).filter(t=>t!==null)}}async function Og(){if(Yr)return Yr;const n=await fetch(Ig);if(!n.ok)throw new Error("Failed to fetch predictions: ${response.status}");const e=await n.json();return Yr=Dg(e),Yr}function zg({mapRef:n,sourceId:e}){const[t,r]=P.useState(null),o=P.useCallback(a=>{var c,m;const l=(c=n.current)==null?void 0:c.getMap();if(!l||!((m=a.features)!=null&&m.length))return;const u=a.features[0];u.id!=null&&(t!=null&&t!==u.id&&l.setFeatureState({source:e,id:t},{hover:!1}),r(u.id),l.getCanvas().style.cursor="pointer",l.setFeatureState({source:e,id:u.id},{hover:!0}))},[t,n,e]),i=P.useCallback(()=>{var l;const a=(l=n.current)==null?void 0:l.getMap();a&&(t!=null&&(a.setFeatureState({source:e,id:t},{hover:!1}),r(null)),a.getCanvas().style.cursor="")},[t,n,e]);return{onMouseEnter:o,onMouseLeave:i}}function Gg(n){P.useEffect(()=>{const e=t=>{t.key==="Escape"&&n(null)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n])}function Hg({mapRef:n,layerIds:e,setSelectedEvent:t}){P.useEffect(()=>{var i;const r=(i=n.current)==null?void 0:i.getMap();if(!r)return;const o=a=>{r.queryRenderedFeatures([a.point.x,a.point.y],{layers:e}).length===0&&t(null)};return r.on("click",o),()=>{r.off("click",o)}},[e,n,t])}const Wg="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",Ug={"circle-radius":["case",["boolean",["feature-state","hover"],!1],14,10],"circle-color":["match",["get","outcome"],"successful",De.successful,"failed",De.failed,"attempted",De.attempted,"plot",De.plot,"alleged",De.alleged,De.alleged],"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-opacity":1},Yg={id:"country-risk-fill",type:"fill",paint:{"fill-color":["case",["==",["get","prediction_prob"],null],Fd,["interpolate",["linear"],["get","prediction_prob"],0,"#22c55e",.05,"#eab308",.15,"#f97316",.3,"#ef4444"]],"fill-opacity":.65}};function Qg(){const n=P.useRef(null),[e,t]=P.useState(!1),[r,o]=P.useState(null),i=P.useMemo(()=>jg(),[]),a=R(_=>_.yearRange),l=R(_=>_.viewMode),u=P.useMemo(()=>i.filter(_=>_.year>=a[0]&&_.year<=a[1]),[i,a]);P.useEffect(()=>{fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson").then(_=>_.json()).then(_=>o(_)).catch(_=>console.error("Failed to load countries GeoJSON:",_))},[]);const[c,m]=P.useState([]),[p,g]=P.useState(null);P.useEffect(()=>{Og().then(_=>{m((_.features??[]).map(en=>en.properties))}).catch(_=>console.error("Failed to load predictions:",_))},[]);const v=P.useMemo(()=>{if(!r||c.length===0)return null;const _=Lg(c);return{...r,features:r.features.map(en=>{var ln,On;const Sn=(((ln=en.properties)==null?void 0:ln.ADMIN)??"").toLowerCase().trim(),Zn=(((On=en.properties)==null?void 0:On.name)??"").toLowerCase().trim(),En=_.get(Sn)??_.get(Zn)??null;return{...en,properties:{...en.properties,prediction_prob:En}}})}},[r,c]),h=R(_=>_.selectedEvent),x=R(_=>_.setSelectedEvent),F=R(_=>_.setSelectedCountry),y=R(_=>_.searchQuery),s=R(_=>_.selectedOutcomes),f=R(_=>_.selectedRegions),S=R(_=>_.dateRange),k=R(_=>_.selectedTags);P.useEffect(()=>{l!=="events"?x(null):g(null)},[l]);const E=P.useMemo(()=>fg({searchQuery:y,selectedOutcomes:s,selectedRegions:f,dateRange:S,selectedTags:k},i),[y,s,f,S,k,i]),b={id:"coup-circles",type:"circle",source:"coups",paint:Ug,filter:E},{onMouseEnter:N,onMouseLeave:Y}=zg({mapRef:n,sourceId:"coups"}),L=P.useCallback(_=>{var Zn,En,ln,On,A,T,M;const en=(Zn=_.features)==null?void 0:Zn.find(j=>{var z;return((z=j.layer)==null?void 0:z.id)==="coup-circles"});if(en){const j=en.properties;x(j),F(j.country);return}const Sn=(En=_.features)==null?void 0:En.find(j=>{var z;return((z=j.layer)==null?void 0:z.id)==="countries-fill"});if(Sn){const j=((ln=Sn.properties)==null?void 0:ln.ADMIN)||((On=Sn.properties)==null?void 0:On.name);if(j){F(j),x(null);return}}if(r&&r.features){let j=null,z=1/0;for(const ge of r.features){const Xn=((A=ge.properties)==null?void 0:A.ADMIN)||((T=ge.properties)==null?void 0:T.name);if(!Xn)continue;const zn=ge.geometry;if(!zn)continue;let gn=[];if(zn.type==="Polygon"&&zn.coordinates[0]?gn=zn.coordinates[0]:zn.type==="MultiPolygon"&&(M=zn.coordinates[0])!=null&&M[0]&&(gn=zn.coordinates[0][0]),gn.length>0){const nt=gn.reduce((Ko,Zo)=>Ko+Zo[0],0)/gn.length,Td=gn.reduce((Ko,Zo)=>Ko+Zo[1],0)/gn.length,Pl=nt-_.lngLat.lng,xl=Td-_.lngLat.lat,wl=Math.sqrt(Pl*Pl+xl*xl);wl<z&&(z=wl,j=Xn)}}if(j&&z<15){F(j),x(null);return}}x(null),F(null)},[x,F,r]);return Hg({mapRef:n,layerIds:l==="events"?["coup-circles"]:[],setSelectedEvent:x}),Gg(x),d.jsx(_g,{mapRef:n,allEvents:i,children:d.jsxs("div",{className:"relative h-full w-full",children:[!e&&d.jsx("div",{className:C({position:"absolute",inset:"0",zIndex:"20",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--colors-bg-app)"}),children:d.jsx("div",{className:C({height:"8",width:"8",borderRadius:"full",borderWidth:"2px",borderStyle:"solid",borderColor:"var(--colors-border-default)",borderTopColor:"var(--colors-accent-default)"}),style:{animation:"spin 1s linear infinite"}})}),d.jsxs(q1,{ref:n,initialViewState:{longitude:20,latitude:15,zoom:2},mapStyle:Wg,interactiveLayerIds:l==="events"?["coup-circles","countries-fill"]:["country-risk-fill"],onMouseEnter:N,onMouseLeave:Y,onClick:_=>{var Sn,Zn;const en=_.features??[];if(en.some(En=>{var ln;return((ln=En.layer)==null?void 0:ln.id)==="coup-circles"}))L(_);else if(en.some(En=>{var ln;return((ln=En.layer)==null?void 0:ln.id)==="country-risk-fill"})){const En=en.find(A=>{var T;return((T=A.layer)==null?void 0:T.id)==="country-risk-fill"}),ln=(((Sn=En.properties)==null?void 0:Sn.ADMIN)??((Zn=En.properties)==null?void 0:Zn.name)??"").toLowerCase().trim(),On=c.find(A=>(_d[A.country.toLowerCase().trim()]??A.country.toLowerCase().trim())===ln);g(On??null)}else x(null),g(null)},onLoad:()=>t(!0),children:[l==="events"&&d.jsx(wi,{id:"coups",type:"geojson",data:Bg(u),promoteId:"id",children:d.jsx(ki,{...b})}),l==="events"&&r&&d.jsx(wi,{id:"countries",type:"geojson",data:r,children:d.jsx(ki,{id:"countries-fill",type:"fill",paint:{"fill-color":"rgba(0,0,0,0)","fill-opacity":0}})}),l==="risk"&&v&&d.jsx(wi,{id:"country-risk",type:"geojson",data:v,children:d.jsx(ki,{...Yg})}),h&&d.jsx(ef,{longitude:h.longitude,latitude:h.latitude,onClose:()=>x(null),closeButton:!0,closeOnClick:!1,children:d.jsx(Ef,{event:h})})]}),d.jsx(Cf,{prediction:p,onClose:()=>g(null)}),d.jsx(Lf,{})]})})}function $g({error:n,resetErrorBoundary:e}){return d.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0f1117] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-center",children:[d.jsx(Df,{className:"h-12 w-12 text-amber-500"}),d.jsx("h1",{className:"text-lg font-semibold text-white",children:"Something went wrong"}),d.jsx("p",{className:"max-w-md text-sm text-gray-400",children:n.message}),e&&d.jsx("button",{type:"button",onClick:e,className:"rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/30",children:"Try again"})]})}class Kg extends P.Component{constructor(){super(...arguments);kl(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("ErrorBoundary caught:",t,r)}render(){return this.state.error?d.jsx($g,{error:this.state.error,resetErrorBoundary:()=>this.setState({error:null})}):this.props.children}}fd(document.getElementById("root")).render(d.jsx(P.StrictMode,{children:d.jsx(Kg,{children:d.jsx(Qg,{})})}));export{Xg as c,Ld as g};
