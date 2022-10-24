import{i as n,e as a,b as r,a as e}from"./index.03f825b8.js";const $=()=>n()||a()?`Exmo. Senhor
Almirante Chefe do Estado-Maior da Armada`:`Exmo. Senhor
Vice-almirante Superintendente do Pessoal`,p=()=>n()||a()?`Pede Deferimento

${r()}`:`Pede Deferimento

${r()}`,u=()=>a()?`, e ${e().selectedRequirementData.decretoLei} ${e().selectedRequirementData.vinculo?"do Decreto-Lei n.\xBA 89/2009, de 9 de Abril de 2009":"do Decreto-Lei n.\xBA 91/2009, de 9 de Abril de 2009"}`:".",g=()=>n()||a()?`${e().identificationData.rank} ${e().identificationData.class} ${e().identificationData.completeName}, atualmente a prestar servi\xE7o em`:`${e().identificationData.completeName}, do mapa de pessoal civil da Marinha, a prestar servi\xE7o em`,f=(i,t)=>{let d=t.legislation.reduce((s,o,l,m)=>{let c=l===m.length-2?" e":",";return`${s}${o.alinea?`da al\xEDnea ${o.alinea})`:""} do n.\xBA ${o.num} do artigo ${o.article}.\xBA${c} `},"");return{submissionContent:{header:$(),body:`${i.idNumber} ${g()} ${i.unit} vem requerer a V. Ex\xAA., que lhe seja concedida ${t.licence.toLowerCase()} no per\xEDodo de ${t.dateStart} a ${t.dateEnd} nos termos ${d} do C\xF3digo do Trabalho, aprovado pela Lei n.\xBA 7/2009, de 12 de fevereiro, alterado pelo artigo 2.\xBA da Lei n.\xBA 120/2015 de 1 de setembro${u()}
      `,footer:p()}}};export{f as submissionContent};
