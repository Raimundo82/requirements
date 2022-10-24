import{g as a,c,a as i,F as s,_ as o}from"./index.03f825b8.js";const d=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((v,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l=`div#legislationContainer [aria-hidden=true]{display:none}div#legislationContainer [aria-hidden=flase]{display:block}.text-justify{text-align:justify}div.no-bottom-border{border-top-left-radius:6px;border-top-right-radius:6px}div.no-bottom-border>li{border-bottom-color:transparent}input[type=radio]{opacity:0}button.accordion-button{background-color:transparent}button.accordion-button[active]{background-color:#e7f1ff}
`,m="Dados do requerimento",u={title:m};async function _(e){d(Object.assign({"./covid/covid.js":()=>o(()=>import("./covid.4f6a4c4f.js"),["assets/covid.4f6a4c4f.js","assets/index.03f825b8.js","assets/index.a8826bea.css","assets/covidTemplate.1b7d95d3.js"]),"./covid/covidTemplate.js":()=>o(()=>import("./covidTemplate.1b7d95d3.js"),["assets/covidTemplate.1b7d95d3.js","assets/index.03f825b8.js","assets/index.a8826bea.css"]),"./licencaParental/licencaParental.js":()=>o(()=>import("./licencaParental.17a4fe5b.js"),["assets/licencaParental.17a4fe5b.js","assets/index.03f825b8.js","assets/index.a8826bea.css","assets/licencaParentalTemplate.5cfa29da.js"]),"./licencaParental/licencaParentalTemplate.js":()=>o(()=>import("./licencaParentalTemplate.5cfa29da.js"),["assets/licencaParentalTemplate.5cfa29da.js","assets/index.03f825b8.js","assets/index.a8826bea.css"]),"./licencaSemRemuneracao/licencaSemRemuneracao.js":()=>o(()=>import("./licencaSemRemuneracao.ca82f75e.js"),["assets/licencaSemRemuneracao.ca82f75e.js","assets/index.03f825b8.js","assets/index.a8826bea.css","assets/licencaSemRemuneracaoTemplate.8e319bd3.js"]),"./licencaSemRemuneracao/licencaSemRemuneracaoTemplate.js":()=>o(()=>import("./licencaSemRemuneracaoTemplate.8e319bd3.js"),["assets/licencaSemRemuneracaoTemplate.8e319bd3.js","assets/index.03f825b8.js","assets/index.a8826bea.css"])}),`./${e}/${e}.js`).then(t=>t.default()).catch(t=>console.error(t))}const b=async({requirementName:e})=>{a("div#app").appendChild(p()),await _(e)},p=()=>{const e=c(html`
    <style id="requirementStyle">
      ${l}
    </style>
    <h4 class="text-center mb-5">
      ${u.title}
      (${i().requirementsData.find(t=>t.value===i().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer">
      <form id="requirementForm">
        <div class="mt-4 row" id="formButtons"></div>
      </form>
    </div>
  `);return e.querySelector("#formButtons").appendChild(s()),e};export{b as requirement};
