(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{842:function(t,n,e){"use strict";var r=e(3109),a=e.n(r),i=(e(5666),e(1161)),u=e.n(i),o=e(4435),c=e.n(o),s=e(4382),l=e.n(s),h=e(2386),d=e(368),p=e.n(d),f=e(3032),g=e.n(f),m=e(4383),y=m.h.getStore();console.log("Help will always be given at Hogwarts to those who ask for it.");var b={0:"Oh come on...",1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:"https://halocrypt.com/halo_begins",11:"When egyptions went 😂",12:"gamer time",13:"Maybe google tabula recta?",14:"In motion",15:"😢",16:"That wikipedia page was something....",17:"bad joke",18:"Like our logo? I really wish you could comment on it."},M=!1;function w(){var t=["Stuck? I could help you out","I broke the server to enable these hints"],n=t[Math.floor(Math.random()*t.length)];return M=!0,console.log(n),g()((function(){console.log("wait.. What level are you on?"),g()((function(){return function(){if(!M)return;if(!y.isLoggedIn)return console.log("Probably log in first..");var t=y.userData.current_level;console.log("Checking level "+t+"..."),g()((function(){return console.log(b[t]||"Looks like you are on your own here")}),400)}()}))}),400),""}var v=e(8118),A=e(4776),I=e(7766),z=e.n(I),D=e(1222),L=e.n(D),x=e(7672),k=e.n(x),j=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,z()(n=[this]).call(n,a))||this,k()(L()(e),"state",{currentPath:h.F0.getPath}),k()(L()(e),"__routeChange",(function(t){e.setState({currentPath:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){h.Qn.subscribe(this.__routeChange)},e.componentWillUnmount=function(){h.Qn.unsubscribe(this.__routeChange)},n}(h.wA),C=e(6209),N=(e(4916),e(3123),e(6902)),S=e.n(N),T=e(1942),_=e.n(T),E=e(2991),P=e.n(E),Q=m.h.getStore(),Z=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"Profile",path:"/profile"}],U=function(t,n){return P()(Z).call(Z,(function(e){var r=e.text,a=e.path;return a===t.split("?")[0]||"/profile"===a&&!Q.isLoggedIn?null:(0,h.az)(h.A,{style:_()({fontWeight:"normal"},n),href:a,class:["heading-text","heading-link","hoverable"],children:(0,h.az)("span",{children:r})})}))},W={instagram:{href:"https://www.instagram.com/halocrypt/",label:"Halocrpt Instagram"},discord:{href:"https://discord.gg/fz8e6Df",label:"Halocrypt Discord"},github:{href:"https://github.com/halocrypt-20",label:"Halocrypt Github"},twitter:{href:"https://twitter.com/halocrypt1",label:"Halocrypt Twitter"}},O=function(t){var n;return P()(n=S()(W)).call(n,(function(n){var e=W[n],r="/"===e.href[0],a=r?h.A:"a",i=r?null:"_blank";return(0,h.az)(a,{rel:"noreferrer",style:t,target:i,class:n+" social-logo",href:e.href,"aria-label":e.label})}))},H=O(),Y=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,z()(n=[this]).call(n,a))||this,k()(L()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),m.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),m.h.subscribe(this.__update)},e.render=function(t,n){return(0,h.az)("header",{"static-desktop":!0,children:["/"===n.currentPath?(0,h.az)("div",{class:"social-links",children:H}):(0,h.az)(C.Z,{size:"5rem"}),(0,h.az)("div",{class:"header-links",children:U(n.currentPath)})]})},n}(j),B=O({margin:"auto"}),q=B.length,G=document.querySelector("main"),R=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,z()(n=[this]).call(n,a))||this,k()(L()(e),"_toggleMenu",(function(){return e.setState((function(t){return{enabledMenu:!t.enabledMenu}}))})),k()(L()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUpdate=function(){(G=G||document.querySelector("main"))&&(G.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")},e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),m.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),m.h.subscribe(this.__update)},e.render=function(t,n){return(0,h.az)(h.HY,{children:[(0,h.az)("header",{children:[(0,h.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===n.currentPath?(0,h.az)(C.Z,{size:"60"}):(0,h.az)(h.A,{href:"/",class:"heading-text halocrypt-text c_u",children:"Halocrypt"})]}),n.enabledMenu?(0,h.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,h.az)("div",{class:"swipeable-menu-container"+(n.enabledMenu?" expanded":""),children:[(0,h.az)("div",{class:"app-routes-mob",children:U(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,h.az)("div",{class:"social-links-mob",style:{"grid-template-columns":"repeat("+q+", 1fr)",marginBottom:"5px"},children:B})]})]})},n}(j),J=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,z()(n=[this]).call(n,a))||this,k()(L()(e),"state",{windowWidth:innerWidth}),k()(L()(e),"onWidthChange",(function(){var t=window.innerWidth;e.setState({windowWidth:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.onWidthChange)},e.render=function(t,n){return n.windowWidth<600?(0,h.az)(R,{}):(0,h.az)(Y,{})},n}(h.ZP),V=(e(1539),e(8674),e(875)),F=e.n(V),X=e(1212),K=function(t){return t.default},$={"/":function(){return e.e(259).then(e.bind(e,7259)).then(K)},"/register":function(){return e.e(747).then(e.bind(e,2747)).then(K)},"/login":function(){return e.e(894).then(e.bind(e,1894)).then(K)},"/profile":function(){return e.e(326).then(e.bind(e,1326)).then(K)},"/logout":function(){return F().resolve((function(){return v.y.logout().then((0,h.uX)("/")),"Logging you out"}))},"/leaderboard":function(){return e.e(567).then(e.bind(e,2567)).then(K)},"/play":function(){return e.e(564).then(e.bind(e,1564)).then(K)},"/rules":function(){return e.e(396).then(e.bind(e,3396)).then(K)},"/__admin__":function(){return e.e(784).then(e.bind(e,784)).then(K)},"/forgot-password":function(){return e.e(916).then(e.bind(e,2916)).then(K)},"/verify-email":function(){return e.e(12).then(e.bind(e,6012)).then(K)},"/halo_begin":function(){return e.e(24).then(e.bind(e,4024)).then(K)},"/why-am-i-disqualified":function(){return e.e(502).then(e.bind(e,7502)).then(K)},"/detacilpmocylsseldeen":function(){return F().resolve((function(){return(0,h.az)("div",{children:[(0,h.az)("img",{src:"https://hstatic.halocrypt.com/url-is-everything.png"}),(0,h.az)("div",{children:"everything's OK"})]})}))}},tt=function(t){var n;return(0,h.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,h.az)("div",{class:"router-parent",children:(0,h.az)(h.F0,{children:[P()(n=(0,X.Z)($)).call(n,(function(t){return function(t,n){return(0,h.az)((function(e){return(0,h.az)("section",{"data-application-state":t,children:(0,h.az)(h.gr,{componentPromise:n,compactLayout:e.compactLayout,fallbackComponent:A.Tj})})}),{path:(0,h.Er)(t)})}(t[0],t[1])})),"}"]})})})};e(994),e(8662),e(5536),e(9157),e(8628),e(391),e(7981),e(7315),e(6221),e(2411),e(8243),e(9025),e(8665);p()(window,{help:{get:w}});var nt=m.h.getStore(),et=function(t){function n(){return t.apply(this,arguments)||this}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t,n=h.F0.getQs;(t=new(c())(n).get("__loader"))&&(0,h.uX)(t)},e.render=function(){return(0,h.az)(h.HY,{children:[(0,h.az)(J,{}),(0,h.az)(tt,{})]})},n}(h.wA);function rt(){return at.apply(this,arguments)}function at(){return(at=u()(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=et,!nt.isLoggedIn){t.next=3;break}return t.abrupt("return",n);case 3:return t.prev=3,t.next=6,v.y.checkAuth();case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(3),t.abrupt("return",A.S2);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}(0,h.sY)((0,h.az)((function(){return(0,h.az)(h.gr,{componentPromise:rt,fallbackComponent:A.uW})}),{}),document.getElementById("app-mount"))},77:function(t,n,e){"use strict";e.d(n,{EA:function(){return s},hY:function(){return l},SA:function(){return h}});var r,a=e(9969),i=e.n(a),u=e(8580),o=e.n(u)()(r=location.hostname).call(r,"localhost")?"http://localhost:5000":"https://halocrypt.com";function c(t){return new(i())(t,o).href}var s={authenticate:c("/api/user/authenticate"),getUserDetails:c("/api/user/get-user-details"),createAccount:c("/api/user/create"),forgotPassword:c("/api/user/forgot-password"),checkPasswordToken:c("/api/user/check-password-token"),verifyEmail:c("/api/user/verify-email"),checkEmailToken:c("/api/user/check-email-token"),checkAuth:c("/api/user/check-auth"),edit:c("/api/user/edit"),logout:c("/api/logout")},l={getLeaderboard:c("/api/play/get-leaderboard"),getQuestion:c("/api/play/get-question"),answerQuestion:c("/api/play/answer")},h={createAdminAccount:c("/api/admin/create-admin-account"),elevateStatus:c("/api/admin/elevate-status"),getAllUsers:c("/api/admin/get-users"),addQuestion:c("/api/admin/add-question"),getLatestQuestionNumber:c("/api/admin/get-latest-question-number"),getAllQuestions:c("/api/admin/get-questions"),editQuestion:c("/api/admin/edit-question"),adminEditUserData:c("/api/admin/__edit__"),deleteUser:c("/api/admin/delete-user"),disqualify:c("/api/admin/disqualify"),requalify:c("/api/admin/requalify")};c("/api/ginggol/1"),c("/api/ginggol/get")},8118:function(t,n,e){"use strict";e.d(n,{y:function(){return d}});var r=e(3109),a=e.n(r),i=(e(5666),e(1161)),u=e.n(i),o=e(7672),c=e.n(o),s=e(3735),l=e(4383),h=e(77),d=new(function(){function t(){c()(this,"state",{checkedAuth:!1})}var n=t.prototype;return n.auth=function(){var t=u()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(h.EA.authenticate,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,l.h.set("userData",r.user_data),this.state.checkedAuth=!0,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),n.checkAuth=function(){var t=u()(a().mark((function t(){var n,e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.h.getStore().isLoggedIn,!this.state.checkedAuth&&!n){t.next=4;break}return this.state.checkedAuth=!0,t.abrupt("return",n);case 4:return this.state.checkedAuth=!0,t.next=7,(0,s.A)(h.EA.checkAuth);case 7:if(e=t.sent,(r=e.data).error){t.next=12;break}return l.h.set("userData",r.user_data),t.abrupt("return",r);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.logout=function(){return l.h.set("userData",null),(0,s.V)(h.EA.logout,{})},n.createAccount=function(){var t=u()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(h.EA.createAccount,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),t}())},6209:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(7766),a=e.n(r),i=e(2386),u=e(4536);function o(t){var n,e=c(t.size);return(0,i.az)(i.A,{href:"/",class:a()(n=["hoverable"]).call(n,t.class||[]),"aria-label":"home page",style:{backgroundImage:'url("'+u.Z+'")',height:e,width:e,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}var c=function(t){return/\d$/.test(t)?t+"px":t}},4776:function(t,n,e){"use strict";e.d(n,{Kx:function(){return a},Tj:function(){return i},uW:function(){return u},S2:function(){return o}});var r=e(2386),a={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};function i(){return"Loading.."}function u(){return(0,r.az)("div",{style:a,children:"Checking your credentials.."})}function o(){return(0,r.az)("div",{style:a,children:"An Unexpected Error Occured"})}},4383:function(t,n,e){"use strict";e.d(n,{h:function(){return l}});var r=e(8914),a=e.n(r),i=e(3978),u=e.n(i),o=e(8945),c={currentTheme:null,userData:null,eventBeginTimeStamp:15885306e5};u()(c,"isLoggedIn",{get:function(){return!(!c.userData||!c.userData.secure_data)}}),u()(c,"eventBegan",{get:function(){return c.eventBeginTimeStamp-+new Date<0},set:function(t){return t}});var s=new o.Z,l={subscribe:function(t){s.add(t)},set:function(t,n){c[t]=n,a()(s).call(s,(function(e){return e(t,n,c)}))},unsubscribe:function(t){s.delete(t)},getStore:function(){return c}}},3735:function(t,n,e){"use strict";e.d(n,{A:function(){return v},V:function(){return A}});e(1539),e(8674),e(4916),e(9714),e(4765);var r=e(3109),a=e.n(r),i=e(1942),u=e.n(i),o=(e(5666),e(9340)),c=e.n(o),s=e(9969),l=e.n(s),h=e(1161),d=e.n(h),p=e(9369),f=e(4499),g=e(5471),m={"x-halocrypt-origin":location.origin||document.origin||location.protocol+"//"+location.host},y={credentials:"include"},b=(0,f.Z)(fetch,3,100);function M(t,n,e,r){return w.apply(this,arguments)}function w(){return(w=d()(a().mark((function t(n,e,r,i){var o,c,s,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r={}),o=(0,p.Z)({},e||{}),c=(0,p.Z)({},y,r),s=new Request(n,u()({method:i,headers:o},c)),t.prev=4,t.next=7,b(s);case 7:return l=t.sent,t.next=10,l.json();case 10:return t.abrupt("return",t.sent);case 13:return t.prev=13,t.t0=t.catch(4),t.abrupt("return",{error:"Unknown error"});case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))).apply(this,arguments)}function v(t,n,e){var r=new(l())(t),a=r.searchParams;return a.set("crs",m["x-halocrypt-origin"]),r.search=a.toString(),M(r.toString(),n,e,"get")}function A(t,n,e){var r={__payload:c()(n)};(0,p.Z)(r,m);var a={body:(0,g.Z)(r)},i=(0,p.Z)({},e);return i["content-type"]="application/x-www-form-urlencoded",M(t,i,a,"post")}},8665:function(){},5536:function(){},8628:function(){},7981:function(){},9157:function(){},7315:function(){},391:function(){},8662:function(){},2411:function(){},8243:function(){},6221:function(){},994:function(){},9025:function(){},4536:function(t,n){"use strict";n.Z="data:image/svg+xml;base64,PCEtLVExODpiaWcsIGh1Z2UsLi4uLi4/LS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjVFMDAiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+"}},[[842,666,844]]]);