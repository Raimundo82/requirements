import{g as o,c,a,_ as i}from"./index.a22c3c37.js";import"./bootstrap.esm.min.9853106f.js";const s=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((_,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",m={title:l};async function u(e){const t=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>i(()=>import("./licencaParental.965e70a5.js"),["assets/licencaParental.965e70a5.js","assets/index.a22c3c37.js","assets/index.b0875c02.css","assets/licencaParentalTemplate.dfa9f512.js"]),"./licencaParental/licencaParentalTemplate.js":()=>i(()=>import("./licencaParentalTemplate.dfa9f512.js"),["assets/licencaParentalTemplate.dfa9f512.js","assets/index.a22c3c37.js","assets/index.b0875c02.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>i(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;t()}const q=({requirementName:e})=>{o("div#app").appendChild(c(d())),u(e)},d=()=>html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${m.title}
      (${a().requirementsData.find(e=>e.value===a().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer"></div>
  `;export{q as requirement};
