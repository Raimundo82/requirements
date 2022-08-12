const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}};T();const I=e=>{let n;const i=new Set,a=(d,l)=>{const h=typeof d=="function"?d(n):d;if(h!==n){const S=n;n=l?h:Object.assign({},n,h),i.forEach(D=>D(n,S))}},r=()=>n,c={setState:a,getState:r,subscribe:d=>(i.add(d),()=>i.delete(d)),destroy:()=>i.clear()};return n=e(a,r,c),c},U=e=>e?I(e):I,_=e=>n=>{try{const i=e(n);return i instanceof Promise?i:{then(a){return _(a)(i)},catch(a){return this}}}catch(i){return{then(a){return this},catch(a){return _(a)(i)}}}},k=(e,n)=>(i,a,r)=>{let t={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:o=>o,version:0,merge:(o,p)=>({...p,...o}),...n},m=!1;const c=new Set,d=new Set;let l;try{l=t.getStorage()}catch{}if(!l)return e((...o)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),i(...o)},a,r);const h=_(t.serialize),S=()=>{const o=t.partialize({...a()});let p;const s=h({state:o,version:t.version}).then(g=>l.setItem(t.name,g)).catch(g=>{p=g});if(p)throw p;return s},D=r.setState;r.setState=(o,p)=>{D(o,p),S()};const w=e((...o)=>{i(...o),S()},a,r);let E;const A=()=>{var o;if(!l)return;m=!1,c.forEach(s=>s(a()));const p=((o=t.onRehydrateStorage)==null?void 0:o.call(t,a()))||void 0;return _(l.getItem.bind(l))(t.name).then(s=>{if(s)return t.deserialize(s)}).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==t.version){if(t.migrate)return t.migrate(s.state,s.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return s.state}).then(s=>{var g;return E=t.merge(s,(g=a())!=null?g:w),i(E,!0),S()}).then(()=>{p==null||p(E,void 0),m=!0,d.forEach(s=>s(E))}).catch(s=>{p==null||p(void 0,s)})};return r.persist={setOptions:o=>{t={...t,...o},o.getStorage&&(l=o.getStorage())},clearStorage:()=>{l==null||l.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>A(),hasHydrated:()=>m,onHydrate:o=>(c.add(o),()=>{c.delete(o)}),onFinishHydration:o=>(d.add(o),()=>{d.delete(o)})},A(),E||w},z=k,H=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"}],M=U(z(()=>({state:0,requirementsData:H,identificationData:{},selectedRequirementData:{},submissionContent:{}}),{name:"req-marinha",partialize:e=>({requirementsData:e.requirementsData,identificationData:e.identificationData,selectedRequirementData:e.selectedRequirementData})})),{getState:f,setState:R}=M,x=e=>document.createRange().createContextualFragment(e),u=(e,n=document)=>n.querySelector(e),q=(e,n,i,a=!0)=>e.dispatchEvent(new CustomEvent(n,{detail:i,bubbles:a})),$e=()=>{let e=new Date;const n=i=>i<10?`0${i}`:i;return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`},y=e=>`${e.slice(0,1).toUpperCase()}${e.slice(1,e.length)}`,j=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul{gap:0px}.nav-state>ul>li>button.btn-state:not([active]){display:none}}
`,J="identifica\xE7\xE3o",G="requerimento",K="submiss\xE3o",N={identification:J,requirement:G,submission:K};window.html=String.raw;const C=u("#app-state"),W=()=>C.querySelector("[active]").toggleAttribute("active"),Y=({detail:{state:e}})=>{R({state:e}),W(),C.querySelectorAll("button.btn-state")[e].toggleAttribute("active")},Z=()=>html`
    <style>
      ${j}
    </style>
    <div class="nav-state">
      <ul>
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
  `;C.appendChild(x(Z()));u("#app").addEventListener("change-state",Y);const Q="modulepreload",V=function(e){return"/requirements/"+e},O={},$=function(n,i,a){return!i||i.length===0?n():Promise.all(i.map(r=>{if(r=V(r),r in O)return;O[r]=!0;const t=r.endsWith(".css"),m=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${m}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Q,t||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),t)return new Promise((d,l)=>{c.addEventListener("load",d),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},X="Dados de identifica\xE7\xE3o",ee="nii",te="Ex: 22600",ne="categoria",re="Ex: CTEN EN-AEL",ie="nome completo",oe="Unidade,  Estabelecimento ou Organismo (UEO)",ae="Ex: DAGI",se="Selecione o requerimento",v={title:X,idNumber:ee,idNumberEx:te,category:ne,categoryEx:re,completeName:ie,unit:oe,unitEx:ae,requirement:se},ce="retroceder",le="avan\xE7ar",P={previous:ce,submit:le},ue=()=>{if(f().state===1)return q(u("#app"),"identification-step");if(f().state===2)return q(u("#app"),"requirement-step")},de=()=>{const e=x(html`
    <div class="col-6 d-grid" id="prevButton"></div>
    <div class="col-6 d-grid" id="nextButton"></div>
  `);return e.querySelector("#prevButton").appendChild(me()),e.querySelector("#nextButton").appendChild(pe()),e},me=()=>{const e=x(html`<button
    id="btn-prev"
    type="button"
    class="btn btn-form"
  >
    ${P.previous.toUpperCase()}
  </button>`);return e.firstChild.onclick=ue,e.firstChild.toggleAttribute("disabled",f().state===0),e},pe=()=>x(html`
    <button type="submit" class="btn btn-form">
      ${P.submit.toUpperCase()}
    </button>
  `),B=()=>{u("#app").appendChild(be()),fe(),F(),u("#requirement").onchange=F,u("form#identificationForm").onsubmit=ve};function fe(){let e=f().identificationData.selectedRequirement;e&&(u("select#requirement>option[selected]").toggleAttribute("selected"),u(`select#requirement>option[value="${e}"]`).toggleAttribute("selected",!0))}function F(){let e=u("#selectedRequirement").value,n=u("#requirement").value;e!==n&&R({selectedRequirementData:{}}),u("#selectedRequirement").value=u("#requirement").value}function ve(e){e.preventDefault();const n={};u("#app").querySelectorAll("input").forEach(i=>{n[i.name]=i.value}),R({identificationData:n}),q(u("form#identificationForm"),"requirement-step")}function be(){var n,i,a,r,t,m,c,d;const e=x(html`
    <h4 class="text-center mb-5">${v.title}</h4>
    <form id="identificationForm">
      <div class="mb-3">
        <label for="idNumber" class="form-label"
          >${v.idNumber.toUpperCase()}:</label
        >
        <input type="text" class="form-control" id="idNumber" name="idNumber"
        value="${(i=(n=f().identificationData)==null?void 0:n.idNumber)!=null?i:""}""
        placeholder="${v.idNumberEx}" required />
      </div>
      <div class="mb-3">
        <label for="category" class="form-label "
          >${y(v.category)}:</label
        >
        <input type="text" class="form-control" id="category" name="category"
        value="${(r=(a=f().identificationData)==null?void 0:a.category)!=null?r:""}""
        placeholder="${y(v.categoryEx)}" required />
      </div>
      <div class="mb-3">
        <label for="completeName" class="form-label"
          >${y(v.completeName)}:</label
        >
        <input type="text" class="form-control" id="completeName"
        name="completeName"
        value="${(m=(t=f().identificationData)==null?void 0:t.completeName)!=null?m:""}"" required
        />
      </div>
      <div class="mb-3">
        <label for="unit" class="form-label"
          >${y(v.unit)}:</label
        >
        <input type="text" class="form-control" id="unit" name="unit"
        value="${(d=(c=f().identificationData)==null?void 0:c.unit)!=null?d:""}""
        placeholder="${y(v.unitEx)}" required />
      </div>

      <div class="mb-3">
        <label for="selectedRequirement" class="form-label"
          >${y(v.requirement)}:</label
        >
        <input
          type="hidden"
          name="selectedRequirement"
          id="selectedRequirement"
          value="${f().identificationData.selectedRequirement}"
        />

        <select
          id="requirement"
          name="requirement"
          class="form-select"
          required
        >
          <option selected value="">${v.requirement}</option>
          ${f().requirementsData.map((l,h)=>html`<option value=${l.value}>${l.name}</option>`).join("")}
        </select>
      </div>
      <div class="mt-4 row" id="formButtons"></div>
    </form>
  `);return e.querySelector("#formButtons").appendChild(de()),e}const b=u("#app");b.addEventListener("pointerover",he);function he(){$(()=>import("./popper.9ecf204a.js"),[]),$(()=>import("./bootstrap.esm.min.9853106f.js"),[]),$(()=>import("./pdfGen.da7d1d3d.js"),["assets/pdfGen.da7d1d3d.js","assets/_commonjsHelpers.b8add541.js"])}async function ge(e){const{requirement:n}=await $(()=>import("./requirements.8717011c.js"),["assets/requirements.8717011c.js","assets/bootstrap.esm.min.9853106f.js"]);n({requirementName:e})}async function ye(){const e=(await $(()=>import("./submission.5a99ab0d.js"),["assets/submission.5a99ab0d.js","assets/pdfGen.da7d1d3d.js","assets/_commonjsHelpers.b8add541.js","assets/pdf.ddc62748.js","assets/pdf.worker.entry.efbb51d6.js"])).default;e()}function L(){b.innerHTML=""}function qe(){L(),q(b,"change-state",{state:0}),B()}function Se(){const e=f().identificationData.selectedRequirement;L(),q(b,"change-state",{state:1}),R({currentState:1}),ge(e)}function Ee(){L(),q(b,"change-state",{state:2}),ye()}b.addEventListener("identification-step",qe);b.addEventListener("requirement-step",Se);b.addEventListener("submission-step",Ee);B();export{de as F,$ as _,f as a,$e as b,x as c,q as d,u as g,me as p,R as s};
