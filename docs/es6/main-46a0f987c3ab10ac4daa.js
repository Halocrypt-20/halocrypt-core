(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{369:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(466);const r="assign"in o.do?o.do.assign:function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const t in n)o.Q$.call(n,t)&&(e[t]=n[t])}return e}},659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(466);const r="keys"in o.do?o.do.keys:function(e){const t=[];for(const n in e)o.Q$.call(e,n)&&t.push(n);return t}},466:(e,t,n)=>{"use strict";function o(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0}),___this.globalThis=___this;const e=___this;return delete Object.prototype.___this,e}n.d(t,{zc:()=>o,e$:()=>s,TW:()=>l,do:()=>c,Q$:()=>u});const r=o(),i=r.Symbol||{},s=(e,t)=>e in t,a={},l=e=>e&&!!e[i.iterator],c=a.constructor,u=a.hasOwnProperty;"undefined"!=typeof window&&(window.navigator&&!!window.navigator.userAgent||window.document&&document.createElement),"undefined"!=typeof self&&!!self.postMessage&&r.importScripts,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout},386:(e,t,n)=>{"use strict";function o(e,t,n){if(!(null==e||e instanceof Text||t===n)){null==e._listeners&&(e._listeners={}),null==t&&(t=m),null==n&&(n=m);for(const o in n)null==t[o]&&(delete e._listeners[o],e.removeEventListener(o,r));for(const o in t){const i=t[o],s=n[o];null!=i&&s!==i&&(null==s&&e.addEventListener(o,r),e._listeners[o]=i)}}}function r(e){return this._listeners[e.type].call(this,e)}n.d(t,{ZP:()=>fe,A:()=>he,gr:()=>te,wA:()=>R,HY:()=>v,y$:()=>me,F0:()=>ce,Qn:()=>ae,az:()=>S,nx:()=>ue,h:()=>S,uX:()=>le,sY:()=>X});const i={key:1,ref:1,children:1},s={value:1,checked:1};function a(e,t,n){n=n||"";const o=e.style;if("string"==typeof t)return void(o.cssText=t);const r="string"==typeof n;if(r)o.cssText="";else for(const e in n)null==t[e]&&(o[e]="");for(const e in t){const i=t[e];(r||i!==n[e])&&(o[e]=i)}}function l(e,t,n){const o=Array.isArray;o(t)&&(t=t.join(" ").trim()),o(n)&&(n=n.join(" ").trim()),t!==n&&p(e,"className",t)}function c(e,t,n){d(e,t,n,"_renders"),d(e,t,n,"_renderedBy")}const u={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"};function d(e,t,n,o){let r=e;const i=u[t];for(;r;)i&&(r[i]=null),r[t]=n,r=r[o]}function p(e,t,n){return t in e?e[t]=null==n?"":n:null==n?e.removeAttribute(t):e.setAttribute(t,n)}function h(e,t){null!=t&&d(e,"_parentDom",t,"_renderedBy")}const m={},f=[];function g(e,t,n){return function e(t,n,o,r){if(!t)return n;for(let i=0;i<t.length;i++){const s=t[i];Array.isArray(s)?e(s,n,o,r):r&&null==s||n.push(o?o(s):s)}return n}(e,[],t,n)}function y(e){return"o"===e[0]&&"n"===e[1]}const _=m.hasOwnProperty,b="assign"in Object?m.constructor.assign:function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const t in n)_.call(n,t)&&(e[t]=n[t])}return e},w=Object.freeze({});function S(e,t,...n){if(null==e||"boolean"==typeof e)return null;null==t&&(t=m);const o=t.ref,r=t.key,i="string"==typeof e?{}:null;let s;return t=function(e,t){const n={},o=null!=t;for(const r in e)null==M[r]&&(n[r]=e[r],o&&y(r)&&(t[r.substr(2).toLowerCase()]=e[r]));return n}(t,i),n.length&&null==t.children&&(s=g(n)),null!=t.children&&(s=g([t.children])),t.children=s,D(e,t,i,r,o)}function D(e,t,n,o,r){const i={type:"string"==typeof e?e.toLowerCase():e,props:t,events:n,key:o,ref:r,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return i.__self=i,i}const v=function(){},M={key:1,ref:1};function N(e){return null==e||"boolean"==typeof e?S(w):"string"==typeof e||"number"==typeof e?D(null,String(e)):Array.isArray(e)?S(v,null,e):null!=e._dom?D(e.type,e.props,e.events,e.key,null):e}const x="undefined"!=typeof Promise,A="undefined"!=typeof requestAnimationFrame,C=setTimeout,L=x?Promise.prototype.then.bind(Promise.resolve()):C,I={deferImplementation:L,scheduleRender:A?function(e){return requestAnimationFrame(e)}:L,eagerlyHydrate:!0,beforeHookRender:null},z=[],P=[];function k(){T(z)}function j(){T(P)}function T(e){let t;for(;t=e.pop();)V(t)}function E(e){const t=e.name;return"componentDidMount"===t?z.push(e):"componentDidUpdate"===t?P.push(e):void V(e)}function V(e){const t=e.args,n=e.bind,o=e.name;n._lastLifeCycleMethod=o;const r=n[o],i=!!n.componentDidCatch;if(x)Promise.resolve().then(()=>r&&r.apply(n,t)).catch(e=>{if(i)return n.componentDidCatch(e);throw e});else try{r.apply(n,t)}catch(e){if(i)return n.componentDidCatch(e);throw e}}function U(e,t){if(null==e||e===m)return;U(e._renders,t);const n=e._component;let r;t||null==n||(n.setState=v,n._VNode=null,E({name:"componentWillUnmount",bind:n}));const i=e._children;if(i)for(;i.length;)r=i.pop(),U(r,t);!function(e,t){if(!t&&"function"!=typeof e.type){const t=e._dom;null!=t&&(!(e.type===w)&&o(t,null,e.events),function(e){Q(O,e)}(t),function(e){if(null==e)return;const t=e.parentNode;t&&t.removeChild(e)}(t))}!function(e,t){if(null!=e){if(!t){var n=e._nextSibDomVNode;if(null!=n){const e=n._dom,t=e&&e.previousSibling;c(n,"_prevSibDomVNode",t&&t._VNode)}const t=e._prevSibDomVNode;if(null!=t){const e=t._dom,n=e&&e.nextSibling;c(t,"_nextSibDomVNode",n&&n._VNode)}}Q(W,e)}}(e,t)}(e,t)}const O={_VNode:1,_listeners:1,onclick:1},W={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1};function Q(e,t){if(null!=t)for(const n in e)t[n]=null}function H(e,t,n,o){return function(e,t,n,o,r){const i=e.type===v,s=t.length,a=Math.max(s,n.length);for(let l=0;l<a;l++){const a=t[l]||(l<s?S(w):null),c=n[l]||m;if(null==c._nextSibDomVNode){const t=i?e._nextSibDomVNode:null;null!=t&&d(a,"_nextSibDomVNode",t,"_renderedBy")}K(a,c,o,null,r),i&&null!=a&&Z(e,a,l)}if(i&&s){const t=e._children;d(e,"_nextSibDomVNode",t[s-1]._nextSibDomVNode,"_renderedBy"),d(e,"_prevSibDomVNode",t[0]._prevSibDomVNode,"_renderedBy")}}(e,e._children||f,(t||m)._children||f,n,o)}function Z(e,t,n){const o=t&&(t._dom||t._FragmentDomNodeChildren);let r=e._FragmentDomNodeChildren;null==r&&(r=[],d(e,"_FragmentDomNodeChildren",r,"_renderedBy")),r[n]=o}const B=[];class R{constructor(e){this.state={},this.props=e}render(e,t){return null}setState(e){if(this._oldState=b({},this.state),this._nextState=b({},this.state),"function"==typeof e){const t=e(this._nextState,this.props);if(null==t)return;b(this._nextState,t)}else b(this._nextState,e);var t;this.state=this._nextState,(t=this)._dirty=!0,1===B.push(t)&&I.scheduleRender(q)}forceUpdate(e){const t=!1!==e;this.base=K(this._VNode,b({},this._VNode),this._VNode._parentDom,t,{depth:this._depth}),"function"==typeof e&&e(),k(),j()}}function q(){let e;for(B.sort((e,t)=>e._depth-t._depth);e=B.pop();)e._dirty&&(e._dirty=!1,e.forceUpdate(!1))}const F=e=>"function"==typeof e&&e!==v,$={_nextSibDomVNode:1,_prevSibDomVNode:1};function Y(e,t){if(t._renders=e,e){e._renderedBy=t;for(const n in $)e[n]=t[n]}}function G(e){return this.constructor(e)}function J(e,t,n){const o=b({},e.state||m,e._nextState||m),r=function(e,t,n){const o=e.getDerivedStateFromProps;return null!=o?b({},o(t,n)):null}(t,n.props,o);r&&b(o,r),e._nextState=o}function K(e,t,n,r,u){if("boolean"==typeof e&&(e=null),null==t&&(t=m),null==e)return void U(t);if(e===m)return null;if(!((d=e)&&d.__self===d||(console.warn("component not of expected type =>",d),0)))return null;var d;if(t===e)return e._dom;!function(e,t){if(t===m||null==e||null==t)return;const n=t._prevSibDomVNode;null==e._prevSibDomVNode&&null!=n&&(c(e,"_prevSibDomVNode",n),c(n,"_nextSibDomVNode",e));const o=t._nextSibDomVNode;null==e._nextSibDomVNode&&null!=o&&(c(e,"_nextSibDomVNode",o),c(o,"_prevSibDomVNode",e))}(e,t);let f=t.type,_=e.type,b=F(_);_===f&&b&&(e._component=t._component),_!==f&&(U(t),t=m);const S=e;return"string"!=typeof e.props&&_!==w&&(e=function(e,t,n,o){let r;return null!=e&&F(r=e.type)?(t=t||m,function(e){const t=e.prototype;return!(!t||!t.render)}(r)?function(e,t,n,o){let r;const i=e.type;let s=e._component;if(null!=s){if(null!=s.shouldComponentUpdate&&!n&&!1===s.shouldComponentUpdate(e.props,s._nextState||s.state))return m;J(s,i,e),E({bind:s,name:"componentWillUpdate",args:[e.props,s._nextState]}),r="componentDidUpdate"}else r="componentDidMount",s=new i(e.props),e._component=s,J(s,i,e),E({bind:s,name:"componentWillMount"}),s._depth=++o.depth;s._VNode=e;const a=s._oldState,l=t.props;s.state=s._nextState,s._oldState=null,s._nextState=null,s.props=e.props;const c=N(s.render(s.props,s.state));return E({bind:s,name:r,args:"componentDidUpdate"===r?[l,a]:[]}),Y(c,e),c}(e,t,n,o):function(e,t){let n;const o=e.type;let r;return e._component?r=e._component:(r=new R(e.props),e._component=r,r.render=G,r.constructor=o,r.props=e.props),n=N(r.render(e.props)),r._depth=++t.depth,Y(n,e),n}(e,o)):e}(e,t,r,u)),F(t.type)&&(t=t._renders),e!==S?K(e,t,n,r,u):(e._children=function(e){const t=e.props.children;return null==t&&e.type!==v?[]:g([t],N)}(e),f=t.type,_=e.type,h(e,n),_===v?H(e,t,n,u):(f!==_&&(t=null),function(e,t,n){const r=(t=t||m)===m;let u;const d=t._dom;u=e.type!==t.type||null==d?function(e){if("string"==typeof e.props)return document.createTextNode("");{const t=e.type;return t===w?document.createComment(""):document.createElement(t)}}(e):d,u._VNode=e,function(e,t,n){if(t.type===w)return;if(n=n||m,"string"==typeof t.props)return function(e,t,n){return t===n||(e.nodeValue=t)}(e,t.props,n.props);const r=n.props||m,c=t.props;null!=r&&function(e,t,n){for(const o in t)y(o)||o in i||null==n[o]&&p(e,o,null)}(e,r,c),function(e,t,n){for(let o in n){if(y(o)||o in i)continue;let r=n[o],c=s[o]?e[o]:t[o];r!==c&&(o="class"===o?"className":o,"className"!==o?"style"!==o?p(e,o,r):a(e,r,c):l(e,r,c))}}(e,r,c),o(e,t.events,n.events)}(u,e,r?null:t),c(e,"_dom",u),function e(t,n){t&&(null!=t._component?t._component.base=n:e(t._renderedBy,n))}(e,u),r&&function(e,t,n){const o=function(e){if(!e)return;const t=e._dom;if(t)return t;const n=e._FragmentDomNodeChildren;return n?function e(t){for(let n=0;n<t.length;n++){const o=t[n];if(Array.isArray(o)){const t=e(o);if(t)return t}else if(o)return o}}(n):void 0}(e._nextSibDomVNode),r=e._dom;r&&(function(e,t,n){let o,r=!0;t&&t!==e&&(r=!1,o=t),!r&&o?n.insertBefore(e,o):n.appendChild(e)}(r,o,t),function(e){const t=e._dom;null==e._parentDom&&h(e,t.parentNode);let n=e._nextSibDomVNode;if(null==n){const e=t.nextSibling;null!=e&&(n=e._VNode)}c(n,"_prevSibDomVNode",e),c(e,"_nextSibDomVNode",n);let o=e._prevSibDomVNode;if(null==o){const e=t.previousSibling;null!=e&&(o=e._VNode)}c(o,"_nextSibDomVNode",e),c(e,"_prevSibDomVNode",o)}(e))}(e,n)}(e,t,n),H(e,t,e._dom,u)),e._dom)}function X(e,t){const n=S(v,null,e);t.hasChildNodes()&&function(e){let t;for(;t=e.firstChild;)e.removeChild(t)}(t),K(n,null,t,!1,{depth:0}),k(),j()}function ee(e,t){return null==e||e.__self?e:S(e,t)}class te extends R{componentDidMount(){this._init()}componentDidUpdate(e){(e&&(e.promise||e.componentPromise))!==(this.props.promise||this.props.componentPromise)&&this._init()}_init(){this.setState({inProgress:!0}),(this.props.promise||this.props.componentPromise)().then(e=>{e=ee(e),this.setState({render:e,inProgress:!1})}).catch(e=>this.setState({error:!0,inProgress:!1}))}render(e,t){return t.inProgress?ee(e.fallback||e.fallbackComponent)||"Loading":t.error?ee(e.errorComponent)||"An Error Occured":t.render}}function ne(e,t,n){const o=Object.getOwnPropertyDescriptor(e,n).get.bind(e);Object.defineProperty(e,t,{get:()=>(oe(t," has been deprecated."+(n?" Use '"+n+"' instead":"")),o())})}function oe(){const e=["[DeprecationWarning]"].concat(f.slice.call(arguments));console.warn.apply(console,e)}const re=/\/+$/;function ie(e){return 1===e.length?e:e.replace(re,"")}const se=[],ae={subscribe(e){se.includes(e)||se.push(e)},unsubscribe(e){for(let t=0;t<se.length;t++)if(se[t]===e)return se.splice(t,1)},emit(e,t){for(const n of se)n(e,t)},unsubscribeAll(){se.length=0}};function le(e){window.history.replaceState(null,"",e),ae.emit(e,{type:"redirect",native:!1})}class ce extends R{constructor(e){super(e),this.state={},this._routeChangeHandler=this._routeChangeHandler.bind(this)}static __emitter(){ae.emit(ce.path+ce.qs,{type:"popstate",native:!0})}static get path(){return location.pathname}static get qs(){return location.search}static get searchParams(){return new URLSearchParams(ce.qs)}static _getParams(e,t){const n={};for(const o in e)n[e[o]]=t[o];return n}static getCurrentParams(e){const t=(e=ue(e)).params,n=e.regex.exec(ce.path);return ce._getParams(t,n)}componentDidMount(){ae.subscribe(this._routeChangeHandler),window.addEventListener("popstate",ce.__emitter),this._routeChangeHandler(null)}componentWillUnmount(){window.removeEventListener("popstate",ce.__emitter),ae.unsubscribe(this._routeChangeHandler)}_notFoundComponent(){return S("div",null,`The Requested URL "${ce.path}" was not found`)}_routeChangeHandler(e){const t=ie(ce.path);let n=[];this.props.children.forEach(e=>{const o=ue(e.props.match),r=o.regex.exec(t);if(r){const t=e.props,i=ce._getParams(o.params,r);n.push(ee(t.component,b({},e.props,{params:i})))}}),n.length||(n=S(this.props.fallbackComponent||this._notFoundComponent)),this.setState({child:n})}render(e,t){return S(v,null,t.child)}}function ue(e){if(null!=e.regex)return e;e=ie(e);const t={};let n=0;return{regex:(o=e.split("/").map(e=>":"===e[0]?(t[++n]=e.substr(1),"(\\S*?)"):e).join("/"),RegExp(`^${o}(/?)$`)),params:t};var o}ne(ce,"getPath","path"),ne(ce,"getQs","qs");de=ue;var de;function pe(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault();const t=new URL(this.href,location.href);!function(e){window.history.pushState(null,"",e),ae.emit(e,{type:"load",native:!1})}(t.pathname+t.search+t.hash)}function he(e){return null!=e.href&&(e.onClick=pe),S("a",e)}const me={},fe=R},443:(e,t,n)=>{"use strict";var o=n(386),r=n(804);const i=r.h.getStore();console.log("Help will always be given at Hogwarts to those who ask for it.");const s={0:"Oh come on...",1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:"https://halocrypt.com/halo_begins",11:"When egyptions went 😂",12:"gamer time",13:"Maybe google tabula recta?",14:"In motion",15:"😢",16:"That wikipedia page was something....",17:"bad joke",18:"Like our logo? I really wish you could comment on it."};let a=!1;function l(){const e=["Stuck? I could help you out","I broke the server to enable these hints"],t=e[Math.floor(Math.random()*e.length)];return a=!0,console.log(t),setTimeout(()=>{console.log("wait.. What level are you on?"),setTimeout(()=>function(){if(!a)return;if(!i.isLoggedIn)return console.log("Probably log in first..");const e=i.userData.current_level;console.log(`Checking level ${e}...`),setTimeout(()=>console.log(s[e]||"Looks like you are on your own here"),400)}())},400),""}var c=n(118),u=n(776);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=class extends o.wA{constructor(...e){super(...e),d(this,"state",{currentPath:o.F0.getPath}),d(this,"__routeChange",e=>{this.setState({currentPath:e})})}componentDidMount(){o.Qn.subscribe(this.__routeChange)}componentWillUnmount(){o.Qn.unsubscribe(this.__routeChange)}};var h=n(209);const m=r.h.getStore(),f=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"Profile",path:"/profile"}],g=(e,t)=>f.map(({text:n,path:r})=>r===e.split("?")[0]||"/profile"===r&&!m.isLoggedIn?null:(0,o.az)(o.A,{style:{fontWeight:"normal",...t},href:r,class:["heading-text","heading-link","hoverable"],children:(0,o.az)("span",{children:n})})),y={instagram:{href:"https://www.instagram.com/halocrypt/",label:"Halocrpt Instagram"},discord:{href:"https://discord.gg/fz8e6Df",label:"Halocrypt Discord"},github:{href:"https://github.com/halocrypt-20",label:"Halocrypt Github"},twitter:{href:"https://twitter.com/halocrypt1",label:"Halocrypt Twitter"}},_=e=>Object.keys(y).map(t=>{const n=y[t],r="/"===n.href[0],i=r?o.A:"a",s=r?null:"_blank";return(0,o.az)(i,{rel:"noreferrer",style:e,target:s,class:t+" social-logo",href:n.href,"aria-label":n.label})});const b=_();class w extends p{constructor(...e){var t,n,o;super(...e),o=()=>this.setState({}),(n="__update")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}componentWillUnmount(){super.componentWillUnmount(),r.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),r.h.subscribe(this.__update)}render(e,t){return(0,o.az)("header",{"static-desktop":!0,children:["/"===t.currentPath?(0,o.az)("div",{class:"social-links",children:b}):(0,o.az)(h.Z,{size:"5rem"}),(0,o.az)("div",{class:"header-links",children:g(t.currentPath)})]})}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const D=_({margin:"auto"}),v=D.length;let M=document.querySelector("main");class N extends p{constructor(...e){super(...e),S(this,"_toggleMenu",()=>this.setState(e=>({enabledMenu:!e.enabledMenu}))),S(this,"__update",()=>this.setState({}))}componentWillUpdate(){M=M||document.querySelector("main"),M&&(M.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")}componentWillUnmount(){super.componentWillUnmount(),r.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),r.h.subscribe(this.__update)}render(e,t){return(0,o.az)(o.HY,{children:[(0,o.az)("header",{children:[(0,o.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===t.currentPath?(0,o.az)(h.Z,{size:"60"}):(0,o.az)(o.A,{href:"/",class:"heading-text halocrypt-text c_u",children:"Halocrypt"})]}),t.enabledMenu?(0,o.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,o.az)("div",{class:"swipeable-menu-container"+(t.enabledMenu?" expanded":""),children:[(0,o.az)("div",{class:"app-routes-mob",children:g(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,o.az)("div",{class:"social-links-mob",style:{"grid-template-columns":`repeat(${v}, 1fr)`,marginBottom:"5px"},children:D})]})]})}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class A extends o.ZP{constructor(...e){super(...e),x(this,"state",{windowWidth:innerWidth}),x(this,"onWidthChange",()=>{const e=window.innerWidth;this.setState({windowWidth:e})})}componentDidMount(){window.addEventListener("resize",this.onWidthChange)}render(e,t){return t.windowWidth<600?(0,o.az)(N,{}):(0,o.az)(w,{})}}var C=n(659),L=n(466);const I="entries"in L.do?L.do.entries:function(e){const t=(0,C.Z)(e);let n=t.length;const o=Array(n);for(;n--;){const r=t[n];o[n]=[r,e[r]]}return o},z=e=>e.default,P={"/":()=>n.e(827).then(n.bind(n,827)).then(z),"/register":()=>n.e(747).then(n.bind(n,747)).then(z),"/login":()=>n.e(894).then(n.bind(n,894)).then(z),"/profile":()=>n.e(326).then(n.bind(n,326)).then(z),"/logout":()=>Promise.resolve(()=>(c.y.logout().then((0,o.uX)("/")),"Logging you out")),"/leaderboard":()=>n.e(567).then(n.bind(n,567)).then(z),"/play":()=>n.e(564).then(n.bind(n,564)).then(z),"/rules":()=>n.e(396).then(n.bind(n,396)).then(z),"/__admin__":()=>n.e(831).then(n.bind(n,831)).then(z),"/forgot-password":()=>n.e(916).then(n.bind(n,916)).then(z),"/verify-email":()=>n.e(12).then(n.bind(n,12)).then(z),"/halo_begin":()=>n.e(24).then(n.bind(n,24)).then(z),"/why-am-i-disqualified":()=>n.e(958).then(n.bind(n,958)).then(z),"/detacilpmocylsseldeen":()=>Promise.resolve(()=>(0,o.az)("div",{children:[(0,o.az)("a",{style:{display:"inline-block",fontSize:"2rem"},class:"clr hoverable",target:"_blank",href:"https://pycode.tk/ok.html",children:"surprise tool that will help us later"}),(0,o.az)("div",{children:"everything's OK"})]}))},k=function(e){return(0,o.az)("main",{class:["router-app",e.compactLayout?"compact":"free-form"],children:(0,o.az)("div",{class:"router-parent",children:(0,o.az)(o.F0,{children:I(P).map(([e,t])=>((e,t)=>(0,o.az)(o.y$,{match:(0,o.nx)(e),component:function(n){return(0,o.az)("section",{"data-application-state":e,children:(0,o.az)(o.gr,{componentPromise:t,compactLayout:n.compactLayout,fallbackComponent:u.Tj})})}}))(e,t))})})})};n(994),n(662),n(311),n(157),n(628),n(391),n(981),n(315),n(221),n(411),n(243),n(25),n(665);Object.defineProperties(window,{help:{get:l}});const j=r.h.getStore();class T extends o.wA{componentDidMount(){const e=o.F0.getQs;let t;(t=new URLSearchParams(e).get("__loader"))&&(0,o.uX)(t)}render(){return(0,o.az)(o.HY,{children:[(0,o.az)(A,{}),(0,o.az)(k,{})]})}}async function E(){const e=T;if(j.isLoggedIn)return e;try{await c.y.checkAuth()}catch(e){return u.S2}return e}(0,o.sY)((0,o.az)(()=>(0,o.az)(o.gr,{componentPromise:E,fallbackComponent:u.uW}),{}),document.getElementById("app-mount"))},77:(e,t,n)=>{"use strict";n.d(t,{EA:()=>i,hY:()=>s,SA:()=>a});const o=location.hostname.includes("localhost")?"http://localhost:5000":"https://halocrypt.com";function r(e){return new URL(e,o).href}const i={authenticate:r("/api/user/authenticate"),getUserDetails:r("/api/user/get-user-details"),createAccount:r("/api/user/create"),forgotPassword:r("/api/user/forgot-password"),checkPasswordToken:r("/api/user/check-password-token"),verifyEmail:r("/api/user/verify-email"),checkEmailToken:r("/api/user/check-email-token"),checkAuth:r("/api/user/check-auth"),edit:r("/api/user/edit"),logout:r("/api/logout")},s={getLeaderboard:r("/api/play/get-leaderboard"),getQuestion:r("/api/play/get-question"),answerQuestion:r("/api/play/answer")},a={createAdminAccount:r("/api/admin/create-admin-account"),elevateStatus:r("/api/admin/elevate-status"),getAllUsers:r("/api/admin/get-users"),addQuestion:r("/api/admin/add-question"),getLatestQuestionNumber:r("/api/admin/get-latest-question-number"),getAllQuestions:r("/api/admin/get-questions"),editQuestion:r("/api/admin/edit-question"),adminEditUserData:r("/api/admin/__edit__"),deleteUser:r("/api/admin/delete-user"),disqualify:r("/api/admin/disqualify"),requalify:r("/api/admin/requalify"),getLogs:r("/api/admin/get-logs"),clearLogs:r("/api/admin/clear-logs"),mergeLogs:r("/api/admin/merge-logs")};r("/api/ginggol/1"),r("/api/ginggol/get")},118:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var o=n(649),r=n(804),i=n(77);const s=new class{constructor(){var e,t,n;n={checkedAuth:!1},(t="state")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}async auth(e){const t=await(0,o.V)(i.EA.authenticate,e);if(null!=t.error)return t;const n=t.data;return r.h.set("userData",n.user_data),this.state.checkedAuth=!0,n}async checkAuth(){let e=r.h.getStore().isLoggedIn;if(this.state.checkedAuth||e)return this.state.checkedAuth=!0,e;this.state.checkedAuth=!0;const t=(await(0,o.A)(i.EA.checkAuth)).data;return!t.error&&(r.h.set("userData",t.user_data),t)}logout(){return r.h.set("userData",null),(0,o.V)(i.EA.logout,{})}async createAccount(e){const t=await(0,o.V)(i.EA.createAccount,e);return null!=t.error?t:t.data}}},209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(386),r=n(536);function i(e){const t=s(e.size);return(0,o.az)(o.A,{href:"/",class:["hoverable"].concat(e.class||[]),"aria-label":"home page",style:{backgroundImage:`url("${r.Z}")`,height:t,width:t,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}const s=e=>/\d$/.test(e)?e+"px":e},776:(e,t,n)=>{"use strict";n.d(t,{Kx:()=>r,Tj:()=>i,uW:()=>s,S2:()=>a});var o=n(386);const r={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};function i(){return"Loading.."}function s(){return(0,o.az)("div",{style:r,children:"Checking your credentials.."})}function a(){return(0,o.az)("div",{style:r,children:"An Unexpected Error Occured"})}},804:(e,t,n)=>{"use strict";var o=n(466);let r=(0,o.zc)();(0,o.e$)("Map",r);const i=(0,o.e$)("Set",r),s=((0,o.e$)("WeakMap",r)&&(0,o.e$)("WeakSet",r),"__@@set"),a=e=>e!=e,l=(e,t)=>e===t||a(e)&&a(t);let c,u,d;if("undefined"!=typeof Symbol){function p(e,t){const n=e[s];let o=0;const r=n.length;return{[Symbol.iterator]:function(){return this},next:function(){if(o<r){const e=n[o++];return{value:t?[e,e]:e,done:!1}}return{value:void 0,done:!0}}}}c=function(){return p(this,!0)},u=function(){return p(this,!1)},d=function(){return p(this,!1)}}else c=d=u=function(){console.warn("no symbol support")};const h={keys:d,values:u,entries:c};var m=n(369);function f(e,t){if(n=e,!(null!=(o=t)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](n):n instanceof o))throw new TypeError("Cannot call a class as a function");var n,o}const g=function e(t,n){if(f(this,e),!n&&i)return new Set(t);this[s]=[],function(e,t){if(null==t)return;if(!(0,o.TW)(t))throw new Error("value:"+String(t)+" is not iterable");const n=t.length;for(let o=0;o<n;o++){const n=t[o];e.add(n)}}(this,t)};!function(e){e.prototype.add=function(e){return this.has(e)||this[s].push((e=>0===e?0:e)(e)),this},e.prototype.has=function(e){const t=this[s],n=t.length;for(let o=0;o<n;o++){const n=t[o];if(l(n,e))return!0}return!1},e.prototype.delete=function(e){let t=!1;return this[s]=this[s].filter(n=>{const o=!l(n,e);return o||(t=!0),o}),t},e.prototype.forEach=function(e,t){const n=this[s],o=n.length;for(let r=0;r<o;r++){const o=n[r],i=this;t?e.call(t,o,o,i):e(o,o,i)}},e.prototype.clear=function(){this[s].length=0},Object.defineProperty(e.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[s].length}}),"undefined"!=typeof Symbol&&(e.prototype[Symbol.iterator]=h.values,e.prototype[Symbol.toStringTag]="Set"),(0,m.Z)(e.prototype,h)}(g),g[Symbol.species]=g;const y=g;n.d(t,{h:()=>w});const _={currentTheme:null,userData:null,eventBeginTimeStamp:15885306e5};Object.defineProperty(_,"isLoggedIn",{get:()=>!(!_.userData||!_.userData.secure_data)}),Object.defineProperty(_,"eventBegan",{get:()=>_.eventBeginTimeStamp-+new Date<0,set:e=>e});const b=new y,w={subscribe(e){b.add(e)},set(e,t){_[e]=t,b.forEach(n=>n(e,t,_))},unsubscribe(e){b.delete(e)},getStore:()=>_}},649:(e,t,n)=>{"use strict";var o=n(369);function r(e){return new Promise(t=>setTimeout(t,e))}var i=n(466),s=n(659);(0,i.zc)(),n.d(t,{A:()=>d,V:()=>p});const a={"x-halocrypt-origin":location.origin||document.origin||`${location.protocol}//${location.host}`},l={credentials:"include"},c=function(e,t=3,n,o){return async function(){let i=0;for(;i<t;)try{return await Promise.resolve(e.apply(o,[].slice.call(arguments)))}catch(e){i++,n&&await r(n)}throw new Error("function "+(e.name||"")+" failed "+t+" times")}}(fetch,3,100);async function u(e,t,n={},r){const i=(0,o.Z)({},t||{}),s=(0,o.Z)({},l,n),a=new Request(e,{method:r,headers:i,...s});try{const e=await c(a);return await e.json()}catch(e){return{error:"Unknown error"}}}function d(e,t,n){const o=new URL(e),r=o.searchParams;return r.set("crs",a["x-halocrypt-origin"]),o.search=r.toString(),u(o.toString(),t,n,"get")}function p(e,t,n){const r={__payload:JSON.stringify(t)};var i;(0,o.Z)(r,a);const l={body:(i=r,globalThis.URLSearchParams?new URLSearchParams(i).toString():""+(0,s.Z)(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&"))},c=(0,o.Z)({},n);return c["content-type"]="application/x-www-form-urlencoded",u(e,c,l,"post")}},665:()=>{},311:()=>{},628:()=>{},981:()=>{},157:()=>{},315:()=>{},391:()=>{},662:()=>{},411:()=>{},243:()=>{},221:()=>{},994:()=>{},25:()=>{},536:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="data:image/svg+xml;base64,PCEtLVExODpiaWcsIGh1Z2UsLi4uLi4/LS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjVFMDAiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+"}},[[443,666]]]);