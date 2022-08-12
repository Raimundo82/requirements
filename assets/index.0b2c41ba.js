const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}};B();const k=e=>{let n;const i=new Set,a=(d,l)=>{const b=typeof d=="function"?d(n):d;if(b!==n){const h=n;n=l?b:Object.assign({},n,b),i.forEach(R=>R(n,h))}},r=()=>n,c={setState:a,getState:r,subscribe:d=>(i.add(d),()=>i.delete(d)),destroy:()=>i.clear()};return n=e(a,r,c),c},U=e=>e?k(e):k,_=e=>n=>{try{const i=e(n);return i instanceof Promise?i:{then(a){return _(a)(i)},catch(a){return this}}}catch(i){return{then(a){return this},catch(a){return _(a)(i)}}}},T=(e,n)=>(i,a,r)=>{let t={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:o=>o,version:0,merge:(o,p)=>({...p,...o}),...n},m=!1;const c=new Set,d=new Set;let l;try{l=t.getStorage()}catch{}if(!l)return e((...o)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),i(...o)},a,r);const b=_(t.serialize),h=()=>{const o=t.partialize({...a()});let p;const s=b({state:o,version:t.version}).then(q=>l.setItem(t.name,q)).catch(q=>{p=q});if(p)throw p;return s},R=r.setState;r.setState=(o,p)=>{R(o,p),h()};const w=e((...o)=>{i(...o),h()},a,r);let E;const A=()=>{var o;if(!l)return;m=!1,c.forEach(s=>s(a()));const p=((o=t.onRehydrateStorage)==null?void 0:o.call(t,a()))||void 0;return _(l.getItem.bind(l))(t.name).then(s=>{if(s)return t.deserialize(s)}).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==t.version){if(t.migrate)return t.migrate(s.state,s.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return s.state}).then(s=>{var q;return E=t.merge(s,(q=a())!=null?q:w),i(E,!0),h()}).then(()=>{p==null||p(E,void 0),m=!0,d.forEach(s=>s(E))}).catch(s=>{p==null||p(void 0,s)})};return r.persist={setOptions:o=>{t={...t,...o},o.getStorage&&(l=o.getStorage())},clearStorage:()=>{l==null||l.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>A(),hasHydrated:()=>m,onHydrate:o=>(c.add(o),()=>{c.delete(o)}),onFinishHydration:o=>(d.add(o),()=>{d.delete(o)})},A(),E||w},z=T,H=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"}],M=U(z(()=>({state:0,requirementsData:H,identificationData:{},selectedRequirementData:{},submissionContent:{}}),{name:"req-marinha",partialize:e=>({requirementsData:e.requirementsData,identificationData:e.identificationData,selectedRequirementData:e.selectedRequirementData})})),{getState:v,setState:D}=M,$=e=>document.createRange().createContextualFragment(e),u=(e,n=document)=>n.querySelector(e),S=(e,n,i,a=!0)=>e.dispatchEvent(new CustomEvent(n,{detail:i,bubbles:a})),_e=()=>{let e=new Date;const n=i=>i<10?`0${i}`:i;return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`},g=e=>`${e.slice(0,1).toUpperCase()}${e.slice(1,e.length)}`,j=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul{gap:0px}.nav-state>ul>li>button.btn-state:not([active]){display:none}}
`,J="identifica\xE7\xE3o",G="requerimento",K="submiss\xE3o",N={identification:J,requirement:G,submission:K};window.html=String.raw;const C=u("#app-state"),W=()=>C.querySelector("[active]").toggleAttribute("active"),Y=({detail:{state:e}})=>{D({state:e}),W(),C.querySelectorAll("button.btn-state")[e].toggleAttribute("active")},Z=()=>html`
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
  `;C.appendChild($(Z()));u("#app").addEventListener("change-state",Y);const Q="modulepreload",V=function(e){return"/requirements/"+e},I={},x=function(n,i,a){return!i||i.length===0?n():Promise.all(i.map(r=>{if(r=V(r),r in I)return;I[r]=!0;const t=r.endsWith(".css"),m=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${m}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Q,t||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),t)return new Promise((d,l)=>{c.addEventListener("load",d),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},X="Dados de identifica\xE7\xE3o",ee="nii",te="e.g. 22600",ne="posto",re="CFR",ie="categoria",oe="e.g. EN-AEL",ae="nome completo",se="Unidade,  Estabelecimento ou Organismo (UEO)",ce="e.g. Dire\xE7\xE3o de An\xE1lise e Gest\xE3o da Informa\xE7\xE3o",le="Selecione o requerimento",ue="Requerimento / Declara\xE7\xE3o",f={title:X,idNumber:ee,idNumberEx:te,rank:ne,rankEx:re,category:ie,categoryEx:oe,completeName:ae,unit:se,unitEx:ce,requirement:le,requirementEx:ue},de="retroceder",me="avan\xE7ar",O={previous:de,submit:me},pe=()=>{if(v().state===1)return S(u("#app"),"identification-step");if(v().state===2)return S(u("#app"),"requirement-step")},fe=()=>{const e=$(html`
    <div class="col-6 d-grid" id="prevButton"></div>
    <div class="col-6 d-grid" id="nextButton"></div>
  `);return e.querySelector("#prevButton").appendChild(ve()),e.querySelector("#nextButton").appendChild(be()),e},ve=()=>{const e=$(html`<button
    id="btn-prev"
    type="button"
    class="btn btn-form btn-lg"
  >
    ${O.previous.toUpperCase()}
  </button>`);return e.firstChild.onclick=pe,e.firstChild.toggleAttribute("disabled",v().state===0),e},be=()=>$(html`
    <button type="submit" class="btn btn-form btn-lg">
      ${O.submit.toUpperCase()}
    </button>
  `),P=()=>{u("#app").appendChild(ye()),he(),F(),u("#requirement").onchange=F,u("form#identificationForm").onsubmit=ge};function he(){let e=v().identificationData.selectedRequirement;e&&(u("select#requirement>option[selected]").toggleAttribute("selected"),u(`select#requirement>option[value="${e}"]`).toggleAttribute("selected",!0))}function F(){let e=u("#selectedRequirement").value,n=u("#requirement").value;e!==n&&D({selectedRequirementData:{}}),u("#selectedRequirement").value=u("#requirement").value}function ge(e){e.preventDefault();const n={};u("#app").querySelectorAll("input").forEach(i=>{n[i.name]=i.value}),D({identificationData:n}),S(u("form#identificationForm"),"requirement-step")}function ye(){var n,i,a,r,t,m,c,d,l,b;const e=$(html`
    <h4 class="text-center mb-5">${f.title}</h4>
    <form id="identificationForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="idNumber" name="idNumber"
        value="${(i=(n=v().identificationData)==null?void 0:n.idNumber)!=null?i:""}""
        placeholder="${f.idNumberEx}" required />
        <label for="idNumber">${f.idNumber.toUpperCase()}</label>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="rank" name="rank"
            value="${(r=(a=v().identificationData)==null?void 0:a.rank)!=null?r:""}""
            placeholder="${g(f.rankEx)}" required />
            <label for="rank" class="form-label "
              >${g(f.rank)}</label
            >
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="category"
            name="category"
            value="${(m=(t=v().identificationData)==null?void 0:t.category)!=null?m:""}""
            placeholder="${g(f.categoryEx)}" required />
            <label for="category" class="form-label "
              >${g(f.category)}</label
            >
          </div>
        </div>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="completeName"
        name="completeName" placeholder=" "
        value="${(d=(c=v().identificationData)==null?void 0:c.completeName)!=null?d:""}"" required
        />
        <label for="completeName"
          >${g(f.completeName)}</label
        >
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="unit" name="unit"
        value="${(b=(l=v().identificationData)==null?void 0:l.unit)!=null?b:""}""
        placeholder="${g(f.unitEx)}" required />
        <label for="unit">${g(f.unit)}</label>
      </div>
      <input
        type="hidden"
        name="selectedRequirement"
        id="selectedRequirement"
        value="${v().identificationData.selectedRequirement}"
      />
      <div class="form-floating mb-3">
        <select
          id="requirement"
          name="requirement"
          class="form-select"
          required
        >
          <option selected value="">${f.requirement}</option>
          ${v().requirementsData.map((h,R)=>html`<option value=${h.value}>${h.name}</option>`).join("")}
        </select>
        <label for="requirement"
          >${g(f.requirementEx)}</label
        >
      </div>
      <div class="mt-4 row" id="formButtons"></div>
    </form>
  `);return e.querySelector("#formButtons").appendChild(fe()),e}const y=u("#app");y.addEventListener("pointerover",qe);function qe(){x(()=>import("./popper.9ecf204a.js"),[]),x(()=>import("./bootstrap.esm.min.9853106f.js"),[]),x(()=>import("./pdfGen.fc0e7559.js").then(e=>e.d),[])}async function Se(e){const{requirement:n}=await x(()=>import("./requirements.7a85abb9.js"),["assets/requirements.7a85abb9.js","assets/bootstrap.esm.min.9853106f.js"]);n({requirementName:e})}async function Ee(){const e=(await x(()=>import("./submission.5a50442d.js"),["assets/submission.5a50442d.js","assets/pdfGen.fc0e7559.js"])).default;e()}function L(){y.innerHTML=""}function xe(){L(),S(y,"change-state",{state:0}),P()}function $e(){const e=v().identificationData.selectedRequirement;L(),S(y,"change-state",{state:1}),D({currentState:1}),Se(e)}function Re(){L(),S(y,"change-state",{state:2}),Ee()}y.addEventListener("identification-step",xe);y.addEventListener("requirement-step",$e);y.addEventListener("submission-step",Re);P();export{fe as F,x as _,v as a,_e as b,$ as c,S as d,u as g,ve as p,D as s};
