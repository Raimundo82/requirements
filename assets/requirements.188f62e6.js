import{g as o,c,a as i,F as m,_ as r}from"./index.6e10d7c4.js";import"./bootstrap.esm.min.9853106f.js";const s=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((p,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",u={title:l};async function d(e){const t=(await s(Object.assign({"./licencaParental/licencaParental.js":()=>r(()=>import("./licencaParental.b994abd3.js"),["assets/licencaParental.b994abd3.js","assets/index.6e10d7c4.js","assets/index.c269f0ac.css","assets/licencaParentalTemplate.c839da7e.js"]),"./licencaParental/licencaParentalTemplate.js":()=>r(()=>import("./licencaParentalTemplate.c839da7e.js"),["assets/licencaParentalTemplate.c839da7e.js","assets/index.6e10d7c4.js","assets/index.c269f0ac.css"]),"./licencaSemRemuneracao/licencaSemRemuneracao.js":()=>r(()=>import("./licencaSemRemuneracao.8986491c.js"),["assets/licencaSemRemuneracao.8986491c.js","assets/index.6e10d7c4.js","assets/index.c269f0ac.css","assets/licencaSemRemuneracaoTemplate.291a2824.js"]),"./licencaSemRemuneracao/licencaSemRemuneracaoTemplate.js":()=>r(()=>import("./licencaSemRemuneracaoTemplate.291a2824.js"),["assets/licencaSemRemuneracaoTemplate.291a2824.js","assets/index.6e10d7c4.js","assets/index.c269f0ac.css"])}),`./${e}/${e}.js`)).default;t()}const q=async({requirementName:e})=>{o("div#app").appendChild(_()),await d(e)},_=()=>{const e=c(html`
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
