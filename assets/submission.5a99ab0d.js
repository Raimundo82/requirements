import{pdfUrlData as p,pdfDownload as u,pdfOpen as b}from"./pdfGen.da7d1d3d.js";import{g as o,a as e,c as f,p as m}from"./index.5546fd3f.js";import c from"./pdf.ddc62748.js";import"./pdf.worker.entry.efbb51d6.js";import"./_commonjsHelpers.b8add541.js";const v=`.submission-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}.submission-btns>button,.submission-btns>button:focus{color:#fff;background-color:#182439;border-color:#182439;opacity:.8;width:150px}.submission-btns>button:hover{opacity:1;color:#fff;background-color:#182439;border-color:#182439}div#iframeContainer{padding:20px;display:flex;flex-wrap:wrap;justify-content:center}div#pdfViewerContainer{background:#333;text-align:center;border:solid 3px;width:100%;height:570px}div#canvasContainer{overflow:auto;width:100%;height:500px}
`,w="Abrir PDF",g="Descarregar PDF",d={open:w,download:g};c.GlobalWorkerOptions.workerSrc=window.pdfjsWorker;const h=()=>{const n=f(html`
    <div>
      <style>
        ${v}
      </style>
      <div class="submission-btns">
        <button id="prevButton"></button>
        <button type="button" class="btn" id="btnOpen">
          ${d.open}
        </button>
        <button type="button" class="btn" id="btnDownload">
          ${d.download}
        </button>
      </div>
      <div class="mt-5">
        <div id="pdfViewerContainer">
          <div id="zoomControls" class="d-flex justify-content-center">
            <div class="icon icon-zoom-in"></div>
            <div class="icon icon-zoom-out"></div>
          </div>
          <div id="canvasContainer">
            <canvas class="pdf-viewer" id="pdfViewer"></canvas>
          </div>
        </div>
      </div>
    </div>
  `);return n.querySelector("#prevButton").replaceWith(m()),n};function x(){let n=e().identificationData.selectedRequirement.concat("-",e().identificationData.idNumber,"-",new Date().getTime());u(e().submissionContent,n)}function y(){b(e().submissionContent)}const t={pdf:void 0,scale:1},V=()=>{o("#app").appendChild(h()),p(e().submissionContent,async n=>{t.pdf=await c.getDocument(n).promise,a()}),o("#btnOpen").onclick=y,o("#btnDownload").onclick=x,o("div.icon-zoom-in").onclick=D,o("div.icon-zoom-out").onclick=C};function D(){t.scale+=t.scale<5?.25:0,a()}function C(){t.scale-=t.scale>.2?.25:0,a()}async function a(){const n=await t.pdf.getPage(1),i=o("#pdfViewer"),r=i.getContext("2d"),s=n.getViewport({scale:t.scale});i.height=s.height,i.width=s.width;const l={canvasContext:r,viewport:s};n.render(l)}export{V as default};
