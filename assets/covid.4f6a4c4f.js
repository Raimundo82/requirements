import{g as t,c as p,s as c,a as s,d as b,b as n}from"./index.03f825b8.js";import{submissionContent as v}from"./covidTemplate.1b7d95d3.js";const f="Dados do requerimento",g="Com in\xEDcio a",$="e fim a",h="Assist\xEAncia a",q="filho(a)",S="dependente",D="Enquadramento legal nos termos do Decreto-Lei",E="Selecione o artigo",C="De acordo com o n.\xBA/al\xEDnea",F="Selecione o n.\xBA/al\xEDnea",j="pr\xF3ximo",o={title:f,dateStart:g,dateEnd:$,assistencia:h,cargo1:q,cargo2:S,article:D,articlePlaceholder:E,number:C,numberPlaceholder:F,submit:j},l={22:{name:"Faltas do trabalhador",numbers:[{1:{name:"Fora dos per\xEDodos de interrup\xE7\xF5es letivas fixados nos anexos II e IV ao Despacho n.\xBA 5754-A/2019, publicado no Di\xE1rio da Rep\xFAblica, 2.\xAA s\xE9rie, n.\xBA 115, 18 de junho, consideram-se justificadas, sem perda de direitos salvo quanto \xE0 retribui\xE7\xE3o, as faltas ao trabalho motivadas por assist\xEAncia inadi\xE1vel a filho ou outro dependente a cargo menor de 12 anos, ou, independentemente da idade, com defici\xEAncia ou doen\xE7a cr\xF3nica, decorrentes de suspens\xE3o das atividades letivas e n\xE3o letivas presenciais em estabelecimento escolar ou equipamento social de apoio \xE0 primeira inf\xE2ncia ou defici\xEAncia, quando determinado:",alineas:{a:"Por autoridade de sa\xFAde, no \xE2mbito do exerc\xEDcio das compet\xEAncias previstas no artigo 5.\xBA do Decreto-Lei n.\xBA 82/2009, de 2 de abril, na sua reda\xE7\xE3o atual;",b:"Pelo Governo."}}},{2:"Para efeitos do disposto no n\xFAmero anterior, o trabalhador comunica a aus\xEAncia nos termos do artigo 253.\xBA do C\xF3digo do Trabalho, aprovado pela Lei n.\xBA 7/2009, de 12 de fevereiro, na sua reda\xE7\xE3o atual."}]}},x=()=>t("form#requirementForm").insertBefore(p(R()),t("form#requirementForm>div#formButtons")),P=()=>{t("form#requirementForm").onsubmit=A},O=()=>{x(),P()};function A(i){i.preventDefault();const e={};t("#requirementForm").querySelectorAll("input").forEach(a=>e[a.name]=a.value),t("#requirementForm").querySelectorAll("select#selectCargo").forEach(a=>e[a.name]=a.value),c({selectedRequirementData:e}),c(v(s().identificationData,s().selectedRequirementData)),b(t("form#requirementForm"),"submission-step")}function R(){var i;return html`
    <div class="row">
      <div class="col-md">
        <div class="mb-3 form-floating">
          <input
            type="date"
            id="dateStart"
            name="dateStart"
            class="form-control"
            min=${n()}
            value=${s().selectedRequirementData.dateStart||n()}
            required
          />
          <label for="dataStart">${o.dateStart}</label>
        </div>
      </div>
      <div class="col-md">
        <div class="mb-2 form-floating">
          <input
            type="date"
            id="dateEnd"
            name="dateEnd"
            class="form-control"
            placeholder=" "
            min=${n()}
            value="${(i=s().selectedRequirementData.dateEnd)!=null?i:""}"
            required
          />
          <label for="dateEnd" class="form-label"
            >${o.dateEnd}</label
          >
        </div>
      </div>
    </div> 
    <div class="form-floating mt-2"> 
    <label class="form-label" for="selectCargo"></label>    
    <select id="selectCargo" name="cargo" class="form-select pt-2" aria-label="Floating label select example">
      <option selected>Selecionar menor conforme aplicável</option>
      <option value=${o.cargo1}>${o.cargo1}</option>
      <option value=${o.cargo2}>${o.cargo2}</option>     
    </select> 
    </div> 
    <label class="form-label pt-3" for="legislationCovid">${o.article}:</label>
    <div class="accordion" id="legislationCovid">
        ${Object.keys(l).map(e=>html`
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${e}">
                  <button
                    id="button-${e}"
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#article-${e}"
                    aria-expanded="false"
                    aria-controls="collapse-${e}"
                  >
                    ${e}.º - ${l[e].name}
                  </button>
                </h2>
                <div
                  id="article-${e}"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading-${e}"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul class="list-group">
                      ${l[e].numbers.map(a=>Object.entries(a).map(([d,r])=>typeof r=="object"?html`
                                <li class="list-group-item ">
                                  ${d} - ${r.name}
                                  ${Object.entries(r.alineas).map(([m,u])=>html`
                                        <p>
                                          <div>
                                            ${m}) ${u}
                                          </div>
                                        </p>
                                      `).join("")}
                                </li>
                              `:html`<li class="list-group-item">
                              <div>${d} - ${r}</div>
                            </li>`)).join("")}
                    </ul>
                  </div>
                </div>
              </div>
            `).join("")}
      </div>
    </div>
  `}export{O as default};
