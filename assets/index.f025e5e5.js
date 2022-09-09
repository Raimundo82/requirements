const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}};B();const L=e=>{let t;const i=new Set,r=(f,p)=>{const S=typeof f=="function"?f(t):f;if(S!==t){const E=t;t=p?S:Object.assign({},t,S),i.forEach(R=>R(t,E))}},o=()=>t,d={setState:r,getState:o,subscribe:f=>(i.add(f),()=>i.delete(f)),destroy:()=>i.clear()};return t=e(r,o,d),d},U=e=>e?L(e):L,D=e=>t=>{try{const i=e(t);return i instanceof Promise?i:{then(r){return D(r)(i)},catch(r){return this}}}catch(i){return{then(r){return this},catch(r){return D(r)(i)}}}},T=(e,t)=>(i,r,o)=>{let n={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:a=>a,version:0,merge:(a,v)=>({...v,...a}),...t},m=!1;const d=new Set,f=new Set;let p;try{p=n.getStorage()}catch{}if(!p)return e((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),i(...a)},r,o);const S=D(n.serialize),E=()=>{const a=n.partialize({...r()});let v;const s=S({state:a,version:n.version}).then(g=>p.setItem(n.name,g)).catch(g=>{v=g});if(v)throw v;return s},R=o.setState;o.setState=(a,v)=>{R(a,v),E()};const w=e((...a)=>{i(...a),E()},r,o);let $;const F=()=>{var a;if(!p)return;m=!1,d.forEach(s=>s(r()));const v=((a=n.onRehydrateStorage)==null?void 0:a.call(n,r()))||void 0;return D(p.getItem.bind(p))(n.name).then(s=>{if(s)return n.deserialize(s)}).then(s=>{if(s)if(typeof s.version=="number"&&s.version!==n.version){if(n.migrate)return n.migrate(s.state,s.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return s.state}).then(s=>{var g;return $=n.merge(s,(g=r())!=null?g:w),i($,!0),E()}).then(()=>{v==null||v($,void 0),m=!0,f.forEach(s=>s($))}).catch(s=>{v==null||v(void 0,s)})};return o.persist={setOptions:a=>{n={...n,...a},a.getStorage&&(p=a.getStorage())},clearStorage:()=>{p==null||p.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>F(),hasHydrated:()=>m,onHydrate:a=>(d.add(a),()=>{d.delete(a)}),onFinishHydration:a=>(f.add(a),()=>{f.delete(a)})},F(),$||w},z=T,H=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"}],j=U(z(()=>({state:0,requirementsData:H,identificationData:{isMilitar:!0},selectedRequirementData:{},submissionContent:{}}),{name:"req-marinha",partialize:e=>({requirementsData:e.requirementsData,identificationData:e.identificationData,selectedRequirementData:e.selectedRequirementData})})),J=e=>{C(t=>{t.identificationData={...t.identificationData,isMilitar:e}})},{getState:u,setState:C}=j,q=e=>document.createRange().createContextualFragment(e),c=(e,t=document)=>t.querySelector(e),G=(e,t=document)=>t.querySelectorAll(e),y=(e,t,i,r=!0)=>e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:r})),Be=()=>{let e=new Date;const t=i=>i<10?`0${i}`:i;return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},b=e=>`${e.slice(0,1).toUpperCase()}${e.slice(1,e.length)}`,K=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul{gap:0px}.nav-state>ul>li>button.btn-state:not([active]){display:none}}
`,W="identifica\xE7\xE3o",Y="requerimento",Z="submiss\xE3o",_={identification:W,requirement:Y,submission:Z};window.html=String.raw;const k=c("#app-state"),Q=()=>k.querySelector("[active]").toggleAttribute("active"),V=({detail:{state:e}})=>{C({state:e}),Q(),k.querySelectorAll("button.btn-state")[e].toggleAttribute("active")},X=()=>html`
    <style>
      ${K}
    </style>
    <div class="nav-state">
      <ul>
        <li>
          <button type="button" class="btn btn-state" active>
            ${_.identification}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${_.requirement}
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-state">
            ${_.submission}
          </button>
        </li>
      </ul>
    </div>
  `;k.appendChild(q(X()));c("#app").addEventListener("change-state",V);const ee="modulepreload",te=function(e){return"/requirements/"+e},A={},x=function(t,i,r){return!i||i.length===0?t():Promise.all(i.map(o=>{if(o=te(o),o in A)return;A[o]=!0;const n=o.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${m}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":ee,n||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),n)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ne="Dados de identifica\xE7\xE3o",ie="nii",oe="e.g. 22600",re="posto",ae="CFR",se="categoria",ce="e.g. EN-AEL",le="e.g. ASS OP",ue="nome completo",de="Unidade,  Estabelecimento ou Organismo (UEO)",me="e.g. Dire\xE7\xE3o de An\xE1lise e Gest\xE3o da Informa\xE7\xE3o",pe="Selecione o requerimento",fe="Requerimento / Declara\xE7\xE3o",ve="civil",be="militar",he="Militar",ge="Civil",l={title:ne,idNumber:ie,idNumberEx:oe,rank:re,rankEx:ae,category:se,class:"classe",classEx:ce,categoryEx:le,completeName:ue,unit:de,unitEx:me,requirement:pe,requirementEx:fe,civil:ve,militar:be,isMilitar:he,isCivil:ge},ye="retroceder",qe="avan\xE7ar",O={previous:ye,submit:qe},Se=()=>{if(u().state===1)return y(c("#app"),"identification-step");if(u().state===2)return y(c("#app"),"requirement-step")},Ee=()=>{const e=q(html`
    <div class="col-6 d-grid" id="prevButton"></div>
    <div class="col-6 d-grid" id="nextButton"></div>
  `);return e.querySelector("#prevButton").appendChild($e()),e.querySelector("#nextButton").appendChild(xe()),e},$e=()=>{const e=q(html`<button
    id="btn-prev"
    type="button"
    class="btn btn-form btn-lg"
  >
    ${O.previous.toUpperCase()}
  </button>`);return e.firstChild.onclick=Se,e.firstChild.toggleAttribute("disabled",u().state===0),e},xe=()=>q(html`
    <button type="submit" class="btn btn-form btn-lg">
      ${O.submit.toUpperCase()}
    </button>
  `),Ce=()=>html`
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
          value=${!0}
          ${u().identificationData.isMilitar?"checked":""}
        />
        <label class="form-check-label" for="isMilitar"
          >${l.militar.toUpperCase()}</label
        >
      </div>
      <div class="col-3 form-check" id="radioCivil">
        <input
          class="form-check-input"
          type="radio"
          name="categorySelection"
          id="civil"
          value=${!1}
          ${u().identificationData.isMilitar?"":"checked"}
        />
        <label class="form-check-label" for="isCivil">
          ${l.civil.toUpperCase()}
        </label>
      </div>
    </div>
  `,De=()=>{var e,t;return html`
    <div id="categoryForm" class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="category"
            name="category"
            value="${(t=(e=u().identificationData)==null?void 0:e.category)!=null?t:""}"
            placeholder="${b(l.categoryEx)}"
            required
          />
          <label for="category" class="form-label "
            >${b(l.category)}</label
          >
        </div>
      </div>
    </div>
  `},Re=()=>{var e,t,i,r;return html`
    <div id="categoryForm" class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="rank"
            name="rank"
            value="${(t=(e=u().identificationData)==null?void 0:e.rank)!=null?t:""}"
            placeholder="${b(l.rankEx)}"
            required
          />
          <label for="rank" class="form-label "
            >${b(l.rank)}</label
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
            value="${(r=(i=u().identificationData)==null?void 0:i.classEx)!=null?r:""}"
            placeholder="${b(l.classEx)}"
            required
          />
          <label for="class" class="form-label "
            >${b(l.class)}</label
          >
        </div>
      </div>
    </div>
  `};function I(){return u().identificationData.isMilitar?Re():De()}const _e=()=>{var e,t,i,r,o,n;return html`
    <form id="identificationForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="idNumber" name="idNumber"
        value="${(t=(e=u().identificationData)==null?void 0:e.idNumber)!=null?t:""}""
        placeholder="${l.idNumberEx}" required />
        <label for="idNumber">${l.idNumber.toUpperCase()}</label>
      </div>

      <div id="civilOrMilitarComponent">${I()}</div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="completeName"
        name="completeName" placeholder=" "
        value="${(r=(i=u().identificationData)==null?void 0:i.completeName)!=null?r:""}"" required
        />
        <label for="completeName"
          >${b(l.completeName)}</label
        >
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="unit" name="unit"
        value="${(n=(o=u().identificationData)==null?void 0:o.unit)!=null?n:""}""
        placeholder="${b(l.unitEx)}" required />
        <label for="unit">${b(l.unit)}</label>
      </div>
      <input
        type="hidden"
        name="selectedRequirement"
        id="selectedRequirement"
        value="${u().identificationData.selectedRequirement}"
      />
      <div class="form-floating mb-3">
        <select
          id="requirement"
          name="requirement"
          class="form-select"
          required
        >
          <option selected value="">${l.requirement}</option>
          ${u().requirementsData.map((m,d)=>html`<option value=${m.value}>${m.name}</option>`).join("")}
        </select>
        <label for="requirement"
          >${b(l.requirementEx)}</label
        >
      </div>
      <div class="mt-4 row" id="formButtons"></div>
    </form>
  `},P=()=>{c("#app").appendChild(Fe()),ke(),M(),G('#categoryRadios input[type="radio"]').forEach(e=>e.onchange=Ne),c("#requirement").onchange=M,c("form#identificationForm").onsubmit=we};function ke(){let e=u().identificationData.selectedRequirement;e&&(c("select#requirement>option[selected]").toggleAttribute("selected"),c(`select#requirement>option[value="${e}"]`).toggleAttribute("selected",!0))}function M(){let e=c("#selectedRequirement").value,t=c("#requirement").value;e!==t&&C({selectedRequirementData:{}}),c("#selectedRequirement").value=c("#requirement").value}function Ne({target:e}){J(e.value==="true"&&!0);const t=c("#app div#civilOrMilitarComponent");t.replaceChild(q(I()),t.querySelector("div#categoryForm"))}function we(e){e.preventDefault();const t={};c("#app").querySelectorAll('input:not([type="radio"])').forEach(i=>{t[i.name]=i.value}),C(i=>{i.identificationData={...i.identificationData,...t}}),y(c("form#identificationForm"),"requirement-step")}function Fe(){const e=q(html`
    <h4 class="text-center mb-4">${l.title}</h4>
    ${Ce()} ${_e()}
  `);return e.querySelector("#formButtons").appendChild(Ee()),e}const h=c("#app");h.addEventListener("pointerover",Le);function Le(){x(()=>import("./popper.9ecf204a.js"),[]),x(()=>import("./bootstrap.esm.min.9853106f.js"),[]),x(()=>import("./pdfGen.fc0e7559.js").then(e=>e.d),[])}async function Ae(e){const{requirement:t}=await x(()=>import("./requirements.bc2e6d3d.js"),["assets/requirements.bc2e6d3d.js","assets/bootstrap.esm.min.9853106f.js"]);t({requirementName:e})}async function Me(){const e=(await x(()=>import("./submission.42b98496.js"),["assets/submission.42b98496.js","assets/pdfGen.fc0e7559.js"])).default;e()}function N(){h.innerHTML=""}function Oe(){N(),y(h,"change-state",{state:0}),P()}function Ie(){const e=u().identificationData.selectedRequirement;N(),y(h,"change-state",{state:1}),C({currentState:1}),Ae(e)}function Pe(){N(),y(h,"change-state",{state:2}),Me()}h.addEventListener("identification-step",Oe);h.addEventListener("requirement-step",Ie);h.addEventListener("submission-step",Pe);P();export{Ee as F,x as _,u as a,Be as b,q as c,y as d,c as g,$e as p,C as s};
