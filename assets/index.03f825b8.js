var O=Object.defineProperty;var T=(t,e,i)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var h=(t,e,i)=>(T(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const L=t=>{let e;const i=new Set,l=(p,q)=>{const $=typeof p=="function"?p(e):p;if($!==e){const N=e;e=(q!=null?q:typeof $!="object")?$:Object.assign({},e,$),i.forEach(F=>F(e,N))}},n=()=>e,c={setState:l,getState:n,subscribe:p=>(i.add(p),()=>i.delete(p)),destroy:()=>i.clear()};return e=t(l,n,c),c},z=t=>t?L(t):L,B=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"},{name:"Licen\xE7a para assist\xEAncia inadi\xE1vel a filho/dependente \xE2mbito Covid",value:"covid"}],f={MILITAR:"militar",CIVIL:"civil",MILITARIZADO:"militarizado"};Object.freeze(f);const P=z(()=>({state:0,requirementsData:B,identificationData:{typeIdentity:"militar"},selectedRequirementData:{},submissionContent:{}})),{getState:s,setState:y}=P,U=t=>{y({identificationData:{...s().identificationData,typeIdentity:t}})},x=t=>{y({identificationData:{...t}})},k=()=>s().identificationData.typeIdentity===f.MILITAR,V=()=>s().identificationData.typeIdentity===f.CIVIL,w=()=>s().identificationData.typeIdentity===f.MILITARIZADO,u=t=>document.createRange().createContextualFragment(t),a=(t,e=document)=>e.querySelector(t),j=(t,e=document)=>e.querySelectorAll(t),v=(t,e,i,l=!0)=>t.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:l})),jt=()=>{let t=new Date;const e=i=>i<10?`0${i}`:i;return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`},d=t=>`${t.slice(0,1).toUpperCase()}${t.slice(1,t.length)}`,Z=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul{gap:0px}.nav-state>ul>li>button.btn-state:not([active]){display:none}}
`,W="identifica\xE7\xE3o",H="requerimento",G="submiss\xE3o",C={identification:W,requirement:H,submission:G};window.html=String.raw;const E=a("#app-state"),K=()=>E.querySelector("[active]").toggleAttribute("active"),Y=({detail:{state:t}})=>{y({state:t}),K(),E.querySelectorAll("button.btn-state")[t].toggleAttribute("active")},J=()=>html`
    <style>
      ${Z}
    </style>
    <div class="nav-state">
      <ul>
        <li>
          <button type="button" class="btn btn-state" active>
            ${C.identification}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${C.requirement}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${C.submission}
          </button>
        </li>
      </ul>
    </div>
  `;E.appendChild(u(J()));a("#app").addEventListener("change-state",Y);const Q="modulepreload",X=function(t){return"/requirements/"+t},I={},g=function(e,i,l){return!i||i.length===0?e():Promise.all(i.map(n=>{if(n=X(n),n in I)return;I[n]=!0;const o=n.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${m}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Q,o||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),o)return new Promise((p,q)=>{c.addEventListener("load",p),c.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},tt="Dados de identifica\xE7\xE3o",et="nii",it="e.g. 22600",nt="posto",ot="CFR",at="categoria",rt="e.g. EN-AEL",st="e.g. ASS OP",lt="nome completo",ct="Unidade,  Estabelecimento ou Organismo (UEO)",dt="e.g. Dire\xE7\xE3o de An\xE1lise e Gest\xE3o da Informa\xE7\xE3o",ut="Selecione o requerimento",mt="Requerimento / Declara\xE7\xE3o",pt="civil",ft="militar",vt="militarizado",bt="Militar",ht="Civil",gt="Militarizado",r={title:tt,idNumber:et,idNumberEx:it,rank:nt,rankEx:ot,category:at,class:"classe",classEx:rt,categoryEx:st,completeName:lt,unit:ct,unitEx:dt,requirement:ut,requirementEx:mt,civil:pt,militar:ft,militarizado:vt,isMilitar:bt,isCivil:ht,isMilitarizado:gt},yt="retroceder",qt="avan\xE7ar",A={previous:yt,submit:qt},$t=()=>{if(s().state===1)return v(a("#app"),"identification-step");if(s().state===2)return v(a("#app"),"requirement-step")},Ct=()=>{const t=u(html`
    <div class="col-6 d-grid" id="prevButton"></div>
    <div class="col-6 d-grid" id="nextButton"></div>
  `);return t.querySelector("#prevButton").appendChild(Et()),t.querySelector("#nextButton").appendChild(St()),t},Et=()=>{const t=u(html`<button
    id="btn-prev"
    type="button"
    class="btn btn-form btn-lg"
  >
    ${A.previous.toUpperCase()}
  </button>`);return t.firstChild.onclick=$t,t.firstChild.toggleAttribute("disabled",s().state===0),t},St=()=>u(html`
    <button type="submit" class="btn btn-form btn-lg">
      ${A.submit.toUpperCase()}
    </button>
  `),Lt=()=>html`
    <div
      class="mt-2 mb-4 ms-2 d-flex justify-content-center row"
      id="categoryRadios"
    >
      <div class="col-3 form-check ms-5" id="radioMilitar">
        <input
          class="form-check-input"
          type="radio"
          name="categorySelection"
          id="militar"
          value=${f.MILITAR}
          ${k()?"checked":""}
        />
        <label class="form-check-label" for="militar"
          >${r.militar.toUpperCase()}</label
        >
      </div>
      <div class="col-3 form-check" id="radioCivil">
        <input
          class="form-check-input"
          type="radio"
          name="categorySelection"
          id="civil"
          value=${f.CIVIL}
          ${V()?"checked":""}
        />
        <label class="form-check-label" for="civil">
          ${r.civil.toUpperCase()}
        </label>
      </div>
      <div class="col-3 form-check" id="radioMilitarizado">
        <input
          class="form-check-input"
          type="radio"
          name="categorySelection"
          id="militarizado"
          value=${f.MILITARIZADO}
          ${w()?"checked":""}
        />
        <label class="form-check-label" for="isMilitarizado">
          ${r.militarizado.toUpperCase()}
        </label>
      </div>
    </div>
  `,xt=()=>{var t,e,i;return html`
    <div id="categoryForm" class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="category"
            name="category"
            value="${(i=(e=(t=s())==null?void 0:t.identificationData)==null?void 0:e.category)!=null?i:""}"
            placeholder="${d(r.categoryEx)}"
            required
          />
          <label for="category" class="form-label "
            >${d(r.category)}</label
          >
        </div>
      </div>
    </div>
  `},It=()=>{var t,e,i;return html`
    <div id="categoryForm" class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="rank"
            name="rank"
            value="${(e=(t=s().identificationData)==null?void 0:t.rank)!=null?e:""}"
            placeholder="${d(r.rankEx)}"
            required
          />
          <label for="rank" class="form-label "
            >${d(r.rank)}</label
          >
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="class"
            name="class"
            value="${(i=s().identificationData.class)!=null?i:""}"
            placeholder="${d(r.classEx)}"
            required
          />
          <label for="class" class="form-label "
            >${d(r.class)}</label
          >
        </div>
      </div>
    </div>
  `};function M(){return k()||w()?It():xt()}const Dt=()=>{var t,e,i,l,n,o;return html`
    <form id="identificationForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="idNumber" name="idNumber"
        value="${(e=(t=s().identificationData)==null?void 0:t.idNumber)!=null?e:""}""
        placeholder="${r.idNumberEx}" required />
        <label for="idNumber">${r.idNumber.toUpperCase()}</label>
      </div>

      <div id="civilOrMilitarComponent">${M()}</div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="completeName"
        name="completeName" placeholder=" "
        value="${(l=(i=s().identificationData)==null?void 0:i.completeName)!=null?l:""}"" required
        />
        <label for="completeName"
          >${d(r.completeName)}</label
        >
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="unit" name="unit"
        value="${(o=(n=s().identificationData)==null?void 0:n.unit)!=null?o:""}""
        placeholder="${d(r.unitEx)}" required />
        <label for="unit">${d(r.unit)}</label>
      </div>
      <input
        type="hidden"
        name="selectedRequirement"
        id="selectedRequirement"
        value="${s().identificationData.selectedRequirement}"
      />
      <div class="form-floating mb-3">
        <select
          id="requirement"
          name="requirement"
          class="form-select"
          required
        >
          <option selected value="">${r.requirement}</option>
          ${s().requirementsData.map((m,c)=>html`<option value=${m.value}>${m.name}</option>`).join("")}
        </select>
        <label for="requirement"
          >${d(r.requirementEx)}</label
        >
      </div>
      <div class="mt-4 row" id="formButtons"></div>
    </form>
  `},_=()=>{a("#app").appendChild(At()),Rt(),D(),j('#categoryRadios input[type="radio"]').forEach(t=>t.onchange=kt),a("#requirement").onchange=D,a("form#identificationForm").onsubmit=wt};function Rt(){let t=s().identificationData.selectedRequirement;t&&(a("select#requirement>option[selected]").toggleAttribute("selected"),a(`select#requirement>option[value="${t}"]`).toggleAttribute("selected",!0))}function D(){let t=a("#selectedRequirement").value,e=a("#requirement").value;t!==e&&(a("#selectedRequirement").value=a("#requirement").value)}function kt({target:t}){U(t.value);const e=a("#app div#civilOrMilitarComponent");e.replaceChild(u(M()),e.querySelector("div#categoryForm"))}function wt(t){t.preventDefault();const e={};a("#app").querySelectorAll('input:not([type="radio"])').forEach(i=>{e[i.name]=i.value}),y(i=>({...i,identificationData:{...i.identificationData,...e}})),v(a("form#identificationForm"),"requirement-step")}function At(){const t=u(html`
    <h4 class="text-center mb-4">${r.title}</h4>
    ${Lt()} ${Dt()}
  `);return t.querySelector("#formButtons").appendChild(Ct()),t}const b=a("#app");document.body.addEventListener("pointerenter",Mt);function Mt(){g(()=>import("./popper.af08f1d5.js"),[]),g(()=>import("./pdfGen.fc0e7559.js").then(t=>t.d),[]),g(()=>import("./bootstrap.esm.min.ca4a638b.js"),[])}async function _t(t){const{requirement:e}=await g(()=>import("./requirements.a59152dc.js"),[]);e({requirementName:t})}async function Nt(){const t=(await g(()=>import("./submission.47e8605b.js"),["assets/submission.47e8605b.js","assets/pdfGen.fc0e7559.js"])).default;t()}function S(){b.innerHTML=""}function Ft(){S(),v(b,"change-state",{state:0}),_()}function Ot(){const t=s().identificationData.selectedRequirement;S(),v(b,"change-state",{state:1}),y({currentState:1}),_t(t)}function Tt(){S(),v(b,"change-state",{state:2}),Nt()}b.addEventListener("identification-step",Ft);b.addEventListener("requirement-step",Ot);b.addEventListener("submission-step",Tt);_();async function zt(t){return await fetch(`http://localhost:3000/${t}`)}const R=()=>u(html`
    <div id="loginContainer">
      <button
        type="button"
        id="loginBtn"
        class="btn btn-form"
        data-bs-toggle="modal"
        data-bs-target="#authModal"
      >
        Login
      </button>
    </div>
  `),Bt=(t,e)=>{const i=u(html`
    <div id="logoutContainer" class="flex">
      <p>${e}</p>

      <button type="button" id="logout" class="btn btn-form">Logout</button>
    </div>
  `);return i.querySelector("button#logout").onclick=t.handleLogout,i},Pt=()=>u(html` <div
    class="modal fade"
    id="authModal"
    tabindex="-1"
    aria-labelledby="loginInputLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginInputLabel">Autenticação</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="niiLogin"
              class="form-control"
              id="niiLogin"
              vale=""
              placeholder="name@example.com"
              required
            />
            <label for="niiLogin">NII</label>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            id="loginSubmit"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>`);class Ut extends HTMLElement{constructor(){super();h(this,"addEventListeners",()=>{const i=this.modal.querySelector("button#loginSubmit");i.onclick=this.handleLogin});h(this,"handleLogin",async i=>{const l=this.modal.querySelector("input#niiLogin").value;let n=await zt(l).catch(o=>console.error(o));!n.ok||(n=await n.json(),this.hydrateForm(n),this.wrapper.replaceChild(Bt(this,n.completeName),this.wrapper.querySelector("div")))});h(this,"handleLogout",()=>{this.hydrateForm(),this.wrapper.replaceChild(R(),this.wrapper.querySelector("div"))});h(this,"hydrateForm",i=>{x(i||{}),v(a("#app"),"identification-step")})}get wrapper(){return this.querySelector("#authContainerWrapper")||u(html`<div id="authContainerWrapper"></div>`)}get modal(){return this.querySelector("div#authModal")}connectedCallback(){this.append(Pt(),this.wrapper),this.wrapper.appendChild(R()),this.addEventListeners()}}window.customElements.define("app-login",Ut);export{Ct as F,g as _,s as a,jt as b,u as c,v as d,w as e,a as g,k as i,Et as p,y as s};
