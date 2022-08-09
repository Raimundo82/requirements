const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};T();const P=e=>{let t;const r=new Set,o=(u,d)=>{const q=typeof u=="function"?u(t):u;if(q!==t){const S=t;t=d?q:Object.assign({},t,q),r.forEach(_=>_(t,S))}},i=()=>t,l={setState:o,getState:i,subscribe:u=>(r.add(u),()=>r.delete(u)),destroy:()=>r.clear()};return t=e(o,i,l),l},j=e=>e?P(e):P,x=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(o){return x(o)(r)},catch(o){return this}}}catch(r){return{then(o){return this},catch(o){return x(o)(r)}}}},k=(e,t)=>(r,o,i)=>{let n={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:a=>a,version:0,merge:(a,p)=>({...p,...a}),...t},m=!1;const l=new Set,u=new Set;let d;try{d=n.getStorage()}catch{}if(!d)return e((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),r(...a)},o,i);const q=x(n.serialize),S=()=>{const a=n.partialize({...o()});let p;const c=q({state:a,version:n.version}).then(g=>d.setItem(n.name,g)).catch(g=>{p=g});if(p)throw p;return c},_=i.setState;i.setState=(a,p)=>{_(a,p),S()};const L=e((...a)=>{r(...a),S()},o,i);let E;const A=()=>{var a;if(!d)return;m=!1,l.forEach(c=>c(o()));const p=((a=n.onRehydrateStorage)==null?void 0:a.call(n,o()))||void 0;return x(d.getItem.bind(d))(n.name).then(c=>{if(c)return n.deserialize(c)}).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==n.version){if(n.migrate)return n.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var g;return E=n.merge(c,(g=o())!=null?g:L),r(E,!0),S()}).then(()=>{p==null||p(E,void 0),m=!0,u.forEach(c=>c(E))}).catch(c=>{p==null||p(void 0,c)})};return i.persist={setOptions:a=>{n={...n,...a},a.getStorage&&(d=a.getStorage())},clearStorage:()=>{d==null||d.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>A(),hasHydrated:()=>m,onHydrate:a=>(l.add(a),()=>{l.delete(a)}),onFinishHydration:a=>(u.add(a),()=>{u.delete(a)})},A(),E||L},U=k,H=[{name:"Licen\xE7a Parental",value:"licencaParental"},{name:"Licen\xE7a Sem Renumera\xE7\xE3o",value:"licencaSemRemuneracao"}],M=j(U(()=>({state:0,requirementsData:H,identificationData:{},selectedRequirementData:{},submissionContent:{}}),{name:"req-marinha"})),{getState:b,setState:R}=M,O=e=>document.createRange().createContextualFragment(e),s=(e,t=document)=>t.querySelector(e),y=(e,t,r,o=!0)=>e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:o})),qe=()=>{let e=new Date;const t=r=>r<10?`0${r}`:r;return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},h=e=>`${e.slice(0,1).toUpperCase()}${e.slice(1,e.length)}`,z=`.nav-state{display:flex;justify-content:center;padding:25px 0}.nav-state>ul{margin:0;padding:0}.nav-state>ul{gap:10px;display:flex;flex-wrap:wrap;list-style:none}.nav-state>ul>li>button.btn-state{color:#182439;background-color:#fff;border-color:#182439;width:150px;pointer-events:none;font-size:14px;text-transform:uppercase}.nav-state>ul>li>button.btn-state[active]{color:#fff;background-color:#182439}@media (max-width: 576px){.nav-state>ul>li>button:not([active]){display:none}}.btn-icon{border:none}button.btn-icon[disabled]{cursor:not-allowed!important;pointer-events:initial}
`,B="identifica\xE7\xE3o",J="requerimento",G="submiss\xE3o",w={identification:B,requirement:J,submission:G},K="/assets/prev.fcdf48d8.svg";window.html=String.raw;const N=s("#app-state"),W=()=>N.querySelector("[active]").toggleAttribute("active"),Y=e=>{switch(e){case 0:return s("#btn-prev").toggleAttribute("disabled",!0);case 1:return s("#btn-prev").toggleAttribute("disabled",!1);case 2:return s("#btn-prev").toggleAttribute("disabled",!1)}},Z=({detail:{state:e}})=>{R({state:e}),W(),N.querySelectorAll("button.btn-state")[e].toggleAttribute("active"),Y(e)},Q=()=>{if(b().state===1)return y(s("#app"),"identification-step");if(b().state===2)return y(s("#app"),"requirement-step")},X=()=>html`
    <div class="container-fluid">
      <style>
        ${z}
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
              ${w.identification}
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-state">
              ${w.requirement}
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-state">
              ${w.submission}
            </button>
          </li>
        </ul>
      </div>
    </div>
  `;N.appendChild(O(X()));s("#app").addEventListener("change-state",Z);s("#btn-prev").onclick=Q;const V="modulepreload",ee=function(e){return"/"+e},C={},$=function(t,r,o){return!r||r.length===0?t():Promise.all(r.map(i=>{if(i=ee(i),i in C)return;C[i]=!0;const n=i.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${m}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":V,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},te=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})},ne="Dados de identifica\xE7\xE3o",ie="nii",re="Ex: 22600",oe="categoria",ae="Ex: CTEN EN-AEL",se="nome completo",ce="Unidade,  Estabelecimento ou Organismo (UEO)",le="Ex: DAGI",ue="Selecione o requerimento",de="pr\xF3ximo",f={title:ne,idNumber:ie,idNumberEx:re,category:oe,categoryEx:ae,completeName:se,unit:ce,unitEx:le,requirement:ue,submit:de},F=()=>{s("#app").appendChild(O(fe())),me(),I(),s("#requirement").onchange=I,s("form#identificationForm").onsubmit=pe};function me(){let e=b().identificationData.selectedRequirement;e&&(s("select#requirement>option[selected]").toggleAttribute("selected"),s(`select#requirement>option[value="${e}"]`).toggleAttribute("selected",!0))}function I(){let e=s("#selectedRequirement").value,t=s("#requirement").value;e!==t&&R({selectedRequirementData:{}}),s("#selectedRequirement").value=s("#requirement").value}function pe(e){e.preventDefault();const t={};s("#app").querySelectorAll("input").forEach(r=>{t[r.name]=r.value}),R({identificationData:t}),y(s("form#identificationForm"),"requirement-step")}function fe(){var e,t,r,o,i,n,m,l;return html`
    <div class="py-4">
      <div class="row justify-content-center">
        <div class="col-md-7 col-xl-6">
          <h4 class="text-center mb-3">${f.title}</h4>

          <form id="identificationForm">
            <div class="mb-3">
              <label for="idNumber" class="form-label"
                >${f.idNumber.toUpperCase()}:</label
              >
              <input type="text" class="form-control" id="idNumber"
              name="idNumber"
              value="${(t=(e=b().identificationData)==null?void 0:e.idNumber)!=null?t:""}""
              placeholder="${f.idNumberEx}" required />
            </div>
            <div class="mb-3">
              <label for="category" class="form-label "
                >${h(f.category)}:</label
              >
              <input type="text" class="form-control" id="category"
              name="category"
              value="${(o=(r=b().identificationData)==null?void 0:r.category)!=null?o:""}""
              placeholder="${h(f.categoryEx)}" required />
            </div>
            <div class="mb-3">
              <label for="completeName" class="form-label"
                >${h(f.completeName)}:</label
              >
              <input type="text" class="form-control" id="completeName"
              name="completeName"
              value="${(n=(i=b().identificationData)==null?void 0:i.completeName)!=null?n:""}""
              required />
            </div>
            <div class="mb-3">
              <label for="unit" class="form-label"
                >${h(f.unit)}:</label
              >
              <input type="text" class="form-control" id="unit" name="unit"
              value="${(l=(m=b().identificationData)==null?void 0:m.unit)!=null?l:""}""
              placeholder="${h(f.unitEx)}" required />
            </div>

            <div class="mb-3">
              <label for="selectedRequirement" class="form-label"
                >${h(f.requirement)}:</label
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
                ${b().requirementsData.map((u,d)=>html`<option value=${u.value}>
                      ${u.name}
                    </option>`).join("")}
              </select>
            </div>
            <div class="mt-4 d-grid">
              <button type="submit" class="btn" id="nextButton">
                ${f.submit.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `}const v=s("#app");async function be(e){const t=(await te(Object.assign({"./components/requirements/licencaParental/licencaParental.js":()=>$(()=>import("./licencaParental.d03ac542.js"),["assets/licencaParental.d03ac542.js","assets/licencaParentalTemplate.f4dd5f3b.js"]),"./components/requirements/licencaParental/licencaParentalTemplate.js":()=>$(()=>import("./licencaParentalTemplate.f4dd5f3b.js"),[]),"./components/requirements/licencaSemRemuneracap/licencaSemRemuneracao.js":()=>$(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./components/requirements/${e}/${e}.js`)).default;t()}async function ve(){const e=(await $(()=>import("./submission.d47a2c6a.js"),[])).default;e()}function D(){v.innerHTML=""}function ge(){D(),y(v,"change-state",{state:0}),F()}function he(){const e=b().identificationData.selectedRequirement;D(),y(v,"change-state",{state:1}),R({currentState:1}),be(e)}function ye(){D(),y(v,"change-state",{state:2}),ve(b())}v.addEventListener("identification-step",ge);v.addEventListener("requirement-step",he);v.addEventListener("submission-step",ye);F();export{b as a,qe as b,O as c,s as g,R as s};
