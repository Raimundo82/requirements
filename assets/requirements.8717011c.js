import{g as o,c,a as i,F as s,_ as r}from"./index.5546fd3f.js";import"./bootstrap.esm.min.9853106f.js";const m=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((f,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t)))})},u="Dados do requerimento",l={title:u};async function d(e){const t=(await m(Object.assign({"./licencaParental/licencaParental.js":()=>r(()=>import("./licencaParental.5763404f.js"),["assets/licencaParental.5763404f.js","assets/index.5546fd3f.js","assets/index.0e8e1399.css","assets/licencaParentalTemplate.285c98a7.js"]),"./licencaParental/licencaParentalTemplate.js":()=>r(()=>import("./licencaParentalTemplate.285c98a7.js"),["assets/licencaParentalTemplate.285c98a7.js","assets/index.5546fd3f.js","assets/index.0e8e1399.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>r(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;t()}async function _(){r(()=>import("./pdf.ddc62748.js"),[]),r(()=>import("./pdf.worker.entry.efbb51d6.js").then(e=>e.p),["assets/pdf.worker.entry.efbb51d6.js","assets/_commonjsHelpers.b8add541.js"])}const P=async({requirementName:e})=>{o("div#app").appendChild(p()),await d(e),_()},p=()=>{const e=c(html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${l.title}
      (${i().requirementsData.find(t=>t.value===i().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer">
      <form id="requirementForm">
        <div class="mt-4 row" id="formButtons"></div>
      </form>
    </div>
  `);return e.querySelector("#formButtons").appendChild(s()),e};export{P as requirement};
