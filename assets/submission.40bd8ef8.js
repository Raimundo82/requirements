import{pdfUrlData as p,pdfDownload as f,pdfOpen as u}from"./pdfGen.da7d1d3d.js";import{g as t,c as b,a as i}from"./index.eb9109d8.js";import c from"./pdf.ddc62748.js";import"./pdf.worker.entry.efbb51d6.js";import"./_commonjsHelpers.b8add541.js";const m=`.submission-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}.submission-btns>button,.submission-btns>button:focus{color:#fff;background-color:#182439;border-color:#182439;opacity:.8;width:150px}.submission-btns>button:hover{opacity:1;color:#fff;background-color:#182439;border-color:#182439}div#iframeContainer{padding:20px;display:flex;flex-wrap:wrap;justify-content:center}div#pdfViewerContainer{background:#333;text-align:center;border:solid 3px;width:100%;height:570px}div#canvasContainer{overflow:auto;width:100%;height:500px}
`,v="Abrir PDF",w="Descarregar PDF",d={open:v,download:w};c.GlobalWorkerOptions.workerSrc=window.pdfjsWorker;const g=()=>html`
    <div>
      <style>
        ${m}
      </style>
      <div class="submission-btns">
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
  `;function h(){let o=i().identificationData.selectedRequirement.concat("-",i().identificationData.idNumber,"-",new Date().getTime());f(i().submissionContent,o)}function x(){u(i().submissionContent)}const n={pdf:void 0,scale:1},V=()=>{t("#app").appendChild(b(g())),p(i().submissionContent,async o=>{n.pdf=await c.getDocument(o).promise,a()}),t("#btnOpen").onclick=x,t("#btnDownload").onclick=h,t("div.icon-zoom-in").onclick=y,t("div.icon-zoom-out").onclick=D};function y(){n.scale+=n.scale<5?.25:0,a()}function D(){n.scale-=n.scale>.2?.25:0,a()}async function a(){const o=await n.pdf.getPage(1),e=t("#pdfViewer"),r=e.getContext("2d"),s=o.getViewport({scale:n.scale});e.height=s.height,e.width=s.width;const l={canvasContext:r,viewport:s};o.render(l)}export{V as default};
