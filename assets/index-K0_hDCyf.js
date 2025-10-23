(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function eS(){if(p0)return jo;p0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var m0;function nS(){return m0||(m0=1,Zf.exports=eS()),Zf.exports}var Xt=nS(),Kf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function iS(){if(g0)return ge;g0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function v(L,nt,xt){this.props=L,this.context=nt,this.refs=y,this.updater=xt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=v.prototype;function N(L,nt,xt){this.props=L,this.context=nt,this.refs=y,this.updater=xt||A}var D=N.prototype=new F;D.constructor=N,R(D,v.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(L,nt,xt){var Ct=xt.ref;return{$$typeof:o,type:L,key:nt,ref:Ct!==void 0?Ct:null,props:xt}}function C(L,nt){return w(L.type,nt,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function at(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return nt[xt]})}var ct=/\/+/g;function gt(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?at(""+L.key):nt.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,nt,xt,Ct,At){var J=typeof L;(J==="undefined"||J==="boolean")&&(L=null);var ot=!1;if(L===null)ot=!0;else switch(J){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(L.$$typeof){case o:case e:ot=!0;break;case x:return ot=L._init,z(ot(L._payload),nt,xt,Ct,At)}}if(ot)return At=At(L),ot=Ct===""?"."+gt(L,0):Ct,V(At)?(xt="",ot!=null&&(xt=ot.replace(ct,"$&/")+"/"),z(At,nt,xt,"",function(qt){return qt})):At!=null&&(X(At)&&(At=C(At,xt+(At.key==null||L&&L.key===At.key?"":(""+At.key).replace(ct,"$&/")+"/")+ot)),nt.push(At)),1;ot=0;var Nt=Ct===""?".":Ct+":";if(V(L))for(var Ft=0;Ft<L.length;Ft++)Ct=L[Ft],J=Nt+gt(Ct,Ft),ot+=z(Ct,nt,xt,J,At);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(Ct=L.next()).done;)Ct=Ct.value,J=Nt+gt(Ct,Ft++),ot+=z(Ct,nt,xt,J,At);else if(J==="object"){if(typeof L.then=="function")return z(ft(L),nt,xt,Ct,At);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ot}function j(L,nt,xt){if(L==null)return L;var Ct=[],At=0;return z(L,Ct,"","",function(J){return nt.call(xt,J,At++)}),Ct}function k(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var vt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:j,forEach:function(L,nt,xt){j(L,function(){nt.apply(this,arguments)},xt)},count:function(L){var nt=0;return j(L,function(){nt++}),nt},toArray:function(L){return j(L,function(nt){return nt})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ge.Activity=_,ge.Children=Tt,ge.Component=v,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=N,ge.StrictMode=r,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ge.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},ge.cache=function(L){return function(){return L.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(L,nt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ct=R({},L.props),At=L.key;if(nt!=null)for(J in nt.key!==void 0&&(At=""+nt.key),nt)!Z.call(nt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&nt.ref===void 0||(Ct[J]=nt[J]);var J=arguments.length-2;if(J===1)Ct.children=xt;else if(1<J){for(var ot=Array(J),Nt=0;Nt<J;Nt++)ot[Nt]=arguments[Nt+2];Ct.children=ot}return w(L.type,At,Ct)},ge.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ge.createElement=function(L,nt,xt){var Ct,At={},J=null;if(nt!=null)for(Ct in nt.key!==void 0&&(J=""+nt.key),nt)Z.call(nt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(At[Ct]=nt[Ct]);var ot=arguments.length-2;if(ot===1)At.children=xt;else if(1<ot){for(var Nt=Array(ot),Ft=0;Ft<ot;Ft++)Nt[Ft]=arguments[Ft+2];At.children=Nt}if(L&&L.defaultProps)for(Ct in ot=L.defaultProps,ot)At[Ct]===void 0&&(At[Ct]=ot[Ct]);return w(L,J,At)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(L){return{$$typeof:h,render:L}},ge.isValidElement=X,ge.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:k}},ge.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ge.startTransition=function(L){var nt=P.T,xt={};P.T=xt;try{var Ct=L(),At=P.S;At!==null&&At(xt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(I,vt)}catch(J){vt(J)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),P.T=nt}},ge.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ge.use=function(L){return P.H.use(L)},ge.useActionState=function(L,nt,xt){return P.H.useActionState(L,nt,xt)},ge.useCallback=function(L,nt){return P.H.useCallback(L,nt)},ge.useContext=function(L){return P.H.useContext(L)},ge.useDebugValue=function(){},ge.useDeferredValue=function(L,nt){return P.H.useDeferredValue(L,nt)},ge.useEffect=function(L,nt){return P.H.useEffect(L,nt)},ge.useEffectEvent=function(L){return P.H.useEffectEvent(L)},ge.useId=function(){return P.H.useId()},ge.useImperativeHandle=function(L,nt,xt){return P.H.useImperativeHandle(L,nt,xt)},ge.useInsertionEffect=function(L,nt){return P.H.useInsertionEffect(L,nt)},ge.useLayoutEffect=function(L,nt){return P.H.useLayoutEffect(L,nt)},ge.useMemo=function(L,nt){return P.H.useMemo(L,nt)},ge.useOptimistic=function(L,nt){return P.H.useOptimistic(L,nt)},ge.useReducer=function(L,nt,xt){return P.H.useReducer(L,nt,xt)},ge.useRef=function(L){return P.H.useRef(L)},ge.useState=function(L){return P.H.useState(L)},ge.useSyncExternalStore=function(L,nt,xt){return P.H.useSyncExternalStore(L,nt,xt)},ge.useTransition=function(){return P.H.useTransition()},ge.version="19.2.0",ge}var _0;function Th(){return _0||(_0=1,Kf.exports=iS()),Kf.exports}var Je=Th(),Qf={exports:{}},Zo={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function aS(){return v0||(v0=1,(function(o){function e(z,j){var k=z.length;z.push(j);t:for(;0<k;){var vt=k-1>>>1,Tt=z[vt];if(0<l(Tt,j))z[vt]=j,z[k]=Tt,k=vt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],k=z.pop();if(k!==j){z[0]=k;t:for(var vt=0,Tt=z.length,L=Tt>>>1;vt<L;){var nt=2*(vt+1)-1,xt=z[nt],Ct=nt+1,At=z[Ct];if(0>l(xt,k))Ct<Tt&&0>l(At,xt)?(z[vt]=At,z[Ct]=k,vt=Ct):(z[vt]=xt,z[nt]=k,vt=nt);else if(Ct<Tt&&0>l(At,k))z[vt]=At,z[Ct]=k,vt=Ct;else break t}}return j}function l(z,j){var k=z.sortIndex-j.sortIndex;return k!==0?k:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,S=3,M=!1,A=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=z)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function V(z){if(R=!1,D(z),!A)if(i(m)!==null)A=!0,I||(I=!0,at());else{var j=i(p);j!==null&&ft(V,j.startTime-z)}}var I=!1,P=-1,Z=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<Z)}function X(){if(y=!1,I){var z=o.unstable_now();w=z;var j=!0;try{t:{A=!1,R&&(R=!1,F(P),P=-1),M=!0;var k=S;try{e:{for(D(z),_=i(m);_!==null&&!(_.expirationTime>z&&C());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,S=_.priorityLevel;var Tt=vt(_.expirationTime<=z);if(z=o.unstable_now(),typeof Tt=="function"){_.callback=Tt,D(z),j=!0;break e}_===i(m)&&r(m),D(z)}else r(m);_=i(m)}if(_!==null)j=!0;else{var L=i(p);L!==null&&ft(V,L.startTime-z),j=!1}}break t}finally{_=null,S=k,M=!1}j=void 0}}finally{j?at():I=!1}}}var at;if(typeof N=="function")at=function(){N(X)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=X,at=function(){gt.postMessage(null)}}else at=function(){v(X,0)};function ft(z,j){P=v(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var k=S;S=j;try{return z()}finally{S=k}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=S;S=z;try{return j()}finally{S=k}},o.unstable_scheduleCallback=function(z,j,k){var vt=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?vt+k:vt):k=vt,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=k+Tt,z={id:x++,callback:j,priorityLevel:z,startTime:k,expirationTime:Tt,sortIndex:-1},k>vt?(z.sortIndex=k,e(p,z),i(m)===null&&z===i(p)&&(R?(F(P),P=-1):R=!0,ft(V,k-vt))):(z.sortIndex=Tt,e(m,z),A||M||(A=!0,I||(I=!0,at()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=S;return function(){var k=S;S=j;try{return z.apply(this,arguments)}finally{S=k}}}})($f)),$f}var x0;function rS(){return x0||(x0=1,Jf.exports=aS()),Jf.exports}var td={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function sS(){if(S0)return Qn;S0=1;var o=Th();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Qn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Qn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Qn.requestFormReset=function(m){r.d.r(m)},Qn.unstable_batchedUpdates=function(m,p){return m(p)},Qn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Qn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Qn.version="19.2.0",Qn}var y0;function oS(){if(y0)return td.exports;y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=sS(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function lS(){if(M0)return Zo;M0=1;var o=rS(),e=Th(),i=oS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ft=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},vt=[],Tt=-1;function L(t){return{current:t}}function nt(t){0>Tt||(t.current=vt[Tt],vt[Tt]=null,Tt--)}function xt(t,n){Tt++,vt[Tt]=t.current,t.current=n}var Ct=L(null),At=L(null),J=L(null),ot=L(null);function Nt(t,n){switch(xt(J,n),xt(At,t),xt(Ct,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bg(n),t=Fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Ct),xt(Ct,t)}function Ft(){nt(Ct),nt(At),nt(J)}function qt(t){t.memoizedState!==null&&xt(ot,t);var n=Ct.current,a=Fg(n,t.type);n!==a&&(xt(At,t),xt(Ct,a))}function Ht(t){At.current===t&&(nt(Ct),nt(At)),ot.current===t&&(nt(ot),ko._currentValue=k)}var te,O;function Be(t){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",O=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+t+O}var he=!1;function se(t,n){if(!t||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(st){var et=st}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(st){et=st}t.call(mt.prototype)}}else{try{throw Error()}catch(st){et=st}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(st){if(st&&et&&typeof st.stack=="string")return[st.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),tt=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===tt.length)for(s=B.length-1,c=tt.length-1;1<=s&&0<=c&&B[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==tt[c]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Be(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Be(t.type);case 16:return Be("Lazy");case 13:return t.child!==n&&n!==null?Be("Suspense Fallback"):Be("Suspense");case 19:return Be("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return Be("Activity");default:return""}}function Ye(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Yt=Object.prototype.hasOwnProperty,pe=o.unstable_scheduleCallback,ln=o.unstable_cancelCallback,sn=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,ee=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Jt=o.log,Qt=o.unstable_setDisableYieldValue,bt=null,Rt=null;function $t(t){if(typeof Jt=="function"&&Qt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(bt,t)}catch{}}var Bt=Math.clz32?Math.clz32:G,Ut=Math.log,ue=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ut(t)/ue|0)|0}var Mt=256,Dt=262144,Gt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=yt(s):(g&=T,g!==0?c=yt(g):a||(a=T&~t,a!==0&&(c=yt(a))))):(T=s&~f,T!==0?c=yt(T):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function kt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var t=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function De(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Bt(a),mt=1<<dt;T[dt]=0,B[dt]=-1;var et=tt[dt];if(et!==null)for(tt[dt]=null,dt=0;dt<et.length;dt++){var st=et[dt];st!==null&&(st.lane&=-536870913)}a&=~mt}s!==0&&$e(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function $e(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Bt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ni(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Bt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ni(t,n){var a=n&-n;return a=(a&42)!==0?1:Wi(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ga(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:o0(t.type))}function ii(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var kn=Math.random().toString(36).slice(2),mn="__reactFiber$"+kn,Nn="__reactProps$"+kn,ai="__reactContainer$"+kn,Mi="__reactEvents$"+kn,io="__reactListeners$"+kn,ao="__reactHandles$"+kn,_a="__reactResources$"+kn,ri="__reactMarker$"+kn;function b(t){delete t[mn],delete t[Nn],delete t[Mi],delete t[io],delete t[ao]}function W(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ai]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wg(t);t!==null;){if(a=t[mn])return a;t=Wg(t)}return n}t=a,a=t.parentNode}return null}function it(t){if(t=t[mn]||t[ai]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function q(t){var n=t[_a];return n||(n=t[_a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(t){t[ri]=!0}var Ot=new Set,Vt={};function zt(t,n){ie(t,n),ie(t+"Capture",n)}function ie(t,n){for(Vt[t]=n,t=0;t<n.length;t++)Ot.add(n[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ce={};function He(t){return Yt.call(ce,t)?!0:Yt.call(ae,t)?!1:le.test(t)?ce[t]=!0:(ae[t]=!0,!1)}function Wt(t,n,a){if(He(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Fe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function me(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function It(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ye(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function gn(t){if(!t._valueTracker){var n=Ue(t)?"checked":"value";t._valueTracker=ye(t,n,""+t[n])}}function On(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ue(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var aa=/[\n"\\]/g;function Ae(t){return t.replace(aa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(t,n,a,s,c,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+It(n)):t.value!==""+It(n)&&(t.value=""+It(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Ze(t,g,It(n)):a!=null?Ze(t,g,It(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+It(T):t.removeAttribute("name")}function In(t,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){gn(t);return}a=a!=null?""+It(a):"",n=n!=null?""+It(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),gn(t)}function Ze(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function cn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+It(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function si(t,n,a){if(n!=null&&(n=""+It(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+It(a):""}function hi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=It(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),gn(t)}function ra(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ro=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function so(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||ro.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function oo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&so(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&so(t,f,n[f])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var re=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_e=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Me(t){return _e.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ee(){}var un=null;function Zn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mn=null,fn=null;function Hn(t){var n=it(t);if(n&&(t=n.stateNode)){var a=t[Nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(zn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Nn]||null;if(!c)throw Error(r(90));zn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&On(s)}break t;case"textarea":si(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&cn(t,!!a.multiple,n,!1)}}}var An=!1;function Oi(t,n,a){if(An)return t(n,a);An=!0;try{var s=t(n);return s}finally{if(An=!1,(Mn!==null||fn!==null)&&(Ql(),Mn&&(n=Mn,t=fn,fn=Mn=null,Hn(n),t)))for(n=0;n<t.length;n++)Hn(t[n])}}function oi(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=!1;if(Rn)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){li=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch{li=!1}var Et=null,jt=null,Te=null;function vn(){if(Te)return Te;var t,n=jt,a=n.length,s,c="value"in Et?Et.value:Et.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Te=c.slice(t,1<s?1-s:void 0)}function Ei(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yi(){return!0}function Ga(){return!1}function Kn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yi:Ga,this.isPropagationStopped=Ga,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Kn(yr),lo=_({},yr,{view:0,detail:0}),$_=Kn(lo),Kc,Qc,co,ml=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Kc=t.screenX-co.screenX,Qc=t.screenY-co.screenY):Qc=Kc=0,co=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Hh=Kn(ml),tv=_({},ml,{dataTransfer:0}),ev=Kn(tv),nv=_({},lo,{relatedTarget:0}),Jc=Kn(nv),iv=_({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Kn(iv),rv=_({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sv=Kn(rv),ov=_({},yr,{data:0}),Gh=Kn(ov),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uv[t])?!!n[t]:!1}function $c(){return fv}var dv=_({},lo,{key:function(t){if(t.key){var n=lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hv=Kn(dv),pv=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Kn(pv),mv=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),gv=Kn(mv),_v=_({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Kn(_v),xv=_({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=Kn(xv),yv=_({},yr,{newState:0,oldState:0}),Mv=Kn(yv),Ev=[9,13,27,32],tu=Rn&&"CompositionEvent"in window,uo=null;Rn&&"documentMode"in document&&(uo=document.documentMode);var Tv=Rn&&"TextEvent"in window&&!uo,Xh=Rn&&(!tu||uo&&8<uo&&11>=uo),kh=" ",Wh=!1;function qh(t,n){switch(t){case"keyup":return Ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function bv(t,n){switch(t){case"compositionend":return Yh(n);case"keypress":return n.which!==32?null:(Wh=!0,kh);case"textInput":return t=n.data,t===kh&&Wh?null:t;default:return null}}function Av(t,n){if(es)return t==="compositionend"||!tu&&qh(t,n)?(t=vn(),Te=jt=Et=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xh&&n.locale!=="ko"?null:n.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rv[t.type]:n==="textarea"}function Zh(t,n,a,s){Mn?fn?fn.push(s):fn=[s]:Mn=s,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var fo=null,ho=null;function Cv(t){Ug(t,0)}function gl(t){var n=rt(t);if(On(n))return t}function Kh(t,n){if(t==="change")return n}var Qh=!1;if(Rn){var eu;if(Rn){var nu="oninput"in document;if(!nu){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),nu=typeof Jh.oninput=="function"}eu=nu}else eu=!1;Qh=eu&&(!document.documentMode||9<document.documentMode)}function $h(){fo&&(fo.detachEvent("onpropertychange",tp),ho=fo=null)}function tp(t){if(t.propertyName==="value"&&gl(ho)){var n=[];Zh(n,ho,t,Zn(t)),Oi(Cv,n)}}function wv(t,n,a){t==="focusin"?($h(),fo=n,ho=a,fo.attachEvent("onpropertychange",tp)):t==="focusout"&&$h()}function Dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(ho)}function Uv(t,n){if(t==="click")return gl(n)}function Lv(t,n){if(t==="input"||t==="change")return gl(n)}function Nv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ti=typeof Object.is=="function"?Object.is:Nv;function po(t,n){if(Ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Yt.call(n,c)||!Ti(t[c],n[c]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,n){var a=ep(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ep(a)}}function ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ap(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ov=Rn&&"documentMode"in document&&11>=document.documentMode,ns=null,au=null,mo=null,ru=!1;function rp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||ns==null||ns!==_n(s)||(s=ns,"selectionStart"in s&&iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),mo&&po(mo,s)||(mo=s,s=ac(au,"onSelect"),0<s.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ns)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var is={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},su={},sp={};Rn&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Er(t){if(su[t])return su[t];if(!is[t])return t;var n=is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return su[t]=n[a];return t}var op=Er("animationend"),lp=Er("animationiteration"),cp=Er("animationstart"),zv=Er("transitionrun"),Pv=Er("transitionstart"),Bv=Er("transitioncancel"),up=Er("transitionend"),fp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function ji(t,n){fp.set(t,n),zt(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zi=[],as=0,lu=0;function vl(){for(var t=as,n=lu=as=0;n<t;){var a=zi[n];zi[n++]=null;var s=zi[n];zi[n++]=null;var c=zi[n];zi[n++]=null;var f=zi[n];if(zi[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&dp(a,c,f)}}function xl(t,n,a,s){zi[as++]=t,zi[as++]=n,zi[as++]=a,zi[as++]=s,lu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function cu(t,n,a,s){return xl(t,n,a,s),Sl(t)}function Tr(t,n){return xl(t,null,null,n),Sl(t)}function dp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Bt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Sl(t){if(50<Bo)throw Bo=0,xf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var rs={};function Fv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,n,a,s){return new Fv(t,n,a,s)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=bi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")uu(t)&&(g=1);else if(typeof t=="string")g=Xx(t,a,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=bi(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return br(a.children,c,f,n);case y:g=8,c|=24;break;case v:return t=bi(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case V:return t=bi(13,a,n,c),t.elementType=V,t.lanes=f,t;case I:return t=bi(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case F:g=9;break t;case D:g=11;break t;case P:g=14;break t;case Z:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=bi(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function br(t,n,a,s){return t=bi(7,t,s,n),t.lanes=a,t}function fu(t,n,a){return t=bi(6,t,null,n),t.lanes=a,t}function pp(t){var n=bi(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=bi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var mp=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var a=mp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ye(n)},mp.set(t,n),n)}return{value:t,source:n,stack:Ye(n)}}var ss=[],os=0,Ml=null,go=0,Bi=[],Fi=0,Va=null,sa=1,oa="";function xa(t,n){ss[os++]=go,ss[os++]=Ml,Ml=t,go=n}function gp(t,n,a){Bi[Fi++]=sa,Bi[Fi++]=oa,Bi[Fi++]=Va,Va=t;var s=sa;t=oa;var c=32-Bt(s)-1;s&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,sa=1<<32-Bt(n)+c|a<<c|s,oa=f+t}else sa=1<<f|a<<c|s,oa=t}function hu(t){t.return!==null&&(xa(t,1),gp(t,1,0))}function pu(t){for(;t===Ml;)Ml=ss[--os],ss[os]=null,go=ss[--os],ss[os]=null;for(;t===Va;)Va=Bi[--Fi],Bi[Fi]=null,oa=Bi[--Fi],Bi[Fi]=null,sa=Bi[--Fi],Bi[Fi]=null}function _p(t,n){Bi[Fi++]=sa,Bi[Fi++]=oa,Bi[Fi++]=Va,sa=n.id,oa=n.overflow,Va=t}var Wn=null,dn=null,ze=!1,Xa=null,Ii=!1,mu=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(Pi(n,t)),mu}function vp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[mn]=t,n[Nn]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Ce(Io[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),In(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),hi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||zg(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Ee),n=!0):n=!1,n||ka(t,!0)}function xp(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Wn=Wn.return}}function ls(t){if(t!==Wn)return!1;if(!ze)return xp(t),ze=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&dn&&ka(t),xp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));dn=kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));dn=kg(t)}else n===27?(n=dn,ar(t.type)?(t=If,If=null,dn=t):dn=n):dn=Wn?Gi(t.stateNode.nextSibling):null;return!0}function Ar(){dn=Wn=null,ze=!1}function gu(){var t=Xa;return t!==null&&(_i===null?_i=t:_i.push.apply(_i,t),Xa=null),t}function _o(t){Xa===null?Xa=[t]:Xa.push(t)}var _u=L(null),Rr=null,Sa=null;function Wa(t,n,a){xt(_u,n._currentValue),n._currentValue=a}function ya(t){t._currentValue=_u.current,nt(_u)}function vu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function xu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),vu(f.return,a,t),s||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function cs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;Ti(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===ot.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}c=c.return}t!==null&&xu(n,t,a,s),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Rr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return Sp(Rr,t)}function Tl(t,n){return Rr===null&&Cr(t),Sp(t,n)}function Sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var Iv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Hv=o.unstable_scheduleCallback,Gv=o.unstable_NormalPriority,Cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new Iv,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&Hv(Gv,function(){t.controller.abort()})}var xo=null,yu=0,us=0,fs=null;function Vv(t,n){if(xo===null){var a=xo=[];yu=0,us=bf(),fs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yu++,n.then(yp,yp),n}function yp(){if(--yu===0&&xo!==null){fs!==null&&(fs.status="fulfilled");var t=xo;xo=null,us=0,fs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Xv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Mp=z.S;z.S=function(t,n){rg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vv(t,n),Mp!==null&&Mp(t,n)};var wr=L(null);function Mu(){var t=wr.current;return t!==null?t:on.pooledCache}function bl(t,n){n===null?xt(wr,wr.current):xt(wr,n.pool)}function Ep(){var t=Mu();return t===null?null:{parent:Cn._currentValue,pool:t}}var ds=Error(r(460)),Eu=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function Tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ee,Ee),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rp(t),t;default:if(typeof n.status=="string")n.then(Ee,Ee);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rp(t),t}throw Ur=n,ds}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,ds):a}}var Ur=null;function Ap(){if(Ur===null)throw Error(r(459));var t=Ur;return Ur=null,t}function Rp(t){if(t===ds||t===Al)throw Error(r(483))}var hs=null,So=0;function Cl(t){var n=So;return So+=1,hs===null&&(hs=[]),bp(hs,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cp(t){function n(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function c(Y,H){return Y=va(Y,H),Y.index=0,Y.sibling=null,Y}function f(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=67108866,H):$):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,H,$,ht){return H===null||H.tag!==6?(H=fu($,Y.mode,ht),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function B(Y,H,$,ht){var oe=$.type;return oe===R?dt(Y,H,$.props.children,ht,$.key):H!==null&&(H.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&Dr(oe)===H.type)?(H=c(H,$.props),yo(H,$),H.return=Y,H):(H=yl($.type,$.key,$.props,null,Y.mode,ht),yo(H,$),H.return=Y,H)}function tt(Y,H,$,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=du($,Y.mode,ht),H.return=Y,H):(H=c(H,$.children||[]),H.return=Y,H)}function dt(Y,H,$,ht,oe){return H===null||H.tag!==7?(H=br($,Y.mode,ht,oe),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function mt(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=fu(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return $=yl(H.type,H.key,H.props,null,Y.mode,$),yo($,H),$.return=Y,$;case A:return H=du(H,Y.mode,$),H.return=Y,H;case Z:return H=Dr(H),mt(Y,H,$)}if(ft(H)||at(H))return H=br(H,Y.mode,$,null),H.return=Y,H;if(typeof H.then=="function")return mt(Y,Cl(H),$);if(H.$$typeof===N)return mt(Y,Tl(Y,H),$);wl(Y,H)}return null}function et(Y,H,$,ht){var oe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return oe!==null?null:T(Y,H,""+$,ht);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===oe?B(Y,H,$,ht):null;case A:return $.key===oe?tt(Y,H,$,ht):null;case Z:return $=Dr($),et(Y,H,$,ht)}if(ft($)||at($))return oe!==null?null:dt(Y,H,$,ht,null);if(typeof $.then=="function")return et(Y,H,Cl($),ht);if($.$$typeof===N)return et(Y,H,Tl(Y,$),ht);wl(Y,$)}return null}function st(Y,H,$,ht,oe){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get($)||null,T(H,Y,""+ht,oe);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?$:ht.key)||null,B(H,Y,ht,oe);case A:return Y=Y.get(ht.key===null?$:ht.key)||null,tt(H,Y,ht,oe);case Z:return ht=Dr(ht),st(Y,H,$,ht,oe)}if(ft(ht)||at(ht))return Y=Y.get($)||null,dt(H,Y,ht,oe,null);if(typeof ht.then=="function")return st(Y,H,$,Cl(ht),oe);if(ht.$$typeof===N)return st(Y,H,$,Tl(H,ht),oe);wl(H,ht)}return null}function Kt(Y,H,$,ht){for(var oe=null,Xe=null,ne=H,xe=H=0,Oe=null;ne!==null&&xe<$.length;xe++){ne.index>xe?(Oe=ne,ne=null):Oe=ne.sibling;var ke=et(Y,ne,$[xe],ht);if(ke===null){ne===null&&(ne=Oe);break}t&&ne&&ke.alternate===null&&n(Y,ne),H=f(ke,H,xe),Xe===null?oe=ke:Xe.sibling=ke,Xe=ke,ne=Oe}if(xe===$.length)return a(Y,ne),ze&&xa(Y,xe),oe;if(ne===null){for(;xe<$.length;xe++)ne=mt(Y,$[xe],ht),ne!==null&&(H=f(ne,H,xe),Xe===null?oe=ne:Xe.sibling=ne,Xe=ne);return ze&&xa(Y,xe),oe}for(ne=s(ne);xe<$.length;xe++)Oe=st(ne,Y,xe,$[xe],ht),Oe!==null&&(t&&Oe.alternate!==null&&ne.delete(Oe.key===null?xe:Oe.key),H=f(Oe,H,xe),Xe===null?oe=Oe:Xe.sibling=Oe,Xe=Oe);return t&&ne.forEach(function(cr){return n(Y,cr)}),ze&&xa(Y,xe),oe}function de(Y,H,$,ht){if($==null)throw Error(r(151));for(var oe=null,Xe=null,ne=H,xe=H=0,Oe=null,ke=$.next();ne!==null&&!ke.done;xe++,ke=$.next()){ne.index>xe?(Oe=ne,ne=null):Oe=ne.sibling;var cr=et(Y,ne,ke.value,ht);if(cr===null){ne===null&&(ne=Oe);break}t&&ne&&cr.alternate===null&&n(Y,ne),H=f(cr,H,xe),Xe===null?oe=cr:Xe.sibling=cr,Xe=cr,ne=Oe}if(ke.done)return a(Y,ne),ze&&xa(Y,xe),oe;if(ne===null){for(;!ke.done;xe++,ke=$.next())ke=mt(Y,ke.value,ht),ke!==null&&(H=f(ke,H,xe),Xe===null?oe=ke:Xe.sibling=ke,Xe=ke);return ze&&xa(Y,xe),oe}for(ne=s(ne);!ke.done;xe++,ke=$.next())ke=st(ne,Y,xe,ke.value,ht),ke!==null&&(t&&ke.alternate!==null&&ne.delete(ke.key===null?xe:ke.key),H=f(ke,H,xe),Xe===null?oe=ke:Xe.sibling=ke,Xe=ke);return t&&ne.forEach(function(tS){return n(Y,tS)}),ze&&xa(Y,xe),oe}function nn(Y,H,$,ht){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var oe=$.key;H!==null;){if(H.key===oe){if(oe=$.type,oe===R){if(H.tag===7){a(Y,H.sibling),ht=c(H,$.props.children),ht.return=Y,Y=ht;break t}}else if(H.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&Dr(oe)===H.type){a(Y,H.sibling),ht=c(H,$.props),yo(ht,$),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}$.type===R?(ht=br($.props.children,Y.mode,ht,$.key),ht.return=Y,Y=ht):(ht=yl($.type,$.key,$.props,null,Y.mode,ht),yo(ht,$),ht.return=Y,Y=ht)}return g(Y);case A:t:{for(oe=$.key;H!==null;){if(H.key===oe)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){a(Y,H.sibling),ht=c(H,$.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=du($,Y.mode,ht),ht.return=Y,Y=ht}return g(Y);case Z:return $=Dr($),nn(Y,H,$,ht)}if(ft($))return Kt(Y,H,$,ht);if(at($)){if(oe=at($),typeof oe!="function")throw Error(r(150));return $=oe.call($),de(Y,H,$,ht)}if(typeof $.then=="function")return nn(Y,H,Cl($),ht);if($.$$typeof===N)return nn(Y,H,Tl(Y,$),ht);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(a(Y,H.sibling),ht=c(H,$),ht.return=Y,Y=ht):(a(Y,H),ht=fu($,Y.mode,ht),ht.return=Y,Y=ht),g(Y)):a(Y,H)}return function(Y,H,$,ht){try{So=0;var oe=nn(Y,H,$,ht);return hs=null,oe}catch(ne){if(ne===ds||ne===Al)throw ne;var Xe=bi(29,ne,null,Y.mode);return Xe.lanes=ht,Xe.return=Y,Xe}finally{}}}var Lr=Cp(!0),wp=Cp(!1),qa=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(je&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Sl(t),dp(t,null,a),n}return xl(t,s,n,a),Sl(t)}function Mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ni(t,a)}}function Au(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ru=!1;function Eo(){if(Ru){var t=fs;if(t!==null)throw t}}function To(t,n,a,s){Ru=!1;var c=t.updateQueue;qa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,tt=B.next;B.next=null,g===null?f=tt:g.next=tt,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==g&&(T===null?dt.firstBaseUpdate=tt:T.next=tt,dt.lastBaseUpdate=B))}if(f!==null){var mt=c.baseState;g=0,dt=tt=B=null,T=f;do{var et=T.lane&-536870913,st=et!==T.lane;if(st?(Ne&et)===et:(s&et)===et){et!==0&&et===us&&(Ru=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Kt=t,de=T;et=n;var nn=a;switch(de.tag){case 1:if(Kt=de.payload,typeof Kt=="function"){mt=Kt.call(nn,mt,et);break t}mt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=de.payload,et=typeof Kt=="function"?Kt.call(nn,mt,et):Kt,et==null)break t;mt=_({},mt,et);break t;case 2:qa=!0}}et=T.callback,et!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[et]:st.push(et))}else st={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(tt=dt=st,B=mt):dt=dt.next=st,g|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);dt===null&&(B=mt),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),$a|=g,t.lanes=g,t.memoizedState=mt}}function Dp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Up(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Dp(a[t],n)}var ps=L(null),Dl=L(0);function Lp(t,n){t=Da,xt(Dl,t),xt(ps,n),Da=t|n.baseLanes}function Cu(){xt(Dl,Da),xt(ps,ps.current)}function wu(){Da=Dl.current,nt(ps),nt(Dl)}var Ai=L(null),Hi=null;function Za(t){var n=t.alternate;xt(En,En.current&1),xt(Ai,t),Hi===null&&(n===null||ps.current!==null||n.memoizedState!==null)&&(Hi=t)}function Du(t){xt(En,En.current),xt(Ai,t),Hi===null&&(Hi=t)}function Np(t){t.tag===22?(xt(En,En.current),xt(Ai,t),Hi===null&&(Hi=t)):Ka()}function Ka(){xt(En,En.current),xt(Ai,Ai.current)}function Ri(t){nt(Ai),Hi===t&&(Hi=null),nt(En)}var En=L(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,ve=null,tn=null,wn=null,Ll=!1,ms=!1,Nr=!1,Nl=0,bo=0,gs=null,kv=0;function xn(){throw Error(r(321))}function Uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ti(t[a],n[a]))return!1;return!0}function Lu(t,n,a,s,c,f){return Ma=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?gm:Yu,Nr=!1,f=a(s,c),Nr=!1,ms&&(f=zp(n,a,s,c)),Op(t),f}function Op(t){z.H=Co;var n=tn!==null&&tn.next!==null;if(Ma=0,wn=tn=ve=null,Ll=!1,bo=0,gs=null,n)throw Error(r(300));t===null||Dn||(t=t.dependencies,t!==null&&El(t)&&(Dn=!0))}function zp(t,n,a,s){ve=t;var c=0;do{if(ms&&(gs=null),bo=0,ms=!1,25<=c)throw Error(r(301));if(c+=1,wn=tn=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=_m,f=n(a,s)}while(ms);return f}function Wv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Ao(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(ve.flags|=1024),n}function Nu(){var t=Nl!==0;return Nl=0,t}function Ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Ma=0,wn=tn=ve=null,ms=!1,bo=Nl=0,gs=null}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?ve.memoizedState=wn=t:wn=wn.next=t,wn}function Tn(){if(tn===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=wn===null?ve.memoizedState:wn.next;if(n!==null)wn=n,tn=t;else{if(t===null)throw ve.alternate===null?Error(r(467)):Error(r(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},wn===null?ve.memoizedState=wn=t:wn=wn.next=t}return wn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(t){var n=bo;return bo+=1,gs===null&&(gs=[]),t=bp(gs,t,n),n=ve,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?gm:Yu),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ao(t);if(t.$$typeof===N)return qn(t)}throw Error(r(438,String(t)))}function Pu(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=Tn();return Bu(n,tn,t)}function Bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=g=null,B=null,tt=n,dt=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(Ne&mt)===mt:(Ma&mt)===mt){var et=tt.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===us&&(dt=!0);else if((Ma&et)===et){tt=tt.next,et===us&&(dt=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=mt,g=f):B=B.next=mt,ve.lanes|=et,$a|=et;mt=tt.action,Nr&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else et={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=et,g=f):B=B.next=et,ve.lanes|=mt,$a|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?g=f:B.next=T,!Ti(f,t.memoizedState)&&(Dn=!0,dt&&(a=fs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Fu(t){var n=Tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Ti(f,n.memoizedState)||(Dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Pp(t,n,a){var s=ve,c=Tn(),f=ze;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Ti((tn||c).memoizedState,a);if(g&&(c.memoizedState=a,Dn=!0),c=c.queue,Gu(Ip.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||wn!==null&&wn.memoizedState.tag&1){if(s.flags|=2048,_s(9,{destroy:void 0},Fp.bind(null,s,c,a,n),null),on===null)throw Error(r(349));f||(Ma&127)!==0||Bp(s,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Ol(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,s){n.value=a,n.getSnapshot=s,Hp(n)&&Gp(t)}function Ip(t,n,a){return a(function(){Hp(n)&&Gp(t)})}function Hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ti(t,a)}catch{return!0}}function Gp(t){var n=Tr(t,2);n!==null&&vi(n,t,2)}function Iu(t){var n=ci();if(typeof t=="function"){var a=t;if(t=a(),Nr){$t(!0);try{a()}finally{$t(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function Vp(t,n,a,s){return t.baseState=a,Bu(t,tn,typeof s=="function"?s:Ea)}function qv(t,n,a,s,c){if(Il(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var T=a(c,s),B=z.S;B!==null&&B(g,T),kp(t,n,T)}catch(tt){Hu(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,s),kp(t,n,f)}catch(tt){Hu(t,n,tt)}}function kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wp(t,n,s)},function(s){return Hu(t,n,s)}):Wp(t,n,a)}function Wp(t,n,a){n.status="fulfilled",n.value=a,qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Xp(t,a)))}function Hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==s)}t.action=null}function qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yp(t,n){return n}function jp(t,n){if(ze){var a=on.formState;if(a!==null){t:{var s=ve;if(ze){if(dn){e:{for(var c=dn,f=Ii;c.nodeType!==8;){if(!f){c=null;break e}if(c=Gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){dn=Gi(c.nextSibling),s=c.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=ci(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=s,a=hm.bind(null,ve,s),s.dispatch=a,s=Iu(!1),f=qu.bind(null,ve,!1,s.queue),s=ci(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=qv.bind(null,ve,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zp(t){var n=Tn();return Kp(n,tn,t)}function Kp(t,n,a){if(n=Bu(t,n,Yp)[0],t=Pl(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ao(n)}catch(g){throw g===ds?Al:g}else s=n;n=Tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,_s(9,{destroy:void 0},Yv.bind(null,c,a),null)),[s,f,t]}function Yv(t,n){t.action=n}function Qp(t){var n=Tn(),a=tn;if(a!==null)return Kp(n,a,t);Tn(),n=n.memoizedState,a=Tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function _s(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Ol(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jp(){return Tn().memoizedState}function Bl(t,n,a,s){var c=ci();ve.flags|=t,c.memoizedState=_s(1|n,{destroy:void 0},a,s===void 0?null:s)}function Fl(t,n,a,s){var c=Tn();s=s===void 0?null:s;var f=c.memoizedState.inst;tn!==null&&s!==null&&Uu(s,tn.memoizedState.deps)?c.memoizedState=_s(n,f,a,s):(ve.flags|=t,c.memoizedState=_s(1|n,f,a,s))}function $p(t,n){Bl(8390656,8,t,n)}function Gu(t,n){Fl(2048,8,t,n)}function jv(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=Ol(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function tm(t){var n=Tn().memoizedState;return jv({ref:n,nextImpl:t}),function(){if((je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function em(t,n){return Fl(4,2,t,n)}function nm(t,n){return Fl(4,4,t,n)}function im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function am(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,im.bind(null,n,t),a)}function Vu(){}function rm(t,n){var a=Tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=Tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uu(n,s[1]))return s[0];if(s=t(),Nr){$t(!0);try{t()}finally{$t(!1)}}return a.memoizedState=[s,n],s}function Xu(t,n,a){return a===void 0||(Ma&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=og(),ve.lanes|=t,$a|=t,a)}function om(t,n,a,s){return Ti(a,n)?a:ps.current!==null?(t=Xu(t,a,s),Ti(t,n)||(Dn=!0),t):(Ma&42)===0||(Ma&1073741824)!==0&&(Ne&261930)===0?(Dn=!0,t.memoizedState=a):(t=og(),ve.lanes|=t,$a|=t,n)}function lm(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=z.T,T={};z.T=T,qu(t,!1,n,a);try{var B=c(),tt=z.S;if(tt!==null&&tt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Xv(B,s);Ro(t,n,dt,Di(t))}else Ro(t,n,s,Di(t))}catch(mt){Ro(t,n,{then:function(){},status:"rejected",reason:mt},Di())}finally{j.p=f,g!==null&&T.types!==null&&(g.types=T.types),z.T=g}}function Zv(){}function ku(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=cm(t).queue;lm(t,c,n,k,a===null?Zv:function(){return um(t),a(s)})}function cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function um(t){var n=cm(t);n.next===null&&(n=t.alternate.memoizedState),Ro(t,n.next.queue,{},Di())}function Wu(){return qn(ko)}function fm(){return Tn().memoizedState}function dm(){return Tn().memoizedState}function Kv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Di();t=Ya(a);var s=ja(n,t,a);s!==null&&(vi(s,n,a),Mo(s,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function Qv(t,n,a){var s=Di();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?pm(n,a):(a=cu(t,n,a,s),a!==null&&(vi(a,t,s),mm(a,n,s)))}function hm(t,n,a){var s=Di();Ro(t,n,a,s)}function Ro(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))pm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Ti(T,g))return xl(t,n,c,0),on===null&&vl(),!1}catch{}finally{}if(a=cu(t,n,c,s),a!==null)return vi(a,t,s),mm(a,n,s),!0}return!1}function qu(t,n,a,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(r(479))}else n=cu(t,a,s,2),n!==null&&vi(n,t,2)}function Il(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function pm(t,n){ms=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ni(t,a)}}var Co={readContext:qn,use:zl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Co.useEffectEvent=xn;var gm={readContext:qn,use:zl,useCallback:function(t,n){return ci().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:$p,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Bl(4194308,4,im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var a=ci();n=n===void 0?null:n;var s=t();if(Nr){$t(!0);try{t()}finally{$t(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=ci();if(a!==void 0){var c=a(n);if(Nr){$t(!0);try{a(n)}finally{$t(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Qv.bind(null,ve,t),[s.memoizedState,t]},useRef:function(t){var n=ci();return t={current:t},n.memoizedState=t},useState:function(t){t=Iu(t);var n=t.queue,a=hm.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(t,n){var a=ci();return Xu(a,t,n)},useTransition:function(){var t=Iu(!1);return t=lm.bind(null,ve,t.queue,!0,!1),ci().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ve,c=ci();if(ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),on===null)throw Error(r(349));(Ne&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$p(Ip.bind(null,s,f,t),[t]),s.flags|=2048,_s(9,{destroy:void 0},Fp.bind(null,s,f,a,n),null),a},useId:function(){var t=ci(),n=on.identifierPrefix;if(ze){var a=oa,s=sa;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wu,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=ci();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pu,useCacheRefresh:function(){return ci().memoizedState=Kv.bind(null,ve)},useEffectEvent:function(t){var n=ci(),a={impl:t};return n.memoizedState=a,function(){if((je&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:qn,use:zl,useCallback:rm,useContext:qn,useEffect:Gu,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:sm,useReducer:Pl,useRef:Jp,useState:function(){return Pl(Ea)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=Tn();return om(a,tn.memoizedState,t,n)},useTransition:function(){var t=Pl(Ea)[0],n=Tn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:Wu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=Tn();return Vp(a,tn,t,n)},useMemoCache:Pu,useCacheRefresh:dm};Yu.useEffectEvent=tm;var _m={readContext:qn,use:zl,useCallback:rm,useContext:qn,useEffect:Gu,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:sm,useReducer:Fu,useRef:Jp,useState:function(){return Fu(Ea)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=Tn();return tn===null?Xu(a,t,n):om(a,tn.memoizedState,t,n)},useTransition:function(){var t=Fu(Ea)[0],n=Tn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:Wu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=Tn();return tn!==null?Vp(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:dm};_m.useEffectEvent=tm;function ju(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Di(),c=Ya(s);c.payload=n,a!=null&&(c.callback=a),n=ja(t,c,s),n!==null&&(vi(n,t,s),Mo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Di(),c=Ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ja(t,c,s),n!==null&&(vi(n,t,s),Mo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Di(),s=Ya(a);s.tag=2,n!=null&&(s.callback=n),n=ja(t,s,a),n!==null&&(vi(n,t,a),Mo(n,t,a))}};function vm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!po(a,s)||!po(c,f):!0}function xm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Zu.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Sm(t){_l(t)}function ym(t){console.error(t)}function Mm(t){_l(t)}function Hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Em(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,n)},a}function Tm(t){return t=Ya(t),t.tag=3,t}function bm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Em(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Em(n,a,s),typeof c!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Jv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&cs(n,a,c,!0),a=Ai.current,a!==null){switch(a.tag){case 31:case 13:return Hi===null?Jl():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(t,s,c)),!1;case 22:return a.flags|=65536,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(t,s,c)),!1}throw Error(r(435,a.tag))}return Mf(t,s,c),Jl(),!1}if(ze)return n=Ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==mu&&(t=Error(r(422),{cause:s}),_o(Pi(t,a)))):(s!==mu&&(n=Error(r(423),{cause:s}),_o(Pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Pi(s,a),c=Ku(t.stateNode,s,c),Au(t,c),Sn!==4&&(Sn=2)),!1;var f=Error(r(520),{cause:s});if(f=Pi(f,a),Po===null?Po=[f]:Po.push(f),Sn!==4&&(Sn=2),n===null)return!0;s=Pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ku(a.stateNode,s,t),Au(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(tr===null||!tr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Tm(c),bm(c,t,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(r(461)),Dn=!1;function Yn(t,n,a,s){n.child=t===null?wp(n,null,a,s):Lr(n,t.child,a,s)}function Am(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return Cr(n),s=Lu(t,n,a,g,f,c),T=Nu(),t!==null&&!Dn?(Ou(t,n,c),Ta(t,n,c)):(ze&&T&&hu(n),n.flags|=1,Yn(t,n,s,c),n.child)}function Rm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Cm(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!sf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(g,s)&&t.ref===n.ref)return Ta(t,n,c)}return n.flags|=1,t=va(f,s),t.ref=n.ref,t.return=n,n.child=t}function Cm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(po(f,s)&&t.ref===n.ref)if(Dn=!1,n.pendingProps=s=f,sf(t,c))(t.flags&131072)!==0&&(Dn=!0);else return n.lanes=t.lanes,Ta(t,n,c)}return Ju(t,n,a,s,c)}function wm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Dm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):Cu(),Np(n);else return s=n.lanes=536870912,Dm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(bl(n,f.cachePool),Lp(n,f),Ka(),n.memoizedState=null):(t!==null&&bl(n,null),Cu(),Ka());return Yn(t,n,c,a),n.child}function wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dm(t,n,a,s,c){var f=Mu();return f=f===null?null:{parent:Cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&bl(n,null),Cu(),Np(n),t!==null&&cs(t,n,s,!0),n.childLanes=c,null}function Gl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Um(t,n,a){return Lr(n,t.child,null,a),t=Gl(n,n.pendingProps),t.flags|=2,Ri(n),n.memoizedState=null,t}function $v(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ze){if(s.mode==="hidden")return t=Gl(n,s),n.lanes=536870912,wo(null,t);if(Du(n),(t=dn)?(t=Xg(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},a=pp(t),a.return=n,n.child=a,Wn=n,dn=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return Gl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=Um(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Dn||cs(t,n,a,!1),c=(a&t.childLanes)!==0,Dn||c){if(s=on,s!==null&&(g=Ni(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Tr(t,g),vi(s,t,g),Qu;Jl(),n=Um(t,n,a)}else t=f.treeContext,dn=Gi(g.nextSibling),Wn=n,ze=!0,Xa=null,Ii=!1,t!==null&&_p(n,t),n=Gl(n,s),n.flags|=4096;return n}return t=va(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ju(t,n,a,s,c){return Cr(n),a=Lu(t,n,a,s,void 0,c),s=Nu(),t!==null&&!Dn?(Ou(t,n,c),Ta(t,n,c)):(ze&&s&&hu(n),n.flags|=1,Yn(t,n,a,c),n.child)}function Lm(t,n,a,s,c,f){return Cr(n),n.updateQueue=null,a=zp(n,s,a,c),Op(t),s=Nu(),t!==null&&!Dn?(Ou(t,n,f),Ta(t,n,f)):(ze&&s&&hu(n),n.flags|=1,Yn(t,n,a,f),n.child)}function Nm(t,n,a,s,c){if(Cr(n),n.stateNode===null){var f=rs,g=a.contextType;typeof g=="object"&&g!==null&&(f=qn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?qn(g):rs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ju(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zu.enqueueReplaceState(f,f.state,null),To(n,s,f,c),Eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Or(a,T);f.props=B;var tt=f.context,dt=a.contextType;g=rs,typeof dt=="object"&&dt!==null&&(g=qn(dt));var mt=a.getDerivedStateFromProps;dt=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==g)&&xm(n,f,s,g),qa=!1;var et=n.memoizedState;f.state=et,To(n,s,f,c),Eo(),tt=n.memoizedState,T||et!==tt||qa?(typeof mt=="function"&&(ju(n,a,mt,s),tt=n.memoizedState),(B=qa||vm(n,a,B,s,et,tt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bu(t,n),g=n.memoizedProps,dt=Or(a,g),f.props=dt,mt=n.pendingProps,et=f.context,tt=a.contextType,B=rs,typeof tt=="object"&&tt!==null&&(B=qn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||et!==B)&&xm(n,f,s,B),qa=!1,et=n.memoizedState,f.state=et,To(n,s,f,c),Eo();var st=n.memoizedState;g!==mt||et!==st||qa||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof T=="function"&&(ju(n,a,T,s),st=n.memoizedState),(dt=qa||vm(n,a,dt,s,et,st,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Vl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Lr(n,t.child,null,c),n.child=Lr(n,null,a,c)):Yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ta(t,n,c),t}function Om(t,n,a,s){return Ar(),n.flags|=256,Yn(t,n,a,s),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(t){return{baseLanes:t,cachePool:Ep()}}function ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=wi),t}function zm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ze){if(c?Za(n):Ka(),(t=dn)?(t=Xg(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},a=pp(t),a.return=n,n.child=a,Wn=n,dn=null)):t=null,t===null)throw ka(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Ka(),c=n.mode,T=Xl({mode:"hidden",children:T},c),s=br(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=tf(a),s.childLanes=ef(t,g,a),n.memoizedState=$u,wo(null,s)):(Za(n),nf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Za(n),n.flags&=-257,n=af(t,n,a)):n.memoizedState!==null?(Ka(),n.child=t.child,n.flags|=128,n=null):(Ka(),T=s.fallback,c=n.mode,s=Xl({mode:"visible",children:s.children},c),T=br(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,Lr(n,t.child,null,a),s=n.child,s.memoizedState=tf(a),s.childLanes=ef(t,g,a),n.memoizedState=$u,n=wo(null,s));else if(Za(n),Ff(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var tt=g.dgst;g=tt,s=Error(r(419)),s.stack="",s.digest=g,_o({value:s,source:null,stack:null}),n=af(t,n,a)}else if(Dn||cs(t,n,a,!1),g=(a&t.childLanes)!==0,Dn||g){if(g=on,g!==null&&(s=Ni(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Tr(t,s),vi(g,t,s),Qu;Bf(T)||Jl(),n=af(t,n,a)}else Bf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,dn=Gi(T.nextSibling),Wn=n,ze=!0,Xa=null,Ii=!1,t!==null&&_p(n,t),n=nf(n,s.children),n.flags|=4096);return n}return c?(Ka(),T=s.fallback,c=n.mode,B=t.child,tt=B.sibling,s=va(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,tt!==null?T=va(tt,T):(T=br(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,wo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=tf(a):(c=T.cachePool,c!==null?(B=Cn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Ep(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=ef(t,g,a),n.memoizedState=$u,wo(t.child,s)):(Za(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function nf(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=bi(22,t,null,n),t.lanes=0,t}function af(t,n,a){return Lr(n,t.child,null,a),t=nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),vu(t.return,n,a)}function rf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Bm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=En.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,xt(En,g),Yn(t,n,s,a),s=ze?go:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,a,n);else if(t.tag===19)Pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,s);break;case"together":rf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(cs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function tx(t,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),Wa(n,Cn,t.memoizedState.cache),Ar();break;case 27:case 5:qt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(Za(n),t=Ta(t,n,a),t!==null?t.sibling:null);Za(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(cs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(En,En.current),s)break;return null;case 22:return n.lanes=0,wm(t,n,a,n.pendingProps);case 24:Wa(n,Cn,t.memoizedState.cache)}return Ta(t,n,a)}function Fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Dn=!0;else{if(!sf(t,a)&&(n.flags&128)===0)return Dn=!1,tx(t,n,a);Dn=(t.flags&131072)!==0}else Dn=!1,ze&&(n.flags&1048576)!==0&&gp(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")uu(t)?(s=Or(t,s),n.tag=1,n=Nm(null,n,t,s,a)):(n.tag=0,n=Ju(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Am(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=Rm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return Ju(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Or(s,n.pendingProps),Nm(t,n,s,c,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),To(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Wa(n,Cn,s),s!==f.cache&&xu(n,[Cn],a,!0),Eo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Om(t,n,s,a);break t}else if(s!==c){c=Pi(Error(r(424)),n),_o(c),n=Om(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dn=Gi(t.firstChild),Wn=n,ze=!0,Xa=null,Ii=!0,a=wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ar(),s===c){n=Ta(t,n,a);break t}Yn(t,n,s,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,t=n.pendingProps,s=rc(J.current).createElement(a),s[mn]=n,s[Nn]=t,jn(s,a,t),_t(s),n.stateNode=s):n.memoizedState=Zg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qt(n),t===null&&ze&&(s=n.stateNode=qg(n.type,n.pendingProps,J.current),Wn=n,Ii=!0,c=dn,ar(n.type)?(If=c,dn=Gi(s.firstChild)):dn=c),Yn(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ze&&((c=s=dn)&&(s=Dx(s,n.type,n.pendingProps,Ii),s!==null?(n.stateNode=s,Wn=n,dn=Gi(s.firstChild),Ii=!1,c=!0):c=!1),c||ka(n)),qt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Of(c,f)?s=null:g!==null&&Of(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(t,n,Wv,null,null,a),ko._currentValue=c),Vl(t,n),Yn(t,n,s,a),n.child;case 6:return t===null&&ze&&((t=a=dn)&&(a=Ux(a,n.pendingProps,Ii),a!==null?(n.stateNode=a,Wn=n,dn=null,t=!0):t=!1),t||ka(n)),null;case 13:return zm(t,n,a);case 4:return Nt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Lr(n,null,s,a):Yn(t,n,s,a),n.child;case 11:return Am(t,n,n.type,n.pendingProps,a);case 7:return Yn(t,n,n.pendingProps,a),n.child;case 8:return Yn(t,n,n.pendingProps.children,a),n.child;case 12:return Yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Wa(n,n.type,s.value),Yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Cr(n),c=qn(c),s=s(c),n.flags|=1,Yn(t,n,s,a),n.child;case 14:return Rm(t,n,n.type,n.pendingProps,a);case 15:return Cm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return $v(t,n,a);case 22:return wm(t,n,a,n.pendingProps);case 24:return Cr(n),s=qn(Cn),t===null?(c=Mu(),c===null&&(c=on,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),Wa(n,Cn,c)):((t.lanes&a)!==0&&(bu(t,n),To(n,null,null,a),Eo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Wa(n,Cn,s)):(s=f.cache,Wa(n,Cn,s),s!==c.cache&&xu(n,[Cn],a,!0))),Yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ba(t){t.flags|=4}function of(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(fg())t.flags|=8192;else throw Ur=Rl,Eu}else t.flags&=-16777217}function Im(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t0(n))if(fg())t.flags|=8192;else throw Ur=Rl,Eu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ve():536870912,t.lanes|=n,ys|=n)}function Do(t,n){if(!ze)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function hn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ex(t,n,a){var s=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(n),null;case 1:return hn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ya(Cn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ls(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),hn(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ba(n),f!==null?(hn(n),Im(n,f)):(hn(n),of(n,c,null,s,a))):f?f!==t.memoizedState?(ba(n),hn(n),Im(n,f)):(hn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ba(n),hn(n),of(n,c,t,s,a)),null;case 27:if(Ht(n),a=J.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return hn(n),null}t=Ct.current,ls(n)?vp(n):(t=qg(c,s,a),n.stateNode=t,ba(n))}return hn(n),null;case 5:if(Ht(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return hn(n),null}if(f=Ct.current,ls(n))vp(n);else{var g=rc(J.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[mn]=n,f[Nn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(jn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ba(n)}}return hn(n),of(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||ka(n,!0)}else t=rc(t).createTextNode(s),t[mn]=n,n.stateNode=t}return hn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ls(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),t=!1}else a=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ri(n),n):(Ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return hn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[mn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),c=!1}else c=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ri(n),n):(Ri(n),null)}return Ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),hn(n),null);case 4:return Ft(),t===null&&wf(n.stateNode.containerInfo),hn(n),null;case 10:return ya(n.type),hn(n),null;case 19:if(nt(En),s=n.memoizedState,s===null)return hn(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Do(s,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ul(t),f!==null){for(n.flags|=128,Do(s,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hp(a,t),a=a.sibling;return xt(En,En.current&1|2),ze&&xa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Zl&&(n.flags|=128,c=!0,Do(s,!1),n.lanes=4194304)}else{if(!c)if(t=Ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ze)return hn(n),null}else 2*E()-s.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,c=!0,Do(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=En.current,xt(En,c?a&1|2:a&1),ze&&xa(n,s.treeForkCount),t):(hn(n),null);case 22:case 23:return Ri(n),wu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(hn(n),n.subtreeFlags&6&&(n.flags|=8192)):hn(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(Cn),hn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function nx(t,n){switch(pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ya(Cn),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 31:if(n.memoizedState!==null){if(Ri(n),n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(En),null;case 4:return Ft(),null;case 10:return ya(n.type),null;case 22:case 23:return Ri(n),wu(),t!==null&&nt(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ya(Cn),null;case 25:return null;default:return null}}function Hm(t,n){switch(pu(n),n.tag){case 3:ya(Cn),Ft();break;case 26:case 27:case 5:Ht(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Ri(n);break;case 13:Ri(n);break;case 19:nt(En);break;case 10:ya(n.type);break;case 22:case 23:Ri(n),wu(),t!==null&&nt(wr);break;case 24:ya(Cn)}}function Uo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){Qe(n,n.return,T)}}function Qa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var B=a,tt=T;try{tt()}catch(dt){Qe(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){Qe(n,n.return,dt)}}function Gm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Up(n,a)}catch(s){Qe(t,t.return,s)}}}function Vm(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Qe(t,n,s)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Qe(t,n,c)}}function la(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Qe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Qe(t,n,c)}else a.current=null}function Xm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Qe(t,t.return,c)}}function lf(t,n,a){try{var s=t.stateNode;Tx(s,t.type,a,n),s[Nn]=n}catch(c){Qe(t,t.return,c)}}function km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ar(t.type)||t.tag===4}function cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ee));else if(s!==4&&(s===27&&ar(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(uf(t,n,a),t=t.sibling;t!==null;)uf(t,n,a),t=t.sibling}function Wl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ar(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wl(t,n,a),t=t.sibling;t!==null;)Wl(t,n,a),t=t.sibling}function Wm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);jn(n,s,a),n[mn]=t,n[Nn]=a}catch(f){Qe(t,t.return,f)}}var Aa=!1,Un=!1,ff=!1,qm=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function ix(t,n){if(t=t.containerInfo,Lf=dc,t=ap(t),iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,B=-1,tt=0,dt=0,mt=t,et=null;e:for(;;){for(var st;mt!==a||c!==0&&mt.nodeType!==3||(T=g+c),mt!==f||s!==0&&mt.nodeType!==3||(B=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(st=mt.firstChild)!==null;)et=mt,mt=st;for(;;){if(mt===t)break e;if(et===a&&++tt===c&&(T=g),et===f&&++dt===s&&(B=g),(st=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=st}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},dc=!1,Gn=n;Gn!==null;)if(n=Gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Gn=t;else for(;Gn!==null;){switch(n=Gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Kt=Or(a.type,c);t=s.getSnapshotBeforeUpdate(Kt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(de){Qe(a,a.return,de)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Gn=t;break}Gn=n.return}}function Ym(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a),s&4&&Uo(5,a);break;case 1:if(Ca(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Qe(a,a.return,g)}else{var c=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Qe(a,a.return,g)}}s&64&&Gm(a),s&512&&Lo(a,a.return);break;case 3:if(Ca(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Up(t,n)}catch(g){Qe(a,a.return,g)}}break;case 27:n===null&&s&4&&Wm(a);case 26:case 5:Ca(t,a),n===null&&s&4&&Xm(a),s&512&&Lo(a,a.return);break;case 12:Ca(t,a);break;case 31:Ca(t,a),s&4&&Km(t,a);break;case 13:Ca(t,a),s&4&&Qm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dx.bind(null,a),Lx(t,a))));break;case 22:if(s=a.memoizedState!==null||Aa,!s){n=n!==null&&n.memoizedState!==null||Un,c=Aa;var f=Un;Aa=s,(Un=n)&&!f?wa(t,a,(a.subtreeFlags&8772)!==0):Ca(t,a),Aa=c,Un=f}break;case 30:break;default:Ca(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,pi=!1;function Ra(t,n,a){for(a=a.child;a!==null;)Zm(t,n,a),a=a.sibling}function Zm(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Un||la(a,n),Ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Un||la(a,n);var s=pn,c=pi;ar(a.type)&&(pn=a.stateNode,pi=!1),Ra(t,n,a),Go(a.stateNode),pn=s,pi=c;break;case 5:Un||la(a,n);case 6:if(s=pn,c=pi,pn=null,Ra(t,n,a),pn=s,pi=c,pn!==null)if(pi)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(a.stateNode)}catch(f){Qe(a,n,f)}else try{pn.removeChild(a.stateNode)}catch(f){Qe(a,n,f)}break;case 18:pn!==null&&(pi?(t=pn,Gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ws(t)):Gg(pn,a.stateNode));break;case 4:s=pn,c=pi,pn=a.stateNode.containerInfo,pi=!0,Ra(t,n,a),pn=s,pi=c;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Un||Qa(4,a,n),Ra(t,n,a);break;case 1:Un||(la(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Vm(a,n,s)),Ra(t,n,a);break;case 21:Ra(t,n,a);break;case 22:Un=(s=Un)||a.memoizedState!==null,Ra(t,n,a),Un=s;break;default:Ra(t,n,a)}}function Km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ws(t)}catch(a){Qe(n,n.return,a)}}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ws(t)}catch(a){Qe(n,n.return,a)}}function ax(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qm),n;default:throw Error(r(435,t.tag))}}function ql(t,n){var a=ax(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=hx.bind(null,t,s);s.then(c,c)}})}function mi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(ar(T.type)){pn=T.stateNode,pi=!1;break t}break;case 5:pn=T.stateNode,pi=!1;break t;case 3:case 4:pn=T.stateNode.containerInfo,pi=!0;break t}T=T.return}if(pn===null)throw Error(r(160));Zm(f,g,c),pn=null,pi=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jm(n,t),n=n.sibling}var Zi=null;function Jm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:mi(n,t),gi(t),s&4&&(Qa(3,t,t.return),Uo(3,t),Qa(5,t,t.return));break;case 1:mi(n,t),gi(t),s&512&&(Un||a===null||la(a,a.return)),s&64&&Aa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Zi;if(mi(n,t),gi(t),s&512&&(Un||a===null||la(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ri]||f[mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),jn(f,s,a),f[mn]=t,_t(f),s=f;break t;case"link":var g=Jg("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(s),jn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Jg("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(s),jn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[mn]=t,_t(f),s=f}t.stateNode=s}else $g(c,t.type,t.stateNode);else t.stateNode=Qg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?$g(c,t.type,t.stateNode):Qg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:mi(n,t),gi(t),s&512&&(Un||a===null||la(a,a.return)),a!==null&&s&4&&lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(mi(n,t),gi(t),s&512&&(Un||a===null||la(a,a.return)),t.flags&32){c=t.stateNode;try{ra(c,"")}catch(Kt){Qe(t,t.return,Kt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,lf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(ff=!0);break;case 6:if(mi(n,t),gi(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Kt){Qe(t,t.return,Kt)}}break;case 3:if(lc=null,c=Zi,Zi=sc(n.containerInfo),mi(n,t),Zi=c,gi(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ws(n.containerInfo)}catch(Kt){Qe(t,t.return,Kt)}ff&&(ff=!1,$m(t));break;case 4:s=Zi,Zi=sc(t.stateNode.containerInfo),mi(n,t),gi(t),Zi=s;break;case 12:mi(n,t),gi(t);break;case 31:mi(n,t),gi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 13:mi(n,t),gi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=Aa,dt=Un;if(Aa=tt||c,Un=dt||B,mi(n,t),Un=dt,Aa=tt,gi(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Aa||Un||zr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Kt){Qe(B,B.return,Kt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Kt){Qe(B,B.return,Kt)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?Vg(st,!0):Vg(B.stateNode,!1)}catch(Kt){Qe(B,B.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ql(t,a))));break;case 19:mi(n,t),gi(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 30:break;case 21:break;default:mi(n,t),gi(t)}}function gi(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(km(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Wl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(ra(g,""),a.flags&=-33);var T=cf(t);Wl(t,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=cf(t);uf(t,tt,B);break;default:throw Error(r(161))}}catch(dt){Qe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $m(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Qa(4,n,n.return),zr(n);break;case 1:la(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vm(n,n.return,a),zr(n);break;case 27:Go(n.stateNode);case 26:case 5:la(n,n.return),zr(n);break;case 22:n.memoizedState===null&&zr(n);break;case 30:zr(n);break;default:zr(n)}t=t.sibling}}function wa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:wa(c,f,a),Uo(4,f);break;case 1:if(wa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Qe(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Dp(B[c],T)}catch(tt){Qe(s,s.return,tt)}}a&&g&64&&Gm(f),Lo(f,f.return);break;case 27:Wm(f);case 26:case 5:wa(c,f,a),a&&s===null&&g&4&&Xm(f),Lo(f,f.return);break;case 12:wa(c,f,a);break;case 31:wa(c,f,a),a&&g&4&&Km(c,f);break;case 13:wa(c,f,a),a&&g&4&&Qm(c,f);break;case 22:f.memoizedState===null&&wa(c,f,a),Lo(f,f.return);break;case 30:break;default:wa(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vo(a))}function hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t))}function Ki(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(t,n,a,s),n=n.sibling}function tg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ki(t,n,a,s),c&2048&&Uo(9,n);break;case 1:Ki(t,n,a,s);break;case 3:Ki(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t)));break;case 12:if(c&2048){Ki(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Qe(n,n.return,B)}}else Ki(t,n,a,s);break;case 31:Ki(t,n,a,s);break;case 13:Ki(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ki(t,n,a,s):No(t,n):f._visibility&2?Ki(t,n,a,s):(f._visibility|=2,vs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:Ki(t,n,a,s),c&2048&&hf(n.alternate,n);break;default:Ki(t,n,a,s)}}function vs(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,B=s,tt=g.flags;switch(g.tag){case 0:case 11:case 15:vs(f,g,T,B,c),Uo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?vs(f,g,T,B,c):No(f,g):(dt._visibility|=2,vs(f,g,T,B,c)),c&&tt&2048&&df(g.alternate,g);break;case 24:vs(f,g,T,B,c),c&&tt&2048&&hf(g.alternate,g);break;default:vs(f,g,T,B,c)}n=n.sibling}}function No(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:No(a,s),c&2048&&df(s.alternate,s);break;case 24:No(a,s),c&2048&&hf(s.alternate,s);break;default:No(a,s)}n=n.sibling}}var Oo=8192;function xs(t,n,a){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)eg(t,n,a),t=t.sibling}function eg(t,n,a){switch(t.tag){case 26:xs(t,n,a),t.flags&Oo&&t.memoizedState!==null&&kx(a,Zi,t.memoizedState,t.memoizedProps);break;case 5:xs(t,n,a);break;case 3:case 4:var s=Zi;Zi=sc(t.stateNode.containerInfo),xs(t,n,a),Zi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Oo,Oo=16777216,xs(t,n,a),Oo=s):xs(t,n,a));break;default:xs(t,n,a)}}function ng(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Gn=s,ag(s,t)}ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ig(t),t=t.sibling}function ig(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&Qa(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):zo(t);break;default:zo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Gn=s,ag(s,t)}ng(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function ag(t,n){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:vo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Gn=s;else t:for(a=t;Gn!==null;){s=Gn;var c=s.sibling,f=s.return;if(jm(s),s===a){Gn=null;break t}if(c!==null){c.return=f,Gn=c;break t}Gn=f}}}var rx={getCacheForType:function(t){var n=qn(Cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return qn(Cn).controller.signal}},sx=typeof WeakMap=="function"?WeakMap:Map,je=0,on=null,Re=null,Ne=0,Ke=0,Ci=null,Ja=!1,Ss=!1,pf=!1,Da=0,Sn=0,$a=0,Pr=0,mf=0,wi=0,ys=0,Po=null,_i=null,gf=!1,jl=0,rg=0,Zl=1/0,Kl=null,tr=null,Pn=0,er=null,Ms=null,Ua=0,_f=0,vf=null,sg=null,Bo=0,xf=null;function Di(){return(je&2)!==0&&Ne!==0?Ne&-Ne:z.T!==null?bf():ga()}function og(){if(wi===0)if((Ne&536870912)===0||ze){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),wi=t}else wi=536870912;return t=Ai.current,t!==null&&(t.flags|=32),wi}function vi(t,n,a){(t===on&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(Es(t,0),nr(t,Ne,wi,!1)),De(t,a),((je&2)===0||t!==on)&&(t===on&&((je&2)===0&&(Pr|=a),Sn===4&&nr(t,Ne,wi,!1)),ca(t))}function lg(t,n,a){if((je&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||kt(t,n),c=s?cx(t,n):yf(t,n,!0),f=s;do{if(c===0){Ss&&!s&&nr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ox(a)){c=yf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=Po;var B=T.current.memoizedState.isDehydrated;if(B&&(Es(T,g).flags|=256),g=yf(T,g,!1),g!==2){if(pf&&!B){T.errorRecoveryDisabledLanes|=f,Pr|=f,c=4;break t}f=_i,_i=c,f!==null&&(_i===null?_i=f:_i.push.apply(_i,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Es(t,0),nr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:nr(s,n,wi,!Ja);break t;case 2:_i=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=jl+300-E(),10<c)){if(nr(s,n,wi,!Ja),pt(s,0,!0)!==0)break t;Ua=n,s.timeoutHandle=Ig(cg.bind(null,s,a,_i,Kl,gf,n,wi,Pr,ys,Ja,f,"Throttled",-0,0),c);break t}cg(s,a,_i,Kl,gf,n,wi,Pr,ys,Ja,f,null,-0,0)}}break}while(!0);ca(t)}function cg(t,n,a,s,c,f,g,T,B,tt,dt,mt,et,st){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ee},eg(n,f,mt);var Kt=(f&62914560)===f?jl-E():(f&4194048)===f?rg-E():0;if(Kt=Wx(mt,Kt),Kt!==null){Ua=f,t.cancelPendingCommit=Kt(_g.bind(null,t,n,f,a,s,c,g,T,B,dt,mt,null,et,st)),nr(t,f,g,!tt);return}}_g(t,n,f,a,s,c,g,T,B)}function ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Ti(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(t,n,a,s){n&=~mf,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&$e(t,a,n)}function Ql(){return(je&6)===0?(Fo(0),!1):!0}function Sf(){if(Re!==null){if(Ke===0)var t=Re.return;else t=Re,Sa=Rr=null,zu(t),hs=null,So=0,t=Re;for(;t!==null;)Hm(t.alternate,t),t=t.return;Re=null}}function Es(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Rx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ua=0,Sf(),on=t,Re=a=va(t.current,null),Ne=n,Ke=0,Ci=null,Ja=!1,Ss=kt(t,n),pf=!1,ys=wi=mf=Pr=$a=Sn=0,_i=Po=null,gf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Bt(s),f=1<<c;n|=t[c],s&=~f}return Da=n,vl(),a}function ug(t,n){ve=null,z.H=Co,n===ds||n===Al?(n=Ap(),Ke=3):n===Eu?(n=Ap(),Ke=4):Ke=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ci=n,Re===null&&(Sn=1,Hl(t,Pi(n,t.current)))}function fg(){var t=Ai.current;return t===null?!0:(Ne&4194048)===Ne?Hi===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Hi:!1}function dg(){var t=z.H;return z.H=Co,t===null?Co:t}function hg(){var t=z.A;return z.A=rx,t}function Jl(){Sn=4,Ja||(Ne&4194048)!==Ne&&Ai.current!==null||(Ss=!0),($a&134217727)===0&&(Pr&134217727)===0||on===null||nr(on,Ne,wi,!1)}function yf(t,n,a){var s=je;je|=2;var c=dg(),f=hg();(on!==t||Ne!==n)&&(Kl=null,Es(t,n)),n=!1;var g=Sn;t:do try{if(Ke!==0&&Re!==null){var T=Re,B=Ci;switch(Ke){case 8:Sf(),g=6;break t;case 3:case 2:case 9:case 6:Ai.current===null&&(n=!0);var tt=Ke;if(Ke=0,Ci=null,Ts(t,T,B,tt),a&&Ss){g=0;break t}break;default:tt=Ke,Ke=0,Ci=null,Ts(t,T,B,tt)}}lx(),g=Sn;break}catch(dt){ug(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Sa=Rr=null,je=s,z.H=c,z.A=f,Re===null&&(on=null,Ne=0,vl()),g}function lx(){for(;Re!==null;)pg(Re)}function cx(t,n){var a=je;je|=2;var s=dg(),c=hg();on!==t||Ne!==n?(Kl=null,Zl=E()+500,Es(t,n)):Ss=kt(t,n);t:do try{if(Ke!==0&&Re!==null){n=Re;var f=Ci;e:switch(Ke){case 1:Ke=0,Ci=null,Ts(t,n,f,1);break;case 2:case 9:if(Tp(f)){Ke=0,Ci=null,mg(n);break}n=function(){Ke!==2&&Ke!==9||on!==t||(Ke=7),ca(t)},f.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:Tp(f)?(Ke=0,Ci=null,mg(n)):(Ke=0,Ci=null,Ts(t,n,f,7));break;case 5:var g=null;switch(Re.tag){case 26:g=Re.memoizedState;case 5:case 27:var T=Re;if(g?t0(g):T.stateNode.complete){Ke=0,Ci=null;var B=T.sibling;if(B!==null)Re=B;else{var tt=T.return;tt!==null?(Re=tt,$l(tt)):Re=null}break e}}Ke=0,Ci=null,Ts(t,n,f,5);break;case 6:Ke=0,Ci=null,Ts(t,n,f,6);break;case 8:Sf(),Sn=6;break t;default:throw Error(r(462))}}ux();break}catch(dt){ug(t,dt)}while(!0);return Sa=Rr=null,z.H=s,z.A=c,je=a,Re!==null?0:(on=null,Ne=0,vl(),Sn)}function ux(){for(;Re!==null&&!sn();)pg(Re)}function pg(t){var n=Fm(t.alternate,t,Da);t.memoizedProps=t.pendingProps,n===null?$l(t):Re=n}function mg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:zu(n);default:Hm(a,n),n=Re=hp(n,Da),n=Fm(a,n,Da)}t.memoizedProps=t.pendingProps,n===null?$l(t):Re=n}function Ts(t,n,a,s){Sa=Rr=null,zu(n),hs=null,So=0;var c=n.return;try{if(Jv(t,c,n,a,Ne)){Sn=1,Hl(t,Pi(a,t.current)),Re=null;return}}catch(f){if(c!==null)throw Re=c,f;Sn=1,Hl(t,Pi(a,t.current)),Re=null;return}n.flags&32768?(ze||s===1?t=!0:Ss||(Ne&536870912)!==0?t=!1:(Ja=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ai.current,s!==null&&s.tag===13&&(s.flags|=16384))),gg(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){gg(n,Ja);return}t=n.return;var a=ex(n.alternate,n,Da);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=t}while(n!==null);Sn===0&&(Sn=5)}function gg(t,n){do{var a=nx(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);Sn=6,Re=null}function _g(t,n,a,s,c,f,g,T,B){t.cancelPendingCommit=null;do tc();while(Pn!==0);if((je&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lu,di(t,a,f,g,T,B),t===on&&(Re=on=null,Ne=0),Ms=n,er=t,Ua=a,_f=f,vf=c,sg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,px(lt,function(){return Mg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=j.p,j.p=2,g=je,je|=4;try{ix(t,n,a)}finally{je=g,j.p=c,z.T=s}}Pn=1,vg(),xg(),Sg()}}function vg(){if(Pn===1){Pn=0;var t=er,n=Ms,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=je;je|=4;try{Jm(n,t);var f=Nf,g=ap(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&ip(T.ownerDocument.documentElement,T)){if(B!==null&&iu(T)){var tt=B.start,dt=B.end;if(dt===void 0&&(dt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(dt,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var st=et.getSelection(),Kt=T.textContent.length,de=Math.min(B.start,Kt),nn=B.end===void 0?de:Math.min(B.end,Kt);!st.extend&&de>nn&&(g=nn,nn=de,de=g);var Y=np(T,de),H=np(T,nn);if(Y&&H&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var $=mt.createRange();$.setStart(Y.node,Y.offset),st.removeAllRanges(),de>nn?(st.addRange($),st.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),st.addRange($))}}}}for(mt=[],st=T;st=st.parentNode;)st.nodeType===1&&mt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}dc=!!Lf,Nf=Lf=null}finally{je=c,j.p=s,z.T=a}}t.current=n,Pn=2}}function xg(){if(Pn===2){Pn=0;var t=er,n=Ms,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=je;je|=4;try{Ym(t,n.alternate,n)}finally{je=c,j.p=s,z.T=a}}Pn=3}}function Sg(){if(Pn===4||Pn===3){Pn=0,U();var t=er,n=Ms,a=Ua,s=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pn=5:(Pn=0,Ms=er=null,yg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(tr=null),qi(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=j.p,j.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{z.T=n,j.p=c}}(Ua&3)!==0&&tc(),ca(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===xf?Bo++:(Bo=0,xf=t):Bo=0,Fo(0)}}function yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,vo(n)))}function tc(){return vg(),xg(),Sg(),Mg()}function Mg(){if(Pn!==5)return!1;var t=er,n=_f;_f=0;var a=qi(Ua),s=z.T,c=j.p;try{j.p=32>a?32:a,z.T=null,a=vf,vf=null;var f=er,g=Ua;if(Pn=0,Ms=er=null,Ua=0,(je&6)!==0)throw Error(r(331));var T=je;if(je|=4,ig(f.current),tg(f,f.current,g,a),je=T,Fo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{j.p=c,z.T=s,yg(t,n)}}function Eg(t,n,a){n=Pi(a,n),n=Ku(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(De(t,2),ca(t))}function Qe(t,n,a){if(t.tag===3)Eg(t,t,a);else for(;n!==null;){if(n.tag===3){Eg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(tr===null||!tr.has(s))){t=Pi(a,t),a=Tm(2),s=ja(n,a,2),s!==null&&(bm(a,s,n,t),De(s,2),ca(s));break}}n=n.return}}function Mf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new sx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(pf=!0,c.add(a),t=fx.bind(null,t,n,a),n.then(t,t))}function fx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Ne&a)===a&&(Sn===4||Sn===3&&(Ne&62914560)===Ne&&300>E()-jl?(je&2)===0&&Es(t,0):mf|=a,ys===Ne&&(ys=0)),ca(t)}function Tg(t,n){n===0&&(n=Ve()),t=Tr(t,n),t!==null&&(De(t,n),ca(t))}function dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(t,a)}function hx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Tg(t,a)}function px(t,n){return pe(t,n)}var ec=null,bs=null,Ef=!1,nc=!1,Tf=!1,ir=0;function ca(t){t!==bs&&t.next===null&&(bs===null?ec=bs=t:bs=bs.next=t),nc=!0,Ef||(Ef=!0,gx())}function Fo(t,n){if(!Tf&&nc){Tf=!0;do for(var a=!1,s=ec;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Cg(s,f))}else f=Ne,f=pt(s,s===on?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||kt(s,f)||(a=!0,Cg(s,f));s=s.next}while(a);Tf=!1}}function mx(){bg()}function bg(){nc=Ef=!1;var t=0;ir!==0&&Ax()&&(t=ir);for(var n=E(),a=null,s=ec;s!==null;){var c=s.next,f=Ag(s,n);f===0?(s.next=null,a===null?ec=c:a.next=c,c===null&&(bs=a)):(a=s,(t!==0||(f&3)!==0)&&(nc=!0)),s=c}Pn!==0&&Pn!==5||Fo(t),ir!==0&&(ir=0)}function Ag(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Bt(f),T=1<<g,B=c[g];B===-1?((T&a)===0||(T&s)!==0)&&(c[g]=fe(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=on,a=Ne,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ln(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||kt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ln(s),qi(a)){case 2:case 8:a=St;break;case 32:a=lt;break;case 268435456:a=wt;break;default:a=lt}return s=Rg.bind(null,t),a=pe(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ln(s),t.callbackPriority=2,t.callbackNode=null,2}function Rg(t,n){if(Pn!==0&&Pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var s=Ne;return s=pt(t,t===on?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(lg(t,s,n),Ag(t,E()),t.callbackNode!=null&&t.callbackNode===a?Rg.bind(null,t):null)}function Cg(t,n){if(tc())return null;lg(t,n,!0)}function gx(){Cx(function(){(je&6)!==0?pe(ut,mx):bg()})}function bf(){if(ir===0){var t=us;t===0&&(t=Mt,Mt<<=1,(Mt&261888)===0&&(Mt=256)),ir=t}return ir}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Me(""+t)}function Dg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _x(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=wg((c[Nn]||null).action),g=s.submitter;g&&(n=(n=g[Nn]||null)?wg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new pl("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ir!==0){var B=g?Dg(c,g):new FormData(c);ku(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?Dg(c,g):new FormData(c),ku(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],vx=Rf.toLowerCase(),xx=Rf[0].toUpperCase()+Rf.slice(1);ji(vx,"on"+xx)}ji(op,"onAnimationEnd"),ji(lp,"onAnimationIteration"),ji(cp,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(zv,"onTransitionRun"),ji(Pv,"onTransitionStart"),ji(Bv,"onTransitionCancel"),ji(up,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Ug(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],B=T.instance,tt=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(dt){_l(dt)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(T=s[g],B=T.instance,tt=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(dt){_l(dt)}c.currentTarget=null,f=B}}}}function Ce(t,n){var a=n[Mi];a===void 0&&(a=n[Mi]=new Set);var s=t+"__bubble";a.has(s)||(Lg(n,t,2,!1),a.add(s))}function Cf(t,n,a){var s=0;n&&(s|=4),Lg(a,t,s,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[ic]){t[ic]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||Cf(a,!1,t),Cf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,Cf("selectionchange",!1,n))}}function Lg(t,n,a,s){switch(o0(n)){case 2:var c=jx;break;case 8:c=Zx;break;default:c=kf}a=c.bind(null,n,a,t),c=void 0,!li||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Df(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=W(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Oi(function(){var tt=f,dt=Zn(a),mt=[];t:{var et=fp.get(t);if(et!==void 0){var st=pl,Kt=t;switch(t){case"keypress":if(Ei(a)===0)break t;case"keydown":case"keyup":st=hv;break;case"focusin":Kt="focus",st=Jc;break;case"focusout":Kt="blur",st=Jc;break;case"beforeblur":case"afterblur":st=Jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=gv;break;case op:case lp:case cp:st=av;break;case up:st=vv;break;case"scroll":case"scrollend":st=$_;break;case"wheel":st=Sv;break;case"copy":case"cut":case"paste":st=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Vh;break;case"toggle":case"beforetoggle":st=Mv}var de=(n&4)!==0,nn=!de&&(t==="scroll"||t==="scrollend"),Y=de?et!==null?et+"Capture":null:et;de=[];for(var H=tt,$;H!==null;){var ht=H;if($=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||$===null||Y===null||(ht=oi(H,Y),ht!=null&&de.push(Ho(H,ht,$))),nn)break;H=H.return}0<de.length&&(et=new st(et,Kt,null,a,dt),mt.push({event:et,listeners:de}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",et&&a!==un&&(Kt=a.relatedTarget||a.fromElement)&&(W(Kt)||Kt[ai]))break t;if((st||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,st?(Kt=a.relatedTarget||a.toElement,st=tt,Kt=Kt?W(Kt):null,Kt!==null&&(nn=u(Kt),de=Kt.tag,Kt!==nn||de!==5&&de!==27&&de!==6)&&(Kt=null)):(st=null,Kt=tt),st!==Kt)){if(de=Hh,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(de=Vh,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),nn=st==null?et:rt(st),$=Kt==null?et:rt(Kt),et=new de(ht,H+"leave",st,a,dt),et.target=nn,et.relatedTarget=$,ht=null,W(dt)===tt&&(de=new de(Y,H+"enter",Kt,a,dt),de.target=$,de.relatedTarget=nn,ht=de),nn=ht,st&&Kt)e:{for(de=yx,Y=st,H=Kt,$=0,ht=Y;ht;ht=de(ht))$++;ht=0;for(var oe=H;oe;oe=de(oe))ht++;for(;0<$-ht;)Y=de(Y),$--;for(;0<ht-$;)H=de(H),ht--;for(;$--;){if(Y===H||H!==null&&Y===H.alternate){de=Y;break e}Y=de(Y),H=de(H)}de=null}else de=null;st!==null&&Ng(mt,et,st,de,!1),Kt!==null&&nn!==null&&Ng(mt,nn,Kt,de,!0)}}t:{if(et=tt?rt(tt):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var Xe=Kh;else if(jh(et))if(Qh)Xe=Lv;else{Xe=Dv;var ne=wv}else st=et.nodeName,!st||st.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?tt&&Lt(tt.elementType)&&(Xe=Kh):Xe=Uv;if(Xe&&(Xe=Xe(t,tt))){Zh(mt,Xe,a,dt);break t}ne&&ne(t,et,tt),t==="focusout"&&tt&&et.type==="number"&&tt.memoizedProps.value!=null&&Ze(et,"number",et.value)}switch(ne=tt?rt(tt):window,t){case"focusin":(jh(ne)||ne.contentEditable==="true")&&(ns=ne,au=tt,mo=null);break;case"focusout":mo=au=ns=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,rp(mt,a,dt);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":rp(mt,a,dt)}var xe;if(tu)t:{switch(t){case"compositionstart":var Oe="onCompositionStart";break t;case"compositionend":Oe="onCompositionEnd";break t;case"compositionupdate":Oe="onCompositionUpdate";break t}Oe=void 0}else es?qh(t,a)&&(Oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(Xh&&a.locale!=="ko"&&(es||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&es&&(xe=vn()):(Et=dt,jt="value"in Et?Et.value:Et.textContent,es=!0)),ne=ac(tt,Oe),0<ne.length&&(Oe=new Gh(Oe,t,null,a,dt),mt.push({event:Oe,listeners:ne}),xe?Oe.data=xe:(xe=Yh(a),xe!==null&&(Oe.data=xe)))),(xe=Tv?bv(t,a):Av(t,a))&&(Oe=ac(tt,"onBeforeInput"),0<Oe.length&&(ne=new Gh("onBeforeInput","beforeinput",null,a,dt),mt.push({event:ne,listeners:Oe}),ne.data=xe)),_x(mt,t,tt,a,dt)}Ug(mt,n)})}function Ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=oi(t,a),c!=null&&s.unshift(Ho(t,c,f)),c=oi(t,n),c!=null&&s.push(Ho(t,c,f))),t.tag===3)return s;t=t.return}return[]}function yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,B=T.alternate,tt=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||tt===null||(B=tt,c?(tt=oi(a,f),tt!=null&&g.unshift(Ho(a,tt,B))):c||(tt=oi(a,f),tt!=null&&g.push(Ho(a,tt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(Mx,`
`).replace(Ex,"")}function zg(t,n){return n=Og(n),Og(t)===n}function en(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ra(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ra(t,""+s);break;case"className":Fe(t,"class",s);break;case"tabIndex":Fe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(t,a,s);break;case"style":oo(t,s,f);break;case"data":if(n!=="object"){Fe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Me(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&en(t,n,"name",c.name,c,null),en(t,n,"formEncType",c.formEncType,c,null),en(t,n,"formMethod",c.formMethod,c,null),en(t,n,"formTarget",c.formTarget,c,null)):(en(t,n,"encType",c.encType,c,null),en(t,n,"method",c.method,c,null),en(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Me(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ee);break;case"onScroll":s!=null&&Ce("scroll",t);break;case"onScrollEnd":s!=null&&Ce("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Me(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":me(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":me(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":me(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":me(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":me(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":me(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":me(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=re.get(a)||a,Wt(t,a,s))}}function Uf(t,n,a,s,c,f){switch(a){case"style":oo(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?ra(t,s):(typeof s=="number"||typeof s=="bigint")&&ra(t,""+s);break;case"onScroll":s!=null&&Ce("scroll",t);break;case"onScrollEnd":s!=null&&Ce("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ee);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function jn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,f,g,a,null)}}c&&en(t,n,"srcSet",a.srcSet,a,null),s&&en(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var T=f=g=c=null,B=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:en(t,n,s,dt,a,null)}}In(t,f,T,B,tt,g,c,!1);return;case"select":Ce("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:en(t,n,c,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?cn(t,!!s,n,!1):a!=null&&cn(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:en(t,n,g,T,a,null)}hi(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:en(t,n,B,s,a,null)}return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<Io.length;s++)Ce(Io[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,tt,s,a,null)}return;default:if(Lt(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Uf(t,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&en(t,n,T,s,a,null))}function Tx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,B=null,tt=null,dt=null;for(st in a){var mt=a[st];if(a.hasOwnProperty(st)&&mt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=mt;default:s.hasOwnProperty(st)||en(t,n,st,null,s,mt)}}for(var et in s){var st=s[et];if(mt=a[et],s.hasOwnProperty(et)&&(st!=null||mt!=null))switch(et){case"type":f=st;break;case"name":c=st;break;case"checked":tt=st;break;case"defaultChecked":dt=st;break;case"value":g=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==mt&&en(t,n,et,st,s,mt)}}zn(t,g,T,B,tt,dt,f,c);return;case"select":st=g=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:s.hasOwnProperty(f)||en(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&en(t,n,c,f,s,B)}n=T,a=g,s=st,et!=null?cn(t,!!a,et,!1):!!s!=!!a&&(n!=null?cn(t,!!a,n,!0):cn(t,!!a,a?[]:"",!1));return;case"textarea":st=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:en(t,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":et=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&en(t,n,g,c,s,f)}si(t,et,st);return;case"option":for(var Kt in a)if(et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!s.hasOwnProperty(Kt))switch(Kt){case"selected":t.selected=!1;break;default:en(t,n,Kt,null,s,et)}for(B in s)if(et=s[B],st=a[B],s.hasOwnProperty(B)&&et!==st&&(et!=null||st!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:en(t,n,B,et,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)et=a[de],a.hasOwnProperty(de)&&et!=null&&!s.hasOwnProperty(de)&&en(t,n,de,null,s,et);for(tt in s)if(et=s[tt],st=a[tt],s.hasOwnProperty(tt)&&et!==st&&(et!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:en(t,n,tt,et,s,st)}return;default:if(Lt(n)){for(var nn in a)et=a[nn],a.hasOwnProperty(nn)&&et!==void 0&&!s.hasOwnProperty(nn)&&Uf(t,n,nn,void 0,s,et);for(dt in s)et=s[dt],st=a[dt],!s.hasOwnProperty(dt)||et===st||et===void 0&&st===void 0||Uf(t,n,dt,et,s,st);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!s.hasOwnProperty(Y)&&en(t,n,Y,null,s,et);for(mt in s)et=s[mt],st=a[mt],!s.hasOwnProperty(mt)||et===st||et==null&&st==null||en(t,n,mt,et,s,st)}function Pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Pg(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],tt=B.startTime;if(tt>T)break;var dt=B.transferSize,mt=B.initiatorType;dt&&Pg(mt)&&(B=B.responseEnd,g+=dt*(B<T?1:(T-tt)/(B-tt)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lf=null,Nf=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function Bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Ax(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(wx)}:Ig;function wx(t){setTimeout(function(){throw t})}function ar(t){return t==="head"}function Gg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ws(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[ri]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Go(t.ownerDocument.body);a=c}while(a);ws(n)}function Vg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Dx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ri])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Gi(t.nextSibling),t===null)break}return null}function Ux(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Gi(t.nextSibling),t===null))return null;return t}function Xg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Gi(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var If=null;function kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function qg(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var Vi=new Map,Yg=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=j.d;j.d={f:Nx,r:Ox,D:zx,C:Px,L:Bx,m:Fx,X:Hx,S:Ix,M:Gx};function Nx(){var t=La.f(),n=Ql();return t||n}function Ox(t){var n=it(t);n!==null&&n.tag===5&&n.type==="form"?um(n):La.r(t)}var As=typeof document>"u"?null:document;function jg(t,n,a){var s=As;if(s&&typeof n=="string"&&n){var c=Ae(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),jn(n,"link",t),_t(n),s.head.appendChild(n)))}}function zx(t){La.D(t),jg("dns-prefetch",t,null)}function Px(t,n){La.C(t,n),jg("preconnect",t,n)}function Bx(t,n,a){La.L(t,n,a);var s=As;if(s&&t&&n){var c='link[rel="preload"][as="'+Ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ae(a.imageSizes)+'"]')):c+='[href="'+Ae(t)+'"]';var f=c;switch(n){case"style":f=Rs(t);break;case"script":f=Cs(t)}Vi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Vi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Vo(f))||n==="script"&&s.querySelector(Xo(f))||(n=s.createElement("link"),jn(n,"link",t),_t(n),s.head.appendChild(n)))}}function Fx(t,n){La.m(t,n);var a=As;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ae(s)+'"][href="'+Ae(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Cs(t)}if(!Vi.has(f)&&(t=_({rel:"modulepreload",href:t},n),Vi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(f)))return}s=a.createElement("link"),jn(s,"link",t),_t(s),a.head.appendChild(s)}}}function Ix(t,n,a){La.S(t,n,a);var s=As;if(s&&t){var c=q(s).hoistableStyles,f=Rs(t);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(Vo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Vi.get(f))&&Hf(t,a);var B=g=s.createElement("link");_t(B),jn(B,"link",t),B._p=new Promise(function(tt,dt){B.onload=tt,B.onerror=dt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oc(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function Hx(t,n){La.X(t,n);var a=As;if(a&&t){var s=q(a).hoistableScripts,c=Cs(t),f=s.get(c);f||(f=a.querySelector(Xo(c)),f||(t=_({src:t,async:!0},n),(n=Vi.get(c))&&Gf(t,n),f=a.createElement("script"),_t(f),jn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Gx(t,n){La.M(t,n);var a=As;if(a&&t){var s=q(a).hoistableScripts,c=Cs(t),f=s.get(c);f||(f=a.querySelector(Xo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Vi.get(c))&&Gf(t,n),f=a.createElement("script"),_t(f),jn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zg(t,n,a,s){var c=(c=J.current)?sc(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rs(a.href),a=q(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rs(a.href);var f=q(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Vo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),Vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vi.set(t,a),f||Vx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cs(a),a=q(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Rs(t){return'href="'+Ae(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function Kg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),jn(n,"link",a),_t(n),t.head.appendChild(n))}function Cs(t){return'[src="'+Ae(t)+'"]'}function Xo(t){return"script[async]"+t}function Qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ae(a.href)+'"]');if(s)return n.instance=s,_t(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),_t(s),jn(s,"style",c),oc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Rs(a.href);var f=t.querySelector(Vo(c));if(f)return n.state.loading|=4,n.instance=f,_t(f),f;s=Kg(a),(c=Vi.get(c))&&Hf(s,c),f=(t.ownerDocument||t).createElement("link"),_t(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),jn(f,"link",s),n.state.loading|=4,oc(f,a.precedence,t),n.instance=f;case"script":return f=Cs(a.src),(c=t.querySelector(Xo(f)))?(n.instance=c,_t(c),c):(s=a,(c=Vi.get(f))&&(s=_({},a),Gf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),_t(c),jn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,oc(s,a.precedence,t));return n.instance}function oc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function Jg(t,n,a){if(lc===null){var s=new Map,c=lc=new Map;c.set(a,s)}else c=lc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ri]||f[mn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function $g(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Xx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function kx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Rs(s.href),f=n.querySelector(Vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_t(f);return}f=n.ownerDocument||n,s=Kg(s),(c=Vi.get(c))&&Hf(s,c),f=f.createElement("link"),_t(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),jn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function Wx(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Vf===0&&(Vf=62500*bx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Vf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(qx,t),uc=null,cc.call(t))}function qx(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var s=a.get(null);else{a=new Map,uc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=cc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var ko={$$typeof:N,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Yx(t,n,a,s,c,f,g,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function e0(t,n,a,s,c,f,g,T,B,tt,dt,mt){return t=new Yx(t,n,a,g,B,tt,dt,mt,T),n=1,f===!0&&(n|=24),f=bi(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),t}function n0(t){return t?(t=rs,t):rs}function i0(t,n,a,s,c,f){c=n0(c),s.context===null?s.context=c:s.pendingContext=c,s=Ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ja(t,s,n),a!==null&&(vi(a,t,n),Mo(a,t,n))}function a0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Xf(t,n){a0(t,n),(t=t.alternate)&&a0(t,n)}function r0(t){if(t.tag===13||t.tag===31){var n=Tr(t,67108864);n!==null&&vi(n,t,67108864),Xf(t,67108864)}}function s0(t){if(t.tag===13||t.tag===31){var n=Di();n=Wi(n);var a=Tr(t,n);a!==null&&vi(a,t,n),Xf(t,n)}}var dc=!0;function jx(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=2,kf(t,n,a,s)}finally{j.p=f,z.T=c}}function Zx(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=8,kf(t,n,a,s)}finally{j.p=f,z.T=c}}function kf(t,n,a,s){if(dc){var c=Wf(s);if(c===null)Df(t,n,s,hc,a),l0(t,s);else if(Qx(c,t,n,a,s))s.stopPropagation();else if(l0(t,s),n&4&&-1<Kx.indexOf(t)){for(;c!==null;){var f=it(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-Bt(g);T.entanglements[1]|=B,g&=~B}ca(f),(je&6)===0&&(Zl=E()+500,Fo(0))}}break;case 31:case 13:T=Tr(f,2),T!==null&&vi(T,f,2),Ql(),Xf(f,2)}if(f=Wf(s),f===null&&Df(t,n,s,hc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Df(t,n,s,null,a)}}function Wf(t){return t=Zn(t),qf(t)}var hc=null;function qf(t){if(hc=null,t=W(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function o0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case ut:return 2;case St:return 8;case lt:case ee:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Yf=!1,rr=null,sr=null,or=null,Wo=new Map,qo=new Map,lr=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l0(t,n){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=it(n),n!==null&&r0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Qx(t,n,a,s,c){switch(n){case"focusin":return rr=Yo(rr,t,n,a,s,c),!0;case"dragenter":return sr=Yo(sr,t,n,a,s,c),!0;case"mouseover":return or=Yo(or,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Wo.set(f,Yo(Wo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,qo.set(f,Yo(qo.get(f)||null,t,n,a,s,c)),!0}return!1}function c0(t){var n=W(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ii(t.priority,function(){s0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ii(t.priority,function(){s0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);un=s,a.target.dispatchEvent(s),un=null}else return n=it(a),n!==null&&r0(n),t.blockedOn=a,!1;n.shift()}return!0}function u0(t,n,a){pc(t)&&a.delete(n)}function Jx(){Yf=!1,rr!==null&&pc(rr)&&(rr=null),sr!==null&&pc(sr)&&(sr=null),or!==null&&pc(or)&&(or=null),Wo.forEach(u0),qo.forEach(u0)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jx)))}var gc=null;function f0(t){gc!==t&&(gc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=it(a);f!==null&&(t.splice(n,3),n-=3,ku(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ws(t){function n(B){return mc(B,t)}rr!==null&&mc(rr,t),sr!==null&&mc(sr,t),or!==null&&mc(or,t),Wo.forEach(n),qo.forEach(n);for(var a=0;a<lr.length;a++){var s=lr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)c0(a),a.blockedOn===null&&lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[Nn]||null;if(typeof f=="function")g||f0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Nn]||null)T=g.formAction;else if(qf(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),f0(a)}}}function d0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function jf(t){this._internalRoot=t}_c.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Di();i0(a,s,t,n,null,null)},_c.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;i0(t.current,2,null,t,null,null),Ql(),n[ai]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=ga();t={blockedOn:null,target:t,priority:n};for(var a=0;a<lr.length&&n!==0&&n<lr[a].priority;a++);lr.splice(a,0,t),a===0&&c0(t)}};var h0=e.version;if(h0!=="19.2.0")throw Error(r(527,h0,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var $x={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{bt=vc.inject($x),Rt=vc}catch{}}return Zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Sm,f=ym,g=Mm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=e0(t,1,!1,null,null,a,s,null,c,f,g,d0),t[ai]=n.current,wf(t),new jf(n)},Zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Sm,g=ym,T=Mm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=e0(t,1,!0,n,a??null,s,c,B,f,g,T,d0),n.context=n0(null),a=n.current,s=Di(),s=Wi(s),c=Ya(s),c.callback=null,ja(a,c,s),a=s,n.current.lanes=a,De(n,a),ca(n),t[ai]=n.current,wf(t),new _c(n)},Zo.version="19.2.0",Zo}var E0;function cS(){if(E0)return Qf.exports;E0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=lS(),Qf.exports}var uS=cS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="180",fS=0,T0=1,dS=2,T_=1,hS=2,Fa=3,xr=0,yi=1,Xn=2,_r=0,Ys=1,b0=2,A0=3,R0=4,pS=5,qr=100,mS=101,gS=102,_S=103,vS=104,xS=200,SS=201,yS=202,MS=203,Bd=204,Fd=205,ES=206,TS=207,bS=208,AS=209,RS=210,CS=211,wS=212,DS=213,US=214,Id=0,Hd=1,Gd=2,Zs=3,Vd=4,Xd=5,kd=6,Wd=7,Ah=0,LS=1,NS=2,vr=0,OS=1,zS=2,PS=3,BS=4,FS=5,IS=6,HS=7,b_=300,Ks=301,Qs=302,qd=303,Yd=304,jc=306,jr=1e3,Zr=1001,jd=1002,Ie=1003,GS=1004,xc=1005,fa=1006,ed=1007,Kr=1008,pa=1009,A_=1010,R_=1011,il=1012,Rh=1013,Jr=1014,Ia=1015,cl=1016,Ch=1017,wh=1018,al=1020,C_=35902,w_=35899,D_=1021,U_=1022,ia=1023,rl=1026,sl=1027,L_=1028,Dh=1029,N_=1030,Uh=1031,Lh=1033,Hc=33776,Gc=33777,Vc=33778,Xc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,th=37492,eh=37496,nh=37808,ih=37809,ah=37810,rh=37811,sh=37812,oh=37813,lh=37814,ch=37815,uh=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,gh=36492,_h=36494,vh=36495,xh=36283,Sh=36284,yh=36285,Mh=36286,VS=3200,XS=3201,O_=0,kS=1,gr="",ki="srgb",Js="srgb-linear",Wc="linear",an="srgb",Ds=7680,C0=519,WS=512,qS=513,YS=514,z_=515,jS=516,ZS=517,KS=518,QS=519,w0=35044,D0="300 es",da=2e3,qc=2001;class to{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Yc=180/Math.PI;function ul(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jn[o&255]+Jn[o>>8&255]+Jn[o>>16&255]+Jn[o>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]).toLowerCase()}function Pe(o,e,i){return Math.max(e,Math.min(i,o))}function JS(o,e){return(o%e+e)%e}function id(o,e,i){return(1-i)*o+i*e}function Ko(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function xi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,i=0){qe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Pe(this.x,e.x,i.x),this.y=Pe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Pe(this.x,e,i),this.y=Pe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Pe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3];const S=u[d+0],M=u[d+1],A=u[d+2],R=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(_!==R||m!==S||p!==M||x!==A){let y=1-h;const v=m*S+p*M+x*A+_*R,F=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const V=Math.sqrt(N),I=Math.atan2(V,v*F);y=Math.sin(y*I)/V,h=Math.sin(h*I)/V}const D=h*F;if(m=m*y+S*D,p=p*y+M*D,x=x*y+A*D,_=_*y+R*D,y===1-h){const V=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=V,p*=V,x*=V,_*=V}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[d],S=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+x*_+m*M-p*S,e[i+1]=m*A+x*S+p*_-h*M,e[i+2]=p*A+x*M+h*S-m*_,e[i+3]=x*A-h*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*x*_+p*M*A,this._y=p*M*_-S*x*A,this._z=p*x*A+S*M*_,this._w=p*x*_-S*M*A;break;case"YXZ":this._x=S*x*_+p*M*A,this._y=p*M*_-S*x*A,this._z=p*x*A-S*M*_,this._w=p*x*_+S*M*A;break;case"ZXY":this._x=S*x*_-p*M*A,this._y=p*M*_+S*x*A,this._z=p*x*A+S*M*_,this._w=p*x*_-S*M*A;break;case"ZYX":this._x=S*x*_-p*M*A,this._y=p*M*_+S*x*A,this._z=p*x*A-S*M*_,this._w=p*x*_+S*M*A;break;case"YZX":this._x=S*x*_+p*M*A,this._y=p*M*_+S*x*A,this._z=p*x*A-S*M*_,this._w=p*x*_-S*M*A;break;case"XZY":this._x=S*x*_-p*M*A,this._y=p*M*_-S*x*A,this._z=p*x*A+S*M*_,this._w=p*x*_+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+h+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),_=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=d*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-u*_,this.z=l+m*_+u*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Pe(this.x,e.x,i.x),this.y=Pe(this.y,e.y,i.y),this.z=Pe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Pe(this.x,e,i),this.y=Pe(this.y,e,i),this.z=Pe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Pe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new K,U0=new fl;class Se{constructor(e,i,r,l,u,d,h,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],M=r[5],A=r[8],R=l[0],y=l[3],v=l[6],F=l[1],N=l[4],D=l[7],V=l[2],I=l[5],P=l[8];return u[0]=d*R+h*F+m*V,u[3]=d*y+h*N+m*I,u[6]=d*v+h*D+m*P,u[1]=p*R+x*F+_*V,u[4]=p*y+x*N+_*I,u[7]=p*v+x*D+_*P,u[2]=S*R+M*F+A*V,u[5]=S*y+M*N+A*I,u[8]=S*v+M*D+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=x*d-h*p,S=h*m-x*u,M=p*u-d*m,A=i*_+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(l*p-x*r)*R,e[2]=(h*r-l*d)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(rd.makeScale(e,i)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new Se;function P_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ol(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $S(){const o=ol("canvas");return o.style.display="block",o}const L0={};function ll(o){o in L0||(L0[o]=!0,console.warn(o))}function ty(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const N0=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ey(){const o={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===an&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===an&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===gr?Wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Js]:{primaries:e,whitePoint:r,transfer:Wc,toXYZ:N0,fromXYZ:O0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ki},outputColorSpaceConfig:{drawingBufferColorSpace:ki}},[ki]:{primaries:e,whitePoint:r,transfer:an,toXYZ:N0,fromXYZ:O0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ki}}}),o}const We=ey();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function js(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Us;class ny{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=ol("canvas")),Us.width=e.width,Us.height=e.height;const l=Us.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ol("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ha(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ha(i[r]/255)*255):i[r]=Ha(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class Nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(sd(l[d].image)):u.push(sd(l[d]))}else u=sd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ny.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;const od=new K;class ti extends to{constructor(e=ti.DEFAULT_IMAGE,i=ti.DEFAULT_MAPPING,r=Zr,l=Zr,u=fa,d=Kr,h=ia,m=pa,p=ti.DEFAULT_ANISOTROPY,x=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=ul(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=b_;ti.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],x=m[4],_=m[8],S=m[1],M=m[5],A=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,V=(v+1)/2,I=(x+S)/4,P=(_+R)/4,Z=(A+y)/4;return N>D&&N>V?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=I/r,u=P/r):D>V?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=Z/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=P/u,l=Z/u),this.set(r,l,u,i),this}let F=Math.sqrt((y-A)*(y-A)+(_-R)*(_-R)+(S-x)*(S-x));return Math.abs(F)<.001&&(F=1),this.x=(y-A)/F,this.y=(_-R)/F,this.z=(S-x)/F,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Pe(this.x,e.x,i.x),this.y=Pe(this.y,e.y,i.y),this.z=Pe(this.z,e.z,i.z),this.w=Pe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Pe(this.x,e,i),this.y=Pe(this.y,e,i),this.z=Pe(this.z,e,i),this.w=Pe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends to{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new ti(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:fa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Nh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends ry{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class B_ extends ti{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends ti{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Qi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Qi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Qi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Qi):Qi.fromBufferAttribute(u,d),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),yc.subVectors(this.max,Qo),Ls.subVectors(e.a,Qo),Ns.subVectors(e.b,Qo),Os.subVectors(e.c,Qo),ur.subVectors(Ns,Ls),fr.subVectors(Os,Ns),Br.subVectors(Ls,Os);let i=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Br.z,Br.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Br.z,0,-Br.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Br.y,Br.x,0];return!ld(i,Ls,Ns,Os,yc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,Ls,Ns,Os,yc))?!1:(Mc.crossVectors(ur,fr),i=[Mc.x,Mc.y,Mc.z],ld(i,Ls,Ns,Os,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new K,new K,new K,new K,new K,new K,new K,new K],Qi=new K,Sc=new dl,Ls=new K,Ns=new K,Os=new K,ur=new K,fr=new K,Br=new K,Qo=new K,yc=new K,Mc=new K,Fr=new K;function ld(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Fr.fromArray(o,u);const h=l.x*Math.abs(Fr.x)+l.y*Math.abs(Fr.y)+l.z*Math.abs(Fr.z),m=e.dot(Fr),p=i.dot(Fr),x=r.dot(Fr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const oy=new dl,Jo=new K,cd=new K;class Oh{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):oy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Jo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(cd)),this.expandByPoint(Jo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oa=new K,ud=new K,Ec=new K,dr=new K,fd=new K,Tc=new K,dd=new K;class ly{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ud.copy(e).add(i).multiplyScalar(.5),Ec.copy(i).sub(e).normalize(),dr.copy(this.origin).sub(ud);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Ec),h=dr.dot(this.direction),m=-dr.dot(Ec),p=dr.lengthSq(),x=Math.abs(1-d*d);let _,S,M,A;if(x>0)if(_=d*m-h,S=d*h-m,A=u*x,_>=0)if(S>=-A)if(S<=A){const R=1/x;_*=R,S*=R,M=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ud).addScaledVector(Ec,S),M}intersectSphere(e,i){Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),l=Oa.dot(Oa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,l,u){fd.subVectors(i,e),Tc.subVectors(r,e),dd.crossVectors(fd,Tc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;dr.subVectors(this.origin,e);const m=h*this.direction.dot(Tc.crossVectors(dr,Tc));if(m<0)return null;const p=h*this.direction.dot(fd.cross(dr));if(p<0||m+p>d)return null;const x=-h*dr.dot(dd);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,i,r,l,u,d,h,m,p,x,_,S,M,A,R,y){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,x,_,S,M,A,R,y)}set(e,i,r,l,u,d,h,m,p,x,_,S,M,A,R,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=M,v[7]=A,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/zs.setFromMatrixColumn(e,0).length(),u=1/zs.setFromMatrixColumn(e,1).length(),d=1/zs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=d*x,M=d*_,A=h*x,R=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,M=m*_,A=p*x,R=p*_;i[0]=S+R*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=M*h-A,i[6]=R+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,M=m*_,A=p*x,R=p*_;i[0]=S-R*h,i[4]=-d*_,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*x,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,M=d*_,A=h*x,R=h*_;i[0]=m*x,i[4]=A*p-M,i[8]=S*p+R,i[1]=m*_,i[5]=R*p+S,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,A=h*m,R=h*p;i[0]=m*x,i[4]=R-S*_,i[8]=A*_+M,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*_+A,i[10]=S-R*_}else if(e.order==="XZY"){const S=d*m,M=d*p,A=h*m,R=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+R,i[5]=d*x,i[9]=M*_-A,i[2]=A*_-M,i[6]=h*x,i[10]=R*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,uy)}lookAt(e,i,r){const l=this.elements;return Ui.subVectors(e,i),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),hr.crossVectors(r,Ui),hr.lengthSq()===0&&(Math.abs(r.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),hr.crossVectors(r,Ui)),hr.normalize(),bc.crossVectors(Ui,hr),l[0]=hr.x,l[4]=bc.x,l[8]=Ui.x,l[1]=hr.y,l[5]=bc.y,l[9]=Ui.y,l[2]=hr.z,l[6]=bc.z,l[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],M=r[13],A=r[2],R=r[6],y=r[10],v=r[14],F=r[3],N=r[7],D=r[11],V=r[15],I=l[0],P=l[4],Z=l[8],w=l[12],C=l[1],X=l[5],at=l[9],ct=l[13],gt=l[2],ft=l[6],z=l[10],j=l[14],k=l[3],vt=l[7],Tt=l[11],L=l[15];return u[0]=d*I+h*C+m*gt+p*k,u[4]=d*P+h*X+m*ft+p*vt,u[8]=d*Z+h*at+m*z+p*Tt,u[12]=d*w+h*ct+m*j+p*L,u[1]=x*I+_*C+S*gt+M*k,u[5]=x*P+_*X+S*ft+M*vt,u[9]=x*Z+_*at+S*z+M*Tt,u[13]=x*w+_*ct+S*j+M*L,u[2]=A*I+R*C+y*gt+v*k,u[6]=A*P+R*X+y*ft+v*vt,u[10]=A*Z+R*at+y*z+v*Tt,u[14]=A*w+R*ct+y*j+v*L,u[3]=F*I+N*C+D*gt+V*k,u[7]=F*P+N*X+D*ft+V*vt,u[11]=F*Z+N*at+D*z+V*Tt,u[15]=F*w+N*ct+D*j+V*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],_=e[6],S=e[10],M=e[14],A=e[3],R=e[7],y=e[11],v=e[15];return A*(+u*m*_-l*p*_-u*h*S+r*p*S+l*h*M-r*m*M)+R*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*x-u*m*x)+y*(+i*p*_-i*h*M-u*d*_+r*d*M+u*h*x-r*p*x)+v*(-l*h*x-i*m*_+i*h*S+l*d*_-r*d*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=e[9],S=e[10],M=e[11],A=e[12],R=e[13],y=e[14],v=e[15],F=_*y*p-R*S*p+R*m*M-h*y*M-_*m*v+h*S*v,N=A*S*p-x*y*p-A*m*M+d*y*M+x*m*v-d*S*v,D=x*R*p-A*_*p+A*h*M-d*R*M-x*h*v+d*_*v,V=A*_*m-x*R*m-A*h*S+d*R*S+x*h*y-d*_*y,I=i*F+r*N+l*D+u*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=F*P,e[1]=(R*S*u-_*y*u-R*l*M+r*y*M+_*l*v-r*S*v)*P,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*v+r*m*v)*P,e[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*M-r*m*M)*P,e[4]=N*P,e[5]=(x*y*u-A*S*u+A*l*M-i*y*M-x*l*v+i*S*v)*P,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*v-i*m*v)*P,e[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*M+i*m*M)*P,e[8]=D*P,e[9]=(A*_*u-x*R*u-A*r*M+i*R*M+x*r*v-i*_*v)*P,e[10]=(d*R*u-A*h*u+A*r*p-i*R*p-d*r*v+i*h*v)*P,e[11]=(x*h*u-d*_*u-x*r*p+i*_*p+d*r*M-i*h*M)*P,e[12]=V*P,e[13]=(x*R*l-A*_*l+A*r*S-i*R*S-x*r*y+i*_*y)*P,e[14]=(A*h*l-d*R*l-A*r*m+i*R*m+d*r*y-i*h*y)*P,e[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,_=h+h,S=u*p,M=u*x,A=u*_,R=d*x,y=d*_,v=h*_,F=m*p,N=m*x,D=m*_,V=r.x,I=r.y,P=r.z;return l[0]=(1-(R+v))*V,l[1]=(M+D)*V,l[2]=(A-N)*V,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(S+v))*I,l[6]=(y+F)*I,l[7]=0,l[8]=(A+N)*P,l[9]=(y-F)*P,l[10]=(1-(S+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=zs.set(l[0],l[1],l[2]).length();const d=zs.set(l[4],l[5],l[6]).length(),h=zs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ji.copy(this);const p=1/u,x=1/d,_=1/h;return Ji.elements[0]*=p,Ji.elements[1]*=p,Ji.elements[2]*=p,Ji.elements[4]*=x,Ji.elements[5]*=x,Ji.elements[6]*=x,Ji.elements[8]*=_,Ji.elements[9]*=_,Ji.elements[10]*=_,i.setFromRotationMatrix(Ji),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=da,m=!1){const p=this.elements,x=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let A,R;if(m)A=u/(d-u),R=d*u/(d-u);else if(h===da)A=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===qc)A=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=da,m=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,R;if(m)A=1/(d-u),R=d/(d-u);else if(h===da)A=-2/(d-u),R=-(d+u)/(d-u);else if(h===qc)A=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const zs=new K,Ji=new yn,cy=new K(0,0,0),uy=new K(1,1,1),hr=new K,bc=new K,Ui=new K,z0=new yn,P0=new fl;class ma{constructor(e=0,i=0,r=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Pe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const B0=new K,Ps=new fl,za=new yn,Ac=new K,$o=new K,dy=new K,hy=new fl,F0=new K(1,0,0),I0=new K(0,1,0),H0=new K(0,0,1),G0={type:"added"},py={type:"removed"},Bs={type:"childadded",child:null},hd={type:"childremoved",child:null};class ei extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new K,i=new ma,r=new fl,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yn},normalMatrix:{value:new Se}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ps.setFromAxisAngle(e,i),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,i){return Ps.setFromAxisAngle(e,i),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(F0,e)}rotateY(e){return this.rotateOnAxis(I0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,i){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F0,e)}translateY(e){return this.translateOnAxis(I0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt($o,Ac,this.up):za.lookAt(Ac,$o,this.up),this.quaternion.setFromRotationMatrix(za),l&&(za.extractRotation(l.matrixWorld),Ps.setFromRotationMatrix(za),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(py),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new K(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new K,Pa=new K,pd=new K,Ba=new K,Fs=new K,Is=new K,V0=new K,md=new K,gd=new K,_d=new K,vd=new rn,xd=new rn,Sd=new rn;class na{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),$i.subVectors(e,i),l.cross($i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){$i.subVectors(l,i),Pa.subVectors(r,i),pd.subVectors(e,i);const d=$i.dot($i),h=$i.dot(Pa),m=$i.dot(pd),p=Pa.dot(Pa),x=Pa.dot(pd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-h*x)*S,A=(d*x-h*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ba.x),m.addScaledVector(d,Ba.y),m.addScaledVector(h,Ba.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,i),xd.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(e,i,r,l){return $i.subVectors(r,i),Pa.subVectors(e,i),$i.cross(Pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),$i.cross(Pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return na.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return na.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Fs.subVectors(l,r),Is.subVectors(u,r),md.subVectors(e,r);const m=Fs.dot(md),p=Is.dot(md);if(m<=0&&p<=0)return i.copy(r);gd.subVectors(e,l);const x=Fs.dot(gd),_=Is.dot(gd);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Fs,d);_d.subVectors(e,u);const M=Fs.dot(_d),A=Is.dot(_d);if(A>=0&&M<=A)return i.copy(u);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(Is,h);const y=x*A-M*_;if(y<=0&&_-x>=0&&M-A>=0)return V0.subVectors(u,l),h=(_-x)/(_-x+(M-A)),i.copy(l).addScaledVector(V0,h);const v=1/(y+R+S);return d=R*v,h=S*v,i.copy(r).addScaledVector(Fs,d).addScaledVector(Is,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function yd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ge{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=We.workingColorSpace){return this.r=e,this.g=i,this.b=r,We.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=We.workingColorSpace){if(e=JS(e,1),i=Pe(i,0,1),r=Pe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=yd(d,u,e+1/3),this.g=yd(d,u,e),this.b=yd(d,u,e-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(e,i=ki){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ki){const r=I_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return We.workingToColorSpace($n.copy(this),e),Math.round(Pe($n.r*255,0,255))*65536+Math.round(Pe($n.g*255,0,255))*256+Math.round(Pe($n.b*255,0,255))}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=We.workingColorSpace){We.workingToColorSpace($n.copy(this),i);const r=$n.r,l=$n.g,u=$n.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=We.workingColorSpace){return We.workingToColorSpace($n.copy(this),i),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=ki){We.workingToColorSpace($n.copy(this),e);const i=$n.r,r=$n.g,l=$n.b;return e!==ki?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(Rc);const r=id(pr.h,Rc.h,i),l=id(pr.s,Rc.s,i),u=id(pr.l,Rc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Ge;Ge.NAMES=I_;let my=0;class hl extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Ys,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Fd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ea extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=new K,Cc=new qe;let gy=0;class ha{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w0,this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix3(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix4(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.applyNormalMatrix(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.transformDirection(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ko(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=xi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=xi(i,this.array),r=xi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=xi(i,this.array),r=xi(r,this.array),l=xi(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=xi(i,this.array),r=xi(r,this.array),l=xi(l,this.array),u=xi(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}}class H_ extends ha{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class G_ extends ha{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Qr extends ha{constructor(e,i,r){super(new Float32Array(e),i,r)}}let _y=0;const Xi=new yn,Md=new ei,Hs=new K,Li=new dl,tl=new dl,Vn=new K;class ts extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?G_:H_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,i,r){return Xi.makeTranslation(e,i,r),this.applyMatrix4(Xi),this}scale(e,i,r){return Xi.makeScale(e,i,r),this.applyMatrix4(Xi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Qr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Li.setFromBufferAttribute(u),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(Vn.addVectors(Li.min,tl.min),Li.expandByPoint(Vn),Vn.addVectors(Li.max,tl.max),Li.expandByPoint(Vn)):(Li.expandByPoint(tl.min),Li.expandByPoint(tl.max))}Li.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Vn.fromBufferAttribute(h,p),m&&(Hs.fromBufferAttribute(e,p),Vn.add(Hs)),l=Math.max(l,r.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ha(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new K,m[Z]=new K;const p=new K,x=new K,_=new K,S=new qe,M=new qe,A=new qe,R=new K,y=new K;function v(Z,w,C){p.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),S.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),x.sub(p),_.sub(p),M.sub(S),A.sub(S);const X=1/(M.x*A.y-A.x*M.y);isFinite(X)&&(R.copy(x).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(X),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(X),h[Z].add(R),h[w].add(R),h[C].add(R),m[Z].add(y),m[w].add(y),m[C].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Z=0,w=F.length;Z<w;++Z){const C=F[Z],X=C.start,at=C.count;for(let ct=X,gt=X+at;ct<gt;ct+=3)v(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const N=new K,D=new K,V=new K,I=new K;function P(Z){V.fromBufferAttribute(l,Z),I.copy(V);const w=h[Z];N.copy(w),N.sub(V.multiplyScalar(V.dot(w))).normalize(),D.crossVectors(I,w);const X=D.dot(m[Z])<0?-1:1;d.setXYZW(Z,N.x,N.y,N.z,X)}for(let Z=0,w=F.length;Z<w;++Z){const C=F[Z],X=C.start,at=C.count;for(let ct=X,gt=X+at;ct<gt;ct+=3)P(e.getX(ct+0)),P(e.getX(ct+1)),P(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ha(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new K,u=new K,d=new K,h=new K,m=new K,p=new K,x=new K,_=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Vn.fromBufferAttribute(e,i),Vn.normalize(),e.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,_=h.normalized,S=new p.constructor(m.length*x);let M=0,A=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*x;for(let v=0;v<x;v++)S[A++]=p[M++]}return new ha(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ts,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,_=p.length;x<_;x++){const S=p[x],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],_=u[p];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X0=new yn,Ir=new ly,wc=new Oh,k0=new K,Dc=new K,Uc=new K,Lc=new K,Ed=new K,Nc=new K,W0=new K,Oc=new K;class bn extends ei{constructor(e=new ts,i=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Nc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],_=u[m];x!==0&&(Ed.fromBufferAttribute(_,e),d?Nc.addScaledVector(Ed,x):Nc.addScaledVector(Ed.sub(i),x))}i.add(Nc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(u),Ir.copy(e.ray).recast(e.near),!(wc.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(wc,k0)===null||Ir.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(X0.copy(u).invert(),Ir.copy(e.ray).applyMatrix4(X0),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ir)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],v=d[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,V=N;D<V;D+=3){const I=h.getX(D),P=h.getX(D+1),Z=h.getX(D+2);l=zc(this,v,e,r,p,x,_,I,P,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=A,v=R;y<v;y+=3){const F=h.getX(y),N=h.getX(y+1),D=h.getX(y+2);l=zc(this,d,e,r,p,x,_,F,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],v=d[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,V=N;D<V;D+=3){const I=D,P=D+1,Z=D+2;l=zc(this,v,e,r,p,x,_,I,P,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=A,v=R;y<v;y+=3){const F=y,N=y+1,D=y+2;l=zc(this,d,e,r,p,x,_,F,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vy(o,e,i,r,l,u,d,h){let m;if(e.side===yi?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===xr,h),m===null)return null;Oc.copy(h),Oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:o}}function zc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,Dc),o.getVertexPosition(m,Uc),o.getVertexPosition(p,Lc);const x=vy(o,e,i,r,Dc,Uc,Lc,W0);if(x){const _=new K;na.getBarycoord(W0,Dc,Uc,Lc,_),l&&(x.uv=na.getInterpolatedAttribute(l,h,m,p,_,new qe)),u&&(x.uv1=na.getInterpolatedAttribute(u,h,m,p,_,new qe)),d&&(x.normal=na.getInterpolatedAttribute(d,h,m,p,_,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new K,materialIndex:0};na.getNormal(Dc,Uc,Lc,S.normal),x.face=S,x.barycoord=_}return x}class eo extends ts{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],_=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Qr(p,3)),this.setAttribute("normal",new Qr(x,3)),this.setAttribute("uv",new Qr(_,2));function A(R,y,v,F,N,D,V,I,P,Z,w){const C=D/P,X=V/Z,at=D/2,ct=V/2,gt=I/2,ft=P+1,z=Z+1;let j=0,k=0;const vt=new K;for(let Tt=0;Tt<z;Tt++){const L=Tt*X-ct;for(let nt=0;nt<ft;nt++){const xt=nt*C-at;vt[R]=xt*F,vt[y]=L*N,vt[v]=gt,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[y]=0,vt[v]=I>0?1:-1,x.push(vt.x,vt.y,vt.z),_.push(nt/P),_.push(1-Tt/Z),j+=1}}for(let Tt=0;Tt<Z;Tt++)for(let L=0;L<P;L++){const nt=S+L+ft*Tt,xt=S+L+ft*(Tt+1),Ct=S+(L+1)+ft*(Tt+1),At=S+(L+1)+ft*Tt;m.push(nt,xt,At),m.push(xt,Ct,At),k+=6}h.addGroup(M,k,w),M+=k,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function ui(o){const e={};for(let i=0;i<o.length;i++){const r=$s(o[i]);for(const l in r)e[l]=r[l]}return e}function xy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function V_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Sy={clone:$s,merge:ui};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class X_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new K,q0=new qe,Y0=new qe;class Si extends X_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,i){return this.getViewBounds(e,q0,Y0),i.subVectors(Y0,q0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Gs=-90,Vs=1;class Ey extends ei{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Gs,Vs,e,i);l.layers=this.layers,this.add(l);const u=new Si(Gs,Vs,e,i);u.layers=this.layers,this.add(u);const d=new Si(Gs,Vs,e,i);d.layers=this.layers,this.add(d);const h=new Si(Gs,Vs,e,i);h.layers=this.layers,this.add(h);const m=new Si(Gs,Vs,e,i);m.layers=this.layers,this.add(m);const p=new Si(Gs,Vs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class k_ extends ti{constructor(e=[],i=Ks,r,l,u,d,h,m,p,x){super(e,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends $r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new k_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new eo(5,5,5),u=new Sr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yi,blending:_r});u.uniforms.tEquirect.value=i;const d=new bn(l,u),h=i.minFilter;return i.minFilter===Kr&&(i.minFilter=fa),new Ey(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Ws extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(by)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ws;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class zh{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=i,this.far=r}clone(){return new zh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ay extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bd=new K,Ry=new K,Cy=new Se;class kr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=bd.subVectors(r,i).cross(Ry.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Cy.getNormalMatrix(e),l=this.coplanarPoint(bd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Oh,wy=new qe(.5,.5),Pc=new K;class Ph{constructor(e=new kr,i=new kr,r=new kr,l=new kr,u=new kr,d=new kr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=da,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],_=u[5],S=u[6],M=u[7],A=u[8],R=u[9],y=u[10],v=u[11],F=u[12],N=u[13],D=u[14],V=u[15];if(l[0].setComponents(p-d,M-x,v-A,V-F).normalize(),l[1].setComponents(p+d,M+x,v+A,V+F).normalize(),l[2].setComponents(p+h,M+_,v+R,V+N).normalize(),l[3].setComponents(p-h,M-_,v-R,V-N).normalize(),r)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,v-y,V-D).normalize();else if(l[4].setComponents(p-m,M-S,v-y,V-D).normalize(),i===da)l[5].setComponents(p+m,M+S,v+y,V+D).normalize();else if(i===qc)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=wy.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j0 extends ti{constructor(e,i,r,l,u,d,h,m,p){super(e,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class W_ extends ti{constructor(e,i,r=Jr,l,u,d,h=Ie,m=Ie,p,x=rl,_=1){if(x!==rl&&x!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class q_ extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fi extends ts{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=e/h,S=i/m,M=[],A=[],R=[],y=[];for(let v=0;v<x;v++){const F=v*S-d;for(let N=0;N<p;N++){const D=N*_-u;A.push(D,-F,0),R.push(0,0,1),y.push(N/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<h;F++){const N=F+p*v,D=F+p*(v+1),V=F+1+p*(v+1),I=F+1+p*v;M.push(N,D,I),M.push(D,V,I)}this.setIndex(M),this.setAttribute("position",new Qr(A,3)),this.setAttribute("normal",new Qr(R,3)),this.setAttribute("uv",new Qr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ad extends hl{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dy extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uy extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ly{constructor(e,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(x){h++,u===!1&&l.onStart!==void 0&&l.onStart(x,d,h),u=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,_){return p.push(x,_),this},this.removeHandler=function(x){const _=p.indexOf(x);return _!==-1&&p.splice(_,2),this},this.getHandler=function(x){for(let _=0,S=p.length;_<S;_+=2){const M=p[_],A=p[_+1];if(M.global&&(M.lastIndex=0),M.test(x))return A}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Ny=new Ly;class Bh{constructor(e){this.manager=e!==void 0?e:Ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class Oy extends Bh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=Rd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let _=Xs.get(d);_===void 0&&(_=[],Xs.set(d,_)),_.push({onLoad:i,onError:l})}return d}const h=ol("img");function m(){x(),i&&i(this);const _=Xs.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onLoad&&M.onLoad(this)}Xs.delete(this),u.manager.itemEnd(e)}function p(_){x(),l&&l(_),Rd.remove(`image:${e}`);const S=Xs.get(this)||[];for(let M=0;M<S.length;M++){const A=S[M];A.onError&&A.onError(_)}Xs.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Rd.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class Gr extends Bh{constructor(e){super(e)}load(e,i,r,l){const u=new ti,d=new Oy(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Fh extends ei{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Cd=new yn,Z0=new K,K0=new K;class Y_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=pa,this.map=null,this.mapPass=null,this.matrix=new yn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),i.position.copy(Z0),K0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(K0),i.updateMatrixWorld(),Cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zy extends Y_{constructor(){super(new Si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=Yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=e.distance||i.far;(r!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=r,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Py extends Fh{constructor(e,i,r=0,l=Math.PI/3,u=0,d=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.distance=r,this.angle=l,this.penumbra=u,this.decay=d,this.map=null,this.shadow=new zy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Q0=new yn,el=new K,wd=new K;class By extends Y_{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new rn(2,1,1,1),new rn(0,1,1,1),new rn(3,1,1,1),new rn(1,1,1,1),new rn(3,0,1,1),new rn(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),r.position.copy(el),wd.copy(r.position),wd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(wd),r.updateMatrixWorld(),l.makeTranslation(-el.x,-el.y,-el.z),Q0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0,r.coordinateSystem,r.reversedDepth)}}class ta extends Fh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fy extends X_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Iy extends Fh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hy extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function J0(o,e,i,r){const l=Gy(r);switch(i){case D_:return o*e;case L_:return o*e/l.components*l.byteLength;case Dh:return o*e/l.components*l.byteLength;case N_:return o*e*2/l.components*l.byteLength;case Uh:return o*e*2/l.components*l.byteLength;case U_:return o*e*3/l.components*l.byteLength;case ia:return o*e*4/l.components*l.byteLength;case Lh:return o*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(e,8)/2;case $d:case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gh:case _h:case vh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xh:case Sh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yh:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Gy(o){switch(o){case pa:case A_:return{byteLength:1,components:1};case il:case R_:case cl:return{byteLength:2,components:1};case Ch:case wh:return{byteLength:2,components:4};case Jr:case Rh:case Ia:return{byteLength:4,components:1};case C_:case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Vy(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<_.length;M++){const A=_[S],R=_[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,_[S]=R)}_.length=S+1;for(let M=0,A=_.length;M<A;M++){const R=_[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:Xy,alphahash_pars_fragment:ky,alphamap_fragment:Wy,alphamap_pars_fragment:qy,alphatest_fragment:Yy,alphatest_pars_fragment:jy,aomap_fragment:Zy,aomap_pars_fragment:Ky,batching_pars_vertex:Qy,batching_vertex:Jy,begin_vertex:$y,beginnormal_vertex:tM,bsdfs:eM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:_M,emissivemap_pars_fragment:vM,colorspace_fragment:xM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:zM,envmap_vertex:bM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:wM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:UM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:PM,lights_toon_pars_fragment:BM,lights_phong_fragment:FM,lights_phong_pars_fragment:IM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:VM,lights_fragment_maps:XM,lights_fragment_end:kM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:jM,map_fragment:ZM,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:tE,morphinstance_vertex:eE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:aE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:_E,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:SE,dithering_pars_fragment:yE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:TE,shadowmap_pars_vertex:bE,shadowmap_vertex:AE,shadowmask_pars_fragment:RE,skinbase_vertex:CE,skinning_pars_vertex:wE,skinning_vertex:DE,skinnormal_vertex:UE,specularmap_fragment:LE,specularmap_pars_fragment:NE,tonemapping_fragment:OE,tonemapping_pars_fragment:zE,transmission_fragment:PE,transmission_pars_fragment:BE,uv_pars_fragment:FE,uv_pars_vertex:IE,uv_vertex:HE,worldpos_vertex:GE,background_vert:VE,background_frag:XE,backgroundCube_vert:kE,backgroundCube_frag:WE,cube_vert:qE,cube_frag:YE,depth_vert:jE,depth_frag:ZE,distanceRGBA_vert:KE,distanceRGBA_frag:QE,equirect_vert:JE,equirect_frag:$E,linedashed_vert:tT,linedashed_frag:eT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:fT,meshphysical_vert:dT,meshphysical_frag:hT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:_T,shadow_vert:vT,shadow_frag:xT,sprite_vert:ST,sprite_frag:yT},Pt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},ua={basic:{uniforms:ui([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ui([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ui([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ui([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ui([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ui([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ui([Pt.points,Pt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ui([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ui([Pt.common,Pt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ui([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ui([Pt.sprite,Pt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ui([Pt.common,Pt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ui([Pt.lights,Pt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};ua.physical={uniforms:ui([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Bc={r:0,b:0,g:0},Vr=new ma,MT=new yn;function ET(o,e,i,r,l,u,d){const h=new Ge(0);let m=u===!0?0:1,p,x,_=null,S=0,M=null;function A(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function R(N){let D=!1;const V=A(N);V===null?v(h,m):V&&V.isColor&&(v(V,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,D){const V=A(D);V&&(V.isCubeTexture||V.mapping===jc)?(x===void 0&&(x=new bn(new eo(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:$s(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,P,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Vr.copy(D.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(Vr)),x.material.toneMapped=We.getTransfer(V.colorSpace)!==an,(_!==V||S!==V.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,_=V,S=V.version,M=o.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new bn(new fi(2,2),new Sr({name:"BackgroundMaterial",uniforms:$s(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=We.getTransfer(V.colorSpace)!==an,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||S!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=V,S=V.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(Bc,V_(o)),r.buffers.color.setClear(Bc.r,Bc.g,Bc.b,D,d)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,D=1){h.set(N),m=D,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:R,addToRenderList:y,dispose:F}}function TT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,X,at,ct,gt){let ft=!1;const z=_(ct,at,X);u!==z&&(u=z,p(u.object)),ft=M(C,ct,at,gt),ft&&A(C,ct,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,D(C,X,at,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function _(C,X,at){const ct=at.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ft=gt[X.id];ft===void 0&&(ft={},gt[X.id]=ft);let z=ft[ct];return z===void 0&&(z=S(m()),ft[ct]=z),z}function S(C){const X=[],at=[],ct=[];for(let gt=0;gt<i;gt++)X[gt]=0,at[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:at,attributeDivisors:ct,object:C,attributes:{},index:null}}function M(C,X,at,ct){const gt=u.attributes,ft=X.attributes;let z=0;const j=at.getAttributes();for(const k in j)if(j[k].location>=0){const Tt=gt[k];let L=ft[k];if(L===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==ct}function A(C,X,at,ct){const gt={},ft=X.attributes;let z=0;const j=at.getAttributes();for(const k in j)if(j[k].location>=0){let Tt=ft[k];Tt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),gt[k]=L,z++}u.attributes=gt,u.attributesNum=z,u.index=ct}function R(){const C=u.newAttributes;for(let X=0,at=C.length;X<at;X++)C[X]=0}function y(C){v(C,0)}function v(C,X){const at=u.newAttributes,ct=u.enabledAttributes,gt=u.attributeDivisors;at[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),gt[C]!==X&&(o.vertexAttribDivisor(C,X),gt[C]=X)}function F(){const C=u.newAttributes,X=u.enabledAttributes;for(let at=0,ct=X.length;at<ct;at++)X[at]!==C[at]&&(o.disableVertexAttribArray(at),X[at]=0)}function N(C,X,at,ct,gt,ft,z){z===!0?o.vertexAttribIPointer(C,X,at,gt,ft):o.vertexAttribPointer(C,X,at,ct,gt,ft)}function D(C,X,at,ct){R();const gt=ct.attributes,ft=at.getAttributes(),z=X.defaultAttributeValues;for(const j in ft){const k=ft[j];if(k.location>=0){let vt=gt[j];if(vt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const Tt=vt.normalized,L=vt.itemSize,nt=e.get(vt);if(nt===void 0)continue;const xt=nt.buffer,Ct=nt.type,At=nt.bytesPerElement,J=Ct===o.INT||Ct===o.UNSIGNED_INT||vt.gpuType===Rh;if(vt.isInterleavedBufferAttribute){const ot=vt.data,Nt=ot.stride,Ft=vt.offset;if(ot.isInstancedInterleavedBuffer){for(let qt=0;qt<k.locationSize;qt++)v(k.location+qt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let qt=0;qt<k.locationSize;qt++)y(k.location+qt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let qt=0;qt<k.locationSize;qt++)N(k.location+qt,L/k.locationSize,Ct,Tt,Nt*At,(Ft+L/k.locationSize*qt)*At,J)}else{if(vt.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)v(k.location+ot,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ot=0;ot<k.locationSize;ot++)y(k.location+ot);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ot=0;ot<k.locationSize;ot++)N(k.location+ot,L/k.locationSize,Ct,Tt,L*At,L/k.locationSize*ot*At,J)}}else if(z!==void 0){const Tt=z[j];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(k.location,Tt);break;case 3:o.vertexAttrib3fv(k.location,Tt);break;case 4:o.vertexAttrib4fv(k.location,Tt);break;default:o.vertexAttrib1fv(k.location,Tt)}}}}F()}function V(){Z();for(const C in r){const X=r[C];for(const at in X){const ct=X[at];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete X[at]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const X=r[C.id];for(const at in X){const ct=X[at];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete X[at]}delete r[C.id]}function P(C){for(const X in r){const at=r[X];if(at[C.id]===void 0)continue;const ct=at[C.id];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete at[C.id]}}function Z(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function bT(o,e,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=x[A];i.update(M,r,1)}function m(p,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],x[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let A=0;for(let R=0;R<_;R++)A+=x[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function AT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==ia&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Z=P===cl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==pa&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ia&&!Z)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=A>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:V,maxSamples:I}}function RT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new kr,h=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,M){const A=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||u&&!y)u?x(null):p();else{const F=u?0:r,N=F*4;let D=v.clippingState||null;m.value=D,D=x(A,S,N,M);for(let V=0;V!==N;++V)D[V]=i[V];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,M,A){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const v=M+R*4,F=S.matrixWorldInverse;h.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,D=M;N!==R;++N,D+=4)d.copy(_[N]).applyMatrix4(F,h),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function CT(o){let e=new WeakMap;function i(d,h){return h===qd?d.mapping=Ks:h===Yd&&(d.mapping=Qs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ty(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const qs=4,$0=[.125,.215,.35,.446,.526,.582],Yr=20,Dd=new Fy,t_=new Ge;let Ud=null,Ld=0,Nd=0,Od=!1;const Wr=(1+Math.sqrt(5))/2,ks=1/Wr,e_=[new K(-Wr,ks,0),new K(Wr,ks,0),new K(-ks,0,Wr),new K(ks,0,Wr),new K(0,Wr,-ks),new K(0,Wr,ks),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],wT=new K;class n_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=wT}=u;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Ld,Nd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ks||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:fa,minFilter:fa,generateMipmaps:!1,type:cl,format:ia,colorSpace:Js,depthBuffer:!1},l=i_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DT(u)),this._blurMaterial=UT(u,e,i)}return l}_compileMaterial(e){const i=new bn(this._lodPlanes[0],e);this._renderer.compile(i,Dd)}_sceneToCubeUV(e,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(t_),_.toneMapping=vr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new ea({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1}),y=new bn(new eo,R);let v=!1;const F=e.background;F?F.isColor&&(R.color.copy(F),e.background=null,v=!0):(R.color.copy(t_),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[N],u.y,u.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[N]));const V=this._cubeSize;Fc(l,D*V,N>2?V:0,V,V),_.setRenderTarget(l),v&&_.render(y,m),_.render(e,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=S,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ks||e.mapping===Qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new bn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Dd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=e_[(l-u-1)%e_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new bn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),R=u/A,y=isFinite(u)?1+Math.floor(x*R):Yr;y>Yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const v=[];let F=0;for(let P=0;P<Yr;++P){const Z=P/R,w=Math.exp(-Z*Z/2);v.push(w),P===0?F+=w:P<y&&(F+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-r;const D=this._sizeLods[l],V=3*D*(l>N-qs?l-N+qs:0),I=4*(this._cubeSize-D);Fc(i,V,I,3*D,2*D),m.setRenderTarget(i),m.render(_,Dd)}}function DT(o){const e=[],i=[],r=[];let l=o;const u=o-qs+1+$0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-qs?m=$0[d-o+qs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,A=6,R=3,y=2,v=1,F=new Float32Array(R*A*M),N=new Float32Array(y*A*M),D=new Float32Array(v*A*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,Z=I>2?0:-1,w=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];F.set(w,R*A*I),N.set(S,y*A*I);const C=[I,I,I,I,I,I];D.set(C,v*A*I)}const V=new ts;V.setAttribute("position",new ha(F,R)),V.setAttribute("uv",new ha(N,y)),V.setAttribute("faceIndex",new ha(D,v)),e.push(V),l>qs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function i_(o,e,i){const r=new $r(o,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function UT(o,e,i){const r=new Float32Array(Yr),l=new K(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function a_(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function r_(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,x=m===Ks||m===Qs;if(p||x){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function NT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ll("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function OT(o,e,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,A=_.attributes.position;let R=0;if(M!==null){const F=M.array;R=M.version;for(let N=0,D=F.length;N<D;N+=3){const V=F[N+0],I=F[N+1],P=F[N+2];S.push(V,I,I,P,P,V)}}else if(A!==void 0){const F=A.array;R=A.version;for(let N=0,D=F.length/3-1;N<D;N+=3){const V=N+0,I=N+1,P=N+2;S.push(V,I,I,P,P,V)}}else return;const y=new(P_(S)?G_:H_)(S,1);y.version=R;const v=u.get(_);v&&e.remove(v),u.set(_,y)}function x(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function zT(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*d,A),i.update(M,r,A))}function x(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];i.update(y,r,1)}function _(S,M,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,A);let v=0;for(let F=0;F<A;F++)v+=M[F]*R[F];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function PT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BT(o,e,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let C=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let V=h.attributes.position.count*D,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const P=new Float32Array(V*I*4*_),Z=new B_(P,V,I,_);Z.type=Ia,Z.needsUpdate=!0;const w=D*4;for(let X=0;X<_;X++){const at=v[X],ct=F[X],gt=N[X],ft=V*I*4*X;for(let z=0;z<at.count;z++){const j=z*w;A===!0&&(l.fromBufferAttribute(at,z),P[ft+j+0]=l.x,P[ft+j+1]=l.y,P[ft+j+2]=l.z,P[ft+j+3]=0),R===!0&&(l.fromBufferAttribute(ct,z),P[ft+j+4]=l.x,P[ft+j+5]=l.y,P[ft+j+6]=l.z,P[ft+j+7]=0),y===!0&&(l.fromBufferAttribute(gt,z),P[ft+j+8]=l.x,P[ft+j+9]=l.y,P[ft+j+10]=l.z,P[ft+j+11]=gt.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new qe(V,I)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function FT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=e.get(m,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Z_=new ti,s_=new W_(1,1),K_=new B_,Q_=new sy,J_=new k_,o_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),f_=new Float32Array(4);function no(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=o_[l];if(u===void 0&&(u=new Float32Array(l),o_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function Bn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Zc(o,e){let i=l_[e];i===void 0&&(i=new Int32Array(e),l_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function IT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2fv(this.addr,e),Fn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Bn(i,e))return;o.uniform3fv(this.addr,e),Fn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4fv(this.addr,e),Fn(i,e)}}function XT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,r))return;f_.set(r),o.uniformMatrix2fv(this.addr,!1,f_),Fn(i,r)}}function kT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,r))return;u_.set(r),o.uniformMatrix3fv(this.addr,!1,u_),Fn(i,r)}}function WT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,r))return;c_.set(r),o.uniformMatrix4fv(this.addr,!1,c_),Fn(i,r)}}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2iv(this.addr,e),Fn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;o.uniform3iv(this.addr,e),Fn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4iv(this.addr,e),Fn(i,e)}}function KT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2uiv(this.addr,e),Fn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;o.uniform3uiv(this.addr,e),Fn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4uiv(this.addr,e),Fn(i,e)}}function tb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(s_.compareFunction=z_,u=s_):u=Z_,i.setTexture2D(e||u,l)}function eb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Q_,l)}function nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||J_,l)}function ib(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||K_,l)}function ab(o){switch(o){case 5126:return IT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return XT;case 35675:return kT;case 35676:return WT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return jT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function rb(o,e){o.uniform1fv(this.addr,e)}function sb(o,e){const i=no(e,this.size,2);o.uniform2fv(this.addr,i)}function ob(o,e){const i=no(e,this.size,3);o.uniform3fv(this.addr,i)}function lb(o,e){const i=no(e,this.size,4);o.uniform4fv(this.addr,i)}function cb(o,e){const i=no(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ub(o,e){const i=no(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fb(o,e){const i=no(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function db(o,e){o.uniform1iv(this.addr,e)}function hb(o,e){o.uniform2iv(this.addr,e)}function pb(o,e){o.uniform3iv(this.addr,e)}function mb(o,e){o.uniform4iv(this.addr,e)}function gb(o,e){o.uniform1uiv(this.addr,e)}function _b(o,e){o.uniform2uiv(this.addr,e)}function vb(o,e){o.uniform3uiv(this.addr,e)}function xb(o,e){o.uniform4uiv(this.addr,e)}function Sb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Bn(r,u)||(o.uniform1iv(this.addr,u),Fn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Z_,u[d])}function yb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Bn(r,u)||(o.uniform1iv(this.addr,u),Fn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Q_,u[d])}function Mb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Bn(r,u)||(o.uniform1iv(this.addr,u),Fn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||J_,u[d])}function Eb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Bn(r,u)||(o.uniform1iv(this.addr,u),Fn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||K_,u[d])}function Tb(o){switch(o){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return fb;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class bb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ab(i.type)}}class Ab{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Tb(i.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function d_(o,e){o.seq.push(e),o.map[e.id]=e}function Cb(o,e,i){const r=o.name,l=r.length;for(zd.lastIndex=0;;){const u=zd.exec(r),d=zd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){d_(i,p===void 0?new bb(h,o,e):new Ab(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new Rb(h),d_(i,_)),i=_}}}class kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Cb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function h_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const wb=37297;let Db=0;function Ub(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const p_=new Se;function Lb(o){We._getMatrix(p_,We.workingColorSpace,o);const e=`mat3( ${p_.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(o)){case Wc:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function m_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+Ub(o.getShaderSource(e),h)}else return u}function Nb(o,e){const i=Lb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ob(o,e){let i;switch(e){case OS:i="Linear";break;case zS:i="Reinhard";break;case PS:i="Cineon";break;case BS:i="ACESFilmic";break;case IS:i="AgX";break;case HS:i="Neutral";break;case FS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new K;function zb(){We.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),e=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Bb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Fb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function nl(o){return o!==""}function g_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(o){return o.replace(Ib,Gb)}const Hb=new Map;function Gb(o,e){let i=be[e];if(i===void 0){const r=Hb.get(e);if(r!==void 0)i=be[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(i)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(o){return o.replace(Vb,Xb)}function Xb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Fa&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ks:case Qs:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case NS:e="ENVMAP_BLENDING_ADD";break}return e}function jb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Zb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=kb(i),p=Wb(i),x=qb(i),_=Yb(i),S=jb(i),M=Pb(i),A=Bb(u),R=l.createProgram();let y,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),v.length>0&&(v+=`
`)):(y=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),v=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==vr?"#define TONE_MAPPING":"",i.toneMapping!==vr?be.tonemapping_pars_fragment:"",i.toneMapping!==vr?Ob("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Nb("linearToOutputTexel",i.outputColorSpace),zb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),d=Eh(d),d=g_(d,i),d=__(d,i),h=Eh(h),h=g_(h,i),h=__(h,i),d=v_(d),h=v_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=F+y+d,D=F+v+h,V=h_(l,l.VERTEX_SHADER,N),I=h_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,V),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(X){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(R)||"",ct=l.getShaderInfoLog(V)||"",gt=l.getShaderInfoLog(I)||"",ft=at.trim(),z=ct.trim(),j=gt.trim();let k=!0,vt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,V,I);else{const Tt=m_(l,V,"vertex"),L=m_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ft+`
`+Tt+`
`+L)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(z===""||j==="")&&(vt=!1);vt&&(X.diagnostics={runnable:k,programLog:ft,vertexShader:{log:z,prefix:y},fragmentShader:{log:j,prefix:v}})}l.deleteShader(V),l.deleteShader(I),Z=new kc(l,R),w=Fb(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&P(this),Z};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,wb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=I,this}let Kb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Jb(e),i.set(e,r)),r}}class Jb{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}}function $b(o,e,i,r,l,u,d){const h=new F_,m=new Qb,p=new Set,x=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,X,at,ct){const gt=at.fog,ft=ct.geometry,z=w.isMeshStandardMaterial?at.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),k=j&&j.mapping===jc?j.image.height:null,vt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let nt=0;ft.morphAttributes.position!==void 0&&(nt=1),ft.morphAttributes.normal!==void 0&&(nt=2),ft.morphAttributes.color!==void 0&&(nt=3);let xt,Ct,At,J;if(vt){const we=ua[vt];xt=we.vertexShader,Ct=we.fragmentShader}else xt=w.vertexShader,Ct=w.fragmentShader,m.update(w),At=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const ot=o.getRenderTarget(),Nt=o.state.buffers.depth.getReversed(),Ft=ct.isInstancedMesh===!0,qt=ct.isBatchedMesh===!0,Ht=!!w.map,te=!!w.matcap,O=!!j,Be=!!w.aoMap,he=!!w.lightMap,se=!!w.bumpMap,Zt=!!w.normalMap,Ye=!!w.displacementMap,Yt=!!w.emissiveMap,pe=!!w.metalnessMap,ln=!!w.roughnessMap,sn=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,Q=w.iridescence>0,ut=w.sheen>0,St=w.transmission>0,lt=sn&&!!w.anisotropyMap,ee=U&&!!w.clearcoatMap,wt=U&&!!w.clearcoatNormalMap,Jt=U&&!!w.clearcoatRoughnessMap,Qt=Q&&!!w.iridescenceMap,bt=Q&&!!w.iridescenceThicknessMap,Rt=ut&&!!w.sheenColorMap,$t=ut&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Ut=!!w.specularColorMap,ue=!!w.specularIntensityMap,G=St&&!!w.transmissionMap,Mt=St&&!!w.thicknessMap,Dt=!!w.gradientMap,Gt=!!w.alphaMap,yt=w.alphaTest>0,pt=!!w.alphaHash,kt=!!w.extensions;let fe=vr;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Ve={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Ct,defines:w.defines,customVertexShaderID:At,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:qt,batchingColor:qt&&ct._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&ct.instanceColor!==null,instancingMorph:Ft&&ct.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Js,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:te,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:k,aoMap:Be,lightMap:he,bumpMap:se,normalMap:Zt,displacementMap:S&&Ye,emissiveMap:Yt,normalMapObjectSpace:Zt&&w.normalMapType===kS,normalMapTangentSpace:Zt&&w.normalMapType===O_,metalnessMap:pe,roughnessMap:ln,anisotropy:sn,anisotropyMap:lt,clearcoat:U,clearcoatMap:ee,clearcoatNormalMap:wt,clearcoatRoughnessMap:Jt,dispersion:E,iridescence:Q,iridescenceMap:Qt,iridescenceThicknessMap:bt,sheen:ut,sheenColorMap:Rt,sheenRoughnessMap:$t,specularMap:Bt,specularColorMap:Ut,specularIntensityMap:ue,transmission:St,transmissionMap:G,thicknessMap:Mt,gradientMap:Dt,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:Gt,alphaTest:yt,alphaHash:pt,combine:w.combine,mapUv:Ht&&R(w.map.channel),aoMapUv:Be&&R(w.aoMap.channel),lightMapUv:he&&R(w.lightMap.channel),bumpMapUv:se&&R(w.bumpMap.channel),normalMapUv:Zt&&R(w.normalMap.channel),displacementMapUv:Ye&&R(w.displacementMap.channel),emissiveMapUv:Yt&&R(w.emissiveMap.channel),metalnessMapUv:pe&&R(w.metalnessMap.channel),roughnessMapUv:ln&&R(w.roughnessMap.channel),anisotropyMapUv:lt&&R(w.anisotropyMap.channel),clearcoatMapUv:ee&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:$t&&R(w.sheenRoughnessMap.channel),specularMapUv:Bt&&R(w.specularMap.channel),specularColorMapUv:Ut&&R(w.specularColorMap.channel),specularIntensityMapUv:ue&&R(w.specularIntensityMap.channel),transmissionMapUv:G&&R(w.transmissionMap.channel),thicknessMapUv:Mt&&R(w.thicknessMap.channel),alphaMapUv:Gt&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Zt||sn),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(Ht||Gt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Nt,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&We.getTransfer(w.map.colorSpace)===an,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&We.getTransfer(w.emissiveMap.colorSpace)===an,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xn,flipSided:w.side===yi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)C.push(X),C.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(F(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function F(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=A[w.type];let X;if(C){const at=ua[C];X=Sy.clone(at.uniforms)}else X=w.uniforms;return X}function V(w,C){let X;for(let at=0,ct=x.length;at<ct;at++){const gt=x[at];if(gt.cacheKey===C){X=gt,++X.usedTimes;break}}return X===void 0&&(X=new Zb(o,C,w,u),x.push(X)),X}function I(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:V,releaseProgram:I,releaseShaderCache:P,programs:x,dispose:Z}}function t1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function e1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function S_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function y_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,M,A,R,y){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:A,renderOrder:_.renderOrder,z:R,group:y},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=R,v.group=y),e++,v}function h(_,S,M,A,R,y){const v=d(_,S,M,A,R,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,A,R,y){const v=d(_,S,M,A,R,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||e1),r.length>1&&r.sort(S||S_),l.length>1&&l.sort(S||S_)}function x(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function n1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new y_,o.set(r,[d])):l>=u.length?(d=new y_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function i1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Ge};break;case"SpotLight":i={position:new K,direction:new K,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function a1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let r1=0;function s1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function o1(o){const e=new i1,i=a1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,u=new yn,d=new yn;function h(p){let x=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,R=0,y=0,v=0,F=0,N=0,D=0,V=0,I=0,P=0;p.sort(s1);for(let w=0,C=p.length;w<C;w++){const X=p[w],at=X.color,ct=X.intensity,gt=X.distance,ft=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)x+=at.r*ct,_+=at.g*ct,S+=at.b*ct;else if(X.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(X.sh.coefficients[z],ct);P++}else if(X.isDirectionalLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const j=X.shadow,k=i.get(X);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.directionalShadow[M]=k,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=X.shadow.matrix,F++}r.directional[M]=z,M++}else if(X.isSpotLight){const z=e.get(X);z.position.setFromMatrixPosition(X.matrixWorld),z.color.copy(at).multiplyScalar(ct),z.distance=gt,z.coneCos=Math.cos(X.angle),z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),z.decay=X.decay,r.spot[R]=z;const j=X.shadow;if(X.map&&(r.spotLightMap[V]=X.map,V++,j.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[R]=j.matrix,X.castShadow){const k=i.get(X);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,r.spotShadow[R]=k,r.spotShadowMap[R]=ft,D++}R++}else if(X.isRectAreaLight){const z=e.get(X);z.color.copy(at).multiplyScalar(ct),z.halfWidth.set(X.width*.5,0,0),z.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=z,y++}else if(X.isPointLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),z.distance=X.distance,z.decay=X.decay,X.castShadow){const j=X.shadow,k=i.get(X);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,r.pointShadow[A]=k,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=X.shadow.matrix,N++}r.point[A]=z,A++}else if(X.isHemisphereLight){const z=e.get(X);z.skyColor.copy(X.color).multiplyScalar(ct),z.groundColor.copy(X.groundColor).multiplyScalar(ct),r.hemi[v]=z,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==R||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==F||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==V||Z.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=R,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=F,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=V,Z.numLightProbes=P,r.version=r1++)}function m(p,x){let _=0,S=0,M=0,A=0,R=0;const y=x.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const N=p[v];if(N.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(N.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),d.identity(),u.copy(N.matrixWorld),u.premultiply(y),d.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function M_(o){const e=new o1(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function l1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new M_(o),e.set(l,[h])):u>=d.length?(h=new M_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f1(o,e,i){let r=new Ph;const l=new qe,u=new qe,d=new rn,h=new Dy({depthPacking:XS}),m=new Uy,p={},x=i.maxTextureSize,_={[xr]:yi,[yi]:xr,[Xn]:Xn},S=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new ts;A.setAttribute("position",new ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new bn(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let v=this.type;this.render=function(I,P,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),at=o.state;at.setBlending(_r),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ct=v!==Fa&&this.type===Fa,gt=v===Fa&&this.type!==Fa;for(let ft=0,z=I.length;ft<z;ft++){const j=I[ft],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const vt=k.getFrameExtents();if(l.multiply(vt),u.copy(k.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/vt.x),l.x=u.x*vt.x,k.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/vt.y),l.y=u.y*vt.y,k.mapSize.y=u.y)),k.map===null||ct===!0||gt===!0){const L=this.type!==Fa?{minFilter:Ie,magFilter:Ie}:{};k.map!==null&&k.map.dispose(),k.map=new $r(l.x,l.y,L),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Tt=k.getViewportCount();for(let L=0;L<Tt;L++){const nt=k.getViewport(L);d.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),at.viewport(d),k.updateMatrices(j,L),r=k.getFrustum(),D(P,Z,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===Fa&&F(k,Z),k.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,X)};function F(I,P){const Z=e.update(R);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $r(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,Z,S,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,Z,M,R,null)}function N(I,P,Z,w){let C=null;const X=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)C=X;else if(C=Z.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const at=C.uuid,ct=P.uuid;let gt=p[at];gt===void 0&&(gt={},p[at]=gt);let ft=gt[ct];ft===void 0&&(ft=C.clone(),gt[ct]=ft,P.addEventListener("dispose",V)),C=ft}if(C.visible=P.visible,C.wireframe=P.wireframe,w===Fa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=Z}return C}function D(I,P,Z,w,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Fa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const ct=e.update(I),gt=I.material;if(Array.isArray(gt)){const ft=ct.groups;for(let z=0,j=ft.length;z<j;z++){const k=ft[z],vt=gt[k.materialIndex];if(vt&&vt.visible){const Tt=N(I,vt,w,C);I.onBeforeShadow(o,I,P,Z,ct,Tt,k),o.renderBufferDirect(Z,null,ct,Tt,I,k),I.onAfterShadow(o,I,P,Z,ct,Tt,k)}}}else if(gt.visible){const ft=N(I,gt,w,C);I.onBeforeShadow(o,I,P,Z,ct,ft,null),o.renderBufferDirect(Z,null,ct,ft,I,null),I.onAfterShadow(o,I,P,Z,ct,ft,null)}}const at=I.children;for(let ct=0,gt=at.length;ct<gt;ct++)D(at[ct],P,Z,w,C)}function V(I){I.target.removeEventListener("dispose",V);for(const Z in p){const w=p[Z],C=I.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const d1={[Id]:Hd,[Gd]:kd,[Vd]:Wd,[Zs]:Xd,[Hd]:Id,[kd]:Gd,[Wd]:Vd,[Xd]:Zs};function h1(o,e){function i(){let G=!1;const Mt=new rn;let Dt=null;const Gt=new rn(0,0,0,0);return{setMask:function(yt){Dt!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),Dt=yt)},setLocked:function(yt){G=yt},setClear:function(yt,pt,kt,fe,Ve){Ve===!0&&(yt*=fe,pt*=fe,kt*=fe),Mt.set(yt,pt,kt,fe),Gt.equals(Mt)===!1&&(o.clearColor(yt,pt,kt,fe),Gt.copy(Mt))},reset:function(){G=!1,Dt=null,Gt.set(-1,0,0,0)}}}function r(){let G=!1,Mt=!1,Dt=null,Gt=null,yt=null;return{setReversed:function(pt){if(Mt!==pt){const kt=e.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Mt=pt;const fe=yt;yt=null,this.setClear(fe)}},getReversed:function(){return Mt},setTest:function(pt){pt?ot(o.DEPTH_TEST):Nt(o.DEPTH_TEST)},setMask:function(pt){Dt!==pt&&!G&&(o.depthMask(pt),Dt=pt)},setFunc:function(pt){if(Mt&&(pt=d1[pt]),Gt!==pt){switch(pt){case Id:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Zs:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=pt}},setLocked:function(pt){G=pt},setClear:function(pt){yt!==pt&&(Mt&&(pt=1-pt),o.clearDepth(pt),yt=pt)},reset:function(){G=!1,Dt=null,Gt=null,yt=null,Mt=!1}}}function l(){let G=!1,Mt=null,Dt=null,Gt=null,yt=null,pt=null,kt=null,fe=null,Ve=null;return{setTest:function(we){G||(we?ot(o.STENCIL_TEST):Nt(o.STENCIL_TEST))},setMask:function(we){Mt!==we&&!G&&(o.stencilMask(we),Mt=we)},setFunc:function(we,De,di){(Dt!==we||Gt!==De||yt!==di)&&(o.stencilFunc(we,De,di),Dt=we,Gt=De,yt=di)},setOp:function(we,De,di){(pt!==we||kt!==De||fe!==di)&&(o.stencilOp(we,De,di),pt=we,kt=De,fe=di)},setLocked:function(we){G=we},setClear:function(we){Ve!==we&&(o.clearStencil(we),Ve=we)},reset:function(){G=!1,Mt=null,Dt=null,Gt=null,yt=null,pt=null,kt=null,fe=null,Ve=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,M=[],A=null,R=!1,y=null,v=null,F=null,N=null,D=null,V=null,I=null,P=new Ge(0,0,0),Z=0,w=!1,C=null,X=null,at=null,ct=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=j>=2);let vt=null,Tt={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),xt=new rn().fromArray(L),Ct=new rn().fromArray(nt);function At(G,Mt,Dt,Gt){const yt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(G,pt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let kt=0;kt<Dt;kt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Mt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Mt+kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return pt}const J={};J[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(Zs),se(!1),Zt(T0),ot(o.CULL_FACE),Be(_r);function ot(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function Nt(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function Ft(G,Mt){return _[G]!==Mt?(o.bindFramebuffer(G,Mt),_[G]=Mt,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Mt),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Mt),!0):!1}function qt(G,Mt){let Dt=M,Gt=!1;if(G){Dt=S.get(Mt),Dt===void 0&&(Dt=[],S.set(Mt,Dt));const yt=G.textures;if(Dt.length!==yt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,kt=yt.length;pt<kt;pt++)Dt[pt]=o.COLOR_ATTACHMENT0+pt;Dt.length=yt.length,Gt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(Dt)}function Ht(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const te={[qr]:o.FUNC_ADD,[mS]:o.FUNC_SUBTRACT,[gS]:o.FUNC_REVERSE_SUBTRACT};te[_S]=o.MIN,te[vS]=o.MAX;const O={[xS]:o.ZERO,[SS]:o.ONE,[yS]:o.SRC_COLOR,[Bd]:o.SRC_ALPHA,[RS]:o.SRC_ALPHA_SATURATE,[bS]:o.DST_COLOR,[ES]:o.DST_ALPHA,[MS]:o.ONE_MINUS_SRC_COLOR,[Fd]:o.ONE_MINUS_SRC_ALPHA,[AS]:o.ONE_MINUS_DST_COLOR,[TS]:o.ONE_MINUS_DST_ALPHA,[CS]:o.CONSTANT_COLOR,[wS]:o.ONE_MINUS_CONSTANT_COLOR,[DS]:o.CONSTANT_ALPHA,[US]:o.ONE_MINUS_CONSTANT_ALPHA};function Be(G,Mt,Dt,Gt,yt,pt,kt,fe,Ve,we){if(G===_r){R===!0&&(Nt(o.BLEND),R=!1);return}if(R===!1&&(ot(o.BLEND),R=!0),G!==pS){if(G!==y||we!==w){if((v!==qr||D!==qr)&&(o.blendEquation(o.FUNC_ADD),v=qr,D=qr),we)switch(G){case Ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b0:o.blendFunc(o.ONE,o.ONE);break;case A0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,N=null,V=null,I=null,P.set(0,0,0),Z=0,y=G,w=we}return}yt=yt||Mt,pt=pt||Dt,kt=kt||Gt,(Mt!==v||yt!==D)&&(o.blendEquationSeparate(te[Mt],te[yt]),v=Mt,D=yt),(Dt!==F||Gt!==N||pt!==V||kt!==I)&&(o.blendFuncSeparate(O[Dt],O[Gt],O[pt],O[kt]),F=Dt,N=Gt,V=pt,I=kt),(fe.equals(P)===!1||Ve!==Z)&&(o.blendColor(fe.r,fe.g,fe.b,Ve),P.copy(fe),Z=Ve),y=G,w=!1}function he(G,Mt){G.side===Xn?Nt(o.CULL_FACE):ot(o.CULL_FACE);let Dt=G.side===yi;Mt&&(Dt=!Dt),se(Dt),G.blending===Ys&&G.transparent===!1?Be(_r):Be(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Gt=G.stencilWrite;h.setTest(Gt),Gt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function Zt(G){G!==fS?(ot(o.CULL_FACE),G!==X&&(G===T0?o.cullFace(o.BACK):G===dS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Nt(o.CULL_FACE),X=G}function Ye(G){G!==at&&(z&&o.lineWidth(G),at=G)}function Yt(G,Mt,Dt){G?(ot(o.POLYGON_OFFSET_FILL),(ct!==Mt||gt!==Dt)&&(o.polygonOffset(Mt,Dt),ct=Mt,gt=Dt)):Nt(o.POLYGON_OFFSET_FILL)}function pe(G){G?ot(o.SCISSOR_TEST):Nt(o.SCISSOR_TEST)}function ln(G){G===void 0&&(G=o.TEXTURE0+ft-1),vt!==G&&(o.activeTexture(G),vt=G)}function sn(G,Mt,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+ft-1:Dt=vt);let Gt=Tt[Dt];Gt===void 0&&(Gt={type:void 0,texture:void 0},Tt[Dt]=Gt),(Gt.type!==G||Gt.texture!==Mt)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(G,Mt||J[G]),Gt.type=G,Gt.texture=Mt)}function U(){const G=Tt[vt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(G){xt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),xt.copy(G))}function $t(G){Ct.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ct.copy(G))}function Bt(G,Mt){let Dt=p.get(Mt);Dt===void 0&&(Dt=new WeakMap,p.set(Mt,Dt));let Gt=Dt.get(G);Gt===void 0&&(Gt=o.getUniformBlockIndex(Mt,G.name),Dt.set(G,Gt))}function Ut(G,Mt){const Gt=p.get(Mt).get(G);m.get(Mt)!==Gt&&(o.uniformBlockBinding(Mt,Gt,G.__bindingPointIndex),m.set(Mt,Gt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},vt=null,Tt={},_={},S=new WeakMap,M=[],A=null,R=!1,y=null,v=null,F=null,N=null,D=null,V=null,I=null,P=new Ge(0,0,0),Z=0,w=!1,C=null,X=null,at=null,ct=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ot,disable:Nt,bindFramebuffer:Ft,drawBuffers:qt,useProgram:Ht,setBlending:Be,setMaterial:he,setFlipSided:se,setCullFace:Zt,setLineWidth:Ye,setPolygonOffset:Yt,setScissorTest:pe,activeTexture:ln,bindTexture:sn,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:Qt,texImage3D:bt,updateUBOMapping:Bt,uniformBlockBinding:Ut,texStorage2D:wt,texStorage3D:Jt,texSubImage2D:ut,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:ee,scissor:Rt,viewport:$t,reset:ue}}function p1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qe,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):ol("canvas")}function R(U,E,Q){let ut=1;const St=sn(U);if((St.width>Q||St.height>Q)&&(ut=Q/Math.max(St.width,St.height)),ut<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(ut*St.width),ee=Math.floor(ut*St.height);_===void 0&&(_=A(lt,ee));const wt=E?A(lt,ee):_;return wt.width=lt,wt.height=ee,wt.getContext("2d").drawImage(U,0,0,lt,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+lt+"x"+ee+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,E,Q,ut,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=E;if(E===o.RED&&(Q===o.FLOAT&&(lt=o.R32F),Q===o.HALF_FLOAT&&(lt=o.R16F),Q===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.R8UI),Q===o.UNSIGNED_SHORT&&(lt=o.R16UI),Q===o.UNSIGNED_INT&&(lt=o.R32UI),Q===o.BYTE&&(lt=o.R8I),Q===o.SHORT&&(lt=o.R16I),Q===o.INT&&(lt=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(lt=o.RG32F),Q===o.HALF_FLOAT&&(lt=o.RG16F),Q===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RG16UI),Q===o.UNSIGNED_INT&&(lt=o.RG32UI),Q===o.BYTE&&(lt=o.RG8I),Q===o.SHORT&&(lt=o.RG16I),Q===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),Q===o.UNSIGNED_INT&&(lt=o.RGB32UI),Q===o.BYTE&&(lt=o.RGB8I),Q===o.SHORT&&(lt=o.RGB16I),Q===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(lt=o.RGBA32UI),Q===o.BYTE&&(lt=o.RGBA8I),Q===o.SHORT&&(lt=o.RGBA16I),Q===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const ee=St?Wc:We.getTransfer(ut);Q===o.FLOAT&&(lt=o.RGBA32F),Q===o.HALF_FLOAT&&(lt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(lt=ee===an?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function D(U,E){let Q;return U?E===null||E===Jr||E===al?Q=o.DEPTH24_STENCIL8:E===Ia?Q=o.DEPTH32F_STENCIL8:E===il&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Jr||E===al?Q=o.DEPTH_COMPONENT24:E===Ia?Q=o.DEPTH_COMPONENT32F:E===il&&(Q=o.DEPTH_COMPONENT16),Q}function V(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ie&&U.minFilter!==fa?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),Z(E),E.isVideoTexture&&x.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),C(E)}function Z(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,ut=S.get(Q);if(ut){const St=ut[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(ut).length===0&&S.delete(Q)}r.remove(U)}function w(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const Q=U.source,ut=S.get(Q);delete ut[E.__cacheKey],d.memory.textures--}function C(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let St=0;St<E.__webglFramebuffer[ut].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[ut][St]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let ut=0,St=Q.length;ut<St;ut++){const lt=r.get(Q[ut]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(Q[ut])}r.remove(U)}let X=0;function at(){X=0}function ct(){const U=X;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),X+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const Q=r.get(U);if(U.isVideoTexture&&pe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ut=U.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function z(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){J(Q,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function j(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){J(Q,U,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function k(U,E){const Q=r.get(U);if(U.version>0&&Q.__version!==U.version){ot(Q,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const vt={[jr]:o.REPEAT,[Zr]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},Tt={[Ie]:o.NEAREST,[GS]:o.NEAREST_MIPMAP_NEAREST,[xc]:o.NEAREST_MIPMAP_LINEAR,[fa]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[Kr]:o.LINEAR_MIPMAP_LINEAR},L={[WS]:o.NEVER,[QS]:o.ALWAYS,[qS]:o.LESS,[z_]:o.LEQUAL,[YS]:o.EQUAL,[KS]:o.GEQUAL,[jS]:o.GREATER,[ZS]:o.NOTEQUAL};function nt(U,E){if(E.type===Ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fa||E.magFilter===ed||E.magFilter===xc||E.magFilter===Kr||E.minFilter===fa||E.minFilter===ed||E.minFilter===xc||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ie||E.minFilter!==xc&&E.minFilter!==Kr||E.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ut=E.source;let St=S.get(ut);St===void 0&&(St={},S.set(ut,St));const lt=gt(E);if(lt!==U.__cacheKey){St[lt]===void 0&&(St[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),St[lt].usedTimes++;const ee=St[U.__cacheKey];ee!==void 0&&(St[U.__cacheKey].usedTimes--,ee.usedTimes===0&&w(E)),U.__cacheKey=lt,U.__webglTexture=St[lt].texture}return Q}function Ct(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function At(U,E,Q,ut){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,ut,E.data);else{lt.sort((bt,Rt)=>bt.start-Rt.start);let ee=0;for(let bt=1;bt<lt.length;bt++){const Rt=lt[ee],$t=lt[bt],Bt=Rt.start+Rt.count,Ut=Ct($t.start,E.width,4),ue=Ct(Rt.start,E.width,4);$t.start<=Bt+1&&Ut===ue&&Ct($t.start+$t.count-1,E.width,4)===Ut?Rt.count=Math.max(Rt.count,$t.start+$t.count-Rt.start):(++ee,lt[ee]=$t)}lt.length=ee+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Rt=lt.length;bt<Rt;bt++){const $t=lt[bt],Bt=Math.floor($t.start/4),Ut=Math.ceil($t.count/4),ue=Bt%E.width,G=Math.floor(Bt/E.width),Mt=Ut,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ue,G,Mt,Dt,Q,ut,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function J(U,E,Q){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const St=xt(U,E),lt=E.source;i.bindTexture(ut,U.__webglTexture,o.TEXTURE0+Q);const ee=r.get(lt);if(lt.version!==ee.__version||St===!0){i.activeTexture(o.TEXTURE0+Q);const wt=We.getPrimaries(We.workingColorSpace),Jt=E.colorSpace===gr?null:We.getPrimaries(E.colorSpace),Qt=E.colorSpace===gr||wt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let bt=R(E.image,!1,l.maxTextureSize);bt=ln(E,bt);const Rt=u.convert(E.format,E.colorSpace),$t=u.convert(E.type);let Bt=N(E.internalFormat,Rt,$t,E.colorSpace,E.isVideoTexture);nt(ut,E);let Ut;const ue=E.mipmaps,G=E.isVideoTexture!==!0,Mt=ee.__version===void 0||St===!0,Dt=lt.dataReady,Gt=V(E,bt);if(E.isDepthTexture)Bt=D(E.format===sl,E.type),Mt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Bt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Rt,$t,null));else if(E.isDataTexture)if(ue.length>0){G&&Mt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,ue[0].width,ue[0].height);for(let yt=0,pt=ue.length;yt<pt;yt++)Ut=ue[yt],G?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Rt,$t,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,Rt,$t,Ut.data);E.generateMipmaps=!1}else G?(Mt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,bt.width,bt.height),Dt&&At(E,bt,Rt,$t)):i.texImage2D(o.TEXTURE_2D,0,Bt,bt.width,bt.height,0,Rt,$t,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,ue[0].width,ue[0].height,bt.depth);for(let yt=0,pt=ue.length;yt<pt;yt++)if(Ut=ue[yt],E.format!==ia)if(Rt!==null)if(G){if(Dt)if(E.layerUpdates.size>0){const kt=J0(Ut.width,Ut.height,E.format,E.type);for(const fe of E.layerUpdates){const Ve=Ut.data.subarray(fe*kt/Ut.data.BYTES_PER_ELEMENT,(fe+1)*kt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,fe,Ut.width,Ut.height,1,Rt,Ve)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,bt.depth,Rt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,bt.depth,Rt,$t,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ut.width,Ut.height,bt.depth,0,Rt,$t,Ut.data)}else{G&&Mt&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,ue[0].width,ue[0].height);for(let yt=0,pt=ue.length;yt<pt;yt++)Ut=ue[yt],E.format!==ia?Rt!==null?G?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Rt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Rt,$t,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ut.width,Ut.height,0,Rt,$t,Ut.data)}else if(E.isDataArrayTexture)if(G){if(Mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,bt.width,bt.height,bt.depth),Dt)if(E.layerUpdates.size>0){const yt=J0(bt.width,bt.height,E.format,E.type);for(const pt of E.layerUpdates){const kt=bt.data.subarray(pt*yt/bt.data.BYTES_PER_ELEMENT,(pt+1)*yt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,bt.width,bt.height,1,Rt,$t,kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Rt,$t,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,bt.width,bt.height,bt.depth,0,Rt,$t,bt.data);else if(E.isData3DTexture)G?(Mt&&i.texStorage3D(o.TEXTURE_3D,Gt,Bt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Rt,$t,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,bt.width,bt.height,bt.depth,0,Rt,$t,bt.data);else if(E.isFramebufferTexture){if(Mt)if(G)i.texStorage2D(o.TEXTURE_2D,Gt,Bt,bt.width,bt.height);else{let yt=bt.width,pt=bt.height;for(let kt=0;kt<Gt;kt++)i.texImage2D(o.TEXTURE_2D,kt,Bt,yt,pt,0,Rt,$t,null),yt>>=1,pt>>=1}}else if(ue.length>0){if(G&&Mt){const yt=sn(ue[0]);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,yt.width,yt.height)}for(let yt=0,pt=ue.length;yt<pt;yt++)Ut=ue[yt],G?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Rt,$t,Ut):i.texImage2D(o.TEXTURE_2D,yt,Bt,Rt,$t,Ut);E.generateMipmaps=!1}else if(G){if(Mt){const yt=sn(bt);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,yt.width,yt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,$t,bt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Rt,$t,bt);y(E)&&v(ut),ee.__version=lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,Q){if(E.image.length!==6)return;const ut=xt(U,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Q);const lt=r.get(St);if(St.version!==lt.__version||ut===!0){i.activeTexture(o.TEXTURE0+Q);const ee=We.getPrimaries(We.workingColorSpace),wt=E.colorSpace===gr?null:We.getPrimaries(E.colorSpace),Jt=E.colorSpace===gr||ee===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const Qt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let pt=0;pt<6;pt++)!Qt&&!bt?Rt[pt]=R(E.image[pt],!0,l.maxCubemapSize):Rt[pt]=bt?E.image[pt].image:E.image[pt],Rt[pt]=ln(E,Rt[pt]);const $t=Rt[0],Bt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),ue=N(E.internalFormat,Bt,Ut,E.colorSpace),G=E.isVideoTexture!==!0,Mt=lt.__version===void 0||ut===!0,Dt=St.dataReady;let Gt=V(E,$t);nt(o.TEXTURE_CUBE_MAP,E);let yt;if(Qt){G&&Mt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ue,$t.width,$t.height);for(let pt=0;pt<6;pt++){yt=Rt[pt].mipmaps;for(let kt=0;kt<yt.length;kt++){const fe=yt[kt];E.format!==ia?Bt!==null?G?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,fe.width,fe.height,Bt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,ue,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,fe.width,fe.height,Bt,Ut,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,ue,fe.width,fe.height,0,Bt,Ut,fe.data)}}}else{if(yt=E.mipmaps,G&&Mt){yt.length>0&&Gt++;const pt=sn(Rt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(bt){G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt[pt].width,Rt[pt].height,Bt,Ut,Rt[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Rt[pt].width,Rt[pt].height,0,Bt,Ut,Rt[pt].data);for(let kt=0;kt<yt.length;kt++){const Ve=yt[kt].image[pt].image;G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,Ve.width,Ve.height,Bt,Ut,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,ue,Ve.width,Ve.height,0,Bt,Ut,Ve.data)}}else{G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Bt,Ut,Rt[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Bt,Ut,Rt[pt]);for(let kt=0;kt<yt.length;kt++){const fe=yt[kt];G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,Bt,Ut,fe.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,ue,Bt,Ut,fe.image[pt])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Nt(U,E,Q,ut,St,lt){const ee=u.convert(Q.format,Q.colorSpace),wt=u.convert(Q.type),Jt=N(Q.internalFormat,ee,wt,Q.colorSpace),Qt=r.get(E),bt=r.get(Q);if(bt.__renderTarget=E,!Qt.__hasExternalTextures){const Rt=Math.max(1,E.width>>lt),$t=Math.max(1,E.height>>lt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,lt,Jt,Rt,$t,E.depth,0,ee,wt,null):i.texImage2D(St,lt,Jt,Rt,$t,0,ee,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,St,bt.__webglTexture,0,Ye(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,St,bt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(U,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ut=E.depthTexture,St=ut&&ut.isDepthTexture?ut.type:null,lt=D(E.stencilBuffer,St),ee=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=Ye(E);Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,lt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ee,o.RENDERBUFFER,U)}else{const ut=E.textures;for(let St=0;St<ut.length;St++){const lt=ut[St],ee=u.convert(lt.format,lt.colorSpace),wt=u.convert(lt.type),Jt=N(lt.internalFormat,ee,wt,lt.colorSpace),Qt=Ye(E);Q&&Yt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Jt,E.width,E.height):Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const St=ut.__webglTexture,lt=Ye(E);if(E.depthTexture.format===rl)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(E.depthTexture.format===sl)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Ht(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ut=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",St)};ut.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=ut}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ut=U.texture.mipmaps;ut&&ut.length>0?qt(E.__webglFramebuffer[0],U):qt(E.__webglFramebuffer,U)}else if(Q){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Ft(E.__webglDepthbuffer[ut],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,lt)}}else{const ut=U.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ft(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(U,E,Q){const ut=r.get(U);E!==void 0&&Nt(ut.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Ht(U)}function O(U){const E=U.texture,Q=r.get(U),ut=r.get(E);U.addEventListener("dispose",P);const St=U.textures,lt=U.isWebGLCubeRenderTarget===!0,ee=St.length>1;if(ee||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,d.memory.textures++),lt){Q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[wt]=[];for(let Jt=0;Jt<E.mipmaps.length;Jt++)Q.__webglFramebuffer[wt][Jt]=o.createFramebuffer()}else Q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)Q.__webglFramebuffer[wt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(ee)for(let wt=0,Jt=St.length;wt<Jt;wt++){const Qt=r.get(St[wt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Yt(U)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Jt=St[wt];Q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[wt]);const Qt=u.convert(Jt.format,Jt.colorSpace),bt=u.convert(Jt.type),Rt=N(Jt.internalFormat,Qt,bt,Jt.colorSpace,U.isXRRenderTarget===!0),$t=Ye(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Rt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Nt(Q.__webglFramebuffer[wt][Jt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Jt);else Nt(Q.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let wt=0,Jt=St.length;wt<Jt;wt++){const Qt=St[wt],bt=r.get(Qt);let Rt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,bt.__webglTexture),nt(Rt,Qt),Nt(Q.__webglFramebuffer,U,Qt,o.COLOR_ATTACHMENT0+wt,Rt,0),y(Qt)&&v(Rt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),nt(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Nt(Q.__webglFramebuffer[Jt],U,E,o.COLOR_ATTACHMENT0,wt,Jt);else Nt(Q.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);y(E)&&v(wt),i.unbindTexture()}U.depthBuffer&&Ht(U)}function Be(U){const E=U.textures;for(let Q=0,ut=E.length;Q<ut;Q++){const St=E[Q];if(y(St)){const lt=F(U),ee=r.get(St).__webglTexture;i.bindTexture(lt,ee),v(lt),i.unbindTexture()}}}const he=[],se=[];function Zt(U){if(U.samples>0){if(Yt(U)===!1){const E=U.textures,Q=U.width,ut=U.height;let St=o.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=r.get(U),wt=E.length>1;if(wt)for(let Qt=0;Qt<E.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const Jt=U.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Qt=0;Qt<E.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Qt]);const bt=r.get(E[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,Q,ut,0,0,Q,ut,St,o.NEAREST),m===!0&&(he.length=0,se.length=0,he.push(o.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(he.push(lt),se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Qt=0;Qt<E.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Qt]);const bt=r.get(E[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ye(U){return Math.min(l.maxSamples,U.samples)}function Yt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(U){const E=d.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function ln(U,E){const Q=U.colorSpace,ut=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Js&&Q!==gr&&(We.getTransfer(Q)===an?(ut!==ia||St!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function sn(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=te,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Yt}function m1(o,e){function i(r,l=gr){let u;const d=We.getTransfer(l);if(r===pa)return o.UNSIGNED_BYTE;if(r===Ch)return o.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===C_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===w_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===A_)return o.BYTE;if(r===R_)return o.SHORT;if(r===il)return o.UNSIGNED_SHORT;if(r===Rh)return o.INT;if(r===Jr)return o.UNSIGNED_INT;if(r===Ia)return o.FLOAT;if(r===cl)return o.HALF_FLOAT;if(r===D_)return o.ALPHA;if(r===U_)return o.RGB;if(r===ia)return o.RGBA;if(r===rl)return o.DEPTH_COMPONENT;if(r===sl)return o.DEPTH_STENCIL;if(r===L_)return o.RED;if(r===Dh)return o.RED_INTEGER;if(r===N_)return o.RG;if(r===Uh)return o.RG_INTEGER;if(r===Lh)return o.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===Xc)if(d===an)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===th||r===eh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===$d||r===th)return d===an?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===eh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===nh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gh||r===_h||r===vh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===gh)return d===an?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xh||r===Sh||r===yh||r===Mh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Sr({vertexShader:g1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new fi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends to{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,S=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",y=new v1,v={},F=i.getContextAttributes();let N=null,D=null;const V=[],I=[],P=new qe;let Z=null;const w=new Si;w.viewport=new rn;const C=new Si;C.viewport=new rn;const X=[w,C],at=new Hy;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=V[J];return ot===void 0&&(ot=new Td,V[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=V[J];return ot===void 0&&(ot=new Td,V[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=V[J];return ot===void 0&&(ot=new Td,V[J]=ot),ot.getHandSpace()};function ft(J){const ot=I.indexOf(J.inputSource);if(ot===-1)return;const Nt=V[ot];Nt!==void 0&&(Nt.update(J.inputSource,J.frame,p||d),Nt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",j);for(let J=0;J<V.length;J++){const ot=I[J];ot!==null&&(I[J]=null,V[J].disconnect(ot))}ct=null,gt=null,y.reset();for(const J in v)delete v[J];e.setRenderTarget(N),M=null,S=null,_=null,l=null,D=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",z),l.addEventListener("inputsourceschange",j),F.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Ft=null,qt=null;F.depth&&(qt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=F.stencil?sl:rl,Ft=F.stencil?al:Jr);const Ht={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(Ht),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new $r(S.textureWidth,S.textureHeight,{format:ia,type:pa,depthTexture:new W_(S.textureWidth,S.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Nt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new $r(M.framebufferWidth,M.framebufferHeight,{format:ia,type:pa,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(J){for(let ot=0;ot<J.removed.length;ot++){const Nt=J.removed[ot],Ft=I.indexOf(Nt);Ft>=0&&(I[Ft]=null,V[Ft].disconnect(Nt))}for(let ot=0;ot<J.added.length;ot++){const Nt=J.added[ot];let Ft=I.indexOf(Nt);if(Ft===-1){for(let Ht=0;Ht<V.length;Ht++)if(Ht>=I.length){I.push(Nt),Ft=Ht;break}else if(I[Ht]===null){I[Ht]=Nt,Ft=Ht;break}if(Ft===-1)break}const qt=V[Ft];qt&&qt.connect(Nt)}}const k=new K,vt=new K;function Tt(J,ot,Nt){k.setFromMatrixPosition(ot.matrixWorld),vt.setFromMatrixPosition(Nt.matrixWorld);const Ft=k.distanceTo(vt),qt=ot.projectionMatrix.elements,Ht=Nt.projectionMatrix.elements,te=qt[14]/(qt[10]-1),O=qt[14]/(qt[10]+1),Be=(qt[9]+1)/qt[5],he=(qt[9]-1)/qt[5],se=(qt[8]-1)/qt[0],Zt=(Ht[8]+1)/Ht[0],Ye=te*se,Yt=te*Zt,pe=Ft/(-se+Zt),ln=pe*-se;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ln),J.translateZ(pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),qt[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const sn=te+pe,U=O+pe,E=Ye-ln,Q=Yt+(Ft-ln),ut=Be*O/U*sn,St=he*O/U*sn;J.projectionMatrix.makePerspective(E,Q,ut,St,sn,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function L(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ot=J.near,Nt=J.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(Nt=y.depthFar)),at.near=C.near=w.near=ot,at.far=C.far=w.far=Nt,(ct!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ct=at.near,gt=at.far),at.layers.mask=J.layers.mask|6,w.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Ft=J.parent,qt=at.cameras;L(at,Ft);for(let Ht=0;Ht<qt.length;Ht++)L(qt[Ht],Ft);qt.length===2?Tt(at,w,C):at.projectionMatrix.copy(w.projectionMatrix),nt(J,at,Ft)};function nt(J,ot,Nt){Nt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function(J){return v[J]};let xt=null;function Ct(J,ot){if(x=ot.getViewerPose(p||d),A=ot,x!==null){const Nt=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Ft=!1;Nt.length!==at.cameras.length&&(at.cameras.length=0,Ft=!0);for(let O=0;O<Nt.length;O++){const Be=Nt[O];let he=null;if(M!==null)he=M.getViewport(Be);else{const Zt=_.getViewSubImage(S,Be);he=Zt.viewport,O===0&&(e.setRenderTargetTextures(D,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(D))}let se=X[O];se===void 0&&(se=new Si,se.layers.enable(O),se.viewport=new rn,X[O]=se),se.matrix.fromArray(Be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),O===0&&(at.matrix.copy(se.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ft===!0&&at.cameras.push(se)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const O=_.getDepthInformation(Nt[0]);O&&O.isValid&&O.texture&&y.init(O,l.renderState)}if(qt&&qt.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let O=0;O<Nt.length;O++){const Be=Nt[O].camera;if(Be){let he=v[Be];he||(he=new q_,v[Be]=he);const se=_.getCameraImage(Be);he.sourceTexture=se}}}}for(let Nt=0;Nt<V.length;Nt++){const Ft=I[Nt],qt=V[Nt];Ft!==null&&qt!==void 0&&qt.update(Ft,ot,p||d)}xt&&xt(J,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const At=new j_;At.setAnimationLoop(Ct),this.setAnimationLoop=function(J){xt=J},this.dispose=function(){}}}const Xr=new ma,S1=new yn;function y1(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,V_(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,F,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,F,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===yi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===yi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=e.get(v),N=F.envMap,D=F.envMapRotation;N&&(y.envMap.value=N,Xr.copy(D),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Xr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,F,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===yi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const F=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function M1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const D=N.program;r.uniformBlockBinding(F,D)}function p(F,N){let D=l[F.id];D===void 0&&(A(F),D=x(F),l[F.id]=D,F.addEventListener("dispose",y));const V=N.program;r.updateUBOMapping(F,V);const I=e.render.frame;u[F.id]!==I&&(S(F),u[F.id]=I)}function x(F){const N=_();F.__bindingPointIndex=N;const D=o.createBuffer(),V=F.__size,I=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function _(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const N=l[F.id],D=F.uniforms,V=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,P=D.length;I<P;I++){const Z=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,C=Z.length;w<C;w++){const X=Z[w];if(M(X,I,w,V)===!0){const at=X.__offset,ct=Array.isArray(X.value)?X.value:[X.value];let gt=0;for(let ft=0;ft<ct.length;ft++){const z=ct[ft],j=R(z);typeof z=="number"||typeof z=="boolean"?(X.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,X.__data)):z.isMatrix3?(X.__data[0]=z.elements[0],X.__data[1]=z.elements[1],X.__data[2]=z.elements[2],X.__data[3]=0,X.__data[4]=z.elements[3],X.__data[5]=z.elements[4],X.__data[6]=z.elements[5],X.__data[7]=0,X.__data[8]=z.elements[6],X.__data[9]=z.elements[7],X.__data[10]=z.elements[8],X.__data[11]=0):(z.toArray(X.__data,gt),gt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,N,D,V){const I=F.value,P=N+"_"+D;if(V[P]===void 0)return typeof I=="number"||typeof I=="boolean"?V[P]=I:V[P]=I.clone(),!0;{const Z=V[P];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return V[P]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function A(F){const N=F.uniforms;let D=0;const V=16;for(let P=0,Z=N.length;P<Z;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,X=w.length;C<X;C++){const at=w[C],ct=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,ft=ct.length;gt<ft;gt++){const z=ct[gt],j=R(z),k=D%V,vt=k%j.boundary,Tt=k+vt;D+=vt,Tt!==0&&V-Tt<j.storage&&(D+=V-Tt),at.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=j.storage}}}const I=D%V;return I>0&&(D+=V-I),F.__size=D,F.__cache={},this}function R(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function y(F){const N=F.target;N.removeEventListener("dispose",y);const D=d.indexOf(N.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class E1{constructor(e={}){const{canvas:i=$S(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=ki;let I=0,P=0,Z=null,w=-1,C=null;const X=new rn,at=new rn;let ct=null;const gt=new Ge(0);let ft=0,z=i.width,j=i.height,k=1,vt=null,Tt=null;const L=new rn(0,0,z,j),nt=new rn(0,0,z,j);let xt=!1;const Ct=new Ph;let At=!1,J=!1;const ot=new yn,Nt=new K,Ft=new rn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function te(){return Z===null?k:1}let O=r;function Be(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bh}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),O===null){const W="webgl2";if(O=Be(W,b),O===null)throw Be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let he,se,Zt,Ye,Yt,pe,ln,sn,U,E,Q,ut,St,lt,ee,wt,Jt,Qt,bt,Rt,$t,Bt,Ut,ue;function G(){he=new NT(O),he.init(),Bt=new m1(O,he),se=new AT(O,he,e,Bt),Zt=new h1(O,he),se.reversedDepthBuffer&&S&&Zt.buffers.depth.setReversed(!0),Ye=new PT(O),Yt=new t1,pe=new p1(O,he,Zt,Yt,se,Bt,Ye),ln=new CT(D),sn=new LT(D),U=new Vy(O),Ut=new TT(O,U),E=new OT(O,U,Ye,Ut),Q=new FT(O,E,U,Ye),bt=new BT(O,se,pe),wt=new RT(Yt),ut=new $b(D,ln,sn,he,se,Ut,wt),St=new y1(D,Yt),lt=new n1,ee=new l1(he),Qt=new ET(D,ln,sn,Zt,Q,M,m),Jt=new f1(D,Q,se),ue=new M1(O,Ye,se,Zt),Rt=new bT(O,he,Ye),$t=new zT(O,he,Ye),Ye.programs=ut.programs,D.capabilities=se,D.extensions=he,D.properties=Yt,D.renderLists=lt,D.shadowMap=Jt,D.state=Zt,D.info=Ye}G();const Mt=new x1(D,O);this.xr=Mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(z,j,!1))},this.getSize=function(b){return b.set(z,j)},this.setSize=function(b,W,it=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,j=W,i.width=Math.floor(b*k),i.height=Math.floor(W*k),it===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(z*k,j*k).floor()},this.setDrawingBufferSize=function(b,W,it){z=b,j=W,k=it,i.width=Math.floor(b*it),i.height=Math.floor(W*it),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,W,it,rt){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,W,it,rt),Zt.viewport(X.copy(L).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,W,it,rt){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,W,it,rt),Zt.scissor(at.copy(nt).multiplyScalar(k).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){Zt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,it=!0){let rt=0;if(b){let q=!1;if(Z!==null){const _t=Z.texture.format;q=_t===Lh||_t===Uh||_t===Dh}if(q){const _t=Z.texture.type,Ot=_t===pa||_t===Jr||_t===il||_t===al||_t===Ch||_t===wh,Vt=Qt.getClearColor(),zt=Qt.getClearAlpha(),ie=Vt.r,le=Vt.g,ae=Vt.b;Ot?(A[0]=ie,A[1]=le,A[2]=ae,A[3]=zt,O.clearBufferuiv(O.COLOR,0,A)):(R[0]=ie,R[1]=le,R[2]=ae,R[3]=zt,O.clearBufferiv(O.COLOR,0,R))}else rt|=O.COLOR_BUFFER_BIT}W&&(rt|=O.DEPTH_BUFFER_BIT),it&&(rt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Qt.dispose(),lt.dispose(),ee.dispose(),Yt.dispose(),ln.dispose(),sn.dispose(),Q.dispose(),Ut.dispose(),ue.dispose(),ut.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",di),Mt.removeEventListener("sessionend",$e),ni.stop()};function Dt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=Ye.autoReset,W=Jt.enabled,it=Jt.autoUpdate,rt=Jt.needsUpdate,q=Jt.type;G(),Ye.autoReset=b,Jt.enabled=W,Jt.autoUpdate=it,Jt.needsUpdate=rt,Jt.type=q}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pt(b){const W=b.target;W.removeEventListener("dispose",pt),kt(W)}function kt(b){fe(b),Yt.remove(b)}function fe(b){const W=Yt.get(b).programs;W!==void 0&&(W.forEach(function(it){ut.releaseProgram(it)}),b.isShaderMaterial&&ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,it,rt,q,_t){W===null&&(W=qt);const Ot=q.isMesh&&q.matrixWorld.determinant()<0,Vt=ai(b,W,it,rt,q);Zt.setMaterial(rt,Ot);let zt=it.index,ie=1;if(rt.wireframe===!0){if(zt=E.getWireframeAttribute(it),zt===void 0)return;ie=2}const le=it.drawRange,ae=it.attributes.position;let ce=le.start*ie,He=(le.start+le.count)*ie;_t!==null&&(ce=Math.max(ce,_t.start*ie),He=Math.min(He,(_t.start+_t.count)*ie)),zt!==null?(ce=Math.max(ce,0),He=Math.min(He,zt.count)):ae!=null&&(ce=Math.max(ce,0),He=Math.min(He,ae.count));const Wt=He-ce;if(Wt<0||Wt===1/0)return;Ut.setup(q,rt,Vt,it,zt);let Fe,me=Rt;if(zt!==null&&(Fe=U.get(zt),me=$t,me.setIndex(Fe)),q.isMesh)rt.wireframe===!0?(Zt.setLineWidth(rt.wireframeLinewidth*te()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(q.isLine){let It=rt.linewidth;It===void 0&&(It=1),Zt.setLineWidth(It*te()),q.isLineSegments?me.setMode(O.LINES):q.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else q.isPoints?me.setMode(O.POINTS):q.isSprite&&me.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const It=q._multiDrawStarts,Ue=q._multiDrawCounts,ye=q._multiDrawCount,gn=zt?U.get(zt).bytesPerElement:1,On=Yt.get(rt).currentProgram.getUniforms();for(let _n=0;_n<ye;_n++)On.setValue(O,"_gl_DrawID",_n),me.render(It[_n]/gn,Ue[_n])}else if(q.isInstancedMesh)me.renderInstances(ce,Wt,q.count);else if(it.isInstancedBufferGeometry){const It=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ue=Math.min(it.instanceCount,It);me.renderInstances(ce,Wt,Ue)}else me.render(ce,Wt)};function Ve(b,W,it){b.transparent===!0&&b.side===Xn&&b.forceSinglePass===!1?(b.side=yi,b.needsUpdate=!0,kn(b,W,it),b.side=xr,b.needsUpdate=!0,kn(b,W,it),b.side=Xn):kn(b,W,it)}this.compile=function(b,W,it=null){it===null&&(it=b),v=ee.get(it),v.init(W),N.push(v),it.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),b!==it&&b.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const rt=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _t=q.material;if(_t)if(Array.isArray(_t))for(let Ot=0;Ot<_t.length;Ot++){const Vt=_t[Ot];Ve(Vt,it,q),rt.add(Vt)}else Ve(_t,it,q),rt.add(_t)}),v=N.pop(),rt},this.compileAsync=function(b,W,it=null){const rt=this.compile(b,W,it);return new Promise(q=>{function _t(){if(rt.forEach(function(Ot){Yt.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){q(b);return}setTimeout(_t,10)}he.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let we=null;function De(b){we&&we(b)}function di(){ni.stop()}function $e(){ni.start()}const ni=new j_;ni.setAnimationLoop(De),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){we=b,Mt.setAnimationLoop(b),b===null?ni.stop():ni.start()},Mt.addEventListener("sessionstart",di),Mt.addEventListener("sessionend",$e),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(W),W=Mt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,Z),v=ee.get(b,N.length),v.init(W),N.push(v),ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ct.setFromProjectionMatrix(ot,da,W.reversedDepth),J=this.localClippingEnabled,At=wt.init(this.clippingPlanes,J),y=lt.get(b,F.length),y.init(),F.push(y),Mt.enabled===!0&&Mt.isPresenting===!0){const _t=D.xr.getDepthSensingMesh();_t!==null&&Ni(_t,W,-1/0,D.sortObjects)}Ni(b,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,Tt),Ht=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Ht&&Qt.addToRenderList(y,b),this.info.render.frame++,At===!0&&wt.beginShadows();const it=v.state.shadowsArray;Jt.render(it,b,W),At===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,q=y.transmissive;if(v.setupLights(),W.isArrayCamera){const _t=W.cameras;if(q.length>0)for(let Ot=0,Vt=_t.length;Ot<Vt;Ot++){const zt=_t[Ot];qi(rt,q,b,zt)}Ht&&Qt.render(b);for(let Ot=0,Vt=_t.length;Ot<Vt;Ot++){const zt=_t[Ot];Wi(y,b,zt,zt.viewport)}}else q.length>0&&qi(rt,q,b,W),Ht&&Qt.render(b),Wi(y,b,W);Z!==null&&P===0&&(pe.updateMultisampleRenderTarget(Z),pe.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(D,b,W),Ut.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],At===!0&&wt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ni(b,W,it,rt){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ct.intersectsSprite(b)){rt&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const Ot=Q.update(b),Vt=b.material;Vt.visible&&y.push(b,Ot,Vt,it,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ct.intersectsObject(b))){const Ot=Q.update(b),Vt=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Ft.copy(Ot.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(Vt)){const zt=Ot.groups;for(let ie=0,le=zt.length;ie<le;ie++){const ae=zt[ie],ce=Vt[ae.materialIndex];ce&&ce.visible&&y.push(b,Ot,ce,it,Ft.z,ae)}}else Vt.visible&&y.push(b,Ot,Vt,it,Ft.z,null)}}const _t=b.children;for(let Ot=0,Vt=_t.length;Ot<Vt;Ot++)Ni(_t[Ot],W,it,rt)}function Wi(b,W,it,rt){const q=b.opaque,_t=b.transmissive,Ot=b.transparent;v.setupLightsView(it),At===!0&&wt.setGlobalState(D.clippingPlanes,it),rt&&Zt.viewport(X.copy(rt)),q.length>0&&ga(q,W,it),_t.length>0&&ga(_t,W,it),Ot.length>0&&ga(Ot,W,it),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function qi(b,W,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new $r(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?cl:pa,minFilter:Kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const _t=v.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||X;_t.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);const Vt=D.getRenderTarget(),zt=D.getActiveCubeFace(),ie=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(gt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Ht&&Qt.render(it);const le=D.toneMapping;D.toneMapping=vr;const ae=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),At===!0&&wt.setGlobalState(D.clippingPlanes,rt),ga(b,it,rt),pe.updateMultisampleRenderTarget(_t),pe.updateRenderTargetMipmap(_t),he.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let He=0,Wt=W.length;He<Wt;He++){const Fe=W[He],me=Fe.object,It=Fe.geometry,Ue=Fe.material,ye=Fe.group;if(Ue.side===Xn&&me.layers.test(rt.layers)){const gn=Ue.side;Ue.side=yi,Ue.needsUpdate=!0,ii(me,it,rt,It,Ue,ye),Ue.side=gn,Ue.needsUpdate=!0,ce=!0}}ce===!0&&(pe.updateMultisampleRenderTarget(_t),pe.updateRenderTargetMipmap(_t))}D.setRenderTarget(Vt,zt,ie),D.setClearColor(gt,ft),ae!==void 0&&(rt.viewport=ae),D.toneMapping=le}function ga(b,W,it){const rt=W.isScene===!0?W.overrideMaterial:null;for(let q=0,_t=b.length;q<_t;q++){const Ot=b[q],Vt=Ot.object,zt=Ot.geometry,ie=Ot.group;let le=Ot.material;le.allowOverride===!0&&rt!==null&&(le=rt),Vt.layers.test(it.layers)&&ii(Vt,W,it,zt,le,ie)}}function ii(b,W,it,rt,q,_t){b.onBeforeRender(D,W,it,rt,q,_t),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(D,W,it,rt,b,_t),q.transparent===!0&&q.side===Xn&&q.forceSinglePass===!1?(q.side=yi,q.needsUpdate=!0,D.renderBufferDirect(it,W,rt,q,b,_t),q.side=xr,q.needsUpdate=!0,D.renderBufferDirect(it,W,rt,q,b,_t),q.side=Xn):D.renderBufferDirect(it,W,rt,q,b,_t),b.onAfterRender(D,W,it,rt,q,_t)}function kn(b,W,it){W.isScene!==!0&&(W=qt);const rt=Yt.get(b),q=v.state.lights,_t=v.state.shadowsArray,Ot=q.state.version,Vt=ut.getParameters(b,q.state,_t,W,it),zt=ut.getProgramCacheKey(Vt);let ie=rt.programs;rt.environment=b.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(b.isMeshStandardMaterial?sn:ln).get(b.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,ie===void 0&&(b.addEventListener("dispose",pt),ie=new Map,rt.programs=ie);let le=ie.get(zt);if(le!==void 0){if(rt.currentProgram===le&&rt.lightsStateVersion===Ot)return Nn(b,Vt),le}else Vt.uniforms=ut.getUniforms(b),b.onBeforeCompile(Vt,D),le=ut.acquireProgram(Vt,zt),ie.set(zt,le),rt.uniforms=Vt.uniforms;const ae=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ae.clippingPlanes=wt.uniform),Nn(b,Vt),rt.needsLights=io(b),rt.lightsStateVersion=Ot,rt.needsLights&&(ae.ambientLightColor.value=q.state.ambient,ae.lightProbe.value=q.state.probe,ae.directionalLights.value=q.state.directional,ae.directionalLightShadows.value=q.state.directionalShadow,ae.spotLights.value=q.state.spot,ae.spotLightShadows.value=q.state.spotShadow,ae.rectAreaLights.value=q.state.rectArea,ae.ltc_1.value=q.state.rectAreaLTC1,ae.ltc_2.value=q.state.rectAreaLTC2,ae.pointLights.value=q.state.point,ae.pointLightShadows.value=q.state.pointShadow,ae.hemisphereLights.value=q.state.hemi,ae.directionalShadowMap.value=q.state.directionalShadowMap,ae.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ae.spotShadowMap.value=q.state.spotShadowMap,ae.spotLightMatrix.value=q.state.spotLightMatrix,ae.spotLightMap.value=q.state.spotLightMap,ae.pointShadowMap.value=q.state.pointShadowMap,ae.pointShadowMatrix.value=q.state.pointShadowMatrix),rt.currentProgram=le,rt.uniformsList=null,le}function mn(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=kc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Nn(b,W){const it=Yt.get(b);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function ai(b,W,it,rt,q){W.isScene!==!0&&(W=qt),pe.resetTextureUnits();const _t=W.fog,Ot=rt.isMeshStandardMaterial?W.environment:null,Vt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Js,zt=(rt.isMeshStandardMaterial?sn:ln).get(rt.envMap||Ot),ie=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,le=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ae=!!it.morphAttributes.position,ce=!!it.morphAttributes.normal,He=!!it.morphAttributes.color;let Wt=vr;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Wt=D.toneMapping);const Fe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,me=Fe!==void 0?Fe.length:0,It=Yt.get(rt),Ue=v.state.lights;if(At===!0&&(J===!0||b!==C)){const Ze=b===C&&rt.id===w;wt.setState(rt,b,Ze)}let ye=!1;rt.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ue.state.version||It.outputColorSpace!==Vt||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==zt||rt.fog===!0&&It.fog!==_t||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==wt.numPlanes||It.numIntersection!==wt.numIntersection)||It.vertexAlphas!==ie||It.vertexTangents!==le||It.morphTargets!==ae||It.morphNormals!==ce||It.morphColors!==He||It.toneMapping!==Wt||It.morphTargetsCount!==me)&&(ye=!0):(ye=!0,It.__version=rt.version);let gn=It.currentProgram;ye===!0&&(gn=kn(rt,W,q));let On=!1,_n=!1,aa=!1;const Ae=gn.getUniforms(),zn=It.uniforms;if(Zt.useProgram(gn.program)&&(On=!0,_n=!0,aa=!0),rt.id!==w&&(w=rt.id,_n=!0),On||C!==b){Zt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ae.setValue(O,"projectionMatrix",b.projectionMatrix),Ae.setValue(O,"viewMatrix",b.matrixWorldInverse);const cn=Ae.map.cameraPosition;cn!==void 0&&cn.setValue(O,Nt.setFromMatrixPosition(b.matrixWorld)),se.logarithmicDepthBuffer&&Ae.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ae.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,_n=!0,aa=!0)}if(q.isSkinnedMesh){Ae.setOptional(O,q,"bindMatrix"),Ae.setOptional(O,q,"bindMatrixInverse");const Ze=q.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ae.setValue(O,"boneTexture",Ze.boneTexture,pe))}q.isBatchedMesh&&(Ae.setOptional(O,q,"batchingTexture"),Ae.setValue(O,"batchingTexture",q._matricesTexture,pe),Ae.setOptional(O,q,"batchingIdTexture"),Ae.setValue(O,"batchingIdTexture",q._indirectTexture,pe),Ae.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Ae.setValue(O,"batchingColorTexture",q._colorsTexture,pe));const In=it.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&bt.update(q,it,gn),(_n||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,Ae.setValue(O,"receiveShadow",q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(zn.envMap.value=zt,zn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(zn.envMapIntensity.value=W.environmentIntensity),_n&&(Ae.setValue(O,"toneMappingExposure",D.toneMappingExposure),It.needsLights&&Mi(zn,aa),_t&&rt.fog===!0&&St.refreshFogUniforms(zn,_t),St.refreshMaterialUniforms(zn,rt,k,j,v.state.transmissionRenderTarget[b.id]),kc.upload(O,mn(It),zn,pe)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(kc.upload(O,mn(It),zn,pe),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ae.setValue(O,"center",q.center),Ae.setValue(O,"modelViewMatrix",q.modelViewMatrix),Ae.setValue(O,"normalMatrix",q.normalMatrix),Ae.setValue(O,"modelMatrix",q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ze=rt.uniformsGroups;for(let cn=0,si=Ze.length;cn<si;cn++){const hi=Ze[cn];ue.update(hi,gn),ue.bind(hi,gn)}}return gn}function Mi(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function io(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,W,it){const rt=Yt.get(b);rt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Yt.get(b.texture).__webglTexture=W,Yt.get(b.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:it,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const it=Yt.get(b);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const ao=O.createFramebuffer();this.setRenderTarget=function(b,W=0,it=0){Z=b,I=W,P=it;let rt=!0,q=null,_t=!1,Ot=!1;if(b){const zt=Yt.get(b);if(zt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(O.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)pe.setupRenderTarget(b);else if(zt.__hasExternalTextures)pe.rebindTextures(b,Yt.get(b.texture).__webglTexture,Yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ae=b.depthTexture;if(zt.__boundDepthTexture!==ae){if(ae!==null&&Yt.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(b)}}const ie=b.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ot=!0);const le=Yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(le[W])?q=le[W][it]:q=le[W],_t=!0):b.samples>0&&pe.useMultisampledRTT(b)===!1?q=Yt.get(b).__webglMultisampledFramebuffer:Array.isArray(le)?q=le[it]:q=le,X.copy(b.viewport),at.copy(b.scissor),ct=b.scissorTest}else X.copy(L).multiplyScalar(k).floor(),at.copy(nt).multiplyScalar(k).floor(),ct=xt;if(it!==0&&(q=ao),Zt.bindFramebuffer(O.FRAMEBUFFER,q)&&rt&&Zt.drawBuffers(b,q),Zt.viewport(X),Zt.scissor(at),Zt.setScissorTest(ct),_t){const zt=Yt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,it)}else if(Ot){const zt=W;for(let ie=0;ie<b.textures.length;ie++){const le=Yt.get(b.textures[ie]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ie,le.__webglTexture,it,zt)}}else if(b!==null&&it!==0){const zt=Yt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(b,W,it,rt,q,_t,Ot,Vt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Zt.bindFramebuffer(O.FRAMEBUFFER,zt);try{const ie=b.textures[Vt],le=ie.format,ae=ie.type;if(!se.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-rt&&it>=0&&it<=b.height-q&&(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Vt),O.readPixels(W,it,rt,q,Bt.convert(le),Bt.convert(ae),_t))}finally{const ie=Z!==null?Yt.get(Z).__webglFramebuffer:null;Zt.bindFramebuffer(O.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(b,W,it,rt,q,_t,Ot,Vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(W>=0&&W<=b.width-rt&&it>=0&&it<=b.height-q){Zt.bindFramebuffer(O.FRAMEBUFFER,zt);const ie=b.textures[Vt],le=ie.format,ae=ie.type;if(!se.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Vt),O.readPixels(W,it,rt,q,Bt.convert(le),Bt.convert(ae),0);const He=Z!==null?Yt.get(Z).__webglFramebuffer:null;Zt.bindFramebuffer(O.FRAMEBUFFER,He);const Wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ty(O,Wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.deleteBuffer(ce),O.deleteSync(Wt),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,it=0){const rt=Math.pow(2,-it),q=Math.floor(b.image.width*rt),_t=Math.floor(b.image.height*rt),Ot=W!==null?W.x:0,Vt=W!==null?W.y:0;pe.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,Ot,Vt,q,_t),Zt.unbindTexture()};const _a=O.createFramebuffer(),ri=O.createFramebuffer();this.copyTextureToTexture=function(b,W,it=null,rt=null,q=0,_t=null){_t===null&&(q!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=q,q=0):_t=0);let Ot,Vt,zt,ie,le,ae,ce,He,Wt;const Fe=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(it!==null)Ot=it.max.x-it.min.x,Vt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,ie=it.min.x,le=it.min.y,ae=it.isBox3?it.min.z:0;else{const In=Math.pow(2,-q);Ot=Math.floor(Fe.width*In),Vt=Math.floor(Fe.height*In),b.isDataArrayTexture?zt=Fe.depth:b.isData3DTexture?zt=Math.floor(Fe.depth*In):zt=1,ie=0,le=0,ae=0}rt!==null?(ce=rt.x,He=rt.y,Wt=rt.z):(ce=0,He=0,Wt=0);const me=Bt.convert(W.format),It=Bt.convert(W.type);let Ue;W.isData3DTexture?(pe.setTexture3D(W,0),Ue=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(pe.setTexture2DArray(W,0),Ue=O.TEXTURE_2D_ARRAY):(pe.setTexture2D(W,0),Ue=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const ye=O.getParameter(O.UNPACK_ROW_LENGTH),gn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),On=O.getParameter(O.UNPACK_SKIP_PIXELS),_n=O.getParameter(O.UNPACK_SKIP_ROWS),aa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ie),O.pixelStorei(O.UNPACK_SKIP_ROWS,le),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);const Ae=b.isDataArrayTexture||b.isData3DTexture,zn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const In=Yt.get(b),Ze=Yt.get(W),cn=Yt.get(In.__renderTarget),si=Yt.get(Ze.__renderTarget);Zt.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),Zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let hi=0;hi<zt;hi++)Ae&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(b).__webglTexture,q,ae+hi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,_t,Wt+hi)),O.blitFramebuffer(ie,le,Ot,Vt,ce,He,Ot,Vt,O.DEPTH_BUFFER_BIT,O.NEAREST);Zt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Yt.has(b)){const In=Yt.get(b),Ze=Yt.get(W);Zt.bindFramebuffer(O.READ_FRAMEBUFFER,_a),Zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ri);for(let cn=0;cn<zt;cn++)Ae?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,In.__webglTexture,q,ae+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,In.__webglTexture,q),zn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.__webglTexture,_t,Wt+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ze.__webglTexture,_t),q!==0?O.blitFramebuffer(ie,le,Ot,Vt,ce,He,Ot,Vt,O.COLOR_BUFFER_BIT,O.NEAREST):zn?O.copyTexSubImage3D(Ue,_t,ce,He,Wt+cn,ie,le,Ot,Vt):O.copyTexSubImage2D(Ue,_t,ce,He,ie,le,Ot,Vt);Zt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zn?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ue,_t,ce,He,Wt,Ot,Vt,zt,me,It,Fe.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,_t,ce,He,Wt,Ot,Vt,zt,me,Fe.data):O.texSubImage3D(Ue,_t,ce,He,Wt,Ot,Vt,zt,me,It,Fe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,ce,He,Ot,Vt,me,It,Fe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,ce,He,Fe.width,Fe.height,me,Fe.data):O.texSubImage2D(O.TEXTURE_2D,_t,ce,He,Ot,Vt,me,It,Fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,On),O.pixelStorei(O.UNPACK_SKIP_ROWS,_n),O.pixelStorei(O.UNPACK_SKIP_IMAGES,aa),_t===0&&W.generateMipmaps&&O.generateMipmap(Ue),Zt.unbindTexture()},this.initRenderTarget=function(b){Yt.get(b).__webglFramebuffer===void 0&&pe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pe.setTextureCube(b,0):b.isData3DTexture?pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pe.setTexture2DArray(b,0):pe.setTexture2D(b,0),Zt.unbindTexture()},this.resetState=function(){I=0,P=0,Z=null,Zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),i.unpackColorSpace=We._getUnpackColorSpace()}}const T1="/gamejam2025/assets/Spill-CTWYly9P.m4a",b1="/gamejam2025/assets/Footsteps-DRAZh5Rr.m4a",A1="/gamejam2025/assets/Scream-BcRbbnqG.m4a",Pd="/gamejam2025/assets/oldman-BloupXDP.png",R1="/gamejam2025/assets/linor-s5iCDYh8.png",C1="/gamejam2025/assets/righthand-CyskszO6.png",w1="/gamejam2025/assets/smokinghand-removebg-preview-DuqaVnuA.png",D1="/gamejam2025/assets/thumsupp-removebg-preview-Q34yp9t1.png",E_="/gamejam2025/assets/flashlight-removebg-preview-0kcO2K_W.png",U1="/gamejam2025/assets/exit-WxDXvEMY.png",L1="/gamejam2025/assets/tv-BndtCiuR.jpg",N1="/gamejam2025/assets/jumscare-BC5hDXkG.jpg",O1="/gamejam2025/assets/wall-BeGyQMuU.jpg";function z1(){Je.useRef(null);const o=Je.useRef(null),e=Je.useRef(null),i=Je.useRef(null),r=Je.useRef(null);Je.useRef(null);const l=Je.useRef(null),[u,d]=Je.useState(0),[h,m]=Je.useState(!1),[p,x]=Je.useState(!1),[_,S]=Je.useState(!1),[M,A]=Je.useState(0),[R,y]=Je.useState(100),[v,F]=Je.useState(100),[N,D]=Je.useState(100),[V,I]=Je.useState(!1),[P,Z]=Je.useState(0),[w,C]=Je.useState(1),[X,at]=Je.useState([]),[ct,gt]=Je.useState([]),[ft,z]=Je.useState([]),[j,k]=Je.useState(""),[vt,Tt]=Je.useState(!1),[L,nt]=Je.useState(100),[xt,Ct]=Je.useState(!1),At=Je.useRef({hasFlashlight:!1,power:100,active:!1}),J=Je.useRef({score:0,gameOver:!1,won:!1,started:!1});Je.useEffect(()=>{if(!_||!o.current)return;const qt=(()=>{const Lt=[];for(let re=0;re<6;re++)Lt.push(Math.floor(Math.random()*3)+1);return Lt})();at(qt),console.log("Puzzle sequence generated:",qt);const Ht=new Ay;Ht.fog=new zh(7833770,8,35),Ht.background=new Ge(6715306);const te=new Si(75,window.innerWidth/window.innerHeight,.1,40),O=new E1({antialias:!1,alpha:!1});O.setSize(window.innerWidth,window.innerHeight),O.setPixelRatio(.5),o.current.appendChild(O.domElement),e.current=O;try{i.current=new Audio(T1),i.current.loop=!0,i.current.volume=.3}catch(Lt){console.warn("Could not initialize background audio:",Lt),i.current=null}try{r.current=new Audio(b1),r.current.loop=!0,r.current.volume=.7}catch(Lt){console.warn("Could not initialize footsteps audio:",Lt),r.current=null}try{l.current=new Audio(A1),l.current.volume=.8}catch(Lt){console.warn("Could not initialize scream audio:",Lt),l.current=null}O.domElement.style.imageRendering="pixelated",O.domElement.style.filter="contrast(1.2) saturate(1.3) brightness(0.9)",O.domElement.style.cursor="none";const Be=new Iy(6710920,.45);Ht.add(Be);const he=new ta(16711935,.8,13);he.position.set(-10,3,-5),Ht.add(he);const se=new ta(65535,.8,13);se.position.set(10,3,-10),Ht.add(se);const Zt=new ta(16776960,.8,13);Zt.position.set(0,3,-15),Ht.add(Zt);const Ye=new ta(16711935,.8,13);Ye.position.set(-20,3,10),Ht.add(Ye);const Yt=new ta(65535,.8,13);Yt.position.set(20,3,10),Ht.add(Yt);const pe=new ta(16776960,.8,13);pe.position.set(-15,3,-20),Ht.add(pe);const ln=new ta(16711935,.8,13);ln.position.set(15,3,-20),Ht.add(ln);const sn=new ta(65535,.8,13);sn.position.set(0,3,20),Ht.add(sn);const U=document.createElement("canvas");U.width=128,U.height=128;const E=U.getContext("2d"),Q=64;for(let Lt=0;Lt<2;Lt++)for(let re=0;re<2;re++){const _e=(re+Lt)%2===0;E.fillStyle=_e?"#cccccc":"#aaaaaa",E.fillRect(re*Q,Lt*Q,Q,Q),E.strokeStyle="#999999",E.lineWidth=2,E.strokeRect(re*Q,Lt*Q,Q,Q)}const ut=new j0(U);ut.wrapS=jr,ut.wrapT=jr,ut.repeat.set(15,15),ut.magFilter=Ie,ut.minFilter=Ie;const St=new fi(100,100),lt=new Ad({map:ut}),ee=new bn(St,lt);ee.rotation.x=-Math.PI/2,Ht.add(ee);const wt=new fi(100,100),Jt=new Ad({color:3359829,emissive:2236979,emissiveIntensity:.2}),Qt=new bn(wt,Jt);Qt.rotation.x=Math.PI/2,Qt.position.y=4,Ht.add(Qt);const Rt=new Gr().load(O1);Rt.wrapS=jr,Rt.wrapT=jr,Rt.magFilter=Ie,Rt.minFilter=Ie;const $t=[];function Bt(Lt,re,_e,Me=10){const Ee=new eo(Me,4,.5,1,1,1),un=Rt.clone();un.repeat.set(Me/2,2),un.needsUpdate=!0;const Zn=new Ad({map:un}),Mn=new bn(Ee,Zn);Mn.position.set(Lt,2,re),Mn.rotation.y=_e,Ht.add(Mn);const fn=Math.abs(_e)>.1,Hn=.25,An={minX:Lt-(fn?Hn:Me/2),maxX:Lt+(fn?Hn:Me/2),minZ:re-(fn?Me/2:Hn),maxZ:re+(fn?Me/2:Hn)};return $t.push(An),Mn}const Ut=["XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","X........X......X..............X","X....XX..................X.....X","X.X...XX.X...XX.X....XX.XX...X.X","X.X.......................X....X","X.X.XX....XX....XX....XX..X.XX.X","X...X..............X......X....X","X...X....X.XXX..X..X.X....X..X.X","X.X.X............X.X...........X","X.....X.X..X...X...X..X.XX.XX..X","X..X.X.XX..........X.............X","X.......X..X...XX..............X","X....X..X.XX..XX.X.........X...X","X.X..X..X........X..X......X.X.X","X.XX.X..X..X..X.X..X.X..X.....X.X.X","X....X...........X.X.X.XX.....X","X...XX....x.X.X.X...X......XXX.X","X......X.........XX.X..X.X.....X","X.X....X...X...X.X..............X.X","X.X....X........X.XX.XX..X.X.X.X","X.X.X..X.X..X...X............X.X","X.X..........X..X.X..X.X..XX.X.X","X.XX...X.XXX.X..X..........X...X","X........X.....XX......X...X.XXX","X.XX..XX.X...XX................X","X.X..............X..XX...X.XXX.X","X.X.X.....X.X.................X","X.X................XX..........X","X.X............................X","X.......XX...........XX........X","XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"],ue=2;for(let Lt=0;Lt<Ut.length;Lt++)for(let re=0;re<Ut[Lt].length;re++)if(Ut[Lt][re]==="X"){const _e=(re-Ut[Lt].length/2)*ue,Me=(Lt-Ut.length/2)*ue;Bt(_e,Me,0,ue*.9),Bt(_e,Me,Math.PI/2,ue*.9)}console.log("Created",$t.length,"walls with bounds:",$t);function G(Lt,re=.4){for(const _e of $t)if(Lt.x+re>_e.minX&&Lt.x-re<_e.maxX&&Lt.z+re>_e.minZ&&Lt.z-re<_e.maxZ)return!0;return!1}const Mt={x:28,z:28},Dt=3,yt=new Gr().load(U1);yt.magFilter=Ie,yt.minFilter=Ie;const pt=new fi(4,4),kt=new ea({map:yt,transparent:!0,side:Xn,emissive:65280,emissiveIntensity:.3}),fe=new bn(pt,kt);fe.position.set(Mt.x,2,Mt.z),Ht.add(fe);const Ve=new ta(65280,1.5,10);Ve.position.set(Mt.x,3,Mt.z),Ht.add(Ve);function we(){const re=new Gr().load(Pd);re.magFilter=Ie,re.minFilter=Ie;const _e=new fi(3,4),Me=new ea({map:re,transparent:!0,side:Xn}),Ee=new bn(_e,Me);return Ee.position.set(-10,2,-24),Ht.add(Ee),Ee}const De=we();console.log("Entity spawned at:",De.position.x,De.position.z),console.log("Entity collision check:",G(De.position,.75));function di(){const re=new Gr().load(R1);re.magFilter=Ie,re.minFilter=Ie;const _e=new fi(3,4),Me=new ea({map:re,transparent:!0,side:Xn,emissive:65416,emissiveIntensity:.4}),Ee=new bn(_e,Me);Ee.position.set(20,2,20),Ht.add(Ee);const un=new ta(65416,2,8);return un.position.set(20,2,20),Ht.add(un),Ee.userData.glowLight=un,Ee}const $e=di();console.log("Troll spawned at:",$e.position.x,$e.position.z);const ni=new Gr,Ni=ni.load(C1);Ni.magFilter=Ie,Ni.minFilter=Ie;const Wi=ni.load(w1);Wi.magFilter=Ie,Wi.minFilter=Ie;const qi=ni.load(D1);qi.magFilter=Ie,qi.minFilter=Ie;function ga(){const Lt=new fi(.8,.8),re=new ea({map:Ni,transparent:!0,side:Xn,depthTest:!1,depthWrite:!1}),_e=new bn(Lt,re);return _e.position.set(.4,-.3,-.8),_e.renderOrder=999,_e}const ii=ga();te.add(ii);const kn=ni.load(E_);kn.magFilter=Ie,kn.minFilter=Ie;const mn=new fi(.6,.8),Nn=new ea({map:kn,transparent:!0,side:Xn,depthTest:!1,depthWrite:!1}),ai=new bn(mn,Nn);ai.position.set(-.3,-.4,-.7),ai.renderOrder=998,ai.visible=!1,te.add(ai);const Mi=new Py(16777130,2,20,Math.PI/6,.5,1);Mi.position.set(0,0,0),Mi.target.position.set(0,0,-10),te.add(Mi),te.add(Mi.target),Mi.visible=!1,Ht.add(te);function io(){const re=new Gr().load(L1);re.magFilter=Ie,re.minFilter=Ie;const _e=new fi(2,1.5),Me=new ea({map:re,transparent:!1,side:Xn,emissive:3355647,emissiveIntensity:.2}),Ee=new bn(_e,Me);return Ee.position.set(0,1.5,0),Ht.add(Ee),Ee}const ao=io(),_a={x:0,z:0};let ri=0;const b=60;let W=!1;const it={current:0},rt={current:[]},q={current:0},_t={current:0},Ot={current:[]},Vt={current:0};function zt(Lt,re,_e){const Me=new Ws;let Ee,un;Lt===1?(Ee=Ni.clone(),un="Right Hand"):Lt===2?(Ee=Wi.clone(),un="Smoking Hand"):(Ee=qi.clone(),un="Thumbs Up"),Ee.needsUpdate=!0;const Zn=new fi(2,2),Mn=new ea({map:Ee,transparent:!0,side:Xn}),fn=new bn(Zn,Mn);Me.add(fn);const Hn=document.createElement("canvas");Hn.width=64,Hn.height=64;const An=Hn.getContext("2d");An.fillStyle="#ffff00",An.font="bold 48px Arial",An.textAlign="center",An.textBaseline="middle",An.fillText(re.toString(),32,32),An.strokeStyle="#ff00ff",An.lineWidth=3,An.strokeText(re.toString(),32,32);const Oi=new j0(Hn);Oi.magFilter=Ie;const oi=new fi(1,1),Rn=new ea({map:Oi,transparent:!0,side:Xn}),li=new bn(oi,Rn);return li.position.y=1.5,Me.add(li),Me.position.set(_e.x,1.5,_e.z),Me.userData={handType:Lt,sequenceNumber:re,handName:un,discovered:!1},Ht.add(Me),Me}const ie=[{x:-20,z:-20},{x:20,z:-15},{x:-15,z:0},{x:15,z:5},{x:-10,z:20},{x:10,z:15}],le=[];for(let Lt=0;Lt<6;Lt++){const re=zt(qt[Lt],Lt+1,ie[Lt]);le.push(re)}function ae(){const Lt=new Ws,_e=new Gr().load(E_);_e.magFilter=Ie,_e.minFilter=Ie;const Me=new fi(1.5,1.5),Ee=new ea({map:_e,transparent:!0,side:Xn,emissive:16776960,emissiveIntensity:.3}),un=new bn(Me,Ee);Lt.add(un);const Zn=new ta(16776960,1,5);Zn.position.y=.5,Lt.add(Zn);const Mn=[{x:-25,z:-10},{x:0,z:-20},{x:25,z:10},{x:-18,z:15},{x:5,z:-5}],fn=Mn[Math.floor(Math.random()*Mn.length)];return Lt.position.set(fn.x,1,fn.z),Lt.userData={collected:!1},Ht.add(Lt),Lt}const ce=ae();function He(Lt,re,_e,Me){const un=Le=>Math.floor((Le+32)/ue),Zn=Le=>Le*ue-32+ue/2,Mn=Math.max(0,Math.min(31,un(Lt))),fn=Math.max(0,Math.min(31,un(re))),Hn=Math.max(0,Math.min(31,un(_e))),An=Math.max(0,Math.min(31,un(Me))),Oi=(Le,Et)=>Le<0||Le>=32||Et<0||Et>=32?!1:Ut[Et][Le]===".",oi=(Le,Et,jt,Te)=>Math.abs(Le-jt)+Math.abs(Et-Te),Rn=[{x:Mn,z:fn,g:0,h:0,f:0,parent:null}],li=new Set;for(;Rn.length>0;){Rn.sort((jt,Te)=>jt.f-Te.f);const Le=Rn.shift();if(Le.x===Hn&&Le.z===An){const jt=[];let Te=Le;for(;Te;)jt.unshift({x:Zn(Te.x),z:Zn(Te.z)}),Te=Te.parent;return jt}li.add(`${Le.x},${Le.z}`);const Et=[{x:Le.x+1,z:Le.z},{x:Le.x-1,z:Le.z},{x:Le.x,z:Le.z+1},{x:Le.x,z:Le.z-1}];for(const jt of Et){if(!Oi(jt.x,jt.z)||li.has(`${jt.x},${jt.z}`))continue;const Te=Le.g+1,vn=oi(jt.x,jt.z,Hn,An),Ei=Te+vn,Yi=Rn.find(Ga=>Ga.x===jt.x&&Ga.z===jt.z);Yi?Te<Yi.g&&(Yi.g=Te,Yi.f=Ei,Yi.parent=Le):Rn.push({x:jt.x,z:jt.z,g:Te,h:vn,f:Ei,parent:Le})}if(li.size>1e3)break}return[]}const Wt=new K(-28,0,-28),Fe=1.6;let me=0,It=0;console.log("Player starting at:",Wt.x,Wt.z),console.log("Starting collision check:",G(Wt)),te.position.set(Wt.x,Fe,Wt.z),te.rotation.order="YXZ",te.rotation.y=me,te.rotation.x=It;const Ue={};let ye=0,gn=!0,On=!1,_n=0;const aa=Lt=>{if(Ue[Lt.code]=!0,Lt.code==="KeyR"&&hi&&(si=[],z([]),k("Input cleared"),console.log("Input reset"),setTimeout(()=>{j==="Input cleared"&&k("")},1500)),Lt.code==="Digit1"&&(C(1),ii.material.map=Ni,ii.material.needsUpdate=!0,console.log("Switched to right hand"),ro(1)),Lt.code==="Digit2"&&(C(2),ii.material.map=Wi,ii.material.needsUpdate=!0,console.log("Switched to smoke left hand"),ro(2)),Lt.code==="Digit3"&&(C(3),ii.material.map=qi,ii.material.needsUpdate=!0,console.log("Switched to thumbs up hand"),ro(3)),Lt.code==="Digit4")if(At.current.hasFlashlight&&At.current.power>0){const re=!At.current.active;At.current.active=re,Ct(re),console.log("Flashlight toggled:",re)}else At.current.hasFlashlight?console.log("Flashlight is out of power!"):console.log("Need to find flashlight first!");Lt.code==="KeyF"&&(On=!On,console.log("Fly mode:",On?"ON":"OFF"),On&&(ye=0,gn=!1)),Lt.code==="Space"&&gn&&!On&&(ye=.25,gn=!1)},Ae=Lt=>{Ue[Lt.code]=!1},zn=Lt=>{J.current.started&&document.pointerLockElement===O.domElement&&(me-=Lt.movementX*.002,It-=Lt.movementY*.002,It=Math.max(-Math.PI/2,Math.min(Math.PI/2,It)))},In=()=>{J.current.started&&O.domElement.requestPointerLock()};O.domElement.addEventListener("click",In),document.addEventListener("mousemove",zn),window.addEventListener("keydown",aa),window.addEventListener("keyup",Ae);const Ze=.2;let cn=0,si=[],hi=!1,ra="";function ro(Lt){if(!hi){console.log("Too far from exit to input");return}si.length>=6||(si.push(Lt),z([...si]),console.log("Input sequence:",si),si.length===6&&(si.every((_e,Me)=>_e===qt[Me])?(k("✓ CORRECT! Exit unlocked!"),console.log("PUZZLE SOLVED! Exit unlocked!"),fe.userData.unlocked=!0):(k("✗ WRONG! Try again..."),console.log("Wrong sequence! Try again."),setTimeout(()=>{si=[],z([]),k("")},2e3))))}fe.userData={unlocked:!1};function so(){if(requestAnimationFrame(so),cn++,!J.current.started){te.position.set(Wt.x,Wt.y+Fe,Wt.z),te.rotation.order="YXZ",te.rotation.y=me,te.rotation.x=It,O.render(Ht,te);return}if(cn%3!==0){O.render(Ht,te);return}if(J.current.started&&!J.current.gameOver&&!J.current.won){if(A(Et=>Et+1),i.current&&i.current.paused){const Et=i.current.play();Et&&Et.catch&&Et.catch(()=>{})}const Lt=new K(-Math.sin(me),0,-Math.cos(me)),re=new K(Math.cos(me),0,-Math.sin(me));let _e=0,Me=0,Ee=!1;if(Ue.KeyW&&(_e+=Lt.x*Ze,Me+=Lt.z*Ze,Ee=!0),Ue.KeyS&&(_e-=Lt.x*Ze,Me-=Lt.z*Ze,Ee=!0),Ue.KeyA&&(_e-=re.x*Ze,Me-=re.z*Ze,Ee=!0),Ue.KeyD&&(_e+=re.x*Ze,Me+=re.z*Ze,Ee=!0),Ee){_n+=.15;const Et=Math.sin(_n)*.05;ii.position.y=-.3+Et}else _n=0,ii.position.y=-.3;if(r.current)try{if(Ee&&!On){if(r.current.paused){const Et=r.current.play();Et&&Et.catch&&Et.catch(()=>{})}}else if(!r.current.paused){r.current.pause();try{r.current.currentTime=0}catch{}}}catch{}if(_e!==0){const Et=Wt.clone();Et.x+=_e,(!G(Et)||On)&&(Wt.x=Et.x)}if(Me!==0){const Et=Wt.clone();Et.z+=Me,(!G(Et)||On)&&(Wt.z=Et.z)}On?(Ue.Space&&(Wt.y+=Ze),(Ue.ShiftLeft||Ue.ShiftRight)&&(Wt.y-=Ze)):(ye+=-.015,Wt.y+=ye,Wt.y<=0&&(Wt.y=0,ye=0,gn=!0));let un=0,Zn=0;if(V&&P>0){const Et=P*.3;un=(Math.random()-.5)*Et,Zn=(Math.random()-.5)*Et}te.position.set(Wt.x+un,Wt.y+Fe+Zn,Wt.z),te.rotation.order="YXZ",te.rotation.y=me,te.rotation.x=It,ao.lookAt(te.position);const Mn=Math.sqrt(Math.pow(Wt.x-_a.x,2)+Math.pow(Wt.z-_a.z,2));if(Mn<15&&!W){const Et=new K(_a.x-Wt.x,0,_a.z-Wt.z).normalize(),Te=new K(-Math.sin(me),0,-Math.cos(me)).normalize().dot(Et);Te>.85?(ri++,console.log(`Looking at TV: ${ri}/${b} (dot: ${Te.toFixed(2)}, dist: ${Mn.toFixed(1)}m)`),ri>=b&&(W=!0,I(!0),Z(1),console.log("TV JUMPSCARE TRIGGERED!"),setTimeout(()=>{I(!1)},2e3),setTimeout(()=>{if(i.current)try{i.current.pause()}catch{}J.current.gameOver=!0,m(!0)},2e3))):(ri>0&&(console.log("Stopped looking at TV, resetting timer - NO JUMPSCARE"),ri=0),I(!1),Z(0))}else ri>0&&!W&&(console.log("Moved away from TV, resetting timer - NO JUMPSCARE"),ri=0),W||(I(!1),Z(0));const fn=Math.sqrt(Math.pow(Wt.x-De.position.x,2)+Math.pow(Wt.z-De.position.z,2));y(Math.floor(fn));let Hn=!1;if(At.current.active&&At.current.power>0){const Et=new K(De.position.x-te.position.x,0,De.position.z-te.position.z).normalize(),jt=new K;te.getWorldDirection(jt),jt.y=0,jt.normalize(),jt.dot(Et)>.7&&fn<20&&(Hn=!0,De.position.x+=Et.x*.3,De.position.z+=Et.z*.3,console.log(`Repelling entity! Distance: ${fn.toFixed(1)}m`))}if(fn<5){V||(I(!0),console.log("JUMPSCARE TRIGGERED!"),setTimeout(()=>{I(!1)},2e3));const Et=Math.max(0,Math.min(1,(5-fn)/3));Z(Et)}else V&&(I(!1),Z(0));const An=.04+J.current.score*.001,Oi=An;if(!Hn){if(it.current++,it.current>=30){it.current=0;const Et=He(De.position.x,De.position.z,Wt.x,Wt.z);Et.length>0&&(rt.current=Et,q.current=0)}if(rt.current.length>0&&q.current<rt.current.length){const Et=rt.current[q.current],jt=new K(Et.x-De.position.x,0,Et.z-De.position.z);if(jt.length()<1.5)q.current++;else{const vn=jt.normalize();De.position.x+=vn.x*Oi,De.position.z+=vn.z*Oi}}else{const jt=new K(Wt.x-De.position.x,0,Wt.z-De.position.z).normalize();De.position.x+=jt.x*Oi,De.position.z+=jt.z*Oi}}if(De.lookAt(te.position),fn<2){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(Et){console.warn("Could not play scream:",Et)}J.current.gameOver=!0,m(!0)}const oi=Math.sqrt(Math.pow(Wt.x-$e.position.x,2)+Math.pow(Wt.z-$e.position.z,2));F(Math.floor(oi));let Rn=!1;if(At.current.active&&At.current.power>0){const Et=new K($e.position.x-te.position.x,0,$e.position.z-te.position.z).normalize(),jt=new K;te.getWorldDirection(jt),jt.y=0,jt.normalize(),jt.dot(Et)>.7&&oi<20&&(Rn=!0,$e.position.x+=Et.x*.3,$e.position.z+=Et.z*.3,console.log(`Repelling troll! Distance: ${oi.toFixed(1)}m`))}if(!Rn){if(_t.current++,_t.current>=30){_t.current=0;const jt=He($e.position.x,$e.position.z,Wt.x,Wt.z);jt.length>0&&(Ot.current=jt,Vt.current=0)}const Et=An;if(Ot.current.length>0&&Vt.current<Ot.current.length){const jt=Ot.current[Vt.current],Te=new K(jt.x-$e.position.x,0,jt.z-$e.position.z);if(Te.length()<1.5)Vt.current++;else{const Ei=Te.normalize();$e.position.x+=Ei.x*Et,$e.position.z+=Ei.z*Et}}else{const Te=new K(Wt.x-$e.position.x,0,Wt.z-$e.position.z).normalize();$e.position.x+=Te.x*Et,$e.position.z+=Te.z*Et}}if($e.lookAt(te.position),$e.userData.glowLight&&$e.userData.glowLight.position.copy($e.position),oi<2){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(Et){console.warn("Could not play scream:",Et)}J.current.gameOver=!0,m(!0)}const li=Math.min(fn,oi);if(li<20){let Et=0;li<5?Et=.15:li<10?Et=.08:li<15?Et=.04:Et=.02,D(jt=>Math.max(0,jt-Et))}else D(Et=>Math.min(100,Et+.1));if(N<=0&&!J.current.gameOver){if(console.log("SANITY DEPLETED - LOST YOUR MIND!"),i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(Et){console.warn("Could not play scream:",Et)}J.current.gameOver=!0,m(!0)}const Le=Math.sqrt(Math.pow(Wt.x-Mt.x,2)+Math.pow(Wt.z-Mt.z,2));if(hi=Le<5,Le>6&&ra.includes("Exit locked")&&(k(""),ra=""),Le<Dt&&!J.current.won){if(fe.userData.unlocked){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}J.current.won=!0,x(!0),console.log("YOU ESCAPED! Time:",M,"Score:",u)}else if(cn%30===0){const jt=`Exit locked! Find all hands (${le.filter(Te=>Te.userData.discovered).length}/6) and enter sequence`;k(jt),ra=jt}}for(let Et=0;Et<le.length;Et++){const jt=le[Et];if(jt.userData.discovered)continue;const Te=Wt.x-jt.position.x,vn=Wt.z-jt.position.z;if(Math.sqrt(Te*Te+vn*vn)<2){jt.userData.discovered=!0;const Ga=["","Right Hand","Smoking Hand","Thumbs Up"][jt.userData.handType];k(`Found #${jt.userData.sequenceNumber}: ${Ga} (press ${jt.userData.handType})`),gt(Kn=>[...Kn,jt.userData.sequenceNumber]),console.log(`Discovered: #${jt.userData.sequenceNumber} = ${Ga}`),setTimeout(()=>k(""),3e3)}jt.rotation.y+=.02,jt.children[0].lookAt(te.position),jt.children[1].lookAt(te.position)}if(ce&&!ce.userData.collected){const Et=te.position.x-ce.position.x,jt=te.position.z-ce.position.z,Te=Math.sqrt(Et*Et+jt*jt);if(cn%60===0&&(console.log(`Distance to flashlight: ${Te.toFixed(2)}m at position (${ce.position.x}, ${ce.position.z})`),console.log(`Player at: (${te.position.x.toFixed(2)}, ${te.position.z.toFixed(2)})`)),Te<3)console.log("PICKING UP FLASHLIGHT! Distance:",Te.toFixed(2)),ce.userData.collected=!0,At.current.hasFlashlight=!0,Tt(!0),k("Found Flashlight! Press 4 to toggle (drains power when on)"),ce.visible=!1,ce.traverse(vn=>{vn.geometry&&vn.geometry.dispose(),vn.material&&(Array.isArray(vn.material)?vn.material.forEach(Ei=>Ei.dispose()):vn.material.dispose())}),Ht.remove(ce),console.log("Flashlight removed from scene"),setTimeout(()=>k(""),4e3);else{ce.rotation.y+=.03;const vn=1;ce.position.y=vn+Math.sin(Date.now()*.002)*.2,ce.children[0]&&ce.children[0].lookAt(te.position)}}if(At.current.hasFlashlight){if(At.current.active&&At.current.power>0){const Et=Math.max(0,At.current.power-.05);At.current.power=Et,nt(Et),ai.visible=!0,Mi.visible=!0,console.log("Flashlight ON - Power:",Et.toFixed(1)+"%")}else ai.visible=!1,Mi.visible=!1;At.current.power<=0&&At.current.active&&(At.current.active=!1,Ct(!1),console.log("Flashlight out of power!"))}he.intensity=.8+Math.random()*.4,se.intensity=.8+Math.random()*.4,Zt.intensity=.8+Math.random()*.4,Ye.intensity=.8+Math.random()*.4,Yt.intensity=.8+Math.random()*.4,pe.intensity=.8+Math.random()*.4,ln.intensity=.8+Math.random()*.4,sn.intensity=.8+Math.random()*.4}O.render(Ht,te)}so();const oo=()=>{te.aspect=window.innerWidth/window.innerHeight,te.updateProjectionMatrix(),O.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",oo),()=>{if(window.removeEventListener("keydown",aa),window.removeEventListener("keyup",Ae),document.removeEventListener("mousemove",zn),O.domElement.removeEventListener("click",In),window.removeEventListener("resize",oo),o.current?.removeChild(O.domElement),i.current){try{i.current.pause()}catch{}i.current=null}if(r.current){try{r.current.pause()}catch{}try{r.current.currentTime=0}catch{}r.current=null}O.dispose()}},[_]);const ot=()=>{window.location.reload()},Nt=Ft=>{const Ht=7+Math.floor(Ft/60),te=Ft%60;return`2:${Ht.toString().padStart(2,"0")}:${te.toString().padStart(2,"0")} AM`};return Xt.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"relative",backgroundColor:"#0b0b0b",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)",pointerEvents:"none",zIndex:10}}),Xt.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),_&&!h&&N<80&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",background:`radial-gradient(circle, transparent ${40+N/2}%, rgba(0,0,0,${(100-N)/100}) 100%)`,zIndex:9997,transition:"background 0.3s ease"}}),Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:(100-N)/200,background:"repeating-linear-gradient(0deg, transparent 0px, rgba(255,0,0,0.03) 2px, transparent 4px)",animation:N<30?"fear-shake 0.2s infinite":"none",zIndex:9997}}),N<30&&Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",background:`rgba(255,0,0,${(30-N)/100})`,zIndex:9997,mixBlendMode:"multiply"}})]}),Xt.jsxs("div",{className:"crt-overlay",style:{pointerEvents:"none"},children:[Xt.jsx("div",{className:"crt-scanlines"}),Xt.jsx("div",{className:"crt-noise"}),Xt.jsx("div",{className:"crt-veneer"})]}),Xt.jsxs("div",{style:{position:"absolute",top:12,left:12,color:"#d6d6d6",fontSize:"18px",lineHeight:"18px",background:"linear-gradient(#0f0f0f, #131313)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',imageRendering:"pixelated",animation:"hud-flicker 7s infinite"},children:["Score: ",u]}),Xt.jsx("div",{style:{position:"absolute",top:12,right:12,color:"#cfcfcf",fontSize:"16px",background:"rgba(20,20,20,0.6)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",textAlign:"right",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:Nt(M)}),_&&!h&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsxs("div",{style:{position:"absolute",bottom:160,right:12,color:N<30?"#ff6666":N<60?"#ffff00":"#66ff66",fontSize:"14px",background:"rgba(20,20,20,0.9)",padding:"8px 12px",border:`2px solid ${N<30?"#ff0000":N<60?"#ffff00":"#00ff00"}`,borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',minWidth:"120px",animation:N<30?"sanity-pulse 1s infinite":"none",zIndex:1e3},children:[Xt.jsx("div",{style:{fontSize:"10px",marginBottom:"4px",textAlign:"center"},children:"SANITY"}),Xt.jsx("div",{style:{width:"100%",height:"8px",background:"#222",border:"1px solid #444",position:"relative"},children:Xt.jsx("div",{style:{width:`${N}%`,height:"100%",background:N<30?"linear-gradient(90deg, #ff0000, #ff6666)":N<60?"linear-gradient(90deg, #ffaa00, #ffff00)":"linear-gradient(90deg, #00ff00, #66ff66)",transition:"width 0.3s ease",boxShadow:N<30?"0 0 10px rgba(255,0,0,0.5)":"none"}})}),Xt.jsxs("div",{style:{fontSize:"10px",marginTop:"2px",textAlign:"center"},children:[Math.floor(N),"%"]})]}),vt&&Xt.jsxs("div",{style:{position:"absolute",bottom:240,right:12,color:L<20?"#ff6666":L<50?"#ffff00":"#66ccff",fontSize:"14px",background:"rgba(20,20,20,0.9)",padding:"8px 12px",border:`2px solid ${L<20?"#ff0000":L<50?"#ffff00":"#00ccff"}`,borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',minWidth:"120px",animation:L<20?"sanity-pulse 1s infinite":"none",zIndex:1e3},children:[Xt.jsxs("div",{style:{fontSize:"10px",marginBottom:"4px",textAlign:"center"},children:["FLASHLIGHT ",xt?"⚡":""]}),Xt.jsx("div",{style:{width:"100%",height:"8px",background:"#222",border:"1px solid #444",position:"relative"},children:Xt.jsx("div",{style:{width:`${L}%`,height:"100%",background:L<20?"linear-gradient(90deg, #ff0000, #ff6666)":L<50?"linear-gradient(90deg, #ffaa00, #ffff00)":"linear-gradient(90deg, #00ccff, #66eeff)",transition:"width 0.3s ease",boxShadow:xt?"0 0 10px rgba(0,200,255,0.5)":"none"}})}),Xt.jsxs("div",{style:{fontSize:"10px",marginTop:"2px",textAlign:"center"},children:[Math.floor(L),"% ",L===0?"(EMPTY)":""]})]}),Xt.jsx("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",color:"#d0d0d0",fontSize:R<10||v<10?"20px":"14px",background:R<10||v<10?"rgba(30,10,10,0.6)":"rgba(20,20,20,0.4)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center"},children:R<10||v<10?"THEY ARE NEAR":`Entity: ${R}m | Troll: ${v}m`}),j&&Xt.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#ffff00",fontSize:"18px",background:"rgba(20,20,20,0.9)",padding:"12px 20px",border:"2px solid #ffff00",borderRadius:"4px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center",boxShadow:"0 0 20px rgba(255,255,0,0.5)",zIndex:1e3},children:j}),ft.length>0&&Xt.jsxs("div",{style:{position:"absolute",bottom:60,left:"50%",transform:"translateX(-50%)",color:"#00ffff",fontSize:"16px",background:"rgba(20,20,20,0.8)",padding:"8px 16px",border:"1px solid #00ffff",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center"},children:["Input: ",ft.join(" ")," (",ft.length,"/6)"]}),Xt.jsxs("div",{style:{position:"absolute",top:60,left:12,color:"#ffff00",fontSize:"14px",background:"rgba(20,20,20,0.7)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:["Hands Found: ",ct.length,"/6"]}),N<30&&N>0&&Xt.jsxs("div",{style:{position:"absolute",top:"40%",left:"50%",transform:"translateX(-50%)",color:"#ff0000",fontSize:"14px",background:"rgba(30,0,0,0.8)",padding:"8px 16px",border:"2px solid #ff0000",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center",animation:"fear-pulse 0.5s infinite",textShadow:"0 0 10px rgba(255,0,0,0.8)",zIndex:1001},children:["⚠ YOUR MIND IS BREAKING ⚠",Xt.jsx("br",{}),Xt.jsx("span",{style:{fontSize:"11px"},children:"GET AWAY FROM THEM!"})]})]}),V&&Xt.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(4,4,6,0.6)"},children:Xt.jsx("img",{src:N1,alt:"",style:{width:`${40+P*40}%`,height:`${40+P*40}%`,objectFit:"cover",opacity:.95,filter:`grayscale(0.7) contrast(${.9+P*.2}) brightness(${.9-P*.2})`,transition:"none",imageRendering:"auto",border:"2px solid rgba(60,60,60,0.6)"}})}),Xt.jsxs("div",{style:{position:"absolute",bottom:12,right:12,color:"#d0d0d0",fontSize:"13px",background:"linear-gradient(#0b0b0b, #111111)",padding:"8px",border:"1px solid #2b2b2b",borderRadius:"2px",lineHeight:"18px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:["WASD - move",Xt.jsx("br",{}),"SPACE - jump",Xt.jsx("br",{}),"SHIFT - down (fly)",Xt.jsx("br",{}),"F - toggle fly (debug)",Xt.jsx("br",{}),"1/2/3 - switch hands (at exit)",Xt.jsx("br",{}),"4 - toggle flashlight",Xt.jsx("br",{}),"R - reset input (at exit)",Xt.jsx("br",{}),"Mouse - look"]}),!_&&!h&&Xt.jsxs("div",{onClick:()=>{J.current.started=!0,S(!0),setTimeout(()=>{e.current&&e.current.domElement.requestPointerLock()},100)},style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#dcdcdc",fontSize:"16px",backgroundColor:"rgba(12,12,12,0.95)",padding:"40px 50px",border:"2px solid #3a3a3a",boxShadow:"0 0 30px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.3)",cursor:"pointer",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',backgroundImage:`url(${Pd})`,backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay",overflow:"hidden"},children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`url(${Pd})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(15px) grayscale(100%) brightness(0.3) contrast(0.5)",opacity:.15,zIndex:-1}}),Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)",pointerEvents:"none",zIndex:1,opacity:.3}}),Xt.jsxs("div",{style:{position:"relative",zIndex:2},children:[Xt.jsx("div",{style:{fontSize:"48px",marginBottom:"8px",fontWeight:"bold",textShadow:"0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)",letterSpacing:"4px",animation:"title-glow 3s infinite alternate"},children:"LIMINAL MALL"}),Xt.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"20px",letterSpacing:"2px",textTransform:"uppercase"},children:"━━━━━ SURVIVAL HORROR ━━━━━"}),Xt.jsx("div",{style:{fontSize:"14px",color:"#ffff00",marginBottom:"6px",textShadow:"0 0 8px rgba(255,255,0,0.4), 1px 1px 2px rgba(0,0,0,0.8)"},children:"⚠ Find 6 hands to unlock the EXIT"}),Xt.jsx("div",{style:{fontSize:"13px",color:"#bfbfbf",marginBottom:"8px",lineHeight:"1.4"},children:"Each hand shows its number in the sequence"}),Xt.jsx("div",{style:{fontSize:"12px",color:"#ff6666",marginTop:"14px",marginBottom:"14px",fontStyle:"italic",textShadow:"0 0 5px rgba(255,100,100,0.3)"},children:"...something is watching..."}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#999",marginBottom:"20px",opacity:.7},children:["The mall has been running for a long time",Xt.jsx("br",{}),"Time: 2:07 AM • Security: OFFLINE"]}),Xt.jsx("div",{style:{fontSize:"16px",color:"#00ff00",marginTop:"20px",padding:"10px 24px",border:"2px solid #00ff00",display:"inline-block",boxShadow:"0 0 15px rgba(0,255,0,0.3), inset 0 0 10px rgba(0,255,0,0.1)",animation:"button-pulse 2s infinite",letterSpacing:"2px",fontWeight:"bold"},children:">> CLICK TO ENTER <<"}),Xt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"16px",letterSpacing:"1px"},children:"[ HEADPHONES RECOMMENDED ]"})]})]}),h&&!p&&Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#e6e6e6",fontSize:"18px",backgroundColor:"rgba(10,10,10,0.98)",padding:"28px",border:"1px solid #2d2d2d",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",imageRendering:"pixelated",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{fontSize:"28px",marginBottom:"12px",color:"#cfcfcf"},children:"IT GOT YOU"}),Xt.jsxs("div",{style:{fontSize:"14px",color:"#bdbdbd",marginBottom:"8px"},children:["You survived: ",Nt(M)]}),Xt.jsxs("div",{style:{fontSize:"14px",color:"#bdbdbd",marginBottom:"12px"},children:["Score: ",u]}),Xt.jsx("button",{onClick:ot,style:{marginTop:"10px",padding:"10px 28px",fontSize:"14px",background:"#1a1a1a",color:"#dcdcdc",border:"1px solid #2b2b2b",cursor:"pointer",fontWeight:"normal",borderRadius:"2px"},children:"TRY AGAIN"})]}),p&&Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#e6e6e6",fontSize:"16px",backgroundColor:"rgba(12,12,12,0.98)",padding:"24px",border:"1px solid #2d2d2d",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",imageRendering:"pixelated",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{fontSize:"22px",marginBottom:"10px",color:"#cfcfcf"},children:"YOU ESCAPED"}),Xt.jsxs("div",{style:{fontSize:"13px",color:"#bdbdbd",marginBottom:"8px"},children:["Escape Time: ",Nt(M)]}),Xt.jsxs("div",{style:{fontSize:"13px",color:"#bdbdbd",marginBottom:"10px"},children:["Final Score: ",u]}),Xt.jsx("button",{onClick:ot,style:{marginTop:"8px",padding:"8px 22px",fontSize:"13px",background:"#171717",color:"#dcdcdc",border:"1px solid #2b2b2b",cursor:"pointer",fontWeight:"normal",borderRadius:"2px"},children:"PLAY AGAIN"})]}),Xt.jsx("style",{children:`
        /* Small retro animations and CRT effects */
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateX(-50%); }
          50% { transform: scale(1.05) translateX(-50%); }
        }

        /* Title glow animation */
        @keyframes title-glow {
          0% { 
            textShadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8);
          }
          100% { 
            textShadow: 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(100,255,255,0.4), 2px 2px 4px rgba(0,0,0,0.8);
          }
        }
        
        /* Button pulse animation */
        @keyframes button-pulse {
          0%, 100% { 
            boxShadow: 0 0 15px rgba(0,255,0,0.3), inset 0 0 10px rgba(0,255,0,0.1);
            transform: scale(1);
          }
          50% { 
            boxShadow: 0 0 25px rgba(0,255,0,0.5), inset 0 0 15px rgba(0,255,0,0.2);
            transform: scale(1.02);
          }
        }

        /* Sanity bar pulse when critically low */
        @keyframes sanity-pulse {
          0%, 100% { 
            boxShadow: 0 0 10px rgba(255,0,0,0.5);
            transform: scale(1);
          }
          50% { 
            boxShadow: 0 0 20px rgba(255,0,0,0.8);
            transform: scale(1.03);
          }
        }

        /* Fear pulse for warning message */
        @keyframes fear-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Fear shake animation when sanity is very low */
        @keyframes fear-shake {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2px, 1px); }
          20% { transform: translate(2px, -1px); }
          30% { transform: translate(-1px, 2px); }
          40% { transform: translate(1px, -2px); }
          50% { transform: translate(-2px, -1px); }
          60% { transform: translate(2px, 1px); }
          70% { transform: translate(-1px, -2px); }
          80% { transform: translate(1px, 2px); }
          90% { transform: translate(-2px, 0px); }
        }

        /* Scanlines */
        .crt-overlay { position: absolute; inset: 0; z-index: 9998; pointer-events: none; }
        .crt-scanlines { position: absolute; inset: 0; background-image: repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.03) 1px); opacity: 0.06; mix-blend-mode: overlay; animation: scan-flicker 4s infinite; }
        @keyframes scan-flicker { 0% { opacity: 0.04 } 50% { opacity: 0.08 } 100% { opacity: 0.04 } }

        /* Noise - small pixel dots to emulate analog jitter */
        .crt-noise { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 3px 3px; opacity: 0.04; animation: noise 0.12s steps(2, end) infinite; mix-blend-mode: overlay; }
        @keyframes noise { 0% { transform: translate(0,0); } 100% { transform: translate(1px,1px); } }

        /* Veneer flicker to slightly dim/brighten whole screen */
        .crt-veneer { position: absolute; inset: 0; background: rgba(8,8,8,0.02); animation: veneer-flicker 6s infinite; pointer-events: none; }
        @keyframes veneer-flicker { 0% { opacity: 0.02 } 3% { opacity: 0.06 } 6% { opacity: 0.02 } 100% { opacity: 0.02 } }

        /* Subtle HUD flicker for unsettled vibes */
        @keyframes hud-flicker { 0% { opacity: 1 } 7% { opacity: 0.9 } 12% { opacity: 1 } 100% { opacity: 1 } }

      `})]})}uS.createRoot(document.getElementById("root")).render(Xt.jsx(Je.StrictMode,{children:Xt.jsx(z1,{})}));
