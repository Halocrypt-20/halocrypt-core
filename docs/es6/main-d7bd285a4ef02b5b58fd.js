(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{369:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(466);const r="assign"in o.do?o.do.assign:function(t){for(let e=1;e<arguments.length;e++){const n=arguments[e];for(const e in n)o.Q$.call(n,e)&&(t[e]=n[e])}return t}},659:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(466);const r="keys"in o.do?o.do.keys:function(t){const e=[];for(const n in t)o.Q$.call(t,n)&&e.push(n);return e}},466:(t,e,n)=>{"use strict";function o(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0}),___this.globalThis=___this;const t=___this;return delete Object.prototype.___this,t}n.d(e,{zc:()=>o,e$:()=>s,TW:()=>c,do:()=>u,Q$:()=>l});const r=o(),i=r.Symbol||{},s=(t,e)=>t in e,a={},c=t=>t&&!!t[i.iterator],u=a.constructor,l=a.hasOwnProperty;"undefined"!=typeof window&&(window.navigator&&!!window.navigator.userAgent||window.document&&document.createElement),"undefined"!=typeof self&&!!self.postMessage&&r.importScripts,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout},386:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>Lt,A:()=>pt,gr:()=>nt,wA:()=>R,HY:()=>l,y$:()=>dt,F0:()=>ct,Qn:()=>st,az:()=>p,nx:()=>ut,h:()=>p,uX:()=>at,sY:()=>X,I4:()=>At,d4:()=>xt,Ye:()=>kt,eJ:()=>It});const o={},r=[],i=/^aria[\-A-Z]/,s={};function a(t,e){return function t(e,n,o){if(!e)return n;for(let r=0;r<e.length;r++){const i=e[r];Array.isArray(i)?t(i,n,o):n.push(o?o(i):i)}return n}(t,[],e)}const c=o.hasOwnProperty,u=o.constructor.assign||function(t){for(let e=1;e<arguments.length;e++){const n=arguments[e];for(const e in n)c.call(n,e)&&(t[e]=n[e])}return t},l=function(){};function p(t,e){if(null==t||"boolean"==typeof t)return null;let n;null==e&&(e=o);const i=e.ref,s=e.key;let c;return null!=(e=h(e)).children?c=a([e.children]):(n=r.slice.call(arguments,2)).length&&(c=a(n)),e.children=c,m(t,e,s,i)}const d={key:1,ref:1};function h(t){const e={};for(const n in t)d[n]||(e[n]=t[n]);return e}function f(t){return null==t||"boolean"==typeof t?p(s):"string"==typeof t||"number"==typeof t?m(null,String(t)):Array.isArray(t)?p(l,null,t):null!=t._dom?m(t.type,t.props,t.key):t}function m(t,e,n,o){return{type:t,props:e,key:n,ref:o,_dom:null,_children:null,_component:null,_renders:null,_renderedBy:null,_parentDom:null,_depth:0,constructor:void 0}}const g="undefined"!=typeof Promise,y=g?Promise.prototype.then.bind(Promise.resolve()):t=>setTimeout(t),b="function"==typeof requestAnimationFrame,_={hookSetup:l,diffed:l};function w(t,e){let n=_[t];n===l&&(n=null),_[t]=function(){n&&n.apply(0,arguments),e.apply(0,arguments)}}const v={scheduleRender:b?t=>requestAnimationFrame(t):y,eagerlyHydrate:!0,RAF_TIMEOUT:100,debounceEffect:null},M={value:1,checked:1},S={key:1,ref:1,children:1};function k(t,e,n){n=n||"";const o=t.style;if("string"==typeof(e=e||""))return void(o.cssText=e);const r="string"==typeof n;if(r)o.cssText="";else for(const t in n)null==e[t]&&(o[t]="");for(const t in e){const i=e[t];(r||i!==n[t])&&(o[t]=i)}}const A=t=>t.trim();function D(t,e,n,o){const r=Array.isArray;r(e)&&(e=A(e.join(" "))),r(n)&&(n=A(n.join(" "))),e!==n&&o.batch.push({node:t,action:1,attr:"className",value:e})}function x(t,e,n,o){for(const r in e)S[r]||null!=n[r]||null==e[r]||o.batch.push({node:t,action:1,attr:r})}function I(t,e,n){if("o"===e[0]&&"n"===e[1])return function(t,e,n){e=e.substr(2).toLowerCase(),null==n?(t.removeEventListener(e,L),delete t._events[e]):(t.addEventListener(e,L),t._events[e]=n)}(t,e,n);const o=null==n||!1===n&&!i.test(e);return e in t?t[e]=o?"":n:o?t.removeAttribute(e):t.setAttribute(e,n)}function L(t){return this._events[t.type].call(this,t)}function C(t){if(null==t)return;const e=t.parentNode;e&&e.removeChild(t)}const z={_VNode:1,_events:1};function P(t){N(z,t)}const T={_children:1,_component:1,_depth:1,_dom:1,_renderedBy:1,_renders:1,_parentDom:1,key:1,ref:1};function j(t){null!=t&&N(T,t)}function N(t,e){if(null!=e)for(const n in t)e[n]=null}const E=[],U=[];function O(t){let e;for(;e=t.pop();)H(e)}function W(t){const e=t.name;return"componentDidMount"===e?E.push(t):"componentDidUpdate"===e?U.push(t):void H(t)}function H(t){const e=t.name,n=t.bind,o=n[e];if(n._lastLifeCycleMethod=e,!o)return;const r=t.args,i="function"==typeof n.componentDidCatch,s=()=>o.apply(n,r);if(g)y(s).catch(t=>{if(!i)throw t;n.componentDidCatch(t)});else try{s()}catch(t){if(i)return n.componentDidCatch(t);throw t}}function Q(t){!function(t){const e=t.length;for(let n=0;n<e;n++){const e=t[n],o=e.node,r=e.refDom,i=e.value,s=e.VNode;switch(e.action){case 4:r.appendChild(o);break;case 5:i.insertBefore(o,r);break;case 1:I(o,e.attr,i);break;case 3:k(o,i.newValue,i.oldValue);break;case 2:C(o),P(o),j(s)}}}(t),_.diffed(),O(E),O(U)}const Z=[];class R{constructor(t){this.state={},this.props=t}render(t,e){return null}setState(t){if(this._oldState=u({},this.state),this._nextState=u({},this._nextState||this.state),"function"==typeof t){const e=t(this._nextState,this.props);if(null==e)return;u(this._nextState,e)}else u(this._nextState,t);var e;(e=this)._dirty=!0,1===Z.push(e)&&v.scheduleRender(V)}forceUpdate(t){if(null==this._VNode)return;const e=[],n=!1!==t;K(this._VNode,u({},this._VNode),this._VNode._parentDom,n,{depth:this._depth,batch:e}),"function"==typeof t&&t(),Q(e)}}function V(){let t;for(Z.sort((t,e)=>t._depth-e._depth);t=Z.pop();)t._dirty&&(t._dirty=!1,t.forceUpdate(!1))}function q(t,e){t&&("function"==typeof t?t(e):t.current=e)}function $(t,e,n){const r=t.ref,i=(e||o).ref;r&&r!==i&&(q(r,n),i&&q(e.ref,null))}const B=t=>"function"==typeof t&&t!==l;function Y(t){return this.constructor(t)}function F(t,e,n,i){if(t.type===s)return;const a=t._children||r,c=(e||o)._children||r;return a!==c?function(t,e,n,r,i){const a=t.type===l,c=e.length,d=n.length,h=Math.max(c,d),f=a?i.next||((n[d-1]||o)._dom||o).nextSibling:null;for(let t=0;t<h;t++){const a=e[t]||(t<c?p(s):null);let l=n[t]||o,d=(G(l)||o).nextSibling||f;K(a,l,r,!1,u({},i,{next:d}))}}(t,a,c,n,i):void 0}function G(t){if(t&&t!==o){for(;B(t.type);)t=t._renders;if(t.type===l){const e=t._children||r;return G(e[e.length-1])}return t._dom}}function J(t,e){if(null==t||t===o)return;q(t.ref,null),J(t._renders,e);const n=t._component;let r;null!=n&&(n.setState=l,n.forceUpdate=l,n._VNode=null,W({name:"componentWillUnmount",bind:n}));const i=t._children;if(i)for(;i.length;)r=i.pop(),J(r,e);!function(t,e){const n=t.type;if("function"!=typeof n){const r=t._dom;null!=r&&(n!==s&&null!=n&&x(r,t.props,o,e),e.batch.push({node:r,action:2,VNode:t}))}}(t,e)}function K(t,e,n,r,i){if(null==t||"boolean"==typeof t)return void J(e,i);if(!((c=t)&&void 0===c.constructor||(console.warn("component not of expected type =>",c),0)))return null;var c;if(e===t)return t._dom;let p=(e=e||o).type,d=t.type,h=B(d);if(d===p&&h&&(t._component=e._component),t._parentDom=n,d!==p){if(!i.next){const t=G(e);i.next=(t||o).nextSibling}J(e,i),e=o}const m=t;if("string"!=typeof t.props&&d!==s&&(t=function(t,e,n,r){let i;if(null!=t&&B(i=t.type)){let s;return e=e||o,s=function(t){const e=t.prototype;return!(!e||!e.render)}(i)?function(t,e,n,r){let i;const s=t.type;let a=t._component;const c=null!=a;if(c){if(i="componentDidUpdate",null!=a.shouldComponentUpdate&&!n&&!1===a.shouldComponentUpdate(t.props,a._nextState||a.state))return o}else i="componentDidMount",a=new s(t.props),t._component=a,a._depth=++r.depth;a._VNode=t;const l=a._oldState,p=e.props;W({bind:a,name:c?"componentWillUpdate":"componentWillMount",args:c?[t.props,a._nextState]:null}),a.state=function(t,e,n){const r=u({},t.state||o,t._nextState||o),i=function(t,e,n){const o=t.getDerivedStateFromProps;return null!=o?u({},o(e,n)):null}(e,n.props,r);return i&&u(r,i),r}(a,s,t),a._oldState=null,a._nextState=null,a.props=t.props;const d=f(a.render(a.props,a.state));return W({bind:a,name:i,args:"componentDidUpdate"===i?[p,l]:[]}),$(t,e,a),d}(t,e,n,r):function(t,e){let n;const o=t.type;let r;return t._component?r=t._component:(r=new R(t.props),t._component=r,r.render=Y,r.constructor=o,r.props=t.props,r._depth=++e.depth),r._VNode=t,_.hookSetup(r),n=f(r.render(t.props)),_.hookSetup(null),n}(t,r),t._renders=s,s._renderedBy=t,s}return t}(t,e,r,i)),B(e.type)&&(e=e._renders),t!==m){if(t===o)return;return K(t,e,n,r,i)}let g;return t._children=function(t){let e=t.props.children;if(t.type!==l){if(null==e)return[]}else e&&!e.length&&(e=null);return a([e],f)}(t),p=e.type,d=t.type,d===l?F(t,e,n,i):(p!==d&&(e=null),function(t,e,n,r){const i=(e=e||o)===o;let a;const c=e._dom;a=t.type!==e.type||null==c?function(t){if("string"==typeof t.props)return document.createTextNode("");{const e=t.type;if(e===s)return document.createComment("$");const n=document.createElement(e);return n._events={},n}}(t):c,a._VNode=t,t._dom=a,function(t,e,n,r){if(e.type===s)return;if(n=n||o,"string"==typeof e.props)return function(t,e,n){return e===n||(t.nodeValue=e)}(t,e.props,n.props);const i=n.props,a=e.props;null!=i&&x(t,i,a,r),function(t,e,n,o){for(let r in n){if(r in S)continue;let i=n[r],s=M[r]?t[r]:e[r];i!==s&&(r="class"===r?"className":r,"className"!==r?o.batch.push("style"!==r?{node:t,action:1,attr:r,value:i}:{node:t,action:3,value:{newValue:i,oldValue:s}}):D(t,i,s,o))}}(t,i||o,a,r)}(a,t,i?null:e,r),function t(e,n){e&&(null!=e._component?e._component.base=n:t(e._renderedBy,n))}(t,a),i&&function(t,e,n){const o=t._dom;if(!o)return;const r=n.next;let i,s=!0;r&&r!==o&&(s=!1,i=r),n.batch.push(!s&&i?{node:o,action:5,refDom:i,value:e,VNode:t}:{node:o,action:4,refDom:e,VNode:t})}(t,n,r)}(t,e,n,i),g=t._dom,F(t,e,g,i),$(t,e,g)),g}function X(t,e){const n=p(l,void 0,[t]);e.hasChildNodes()&&function(t){let e;for(;e=t.firstChild;)t.removeChild(e)}(e);const o=[];K(n,void 0,e,!1,{depth:0,batch:o}),Q(o)}const tt=["boolean","string","number"];function et(t,e){return null==t||tt.indexOf(typeof t)>-1||void 0===t.constructor?t:p(t,e)}class nt extends R{componentDidMount(){this._init()}componentDidUpdate(t){(t&&(t.promise||t.componentPromise))!==(this.props.promise||this.props.componentPromise)&&this._init()}_init(){this.setState({inProgress:!0}),(this.props.promise||this.props.componentPromise)().then(t=>{this.setState({render:t,inProgress:!1})}).catch(t=>this.setState({error:!0,inProgress:!1}))}render(t,e){return e.inProgress?et(t.fallback||t.fallbackComponent)||"Loading":e.error?et(t.errorComponent)||"An Error Occured":et(e.render,function(t,e){e=a([e]);const n={};for(const o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["fallback","fallbackComponent","promise","componentPromise"]))}}const ot=/\/+$/;function rt(t){return 1===t.length?t:t.replace(ot,"")}const it=[],st={subscribe(t){it.includes(t)||it.push(t)},unsubscribe(t){for(let e=0;e<it.length;e++)if(it[e]===t)return it.splice(e,1)},emit(t,e){for(const n of it)n(t,e)},unsubscribeAll(){it.length=0}};function at(t){window.history.replaceState(null,"",t),st.emit(t,{type:"redirect",native:!1})}class ct extends R{constructor(t){super(t),this.state={},this._routeChangeHandler=this._routeChangeHandler.bind(this)}static __emitter(){st.emit(ct.path+ct.qs,{type:"popstate",native:!0})}static get path(){return location.pathname}static get qs(){return location.search}static get searchParams(){return new URLSearchParams(ct.qs)}static _getParams(t,e){const n={};for(const o in t)n[t[o]]=decodeURIComponent(e[o]);return n}static getCurrentParams(t){const e=(t=ut(t)).params,n=t.regex.exec(ct.path);return n?ct._getParams(e,n):{}}componentDidMount(){st.subscribe(this._routeChangeHandler),window.addEventListener("popstate",ct.__emitter),this._routeChangeHandler(null)}componentWillUnmount(){window.removeEventListener("popstate",ct.__emitter),st.unsubscribe(this._routeChangeHandler)}_notFoundComponent(){return p("div",null,`The Requested URL "${ct.path}" was not found`)}_routeChangeHandler(t){const e=rt(ct.path);let n=[];this.props.children.forEach(t=>{const o=ut(t.props.match),r=o.regex.exec(e);if(r){const e=t.props,i=ct._getParams(o.params,r);n.push(et(e.component,u({},t.props,{params:i})))}}),n.length||(n=p(this.props.fallbackComponent||this._notFoundComponent)),this.setState({child:n})}render(t,e){return p(l,null,e.child)}}function ut(t){if(null!=t.regex)return t;t=rt(t);const e={};let n=0;return{regex:(o=t.split("/").map(t=>":"===t[0]?(e[++n]=t.substr(1),"([^?\\/]+)"):t).join("/"),RegExp(`^${o}(/?)$`)),params:e};var o}function lt(t){if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault();const e=new URL(this.href,location.href);!function(t){window.history.pushState(null,"",t),st.emit(t,{type:"load",native:!1})}(e.pathname+e.search+e.hash)}function pt(t){return null!=t.href&&(t.onClick=lt),p("a",t)}const dt={};function ht(t,e){return!t||e.some((e,n)=>e!==t[n])}function ft(t,e,n){return t[e]||(t[e]=mt(0,n))}function mt(t,e){return"function"==typeof e?e(t):e}let gt=0,yt=null;const bt=[];function _t(t){const e=t.cleanUp;"function"==typeof e&&(e(),t.cleanUp=null)}function wt(t){let e=t.cb;e&&"function"==typeof(e=e())&&(t.cleanUp=e),t.cb=null}function vt(){bt.forEach(t=>{for(const n in t)(e=t[n]).resolved||_t(e),wt(e);var e}),bt.length=0}const Mt=v.debounceEffect||(b?function(t){const e=()=>{cancelAnimationFrame(n),clearTimeout(o),t()};let n,o;o=setTimeout(e,v.RAF_TIMEOUT),n=requestAnimationFrame(e)}:y);function St(){return[yt,gt++]}function kt(t,e){const n=St(),o=n[1],r=n[0]._hooksData;let i=r[o]||{};return ht(i.args,e)?(r[o]=null,i=ft(r,o,()=>({hookState:t()})),i.args=e,i.hookState):i.hookState}function At(t,e){return kt(()=>t,e)}function Dt(){const t=this._pendingEffects;for(const e in t||o)_t(t[e]);this._pendingEffects=null}function xt(t,e){const n=St(),o=n[0],r=n[1],i=o._hooksData,s={};let a=i[r]||s;const c=o._pendingEffects=o._pendingEffects||s,u=c[r];if(!ht(a.args,e))return void(u&&(u.resolved=!0));a=ft(i,r,s),a.args=e;const l=u?wt(u)||u.cleanUp:null;var p;c[r]={cb:t,cleanUp:l},-1===bt.indexOf(p=c)&&bt.push(p),o.componentWillUnmount=Dt}function It(t){return function(t,e,n){const o=St(),r=o[0],i=ft(r._hooksData,o[1],()=>({hookState:n?n(e):mt(void 0,e)}));return i.args=t,[i.hookState,t=>{const e=i.args(i.hookState,t);i.hookState=e,r.setState({})}]}(mt,t)}w("hookSetup",(function(t){yt=t,gt=0,t&&(t._hooksData||(t._hooksData=[]))})),w("diffed",(function(){Mt(vt)}));const Lt=R},443:(t,e,n)=>{"use strict";var o=n(386),r=n(804);const i=r.h.getStore();console.log("Help will always be given at Hogwarts to those who ask for it.");const s={0:"Oh come on...",1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:"https://halocrypt.com/halo_begins",11:"When egyptions went 😂",12:"gamer time",13:"Maybe google tabula recta?",14:"In motion",15:"😢",16:"That wikipedia page was something....",17:"bad joke",18:"Like our logo? I really wish you could comment on it."};let a=!1;function c(){const t=["Stuck? I could help you out","I broke the server to enable these hints"],e=t[Math.floor(Math.random()*t.length)];return a=!0,console.log(e),setTimeout(()=>{console.log("wait.. What level are you on?"),setTimeout(()=>function(){if(!a)return;if(!i.isLoggedIn)return console.log("Probably log in first..");const t=i.userData.current_level;console.log(`Checking level ${t}...`),setTimeout(()=>console.log(s[t]||"Looks like you are on your own here"),400)}())},400),""}var u=n(118);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const p=class extends o.wA{constructor(...t){super(...t),l(this,"state",{currentPath:o.F0.path}),l(this,"__routeChange",t=>{this.setState({currentPath:t})})}componentDidMount(){o.Qn.subscribe(this.__routeChange)}componentWillUnmount(){o.Qn.unsubscribe(this.__routeChange)}};var d=n(209);const h=r.h.getStore(),f=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"Profile",path:"/profile"}],m=(t,e)=>f.map(({text:n,path:r})=>r===t.split("?")[0]||"/profile"===r&&!h.isLoggedIn?null:(0,o.az)(o.A,{style:{fontWeight:"normal",...e},href:r,class:["heading-text","heading-link","hoverable"],children:(0,o.az)("span",{children:n})})),g={instagram:{href:"https://www.instagram.com/halocrypt/",label:"Halocrpt Instagram"},discord:{href:"https://discord.gg/fz8e6Df",label:"Halocrypt Discord"},github:{href:"https://github.com/halocrypt-20",label:"Halocrypt Github"},twitter:{href:"https://twitter.com/halocrypt1",label:"Halocrypt Twitter"}},y=t=>Object.keys(g).map(e=>{const n=g[e],r="/"===n.href[0],i=r?o.A:"a",s=r?null:"_blank";return(0,o.az)(i,{rel:"noreferrer",style:t,target:s,class:e+" social-logo",href:n.href,"aria-label":n.label})});const b=y();class _ extends p{constructor(...t){var e,n,o;super(...t),o=()=>this.setState({}),(n="__update")in(e=this)?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}componentWillUnmount(){super.componentWillUnmount(),r.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),r.h.subscribe(this.__update)}render(t,e){return(0,o.az)("header",{"static-desktop":!0,children:["/"===e.currentPath?(0,o.az)("div",{class:"social-links",children:b}):(0,o.az)(d.Z,{size:"5rem"}),(0,o.az)("div",{class:"header-links",children:m(e.currentPath)})]})}}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const v=y({margin:"auto"}),M=v.length;let S=document.querySelector("main");class k extends p{constructor(...t){super(...t),w(this,"_toggleMenu",()=>this.setState(t=>({enabledMenu:!t.enabledMenu}))),w(this,"__update",()=>this.setState({}))}componentWillUpdate(){S=S||document.querySelector("main"),S&&(S.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")}componentWillUnmount(){super.componentWillUnmount(),r.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),r.h.subscribe(this.__update)}render(t,e){return(0,o.az)(o.HY,{children:[(0,o.az)("header",{children:[(0,o.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===e.currentPath?(0,o.az)(d.Z,{size:"60"}):(0,o.az)(o.A,{href:"/",class:"heading-text halocrypt-text c_u",children:"Halocrypt"})]}),e.enabledMenu?(0,o.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,o.az)("div",{class:"swipeable-menu-container"+(e.enabledMenu?" expanded":""),children:[(0,o.az)("div",{class:"app-routes-mob",children:m(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,o.az)("div",{class:"social-links-mob",style:{"grid-template-columns":`repeat(${M}, 1fr)`,marginBottom:"5px"},children:v})]})]})}}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class D extends o.ZP{constructor(...t){super(...t),A(this,"state",{windowWidth:innerWidth}),A(this,"onWidthChange",()=>{const t=window.innerWidth;this.setState({windowWidth:t})})}componentDidMount(){window.addEventListener("resize",this.onWidthChange)}render(t,e){return e.windowWidth<600?(0,o.az)(k,{}):(0,o.az)(_,{})}}var x=n(659),I=n(466);const L="entries"in I.do?I.do.entries:function(t){const e=(0,x.Z)(t);let n=e.length;const o=Array(n);for(;n--;){const r=e[n];o[n]=[r,t[r]]}return o};var C=n(776);const z=t=>t.default,P={"/":()=>n.e(827).then(n.bind(n,827)).then(z),"/register":()=>n.e(747).then(n.bind(n,747)).then(z),"/login":()=>n.e(894).then(n.bind(n,894)).then(z),"/profile":()=>n.e(326).then(n.bind(n,326)).then(z),"/logout":()=>Promise.resolve(()=>(u.y.logout().then((0,o.uX)("/")),"Logging you out")),"/leaderboard":()=>n.e(567).then(n.bind(n,567)).then(z),"/play":()=>n.e(564).then(n.bind(n,564)).then(z),"/rules":()=>n.e(396).then(n.bind(n,396)).then(z),"/__admin__":()=>n.e(831).then(n.bind(n,831)).then(z),"/forgot-password":()=>n.e(916).then(n.bind(n,916)).then(z),"/verify-email":()=>n.e(12).then(n.bind(n,12)).then(z),"/halo_begin":()=>n.e(24).then(n.bind(n,24)).then(z),"/why-am-i-disqualified":()=>n.e(958).then(n.bind(n,958)).then(z),"/detacilpmocylsseldeen":()=>Promise.resolve(()=>(0,o.az)("div",{children:[(0,o.az)("a",{style:{display:"inline-block",fontSize:"2rem"},class:"clr hoverable",target:"_blank",href:"https://pycode.tk/ok.html",children:"surprise tool that will help us later"}),(0,o.az)("div",{children:"everything's OK"})]}))},T=function(t){return(0,o.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,o.az)("div",{class:"router-parent",children:(0,o.az)(o.F0,{children:L(P).map(([t,e])=>((t,e)=>(0,o.az)(o.y$,{match:(0,o.nx)(t),component:function(n){return(0,o.az)("section",{"data-application-state":t,children:(0,o.az)(o.gr,{componentPromise:e,compactLayout:n.compactLayout,fallbackComponent:C.Tj})})}}))(t,e))})})})};n(994),n(662),n(311),n(157),n(628),n(391),n(981),n(315),n(221),n(411),n(243),n(25),n(665);Object.defineProperties(window,{help:{get:c}});r.h.getStore();u.y.checkAuth();const j=document.getElementById("app-mount");(0,o.sY)((0,o.az)((function(){return(0,o.d4)(()=>{const t=o.F0.qs;let e;(e=new URLSearchParams(t).get("__loader"))&&(0,o.uX)(e)},[]),(0,o.az)(o.HY,{children:[(0,o.az)(D,{}),(0,o.az)(T,{})]})}),{}),j)},77:(t,e,n)=>{"use strict";n.d(e,{EA:()=>i,hY:()=>s,SA:()=>a});const o=location.hostname.includes("localhost")?"http://localhost:5000":"https://halocrypt.com";function r(t){return new URL(t,o).href}const i={authenticate:r("/api/user/authenticate"),getUserDetails:r("/api/user/get-user-details"),createAccount:r("/api/user/create"),forgotPassword:r("/api/user/forgot-password"),checkPasswordToken:r("/api/user/check-password-token"),verifyEmail:r("/api/user/verify-email"),checkEmailToken:r("/api/user/check-email-token"),checkAuth:r("/api/user/check-auth"),edit:r("/api/user/edit"),logout:r("/api/logout")},s={getLeaderboard:r("/api/play/get-leaderboard"),getQuestion:r("/api/play/get-question"),answerQuestion:r("/api/play/answer")},a={createAdminAccount:r("/api/admin/create-admin-account"),elevateStatus:r("/api/admin/elevate-status"),getAllUsers:r("/api/admin/get-users"),addQuestion:r("/api/admin/add-question"),getLatestQuestionNumber:r("/api/admin/get-latest-question-number"),getAllQuestions:r("/api/admin/get-questions"),editQuestion:r("/api/admin/edit-question"),adminEditUserData:r("/api/admin/__edit__"),deleteUser:r("/api/admin/delete-user"),disqualify:r("/api/admin/disqualify"),requalify:r("/api/admin/requalify"),getLogs:r("/api/admin/get-logs"),clearLogs:r("/api/admin/clear-logs"),mergeLogs:r("/api/admin/merge-logs")};r("/api/ginggol/1"),r("/api/ginggol/get")},118:(t,e,n)=>{"use strict";n.d(e,{y:()=>s});var o=n(649),r=n(804),i=n(77);const s=new class{constructor(){var t,e,n;n={checkedAuth:!1},(e="state")in(t=this)?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}async auth(t){const e=await(0,o.V)(i.EA.authenticate,t);if(null!=e.error)return e;const n=e.data;return r.h.set("userData",n.user_data),this.state.checkedAuth=!0,n}async checkAuth(){let t=r.h.getStore().isLoggedIn;if(this.state.checkedAuth||t)return this.state.checkedAuth=!0,t;this.state.checkedAuth=!0;const e=(await(0,o.A)(i.EA.checkAuth)).data;return!e.error&&(r.h.set("userData",e.user_data),e)}logout(){return r.h.set("userData",null),(0,o.V)(i.EA.logout,{})}async createAccount(t){const e=await(0,o.V)(i.EA.createAccount,t);if(null!=e.error)return e;return e.data}}},209:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(386),r=n(536);function i(t){const e=s(t.size);return(0,o.az)(o.A,{href:"/",class:["hoverable"].concat(t.class||[]),"aria-label":"home page",style:{backgroundImage:`url("${r.Z}")`,height:e,width:e,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}const s=t=>/\d$/.test(t)?t+"px":t},776:(t,e,n)=>{"use strict";n.d(e,{Kx:()=>r,Tj:()=>i,S2:()=>s});var o=n(386);const r={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};function i(){return"Loading.."}function s(){return(0,o.az)("div",{style:r,children:"An Unexpected Error Occured"})}},804:(t,e,n)=>{"use strict";var o=n(466);let r=(0,o.zc)();(0,o.e$)("Map",r);const i=(0,o.e$)("Set",r),s=((0,o.e$)("WeakMap",r)&&(0,o.e$)("WeakSet",r),"__@@set"),a=t=>t!=t,c=(t,e)=>t===e||a(t)&&a(e);let u,l,p;if("undefined"!=typeof Symbol){function d(t,e){const n=t[s];let o=0;const r=n.length;return{[Symbol.iterator]:function(){return this},next:function(){if(o<r){const t=n[o++];return{value:e?[t,t]:t,done:!1}}return{value:void 0,done:!0}}}}u=function(){return d(this,!0)},l=function(){return d(this,!1)},p=function(){return d(this,!1)}}else u=p=l=function(){console.warn("no symbol support")};const h={keys:p,values:l,entries:u};var f=n(369);function m(t,e){if(n=t,!(null!=(o=e)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](n):n instanceof o))throw new TypeError("Cannot call a class as a function");var n,o}const g=function t(e,n){if(m(this,t),!n&&i)return new Set(e);this[s]=[],function(t,e){if(null==e)return;if(!(0,o.TW)(e))throw new Error("value:"+String(e)+" is not iterable");const n=e.length;for(let o=0;o<n;o++){const n=e[o];t.add(n)}}(this,e)};!function(t){t.prototype.add=function(t){return this.has(t)||this[s].push((t=>0===t?0:t)(t)),this},t.prototype.has=function(t){const e=this[s],n=e.length;for(let o=0;o<n;o++){const n=e[o];if(c(n,t))return!0}return!1},t.prototype.delete=function(t){let e=!1;return this[s]=this[s].filter(n=>{const o=!c(n,t);return o||(e=!0),o}),e},t.prototype.forEach=function(t,e){const n=this[s],o=n.length;for(let r=0;r<o;r++){const o=n[r],i=this;e?t.call(e,o,o,i):t(o,o,i)}},t.prototype.clear=function(){this[s].length=0},Object.defineProperty(t.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[s].length}}),"undefined"!=typeof Symbol&&(t.prototype[Symbol.iterator]=h.values,t.prototype[Symbol.toStringTag]="Set"),(0,f.Z)(t.prototype,h)}(g),g[Symbol.species]=g;const y=g;n.d(e,{h:()=>w});const b={currentTheme:null,userData:null,eventBeginTimeStamp:15885306e5};Object.defineProperty(b,"isLoggedIn",{get:()=>!(!b.userData||!b.userData.secure_data)}),Object.defineProperty(b,"eventBegan",{get:()=>b.eventBeginTimeStamp-+new Date<0,set:t=>t});const _=new y,w={subscribe(t){_.add(t)},set(t,e){b[t]=e,_.forEach(n=>n(t,e,b))},unsubscribe(t){_.delete(t)},getStore:()=>b}},649:(t,e,n)=>{"use strict";var o=n(369);function r(t){return new Promise(e=>setTimeout(e,t))}var i=n(466),s=n(659);(0,i.zc)(),n.d(e,{A:()=>p,V:()=>d});const a={"x-halocrypt-origin":location.origin||document.origin||`${location.protocol}//${location.host}`},c={credentials:"include"},u=function(t,e=3,n,o){return async function(){let i=0;for(;i<e;)try{return await Promise.resolve(t.apply(o,[].slice.call(arguments)))}catch(t){i++,n&&await r(n)}throw new Error("function "+(t.name||"")+" failed "+e+" times")}}(fetch,3,100);async function l(t,e,n={},r){const i=(0,o.Z)({},e||{}),s=(0,o.Z)({},c,n),a=new Request(t,{method:r,headers:i,...s});try{const t=await u(a);return await t.json()}catch(t){return{error:"Unknown error"}}}function p(t,e,n){const o=new URL(t),r=o.searchParams;return r.set("crs",a["x-halocrypt-origin"]),o.search=r.toString(),l(o.toString(),e,n,"get")}function d(t,e,n){const r={__payload:JSON.stringify(e)};(0,o.Z)(r,a);var i;const c={body:(i=r,globalThis.URLSearchParams?new URLSearchParams(i).toString():""+(0,s.Z)(i).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(i[t])})).join("&"))},u=(0,o.Z)({},n);return u["content-type"]="application/x-www-form-urlencoded",l(t,u,c,"post")}},665:()=>{},311:()=>{},628:()=>{},981:()=>{},157:()=>{},315:()=>{},391:()=>{},662:()=>{},411:()=>{},243:()=>{},221:()=>{},994:()=>{},25:()=>{},536:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const o="data:image/svg+xml;base64,PCEtLVExODpiaWcsIGh1Z2UsLi4uLi4/LS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjVFMDAiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+"}},[[443,666]]]);