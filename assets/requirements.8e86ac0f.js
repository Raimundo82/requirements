import{g as o,c,a as r,_ as t}from"./index.eb9109d8.js";import"./bootstrap.esm.min.9853106f.js";const s=(e,n)=>{const i=e[n];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((p,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+n)))})},l="Dados do requerimento",m={title:l};async function u(e){const n=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>t(()=>import("./licencaParental.acde2d36.js"),["assets/licencaParental.acde2d36.js","assets/index.eb9109d8.js","assets/index.b0875c02.css","assets/licencaParentalTemplate.c4d845b7.js"]),"./licencaParental/licencaParentalTemplate.js":()=>t(()=>import("./licencaParentalTemplate.c4d845b7.js"),["assets/licencaParentalTemplate.c4d845b7.js","assets/index.eb9109d8.js","assets/index.b0875c02.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>t(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;n()}async function _(){t(()=>import("./pdf.ddc62748.js"),[]),t(()=>import("./pdf.worker.entry.efbb51d6.js").then(e=>e.p),["assets/pdf.worker.entry.efbb51d6.js","assets/_commonjsHelpers.b8add541.js"])}const f=async({requirementName:e})=>{o("div#app").appendChild(c(d())),await u(e),_()},d=()=>html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${m.title}
      (${r().requirementsData.find(e=>e.value===r().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer"></div>
  `;export{f as requirement};
