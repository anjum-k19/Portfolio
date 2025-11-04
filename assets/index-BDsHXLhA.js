(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function fS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function dS(){if(hx)return Mo;hx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var px;function hS(){return px||(px=1,jf.exports=dS()),jf.exports}var Tt=hS(),Zf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function pS(){if(mx)return re;mx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function S(N,rt,St){this.props=N,this.context=rt,this.refs=b,this.updater=St||T}S.prototype.isReactComponent={},S.prototype.setState=function(N,rt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,rt,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=S.prototype;function U(N,rt,St){this.props=N,this.context=rt,this.refs=b,this.updater=St||T}var P=U.prototype=new O;P.constructor=U,R(P,S.prototype),P.isPureReactComponent=!0;var k=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function D(N,rt,St){var Et=St.ref;return{$$typeof:o,type:N,key:rt,ref:Et!==void 0?Et:null,props:St}}function C(N,rt){return D(N.type,rt,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function Q(N){var rt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return rt[St]})}var ot=/\/+/g;function ct(N,rt){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):rt.toString(36)}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(rt){N.status==="pending"&&(N.status="fulfilled",N.value=rt)},function(rt){N.status==="pending"&&(N.status="rejected",N.reason=rt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,rt,St,Et,Ot){var at=typeof N;(at==="undefined"||at==="boolean")&&(N=null);var ft=!1;if(N===null)ft=!0;else switch(at){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(N.$$typeof){case o:case e:ft=!0;break;case v:return ft=N._init,z(ft(N._payload),rt,St,Et,Ot)}}if(ft)return Ot=Ot(N),ft=Et===""?"."+ct(N,0):Et,k(Ot)?(St="",ft!=null&&(St=ft.replace(ot,"$&/")+"/"),z(Ot,rt,St,"",function(Wt){return Wt})):Ot!=null&&(H(Ot)&&(Ot=C(Ot,St+(Ot.key==null||N&&N.key===Ot.key?"":(""+Ot.key).replace(ot,"$&/")+"/")+ft)),rt.push(Ot)),1;ft=0;var At=Et===""?".":Et+":";if(k(N))for(var Gt=0;Gt<N.length;Gt++)Et=N[Gt],at=At+ct(Et,Gt),ft+=z(Et,rt,St,at,Ot);else if(Gt=M(N),typeof Gt=="function")for(N=Gt.call(N),Gt=0;!(Et=N.next()).done;)Et=Et.value,at=At+ct(Et,Gt++),ft+=z(Et,rt,St,at,Ot);else if(at==="object"){if(typeof N.then=="function")return z(ht(N),rt,St,Et,Ot);throw rt=String(N),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function j(N,rt,St){if(N==null)return N;var Et=[],Ot=0;return z(N,Et,"","",function(at){return rt.call(St,at,Ot++)}),Et}function q(N){if(N._status===-1){var rt=N._result;rt=rt(),rt.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=rt)}if(N._status===1)return N._result.default;throw N._result}var gt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_t={map:j,forEach:function(N,rt,St){j(N,function(){rt.apply(this,arguments)},St)},count:function(N){var rt=0;return j(N,function(){rt++}),rt},toArray:function(N){return j(N,function(rt){return rt})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=_t,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,rt,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Et=R({},N.props),Ot=N.key;if(rt!=null)for(at in rt.key!==void 0&&(Ot=""+rt.key),rt)!$.call(rt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&rt.ref===void 0||(Et[at]=rt[at]);var at=arguments.length-2;if(at===1)Et.children=St;else if(1<at){for(var ft=Array(at),At=0;At<at;At++)ft[At]=arguments[At+2];Et.children=ft}return D(N.type,Ot,Et)},re.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,rt,St){var Et,Ot={},at=null;if(rt!=null)for(Et in rt.key!==void 0&&(at=""+rt.key),rt)$.call(rt,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=rt[Et]);var ft=arguments.length-2;if(ft===1)Ot.children=St;else if(1<ft){for(var At=Array(ft),Gt=0;Gt<ft;Gt++)At[Gt]=arguments[Gt+2];Ot.children=At}if(N&&N.defaultProps)for(Et in ft=N.defaultProps,ft)Ot[Et]===void 0&&(Ot[Et]=ft[Et]);return D(N,at,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=H,re.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:q}},re.memo=function(N,rt){return{$$typeof:p,type:N,compare:rt===void 0?null:rt}},re.startTransition=function(N){var rt=F.T,St={};F.T=St;try{var Et=N(),Ot=F.S;Ot!==null&&Ot(St,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(L,gt)}catch(at){gt(at)}finally{rt!==null&&St.types!==null&&(rt.types=St.types),F.T=rt}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(N){return F.H.use(N)},re.useActionState=function(N,rt,St){return F.H.useActionState(N,rt,St)},re.useCallback=function(N,rt){return F.H.useCallback(N,rt)},re.useContext=function(N){return F.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,rt){return F.H.useDeferredValue(N,rt)},re.useEffect=function(N,rt){return F.H.useEffect(N,rt)},re.useEffectEvent=function(N){return F.H.useEffectEvent(N)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(N,rt,St){return F.H.useImperativeHandle(N,rt,St)},re.useInsertionEffect=function(N,rt){return F.H.useInsertionEffect(N,rt)},re.useLayoutEffect=function(N,rt){return F.H.useLayoutEffect(N,rt)},re.useMemo=function(N,rt){return F.H.useMemo(N,rt)},re.useOptimistic=function(N,rt){return F.H.useOptimistic(N,rt)},re.useReducer=function(N,rt,St){return F.H.useReducer(N,rt,St)},re.useRef=function(N){return F.H.useRef(N)},re.useState=function(N){return F.H.useState(N)},re.useSyncExternalStore=function(N,rt,St){return F.H.useSyncExternalStore(N,rt,St)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.0",re}var xx;function Mh(){return xx||(xx=1,Zf.exports=pS()),Zf.exports}var Oe=Mh();const qa=fS(Oe);var Kf={exports:{}},Eo={},Qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function mS(){return gx||(gx=1,(function(o){function e(z,j){var q=z.length;z.push(j);t:for(;0<q;){var gt=q-1>>>1,_t=z[gt];if(0<l(_t,j))z[gt]=j,z[q]=_t,q=gt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],q=z.pop();if(q!==j){z[0]=q;t:for(var gt=0,_t=z.length,N=_t>>>1;gt<N;){var rt=2*(gt+1)-1,St=z[rt],Et=rt+1,Ot=z[Et];if(0>l(St,q))Et<_t&&0>l(Ot,St)?(z[gt]=Ot,z[Et]=q,gt=Et):(z[gt]=St,z[rt]=q,gt=rt);else if(Et<_t&&0>l(Ot,q))z[gt]=Ot,z[Et]=q,gt=Et;else break t}}return j}function l(z,j){var q=z.sortIndex-j.sortIndex;return q!==0?q:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,y=3,M=!1,T=!1,R=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=z)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function k(z){if(R=!1,P(z),!T)if(i(m)!==null)T=!0,L||(L=!0,Q());else{var j=i(p);j!==null&&ht(k,j.startTime-z)}}var L=!1,F=-1,$=5,D=-1;function C(){return b?!0:!(o.unstable_now()-D<$)}function H(){if(b=!1,L){var z=o.unstable_now();D=z;var j=!0;try{t:{T=!1,R&&(R=!1,O(F),F=-1),M=!0;var q=y;try{e:{for(P(z),_=i(m);_!==null&&!(_.expirationTime>z&&C());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,y=_.priorityLevel;var _t=gt(_.expirationTime<=z);if(z=o.unstable_now(),typeof _t=="function"){_.callback=_t,P(z),j=!0;break e}_===i(m)&&r(m),P(z)}else r(m);_=i(m)}if(_!==null)j=!0;else{var N=i(p);N!==null&&ht(k,N.startTime-z),j=!1}}break t}finally{_=null,y=q,M=!1}j=void 0}}finally{j?Q():L=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ct=ot.port2;ot.port1.onmessage=H,Q=function(){ct.postMessage(null)}}else Q=function(){S(H,0)};function ht(z,j){F=S(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var q=y;y=j;try{return z()}finally{y=q}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=y;y=z;try{return j()}finally{y=q}},o.unstable_scheduleCallback=function(z,j,q){var gt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?gt+q:gt):q=gt,z){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=q+_t,z={id:v++,callback:j,priorityLevel:z,startTime:q,expirationTime:_t,sortIndex:-1},q>gt?(z.sortIndex=q,e(p,z),i(m)===null&&z===i(p)&&(R?(O(F),F=-1):R=!0,ht(k,q-gt))):(z.sortIndex=_t,e(m,z),T||M||(T=!0,L||(L=!0,Q()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=y;return function(){var q=y;y=j;try{return z.apply(this,arguments)}finally{y=q}}}})(Jf)),Jf}var vx;function xS(){return vx||(vx=1,Qf.exports=mS()),Qf.exports}var $f={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function gS(){if(_x)return wn;_x=1;var o=Mh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},wn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var Sx;function vS(){if(Sx)return $f.exports;Sx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=gS(),$f.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function _S(){if(yx)return Eo;yx=1;var o=xS(),e=Mh(),i=vS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case L:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case $:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var ht=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function N(t){return{current:t}}function rt(t){0>_t||(t.current=gt[_t],gt[_t]=null,_t--)}function St(t,n){_t++,gt[_t]=t.current,t.current=n}var Et=N(null),Ot=N(null),at=N(null),ft=N(null);function At(t,n){switch(St(at,n),St(Ot,t),St(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pm(n),t=Fm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(Et),St(Et,t)}function Gt(){rt(Et),rt(Ot),rt(at)}function Wt(t){t.memoizedState!==null&&St(ft,t);var n=Et.current,a=Fm(n,t.type);n!==a&&(St(Ot,t),St(Et,a))}function oe(t){Ot.current===t&&(rt(Et),rt(Ot)),ft.current===t&&(rt(ft),_o._currentValue=q)}var Je,ce;function Ae(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+ce}var I=!1;function ue(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var it=lt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(lt){it=lt}t.call(xt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),J=E.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===J.length)for(s=B.length-1,c=J.length-1;1<=s&&0<=c&&B[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==J[c]){var pt=`
`+B[s].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ae(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return Ae("Activity");default:return""}}function ge(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Bt=Object.prototype.hasOwnProperty,Ie=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ne=o.unstable_shouldYield,w=o.unstable_requestPaint,x=o.unstable_now,G=o.unstable_getCurrentPriorityLevel,et=o.unstable_ImmediatePriority,dt=o.unstable_UserBlockingPriority,nt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,jt=o.log,kt=o.unstable_setDisableYieldValue,yt=null,Mt=null;function Zt(t){if(typeof jt=="function"&&kt(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(yt,t)}catch{}}var Xt=Math.clz32?Math.clz32:V,Pt=Math.log,ie=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Pt(t)/ie|0)|0}var Ut=256,Ct=262144,wt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=bt(s):(g&=E,g!==0?c=bt(g):a||(a=E&~t,a!==0&&(c=bt(a))))):(E=s&~f,E!==0?c=bt(E):g!==0?c=bt(g):a||(a=s&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var pt=31-Xt(a),xt=1<<pt;E[pt]=0,B[pt]=-1;var it=J[pt];if(it!==null)for(J[pt]=null,pt=0;pt<it.length;pt++){var lt=it[pt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}s!==0&&Xo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Xo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Xt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ds(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Xt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Us(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ja(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:sx(t.type))}function Ns(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var qn=Math.random().toString(36).slice(2),sn="__reactFiber$"+qn,hn="__reactProps$"+qn,Pi="__reactContainer$"+qn,wr="__reactEvents$"+qn,Gc="__reactListeners$"+qn,Vc="__reactHandles$"+qn,ko="__reactResources$"+qn,$a="__reactMarker$"+qn;function Os(t){delete t[sn],delete t[hn],delete t[wr],delete t[Gc],delete t[Vc]}function ma(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Pi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=km(t);t!==null;){if(a=t[sn])return a;t=km(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[sn]||t[Pi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function st(t){var n=t[ko];return n||(n=t[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(t){t[$a]=!0}var Z=new Set,Rt={};function Lt(t,n){Ft(t,n),Ft(t+"Capture",n)}function Ft(t,n){for(Rt[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Kt(t){return Bt.call(ee,t)?!0:Bt.call($t,t)?!1:Ht.test(t)?ee[t]=!0:($t[t]=!0,!1)}function de(t,n,a){if(Kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Re(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function we(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Pe(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Pe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xa=/[\n"\\]/g;function Ye(t){return t.replace(xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(t,n,a,s,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+be(n)):t.value!==""+be(n)&&(t.value=""+be(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?_n(t,g,be(n)):a!=null?_n(t,g,be(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+be(E):t.removeAttribute("name")}function je(t,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),We(t)}function _n(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+be(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+be(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=be(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),We(t)}function Ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Oh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Nh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Nh(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(t){return lv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var kc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function zh(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Fi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[hn]||null;if(!c)throw Error(r(90));Fi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Me(s)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var qc=!1;function Ph(t,n,a){if(qc)return t(n,a);qc=!0;try{var s=t(n);return s}finally{if(qc=!1,(Dr!==null||Ur!==null)&&(Ll(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,zh(n),t)))for(n=0;n<t.length;n++)zh(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Hi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Yc=!1}var ga=null,jc=null,qo=null;function Fh(){if(qo)return qo;var t,n=jc,a=n.length,s,c="value"in ga?ga.value:ga.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return qo=c.slice(t,1<s?1-s:void 0)}function Yo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function Bh(){return!1}function Pn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Bh,this.isPropagationStopped=Bh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pn(tr),Fs=_({},tr,{view:0,detail:0}),cv=Pn(Fs),Zc,Kc,Bs,Ko=_({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Zc=t.screenX-Bs.screenX,Kc=t.screenY-Bs.screenY):Kc=Zc=0,Bs=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Ih=Pn(Ko),uv=_({},Ko,{dataTransfer:0}),fv=Pn(uv),dv=_({},Fs,{relatedTarget:0}),Qc=Pn(dv),hv=_({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=Pn(hv),mv=_({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=Pn(mv),gv=_({},tr,{data:0}),Hh=Pn(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Sv[t])?!!n[t]:!1}function Jc(){return yv}var bv=_({},Fs,{key:function(t){if(t.key){var n=vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mv=Pn(bv),Ev=_({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=Pn(Ev),Tv=_({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Av=Pn(Tv),Rv=_({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Pn(Rv),wv=_({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Pn(wv),Uv=_({},tr,{newState:0,oldState:0}),Lv=Pn(Uv),Nv=[9,13,27,32],$c=Hi&&"CompositionEvent"in window,Is=null;Hi&&"documentMode"in document&&(Is=document.documentMode);var Ov=Hi&&"TextEvent"in window&&!Is,Vh=Hi&&(!$c||Is&&8<Is&&11>=Is),Xh=" ",kh=!1;function Wh(t,n){switch(t){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function zv(t,n){switch(t){case"compositionend":return qh(n);case"keypress":return n.which!==32?null:(kh=!0,Xh);case"textInput":return t=n.data,t===Xh&&kh?null:t;default:return null}}function Pv(t,n){if(Lr)return t==="compositionend"||!$c&&Wh(t,n)?(t=Fh(),qo=jc=ga=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vh&&n.locale!=="ko"?null:n.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Fv[t.type]:n==="textarea"}function jh(t,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Il(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function Bv(t){Dm(t,0)}function Qo(t){var n=W(t);if(Me(n))return t}function Zh(t,n){if(t==="change")return n}var Kh=!1;if(Hi){var tu;if(Hi){var eu="oninput"in document;if(!eu){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),eu=typeof Qh.oninput=="function"}tu=eu}else tu=!1;Kh=tu&&(!document.documentMode||9<document.documentMode)}function Jh(){Hs&&(Hs.detachEvent("onpropertychange",$h),Gs=Hs=null)}function $h(t){if(t.propertyName==="value"&&Qo(Gs)){var n=[];jh(n,Gs,t,Wc(t)),Ph(Bv,n)}}function Iv(t,n,a){t==="focusin"?(Jh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",$h)):t==="focusout"&&Jh()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Gs)}function Gv(t,n){if(t==="click")return Qo(n)}function Vv(t,n){if(t==="input"||t==="change")return Qo(n)}function Xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Xv;function Vs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Bt.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,n){var a=tp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var kv=Hi&&"documentMode"in document&&11>=document.documentMode,Nr=null,iu=null,Xs=null,au=!1;function ap(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Nr==null||Nr!==vn(s)||(s=Nr,"selectionStart"in s&&nu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Il(iu,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Nr)))}function er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},ru={},rp={};Hi&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function nr(t){if(ru[t])return ru[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in rp)return ru[t]=n[a];return t}var sp=nr("animationend"),op=nr("animationiteration"),lp=nr("animationstart"),Wv=nr("transitionrun"),qv=nr("transitionstart"),Yv=nr("transitioncancel"),cp=nr("transitionend"),up=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function xi(t,n){up.set(t,n),Lt(n,[t])}var Jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],zr=0,ou=0;function $o(){for(var t=zr,n=ou=zr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&fp(a,c,f)}}function tl(t,n,a,s){ai[zr++]=t,ai[zr++]=n,ai[zr++]=a,ai[zr++]=s,ou|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function lu(t,n,a,s){return tl(t,n,a,s),el(t)}function ir(t,n){return tl(t,null,null,n),el(t)}function fp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Xt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function el(t){if(50<fo)throw fo=0,vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function jv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new jv(t,n,a,s)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function nl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")cu(t)&&(g=1);else if(typeof t=="string")g=$_(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case R:return ar(a.children,c,f,n);case b:g=8,c|=24;break;case S:return t=jn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case k:return t=jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case L:return t=jn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case O:g=9;break t;case P:g=11;break t;case F:g=14;break t;case $:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ar(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function uu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function hp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function fu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var pp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ge(n)},pp.set(t,n),n)}return{value:t,source:n,stack:ge(n)}}var Fr=[],Br=0,il=null,ks=0,si=[],oi=0,va=null,Ri=1,Ci="";function Vi(t,n){Fr[Br++]=ks,Fr[Br++]=il,il=t,ks=n}function mp(t,n,a){si[oi++]=Ri,si[oi++]=Ci,si[oi++]=va,va=t;var s=Ri;t=Ci;var c=32-Xt(s)-1;s&=~(1<<c),a+=1;var f=32-Xt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ri=1<<32-Xt(n)+c|a<<c|s,Ci=f+t}else Ri=1<<f|a<<c|s,Ci=t}function du(t){t.return!==null&&(Vi(t,1),mp(t,1,0))}function hu(t){for(;t===il;)il=Fr[--Br],Fr[Br]=null,ks=Fr[--Br],Fr[Br]=null;for(;t===va;)va=si[--oi],si[oi]=null,Ci=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null}function xp(t,n){si[oi++]=Ri,si[oi++]=Ci,si[oi++]=va,Ri=n.id,Ci=n.overflow,va=t}var En=null,Ze=null,Ee=!1,_a=null,li=!1,pu=Error(r(519));function Sa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ri(n,t)),pu}function gp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[hn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)_e(po[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),je(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Om(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Sa(t,!0)}function vp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Ir(t){if(t!==En)return!1;if(!Ee)return vp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Sa(t),vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=Xm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=Xm(t)}else n===27?(n=Ze,Oa(t.type)?(t=Bf,Bf=null,Ze=t):Ze=n):Ze=En?ui(t.stateNode.nextSibling):null;return!0}function rr(){Ze=En=null,Ee=!1}function mu(){var t=_a;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),_a=null),t}function Ws(t){_a===null?_a=[t]:_a.push(t)}var xu=N(null),sr=null,Xi=null;function ya(t,n,a){St(xu,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=xu.current,rt(xu)}function gu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function vu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),gu(f.return,a,t),s||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),gu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Hr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Yn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===ft.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&vu(n,t,a,s),n.flags|=262144}function al(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function or(t){sr=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return _p(sr,t)}function rl(t,n){return sr===null&&or(t),_p(t,n)}function _p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(r(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var Zv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Kv=o.unstable_scheduleCallback,Qv=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Zv,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&Kv(Qv,function(){t.controller.abort()})}var Ys=null,Su=0,Gr=0,Vr=null;function Jv(t,n){if(Ys===null){var a=Ys=[];Su=0,Gr=Ef(),Vr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Su++,n.then(Sp,Sp),n}function Sp(){if(--Su===0&&Ys!==null){Vr!==null&&(Vr.status="fulfilled");var t=Ys;Ys=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $v(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yp=z.S;z.S=function(t,n){am=x(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jv(t,n),yp!==null&&yp(t,n)};var lr=N(null);function yu(){var t=lr.current;return t!==null?t:qe.pooledCache}function sl(t,n){n===null?St(lr,lr.current):St(lr,n.pool)}function bp(){var t=yu();return t===null?null:{parent:on._currentValue,pool:t}}var Xr=Error(r(460)),bu=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t}throw ur=n,Xr}}function cr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ur=a,Xr):a}}var ur=null;function Tp(){if(ur===null)throw Error(r(459));var t=ur;return ur=null,t}function Ap(t){if(t===Xr||t===ol)throw Error(r(483))}var kr=null,js=0;function cl(t){var n=js;return js+=1,kr===null&&(kr=[]),Ep(kr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rp(t){function n(Y,X){if(t){var K=Y.deletions;K===null?(Y.deletions=[X],Y.flags|=16):K.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function c(Y,X){return Y=Gi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<X?(Y.flags|=67108866,X):K):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,X,K,mt){return X===null||X.tag!==6?(X=uu(K,Y.mode,mt),X.return=Y,X):(X=c(X,K),X.return=Y,X)}function B(Y,X,K,mt){var Qt=K.type;return Qt===R?pt(Y,X,K.props.children,mt,K.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&cr(Qt)===X.type)?(X=c(X,K.props),Zs(X,K),X.return=Y,X):(X=nl(K.type,K.key,K.props,null,Y.mode,mt),Zs(X,K),X.return=Y,X)}function J(Y,X,K,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=fu(K,Y.mode,mt),X.return=Y,X):(X=c(X,K.children||[]),X.return=Y,X)}function pt(Y,X,K,mt,Qt){return X===null||X.tag!==7?(X=ar(K,Y.mode,mt,Qt),X.return=Y,X):(X=c(X,K),X.return=Y,X)}function xt(Y,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=uu(""+X,Y.mode,K),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return K=nl(X.type,X.key,X.props,null,Y.mode,K),Zs(K,X),K.return=Y,K;case T:return X=fu(X,Y.mode,K),X.return=Y,X;case $:return X=cr(X),xt(Y,X,K)}if(ht(X)||Q(X))return X=ar(X,Y.mode,K,null),X.return=Y,X;if(typeof X.then=="function")return xt(Y,cl(X),K);if(X.$$typeof===U)return xt(Y,rl(Y,X),K);ul(Y,X)}return null}function it(Y,X,K,mt){var Qt=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:E(Y,X,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Qt?B(Y,X,K,mt):null;case T:return K.key===Qt?J(Y,X,K,mt):null;case $:return K=cr(K),it(Y,X,K,mt)}if(ht(K)||Q(K))return Qt!==null?null:pt(Y,X,K,mt,null);if(typeof K.then=="function")return it(Y,X,cl(K),mt);if(K.$$typeof===U)return it(Y,X,rl(Y,K),mt);ul(Y,K)}return null}function lt(Y,X,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(K)||null,E(X,Y,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Y=Y.get(mt.key===null?K:mt.key)||null,B(X,Y,mt,Qt);case T:return Y=Y.get(mt.key===null?K:mt.key)||null,J(X,Y,mt,Qt);case $:return mt=cr(mt),lt(Y,X,K,mt,Qt)}if(ht(mt)||Q(mt))return Y=Y.get(K)||null,pt(X,Y,mt,Qt,null);if(typeof mt.then=="function")return lt(Y,X,K,cl(mt),Qt);if(mt.$$typeof===U)return lt(Y,X,K,rl(X,mt),Qt);ul(X,mt)}return null}function Vt(Y,X,K,mt){for(var Qt=null,De=null,qt=X,he=X=0,ye=null;qt!==null&&he<K.length;he++){qt.index>he?(ye=qt,qt=null):ye=qt.sibling;var Ue=it(Y,qt,K[he],mt);if(Ue===null){qt===null&&(qt=ye);break}t&&qt&&Ue.alternate===null&&n(Y,qt),X=f(Ue,X,he),De===null?Qt=Ue:De.sibling=Ue,De=Ue,qt=ye}if(he===K.length)return a(Y,qt),Ee&&Vi(Y,he),Qt;if(qt===null){for(;he<K.length;he++)qt=xt(Y,K[he],mt),qt!==null&&(X=f(qt,X,he),De===null?Qt=qt:De.sibling=qt,De=qt);return Ee&&Vi(Y,he),Qt}for(qt=s(qt);he<K.length;he++)ye=lt(qt,Y,he,K[he],mt),ye!==null&&(t&&ye.alternate!==null&&qt.delete(ye.key===null?he:ye.key),X=f(ye,X,he),De===null?Qt=ye:De.sibling=ye,De=ye);return t&&qt.forEach(function(Ia){return n(Y,Ia)}),Ee&&Vi(Y,he),Qt}function te(Y,X,K,mt){if(K==null)throw Error(r(151));for(var Qt=null,De=null,qt=X,he=X=0,ye=null,Ue=K.next();qt!==null&&!Ue.done;he++,Ue=K.next()){qt.index>he?(ye=qt,qt=null):ye=qt.sibling;var Ia=it(Y,qt,Ue.value,mt);if(Ia===null){qt===null&&(qt=ye);break}t&&qt&&Ia.alternate===null&&n(Y,qt),X=f(Ia,X,he),De===null?Qt=Ia:De.sibling=Ia,De=Ia,qt=ye}if(Ue.done)return a(Y,qt),Ee&&Vi(Y,he),Qt;if(qt===null){for(;!Ue.done;he++,Ue=K.next())Ue=xt(Y,Ue.value,mt),Ue!==null&&(X=f(Ue,X,he),De===null?Qt=Ue:De.sibling=Ue,De=Ue);return Ee&&Vi(Y,he),Qt}for(qt=s(qt);!Ue.done;he++,Ue=K.next())Ue=lt(qt,Y,he,Ue.value,mt),Ue!==null&&(t&&Ue.alternate!==null&&qt.delete(Ue.key===null?he:Ue.key),X=f(Ue,X,he),De===null?Qt=Ue:De.sibling=Ue,De=Ue);return t&&qt.forEach(function(uS){return n(Y,uS)}),Ee&&Vi(Y,he),Qt}function Xe(Y,X,K,mt){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Qt=K.key;X!==null;){if(X.key===Qt){if(Qt=K.type,Qt===R){if(X.tag===7){a(Y,X.sibling),mt=c(X,K.props.children),mt.return=Y,Y=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===$&&cr(Qt)===X.type){a(Y,X.sibling),mt=c(X,K.props),Zs(mt,K),mt.return=Y,Y=mt;break t}a(Y,X);break}else n(Y,X);X=X.sibling}K.type===R?(mt=ar(K.props.children,Y.mode,mt,K.key),mt.return=Y,Y=mt):(mt=nl(K.type,K.key,K.props,null,Y.mode,mt),Zs(mt,K),mt.return=Y,Y=mt)}return g(Y);case T:t:{for(Qt=K.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(Y,X.sibling),mt=c(X,K.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}mt=fu(K,Y.mode,mt),mt.return=Y,Y=mt}return g(Y);case $:return K=cr(K),Xe(Y,X,K,mt)}if(ht(K))return Vt(Y,X,K,mt);if(Q(K)){if(Qt=Q(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),te(Y,X,K,mt)}if(typeof K.then=="function")return Xe(Y,X,cl(K),mt);if(K.$$typeof===U)return Xe(Y,X,rl(Y,K),mt);ul(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(Y,X.sibling),mt=c(X,K),mt.return=Y,Y=mt):(a(Y,X),mt=uu(K,Y.mode,mt),mt.return=Y,Y=mt),g(Y)):a(Y,X)}return function(Y,X,K,mt){try{js=0;var Qt=Xe(Y,X,K,mt);return kr=null,Qt}catch(qt){if(qt===Xr||qt===ol)throw qt;var De=jn(29,qt,null,Y.mode);return De.lanes=mt,De.return=Y,De}finally{}}}var fr=Rp(!0),Cp=Rp(!1),ba=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=el(t),fp(t,null,a),n}return tl(t,s,n,a),el(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}function Tu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Au=!1;function Qs(){if(Au){var t=Vr;if(t!==null)throw t}}function Js(t,n,a,s){Au=!1;var c=t.updateQueue;ba=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,J=B.next;B.next=null,g===null?f=J:g.next=J,g=B;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,E=pt.lastBaseUpdate,E!==g&&(E===null?pt.firstBaseUpdate=J:E.next=J,pt.lastBaseUpdate=B))}if(f!==null){var xt=c.baseState;g=0,pt=J=B=null,E=f;do{var it=E.lane&-536870913,lt=it!==E.lane;if(lt?(Se&it)===it:(s&it)===it){it!==0&&it===Gr&&(Au=!0),pt!==null&&(pt=pt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Vt=t,te=E;it=n;var Xe=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){xt=Vt.call(Xe,xt,it);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,it=typeof Vt=="function"?Vt.call(Xe,xt,it):Vt,it==null)break t;xt=_({},xt,it);break t;case 2:ba=!0}}it=E.callback,it!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},pt===null?(J=pt=lt,B=xt):pt=pt.next=lt,g|=it;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;lt=E,E=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);pt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),wa|=g,t.lanes=g,t.memoizedState=xt}}function wp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wp(a[t],n)}var Wr=N(null),fl=N(0);function Up(t,n){t=$i,St(fl,t),St(Wr,n),$i=t|n.baseLanes}function Ru(){St(fl,$i),St(Wr,Wr.current)}function Cu(){$i=fl.current,rt(Wr),rt(fl)}var Zn=N(null),ci=null;function Ta(t){var n=t.alternate;St(nn,nn.current&1),St(Zn,t),ci===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(ci=t)}function wu(t){St(nn,nn.current),St(Zn,t),ci===null&&(ci=t)}function Lp(t){t.tag===22?(St(nn,nn.current),St(Zn,t),ci===null&&(ci=t)):Aa()}function Aa(){St(nn,nn.current),St(Zn,Zn.current)}function Kn(t){rt(Zn),ci===t&&(ci=null),rt(nn)}var nn=N(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,fe=null,Ge=null,ln=null,hl=!1,qr=!1,dr=!1,pl=0,$s=0,Yr=null,t_=0;function $e(){throw Error(r(321))}function Du(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Uu(t,n,a,s,c,f){return Wi=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?m0:qu,dr=!1,f=a(s,c),dr=!1,qr&&(f=Op(n,a,s,c)),Np(t),f}function Np(t){z.H=no;var n=Ge!==null&&Ge.next!==null;if(Wi=0,ln=Ge=fe=null,hl=!1,$s=0,Yr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&al(t)&&(cn=!0))}function Op(t,n,a,s){fe=t;var c=0;do{if(qr&&(Yr=null),$s=0,qr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=x0,f=n(a,s)}while(qr);return f}function e_(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(fe.flags|=1024),n}function Lu(){var t=pl!==0;return pl=0,t}function Nu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ou(t){if(hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}hl=!1}Wi=0,ln=Ge=fe=null,qr=!1,$s=pl=0,Yr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?fe.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Ge===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=ln===null?fe.memoizedState:ln.next;if(n!==null)ln=n,Ge=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},ln===null?fe.memoizedState=ln=t:ln=ln.next=t}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Yr===null&&(Yr=[]),t=Ep(Yr,t,n),n=fe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?m0:qu),t}function xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===U)return Tn(t)}throw Error(r(438,String(t)))}function zu(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function gl(t){var n=an();return Pu(n,Ge,t)}function Pu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,B=null,J=n,pt=!1;do{var xt=J.lane&-536870913;if(xt!==J.lane?(Se&xt)===xt:(Wi&xt)===xt){var it=J.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xt===Gr&&(pt=!0);else if((Wi&it)===it){J=J.next,it===Gr&&(pt=!0);continue}else xt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=xt,g=f):B=B.next=xt,fe.lanes|=it,wa|=it;xt=J.action,dr&&a(f,xt),f=J.hasEagerState?J.eagerState:a(f,xt)}else it={lane:xt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=it,g=f):B=B.next=it,fe.lanes|=xt,wa|=xt;J=J.next}while(J!==null&&J!==n);if(B===null?g=f:B.next=E,!Yn(f,t.memoizedState)&&(cn=!0,pt&&(a=Vr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Fu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zp(t,n,a){var s=fe,c=an(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Yn((Ge||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Hu(Bp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,jr(9,{destroy:void 0},Fp.bind(null,s,c,a,n),null),qe===null)throw Error(r(349));f||(Wi&127)!==0||Pp(s,n,a)}return a}function Pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=ml(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,s){n.value=a,n.getSnapshot=s,Ip(n)&&Hp(t)}function Bp(t,n,a){return a(function(){Ip(n)&&Hp(t)})}function Ip(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Hp(t){var n=ir(t,2);n!==null&&Gn(n,t,2)}function Bu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),dr){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function Gp(t,n,a,s){return t.baseState=a,Pu(t,Ge,typeof s=="function"?s:qi)}function n_(t,n,a,s,c){if(Sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var E=a(c,s),B=z.S;B!==null&&B(g,E),Xp(t,n,E)}catch(J){Iu(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,s),Xp(t,n,f)}catch(J){Iu(t,n,J)}}function Xp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){kp(t,n,s)},function(s){return Iu(t,n,s)}):kp(t,n,a)}function kp(t,n,a){n.status="fulfilled",n.value=a,Wp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vp(t,a)))}function Iu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Wp(n),n=n.next;while(n!==s)}t.action=null}function Wp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qp(t,n){return n}function Yp(t,n){if(Ee){var a=qe.formState;if(a!==null){t:{var s=fe;if(Ee){if(Ze){e:{for(var c=Ze,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ui(c.nextSibling),s=c.data==="F!";break t}}Sa(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:n},a.queue=s,a=d0.bind(null,fe,s),s.dispatch=a,s=Bu(!1),f=Wu.bind(null,fe,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=n_.bind(null,fe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function jp(t){var n=an();return Zp(n,Ge,t)}function Zp(t,n,a){if(n=Pu(t,n,qp)[0],t=gl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===Xr?ol:g}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,jr(9,{destroy:void 0},i_.bind(null,c,a),null)),[s,f,t]}function i_(t,n){t.action=n}function Kp(t){var n=an(),a=Ge;if(a!==null)return Zp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function jr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=ml(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Qp(){return an().memoizedState}function vl(t,n,a,s){var c=Nn();fe.flags|=t,c.memoizedState=jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ge!==null&&s!==null&&Du(s,Ge.memoizedState.deps)?c.memoizedState=jr(n,f,a,s):(fe.flags|=t,c.memoizedState=jr(1|n,f,a,s))}function Jp(t,n){vl(8390656,8,t,n)}function Hu(t,n){_l(2048,8,t,n)}function a_(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=ml(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $p(t){var n=an().memoizedState;return a_({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function t0(t,n){return _l(4,2,t,n)}function e0(t,n){return _l(4,4,t,n)}function n0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function i0(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,n0.bind(null,n,t),a)}function Gu(){}function a0(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Du(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function r0(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Du(n,s[1]))return s[0];if(s=t(),dr){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s}function Vu(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sm(),fe.lanes|=t,wa|=t,a)}function s0(t,n,a,s){return Yn(a,n)?a:Wr.current!==null?(t=Vu(t,a,s),Yn(t,n)||(cn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(Se&261930)===0?(cn=!0,t.memoizedState=a):(t=sm(),fe.lanes|=t,wa|=t,n)}function o0(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=z.T,E={};z.T=E,Wu(t,!1,n,a);try{var B=c(),J=z.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=$v(B,s);eo(t,n,pt,$n(t))}else eo(t,n,s,$n(t))}catch(xt){eo(t,n,{then:function(){},status:"rejected",reason:xt},$n())}finally{j.p=f,g!==null&&E.types!==null&&(g.types=E.types),z.T=g}}function r_(){}function Xu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=l0(t).queue;o0(t,c,n,q,a===null?r_:function(){return c0(t),a(s)})}function l0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function c0(t){var n=l0(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},$n())}function ku(){return Tn(_o)}function u0(){return an().memoizedState}function f0(){return an().memoizedState}function s_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ma(a);var s=Ea(n,t,a);s!==null&&(Gn(s,n,a),Ks(s,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function o_(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(t)?h0(n,a):(a=lu(t,n,a,s),a!==null&&(Gn(a,t,s),p0(a,n,s)))}function d0(t,n,a){var s=$n();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(t))h0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,g))return tl(t,n,c,0),qe===null&&$o(),!1}catch{}finally{}if(a=lu(t,n,c,s),a!==null)return Gn(a,t,s),p0(a,n,s),!0}return!1}function Wu(t,n,a,s){if(s={lane:2,revertLane:Ef(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(t)){if(n)throw Error(r(479))}else n=lu(t,a,s,2),n!==null&&Gn(n,t,2)}function Sl(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function h0(t,n){qr=hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function p0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}var no={readContext:Tn,use:xl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};no.useEffectEvent=$e;var m0={readContext:Tn,use:xl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Jp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,vl(4194308,4,n0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return vl(4194308,4,t,n)},useInsertionEffect:function(t,n){vl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(dr){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(dr){Zt(!0);try{a(n)}finally{Zt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=o_.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bu(t);var n=t.queue,a=d0.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(t,n){var a=Nn();return Vu(a,t,n)},useTransition:function(){var t=Bu(!1);return t=o0.bind(null,fe,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=fe,c=Nn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Se&127)!==0||Pp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Bp.bind(null,s,f,t),[t]),s.flags|=2048,jr(9,{destroy:void 0},Fp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=qe.identifierPrefix;if(Ee){var a=Ci,s=Ri;a=(s&~(1<<32-Xt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=t_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ku,useFormState:Yp,useActionState:Yp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:zu,useCacheRefresh:function(){return Nn().memoizedState=s_.bind(null,fe)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:Tn,use:xl,useCallback:a0,useContext:Tn,useEffect:Hu,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:e0,useMemo:r0,useReducer:gl,useRef:Qp,useState:function(){return gl(qi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=an();return s0(a,Ge.memoizedState,t,n)},useTransition:function(){var t=gl(qi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:zp,useId:u0,useHostTransitionStatus:ku,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=an();return Gp(a,Ge,t,n)},useMemoCache:zu,useCacheRefresh:f0};qu.useEffectEvent=$p;var x0={readContext:Tn,use:xl,useCallback:a0,useContext:Tn,useEffect:Hu,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:e0,useMemo:r0,useReducer:Fu,useRef:Qp,useState:function(){return Fu(qi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=an();return Ge===null?Vu(a,t,n):s0(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Fu(qi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:zp,useId:u0,useHostTransitionStatus:ku,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=an();return Ge!==null?Gp(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:f0};x0.useEffectEvent=$p;function Yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Ma(s);c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,s),n!==null&&(Gn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(t,c,s),n!==null&&(Gn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=Ma(a);s.tag=2,n!=null&&(s.callback=n),n=Ea(t,s,a),n!==null&&(Gn(n,t,a),Ks(n,t,a))}};function g0(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function v0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function hr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function _0(t){Jo(t)}function S0(t){console.error(t)}function y0(t){Jo(t)}function yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function b0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,n)},a}function M0(t){return t=Ma(t),t.tag=3,t}function E0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){b0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){b0(n,a,s),typeof c!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function l_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Nl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),yf(t,s,c)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),yf(t,s,c)),!1}throw Error(r(435,a.tag))}return yf(t,s,c),Nl(),!1}if(Ee)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==pu&&(t=Error(r(422),{cause:s}),Ws(ri(t,a)))):(s!==pu&&(n=Error(r(423),{cause:s}),Ws(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ri(s,a),c=Zu(t.stateNode,s,c),Tu(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),uo===null?uo=[f]:uo.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zu(a.stateNode,s,t),Tu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=M0(c),E0(c,t,a,s),Tu(a,c),!1}a=a.return}while(a!==null);return!1}var Ku=Error(r(461)),cn=!1;function An(t,n,a,s){n.child=t===null?Cp(n,null,a,s):fr(n,t.child,a,s)}function T0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return or(n),s=Uu(t,n,a,g,f,c),E=Lu(),t!==null&&!cn?(Nu(t,n,c),Yi(t,n,c)):(Ee&&E&&du(n),n.flags|=1,An(t,n,s,c),n.child)}function A0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,R0(t,n,f,s,c)):(t=nl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&t.ref===n.ref)return Yi(t,n,c)}return n.flags|=1,t=Gi(f,s),t.ref=n.ref,t.return=n,n.child=t}function R0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,rf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Yi(t,n,c)}return Qu(t,n,a,s,c)}function C0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return w0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Up(n,f):Ru(),Lp(n);else return s=n.lanes=536870912,w0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),Up(n,f),Aa(),n.memoizedState=null):(t!==null&&sl(n,null),Ru(),Aa());return An(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(t,n,a,s,c){var f=yu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&sl(n,null),Ru(),Lp(n),t!==null&&Hr(t,n,s,!0),n.childLanes=c,null}function bl(t,n){return n=El({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function D0(t,n,a){return fr(n,t.child,null,a),t=bl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function c_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(s.mode==="hidden")return t=bl(n,s),n.lanes=536870912,io(null,t);if(wu(n),(t=Ze)?(t=Vm(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw Sa(n);return n.lanes=536870912,null}return bl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(wu(n),c)if(n.flags&256)n.flags&=-257,n=D0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Hr(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(s=qe,s!==null&&(g=Us(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ir(t,g),Gn(s,t,g),Ku;Nl(),n=D0(t,n,a)}else t=f.treeContext,Ze=ui(g.nextSibling),En=n,Ee=!0,_a=null,li=!1,t!==null&&xp(n,t),n=bl(n,s),n.flags|=4096;return n}return t=Gi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qu(t,n,a,s,c){return or(n),a=Uu(t,n,a,s,void 0,c),s=Lu(),t!==null&&!cn?(Nu(t,n,c),Yi(t,n,c)):(Ee&&s&&du(n),n.flags|=1,An(t,n,a,c),n.child)}function U0(t,n,a,s,c,f){return or(n),n.updateQueue=null,a=Op(n,s,a,c),Np(t),s=Lu(),t!==null&&!cn?(Nu(t,n,f),Yi(t,n,f)):(Ee&&s&&du(n),n.flags|=1,An(t,n,a,f),n.child)}function L0(t,n,a,s,c){if(or(n),n.stateNode===null){var f=Pr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Pr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ju.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=hr(a,E);f.props=B;var J=f.context,pt=a.contextType;g=Pr,typeof pt=="object"&&pt!==null&&(g=Tn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==g)&&v0(n,f,s,g),ba=!1;var it=n.memoizedState;f.state=it,Js(n,s,f,c),Qs(),J=n.memoizedState,E||it!==J||ba?(typeof xt=="function"&&(Yu(n,a,xt,s),J=n.memoizedState),(B=ba||g0(n,a,B,s,it,J,g))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Eu(t,n),g=n.memoizedProps,pt=hr(a,g),f.props=pt,xt=n.pendingProps,it=f.context,J=a.contextType,B=Pr,typeof J=="object"&&J!==null&&(B=Tn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==xt||it!==B)&&v0(n,f,s,B),ba=!1,it=n.memoizedState,f.state=it,Js(n,s,f,c),Qs();var lt=n.memoizedState;g!==xt||it!==lt||ba||t!==null&&t.dependencies!==null&&al(t.dependencies)?(typeof E=="function"&&(Yu(n,a,E,s),lt=n.memoizedState),(pt=ba||g0(n,a,pt,s,it,lt,B)||t!==null&&t.dependencies!==null&&al(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=pt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=fr(n,t.child,null,c),n.child=fr(n,null,a,c)):An(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Yi(t,n,c),t}function N0(t,n,a,s){return rr(),n.flags|=256,An(t,n,a,s),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(t){return{baseLanes:t,cachePool:bp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function O0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?Ta(n):Aa(),(t=Ze)?(t=Vm(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw Sa(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Aa(),c=n.mode,E=El({mode:"hidden",children:E},c),s=ar(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=$u(a),s.childLanes=tf(t,g,a),n.memoizedState=Ju,io(null,s)):(Ta(n),ef(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=nf(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),E=s.fallback,c=n.mode,s=El({mode:"visible",children:s.children},c),E=ar(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,fr(n,t.child,null,a),s=n.child,s.memoizedState=$u(a),s.childLanes=tf(t,g,a),n.memoizedState=Ju,n=io(null,s));else if(Ta(n),Ff(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=nf(t,n,a)}else if(cn||Hr(t,n,a,!1),g=(a&t.childLanes)!==0,cn||g){if(g=qe,g!==null&&(s=Us(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,ir(t,s),Gn(g,t,s),Ku;Pf(E)||Nl(),n=nf(t,n,a)}else Pf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ze=ui(E.nextSibling),En=n,Ee=!0,_a=null,li=!1,t!==null&&xp(n,t),n=ef(n,s.children),n.flags|=4096);return n}return c?(Aa(),E=s.fallback,c=n.mode,B=t.child,J=B.sibling,s=Gi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Gi(J,E):(E=ar(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=$u(a):(c=E.cachePool,c!==null?(B=on._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=bp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=tf(t,g,a),n.memoizedState=Ju,io(t.child,s)):(Ta(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ef(t,n){return n=El({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function El(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function nf(t,n,a){return fr(n,t.child,null,a),t=ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function z0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),gu(t.return,n,a)}function af(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function P0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=nn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,St(nn,g),An(t,n,s,a),s=Ee?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z0(t,a,n);else if(t.tag===19)z0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}af(n,!0,a,null,f,s);break;case"together":af(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&al(t)))}function u_(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ya(n,on,t.memoizedState.cache),rr();break;case 27:case 5:Wt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?O0(t,n,a):(Ta(n),t=Yi(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Hr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return P0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(nn,nn.current),s)break;return null;case 22:return n.lanes=0,C0(t,n,a,n.pendingProps);case 24:ya(n,on,t.memoizedState.cache)}return Yi(t,n,a)}function F0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!rf(t,a)&&(n.flags&128)===0)return cn=!1,u_(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&mp(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=cr(n.elementType),n.type=t,typeof t=="function")cu(t)?(s=hr(t,s),n.tag=1,n=L0(null,n,t,s,a)):(n.tag=0,n=Qu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=T0(null,n,t,s,a);break t}else if(c===F){n.tag=14,n=A0(null,n,t,s,a);break t}}throw n=ct(t)||t,Error(r(306,n,""))}}return n;case 0:return Qu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=hr(s,n.pendingProps),L0(t,n,s,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ya(n,on,s),s!==f.cache&&vu(n,[on],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=N0(t,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),Ws(c),n=N0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=ui(t.firstChild),En=n,Ee=!0,_a=null,li=!0,a=Cp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rr(),s===c){n=Yi(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=jm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Hl(at.current).createElement(a),s[sn]=n,s[hn]=t,Rn(s,a,t),tt(s),n.stateNode=s):n.memoizedState=jm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&Ee&&(s=n.stateNode=Wm(n.type,n.pendingProps,at.current),En=n,li=!0,c=Ze,Oa(n.type)?(Bf=c,Ze=ui(s.firstChild)):Ze=c),An(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=s=Ze)&&(s=H_(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,En=n,Ze=ui(s.firstChild),li=!1,c=!0):c=!1),c||Sa(n)),Wt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Nf(c,f)?s=null:g!==null&&Nf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(t,n,e_,null,null,a),_o._currentValue=c),Ml(t,n),An(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=Ze)&&(a=G_(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,Ze=null,t=!0):t=!1),t||Sa(n)),null;case 13:return O0(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=fr(n,null,s,a):An(t,n,s,a),n.child;case 11:return T0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ya(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,or(n),c=Tn(c),s=s(c),n.flags|=1,An(t,n,s,a),n.child;case 14:return A0(t,n,n.type,n.pendingProps,a);case 15:return R0(t,n,n.type,n.pendingProps,a);case 19:return P0(t,n,a);case 31:return c_(t,n,a);case 22:return C0(t,n,a,n.pendingProps);case 24:return or(n),s=Tn(on),t===null?(c=yu(),c===null&&(c=qe,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),ya(n,on,c)):((t.lanes&a)!==0&&(Eu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,on,s)):(s=f.cache,ya(n,on,s),s!==c.cache&&vu(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function sf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(um())t.flags|=8192;else throw ur=ll,bu}else t.flags&=-16777217}function B0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$m(n))if(um())t.flags|=8192;else throw ur=ll,bu}function Tl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?He():536870912,t.lanes|=n,Jr|=n)}function ao(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function f_(t,n,a){var s=n.pendingProps;switch(hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(on),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ir(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mu())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(Ke(n),B0(n,f)):(Ke(n),sf(n,c,null,s,a))):f?f!==t.memoizedState?(ji(n),Ke(n),B0(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ji(n),Ke(n),sf(n,c,t,s,a)),null;case 27:if(oe(n),a=at.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=Et.current,Ir(n)?gp(n):(t=Wm(c,s,a),n.stateNode=t,ji(n))}return Ke(n),null;case 5:if(oe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=Et.current,Ir(n))gp(n);else{var g=Hl(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[sn]=n,f[hn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ji(n)}}return Ke(n),sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=at.current,Ir(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Om(t.nodeValue,a)),t||Sa(n,!0)}else t=Hl(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ir(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Ke(n),null);case 4:return Gt(),t===null&&Cf(n.stateNode.containerInfo),Ke(n),null;case 10:return ki(n.type),Ke(n),null;case 19:if(rt(nn),s=n.memoizedState,s===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,Tl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)dp(a,t),a=a.sibling;return St(nn,nn.current&1|2),Ee&&Vi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&x()>Dl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(t=dl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Tl(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ee)return Ke(n),null}else 2*x()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=x(),t.sibling=null,a=nn.current,St(nn,c?a&1|2:a&1),Ee&&Vi(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),Cu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&rt(lr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function d_(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(on),Gt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return rt(nn),null;case 4:return Gt(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),Cu(),t!==null&&rt(lr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function I0(t,n){switch(hu(n),n.tag){case 3:ki(on),Gt();break;case 26:case 27:case 5:oe(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:rt(nn);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),Cu(),t!==null&&rt(lr);break;case 24:ki(on)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){Be(n,n.return,E)}}function Ra(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var B=a,J=E;try{J()}catch(pt){Be(c,B,pt)}}}s=s.next}while(s!==f)}}catch(pt){Be(n,n.return,pt)}}function H0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(s){Be(t,t.return,s)}}}function G0(t,n,a){a.props=hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Be(t,n,c)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function V0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function of(t,n,a){try{var s=t.stateNode;O_(s,t.type,a,n),s[hn]=n}catch(c){Be(t,t.return,c)}}function X0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(s!==4&&(s===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,a),t=t.sibling;t!==null;)cf(t,n,a),t=t.sibling}function Al(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Al(t,n,a),t=t.sibling;t!==null;)Al(t,n,a),t=t.sibling}function k0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[sn]=t,n[hn]=a}catch(f){Be(t,t.return,f)}}var Zi=!1,un=!1,uf=!1,W0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function h_(t,n){if(t=t.containerInfo,Uf=Yl,t=ip(t),nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,J=0,pt=0,xt=t,it=null;e:for(;;){for(var lt;xt!==a||c!==0&&xt.nodeType!==3||(E=g+c),xt!==f||s!==0&&xt.nodeType!==3||(B=g+s),xt.nodeType===3&&(g+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)it=xt,xt=lt;for(;;){if(xt===t)break e;if(it===a&&++J===c&&(E=g),it===f&&++pt===s&&(B=g),(lt=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=lt}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:t,selectionRange:a},Yl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=hr(a.type,c);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function q0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),s&4&&ro(5,a);break;case 1:if(Qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&H0(a),s&512&&so(a,a.return);break;case 3:if(Qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&k0(a);case 26:case 5:Qi(t,a),n===null&&s&4&&V0(a),s&512&&so(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),s&4&&Z0(t,a);break;case 13:Qi(t,a),s&4&&K0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=b_.bind(null,a),V_(t,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||un,c=Zi;var f=un;Zi=s,(un=n)&&!f?Ji(t,a,(a.subtreeFlags&8772)!==0):Qi(t,a),Zi=c,un=f}break;case 30:break;default:Qi(t,a)}}function Y0(t){var n=t.alternate;n!==null&&(t.alternate=null,Y0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Os(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Fn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)j0(t,n,a),a=a.sibling}function j0(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:un||wi(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||wi(a,n);var s=Qe,c=Fn;Oa(a.type)&&(Qe=a.stateNode,Fn=!1),Ki(t,n,a),xo(a.stateNode),Qe=s,Fn=c;break;case 5:un||wi(a,n);case 6:if(s=Qe,c=Fn,Qe=null,Ki(t,n,a),Qe=s,Fn=c,Qe!==null)if(Fn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Fn?(t=Qe,Hm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ss(t)):Hm(Qe,a.stateNode));break;case 4:s=Qe,c=Fn,Qe=a.stateNode.containerInfo,Fn=!0,Ki(t,n,a),Qe=s,Fn=c;break;case 0:case 11:case 14:case 15:Ra(2,a,n),un||Ra(4,a,n),Ki(t,n,a);break;case 1:un||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&G0(a,n,s)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,Ki(t,n,a),un=s;break;default:Ki(t,n,a)}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ss(t)}catch(a){Be(n,n.return,a)}}}function K0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ss(t)}catch(a){Be(n,n.return,a)}}function p_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new W0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new W0),n;default:throw Error(r(435,t.tag))}}function Rl(t,n){var a=p_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=M_.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Oa(E.type)){Qe=E.stateNode,Fn=!1;break t}break;case 5:Qe=E.stateNode,Fn=!1;break t;case 3:case 4:Qe=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(Qe===null)throw Error(r(160));j0(f,g,c),Qe=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Q0(n,t),n=n.sibling}var gi=null;function Q0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),s&4&&(Ra(3,t,t.return),ro(3,t),Ra(5,t,t.return));break;case 1:Bn(n,t),In(t),s&512&&(un||a===null||wi(a,a.return)),s&64&&Zi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(Bn(n,t),In(t),s&512&&(un||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$a]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[sn]=t,tt(f),s=f;break t;case"link":var g=Qm("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Qm("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,tt(f),s=f}t.stateNode=s}else Jm(c,t.type,t.stateNode);else t.stateNode=Km(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Jm(c,t.type,t.stateNode):Km(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),s&512&&(un||a===null||wi(a,a.return)),a!==null&&s&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),s&512&&(un||a===null||wi(a,a.return)),t.flags&32){c=t.stateNode;try{Ai(c,"")}catch(Vt){Be(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,of(t,c,a!==null?a.memoizedProps:c)),s&1024&&(uf=!0);break;case 6:if(Bn(n,t),In(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Be(t,t.return,Vt)}}break;case 3:if(Xl=null,c=gi,gi=Gl(n.containerInfo),Bn(n,t),gi=c,In(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(Vt){Be(t,t.return,Vt)}uf&&(uf=!1,J0(t));break;case 4:s=gi,gi=Gl(t.stateNode.containerInfo),Bn(n,t),In(t),gi=s;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Rl(t,s)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=x()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Rl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Zi,pt=un;if(Zi=J||c,un=pt||B,Bn(n,t),un=pt,Zi=J,In(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Zi||un||pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var xt=B.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Vt){Be(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Vt){Be(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;c?Gm(lt,!0):Gm(B.stateNode,!1)}catch(Vt){Be(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rl(t,a))));break;case 19:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Rl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(X0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(t);Al(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ai(g,""),a.flags&=-33);var E=lf(t);Al(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,J=lf(t);cf(t,J,B);break;default:throw Error(r(161))}}catch(pt){Be(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function J0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;J0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)q0(t,n.alternate,n),n=n.sibling}function pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),pr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),pr(n);break;case 27:xo(n.stateNode);case 26:case 5:wi(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),ro(4,f);break;case 1:if(Ji(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Be(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],E)}catch(J){Be(s,s.return,J)}}a&&g&64&&H0(f),so(f,f.return);break;case 27:k0(f);case 26:case 5:Ji(c,f,a),a&&s===null&&g&4&&V0(f),so(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&g&4&&Z0(c,f);break;case 13:Ji(c,f,a),a&&g&4&&K0(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),so(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$0(t,n,a,s),n=n.sibling}function $0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&ro(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):oo(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,Zr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(g,n);break;case 24:vi(t,n,a,s),c&2048&&df(n.alternate,n);break;default:vi(t,n,a,s)}}function Zr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:Zr(f,g,E,B,c),ro(8,g);break;case 23:break;case 22:var pt=g.stateNode;g.memoizedState!==null?pt._visibility&2?Zr(f,g,E,B,c):oo(f,g):(pt._visibility|=2,Zr(f,g,E,B,c)),c&&J&2048&&ff(g.alternate,g);break;case 24:Zr(f,g,E,B,c),c&&J&2048&&df(g.alternate,g);break;default:Zr(f,g,E,B,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&ff(s.alternate,s);break;case 24:oo(a,s),c&2048&&df(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Kr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)tm(t,n,a),t=t.sibling}function tm(t,n,a){switch(t.tag){case 26:Kr(t,n,a),t.flags&lo&&t.memoizedState!==null&&tS(a,gi,t.memoizedState,t.memoizedProps);break;case 5:Kr(t,n,a);break;case 3:case 4:var s=gi;gi=Gl(t.stateNode.containerInfo),Kr(t,n,a),gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Kr(t,n,a),lo=s):Kr(t,n,a));break;default:Kr(t,n,a)}}function em(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,im(s,t)}em(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nm(t),t=t.sibling}function nm(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):co(t);break;default:co(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,im(s,t)}em(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function im(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(Y0(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var m_={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},x_=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,ve=null,Se=0,Fe=0,Qn=null,Ca=!1,Qr=!1,hf=!1,$i=0,tn=0,wa=0,mr=0,pf=0,Jn=0,Jr=0,uo=null,Hn=null,mf=!1,wl=0,am=0,Dl=1/0,Ul=null,Da=null,mn=0,Ua=null,$r=null,ta=0,xf=0,gf=null,rm=null,fo=0,vf=null;function $n(){return(Ne&2)!==0&&Se!==0?Se&-Se:z.T!==null?Ef():Ls()}function sm(){if(Jn===0)if((Se&536870912)===0||Ee){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===qe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(ts(t,0),La(t,Se,Jn,!1)),Cn(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(mr|=a),tn===4&&La(t,Se,Jn,!1)),Di(t))}function om(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?__(t,n):Sf(t,n,!0),f=s;do{if(c===0){Qr&&!s&&La(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!g_(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=uo;var B=E.current.memoizedState.isDehydrated;if(B&&(ts(E,g).flags|=256),g=Sf(E,g,!1),g!==2){if(hf&&!B){E.errorRecoveryDisabledLanes|=f,mr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ts(t,0),La(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(s,n,Jn,!Ca);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=wl+300-x(),10<c)){if(La(s,n,Jn,!Ca),vt(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=Bm(lm.bind(null,s,a,Hn,Ul,mf,n,Jn,mr,Jr,Ca,f,"Throttled",-0,0),c);break t}lm(s,a,Hn,Ul,mf,n,Jn,mr,Jr,Ca,f,null,-0,0)}}break}while(!0);Di(t)}function lm(t,n,a,s,c,f,g,E,B,J,pt,xt,it,lt){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},tm(n,f,xt);var Vt=(f&62914560)===f?wl-x():(f&4194048)===f?am-x():0;if(Vt=eS(xt,Vt),Vt!==null){ta=f,t.cancelPendingCommit=Vt(xm.bind(null,t,n,f,a,s,c,g,E,B,pt,xt,null,it,lt)),La(t,f,g,!J);return}}xm(t,n,f,a,s,c,g,E,B)}function g_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(t,n,a,s){n&=~pf,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Xt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Xo(t,a,n)}function Ll(){return(Ne&6)===0?(ho(0),!1):!0}function _f(){if(ve!==null){if(Fe===0)var t=ve.return;else t=ve,Xi=sr=null,Ou(t),kr=null,js=0,t=ve;for(;t!==null;)I0(t.alternate,t),t=t.return;ve=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,F_(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,_f(),qe=t,ve=a=Gi(t.current,null),Se=n,Fe=0,Qn=null,Ca=!1,Qr=It(t,n),hf=!1,Jr=Jn=pf=mr=wa=tn=0,Hn=uo=null,mf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Xt(s),f=1<<c;n|=t[c],s&=~f}return $i=n,$o(),a}function cm(t,n){fe=null,z.H=no,n===Xr||n===ol?(n=Tp(),Fe=3):n===bu?(n=Tp(),Fe=4):Fe=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ve===null&&(tn=1,yl(t,ri(n,t.current)))}function um(){var t=Zn.current;return t===null?!0:(Se&4194048)===Se?ci===null:(Se&62914560)===Se||(Se&536870912)!==0?t===ci:!1}function fm(){var t=z.H;return z.H=no,t===null?no:t}function dm(){var t=z.A;return z.A=m_,t}function Nl(){tn=4,Ca||(Se&4194048)!==Se&&Zn.current!==null||(Qr=!0),(wa&134217727)===0&&(mr&134217727)===0||qe===null||La(qe,Se,Jn,!1)}function Sf(t,n,a){var s=Ne;Ne|=2;var c=fm(),f=dm();(qe!==t||Se!==n)&&(Ul=null,ts(t,n)),n=!1;var g=tn;t:do try{if(Fe!==0&&ve!==null){var E=ve,B=Qn;switch(Fe){case 8:_f(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=Fe;if(Fe=0,Qn=null,es(t,E,B,J),a&&Qr){g=0;break t}break;default:J=Fe,Fe=0,Qn=null,es(t,E,B,J)}}v_(),g=tn;break}catch(pt){cm(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Xi=sr=null,Ne=s,z.H=c,z.A=f,ve===null&&(qe=null,Se=0,$o()),g}function v_(){for(;ve!==null;)hm(ve)}function __(t,n){var a=Ne;Ne|=2;var s=fm(),c=dm();qe!==t||Se!==n?(Ul=null,Dl=x()+500,ts(t,n)):Qr=It(t,n);t:do try{if(Fe!==0&&ve!==null){n=ve;var f=Qn;e:switch(Fe){case 1:Fe=0,Qn=null,es(t,n,f,1);break;case 2:case 9:if(Mp(f)){Fe=0,Qn=null,pm(n);break}n=function(){Fe!==2&&Fe!==9||qe!==t||(Fe=7),Di(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Mp(f)?(Fe=0,Qn=null,pm(n)):(Fe=0,Qn=null,es(t,n,f,7));break;case 5:var g=null;switch(ve.tag){case 26:g=ve.memoizedState;case 5:case 27:var E=ve;if(g?$m(g):E.stateNode.complete){Fe=0,Qn=null;var B=E.sibling;if(B!==null)ve=B;else{var J=E.return;J!==null?(ve=J,Ol(J)):ve=null}break e}}Fe=0,Qn=null,es(t,n,f,5);break;case 6:Fe=0,Qn=null,es(t,n,f,6);break;case 8:_f(),tn=6;break t;default:throw Error(r(462))}}S_();break}catch(pt){cm(t,pt)}while(!0);return Xi=sr=null,z.H=s,z.A=c,Ne=a,ve!==null?0:(qe=null,Se=0,$o(),tn)}function S_(){for(;ve!==null&&!ne();)hm(ve)}function hm(t){var n=F0(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?Ol(t):ve=n}function pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=U0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=U0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ou(n);default:I0(a,n),n=ve=dp(n,$i),n=F0(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?Ol(t):ve=n}function es(t,n,a,s){Xi=sr=null,Ou(n),kr=null,js=0;var c=n.return;try{if(l_(t,c,n,a,Se)){tn=1,yl(t,ri(a,t.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;tn=1,yl(t,ri(a,t.current)),ve=null;return}n.flags&32768?(Ee||s===1?t=!0:Qr||(Se&536870912)!==0?t=!1:(Ca=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),mm(n,t)):Ol(n)}function Ol(t){var n=t;do{if((n.flags&32768)!==0){mm(n,Ca);return}t=n.return;var a=f_(n.alternate,n,$i);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);tn===0&&(tn=5)}function mm(t,n){do{var a=d_(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);tn=6,ve=null}function xm(t,n,a,s,c,f,g,E,B){t.cancelPendingCommit=null;do zl();while(mn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ou,Wn(t,a,f,g,E,B),t===qe&&(ve=qe=null,Se=0),$r=n,Ua=t,ta=a,xf=f,gf=c,rm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,E_(nt,function(){return ym(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=j.p,j.p=2,g=Ne,Ne|=4;try{h_(t,n,a)}finally{Ne=g,j.p=c,z.T=s}}mn=1,gm(),vm(),_m()}}function gm(){if(mn===1){mn=0;var t=Ua,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Ne;Ne|=4;try{Q0(n,t);var f=Lf,g=ip(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&np(E.ownerDocument.documentElement,E)){if(B!==null&&nu(E)){var J=B.start,pt=B.end;if(pt===void 0&&(pt=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(pt,E.value.length);else{var xt=E.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Vt=E.textContent.length,te=Math.min(B.start,Vt),Xe=B.end===void 0?te:Math.min(B.end,Vt);!lt.extend&&te>Xe&&(g=Xe,Xe=te,te=g);var Y=ep(E,te),X=ep(E,Xe);if(Y&&X&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var K=xt.createRange();K.setStart(Y.node,Y.offset),lt.removeAllRanges(),te>Xe?(lt.addRange(K),lt.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),lt.addRange(K))}}}}for(xt=[],lt=E;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var mt=xt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Yl=!!Uf,Lf=Uf=null}finally{Ne=c,j.p=s,z.T=a}}t.current=n,mn=2}}function vm(){if(mn===2){mn=0;var t=Ua,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Ne;Ne|=4;try{q0(t,n.alternate,n)}finally{Ne=c,j.p=s,z.T=a}}mn=3}}function _m(){if(mn===4||mn===3){mn=0,w();var t=Ua,n=$r,a=ta,s=rm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,$r=Ua=null,Sm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Da=null),Ja(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=j.p,j.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{z.T=n,j.p=c}}(ta&3)!==0&&zl(),Di(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===vf?fo++:(fo=0,vf=t):fo=0,ho(0)}}function Sm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function zl(){return gm(),vm(),_m(),ym()}function ym(){if(mn!==5)return!1;var t=Ua,n=xf;xf=0;var a=Ja(ta),s=z.T,c=j.p;try{j.p=32>a?32:a,z.T=null,a=gf,gf=null;var f=Ua,g=ta;if(mn=0,$r=Ua=null,ta=0,(Ne&6)!==0)throw Error(r(331));var E=Ne;if(Ne|=4,nm(f.current),$0(f,f.current,g,a),Ne=E,ho(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{j.p=c,z.T=s,Sm(t,n)}}function bm(t,n,a){n=ri(a,n),n=Zu(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(Cn(t,2),Di(t))}function Be(t,n,a){if(t.tag===3)bm(t,t,a);else for(;n!==null;){if(n.tag===3){bm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Da===null||!Da.has(s))){t=ri(a,t),a=M0(2),s=Ea(n,a,2),s!==null&&(E0(a,s,n,t),Cn(s,2),Di(s));break}}n=n.return}}function yf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new x_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(hf=!0,c.add(a),t=y_.bind(null,t,n,a),n.then(t,t))}function y_(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Se&a)===a&&(tn===4||tn===3&&(Se&62914560)===Se&&300>x()-wl?(Ne&2)===0&&ts(t,0):pf|=a,Jr===Se&&(Jr=0)),Di(t)}function Mm(t,n){n===0&&(n=He()),t=ir(t,n),t!==null&&(Cn(t,n),Di(t))}function b_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mm(t,a)}function M_(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Mm(t,a)}function E_(t,n){return Ie(t,n)}var Pl=null,ns=null,bf=!1,Fl=!1,Mf=!1,Na=0;function Di(t){t!==ns&&t.next===null&&(ns===null?Pl=ns=t:ns=ns.next=t),Fl=!0,bf||(bf=!0,A_())}function ho(t,n){if(!Mf&&Fl){Mf=!0;do for(var a=!1,s=Pl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Xt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rm(s,f))}else f=Se,f=vt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Rm(s,f));s=s.next}while(a);Mf=!1}}function T_(){Em()}function Em(){Fl=bf=!1;var t=0;Na!==0&&P_()&&(t=Na);for(var n=x(),a=null,s=Pl;s!==null;){var c=s.next,f=Tm(s,n);f===0?(s.next=null,a===null?Pl=c:a.next=c,c===null&&(ns=a)):(a=s,(t!==0||(f&3)!==0)&&(Fl=!0)),s=c}mn!==0&&mn!==5||ho(t),Na!==0&&(Na=0)}function Tm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Xt(f),E=1<<g,B=c[g];B===-1?((E&a)===0||(E&s)!==0)&&(c[g]=ae(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=Se,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),Ja(a)){case 2:case 8:a=dt;break;case 32:a=nt;break;case 268435456:a=Dt;break;default:a=nt}return s=Am.bind(null,t),a=Ie(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function Am(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zl()&&t.callbackNode!==a)return null;var s=Se;return s=vt(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(om(t,s,n),Tm(t,x()),t.callbackNode!=null&&t.callbackNode===a?Am.bind(null,t):null)}function Rm(t,n){if(zl())return null;om(t,n,!0)}function A_(){B_(function(){(Ne&6)!==0?Ie(et,T_):Em()})}function Ef(){if(Na===0){var t=Gr;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Na=t}return Na}function Cm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wo(""+t)}function wm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function R_(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cm((c[hn]||null).action),g=s.submitter;g&&(n=(n=g[hn]||null)?Cm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Zo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Na!==0){var B=g?wm(c,g):new FormData(c);Xu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?wm(c,g):new FormData(c),Xu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Tf=0;Tf<su.length;Tf++){var Af=su[Tf],C_=Af.toLowerCase(),w_=Af[0].toUpperCase()+Af.slice(1);xi(C_,"on"+w_)}xi(sp,"onAnimationEnd"),xi(op,"onAnimationIteration"),xi(lp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Wv,"onTransitionRun"),xi(qv,"onTransitionStart"),xi(Yv,"onTransitionCancel"),xi(cp,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Dm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(pt){Jo(pt)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(E=s[g],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(pt){Jo(pt)}c.currentTarget=null,f=B}}}}function _e(t,n){var a=n[wr];a===void 0&&(a=n[wr]=new Set);var s=t+"__bubble";a.has(s)||(Um(n,t,2,!1),a.add(s))}function Rf(t,n,a){var s=0;n&&(s|=4),Um(a,t,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Cf(t){if(!t[Bl]){t[Bl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(D_.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Rf("selectionchange",!1,n))}}function Um(t,n,a,s){switch(sx(n)){case 2:var c=aS;break;case 8:c=rS;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function wf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=ma(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Ph(function(){var J=f,pt=Wc(a),xt=[];t:{var it=up.get(t);if(it!==void 0){var lt=Zo,Vt=t;switch(t){case"keypress":if(Yo(a)===0)break t;case"keydown":case"keyup":lt=Mv;break;case"focusin":Vt="focus",lt=Qc;break;case"focusout":Vt="blur",lt=Qc;break;case"beforeblur":case"afterblur":lt=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Av;break;case sp:case op:case lp:lt=pv;break;case cp:lt=Cv;break;case"scroll":case"scrollend":lt=cv;break;case"wheel":lt=Dv;break;case"copy":case"cut":case"paste":lt=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Gh;break;case"toggle":case"beforetoggle":lt=Lv}var te=(n&4)!==0,Xe=!te&&(t==="scroll"||t==="scrollend"),Y=te?it!==null?it+"Capture":null:it;te=[];for(var X=J,K;X!==null;){var mt=X;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||Y===null||(mt=zs(X,Y),mt!=null&&te.push(mo(X,mt,K))),Xe)break;X=X.return}0<te.length&&(it=new lt(it,Vt,null,a,pt),xt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",it&&a!==kc&&(Vt=a.relatedTarget||a.fromElement)&&(ma(Vt)||Vt[Pi]))break t;if((lt||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=J,Vt=Vt?ma(Vt):null,Vt!==null&&(Xe=u(Vt),te=Vt.tag,Vt!==Xe||te!==5&&te!==27&&te!==6)&&(Vt=null)):(lt=null,Vt=J),lt!==Vt)){if(te=Ih,mt="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(te=Gh,mt="onPointerLeave",Y="onPointerEnter",X="pointer"),Xe=lt==null?it:W(lt),K=Vt==null?it:W(Vt),it=new te(mt,X+"leave",lt,a,pt),it.target=Xe,it.relatedTarget=K,mt=null,ma(pt)===J&&(te=new te(Y,X+"enter",Vt,a,pt),te.target=K,te.relatedTarget=Xe,mt=te),Xe=mt,lt&&Vt)e:{for(te=U_,Y=lt,X=Vt,K=0,mt=Y;mt;mt=te(mt))K++;mt=0;for(var Qt=X;Qt;Qt=te(Qt))mt++;for(;0<K-mt;)Y=te(Y),K--;for(;0<mt-K;)X=te(X),mt--;for(;K--;){if(Y===X||X!==null&&Y===X.alternate){te=Y;break e}Y=te(Y),X=te(X)}te=null}else te=null;lt!==null&&Lm(xt,it,lt,te,!1),Vt!==null&&Xe!==null&&Lm(xt,Xe,Vt,te,!0)}}t:{if(it=J?W(J):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var De=Zh;else if(Yh(it))if(Kh)De=Vv;else{De=Hv;var qt=Iv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Xc(J.elementType)&&(De=Zh):De=Gv;if(De&&(De=De(t,J))){jh(xt,De,a,pt);break t}qt&&qt(t,it,J),t==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&_n(it,"number",it.value)}switch(qt=J?W(J):window,t){case"focusin":(Yh(qt)||qt.contentEditable==="true")&&(Nr=qt,iu=J,Xs=null);break;case"focusout":Xs=iu=Nr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,ap(xt,a,pt);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":ap(xt,a,pt)}var he;if($c)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Lr?Wh(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Vh&&a.locale!=="ko"&&(Lr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Lr&&(he=Fh()):(ga=pt,jc="value"in ga?ga.value:ga.textContent,Lr=!0)),qt=Il(J,ye),0<qt.length&&(ye=new Hh(ye,t,null,a,pt),xt.push({event:ye,listeners:qt}),he?ye.data=he:(he=qh(a),he!==null&&(ye.data=he)))),(he=Ov?zv(t,a):Pv(t,a))&&(ye=Il(J,"onBeforeInput"),0<ye.length&&(qt=new Hh("onBeforeInput","beforeinput",null,a,pt),xt.push({event:qt,listeners:ye}),qt.data=he)),R_(xt,t,J,a,pt)}Dm(xt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(mo(t,c,f)),c=zs(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function U_(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lm(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||J===null||(B=J,c?(J=zs(a,f),J!=null&&g.unshift(mo(a,J,B))):c||(J=zs(a,f),J!=null&&g.push(mo(a,J,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var L_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function Nm(t){return(typeof t=="string"?t:""+t).replace(L_,`
`).replace(N_,"")}function Om(t,n){return n=Nm(n),Nm(t)===n}function Ve(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ai(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ai(t,""+s);break;case"className":Re(t,"class",s);break;case"tabIndex":Re(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Re(t,a,s);break;case"style":Oh(t,s,f);break;case"data":if(n!=="object"){Re(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Wo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",c.name,c,null),Ve(t,n,"formEncType",c.formEncType,c,null),Ve(t,n,"formMethod",c.formMethod,c,null),Ve(t,n,"formTarget",c.formTarget,c,null)):(Ve(t,n,"encType",c.encType,c,null),Ve(t,n,"method",c.method,c,null),Ve(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Wo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ii);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Wo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),de(t,"popover",s);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":de(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ov.get(a)||a,de(t,a,s))}}function Df(t,n,a,s,c,f){switch(a){case"style":Oh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ai(t,s):(typeof s=="number"||typeof s=="bigint")&&Ai(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):de(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,f,g,a,null)}}c&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var E=f=g=c=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":c=pt;break;case"type":g=pt;break;case"checked":B=pt;break;case"defaultChecked":J=pt;break;case"value":f=pt;break;case"defaultValue":E=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ve(t,n,s,pt,a,null)}}je(t,f,E,B,J,g,c,!1);return;case"select":_e("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Ve(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?pn(t,!!s,n,!1):a!=null&&pn(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ve(t,n,g,E,a,null)}Mn(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(t,n,B,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)_e(po[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,J,s,a,null)}return;default:if(Xc(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&Df(t,n,pt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ve(t,n,E,s,a,null))}function O_(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,B=null,J=null,pt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:s.hasOwnProperty(lt)||Ve(t,n,lt,null,s,xt)}}for(var it in s){var lt=s[it];if(xt=a[it],s.hasOwnProperty(it)&&(lt!=null||xt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":J=lt;break;case"defaultChecked":pt=lt;break;case"value":g=lt;break;case"defaultValue":E=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==xt&&Ve(t,n,it,lt,s,xt)}}Fi(t,g,E,B,J,pt,f,c);return;case"select":lt=g=E=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||Ve(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&Ve(t,n,c,f,s,B)}n=E,a=g,s=lt,it!=null?pn(t,!!a,it,!1):!!s!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ve(t,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ve(t,n,g,c,s,f)}Sn(t,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Ve(t,n,Vt,null,s,it)}for(B in s)if(it=s[B],lt=a[B],s.hasOwnProperty(B)&&it!==lt&&(it!=null||lt!=null))switch(B){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ve(t,n,B,it,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!s.hasOwnProperty(te)&&Ve(t,n,te,null,s,it);for(J in s)if(it=s[J],lt=a[J],s.hasOwnProperty(J)&&it!==lt&&(it!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ve(t,n,J,it,s,lt)}return;default:if(Xc(n)){for(var Xe in a)it=a[Xe],a.hasOwnProperty(Xe)&&it!==void 0&&!s.hasOwnProperty(Xe)&&Df(t,n,Xe,void 0,s,it);for(pt in s)it=s[pt],lt=a[pt],!s.hasOwnProperty(pt)||it===lt||it===void 0&&lt===void 0||Df(t,n,pt,it,s,lt);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&Ve(t,n,Y,null,s,it);for(xt in s)it=s[xt],lt=a[xt],!s.hasOwnProperty(xt)||it===lt||it==null&&lt==null||Ve(t,n,xt,it,s,lt)}function zm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function z_(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&zm(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>E)break;var pt=B.transferSize,xt=B.initiatorType;pt&&zm(xt)&&(B=B.responseEnd,g+=pt*(B<E?1:(E-J)/(B-J)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uf=null,Lf=null;function Hl(t){return t.nodeType===9?t:t.ownerDocument}function Pm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function P_(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(t){return Im.resolve(null).then(t).catch(I_)}:Bm;function I_(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function Hm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[$a]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&xo(t.ownerDocument.body);a=c}while(a);ss(n)}function Gm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function H_(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[$a])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function G_(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Vm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function V_(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bf=null;function Xm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function km(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Wm(t,n,a){switch(n=Hl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Os(t)}var fi=new Map,qm=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=j.d;j.d={f:X_,r:k_,D:W_,C:q_,L:Y_,m:j_,X:K_,S:Z_,M:Q_};function X_(){var t=ea.f(),n=Ll();return t||n}function k_(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?c0(n):ea.r(t)}var is=typeof document>"u"?null:document;function Ym(t,n,a){var s=is;if(s&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qm.has(c)||(qm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",t),tt(n),s.head.appendChild(n)))}}function W_(t){ea.D(t),Ym("dns-prefetch",t,null)}function q_(t,n){ea.C(t,n),Ym("preconnect",t,n)}function Y_(t,n,a){ea.L(t,n,a);var s=is;if(s&&t&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(t)+'"]';var f=c;switch(n){case"style":f=as(t);break;case"script":f=rs(t)}fi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),Rn(n,"link",t),tt(n),s.head.appendChild(n)))}}function j_(t,n){ea.m(t,n);var a=is;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(s)+'"][href="'+Ye(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(t)}if(!fi.has(f)&&(t=_({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),Rn(s,"link",t),tt(s),a.head.appendChild(s)}}}function Z_(t,n,a){ea.S(t,n,a);var s=is;if(s&&t){var c=st(s).hoistableStyles,f=as(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(go(f)))E.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&If(t,a);var B=g=s.createElement("link");tt(B),Rn(B,"link",t),B._p=new Promise(function(J,pt){B.onload=J,B.onerror=pt}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function K_(t,n){ea.X(t,n);var a=is;if(a&&t){var s=st(a).hoistableScripts,c=rs(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=_({src:t,async:!0},n),(n=fi.get(c))&&Hf(t,n),f=a.createElement("script"),tt(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Q_(t,n){ea.M(t,n);var a=is;if(a&&t){var s=st(a).hoistableScripts,c=rs(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Hf(t,n),f=a.createElement("script"),tt(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function jm(t,n,a,s){var c=(c=at.current)?Gl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=st(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=as(a.href);var f=st(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(go(t)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||J_(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=st(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function as(t){return'href="'+Ye(t)+'"'}function go(t){return'link[rel="stylesheet"]['+t+"]"}function Zm(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function J_(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),tt(n),t.head.appendChild(n))}function rs(t){return'[src="'+Ye(t)+'"]'}function vo(t){return"script[async]"+t}function Km(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(s)return n.instance=s,tt(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tt(s),Rn(s,"style",c),Vl(s,a.precedence,t),n.instance=s;case"stylesheet":c=as(a.href);var f=t.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,tt(f),f;s=Zm(a),(c=fi.get(c))&&If(s,c),f=(t.ownerDocument||t).createElement("link"),tt(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Rn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,t),n.instance=f;case"script":return f=rs(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,tt(c),c):(s=a,(c=fi.get(f))&&(s=_({},a),Hf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tt(c),Rn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,t));return n.instance}function Vl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xl=null;function Qm(t,n,a){if(Xl===null){var s=new Map,c=Xl=new Map;c.set(a,s)}else c=Xl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$a]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Jm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function $_(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $m(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=as(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,tt(f);return}f=n.ownerDocument||n,s=Zm(s),(c=fi.get(c))&&If(s,c),f=f.createElement("link"),tt(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function eS(t,n){return t.stylesheets&&t.count===0&&ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Gf===0&&(Gf=62500*z_());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wl=null;function ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wl=new Map,n.forEach(nS,t),Wl=null,kl.call(t))}function nS(t,n){if(!(n.state.loading&4)){var a=Wl.get(t);if(a)var s=a.get(null);else{a=new Map,Wl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function iS(t,n,a,s,c,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function tx(t,n,a,s,c,f,g,E,B,J,pt,xt){return t=new iS(t,n,a,g,B,J,pt,xt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),t}function ex(t){return t?(t=Pr,t):Pr}function nx(t,n,a,s,c,f){c=ex(c),s.context===null?s.context=c:s.pendingContext=c,s=Ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ea(t,s,n),a!==null&&(Gn(a,t,n),Ks(a,t,n))}function ix(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Vf(t,n){ix(t,n),(t=t.alternate)&&ix(t,n)}function ax(t){if(t.tag===13||t.tag===31){var n=ir(t,67108864);n!==null&&Gn(n,t,67108864),Vf(t,67108864)}}function rx(t){if(t.tag===13||t.tag===31){var n=$n();n=mi(n);var a=ir(t,n);a!==null&&Gn(a,t,n),Vf(t,n)}}var Yl=!0;function aS(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=2,Xf(t,n,a,s)}finally{j.p=f,z.T=c}}function rS(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=8,Xf(t,n,a,s)}finally{j.p=f,z.T=c}}function Xf(t,n,a,s){if(Yl){var c=kf(s);if(c===null)wf(t,n,s,jl,a),ox(t,s);else if(oS(c,t,n,a,s))s.stopPropagation();else if(ox(t,s),n&4&&-1<sS.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=bt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Xt(g);E.entanglements[1]|=B,g&=~B}Di(f),(Ne&6)===0&&(Dl=x()+500,ho(0))}}break;case 31:case 13:E=ir(f,2),E!==null&&Gn(E,f,2),Ll(),Vf(f,2)}if(f=kf(s),f===null&&wf(t,n,s,jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else wf(t,n,s,null,a)}}function kf(t){return t=Wc(t),Wf(t)}var jl=null;function Wf(t){if(jl=null,t=ma(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case et:return 2;case dt:return 8;case nt:case zt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var qf=!1,za=null,Pa=null,Fa=null,So=new Map,yo=new Map,Ba=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ox(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function bo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&ax(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function oS(t,n,a,s,c){switch(n){case"focusin":return za=bo(za,t,n,a,s,c),!0;case"dragenter":return Pa=bo(Pa,t,n,a,s,c),!0;case"mouseover":return Fa=bo(Fa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,bo(So.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,bo(yo.get(f)||null,t,n,a,s,c)),!0}return!1}function lx(t){var n=ma(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){rx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){rx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);kc=s,a.target.dispatchEvent(s),kc=null}else return n=A(a),n!==null&&ax(n),t.blockedOn=a,!1;n.shift()}return!0}function cx(t,n,a){Zl(t)&&a.delete(n)}function lS(){qf=!1,za!==null&&Zl(za)&&(za=null),Pa!==null&&Zl(Pa)&&(Pa=null),Fa!==null&&Zl(Fa)&&(Fa=null),So.forEach(cx),yo.forEach(cx)}function Kl(t,n){t.blockedOn===n&&(t.blockedOn=null,qf||(qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,lS)))}var Ql=null;function ux(t){Ql!==t&&(Ql=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===t&&(Ql=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Wf(s||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ss(t){function n(B){return Kl(B,t)}za!==null&&Kl(za,t),Pa!==null&&Kl(Pa,t),Fa!==null&&Kl(Fa,t),So.forEach(n),yo.forEach(n);for(var a=0;a<Ba.length;a++){var s=Ba[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)lx(a),a.blockedOn===null&&Ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[hn]||null;if(typeof f=="function")g||ux(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[hn]||null)E=g.formAction;else if(Wf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ux(a)}}}function fx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(t){this._internalRoot=t}Jl.prototype.render=Yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();nx(a,s,t,n,null,null)},Jl.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;nx(t.current,2,null,t,null,null),Ll(),n[Pi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,t),a===0&&lx(t)}};var dx=e.version;if(dx!=="19.2.0")throw Error(r(527,dx,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var cS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{yt=$l.inject(cS),Mt=$l}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=_0,f=S0,g=y0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=tx(t,1,!1,null,null,a,s,null,c,f,g,fx),t[Pi]=n.current,Cf(t),new Yf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=_0,g=S0,E=y0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=tx(t,1,!0,n,a??null,s,c,B,f,g,E,fx),n.context=ex(null),a=n.current,s=$n(),s=mi(s),c=Ma(s),c.callback=null,Ea(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Di(n),t[Pi]=n.current,Cf(t),new Jl(n)},Eo.version="19.2.0",Eo}var bx;function SS(){if(bx)return Kf.exports;bx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=_S(),Kf.exports}var yS=SS();const bS="/Portfolio/assets/profile-C9uf7ZIK.JPG";function MS(){return Tt.jsxs("div",{className:"landing",children:[Tt.jsxs("div",{className:"description",children:[Tt.jsx("div",{className:"name",children:Tt.jsxs("i",{children:["Anjum",Tt.jsx("br",{}),"Khandeshi"]})}),Tt.jsx("div",{className:"general-text",children:"Im a 26 year old software developer :)"})]}),Tt.jsx("div",{className:"photo",children:Tt.jsx("div",{className:"arch-photo",children:Tt.jsx("img",{src:bS,alt:"profile"})})})]})}function tc({label:o="Work",onClick:e}){return Tt.jsx("button",{className:"custom-btn",onClick:e,children:o})}function ES(){return Tt.jsxs("div",{className:"navigation-bar",children:[Tt.jsx(tc,{label:"Education"}),Tt.jsx(tc,{label:"Work"}),Tt.jsx(tc,{label:"Projects"}),Tt.jsx(tc,{label:"Reach Out"}),Tt.jsxs("button",{class:"cta",children:[Tt.jsx("span",{children:"Resume"}),Tt.jsxs("svg",{width:"15px",height:"10px",viewBox:"0 0 13 10",children:[Tt.jsx("path",{d:"M1,5 L11,5"}),Tt.jsx("polyline",{points:"8 1 12 5 8 9"})]})]})]})}function wg({children:o,cardClass:e}){return Tt.jsx("div",{className:`custom-card-wrapper  ${e||""}`,children:o})}const TS="/Portfolio/assets/stock-cat-B3E0Z6DF.jpeg";function AS(){return Tt.jsxs("div",{className:"about-me",children:[Tt.jsx(wg,{cardClass:"custom-glass-card",children:Tt.jsx("div",{className:"about-me-text",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda veritatis earum quas! Incidunt assumenda eos fugit accusantium praesentium cum, esse doloremque facere molestiae. Omnis quam numquam ad eos fuga."})}),Tt.jsxs("div",{className:"image circle-text-wrapper",children:[Tt.jsxs("svg",{className:"curve-text",viewBox:"0 0 300 150",children:[Tt.jsx("defs",{children:Tt.jsx("path",{id:"curve",d:`M 150,150\r
                   m -112,0\r
                   a 112,112 0 1,1 224,0`})}),Tt.jsx("text",{textAnchor:"middle",children:Tt.jsx("textPath",{href:"#curve",startOffset:"50%",children:"More About Me!"})})]}),Tt.jsx("div",{className:"about-me-photo circle-text-circle-part",children:Tt.jsx("img",{src:TS,alt:"profile"})})]})]})}function RS(){return Tt.jsx(Tt.Fragment,{children:CS.map(o=>Tt.jsx("div",{className:"project",children:Tt.jsxs(wg,{cardClass:"custom-glass-card",children:[Tt.jsx("div",{className:"project-image",children:Tt.jsx("img",{src:`./project/${o.imageLink}`,alt:"Hero background"})}),Tt.jsxs("div",{className:"project-title-container",children:[Tt.jsx("span",{className:"project-title",children:o.title}),Tt.jsx("span",{className:"project-tech-stack",children:o.techStack.map(e=>Tt.jsx("span",{className:"project-skill",children:e}))})]}),Tt.jsx("div",{className:"project-description",children:o.description})]})}))})}let CS=[{title:"Trace Me",description:"Combats price gouging by employing an Ethereum blockchain, reducing average supply chain cost by over 20%",techStack:["Ethereum","Solidity","Python","Flutter","Web3.py"],imageLink:"trace-me.jpg"},{title:"Health Aid",description:"Designed a novel hospital recommendation algorithm, achieving 0.7 second response time",techStack:["Flask","JavaScript","Python"],imageLink:"health-aid.jpg"},{title:"PPDFAnalyser",description:"Parsing unstructured invoice images using OpenCV, providing JSON output of all billing related fields with 93% accuracy",techStack:["Flask","JavaScript","Python"],imageLink:"pdf-analyser.jpg"}];function Mx(o,e){(e==null||e>o.length)&&(e=o.length);for(var i=0,r=Array(e);i<e;i++)r[i]=o[i];return r}function wS(o){if(Array.isArray(o))return o}function DS(o,e,i){return(e=OS(e))in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function US(o,e){var i=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(i!=null){var r,l,u,d,h=[],m=!0,p=!1;try{if(u=(i=i.call(o)).next,e!==0)for(;!(m=(r=u.call(i)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(v){p=!0,l=v}finally{try{if(!m&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(p)throw l}}return h}}function LS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ex(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Tx(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Ex(Object(i),!0).forEach(function(r){DS(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):Ex(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function Ud(o,e){return wS(o)||US(o,e)||zS(o,e)||LS()}function NS(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function OS(o){var e=NS(o,"string");return typeof e=="symbol"?e:e+""}function zS(o,e){if(o){if(typeof o=="string")return Mx(o,e);var i={}.toString.call(o).slice(8,-1);return i==="Object"&&o.constructor&&(i=o.constructor.name),i==="Map"||i==="Set"?Array.from(o):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Mx(o,e):void 0}}var Dg=function(e){return typeof e=="string"&&e.includes("px")},PS={position:"fixed",left:0,width:"100%",height:0,borderTop:"2px dashed black",zIndex:9999},FS={fontSize:"12px",fontFamily:"monospace",margin:0,padding:6},BS=function(e){var i=Dg(e);return i?e:"".concat(e*100,"%")},IS=function(e){var i=e.offset,r=BS(i);return qa.createElement("div",{style:Tx(Tx({},PS),{},{top:r})},qa.createElement("p",{style:FS},"trigger: ",i))},HS=function(e,i){for(var r=Math.ceil(i/e),l=[],u=1/r,d=0;d<=r;d+=1)l.push(d*u);return l},GS=function(e){var i=e.debug,r=e.children,l=e.offset,u=l===void 0?.3:l,d=e.onStepEnter,h=d===void 0?function(){}:d,m=e.onStepExit,p=m===void 0?function(){}:m,v=e.onStepProgress,_=v===void 0?null:v,y=e.threshold,M=y===void 0?4:y,T=Dg(u),R=Oe.useState(0),b=Ud(R,2),S=b[0],O=b[1],U=Oe.useState(null),P=Ud(U,2),k=P[0],L=P[1],F=function(ct){O(ct)},$=function(ct){L(window.innerHeight)};Oe.useEffect(function(){if(T)return window.addEventListener("resize",$),function(){window.removeEventListener("resize",$)}},[]);var D=typeof window<"u",C=D?k||window.innerHeight:0,H=T?+u.replace("px","")/C:u,Q=Oe.useMemo(function(){return HS(M,C)},[C]);return qa.createElement(qa.Fragment,null,i&&qa.createElement(IS,{offset:u}),qa.Children.map(r,function(ot,ct){return qa.cloneElement(ot,{scrollamaId:"react-scrollama-".concat(ct),offset:H,onStepEnter:h,onStepExit:p,onStepProgress:_,lastScrollTop:S,handleSetLastScrollTop:F,progressThreshold:Q,innerHeight:C})}))},Ld=new Map,ec=new WeakMap,Ax=0,VS=void 0;function XS(o){return o?(ec.has(o)||(Ax+=1,ec.set(o,Ax.toString())),ec.get(o)):"0"}function kS(o){return Object.keys(o).sort().filter(e=>o[e]!==void 0).map(e=>`${e}_${e==="root"?XS(o.root):o[e]}`).toString()}function WS(o){const e=kS(o);let i=Ld.get(e);if(!i){const r=new Map;let l;const u=new IntersectionObserver(d=>{d.forEach(h=>{var m;const p=h.isIntersecting&&l.some(v=>h.intersectionRatio>=v);o.trackVisibility&&typeof h.isVisible>"u"&&(h.isVisible=p),(m=r.get(h.target))==null||m.forEach(v=>{v(p,h)})})},o);l=u.thresholds||(Array.isArray(o.threshold)?o.threshold:[o.threshold||0]),i={id:e,observer:u,elements:r},Ld.set(e,i)}return i}function qS(o,e,i={},r=VS){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const m=o.getBoundingClientRect();return e(r,{isIntersecting:r,target:o,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:l,observer:u,elements:d}=WS(i),h=d.get(o)||[];return d.has(o)||d.set(o,h),h.push(e),u.observe(o),function(){h.splice(h.indexOf(e),1),h.length===0&&(d.delete(o),u.unobserve(o)),d.size===0&&(u.disconnect(),Ld.delete(l))}}function Rx({threshold:o,delay:e,trackVisibility:i,rootMargin:r,root:l,triggerOnce:u,skip:d,initialInView:h,fallbackInView:m,onChange:p}={}){var v;const[_,y]=Oe.useState(null),M=Oe.useRef(p),[T,R]=Oe.useState({inView:!!h,entry:void 0});M.current=p,Oe.useEffect(()=>{if(d||!_)return;let U;return U=qS(_,(P,k)=>{R({inView:P,entry:k}),M.current&&M.current(P,k),k.isIntersecting&&u&&U&&(U(),U=void 0)},{root:l,rootMargin:r,threshold:o,trackVisibility:i,delay:e},m),()=>{U&&U()}},[Array.isArray(o)?o.toString():o,_,l,r,u,d,i,m,e]);const b=(v=T.entry)==null?void 0:v.target,S=Oe.useRef(void 0);!_&&b&&!u&&!d&&S.current!==b&&(S.current=b,R({inView:!!h,entry:void 0}));const O=[y,T.inView,T.entry];return O.ref=O[0],O.inView=O[1],O.entry=O[2],O}var YS=function(e){return"-".concat(e*100,"% 0px -").concat(100-e*100,"% 0px")},jS=function(e,i,r,l){if(!r.current)return"0px";var u=r.current.offsetHeight/l;return e==="down"?"".concat((u-i)*100,"% 0px ").concat(i*100-100,"% 0px"):"-".concat(i*100,"% 0px ").concat(u*100-(100-i*100),"% 0px")},ZS=function(e){var i=e.children,r=e.data,l=e.handleSetLastScrollTop,u=e.lastScrollTop,d=e.onStepEnter,h=d===void 0?function(){}:d,m=e.onStepExit,p=m===void 0?function(){}:m,v=e.onStepProgress,_=v===void 0?null:v,y=e.offset,M=e.scrollamaId,T=e.progressThreshold,R=e.innerHeight,b=typeof window<"u",S=b?document.documentElement.scrollTop:0,O=u>=S?"up":"down",U=YS(y),P=Oe.useRef(null),k=Oe.useState(!1),L=Ud(k,2),F=L[0],$=L[1],D=Rx({rootMargin:U,threshold:0}),C=D.ref,H=D.entry,Q=Oe.useMemo(function(){return jS(O,y,P,R)},[O,y,P,R]),ot=Rx({rootMargin:Q,threshold:T}),ct=ot.ref,ht=ot.entry,z=Oe.useCallback(function(j){P.current=j,C(j),ct(j)},[C,ct]);return Oe.useEffect(function(){if(F){var j=ht.target.getBoundingClientRect(),q=j.height,gt=j.top,_t=Math.min(1,Math.max(0,(window.innerHeight*y-gt)/q));_&&_({progress:_t,scrollamaId:M,data:r,element:ht.target,entry:ht,direction:O})}},[ht]),Oe.useEffect(function(){H&&!H.isIntersecting&&F?(p({element:H.target,scrollamaId:M,data:r,entry:H,direction:O}),$(!1),l(S)):H&&H.isIntersecting&&!F&&($(!0),h({element:H.target,scrollamaId:M,data:r,entry:H,direction:O}),l(S))},[H]),Oe.cloneElement(qa.Children.only(i),{"data-react-scrollama-id":M,ref:z,entry:H})};function Cx(o,e){const i={year:"numeric",month:"short"},r=o?new Date(o).toLocaleDateString(void 0,i):"",l=e?new Date(e).toLocaleDateString(void 0,i):"";return r&&l?`${r} – ${l}`:r||l||""}function KS(){const[o,e]=Oe.useState(0),i=({data:r})=>e(r);return Tt.jsxs("div",{className:"timeline-grid",children:[Tt.jsx("aside",{className:"timeline-rail",children:Tt.jsx("div",{className:"rail-inner",children:Tt.jsx("ol",{className:"dot-list",children:wx.map((r,l)=>Tt.jsxs("li",{className:`dot-row ${l===o?"active":""}`,children:[Tt.jsx("span",{className:"dot"}),Tt.jsx("span",{className:"dot-label",children:Cx(r.start,r.end)})]},l))})})}),Tt.jsxs("main",{className:"timeline-steps",children:[Tt.jsx(GS,{offset:.6,onStepEnter:i,children:wx.map((r,l)=>Tt.jsx(ZS,{data:l,children:Tt.jsxs("section",{className:`card ${o===l?"is-active":""}`,"aria-current":o===l?"step":void 0,children:[Tt.jsx("h3",{className:"card-title",children:r.title}),r.subtitle&&Tt.jsx("div",{className:"card-sub",children:r.subtitle}),Tt.jsx("div",{className:"card-sub",style:{opacity:.8},children:Cx(r.start,r.end)}),r.content?r.content.includes(`
`)?Tt.jsx("ul",{className:"card-points",children:r.content.split(`
`).map((u,d)=>u.trim()?Tt.jsx("li",{children:u.trim()},d):null)}):Tt.jsx("p",{className:"card-body",children:r.content}):null]})},l))}),Tt.jsx("div",{style:{height:"60vh"}})]})]})}const wx=[{side:"left",title:"Amazon Web Services (AWS)",subtitle:"Software Developer Intern",start:new Date("2025-05-01"),end:new Date("2025-08-01"),content:"Developed a React app to flag risky cleanup resources, streamlining region build automation, boosting click through by 40%Built a Smithy JavaScript client with JWT and SigV4 auth, and role chaining, enabling secure retrieval via presigned S3 URLsDeployed on Lambda and S3 for scalable, region-isolated use, lowering review time per 100 resources from 50 to 10 minutes."},{side:"right",title:"Georgia Institute of Technology",subtitle:"Masters in Computer Science",start:new Date("2024-08-01"),end:new Date("2026-05-01"),content:""},{side:"left",title:"Amadeus Software Labs",subtitle:"Software Developer",start:new Date("2021-08-01"),end:new Date("2024-05-01"),content:"Feature design and development for Hainan Airlines, an Amadeus customer.Established new flows with 1A GDS -  Registration, Miles & Cash, increasing Frequent Flyer Registrations by over 40%.Implemented Instant Search, caching flight prices, minimizing GDS Flex Pricer calls, achieving 35% expenditure reduction.Transversal responsibilitiesMigrated QA platform to a new namespace reducing build time from 2 hours to 30 minutes.Reduced critical bugs from over 400 to 20 and eliminated all IRs (Incident Records - SEV 0) breaching SLA.Designed a comprehensive threat model encompassing interactions with GDS, Travel Sky, E-star, User Center, Log server.Tech lead Responsibilities - Collaborated with the PO to evaluate features, conducted KTs for core applications and processes, and managed EP (E-personalize, a configuration engine for the application) with over 4000 action rules configured.Scrum Master Responsibilities - Orchestrated daily agile tasks, represented my team in various forums, managed JIRA, and worked closely with the RTE (Release train engineer)."},{side:"right",title:"Morgan Stanley",subtitle:"Technology Analyst Intern",date:"August 2021",start:new Date("2021-02-01"),end:new Date("2021-07-01"),content:"Developed “Deal Blotter” with a CPS Pub/Sub data pipeline, extensible architecture, and Kerberized REST integration.Streamlined Equity and Structured Products (ESPT) sales process, reducing marketing time from ~1 hour per client to 7 mins for multiple clients."},{side:"right",title:"Morgan Stanley",subtitle:"Technology Analyst Intern",start:new Date("2020-05-01"),end:new Date("2020-07-01"),content:"Constructed a Medium Touch Order Tracking dashboard reducing application search time from 20 minutes to 30 seconds"},{side:"left",title:"KJ Somaiya College of Engineering",subtitle:"Bachelor's in Technology, Computer Engineering",start:new Date("2017-08-01"),end:new Date("2021-04-01"),content:""}];function QS(){const[o,e]=Oe.useState(!1);Oe.useEffect(()=>{const r=()=>{e(window.scrollY>200)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Tt.jsx("button",{className:`scroll-to-top ${o?"show":""}`,onClick:i,"aria-label":"Scroll to top",children:"↑"})}function JS(){return Tt.jsxs("div",{id:"footer",children:[Tt.jsx("h2",{children:"Get In Touch!"}),Tt.jsxs("div",{class:"footer-item footer-linked-in",children:[Tt.jsx("span",{class:"icon",children:Tt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:Tt.jsx("path",{d:"M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"})})}),"https://www.linkedin.com/in/anjum-k/"]}),Tt.jsxs("div",{class:"footer-item footer-email",children:[Tt.jsx("span",{class:"icon",children:Tt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:Tt.jsx("path",{d:"M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"})})}),"akhandeshi3@gatech.edu"]})]})}function $S({children:o}){return Oe.useEffect(()=>{const e=document.querySelectorAll(".float-section"),i=new IntersectionObserver(r=>{r.forEach(l=>{l.isIntersecting&&(l.target.classList.add("visible"),i.unobserve(l.target))})},{threshold:.2});e.forEach(r=>i.observe(r))},[]),Tt.jsx("div",{className:"float-section",children:o})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="181",ty=0,Dx=1,ey=2,Ug=1,ny=2,la=3,Ka=0,Xn=1,ca=2,ua=0,ys=1,Nd=2,Ux=3,Lx=4,iy=5,Mr=100,ay=101,ry=102,sy=103,oy=104,ly=200,cy=201,uy=202,fy=203,Od=204,zd=205,dy=206,hy=207,py=208,my=209,xy=210,gy=211,vy=212,_y=213,Sy=214,Pd=0,Fd=1,Bd=2,Ms=3,Id=4,Hd=5,Gd=6,Vd=7,Lg=0,yy=1,by=2,Za=0,My=1,Ey=2,Ty=3,Ay=4,Ry=5,Cy=6,wy=7,Ng=300,Es=301,Ts=302,Xd=303,kd=304,Fc=306,Wd=1e3,ni=1001,qd=1002,ii=1003,Dy=1004,nc=1005,Ln=1006,td=1007,Tr=1008,ha=1009,Og=1010,zg=1011,No=1012,Th=1013,Rr=1014,Li=1015,Cr=1016,Ah=1017,Rh=1018,Oo=1020,Pg=35902,Fg=35899,Bg=1021,Ig=1022,pi=1023,zo=1026,Po=1027,Hg=1028,Ch=1029,wh=1030,Dh=1031,Uh=1033,Ac=33776,Rc=33777,Cc=33778,wc=33779,Yd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,th=37808,eh=37809,nh=37810,ih=37811,ah=37812,rh=37813,sh=37814,oh=37815,lh=37816,ch=37817,uh=37818,fh=37819,dh=37820,hh=37821,ph=36492,mh=36494,xh=36495,gh=36283,vh=36284,_h=36285,Sh=36286,Uy=3200,Ly=3201,Ny=0,Oy=1,Ya="",hi="srgb",As="srgb-linear",Uc="linear",ke="srgb",os=7680,Nx=519,zy=512,Py=513,Fy=514,Gg=515,By=516,Iy=517,Hy=518,Gy=519,Ox=35044,zx="300 es",Ni=2e3,Lc=2001;function Vg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vy(){const o=Nc("canvas");return o.style.display="block",o}const Px={};function Fx(...o){const e="THREE."+o.shift();console.log(e,...o)}function se(...o){const e="THREE."+o.shift();console.warn(e,...o)}function rn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Fo(...o){const e=o.join(" ");e in Px||(Px[e]=!0,se(...o))}function Xy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,yh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function ky(o,e){return(o%e+e)%e}function nd(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,i=0){le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Io{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],y=u[d+0],M=u[d+1],T=u[d+2],R=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=y,e[i+1]=M,e[i+2]=T,e[i+3]=R;return}if(_!==R||m!==y||p!==M||v!==T){let b=m*y+p*M+v*T+_*R;b<0&&(y=-y,M=-M,T=-T,R=-R,b=-b);let S=1-h;if(b<.9995){const O=Math.acos(b),U=Math.sin(O);S=Math.sin(S*O)/U,h=Math.sin(h*O)/U,m=m*S+y*h,p=p*S+M*h,v=v*S+T*h,_=_*S+R*h}else{m=m*S+y*h,p=p*S+M*h,v=v*S+T*h,_=_*S+R*h;const O=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=O,p*=O,v*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],y=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+v*_+m*M-p*y,e[i+1]=m*T+v*y+p*_-h*M,e[i+2]=p*T+v*M+h*y-m*_,e[i+3]=v*T-h*_-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),y=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=y*v*_+p*M*T,this._y=p*M*_-y*v*T,this._z=p*v*T+y*M*_,this._w=p*v*_-y*M*T;break;case"YXZ":this._x=y*v*_+p*M*T,this._y=p*M*_-y*v*T,this._z=p*v*T-y*M*_,this._w=p*v*_+y*M*T;break;case"ZXY":this._x=y*v*_-p*M*T,this._y=p*M*_+y*v*T,this._z=p*v*T+y*M*_,this._w=p*v*_-y*M*T;break;case"ZYX":this._x=y*v*_-p*M*T,this._y=p*M*_+y*v*T,this._z=p*v*T-y*M*_,this._w=p*v*_+y*M*T;break;case"YZX":this._x=y*v*_+p*M*T,this._y=p*M*_+y*v*T,this._z=p*v*T-y*M*_,this._w=p*v*_-y*M*T;break;case"XZY":this._x=y*v*_-p*M*T,this._y=p*M*_-y*v*T,this._z=p*v*T+y*M*_,this._w=p*v*_+y*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],y=r+h+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(e=0,i=0,r=0){ut.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Bx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Bx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new ut,Bx=new Io;class pe{constructor(e,i,r,l,u,d,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],y=r[2],M=r[5],T=r[8],R=l[0],b=l[3],S=l[6],O=l[1],U=l[4],P=l[7],k=l[2],L=l[5],F=l[8];return u[0]=d*R+h*O+m*k,u[3]=d*b+h*U+m*L,u[6]=d*S+h*P+m*F,u[1]=p*R+v*O+_*k,u[4]=p*b+v*U+_*L,u[7]=p*S+v*P+_*F,u[2]=y*R+M*O+T*k,u[5]=y*b+M*U+T*L,u[8]=y*S+M*P+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,y=h*m-v*u,M=p*u-d*m,T=i*_+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(l*p-v*r)*R,e[2]=(h*r-l*d)*R,e[3]=y*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ad.makeScale(e,i)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new pe,Ix=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hx=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wy(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ke&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Uc,toXYZ:Ix,fromXYZ:Hx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:Ix,fromXYZ:Hx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Le=Wy();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class qy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=Nc("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Nc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yy=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let jy=0;const sd=new ut;class zn extends Cs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ni,l=ni,u=Ln,d=Tr,h=pi,m=ha,p=zn.DEFAULT_ANISOTROPY,v=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Bo(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ng;zn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],y=m[1],M=m[5],T=m[9],R=m[2],b=m[6],S=m[10];if(Math.abs(v-y)<.01&&Math.abs(_-R)<.01&&Math.abs(T-b)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+R)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(M+1)/2,k=(S+1)/2,L=(v+y)/4,F=(_+R)/4,$=(T+b)/4;return U>P&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=L/r,u=F/r):P>k?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=L/l,u=$/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=$/u),this.set(r,l,u,i),this}let O=Math.sqrt((b-T)*(b-T)+(_-R)*(_-R)+(y-v)*(y-v));return Math.abs(O)<.001&&(O=1),this.x=(b-T)/O,this.y=(_-R)/O,this.z=(y-v)/O,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zy extends Cs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qa extends Zy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Xg extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ky extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,_i):_i.fromBufferAttribute(u,d),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),ac.subVectors(this.max,Ao),cs.subVectors(e.a,Ao),us.subVectors(e.b,Ao),fs.subVectors(e.c,Ao),Ha.subVectors(us,cs),Ga.subVectors(fs,us),xr.subVectors(cs,fs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-xr.z,xr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,xr.z,0,-xr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-xr.y,xr.x,0];return!od(i,cs,us,fs,ac)||(i=[1,0,0,0,1,0,0,0,1],!od(i,cs,us,fs,ac))?!1:(rc.crossVectors(Ha,Ga),i=[rc.x,rc.y,rc.z],od(i,cs,us,fs,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const na=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],_i=new ut,ic=new Ho,cs=new ut,us=new ut,fs=new ut,Ha=new ut,Ga=new ut,xr=new ut,Ao=new ut,ac=new ut,rc=new ut,gr=new ut;function od(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){gr.fromArray(o,u);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=e.dot(gr),p=i.dot(gr),v=r.dot(gr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const Qy=new Ho,Ro=new ut,ld=new ut;class Bc{constructor(e=new ut,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Qy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(ld)),this.expandByPoint(Ro.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ia=new ut,cd=new ut,sc=new ut,Va=new ut,ud=new ut,oc=new ut,fd=new ut;class kg{constructor(e=new ut,i=new ut(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ia.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){cd.copy(e).add(i).multiplyScalar(.5),sc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(cd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(sc),h=Va.dot(this.direction),m=-Va.dot(sc),p=Va.lengthSq(),v=Math.abs(1-d*d);let _,y,M,T;if(v>0)if(_=d*m-h,y=d*h-m,T=u*v,_>=0)if(y>=-T)if(y<=T){const R=1/v;_*=R,y*=R,M=_*(_+d*y+2*h)+y*(d*_+y+2*m)+p}else y=u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;else y<=-T?(_=Math.max(0,-(-d*u+h)),y=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p):y<=T?(_=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(_=Math.max(0,-(d*u+h)),y=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p);else y=d>0?-u:u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(cd).addScaledVector(sc,y),M}intersectSphere(e,i){ia.subVectors(e.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),v>=0?(u=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-y.z)*_,m=(e.max.z-y.z)*_):(h=(e.max.z-y.z)*_,m=(e.min.z-y.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,i,r,l,u){ud.subVectors(i,e),oc.subVectors(r,e),fd.crossVectors(ud,oc);let d=this.direction.dot(fd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Va.subVectors(this.origin,e);const m=h*this.direction.dot(oc.crossVectors(Va,oc));if(m<0)return null;const p=h*this.direction.dot(ud.cross(Va));if(p<0||m+p>d)return null;const v=-h*Va.dot(fd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,r,l,u,d,h,m,p,v,_,y,M,T,R,b){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,_,y,M,T,R,b)}set(e,i,r,l,u,d,h,m,p,v,_,y,M,T,R,b){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=y,S[3]=M,S[7]=T,S[11]=R,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),u=1/ds.setFromMatrixColumn(e,1).length(),d=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const y=d*v,M=d*_,T=h*v,R=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=y-R*p,i[9]=-h*m,i[2]=R-y*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*v,M=m*_,T=p*v,R=p*_;i[0]=y+R*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=M*h-T,i[6]=R+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*v,M=m*_,T=p*v,R=p*_;i[0]=y-R*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*v,i[9]=R-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*v,M=d*_,T=h*v,R=h*_;i[0]=m*v,i[4]=T*p-M,i[8]=y*p+R,i[1]=m*_,i[5]=R*p+y,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*v,i[4]=R-y*_,i[8]=T*_+M,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+T,i[10]=y-R*_}else if(e.order==="XZY"){const y=d*m,M=d*p,T=h*m,R=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=y*_+R,i[5]=d*v,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*v,i[10]=R*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,$y)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Xa.crossVectors(r,ti),Xa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Xa.crossVectors(r,ti)),Xa.normalize(),lc.crossVectors(ti,Xa),l[0]=Xa.x,l[4]=lc.x,l[8]=ti.x,l[1]=Xa.y,l[5]=lc.y,l[9]=ti.y,l[2]=Xa.z,l[6]=lc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],y=r[9],M=r[13],T=r[2],R=r[6],b=r[10],S=r[14],O=r[3],U=r[7],P=r[11],k=r[15],L=l[0],F=l[4],$=l[8],D=l[12],C=l[1],H=l[5],Q=l[9],ot=l[13],ct=l[2],ht=l[6],z=l[10],j=l[14],q=l[3],gt=l[7],_t=l[11],N=l[15];return u[0]=d*L+h*C+m*ct+p*q,u[4]=d*F+h*H+m*ht+p*gt,u[8]=d*$+h*Q+m*z+p*_t,u[12]=d*D+h*ot+m*j+p*N,u[1]=v*L+_*C+y*ct+M*q,u[5]=v*F+_*H+y*ht+M*gt,u[9]=v*$+_*Q+y*z+M*_t,u[13]=v*D+_*ot+y*j+M*N,u[2]=T*L+R*C+b*ct+S*q,u[6]=T*F+R*H+b*ht+S*gt,u[10]=T*$+R*Q+b*z+S*_t,u[14]=T*D+R*ot+b*j+S*N,u[3]=O*L+U*C+P*ct+k*q,u[7]=O*F+U*H+P*ht+k*gt,u[11]=O*$+U*Q+P*z+k*_t,u[15]=O*D+U*ot+P*j+k*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],y=e[10],M=e[14],T=e[3],R=e[7],b=e[11],S=e[15];return T*(+u*m*_-l*p*_-u*h*y+r*p*y+l*h*M-r*m*M)+R*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*v-u*m*v)+b*(+i*p*_-i*h*M-u*d*_+r*d*M+u*h*v-r*p*v)+S*(-l*h*v-i*m*_+i*h*y+l*d*_-r*d*y+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],y=e[10],M=e[11],T=e[12],R=e[13],b=e[14],S=e[15],O=_*b*p-R*y*p+R*m*M-h*b*M-_*m*S+h*y*S,U=T*y*p-v*b*p-T*m*M+d*b*M+v*m*S-d*y*S,P=v*R*p-T*_*p+T*h*M-d*R*M-v*h*S+d*_*S,k=T*_*m-v*R*m-T*h*y+d*R*y+v*h*b-d*_*b,L=i*O+r*U+l*P+u*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=O*F,e[1]=(R*y*u-_*b*u-R*l*M+r*b*M+_*l*S-r*y*S)*F,e[2]=(h*b*u-R*m*u+R*l*p-r*b*p-h*l*S+r*m*S)*F,e[3]=(_*m*u-h*y*u-_*l*p+r*y*p+h*l*M-r*m*M)*F,e[4]=U*F,e[5]=(v*b*u-T*y*u+T*l*M-i*b*M-v*l*S+i*y*S)*F,e[6]=(T*m*u-d*b*u-T*l*p+i*b*p+d*l*S-i*m*S)*F,e[7]=(d*y*u-v*m*u+v*l*p-i*y*p-d*l*M+i*m*M)*F,e[8]=P*F,e[9]=(T*_*u-v*R*u-T*r*M+i*R*M+v*r*S-i*_*S)*F,e[10]=(d*R*u-T*h*u+T*r*p-i*R*p-d*r*S+i*h*S)*F,e[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*M-i*h*M)*F,e[12]=k*F,e[13]=(v*R*l-T*_*l+T*r*y-i*R*y-v*r*b+i*_*b)*F,e[14]=(T*h*l-d*R*l-T*r*m+i*R*m+d*r*b-i*h*b)*F,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*y+i*h*y)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,y=u*p,M=u*v,T=u*_,R=d*v,b=d*_,S=h*_,O=m*p,U=m*v,P=m*_,k=r.x,L=r.y,F=r.z;return l[0]=(1-(R+S))*k,l[1]=(M+P)*k,l[2]=(T-U)*k,l[3]=0,l[4]=(M-P)*L,l[5]=(1-(y+S))*L,l[6]=(b+O)*L,l[7]=0,l[8]=(T+U)*F,l[9]=(b-O)*F,l[10]=(1-(y+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const d=ds.set(l[4],l[5],l[6]).length(),h=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/d,_=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ni,m=!1){const p=this.elements,v=2*u/(i-e),_=2*u/(r-l),y=(i+e)/(i-e),M=(r+l)/(r-l);let T,R;if(m)T=u/(d-u),R=d*u/(d-u);else if(h===Ni)T=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Lc)T=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ni,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),y=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,R;if(m)T=1/(d-u),R=d/(d-u);else if(h===Ni)T=-2/(d-u),R=-(d+u)/(d-u);else if(h===Lc)T=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new ut,Si=new dn,Jy=new ut(0,0,0),$y=new ut(1,1,1),Xa=new ut,lc=new ut,ti=new ut,Gx=new dn,Vx=new Io;class pa{constructor(e=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Gx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class Wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const Xx=new ut,hs=new Io,aa=new dn,cc=new ut,Co=new ut,eb=new ut,nb=new Io,kx=new ut(1,0,0),Wx=new ut(0,1,0),qx=new ut(0,0,1),Yx={type:"added"},ib={type:"removed"},ps={type:"childadded",child:null},dd={type:"childremoved",child:null};class kn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ut,i=new pa,r=new Io,l=new ut(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new pe}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(kx,e)}rotateY(e){return this.rotateOnAxis(Wx,e)}rotateZ(e){return this.rotateOnAxis(qx,e)}translateOnAxis(e,i){return Xx.copy(e).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kx,e)}translateY(e){return this.translateOnAxis(Wx,e)}translateZ(e){return this.translateOnAxis(qx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cc.copy(e):cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Co,cc,this.up):aa.lookAt(cc,Co,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(aa),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yx),ps.child=e,this.dispatchEvent(ps),ps.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ib),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yx),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),y=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ut(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ut,ra=new ut,hd=new ut,sa=new ut,ms=new ut,xs=new ut,jx=new ut,pd=new ut,md=new ut,xd=new ut,gd=new en,vd=new en,_d=new en;class Mi{constructor(e=new ut,i=new ut,r=new ut){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),ra.subVectors(r,i),hd.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(ra),m=yi.dot(hd),p=ra.dot(ra),v=ra.dot(hd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const y=1/_,M=(p*m-h*v)*y,T=(d*v-h*m)*y;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,sa.x),m.addScaledVector(d,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(gd,u.x),d.addScaledVector(vd,u.y),d.addScaledVector(_d,u.z),d}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ra.subVectors(e,i),yi.cross(ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),yi.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ms.subVectors(l,r),xs.subVectors(u,r),pd.subVectors(e,r);const m=ms.dot(pd),p=xs.dot(pd);if(m<=0&&p<=0)return i.copy(r);md.subVectors(e,l);const v=ms.dot(md),_=xs.dot(md);if(v>=0&&_<=v)return i.copy(l);const y=m*_-v*p;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(ms,d);xd.subVectors(e,u);const M=ms.dot(xd),T=xs.dot(xd);if(T>=0&&M<=T)return i.copy(u);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(xs,h);const b=v*T-M*_;if(b<=0&&_-v>=0&&M-T>=0)return jx.subVectors(u,l),h=(_-v)/(_-v+(M-T)),i.copy(l).addScaledVector(jx,h);const S=1/(b+R+y);return d=R*S,h=y*S,i.copy(r).addScaledVector(ms,d).addScaledVector(xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Sd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=ky(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=qg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Le.workingToColorSpace(Un.copy(this),e),Math.round(Te(Un.r*255,0,255))*65536+Math.round(Te(Un.g*255,0,255))*256+Math.round(Te(Un.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=hi){Le.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(uc);const r=nd(ka.h,uc.h,i),l=nd(ka.s,uc.s,i),u=nd(ka.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new ze;ze.NAMES=qg;let ab=0;class Go extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=ys,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=zd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yg extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new ut,fc=new le;let rb=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Ox,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ox&&(e.usage=this.usage),e}}class jg extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Zg extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class da extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let sb=0;const di=new dn,yd=new kn,gs=new ut,ei=new Ho,wo=new Ho,bn=new ut;class zi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?Zg:jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new da(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ei.min,wo.min),ei.expandByPoint(bn),bn.addVectors(ei.max,wo.max),ei.expandByPoint(bn)):(ei.expandByPoint(wo.min),ei.expandByPoint(wo.max))}ei.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(gs.fromBufferAttribute(e,p),bn.add(gs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<r.count;$++)h[$]=new ut,m[$]=new ut;const p=new ut,v=new ut,_=new ut,y=new le,M=new le,T=new le,R=new ut,b=new ut;function S($,D,C){p.fromBufferAttribute(r,$),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(u,$),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,C),v.sub(p),_.sub(p),M.sub(y),T.sub(y);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(R.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(H),b.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),h[$].add(R),h[D].add(R),h[C].add(R),m[$].add(b),m[D].add(b),m[C].add(b))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let $=0,D=O.length;$<D;++$){const C=O[$],H=C.start,Q=C.count;for(let ot=H,ct=H+Q;ot<ct;ot+=3)S(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const U=new ut,P=new ut,k=new ut,L=new ut;function F($){k.fromBufferAttribute(l,$),L.copy(k);const D=h[$];U.copy(D),U.sub(k.multiplyScalar(k.dot(D))).normalize(),P.crossVectors(L,D);const H=P.dot(m[$])<0?-1:1;d.setXYZW($,U.x,U.y,U.z,H)}for(let $=0,D=O.length;$<D;++$){const C=O[$],H=C.start,Q=C.count;for(let ot=H,ct=H+Q;ot<ct;ot+=3)F(e.getX(ot+0)),F(e.getX(ot+1)),F(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new ut,u=new ut,d=new ut,h=new ut,m=new ut,p=new ut,v=new ut,_=new ut;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),R=e.getX(y+1),b=e.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,b),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),h.add(v),m.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,y=new p.constructor(m.length*v);let M=0,T=0;for(let R=0,b=m.length;R<b;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*v;for(let S=0;S<v;S++)y[T++]=p[M++]}return new Ei(y,v,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const y=p[v],M=e(y,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zx=new dn,vr=new kg,dc=new Bc,Kx=new ut,hc=new ut,pc=new ut,mc=new ut,bd=new ut,xc=new ut,Qx=new ut,gc=new ut;class Ti extends kn{constructor(e=new zi,i=new Yg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(bd.fromBufferAttribute(_,e),d?xc.addScaledVector(bd,v):xc.addScaledVector(bd.sub(i),v))}i.add(xc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(u),vr.copy(e.ray).recast(e.near),!(dc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(dc,Kx)===null||vr.origin.distanceToSquared(Kx)>(e.far-e.near)**2))&&(Zx.copy(u).invert(),vr.copy(e.ray).applyMatrix4(Zx),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,R=y.length;T<R;T++){const b=y[T],S=d[b.materialIndex],O=Math.max(b.start,M.start),U=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let P=O,k=U;P<k;P+=3){const L=h.getX(P),F=h.getX(P+1),$=h.getX(P+2);l=vc(this,S,e,r,p,v,_,L,F,$),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let b=T,S=R;b<S;b+=3){const O=h.getX(b),U=h.getX(b+1),P=h.getX(b+2);l=vc(this,d,e,r,p,v,_,O,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,R=y.length;T<R;T++){const b=y[T],S=d[b.materialIndex],O=Math.max(b.start,M.start),U=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let P=O,k=U;P<k;P+=3){const L=P,F=P+1,$=P+2;l=vc(this,S,e,r,p,v,_,L,F,$),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let b=T,S=R;b<S;b+=3){const O=b,U=b+1,P=b+2;l=vc(this,d,e,r,p,v,_,O,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function ob(o,e,i,r,l,u,d,h){let m;if(e.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ka,h),m===null)return null;gc.copy(h),gc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(gc);return p<i.near||p>i.far?null:{distance:p,point:gc.clone(),object:o}}function vc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,hc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const v=ob(o,e,i,r,hc,pc,mc,Qx);if(v){const _=new ut;Mi.getBarycoord(Qx,hc,pc,mc,_),l&&(v.uv=Mi.getInterpolatedAttribute(l,h,m,p,_,new le)),u&&(v.uv1=Mi.getInterpolatedAttribute(u,h,m,p,_,new le)),d&&(v.normal=Mi.getInterpolatedAttribute(d,h,m,p,_,new ut),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new ut,materialIndex:0};Mi.getNormal(hc,pc,mc,y.normal),v.face=y,v.barycoord=_}return v}class Vo extends zi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new da(p,3)),this.setAttribute("normal",new da(v,3)),this.setAttribute("uv",new da(_,2));function T(R,b,S,O,U,P,k,L,F,$,D){const C=P/F,H=k/$,Q=P/2,ot=k/2,ct=L/2,ht=F+1,z=$+1;let j=0,q=0;const gt=new ut;for(let _t=0;_t<z;_t++){const N=_t*H-ot;for(let rt=0;rt<ht;rt++){const St=rt*C-Q;gt[R]=St*O,gt[b]=N*U,gt[S]=ct,p.push(gt.x,gt.y,gt.z),gt[R]=0,gt[b]=0,gt[S]=L>0?1:-1,v.push(gt.x,gt.y,gt.z),_.push(rt/F),_.push(1-_t/$),j+=1}}for(let _t=0;_t<$;_t++)for(let N=0;N<F;N++){const rt=y+N+ht*_t,St=y+N+ht*(_t+1),Et=y+(N+1)+ht*(_t+1),Ot=y+(N+1)+ht*_t;m.push(rt,St,Ot),m.push(St,Et,Ot),q+=6}h.addGroup(M,q,D),M+=q,y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function lb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Kg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const cb={clone:Rs,merge:On};var ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Oc extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new ut,Jx=new le,$x=new le;class bi extends Oc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z)}getViewSize(e,i){return this.getViewBounds(e,Jx,$x),i.subVectors($x,Jx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class db extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(vs,_s,e,i);l.layers=this.layers,this.add(l);const u=new bi(vs,_s,e,i);u.layers=this.layers,this.add(u);const d=new bi(vs,_s,e,i);d.layers=this.layers,this.add(d);const h=new bi(vs,_s,e,i);h.layers=this.layers,this.add(h);const m=new bi(vs,_s,e,i);m.layers=this.layers,this.add(m);const p=new bi(vs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Qg extends zn{constructor(e=[],i=Es,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hb extends Qa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Qg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vo(5,5,5),u=new Oi({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Ti(l,u),h=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ln),new db(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class _c extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pb={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const b=i.getJointPose(R,r),S=this._getHandJoint(p,R);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _c;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class tg extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Jg extends zn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ii,v=ii,_,y){super(null,d,h,m,p,v,l,u,_,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new ut,mb=new ut,xb=new pe;class br{constructor(e=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ed.subVectors(r,i).cross(mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ed),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xb.getNormalMatrix(e),l=this.coplanarPoint(Ed).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Bc,gb=new le(.5,.5),Sc=new ut;class $g{constructor(e=new br,i=new br,r=new br,l=new br,u=new br,d=new br){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ni,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],y=u[6],M=u[7],T=u[8],R=u[9],b=u[10],S=u[11],O=u[12],U=u[13],P=u[14],k=u[15];if(l[0].setComponents(p-d,M-v,S-T,k-O).normalize(),l[1].setComponents(p+d,M+v,S+T,k+O).normalize(),l[2].setComponents(p+h,M+_,S+R,k+U).normalize(),l[3].setComponents(p-h,M-_,S-R,k-U).normalize(),r)l[4].setComponents(m,y,b,P).normalize(),l[5].setComponents(p-m,M-y,S-b,k-P).normalize();else if(l[4].setComponents(p-m,M-y,S-b,k-P).normalize(),i===Ni)l[5].setComponents(p+m,M+y,S+b,k+P).normalize();else if(i===Lc)l[5].setComponents(m,y,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const i=gb.distanceTo(e.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?e.max.x:e.min.x,Sc.y=l.normal.y>0?e.max.y:e.min.y,Sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vb extends Go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new ut,Pc=new ut,eg=new dn,Do=new kg,yc=new Bc,Td=new ut,ng=new ut;class _b extends kn{constructor(e=new zi,i=new vb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=zc.distanceTo(Pc);e.setAttribute("lineDistance",new da(r,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,e.ray.intersectsSphere(yc)===!1)return;eg.copy(l).invert(),Do.copy(e.ray).applyMatrix4(eg);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),T=Math.min(v.count,d.start+d.count);for(let R=M,b=T-1;R<b;R+=p){const S=v.getX(R),O=v.getX(R+1),U=bc(this,e,Do,m,S,O,R);U&&i.push(U)}if(this.isLineLoop){const R=v.getX(T-1),b=v.getX(M),S=bc(this,e,Do,m,R,b,T-1);S&&i.push(S)}}else{const M=Math.max(0,d.start),T=Math.min(y.count,d.start+d.count);for(let R=M,b=T-1;R<b;R+=p){const S=bc(this,e,Do,m,R,R+1,R);S&&i.push(S)}if(this.isLineLoop){const R=bc(this,e,Do,m,T-1,M,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function bc(o,e,i,r,l,u,d){const h=o.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Pc.fromBufferAttribute(h,u),i.distanceSqToSegment(zc,Pc,Td,ng)>r)return;Td.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Td);if(!(p<e.near||p>e.far))return{distance:p,point:ng.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const ig=new ut,ag=new ut;class Sb extends _b{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)ig.fromBufferAttribute(i,l),ag.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+ig.distanceTo(ag);e.setAttribute("lineDistance",new da(r,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tv extends zn{constructor(e,i,r=Rr,l,u,d,h=ii,m=ii,p,v=zo,_=1){if(v!==zo&&v!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:_};super(y,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ev extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends zi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,y=i/m,M=[],T=[],R=[],b=[];for(let S=0;S<v;S++){const O=S*y-d;for(let U=0;U<p;U++){const P=U*_-u;T.push(P,-O,0),R.push(0,0,1),b.push(U/h),b.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<h;O++){const U=O+p*S,P=O+p*(S+1),k=O+1+p*(S+1),L=O+1+p*S;M.push(U,P,L),M.push(P,k,L)}this.setIndex(M),this.setAttribute("position",new da(T,3)),this.setAttribute("normal",new da(R,3)),this.setAttribute("uv",new da(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mc extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yb extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bb extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mb extends Oc{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Eb extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function rg(o,e,i,r){const l=Ab(r);switch(i){case Bg:return o*e;case Hg:return o*e/l.components*l.byteLength;case Ch:return o*e/l.components*l.byteLength;case wh:return o*e*2/l.components*l.byteLength;case Dh:return o*e*2/l.components*l.byteLength;case Ig:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case Uh:return o*e*4/l.components*l.byteLength;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jd:case Kd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(o,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case gh:case vh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _h:case Sh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ab(o){switch(o){case ha:case Og:return{byteLength:1,components:1};case No:case zg:case Cr:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Rr:case Th:case Li:return{byteLength:4,components:1};case Pg:case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Rb(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<_.length;M++){const T=_[y],R=_[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++y,_[y]=R)}_.length=y+1;for(let M=0,T=_.length;M<T;M++){const R=_[M];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
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
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
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
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Vb=`#ifdef USE_BUMPMAP
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qb=`#define PI 3.141592653589793
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
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$b=`vec3 transformedNormal = objectNormal;
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
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
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
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,SM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,AM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,RM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FM=`#if defined( USE_POINTS_UV )
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
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
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
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,O1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,X1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,W1=`#define MATCAP
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,$1=`#define TOON
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
}`,t3=`#define TOON
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
}`,e3=`uniform float size;
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
}`,n3=`uniform vec3 diffuse;
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
}`,i3=`#include <common>
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
}`,a3=`uniform vec3 color;
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
}`,r3=`uniform float rotation;
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
}`,s3=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Cb,alphahash_pars_fragment:wb,alphamap_fragment:Db,alphamap_pars_fragment:Ub,alphatest_fragment:Lb,alphatest_pars_fragment:Nb,aomap_fragment:Ob,aomap_pars_fragment:zb,batching_pars_vertex:Pb,batching_vertex:Fb,begin_vertex:Bb,beginnormal_vertex:Ib,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:qb,color_fragment:Yb,color_pars_fragment:jb,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:tM,displacementmap_vertex:eM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:aM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:SM,envmap_vertex:uM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:hM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:xM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:bM,lights_phong_fragment:MM,lights_phong_pars_fragment:EM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:wM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:NM,map_fragment:OM,map_pars_fragment:zM,map_particle_fragment:PM,map_particle_pars_fragment:FM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:IM,morphinstance_vertex:HM,morphcolor_vertex:GM,morphnormal_vertex:VM,morphtarget_pars_vertex:XM,morphtarget_vertex:kM,normal_fragment_begin:WM,normal_fragment_maps:qM,normal_pars_fragment:YM,normal_pars_vertex:jM,normal_vertex:ZM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:t1,opaque_fragment:e1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:a1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:u1,shadowmap_vertex:f1,shadowmask_pars_fragment:d1,skinbase_vertex:h1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:x1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:S1,transmission_fragment:y1,transmission_pars_fragment:b1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:T1,worldpos_vertex:A1,background_vert:R1,background_frag:C1,backgroundCube_vert:w1,backgroundCube_frag:D1,cube_vert:U1,cube_frag:L1,depth_vert:N1,depth_frag:O1,distanceRGBA_vert:z1,distanceRGBA_frag:P1,equirect_vert:F1,equirect_frag:B1,linedashed_vert:I1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:V1,meshlambert_vert:X1,meshlambert_frag:k1,meshmatcap_vert:W1,meshmatcap_frag:q1,meshnormal_vert:Y1,meshnormal_frag:j1,meshphong_vert:Z1,meshphong_frag:K1,meshphysical_vert:Q1,meshphysical_frag:J1,meshtoon_vert:$1,meshtoon_frag:t3,points_vert:e3,points_frag:n3,shadow_vert:i3,shadow_frag:a3,sprite_vert:r3,sprite_frag:s3},Nt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Ec={r:0,b:0,g:0},Sr=new pa,o3=new dn;function l3(o,e,i,r,l,u,d){const h=new ze(0);let m=u===!0?0:1,p,v,_=null,y=0,M=null;function T(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function R(U){let P=!1;const k=T(U);k===null?S(h,m):k&&k.isColor&&(S(k,1),P=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,P){const k=T(P);k&&(k.isCubeTexture||k.mapping===Fc)?(v===void 0&&(v=new Ti(new Vo(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Rs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(L,F,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Sr.copy(P.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(o3.makeRotationFromEuler(Sr)),v.material.toneMapped=Le.getTransfer(k.colorSpace)!==ke,(_!==k||y!==k.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,_=k,y=k.version,M=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ti(new Ar(2,2),new Oi({name:"BackgroundMaterial",uniforms:Rs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Le.getTransfer(k.colorSpace)!==ke,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||y!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=k,y=k.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function S(U,P){U.getRGB(Ec,Kg(o)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,P,d)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,S(h,m)},render:R,addToRenderList:b,dispose:O}}function c3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(C,H,Q,ot,ct){let ht=!1;const z=_(ot,Q,H);u!==z&&(u=z,p(u.object)),ht=M(C,ot,Q,ct),ht&&T(C,ot,Q,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,P(C,H,Q,ot),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function _(C,H,Q){const ot=Q.wireframe===!0;let ct=r[C.id];ct===void 0&&(ct={},r[C.id]=ct);let ht=ct[H.id];ht===void 0&&(ht={},ct[H.id]=ht);let z=ht[ot];return z===void 0&&(z=y(m()),ht[ot]=z),z}function y(C){const H=[],Q=[],ot=[];for(let ct=0;ct<i;ct++)H[ct]=0,Q[ct]=0,ot[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,H,Q,ot){const ct=u.attributes,ht=H.attributes;let z=0;const j=Q.getAttributes();for(const q in j)if(j[q].location>=0){const _t=ct[q];let N=ht[q];if(N===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),_t===void 0||_t.attribute!==N||N&&_t.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==ot}function T(C,H,Q,ot){const ct={},ht=H.attributes;let z=0;const j=Q.getAttributes();for(const q in j)if(j[q].location>=0){let _t=ht[q];_t===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const N={};N.attribute=_t,_t&&_t.data&&(N.data=_t.data),ct[q]=N,z++}u.attributes=ct,u.attributesNum=z,u.index=ot}function R(){const C=u.newAttributes;for(let H=0,Q=C.length;H<Q;H++)C[H]=0}function b(C){S(C,0)}function S(C,H){const Q=u.newAttributes,ot=u.enabledAttributes,ct=u.attributeDivisors;Q[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),ct[C]!==H&&(o.vertexAttribDivisor(C,H),ct[C]=H)}function O(){const C=u.newAttributes,H=u.enabledAttributes;for(let Q=0,ot=H.length;Q<ot;Q++)H[Q]!==C[Q]&&(o.disableVertexAttribArray(Q),H[Q]=0)}function U(C,H,Q,ot,ct,ht,z){z===!0?o.vertexAttribIPointer(C,H,Q,ct,ht):o.vertexAttribPointer(C,H,Q,ot,ct,ht)}function P(C,H,Q,ot){R();const ct=ot.attributes,ht=Q.getAttributes(),z=H.defaultAttributeValues;for(const j in ht){const q=ht[j];if(q.location>=0){let gt=ct[j];if(gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const _t=gt.normalized,N=gt.itemSize,rt=e.get(gt);if(rt===void 0)continue;const St=rt.buffer,Et=rt.type,Ot=rt.bytesPerElement,at=Et===o.INT||Et===o.UNSIGNED_INT||gt.gpuType===Th;if(gt.isInterleavedBufferAttribute){const ft=gt.data,At=ft.stride,Gt=gt.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)S(q.location+Wt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)b(q.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Wt=0;Wt<q.locationSize;Wt++)U(q.location+Wt,N/q.locationSize,Et,_t,At*Ot,(Gt+N/q.locationSize*Wt)*Ot,at)}else{if(gt.isInstancedBufferAttribute){for(let ft=0;ft<q.locationSize;ft++)S(q.location+ft,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ft=0;ft<q.locationSize;ft++)b(q.location+ft);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ft=0;ft<q.locationSize;ft++)U(q.location+ft,N/q.locationSize,Et,_t,N*Ot,N/q.locationSize*ft*Ot,at)}}else if(z!==void 0){const _t=z[j];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(q.location,_t);break;case 3:o.vertexAttrib3fv(q.location,_t);break;case 4:o.vertexAttrib4fv(q.location,_t);break;default:o.vertexAttrib1fv(q.location,_t)}}}}O()}function k(){$();for(const C in r){const H=r[C];for(const Q in H){const ot=H[Q];for(const ct in ot)v(ot[ct].object),delete ot[ct];delete H[Q]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const Q in H){const ot=H[Q];for(const ct in ot)v(ot[ct].object),delete ot[ct];delete H[Q]}delete r[C.id]}function F(C){for(const H in r){const Q=r[H];if(Q[C.id]===void 0)continue;const ot=Q[C.id];for(const ct in ot)v(ot[ct].object),delete ot[ct];delete Q[C.id]}}function $(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:b,disableUnusedAttributes:O}}function u3(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];i.update(M,r,1)}function m(p,v,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],v[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,_);let T=0;for(let R=0;R<_;R++)T+=v[R]*y[R];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function f3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==pi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const $=F===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ha&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Li&&!$)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(se("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=T>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:P,vertexTextures:k,maxSamples:L}}function d3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new br,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||l;return l=y,r=_.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,M){const T=_.clippingPlanes,R=_.clipIntersection,b=_.clipShadows,S=o.get(_);if(!l||T===null||T.length===0||u&&!b)u?v(null):p();else{const O=u?0:r,U=O*4;let P=S.clippingState||null;m.value=P,P=v(T,y,U,M);for(let k=0;k!==U;++k)P[k]=i[k];S.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,M,T){const R=_!==null?_.length:0;let b=null;if(R!==0){if(b=m.value,T!==!0||b===null){const S=M+R*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(b===null||b.length<S)&&(b=new Float32Array(S));for(let U=0,P=M;U!==R;++U,P+=4)d.copy(_[U]).applyMatrix4(O,h),d.normal.toArray(b,P),b[P+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,b}}function h3(o){let e=new WeakMap;function i(d,h){return h===Xd?d.mapping=Es:h===kd&&(d.mapping=Ts),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Xd||h===kd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new hb(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ja=4,sg=[.125,.215,.35,.446,.526,.582],Er=20,p3=512,Uo=new Mb,og=new ze;let Ad=null,Rd=0,Cd=0,wd=!1;const m3=new ut;class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=m3}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Cr,format:pi,colorSpace:As,depthBuffer:!1},l=cg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x3(u)),this._blurMaterial=v3(u,e,i)}return l}_compileMaterial(e){const i=new Ti(new zi,e);this._renderer.compile(i,Uo)}_sceneToCubeUV(e,i,r,l,u){const m=new bi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(og),_.toneMapping=Za,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Vo,new Yg({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,b=R.material;let S=!1;const O=e.background;O?O.isColor&&(b.color.copy(O),e.background=null,S=!0):(b.color.copy(og),S=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[U],u.y,u.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[U]));const k=this._cubeSize;Ss(l,P*k,U>2?k:0,k,k),_.setRenderTarget(l),S&&_.render(R,m),_.render(e,m)}_.toneMapping=M,_.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ss(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Uo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const O=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=g3(this._lodMax,O,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),y=.05+p*.95,M=_*y,{_lodMax:T}=this,R=this._sizeLods[r],b=3*R*(r>T-ja?r-T+ja:0),S=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Ss(u,b,S,3*R,2*R),l.setRenderTarget(u),l.render(h,Uo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Ss(e,b,S,3*R,2*R),l.setRenderTarget(e),l.render(h,Uo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const y=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Er-1),R=u/T,b=isFinite(u)?1+Math.floor(v*R):Er;b>Er&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Er}`);const S=[];let O=0;for(let F=0;F<Er;++F){const $=F/R,D=Math.exp(-$*$/2);S.push(D),F===0?O+=D:F<b&&(O+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/O;y.envMap.value=e.texture,y.samples.value=b,y.weights.value=S,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=T,y.mipInt.value=U-r;const P=this._sizeLods[l],k=3*P*(l>U-ja?l-U+ja:0),L=4*(this._cubeSize-P);Ss(i,k,L,3*P,2*P),m.setRenderTarget(i),m.render(_,Uo)}}function x3(o){const e=[],i=[],r=[];let l=o;const u=o-ja+1+sg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-ja?m=sg[d-o+ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,R=3,b=2,S=1,O=new Float32Array(R*T*M),U=new Float32Array(b*T*M),P=new Float32Array(S*T*M);for(let L=0;L<M;L++){const F=L%3*2/3-1,$=L>2?0:-1,D=[F,$,0,F+2/3,$,0,F+2/3,$+1,0,F,$,0,F+2/3,$+1,0,F,$+1,0];O.set(D,R*T*L),U.set(y,b*T*L);const C=[L,L,L,L,L,L];P.set(C,S*T*L)}const k=new zi;k.setAttribute("position",new Ei(O,R)),k.setAttribute("uv",new Ei(U,b)),k.setAttribute("faceIndex",new Ei(P,S)),r.push(new Ti(k,null)),l>ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function cg(o,e,i){const r=new Qa(o,e,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ss(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function g3(o,e,i){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function v3(o,e,i){const r=new Float32Array(Er),l=new ut(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function ug(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function fg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function _3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Xd||m===kd,v=m===Es||m===Ts;if(p||v){let _=e.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new lg(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new lg(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function S3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fo("WebGLRenderer: "+r+" extension not supported."),l}}}function y3(o,e,i,r){const l={},u=new WeakMap;function d(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,T=_.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let U=0,P=O.length;U<P;U+=3){const k=O[U+0],L=O[U+1],F=O[U+2];y.push(k,L,L,F,F,k)}}else if(T!==void 0){const O=T.array;R=T.version;for(let U=0,P=O.length/3-1;U<P;U+=3){const k=U+0,L=U+1,F=U+2;y.push(k,L,L,F,F,k)}}else return;const b=new(Vg(y)?Zg:jg)(y,1);b.version=R;const S=u.get(_);S&&e.remove(S),u.set(_,b)}function v(_){const y=u.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function b3(o,e,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,M){o.drawElements(r,M,u,y*d),i.update(M,r,1)}function p(y,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,y*d,T),i.update(M,r,T))}function v(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,T);let b=0;for(let S=0;S<T;S++)b+=M[S];i.update(b,r,1)}function _(y,M,T,R){if(T===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let S=0;S<y.length;S++)p(y[S]/d,M[S],R[S]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,R,0,T);let S=0;for(let O=0;O<T;O++)S+=M[O]*R[O];i.update(S,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function M3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:rn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function E3(o,e,i){const r=new WeakMap,l=new en;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let C=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),b===!0&&(P=3);let k=h.attributes.position.count*P,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*L*4*_),$=new Xg(F,k,L,_);$.type=Li,$.needsUpdate=!0;const D=P*4;for(let H=0;H<_;H++){const Q=S[H],ot=O[H],ct=U[H],ht=k*L*4*H;for(let z=0;z<Q.count;z++){const j=z*D;T===!0&&(l.fromBufferAttribute(Q,z),F[ht+j+0]=l.x,F[ht+j+1]=l.y,F[ht+j+2]=l.z,F[ht+j+3]=0),R===!0&&(l.fromBufferAttribute(ot,z),F[ht+j+4]=l.x,F[ht+j+5]=l.y,F[ht+j+6]=l.z,F[ht+j+7]=0),b===!0&&(l.fromBufferAttribute(ct,z),F[ht+j+8]=l.x,F[ht+j+9]=l.y,F[ht+j+10]=l.z,F[ht+j+11]=ct.itemSize===4?l.w:1)}}y={count:_,texture:$,size:new le(k,L)},r.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let b=0;b<p.length;b++)T+=p[b];const R=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function T3(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const iv=new zn,dg=new tv(1,1),av=new Xg,rv=new Ky,sv=new Qg,hg=[],pg=[],mg=new Float32Array(16),xg=new Float32Array(9),gg=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=hg[l];if(u===void 0&&(u=new Float32Array(l),hg[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Hc(o,e){let i=pg[e];i===void 0&&(i=new Int32Array(e),pg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function A3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function R3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function C3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function w3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function D3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;gg.set(r),o.uniformMatrix2fv(this.addr,!1,gg),gn(i,r)}}function U3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;xg.set(r),o.uniformMatrix3fv(this.addr,!1,xg),gn(i,r)}}function L3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;mg.set(r),o.uniformMatrix4fv(this.addr,!1,mg),gn(i,r)}}function N3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function z3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function P3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function F3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function B3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function I3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function H3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function G3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(dg.compareFunction=Gg,u=dg):u=iv,i.setTexture2D(e||u,l)}function V3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||rv,l)}function X3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||sv,l)}function k3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||av,l)}function W3(o){switch(o){case 5126:return A3;case 35664:return R3;case 35665:return C3;case 35666:return w3;case 35674:return D3;case 35675:return U3;case 35676:return L3;case 5124:case 35670:return N3;case 35667:case 35671:return O3;case 35668:case 35672:return z3;case 35669:case 35673:return P3;case 5125:return F3;case 36294:return B3;case 36295:return I3;case 36296:return H3;case 35678:case 36198:case 36298:case 36306:case 35682:return G3;case 35679:case 36299:case 36307:return V3;case 35680:case 36300:case 36308:case 36293:return X3;case 36289:case 36303:case 36311:case 36292:return k3}}function q3(o,e){o.uniform1fv(this.addr,e)}function Y3(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function j3(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function Z3(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function K3(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Q3(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function J3(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $3(o,e){o.uniform1iv(this.addr,e)}function tE(o,e){o.uniform2iv(this.addr,e)}function eE(o,e){o.uniform3iv(this.addr,e)}function nE(o,e){o.uniform4iv(this.addr,e)}function iE(o,e){o.uniform1uiv(this.addr,e)}function aE(o,e){o.uniform2uiv(this.addr,e)}function rE(o,e){o.uniform3uiv(this.addr,e)}function sE(o,e){o.uniform4uiv(this.addr,e)}function oE(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||iv,u[d])}function lE(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||rv,u[d])}function cE(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||sv,u[d])}function uE(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||av,u[d])}function fE(o){switch(o){case 5126:return q3;case 35664:return Y3;case 35665:return j3;case 35666:return Z3;case 35674:return K3;case 35675:return Q3;case 35676:return J3;case 5124:case 35670:return $3;case 35667:case 35671:return tE;case 35668:case 35672:return eE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return aE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}class dE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=W3(i.type)}}class hE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fE(i.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function vg(o,e){o.seq.push(e),o.map[e.id]=e}function mE(o,e,i){const r=o.name,l=r.length;for(Dd.lastIndex=0;;){const u=Dd.exec(r),d=Dd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){vg(i,p===void 0?new dE(h,o,e):new hE(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new pE(h),vg(i,_)),i=_}}}class Dc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);mE(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function _g(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const xE=37297;let gE=0;function vE(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Sg=new pe;function _E(o){Le._getMatrix(Sg,Le.workingColorSpace,o);const e=`mat3( ${Sg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function yg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+vE(o.getShaderSource(e),h)}else return u}function SE(o,e){const i=_E(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function yE(o,e){let i;switch(e){case My:i="Linear";break;case Ey:i="Reinhard";break;case Ty:i="Cineon";break;case Ay:i="ACESFilmic";break;case Cy:i="AgX";break;case wy:i="Neutral";break;case Ry:i="Custom";break;default:se("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new ut;function bE(){Le.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),e=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ME(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function EE(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function TE(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Lo(o){return o!==""}function bg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(o){return o.replace(AE,CE)}const RE=new Map;function CE(o,e){let i=xe[e];if(i===void 0){const r=RE.get(e);if(r!==void 0)i=xe[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bh(i)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(o){return o.replace(wE,DE)}function DE(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Tg(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function UE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ny?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function LE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lg:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function zE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PE(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=UE(i),p=LE(i),v=NE(i),_=OE(i),y=zE(i),M=ME(i),T=EE(u),R=l.createProgram();let b,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Lo).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Lo).join(`
`),S.length>0&&(S+=`
`)):(b=[Tg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),S=[Tg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?xe.tonemapping_pars_fragment:"",i.toneMapping!==Za?yE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,SE("linearToOutputTexel",i.outputColorSpace),bE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=bh(d),d=bg(d,i),d=Mg(d,i),h=bh(h),h=bg(h,i),h=Mg(h,i),d=Eg(d),h=Eg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",i.glslVersion===zx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=O+b+d,P=O+S+h,k=_g(l,l.VERTEX_SHADER,U),L=_g(l,l.FRAGMENT_SHADER,P);l.attachShader(R,k),l.attachShader(R,L),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(H){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(k)||"",ct=l.getShaderInfoLog(L)||"",ht=Q.trim(),z=ot.trim(),j=ct.trim();let q=!0,gt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,L);else{const _t=yg(l,k,"vertex"),N=yg(l,L,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ht+`
`+_t+`
`+N)}else ht!==""?se("WebGLProgram: Program Info Log:",ht):(z===""||j==="")&&(gt=!1);gt&&(H.diagnostics={runnable:q,programLog:ht,vertexShader:{log:z,prefix:b},fragmentShader:{log:j,prefix:S}})}l.deleteShader(k),l.deleteShader(L),$=new Dc(l,R),D=TE(l,R)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,xE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=L,this}let FE=0;class BE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new IE(e),i.set(e,r)),r}}class IE{constructor(e){this.id=FE++,this.code=e,this.usedTimes=0}}function HE(o,e,i,r,l,u,d){const h=new Wg,m=new BE,p=new Set,v=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function b(D,C,H,Q,ot){const ct=Q.fog,ht=ot.geometry,z=D.isMeshStandardMaterial?Q.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),q=j&&j.mapping===Fc?j.image.height:null,gt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&se("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const _t=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,N=_t!==void 0?_t.length:0;let rt=0;ht.morphAttributes.position!==void 0&&(rt=1),ht.morphAttributes.normal!==void 0&&(rt=2),ht.morphAttributes.color!==void 0&&(rt=3);let St,Et,Ot,at;if(gt){const Ce=Ui[gt];St=Ce.vertexShader,Et=Ce.fragmentShader}else St=D.vertexShader,Et=D.fragmentShader,m.update(D),Ot=m.getVertexShaderID(D),at=m.getFragmentShaderID(D);const ft=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Gt=ot.isInstancedMesh===!0,Wt=ot.isBatchedMesh===!0,oe=!!D.map,Je=!!D.matcap,ce=!!j,Ae=!!D.aoMap,I=!!D.lightMap,ue=!!D.bumpMap,me=!!D.normalMap,ge=!!D.displacementMap,Bt=!!D.emissiveMap,Ie=!!D.metalnessMap,Yt=!!D.roughnessMap,ne=D.anisotropy>0,w=D.clearcoat>0,x=D.dispersion>0,G=D.iridescence>0,et=D.sheen>0,dt=D.transmission>0,nt=ne&&!!D.anisotropyMap,zt=w&&!!D.clearcoatMap,Dt=w&&!!D.clearcoatNormalMap,jt=w&&!!D.clearcoatRoughnessMap,kt=G&&!!D.iridescenceMap,yt=G&&!!D.iridescenceThicknessMap,Mt=et&&!!D.sheenColorMap,Zt=et&&!!D.sheenRoughnessMap,Xt=!!D.specularMap,Pt=!!D.specularColorMap,ie=!!D.specularIntensityMap,V=dt&&!!D.transmissionMap,Ut=dt&&!!D.thicknessMap,Ct=!!D.gradientMap,wt=!!D.alphaMap,bt=D.alphaTest>0,vt=!!D.alphaHash,It=!!D.extensions;let ae=Za;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=o.toneMapping);const He={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Et,defines:D.defines,customVertexShaderID:Ot,customFragmentShaderID:at,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Wt,batchingColor:Wt&&ot._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&ot.instanceColor!==null,instancingMorph:Gt&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:oe,matcap:Je,envMap:ce,envMapMode:ce&&j.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:I,bumpMap:ue,normalMap:me,displacementMap:y&&ge,emissiveMap:Bt,normalMapObjectSpace:me&&D.normalMapType===Oy,normalMapTangentSpace:me&&D.normalMapType===Ny,metalnessMap:Ie,roughnessMap:Yt,anisotropy:ne,anisotropyMap:nt,clearcoat:w,clearcoatMap:zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:jt,dispersion:x,iridescence:G,iridescenceMap:kt,iridescenceThicknessMap:yt,sheen:et,sheenColorMap:Mt,sheenRoughnessMap:Zt,specularMap:Xt,specularColorMap:Pt,specularIntensityMap:ie,transmission:dt,transmissionMap:V,thicknessMap:Ut,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===ys&&D.alphaToCoverage===!1,alphaMap:wt,alphaTest:bt,alphaHash:vt,combine:D.combine,mapUv:oe&&R(D.map.channel),aoMapUv:Ae&&R(D.aoMap.channel),lightMapUv:I&&R(D.lightMap.channel),bumpMapUv:ue&&R(D.bumpMap.channel),normalMapUv:me&&R(D.normalMap.channel),displacementMapUv:ge&&R(D.displacementMap.channel),emissiveMapUv:Bt&&R(D.emissiveMap.channel),metalnessMapUv:Ie&&R(D.metalnessMap.channel),roughnessMapUv:Yt&&R(D.roughnessMap.channel),anisotropyMapUv:nt&&R(D.anisotropyMap.channel),clearcoatMapUv:zt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(D.sheenRoughnessMap.channel),specularMapUv:Xt&&R(D.specularMap.channel),specularColorMapUv:Pt&&R(D.specularColorMap.channel),specularIntensityMapUv:ie&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:wt&&R(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(me||ne),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(oe||wt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:rt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:oe&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ca,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:It&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&D.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return He.vertexUv1s=p.has(1),He.vertexUv2s=p.has(2),He.vertexUv3s=p.has(3),p.clear(),He}function S(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const C=T[D.type];let H;if(C){const Q=Ui[C];H=cb.clone(Q.uniforms)}else H=D.uniforms;return H}function k(D,C){let H;for(let Q=0,ot=v.length;Q<ot;Q++){const ct=v[Q];if(ct.cacheKey===C){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new PE(o,C,D,u),v.push(H)),H}function L(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function F(D){m.remove(D)}function $(){m.dispose()}return{getParameters:b,getProgramCacheKey:S,getUniforms:P,acquireProgram:k,releaseProgram:L,releaseShaderCache:F,programs:v,dispose:$}}function GE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function VE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ag(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,y,M,T,R,b){let S=o[e];return S===void 0?(S={id:_.id,object:_,geometry:y,material:M,groupOrder:T,renderOrder:_.renderOrder,z:R,group:b},o[e]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=M,S.groupOrder=T,S.renderOrder=_.renderOrder,S.z=R,S.group=b),e++,S}function h(_,y,M,T,R,b){const S=d(_,y,M,T,R,b);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(_,y,M,T,R,b){const S=d(_,y,M,T,R,b);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,y){i.length>1&&i.sort(_||VE),r.length>1&&r.sort(y||Ag),l.length>1&&l.sort(y||Ag)}function v(){for(let _=e,y=o.length;_<y;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function XE(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new Rg,o.set(r,[d])):l>=u.length?(d=new Rg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function kE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ut,color:new ze};break;case"SpotLight":i={position:new ut,direction:new ut,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[e.id]=i,i}}}function WE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let qE=0;function YE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function jE(o){const e=new kE,i=WE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ut);const l=new ut,u=new dn,d=new dn;function h(p){let v=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,R=0,b=0,S=0,O=0,U=0,P=0,k=0,L=0,F=0;p.sort(YE);for(let D=0,C=p.length;D<C;D++){const H=p[D],Q=H.color,ot=H.intensity,ct=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=Q.r*ot,_+=Q.g*ot,y+=Q.b*ot;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],ot);F++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=H.shadow.matrix,O++}r.directional[M]=z,M++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(Q).multiplyScalar(ot),z.distance=ct,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[R]=z;const j=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,j.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[R]=j.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=ht,P++}R++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(Q).multiplyScalar(ot),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[b]=z,b++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const j=H.shadow,q=i.get(H);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=H.shadow.matrix,U++}r.point[T]=z,T++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(ot),z.groundColor.copy(H.groundColor).multiplyScalar(ot),r.hemi[S]=z,S++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const $=r.hash;($.directionalLength!==M||$.pointLength!==T||$.spotLength!==R||$.rectAreaLength!==b||$.hemiLength!==S||$.numDirectionalShadows!==O||$.numPointShadows!==U||$.numSpotShadows!==P||$.numSpotMaps!==k||$.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=b,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+k-L,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,$.directionalLength=M,$.pointLength=T,$.spotLength=R,$.rectAreaLength=b,$.hemiLength=S,$.numDirectionalShadows=O,$.numPointShadows=U,$.numSpotShadows=P,$.numSpotMaps=k,$.numLightProbes=F,r.version=qE++)}function m(p,v){let _=0,y=0,M=0,T=0,R=0;const b=v.matrixWorldInverse;for(let S=0,O=p.length;S<O;S++){const U=p[S];if(U.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),_++}else if(U.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),M++}else if(U.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),d.identity(),u.copy(U.matrixWorld),u.premultiply(b),d.extractRotation(u),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(U.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),y++}else if(U.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(b),R++}}}return{setup:h,setupView:m,state:r}}function Cg(o){const e=new jE(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function ZE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Cg(o),e.set(l,[h])):u>=d.length?(h=new Cg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QE=`uniform sampler2D shadow_pass;
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
}`;function JE(o,e,i){let r=new $g;const l=new le,u=new le,d=new en,h=new yb({depthPacking:Ly}),m=new bb,p={},v=i.maxTextureSize,_={[Ka]:Xn,[Xn]:Ka,[ca]:ca},y=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:KE,fragmentShader:QE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new zi;T.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ti(T,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let S=this.type;this.render=function(L,F,$){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ua),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ot=S!==la&&this.type===la,ct=S===la&&this.type!==la;for(let ht=0,z=L.length;ht<z;ht++){const j=L[ht],q=j.shadow;if(q===void 0){se("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const gt=q.getFrameExtents();if(l.multiply(gt),u.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/gt.x),l.x=u.x*gt.x,q.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/gt.y),l.y=u.y*gt.y,q.mapSize.y=u.y)),q.map===null||ot===!0||ct===!0){const N=this.type!==la?{minFilter:ii,magFilter:ii}:{};q.map!==null&&q.map.dispose(),q.map=new Qa(l.x,l.y,N),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const _t=q.getViewportCount();for(let N=0;N<_t;N++){const rt=q.getViewport(N);d.set(u.x*rt.x,u.y*rt.y,u.x*rt.z,u.y*rt.w),Q.viewport(d),q.updateMatrices(j,N),r=q.getFrustum(),P(F,$,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===la&&O(q,$),q.needsUpdate=!1}S=this.type,b.needsUpdate=!1,o.setRenderTarget(D,C,H)};function O(L,F){const $=e.update(R);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qa(l.x,l.y)),y.uniforms.shadow_pass.value=L.map.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(F,null,$,y,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(F,null,$,M,R,null)}function U(L,F,$,D){let C=null;const H=$.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)C=H;else if(C=$.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=C.uuid,ot=F.uuid;let ct=p[Q];ct===void 0&&(ct={},p[Q]=ct);let ht=ct[ot];ht===void 0&&(ht=C.clone(),ct[ot]=ht,F.addEventListener("dispose",k)),C=ht}if(C.visible=F.visible,C.wireframe=F.wireframe,D===la?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=o.properties.get(C);Q.light=$}return C}function P(L,F,$,D,C){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===la)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld);const ot=e.update(L),ct=L.material;if(Array.isArray(ct)){const ht=ot.groups;for(let z=0,j=ht.length;z<j;z++){const q=ht[z],gt=ct[q.materialIndex];if(gt&&gt.visible){const _t=U(L,gt,D,C);L.onBeforeShadow(o,L,F,$,ot,_t,q),o.renderBufferDirect($,null,ot,_t,L,q),L.onAfterShadow(o,L,F,$,ot,_t,q)}}}else if(ct.visible){const ht=U(L,ct,D,C);L.onBeforeShadow(o,L,F,$,ot,ht,null),o.renderBufferDirect($,null,ot,ht,L,null),L.onAfterShadow(o,L,F,$,ot,ht,null)}}const Q=L.children;for(let ot=0,ct=Q.length;ot<ct;ot++)P(Q[ot],F,$,D,C)}function k(L){L.target.removeEventListener("dispose",k);for(const $ in p){const D=p[$],C=L.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const $E={[Pd]:Fd,[Bd]:Gd,[Id]:Vd,[Ms]:Hd,[Fd]:Pd,[Gd]:Bd,[Vd]:Id,[Hd]:Ms};function tT(o,e){function i(){let V=!1;const Ut=new en;let Ct=null;const wt=new en(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!V&&(o.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){V=bt},setClear:function(bt,vt,It,ae,He){He===!0&&(bt*=ae,vt*=ae,It*=ae),Ut.set(bt,vt,It,ae),wt.equals(Ut)===!1&&(o.clearColor(bt,vt,It,ae),wt.copy(Ut))},reset:function(){V=!1,Ct=null,wt.set(-1,0,0,0)}}}function r(){let V=!1,Ut=!1,Ct=null,wt=null,bt=null;return{setReversed:function(vt){if(Ut!==vt){const It=e.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(vt){vt?ft(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(vt){Ct!==vt&&!V&&(o.depthMask(vt),Ct=vt)},setFunc:function(vt){if(Ut&&(vt=$E[vt]),wt!==vt){switch(vt){case Pd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case Gd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}wt=vt}},setLocked:function(vt){V=vt},setClear:function(vt){bt!==vt&&(Ut&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){V=!1,Ct=null,wt=null,bt=null,Ut=!1}}}function l(){let V=!1,Ut=null,Ct=null,wt=null,bt=null,vt=null,It=null,ae=null,He=null;return{setTest:function(Ce){V||(Ce?ft(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ce){Ut!==Ce&&!V&&(o.stencilMask(Ce),Ut=Ce)},setFunc:function(Ce,Cn,Wn){(Ct!==Ce||wt!==Cn||bt!==Wn)&&(o.stencilFunc(Ce,Cn,Wn),Ct=Ce,wt=Cn,bt=Wn)},setOp:function(Ce,Cn,Wn){(vt!==Ce||It!==Cn||ae!==Wn)&&(o.stencilOp(Ce,Cn,Wn),vt=Ce,It=Cn,ae=Wn)},setLocked:function(Ce){V=Ce},setClear:function(Ce){He!==Ce&&(o.clearStencil(Ce),He=Ce)},reset:function(){V=!1,Ut=null,Ct=null,wt=null,bt=null,vt=null,It=null,ae=null,He=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},y=new WeakMap,M=[],T=null,R=!1,b=null,S=null,O=null,U=null,P=null,k=null,L=null,F=new ze(0,0,0),$=0,D=!1,C=null,H=null,Q=null,ot=null,ct=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=j>=2);let gt=null,_t={};const N=o.getParameter(o.SCISSOR_BOX),rt=o.getParameter(o.VIEWPORT),St=new en().fromArray(N),Et=new en().fromArray(rt);function Ot(V,Ut,Ct,wt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(V,vt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Ct;It++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,wt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const at={};at[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ft(o.DEPTH_TEST),d.setFunc(Ms),ue(!1),me(Dx),ft(o.CULL_FACE),Ae(ua);function ft(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function At(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Gt(V,Ut){return _[V]!==Ut?(o.bindFramebuffer(V,Ut),_[V]=Ut,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Wt(V,Ut){let Ct=M,wt=!1;if(V){Ct=y.get(Ut),Ct===void 0&&(Ct=[],y.set(Ut,Ct));const bt=V.textures;if(Ct.length!==bt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,It=bt.length;vt<It;vt++)Ct[vt]=o.COLOR_ATTACHMENT0+vt;Ct.length=bt.length,wt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,wt=!0);wt&&o.drawBuffers(Ct)}function oe(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const Je={[Mr]:o.FUNC_ADD,[ay]:o.FUNC_SUBTRACT,[ry]:o.FUNC_REVERSE_SUBTRACT};Je[sy]=o.MIN,Je[oy]=o.MAX;const ce={[ly]:o.ZERO,[cy]:o.ONE,[uy]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[xy]:o.SRC_ALPHA_SATURATE,[py]:o.DST_COLOR,[dy]:o.DST_ALPHA,[fy]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[my]:o.ONE_MINUS_DST_COLOR,[hy]:o.ONE_MINUS_DST_ALPHA,[gy]:o.CONSTANT_COLOR,[vy]:o.ONE_MINUS_CONSTANT_COLOR,[_y]:o.CONSTANT_ALPHA,[Sy]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(V,Ut,Ct,wt,bt,vt,It,ae,He,Ce){if(V===ua){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(ft(o.BLEND),R=!0),V!==iy){if(V!==b||Ce!==D){if((S!==Mr||P!==Mr)&&(o.blendEquation(o.FUNC_ADD),S=Mr,P=Mr),Ce)switch(V){case ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nd:o.blendFunc(o.ONE,o.ONE);break;case Ux:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",V);break}else switch(V){case ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ux:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",V);break}O=null,U=null,k=null,L=null,F.set(0,0,0),$=0,b=V,D=Ce}return}bt=bt||Ut,vt=vt||Ct,It=It||wt,(Ut!==S||bt!==P)&&(o.blendEquationSeparate(Je[Ut],Je[bt]),S=Ut,P=bt),(Ct!==O||wt!==U||vt!==k||It!==L)&&(o.blendFuncSeparate(ce[Ct],ce[wt],ce[vt],ce[It]),O=Ct,U=wt,k=vt,L=It),(ae.equals(F)===!1||He!==$)&&(o.blendColor(ae.r,ae.g,ae.b,He),F.copy(ae),$=He),b=V,D=!1}function I(V,Ut){V.side===ca?At(o.CULL_FACE):ft(o.CULL_FACE);let Ct=V.side===Xn;Ut&&(Ct=!Ct),ue(Ct),V.blending===ys&&V.transparent===!1?Ae(ua):Ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const wt=V.stencilWrite;h.setTest(wt),wt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function me(V){V!==ty?(ft(o.CULL_FACE),V!==H&&(V===Dx?o.cullFace(o.BACK):V===ey?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),H=V}function ge(V){V!==Q&&(z&&o.lineWidth(V),Q=V)}function Bt(V,Ut,Ct){V?(ft(o.POLYGON_OFFSET_FILL),(ot!==Ut||ct!==Ct)&&(o.polygonOffset(Ut,Ct),ot=Ut,ct=Ct)):At(o.POLYGON_OFFSET_FILL)}function Ie(V){V?ft(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Yt(V){V===void 0&&(V=o.TEXTURE0+ht-1),gt!==V&&(o.activeTexture(V),gt=V)}function ne(V,Ut,Ct){Ct===void 0&&(gt===null?Ct=o.TEXTURE0+ht-1:Ct=gt);let wt=_t[Ct];wt===void 0&&(wt={type:void 0,texture:void 0},_t[Ct]=wt),(wt.type!==V||wt.texture!==Ut)&&(gt!==Ct&&(o.activeTexture(Ct),gt=Ct),o.bindTexture(V,Ut||at[V]),wt.type=V,wt.texture=Ut)}function w(){const V=_t[gt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function G(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function et(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function dt(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function nt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Dt(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function jt(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function kt(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function yt(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Mt(V){St.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function Zt(V){Et.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Et.copy(V))}function Xt(V,Ut){let Ct=p.get(Ut);Ct===void 0&&(Ct=new WeakMap,p.set(Ut,Ct));let wt=Ct.get(V);wt===void 0&&(wt=o.getUniformBlockIndex(Ut,V.name),Ct.set(V,wt))}function Pt(V,Ut){const wt=p.get(Ut).get(V);m.get(Ut)!==wt&&(o.uniformBlockBinding(Ut,wt,V.__bindingPointIndex),m.set(Ut,wt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},gt=null,_t={},_={},y=new WeakMap,M=[],T=null,R=!1,b=null,S=null,O=null,U=null,P=null,k=null,L=null,F=new ze(0,0,0),$=0,D=!1,C=null,H=null,Q=null,ot=null,ct=null,St.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ft,disable:At,bindFramebuffer:Gt,drawBuffers:Wt,useProgram:oe,setBlending:Ae,setMaterial:I,setFlipSided:ue,setCullFace:me,setLineWidth:ge,setPolygonOffset:Bt,setScissorTest:Ie,activeTexture:Yt,bindTexture:ne,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:kt,texImage3D:yt,updateUBOMapping:Xt,uniformBlockBinding:Pt,texStorage2D:Dt,texStorage3D:jt,texSubImage2D:et,texSubImage3D:dt,compressedTexSubImage2D:nt,compressedTexSubImage3D:zt,scissor:Mt,viewport:Zt,reset:ie}}function eT(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,x){return M?new OffscreenCanvas(w,x):Nc("canvas")}function R(w,x,G){let et=1;const dt=ne(w);if((dt.width>G||dt.height>G)&&(et=G/Math.max(dt.width,dt.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(et*dt.width),zt=Math.floor(et*dt.height);_===void 0&&(_=T(nt,zt));const Dt=x?T(nt,zt):_;return Dt.width=nt,Dt.height=zt,Dt.getContext("2d").drawImage(w,0,0,nt,zt),se("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+nt+"x"+zt+")."),Dt}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),w;return w}function b(w){return w.generateMipmaps}function S(w){o.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,x,G,et,dt=!1){if(w!==null){if(o[w]!==void 0)return o[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=x;if(x===o.RED&&(G===o.FLOAT&&(nt=o.R32F),G===o.HALF_FLOAT&&(nt=o.R16F),G===o.UNSIGNED_BYTE&&(nt=o.R8)),x===o.RED_INTEGER&&(G===o.UNSIGNED_BYTE&&(nt=o.R8UI),G===o.UNSIGNED_SHORT&&(nt=o.R16UI),G===o.UNSIGNED_INT&&(nt=o.R32UI),G===o.BYTE&&(nt=o.R8I),G===o.SHORT&&(nt=o.R16I),G===o.INT&&(nt=o.R32I)),x===o.RG&&(G===o.FLOAT&&(nt=o.RG32F),G===o.HALF_FLOAT&&(nt=o.RG16F),G===o.UNSIGNED_BYTE&&(nt=o.RG8)),x===o.RG_INTEGER&&(G===o.UNSIGNED_BYTE&&(nt=o.RG8UI),G===o.UNSIGNED_SHORT&&(nt=o.RG16UI),G===o.UNSIGNED_INT&&(nt=o.RG32UI),G===o.BYTE&&(nt=o.RG8I),G===o.SHORT&&(nt=o.RG16I),G===o.INT&&(nt=o.RG32I)),x===o.RGB_INTEGER&&(G===o.UNSIGNED_BYTE&&(nt=o.RGB8UI),G===o.UNSIGNED_SHORT&&(nt=o.RGB16UI),G===o.UNSIGNED_INT&&(nt=o.RGB32UI),G===o.BYTE&&(nt=o.RGB8I),G===o.SHORT&&(nt=o.RGB16I),G===o.INT&&(nt=o.RGB32I)),x===o.RGBA_INTEGER&&(G===o.UNSIGNED_BYTE&&(nt=o.RGBA8UI),G===o.UNSIGNED_SHORT&&(nt=o.RGBA16UI),G===o.UNSIGNED_INT&&(nt=o.RGBA32UI),G===o.BYTE&&(nt=o.RGBA8I),G===o.SHORT&&(nt=o.RGBA16I),G===o.INT&&(nt=o.RGBA32I)),x===o.RGB&&(G===o.UNSIGNED_INT_5_9_9_9_REV&&(nt=o.RGB9_E5),G===o.UNSIGNED_INT_10F_11F_11F_REV&&(nt=o.R11F_G11F_B10F)),x===o.RGBA){const zt=dt?Uc:Le.getTransfer(et);G===o.FLOAT&&(nt=o.RGBA32F),G===o.HALF_FLOAT&&(nt=o.RGBA16F),G===o.UNSIGNED_BYTE&&(nt=zt===ke?o.SRGB8_ALPHA8:o.RGBA8),G===o.UNSIGNED_SHORT_4_4_4_4&&(nt=o.RGBA4),G===o.UNSIGNED_SHORT_5_5_5_1&&(nt=o.RGB5_A1)}return(nt===o.R16F||nt===o.R32F||nt===o.RG16F||nt===o.RG32F||nt===o.RGBA16F||nt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),nt}function P(w,x){let G;return w?x===null||x===Rr||x===Oo?G=o.DEPTH24_STENCIL8:x===Li?G=o.DEPTH32F_STENCIL8:x===No&&(G=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rr||x===Oo?G=o.DEPTH_COMPONENT24:x===Li?G=o.DEPTH_COMPONENT32F:x===No&&(G=o.DEPTH_COMPONENT16),G}function k(w,x){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==ii&&w.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){const x=w.target;x.removeEventListener("dispose",L),$(x),x.isVideoTexture&&v.delete(x)}function F(w){const x=w.target;x.removeEventListener("dispose",F),C(x)}function $(w){const x=r.get(w);if(x.__webglInit===void 0)return;const G=w.source,et=y.get(G);if(et){const dt=et[x.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(w),Object.keys(et).length===0&&y.delete(G)}r.remove(w)}function D(w){const x=r.get(w);o.deleteTexture(x.__webglTexture);const G=w.source,et=y.get(G);delete et[x.__cacheKey],d.memory.textures--}function C(w){const x=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let dt=0;dt<x.__webglFramebuffer[et].length;dt++)o.deleteFramebuffer(x.__webglFramebuffer[et][dt]);else o.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)o.deleteFramebuffer(x.__webglFramebuffer[et]);else o.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&o.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&o.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=w.textures;for(let et=0,dt=G.length;et<dt;et++){const nt=r.get(G[et]);nt.__webglTexture&&(o.deleteTexture(nt.__webglTexture),d.memory.textures--),r.remove(G[et])}r.remove(w)}let H=0;function Q(){H=0}function ot(){const w=H;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),H+=1,w}function ct(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ht(w,x){const G=r.get(w);if(w.isVideoTexture&&Ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const et=w.image;if(et===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{at(G,w,x);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,G.__webglTexture,o.TEXTURE0+x)}function z(w,x){const G=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){at(G,w,x);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,G.__webglTexture,o.TEXTURE0+x)}function j(w,x){const G=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){at(G,w,x);return}i.bindTexture(o.TEXTURE_3D,G.__webglTexture,o.TEXTURE0+x)}function q(w,x){const G=r.get(w);if(w.version>0&&G.__version!==w.version){ft(G,w,x);return}i.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+x)}const gt={[Wd]:o.REPEAT,[ni]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},_t={[ii]:o.NEAREST,[Dy]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Ln]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Tr]:o.LINEAR_MIPMAP_LINEAR},N={[zy]:o.NEVER,[Gy]:o.ALWAYS,[Py]:o.LESS,[Gg]:o.LEQUAL,[Fy]:o.EQUAL,[Hy]:o.GEQUAL,[By]:o.GREATER,[Iy]:o.NOTEQUAL};function rt(w,x){if(x.type===Li&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===td||x.magFilter===nc||x.magFilter===Tr||x.minFilter===Ln||x.minFilter===td||x.minFilter===nc||x.minFilter===Tr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,gt[x.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,gt[x.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,gt[x.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,_t[x.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,N[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ii||x.minFilter!==nc&&x.minFilter!==Tr||x.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function St(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L));const et=x.source;let dt=y.get(et);dt===void 0&&(dt={},y.set(et,dt));const nt=ct(x);if(nt!==w.__cacheKey){dt[nt]===void 0&&(dt[nt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,G=!0),dt[nt].usedTimes++;const zt=dt[w.__cacheKey];zt!==void 0&&(dt[w.__cacheKey].usedTimes--,zt.usedTimes===0&&D(x)),w.__cacheKey=nt,w.__webglTexture=dt[nt].texture}return G}function Et(w,x,G){return Math.floor(Math.floor(w/G)/x)}function Ot(w,x,G,et){const nt=w.updateRanges;if(nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,x.width,x.height,G,et,x.data);else{nt.sort((yt,Mt)=>yt.start-Mt.start);let zt=0;for(let yt=1;yt<nt.length;yt++){const Mt=nt[zt],Zt=nt[yt],Xt=Mt.start+Mt.count,Pt=Et(Zt.start,x.width,4),ie=Et(Mt.start,x.width,4);Zt.start<=Xt+1&&Pt===ie&&Et(Zt.start+Zt.count-1,x.width,4)===Pt?Mt.count=Math.max(Mt.count,Zt.start+Zt.count-Mt.start):(++zt,nt[zt]=Zt)}nt.length=zt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,x.width);for(let yt=0,Mt=nt.length;yt<Mt;yt++){const Zt=nt[yt],Xt=Math.floor(Zt.start/4),Pt=Math.ceil(Zt.count/4),ie=Xt%x.width,V=Math.floor(Xt/x.width),Ut=Pt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ie,V,Ut,Ct,G,et,x.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function at(w,x,G){let et=o.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=o.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=o.TEXTURE_3D);const dt=St(w,x),nt=x.source;i.bindTexture(et,w.__webglTexture,o.TEXTURE0+G);const zt=r.get(nt);if(nt.version!==zt.__version||dt===!0){i.activeTexture(o.TEXTURE0+G);const Dt=Le.getPrimaries(Le.workingColorSpace),jt=x.colorSpace===Ya?null:Le.getPrimaries(x.colorSpace),kt=x.colorSpace===Ya||Dt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let yt=R(x.image,!1,l.maxTextureSize);yt=Yt(x,yt);const Mt=u.convert(x.format,x.colorSpace),Zt=u.convert(x.type);let Xt=U(x.internalFormat,Mt,Zt,x.colorSpace,x.isVideoTexture);rt(et,x);let Pt;const ie=x.mipmaps,V=x.isVideoTexture!==!0,Ut=zt.__version===void 0||dt===!0,Ct=nt.dataReady,wt=k(x,yt);if(x.isDepthTexture)Xt=P(x.format===Po,x.type),Ut&&(V?i.texStorage2D(o.TEXTURE_2D,1,Xt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,Mt,Zt,null));else if(x.isDataTexture)if(ie.length>0){V&&Ut&&i.texStorage2D(o.TEXTURE_2D,wt,Xt,ie[0].width,ie[0].height);for(let bt=0,vt=ie.length;bt<vt;bt++)Pt=ie[bt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Zt,Pt.data):i.texImage2D(o.TEXTURE_2D,bt,Xt,Pt.width,Pt.height,0,Mt,Zt,Pt.data);x.generateMipmaps=!1}else V?(Ut&&i.texStorage2D(o.TEXTURE_2D,wt,Xt,yt.width,yt.height),Ct&&Ot(x,yt,Mt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Xt,yt.width,yt.height,0,Mt,Zt,yt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,Xt,ie[0].width,ie[0].height,yt.depth);for(let bt=0,vt=ie.length;bt<vt;bt++)if(Pt=ie[bt],x.format!==pi)if(Mt!==null)if(V){if(Ct)if(x.layerUpdates.size>0){const It=rg(Pt.width,Pt.height,x.format,x.type);for(const ae of x.layerUpdates){const He=Pt.data.subarray(ae*It/Pt.data.BYTES_PER_ELEMENT,(ae+1)*It/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ae,Pt.width,Pt.height,1,Mt,He)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,yt.depth,Mt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Xt,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,yt.depth,Mt,Zt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Xt,Pt.width,Pt.height,yt.depth,0,Mt,Zt,Pt.data)}else{V&&Ut&&i.texStorage2D(o.TEXTURE_2D,wt,Xt,ie[0].width,ie[0].height);for(let bt=0,vt=ie.length;bt<vt;bt++)Pt=ie[bt],x.format!==pi?Mt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Xt,Pt.width,Pt.height,0,Pt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Zt,Pt.data):i.texImage2D(o.TEXTURE_2D,bt,Xt,Pt.width,Pt.height,0,Mt,Zt,Pt.data)}else if(x.isDataArrayTexture)if(V){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,Xt,yt.width,yt.height,yt.depth),Ct)if(x.layerUpdates.size>0){const bt=rg(yt.width,yt.height,x.format,x.type);for(const vt of x.layerUpdates){const It=yt.data.subarray(vt*bt/yt.data.BYTES_PER_ELEMENT,(vt+1)*bt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Mt,Zt,It)}x.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Mt,Zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,Mt,Zt,yt.data);else if(x.isData3DTexture)V?(Ut&&i.texStorage3D(o.TEXTURE_3D,wt,Xt,yt.width,yt.height,yt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Mt,Zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,Mt,Zt,yt.data);else if(x.isFramebufferTexture){if(Ut)if(V)i.texStorage2D(o.TEXTURE_2D,wt,Xt,yt.width,yt.height);else{let bt=yt.width,vt=yt.height;for(let It=0;It<wt;It++)i.texImage2D(o.TEXTURE_2D,It,Xt,bt,vt,0,Mt,Zt,null),bt>>=1,vt>>=1}}else if(ie.length>0){if(V&&Ut){const bt=ne(ie[0]);i.texStorage2D(o.TEXTURE_2D,wt,Xt,bt.width,bt.height)}for(let bt=0,vt=ie.length;bt<vt;bt++)Pt=ie[bt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Mt,Zt,Pt):i.texImage2D(o.TEXTURE_2D,bt,Xt,Mt,Zt,Pt);x.generateMipmaps=!1}else if(V){if(Ut){const bt=ne(yt);i.texStorage2D(o.TEXTURE_2D,wt,Xt,bt.width,bt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Mt,Zt,yt);b(x)&&S(et),zt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ft(w,x,G){if(x.image.length!==6)return;const et=St(w,x),dt=x.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+G);const nt=r.get(dt);if(dt.version!==nt.__version||et===!0){i.activeTexture(o.TEXTURE0+G);const zt=Le.getPrimaries(Le.workingColorSpace),Dt=x.colorSpace===Ya?null:Le.getPrimaries(x.colorSpace),jt=x.colorSpace===Ya||zt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,yt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let vt=0;vt<6;vt++)!kt&&!yt?Mt[vt]=R(x.image[vt],!0,l.maxCubemapSize):Mt[vt]=yt?x.image[vt].image:x.image[vt],Mt[vt]=Yt(x,Mt[vt]);const Zt=Mt[0],Xt=u.convert(x.format,x.colorSpace),Pt=u.convert(x.type),ie=U(x.internalFormat,Xt,Pt,x.colorSpace),V=x.isVideoTexture!==!0,Ut=nt.__version===void 0||et===!0,Ct=dt.dataReady;let wt=k(x,Zt);rt(o.TEXTURE_CUBE_MAP,x);let bt;if(kt){V&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ie,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){bt=Mt[vt].mipmaps;for(let It=0;It<bt.length;It++){const ae=bt[It];x.format!==pi?Xt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ae.width,ae.height,Xt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ie,ae.width,ae.height,0,ae.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ae.width,ae.height,Xt,Pt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ie,ae.width,ae.height,0,Xt,Pt,ae.data)}}}else{if(bt=x.mipmaps,V&&Ut){bt.length>0&&wt++;const vt=ne(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Mt[vt].width,Mt[vt].height,Xt,Pt,Mt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Mt[vt].width,Mt[vt].height,0,Xt,Pt,Mt[vt].data);for(let It=0;It<bt.length;It++){const He=bt[It].image[vt].image;V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,He.width,He.height,Xt,Pt,He.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ie,He.width,He.height,0,Xt,Pt,He.data)}}else{V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt,Pt,Mt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Xt,Pt,Mt[vt]);for(let It=0;It<bt.length;It++){const ae=bt[It];V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Xt,Pt,ae.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ie,Xt,Pt,ae.image[vt])}}}b(x)&&S(o.TEXTURE_CUBE_MAP),nt.__version=dt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function At(w,x,G,et,dt,nt){const zt=u.convert(G.format,G.colorSpace),Dt=u.convert(G.type),jt=U(G.internalFormat,zt,Dt,G.colorSpace),kt=r.get(x),yt=r.get(G);if(yt.__renderTarget=x,!kt.__hasExternalTextures){const Mt=Math.max(1,x.width>>nt),Zt=Math.max(1,x.height>>nt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,nt,jt,Mt,Zt,x.depth,0,zt,Dt,null):i.texImage2D(dt,nt,jt,Mt,Zt,0,zt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Bt(x)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,et,dt,yt.__webglTexture,0,ge(x)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,et,dt,yt.__webglTexture,nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(w,x,G){if(o.bindRenderbuffer(o.RENDERBUFFER,w),x.depthBuffer){const et=x.depthTexture,dt=et&&et.isDepthTexture?et.type:null,nt=P(x.stencilBuffer,dt),zt=x.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ge(x);Bt(x)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,nt,x.width,x.height):G?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,nt,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,nt,x.width,x.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,w)}else{const et=x.textures;for(let dt=0;dt<et.length;dt++){const nt=et[dt],zt=u.convert(nt.format,nt.colorSpace),Dt=u.convert(nt.type),jt=U(nt.internalFormat,zt,Dt,nt.colorSpace),kt=ge(x);G&&Bt(x)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,jt,x.width,x.height):Bt(x)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,jt,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,jt,x.width,x.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=r.get(x.depthTexture);et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ht(x.depthTexture,0);const dt=et.__webglTexture,nt=ge(x);if(x.depthTexture.format===zo)Bt(x)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,nt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(x.depthTexture.format===Po)Bt(x)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,nt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function oe(w){const x=r.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const et=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){const dt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",dt)};et.addEventListener("dispose",dt),x.__depthDisposeCallback=dt}x.__boundDepthTexture=et}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const et=w.texture.mipmaps;et&&et.length>0?Wt(x.__webglFramebuffer[0],w):Wt(x.__webglFramebuffer,w)}else if(G){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(i.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=o.createRenderbuffer(),Gt(x.__webglDepthbuffer[et],w,!1);else{const dt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer[et];o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,nt)}}else{const et=w.texture.mipmaps;if(et&&et.length>0?i.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=o.createRenderbuffer(),Gt(x.__webglDepthbuffer,w,!1);else{const dt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(w,x,G){const et=r.get(w);x!==void 0&&At(et.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),G!==void 0&&oe(w)}function ce(w){const x=w.texture,G=r.get(w),et=r.get(x);w.addEventListener("dispose",F);const dt=w.textures,nt=w.isWebGLCubeRenderTarget===!0,zt=dt.length>1;if(zt||(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=x.version,d.memory.textures++),nt){G.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[Dt]=[];for(let jt=0;jt<x.mipmaps.length;jt++)G.__webglFramebuffer[Dt][jt]=o.createFramebuffer()}else G.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let Dt=0;Dt<x.mipmaps.length;Dt++)G.__webglFramebuffer[Dt]=o.createFramebuffer()}else G.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Dt=0,jt=dt.length;Dt<jt;Dt++){const kt=r.get(dt[Dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&Bt(w)===!1){G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const jt=dt[Dt];G.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,G.__webglColorRenderbuffer[Dt]);const kt=u.convert(jt.format,jt.colorSpace),yt=u.convert(jt.type),Mt=U(jt.internalFormat,kt,yt,jt.colorSpace,w.isXRRenderTarget===!0),Zt=ge(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Mt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,G.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(G.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(nt){i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture),rt(o.TEXTURE_CUBE_MAP,x);for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let jt=0;jt<x.mipmaps.length;jt++)At(G.__webglFramebuffer[Dt][jt],w,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt);else At(G.__webglFramebuffer[Dt],w,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);b(x)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Dt=0,jt=dt.length;Dt<jt;Dt++){const kt=dt[Dt],yt=r.get(kt);let Mt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Mt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,yt.__webglTexture),rt(Mt,kt),At(G.__webglFramebuffer,w,kt,o.COLOR_ATTACHMENT0+Dt,Mt,0),b(kt)&&S(Mt)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Dt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,et.__webglTexture),rt(Dt,x),x.mipmaps&&x.mipmaps.length>0)for(let jt=0;jt<x.mipmaps.length;jt++)At(G.__webglFramebuffer[jt],w,x,o.COLOR_ATTACHMENT0,Dt,jt);else At(G.__webglFramebuffer,w,x,o.COLOR_ATTACHMENT0,Dt,0);b(x)&&S(Dt),i.unbindTexture()}w.depthBuffer&&oe(w)}function Ae(w){const x=w.textures;for(let G=0,et=x.length;G<et;G++){const dt=x[G];if(b(dt)){const nt=O(w),zt=r.get(dt).__webglTexture;i.bindTexture(nt,zt),S(nt),i.unbindTexture()}}}const I=[],ue=[];function me(w){if(w.samples>0){if(Bt(w)===!1){const x=w.textures,G=w.width,et=w.height;let dt=o.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(w),Dt=x.length>1;if(Dt)for(let kt=0;kt<x.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const jt=w.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let kt=0;kt<x.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);const yt=r.get(x[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,G,et,0,0,G,et,dt,o.NEAREST),m===!0&&(I.length=0,ue.length=0,I.push(o.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(I.push(nt),ue.push(nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ue)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let kt=0;kt<x.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);const yt=r.get(x[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const x=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[x])}}}function ge(w){return Math.min(l.maxSamples,w.samples)}function Bt(w){const x=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ie(w){const x=d.render.frame;v.get(w)!==x&&(v.set(w,x),w.update())}function Yt(w,x){const G=w.colorSpace,et=w.format,dt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==As&&G!==Ya&&(Le.getTransfer(G)===ke?(et!==pi||dt!==ha)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",G)),x}function ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=Q,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Je,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Bt}function nT(o,e){function i(r,l=Ya){let u;const d=Le.getTransfer(l);if(r===ha)return o.UNSIGNED_BYTE;if(r===Ah)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Rh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Pg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Fg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Og)return o.BYTE;if(r===zg)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===Th)return o.INT;if(r===Rr)return o.UNSIGNED_INT;if(r===Li)return o.FLOAT;if(r===Cr)return o.HALF_FLOAT;if(r===Bg)return o.ALPHA;if(r===Ig)return o.RGB;if(r===pi)return o.RGBA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===Hg)return o.RED;if(r===Ch)return o.RED_INTEGER;if(r===wh)return o.RG;if(r===Dh)return o.RG_INTEGER;if(r===Uh)return o.RGBA_INTEGER;if(r===Ac||r===Rc||r===Cc||r===wc)if(d===ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ac)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ac)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===jd||r===Zd||r===Kd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Yd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return d===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===th)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ih)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ch)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ph||r===mh||r===xh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ph)return d===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gh||r===vh||r===_h||r===Sh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===gh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===vh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_h)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const iT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aT=`
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

}`;class rT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ev(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oi({vertexShader:iT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Ar(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sT extends Cs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,y=null,M=null,T=null;const R=typeof XRWebGLBinding<"u",b=new rT,S={},O=i.getContextAttributes();let U=null,P=null;const k=[],L=[],F=new le;let $=null;const D=new bi;D.viewport=new en;const C=new bi;C.viewport=new en;const H=[D,C],Q=new Eb;let ot=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ft=k[at];return ft===void 0&&(ft=new Md,k[at]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(at){let ft=k[at];return ft===void 0&&(ft=new Md,k[at]=ft),ft.getGripSpace()},this.getHand=function(at){let ft=k[at];return ft===void 0&&(ft=new Md,k[at]=ft),ft.getHandSpace()};function ht(at){const ft=L.indexOf(at.inputSource);if(ft===-1)return;const At=k[ft];At!==void 0&&(At.update(at.inputSource,at.frame,p||d),At.dispatchEvent({type:at.type,data:at.inputSource}))}function z(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",j);for(let at=0;at<k.length;at++){const ft=L[at];ft!==null&&(L[at]=null,k[at].disconnect(ft))}ot=null,ct=null,b.reset();for(const at in S)delete S[at];e.setRenderTarget(U),M=null,y=null,_=null,l=null,P=null,Ot.stop(),r.isPresenting=!1,e.setPixelRatio($),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",z),l.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Gt=null,Wt=null;O.depth&&(Wt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=O.stencil?Po:zo,Gt=O.stencil?Oo:Rr);const oe={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:u};_=this.getBinding(),y=_.createProjectionLayer(oe),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Qa(y.textureWidth,y.textureHeight,{format:pi,type:ha,depthTexture:new tv(y.textureWidth,y.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const At={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Qa(M.framebufferWidth,M.framebufferHeight,{format:pi,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ot.setContext(l),Ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(at){for(let ft=0;ft<at.removed.length;ft++){const At=at.removed[ft],Gt=L.indexOf(At);Gt>=0&&(L[Gt]=null,k[Gt].disconnect(At))}for(let ft=0;ft<at.added.length;ft++){const At=at.added[ft];let Gt=L.indexOf(At);if(Gt===-1){for(let oe=0;oe<k.length;oe++)if(oe>=L.length){L.push(At),Gt=oe;break}else if(L[oe]===null){L[oe]=At,Gt=oe;break}if(Gt===-1)break}const Wt=k[Gt];Wt&&Wt.connect(At)}}const q=new ut,gt=new ut;function _t(at,ft,At){q.setFromMatrixPosition(ft.matrixWorld),gt.setFromMatrixPosition(At.matrixWorld);const Gt=q.distanceTo(gt),Wt=ft.projectionMatrix.elements,oe=At.projectionMatrix.elements,Je=Wt[14]/(Wt[10]-1),ce=Wt[14]/(Wt[10]+1),Ae=(Wt[9]+1)/Wt[5],I=(Wt[9]-1)/Wt[5],ue=(Wt[8]-1)/Wt[0],me=(oe[8]+1)/oe[0],ge=Je*ue,Bt=Je*me,Ie=Gt/(-ue+me),Yt=Ie*-ue;if(ft.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Yt),at.translateZ(Ie),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Wt[10]===-1)at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const ne=Je+Ie,w=ce+Ie,x=ge-Yt,G=Bt+(Gt-Yt),et=Ae*ce/w*ne,dt=I*ce/w*ne;at.projectionMatrix.makePerspective(x,G,et,dt,ne,w),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function N(at,ft){ft===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ft.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ft=at.near,At=at.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(At=b.depthFar)),Q.near=C.near=D.near=ft,Q.far=C.far=D.far=At,(ot!==Q.near||ct!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ot=Q.near,ct=Q.far),Q.layers.mask=at.layers.mask|6,D.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Gt=at.parent,Wt=Q.cameras;N(Q,Gt);for(let oe=0;oe<Wt.length;oe++)N(Wt[oe],Gt);Wt.length===2?_t(Q,D,C):Q.projectionMatrix.copy(D.projectionMatrix),rt(at,Q,Gt)};function rt(at,ft,At){At===null?at.matrix.copy(ft.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(ft.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=yh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(at){m=at,y!==null&&(y.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Q)},this.getCameraTexture=function(at){return S[at]};let St=null;function Et(at,ft){if(v=ft.getViewerPose(p||d),T=ft,v!==null){const At=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Gt=!1;At.length!==Q.cameras.length&&(Q.cameras.length=0,Gt=!0);for(let ce=0;ce<At.length;ce++){const Ae=At[ce];let I=null;if(M!==null)I=M.getViewport(Ae);else{const me=_.getViewSubImage(y,Ae);I=me.viewport,ce===0&&(e.setRenderTargetTextures(P,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(P))}let ue=H[ce];ue===void 0&&(ue=new bi,ue.layers.enable(ce),ue.viewport=new en,H[ce]=ue),ue.matrix.fromArray(Ae.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ae.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(I.x,I.y,I.width,I.height),ce===0&&(Q.matrix.copy(ue.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Gt===!0&&Q.cameras.push(ue)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const ce=_.getDepthInformation(At[0]);ce&&ce.isValid&&ce.texture&&b.init(ce,l.renderState)}if(Wt&&Wt.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let ce=0;ce<At.length;ce++){const Ae=At[ce].camera;if(Ae){let I=S[Ae];I||(I=new ev,S[Ae]=I);const ue=_.getCameraImage(Ae);I.sourceTexture=ue}}}}for(let At=0;At<k.length;At++){const Gt=L[At],Wt=k[At];Gt!==null&&Wt!==void 0&&Wt.update(Gt,ft,p||d)}St&&St(at,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),T=null}const Ot=new nv;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(at){St=at},this.dispose=function(){}}}const yr=new pa,oT=new dn;function lT(o,e){function i(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function r(b,S){S.color.getRGB(b.fogColor.value,Kg(o)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function l(b,S,O,U,P){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(b,S):S.isMeshToonMaterial?(u(b,S),_(b,S)):S.isMeshPhongMaterial?(u(b,S),v(b,S)):S.isMeshStandardMaterial?(u(b,S),y(b,S),S.isMeshPhysicalMaterial&&M(b,S,P)):S.isMeshMatcapMaterial?(u(b,S),T(b,S)):S.isMeshDepthMaterial?u(b,S):S.isMeshDistanceMaterial?(u(b,S),R(b,S)):S.isMeshNormalMaterial?u(b,S):S.isLineBasicMaterial?(d(b,S),S.isLineDashedMaterial&&h(b,S)):S.isPointsMaterial?m(b,S,O,U):S.isSpriteMaterial?p(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,i(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===Xn&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,i(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===Xn&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,i(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,i(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const O=e.get(S),U=O.envMap,P=O.envMapRotation;U&&(b.envMap.value=U,yr.copy(P),yr.x*=-1,yr.y*=-1,yr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),b.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(yr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,b.aoMapTransform))}function d(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform))}function h(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function m(b,S,O,U){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*O,b.scale.value=U*.5,S.map&&(b.map.value=S.map,i(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function p(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function v(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function _(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function y(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function M(b,S,O){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=O.texture,b.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,S){S.matcap&&(b.matcap.value=S.matcap)}function R(b,S){const O=e.get(S).light;b.referencePosition.value.setFromMatrixPosition(O.matrixWorld),b.nearDistance.value=O.shadow.camera.near,b.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cT(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const P=U.program;r.uniformBlockBinding(O,P)}function p(O,U){let P=l[O.id];P===void 0&&(T(O),P=v(O),l[O.id]=P,O.addEventListener("dispose",b));const k=U.program;r.updateUBOMapping(O,k);const L=e.render.frame;u[O.id]!==L&&(y(O),u[O.id]=L)}function v(O){const U=_();O.__bindingPointIndex=U;const P=o.createBuffer(),k=O.__size,L=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,k,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,P),P}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const U=l[O.id],P=O.uniforms,k=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let L=0,F=P.length;L<F;L++){const $=Array.isArray(P[L])?P[L]:[P[L]];for(let D=0,C=$.length;D<C;D++){const H=$[D];if(M(H,L,D,k)===!0){const Q=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let ht=0;ht<ot.length;ht++){const z=ot[ht],j=R(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Q+ct,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,ct),ct+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,U,P,k){const L=O.value,F=U+"_"+P;if(k[F]===void 0)return typeof L=="number"||typeof L=="boolean"?k[F]=L:k[F]=L.clone(),!0;{const $=k[F];if(typeof L=="number"||typeof L=="boolean"){if($!==L)return k[F]=L,!0}else if($.equals(L)===!1)return $.copy(L),!0}return!1}function T(O){const U=O.uniforms;let P=0;const k=16;for(let F=0,$=U.length;F<$;F++){const D=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,H=D.length;C<H;C++){const Q=D[C],ot=Array.isArray(Q.value)?Q.value:[Q.value];for(let ct=0,ht=ot.length;ct<ht;ct++){const z=ot[ct],j=R(z),q=P%k,gt=q%j.boundary,_t=q+gt;P+=gt,_t!==0&&k-_t<j.storage&&(P+=k-_t),Q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=j.storage}}}const L=P%k;return L>0&&(P+=k-L),O.__size=P,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),U}function b(O){const U=O.target;U.removeEventListener("dispose",b);const P=d.indexOf(U.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function S(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:S}}const uT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let oa=null;function fT(){return oa===null&&(oa=new Jg(uT,32,32,wh,Cr),oa.minFilter=Ln,oa.magFilter=Ln,oa.wrapS=ni,oa.wrapT=ni,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class dT{constructor(e={}){const{canvas:i=Vy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Set([Uh,Dh,Ch]),R=new Set([ha,Rr,No,Oo,Ah,Rh]),b=new Uint32Array(4),S=new Int32Array(4);let O=null,U=null;const P=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1;this._outputColorSpace=hi;let $=0,D=0,C=null,H=-1,Q=null;const ot=new en,ct=new en;let ht=null;const z=new ze(0);let j=0,q=i.width,gt=i.height,_t=1,N=null,rt=null;const St=new en(0,0,q,gt),Et=new en(0,0,q,gt);let Ot=!1;const at=new $g;let ft=!1,At=!1;const Gt=new dn,Wt=new ut,oe=new en,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Ae(){return C===null?_t:1}let I=r;function ue(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Eh}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",It,!1),I===null){const W="webgl2";if(I=ue(W,A),I===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let me,ge,Bt,Ie,Yt,ne,w,x,G,et,dt,nt,zt,Dt,jt,kt,yt,Mt,Zt,Xt,Pt,ie,V,Ut;function Ct(){me=new S3(I),me.init(),ie=new nT(I,me),ge=new f3(I,me,e,ie),Bt=new tT(I,me),ge.reversedDepthBuffer&&y&&Bt.buffers.depth.setReversed(!0),Ie=new M3(I),Yt=new GE,ne=new eT(I,me,Bt,Yt,ge,ie,Ie),w=new h3(L),x=new _3(L),G=new Rb(I),V=new c3(I,G),et=new y3(I,G,Ie,V),dt=new T3(I,et,G,Ie),Zt=new E3(I,ge,ne),kt=new d3(Yt),nt=new HE(L,w,x,me,ge,V,kt),zt=new lT(L,Yt),Dt=new XE,jt=new ZE(me),Mt=new l3(L,w,x,Bt,dt,M,m),yt=new JE(L,dt,ge),Ut=new cT(I,Ie,ge,Bt),Xt=new u3(I,me,Ie),Pt=new b3(I,me,Ie),Ie.programs=nt.programs,L.capabilities=ge,L.extensions=me,L.properties=Yt,L.renderLists=Dt,L.shadowMap=yt,L.state=Bt,L.info=Ie}Ct();const wt=new sT(L,I);this.xr=wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(q,gt,!1))},this.getSize=function(A){return A.set(q,gt)},this.setSize=function(A,W,st=!0){if(wt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,gt=W,i.width=Math.floor(A*_t),i.height=Math.floor(W*_t),st===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(q*_t,gt*_t).floor()},this.setDrawingBufferSize=function(A,W,st){q=A,gt=W,_t=st,i.width=Math.floor(A*st),i.height=Math.floor(W*st),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(St)},this.setViewport=function(A,W,st,tt){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,W,st,tt),Bt.viewport(ot.copy(St).multiplyScalar(_t).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,W,st,tt){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,W,st,tt),Bt.scissor(ct.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(A){Bt.setScissorTest(Ot=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,st=!0){let tt=0;if(A){let Z=!1;if(C!==null){const Rt=C.texture.format;Z=T.has(Rt)}if(Z){const Rt=C.texture.type,Lt=R.has(Rt),Ft=Mt.getClearColor(),Ht=Mt.getClearAlpha(),$t=Ft.r,ee=Ft.g,Kt=Ft.b;Lt?(b[0]=$t,b[1]=ee,b[2]=Kt,b[3]=Ht,I.clearBufferuiv(I.COLOR,0,b)):(S[0]=$t,S[1]=ee,S[2]=Kt,S[3]=Ht,I.clearBufferiv(I.COLOR,0,S))}else tt|=I.COLOR_BUFFER_BIT}W&&(tt|=I.DEPTH_BUFFER_BIT),st&&(tt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",It,!1),Mt.dispose(),Dt.dispose(),jt.dispose(),Yt.dispose(),w.dispose(),x.dispose(),dt.dispose(),V.dispose(),Ut.dispose(),nt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ds),wt.removeEventListener("sessionend",Us),mi.stop()};function bt(A){A.preventDefault(),Fx("WebGLRenderer: Context Lost."),F=!0}function vt(){Fx("WebGLRenderer: Context Restored."),F=!1;const A=Ie.autoReset,W=yt.enabled,st=yt.autoUpdate,tt=yt.needsUpdate,Z=yt.type;Ct(),Ie.autoReset=A,yt.enabled=W,yt.autoUpdate=st,yt.needsUpdate=tt,yt.type=Z}function It(A){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const W=A.target;W.removeEventListener("dispose",ae),He(W)}function He(A){Ce(A),Yt.remove(A)}function Ce(A){const W=Yt.get(A).programs;W!==void 0&&(W.forEach(function(st){nt.releaseProgram(st)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,st,tt,Z,Rt){W===null&&(W=Je);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=Gc(A,W,st,tt,Z);Bt.setMaterial(tt,Lt);let Ht=st.index,$t=1;if(tt.wireframe===!0){if(Ht=et.getWireframeAttribute(st),Ht===void 0)return;$t=2}const ee=st.drawRange,Kt=st.attributes.position;let de=ee.start*$t,Re=(ee.start+ee.count)*$t;Rt!==null&&(de=Math.max(de,Rt.start*$t),Re=Math.min(Re,(Rt.start+Rt.count)*$t)),Ht!==null?(de=Math.max(de,0),Re=Math.min(Re,Ht.count)):Kt!=null&&(de=Math.max(de,0),Re=Math.min(Re,Kt.count));const we=Re-de;if(we<0||we===1/0)return;V.setup(Z,tt,Ft,st,Ht);let be,Pe=Xt;if(Ht!==null&&(be=G.get(Ht),Pe=Pt,Pe.setIndex(be)),Z.isMesh)tt.wireframe===!0?(Bt.setLineWidth(tt.wireframeLinewidth*Ae()),Pe.setMode(I.LINES)):Pe.setMode(I.TRIANGLES);else if(Z.isLine){let Jt=tt.linewidth;Jt===void 0&&(Jt=1),Bt.setLineWidth(Jt*Ae()),Z.isLineSegments?Pe.setMode(I.LINES):Z.isLineLoop?Pe.setMode(I.LINE_LOOP):Pe.setMode(I.LINE_STRIP)}else Z.isPoints?Pe.setMode(I.POINTS):Z.isSprite&&Pe.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,We=Z._multiDrawCounts,Me=Z._multiDrawCount,vn=Ht?G.get(Ht).bytesPerElement:1,xa=Yt.get(tt).currentProgram.getUniforms();for(let Ye=0;Ye<Me;Ye++)xa.setValue(I,"_gl_DrawID",Ye),Pe.render(Jt[Ye]/vn,We[Ye])}else if(Z.isInstancedMesh)Pe.renderInstances(de,we,Z.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,We=Math.min(st.instanceCount,Jt);Pe.renderInstances(de,we,We)}else Pe.render(de,we)};function Cn(A,W,st){A.transparent===!0&&A.side===ca&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,hn(A,W,st),A.side=Ka,A.needsUpdate=!0,hn(A,W,st),A.side=ca):hn(A,W,st)}this.compile=function(A,W,st=null){st===null&&(st=A),U=jt.get(st),U.init(W),k.push(U),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),A!==st&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const tt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){const Ft=Rt[Lt];Cn(Ft,st,Z),tt.add(Ft)}else Cn(Rt,st,Z),tt.add(Rt)}),U=k.pop(),tt},this.compileAsync=function(A,W,st=null){const tt=this.compile(A,W,st);return new Promise(Z=>{function Rt(){if(tt.forEach(function(Lt){Yt.get(Lt).currentProgram.isReady()&&tt.delete(Lt)}),tt.size===0){Z(A);return}setTimeout(Rt,10)}me.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Wn=null;function Xo(A){Wn&&Wn(A)}function Ds(){mi.stop()}function Us(){mi.start()}const mi=new nv;mi.setAnimationLoop(Xo),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){Wn=A,wt.setAnimationLoop(A),A===null?mi.stop():mi.start()},wt.addEventListener("sessionstart",Ds),wt.addEventListener("sessionend",Us),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(W),W=wt.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,W,C),U=jt.get(A,k.length),U.init(W),k.push(U),Gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Gt,Ni,W.reversedDepth),At=this.localClippingEnabled,ft=kt.init(this.clippingPlanes,At),O=Dt.get(A,P.length),O.init(),P.push(O),wt.enabled===!0&&wt.isPresenting===!0){const Rt=L.xr.getDepthSensingMesh();Rt!==null&&Ja(Rt,W,-1/0,L.sortObjects)}Ja(A,W,0,L.sortObjects),O.finish(),L.sortObjects===!0&&O.sort(N,rt),ce=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ce&&Mt.addToRenderList(O,A),this.info.render.frame++,ft===!0&&kt.beginShadows();const st=U.state.shadowsArray;yt.render(st,A,W),ft===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=O.opaque,Z=O.transmissive;if(U.setupLights(),W.isArrayCamera){const Rt=W.cameras;if(Z.length>0)for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++){const Ht=Rt[Lt];Ns(tt,Z,A,Ht)}ce&&Mt.render(A);for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++){const Ht=Rt[Lt];Ls(O,A,Ht,Ht.viewport)}}else Z.length>0&&Ns(tt,Z,A,W),ce&&Mt.render(A),Ls(O,A,W);C!==null&&D===0&&(ne.updateMultisampleRenderTarget(C),ne.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(L,A,W),V.resetDefaultState(),H=-1,Q=null,k.pop(),k.length>0?(U=k[k.length-1],ft===!0&&kt.setGlobalState(L.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?O=P[P.length-1]:O=null};function Ja(A,W,st,tt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){tt&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);const Lt=dt.update(A),Ft=A.material;Ft.visible&&O.push(A,Lt,Ft,st,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const Lt=dt.update(A),Ft=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),oe.copy(Lt.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ft)){const Ht=Lt.groups;for(let $t=0,ee=Ht.length;$t<ee;$t++){const Kt=Ht[$t],de=Ft[Kt.materialIndex];de&&de.visible&&O.push(A,Lt,de,st,oe.z,Kt)}}else Ft.visible&&O.push(A,Lt,Ft,st,oe.z,null)}}const Rt=A.children;for(let Lt=0,Ft=Rt.length;Lt<Ft;Lt++)Ja(Rt[Lt],W,st,tt)}function Ls(A,W,st,tt){const{opaque:Z,transmissive:Rt,transparent:Lt}=A;U.setupLightsView(st),ft===!0&&kt.setGlobalState(L.clippingPlanes,st),tt&&Bt.viewport(ot.copy(tt)),Z.length>0&&qn(Z,W,st),Rt.length>0&&qn(Rt,W,st),Lt.length>0&&qn(Lt,W,st),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ns(A,W,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[tt.id]===void 0&&(U.state.transmissionRenderTarget[tt.id]=new Qa(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Cr:ha,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Rt=U.state.transmissionRenderTarget[tt.id],Lt=tt.viewport||ot;Rt.setSize(Lt.z*L.transmissionResolutionScale,Lt.w*L.transmissionResolutionScale);const Ft=L.getRenderTarget(),Ht=L.getActiveCubeFace(),$t=L.getActiveMipmapLevel();L.setRenderTarget(Rt),L.getClearColor(z),j=L.getClearAlpha(),j<1&&L.setClearColor(16777215,.5),L.clear(),ce&&Mt.render(st);const ee=L.toneMapping;L.toneMapping=Za;const Kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),U.setupLightsView(tt),ft===!0&&kt.setGlobalState(L.clippingPlanes,tt),qn(A,st,tt),ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt),me.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Re=0,we=W.length;Re<we;Re++){const be=W[Re],{object:Pe,geometry:Jt,material:We,group:Me}=be;if(We.side===ca&&Pe.layers.test(tt.layers)){const vn=We.side;We.side=Xn,We.needsUpdate=!0,sn(Pe,st,tt,Jt,We,Me),We.side=vn,We.needsUpdate=!0,de=!0}}de===!0&&(ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt))}L.setRenderTarget(Ft,Ht,$t),L.setClearColor(z,j),Kt!==void 0&&(tt.viewport=Kt),L.toneMapping=ee}function qn(A,W,st){const tt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Rt=A.length;Z<Rt;Z++){const Lt=A[Z],{object:Ft,geometry:Ht,group:$t}=Lt;let ee=Lt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),Ft.layers.test(st.layers)&&sn(Ft,W,st,Ht,ee,$t)}}function sn(A,W,st,tt,Z,Rt){A.onBeforeRender(L,W,st,tt,Z,Rt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(L,W,st,tt,A,Rt),Z.transparent===!0&&Z.side===ca&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,L.renderBufferDirect(st,W,tt,Z,A,Rt),Z.side=Ka,Z.needsUpdate=!0,L.renderBufferDirect(st,W,tt,Z,A,Rt),Z.side=ca):L.renderBufferDirect(st,W,tt,Z,A,Rt),A.onAfterRender(L,W,st,tt,Z,Rt)}function hn(A,W,st){W.isScene!==!0&&(W=Je);const tt=Yt.get(A),Z=U.state.lights,Rt=U.state.shadowsArray,Lt=Z.state.version,Ft=nt.getParameters(A,Z.state,Rt,W,st),Ht=nt.getProgramCacheKey(Ft);let $t=tt.programs;tt.environment=A.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(A.isMeshStandardMaterial?x:w).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ae),$t=new Map,tt.programs=$t);let ee=$t.get(Ht);if(ee!==void 0){if(tt.currentProgram===ee&&tt.lightsStateVersion===Lt)return wr(A,Ft),ee}else Ft.uniforms=nt.getUniforms(A),A.onBeforeCompile(Ft,L),ee=nt.acquireProgram(Ft,Ht),$t.set(Ht,ee),tt.uniforms=Ft.uniforms;const Kt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=kt.uniform),wr(A,Ft),tt.needsLights=ko(A),tt.lightsStateVersion=Lt,tt.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ee,tt.uniformsList=null,ee}function Pi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Dc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function wr(A,W){const st=Yt.get(A);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function Gc(A,W,st,tt,Z){W.isScene!==!0&&(W=Je),ne.resetTextureUnits();const Rt=W.fog,Lt=tt.isMeshStandardMaterial?W.environment:null,Ft=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:As,Ht=(tt.isMeshStandardMaterial?x:w).get(tt.envMap||Lt),$t=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Kt=!!st.morphAttributes.position,de=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let we=Za;tt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=L.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Pe=be!==void 0?be.length:0,Jt=Yt.get(tt),We=U.state.lights;if(ft===!0&&(At===!0||A!==Q)){const Sn=A===Q&&tt.id===H;kt.setState(tt,A,Sn)}let Me=!1;tt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==Ft||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Ht||tt.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==kt.numPlanes||Jt.numIntersection!==kt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Kt||Jt.morphNormals!==de||Jt.morphColors!==Re||Jt.toneMapping!==we||Jt.morphTargetsCount!==Pe)&&(Me=!0):(Me=!0,Jt.__version=tt.version);let vn=Jt.currentProgram;Me===!0&&(vn=hn(tt,W,Z));let xa=!1,Ye=!1,Fi=!1;const je=vn.getUniforms(),_n=Jt.uniforms;if(Bt.useProgram(vn.program)&&(xa=!0,Ye=!0,Fi=!0),tt.id!==H&&(H=tt.id,Ye=!0),xa||Q!==A){Bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(I,"projectionMatrix",A.projectionMatrix),je.setValue(I,"viewMatrix",A.matrixWorldInverse);const Mn=je.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Wt.setFromMatrixPosition(A.matrixWorld)),ge.logarithmicDepthBuffer&&je.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&je.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Ye=!0,Fi=!0)}if(Z.isSkinnedMesh){je.setOptional(I,Z,"bindMatrix"),je.setOptional(I,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),je.setValue(I,"boneTexture",Sn.boneTexture,ne))}Z.isBatchedMesh&&(je.setOptional(I,Z,"batchingTexture"),je.setValue(I,"batchingTexture",Z._matricesTexture,ne),je.setOptional(I,Z,"batchingIdTexture"),je.setValue(I,"batchingIdTexture",Z._indirectTexture,ne),je.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&je.setValue(I,"batchingColorTexture",Z._colorsTexture,ne));const pn=st.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Zt.update(Z,st,vn),(Ye||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,je.setValue(I,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(_n.envMap.value=Ht,_n.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=fT()),Ye&&(je.setValue(I,"toneMappingExposure",L.toneMappingExposure),Jt.needsLights&&Vc(_n,Fi),Rt&&tt.fog===!0&&zt.refreshFogUniforms(_n,Rt),zt.refreshMaterialUniforms(_n,tt,_t,gt,U.state.transmissionRenderTarget[A.id]),Dc.upload(I,Pi(Jt),_n,ne)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Dc.upload(I,Pi(Jt),_n,ne),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&je.setValue(I,"center",Z.center),je.setValue(I,"modelViewMatrix",Z.modelViewMatrix),je.setValue(I,"normalMatrix",Z.normalMatrix),je.setValue(I,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Sn=tt.uniformsGroups;for(let Mn=0,Ai=Sn.length;Mn<Ai;Mn++){const Bi=Sn[Mn];Ut.update(Bi,vn),Ut.bind(Bi,vn)}}return vn}function Vc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ko(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,W,st){const tt=Yt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=W,Yt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const st=Yt.get(A);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const $a=I.createFramebuffer();this.setRenderTarget=function(A,W=0,st=0){C=A,$=W,D=st;let tt=!0,Z=null,Rt=!1,Lt=!1;if(A){const Ht=Yt.get(A);if(Ht.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(I.FRAMEBUFFER,null),tt=!1;else if(Ht.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(Ht.__hasExternalTextures)ne.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Kt=A.depthTexture;if(Ht.__boundDepthTexture!==Kt){if(Kt!==null&&Yt.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ee=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?Z=ee[W][st]:Z=ee[W],Rt=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?Z=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[st]:Z=ee,ot.copy(A.viewport),ct.copy(A.scissor),ht=A.scissorTest}else ot.copy(St).multiplyScalar(_t).floor(),ct.copy(Et).multiplyScalar(_t).floor(),ht=Ot;if(st!==0&&(Z=$a),Bt.bindFramebuffer(I.FRAMEBUFFER,Z)&&tt&&Bt.drawBuffers(A,Z),Bt.viewport(ot),Bt.scissor(ct),Bt.setScissorTest(ht),Rt){const Ht=Yt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ht.__webglTexture,st)}else if(Lt){const Ht=W;for(let $t=0;$t<A.textures.length;$t++){const ee=Yt.get(A.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ee.__webglTexture,st,Ht)}}else if(A!==null&&st!==0){const Ht=Yt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,st)}H=-1},this.readRenderTargetPixels=function(A,W,st,tt,Z,Rt,Lt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){Bt.bindFramebuffer(I.FRAMEBUFFER,Ht);try{const $t=A.textures[Ft],ee=$t.format,Kt=$t.type;if(!ge.textureFormatReadable(ee)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Kt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-tt&&st>=0&&st<=A.height-Z&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(W,st,tt,Z,ie.convert(ee),ie.convert(Kt),Rt))}finally{const $t=C!==null?Yt.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,W,st,tt,Z,Rt,Lt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht)if(W>=0&&W<=A.width-tt&&st>=0&&st<=A.height-Z){Bt.bindFramebuffer(I.FRAMEBUFFER,Ht);const $t=A.textures[Ft],ee=$t.format,Kt=$t.type;if(!ge.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.bufferData(I.PIXEL_PACK_BUFFER,Rt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(W,st,tt,Z,ie.convert(ee),ie.convert(Kt),0);const Re=C!==null?Yt.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(I.FRAMEBUFFER,Re);const we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xy(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Rt),I.deleteBuffer(de),I.deleteSync(we),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,st=0){const tt=Math.pow(2,-st),Z=Math.floor(A.image.width*tt),Rt=Math.floor(A.image.height*tt),Lt=W!==null?W.x:0,Ft=W!==null?W.y:0;ne.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Lt,Ft,Z,Rt),Bt.unbindTexture()};const Os=I.createFramebuffer(),ma=I.createFramebuffer();this.copyTextureToTexture=function(A,W,st=null,tt=null,Z=0,Rt=null){Rt===null&&(Z!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Z,Z=0):Rt=0);let Lt,Ft,Ht,$t,ee,Kt,de,Re,we;const be=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(st!==null)Lt=st.max.x-st.min.x,Ft=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ee=st.min.y,Kt=st.isBox3?st.min.z:0;else{const pn=Math.pow(2,-Z);Lt=Math.floor(be.width*pn),Ft=Math.floor(be.height*pn),A.isDataArrayTexture?Ht=be.depth:A.isData3DTexture?Ht=Math.floor(be.depth*pn):Ht=1,$t=0,ee=0,Kt=0}tt!==null?(de=tt.x,Re=tt.y,we=tt.z):(de=0,Re=0,we=0);const Pe=ie.convert(W.format),Jt=ie.convert(W.type);let We;W.isData3DTexture?(ne.setTexture3D(W,0),We=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ne.setTexture2DArray(W,0),We=I.TEXTURE_2D_ARRAY):(ne.setTexture2D(W,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xa=I.getParameter(I.UNPACK_SKIP_PIXELS),Ye=I.getParameter(I.UNPACK_SKIP_ROWS),Fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);const je=A.isDataArrayTexture||A.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const pn=Yt.get(A),Sn=Yt.get(W),Mn=Yt.get(pn.__renderTarget),Ai=Yt.get(Sn.__renderTarget);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Bi=0;Bi<Ht;Bi++)je&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,Z,Kt+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,Rt,we+Bi)),I.blitFramebuffer($t,ee,Lt,Ft,de,Re,Lt,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Yt.has(A)){const pn=Yt.get(A),Sn=Yt.get(W);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,Os),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ma);for(let Mn=0;Mn<Ht;Mn++)je?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,Z,Kt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,Z),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,Rt,we+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,Rt),Z!==0?I.blitFramebuffer($t,ee,Lt,Ft,de,Re,Lt,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(We,Rt,de,Re,we+Mn,$t,ee,Lt,Ft):I.copyTexSubImage2D(We,Rt,de,Re,$t,ee,Lt,Ft);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(We,Rt,de,Re,we,Lt,Ft,Ht,Pe,Jt,be.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(We,Rt,de,Re,we,Lt,Ft,Ht,Pe,be.data):I.texSubImage3D(We,Rt,de,Re,we,Lt,Ft,Ht,Pe,Jt,be):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Rt,de,Re,Lt,Ft,Pe,Jt,be.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Rt,de,Re,be.width,be.height,Pe,be.data):I.texSubImage2D(I.TEXTURE_2D,Rt,de,Re,Lt,Ft,Pe,Jt,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xa),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),Rt===0&&W.generateMipmaps&&I.generateMipmap(We),Bt.unbindTexture()},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),Bt.unbindTexture()},this.resetState=function(){$=0,D=0,C=null,Bt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function hT({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:d=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:y="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:R=2.2,takeoverDuration:b=.25,autoResumeDelay:S=1e3,autoRampDuration:O=.6}){const U=Oe.useRef(null),P=Oe.useRef(null),k=Oe.useRef(null),L=Oe.useRef(null),F=Oe.useRef(null),$=Oe.useRef(!0),D=Oe.useRef(null);return Oe.useEffect(()=>{if(!U.current)return;function C(w){let x;Array.isArray(w)&&w.length>0?w.length===1?x=[w[0],w[0]]:x=w:x=["#ffffff","#ffffff"];const G=x.length,et=new Uint8Array(G*4);for(let nt=0;nt<G;nt++){const zt=new ze(x[nt]);et[nt*4+0]=Math.round(zt.r*255),et[nt*4+1]=Math.round(zt.g*255),et[nt*4+2]=Math.round(zt.b*255),et[nt*4+3]=255}const dt=new Jg(et,G,1,pi);return dt.magFilter=Ln,dt.minFilter=Ln,dt.wrapS=ni,dt.wrapT=ni,dt.generateMipmaps=!1,dt.needsUpdate=!0,dt}const H=C(v),Q=new en(0,0,0,0);class ot{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new dT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new ze(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Tb,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ct=new ot;class ht{constructor(){this.mouseMoved=!1,this.coords=new le,this.coords_old=new le,this.diff=new le,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new le,this.takeoverTo=new le,this.onInteract=null}init(x){this.container=x,x.addEventListener("mousemove",this._onMouseMove,!1),x.addEventListener("touchstart",this._onTouchStart,!1),x.addEventListener("touchmove",this._onTouchMove,!1),x.addEventListener("mouseenter",this._onMouseEnter,!1),x.addEventListener("mouseleave",this._onMouseLeave,!1),x.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(x,G){if(!this.container)return;this.timer&&clearTimeout(this.timer);const et=this.container.getBoundingClientRect(),dt=(x-et.left)/et.width,nt=(G-et.top)/et.height;this.coords.set(dt*2-1,-(nt*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,G){this.coords.set(x,G),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const G=this.container.getBoundingClientRect(),et=(x.clientX-G.left)/G.width,dt=(x.clientY-G.top)/G.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(et*2-1,-(dt*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}onDocumentTouchStart(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY),this.hasUserControl=!0}}onDocumentTouchMove(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const G=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,G)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const z=new ht;class j{constructor(x,G,et){this.mouse=x,this.manager=G,this.enabled=et.enabled,this.speed=et.speed,this.resumeDelay=et.resumeDelay||3e3,this.rampDurationMs=(et.rampDuration||0)*1e3,this.active=!1,this.current=new le(0,0),this.target=new le,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new le,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let et=(x-this.lastTime)/1e3;this.lastTime=x,et>.2&&(et=.016);const dt=this._tmpDir.subVectors(this.target,this.current),nt=dt.length();if(nt<.01){this.pickNewTarget();return}dt.normalize();let zt=1;if(this.rampDurationMs>0){const kt=Math.min(1,(x-this.activationTime)/this.rampDurationMs);zt=kt*kt*(3-2*kt)}const Dt=this.speed*et*zt,jt=Math.min(Dt,nt);this.current.addScaledVector(dt,jt),this.mouse.setNormalized(this.current.x,this.current.y)}}const q=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,gt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,_t=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,rt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,St=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Et=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ot=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,at=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ft=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class At{constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new tg,this.camera=new Oc,this.uniforms&&(this.material=new Mc(this.props.material),this.geometry=new Ar(2,2),this.plane=new Ti(this.geometry,this.material),this.scene.add(this.plane))}update(){ct.renderer.setRenderTarget(this.props.output||null),ct.renderer.render(this.scene,this.camera),ct.renderer.setRenderTarget(null)}}class Gt extends At{constructor(x){super({material:{vertexShader:q,fragmentShader:N,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new zi,G=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new Ei(G,3));const et=new Mc({vertexShader:gt,fragmentShader:N,uniforms:this.uniforms});this.line=new Sb(x,et),this.scene.add(this.line)}update({dt:x,isBounce:G,BFECC:et}){this.uniforms.dt.value=x,this.line.visible=G,this.uniforms.isBFECC.value=et,super.update()}}class Wt extends At{constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const G=new Ar(1,1),et=new Mc({vertexShader:_t,fragmentShader:Et,blending:Nd,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new le(0,0)},center:{value:new le(0,0)},scale:{value:new le(x.cursor_size,x.cursor_size)}}});this.mouse=new Ti(G,et),this.scene.add(this.mouse)}update(x){const G=z.diff.x/2*x.mouse_force,et=z.diff.y/2*x.mouse_force,dt=x.cursor_size*x.cellScale.x,nt=x.cursor_size*x.cellScale.y,zt=Math.min(Math.max(z.coords.x,-1+dt+x.cellScale.x*2),1-dt-x.cellScale.x*2),Dt=Math.min(Math.max(z.coords.y,-1+nt+x.cellScale.y*2),1-nt-x.cellScale.y*2),jt=this.mouse.material.uniforms;jt.force.value.set(G,et),jt.center.value.set(zt,Dt),jt.scale.value.set(x.cursor_size,x.cursor_size),super.update()}}class oe extends At{constructor(x){super({material:{vertexShader:q,fragmentShader:ft,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({viscous:x,iterations:G,dt:et}){let dt,nt;this.uniforms.v.value=x;for(let zt=0;zt<G;zt++)zt%2===0?(dt=this.props.output0,nt=this.props.output1):(dt=this.props.output1,nt=this.props.output0),this.uniforms.velocity_new.value=dt.texture,this.props.output=nt,this.uniforms.dt.value=et,super.update();return nt}}class Je extends At{constructor(x){super({material:{vertexShader:q,fragmentShader:St,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x}){this.uniforms.velocity.value=x.texture,super.update()}}class ce extends At{constructor(x){super({material:{vertexShader:q,fragmentShader:Ot,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({iterations:x}){let G,et;for(let dt=0;dt<x;dt++)dt%2===0?(G=this.props.output0,et=this.props.output1):(G=this.props.output1,et=this.props.output0),this.uniforms.pressure.value=G.texture,this.props.output=et,super.update();return et}}class Ae extends At{constructor(x){super({material:{vertexShader:q,fragmentShader:at,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x,pressure:G}){this.uniforms.velocity.value=x.texture,this.uniforms.pressure.value=G.texture,super.update()}}class I{constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new le,this.cellScale=new le,this.boundarySpace=new le,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Cr:Li}createAllFBO(){const G={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Ln,magFilter:Ln,wrapS:ni,wrapT:ni};for(let et in this.fbos)this.fbos[et]=new Qa(this.fboSize.x,this.fboSize.y,G)}createShaderPass(){this.advection=new Gt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Wt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new oe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ce({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ae({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*ct.width)),G=Math.max(1,Math.round(this.options.resolution*ct.height)),et=1/x,dt=1/G;this.cellScale.set(et,dt),this.fboSize.set(x,G)}resize(){this.calcSize();for(let x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const G=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:G})}}class ue{constructor(){this.init()}init(){this.simulation=new I,this.scene=new tg,this.camera=new Oc,this.output=new Ti(new Ar(2,2),new Mc({vertexShader:q,fragmentShader:rt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new le},palette:{value:H},bgColor:{value:Q}}})),this.scene.add(this.output)}addScene(x){this.scene.add(x)}resize(){this.simulation.resize()}render(){ct.renderer.setRenderTarget(null),ct.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class me{constructor(x){this.props=x,ct.init(x.$wrapper),z.init(x.$wrapper),z.autoIntensity=x.autoIntensity,z.takeoverDuration=x.takeoverDuration,this.lastUserInteraction=performance.now(),z.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new j(z,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():$.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ct.renderer.domElement),this.output=new ue}resize(){ct.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),z.update(),ct.update(),this.output.update()}loop(){this.running&&(this.render(),L.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,L.current&&(cancelAnimationFrame(L.current),L.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),z.dispose(),ct.renderer){const x=ct.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),ct.renderer.dispose()}}catch{}}}const ge=U.current;ge.style.position=ge.style.position||"relative",ge.style.overflow=ge.style.overflow||"hidden";const Bt=new me({$wrapper:ge,autoDemo:M,autoSpeed:T,autoIntensity:R,takeoverDuration:b,autoResumeDelay:S,autoRampDuration:O});P.current=Bt,(()=>{if(!P.current)return;const w=P.current.output?.simulation;if(!w)return;const x=w.options.resolution;Object.assign(w.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:d,BFECC:h,resolution:m,isBounce:p}),m!==x&&w.resize()})(),Bt.start();const Yt=new IntersectionObserver(w=>{const x=w[0],G=x.isIntersecting&&x.intersectionRatio>0;$.current=G,P.current&&(G&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});Yt.observe(ge),F.current=Yt;const ne=new ResizeObserver(()=>{P.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return ne.observe(ge),k.current=ne,()=>{if(L.current&&cancelAnimationFrame(L.current),k.current)try{k.current.disconnect()}catch{}if(F.current)try{F.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[h,e,d,p,i,u,l,o,m,r,v,M,T,R,b,S,O]),Oe.useEffect(()=>{const C=P.current;if(!C)return;const H=C.output?.simulation;if(!H)return;const Q=H.options.resolution;Object.assign(H.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:d,BFECC:h,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=T,C.autoDriver.resumeDelay=S,C.autoDriver.rampDurationMs=O*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=R,C.autoDriver.mouse.takeoverDuration=b)),m!==Q&&H.resize()},[o,e,i,r,l,u,d,h,m,p,M,T,R,b,S,O]),Tt.jsx("div",{ref:U,className:`liquid-ether-container ${y||""}`,style:_})}function pT(){return Tt.jsxs("div",{children:[Tt.jsx("div",{style:{position:"fixed",inset:0},children:Tt.jsx(hT,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),Tt.jsx(ES,{}),Tt.jsxs("div",{className:"main-content",children:[Tt.jsx(QS,{}),Tt.jsx(MS,{}),Tt.jsx(KS,{}),Tt.jsx($S,{children:Tt.jsx("div",{className:"skills-and-projects",children:Tt.jsx(RS,{})})}),Tt.jsx(AS,{})]}),Tt.jsx(JS,{})]})}yS.createRoot(document.getElementById("root")).render(Tt.jsx(Oe.StrictMode,{children:Tt.jsx(pT,{})}));
