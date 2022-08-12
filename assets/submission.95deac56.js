import{pdfUrlData as s,pdfDownload as a,pdfOpen as d}from"./pdfGen.c89dd93e.js";import{g as t,c as r,a as n}from"./index.c04097ef.js";const c=`.submission-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}.submission-btns>button,.submission-btns>button:focus{color:#fff;background-color:#182439;border-color:#182439;opacity:.8;width:150px}.submission-btns>button:hover{opacity:1;color:#fff;background-color:#182439;border-color:#182439}div#iframeContainer{padding:20px;display:flex;flex-wrap:wrap;justify-content:center}div#pdfCanvasContainer{background:#333;text-align:center;border:solid 3px;width:100%;height:500px;overflow:none}#pdfViewer{width:100%;height:100%}
`,b="Abrir PDF",l="Descarregar PDF",e={open:b,download:l},p=()=>html`
    <div>
      <style>
        ${c}
      </style>
      <div class="submission-btns">
        <button type="button" class="btn" id="btnOpen">
          ${e.open}
        </button>
        <button type="button" class="btn" id="btnDownload">
          ${e.download}
        </button>
      </div>
      <div class="mt-5">
        <div id="pdfCanvasContainer">
          <object class="pdf-viewer" id="pdfViewer"></object>
        </div>
      </div>
    </div>
  `;function f(){let o=n().identificationData.selectedRequirement.concat("-",n().identificationData.idNumber,"-",new Date().getTime());a(n().submissionContent,o)}function u(){d(n().submissionContent)}function m(o){const i=t("#pdfCanvasContainer").querySelector("object#pdfViewer");i.data=o}const g=()=>{t("#app").appendChild(r(p())),s(n().submissionContent,m),t("#btnOpen").onclick=u,t("#btnDownload").onclick=f};export{g as default};
