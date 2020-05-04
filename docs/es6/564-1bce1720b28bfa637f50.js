(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{564:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h,Question:()=>g,getLinkOrTextNode:()=>f});var i=n(386),r=n(804),s=n(77),a=n(649),o=n(67);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=r.h.getStore(),u=e=>(e||"").toLowerCase().replace(/\s/g,""),d=(0,i.az)(g,{data:{question_level:"Loading",question:"Finding your question",hint:[]}});class h extends i.wA{constructor(...e){var t;super(...e),t=this,c(this,"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),c(this,"onInput",e=>this.setState({answer:u(e.target.value)})),c(this,"_submit",(async function(){if(t.state.isAwaitingAnswer||t.state.incorrect)return;const e=t.state.answer;if(!e)return;t.setState({isAwaitingAnswer:!0});const n={answer:e},i=await(0,a.V)(s.hY.answerQuestion,n),r=i.data,o=r.error||i.error;return o?t.setState({hasError:o,isFetching:!1,isAwaitingAnswer:!1}):r.result?t.proceedToNextLevel():void t.setState({isAwaitingAnswer:!1,incorrect:!0})})),c(this,"proceedToNextLevel",()=>{this.setState({fetchedQuestion:null,isAwaitingAnswer:!1,incorrect:!1,answer:""})}),c(this,"resetError",()=>{this.setState({incorrect:!1,hasError:null}),this.__focusAnswer()})}componentDidMount(){if(!l.isLoggedIn)return(0,i.uX)("/login?next=/play");this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(this.state.isFetching||!l.eventBegan&&!l.userData.is_admin)return;this.setState({isFetching:!0});const e=await(0,a.A)(s.hY.getQuestion),t=e.error||e.data.error;if(t)return this.setState({hasError:t,isFetching:!1,fetchedQuestion:1});const n=e.data;this.setState({fetchedQuestion:n,isFetching:!1})}__focusAnswer(){const e=document.getElementById("answer-input");e&&e.focus()}render(e,t){return t.hasError?(0,i.az)(o.OK,{errorHead:"Can't play",reasons:[t.hasError],close:this.resetError}):l.isLoggedIn&&l.userData.is_disqualified?(0,i.az)("div",{class:{fontSize:"4rem"},children:"Disqualified!"}):l.eventBegan||l.isLoggedIn&&l.userData.is_admin?(0,i.az)(i.HY,{children:[t.incorrect&&(0,i.az)(i.HY,{children:[(0,i.az)("div",{class:"mask"}),(0,i.az)(o.OK,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?d:(0,i.az)(g,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer...",(0,i.az)("div",{class:"hint-help",style:{margin:"auto",width:"70%"},children:[(0,i.az)("div",{children:"Find Hints On:"}),(0,i.az)(o.r8,{})]})]}):(0,i.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})}}const p={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%",marginTop:"2rem"}};function g(e){const{data:t,value:n,onInput:r,onSubmit:s,disableInput:a}=e;return t.game_over?"You win (?)":(0,i.az)("form",{action:"javascript:",onSubmit:s,children:[(0,i.az)("div",{class:"question-num",children:["Question - ",t.question_level]}),(0,i.az)("div",{class:"question-card",children:[(0,i.az)("div",{children:f(t.question)}),(0,i.az)("div",{class:"question-hint",children:t.hint&&!!t.hint.length&&t.hint.map((e,t)=>(0,i.az)(w,{data:e,i:t}))}),!a&&(0,i.az)("input",{...Object.assign({id:"answer-input",class:"paper-input",placeholder:"Answer",onInput:r,value:n},p)})]}),!a&&(0,i.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function f(e){if("string"==typeof e)return e;const t=e.type,n=e.value;return"text"===t?n:"link"===t?(0,i.az)("a",{target:"_blank",href:n,style:{textDecoration:"underline",color:"var(--spec-color)",wordBreak:"break-all"},children:n}):void 0}function w(e){const t=e.data,n=e.i;return t&&!!t.value&&(0,i.az)("div",{children:[`Hint ${n+1}: `,f(t)]})}},67:(e,t,n)=>{"use strict";n.d(t,{OK:()=>r,Pt:()=>s,GI:()=>a,r8:()=>o});var i=n(386);function r(e){return(0,i.az)(a,{...Object.assign({},e,{title:"Something Ain't Right"})})}const s=/([^\w]|_)/g;class a extends i.ZP{constructor(...e){var t,n,i;super(...e),t=this,n="__id",i=Math.random(),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}componentDidMount(){const e=document.getElementById(""+this.__id);e&&e.focus()}render(e){return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,i.az)("div",{children:e.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:(e.reasons||[]).map(e=>(0,i.az)("div",{children:[" - ",e]}))})}),(0,i.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})}}function o(){return(0,i.az)("div",{class:"social-link-container",children:[(0,i.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,i.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}}}]);