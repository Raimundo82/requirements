import{g as i,c as b,s as c,a as o,d as v,b as n}from"./index.03f825b8.js";import{submissionContent as f}from"./licencaSemRemuneracaoTemplate.8e319bd3.js";const g="Dados do requerimento",h="Per\xEDodo de",$="Com in\xEDcio a",q="Motivo",S="Enquadramento legal nos termos da Lei Geral do Trabalho em Fun\xE7\xF5es P\xFAblicas (Lei n.\xBA 35/2014, de 20 de junho)",j="pr\xF3ximo",s={title:g,periodo:h,dateStart:$,motivo:q,article:S,submit:j},d={280:{name:"Concess\xE3o e recusa da licen\xE7a",numbers:[{1:"O empregador p\xFAblico pode conceder ao trabalhador, a pedido deste, licen\xE7a sem remunera\xE7\xE3o."},{2:"Sem preju\xEDzo do disposto em legisla\xE7\xE3o especial ou em instrumento de regulamenta\xE7\xE3o coletiva de trabalho, o trabalhador tem direito a licen\xE7as sem remunera\xE7\xE3o de longa dura\xE7\xE3o, para frequ\xEAncia de cursos de forma\xE7\xE3o ministrados sob responsabilidade de uma institui\xE7\xE3o de ensino ou de forma\xE7\xE3o profissional ou no \xE2mbito de programa espec\xEDfico aprovado por autoridade competente e executado sob o seu controlo pedag\xF3gico ou frequ\xEAncia de cursos ministrados em estabelecimento de ensino."},{3:{name:"O empregador p\xFAblico pode recusar a concess\xE3o da licen\xE7a prevista no n\xFAmero anterior nas seguintes situa\xE7\xF5es:",alineas:{a:"Quando ao trabalhador tenha sido proporcionada forma\xE7\xE3o profissional adequada ou licen\xE7a para o mesmo fim, nos \xFAltimos 24 meses;",b:"Quando a antiguidade do trabalhador no \xF3rg\xE3o ou servi\xE7o seja inferior a tr\xEAs anos;",c:"Quando o trabalhador n\xE3o tenha requerido a licen\xE7a com uma anteced\xEAncia m\xEDnima de 90 dias em rela\xE7\xE3o \xE0 data do seu in\xEDcio;",d:"Para al\xE9m das situa\xE7\xF5es referidas nas al\xEDneas anteriores, tratando-se de trabalhadores titulares de cargos dirigentes que chefiem equipas multidisciplinares ou integrados em carreiras ou categorias de grau 3 de complexidade funcional, quando n\xE3o seja poss\xEDvel a substitui\xE7\xE3o dos mesmos durante o per\xEDodo da licen\xE7a, sem preju\xEDzo s\xE9rio para o funcionamento do \xF3rg\xE3o ou servi\xE7o."}}},{4:"Para efeitos do disposto no n.\xBA 2, considera-se de longa dura\xE7\xE3o a licen\xE7a superior a 60 dias."}]}},D=()=>i("form#requirementForm").insertBefore(b(R()),i("form#requirementForm>div#formButtons")),x=()=>{i("form#requirementForm").onsubmit=F},O=()=>{D(),x()};function F(t){t.preventDefault();const a={};i("#requirementForm").querySelectorAll("input").forEach(e=>a[e.name]=e.value),c({selectedRequirementData:a}),c(f(o().identificationData,o().selectedRequirementData)),v(i("form#requirementForm"),"submission-step")}function R(){var t,a;return html`
    <div class="row">
      <div class="col-md">
        <div class="input-group">
          <div class="form-floating">
            <input
              type="number"
              min="60"
              id="periodo"
              name="periodo"
              class="form-control"
              placeholder="365 dias"
              min=${n()}
              value="${(t=o().selectedRequirementData.periodo)!=null?t:""}"
              required
            />
            <label for="periodo">${s.periodo}</label>
          </div>
          <span class="input-group-text">dias</span>
        </div>
      </div>
      <div class="col-md">
        <div class="mb-3 form-floating">
          <input
            type="date"
            id="dateStart"
            name="dateStart"
            class="form-control"
            min=${n()}
            value=${o().selectedRequirementData.dateStart||n()}
            required
          />
          <label for="dataStart">${s.dateStart}</label>
        </div>
      </div>
    </div>

    <div class="col-md">
      <div class="mb-2 form-floating">
        <input
          type="text"
          id="motivo"
          name="motivo"
          class="form-control"
          placeholder=" "
          value="${(a=o().selectedRequirementData.motivo)!=null?a:""}"
          required
        />
        <label for="motivo">${s.motivo}</label>
      </div>
    </div>
    <div class="col-md mt-4">
      <label class="form-label" for="legislation1"
        >${s.article}:</label
      >
      <div class="accordion" id="legislation1">
        ${Object.keys(d).map(e=>html`
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
                    ${e}.º - ${d[e].name}
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
                      ${d[e].numbers.map(m=>Object.entries(m).map(([l,r])=>typeof r=="object"?html`
                                <li class="list-group-item ">
                                  ${l} - ${r.name}
                                  ${Object.entries(r.alineas).map(([u,p])=>html`
                                        <p>
                                          <div>
                                            ${u}) ${p}
                                          </div>
                                        </p>
                                      `).join("")}
                                </li>
                              `:html`<li class="list-group-item">
                              <div>${l} - ${r}</div>
                            </li>`)).join("")}
                    </ul>
                  </div>
                </div>
              </div>
            `).join("")}
      </div>
    </div>
  `}export{O as default};
