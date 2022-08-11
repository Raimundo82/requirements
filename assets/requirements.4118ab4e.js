import{g as o,c,a,_ as i}from"./index.d8e4f465.js";const s=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((_,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",m={title:l};async function u(e){const t=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>i(()=>import("./licencaParental.41099342.js"),["assets/licencaParental.41099342.js","assets/index.d8e4f465.js","assets/index.db96860a.css","assets/licencaParentalTemplate.74910a3a.js","assets/bootstrap.esm.min.9853106f.js"]),"./licencaParental/licencaParentalTemplate.js":()=>i(()=>import("./licencaParentalTemplate.74910a3a.js"),["assets/licencaParentalTemplate.74910a3a.js","assets/index.d8e4f465.js","assets/index.db96860a.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>i(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;t()}const v=({requirementName:e})=>{o("div#app").appendChild(c(d())),u(e)},d=()=>html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${m.title}
      (${a().requirementsData.find(e=>e.value===a().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer"></div>
  `;export{v as requirement};
