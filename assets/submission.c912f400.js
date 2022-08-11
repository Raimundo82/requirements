import{pdfUrlData as i,pdfDownload as s,pdfOpen as e}from"./pdfGen.d75fa353.js";import{g as t,c as a,a as n}from"./index.d8e4f465.js";import"./_commonjsHelpers.b8add541.js";const d=`.submission-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}.submission-btns>button{color:#fff;background-color:#182439;border-color:#182439;opacity:.8;width:150px}.submission-btns>button:hover{opacity:1;color:#fff;background-color:#182439;border-color:#182439}div#iframeContainer{padding:20px;display:flex;flex-wrap:wrap;justify-content:center}
`,c="Abrir PDF",r="Descarregar PDF",o={open:c,download:r},l=()=>html`
    <div>
      <style>
        ${d}
      </style>
      <div class="submission-btns">
        <button type="button" class="btn" id="btnOpen">
          ${o.open}
        </button>
        <button type="button" class="btn" id="btnDownload">
          ${o.download}
        </button>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-10" id="iframeContainer"></div>
      </div>
    </div>
  `;function b(){s(n().submissionContent,n().identificationData.selectedRequirement.concat("-",n().identificationData.idNumber))}function p(){e(n().submissionContent)}const w=()=>{t("#app").appendChild(a(l())),i(t("#iframeContainer"),n().submissionContent),t("#btnOpen").onclick=p,t("#btnDownload").onclick=b};export{w as default};
