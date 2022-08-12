import{g as o,c as s,a as i,F as c,_ as r}from"./index.0b2c41ba.js";import"./bootstrap.esm.min.9853106f.js";const m=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((p,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t)))})},l="Dados do requerimento",u={title:l};async function d(e){const t=(await m(Object.assign({"./licencaParental/licencaParental.js":()=>r(()=>import("./licencaParental.44a97ba5.js"),["assets/licencaParental.44a97ba5.js","assets/index.0b2c41ba.js","assets/index.c269f0ac.css","assets/licencaParentalTemplate.1faf7cb2.js"]),"./licencaParental/licencaParentalTemplate.js":()=>r(()=>import("./licencaParentalTemplate.1faf7cb2.js"),["assets/licencaParentalTemplate.1faf7cb2.js","assets/index.0b2c41ba.js","assets/index.c269f0ac.css"]),"./licencaSemRemuneracap/licencaSemRemuneracao.js":()=>r(()=>import("./licencaSemRemuneracao.f5fd7b8c.js"),[])}),`./${e}/${e}.js`)).default;t()}const v=async({requirementName:e})=>{o("div#app").appendChild(_()),await d(e)},_=()=>{const e=s(html`
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
  `);return e.querySelector("#formButtons").appendChild(c()),e};export{v as requirement};
