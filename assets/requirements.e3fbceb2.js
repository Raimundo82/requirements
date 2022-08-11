import{g as o,c,a,_ as i}from"./index.d094d18d.js";import"./bootstrap.esm.min.9853106f.js";const s=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((d,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",m={title:l};async function u(e){const t=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>i(()=>import("./licencaParental.30dc18e7.js"),["assets/licencaParental.30dc18e7.js","assets/index.d094d18d.js","assets/index.1d212bf0.css","assets/licencaParentalTemplate.586c061c.js"]),"./licencaParental/licencaParentalTemplate.js":()=>i(()=>import("./licencaParentalTemplate.586c061c.js"),["assets/licencaParentalTemplate.586c061c.js","assets/index.d094d18d.js","assets/index.1d212bf0.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>i(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;t()}const q=({requirementName:e})=>{o("div#app").appendChild(c(_())),u(e)},_=()=>html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${m.title}
      (${a().requirementsData.find(e=>e.value===a().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer"></div>
  `;export{q as requirement};
