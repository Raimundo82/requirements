const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=r(i);fetch(i.href,t)}};T();const C=e=>{let n;const r=new Set,a=(u,d)=>{const q=typeof u=="function"?u(n):u;if(q!==n){const S=n;n=d?q:Object.assign({},n,q),r.forEach(R=>R(n,S))}},i=()=>n,l={setState:a,getState:i,subscribe:u=>(r.add(u),()=>r.delete(u)),destroy:()=>r.clear()};return n=e(a,i,l),l},U=e=>e?C(e):C,x=e=>n=>{try{const r=e(n);return r instanceof Promise?r:{then(a){return x(a)(r)},catch(a){return this}}}catch(r){return{then(a){return this},catch(a){return x(a)(r)}}}},k=(e,n)=>(r,a,i)=>{let t={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:o=>o,version:0,merge:(o,p)=>({...p,...o}),...n},m=!1;const l=new Set,u=new Set;let d;try{d=t.getStorage()}catch{}if(!d)return e((...o)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),r(...o)},a,i);const q=x(t.serialize),S=()=>{const o=t.partialize({...a()});let p;const c=q({state:o,version:t.version}).then(h=>d.setItem(t.name,h)).catch(h=>{p=h});if(p)throw p;return c},R=i.setState;i.setState=(o,p)=>{R(o,p),S()};const w=e((...o)=>{r(...o),S()},a,i);let E;const A=()=>{var o;if(!d)return;m=!1,l.forEach(c=>c(a()));const p=((o=t.onRehydrateStorage)==null?void 0:o.call(t,a()))||void 0;return x(d.getItem.bind(d))(t.name).then(c=>{if(c)return t.deserialize(c)}).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==t.version){if(t.migrate)return t.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var h;return E=t.merge(c,(h=a())!=null?h:w),r(E,!0),S()}).then(()=>{p==null||p(E,void 0),m=!0,u.forEach(c=>c(E))}).catch(c=>{p==null||p(void 0,c)})};return i.persist={setOptions:o=>{t={...t,...o},o.getStorage&&(d=o.getStorage())},clearStorage:()=>{d==null||d.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>A(),hasHydrated:()=>m,onHydrate:o=>(l.add(o),()=>{l.delete(o)}),onFinishHydration:o=>(u.add(o),()=>{u.delete(o)})},A(),E||w},H=k,z=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"}],j=U(H(()=>({state:0,requirementsData:z,identificationData:{},selectedRequirementData:{},submissionContent:{}}),{name:"req-marinha"})),{getState:b,setState:_}=j,P=e=>document.createRange().createContextualFragment(e),s=(e,n=document)=>n.querySelector(e),y=(e,n,r,a=!0)=>e.dispatchEvent(new CustomEvent(n,{detail:r,bubbles:a})),qe=()=>{let e=new Date;const n=r=>r<10?`0${r}`:r;return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`},g=e=>`${e.slice(0,1).toUpperCase()}${e.slice(1,e.length)}`,M=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul{gap:0px}.nav-state>ul>li>button.btn-state:not([active]){display:none}}.btn-icon{border:none}button.btn-icon[disabled]{cursor:not-allowed!important;pointer-events:initial}
`,B="identifica\xE7\xE3o",J="requerimento",G="submiss\xE3o",N={identification:B,requirement:J,submission:G},K="/requirements/assets/prev.fcdf48d8.svg";window.html=String.raw;const L=s("#app-state"),W=()=>L.querySelector("[active]").toggleAttribute("active"),Y=e=>{switch(e){case 0:return s("#btn-prev").toggleAttribute("disabled",!0);case 1:return s("#btn-prev").toggleAttribute("disabled",!1);case 2:return s("#btn-prev").toggleAttribute("disabled",!1)}},Z=({detail:{state:e}})=>{_({state:e}),W(),L.querySelectorAll("button.btn-state")[e].toggleAttribute("active"),Y(e)},Q=()=>{if(b().state===1)return y(s("#app"),"identification-step");if(b().state===2)return y(s("#app"),"requirement-step")},V=()=>html`
    <style>
      ${M}
    </style>
    <div class="nav-state">
      <ul>
        <li>
          <button type="button" class="btn btn-icon" id="btn-prev" disabled>
            <img src="${K}" alt="prev" width="10px" />
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state" active>
            ${N.identification}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${N.requirement}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${N.submission}
          </button>
        </li>
      </ul>
    </div>
  `;L.appendChild(P(V()));s("#app").addEventListener("change-state",Z);s("#btn-prev").onclick=Q;const X="modulepreload",ee=function(e){return"/requirements/"+e},I={},$=function(n,r,a){return!r||r.length===0?n():Promise.all(r.map(i=>{if(i=ee(i),i in I)return;I[i]=!0;const t=i.endsWith(".css"),m=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${m}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":X,t||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),t)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())},te="Dados de identifica\xE7\xE3o",ne="nii",ie="Ex: 22600",re="categoria",oe="Ex: CTEN EN-AEL",ae="nome completo",se="Unidade,  Estabelecimento ou Organismo (UEO)",ce="Ex: DAGI",le="Selecione o requerimento",ue="pr\xF3ximo",f={title:te,idNumber:ne,idNumberEx:ie,category:re,categoryEx:oe,completeName:ae,unit:se,unitEx:ce,requirement:le,submit:ue},F=()=>{s("#app").appendChild(P(pe())),de(),O(),s("#requirement").onchange=O,s("form#identificationForm").onsubmit=me};function de(){let e=b().identificationData.selectedRequirement;e&&(s("select#requirement>option[selected]").toggleAttribute("selected"),s(`select#requirement>option[value="${e}"]`).toggleAttribute("selected",!0))}function O(){let e=s("#selectedRequirement").value,n=s("#requirement").value;e!==n&&_({selectedRequirementData:{}}),s("#selectedRequirement").value=s("#requirement").value}function me(e){e.preventDefault();const n={};s("#app").querySelectorAll("input").forEach(r=>{n[r.name]=r.value}),_({identificationData:n}),y(s("form#identificationForm"),"requirement-step")}function pe(){var e,n,r,a,i,t,m,l;return html`
    <h4 class="text-center mb-5">${f.title}</h4>

    <form id="identificationForm">
      <div class="mb-3">
        <label for="idNumber" class="form-label"
          >${f.idNumber.toUpperCase()}:</label
        >
        <input type="text" class="form-control" id="idNumber" name="idNumber"
        value="${(n=(e=b().identificationData)==null?void 0:e.idNumber)!=null?n:""}""
        placeholder="${f.idNumberEx}" required />
      </div>
      <div class="mb-3">
        <label for="category" class="form-label "
          >${g(f.category)}:</label
        >
        <input type="text" class="form-control" id="category" name="category"
        value="${(a=(r=b().identificationData)==null?void 0:r.category)!=null?a:""}""
        placeholder="${g(f.categoryEx)}" required />
      </div>
      <div class="mb-3">
        <label for="completeName" class="form-label"
          >${g(f.completeName)}:</label
        >
        <input type="text" class="form-control" id="completeName"
        name="completeName"
        value="${(t=(i=b().identificationData)==null?void 0:i.completeName)!=null?t:""}"" required
        />
      </div>
      <div class="mb-3">
        <label for="unit" class="form-label"
          >${g(f.unit)}:</label
        >
        <input type="text" class="form-control" id="unit" name="unit"
        value="${(l=(m=b().identificationData)==null?void 0:m.unit)!=null?l:""}""
        placeholder="${g(f.unitEx)}" required />
      </div>

      <div class="mb-3">
        <label for="selectedRequirement" class="form-label"
          >${g(f.requirement)}:</label
        >
        <input
          type="hidden"
          name="selectedRequirement"
          id="selectedRequirement"
          value="${b().identificationData.selectedRequirement}"
        />

        <select
          id="requirement"
          name="requirement"
          class="form-select"
          required
        >
          <option selected value="">${f.requirement}</option>
          ${b().requirementsData.map((u,d)=>html`<option value=${u.value}>${u.name}</option>`).join("")}
        </select>
      </div>
      <div class="mt-4 d-grid">
        <button type="submit" class="btn" id="nextButton">
          ${f.submit.toUpperCase()}
        </button>
      </div>
    </form>
  `}const v=s("#app");v.addEventListener("pointerover",fe);function fe(){$(()=>import("./popper.ca5786ac.js").then(e=>e.p),["assets/popper.ca5786ac.js","assets/_commonjsHelpers.b8add541.js"]),$(()=>import("./bootstrap.esm.min.9853106f.js"),[]),$(()=>import("./pdfGen.d75fa353.js"),["assets/pdfGen.d75fa353.js","assets/_commonjsHelpers.b8add541.js"])}async function be(e){const{requirement:n}=await $(()=>import("./requirements.4118ab4e.js"),[]);n({requirementName:e})}async function ve(){const e=(await $(()=>import("./submission.c912f400.js"),["assets/submission.c912f400.js","assets/pdfGen.d75fa353.js","assets/_commonjsHelpers.b8add541.js"])).default;e()}function D(){v.innerHTML=""}function he(){D(),y(v,"change-state",{state:0}),F()}function ge(){const e=b().identificationData.selectedRequirement;D(),y(v,"change-state",{state:1}),_({currentState:1}),be(e)}function ye(){D(),y(v,"change-state",{state:2}),ve()}v.addEventListener("identification-step",he);v.addEventListener("requirement-step",ge);v.addEventListener("submission-step",ye);F();export{$ as _,b as a,qe as b,P as c,y as d,s as g,_ as s};
