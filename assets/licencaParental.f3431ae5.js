import{g as a,c as m,a as n,s as d,b as c}from"./index.9bf6a4c8.js";import{submissionContent as b}from"./licencaParentalTemplate.67c82079.js";const p=`div#legislationContainer [aria-hidden=true]{display:none}div#legislationContainer [aria-hidden=flase]{display:block}
`,v="Dados do requerimento",f="Com in\xEDcio a",g="e fim a",h="Nos termos do artigo do C\xF3digo do Trabalho",$="Selecione o artigo",q="De acordo com o n.\xBA/al\xEDnea",S="Selecione o n.\xBA/al\xEDnea",y="pr\xF3ximo",l={title:v,dateStart:f,dateEnd:g,article:h,articlePlaceholder:$,number:q,numberPlaceholder:S,submit:y},r={40:{name:"Licen\xE7a parental inicial",numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},41:{name:"Per\xEDodos de licen\xE7a parental exclusiva da m\xE3e",numbers:[1,2,3,4]},42:{name:"Licen\xE7a parental inicial a gozar por um progenitor em caso de impossibilidade do outro",numbers:["1 / a","1 / b",2,3,4,5,6]},43:{name:"Licen\xE7a parental exclusiva do pai",numbers:[1,2,3,4,5]},44:{name:"Licen\xE7a por adop\xE7\xE3o",numbers:[1,2,3,4,5,6,7,8,9,10,11]},51:{name:"Licen\xE7a parental complementar",numbers:["1 / a","1 / b","1 / c","1 / d",2,3,4,5,6]},52:{name:"Licen\xE7a para assist\xEAncia a filho",numbers:[1,2,3,4,5,"6 / a","6 / b","6 / c","6 / d",7,8,9]},53:{name:"Licen\xE7a para assist\xEAncia a filho com defici\xEAncia, doen\xE7a cr\xF3nica ou doen\xE7a oncol\xF3gica",numbers:[1,2,3,4,5,6]}},L=()=>{a("#app").appendChild(m(P())),D(),a("form#requirementForm").onsubmit=E,a("select#article").onchange=C};function D(){var i;let e=n().selectedRequirementData.article,t=n().selectedRequirementData.number;e&&(a("select#article>option[selected]").toggleAttribute("selected"),a(`select#article>option[value="${e}"]`).toggleAttribute("selected",!0),s(!1),u(e)),t&&(a("select#number>option[selected]").toggleAttribute("selected"),(i=a(`select#number>option[value="${t}"]`))==null||i.toggleAttribute("selected",!0))}function E(e){e.preventDefault();const t={};a("#app").querySelectorAll("input").forEach(o=>{t[o.name]=o.value}),a("#app").querySelectorAll("select").forEach(o=>{t[o.name]=o.value}),t.licence=r[t.article].name,d({selectedRequirementData:t}),d(b(n().identificationData,n().selectedRequirementData));const i=new CustomEvent("submission-step",{bubbles:!0});a("form#requirementForm").dispatchEvent(i)}function s(e){a("div#legislationContainer [aria-hidden]").ariaHidden=e}function u(e){a("select#article").querySelectorAll("option[ref]").forEach(i=>i.remove());const t=Object.values(r[e].numbers).map(i=>html`<option ref="${e}" value="${i}">${i}</option>`).join("");a("select#number").appendChild(m(t))}function C(e){a("select#number").value="",e.target.value||s(!0),u(e.target.value),s(!1)}function P(){var e;return html`
    <div class="py-4">
      <style>
        ${p}
      </style>
      <div class="row justify-content-center">
        <div class="col-md-7">
          <h4 class="text-center mb-3">
            ${l.title}
            (${n().requirementsData.find(t=>t.value===n().identificationData.selectedRequirement).name})
          </h4>
          <form id="requirementForm">
            <div class="row">
              <div class="mb-3 col">
                <label for="dataStart" class="form-label"
                  >${l.dateStart}:</label
                >
                <input
                  type="date"
                  id="dateStart"
                  name="dateStart"
                  class="form-control"
                  min=${c()}
                  value=${n().selectedRequirementData.dateStart||c()}
                  required
                />
              </div>
              <div class="mb-2 col">
                <label for="dateEnd" class="form-label"
                  >${l.dateEnd}:</label
                >
                <input
                  type="date"
                  id="dateEnd"
                  name="dateEnd"
                  class="form-control"
                  placeholder="dd-mm-yyyy"
                  min=${c()}
                  value="${(e=n().selectedRequirementData.dateEnd)!=null?e:""}"
                  required
                />
              </div>
            </div>
            <div id="legislationContainer">
              <div class="mb-3">
                <label for="legislation">${l.article}:</label>
                <select
                  type="select"
                  id="article"
                  name="article"
                  class="form-select"
                  value="${n().selectedRequirementData.article||""}"
                  required
                >
                  <option selected value="">
                    ${l.articlePlaceholder}
                  </option>
                  ${Object.keys(r).map(t=>html`<option value="${t}">
                        ${t}.º - ${r[t].name}
                      </option>`).join("")}
                </select>
              </div>
              <div aria-hidden="true" class="mb-3">
                <label for="legislation">${l.number}</label>
                <select
                  type="select"
                  id="number"
                  name="number"
                  value="${n().selectedRequirementData.number||""}"
                  class="form-select"
                  required
                >
                  <option selected value="">
                    ${l.numberPlaceholder}
                  </option>
                </select>
              </div>
            </div>
            <div class="mt-4 d-grid">
              <button type="submit" class="btn" id="nextButton">
                ${l.submit.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `}export{L as default};
