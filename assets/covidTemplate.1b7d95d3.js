import{i as r,e as n,b as a}from"./index.03f825b8.js";const s=()=>r()?`Exmo. Senhor
Almirante Chefe do Estado-Maior da Armada`:`Exmo. Senhor
Vice-almirante Superintendente do Pessoal`,d=()=>r()?`Pede Deferimento

${a()}`:`Pede Deferimento

${a()}`,m=(e,o)=>({submissionContent:{header:s(),body:`${e.idNumber} ${r()||n()?`${e.rank} ${e.class} ${e.completeName}, atualmente a prestar servi\xE7o na(o)`:`${e.completeName}, do mapa de pessoal civil da Marinha, a prestar servi\xE7o na(o)`} ${e.unit} vem requerer a V. Ex\xAA., que lhe seja concedida licen\xE7a para assist\xEAncia inadi\xE1vel a ${o.cargo} a cargo menor de 12 anos, prevista no n.\xBA 1 do artigo 22.\xBA do Decreto-Lei n.\xBA 10-A/2020, de 13 de mar\xE7o (na sua reda\xE7\xE3o atual), no per\xEDodo de ${o.dateStart} a ${o.dateEnd}.`,footer:d()}});export{m as submissionContent};
