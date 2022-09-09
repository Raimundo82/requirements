import{g as o,c,a as i,F as m,_ as r}from"./index.f025e5e5.js";import"./bootstrap.esm.min.9853106f.js";const s=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((p,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",u={title:l};async function d(e){const t=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>r(()=>import("./licencaParental.3fc53681.js"),["assets/licencaParental.3fc53681.js","assets/index.f025e5e5.js","assets/index.c269f0ac.css","assets/licencaParentalTemplate.a8d16d72.js"]),"./licencaParental/licencaParentalTemplate.js":()=>r(()=>import("./licencaParentalTemplate.a8d16d72.js"),["assets/licencaParentalTemplate.a8d16d72.js","assets/index.f025e5e5.js","assets/index.c269f0ac.css"]),"./licencaSemRemuneracao/licencaSemRemuneracao.js":()=>r(()=>import("./licencaSemRemuneracao.01b790b3.js"),["assets/licencaSemRemuneracao.01b790b3.js","assets/index.f025e5e5.js","assets/index.c269f0ac.css","assets/licencaSemRemuneracaoTemplate.a6ba9846.js"]),"./licencaSemRemuneracao/licencaSemRemuneracaoTemplate.js":()=>r(()=>import("./licencaSemRemuneracaoTemplate.a6ba9846.js"),["assets/licencaSemRemuneracaoTemplate.a6ba9846.js","assets/index.f025e5e5.js","assets/index.c269f0ac.css"])}),`./${e}/${e}.js`)).default;t()}const q=async({requirementName:e})=>{o("div#app").appendChild(_()),await d(e)},_=()=>{const e=c(html`
    <style id="requirementStyle"></style>
    <h4 class="text-center mb-5">
      ${u.title}
      (${i().requirementsData.find(t=>t.value===i().identificationData.selectedRequirement).name})
    </h4>
    <div id="requirementContainer">
      <form id="requirementForm">
        <div class="mt-4 row" id="formButtons"></div>
      </form>
    </div>
  `);return e.querySelector("#formButtons").appendChild(m()),e};export{q as requirement};
