(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Kf={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function aS(){if(m0)return Zo;m0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var g0;function rS(){return g0||(g0=1,Kf.exports=aS()),Kf.exports}var Xt=rS(),Qf={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function sS(){if(_0)return ge;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(N,$,St){this.props=N,this.context=$,this.refs=y,this.updater=St||A}x.prototype.isReactComponent={},x.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=x.prototype;function z(N,$,St){this.props=N,this.context=$,this.refs=y,this.updater=St||A}var R=z.prototype=new I;R.constructor=z,C(R,x.prototype),R.isPureReactComponent=!0;var X=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(N,$,St){var Ct=St.ref;return{$$typeof:o,type:N,key:$,ref:Ct!==void 0?Ct:null,props:St}}function w(N,$){return D(N.type,$,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function at(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return $[St]})}var ut=/\/+/g;function gt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?at(""+N.key):$.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,$,St,Ct,Pt){var K=typeof N;(K==="undefined"||K==="boolean")&&(N=null);var st=!1;if(N===null)st=!0;else switch(K){case"bigint":case"string":case"number":st=!0;break;case"object":switch(N.$$typeof){case o:case e:st=!0;break;case v:return st=N._init,O(st(N._payload),$,St,Ct,Pt)}}if(st)return Pt=Pt(N),st=Ct===""?"."+gt(N,0):Ct,X(Pt)?(St="",st!=null&&(St=st.replace(ut,"$&/")+"/"),O(Pt,$,St,"",function(kt){return kt})):Pt!=null&&(V(Pt)&&(Pt=w(Pt,St+(Pt.key==null||N&&N.key===Pt.key?"":(""+Pt.key).replace(ut,"$&/")+"/")+st)),$.push(Pt)),1;st=0;var Lt=Ct===""?".":Ct+":";if(X(N))for(var Ht=0;Ht<N.length;Ht++)Ct=N[Ht],K=Lt+gt(Ct,Ht),st+=O(Ct,$,St,K,Pt);else if(Ht=M(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(Ct=N.next()).done;)Ct=Ct.value,K=Lt+gt(Ct,Ht++),st+=O(Ct,$,St,K,Pt);else if(K==="object"){if(typeof N.then=="function")return O(dt(N),$,St,Ct,Pt);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return st}function j(N,$,St){if(N==null)return N;var Ct=[],Pt=0;return O(N,Ct,"","",function(K){return $.call(St,K,Pt++)}),Ct}function W(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var pt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Tt={map:j,forEach:function(N,$,St){j(N,function(){$.apply(this,arguments)},St)},count:function(N){var $=0;return j(N,function(){$++}),$},toArray:function(N){return j(N,function($){return $})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ge.Activity=_,ge.Children=Tt,ge.Component=x,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=z,ge.StrictMode=r,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ge.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ge.cache=function(N){return function(){return N.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(N,$,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ct=C({},N.props),Pt=N.key;if($!=null)for(K in $.key!==void 0&&(Pt=""+$.key),$)!Z.call($,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&$.ref===void 0||(Ct[K]=$[K]);var K=arguments.length-2;if(K===1)Ct.children=St;else if(1<K){for(var st=Array(K),Lt=0;Lt<K;Lt++)st[Lt]=arguments[Lt+2];Ct.children=st}return D(N.type,Pt,Ct)},ge.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ge.createElement=function(N,$,St){var Ct,Pt={},K=null;if($!=null)for(Ct in $.key!==void 0&&(K=""+$.key),$)Z.call($,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Pt[Ct]=$[Ct]);var st=arguments.length-2;if(st===1)Pt.children=St;else if(1<st){for(var Lt=Array(st),Ht=0;Ht<st;Ht++)Lt[Ht]=arguments[Ht+2];Pt.children=Lt}if(N&&N.defaultProps)for(Ct in st=N.defaultProps,st)Pt[Ct]===void 0&&(Pt[Ct]=st[Ct]);return D(N,K,Pt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(N){return{$$typeof:h,render:N}},ge.isValidElement=V,ge.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:W}},ge.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},ge.startTransition=function(N){var $=P.T,St={};P.T=St;try{var Ct=N(),Pt=P.S;Pt!==null&&Pt(St,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(F,pt)}catch(K){pt(K)}finally{$!==null&&St.types!==null&&($.types=St.types),P.T=$}},ge.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ge.use=function(N){return P.H.use(N)},ge.useActionState=function(N,$,St){return P.H.useActionState(N,$,St)},ge.useCallback=function(N,$){return P.H.useCallback(N,$)},ge.useContext=function(N){return P.H.useContext(N)},ge.useDebugValue=function(){},ge.useDeferredValue=function(N,$){return P.H.useDeferredValue(N,$)},ge.useEffect=function(N,$){return P.H.useEffect(N,$)},ge.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ge.useId=function(){return P.H.useId()},ge.useImperativeHandle=function(N,$,St){return P.H.useImperativeHandle(N,$,St)},ge.useInsertionEffect=function(N,$){return P.H.useInsertionEffect(N,$)},ge.useLayoutEffect=function(N,$){return P.H.useLayoutEffect(N,$)},ge.useMemo=function(N,$){return P.H.useMemo(N,$)},ge.useOptimistic=function(N,$){return P.H.useOptimistic(N,$)},ge.useReducer=function(N,$,St){return P.H.useReducer(N,$,St)},ge.useRef=function(N){return P.H.useRef(N)},ge.useState=function(N){return P.H.useState(N)},ge.useSyncExternalStore=function(N,$,St){return P.H.useSyncExternalStore(N,$,St)},ge.useTransition=function(){return P.H.useTransition()},ge.version="19.2.0",ge}var v0;function bh(){return v0||(v0=1,Qf.exports=sS()),Qf.exports}var je=bh(),Jf={exports:{}},Ko={},$f={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function oS(){return x0||(x0=1,(function(o){function e(O,j){var W=O.length;O.push(j);t:for(;0<W;){var pt=W-1>>>1,Tt=O[pt];if(0<l(Tt,j))O[pt]=j,O[W]=Tt,W=pt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],W=O.pop();if(W!==j){O[0]=W;t:for(var pt=0,Tt=O.length,N=Tt>>>1;pt<N;){var $=2*(pt+1)-1,St=O[$],Ct=$+1,Pt=O[Ct];if(0>l(St,W))Ct<Tt&&0>l(Pt,St)?(O[pt]=Pt,O[Ct]=W,pt=Ct):(O[pt]=St,O[$]=W,pt=$);else if(Ct<Tt&&0>l(Pt,W))O[pt]=Pt,O[Ct]=W,pt=Ct;else break t}}return j}function l(O,j){var W=O.sortIndex-j.sortIndex;return W!==0?W:O.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,M=!1,A=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function R(O){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=O)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function X(O){if(C=!1,R(O),!A)if(i(m)!==null)A=!0,F||(F=!0,at());else{var j=i(p);j!==null&&dt(X,j.startTime-O)}}var F=!1,P=-1,Z=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<Z)}function V(){if(y=!1,F){var O=o.unstable_now();D=O;var j=!0;try{t:{A=!1,C&&(C=!1,I(P),P=-1),M=!0;var W=S;try{e:{for(R(O),_=i(m);_!==null&&!(_.expirationTime>O&&w());){var pt=_.callback;if(typeof pt=="function"){_.callback=null,S=_.priorityLevel;var Tt=pt(_.expirationTime<=O);if(O=o.unstable_now(),typeof Tt=="function"){_.callback=Tt,R(O),j=!0;break e}_===i(m)&&r(m),R(O)}else r(m);_=i(m)}if(_!==null)j=!0;else{var N=i(p);N!==null&&dt(X,N.startTime-O),j=!1}}break t}finally{_=null,S=W,M=!1}j=void 0}}finally{j?at():F=!1}}}var at;if(typeof z=="function")at=function(){z(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){x(V,0)};function dt(O,j){P=x(function(){O(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var W=S;S=j;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return j()}finally{S=W}},o.unstable_scheduleCallback=function(O,j,W){var pt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pt+W:pt):W=pt,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=W+Tt,O={id:v++,callback:j,priorityLevel:O,startTime:W,expirationTime:Tt,sortIndex:-1},W>pt?(O.sortIndex=W,e(p,O),i(m)===null&&O===i(p)&&(C?(I(P),P=-1):C=!0,dt(X,W-pt))):(O.sortIndex=Tt,e(m,O),A||M||(A=!0,F||(F=!0,at()))),O},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(O){var j=S;return function(){var W=S;S=j;try{return O.apply(this,arguments)}finally{S=W}}}})(td)),td}var S0;function lS(){return S0||(S0=1,$f.exports=oS()),$f.exports}var ed={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function cS(){if(y0)return ti;y0=1;var o=bh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ti.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},ti.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},ti.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},ti.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ti.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ti.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},ti.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ti.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},ti.requestFormReset=function(m){r.d.r(m)},ti.unstable_batchedUpdates=function(m,p){return m(p)},ti.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},ti.useFormStatus=function(){return d.H.useHostTransitionStatus()},ti.version="19.2.0",ti}var M0;function uS(){if(M0)return ed.exports;M0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=cS(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function fS(){if(E0)return Ko;E0=1;var o=lS(),e=bh(),i=uS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var dt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pt=[],Tt=-1;function N(t){return{current:t}}function $(t){0>Tt||(t.current=pt[Tt],pt[Tt]=null,Tt--)}function St(t,n){Tt++,pt[Tt]=t.current,t.current=n}var Ct=N(null),Pt=N(null),K=N(null),st=N(null);function Lt(t,n){switch(St(K,n),St(Pt,t),St(Ct,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ig(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ig(n),t=Fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Ct),St(Ct,t)}function Ht(){$(Ct),$(Pt),$(K)}function kt(t){t.memoizedState!==null&&St(st,t);var n=Ct.current,a=Fg(n,t.type);n!==a&&(St(Pt,t),St(Ct,a))}function de(t){Pt.current===t&&($(Ct),$(Pt)),st.current===t&&($(st),Wo._currentValue=W)}var oe,L;function ce(t){if(oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);oe=n&&n[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+t+L}var fe=!1;function ee(t,n){if(!t||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var it=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){it=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){it=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),et=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===et.length)for(s=B.length-1,c=et.length-1;1<=s&&0<=c&&B[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==et[c]){var ft=`
`+B[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ce(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return ce(t.type);case 16:return ce("Lazy");case 13:return t.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return ce("Activity");default:return""}}function ze(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vt=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,sn=o.unstable_cancelCallback,$e=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,te=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Qt=o.log,Jt=o.unstable_setDisableYieldValue,Mt=null,Ut=null;function Kt(t){if(typeof Qt=="function"&&Jt(t),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Mt,t)}catch{}}var Bt=Math.clz32?Math.clz32:G,Ot=Math.log,le=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ot(t)/le|0)|0}var Et=256,At=262144,Gt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=yt(s):(g&=T,g!==0?c=yt(g):a||(a=T&~t,a!==0&&(c=yt(a))))):(T=s&~f,T!==0?c=yt(T):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function he(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var t=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pe(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Bt(a),_t=1<<ft;T[ft]=0,B[ft]=-1;var it=et[ft];if(it!==null)for(et[ft]=null,ft=0;ft<it.length;ft++){var ot=it[ft];ot!==null&&(ot.lane&=-536870913)}a&=~_t}s!==0&&br(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function br(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Bt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Be(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Bt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Xi(t,n){var a=n&-n;return a=(a&42)!==0?1:Ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ki(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wi(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Ar(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var _n=Math.random().toString(36).slice(2),hn="__reactFiber$"+_n,Pn="__reactProps$"+_n,aa="__reactContainer$"+_n,Di="__reactEvents$"+_n,Wi="__reactListeners$"+_n,Rr="__reactHandles$"+_n,va="__reactResources$"+_n,Ui="__reactMarker$"+_n;function b(t){delete t[hn],delete t[Pn],delete t[Di],delete t[Wi],delete t[Rr]}function k(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[aa]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[hn])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function nt(t){if(t=t[hn]||t[aa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function q(t){var n=t[va];return n||(n=t[va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Ui]=!0}var zt=new Set,Nt={};function It(t,n){Rt(t,n),Rt(t+"Capture",n)}function Rt(t,n){for(Nt[t]=n,t=0;t<n.length;t++)zt.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},pe={};function Te(t){return Vt.call(pe,t)?!0:Vt.call(jt,t)?!1:re.test(t)?pe[t]=!0:(jt[t]=!0,!1)}function Fe(t,n,a){if(Te(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ve(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rn(t){if(!t._valueTracker){var n=Ze(t)?"checked":"value";t._valueTracker=be(t,n,""+t[n])}}function qi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ze(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ra=/[\n"\\]/g;function me(t){return t.replace(ra,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(t,n,a,s,c,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Yt(n)):t.value!==""+Yt(n)&&(t.value=""+Yt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,Yt(n)):a!=null?xn(t,g,Yt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Yt(T):t.removeAttribute("name")}function Bn(t,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Rn(t);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Rn(t)}function xn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function xa(t,n,a){if(n!=null&&(n=""+Yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Yt(a):""}function Dt(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Yt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Rn(t)}function ae(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qe(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Oe.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ln(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&qe(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&qe(t,f,n[f])}function He(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $n=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sn(t){return Gn.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ke(){}var mn=null;function sa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _i=null,qn=null;function Li(t){var n=nt(t);if(n&&(t=n.stateNode)){var a=t[Pn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Pn]||null;if(!c)throw Error(r(90));Cn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&qi(s)}break t;case"textarea":xa(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var Me=!1;function vi(t,n,a){if(Me)return t(n,a);Me=!0;try{var s=t(n);return s}finally{if(Me=!1,(_i!==null||qn!==null)&&(Ql(),_i&&(n=_i,t=qn,qn=_i=null,Li(n),t)))for(n=0;n<t.length;n++)Li(t[n])}}function cn(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Pn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=!1;if(un)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Yi=!1}var Yn=null,ji=null,Xa=null;function bt(){if(Xa)return Xa;var t,n=ji,a=n.length,s,c="value"in Yn?Yn.value:Yn.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Xa=c.slice(t,1<s?1-s:void 0)}function ne(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yn(){return!0}function Vn(){return!1}function wn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?yn:Vn,this.isPropagationStopped=Vn,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cr=wn(ka),Wa=_({},ka,{view:0,detail:0}),Kc=wn(Wa),Qc,Jc,uo,ml=_({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Qc=t.screenX-uo.screenX,Jc=t.screenY-uo.screenY):Jc=Qc=0,uo=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Gh=wn(ml),iv=_({},ml,{dataTransfer:0}),av=wn(iv),rv=_({},Wa,{relatedTarget:0}),$c=wn(rv),sv=_({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=wn(sv),lv=_({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=wn(lv),uv=_({},ka,{data:0}),Vh=wn(uv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hv[t])?!!n[t]:!1}function tu(){return pv}var mv=_({},Wa,{key:function(t){if(t.key){var n=fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ne(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?ne(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ne(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=wn(mv),_v=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=wn(_v),vv=_({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),xv=wn(vv),Sv=_({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=wn(Sv),Mv=_({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=wn(Mv),Tv=_({},ka,{newState:0,oldState:0}),bv=wn(Tv),Av=[9,13,27,32],eu=un&&"CompositionEvent"in window,fo=null;un&&"documentMode"in document&&(fo=document.documentMode);var Rv=un&&"TextEvent"in window&&!fo,kh=un&&(!eu||fo&&8<fo&&11>=fo),Wh=" ",qh=!1;function Yh(t,n){switch(t){case"keyup":return Av.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Cv(t,n){switch(t){case"compositionend":return jh(n);case"keypress":return n.which!==32?null:(qh=!0,Wh);case"textInput":return t=n.data,t===Wh&&qh?null:t;default:return null}}function wv(t,n){if(os)return t==="compositionend"||!eu&&Yh(t,n)?(t=bt(),Xa=ji=Yn=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kh&&n.locale!=="ko"?null:n.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dv[t.type]:n==="textarea"}function Kh(t,n,a,s){_i?qn?qn.push(s):qn=[s]:_i=s,n=ac(n,"onChange"),0<n.length&&(a=new Cr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ho=null,po=null;function Uv(t){Lg(t,0)}function gl(t){var n=rt(t);if(qi(n))return t}function Qh(t,n){if(t==="change")return n}var Jh=!1;if(un){var nu;if(un){var iu="oninput"in document;if(!iu){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),iu=typeof $h.oninput=="function"}nu=iu}else nu=!1;Jh=nu&&(!document.documentMode||9<document.documentMode)}function tp(){ho&&(ho.detachEvent("onpropertychange",ep),po=ho=null)}function ep(t){if(t.propertyName==="value"&&gl(po)){var n=[];Kh(n,po,t,sa(t)),vi(Uv,n)}}function Lv(t,n,a){t==="focusin"?(tp(),ho=n,po=a,ho.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(po)}function Ov(t,n){if(t==="click")return gl(n)}function zv(t,n){if(t==="input"||t==="change")return gl(n)}function Pv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var xi=typeof Object.is=="function"?Object.is:Pv;function mo(t,n){if(xi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Vt.call(n,c)||!xi(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Bv=un&&"documentMode"in document&&11>=document.documentMode,ls=null,ru=null,go=null,su=!1;function sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||ls==null||ls!==vn(s)||(s=ls,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),go&&mo(go,s)||(go=s,s=ac(ru,"onSelect"),0<s.length&&(n=new Cr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ls)))}function wr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cs={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},ou={},op={};un&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Dr(t){if(ou[t])return ou[t];if(!cs[t])return t;var n=cs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return ou[t]=n[a];return t}var lp=Dr("animationend"),cp=Dr("animationiteration"),up=Dr("animationstart"),Iv=Dr("transitionrun"),Fv=Dr("transitionstart"),Hv=Dr("transitioncancel"),fp=Dr("transitionend"),dp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function Zi(t,n){dp.set(t,n),It(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ni=[],us=0,cu=0;function vl(){for(var t=us,n=cu=us=0;n<t;){var a=Ni[n];Ni[n++]=null;var s=Ni[n];Ni[n++]=null;var c=Ni[n];Ni[n++]=null;var f=Ni[n];if(Ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&hp(a,c,f)}}function xl(t,n,a,s){Ni[us++]=t,Ni[us++]=n,Ni[us++]=a,Ni[us++]=s,cu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uu(t,n,a,s){return xl(t,n,a,s),Sl(t)}function Ur(t,n){return xl(t,null,null,n),Sl(t)}function hp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Bt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Sl(t){if(50<Io)throw Io=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function Gv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,n,a,s){return new Gv(t,n,a,s)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=Si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")fu(t)&&(g=1);else if(typeof t=="string")g=qx(t,a,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Si(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return Lr(a.children,c,f,n);case y:g=8,c|=24;break;case x:return t=Si(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case X:return t=Si(13,a,n,c),t.elementType=X,t.lanes=f,t;case F:return t=Si(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:g=10;break t;case I:g=9;break t;case R:g=11;break t;case P:g=14;break t;case Z:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Si(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Lr(t,n,a,s){return t=Si(7,t,s,n),t.lanes=a,t}function du(t,n,a){return t=Si(6,t,null,n),t.lanes=a,t}function mp(t){var n=Si(18,null,null,0);return n.stateNode=t,n}function hu(t,n,a){return n=Si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function Oi(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ze(n)},gp.set(t,n),n)}return{value:t,source:n,stack:ze(n)}}var ds=[],hs=0,Ml=null,_o=0,zi=[],Pi=0,qa=null,oa=1,la="";function ya(t,n){ds[hs++]=_o,ds[hs++]=Ml,Ml=t,_o=n}function _p(t,n,a){zi[Pi++]=oa,zi[Pi++]=la,zi[Pi++]=qa,qa=t;var s=oa;t=la;var c=32-Bt(s)-1;s&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,oa=1<<32-Bt(n)+c|a<<c|s,la=f+t}else oa=1<<f|a<<c|s,la=t}function pu(t){t.return!==null&&(ya(t,1),_p(t,1,0))}function mu(t){for(;t===Ml;)Ml=ds[--hs],ds[hs]=null,_o=ds[--hs],ds[hs]=null;for(;t===qa;)qa=zi[--Pi],zi[Pi]=null,la=zi[--Pi],zi[Pi]=null,oa=zi[--Pi],zi[Pi]=null}function vp(t,n){zi[Pi++]=oa,zi[Pi++]=la,zi[Pi++]=qa,oa=n.id,la=n.overflow,qa=t}var jn=null,fn=null,Ue=!1,Ya=null,Bi=!1,gu=Error(r(519));function ja(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(Oi(n,t)),gu}function xp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[hn]=t,n[Pn]=s,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Re(Ho[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Bn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Dt(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Pg(n.textContent,a)?(s.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),s.onScroll!=null&&Re("scroll",n),s.onScrollEnd!=null&&Re("scrollend",n),s.onClick!=null&&(n.onclick=Ke),n=!0):n=!1,n||ja(t,!0)}function Sp(t){for(jn=t.return;jn;)switch(jn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:jn=jn.return}}function ps(t){if(t!==jn)return!1;if(!Ue)return Sp(t),Ue=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&fn&&ja(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=Wg(t)}else n===27?(n=fn,lr(t.type)?(t=Hf,Hf=null,fn=t):fn=n):fn=jn?Fi(t.stateNode.nextSibling):null;return!0}function Nr(){fn=jn=null,Ue=!1}function _u(){var t=Ya;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),Ya=null),t}function vo(t){Ya===null?Ya=[t]:Ya.push(t)}var vu=N(null),Or=null,Ma=null;function Za(t,n,a){St(vu,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=vu.current,$(vu)}function xu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xu(f.return,a,t),s||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),xu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ms(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;xi(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===st.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}c=c.return}t!==null&&Su(n,t,a,s),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Or=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return yp(Or,t)}function Tl(t,n){return Or===null&&zr(t),yp(t,n)}function yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(r(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,kv=o.unstable_NormalPriority,Dn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new Vv,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&Xv(kv,function(){t.controller.abort()})}var So=null,Mu=0,gs=0,_s=null;function Wv(t,n){if(So===null){var a=So=[];Mu=0,gs=Af(),_s={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Mp,Mp),n}function Mp(){if(--Mu===0&&So!==null){_s!==null&&(_s.status="fulfilled");var t=So;So=null,gs=0,_s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=O.S;O.S=function(t,n){sg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wv(t,n),Ep!==null&&Ep(t,n)};var Pr=N(null);function Eu(){var t=Pr.current;return t!==null?t:on.pooledCache}function bl(t,n){n===null?St(Pr,Pr.current):St(Pr,n.pool)}function Tp(){var t=Eu();return t===null?null:{parent:Dn._currentValue,pool:t}}var vs=Error(r(460)),Tu=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ke,Ke),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Ke,Ke);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw Ir=n,vs}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ir=a,vs):a}}var Ir=null;function Rp(){if(Ir===null)throw Error(r(459));var t=Ir;return Ir=null,t}function Cp(t){if(t===vs||t===Al)throw Error(r(483))}var xs=null,yo=0;function Cl(t){var n=yo;return yo+=1,xs===null&&(xs=[]),Ap(xs,t,n)}function Mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wp(t){function n(Y,H){if(t){var tt=Y.deletions;tt===null?(Y.deletions=[H],Y.flags|=16):tt.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function c(Y,H){return Y=Sa(Y,H),Y.index=0,Y.sibling=null,Y}function f(Y,H,tt){return Y.index=tt,t?(tt=Y.alternate,tt!==null?(tt=tt.index,tt<H?(Y.flags|=67108866,H):tt):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,H,tt,ht){return H===null||H.tag!==6?(H=du(tt,Y.mode,ht),H.return=Y,H):(H=c(H,tt),H.return=Y,H)}function B(Y,H,tt,ht){var ie=tt.type;return ie===C?ft(Y,H,tt.props.children,ht,tt.key):H!==null&&(H.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Z&&Br(ie)===H.type)?(H=c(H,tt.props),Mo(H,tt),H.return=Y,H):(H=yl(tt.type,tt.key,tt.props,null,Y.mode,ht),Mo(H,tt),H.return=Y,H)}function et(Y,H,tt,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==tt.containerInfo||H.stateNode.implementation!==tt.implementation?(H=hu(tt,Y.mode,ht),H.return=Y,H):(H=c(H,tt.children||[]),H.return=Y,H)}function ft(Y,H,tt,ht,ie){return H===null||H.tag!==7?(H=Lr(tt,Y.mode,ht,ie),H.return=Y,H):(H=c(H,tt),H.return=Y,H)}function _t(Y,H,tt){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=du(""+H,Y.mode,tt),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return tt=yl(H.type,H.key,H.props,null,Y.mode,tt),Mo(tt,H),tt.return=Y,tt;case A:return H=hu(H,Y.mode,tt),H.return=Y,H;case Z:return H=Br(H),_t(Y,H,tt)}if(dt(H)||at(H))return H=Lr(H,Y.mode,tt,null),H.return=Y,H;if(typeof H.then=="function")return _t(Y,Cl(H),tt);if(H.$$typeof===z)return _t(Y,Tl(Y,H),tt);wl(Y,H)}return null}function it(Y,H,tt,ht){var ie=H!==null?H.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ie!==null?null:T(Y,H,""+tt,ht);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===ie?B(Y,H,tt,ht):null;case A:return tt.key===ie?et(Y,H,tt,ht):null;case Z:return tt=Br(tt),it(Y,H,tt,ht)}if(dt(tt)||at(tt))return ie!==null?null:ft(Y,H,tt,ht,null);if(typeof tt.then=="function")return it(Y,H,Cl(tt),ht);if(tt.$$typeof===z)return it(Y,H,Tl(Y,tt),ht);wl(Y,tt)}return null}function ot(Y,H,tt,ht,ie){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(tt)||null,T(H,Y,""+ht,ie);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?tt:ht.key)||null,B(H,Y,ht,ie);case A:return Y=Y.get(ht.key===null?tt:ht.key)||null,et(H,Y,ht,ie);case Z:return ht=Br(ht),ot(Y,H,tt,ht,ie)}if(dt(ht)||at(ht))return Y=Y.get(tt)||null,ft(H,Y,ht,ie,null);if(typeof ht.then=="function")return ot(Y,H,tt,Cl(ht),ie);if(ht.$$typeof===z)return ot(Y,H,tt,Tl(H,ht),ie);wl(H,ht)}return null}function Zt(Y,H,tt,ht){for(var ie=null,Ge=null,$t=H,xe=H=0,we=null;$t!==null&&xe<tt.length;xe++){$t.index>xe?(we=$t,$t=null):we=$t.sibling;var Ve=it(Y,$t,tt[xe],ht);if(Ve===null){$t===null&&($t=we);break}t&&$t&&Ve.alternate===null&&n(Y,$t),H=f(Ve,H,xe),Ge===null?ie=Ve:Ge.sibling=Ve,Ge=Ve,$t=we}if(xe===tt.length)return a(Y,$t),Ue&&ya(Y,xe),ie;if($t===null){for(;xe<tt.length;xe++)$t=_t(Y,tt[xe],ht),$t!==null&&(H=f($t,H,xe),Ge===null?ie=$t:Ge.sibling=$t,Ge=$t);return Ue&&ya(Y,xe),ie}for($t=s($t);xe<tt.length;xe++)we=ot($t,Y,xe,tt[xe],ht),we!==null&&(t&&we.alternate!==null&&$t.delete(we.key===null?xe:we.key),H=f(we,H,xe),Ge===null?ie=we:Ge.sibling=we,Ge=we);return t&&$t.forEach(function(hr){return n(Y,hr)}),Ue&&ya(Y,xe),ie}function se(Y,H,tt,ht){if(tt==null)throw Error(r(151));for(var ie=null,Ge=null,$t=H,xe=H=0,we=null,Ve=tt.next();$t!==null&&!Ve.done;xe++,Ve=tt.next()){$t.index>xe?(we=$t,$t=null):we=$t.sibling;var hr=it(Y,$t,Ve.value,ht);if(hr===null){$t===null&&($t=we);break}t&&$t&&hr.alternate===null&&n(Y,$t),H=f(hr,H,xe),Ge===null?ie=hr:Ge.sibling=hr,Ge=hr,$t=we}if(Ve.done)return a(Y,$t),Ue&&ya(Y,xe),ie;if($t===null){for(;!Ve.done;xe++,Ve=tt.next())Ve=_t(Y,Ve.value,ht),Ve!==null&&(H=f(Ve,H,xe),Ge===null?ie=Ve:Ge.sibling=Ve,Ge=Ve);return Ue&&ya(Y,xe),ie}for($t=s($t);!Ve.done;xe++,Ve=tt.next())Ve=ot($t,Y,xe,Ve.value,ht),Ve!==null&&(t&&Ve.alternate!==null&&$t.delete(Ve.key===null?xe:Ve.key),H=f(Ve,H,xe),Ge===null?ie=Ve:Ge.sibling=Ve,Ge=Ve);return t&&$t.forEach(function(iS){return n(Y,iS)}),Ue&&ya(Y,xe),ie}function nn(Y,H,tt,ht){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var ie=tt.key;H!==null;){if(H.key===ie){if(ie=tt.type,ie===C){if(H.tag===7){a(Y,H.sibling),ht=c(H,tt.props.children),ht.return=Y,Y=ht;break t}}else if(H.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Z&&Br(ie)===H.type){a(Y,H.sibling),ht=c(H,tt.props),Mo(ht,tt),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}tt.type===C?(ht=Lr(tt.props.children,Y.mode,ht,tt.key),ht.return=Y,Y=ht):(ht=yl(tt.type,tt.key,tt.props,null,Y.mode,ht),Mo(ht,tt),ht.return=Y,Y=ht)}return g(Y);case A:t:{for(ie=tt.key;H!==null;){if(H.key===ie)if(H.tag===4&&H.stateNode.containerInfo===tt.containerInfo&&H.stateNode.implementation===tt.implementation){a(Y,H.sibling),ht=c(H,tt.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=hu(tt,Y.mode,ht),ht.return=Y,Y=ht}return g(Y);case Z:return tt=Br(tt),nn(Y,H,tt,ht)}if(dt(tt))return Zt(Y,H,tt,ht);if(at(tt)){if(ie=at(tt),typeof ie!="function")throw Error(r(150));return tt=ie.call(tt),se(Y,H,tt,ht)}if(typeof tt.then=="function")return nn(Y,H,Cl(tt),ht);if(tt.$$typeof===z)return nn(Y,H,Tl(Y,tt),ht);wl(Y,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,H!==null&&H.tag===6?(a(Y,H.sibling),ht=c(H,tt),ht.return=Y,Y=ht):(a(Y,H),ht=du(tt,Y.mode,ht),ht.return=Y,Y=ht),g(Y)):a(Y,H)}return function(Y,H,tt,ht){try{yo=0;var ie=nn(Y,H,tt,ht);return xs=null,ie}catch($t){if($t===vs||$t===Al)throw $t;var Ge=Si(29,$t,null,Y.mode);return Ge.lanes=ht,Ge.return=Y,Ge}finally{}}}var Fr=wp(!0),Dp=wp(!1),Ka=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ye&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Sl(t),hp(t,null,a),n}return xl(t,s,n,a),Sl(t)}function Eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Be(t,a)}}function Ru(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function To(){if(Cu){var t=_s;if(t!==null)throw t}}function bo(t,n,a,s){Cu=!1;var c=t.updateQueue;Ka=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,et=B.next;B.next=null,g===null?f=et:g.next=et,g=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==g&&(T===null?ft.firstBaseUpdate=et:T.next=et,ft.lastBaseUpdate=B))}if(f!==null){var _t=c.baseState;g=0,ft=et=B=null,T=f;do{var it=T.lane&-536870913,ot=it!==T.lane;if(ot?(Ce&it)===it:(s&it)===it){it!==0&&it===gs&&(Cu=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Zt=t,se=T;it=n;var nn=a;switch(se.tag){case 1:if(Zt=se.payload,typeof Zt=="function"){_t=Zt.call(nn,_t,it);break t}_t=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=se.payload,it=typeof Zt=="function"?Zt.call(nn,_t,it):Zt,it==null)break t;_t=_({},_t,it);break t;case 2:Ka=!0}}it=T.callback,it!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(et=ft=ot,B=_t):ft=ft.next=ot,g|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(B=_t),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),ir|=g,t.lanes=g,t.memoizedState=_t}}function Up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var Ss=N(null),Dl=N(0);function Np(t,n){t=La,St(Dl,t),St(Ss,n),La=t|n.baseLanes}function wu(){St(Dl,La),St(Ss,Ss.current)}function Du(){La=Dl.current,$(Ss),$(Dl)}var yi=N(null),Ii=null;function $a(t){var n=t.alternate;St(bn,bn.current&1),St(yi,t),Ii===null&&(n===null||Ss.current!==null||n.memoizedState!==null)&&(Ii=t)}function Uu(t){St(bn,bn.current),St(yi,t),Ii===null&&(Ii=t)}function Op(t){t.tag===22?(St(bn,bn.current),St(yi,t),Ii===null&&(Ii=t)):tr()}function tr(){St(bn,bn.current),St(yi,yi.current)}function Mi(t){$(yi),Ii===t&&(Ii=null),$(bn)}var bn=N(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,_e=null,tn=null,Un=null,Ll=!1,ys=!1,Hr=!1,Nl=0,Ao=0,Ms=null,Yv=0;function Mn(){throw Error(r(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!xi(t[a],n[a]))return!1;return!0}function Nu(t,n,a,s,c,f){return Ta=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?_m:ju,Hr=!1,f=a(s,c),Hr=!1,ys&&(f=Pp(n,a,s,c)),zp(t),f}function zp(t){O.H=wo;var n=tn!==null&&tn.next!==null;if(Ta=0,Un=tn=_e=null,Ll=!1,Ao=0,Ms=null,n)throw Error(r(300));t===null||Ln||(t=t.dependencies,t!==null&&El(t)&&(Ln=!0))}function Pp(t,n,a,s){_e=t;var c=0;do{if(ys&&(Ms=null),Ao=0,ys=!1,25<=c)throw Error(r(301));if(c+=1,Un=tn=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=vm,f=n(a,s)}while(ys);return f}function jv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(_e.flags|=1024),n}function Ou(){var t=Nl!==0;return Nl=0,t}function zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pu(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Ta=0,Un=tn=_e=null,ys=!1,Ao=Nl=0,Ms=null}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?_e.memoizedState=Un=t:Un=Un.next=t,Un}function An(){if(tn===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=Un===null?_e.memoizedState:Un.next;if(n!==null)Un=n,tn=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Un===null?_e.memoizedState=Un=t:Un=Un.next=t}return Un}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,Ms===null&&(Ms=[]),t=Ap(Ms,t,n),n=_e,(Un===null?n.memoizedState:Un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?_m:ju),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===z)return Zn(t)}throw Error(r(438,String(t)))}function Bu(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=An();return Iu(n,tn,t)}function Iu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=g=null,B=null,et=n,ft=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(Ce&_t)===_t:(Ta&_t)===_t){var it=et.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===gs&&(ft=!0);else if((Ta&it)===it){et=et.next,it===gs&&(ft=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=_t,g=f):B=B.next=_t,_e.lanes|=it,ir|=it;_t=et.action,Hr&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else it={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=it,g=f):B=B.next=it,_e.lanes|=_t,ir|=_t;et=et.next}while(et!==null&&et!==n);if(B===null?g=f:B.next=T,!xi(f,t.memoizedState)&&(Ln=!0,ft&&(a=_s,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Fu(t){var n=An(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);xi(f,n.memoizedState)||(Ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bp(t,n,a){var s=_e,c=An(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!xi((tn||c).memoizedState,a);if(g&&(c.memoizedState=a,Ln=!0),c=c.queue,Vu(Hp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||Un!==null&&Un.memoizedState.tag&1){if(s.flags|=2048,Es(9,{destroy:void 0},Fp.bind(null,s,c,a,n),null),on===null)throw Error(r(349));f||(Ta&127)!==0||Ip(s,n,a)}return a}function Ip(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Ol(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!xi(t,a)}catch{return!0}}function Vp(t){var n=Ur(t,2);n!==null&&di(n,t,2)}function Hu(t){var n=ri();if(typeof t=="function"){var a=t;if(t=a(),Hr){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function Xp(t,n,a,s){return t.baseState=a,Iu(t,tn,typeof s=="function"?s:ba)}function Zv(t,n,a,s,c){if(Fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var T=a(c,s),B=O.S;B!==null&&B(g,T),Wp(t,n,T)}catch(et){Gu(t,n,et)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Wp(t,n,f)}catch(et){Gu(t,n,et)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qp(t,n,s)},function(s){return Gu(t,n,s)}):qp(t,n,a)}function qp(t,n,a){n.status="fulfilled",n.value=a,Yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function Gu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jp(t,n){return n}function Zp(t,n){if(Ue){var a=on.formState;if(a!==null){t:{var s=_e;if(Ue){if(fn){e:{for(var c=fn,f=Bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){fn=Fi(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=ri(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=s,a=pm.bind(null,_e,s),s.dispatch=a,s=Hu(!1),f=Yu.bind(null,_e,!1,s.queue),s=ri(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Zv.bind(null,_e,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Kp(t){var n=An();return Qp(n,tn,t)}function Qp(t,n,a){if(n=Iu(t,n,jp)[0],t=Pl(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ro(n)}catch(g){throw g===vs?Al:g}else s=n;n=An();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Es(9,{destroy:void 0},Kv.bind(null,c,a),null)),[s,f,t]}function Kv(t,n){t.action=n}function Jp(t){var n=An(),a=tn;if(a!==null)return Qp(n,a,t);An(),n=n.memoizedState,a=An();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Es(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Ol(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function $p(){return An().memoizedState}function Bl(t,n,a,s){var c=ri();_e.flags|=t,c.memoizedState=Es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Il(t,n,a,s){var c=An();s=s===void 0?null:s;var f=c.memoizedState.inst;tn!==null&&s!==null&&Lu(s,tn.memoizedState.deps)?c.memoizedState=Es(n,f,a,s):(_e.flags|=t,c.memoizedState=Es(1|n,f,a,s))}function tm(t,n){Bl(8390656,8,t,n)}function Vu(t,n){Il(2048,8,t,n)}function Qv(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Ol(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=An().memoizedState;return Qv({ref:n,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return Il(4,2,t,n)}function im(t,n){return Il(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rm(t,n,a){a=a!=null?a.concat([t]):null,Il(4,4,am.bind(null,n,t),a)}function Xu(){}function sm(t,n){var a=An();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=An();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=t(),Hr){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s}function ku(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),_e.lanes|=t,ir|=t,a)}function lm(t,n,a,s){return xi(a,n)?a:Ss.current!==null?(t=ku(t,a,s),xi(t,n)||(Ln=!0),t):(Ta&42)===0||(Ta&1073741824)!==0&&(Ce&261930)===0?(Ln=!0,t.memoizedState=a):(t=lg(),_e.lanes|=t,ir|=t,n)}function cm(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=O.T,T={};O.T=T,Yu(t,!1,n,a);try{var B=c(),et=O.S;if(et!==null&&et(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=qv(B,s);Co(t,n,ft,bi(t))}else Co(t,n,s,bi(t))}catch(_t){Co(t,n,{then:function(){},status:"rejected",reason:_t},bi())}finally{j.p=f,g!==null&&T.types!==null&&(g.types=T.types),O.T=g}}function Jv(){}function Wu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=um(t).queue;cm(t,c,n,W,a===null?Jv:function(){return fm(t),a(s)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},bi())}function qu(){return Zn(Wo)}function dm(){return An().memoizedState}function hm(){return An().memoizedState}function $v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=bi();t=Qa(a);var s=Ja(n,t,a);s!==null&&(di(s,n,a),Eo(s,n,a)),n={cache:yu()},t.payload=n;return}n=n.return}}function tx(t,n,a){var s=bi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?mm(n,a):(a=uu(t,n,a,s),a!==null&&(di(a,t,s),gm(a,n,s)))}function pm(t,n,a){var s=bi();Co(t,n,a,s)}function Co(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,xi(T,g))return xl(t,n,c,0),on===null&&vl(),!1}catch{}finally{}if(a=uu(t,n,c,s),a!==null)return di(a,t,s),gm(a,n,s),!0}return!1}function Yu(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(r(479))}else n=uu(t,a,s,2),n!==null&&di(n,t,2)}function Fl(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function mm(t,n){ys=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Be(t,a)}}var wo={readContext:Zn,use:zl,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn};wo.useEffectEvent=Mn;var _m={readContext:Zn,use:zl,useCallback:function(t,n){return ri().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Bl(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var a=ri();n=n===void 0?null:n;var s=t();if(Hr){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=ri();if(a!==void 0){var c=a(n);if(Hr){Kt(!0);try{a(n)}finally{Kt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=tx.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=ri();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=pm.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=ri();return ku(a,t,n)},useTransition:function(){var t=Hu(!1);return t=cm.bind(null,_e,t.queue,!0,!1),ri().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,c=ri();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),on===null)throw Error(r(349));(Ce&127)!==0||Ip(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Hp.bind(null,s,f,t),[t]),s.flags|=2048,Es(9,{destroy:void 0},Fp.bind(null,s,f,a,n),null),a},useId:function(){var t=ri(),n=on.identifierPrefix;if(Ue){var a=la,s=oa;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t){var n=ri();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bu,useCacheRefresh:function(){return ri().memoizedState=$v.bind(null,_e)},useEffectEvent:function(t){var n=ri(),a={impl:t};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Zn,use:zl,useCallback:sm,useContext:Zn,useEffect:Vu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Pl,useRef:$p,useState:function(){return Pl(ba)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=An();return lm(a,tn.memoizedState,t,n)},useTransition:function(){var t=Pl(ba)[0],n=An().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:qu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=An();return Xp(a,tn,t,n)},useMemoCache:Bu,useCacheRefresh:hm};ju.useEffectEvent=em;var vm={readContext:Zn,use:zl,useCallback:sm,useContext:Zn,useEffect:Vu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Fu,useRef:$p,useState:function(){return Fu(ba)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=An();return tn===null?ku(a,t,n):lm(a,tn.memoizedState,t,n)},useTransition:function(){var t=Fu(ba)[0],n=An().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:qu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=An();return tn!==null?Xp(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:hm};vm.useEffectEvent=em;function Zu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=bi(),c=Qa(s);c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,s),n!==null&&(di(n,t,s),Eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=bi(),c=Qa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,s),n!==null&&(di(n,t,s),Eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=bi(),s=Qa(a);s.tag=2,n!=null&&(s.callback=n),n=Ja(t,s,a),n!==null&&(di(n,t,a),Eo(n,t,a))}};function xm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!mo(a,s)||!mo(c,f):!0}function Sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ym(t){_l(t)}function Mm(t){console.error(t)}function Em(t){_l(t)}function Hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,n)},a}function bm(t){return t=Qa(t),t.tag=3,t}function Am(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ex(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ms(n,a,c,!0),a=yi.current,a!==null){switch(a.tag){case 31:case 13:return Ii===null?Jl():a.alternate===null&&En===0&&(En=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,c)),!1;case 22:return a.flags|=65536,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,c)),!1}throw Error(r(435,a.tag))}return Ef(t,s,c),Jl(),!1}if(Ue)return n=yi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(t=Error(r(422),{cause:s}),vo(Oi(t,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),vo(Oi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Oi(s,a),c=Qu(t.stateNode,s,c),Ru(t,c),En!==4&&(En=2)),!1;var f=Error(r(520),{cause:s});if(f=Oi(f,a),Bo===null?Bo=[f]:Bo.push(f),En!==4&&(En=2),n===null)return!0;s=Oi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,s,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ar===null||!ar.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,t,a,s),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),Ln=!1;function Kn(t,n,a,s){n.child=t===null?Dp(n,null,a,s):Fr(n,t.child,a,s)}function Rm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return zr(n),s=Nu(t,n,a,g,f,c),T=Ou(),t!==null&&!Ln?(zu(t,n,c),Aa(t,n,c)):(Ue&&T&&pu(n),n.flags|=1,Kn(t,n,s,c),n.child)}function Cm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(t,n,f,s,c)):(t=yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(g,s)&&t.ref===n.ref)return Aa(t,n,c)}return n.flags|=1,t=Sa(f,s),t.ref=n.ref,t.return=n,n.child=t}function wm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(mo(f,s)&&t.ref===n.ref)if(Ln=!1,n.pendingProps=s=f,of(t,c))(t.flags&131072)!==0&&(Ln=!0);else return n.lanes=t.lanes,Aa(t,n,c)}return $u(t,n,a,s,c)}function Dm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Um(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,f!==null?f.cachePool:null),f!==null?Np(n,f):wu(),Op(n);else return s=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(bl(n,f.cachePool),Np(n,f),tr(),n.memoizedState=null):(t!==null&&bl(n,null),wu(),tr());return Kn(t,n,c,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,s,c){var f=Eu();return f=f===null?null:{parent:Dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&bl(n,null),wu(),Op(n),t!==null&&ms(t,n,s,!0),n.childLanes=c,null}function Gl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return Fr(n,t.child,null,a),t=Gl(n,n.pendingProps),t.flags|=2,Mi(n),n.memoizedState=null,t}function nx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ue){if(s.mode==="hidden")return t=Gl(n,s),n.lanes=536870912,Do(null,t);if(Uu(n),(t=fn)?(t=kg(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,jn=n,fn=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return Gl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ln||ms(t,n,a,!1),c=(a&t.childLanes)!==0,Ln||c){if(s=on,s!==null&&(g=Xi(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ur(t,g),di(s,t,g),Ju;Jl(),n=Lm(t,n,a)}else t=f.treeContext,fn=Fi(g.nextSibling),jn=n,Ue=!0,Ya=null,Bi=!1,t!==null&&vp(n,t),n=Gl(n,s),n.flags|=4096;return n}return t=Sa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,s,c){return zr(n),a=Nu(t,n,a,s,void 0,c),s=Ou(),t!==null&&!Ln?(zu(t,n,c),Aa(t,n,c)):(Ue&&s&&pu(n),n.flags|=1,Kn(t,n,a,c),n.child)}function Nm(t,n,a,s,c,f){return zr(n),n.updateQueue=null,a=Pp(n,s,a,c),zp(t),s=Ou(),t!==null&&!Ln?(zu(t,n,f),Aa(t,n,f)):(Ue&&s&&pu(n),n.flags|=1,Kn(t,n,a,f),n.child)}function Om(t,n,a,s,c){if(zr(n),n.stateNode===null){var f=fs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Zn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Zn(g):fs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Zu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ku.enqueueReplaceState(f,f.state,null),bo(n,s,f,c),To(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Gr(a,T);f.props=B;var et=f.context,ft=a.contextType;g=fs,typeof ft=="object"&&ft!==null&&(g=Zn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==g)&&Sm(n,f,s,g),Ka=!1;var it=n.memoizedState;f.state=it,bo(n,s,f,c),To(),et=n.memoizedState,T||it!==et||Ka?(typeof _t=="function"&&(Zu(n,a,_t,s),et=n.memoizedState),(B=Ka||xm(n,a,B,s,it,et,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Au(t,n),g=n.memoizedProps,ft=Gr(a,g),f.props=ft,_t=n.pendingProps,it=f.context,et=a.contextType,B=fs,typeof et=="object"&&et!==null&&(B=Zn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||it!==B)&&Sm(n,f,s,B),Ka=!1,it=n.memoizedState,f.state=it,bo(n,s,f,c),To();var ot=n.memoizedState;g!==_t||it!==ot||Ka||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof T=="function"&&(Zu(n,a,T,s),ot=n.memoizedState),(ft=Ka||xm(n,a,ft,s,it,ot,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Vl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,c),n.child=Fr(n,null,a,c)):Kn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Aa(t,n,c),t}function zm(t,n,a,s){return Nr(),n.flags|=256,Kn(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Tp()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ti),t}function Pm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?$a(n):tr(),(t=fn)?(t=kg(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,jn=n,fn=null)):t=null,t===null)throw ja(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(tr(),c=n.mode,T=Xl({mode:"hidden",children:T},c),s=Lr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,Do(null,s)):($a(n),af(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?($a(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(tr(),n.child=t.child,n.flags|=128,n=null):(tr(),T=s.fallback,c=n.mode,s=Xl({mode:"visible",children:s.children},c),T=Lr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,Fr(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,n=Do(null,s));else if($a(n),Ff(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var et=g.dgst;g=et,s=Error(r(419)),s.stack="",s.digest=g,vo({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(Ln||ms(t,n,a,!1),g=(a&t.childLanes)!==0,Ln||g){if(g=on,g!==null&&(s=Xi(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Ur(t,s),di(g,t,s),Ju;If(T)||Jl(),n=rf(t,n,a)}else If(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,fn=Fi(T.nextSibling),jn=n,Ue=!0,Ya=null,Bi=!1,t!==null&&vp(n,t),n=af(n,s.children),n.flags|=4096);return n}return c?(tr(),T=s.fallback,c=n.mode,B=t.child,et=B.sibling,s=Sa(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,et!==null?T=Sa(et,T):(T=Lr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,Do(null,s),s=n.child,T=t.child.memoizedState,T===null?T=ef(a):(c=T.cachePool,c!==null?(B=Dn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Tp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=nf(t,g,a),n.memoizedState=tf,Do(t.child,s)):($a(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=Si(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return Fr(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xu(t.return,n,a)}function sf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Im(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=bn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,St(bn,g),Kn(t,n,s,a),s=Ue?_o:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,a,n);else if(t.tag===19)Bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ms(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function ix(t,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Za(n,Dn,t.memoizedState.cache),Nr();break;case 27:case 5:kt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pm(t,n,a):($a(n),t=Aa(t,n,a),t!==null?t.sibling:null);$a(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ms(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Im(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(bn,bn.current),s)break;return null;case 22:return n.lanes=0,Dm(t,n,a,n.pendingProps);case 24:Za(n,Dn,t.memoizedState.cache)}return Aa(t,n,a)}function Fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ln=!0;else{if(!of(t,a)&&(n.flags&128)===0)return Ln=!1,ix(t,n,a);Ln=(t.flags&131072)!==0}else Ln=!1,Ue&&(n.flags&1048576)!==0&&_p(n,_o,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")fu(t)?(s=Gr(t,s),n.tag=1,n=Om(null,n,t,s,a)):(n.tag=0,n=$u(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===R){n.tag=11,n=Rm(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=Cm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Gr(s,n.pendingProps),Om(t,n,s,c,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),bo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Za(n,Dn,s),s!==f.cache&&Su(n,[Dn],a,!0),To(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zm(t,n,s,a);break t}else if(s!==c){c=Oi(Error(r(424)),n),vo(c),n=zm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(fn=Fi(t.firstChild),jn=n,Ue=!0,Ya=null,Bi=!0,a=Dp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nr(),s===c){n=Aa(t,n,a);break t}Kn(t,n,s,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,t=n.pendingProps,s=rc(K.current).createElement(a),s[hn]=n,s[Pn]=t,Qn(s,a,t),vt(s),n.stateNode=s):n.memoizedState=Kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return kt(n),t===null&&Ue&&(s=n.stateNode=Yg(n.type,n.pendingProps,K.current),jn=n,Bi=!0,c=fn,lr(n.type)?(Hf=c,fn=Fi(s.firstChild)):fn=c),Kn(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ue&&((c=s=fn)&&(s=Nx(s,n.type,n.pendingProps,Bi),s!==null?(n.stateNode=s,jn=n,fn=Fi(s.firstChild),Bi=!1,c=!0):c=!1),c||ja(n)),kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,zf(c,f)?s=null:g!==null&&zf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,jv,null,null,a),Wo._currentValue=c),Vl(t,n),Kn(t,n,s,a),n.child;case 6:return t===null&&Ue&&((t=a=fn)&&(a=Ox(a,n.pendingProps,Bi),a!==null?(n.stateNode=a,jn=n,fn=null,t=!0):t=!1),t||ja(n)),null;case 13:return Pm(t,n,a);case 4:return Lt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):Kn(t,n,s,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return Kn(t,n,n.pendingProps,a),n.child;case 8:return Kn(t,n,n.pendingProps.children,a),n.child;case 12:return Kn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Za(n,n.type,s.value),Kn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,zr(n),c=Zn(c),s=s(c),n.flags|=1,Kn(t,n,s,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return wm(t,n,n.type,n.pendingProps,a);case 19:return Im(t,n,a);case 31:return nx(t,n,a);case 22:return Dm(t,n,a,n.pendingProps);case 24:return zr(n),s=Zn(Dn),t===null?(c=Eu(),c===null&&(c=on,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},bu(n),Za(n,Dn,c)):((t.lanes&a)!==0&&(Au(t,n),bo(n,null,null,a),To()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Za(n,Dn,s)):(s=f.cache,Za(n,Dn,s),s!==c.cache&&Su(n,[Dn],a,!0))),Kn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function lf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(dg())t.flags|=8192;else throw Ir=Rl,Tu}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n))if(dg())t.flags|=8192;else throw Ir=Rl,Tu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?De():536870912,t.lanes|=n,Rs|=n)}function Uo(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function dn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ax(t,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return dn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(Dn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),dn(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ra(n),f!==null?(dn(n),Hm(n,f)):(dn(n),lf(n,c,null,s,a))):f?f!==t.memoizedState?(Ra(n),dn(n),Hm(n,f)):(dn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),dn(n),lf(n,c,t,s,a)),null;case 27:if(de(n),a=K.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return dn(n),null}t=Ct.current,ps(n)?xp(n):(t=Yg(c,s,a),n.stateNode=t,Ra(n))}return dn(n),null;case 5:if(de(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return dn(n),null}if(f=Ct.current,ps(n))xp(n);else{var g=rc(K.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[hn]=n,f[Pn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Qn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return dn(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=K.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=jn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Pg(t.nodeValue,a)),t||ja(n,!0)}else t=rc(t).createTextNode(s),t[hn]=n,n.stateNode=t}return dn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ps(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[hn]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Mi(n),n):(Mi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return dn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[hn]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Mi(n),n):(Mi(n),null)}return Mi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),dn(n),null);case 4:return Ht(),t===null&&Df(n.stateNode.containerInfo),dn(n),null;case 10:return Ea(n.type),dn(n),null;case 19:if($(bn),s=n.memoizedState,s===null)return dn(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Uo(s,!1);else{if(En!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ul(t),f!==null){for(n.flags|=128,Uo(s,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return St(bn,bn.current&1|2),Ue&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Zl&&(n.flags|=128,c=!0,Uo(s,!1),n.lanes=4194304)}else{if(!c)if(t=Ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ue)return dn(n),null}else 2*E()-s.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,c=!0,Uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=bn.current,St(bn,c?a&1|2:a&1),Ue&&ya(n,s.treeForkCount),t):(dn(n),null);case 22:case 23:return Mi(n),Du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&$(Pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(Dn),dn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function rx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(Dn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Mi(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(bn),null;case 4:return Ht(),null;case 10:return Ea(n.type),null;case 22:case 23:return Mi(n),Du(),t!==null&&$(Pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(Dn),null;case 25:return null;default:return null}}function Gm(t,n){switch(mu(n),n.tag){case 3:Ea(Dn),Ht();break;case 26:case 27:case 5:de(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Mi(n);break;case 13:Mi(n);break;case 19:$(bn);break;case 10:Ea(n.type);break;case 22:case 23:Mi(n),Du(),t!==null&&$(Pr);break;case 24:Ea(Dn)}}function Lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){Je(n,n.return,T)}}function er(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var B=a,et=T;try{et()}catch(ft){Je(c,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){Je(n,n.return,ft)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(s){Je(t,t.return,s)}}}function Xm(t,n,a){a.props=Gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Je(t,n,s)}}function No(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Je(t,n,c)}}function ca(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Je(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Je(t,n,c)}else a.current=null}function km(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Je(t,t.return,c)}}function cf(t,n,a){try{var s=t.stateNode;Rx(s,t.type,a,n),s[Pn]=n}catch(c){Je(t,t.return,c)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ke));else if(s!==4&&(s===27&&lr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Wl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&lr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wl(t,n,a),t=t.sibling;t!==null;)Wl(t,n,a),t=t.sibling}function qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Qn(n,s,a),n[hn]=t,n[Pn]=a}catch(f){Je(t,t.return,f)}}var Ca=!1,Nn=!1,df=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,Xn=null;function sx(t,n){if(t=t.containerInfo,Nf=dc,t=rp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,B=-1,et=0,ft=0,_t=t,it=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(T=g+c),_t!==f||s!==0&&_t.nodeType!==3||(B=g+s),_t.nodeType===3&&(g+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)it=_t,_t=ot;for(;;){if(_t===t)break e;if(it===a&&++et===c&&(T=g),it===f&&++ft===s&&(B=g),(ot=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},dc=!1,Xn=n;Xn!==null;)if(n=Xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Xn=t;else for(;Xn!==null;){switch(n=Xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Zt=Gr(a.type,c);t=s.getSnapshotBeforeUpdate(Zt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(se){Je(a,a.return,se)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Xn=t;break}Xn=n.return}}function jm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Da(t,a),s&4&&Lo(5,a);break;case 1:if(Da(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Je(a,a.return,g)}else{var c=Gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Je(a,a.return,g)}}s&64&&Vm(a),s&512&&No(a,a.return);break;case 3:if(Da(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(g){Je(a,a.return,g)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:Da(t,a),n===null&&s&4&&km(a),s&512&&No(a,a.return);break;case 12:Da(t,a);break;case 31:Da(t,a),s&4&&Qm(t,a);break;case 13:Da(t,a),s&4&&Jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mx.bind(null,a),zx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ca,!s){n=n!==null&&n.memoizedState!==null||Nn,c=Ca;var f=Nn;Ca=s,(Nn=n)&&!f?Ua(t,a,(a.subtreeFlags&8772)!==0):Da(t,a),Ca=c,Nn=f}break;case 30:break;default:Da(t,a)}}function Zm(t){var n=t.alternate;n!==null&&(t.alternate=null,Zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,li=!1;function wa(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:Nn||ca(a,n),wa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nn||ca(a,n);var s=gn,c=li;lr(a.type)&&(gn=a.stateNode,li=!1),wa(t,n,a),Vo(a.stateNode),gn=s,li=c;break;case 5:Nn||ca(a,n);case 6:if(s=gn,c=li,gn=null,wa(t,n,a),gn=s,li=c,gn!==null)if(li)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(f){Je(a,n,f)}else try{gn.removeChild(a.stateNode)}catch(f){Je(a,n,f)}break;case 18:gn!==null&&(li?(t=gn,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zs(t)):Vg(gn,a.stateNode));break;case 4:s=gn,c=li,gn=a.stateNode.containerInfo,li=!0,wa(t,n,a),gn=s,li=c;break;case 0:case 11:case 14:case 15:er(2,a,n),Nn||er(4,a,n),wa(t,n,a);break;case 1:Nn||(ca(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),wa(t,n,a);break;case 21:wa(t,n,a);break;case 22:Nn=(s=Nn)||a.memoizedState!==null,wa(t,n,a),Nn=s;break;default:wa(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(a){Je(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(a){Je(n,n.return,a)}}function ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ym),n;default:throw Error(r(435,t.tag))}}function ql(t,n){var a=ox(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=gx.bind(null,t,s);s.then(c,c)}})}function ci(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(lr(T.type)){gn=T.stateNode,li=!1;break t}break;case 5:gn=T.stateNode,li=!1;break t;case 3:case 4:gn=T.stateNode.containerInfo,li=!0;break t}T=T.return}if(gn===null)throw Error(r(160));Km(f,g,c),gn=null,li=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var Ki=null;function $m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),s&4&&(er(3,t,t.return),Lo(3,t),er(5,t,t.return));break;case 1:ci(n,t),ui(t),s&512&&(Nn||a===null||ca(a,a.return)),s&64&&Ca&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Ki;if(ci(n,t),ui(t),s&512&&(Nn||a===null||ca(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ui]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Qn(f,s,a),f[hn]=t,vt(f),s=f;break t;case"link":var g=$g("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(s),Qn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=$g("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(s),Qn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[hn]=t,vt(f),s=f}t.stateNode=s}else t0(c,t.type,t.stateNode);else t.stateNode=Jg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t0(c,t.type,t.stateNode):Jg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ci(n,t),ui(t),s&512&&(Nn||a===null||ca(a,a.return)),a!==null&&s&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ci(n,t),ui(t),s&512&&(Nn||a===null||ca(a,a.return)),t.flags&32){c=t.stateNode;try{ae(c,"")}catch(Zt){Je(t,t.return,Zt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(ci(n,t),ui(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Zt){Je(t,t.return,Zt)}}break;case 3:if(lc=null,c=Ki,Ki=sc(n.containerInfo),ci(n,t),Ki=c,ui(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(Zt){Je(t,t.return,Zt)}df&&(df=!1,tg(t));break;case 4:s=Ki,Ki=sc(t.stateNode.containerInfo),ci(n,t),ui(t),Ki=s;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=Ca,ft=Nn;if(Ca=et||c,Nn=ft||B,ci(n,t),Nn=ft,Ca=et,ui(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Ca||Nn||Vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var _t=B.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Zt){Je(B,B.return,Zt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Zt){Je(B,B.return,Zt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?Xg(ot,!0):Xg(B.stateNode,!1)}catch(Zt){Je(B,B.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ql(t,a))));break;case 19:ci(n,t),ui(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ql(t,s)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Wl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(ae(g,""),a.flags&=-33);var T=uf(t);Wl(t,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,et=uf(t);ff(t,et,B);break;default:throw Error(r(161))}}catch(ft){Je(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(t,n.alternate,n),n=n.sibling}function Vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:er(4,n,n.return),Vr(n);break;case 1:ca(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),Vr(n);break;case 27:Vo(n.stateNode);case 26:case 5:ca(n,n.return),Vr(n);break;case 22:n.memoizedState===null&&Vr(n);break;case 30:Vr(n);break;default:Vr(n)}t=t.sibling}}function Ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ua(c,f,a),Lo(4,f);break;case 1:if(Ua(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Je(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Up(B[c],T)}catch(et){Je(s,s.return,et)}}a&&g&64&&Vm(f),No(f,f.return);break;case 27:qm(f);case 26:case 5:Ua(c,f,a),a&&s===null&&g&4&&km(f),No(f,f.return);break;case 12:Ua(c,f,a);break;case 31:Ua(c,f,a),a&&g&4&&Qm(c,f);break;case 13:Ua(c,f,a),a&&g&4&&Jm(c,f);break;case 22:f.memoizedState===null&&Ua(c,f,a),No(f,f.return);break;case 30:break;default:Ua(c,f,a)}n=n.sibling}}function hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Qi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,s),n=n.sibling}function eg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Qi(t,n,a,s),c&2048&&Lo(9,n);break;case 1:Qi(t,n,a,s);break;case 3:Qi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(c&2048){Qi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Je(n,n.return,B)}}else Qi(t,n,a,s);break;case 31:Qi(t,n,a,s);break;case 13:Qi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Qi(t,n,a,s):Oo(t,n):f._visibility&2?Qi(t,n,a,s):(f._visibility|=2,Ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&hf(g,n);break;case 24:Qi(t,n,a,s),c&2048&&pf(n.alternate,n);break;default:Qi(t,n,a,s)}}function Ts(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,B=s,et=g.flags;switch(g.tag){case 0:case 11:case 15:Ts(f,g,T,B,c),Lo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?Ts(f,g,T,B,c):Oo(f,g):(ft._visibility|=2,Ts(f,g,T,B,c)),c&&et&2048&&hf(g.alternate,g);break;case 24:Ts(f,g,T,B,c),c&&et&2048&&pf(g.alternate,g);break;default:Ts(f,g,T,B,c)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Oo(a,s),c&2048&&hf(s.alternate,s);break;case 24:Oo(a,s),c&2048&&pf(s.alternate,s);break;default:Oo(a,s)}n=n.sibling}}var zo=8192;function bs(t,n,a){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:bs(t,n,a),t.flags&zo&&t.memoizedState!==null&&Yx(a,Ki,t.memoizedState,t.memoizedProps);break;case 5:bs(t,n,a);break;case 3:case 4:var s=Ki;Ki=sc(t.stateNode.containerInfo),bs(t,n,a),Ki=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=zo,zo=16777216,bs(t,n,a),zo=s):bs(t,n,a));break;default:bs(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Xn=s,rg(s,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&er(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Po(t);break;default:Po(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Xn=s,rg(s,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:er(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function rg(t,n){for(;Xn!==null;){var a=Xn;switch(a.tag){case 0:case 11:case 15:er(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:xo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Xn=s;else t:for(a=t;Xn!==null;){s=Xn;var c=s.sibling,f=s.return;if(Zm(s),s===a){Xn=null;break t}if(c!==null){c.return=f,Xn=c;break t}Xn=f}}}var lx={getCacheForType:function(t){var n=Zn(Dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Zn(Dn).controller.signal}},cx=typeof WeakMap=="function"?WeakMap:Map,Ye=0,on=null,Ae=null,Ce=0,Qe=0,Ei=null,nr=!1,As=!1,mf=!1,La=0,En=0,ir=0,Xr=0,gf=0,Ti=0,Rs=0,Bo=null,fi=null,_f=!1,jl=0,sg=0,Zl=1/0,Kl=null,ar=null,In=0,rr=null,Cs=null,Na=0,vf=0,xf=null,og=null,Io=0,Sf=null;function bi(){return(Ye&2)!==0&&Ce!==0?Ce&-Ce:O.T!==null?Af():wi()}function lg(){if(Ti===0)if((Ce&536870912)===0||Ue){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Ti=t}else Ti=536870912;return t=yi.current,t!==null&&(t.flags|=32),Ti}function di(t,n,a){(t===on&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(ws(t,0),sr(t,Ce,Ti,!1)),Wn(t,a),((Ye&2)===0||t!==on)&&(t===on&&((Ye&2)===0&&(Xr|=a),En===4&&sr(t,Ce,Ti,!1)),ua(t))}function cg(t,n,a){if((Ye&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Wt(t,n),c=s?dx(t,n):Mf(t,n,!0),f=s;do{if(c===0){As&&!s&&sr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ux(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=Bo;var B=T.current.memoizedState.isDehydrated;if(B&&(ws(T,g).flags|=256),g=Mf(T,g,!1),g!==2){if(mf&&!B){T.errorRecoveryDisabledLanes|=f,Xr|=f,c=4;break t}f=fi,fi=c,f!==null&&(fi===null?fi=f:fi.push.apply(fi,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ws(t,0),sr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:sr(s,n,Ti,!nr);break t;case 2:fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=jl+300-E(),10<c)){if(sr(s,n,Ti,!nr),mt(s,0,!0)!==0)break t;Na=n,s.timeoutHandle=Hg(ug.bind(null,s,a,fi,Kl,_f,n,Ti,Xr,Rs,nr,f,"Throttled",-0,0),c);break t}ug(s,a,fi,Kl,_f,n,Ti,Xr,Rs,nr,f,null,-0,0)}}break}while(!0);ua(t)}function ug(t,n,a,s,c,f,g,T,B,et,ft,_t,it,ot){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ke},ng(n,f,_t);var Zt=(f&62914560)===f?jl-E():(f&4194048)===f?sg-E():0;if(Zt=jx(_t,Zt),Zt!==null){Na=f,t.cancelPendingCommit=Zt(vg.bind(null,t,n,f,a,s,c,g,T,B,ft,_t,null,it,ot)),sr(t,f,g,!et);return}}vg(t,n,f,a,s,c,g,T,B)}function ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!xi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sr(t,n,a,s){n&=~gf,n&=~Xr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&br(t,a,n)}function Ql(){return(Ye&6)===0?(Fo(0),!1):!0}function yf(){if(Ae!==null){if(Qe===0)var t=Ae.return;else t=Ae,Ma=Or=null,Pu(t),xs=null,yo=0,t=Ae;for(;t!==null;)Gm(t.alternate,t),t=t.return;Ae=null}}function ws(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Dx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Na=0,yf(),on=t,Ae=a=Sa(t.current,null),Ce=n,Qe=0,Ei=null,nr=!1,As=Wt(t,n),mf=!1,Rs=Ti=gf=Xr=ir=En=0,fi=Bo=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Bt(s),f=1<<c;n|=t[c],s&=~f}return La=n,vl(),a}function fg(t,n){_e=null,O.H=wo,n===vs||n===Al?(n=Rp(),Qe=3):n===Tu?(n=Rp(),Qe=4):Qe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,Ae===null&&(En=1,Hl(t,Oi(n,t.current)))}function dg(){var t=yi.current;return t===null?!0:(Ce&4194048)===Ce?Ii===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Ii:!1}function hg(){var t=O.H;return O.H=wo,t===null?wo:t}function pg(){var t=O.A;return O.A=lx,t}function Jl(){En=4,nr||(Ce&4194048)!==Ce&&yi.current!==null||(As=!0),(ir&134217727)===0&&(Xr&134217727)===0||on===null||sr(on,Ce,Ti,!1)}function Mf(t,n,a){var s=Ye;Ye|=2;var c=hg(),f=pg();(on!==t||Ce!==n)&&(Kl=null,ws(t,n)),n=!1;var g=En;t:do try{if(Qe!==0&&Ae!==null){var T=Ae,B=Ei;switch(Qe){case 8:yf(),g=6;break t;case 3:case 2:case 9:case 6:yi.current===null&&(n=!0);var et=Qe;if(Qe=0,Ei=null,Ds(t,T,B,et),a&&As){g=0;break t}break;default:et=Qe,Qe=0,Ei=null,Ds(t,T,B,et)}}fx(),g=En;break}catch(ft){fg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ma=Or=null,Ye=s,O.H=c,O.A=f,Ae===null&&(on=null,Ce=0,vl()),g}function fx(){for(;Ae!==null;)mg(Ae)}function dx(t,n){var a=Ye;Ye|=2;var s=hg(),c=pg();on!==t||Ce!==n?(Kl=null,Zl=E()+500,ws(t,n)):As=Wt(t,n);t:do try{if(Qe!==0&&Ae!==null){n=Ae;var f=Ei;e:switch(Qe){case 1:Qe=0,Ei=null,Ds(t,n,f,1);break;case 2:case 9:if(bp(f)){Qe=0,Ei=null,gg(n);break}n=function(){Qe!==2&&Qe!==9||on!==t||(Qe=7),ua(t)},f.then(n,n);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:bp(f)?(Qe=0,Ei=null,gg(n)):(Qe=0,Ei=null,Ds(t,n,f,7));break;case 5:var g=null;switch(Ae.tag){case 26:g=Ae.memoizedState;case 5:case 27:var T=Ae;if(g?e0(g):T.stateNode.complete){Qe=0,Ei=null;var B=T.sibling;if(B!==null)Ae=B;else{var et=T.return;et!==null?(Ae=et,$l(et)):Ae=null}break e}}Qe=0,Ei=null,Ds(t,n,f,5);break;case 6:Qe=0,Ei=null,Ds(t,n,f,6);break;case 8:yf(),En=6;break t;default:throw Error(r(462))}}hx();break}catch(ft){fg(t,ft)}while(!0);return Ma=Or=null,O.H=s,O.A=c,Ye=a,Ae!==null?0:(on=null,Ce=0,vl(),En)}function hx(){for(;Ae!==null&&!$e();)mg(Ae)}function mg(t){var n=Fm(t.alternate,t,La);t.memoizedProps=t.pendingProps,n===null?$l(t):Ae=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Pu(n);default:Gm(a,n),n=Ae=pp(n,La),n=Fm(a,n,La)}t.memoizedProps=t.pendingProps,n===null?$l(t):Ae=n}function Ds(t,n,a,s){Ma=Or=null,Pu(n),xs=null,yo=0;var c=n.return;try{if(ex(t,c,n,a,Ce)){En=1,Hl(t,Oi(a,t.current)),Ae=null;return}}catch(f){if(c!==null)throw Ae=c,f;En=1,Hl(t,Oi(a,t.current)),Ae=null;return}n.flags&32768?(Ue||s===1?t=!0:As||(Ce&536870912)!==0?t=!1:(nr=t=!0,(s===2||s===9||s===3||s===6)&&(s=yi.current,s!==null&&s.tag===13&&(s.flags|=16384))),_g(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){_g(n,nr);return}t=n.return;var a=ax(n.alternate,n,La);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=t}while(n!==null);En===0&&(En=5)}function _g(t,n){do{var a=rx(t.alternate,t);if(a!==null){a.flags&=32767,Ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=a}while(t!==null);En=6,Ae=null}function vg(t,n,a,s,c,f,g,T,B){t.cancelPendingCommit=null;do tc();while(In!==0);if((Ye&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,Pe(t,a,f,g,T,B),t===on&&(Ae=on=null,Ce=0),Cs=n,rr=t,Na=a,vf=f,xf=c,og=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_x(ct,function(){return Eg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=j.p,j.p=2,g=Ye,Ye|=4;try{sx(t,n,a)}finally{Ye=g,j.p=c,O.T=s}}In=1,xg(),Sg(),yg()}}function xg(){if(In===1){In=0;var t=rr,n=Cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=j.p;j.p=2;var c=Ye;Ye|=4;try{$m(n,t);var f=Of,g=rp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&ap(T.ownerDocument.documentElement,T)){if(B!==null&&au(T)){var et=B.start,ft=B.end;if(ft===void 0&&(ft=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(ft,T.value.length);else{var _t=T.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ot=it.getSelection(),Zt=T.textContent.length,se=Math.min(B.start,Zt),nn=B.end===void 0?se:Math.min(B.end,Zt);!ot.extend&&se>nn&&(g=nn,nn=se,se=g);var Y=ip(T,se),H=ip(T,nn);if(Y&&H&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var tt=_t.createRange();tt.setStart(Y.node,Y.offset),ot.removeAllRanges(),se>nn?(ot.addRange(tt),ot.extend(H.node,H.offset)):(tt.setEnd(H.node,H.offset),ot.addRange(tt))}}}}for(_t=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var ht=_t[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}dc=!!Nf,Of=Nf=null}finally{Ye=c,j.p=s,O.T=a}}t.current=n,In=2}}function Sg(){if(In===2){In=0;var t=rr,n=Cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=j.p;j.p=2;var c=Ye;Ye|=4;try{jm(t,n.alternate,n)}finally{Ye=c,j.p=s,O.T=a}}In=3}}function yg(){if(In===4||In===3){In=0,U();var t=rr,n=Cs,a=Na,s=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?In=5:(In=0,Cs=rr=null,Mg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ar=null),ki(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=j.p,j.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{O.T=n,j.p=c}}(Na&3)!==0&&tc(),ua(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?Io++:(Io=0,Sf=t):Io=0,Fo(0)}}function Mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function tc(){return xg(),Sg(),yg(),Eg()}function Eg(){if(In!==5)return!1;var t=rr,n=vf;vf=0;var a=ki(Na),s=O.T,c=j.p;try{j.p=32>a?32:a,O.T=null,a=xf,xf=null;var f=rr,g=Na;if(In=0,Cs=rr=null,Na=0,(Ye&6)!==0)throw Error(r(331));var T=Ye;if(Ye|=4,ag(f.current),eg(f,f.current,g,a),Ye=T,Fo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{j.p=c,O.T=s,Mg(t,n)}}function Tg(t,n,a){n=Oi(a,n),n=Qu(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(Wn(t,2),ua(t))}function Je(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ar===null||!ar.has(s))){t=Oi(a,t),a=bm(2),s=Ja(n,a,2),s!==null&&(Am(a,s,n,t),Wn(s,2),ua(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new cx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(mf=!0,c.add(a),t=px.bind(null,t,n,a),n.then(t,t))}function px(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Ce&a)===a&&(En===4||En===3&&(Ce&62914560)===Ce&&300>E()-jl?(Ye&2)===0&&ws(t,0):gf|=a,Rs===Ce&&(Rs=0)),ua(t)}function bg(t,n){n===0&&(n=De()),t=Ur(t,n),t!==null&&(Wn(t,n),ua(t))}function mx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function gx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bg(t,a)}function _x(t,n){return ue(t,n)}var ec=null,Us=null,Tf=!1,nc=!1,bf=!1,or=0;function ua(t){t!==Us&&t.next===null&&(Us===null?ec=Us=t:Us=Us.next=t),nc=!0,Tf||(Tf=!0,xx())}function Fo(t,n){if(!bf&&nc){bf=!0;do for(var a=!1,s=ec;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(s,f))}else f=Ce,f=mt(s,s===on?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Wt(s,f)||(a=!0,wg(s,f));s=s.next}while(a);bf=!1}}function vx(){Ag()}function Ag(){nc=Tf=!1;var t=0;or!==0&&wx()&&(t=or);for(var n=E(),a=null,s=ec;s!==null;){var c=s.next,f=Rg(s,n);f===0?(s.next=null,a===null?ec=c:a.next=c,c===null&&(Us=a)):(a=s,(t!==0||(f&3)!==0)&&(nc=!0)),s=c}In!==0&&In!==5||Fo(t),or!==0&&(or=0)}function Rg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Bt(f),T=1<<g,B=c[g];B===-1?((T&a)===0||(T&s)!==0)&&(c[g]=he(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=on,a=Ce,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&sn(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&sn(s),ki(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=wt;break;default:a=ct}return s=Cg.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&sn(s),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(In!==0&&In!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var s=Ce;return s=mt(t,t===on?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(cg(t,s,n),Rg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function wg(t,n){if(tc())return null;cg(t,n,!0)}function xx(){Ux(function(){(Ye&6)!==0?ue(lt,vx):Ag()})}function Af(){if(or===0){var t=gs;t===0&&(t=Et,Et<<=1,(Et&261888)===0&&(Et=256)),or=t}return or}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sn(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Sx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dg((c[Pn]||null).action),g=s.submitter;g&&(n=(n=g[Pn]||null)?Dg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Cr("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var B=g?Ug(c,g):new FormData(c);Wu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?Ug(c,g):new FormData(c),Wu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],yx=Cf.toLowerCase(),Mx=Cf[0].toUpperCase()+Cf.slice(1);Zi(yx,"on"+Mx)}Zi(lp,"onAnimationEnd"),Zi(cp,"onAnimationIteration"),Zi(up,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Iv,"onTransitionRun"),Zi(Fv,"onTransitionStart"),Zi(Hv,"onTransitionCancel"),Zi(fp,"onTransitionEnd"),Rt("onMouseEnter",["mouseout","mouseover"]),Rt("onMouseLeave",["mouseout","mouseover"]),Rt("onPointerEnter",["pointerout","pointerover"]),Rt("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],B=T.instance,et=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(ft){_l(ft)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(T=s[g],B=T.instance,et=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(ft){_l(ft)}c.currentTarget=null,f=B}}}}function Re(t,n){var a=n[Di];a===void 0&&(a=n[Di]=new Set);var s=t+"__bubble";a.has(s)||(Ng(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),Ng(a,t,s,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[ic]){t[ic]=!0,zt.forEach(function(a){a!=="selectionchange"&&(Ex.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,wf("selectionchange",!1,n))}}function Ng(t,n,a,s){switch(l0(n)){case 2:var c=Qx;break;case 8:c=Jx;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Yi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=k(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}T=T.parentNode}}s=s.return}vi(function(){var et=f,ft=sa(a),_t=[];t:{var it=dp.get(t);if(it!==void 0){var ot=Cr,Zt=t;switch(t){case"keypress":if(ne(a)===0)break t;case"keydown":case"keyup":ot=gv;break;case"focusin":Zt="focus",ot=$c;break;case"focusout":Zt="blur",ot=$c;break;case"beforeblur":case"afterblur":ot=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=xv;break;case lp:case cp:case up:ot=ov;break;case fp:ot=yv;break;case"scroll":case"scrollend":ot=Kc;break;case"wheel":ot=Ev;break;case"copy":case"cut":case"paste":ot=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Xh;break;case"toggle":case"beforetoggle":ot=bv}var se=(n&4)!==0,nn=!se&&(t==="scroll"||t==="scrollend"),Y=se?it!==null?it+"Capture":null:it;se=[];for(var H=et,tt;H!==null;){var ht=H;if(tt=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||tt===null||Y===null||(ht=cn(H,Y),ht!=null&&se.push(Go(H,ht,tt))),nn)break;H=H.return}0<se.length&&(it=new ot(it,Zt,null,a,ft),_t.push({event:it,listeners:se}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",it&&a!==mn&&(Zt=a.relatedTarget||a.fromElement)&&(k(Zt)||Zt[aa]))break t;if((ot||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(Zt=a.relatedTarget||a.toElement,ot=et,Zt=Zt?k(Zt):null,Zt!==null&&(nn=u(Zt),se=Zt.tag,Zt!==nn||se!==5&&se!==27&&se!==6)&&(Zt=null)):(ot=null,Zt=et),ot!==Zt)){if(se=Gh,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(se=Xh,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),nn=ot==null?it:rt(ot),tt=Zt==null?it:rt(Zt),it=new se(ht,H+"leave",ot,a,ft),it.target=nn,it.relatedTarget=tt,ht=null,k(ft)===et&&(se=new se(Y,H+"enter",Zt,a,ft),se.target=tt,se.relatedTarget=nn,ht=se),nn=ht,ot&&Zt)e:{for(se=Tx,Y=ot,H=Zt,tt=0,ht=Y;ht;ht=se(ht))tt++;ht=0;for(var ie=H;ie;ie=se(ie))ht++;for(;0<tt-ht;)Y=se(Y),tt--;for(;0<ht-tt;)H=se(H),ht--;for(;tt--;){if(Y===H||H!==null&&Y===H.alternate){se=Y;break e}Y=se(Y),H=se(H)}se=null}else se=null;ot!==null&&Og(_t,it,ot,se,!1),Zt!==null&&nn!==null&&Og(_t,nn,Zt,se,!0)}}t:{if(it=et?rt(et):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var Ge=Qh;else if(Zh(it))if(Jh)Ge=zv;else{Ge=Nv;var $t=Lv}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&He(et.elementType)&&(Ge=Qh):Ge=Ov;if(Ge&&(Ge=Ge(t,et))){Kh(_t,Ge,a,ft);break t}$t&&$t(t,it,et),t==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&xn(it,"number",it.value)}switch($t=et?rt(et):window,t){case"focusin":(Zh($t)||$t.contentEditable==="true")&&(ls=$t,ru=et,go=null);break;case"focusout":go=ru=ls=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,sp(_t,a,ft);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":sp(_t,a,ft)}var xe;if(eu)t:{switch(t){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else os?Yh(t,a)&&(we="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(kh&&a.locale!=="ko"&&(os||we!=="onCompositionStart"?we==="onCompositionEnd"&&os&&(xe=bt()):(Yn=ft,ji="value"in Yn?Yn.value:Yn.textContent,os=!0)),$t=ac(et,we),0<$t.length&&(we=new Vh(we,t,null,a,ft),_t.push({event:we,listeners:$t}),xe?we.data=xe:(xe=jh(a),xe!==null&&(we.data=xe)))),(xe=Rv?Cv(t,a):wv(t,a))&&(we=ac(et,"onBeforeInput"),0<we.length&&($t=new Vh("onBeforeInput","beforeinput",null,a,ft),_t.push({event:$t,listeners:we}),$t.data=xe)),Sx(_t,t,et,a,ft)}Lg(_t,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=cn(t,a),c!=null&&s.unshift(Go(t,c,f)),c=cn(t,n),c!=null&&s.push(Go(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Tx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,B=T.alternate,et=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||et===null||(B=et,c?(et=cn(a,f),et!=null&&g.unshift(Go(a,et,B))):c||(et=cn(a,f),et!=null&&g.push(Go(a,et,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var bx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(bx,`
`).replace(Ax,"")}function Pg(t,n){return n=zg(n),zg(t)===n}function en(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ae(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ae(t,""+s);break;case"className":Ne(t,"class",s);break;case"tabIndex":Ne(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,a,s);break;case"style":ln(t,s,f);break;case"data":if(n!=="object"){Ne(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Sn(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&en(t,n,"name",c.name,c,null),en(t,n,"formEncType",c.formEncType,c,null),en(t,n,"formMethod",c.formMethod,c,null),en(t,n,"formTarget",c.formTarget,c,null)):(en(t,n,"encType",c.encType,c,null),en(t,n,"method",c.method,c,null),en(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Sn(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ke);break;case"onScroll":s!=null&&Re("scroll",t);break;case"onScrollEnd":s!=null&&Re("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Sn(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Re("beforetoggle",t),Re("toggle",t),Fe(t,"popover",s);break;case"xlinkActuate":ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ve(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ve(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ve(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ve(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Fe(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$n.get(a)||a,Fe(t,a,s))}}function Lf(t,n,a,s,c,f){switch(a){case"style":ln(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?ae(t,s):(typeof s=="number"||typeof s=="bigint")&&ae(t,""+s);break;case"onScroll":s!=null&&Re("scroll",t);break;case"onScrollEnd":s!=null&&Re("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ke);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Fe(t,a,s)}}}function Qn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",t),Re("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,f,g,a,null)}}c&&en(t,n,"srcSet",a.srcSet,a,null),s&&en(t,n,"src",a.src,a,null);return;case"input":Re("invalid",t);var T=f=g=c=null,B=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":g=ft;break;case"checked":B=ft;break;case"defaultChecked":et=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:en(t,n,s,ft,a,null)}}Bn(t,f,T,B,et,g,c,!1);return;case"select":Re("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:en(t,n,c,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?pn(t,!!s,n,!1):a!=null&&pn(t,!!s,a,!0);return;case"textarea":Re("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:en(t,n,g,T,a,null)}Dt(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:en(t,n,B,s,a,null)}return;case"dialog":Re("beforetoggle",t),Re("toggle",t),Re("cancel",t),Re("close",t);break;case"iframe":case"object":Re("load",t);break;case"video":case"audio":for(s=0;s<Ho.length;s++)Re(Ho[s],t);break;case"image":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"embed":case"source":case"link":Re("error",t),Re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,et,s,a,null)}return;default:if(He(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Lf(t,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&en(t,n,T,s,a,null))}function Rx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,B=null,et=null,ft=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(ot)||en(t,n,ot,null,s,_t)}}for(var it in s){var ot=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(ot!=null||_t!=null))switch(it){case"type":f=ot;break;case"name":c=ot;break;case"checked":et=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&en(t,n,it,ot,s,_t)}}Cn(t,g,T,B,et,ft,f,c);return;case"select":ot=g=T=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||en(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&en(t,n,c,f,s,B)}n=T,a=g,s=ot,it!=null?pn(t,!!a,it,!1):!!s!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:en(t,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":it=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&en(t,n,g,c,s,f)}xa(t,it,ot);return;case"option":for(var Zt in a)if(it=a[Zt],a.hasOwnProperty(Zt)&&it!=null&&!s.hasOwnProperty(Zt))switch(Zt){case"selected":t.selected=!1;break;default:en(t,n,Zt,null,s,it)}for(B in s)if(it=s[B],ot=a[B],s.hasOwnProperty(B)&&it!==ot&&(it!=null||ot!=null))switch(B){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:en(t,n,B,it,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)it=a[se],a.hasOwnProperty(se)&&it!=null&&!s.hasOwnProperty(se)&&en(t,n,se,null,s,it);for(et in s)if(it=s[et],ot=a[et],s.hasOwnProperty(et)&&it!==ot&&(it!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:en(t,n,et,it,s,ot)}return;default:if(He(n)){for(var nn in a)it=a[nn],a.hasOwnProperty(nn)&&it!==void 0&&!s.hasOwnProperty(nn)&&Lf(t,n,nn,void 0,s,it);for(ft in s)it=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||it===ot||it===void 0&&ot===void 0||Lf(t,n,ft,it,s,ot);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&en(t,n,Y,null,s,it);for(_t in s)it=s[_t],ot=a[_t],!s.hasOwnProperty(_t)||it===ot||it==null&&ot==null||en(t,n,_t,it,s,ot)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Bg(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],et=B.startTime;if(et>T)break;var ft=B.transferSize,_t=B.initiatorType;ft&&Bg(_t)&&(B=B.responseEnd,g+=ft*(B<T?1:(T-et)/(B-et)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function Ig(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function wx(){var t=window.event;return t&&t.type==="popstate"?t===Pf?!1:(Pf=t,!0):(Pf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(Lx)}:Hg;function Lx(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Vg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),zs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Ui]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Vo(t.ownerDocument.body);a=c}while(a);zs(n)}function Xg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ui])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function Ox(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fi(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Fi(t.nextSibling),t===null))return null;return t}function If(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var Hi=new Map,jg=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=j.d;j.d={f:Px,r:Bx,D:Ix,C:Fx,L:Hx,m:Gx,X:Xx,S:Vx,M:kx};function Px(){var t=Oa.f(),n=Ql();return t||n}function Bx(t){var n=nt(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):Oa.r(t)}var Ls=typeof document>"u"?null:document;function Zg(t,n,a){var s=Ls;if(s&&typeof n=="string"&&n){var c=me(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Qn(n,"link",t),vt(n),s.head.appendChild(n)))}}function Ix(t){Oa.D(t),Zg("dns-prefetch",t,null)}function Fx(t,n){Oa.C(t,n),Zg("preconnect",t,n)}function Hx(t,n,a){Oa.L(t,n,a);var s=Ls;if(s&&t&&n){var c='link[rel="preload"][as="'+me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+me(a.imageSizes)+'"]')):c+='[href="'+me(t)+'"]';var f=c;switch(n){case"style":f=Ns(t);break;case"script":f=Os(t)}Hi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Hi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Xo(f))||n==="script"&&s.querySelector(ko(f))||(n=s.createElement("link"),Qn(n,"link",t),vt(n),s.head.appendChild(n)))}}function Gx(t,n){Oa.m(t,n);var a=Ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+me(s)+'"][href="'+me(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Os(t)}if(!Hi.has(f)&&(t=_({rel:"modulepreload",href:t},n),Hi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(f)))return}s=a.createElement("link"),Qn(s,"link",t),vt(s),a.head.appendChild(s)}}}function Vx(t,n,a){Oa.S(t,n,a);var s=Ls;if(s&&t){var c=q(s).hoistableStyles,f=Ns(t);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(Xo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Hi.get(f))&&Gf(t,a);var B=g=s.createElement("link");vt(B),Qn(B,"link",t),B._p=new Promise(function(et,ft){B.onload=et,B.onerror=ft}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oc(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function Xx(t,n){Oa.X(t,n);var a=Ls;if(a&&t){var s=q(a).hoistableScripts,c=Os(t),f=s.get(c);f||(f=a.querySelector(ko(c)),f||(t=_({src:t,async:!0},n),(n=Hi.get(c))&&Vf(t,n),f=a.createElement("script"),vt(f),Qn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function kx(t,n){Oa.M(t,n);var a=Ls;if(a&&t){var s=q(a).hoistableScripts,c=Os(t),f=s.get(c);f||(f=a.querySelector(ko(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Hi.get(c))&&Vf(t,n),f=a.createElement("script"),vt(f),Qn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(t,n,a,s){var c=(c=K.current)?sc(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ns(a.href),a=q(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ns(a.href);var f=q(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Xo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),Hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hi.set(t,a),f||Wx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Os(a),a=q(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ns(t){return'href="'+me(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Wx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Qn(n,"link",a),vt(n),t.head.appendChild(n))}function Os(t){return'[src="'+me(t)+'"]'}function ko(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+me(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vt(s),Qn(s,"style",c),oc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Ns(a.href);var f=t.querySelector(Xo(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;s=Qg(a),(c=Hi.get(c))&&Gf(s,c),f=(t.ownerDocument||t).createElement("link"),vt(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),Qn(f,"link",s),n.state.loading|=4,oc(f,a.precedence,t),n.instance=f;case"script":return f=Os(a.src),(c=t.querySelector(ko(f)))?(n.instance=c,vt(c),c):(s=a,(c=Hi.get(f))&&(s=_({},a),Vf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),vt(c),Qn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,oc(s,a.precedence,t));return n.instance}function oc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function $g(t,n,a){if(lc===null){var s=new Map,c=lc=new Map;c.set(a,s)}else c=lc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ui]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ns(s.href),f=n.querySelector(Xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,s=Qg(s),(c=Hi.get(c))&&Gf(s,c),f=f.createElement("link"),vt(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),Qn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function jx(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*Cx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(Zx,t),uc=null,cc.call(t))}function Zx(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var s=a.get(null);else{a=new Map,uc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=cc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Wo={$$typeof:z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Kx(t,n,a,s,c,f,g,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function n0(t,n,a,s,c,f,g,T,B,et,ft,_t){return t=new Kx(t,n,a,g,B,et,ft,_t,T),n=1,f===!0&&(n|=24),f=Si(3,null,null,n),t.current=f,f.stateNode=t,n=yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bu(f),t}function i0(t){return t?(t=fs,t):fs}function a0(t,n,a,s,c,f){c=i0(c),s.context===null?s.context=c:s.pendingContext=c,s=Qa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ja(t,s,n),a!==null&&(di(a,t,n),Eo(a,t,n))}function r0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){r0(t,n),(t=t.alternate)&&r0(t,n)}function s0(t){if(t.tag===13||t.tag===31){var n=Ur(t,67108864);n!==null&&di(n,t,67108864),kf(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=bi();n=Ci(n);var a=Ur(t,n);a!==null&&di(a,t,n),kf(t,n)}}var dc=!0;function Qx(t,n,a,s){var c=O.T;O.T=null;var f=j.p;try{j.p=2,Wf(t,n,a,s)}finally{j.p=f,O.T=c}}function Jx(t,n,a,s){var c=O.T;O.T=null;var f=j.p;try{j.p=8,Wf(t,n,a,s)}finally{j.p=f,O.T=c}}function Wf(t,n,a,s){if(dc){var c=qf(s);if(c===null)Uf(t,n,s,hc,a),c0(t,s);else if(tS(c,t,n,a,s))s.stopPropagation();else if(c0(t,s),n&4&&-1<$x.indexOf(t)){for(;c!==null;){var f=nt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-Bt(g);T.entanglements[1]|=B,g&=~B}ua(f),(Ye&6)===0&&(Zl=E()+500,Fo(0))}}break;case 31:case 13:T=Ur(f,2),T!==null&&di(T,f,2),Ql(),kf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,hc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=sa(t),Yf(t)}var hc=null;function Yf(t){if(hc=null,t=k(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case lt:return 2;case xt:return 8;case ct:case te:return 32;case wt:return 268435456;default:return 32}default:return 32}}var jf=!1,cr=null,ur=null,fr=null,qo=new Map,Yo=new Map,dr=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function jo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=nt(n),n!==null&&s0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function tS(t,n,a,s,c){switch(n){case"focusin":return cr=jo(cr,t,n,a,s,c),!0;case"dragenter":return ur=jo(ur,t,n,a,s,c),!0;case"mouseover":return fr=jo(fr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return qo.set(f,jo(qo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Yo.set(f,jo(Yo.get(f)||null,t,n,a,s,c)),!0}return!1}function u0(t){var n=k(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ar(t.priority,function(){o0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ar(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);mn=s,a.target.dispatchEvent(s),mn=null}else return n=nt(a),n!==null&&s0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){pc(t)&&a.delete(n)}function eS(){jf=!1,cr!==null&&pc(cr)&&(cr=null),ur!==null&&pc(ur)&&(ur=null),fr!==null&&pc(fr)&&(fr=null),qo.forEach(f0),Yo.forEach(f0)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,eS)))}var gc=null;function d0(t){gc!==t&&(gc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=nt(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function zs(t){function n(B){return mc(B,t)}cr!==null&&mc(cr,t),ur!==null&&mc(ur,t),fr!==null&&mc(fr,t),qo.forEach(n),Yo.forEach(n);for(var a=0;a<dr.length;a++){var s=dr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)u0(a),a.blockedOn===null&&dr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[Pn]||null;if(typeof f=="function")g||d0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Pn]||null)T=g.formAction;else if(Yf(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),d0(a)}}}function h0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}_c.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=bi();a0(a,s,t,n,null,null)},_c.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),Ql(),n[aa]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=wi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<dr.length&&n!==0&&n<dr[a].priority;a++);dr.splice(a,0,t),a===0&&u0(t)}};var p0=e.version;if(p0!=="19.2.0")throw Error(r(527,p0,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var nS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Mt=vc.inject(nS),Ut=vc}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ym,f=Mm,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,s,null,c,f,g,h0),t[aa]=n.current,Df(t),new Zf(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=ym,g=Mm,T=Em,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=n0(t,1,!0,n,a??null,s,c,B,f,g,T,h0),n.context=i0(null),a=n.current,s=bi(),s=Ci(s),c=Qa(s),c.callback=null,Ja(a,c,s),a=s,n.current.lanes=a,Wn(n,a),ua(n),t[aa]=n.current,Df(t),new _c(n)},Ko.version="19.2.0",Ko}var T0;function dS(){if(T0)return Jf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=fS(),Jf.exports}var hS=dS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="180",pS=0,b0=1,mS=2,C_=1,gS=2,Ha=3,Er=0,gi=1,Jn=2,yr=0,to=1,A0=2,R0=3,C0=4,_S=5,Jr=100,vS=101,xS=102,SS=103,yS=104,MS=200,ES=201,TS=202,bS=203,Id=204,Fd=205,AS=206,RS=207,CS=208,wS=209,DS=210,US=211,LS=212,NS=213,OS=214,Hd=0,Gd=1,Vd=2,no=3,Xd=4,kd=5,Wd=6,qd=7,Rh=0,zS=1,PS=2,Mr=0,BS=1,IS=2,FS=3,HS=4,GS=5,VS=6,XS=7,w_=300,io=301,ao=302,Yd=303,jd=304,jc=306,ts=1e3,es=1001,Zd=1002,Xe=1003,kS=1004,xc=1005,ha=1006,nd=1007,ns=1008,ga=1009,D_=1010,U_=1011,al=1012,Ch=1013,as=1014,Ga=1015,ul=1016,wh=1017,Dh=1018,rl=1020,L_=35902,N_=35899,O_=1021,z_=1022,ia=1023,sl=1026,ol=1027,P_=1028,Uh=1029,B_=1030,Lh=1031,Nh=1033,Hc=33776,Gc=33777,Vc=33778,Xc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,yh=36284,Mh=36285,Eh=36286,WS=3200,qS=3201,I_=0,YS=1,Sr="",Vi="srgb",ro="srgb-linear",Wc="linear",an="srgb",Ps=7680,w0=519,jS=512,ZS=513,KS=514,F_=515,QS=516,JS=517,$S=518,ty=519,D0=35044,U0="300 es",pa=2e3,qc=2001;class oo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Yc=180/Math.PI;function fl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ei[o&255]+ei[o>>8&255]+ei[o>>16&255]+ei[o>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]).toLowerCase()}function Le(o,e,i){return Math.max(e,Math.min(i,o))}function ey(o,e){return(o%e+e)%e}function ad(o,e,i){return(1-i)*o+i*e}function Qo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function hi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,i=0){We.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Le(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3];const S=u[d+0],M=u[d+1],A=u[d+2],C=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(_!==C||m!==S||p!==M||v!==A){let y=1-h;const x=m*S+p*M+v*A+_*C,I=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const X=Math.sqrt(z),F=Math.atan2(X,x*I);y=Math.sin(y*F)/X,h=Math.sin(h*F)/X}const R=h*I;if(m=m*y+S*R,p=p*y+M*R,v=v*y+A*R,_=_*y+C*R,y===1-h){const X=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=X,p*=X,v*=X,_*=X}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],S=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+v*_+m*M-p*S,e[i+1]=m*A+v*S+p*_-h*M,e[i+2]=p*A+v*M+h*S-m*_,e[i+3]=v*A-h*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"YXZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"ZXY":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"ZYX":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"YZX":this._x=S*v*_+p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_-S*M*A;break;case"XZY":this._x=S*v*_-p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),_=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=d*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this.z=Le(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this.z=Le(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Le(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new Q,L0=new dl;class Se{constructor(e,i,r,l,u,d,h,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],M=r[5],A=r[8],C=l[0],y=l[3],x=l[6],I=l[1],z=l[4],R=l[7],X=l[2],F=l[5],P=l[8];return u[0]=d*C+h*I+m*X,u[3]=d*y+h*z+m*F,u[6]=d*x+h*R+m*P,u[1]=p*C+v*I+_*X,u[4]=p*y+v*z+_*F,u[7]=p*x+v*R+_*P,u[2]=S*C+M*I+A*X,u[5]=S*y+M*z+A*F,u[8]=S*x+M*R+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,S=h*m-v*u,M=p*u-d*m,A=i*_+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*p-v*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(sd.makeScale(e,i)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new Se;function H_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ll(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ny(){const o=ll("canvas");return o.style.display="block",o}const N0={};function cl(o){o in N0||(N0[o]=!0,console.warn(o))}function iy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const O0=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ay(){const o={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===an&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===an&&(l.r=eo(l.r),l.g=eo(l.g),l.b=eo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Sr?Wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return cl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return cl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ro]:{primaries:e,whitePoint:r,transfer:Wc,toXYZ:O0,fromXYZ:z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:r,transfer:an,toXYZ:O0,fromXYZ:z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),o}const ke=ay();function Va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class ry{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=ll("canvas")),Bs.width=e.width,Bs.height=e.height;const l=Bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ll("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Va(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(od(l[d].image)):u.push(od(l[d]))}else u=od(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;const ld=new Q;class ii extends oo{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,r=es,l=es,u=ha,d=ns,h=ia,m=ga,p=ii.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=fl(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=w_;ii.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],A=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,R=(M+1)/2,X=(x+1)/2,F=(v+S)/4,P=(_+C)/4,Z=(A+y)/4;return z>R&&z>X?z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(z),l=F/r,u=P/r):R>X?R<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),r=F/l,u=Z/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=P/u,l=Z/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-A)*(y-A)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(_-C)/I,this.z=(S-v)/I,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this.z=Le(this.z,e.z,i.z),this.w=Le(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this.z=Le(this.z,e,i),this.w=Le(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends oo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ha,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new ii(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ha,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Oh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends ly{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class G_ extends ii{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cy extends ii{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ji):Ji.fromBufferAttribute(u,d),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),yc.subVectors(this.max,Jo),Is.subVectors(e.a,Jo),Fs.subVectors(e.b,Jo),Hs.subVectors(e.c,Jo),pr.subVectors(Fs,Is),mr.subVectors(Hs,Fs),kr.subVectors(Is,Hs);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-kr.z,kr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,kr.z,0,-kr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-kr.y,kr.x,0];return!cd(i,Is,Fs,Hs,yc)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,Is,Fs,Hs,yc))?!1:(Mc.crossVectors(pr,mr),i=[Mc.x,Mc.y,Mc.z],cd(i,Is,Fs,Hs,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ji=new Q,Sc=new hl,Is=new Q,Fs=new Q,Hs=new Q,pr=new Q,mr=new Q,kr=new Q,Jo=new Q,yc=new Q,Mc=new Q,Wr=new Q;function cd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Wr.fromArray(o,u);const h=l.x*Math.abs(Wr.x)+l.y*Math.abs(Wr.y)+l.z*Math.abs(Wr.z),m=e.dot(Wr),p=i.dot(Wr),v=r.dot(Wr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const uy=new hl,$o=new Q,ud=new Q;class zh{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const i=$o.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector($o,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(ud)),this.expandByPoint($o.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pa=new Q,fd=new Q,Ec=new Q,gr=new Q,dd=new Q,Tc=new Q,hd=new Q;class fy{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){fd.copy(e).add(i).multiplyScalar(.5),Ec.copy(i).sub(e).normalize(),gr.copy(this.origin).sub(fd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Ec),h=gr.dot(this.direction),m=-gr.dot(Ec),p=gr.lengthSq(),v=Math.abs(1-d*d);let _,S,M,A;if(v>0)if(_=d*m-h,S=d*h-m,A=u*v,_>=0)if(S>=-A)if(S<=A){const C=1/v;_*=C,S*=C,M=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fd).addScaledVector(Ec,S),M}intersectSphere(e,i){Pa.subVectors(e.center,this.origin);const r=Pa.dot(this.direction),l=Pa.dot(Pa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,r,l,u){dd.subVectors(i,e),Tc.subVectors(r,e),hd.crossVectors(dd,Tc);let d=this.direction.dot(hd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;gr.subVectors(this.origin,e);const m=h*this.direction.dot(Tc.crossVectors(gr,Tc));if(m<0)return null;const p=h*this.direction.dot(dd.cross(gr));if(p<0||m+p>d)return null;const v=-h*gr.dot(hd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn{constructor(e,i,r,l,u,d,h,m,p,v,_,S,M,A,C,y){Tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,_,S,M,A,C,y)}set(e,i,r,l,u,d,h,m,p,v,_,S,M,A,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=A,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Gs.setFromMatrixColumn(e,0).length(),u=1/Gs.setFromMatrixColumn(e,1).length(),d=1/Gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=d*v,M=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,M=m*_,A=p*v,C=p*_;i[0]=S+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=M*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,M=m*_,A=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,M=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=A*p-M,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=A*_+M,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+A,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=M*_-A,i[2]=A*_-M,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,hy)}lookAt(e,i,r){const l=this.elements;return Ai.subVectors(e,i),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),_r.crossVectors(r,Ai),_r.lengthSq()===0&&(Math.abs(r.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),_r.crossVectors(r,Ai)),_r.normalize(),bc.crossVectors(Ai,_r),l[0]=_r.x,l[4]=bc.x,l[8]=Ai.x,l[1]=_r.y,l[5]=bc.y,l[9]=Ai.y,l[2]=_r.z,l[6]=bc.z,l[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],M=r[13],A=r[2],C=r[6],y=r[10],x=r[14],I=r[3],z=r[7],R=r[11],X=r[15],F=l[0],P=l[4],Z=l[8],D=l[12],w=l[1],V=l[5],at=l[9],ut=l[13],gt=l[2],dt=l[6],O=l[10],j=l[14],W=l[3],pt=l[7],Tt=l[11],N=l[15];return u[0]=d*F+h*w+m*gt+p*W,u[4]=d*P+h*V+m*dt+p*pt,u[8]=d*Z+h*at+m*O+p*Tt,u[12]=d*D+h*ut+m*j+p*N,u[1]=v*F+_*w+S*gt+M*W,u[5]=v*P+_*V+S*dt+M*pt,u[9]=v*Z+_*at+S*O+M*Tt,u[13]=v*D+_*ut+S*j+M*N,u[2]=A*F+C*w+y*gt+x*W,u[6]=A*P+C*V+y*dt+x*pt,u[10]=A*Z+C*at+y*O+x*Tt,u[14]=A*D+C*ut+y*j+x*N,u[3]=I*F+z*w+R*gt+X*W,u[7]=I*P+z*V+R*dt+X*pt,u[11]=I*Z+z*at+R*O+X*Tt,u[15]=I*D+z*ut+R*j+X*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],M=e[14],A=e[3],C=e[7],y=e[11],x=e[15];return A*(+u*m*_-l*p*_-u*h*S+r*p*S+l*h*M-r*m*M)+C*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*v-u*m*v)+y*(+i*p*_-i*h*M-u*d*_+r*d*M+u*h*v-r*p*v)+x*(-l*h*v-i*m*_+i*h*S+l*d*_-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],M=e[11],A=e[12],C=e[13],y=e[14],x=e[15],I=_*y*p-C*S*p+C*m*M-h*y*M-_*m*x+h*S*x,z=A*S*p-v*y*p-A*m*M+d*y*M+v*m*x-d*S*x,R=v*C*p-A*_*p+A*h*M-d*C*M-v*h*x+d*_*x,X=A*_*m-v*C*m-A*h*S+d*C*S+v*h*y-d*_*y,F=i*I+r*z+l*R+u*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=I*P,e[1]=(C*S*u-_*y*u-C*l*M+r*y*M+_*l*x-r*S*x)*P,e[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*x+r*m*x)*P,e[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*M-r*m*M)*P,e[4]=z*P,e[5]=(v*y*u-A*S*u+A*l*M-i*y*M-v*l*x+i*S*x)*P,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*x-i*m*x)*P,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*M+i*m*M)*P,e[8]=R*P,e[9]=(A*_*u-v*C*u-A*r*M+i*C*M+v*r*x-i*_*x)*P,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*x+i*h*x)*P,e[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*M-i*h*M)*P,e[12]=X*P,e[13]=(v*C*l-A*_*l+A*r*S-i*C*S-v*r*y+i*_*y)*P,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*P,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,S=u*p,M=u*v,A=u*_,C=d*v,y=d*_,x=h*_,I=m*p,z=m*v,R=m*_,X=r.x,F=r.y,P=r.z;return l[0]=(1-(C+x))*X,l[1]=(M+R)*X,l[2]=(A-z)*X,l[3]=0,l[4]=(M-R)*F,l[5]=(1-(S+x))*F,l[6]=(y+I)*F,l[7]=0,l[8]=(A+z)*P,l[9]=(y-I)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=Gs.set(l[0],l[1],l[2]).length();const d=Gs.set(l[4],l[5],l[6]).length(),h=Gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],$i.copy(this);const p=1/u,v=1/d,_=1/h;return $i.elements[0]*=p,$i.elements[1]*=p,$i.elements[2]*=p,$i.elements[4]*=v,$i.elements[5]*=v,$i.elements[6]*=v,$i.elements[8]*=_,$i.elements[9]*=_,$i.elements[10]*=_,i.setFromRotationMatrix($i),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=pa,m=!1){const p=this.elements,v=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===pa)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===qc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=pa,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===pa)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===qc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Gs=new Q,$i=new Tn,dy=new Q(0,0,0),hy=new Q(1,1,1),_r=new Q,bc=new Q,Ai=new Q,P0=new Tn,B0=new dl;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Le(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Le(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return P0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return B0.setFromEuler(this),this.setFromQuaternion(B0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const I0=new Q,Vs=new dl,Ba=new Tn,Ac=new Q,tl=new Q,my=new Q,gy=new dl,F0=new Q(1,0,0),H0=new Q(0,1,0),G0=new Q(0,0,1),V0={type:"added"},_y={type:"removed"},Xs={type:"childadded",child:null},pd={type:"childremoved",child:null};class ai extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new Q,i=new _a,r=new dl,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Se}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(F0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(G0,e)}translateOnAxis(e,i){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(G0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(tl,Ac,this.up):Ba.lookAt(Ac,tl,this.up),this.quaternion.setFromRotationMatrix(Ba),l&&(Ba.extractRotation(l.matrixWorld),Vs.setFromRotationMatrix(Ba),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V0),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_y),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V0),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ai.DEFAULT_UP=new Q(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ta=new Q,Ia=new Q,md=new Q,Fa=new Q,ks=new Q,Ws=new Q,X0=new Q,gd=new Q,_d=new Q,vd=new Q,xd=new rn,Sd=new rn,yd=new rn;class na{constructor(e=new Q,i=new Q,r=new Q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ta.subVectors(e,i),l.cross(ta);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){ta.subVectors(l,i),Ia.subVectors(r,i),md.subVectors(e,i);const d=ta.dot(ta),h=ta.dot(Ia),m=ta.dot(md),p=Ia.dot(Ia),v=Ia.dot(md),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Fa.x),m.addScaledVector(d,Fa.y),m.addScaledVector(h,Fa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return xd.setScalar(0),Sd.setScalar(0),yd.setScalar(0),xd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(xd,u.x),d.addScaledVector(Sd,u.y),d.addScaledVector(yd,u.z),d}static isFrontFacing(e,i,r,l){return ta.subVectors(r,i),Ia.subVectors(e,i),ta.cross(Ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ta.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),ta.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return na.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return na.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ks.subVectors(l,r),Ws.subVectors(u,r),gd.subVectors(e,r);const m=ks.dot(gd),p=Ws.dot(gd);if(m<=0&&p<=0)return i.copy(r);_d.subVectors(e,l);const v=ks.dot(_d),_=Ws.dot(_d);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ks,d);vd.subVectors(e,u);const M=ks.dot(vd),A=Ws.dot(vd);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(Ws,h);const y=v*A-M*_;if(y<=0&&_-v>=0&&M-A>=0)return X0.subVectors(u,l),h=(_-v)/(_-v+(M-A)),i.copy(l).addScaledVector(X0,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(r).addScaledVector(ks,d).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=ke.workingColorSpace){return this.r=e,this.g=i,this.b=r,ke.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=ke.workingColorSpace){if(e=ey(e,1),i=Le(i,0,1),r=Le(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Md(d,u,e+1/3),this.g=Md(d,u,e),this.b=Md(d,u,e-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(e,i=Vi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Vi){const r=X_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return ke.workingToColorSpace(ni.copy(this),e),Math.round(Le(ni.r*255,0,255))*65536+Math.round(Le(ni.g*255,0,255))*256+Math.round(Le(ni.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ke.workingColorSpace){ke.workingToColorSpace(ni.copy(this),i);const r=ni.r,l=ni.g,u=ni.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=ke.workingColorSpace){return ke.workingToColorSpace(ni.copy(this),i),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Vi){ke.workingToColorSpace(ni.copy(this),e);const i=ni.r,r=ni.g,l=ni.b;return e!==Vi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+i,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(vr),e.getHSL(Rc);const r=ad(vr.h,Rc.h,i),l=ad(vr.s,Rc.s,i),u=ad(vr.l,Rc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Ie;Ie.NAMES=X_;let vy=0;class pl extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=to,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Fd,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Id&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fa extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const On=new Q,Cc=new We;let xy=0;class ma{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=D0,this.updateRanges=[],this.gpuType=Ga,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix3(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(e),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.transformDirection(e),this.setXYZ(i,On.x,On.y,On.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Qo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=hi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),r=hi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),r=hi(r,this.array),l=hi(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=hi(i,this.array),r=hi(r,this.array),l=hi(l,this.array),u=hi(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}}class k_ extends ma{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends ma{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class is extends ma{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Sy=0;const Gi=new Tn,Ed=new ai,qs=new Q,Ri=new hl,el=new hl,kn=new Q;class ss extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?W_:k_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,i,r){return Gi.makeTranslation(e,i,r),this.applyMatrix4(Gi),this}scale(e,i,r){return Gi.makeScale(e,i,r),this.applyMatrix4(Gi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new is(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Ri.setFromBufferAttribute(u),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];el.setFromBufferAttribute(h),this.morphTargetsRelative?(kn.addVectors(Ri.min,el.min),Ri.expandByPoint(kn),kn.addVectors(Ri.max,el.max),Ri.expandByPoint(kn)):(Ri.expandByPoint(el.min),Ri.expandByPoint(el.max))}Ri.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)kn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(kn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)kn.fromBufferAttribute(h,p),m&&(qs.fromBufferAttribute(e,p),kn.add(qs)),l=Math.max(l,r.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ma(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new Q,m[Z]=new Q;const p=new Q,v=new Q,_=new Q,S=new We,M=new We,A=new We,C=new Q,y=new Q;function x(Z,D,w){p.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),S.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,D),A.fromBufferAttribute(u,w),v.sub(p),_.sub(p),M.sub(S),A.sub(S);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(V),h[Z].add(C),h[D].add(C),h[w].add(C),m[Z].add(y),m[D].add(y),m[w].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Z=0,D=I.length;Z<D;++Z){const w=I[Z],V=w.start,at=w.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)x(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const z=new Q,R=new Q,X=new Q,F=new Q;function P(Z){X.fromBufferAttribute(l,Z),F.copy(X);const D=h[Z];z.copy(D),z.sub(X.multiplyScalar(X.dot(D))).normalize(),R.crossVectors(F,D);const V=R.dot(m[Z])<0?-1:1;d.setXYZW(Z,z.x,z.y,z.z,V)}for(let Z=0,D=I.length;Z<D;++Z){const w=I[Z],V=w.start,at=w.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ma(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,p=new Q,v=new Q,_=new Q;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)kn.fromBufferAttribute(e,i),kn.normalize(),e.setXYZ(i,kn.x,kn.y,kn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*v;for(let x=0;x<v;x++)S[A++]=p[M++]}return new ma(S,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ss,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k0=new Tn,qr=new fy,wc=new zh,W0=new Q,Dc=new Q,Uc=new Q,Lc=new Q,Td=new Q,Nc=new Q,q0=new Q,Oc=new Q;class zn extends ai{constructor(e=new ss,i=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Nc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(Td.fromBufferAttribute(_,e),d?Nc.addScaledVector(Td,v):Nc.addScaledVector(Td.sub(i),v))}i.add(Nc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(u),qr.copy(e.ray).recast(e.near),!(wc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(wc,W0)===null||qr.origin.distanceToSquared(W0)>(e.far-e.near)**2))&&(k0.copy(u).invert(),qr.copy(e.ray).applyMatrix4(k0),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,qr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=d[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,X=z;R<X;R+=3){const F=h.getX(R),P=h.getX(R+1),Z=h.getX(R+2);l=zc(this,x,e,r,p,v,_,F,P,Z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,x=C;y<x;y+=3){const I=h.getX(y),z=h.getX(y+1),R=h.getX(y+2);l=zc(this,d,e,r,p,v,_,I,z,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=d[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,X=z;R<X;R+=3){const F=R,P=R+1,Z=R+2;l=zc(this,x,e,r,p,v,_,F,P,Z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,x=C;y<x;y+=3){const I=y,z=y+1,R=y+2;l=zc(this,d,e,r,p,v,_,I,z,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yy(o,e,i,r,l,u,d,h){let m;if(e.side===gi?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Er,h),m===null)return null;Oc.copy(h),Oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:o}}function zc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,Dc),o.getVertexPosition(m,Uc),o.getVertexPosition(p,Lc);const v=yy(o,e,i,r,Dc,Uc,Lc,q0);if(v){const _=new Q;na.getBarycoord(q0,Dc,Uc,Lc,_),l&&(v.uv=na.getInterpolatedAttribute(l,h,m,p,_,new We)),u&&(v.uv1=na.getInterpolatedAttribute(u,h,m,p,_,new We)),d&&(v.normal=na.getInterpolatedAttribute(d,h,m,p,_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new Q,materialIndex:0};na.getNormal(Dc,Uc,Lc,S.normal),v.face=S,v.barycoord=_}return v}class lo extends ss{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new is(p,3)),this.setAttribute("normal",new is(v,3)),this.setAttribute("uv",new is(_,2));function A(C,y,x,I,z,R,X,F,P,Z,D){const w=R/P,V=X/Z,at=R/2,ut=X/2,gt=F/2,dt=P+1,O=Z+1;let j=0,W=0;const pt=new Q;for(let Tt=0;Tt<O;Tt++){const N=Tt*V-ut;for(let $=0;$<dt;$++){const St=$*w-at;pt[C]=St*I,pt[y]=N*z,pt[x]=gt,p.push(pt.x,pt.y,pt.z),pt[C]=0,pt[y]=0,pt[x]=F>0?1:-1,v.push(pt.x,pt.y,pt.z),_.push($/P),_.push(1-Tt/Z),j+=1}}for(let Tt=0;Tt<Z;Tt++)for(let N=0;N<P;N++){const $=S+N+dt*Tt,St=S+N+dt*(Tt+1),Ct=S+(N+1)+dt*(Tt+1),Pt=S+(N+1)+dt*Tt;m.push($,St,Pt),m.push(St,Ct,Pt),W+=6}h.addGroup(M,W,D),M+=W,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function si(o){const e={};for(let i=0;i<o.length;i++){const r=so(o[i]);for(const l in r)e[l]=r[l]}return e}function My(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Ey={clone:so,merge:si};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Q,Y0=new We,j0=new We;class mi extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,Y0,j0),i.subVectors(j0,Y0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(id*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ys=-90,js=1;class Ay extends ai{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Ys,js,e,i);l.layers=this.layers,this.add(l);const u=new mi(Ys,js,e,i);u.layers=this.layers,this.add(u);const d=new mi(Ys,js,e,i);d.layers=this.layers,this.add(d);const h=new mi(Ys,js,e,i);h.layers=this.layers,this.add(h);const m=new mi(Ys,js,e,i);m.layers=this.layers,this.add(m);const p=new mi(Ys,js,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class j_ extends ii{constructor(e=[],i=io,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new j_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new lo(5,5,5),u=new Tr({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:yr});u.uniforms.tEquirect.value=i;const d=new zn(l,u),h=i.minFilter;return i.minFilter===ns&&(i.minFilter=ha),new Ay(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Js extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Js;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Ph{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=i,this.far=r}clone(){return new Ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wy extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ad=new Q,Dy=new Q,Uy=new Se;class Kr{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ad.subVectors(r,i).cross(Dy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Uy.getNormalMatrix(e),l=this.coplanarPoint(Ad).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new zh,Ly=new We(.5,.5),Pc=new Q;class Bh{constructor(e=new Kr,i=new Kr,r=new Kr,l=new Kr,u=new Kr,d=new Kr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=pa,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],M=u[7],A=u[8],C=u[9],y=u[10],x=u[11],I=u[12],z=u[13],R=u[14],X=u[15];if(l[0].setComponents(p-d,M-v,x-A,X-I).normalize(),l[1].setComponents(p+d,M+v,x+A,X+I).normalize(),l[2].setComponents(p+h,M+_,x+C,X+z).normalize(),l[3].setComponents(p-h,M-_,x-C,X-z).normalize(),r)l[4].setComponents(m,S,y,R).normalize(),l[5].setComponents(p-m,M-S,x-y,X-R).normalize();else if(l[4].setComponents(p-m,M-S,x-y,X-R).normalize(),i===pa)l[5].setComponents(p+m,M+S,x+y,X+R).normalize();else if(i===qc)l[5].setComponents(m,S,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const i=Ly.distanceTo(e.center);return Yr.radius=.7071067811865476+i,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z0 extends ii{constructor(e,i,r,l,u,d,h,m,p){super(e,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Z_ extends ii{constructor(e,i,r=as,l,u,d,h=Xe,m=Xe,p,v=sl,_=1){if(v!==sl&&v!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class K_ extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pi extends ss{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,M=[],A=[],C=[],y=[];for(let x=0;x<v;x++){const I=x*S-d;for(let z=0;z<p;z++){const R=z*_-u;A.push(R,-I,0),C.push(0,0,1),y.push(z/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<h;I++){const z=I+p*x,R=I+p*(x+1),X=I+1+p*(x+1),F=I+1+p*x;M.push(z,R,F),M.push(R,X,F)}this.setIndex(M),this.setAttribute("position",new is(A,3)),this.setAttribute("normal",new is(C,3)),this.setAttribute("uv",new is(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rd extends pl{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ny extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class zy{constructor(e,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(v){h++,u===!1&&l.onStart!==void 0&&l.onStart(v,d,h),u=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,_){return p.push(v,_),this},this.removeHandler=function(v){const _=p.indexOf(v);return _!==-1&&p.splice(_,2),this},this.getHandler=function(v){for(let _=0,S=p.length;_<S;_+=2){const M=p[_],A=p[_+1];if(M.global&&(M.lastIndex=0),M.test(v))return A}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Py=new zy;class Ih{constructor(e){this.manager=e!==void 0?e:Py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class By extends Ih{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=Cd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let _=Zs.get(d);_===void 0&&(_=[],Zs.set(d,_)),_.push({onLoad:i,onError:l})}return d}const h=ll("img");function m(){v(),i&&i(this);const _=Zs.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onLoad&&M.onLoad(this)}Zs.delete(this),u.manager.itemEnd(e)}function p(_){v(),l&&l(_),Cd.remove(`image:${e}`);const S=Zs.get(this)||[];for(let M=0;M<S.length;M++){const A=S[M];A.onError&&A.onError(_)}Zs.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function v(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Cd.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class Ks extends Ih{constructor(e){super(e)}load(e,i,r,l){const u=new ii,d=new By(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Fh extends ai{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const wd=new Tn,K0=new Q,Q0=new Q;class Q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=ga,this.map=null,this.mapPass=null,this.matrix=new Tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),i.position.copy(K0),Q0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Q0),i.updateMatrixWorld(),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iy extends Q_{constructor(){super(new mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=Yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=e.distance||i.far;(r!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=r,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fy extends Fh{constructor(e,i,r=0,l=Math.PI/3,u=0,d=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.distance=r,this.angle=l,this.penumbra=u,this.decay=d,this.map=null,this.shadow=new Iy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const J0=new Tn,nl=new Q,Dd=new Q;class Hy extends Q_{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new rn(2,1,1,1),new rn(0,1,1,1),new rn(3,1,1,1),new rn(1,1,1,1),new rn(3,0,1,1),new rn(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),nl.setFromMatrixPosition(e.matrixWorld),r.position.copy(nl),Dd.copy(r.position),Dd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Dd),r.updateMatrixWorld(),l.makeTranslation(-nl.x,-nl.y,-nl.z),J0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(J0,r.coordinateSystem,r.reversedDepth)}}class ea extends Fh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gy extends Y_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vy extends Fh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xy extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $0(o,e,i,r){const l=ky(r);switch(i){case O_:return o*e;case P_:return o*e/l.components*l.byteLength;case Uh:return o*e/l.components*l.byteLength;case B_:return o*e*2/l.components*l.byteLength;case Lh:return o*e*2/l.components*l.byteLength;case z_:return o*e*3/l.components*l.byteLength;case ia:return o*e*4/l.components*l.byteLength;case Nh:return o*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(e,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(e,8)/2;case th:case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ky(o){switch(o){case ga:case D_:return{byteLength:1,components:1};case al:case U_:case ul:return{byteLength:2,components:1};case wh:case Dh:return{byteLength:2,components:4};case as:case Ch:case Ga:return{byteLength:4,components:1};case L_:case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Wy(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<_.length;M++){const A=_[S],C=_[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,A=_.length;M<A;M++){const C=_[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
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
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rM=`#ifdef USE_IRIDESCENCE
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
#endif`,sM=`#ifdef USE_BUMPMAP
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mM=`#define PI 3.141592653589793
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
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_M=`vec3 transformedNormal = objectNormal;
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
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
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
#endif`,kM=`struct PhysicalMaterial {
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
}`,WM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eE=`#if defined( USE_POINTS_UV )
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
#endif`,nE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oE=`#ifdef USE_MORPHTARGETS
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
#endif`,lE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
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
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ME=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DE=`float getShadowMask() {
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
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`#include <common>
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
}`,JE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,tT=`#define DISTANCE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
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
}`,aT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define MATCAP
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
}`,uT=`#define MATCAP
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
}`,fT=`#define NORMAL
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
}`,dT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,pT=`#define PHONG
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
}`,mT=`#define STANDARD
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
}`,gT=`#define STANDARD
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
}`,_T=`#define TOON
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
}`,vT=`#define TOON
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
}`,xT=`uniform float size;
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
}`,ST=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,MT=`uniform vec3 color;
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
}`,ET=`uniform float rotation;
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
}`,TT=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:qy,alphahash_pars_fragment:Yy,alphamap_fragment:jy,alphamap_pars_fragment:Zy,alphatest_fragment:Ky,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:$y,batching_pars_vertex:tM,batching_vertex:eM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:aM,iridescence_fragment:rM,bumpmap_pars_fragment:sM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:uM,color_fragment:fM,color_pars_fragment:dM,color_pars_vertex:hM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:_M,displacementmap_pars_vertex:vM,displacementmap_vertex:xM,emissivemap_fragment:SM,emissivemap_pars_fragment:yM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:bM,envmap_pars_fragment:AM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:IM,envmap_vertex:CM,fog_vertex:wM,fog_pars_vertex:DM,fog_fragment:UM,fog_pars_fragment:LM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:OM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:PM,lights_pars_begin:BM,lights_toon_fragment:FM,lights_toon_pars_fragment:HM,lights_phong_fragment:GM,lights_phong_pars_fragment:VM,lights_physical_fragment:XM,lights_physical_pars_fragment:kM,lights_fragment_begin:WM,lights_fragment_maps:qM,lights_fragment_end:YM,logdepthbuf_fragment:jM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:QM,map_fragment:JM,map_pars_fragment:$M,map_particle_fragment:tE,map_particle_pars_fragment:eE,metalnessmap_fragment:nE,metalnessmap_pars_fragment:iE,morphinstance_vertex:aE,morphcolor_vertex:rE,morphnormal_vertex:sE,morphtarget_pars_vertex:oE,morphtarget_vertex:lE,normal_fragment_begin:cE,normal_fragment_maps:uE,normal_pars_fragment:fE,normal_pars_vertex:dE,normal_vertex:hE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:vE,opaque_fragment:xE,packing:SE,premultiplied_alpha_fragment:yE,project_vertex:ME,dithering_fragment:EE,dithering_pars_fragment:TE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:AE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:CE,shadowmap_vertex:wE,shadowmask_pars_fragment:DE,skinbase_vertex:UE,skinning_pars_vertex:LE,skinning_vertex:NE,skinnormal_vertex:OE,specularmap_fragment:zE,specularmap_pars_fragment:PE,tonemapping_fragment:BE,tonemapping_pars_fragment:IE,transmission_fragment:FE,transmission_pars_fragment:HE,uv_pars_fragment:GE,uv_pars_vertex:VE,uv_vertex:XE,worldpos_vertex:kE,background_vert:WE,background_frag:qE,backgroundCube_vert:YE,backgroundCube_frag:jE,cube_vert:ZE,cube_frag:KE,depth_vert:QE,depth_frag:JE,distanceRGBA_vert:$E,distanceRGBA_frag:tT,equirect_vert:eT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:aT,meshbasic_vert:rT,meshbasic_frag:sT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:dT,meshphong_vert:hT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:vT,points_vert:xT,points_frag:ST,shadow_vert:yT,shadow_frag:MT,sprite_vert:ET,sprite_frag:TT},Ft={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},da={basic:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:si([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:si([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:si([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:si([Ft.points,Ft.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:si([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:si([Ft.common,Ft.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:si([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:si([Ft.sprite,Ft.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:si([Ft.common,Ft.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:si([Ft.lights,Ft.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};da.physical={uniforms:si([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Bc={r:0,b:0,g:0},jr=new _a,bT=new Tn;function AT(o,e,i,r,l,u,d){const h=new Ie(0);let m=u===!0?0:1,p,v,_=null,S=0,M=null;function A(z){let R=z.isScene===!0?z.background:null;return R&&R.isTexture&&(R=(z.backgroundBlurriness>0?i:e).get(R)),R}function C(z){let R=!1;const X=A(z);X===null?x(h,m):X&&X.isColor&&(x(X,1),R=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,R){const X=A(R);X&&(X.isCubeTexture||X.mapping===jc)?(v===void 0&&(v=new zn(new lo(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:so(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),jr.copy(R.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(bT.makeRotationFromEuler(jr)),v.material.toneMapped=ke.getTransfer(X.colorSpace)!==an,(_!==X||S!==X.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,_=X,S=X.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new zn(new pi(2,2),new Tr({name:"BackgroundMaterial",uniforms:so(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=ke.getTransfer(X.colorSpace)!==an,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||S!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=X,S=X.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function x(z,R){z.getRGB(Bc,q_(o)),r.buffers.color.setClear(Bc.r,Bc.g,Bc.b,R,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,R=1){h.set(z),m=R,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,x(h,m)},render:C,addToRenderList:y,dispose:I}}function RT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(w,V,at,ut,gt){let dt=!1;const O=_(ut,at,V);u!==O&&(u=O,p(u.object)),dt=M(w,ut,at,gt),dt&&A(w,ut,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,R(w,V,at,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,V,at){const ut=at.wireframe===!0;let gt=r[w.id];gt===void 0&&(gt={},r[w.id]=gt);let dt=gt[V.id];dt===void 0&&(dt={},gt[V.id]=dt);let O=dt[ut];return O===void 0&&(O=S(m()),dt[ut]=O),O}function S(w){const V=[],at=[],ut=[];for(let gt=0;gt<i;gt++)V[gt]=0,at[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ut,object:w,attributes:{},index:null}}function M(w,V,at,ut){const gt=u.attributes,dt=V.attributes;let O=0;const j=at.getAttributes();for(const W in j)if(j[W].location>=0){const Tt=gt[W];let N=dt[W];if(N===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Tt===void 0||Tt.attribute!==N||N&&Tt.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==ut}function A(w,V,at,ut){const gt={},dt=V.attributes;let O=0;const j=at.getAttributes();for(const W in j)if(j[W].location>=0){let Tt=dt[W];Tt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const N={};N.attribute=Tt,Tt&&Tt.data&&(N.data=Tt.data),gt[W]=N,O++}u.attributes=gt,u.attributesNum=O,u.index=ut}function C(){const w=u.newAttributes;for(let V=0,at=w.length;V<at;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const at=u.newAttributes,ut=u.enabledAttributes,gt=u.attributeDivisors;at[w]=1,ut[w]===0&&(o.enableVertexAttribArray(w),ut[w]=1),gt[w]!==V&&(o.vertexAttribDivisor(w,V),gt[w]=V)}function I(){const w=u.newAttributes,V=u.enabledAttributes;for(let at=0,ut=V.length;at<ut;at++)V[at]!==w[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function z(w,V,at,ut,gt,dt,O){O===!0?o.vertexAttribIPointer(w,V,at,gt,dt):o.vertexAttribPointer(w,V,at,ut,gt,dt)}function R(w,V,at,ut){C();const gt=ut.attributes,dt=at.getAttributes(),O=V.defaultAttributeValues;for(const j in dt){const W=dt[j];if(W.location>=0){let pt=gt[j];if(pt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),pt!==void 0){const Tt=pt.normalized,N=pt.itemSize,$=e.get(pt);if($===void 0)continue;const St=$.buffer,Ct=$.type,Pt=$.bytesPerElement,K=Ct===o.INT||Ct===o.UNSIGNED_INT||pt.gpuType===Ch;if(pt.isInterleavedBufferAttribute){const st=pt.data,Lt=st.stride,Ht=pt.offset;if(st.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)x(W.location+kt,st.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let kt=0;kt<W.locationSize;kt++)y(W.location+kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let kt=0;kt<W.locationSize;kt++)z(W.location+kt,N/W.locationSize,Ct,Tt,Lt*Pt,(Ht+N/W.locationSize*kt)*Pt,K)}else{if(pt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)x(W.location+st,pt.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let st=0;st<W.locationSize;st++)y(W.location+st);o.bindBuffer(o.ARRAY_BUFFER,St);for(let st=0;st<W.locationSize;st++)z(W.location+st,N/W.locationSize,Ct,Tt,N*Pt,N/W.locationSize*st*Pt,K)}}else if(O!==void 0){const Tt=O[j];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(W.location,Tt);break;case 3:o.vertexAttrib3fv(W.location,Tt);break;case 4:o.vertexAttrib4fv(W.location,Tt);break;default:o.vertexAttrib1fv(W.location,Tt)}}}}I()}function X(){Z();for(const w in r){const V=r[w];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[w.id]}function P(w){for(const V in r){const at=r[V];if(at[w.id]===void 0)continue;const ut=at[w.id];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete at[w.id]}}function Z(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function CT(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A];i.update(M,r,1)}function m(p,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=v[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function wT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==ia&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Z=P===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ga&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ga&&!Z)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:R,vertexTextures:X,maxSamples:F}}function DT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Kr,h=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const A=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const I=u?0:r,z=I*4;let R=x.clippingState||null;m.value=R,R=v(A,S,z,M);for(let X=0;X!==z;++X)R[X]=i[X];x.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,M,A){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const x=M+C*4,I=S.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let z=0,R=M;z!==C;++z,R+=4)d.copy(_[z]).applyMatrix4(I,h),d.normal.toArray(y,R),y[R+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function UT(o){let e=new WeakMap;function i(d,h){return h===Yd?d.mapping=io:h===jd&&(d.mapping=ao),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Yd||h===jd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ry(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const $s=4,t_=[.125,.215,.35,.446,.526,.582],$r=20,Ud=new Gy,e_=new Ie;let Ld=null,Nd=0,Od=0,zd=!1;const Qr=(1+Math.sqrt(5))/2,Qs=1/Qr,n_=[new Q(-Qr,Qs,0),new Q(Qr,Qs,0),new Q(-Qs,0,Qr),new Q(Qs,0,Qr),new Q(0,Qr,-Qs),new Q(0,Qr,Qs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],LT=new Q;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=LT}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=zd,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===io||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ha,minFilter:ha,generateMipmaps:!1,type:ul,format:ia,colorSpace:ro,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NT(u)),this._blurMaterial=OT(u,e,i)}return l}_compileMaterial(e){const i=new zn(this._lodPlanes[0],e);this._renderer.compile(i,Ud)}_sceneToCubeUV(e,i,r,l,u){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(e_),_.toneMapping=Mr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const C=new fa({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),y=new zn(new lo,C);let x=!1;const I=e.background;I?I.isColor&&(C.color.copy(I),e.background=null,x=!0):(C.color.copy(e_),x=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[z],u.y,u.z)):R===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[z]));const X=this._cubeSize;Ic(l,R*X,z>2?X:0,X,X),_.setRenderTarget(l),x&&_.render(y,m),_.render(e,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=S,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===io||e.mapping===ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new zn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ud)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=n_[(l-u-1)%n_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new zn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*$r-1),C=u/A,y=isFinite(u)?1+Math.floor(v*C):$r;y>$r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const x=[];let I=0;for(let P=0;P<$r;++P){const Z=P/C,D=Math.exp(-Z*Z/2);x.push(D),P===0?I+=D:P<y&&(I+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:z}=this;S.dTheta.value=A,S.mipInt.value=z-r;const R=this._sizeLods[l],X=3*R*(l>z-$s?l-z+$s:0),F=4*(this._cubeSize-R);Ic(i,X,F,3*R,2*R),m.setRenderTarget(i),m.render(_,Ud)}}function NT(o){const e=[],i=[],r=[];let l=o;const u=o-$s+1+t_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-$s?m=t_[d-o+$s-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,A=6,C=3,y=2,x=1,I=new Float32Array(C*A*M),z=new Float32Array(y*A*M),R=new Float32Array(x*A*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,Z=F>2?0:-1,D=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];I.set(D,C*A*F),z.set(S,y*A*F);const w=[F,F,F,F,F,F];R.set(w,x*A*F)}const X=new ss;X.setAttribute("position",new ma(I,C)),X.setAttribute("uv",new ma(z,y)),X.setAttribute("faceIndex",new ma(R,x)),e.push(X),l>$s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function a_(o,e,i){const r=new rs(o,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function OT(o,e,i){const r=new Float32Array($r),l=new Q(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function r_(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function s_(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function zT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Yd||m===jd,v=m===io||m===ao;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new i_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new i_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function PT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function BT(o,e,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,A=_.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let z=0,R=I.length;z<R;z+=3){const X=I[z+0],F=I[z+1],P=I[z+2];S.push(X,F,F,P,P,X)}}else if(A!==void 0){const I=A.array;C=A.version;for(let z=0,R=I.length/3-1;z<R;z+=3){const X=z+0,F=z+1,P=z+2;S.push(X,F,F,P,P,X)}}else return;const y=new(H_(S)?W_:k_)(S,1);y.version=C;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function IT(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*d,A),i.update(M,r,A))}function v(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let x=0;x<A;x++)y+=M[x];i.update(y,r,1)}function _(S,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,A);let x=0;for(let I=0;I<A;I++)x+=M[I]*C[I];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function FT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HT(o,e,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let w=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;A===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let X=h.attributes.position.count*R,F=1;X>e.maxTextureSize&&(F=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const P=new Float32Array(X*F*4*_),Z=new G_(P,X,F,_);Z.type=Ga,Z.needsUpdate=!0;const D=R*4;for(let V=0;V<_;V++){const at=x[V],ut=I[V],gt=z[V],dt=X*F*4*V;for(let O=0;O<at.count;O++){const j=O*D;A===!0&&(l.fromBufferAttribute(at,O),P[dt+j+0]=l.x,P[dt+j+1]=l.y,P[dt+j+2]=l.z,P[dt+j+3]=0),C===!0&&(l.fromBufferAttribute(ut,O),P[dt+j+4]=l.x,P[dt+j+5]=l.y,P[dt+j+6]=l.z,P[dt+j+7]=0),y===!0&&(l.fromBufferAttribute(gt,O),P[dt+j+8]=l.x,P[dt+j+9]=l.y,P[dt+j+10]=l.z,P[dt+j+11]=gt.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new We(X,F)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function GT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const $_=new ii,o_=new Z_(1,1),tv=new G_,ev=new cy,nv=new j_,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);function co(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=l_[l];if(u===void 0&&(u=new Float32Array(l),l_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function Fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Zc(o,e){let i=c_[e];i===void 0&&(i=new Int32Array(e),c_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function VT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;o.uniform2fv(this.addr,e),Hn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Fn(i,e))return;o.uniform3fv(this.addr,e),Hn(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;o.uniform4fv(this.addr,e),Hn(i,e)}}function qT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Hn(i,e)}else{if(Fn(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),Hn(i,r)}}function YT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Hn(i,e)}else{if(Fn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),Hn(i,r)}}function jT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Hn(i,e)}else{if(Fn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),Hn(i,r)}}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;o.uniform2iv(this.addr,e),Hn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;o.uniform3iv(this.addr,e),Hn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;o.uniform4iv(this.addr,e),Hn(i,e)}}function $T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;o.uniform2uiv(this.addr,e),Hn(i,e)}}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;o.uniform3uiv(this.addr,e),Hn(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;o.uniform4uiv(this.addr,e),Hn(i,e)}}function ib(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=F_,u=o_):u=$_,i.setTexture2D(e||u,l)}function ab(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ev,l)}function rb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||nv,l)}function sb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||tv,l)}function ob(o){switch(o){case 5126:return VT;case 35664:return XT;case 35665:return kT;case 35666:return WT;case 35674:return qT;case 35675:return YT;case 35676:return jT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return tb;case 36295:return eb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return sb}}function lb(o,e){o.uniform1fv(this.addr,e)}function cb(o,e){const i=co(e,this.size,2);o.uniform2fv(this.addr,i)}function ub(o,e){const i=co(e,this.size,3);o.uniform3fv(this.addr,i)}function fb(o,e){const i=co(e,this.size,4);o.uniform4fv(this.addr,i)}function db(o,e){const i=co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function hb(o,e){const i=co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function pb(o,e){const i=co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function mb(o,e){o.uniform1iv(this.addr,e)}function gb(o,e){o.uniform2iv(this.addr,e)}function _b(o,e){o.uniform3iv(this.addr,e)}function vb(o,e){o.uniform4iv(this.addr,e)}function xb(o,e){o.uniform1uiv(this.addr,e)}function Sb(o,e){o.uniform2uiv(this.addr,e)}function yb(o,e){o.uniform3uiv(this.addr,e)}function Mb(o,e){o.uniform4uiv(this.addr,e)}function Eb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Fn(r,u)||(o.uniform1iv(this.addr,u),Hn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||$_,u[d])}function Tb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Fn(r,u)||(o.uniform1iv(this.addr,u),Hn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ev,u[d])}function bb(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Fn(r,u)||(o.uniform1iv(this.addr,u),Hn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||nv,u[d])}function Ab(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Fn(r,u)||(o.uniform1iv(this.addr,u),Hn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||tv,u[d])}function Rb(o){switch(o){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return fb;case 35674:return db;case 35675:return hb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return Sb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Ab}}class Cb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ob(i.type)}}class wb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Rb(i.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function h_(o,e){o.seq.push(e),o.map[e.id]=e}function Ub(o,e,i){const r=o.name,l=r.length;for(Pd.lastIndex=0;;){const u=Pd.exec(r),d=Pd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){h_(i,p===void 0?new Cb(h,o,e):new wb(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new Db(h),h_(i,_)),i=_}}}class kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Ub(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function p_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Lb=37297;let Nb=0;function Ob(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const m_=new Se;function zb(o){ke._getMatrix(m_,ke.workingColorSpace,o);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(o)){case Wc:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function g_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+Ob(o.getShaderSource(e),h)}else return u}function Pb(o,e){const i=zb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Bb(o,e){let i;switch(e){case BS:i="Linear";break;case IS:i="Reinhard";break;case FS:i="Cineon";break;case HS:i="ACESFilmic";break;case VS:i="AgX";break;case XS:i="Neutral";break;case GS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new Q;function Ib(){ke.getLuminanceCoefficients(Fc);const o=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function Hb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Gb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function il(o){return o!==""}function __(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(Vb,kb)}const Xb=new Map;function kb(o,e){let i=ye[e];if(i===void 0){const r=Xb.get(e);if(r!==void 0)i=ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Th(i)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(o){return o.replace(Wb,qb)}function qb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function S_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Yb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ha&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case io:case ao:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function Kb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function Qb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Jb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Yb(i),p=jb(i),v=Zb(i),_=Kb(i),S=Qb(i),M=Fb(i),A=Hb(u),C=l.createProgram();let y,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(il).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(il).join(`
`),x.length>0&&(x+=`
`)):(y=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),x=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Mr?"#define TONE_MAPPING":"",i.toneMapping!==Mr?ye.tonemapping_pars_fragment:"",i.toneMapping!==Mr?Bb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Pb("linearToOutputTexel",i.outputColorSpace),Ib(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),d=Th(d),d=__(d,i),d=v_(d,i),h=Th(h),h=__(h,i),h=v_(h,i),d=x_(d),h=x_(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=I+y+d,R=I+x+h,X=p_(l,l.VERTEX_SHADER,z),F=p_(l,l.FRAGMENT_SHADER,R);l.attachShader(C,X),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(X)||"",gt=l.getShaderInfoLog(F)||"",dt=at.trim(),O=ut.trim(),j=gt.trim();let W=!0,pt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,F);else{const Tt=g_(l,X,"vertex"),N=g_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+dt+`
`+Tt+`
`+N)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(O===""||j==="")&&(pt=!1);pt&&(V.diagnostics={runnable:W,programLog:dt,vertexShader:{log:O,prefix:y},fragmentShader:{log:j,prefix:x}})}l.deleteShader(X),l.deleteShader(F),Z=new kc(l,C),D=Gb(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&P(this),Z};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Lb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=F,this}let $b=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new e1(e),i.set(e,r)),r}}class e1{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function n1(o,e,i,r,l,u,d){const h=new V_,m=new t1,p=new Set,v=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,V,at,ut){const gt=at.fog,dt=ut.geometry,O=D.isMeshStandardMaterial?at.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),W=j&&j.mapping===jc?j.image.height:null,pt=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Tt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=Tt!==void 0?Tt.length:0;let $=0;dt.morphAttributes.position!==void 0&&($=1),dt.morphAttributes.normal!==void 0&&($=2),dt.morphAttributes.color!==void 0&&($=3);let St,Ct,Pt,K;if(pt){const Ee=da[pt];St=Ee.vertexShader,Ct=Ee.fragmentShader}else St=D.vertexShader,Ct=D.fragmentShader,m.update(D),Pt=m.getVertexShaderID(D),K=m.getFragmentShaderID(D);const st=o.getRenderTarget(),Lt=o.state.buffers.depth.getReversed(),Ht=ut.isInstancedMesh===!0,kt=ut.isBatchedMesh===!0,de=!!D.map,oe=!!D.matcap,L=!!j,ce=!!D.aoMap,fe=!!D.lightMap,ee=!!D.bumpMap,qt=!!D.normalMap,ze=!!D.displacementMap,Vt=!!D.emissiveMap,ue=!!D.metalnessMap,sn=!!D.roughnessMap,$e=D.anisotropy>0,U=D.clearcoat>0,E=D.dispersion>0,J=D.iridescence>0,lt=D.sheen>0,xt=D.transmission>0,ct=$e&&!!D.anisotropyMap,te=U&&!!D.clearcoatMap,wt=U&&!!D.clearcoatNormalMap,Qt=U&&!!D.clearcoatRoughnessMap,Jt=J&&!!D.iridescenceMap,Mt=J&&!!D.iridescenceThicknessMap,Ut=lt&&!!D.sheenColorMap,Kt=lt&&!!D.sheenRoughnessMap,Bt=!!D.specularMap,Ot=!!D.specularColorMap,le=!!D.specularIntensityMap,G=xt&&!!D.transmissionMap,Et=xt&&!!D.thicknessMap,At=!!D.gradientMap,Gt=!!D.alphaMap,yt=D.alphaTest>0,mt=!!D.alphaHash,Wt=!!D.extensions;let he=Mr;D.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=o.toneMapping);const De={shaderID:pt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Ct,defines:D.defines,customVertexShaderID:Pt,customFragmentShaderID:K,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:kt,batchingColor:kt&&ut._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&ut.instanceColor!==null,instancingMorph:Ht&&ut.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ro,alphaToCoverage:!!D.alphaToCoverage,map:de,matcap:oe,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:fe,bumpMap:ee,normalMap:qt,displacementMap:S&&ze,emissiveMap:Vt,normalMapObjectSpace:qt&&D.normalMapType===YS,normalMapTangentSpace:qt&&D.normalMapType===I_,metalnessMap:ue,roughnessMap:sn,anisotropy:$e,anisotropyMap:ct,clearcoat:U,clearcoatMap:te,clearcoatNormalMap:wt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:J,iridescenceMap:Jt,iridescenceThicknessMap:Mt,sheen:lt,sheenColorMap:Ut,sheenRoughnessMap:Kt,specularMap:Bt,specularColorMap:Ot,specularIntensityMap:le,transmission:xt,transmissionMap:G,thicknessMap:Et,gradientMap:At,opaque:D.transparent===!1&&D.blending===to&&D.alphaToCoverage===!1,alphaMap:Gt,alphaTest:yt,alphaHash:mt,combine:D.combine,mapUv:de&&C(D.map.channel),aoMapUv:ce&&C(D.aoMap.channel),lightMapUv:fe&&C(D.lightMap.channel),bumpMapUv:ee&&C(D.bumpMap.channel),normalMapUv:qt&&C(D.normalMap.channel),displacementMapUv:ze&&C(D.displacementMap.channel),emissiveMapUv:Vt&&C(D.emissiveMap.channel),metalnessMapUv:ue&&C(D.metalnessMap.channel),roughnessMapUv:sn&&C(D.roughnessMap.channel),anisotropyMapUv:ct&&C(D.anisotropyMap.channel),clearcoatMapUv:te&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&C(D.sheenRoughnessMap.channel),specularMapUv:Bt&&C(D.specularMap.channel),specularColorMapUv:Ot&&C(D.specularColorMap.channel),specularIntensityMapUv:le&&C(D.specularIntensityMap.channel),transmissionMapUv:G&&C(D.transmissionMap.channel),thicknessMapUv:Et&&C(D.thicknessMap.channel),alphaMapUv:Gt&&C(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(qt||$e),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!dt.attributes.uv&&(de||Gt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Lt,skinning:ut.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,decodeVideoTexture:de&&D.map.isVideoTexture===!0&&ke.getTransfer(D.map.colorSpace)===an,decodeVideoTextureEmissive:Vt&&D.emissiveMap.isVideoTexture===!0&&ke.getTransfer(D.emissiveMap.colorSpace)===an,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Jn,flipSided:D.side===gi,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Wt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&D.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(I(w,D),z(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function I(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function z(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const w=A[D.type];let V;if(w){const at=da[w];V=Ey.clone(at.uniforms)}else V=D.uniforms;return V}function X(D,w){let V;for(let at=0,ut=v.length;at<ut;at++){const gt=v[at];if(gt.cacheKey===w){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new Jb(o,w,D,u),v.push(V)),V}function F(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function P(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:X,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:Z}}function i1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function a1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function M_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,M,A,C,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:A,renderOrder:_.renderOrder,z:C,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function h(_,S,M,A,C,y){const x=d(_,S,M,A,C,y);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,A,C,y){const x=d(_,S,M,A,C,y);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||a1),r.length>1&&r.sort(S||y_),l.length>1&&l.sort(S||y_)}function v(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function r1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new M_,o.set(r,[d])):l>=u.length?(d=new M_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function s1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Ie};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function o1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let l1=0;function c1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function u1(o){const e=new s1,i=o1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new Tn,d=new Tn;function h(p){let v=0,_=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,x=0,I=0,z=0,R=0,X=0,F=0,P=0;p.sort(c1);for(let D=0,w=p.length;D<w;D++){const V=p[D],at=V.color,ut=V.intensity,gt=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ut,_+=at.g*ut,S+=at.b*ut;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],ut);P++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,W=i.get(V);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=V.shadow.matrix,I++}r.directional[M]=O,M++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(at).multiplyScalar(ut),O.distance=gt,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[C]=O;const j=V.shadow;if(V.map&&(r.spotLightMap[X]=V.map,X++,j.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=j.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=dt,R++}C++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(at).multiplyScalar(ut),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=O,y++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const j=V.shadow,W=i.get(V);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,r.pointShadow[A]=W,r.pointShadowMap[A]=dt,r.pointShadowMatrix[A]=V.shadow.matrix,z++}r.point[A]=O,A++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ut),O.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[x]=O,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==C||Z.rectAreaLength!==y||Z.hemiLength!==x||Z.numDirectionalShadows!==I||Z.numPointShadows!==z||Z.numSpotShadows!==R||Z.numSpotMaps!==X||Z.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=R+X-F,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=C,Z.rectAreaLength=y,Z.hemiLength=x,Z.numDirectionalShadows=I,Z.numPointShadows=z,Z.numSpotShadows=R,Z.numSpotMaps=X,Z.numLightProbes=P,r.version=l1++)}function m(p,v){let _=0,S=0,M=0,A=0,C=0;const y=v.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const z=p[x];if(z.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),_++}else if(z.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const R=r.rectArea[A];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),d.identity(),u.copy(z.matrixWorld),u.premultiply(y),d.extractRotation(u),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),A++}else if(z.isPointLight){const R=r.point[S];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(z.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function E_(o){const e=new u1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function f1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new E_(o),e.set(l,[h])):u>=d.length?(h=new E_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function p1(o,e,i){let r=new Bh;const l=new We,u=new We,d=new rn,h=new Ny({depthPacking:qS}),m=new Oy,p={},v=i.maxTextureSize,_={[Er]:gi,[gi]:Er,[Jn]:Jn},S=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new ss;A.setAttribute("position",new ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new zn(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C_;let x=this.type;this.render=function(F,P,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(yr),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ut=x!==Ha&&this.type===Ha,gt=x===Ha&&this.type!==Ha;for(let dt=0,O=F.length;dt<O;dt++){const j=F[dt],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const pt=W.getFrameExtents();if(l.multiply(pt),u.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/pt.x),l.x=u.x*pt.x,W.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/pt.y),l.y=u.y*pt.y,W.mapSize.y=u.y)),W.map===null||ut===!0||gt===!0){const N=this.type!==Ha?{minFilter:Xe,magFilter:Xe}:{};W.map!==null&&W.map.dispose(),W.map=new rs(l.x,l.y,N),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const Tt=W.getViewportCount();for(let N=0;N<Tt;N++){const $=W.getViewport(N);d.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),at.viewport(d),W.updateMatrices(j,N),r=W.getFrustum(),R(P,Z,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Ha&&I(W,Z),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,V)};function I(F,P){const Z=e.update(C);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new rs(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,Z,S,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,Z,M,C,null)}function z(F,P,Z,D){let w=null;const V=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)w=V;else if(w=Z.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const at=w.uuid,ut=P.uuid;let gt=p[at];gt===void 0&&(gt={},p[at]=gt);let dt=gt[ut];dt===void 0&&(dt=w.clone(),gt[ut]=dt,P.addEventListener("dispose",X)),w=dt}if(w.visible=P.visible,w.wireframe=P.wireframe,D===Ha?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=o.properties.get(w);at.light=Z}return w}function R(F,P,Z,D,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Ha)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ut=e.update(F),gt=F.material;if(Array.isArray(gt)){const dt=ut.groups;for(let O=0,j=dt.length;O<j;O++){const W=dt[O],pt=gt[W.materialIndex];if(pt&&pt.visible){const Tt=z(F,pt,D,w);F.onBeforeShadow(o,F,P,Z,ut,Tt,W),o.renderBufferDirect(Z,null,ut,Tt,F,W),F.onAfterShadow(o,F,P,Z,ut,Tt,W)}}}else if(gt.visible){const dt=z(F,gt,D,w);F.onBeforeShadow(o,F,P,Z,ut,dt,null),o.renderBufferDirect(Z,null,ut,dt,F,null),F.onAfterShadow(o,F,P,Z,ut,dt,null)}}const at=F.children;for(let ut=0,gt=at.length;ut<gt;ut++)R(at[ut],P,Z,D,w)}function X(F){F.target.removeEventListener("dispose",X);for(const Z in p){const D=p[Z],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const m1={[Hd]:Gd,[Vd]:Wd,[Xd]:qd,[no]:kd,[Gd]:Hd,[Wd]:Vd,[qd]:Xd,[kd]:no};function g1(o,e){function i(){let G=!1;const Et=new rn;let At=null;const Gt=new rn(0,0,0,0);return{setMask:function(yt){At!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){G=yt},setClear:function(yt,mt,Wt,he,De){De===!0&&(yt*=he,mt*=he,Wt*=he),Et.set(yt,mt,Wt,he),Gt.equals(Et)===!1&&(o.clearColor(yt,mt,Wt,he),Gt.copy(Et))},reset:function(){G=!1,At=null,Gt.set(-1,0,0,0)}}}function r(){let G=!1,Et=!1,At=null,Gt=null,yt=null;return{setReversed:function(mt){if(Et!==mt){const Wt=e.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Et=mt;const he=yt;yt=null,this.setClear(he)}},getReversed:function(){return Et},setTest:function(mt){mt?st(o.DEPTH_TEST):Lt(o.DEPTH_TEST)},setMask:function(mt){At!==mt&&!G&&(o.depthMask(mt),At=mt)},setFunc:function(mt){if(Et&&(mt=m1[mt]),Gt!==mt){switch(mt){case Hd:o.depthFunc(o.NEVER);break;case Gd:o.depthFunc(o.ALWAYS);break;case Vd:o.depthFunc(o.LESS);break;case no:o.depthFunc(o.LEQUAL);break;case Xd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Wd:o.depthFunc(o.GREATER);break;case qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=mt}},setLocked:function(mt){G=mt},setClear:function(mt){yt!==mt&&(Et&&(mt=1-mt),o.clearDepth(mt),yt=mt)},reset:function(){G=!1,At=null,Gt=null,yt=null,Et=!1}}}function l(){let G=!1,Et=null,At=null,Gt=null,yt=null,mt=null,Wt=null,he=null,De=null;return{setTest:function(Ee){G||(Ee?st(o.STENCIL_TEST):Lt(o.STENCIL_TEST))},setMask:function(Ee){Et!==Ee&&!G&&(o.stencilMask(Ee),Et=Ee)},setFunc:function(Ee,Wn,Pe){(At!==Ee||Gt!==Wn||yt!==Pe)&&(o.stencilFunc(Ee,Wn,Pe),At=Ee,Gt=Wn,yt=Pe)},setOp:function(Ee,Wn,Pe){(mt!==Ee||Wt!==Wn||he!==Pe)&&(o.stencilOp(Ee,Wn,Pe),mt=Ee,Wt=Wn,he=Pe)},setLocked:function(Ee){G=Ee},setClear:function(Ee){De!==Ee&&(o.clearStencil(Ee),De=Ee)},reset:function(){G=!1,Et=null,At=null,Gt=null,yt=null,mt=null,Wt=null,he=null,De=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],A=null,C=!1,y=null,x=null,I=null,z=null,R=null,X=null,F=null,P=new Ie(0,0,0),Z=0,D=!1,w=null,V=null,at=null,ut=null,gt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=j>=2);let pt=null,Tt={};const N=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),St=new rn().fromArray(N),Ct=new rn().fromArray($);function Pt(G,Et,At,Gt){const yt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(G,mt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<At;Wt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Et,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Et+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return mt}const K={};K[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),st(o.DEPTH_TEST),d.setFunc(no),ee(!1),qt(b0),st(o.CULL_FACE),ce(yr);function st(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function Lt(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Ht(G,Et){return _[G]!==Et?(o.bindFramebuffer(G,Et),_[G]=Et,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Et),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Et),!0):!1}function kt(G,Et){let At=M,Gt=!1;if(G){At=S.get(Et),At===void 0&&(At=[],S.set(Et,At));const yt=G.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Wt=yt.length;mt<Wt;mt++)At[mt]=o.COLOR_ATTACHMENT0+mt;At.length=yt.length,Gt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(At)}function de(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const oe={[Jr]:o.FUNC_ADD,[vS]:o.FUNC_SUBTRACT,[xS]:o.FUNC_REVERSE_SUBTRACT};oe[SS]=o.MIN,oe[yS]=o.MAX;const L={[MS]:o.ZERO,[ES]:o.ONE,[TS]:o.SRC_COLOR,[Id]:o.SRC_ALPHA,[DS]:o.SRC_ALPHA_SATURATE,[CS]:o.DST_COLOR,[AS]:o.DST_ALPHA,[bS]:o.ONE_MINUS_SRC_COLOR,[Fd]:o.ONE_MINUS_SRC_ALPHA,[wS]:o.ONE_MINUS_DST_COLOR,[RS]:o.ONE_MINUS_DST_ALPHA,[US]:o.CONSTANT_COLOR,[LS]:o.ONE_MINUS_CONSTANT_COLOR,[NS]:o.CONSTANT_ALPHA,[OS]:o.ONE_MINUS_CONSTANT_ALPHA};function ce(G,Et,At,Gt,yt,mt,Wt,he,De,Ee){if(G===yr){C===!0&&(Lt(o.BLEND),C=!1);return}if(C===!1&&(st(o.BLEND),C=!0),G!==_S){if(G!==y||Ee!==D){if((x!==Jr||R!==Jr)&&(o.blendEquation(o.FUNC_ADD),x=Jr,R=Jr),Ee)switch(G){case to:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFunc(o.ONE,o.ONE);break;case R0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case to:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,z=null,X=null,F=null,P.set(0,0,0),Z=0,y=G,D=Ee}return}yt=yt||Et,mt=mt||At,Wt=Wt||Gt,(Et!==x||yt!==R)&&(o.blendEquationSeparate(oe[Et],oe[yt]),x=Et,R=yt),(At!==I||Gt!==z||mt!==X||Wt!==F)&&(o.blendFuncSeparate(L[At],L[Gt],L[mt],L[Wt]),I=At,z=Gt,X=mt,F=Wt),(he.equals(P)===!1||De!==Z)&&(o.blendColor(he.r,he.g,he.b,De),P.copy(he),Z=De),y=G,D=!1}function fe(G,Et){G.side===Jn?Lt(o.CULL_FACE):st(o.CULL_FACE);let At=G.side===gi;Et&&(At=!At),ee(At),G.blending===to&&G.transparent===!1?ce(yr):ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Gt=G.stencilWrite;h.setTest(Gt),Gt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Vt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):Lt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){w!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),w=G)}function qt(G){G!==pS?(st(o.CULL_FACE),G!==V&&(G===b0?o.cullFace(o.BACK):G===mS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Lt(o.CULL_FACE),V=G}function ze(G){G!==at&&(O&&o.lineWidth(G),at=G)}function Vt(G,Et,At){G?(st(o.POLYGON_OFFSET_FILL),(ut!==Et||gt!==At)&&(o.polygonOffset(Et,At),ut=Et,gt=At)):Lt(o.POLYGON_OFFSET_FILL)}function ue(G){G?st(o.SCISSOR_TEST):Lt(o.SCISSOR_TEST)}function sn(G){G===void 0&&(G=o.TEXTURE0+dt-1),pt!==G&&(o.activeTexture(G),pt=G)}function $e(G,Et,At){At===void 0&&(pt===null?At=o.TEXTURE0+dt-1:At=pt);let Gt=Tt[At];Gt===void 0&&(Gt={type:void 0,texture:void 0},Tt[At]=Gt),(Gt.type!==G||Gt.texture!==Et)&&(pt!==At&&(o.activeTexture(At),pt=At),o.bindTexture(G,Et||K[G]),Gt.type=G,Gt.texture=Et)}function U(){const G=Tt[pt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(G){St.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),St.copy(G))}function Kt(G){Ct.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ct.copy(G))}function Bt(G,Et){let At=p.get(Et);At===void 0&&(At=new WeakMap,p.set(Et,At));let Gt=At.get(G);Gt===void 0&&(Gt=o.getUniformBlockIndex(Et,G.name),At.set(G,Gt))}function Ot(G,Et){const Gt=p.get(Et).get(G);m.get(Et)!==Gt&&(o.uniformBlockBinding(Et,Gt,G.__bindingPointIndex),m.set(Et,Gt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},pt=null,Tt={},_={},S=new WeakMap,M=[],A=null,C=!1,y=null,x=null,I=null,z=null,R=null,X=null,F=null,P=new Ie(0,0,0),Z=0,D=!1,w=null,V=null,at=null,ut=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:st,disable:Lt,bindFramebuffer:Ht,drawBuffers:kt,useProgram:de,setBlending:ce,setMaterial:fe,setFlipSided:ee,setCullFace:qt,setLineWidth:ze,setPolygonOffset:Vt,setScissorTest:ue,activeTexture:sn,bindTexture:$e,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Jt,texImage3D:Mt,updateUBOMapping:Bt,uniformBlockBinding:Ot,texStorage2D:wt,texStorage3D:Qt,texSubImage2D:lt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:te,scissor:Ut,viewport:Kt,reset:le}}function _1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new We,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):ll("canvas")}function C(U,E,J){let lt=1;const xt=$e(U);if((xt.width>J||xt.height>J)&&(lt=J/Math.max(xt.width,xt.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(lt*xt.width),te=Math.floor(lt*xt.height);_===void 0&&(_=A(ct,te));const wt=E?A(ct,te):_;return wt.width=ct,wt.height=te,wt.getContext("2d").drawImage(U,0,0,ct,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+te+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,E,J,lt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=E;if(E===o.RED&&(J===o.FLOAT&&(ct=o.R32F),J===o.HALF_FLOAT&&(ct=o.R16F),J===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.R8UI),J===o.UNSIGNED_SHORT&&(ct=o.R16UI),J===o.UNSIGNED_INT&&(ct=o.R32UI),J===o.BYTE&&(ct=o.R8I),J===o.SHORT&&(ct=o.R16I),J===o.INT&&(ct=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ct=o.RG32F),J===o.HALF_FLOAT&&(ct=o.RG16F),J===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RG8UI),J===o.UNSIGNED_SHORT&&(ct=o.RG16UI),J===o.UNSIGNED_INT&&(ct=o.RG32UI),J===o.BYTE&&(ct=o.RG8I),J===o.SHORT&&(ct=o.RG16I),J===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),J===o.UNSIGNED_INT&&(ct=o.RGB32UI),J===o.BYTE&&(ct=o.RGB8I),J===o.SHORT&&(ct=o.RGB16I),J===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),J===o.UNSIGNED_INT&&(ct=o.RGBA32UI),J===o.BYTE&&(ct=o.RGBA8I),J===o.SHORT&&(ct=o.RGBA16I),J===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const te=xt?Wc:ke.getTransfer(lt);J===o.FLOAT&&(ct=o.RGBA32F),J===o.HALF_FLOAT&&(ct=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ct=te===an?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function R(U,E){let J;return U?E===null||E===as||E===rl?J=o.DEPTH24_STENCIL8:E===Ga?J=o.DEPTH32F_STENCIL8:E===al&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===as||E===rl?J=o.DEPTH_COMPONENT24:E===Ga?J=o.DEPTH_COMPONENT32F:E===al&&(J=o.DEPTH_COMPONENT16),J}function X(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xe&&U.minFilter!==ha?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&v.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),w(E)}function Z(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,lt=S.get(J);if(lt){const xt=lt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(lt).length===0&&S.delete(J)}r.remove(U)}function D(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,lt=S.get(J);delete lt[E.__cacheKey],d.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let xt=0;xt<E.__webglFramebuffer[lt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let lt=0,xt=J.length;lt<xt;lt++){const ct=r.get(J[lt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(J[lt])}r.remove(U)}let V=0;function at(){V=0}function ut(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function dt(U,E){const J=r.get(U);if(U.isVideoTexture&&ue(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const lt=U.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function O(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){K(J,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function j(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){K(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function W(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){st(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const pt={[ts]:o.REPEAT,[es]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},Tt={[Xe]:o.NEAREST,[kS]:o.NEAREST_MIPMAP_NEAREST,[xc]:o.NEAREST_MIPMAP_LINEAR,[ha]:o.LINEAR,[nd]:o.LINEAR_MIPMAP_NEAREST,[ns]:o.LINEAR_MIPMAP_LINEAR},N={[jS]:o.NEVER,[ty]:o.ALWAYS,[ZS]:o.LESS,[F_]:o.LEQUAL,[KS]:o.EQUAL,[$S]:o.GEQUAL,[QS]:o.GREATER,[JS]:o.NOTEQUAL};function $(U,E){if(E.type===Ga&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ha||E.magFilter===nd||E.magFilter===xc||E.magFilter===ns||E.minFilter===ha||E.minFilter===nd||E.minFilter===xc||E.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,pt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,pt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,pt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xe||E.minFilter!==xc&&E.minFilter!==ns||E.type===Ga&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const lt=E.source;let xt=S.get(lt);xt===void 0&&(xt={},S.set(lt,xt));const ct=gt(E);if(ct!==U.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),xt[ct].usedTimes++;const te=xt[U.__cacheKey];te!==void 0&&(xt[U.__cacheKey].usedTimes--,te.usedTimes===0&&D(E)),U.__cacheKey=ct,U.__webglTexture=xt[ct].texture}return J}function Ct(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Pt(U,E,J,lt){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,lt,E.data);else{ct.sort((Mt,Ut)=>Mt.start-Ut.start);let te=0;for(let Mt=1;Mt<ct.length;Mt++){const Ut=ct[te],Kt=ct[Mt],Bt=Ut.start+Ut.count,Ot=Ct(Kt.start,E.width,4),le=Ct(Ut.start,E.width,4);Kt.start<=Bt+1&&Ot===le&&Ct(Kt.start+Kt.count-1,E.width,4)===Ot?Ut.count=Math.max(Ut.count,Kt.start+Kt.count-Ut.start):(++te,ct[te]=Kt)}ct.length=te+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ut=ct.length;Mt<Ut;Mt++){const Kt=ct[Mt],Bt=Math.floor(Kt.start/4),Ot=Math.ceil(Kt.count/4),le=Bt%E.width,G=Math.floor(Bt/E.width),Et=Ot,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,le,G,Et,At,J,lt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function K(U,E,J){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const xt=St(U,E),ct=E.source;i.bindTexture(lt,U.__webglTexture,o.TEXTURE0+J);const te=r.get(ct);if(ct.version!==te.__version||xt===!0){i.activeTexture(o.TEXTURE0+J);const wt=ke.getPrimaries(ke.workingColorSpace),Qt=E.colorSpace===Sr?null:ke.getPrimaries(E.colorSpace),Jt=E.colorSpace===Sr||wt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Mt=C(E.image,!1,l.maxTextureSize);Mt=sn(E,Mt);const Ut=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Bt=z(E.internalFormat,Ut,Kt,E.colorSpace,E.isVideoTexture);$(lt,E);let Ot;const le=E.mipmaps,G=E.isVideoTexture!==!0,Et=te.__version===void 0||xt===!0,At=ct.dataReady,Gt=X(E,Mt);if(E.isDepthTexture)Bt=R(E.format===ol,E.type),Et&&(G?i.texStorage2D(o.TEXTURE_2D,1,Bt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,Ut,Kt,null));else if(E.isDataTexture)if(le.length>0){G&&Et&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,le[0].width,le[0].height);for(let yt=0,mt=le.length;yt<mt;yt++)Ot=le[yt],G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Ut,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ot.width,Ot.height,0,Ut,Kt,Ot.data);E.generateMipmaps=!1}else G?(Et&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,Mt.width,Mt.height),At&&Pt(E,Mt,Ut,Kt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,Ut,Kt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,le[0].width,le[0].height,Mt.depth);for(let yt=0,mt=le.length;yt<mt;yt++)if(Ot=le[yt],E.format!==ia)if(Ut!==null)if(G){if(At)if(E.layerUpdates.size>0){const Wt=$0(Ot.width,Ot.height,E.format,E.type);for(const he of E.layerUpdates){const De=Ot.data.subarray(he*Wt/Ot.data.BYTES_PER_ELEMENT,(he+1)*Wt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,he,Ot.width,Ot.height,1,Ut,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,Ut,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,Ut,Kt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Ot.width,Ot.height,Mt.depth,0,Ut,Kt,Ot.data)}else{G&&Et&&i.texStorage2D(o.TEXTURE_2D,Gt,Bt,le[0].width,le[0].height);for(let yt=0,mt=le.length;yt<mt;yt++)Ot=le[yt],E.format!==ia?Ut!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Ut,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Ut,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ot.width,Ot.height,0,Ut,Kt,Ot.data)}else if(E.isDataArrayTexture)if(G){if(Et&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,Bt,Mt.width,Mt.height,Mt.depth),At)if(E.layerUpdates.size>0){const yt=$0(Mt.width,Mt.height,E.format,E.type);for(const mt of E.layerUpdates){const Wt=Mt.data.subarray(mt*yt/Mt.data.BYTES_PER_ELEMENT,(mt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Mt.width,Mt.height,1,Ut,Kt,Wt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Kt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Mt.width,Mt.height,Mt.depth,0,Ut,Kt,Mt.data);else if(E.isData3DTexture)G?(Et&&i.texStorage3D(o.TEXTURE_3D,Gt,Bt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Kt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Mt.width,Mt.height,Mt.depth,0,Ut,Kt,Mt.data);else if(E.isFramebufferTexture){if(Et)if(G)i.texStorage2D(o.TEXTURE_2D,Gt,Bt,Mt.width,Mt.height);else{let yt=Mt.width,mt=Mt.height;for(let Wt=0;Wt<Gt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Bt,yt,mt,0,Ut,Kt,null),yt>>=1,mt>>=1}}else if(le.length>0){if(G&&Et){const yt=$e(le[0]);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,yt.width,yt.height)}for(let yt=0,mt=le.length;yt<mt;yt++)Ot=le[yt],G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,Kt,Ot):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ut,Kt,Ot);E.generateMipmaps=!1}else if(G){if(Et){const yt=$e(Mt);i.texStorage2D(o.TEXTURE_2D,Gt,Bt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Kt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ut,Kt,Mt);y(E)&&x(lt),te.__version=ct.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function st(U,E,J){if(E.image.length!==6)return;const lt=St(U,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const ct=r.get(xt);if(xt.version!==ct.__version||lt===!0){i.activeTexture(o.TEXTURE0+J);const te=ke.getPrimaries(ke.workingColorSpace),wt=E.colorSpace===Sr?null:ke.getPrimaries(E.colorSpace),Qt=E.colorSpace===Sr||te===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let mt=0;mt<6;mt++)!Jt&&!Mt?Ut[mt]=C(E.image[mt],!0,l.maxCubemapSize):Ut[mt]=Mt?E.image[mt].image:E.image[mt],Ut[mt]=sn(E,Ut[mt]);const Kt=Ut[0],Bt=u.convert(E.format,E.colorSpace),Ot=u.convert(E.type),le=z(E.internalFormat,Bt,Ot,E.colorSpace),G=E.isVideoTexture!==!0,Et=ct.__version===void 0||lt===!0,At=xt.dataReady;let Gt=X(E,Kt);$(o.TEXTURE_CUBE_MAP,E);let yt;if(Jt){G&&Et&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,le,Kt.width,Kt.height);for(let mt=0;mt<6;mt++){yt=Ut[mt].mipmaps;for(let Wt=0;Wt<yt.length;Wt++){const he=yt[Wt];E.format!==ia?Bt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,he.width,he.height,Bt,he.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,he.width,he.height,Bt,Ot,he.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,le,he.width,he.height,0,Bt,Ot,he.data)}}}else{if(yt=E.mipmaps,G&&Et){yt.length>0&&Gt++;const mt=$e(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,le,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Mt){G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ut[mt].width,Ut[mt].height,Bt,Ot,Ut[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Ut[mt].width,Ut[mt].height,0,Bt,Ot,Ut[mt].data);for(let Wt=0;Wt<yt.length;Wt++){const De=yt[Wt].image[mt].image;G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,De.width,De.height,Bt,Ot,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,le,De.width,De.height,0,Bt,Ot,De.data)}}else{G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Bt,Ot,Ut[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Bt,Ot,Ut[mt]);for(let Wt=0;Wt<yt.length;Wt++){const he=yt[Wt];G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Bt,Ot,he.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,le,Bt,Ot,he.image[mt])}}}y(E)&&x(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Lt(U,E,J,lt,xt,ct){const te=u.convert(J.format,J.colorSpace),wt=u.convert(J.type),Qt=z(J.internalFormat,te,wt,J.colorSpace),Jt=r.get(E),Mt=r.get(J);if(Mt.__renderTarget=E,!Jt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ct),Kt=Math.max(1,E.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Qt,Ut,Kt,E.depth,0,te,wt,null):i.texImage2D(xt,ct,Qt,Ut,Kt,0,te,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Vt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,xt,Mt.__webglTexture,0,ze(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,xt,Mt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const lt=E.depthTexture,xt=lt&&lt.isDepthTexture?lt.type:null,ct=R(E.stencilBuffer,xt),te=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ze(E);Vt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ct,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,U)}else{const lt=E.textures;for(let xt=0;xt<lt.length;xt++){const ct=lt[xt],te=u.convert(ct.format,ct.colorSpace),wt=u.convert(ct.type),Qt=z(ct.internalFormat,te,wt,ct.colorSpace),Jt=ze(E);J&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Qt,E.width,E.height):Vt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=r.get(E.depthTexture);lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const xt=lt.__webglTexture,ct=ze(E);if(E.depthTexture.format===sl)Vt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===ol)Vt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function de(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const lt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",xt)};lt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=lt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const lt=U.texture.mipmaps;lt&&lt.length>0?kt(E.__webglFramebuffer[0],U):kt(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Ht(E.__webglDepthbuffer[lt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const lt=U.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ht(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(U,E,J){const lt=r.get(U);E!==void 0&&Lt(lt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&de(U)}function L(U){const E=U.texture,J=r.get(U),lt=r.get(E);U.addEventListener("dispose",P);const xt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,te=xt.length>1;if(te||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++),ct){J.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[wt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)J.__webglFramebuffer[wt][Qt]=o.createFramebuffer()}else J.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)J.__webglFramebuffer[wt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(te)for(let wt=0,Qt=xt.length;wt<Qt;wt++){const Jt=r.get(xt[wt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Vt(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const Qt=xt[wt];J.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[wt]);const Jt=u.convert(Qt.format,Qt.colorSpace),Mt=u.convert(Qt.type),Ut=z(Qt.internalFormat,Jt,Mt,Qt.colorSpace,U.isXRRenderTarget===!0),Kt=ze(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ut,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,J.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),$(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Lt(J.__webglFramebuffer[wt][Qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Qt);else Lt(J.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){for(let wt=0,Qt=xt.length;wt<Qt;wt++){const Jt=xt[wt],Mt=r.get(Jt);let Ut=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Mt.__webglTexture),$(Ut,Jt),Lt(J.__webglFramebuffer,U,Jt,o.COLOR_ATTACHMENT0+wt,Ut,0),y(Jt)&&x(Ut)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,lt.__webglTexture),$(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Lt(J.__webglFramebuffer[Qt],U,E,o.COLOR_ATTACHMENT0,wt,Qt);else Lt(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);y(E)&&x(wt),i.unbindTexture()}U.depthBuffer&&de(U)}function ce(U){const E=U.textures;for(let J=0,lt=E.length;J<lt;J++){const xt=E[J];if(y(xt)){const ct=I(U),te=r.get(xt).__webglTexture;i.bindTexture(ct,te),x(ct),i.unbindTexture()}}}const fe=[],ee=[];function qt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,J=U.width,lt=U.height;let xt=o.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=r.get(U),wt=E.length>1;if(wt)for(let Jt=0;Jt<E.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,te.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const Qt=U.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Jt=0;Jt<E.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,te.__webglColorRenderbuffer[Jt]);const Mt=r.get(E[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,J,lt,0,0,J,lt,xt,o.NEAREST),m===!0&&(fe.length=0,ee.length=0,fe.push(o.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fe.push(ct),ee.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Jt=0;Jt<E.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,te.__webglColorRenderbuffer[Jt]);const Mt=r.get(E[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,te.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ze(U){return Math.min(l.maxSamples,U.samples)}function Vt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ue(U){const E=d.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function sn(U,E){const J=U.colorSpace,lt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==ro&&J!==Sr&&(ke.getTransfer(J)===an?(lt!==ia||xt!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=at,this.setTexture2D=dt,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=oe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Vt}function v1(o,e){function i(r,l=Sr){let u;const d=ke.getTransfer(l);if(r===ga)return o.UNSIGNED_BYTE;if(r===wh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===L_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===N_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===D_)return o.BYTE;if(r===U_)return o.SHORT;if(r===al)return o.UNSIGNED_SHORT;if(r===Ch)return o.INT;if(r===as)return o.UNSIGNED_INT;if(r===Ga)return o.FLOAT;if(r===ul)return o.HALF_FLOAT;if(r===O_)return o.ALPHA;if(r===z_)return o.RGB;if(r===ia)return o.RGBA;if(r===sl)return o.DEPTH_COMPONENT;if(r===ol)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Uh)return o.RED_INTEGER;if(r===B_)return o.RG;if(r===Lh)return o.RG_INTEGER;if(r===Nh)return o.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===Xc)if(d===an)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===an?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===an?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sh||r===yh||r===Mh||r===Eh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
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

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new K_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Tr({vertexShader:x1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zn(new pi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M1 extends oo{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new y1,x={},I=i.getContextAttributes();let z=null,R=null;const X=[],F=[],P=new We;let Z=null;const D=new mi;D.viewport=new rn;const w=new mi;w.viewport=new rn;const V=[D,w],at=new Xy;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=X[K];return st===void 0&&(st=new bd,X[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=X[K];return st===void 0&&(st=new bd,X[K]=st),st.getGripSpace()},this.getHand=function(K){let st=X[K];return st===void 0&&(st=new bd,X[K]=st),st.getHandSpace()};function dt(K){const st=F.indexOf(K.inputSource);if(st===-1)return;const Lt=X[st];Lt!==void 0&&(Lt.update(K.inputSource,K.frame,p||d),Lt.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",j);for(let K=0;K<X.length;K++){const st=F[K];st!==null&&(F[K]=null,X[K].disconnect(st))}ut=null,gt=null,y.reset();for(const K in x)delete x[K];e.setRenderTarget(z),M=null,S=null,_=null,l=null,R=null,Pt.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",j),I.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ht=null,kt=null;I.depth&&(kt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=I.stencil?ol:sl,Ht=I.stencil?rl:as);const de={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),R=new rs(S.textureWidth,S.textureHeight,{format:ia,type:ga,depthTexture:new Z_(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Lt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new rs(M.framebufferWidth,M.framebufferHeight,{format:ia,type:ga,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pt.setContext(l),Pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(K){for(let st=0;st<K.removed.length;st++){const Lt=K.removed[st],Ht=F.indexOf(Lt);Ht>=0&&(F[Ht]=null,X[Ht].disconnect(Lt))}for(let st=0;st<K.added.length;st++){const Lt=K.added[st];let Ht=F.indexOf(Lt);if(Ht===-1){for(let de=0;de<X.length;de++)if(de>=F.length){F.push(Lt),Ht=de;break}else if(F[de]===null){F[de]=Lt,Ht=de;break}if(Ht===-1)break}const kt=X[Ht];kt&&kt.connect(Lt)}}const W=new Q,pt=new Q;function Tt(K,st,Lt){W.setFromMatrixPosition(st.matrixWorld),pt.setFromMatrixPosition(Lt.matrixWorld);const Ht=W.distanceTo(pt),kt=st.projectionMatrix.elements,de=Lt.projectionMatrix.elements,oe=kt[14]/(kt[10]-1),L=kt[14]/(kt[10]+1),ce=(kt[9]+1)/kt[5],fe=(kt[9]-1)/kt[5],ee=(kt[8]-1)/kt[0],qt=(de[8]+1)/de[0],ze=oe*ee,Vt=oe*qt,ue=Ht/(-ee+qt),sn=ue*-ee;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(sn),K.translateZ(ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),kt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const $e=oe+ue,U=L+ue,E=ze-sn,J=Vt+(Ht-sn),lt=ce*L/U*$e,xt=fe*L/U*$e;K.projectionMatrix.makePerspective(E,J,lt,xt,$e,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function N(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let st=K.near,Lt=K.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),at.near=w.near=D.near=st,at.far=w.far=D.far=Lt,(ut!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ut=at.near,gt=at.far),at.layers.mask=K.layers.mask|6,D.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Ht=K.parent,kt=at.cameras;N(at,Ht);for(let de=0;de<kt.length;de++)N(kt[de],Ht);kt.length===2?Tt(at,D,w):at.projectionMatrix.copy(D.projectionMatrix),$(K,at,Ht)};function $(K,st,Lt){Lt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(Lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function(K){return x[K]};let St=null;function Ct(K,st){if(v=st.getViewerPose(p||d),A=st,v!==null){const Lt=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ht=!1;Lt.length!==at.cameras.length&&(at.cameras.length=0,Ht=!0);for(let L=0;L<Lt.length;L++){const ce=Lt[L];let fe=null;if(M!==null)fe=M.getViewport(ce);else{const qt=_.getViewSubImage(S,ce);fe=qt.viewport,L===0&&(e.setRenderTargetTextures(R,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(R))}let ee=V[L];ee===void 0&&(ee=new mi,ee.layers.enable(L),ee.viewport=new rn,V[L]=ee),ee.matrix.fromArray(ce.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(fe.x,fe.y,fe.width,fe.height),L===0&&(at.matrix.copy(ee.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ht===!0&&at.cameras.push(ee)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const L=_.getDepthInformation(Lt[0]);L&&L.isValid&&L.texture&&y.init(L,l.renderState)}if(kt&&kt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let L=0;L<Lt.length;L++){const ce=Lt[L].camera;if(ce){let fe=x[ce];fe||(fe=new K_,x[ce]=fe);const ee=_.getCameraImage(ce);fe.sourceTexture=ee}}}}for(let Lt=0;Lt<X.length;Lt++){const Ht=F[Lt],kt=X[Lt];Ht!==null&&kt!==void 0&&kt.update(Ht,st,p||d)}St&&St(K,st),st.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:st}),A=null}const Pt=new J_;Pt.setAnimationLoop(Ct),this.setAnimationLoop=function(K){St=K},this.dispose=function(){}}}const Zr=new _a,E1=new Tn;function T1(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,q_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,I,z,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,R)):x.isMeshMatcapMaterial?(u(y,x),A(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,I,z):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===gi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===gi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),z=I.envMap,R=I.envMapRotation;z&&(y.envMap.value=z,Zr.copy(R),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),y.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Zr)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,I,z){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=z*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function b1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,z){const R=z.program;r.uniformBlockBinding(I,R)}function p(I,z){let R=l[I.id];R===void 0&&(A(I),R=v(I),l[I.id]=R,I.addEventListener("dispose",y));const X=z.program;r.updateUBOMapping(I,X);const F=e.render.frame;u[I.id]!==F&&(S(I),u[I.id]=F)}function v(I){const z=_();I.__bindingPointIndex=z;const R=o.createBuffer(),X=I.__size,F=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,X,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,R),R}function _(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const z=l[I.id],R=I.uniforms,X=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let F=0,P=R.length;F<P;F++){const Z=Array.isArray(R[F])?R[F]:[R[F]];for(let D=0,w=Z.length;D<w;D++){const V=Z[D];if(M(V,F,D,X)===!0){const at=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let dt=0;dt<ut.length;dt++){const O=ut[dt],j=C(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,gt),gt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,z,R,X){const F=I.value,P=z+"_"+R;if(X[P]===void 0)return typeof F=="number"||typeof F=="boolean"?X[P]=F:X[P]=F.clone(),!0;{const Z=X[P];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return X[P]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function A(I){const z=I.uniforms;let R=0;const X=16;for(let P=0,Z=z.length;P<Z;P++){const D=Array.isArray(z[P])?z[P]:[z[P]];for(let w=0,V=D.length;w<V;w++){const at=D[w],ut=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,dt=ut.length;gt<dt;gt++){const O=ut[gt],j=C(O),W=R%X,pt=W%j.boundary,Tt=W+pt;R+=pt,Tt!==0&&X-Tt<j.storage&&(R+=X-Tt),at.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=R,R+=j.storage}}}const F=R%X;return F>0&&(R+=X-F),I.__size=R,I.__cache={},this}function C(I){const z={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(z.boundary=4,z.storage=4):I.isVector2?(z.boundary=8,z.storage=8):I.isVector3||I.isColor?(z.boundary=16,z.storage=12):I.isVector4?(z.boundary=16,z.storage=16):I.isMatrix3?(z.boundary=48,z.storage=48):I.isMatrix4?(z.boundary=64,z.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),z}function y(I){const z=I.target;z.removeEventListener("dispose",y);const R=d.indexOf(z.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function x(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}class A1{constructor(e={}){const{canvas:i=ny(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,x=null;const I=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let X=!1;this._outputColorSpace=Vi;let F=0,P=0,Z=null,D=-1,w=null;const V=new rn,at=new rn;let ut=null;const gt=new Ie(0);let dt=0,O=i.width,j=i.height,W=1,pt=null,Tt=null;const N=new rn(0,0,O,j),$=new rn(0,0,O,j);let St=!1;const Ct=new Bh;let Pt=!1,K=!1;const st=new Tn,Lt=new Q,Ht=new rn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function oe(){return Z===null?W:1}let L=r;function ce(b,k){return i.getContext(b,k)}try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ah}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),L===null){const k="webgl2";if(L=ce(k,b),L===null)throw ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let fe,ee,qt,ze,Vt,ue,sn,$e,U,E,J,lt,xt,ct,te,wt,Qt,Jt,Mt,Ut,Kt,Bt,Ot,le;function G(){fe=new PT(L),fe.init(),Bt=new v1(L,fe),ee=new wT(L,fe,e,Bt),qt=new g1(L,fe),ee.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),ze=new FT(L),Vt=new i1,ue=new _1(L,fe,qt,Vt,ee,Bt,ze),sn=new UT(R),$e=new zT(R),U=new Wy(L),Ot=new RT(L,U),E=new BT(L,U,ze,Ot),J=new GT(L,E,U,ze),Mt=new HT(L,ee,ue),wt=new DT(Vt),lt=new n1(R,sn,$e,fe,ee,Ot,wt),xt=new T1(R,Vt),ct=new r1,te=new f1(fe),Jt=new AT(R,sn,$e,qt,J,M,m),Qt=new p1(R,J,ee),le=new b1(L,ze,ee,qt),Ut=new CT(L,fe,ze),Kt=new IT(L,fe,ze),ze.programs=lt.programs,R.capabilities=ee,R.extensions=fe,R.properties=Vt,R.renderLists=ct,R.shadowMap=Qt,R.state=qt,R.info=ze}G();const Et=new M1(R,L);this.xr=Et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(O,j,!1))},this.getSize=function(b){return b.set(O,j)},this.setSize=function(b,k,nt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,j=k,i.width=Math.floor(b*W),i.height=Math.floor(k*W),nt===!0&&(i.style.width=b+"px",i.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(O*W,j*W).floor()},this.setDrawingBufferSize=function(b,k,nt){O=b,j=k,W=nt,i.width=Math.floor(b*nt),i.height=Math.floor(k*nt),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,k,nt,rt){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,k,nt,rt),qt.viewport(V.copy(N).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,k,nt,rt){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,k,nt,rt),qt.scissor(at.copy($).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){qt.setScissorTest(St=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,nt=!0){let rt=0;if(b){let q=!1;if(Z!==null){const vt=Z.texture.format;q=vt===Nh||vt===Lh||vt===Uh}if(q){const vt=Z.texture.type,zt=vt===ga||vt===as||vt===al||vt===rl||vt===wh||vt===Dh,Nt=Jt.getClearColor(),It=Jt.getClearAlpha(),Rt=Nt.r,re=Nt.g,jt=Nt.b;zt?(A[0]=Rt,A[1]=re,A[2]=jt,A[3]=It,L.clearBufferuiv(L.COLOR,0,A)):(C[0]=Rt,C[1]=re,C[2]=jt,C[3]=It,L.clearBufferiv(L.COLOR,0,C))}else rt|=L.COLOR_BUFFER_BIT}k&&(rt|=L.DEPTH_BUFFER_BIT),nt&&(rt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Jt.dispose(),ct.dispose(),te.dispose(),Vt.dispose(),sn.dispose(),$e.dispose(),J.dispose(),Ot.dispose(),le.dispose(),lt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Pe),Et.removeEventListener("sessionend",br),Be.stop()};function At(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const b=ze.autoReset,k=Qt.enabled,nt=Qt.autoUpdate,rt=Qt.needsUpdate,q=Qt.type;G(),ze.autoReset=b,Qt.enabled=k,Qt.autoUpdate=nt,Qt.needsUpdate=rt,Qt.type=q}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){const k=b.target;k.removeEventListener("dispose",mt),Wt(k)}function Wt(b){he(b),Vt.remove(b)}function he(b){const k=Vt.get(b).programs;k!==void 0&&(k.forEach(function(nt){lt.releaseProgram(nt)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,nt,rt,q,vt){k===null&&(k=kt);const zt=q.isMesh&&q.matrixWorld.determinant()<0,Nt=aa(b,k,nt,rt,q);qt.setMaterial(rt,zt);let It=nt.index,Rt=1;if(rt.wireframe===!0){if(It=E.getWireframeAttribute(nt),It===void 0)return;Rt=2}const re=nt.drawRange,jt=nt.attributes.position;let pe=re.start*Rt,Te=(re.start+re.count)*Rt;vt!==null&&(pe=Math.max(pe,vt.start*Rt),Te=Math.min(Te,(vt.start+vt.count)*Rt)),It!==null?(pe=Math.max(pe,0),Te=Math.min(Te,It.count)):jt!=null&&(pe=Math.max(pe,0),Te=Math.min(Te,jt.count));const Fe=Te-pe;if(Fe<0||Fe===1/0)return;Ot.setup(q,rt,Nt,nt,It);let Ne,ve=Ut;if(It!==null&&(Ne=U.get(It),ve=Kt,ve.setIndex(Ne)),q.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*oe()),ve.setMode(L.LINES)):ve.setMode(L.TRIANGLES);else if(q.isLine){let Yt=rt.linewidth;Yt===void 0&&(Yt=1),qt.setLineWidth(Yt*oe()),q.isLineSegments?ve.setMode(L.LINES):q.isLineLoop?ve.setMode(L.LINE_LOOP):ve.setMode(L.LINE_STRIP)}else q.isPoints?ve.setMode(L.POINTS):q.isSprite&&ve.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)cl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Yt=q._multiDrawStarts,Ze=q._multiDrawCounts,be=q._multiDrawCount,Rn=It?U.get(It).bytesPerElement:1,qi=Vt.get(rt).currentProgram.getUniforms();for(let vn=0;vn<be;vn++)qi.setValue(L,"_gl_DrawID",vn),ve.render(Yt[vn]/Rn,Ze[vn])}else if(q.isInstancedMesh)ve.renderInstances(pe,Fe,q.count);else if(nt.isInstancedBufferGeometry){const Yt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ze=Math.min(nt.instanceCount,Yt);ve.renderInstances(pe,Fe,Ze)}else ve.render(pe,Fe)};function De(b,k,nt){b.transparent===!0&&b.side===Jn&&b.forceSinglePass===!1?(b.side=gi,b.needsUpdate=!0,_n(b,k,nt),b.side=Er,b.needsUpdate=!0,_n(b,k,nt),b.side=Jn):_n(b,k,nt)}this.compile=function(b,k,nt=null){nt===null&&(nt=b),x=te.get(nt),x.init(k),z.push(x),nt.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),b!==nt&&b.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const rt=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let zt=0;zt<vt.length;zt++){const Nt=vt[zt];De(Nt,nt,q),rt.add(Nt)}else De(vt,nt,q),rt.add(vt)}),x=z.pop(),rt},this.compileAsync=function(b,k,nt=null){const rt=this.compile(b,k,nt);return new Promise(q=>{function vt(){if(rt.forEach(function(zt){Vt.get(zt).currentProgram.isReady()&&rt.delete(zt)}),rt.size===0){q(b);return}setTimeout(vt,10)}fe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ee=null;function Wn(b){Ee&&Ee(b)}function Pe(){Be.stop()}function br(){Be.start()}const Be=new J_;Be.setAnimationLoop(Wn),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(b){Ee=b,Et.setAnimationLoop(b),b===null?Be.stop():Be.start()},Et.addEventListener("sessionstart",Pe),Et.addEventListener("sessionend",br),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(k),k=Et.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,k,Z),x=te.get(b,z.length),x.init(k),z.push(x),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ct.setFromProjectionMatrix(st,pa,k.reversedDepth),K=this.localClippingEnabled,Pt=wt.init(this.clippingPlanes,K),y=ct.get(b,I.length),y.init(),I.push(y),Et.enabled===!0&&Et.isPresenting===!0){const vt=R.xr.getDepthSensingMesh();vt!==null&&Xi(vt,k,-1/0,R.sortObjects)}Xi(b,k,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(pt,Tt),de=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,de&&Jt.addToRenderList(y,b),this.info.render.frame++,Pt===!0&&wt.beginShadows();const nt=x.state.shadowsArray;Qt.render(nt,b,k),Pt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,q=y.transmissive;if(x.setupLights(),k.isArrayCamera){const vt=k.cameras;if(q.length>0)for(let zt=0,Nt=vt.length;zt<Nt;zt++){const It=vt[zt];ki(rt,q,b,It)}de&&Jt.render(b);for(let zt=0,Nt=vt.length;zt<Nt;zt++){const It=vt[zt];Ci(y,b,It,It.viewport)}}else q.length>0&&ki(rt,q,b,k),de&&Jt.render(b),Ci(y,b,k);Z!==null&&P===0&&(ue.updateMultisampleRenderTarget(Z),ue.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(R,b,k),Ot.resetDefaultState(),D=-1,w=null,z.pop(),z.length>0?(x=z[z.length-1],Pt===!0&&wt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Xi(b,k,nt,rt){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)nt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ct.intersectsSprite(b)){rt&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(st);const zt=J.update(b),Nt=b.material;Nt.visible&&y.push(b,zt,Nt,nt,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ct.intersectsObject(b))){const zt=J.update(b),Nt=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ht.copy(zt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(st)),Array.isArray(Nt)){const It=zt.groups;for(let Rt=0,re=It.length;Rt<re;Rt++){const jt=It[Rt],pe=Nt[jt.materialIndex];pe&&pe.visible&&y.push(b,zt,pe,nt,Ht.z,jt)}}else Nt.visible&&y.push(b,zt,Nt,nt,Ht.z,null)}}const vt=b.children;for(let zt=0,Nt=vt.length;zt<Nt;zt++)Xi(vt[zt],k,nt,rt)}function Ci(b,k,nt,rt){const q=b.opaque,vt=b.transmissive,zt=b.transparent;x.setupLightsView(nt),Pt===!0&&wt.setGlobalState(R.clippingPlanes,nt),rt&&qt.viewport(V.copy(rt)),q.length>0&&wi(q,k,nt),vt.length>0&&wi(vt,k,nt),zt.length>0&&wi(zt,k,nt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function ki(b,k,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new rs(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?ul:ga,minFilter:ns,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const vt=x.state.transmissionRenderTarget[rt.id],zt=rt.viewport||V;vt.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);const Nt=R.getRenderTarget(),It=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor(gt),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),de&&Jt.render(nt);const re=R.toneMapping;R.toneMapping=Mr;const jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),Pt===!0&&wt.setGlobalState(R.clippingPlanes,rt),wi(b,nt,rt),ue.updateMultisampleRenderTarget(vt),ue.updateRenderTargetMipmap(vt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Te=0,Fe=k.length;Te<Fe;Te++){const Ne=k[Te],ve=Ne.object,Yt=Ne.geometry,Ze=Ne.material,be=Ne.group;if(Ze.side===Jn&&ve.layers.test(rt.layers)){const Rn=Ze.side;Ze.side=gi,Ze.needsUpdate=!0,Ar(ve,nt,rt,Yt,Ze,be),Ze.side=Rn,Ze.needsUpdate=!0,pe=!0}}pe===!0&&(ue.updateMultisampleRenderTarget(vt),ue.updateRenderTargetMipmap(vt))}R.setRenderTarget(Nt,It,Rt),R.setClearColor(gt,dt),jt!==void 0&&(rt.viewport=jt),R.toneMapping=re}function wi(b,k,nt){const rt=k.isScene===!0?k.overrideMaterial:null;for(let q=0,vt=b.length;q<vt;q++){const zt=b[q],Nt=zt.object,It=zt.geometry,Rt=zt.group;let re=zt.material;re.allowOverride===!0&&rt!==null&&(re=rt),Nt.layers.test(nt.layers)&&Ar(Nt,k,nt,It,re,Rt)}}function Ar(b,k,nt,rt,q,vt){b.onBeforeRender(R,k,nt,rt,q,vt),b.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,k,nt,rt,b,vt),q.transparent===!0&&q.side===Jn&&q.forceSinglePass===!1?(q.side=gi,q.needsUpdate=!0,R.renderBufferDirect(nt,k,rt,q,b,vt),q.side=Er,q.needsUpdate=!0,R.renderBufferDirect(nt,k,rt,q,b,vt),q.side=Jn):R.renderBufferDirect(nt,k,rt,q,b,vt),b.onAfterRender(R,k,nt,rt,q,vt)}function _n(b,k,nt){k.isScene!==!0&&(k=kt);const rt=Vt.get(b),q=x.state.lights,vt=x.state.shadowsArray,zt=q.state.version,Nt=lt.getParameters(b,q.state,vt,k,nt),It=lt.getProgramCacheKey(Nt);let Rt=rt.programs;rt.environment=b.isMeshStandardMaterial?k.environment:null,rt.fog=k.fog,rt.envMap=(b.isMeshStandardMaterial?$e:sn).get(b.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",mt),Rt=new Map,rt.programs=Rt);let re=Rt.get(It);if(re!==void 0){if(rt.currentProgram===re&&rt.lightsStateVersion===zt)return Pn(b,Nt),re}else Nt.uniforms=lt.getUniforms(b),b.onBeforeCompile(Nt,R),re=lt.acquireProgram(Nt,It),Rt.set(It,re),rt.uniforms=Nt.uniforms;const jt=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(jt.clippingPlanes=wt.uniform),Pn(b,Nt),rt.needsLights=Wi(b),rt.lightsStateVersion=zt,rt.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),rt.currentProgram=re,rt.uniformsList=null,re}function hn(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=kc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Pn(b,k){const nt=Vt.get(b);nt.outputColorSpace=k.outputColorSpace,nt.batching=k.batching,nt.batchingColor=k.batchingColor,nt.instancing=k.instancing,nt.instancingColor=k.instancingColor,nt.instancingMorph=k.instancingMorph,nt.skinning=k.skinning,nt.morphTargets=k.morphTargets,nt.morphNormals=k.morphNormals,nt.morphColors=k.morphColors,nt.morphTargetsCount=k.morphTargetsCount,nt.numClippingPlanes=k.numClippingPlanes,nt.numIntersection=k.numClipIntersection,nt.vertexAlphas=k.vertexAlphas,nt.vertexTangents=k.vertexTangents,nt.toneMapping=k.toneMapping}function aa(b,k,nt,rt,q){k.isScene!==!0&&(k=kt),ue.resetTextureUnits();const vt=k.fog,zt=rt.isMeshStandardMaterial?k.environment:null,Nt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ro,It=(rt.isMeshStandardMaterial?$e:sn).get(rt.envMap||zt),Rt=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,re=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),jt=!!nt.morphAttributes.position,pe=!!nt.morphAttributes.normal,Te=!!nt.morphAttributes.color;let Fe=Mr;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Fe=R.toneMapping);const Ne=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ve=Ne!==void 0?Ne.length:0,Yt=Vt.get(rt),Ze=x.state.lights;if(Pt===!0&&(K===!0||b!==w)){const xn=b===w&&rt.id===D;wt.setState(rt,b,xn)}let be=!1;rt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ze.state.version||Yt.outputColorSpace!==Nt||q.isBatchedMesh&&Yt.batching===!1||!q.isBatchedMesh&&Yt.batching===!0||q.isBatchedMesh&&Yt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Yt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Yt.instancing===!1||!q.isInstancedMesh&&Yt.instancing===!0||q.isSkinnedMesh&&Yt.skinning===!1||!q.isSkinnedMesh&&Yt.skinning===!0||q.isInstancedMesh&&Yt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Yt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Yt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Yt.instancingMorph===!1&&q.morphTexture!==null||Yt.envMap!==It||rt.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==wt.numPlanes||Yt.numIntersection!==wt.numIntersection)||Yt.vertexAlphas!==Rt||Yt.vertexTangents!==re||Yt.morphTargets!==jt||Yt.morphNormals!==pe||Yt.morphColors!==Te||Yt.toneMapping!==Fe||Yt.morphTargetsCount!==ve)&&(be=!0):(be=!0,Yt.__version=rt.version);let Rn=Yt.currentProgram;be===!0&&(Rn=_n(rt,k,q));let qi=!1,vn=!1,ra=!1;const me=Rn.getUniforms(),Cn=Yt.uniforms;if(qt.useProgram(Rn.program)&&(qi=!0,vn=!0,ra=!0),rt.id!==D&&(D=rt.id,vn=!0),qi||w!==b){qt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",b.projectionMatrix),me.setValue(L,"viewMatrix",b.matrixWorldInverse);const pn=me.map.cameraPosition;pn!==void 0&&pn.setValue(L,Lt.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&me.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,vn=!0,ra=!0)}if(q.isSkinnedMesh){me.setOptional(L,q,"bindMatrix"),me.setOptional(L,q,"bindMatrixInverse");const xn=q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),me.setValue(L,"boneTexture",xn.boneTexture,ue))}q.isBatchedMesh&&(me.setOptional(L,q,"batchingTexture"),me.setValue(L,"batchingTexture",q._matricesTexture,ue),me.setOptional(L,q,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",q._indirectTexture,ue),me.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",q._colorsTexture,ue));const Bn=nt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Mt.update(q,nt,Rn),(vn||Yt.receiveShadow!==q.receiveShadow)&&(Yt.receiveShadow=q.receiveShadow,me.setValue(L,"receiveShadow",q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Cn.envMap.value=It,Cn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&k.environment!==null&&(Cn.envMapIntensity.value=k.environmentIntensity),vn&&(me.setValue(L,"toneMappingExposure",R.toneMappingExposure),Yt.needsLights&&Di(Cn,ra),vt&&rt.fog===!0&&xt.refreshFogUniforms(Cn,vt),xt.refreshMaterialUniforms(Cn,rt,W,j,x.state.transmissionRenderTarget[b.id]),kc.upload(L,hn(Yt),Cn,ue)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(kc.upload(L,hn(Yt),Cn,ue),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&me.setValue(L,"center",q.center),me.setValue(L,"modelViewMatrix",q.modelViewMatrix),me.setValue(L,"normalMatrix",q.normalMatrix),me.setValue(L,"modelMatrix",q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const xn=rt.uniformsGroups;for(let pn=0,xa=xn.length;pn<xa;pn++){const Dt=xn[pn];le.update(Dt,Rn),le.bind(Dt,Rn)}}return Rn}function Di(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Wi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,k,nt){const rt=Vt.get(b);rt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Vt.get(b.texture).__webglTexture=k,Vt.get(b.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:nt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const nt=Vt.get(b);nt.__webglFramebuffer=k,nt.__useDefaultFramebuffer=k===void 0};const Rr=L.createFramebuffer();this.setRenderTarget=function(b,k=0,nt=0){Z=b,F=k,P=nt;let rt=!0,q=null,vt=!1,zt=!1;if(b){const It=Vt.get(b);if(It.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(L.FRAMEBUFFER,null),rt=!1;else if(It.__webglFramebuffer===void 0)ue.setupRenderTarget(b);else if(It.__hasExternalTextures)ue.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const jt=b.depthTexture;if(It.__boundDepthTexture!==jt){if(jt!==null&&Vt.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(zt=!0);const re=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(re[k])?q=re[k][nt]:q=re[k],vt=!0):b.samples>0&&ue.useMultisampledRTT(b)===!1?q=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(re)?q=re[nt]:q=re,V.copy(b.viewport),at.copy(b.scissor),ut=b.scissorTest}else V.copy(N).multiplyScalar(W).floor(),at.copy($).multiplyScalar(W).floor(),ut=St;if(nt!==0&&(q=Rr),qt.bindFramebuffer(L.FRAMEBUFFER,q)&&rt&&qt.drawBuffers(b,q),qt.viewport(V),qt.scissor(at),qt.setScissorTest(ut),vt){const It=Vt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,nt)}else if(zt){const It=k;for(let Rt=0;Rt<b.textures.length;Rt++){const re=Vt.get(b.textures[Rt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Rt,re.__webglTexture,nt,It)}}else if(b!==null&&nt!==0){const It=Vt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,nt)}D=-1},this.readRenderTargetPixels=function(b,k,nt,rt,q,vt,zt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){qt.bindFramebuffer(L.FRAMEBUFFER,It);try{const Rt=b.textures[Nt],re=Rt.format,jt=Rt.type;if(!ee.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-rt&&nt>=0&&nt<=b.height-q&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Nt),L.readPixels(k,nt,rt,q,Bt.convert(re),Bt.convert(jt),vt))}finally{const Rt=Z!==null?Vt.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,k,nt,rt,q,vt,zt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It)if(k>=0&&k<=b.width-rt&&nt>=0&&nt<=b.height-q){qt.bindFramebuffer(L.FRAMEBUFFER,It);const Rt=b.textures[Nt],re=Rt.format,jt=Rt.type;if(!ee.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Nt),L.readPixels(k,nt,rt,q,Bt.convert(re),Bt.convert(jt),0);const Te=Z!==null?Vt.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(L.FRAMEBUFFER,Te);const Fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await iy(L,Fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(pe),L.deleteSync(Fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,nt=0){const rt=Math.pow(2,-nt),q=Math.floor(b.image.width*rt),vt=Math.floor(b.image.height*rt),zt=k!==null?k.x:0,Nt=k!==null?k.y:0;ue.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,nt,0,0,zt,Nt,q,vt),qt.unbindTexture()};const va=L.createFramebuffer(),Ui=L.createFramebuffer();this.copyTextureToTexture=function(b,k,nt=null,rt=null,q=0,vt=null){vt===null&&(q!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=q,q=0):vt=0);let zt,Nt,It,Rt,re,jt,pe,Te,Fe;const Ne=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(nt!==null)zt=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,It=nt.isBox3?nt.max.z-nt.min.z:1,Rt=nt.min.x,re=nt.min.y,jt=nt.isBox3?nt.min.z:0;else{const Bn=Math.pow(2,-q);zt=Math.floor(Ne.width*Bn),Nt=Math.floor(Ne.height*Bn),b.isDataArrayTexture?It=Ne.depth:b.isData3DTexture?It=Math.floor(Ne.depth*Bn):It=1,Rt=0,re=0,jt=0}rt!==null?(pe=rt.x,Te=rt.y,Fe=rt.z):(pe=0,Te=0,Fe=0);const ve=Bt.convert(k.format),Yt=Bt.convert(k.type);let Ze;k.isData3DTexture?(ue.setTexture3D(k,0),Ze=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ue.setTexture2DArray(k,0),Ze=L.TEXTURE_2D_ARRAY):(ue.setTexture2D(k,0),Ze=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const be=L.getParameter(L.UNPACK_ROW_LENGTH),Rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qi=L.getParameter(L.UNPACK_SKIP_PIXELS),vn=L.getParameter(L.UNPACK_SKIP_ROWS),ra=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jt);const me=b.isDataArrayTexture||b.isData3DTexture,Cn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Bn=Vt.get(b),xn=Vt.get(k),pn=Vt.get(Bn.__renderTarget),xa=Vt.get(xn.__renderTarget);qt.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),qt.bindFramebuffer(L.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let Dt=0;Dt<It;Dt++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.get(b).__webglTexture,q,jt+Dt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.get(k).__webglTexture,vt,Fe+Dt)),L.blitFramebuffer(Rt,re,zt,Nt,pe,Te,zt,Nt,L.DEPTH_BUFFER_BIT,L.NEAREST);qt.bindFramebuffer(L.READ_FRAMEBUFFER,null),qt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Vt.has(b)){const Bn=Vt.get(b),xn=Vt.get(k);qt.bindFramebuffer(L.READ_FRAMEBUFFER,va),qt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ui);for(let pn=0;pn<It;pn++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bn.__webglTexture,q,jt+pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bn.__webglTexture,q),Cn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,vt,Fe+pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,vt),q!==0?L.blitFramebuffer(Rt,re,zt,Nt,pe,Te,zt,Nt,L.COLOR_BUFFER_BIT,L.NEAREST):Cn?L.copyTexSubImage3D(Ze,vt,pe,Te,Fe+pn,Rt,re,zt,Nt):L.copyTexSubImage2D(Ze,vt,pe,Te,Rt,re,zt,Nt);qt.bindFramebuffer(L.READ_FRAMEBUFFER,null),qt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ze,vt,pe,Te,Fe,zt,Nt,It,ve,Yt,Ne.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ze,vt,pe,Te,Fe,zt,Nt,It,ve,Ne.data):L.texSubImage3D(Ze,vt,pe,Te,Fe,zt,Nt,It,ve,Yt,Ne):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,pe,Te,zt,Nt,ve,Yt,Ne.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,pe,Te,Ne.width,Ne.height,ve,Ne.data):L.texSubImage2D(L.TEXTURE_2D,vt,pe,Te,zt,Nt,ve,Yt,Ne);L.pixelStorei(L.UNPACK_ROW_LENGTH,be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qi),L.pixelStorei(L.UNPACK_SKIP_ROWS,vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ra),vt===0&&k.generateMipmaps&&L.generateMipmap(Ze),qt.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&ue.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ue.setTextureCube(b,0):b.isData3DTexture?ue.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ue.setTexture2DArray(b,0):ue.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){F=0,P=0,Z=null,qt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),i.unpackColorSpace=ke._getUnpackColorSpace()}}const R1="/gamejam2025/assets/Spill-CTWYly9P.m4a",C1="/gamejam2025/assets/Footsteps-DRAZh5Rr.m4a",w1="/gamejam2025/assets/Scream-BcRbbnqG.m4a",D1="/gamejam2025/assets/Breath-CZf7BGuO.m4a",Bd="/gamejam2025/assets/oldman-BloupXDP.png",U1="/gamejam2025/assets/linor-s5iCDYh8.png",T_="/gamejam2025/assets/righthand-CyskszO6.png",b_="/gamejam2025/assets/smokinghand-removebg-preview-DuqaVnuA.png",A_="/gamejam2025/assets/thumsupp-removebg-preview-Q34yp9t1.png",R_="/gamejam2025/assets/flashlight-removebg-preview-0kcO2K_W.png",L1="/gamejam2025/assets/exit-WxDXvEMY.png",N1="/gamejam2025/assets/jumscare-BC5hDXkG.jpg",O1="/gamejam2025/assets/wall-BeGyQMuU.jpg";function z1(){je.useRef(null);const o=je.useRef(null),e=je.useRef(null),i=je.useRef(null),r=je.useRef(null);je.useRef(null);const l=je.useRef(null),u=je.useRef(null),[d,h]=je.useState(0),[m,p]=je.useState(!1),[v,_]=je.useState(!1),[S,M]=je.useState(!1),[A,C]=je.useState(0),[y,x]=je.useState(100),[I,z]=je.useState(100),[R,X]=je.useState(100),[F,P]=je.useState(!1),[Z,D]=je.useState(0),[w,V]=je.useState(1),[at,ut]=je.useState([]),[gt,dt]=je.useState([]),[O,j]=je.useState([]),[W,pt]=je.useState(""),[Tt,N]=je.useState(!1),[$,St]=je.useState(100),[Ct,Pt]=je.useState(!1),K=je.useRef({hasFlashlight:!1,power:100,active:!1}),st=je.useRef({score:0,gameOver:!1,won:!1,started:!1});je.useEffect(()=>{if(!S||!o.current)return;const de=(()=>{const Dt=[];for(let ae=0;ae<6;ae++)Dt.push(Math.floor(Math.random()*3)+1);return Dt})();ut(de),console.log("Puzzle sequence generated:",de);const oe=new wy;oe.fog=new Ph(1710618,5,30),oe.background=new Ie(657930);const L=new mi(75,window.innerWidth/window.innerHeight,.1,40),ce=new A1({antialias:!1,alpha:!1});ce.setSize(window.innerWidth,window.innerHeight),ce.setPixelRatio(.5),o.current.appendChild(ce.domElement),e.current=ce;try{i.current=new Audio(R1),i.current.loop=!0,i.current.volume=.3}catch(Dt){console.warn("Could not initialize background audio:",Dt),i.current=null}try{r.current=new Audio(C1),r.current.loop=!0,r.current.volume=.7}catch(Dt){console.warn("Could not initialize footsteps audio:",Dt),r.current=null}try{l.current=new Audio(w1),l.current.volume=.8}catch(Dt){console.warn("Could not initialize scream audio:",Dt),l.current=null}try{u.current=new Audio(D1),u.current.volume=.8,u.current.loop=!0,console.log("Breath audio initialized successfully")}catch(Dt){console.warn("Could not initialize breath audio:",Dt),u.current=null}ce.domElement.style.imageRendering="pixelated",ce.domElement.style.filter="contrast(1.2) saturate(1.3) brightness(0.9)",ce.domElement.style.cursor="none";const fe=new Vy(6710920,.35);oe.add(fe);const ee=new ea(16711935,.7,12);ee.position.set(-10,3,-5),oe.add(ee);const qt=new ea(65535,.7,12);qt.position.set(10,3,-10),oe.add(qt);const ze=new ea(16776960,.7,12);ze.position.set(0,3,-15),oe.add(ze);const Vt=new ea(16711935,.7,12);Vt.position.set(-20,3,10),oe.add(Vt);const ue=new ea(65535,.7,12);ue.position.set(20,3,10),oe.add(ue);const sn=new ea(16776960,.7,12);sn.position.set(-15,3,-20),oe.add(sn);const $e=new ea(16711935,.7,12);$e.position.set(15,3,-20),oe.add($e);const U=new ea(65535,.7,12);U.position.set(0,3,20),oe.add(U);const E=document.createElement("canvas");E.width=128,E.height=128;const J=E.getContext("2d"),lt=64;for(let Dt=0;Dt<2;Dt++)for(let ae=0;ae<2;ae++){const Oe=(ae+Dt)%2===0;J.fillStyle=Oe?"#cccccc":"#aaaaaa",J.fillRect(ae*lt,Dt*lt,lt,lt),J.strokeStyle="#999999",J.lineWidth=2,J.strokeRect(ae*lt,Dt*lt,lt,lt)}const xt=new Z0(E);xt.wrapS=ts,xt.wrapT=ts,xt.repeat.set(15,15),xt.magFilter=Xe,xt.minFilter=Xe;const ct=new pi(100,100),te=new Rd({map:xt}),wt=new zn(ct,te);wt.rotation.x=-Math.PI/2,oe.add(wt);const Qt=new pi(100,100),Jt=new Rd({color:3359829,emissive:2236979,emissiveIntensity:.2}),Mt=new zn(Qt,Jt);Mt.rotation.x=Math.PI/2,Mt.position.y=4,oe.add(Mt);const Kt=new Ks().load(O1);Kt.wrapS=ts,Kt.wrapT=ts,Kt.magFilter=Xe,Kt.minFilter=Xe;const Bt=[];function Ot(Dt,ae,Oe,qe=10){const ln=new lo(qe,4,.5,1,1,1),He=Kt.clone();He.repeat.set(qe/2,2),He.needsUpdate=!0;const $n=new Rd({map:He}),Gn=new zn(ln,$n);Gn.position.set(Dt,2,ae),Gn.rotation.y=Oe,oe.add(Gn);const Sn=Math.abs(Oe)>.1,Ke=.25,mn={minX:Dt-(Sn?Ke:qe/2),maxX:Dt+(Sn?Ke:qe/2),minZ:ae-(Sn?qe/2:Ke),maxZ:ae+(Sn?qe/2:Ke)};return Bt.push(mn),Gn}const le=["XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","X........X......X..............X","X....XX..................X.....X","X.X...XX.X...XX.X....XX.XX...X.X","X.X.......................X....X","X.X.XX....XX....XX....XX..X.XX.X","X...X..............X......X....X","X...X....X.XXX..X..X.X....X..X.X","X.X.X............X.X...........X","X.....X.X..X...X...X..X.XX.XX..X","X..X.X.XX..........X.............X","X.......X..X...XX..............X","X....X..X.XX..XX.X.........X...X","X.X..X..X........X..X......X.X.X","X.XX.X..X..X..X.X..X.X..X.....X.X.X","X....X...........X.X.X.XX.....X","X...XX....x.X.X.X...X......XXX.X","X......X.........XX.X..X.X.....X","X.X....X...X...X.X..............X.X","X.X....X........X.XX.XX..X.X.X.X","X.X.X..X.X..X...X............X.X","X.X..........X..X.X..X.X..XX.X.X","X.XX...X.XXX.X..X..........X...X","X........X.....XX......X...X.XXX","X.XX..XX.X...XX................X","X.X..............X..XX...X.XXX.X","X.X.X.....X.X.................X","X.X................XX..........X","X.X............................X","X.......XX...........XX........X","XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"],G=2;for(let Dt=0;Dt<le.length;Dt++)for(let ae=0;ae<le[Dt].length;ae++)if(le[Dt][ae]==="X"){const Oe=(ae-le[Dt].length/2)*G,qe=(Dt-le.length/2)*G;Ot(Oe,qe,0,G*.9),Ot(Oe,qe,Math.PI/2,G*.9)}console.log("Created",Bt.length,"walls with bounds:",Bt);function Et(Dt,ae=.4){for(const Oe of Bt)if(Dt.x+ae>Oe.minX&&Dt.x-ae<Oe.maxX&&Dt.z+ae>Oe.minZ&&Dt.z-ae<Oe.maxZ)return!0;return!1}const At={x:28,z:28},Gt=3,mt=new Ks().load(L1);mt.magFilter=Xe,mt.minFilter=Xe;const Wt=new pi(4,4),he=new fa({map:mt,transparent:!0,side:Jn,emissive:65280,emissiveIntensity:.3}),De=new zn(Wt,he);De.position.set(At.x,2,At.z),oe.add(De);const Ee=new ea(65280,1.5,10);Ee.position.set(At.x,3,At.z),oe.add(Ee);function Wn(){const ae=new Ks().load(Bd);ae.magFilter=Xe,ae.minFilter=Xe;const Oe=new pi(3,4),qe=new fa({map:ae,transparent:!0,side:Jn}),ln=new zn(Oe,qe);return ln.position.set(-10,2,-24),oe.add(ln),ln}const Pe=Wn();console.log("Entity spawned at:",Pe.position.x,Pe.position.z),console.log("Entity collision check:",Et(Pe.position,.75));function br(){const ae=new Ks().load(U1);ae.magFilter=Xe,ae.minFilter=Xe;const Oe=new pi(3,4),qe=new fa({map:ae,transparent:!0,side:Jn,emissive:65416,emissiveIntensity:.4}),ln=new zn(Oe,qe);ln.position.set(20,2,20),oe.add(ln);const He=new ea(65416,2,8);return He.position.set(20,2,20),oe.add(He),ln.userData.glowLight=He,ln}const Be=br();console.log("Troll spawned at:",Be.position.x,Be.position.z);const Xi=new Ks,Ci=Xi.load(T_);Ci.magFilter=Xe,Ci.minFilter=Xe;const ki=Xi.load(b_);ki.magFilter=Xe,ki.minFilter=Xe;const wi=Xi.load(A_);wi.magFilter=Xe,wi.minFilter=Xe;function Ar(){const Dt=new pi(.8,.8),ae=new fa({map:Ci,transparent:!0,side:Jn,depthTest:!1,depthWrite:!1}),Oe=new zn(Dt,ae);return Oe.position.set(.4,-.3,-.8),Oe.renderOrder=999,Oe}const _n=Ar();L.add(_n);const hn=Xi.load(R_);hn.magFilter=Xe,hn.minFilter=Xe;const Pn=new pi(.6,.8),aa=new fa({map:hn,transparent:!0,side:Jn,depthTest:!1,depthWrite:!1}),Di=new zn(Pn,aa);Di.position.set(-.3,-.4,-.7),Di.renderOrder=998,Di.visible=!1,L.add(Di);const Wi=new Fy(16777130,2,20,Math.PI/6,.5,1);Wi.position.set(0,0,0),Wi.target.position.set(0,0,-10),L.add(Wi),L.add(Wi.target),Wi.visible=!1,oe.add(L);const Rr={current:0},va={current:[]},Ui={current:0},b={current:0},k={current:[]},nt={current:0};function rt(Dt,ae,Oe){const qe=new Js;let ln,He;Dt===1?(ln=Ci.clone(),He="Right Hand"):Dt===2?(ln=ki.clone(),He="Smoking Hand"):(ln=wi.clone(),He="Thumbs Up"),ln.needsUpdate=!0;const $n=new pi(2,2),Gn=new fa({map:ln,transparent:!0,side:Jn}),Sn=new zn($n,Gn);qe.add(Sn);const Ke=document.createElement("canvas");Ke.width=64,Ke.height=64;const mn=Ke.getContext("2d");mn.fillStyle="#ffff00",mn.font="bold 48px Arial",mn.textAlign="center",mn.textBaseline="middle",mn.fillText(ae.toString(),32,32),mn.strokeStyle="#ff00ff",mn.lineWidth=3,mn.strokeText(ae.toString(),32,32);const sa=new Z0(Ke);sa.magFilter=Xe;const _i=new pi(1,1),qn=new fa({map:sa,transparent:!0,side:Jn}),Li=new zn(_i,qn);return Li.position.y=1.5,qe.add(Li),qe.position.set(Oe.x,1.5,Oe.z),qe.userData={handType:Dt,sequenceNumber:ae,handName:He,discovered:!1},oe.add(qe),qe}const q=[{x:-20,z:-20},{x:20,z:-15},{x:-15,z:0},{x:15,z:5},{x:-10,z:20},{x:10,z:15}],vt=[];for(let Dt=0;Dt<6;Dt++){const ae=rt(de[Dt],Dt+1,q[Dt]);vt.push(ae)}function zt(){const Dt=new Js,Oe=new Ks().load(R_);Oe.magFilter=Xe,Oe.minFilter=Xe;const qe=new pi(1.5,1.5),ln=new fa({map:Oe,transparent:!0,side:Jn,emissive:16776960,emissiveIntensity:.3}),He=new zn(qe,ln);Dt.add(He);const $n=new ea(16776960,1,5);$n.position.y=.5,Dt.add($n);const Gn=[{x:-25,z:-10},{x:0,z:-20},{x:25,z:10},{x:-18,z:15},{x:5,z:-5}],Sn=Gn[Math.floor(Math.random()*Gn.length)];return Dt.position.set(Sn.x,1,Sn.z),Dt.userData={collected:!1},oe.add(Dt),Dt}const Nt=zt();function It(Dt,ae,Oe,qe){const He=Me=>Math.floor((Me+32)/G),$n=Me=>Me*G-32+G/2,Gn=Math.max(0,Math.min(31,He(Dt))),Sn=Math.max(0,Math.min(31,He(ae))),Ke=Math.max(0,Math.min(31,He(Oe))),mn=Math.max(0,Math.min(31,He(qe))),sa=(Me,vi)=>Me<0||Me>=32||vi<0||vi>=32?!1:le[vi][Me]===".",_i=(Me,vi,cn,un)=>Math.abs(Me-cn)+Math.abs(vi-un),qn=[{x:Gn,z:Sn,g:0,h:0,f:0,parent:null}],Li=new Set;for(;qn.length>0;){qn.sort((cn,un)=>cn.f-un.f);const Me=qn.shift();if(Me.x===Ke&&Me.z===mn){const cn=[];let un=Me;for(;un;)cn.unshift({x:$n(un.x),z:$n(un.z)}),un=un.parent;return cn}Li.add(`${Me.x},${Me.z}`);const vi=[{x:Me.x+1,z:Me.z},{x:Me.x-1,z:Me.z},{x:Me.x,z:Me.z+1},{x:Me.x,z:Me.z-1}];for(const cn of vi){if(!sa(cn.x,cn.z)||Li.has(`${cn.x},${cn.z}`))continue;const un=Me.g+1,Yi=_i(cn.x,cn.z,Ke,mn),oi=un+Yi,Yn=qn.find(ji=>ji.x===cn.x&&ji.z===cn.z);Yn?un<Yn.g&&(Yn.g=un,Yn.f=oi,Yn.parent=Me):qn.push({x:cn.x,z:cn.z,g:un,h:Yi,f:oi,parent:Me})}if(Li.size>1e3)break}return[]}const Rt=new Q(-28,0,-28),re=1.6;let jt=0,pe=0;console.log("Player starting at:",Rt.x,Rt.z),console.log("Starting collision check:",Et(Rt)),L.position.set(Rt.x,re,Rt.z),L.rotation.order="YXZ",L.rotation.y=jt,L.rotation.x=pe;const Te={};let Fe=0,Ne=!0,ve=0;const Yt=Dt=>{if(Te[Dt.code]=!0,Dt.code==="KeyR"&&Cn&&(me=[],j([]),pt("Input cleared"),setTimeout(()=>{W==="Input cleared"&&pt("")},1500)),Dt.code==="Digit1"&&(V(1),_n.material.map=Ci,_n.material.needsUpdate=!0,xn(1)),Dt.code==="Digit2"&&(V(2),_n.material.map=ki,_n.material.needsUpdate=!0,xn(2)),Dt.code==="Digit3"&&(V(3),_n.material.map=wi,_n.material.needsUpdate=!0,xn(3)),Dt.code==="Digit4"&&K.current.hasFlashlight&&K.current.power>0){const ae=!K.current.active;K.current.active=ae,Pt(ae)}Dt.code==="Space"&&Ne&&(Fe=.25,Ne=!1)},Ze=Dt=>{Te[Dt.code]=!1},be=Dt=>{st.current.started&&document.pointerLockElement===ce.domElement&&(jt-=Dt.movementX*.002,pe-=Dt.movementY*.002,pe=Math.max(-Math.PI/2,Math.min(Math.PI/2,pe)))},Rn=()=>{st.current.started&&ce.domElement.requestPointerLock()};ce.domElement.addEventListener("click",Rn),document.addEventListener("mousemove",be),window.addEventListener("keydown",Yt),window.addEventListener("keyup",Ze);const qi=.08;let vn=0,ra=performance.now(),me=[],Cn=!1,Bn="";function xn(Dt){Cn&&(me.length>=6||(me.push(Dt),j([...me]),me.length===6&&(me.every((Oe,qe)=>Oe===de[qe])?(pt("✓ CORRECT! Exit unlocked!"),De.userData.unlocked=!0):(pt("✗ WRONG! Try again..."),setTimeout(()=>{me=[],j([]),pt("")},2e3)))))}De.userData={unlocked:!1};function pn(){requestAnimationFrame(pn);const Dt=performance.now(),ae=(Dt-ra)/1e3;ra=Dt;const qe=ae*60,ln=gt.length===6;if(vn++,!st.current.started){L.position.set(Rt.x,Rt.y+re,Rt.z),L.rotation.order="YXZ",L.rotation.y=jt,L.rotation.x=pe,ce.render(oe,L);return}if(st.current.started&&!st.current.gameOver&&!st.current.won){if(C(bt=>bt+1),i.current&&i.current.paused){const bt=i.current.play();bt&&bt.catch&&bt.catch(()=>{})}i.current&&(ln?(i.current.playbackRate=1.3,i.current.volume=.5):(i.current.playbackRate=1,i.current.volume=.3));const He=qi*qe,$n=new Q(-Math.sin(jt),0,-Math.cos(jt)),Gn=new Q(Math.cos(jt),0,-Math.sin(jt));let Sn=0,Ke=0,mn=!1;if(Te.KeyW&&(Sn+=$n.x*He,Ke+=$n.z*He,mn=!0),Te.KeyS&&(Sn-=$n.x*He,Ke-=$n.z*He,mn=!0),Te.KeyA&&(Sn-=Gn.x*He,Ke-=Gn.z*He,mn=!0),Te.KeyD&&(Sn+=Gn.x*He,Ke+=Gn.z*He,mn=!0),mn){ve+=.15;const bt=Math.sin(ve)*.05;_n.position.y=-.3+bt}else ve=0,_n.position.y=-.3;if(r.current)try{if(mn&&!flyMode){if(r.current.paused){const bt=r.current.play();bt&&bt.catch&&bt.catch(()=>{})}}else if(!r.current.paused){r.current.pause();try{r.current.currentTime=0}catch{}}}catch{}if(Sn!==0){const bt=Rt.clone();bt.x+=Sn,Et(bt)||(Rt.x=bt.x)}if(Ke!==0){const bt=Rt.clone();bt.z+=Ke,Et(bt)||(Rt.z=bt.z)}const sa=-.015,_i=0;Fe+=sa,Rt.y+=Fe,Rt.y<=_i&&(Rt.y=_i,Fe=0,Ne=!0);let qn=0,Li=0;if(F&&Z>0){const bt=Z*.3;qn=(Math.random()-.5)*bt,Li=(Math.random()-.5)*bt}L.position.set(Rt.x+qn,Rt.y+re+Li,Rt.z),L.rotation.order="YXZ",L.rotation.y=jt,L.rotation.x=pe;const Me=Math.sqrt(Math.pow(Rt.x-Pe.position.x,2)+Math.pow(Rt.z-Pe.position.z,2));x(Math.floor(Me));let vi=!1;if(K.current.active&&K.current.power>0){const bt=new Q(Pe.position.x-L.position.x,0,Pe.position.z-L.position.z).normalize(),ne=new Q;L.getWorldDirection(ne),ne.y=0,ne.normalize(),ne.dot(bt)>.7&&Me<20&&(vi=!0,Pe.position.x+=bt.x*.3,Pe.position.z+=bt.z*.3,console.log(`Repelling entity! Distance: ${Me.toFixed(1)}m`))}if(Me<5){F||(P(!0),console.log("JUMPSCARE TRIGGERED!"),setTimeout(()=>{P(!1)},2e3));const bt=Math.max(0,Math.min(1,(5-Me)/3));D(bt)}else F&&(P(!1),D(0));const cn=.04+st.current.score*.001,Yi=cn*(ln?4:1);if(!vi){if(Rr.current++,Rr.current>=30){Rr.current=0;const bt=It(Pe.position.x,Pe.position.z,Rt.x,Rt.z);bt.length>0&&(va.current=bt,Ui.current=0)}if(va.current.length>0&&Ui.current<va.current.length){const bt=va.current[Ui.current],ne=new Q(bt.x-Pe.position.x,0,bt.z-Pe.position.z);if(ne.length()<1.5)Ui.current++;else{const Vn=ne.normalize();Pe.position.x+=Vn.x*Yi,Pe.position.z+=Vn.z*Yi}}else{const ne=new Q(Rt.x-Pe.position.x,0,Rt.z-Pe.position.z).normalize();Pe.position.x+=ne.x*Yi,Pe.position.z+=ne.z*Yi}}if(Pe.lookAt(L.position),Me<2){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(bt){console.warn("Could not play scream:",bt)}st.current.gameOver=!0,p(!0)}const oi=Math.sqrt(Math.pow(Rt.x-Be.position.x,2)+Math.pow(Rt.z-Be.position.z,2));z(Math.floor(oi));let Yn=!1;if(K.current.active&&K.current.power>0){const bt=new Q(Be.position.x-L.position.x,0,Be.position.z-L.position.z).normalize(),ne=new Q;L.getWorldDirection(ne),ne.y=0,ne.normalize(),ne.dot(bt)>.7&&oi<20&&(Yn=!0,Be.position.x+=bt.x*.3,Be.position.z+=bt.z*.3,console.log(`Repelling troll! Distance: ${oi.toFixed(1)}m`))}if(!Yn){if(b.current++,b.current>=30){b.current=0;const ne=It(Be.position.x,Be.position.z,Rt.x,Rt.z);ne.length>0&&(k.current=ne,nt.current=0)}const bt=cn;if(k.current.length>0&&nt.current<k.current.length){const ne=k.current[nt.current],yn=new Q(ne.x-Be.position.x,0,ne.z-Be.position.z);if(yn.length()<1.5)nt.current++;else{const wn=yn.normalize();Be.position.x+=wn.x*bt,Be.position.z+=wn.z*bt}}else{const yn=new Q(Rt.x-Be.position.x,0,Rt.z-Be.position.z).normalize();Be.position.x+=yn.x*bt,Be.position.z+=yn.z*bt}}if(Be.lookAt(L.position),Be.userData.glowLight&&Be.userData.glowLight.position.copy(Be.position),oi<2){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(bt){console.warn("Could not play scream:",bt)}st.current.gameOver=!0,p(!0)}const ji=Math.min(Me,oi);if(ji<20){let bt=0;ji<5?bt=.15:ji<10?bt=.08:ji<15?bt=.04:bt=.02,X(ne=>Math.max(0,ne-bt))}else X(bt=>Math.min(100,bt+.1));if(u.current)try{if(R<30&&R>0){if(u.current.paused){console.log("🫁 Starting breath audio - Sanity:",Math.floor(R));const bt=u.current.play();bt!==void 0&&bt.then(()=>{console.log("✅ Breath audio playing successfully")}).catch(ne=>{console.warn("❌ Breathing audio play blocked:",ne)})}u.current.volume=.5+(30-R)/30*.5}else u.current.paused||(console.log("⏹️ Stopping breath audio - Sanity:",Math.floor(R)),u.current.pause(),u.current.currentTime=0)}catch(bt){console.warn("Breathing audio error:",bt)}if(R<=0&&!st.current.gameOver){if(console.log("SANITY DEPLETED - LOST YOUR MIND!"),i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}if(l.current)try{l.current.play()}catch(bt){console.warn("Could not play scream:",bt)}st.current.gameOver=!0,p(!0)}const Xa=Math.sqrt(Math.pow(Rt.x-At.x,2)+Math.pow(Rt.z-At.z,2));if(Cn=Xa<5,Xa>6&&Bn.includes("Exit locked")&&(pt(""),Bn=""),Xa<Gt&&!st.current.won){if(De.userData.unlocked){if(i.current)try{i.current.pause()}catch{}if(r.current)try{r.current.pause(),r.current.currentTime=0}catch{}st.current.won=!0,_(!0),console.log("YOU ESCAPED! Time:",A,"Score:",d)}else if(vn%30===0){const ne=`Exit locked! Find all hands (${vt.filter(yn=>yn.userData.discovered).length}/6) and enter sequence`;pt(ne),Bn=ne}}for(let bt=0;bt<vt.length;bt++){const ne=vt[bt];if(ne.userData.discovered)continue;const yn=Rt.x-ne.position.x,Vn=Rt.z-ne.position.z;if(Math.sqrt(yn*yn+Vn*Vn)<2){ne.userData.discovered=!0;const Cr=["","Right Hand","Smoking Hand","Thumbs Up"][ne.userData.handType],Wa=gt.length+1;dt(Kc=>[...Kc,ne.userData.sequenceNumber]),Wa===6?(pt("🔥 ALL HANDS FOUND! THEY ARE COMING! 🔥"),setTimeout(()=>pt(""),5e3)):(pt(`Found #${ne.userData.sequenceNumber}: ${Cr} (press ${ne.userData.handType})`),setTimeout(()=>pt(""),3e3)),console.log(`Discovered: #${ne.userData.sequenceNumber} = ${Cr} (${Wa}/6)`)}ne.rotation.y+=.02,ne.children[0].lookAt(L.position),ne.children[1].lookAt(L.position)}if(Nt&&!Nt.userData.collected){const bt=L.position.x-Nt.position.x,ne=L.position.z-Nt.position.z,yn=Math.sqrt(bt*bt+ne*ne);if(vn%60===0&&(console.log(`Distance to flashlight: ${yn.toFixed(2)}m at position (${Nt.position.x}, ${Nt.position.z})`),console.log(`Player at: (${L.position.x.toFixed(2)}, ${L.position.z.toFixed(2)})`)),yn<3)console.log("PICKING UP FLASHLIGHT! Distance:",yn.toFixed(2)),Nt.userData.collected=!0,K.current.hasFlashlight=!0,N(!0),pt("Found Flashlight! Press 4 to toggle (drains power when on)"),Nt.visible=!1,Nt.traverse(Vn=>{Vn.geometry&&Vn.geometry.dispose(),Vn.material&&(Array.isArray(Vn.material)?Vn.material.forEach(wn=>wn.dispose()):Vn.material.dispose())}),oe.remove(Nt),console.log("Flashlight removed from scene"),setTimeout(()=>pt(""),4e3);else{Nt.rotation.y+=.03;const Vn=1;Nt.position.y=Vn+Math.sin(Date.now()*.002)*.2,Nt.children[0]&&Nt.children[0].lookAt(L.position)}}if(K.current.hasFlashlight){if(K.current.active&&K.current.power>0){const bt=Math.max(0,K.current.power-.05);K.current.power=bt,St(bt),Di.visible=!0,Wi.visible=!0}else Di.visible=!1,Wi.visible=!1;K.current.power<=0&&K.current.active&&(K.current.active=!1,Pt(!1))}if(ln){vn%60===0&&console.log("🔥💡 INTENSE LIGHTING MODE ACTIVE!");const bt=1.5+Math.random()*1.5;if(ee.intensity=bt,qt.intensity=bt,ze.intensity=bt,Vt.intensity=bt,ue.intensity=bt,sn.intensity=bt,$e.intensity=bt,U.intensity=bt,Math.random()<.5){const ne=Math.random()<.5?16711680:16777215;ee.color.setHex(ne),qt.color.setHex(ne),ze.color.setHex(ne),Vt.color.setHex(ne)}}else ee.intensity=.8+Math.random()*.4,qt.intensity=.8+Math.random()*.4,ze.intensity=.8+Math.random()*.4,Vt.intensity=.8+Math.random()*.4,ue.intensity=.8+Math.random()*.4,sn.intensity=.8+Math.random()*.4,$e.intensity=.8+Math.random()*.4,U.intensity=.8+Math.random()*.4}ce.render(oe,L)}pn();const xa=()=>{L.aspect=window.innerWidth/window.innerHeight,L.updateProjectionMatrix(),ce.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",xa),()=>{if(window.removeEventListener("keydown",Yt),window.removeEventListener("keyup",Ze),document.removeEventListener("mousemove",be),ce.domElement.removeEventListener("click",Rn),window.removeEventListener("resize",xa),o.current?.removeChild(ce.domElement),i.current){try{i.current.pause()}catch{}i.current=null}if(r.current){try{r.current.pause()}catch{}try{r.current.currentTime=0}catch{}r.current=null}ce.dispose()}},[S]);const Lt=()=>{window.location.reload()},Ht=kt=>{const oe=7+Math.floor(kt/60),L=kt%60;return`2:${oe.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")} AM`};return Xt.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"relative",backgroundColor:"#0b0b0b",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)",pointerEvents:"none",zIndex:10}}),Xt.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),S&&!m&&R<80&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",background:`radial-gradient(circle, transparent ${40+R/2}%, rgba(0,0,0,${(100-R)/100}) 100%)`,zIndex:9997,transition:"background 0.3s ease"}}),Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:(100-R)/200,background:"repeating-linear-gradient(0deg, transparent 0px, rgba(255,0,0,0.03) 2px, transparent 4px)",animation:R<30?"fear-shake 0.2s infinite":"none",zIndex:9997}}),R<30&&Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",background:`rgba(255,0,0,${(30-R)/100})`,zIndex:9997,mixBlendMode:"multiply"}})]}),Xt.jsxs("div",{className:"crt-overlay",style:{pointerEvents:"none"},children:[Xt.jsx("div",{className:"crt-scanlines"}),Xt.jsx("div",{className:"crt-noise"}),Xt.jsx("div",{className:"crt-veneer"})]}),Xt.jsxs("div",{style:{position:"absolute",top:12,left:12,color:"#d6d6d6",fontSize:"18px",lineHeight:"18px",background:"linear-gradient(#0f0f0f, #131313)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',imageRendering:"pixelated",animation:"hud-flicker 7s infinite"},children:["Score: ",d]}),Xt.jsx("div",{style:{position:"absolute",top:12,right:12,color:"#cfcfcf",fontSize:"16px",background:"rgba(20,20,20,0.6)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",textAlign:"right",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:Ht(A)}),S&&!m&&Xt.jsxs(Xt.Fragment,{children:[Tt&&Xt.jsxs("div",{style:{position:"absolute",bottom:220,right:12,color:$<20?"#ff6666":$<50?"#ffff00":"#66ccff",fontSize:"13px",background:"linear-gradient(#0b0b0b, #111111)",padding:"8px",border:`2px solid ${$<20?"#ff0000":$<50?"#ffff00":"#00ccff"}`,borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',width:"188px",boxSizing:"border-box",animation:$<20?"sanity-pulse 1s infinite":"none",zIndex:1e3},children:[Xt.jsxs("div",{style:{fontSize:"10px",marginBottom:"4px",textAlign:"center"},children:["FLASHLIGHT ",Ct?"⚡":""]}),Xt.jsx("div",{style:{width:"100%",height:"8px",background:"#222",border:"1px solid #444",position:"relative"},children:Xt.jsx("div",{style:{width:`${$}%`,height:"100%",background:$<20?"linear-gradient(90deg, #ff0000, #ff6666)":$<50?"linear-gradient(90deg, #ffaa00, #ffff00)":"linear-gradient(90deg, #00ccff, #66eeff)",transition:"width 0.3s ease",boxShadow:Ct?"0 0 10px rgba(0,200,255,0.5)":"none"}})}),Xt.jsxs("div",{style:{fontSize:"10px",marginTop:"2px",textAlign:"center"},children:[Math.floor($),"% ",$===0?"(EMPTY)":""]})]}),Xt.jsxs("div",{style:{position:"absolute",bottom:140,right:12,color:R<30?"#ff6666":R<60?"#ffff00":"#66ff66",fontSize:"13px",background:"linear-gradient(#0b0b0b, #111111)",padding:"8px",border:`2px solid ${R<30?"#ff0000":R<60?"#ffff00":"#00ff00"}`,borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',width:"188px",boxSizing:"border-box",animation:R<30?"sanity-pulse 1s infinite":"none",zIndex:1e3},children:[Xt.jsx("div",{style:{fontSize:"10px",marginBottom:"4px",textAlign:"center"},children:"SANITY"}),Xt.jsx("div",{style:{width:"100%",height:"8px",background:"#222",border:"1px solid #444",position:"relative"},children:Xt.jsx("div",{style:{width:`${R}%`,height:"100%",background:R<30?"linear-gradient(90deg, #ff0000, #ff6666)":R<60?"linear-gradient(90deg, #ffaa00, #ffff00)":"linear-gradient(90deg, #00ff00, #66ff66)",transition:"width 0.3s ease",boxShadow:R<30?"0 0 10px rgba(255,0,0,0.5)":"none"}})}),Xt.jsxs("div",{style:{fontSize:"10px",marginTop:"2px",textAlign:"center"},children:[Math.floor(R),"%"]})]}),Xt.jsx("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",color:"#d0d0d0",fontSize:y<10||I<10?"20px":"14px",background:y<10||I<10?"rgba(30,10,10,0.6)":"rgba(20,20,20,0.4)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center"},children:y<10||I<10?"THEY ARE NEAR":`Entity: ${y}m | Troll: ${I}m`}),W&&Xt.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#ffff00",fontSize:"18px",background:"rgba(20,20,20,0.9)",padding:"12px 20px",border:"2px solid #ffff00",borderRadius:"4px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center",boxShadow:"0 0 20px rgba(255,255,0,0.5)",zIndex:1e3},children:W}),O.length>0&&Xt.jsxs("div",{style:{position:"absolute",bottom:60,left:"50%",transform:"translateX(-50%)",color:"#00ffff",fontSize:"16px",background:"rgba(20,20,20,0.8)",padding:"12px 16px",border:"1px solid #00ffff",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center",display:"flex",alignItems:"center",gap:"8px"},children:[Xt.jsx("span",{style:{marginRight:"8px"},children:"Input:"}),O.map((kt,de)=>{const oe={1:T_,2:b_,3:A_};return Xt.jsx("img",{src:oe[kt],alt:`hand ${kt}`,style:{width:"32px",height:"32px",imageRendering:"pixelated",filter:"drop-shadow(0 0 4px #00ffff)"}},de)}),Xt.jsxs("span",{style:{marginLeft:"8px"},children:["(",O.length,"/6)"]})]}),Xt.jsxs("div",{style:{position:"absolute",top:60,left:12,color:"#ffff00",fontSize:"14px",background:"rgba(20,20,20,0.7)",padding:"6px 10px",border:"1px solid #2b2b2b",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:["Hands Found: ",gt.length,"/6"]}),R<30&&R>0&&Xt.jsxs("div",{style:{position:"absolute",top:"40%",left:"50%",transform:"translateX(-50%)",color:"#ff0000",fontSize:"14px",background:"rgba(30,0,0,0.8)",padding:"8px 16px",border:"2px solid #ff0000",borderRadius:"2px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',textAlign:"center",animation:"fear-pulse 0.5s infinite",textShadow:"0 0 10px rgba(255,0,0,0.8)",zIndex:1001},children:["⚠ YOUR MIND IS BREAKING ⚠",Xt.jsx("br",{}),Xt.jsx("span",{style:{fontSize:"11px"},children:"GET AWAY FROM THEM!"})]})]}),F&&Xt.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(4,4,6,0.6)"},children:Xt.jsx("img",{src:N1,alt:"",style:{width:`${40+Z*40}%`,height:`${40+Z*40}%`,objectFit:"cover",opacity:.95,filter:`grayscale(0.7) contrast(${.9+Z*.2}) brightness(${.9-Z*.2})`,transition:"none",imageRendering:"auto",border:"2px solid rgba(60,60,60,0.6)"}})}),Xt.jsxs("div",{style:{position:"absolute",bottom:12,right:12,color:"#d0d0d0",fontSize:"13px",background:"linear-gradient(#0b0b0b, #111111)",padding:"8px",border:"1px solid #2b2b2b",borderRadius:"2px",lineHeight:"18px",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:["WASD - move",Xt.jsx("br",{}),"SPACE - jump",Xt.jsx("br",{}),"1/2/3 - switch hands",Xt.jsx("br",{}),"4 - flashlight",Xt.jsx("br",{}),"R - reset input",Xt.jsx("br",{}),"Mouse - look"]}),!S&&!m&&Xt.jsxs("div",{onClick:()=>{st.current.started=!0,M(!0),setTimeout(()=>{e.current&&e.current.domElement.requestPointerLock()},100)},style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#dcdcdc",fontSize:"16px",backgroundColor:"rgba(12,12,12,0.95)",padding:"40px 50px",border:"2px solid #3a3a3a",boxShadow:"0 0 30px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.3)",cursor:"pointer",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace',backgroundImage:`url(${Bd})`,backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay",overflow:"hidden"},children:[Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`url(${Bd})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(15px) grayscale(100%) brightness(0.3) contrast(0.5)",opacity:.15,zIndex:-1}}),Xt.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)",pointerEvents:"none",zIndex:1,opacity:.3}}),Xt.jsxs("div",{style:{position:"relative",zIndex:2},children:[Xt.jsx("div",{style:{fontSize:"48px",marginBottom:"8px",fontWeight:"bold",textShadow:"0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)",letterSpacing:"4px",animation:"title-glow 3s infinite alternate"},children:"LIMINAL MALL"}),Xt.jsx("div",{style:{fontSize:"11px",color:"#888",marginBottom:"20px",letterSpacing:"2px",textTransform:"uppercase"},children:"━━━━━ SURVIVAL HORROR ━━━━━"}),Xt.jsx("div",{style:{fontSize:"14px",color:"#ffff00",marginBottom:"12px",textShadow:"0 0 8px rgba(255,255,0,0.4), 1px 1px 2px rgba(0,0,0,0.8)"},children:"Find your way out of the mall"}),Xt.jsx("div",{style:{fontSize:"12px",color:"#ff6666",marginTop:"14px",marginBottom:"14px",fontStyle:"italic",textShadow:"0 0 5px rgba(255,100,100,0.3)"},children:"...something is watching..."}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#999",marginBottom:"20px",opacity:.7},children:["The mall has been running for a long time",Xt.jsx("br",{}),"Time: 2:07 AM • Security: OFFLINE"]}),Xt.jsx("div",{style:{fontSize:"16px",color:"#00ff00",marginTop:"20px",padding:"10px 24px",border:"2px solid #00ff00",display:"inline-block",boxShadow:"0 0 15px rgba(0,255,0,0.3), inset 0 0 10px rgba(0,255,0,0.1)",animation:"button-pulse 2s infinite",letterSpacing:"2px",fontWeight:"bold"},children:">> CLICK TO ENTER <<"}),Xt.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"16px",letterSpacing:"1px"},children:"[ HEADPHONES RECOMMENDED ]"})]})]}),m&&!v&&Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#e6e6e6",fontSize:"18px",backgroundColor:"rgba(10,10,10,0.98)",padding:"28px",border:"1px solid #2d2d2d",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",imageRendering:"pixelated",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{fontSize:"28px",marginBottom:"12px",color:"#cfcfcf"},children:"IT GOT YOU"}),Xt.jsxs("div",{style:{fontSize:"14px",color:"#bdbdbd",marginBottom:"8px"},children:["You survived: ",Ht(A)]}),Xt.jsxs("div",{style:{fontSize:"14px",color:"#bdbdbd",marginBottom:"12px"},children:["Score: ",d]}),Xt.jsx("button",{onClick:Lt,style:{marginTop:"10px",padding:"10px 28px",fontSize:"14px",background:"#1a1a1a",color:"#dcdcdc",border:"1px solid #2b2b2b",cursor:"pointer",fontWeight:"normal",borderRadius:"2px"},children:"TRY AGAIN"})]}),v&&Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#e6e6e6",fontSize:"16px",backgroundColor:"rgba(12,12,12,0.98)",padding:"24px",border:"1px solid #2d2d2d",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.02)",imageRendering:"pixelated",fontFamily:'Tahoma, "Lucida Console", Monaco, monospace'},children:[Xt.jsx("div",{style:{fontSize:"22px",marginBottom:"10px",color:"#cfcfcf"},children:"YOU ESCAPED"}),Xt.jsxs("div",{style:{fontSize:"13px",color:"#bdbdbd",marginBottom:"8px"},children:["Escape Time: ",Ht(A)]}),Xt.jsxs("div",{style:{fontSize:"13px",color:"#bdbdbd",marginBottom:"10px"},children:["Final Score: ",d]}),Xt.jsx("button",{onClick:Lt,style:{marginTop:"8px",padding:"8px 22px",fontSize:"13px",background:"#171717",color:"#dcdcdc",border:"1px solid #2b2b2b",cursor:"pointer",fontWeight:"normal",borderRadius:"2px"},children:"PLAY AGAIN"})]}),Xt.jsx("style",{children:`
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

      `})]})}hS.createRoot(document.getElementById("root")).render(Xt.jsx(je.StrictMode,{children:Xt.jsx(z1,{})}));
