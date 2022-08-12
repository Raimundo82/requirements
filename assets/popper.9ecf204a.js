function W(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function G(t){var e=W(t).Element;return t instanceof e||t instanceof Element}function S(t){var e=W(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ae(t){if(typeof ShadowRoot>"u")return!1;var e=W(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var z=Math.max,ge=Math.min,J=Math.round;function K(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,a=1;if(S(t)&&e){var o=t.offsetHeight,i=t.offsetWidth;i>0&&(n=J(r.width)/i||1),o>0&&(a=J(r.height)/o||1)}return{width:r.width/n,height:r.height/a,top:r.top/a,right:r.right/n,bottom:r.bottom/a,left:r.left/n,x:r.left/n,y:r.top/a}}function Pe(t){var e=W(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function dt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ht(t){return t===W(t)||!S(t)?Pe(t):dt(t)}function F(t){return t?(t.nodeName||"").toLowerCase():null}function q(t){return((G(t)?t.ownerDocument:t.document)||window.document).documentElement}function De(t){return K(q(t)).left+Pe(t).scrollLeft}function N(t){return W(t).getComputedStyle(t)}function je(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function mt(t){var e=t.getBoundingClientRect(),r=J(e.width)/t.offsetWidth||1,n=J(e.height)/t.offsetHeight||1;return r!==1||n!==1}function gt(t,e,r){r===void 0&&(r=!1);var n=S(e),a=S(e)&&mt(e),o=q(e),i=K(t,a),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(n||!n&&!r)&&((F(e)!=="body"||je(o))&&(s=ht(e)),S(e)?(f=K(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):o&&(f.x=De(o))),{x:i.left+s.scrollLeft-f.x,y:i.top+s.scrollTop-f.y,width:i.width,height:i.height}}function Re(t){var e=K(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function ye(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Ae(t)?t.host:null)||q(t)}function Je(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:S(t)&&je(t)?t:Je(ye(t))}function ae(t,e){var r;e===void 0&&(e=[]);var n=Je(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=W(n),i=a?[o].concat(o.visualViewport||[],je(n)?n:[]):n,s=e.concat(i);return a?s:s.concat(ae(ye(i)))}function yt(t){return["table","td","th"].indexOf(F(t))>=0}function Ne(t){return!S(t)||N(t).position==="fixed"?null:t.offsetParent}function bt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&S(t)){var n=N(t);if(n.position==="fixed")return null}var a=ye(t);for(Ae(a)&&(a=a.host);S(a)&&["html","body"].indexOf(F(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function fe(t){for(var e=W(t),r=Ne(t);r&&yt(r)&&N(r).position==="static";)r=Ne(r);return r&&(F(r)==="html"||F(r)==="body"&&N(r).position==="static")?e:r||bt(t)||e}var R="top",k="bottom",T="right",$="left",$e="auto",pe=[R,k,T,$],Q="start",ie="end",wt="clippingParents",Ke="viewport",ne="popper",xt="reference",Ve=pe.reduce(function(t,e){return t.concat([e+"-"+Q,e+"-"+ie])},[]),Qe=[].concat(pe,[$e]).reduce(function(t,e){return t.concat([e,e+"-"+Q,e+"-"+ie])},[]),Ot="beforeRead",Et="read",At="afterRead",Pt="beforeMain",Dt="main",jt="afterMain",Rt="beforeWrite",$t="write",Bt="afterWrite",Ct=[Ot,Et,At,Pt,Dt,jt,Rt,$t,Bt];function St(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!r.has(s)){var f=e.get(s);f&&a(f)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function kt(t){var e=St(t);return Ct.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Tt(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function H(t){return t.split("-")[0]}function Mt(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function Lt(t){var e=W(t),r=q(t),n=e.visualViewport,a=r.clientWidth,o=r.clientHeight,i=0,s=0;return n&&(a=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,s=n.offsetTop)),{width:a,height:o,x:i+De(t),y:s}}function Wt(t){var e,r=q(t),n=Pe(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=z(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=z(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+De(t),f=-n.scrollTop;return N(a||r).direction==="rtl"&&(s+=z(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:s,y:f}}function Ze(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ae(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ee(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ht(t){var e=K(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function qe(t,e){return e===Ke?Ee(Lt(t)):G(e)?Ht(e):Ee(Wt(q(t)))}function Ft(t){var e=ae(ye(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&S(t)?fe(t):t;return G(n)?e.filter(function(a){return G(a)&&Ze(a,n)&&F(a)!=="body"}):[]}function Nt(t,e,r){var n=e==="clippingParents"?Ft(t):[].concat(e),a=[].concat(n,[r]),o=a[0],i=a.reduce(function(s,f){var c=qe(t,f);return s.top=z(c.top,s.top),s.right=ge(c.right,s.right),s.bottom=ge(c.bottom,s.bottom),s.left=z(c.left,s.left),s},qe(t,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Z(t){return t.split("-")[1]}function Be(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function _e(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?Z(n):null,i=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,f;switch(a){case R:f={x:i,y:e.y-r.height};break;case k:f={x:i,y:e.y+e.height};break;case T:f={x:e.x+e.width,y:s};break;case $:f={x:e.x-r.width,y:s};break;default:f={x:e.x,y:e.y}}var c=a?Be(a):null;if(c!=null){var p=c==="y"?"height":"width";switch(o){case Q:f[c]=f[c]-(e[p]/2-r[p]/2);break;case ie:f[c]=f[c]+(e[p]/2-r[p]/2);break}}return f}function et(){return{top:0,right:0,bottom:0,left:0}}function tt(t){return Object.assign({},et(),t)}function rt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function se(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.boundary,i=o===void 0?wt:o,s=r.rootBoundary,f=s===void 0?Ke:s,c=r.elementContext,p=c===void 0?ne:c,m=r.altBoundary,E=m===void 0?!1:m,u=r.padding,g=u===void 0?0:u,v=tt(typeof g!="number"?g:rt(g,pe)),d=p===ne?xt:ne,w=t.rects.popper,x=t.elements[E?d:p],O=Nt(G(x)?x:x.contextElement||q(t.elements.popper),i,f),l=K(t.elements.reference),y=_e({reference:l,element:w,strategy:"absolute",placement:a}),h=Ee(Object.assign({},w,y)),b=p===ne?h:l,A={top:O.top-b.top+v.top,bottom:b.bottom-O.bottom+v.bottom,left:O.left-b.left+v.left,right:b.right-O.right+v.right},j=t.modifiersData.offset;if(p===ne&&j){var P=j[a];Object.keys(A).forEach(function(D){var M=[T,k].indexOf(D)>=0?1:-1,B=[R,k].indexOf(D)>=0?"y":"x";A[D]+=P[B]*M})}return A}var Xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ie(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function nt(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?Xe:a;return function(s,f,c){c===void 0&&(c=o);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xe,o),modifiersData:{},elements:{reference:s,popper:f},attributes:{},styles:{}},m=[],E=!1,u={state:p,setOptions:function(w){var x=typeof w=="function"?w(p.options):w;v(),p.options=Object.assign({},o,p.options,x),p.scrollParents={reference:G(s)?ae(s):s.contextElement?ae(s.contextElement):[],popper:ae(f)};var O=kt(Mt([].concat(n,p.options.modifiers)));return p.orderedModifiers=O.filter(function(l){return l.enabled}),g(),u.update()},forceUpdate:function(){if(!E){var w=p.elements,x=w.reference,O=w.popper;if(!!Ie(x,O)){p.rects={reference:gt(x,fe(O),p.options.strategy==="fixed"),popper:Re(O)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(P){return p.modifiersData[P.name]=Object.assign({},P.data)});for(var l=0;l<p.orderedModifiers.length;l++){if(p.reset===!0){p.reset=!1,l=-1;continue}var y=p.orderedModifiers[l],h=y.fn,b=y.options,A=b===void 0?{}:b,j=y.name;typeof h=="function"&&(p=h({state:p,options:A,name:j,instance:u})||p)}}}},update:Tt(function(){return new Promise(function(d){u.forceUpdate(),d(p)})}),destroy:function(){v(),E=!0}};if(!Ie(s,f))return u;u.setOptions(c).then(function(d){!E&&c.onFirstUpdate&&c.onFirstUpdate(d)});function g(){p.orderedModifiers.forEach(function(d){var w=d.name,x=d.options,O=x===void 0?{}:x,l=d.effect;if(typeof l=="function"){var y=l({state:p,name:w,instance:u,options:O}),h=function(){};m.push(y||h)}})}function v(){m.forEach(function(d){return d()}),m=[]}return u}}var he={passive:!0};function Vt(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,i=n.resize,s=i===void 0?!0:i,f=W(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach(function(p){p.addEventListener("scroll",r.update,he)}),s&&f.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(p){p.removeEventListener("scroll",r.update,he)}),s&&f.removeEventListener("resize",r.update,he)}}const at={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vt,data:{}};function qt(t){var e=t.state,r=t.name;e.modifiersData[r]=_e({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const ot={name:"popperOffsets",enabled:!0,phase:"read",fn:qt,data:{}};var Xt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function It(t){var e=t.x,r=t.y,n=window,a=n.devicePixelRatio||1;return{x:J(e*a)/a||0,y:J(r*a)/a||0}}function Ye(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,i=t.offsets,s=t.position,f=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,m=t.isFixed,E=i.x,u=E===void 0?0:E,g=i.y,v=g===void 0?0:g,d=typeof p=="function"?p({x:u,y:v}):{x:u,y:v};u=d.x,v=d.y;var w=i.hasOwnProperty("x"),x=i.hasOwnProperty("y"),O=$,l=R,y=window;if(c){var h=fe(r),b="clientHeight",A="clientWidth";if(h===W(r)&&(h=q(r),N(h).position!=="static"&&s==="absolute"&&(b="scrollHeight",A="scrollWidth")),h=h,a===R||(a===$||a===T)&&o===ie){l=k;var j=m&&h===y&&y.visualViewport?y.visualViewport.height:h[b];v-=j-n.height,v*=f?1:-1}if(a===$||(a===R||a===k)&&o===ie){O=T;var P=m&&h===y&&y.visualViewport?y.visualViewport.width:h[A];u-=P-n.width,u*=f?1:-1}}var D=Object.assign({position:s},c&&Xt),M=p===!0?It({x:u,y:v}):{x:u,y:v};if(u=M.x,v=M.y,f){var B;return Object.assign({},D,(B={},B[l]=x?"0":"",B[O]=w?"0":"",B.transform=(y.devicePixelRatio||1)<=1?"translate("+u+"px, "+v+"px)":"translate3d("+u+"px, "+v+"px, 0)",B))}return Object.assign({},D,(e={},e[l]=x?v+"px":"",e[O]=w?u+"px":"",e.transform="",e))}function Yt(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,i=o===void 0?!0:o,s=r.roundOffsets,f=s===void 0?!0:s,c={placement:H(e.placement),variation:Z(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ye(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:i,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ye(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const it={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yt,data:{}};function zt(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!S(o)||!F(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(i){var s=a[i];s===!1?o.removeAttribute(i):o.setAttribute(i,s===!0?"":s)}))})}function Ut(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=i.reduce(function(f,c){return f[c]="",f},{});!S(a)||!F(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(f){a.removeAttribute(f)}))})}}const st={name:"applyStyles",enabled:!0,phase:"write",fn:zt,effect:Ut,requires:["computeStyles"]};function Gt(t,e,r){var n=H(t),a=[$,R].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[$,T].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function Jt(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,i=Qe.reduce(function(p,m){return p[m]=Gt(m,e.rects,o),p},{}),s=i[e.placement],f=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=i}const Kt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jt};var Qt={left:"right",right:"left",bottom:"top",top:"bottom"};function me(t){return t.replace(/left|right|bottom|top/g,function(e){return Qt[e]})}var Zt={start:"end",end:"start"};function ze(t){return t.replace(/start|end/g,function(e){return Zt[e]})}function _t(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,c=f===void 0?Qe:f,p=Z(n),m=p?s?Ve:Ve.filter(function(g){return Z(g)===p}):pe,E=m.filter(function(g){return c.indexOf(g)>=0});E.length===0&&(E=m);var u=E.reduce(function(g,v){return g[v]=se(t,{placement:v,boundary:a,rootBoundary:o,padding:i})[H(v)],g},{});return Object.keys(u).sort(function(g,v){return u[g]-u[v]})}function er(t){if(H(t)===$e)return[];var e=me(t);return[ze(t),e,ze(e)]}function tr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!0:i,f=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,E=r.altBoundary,u=r.flipVariations,g=u===void 0?!0:u,v=r.allowedAutoPlacements,d=e.options.placement,w=H(d),x=w===d,O=f||(x||!g?[me(d)]:er(d)),l=[d].concat(O).reduce(function(U,V){return U.concat(H(V)===$e?_t(e,{placement:V,boundary:p,rootBoundary:m,padding:c,flipVariations:g,allowedAutoPlacements:v}):V)},[]),y=e.rects.reference,h=e.rects.popper,b=new Map,A=!0,j=l[0],P=0;P<l.length;P++){var D=l[P],M=H(D),B=Z(D)===Q,_=[R,k].indexOf(M)>=0,ee=_?"width":"height",C=se(e,{placement:D,boundary:p,rootBoundary:m,altBoundary:E,padding:c}),L=_?B?T:$:B?k:R;y[ee]>h[ee]&&(L=me(L));var ce=me(L),X=[];if(o&&X.push(C[M]<=0),s&&X.push(C[L]<=0,C[ce]<=0),X.every(function(U){return U})){j=D,A=!1;break}b.set(D,X)}if(A)for(var ue=g?3:1,be=function(V){var re=l.find(function(ve){var I=b.get(ve);if(I)return I.slice(0,V).every(function(we){return we})});if(re)return j=re,"break"},te=ue;te>0;te--){var le=be(te);if(le==="break")break}e.placement!==j&&(e.modifiersData[n]._skip=!0,e.placement=j,e.reset=!0)}}const rr={name:"flip",enabled:!0,phase:"main",fn:tr,requiresIfExists:["offset"],data:{_skip:!1}};function nr(t){return t==="x"?"y":"x"}function oe(t,e,r){return z(t,ge(e,r))}function ar(t,e,r){var n=oe(t,e,r);return n>r?r:n}function or(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!1:i,f=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,E=r.tether,u=E===void 0?!0:E,g=r.tetherOffset,v=g===void 0?0:g,d=se(e,{boundary:f,rootBoundary:c,padding:m,altBoundary:p}),w=H(e.placement),x=Z(e.placement),O=!x,l=Be(w),y=nr(l),h=e.modifiersData.popperOffsets,b=e.rects.reference,A=e.rects.popper,j=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,P=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(!!h){if(o){var B,_=l==="y"?R:$,ee=l==="y"?k:T,C=l==="y"?"height":"width",L=h[l],ce=L+d[_],X=L-d[ee],ue=u?-A[C]/2:0,be=x===Q?b[C]:A[C],te=x===Q?-A[C]:-b[C],le=e.elements.arrow,U=u&&le?Re(le):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:et(),re=V[_],ve=V[ee],I=oe(0,b[C],U[C]),we=O?b[C]/2-ue-I-re-P.mainAxis:be-I-re-P.mainAxis,ft=O?-b[C]/2+ue+I+ve+P.mainAxis:te+I+ve+P.mainAxis,xe=e.elements.arrow&&fe(e.elements.arrow),pt=xe?l==="y"?xe.clientTop||0:xe.clientLeft||0:0,Ce=(B=D==null?void 0:D[l])!=null?B:0,ct=L+we-Ce-pt,ut=L+ft-Ce,Se=oe(u?ge(ce,ct):ce,L,u?z(X,ut):X);h[l]=Se,M[l]=Se-L}if(s){var ke,lt=l==="x"?R:$,vt=l==="x"?k:T,Y=h[y],de=y==="y"?"height":"width",Te=Y+d[lt],Me=Y-d[vt],Oe=[R,$].indexOf(w)!==-1,Le=(ke=D==null?void 0:D[y])!=null?ke:0,We=Oe?Te:Y-b[de]-A[de]-Le+P.altAxis,He=Oe?Y+b[de]+A[de]-Le-P.altAxis:Me,Fe=u&&Oe?ar(We,Y,He):oe(u?We:Te,Y,u?He:Me);h[y]=Fe,M[y]=Fe-Y}e.modifiersData[n]=M}}const ir={name:"preventOverflow",enabled:!0,phase:"main",fn:or,requiresIfExists:["offset"]};var sr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,tt(typeof e!="number"?e:rt(e,pe))};function fr(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,i=r.modifiersData.popperOffsets,s=H(r.placement),f=Be(s),c=[$,T].indexOf(s)>=0,p=c?"height":"width";if(!(!o||!i)){var m=sr(a.padding,r),E=Re(o),u=f==="y"?R:$,g=f==="y"?k:T,v=r.rects.reference[p]+r.rects.reference[f]-i[f]-r.rects.popper[p],d=i[f]-r.rects.reference[f],w=fe(o),x=w?f==="y"?w.clientHeight||0:w.clientWidth||0:0,O=v/2-d/2,l=m[u],y=x-E[p]-m[g],h=x/2-E[p]/2+O,b=oe(l,h,y),A=f;r.modifiersData[n]=(e={},e[A]=b,e.centerOffset=b-h,e)}}function pr(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||!Ze(e.elements.popper,a)||(e.elements.arrow=a))}const cr={name:"arrow",enabled:!0,phase:"main",fn:fr,effect:pr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ue(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Ge(t){return[R,T,k,$].some(function(e){return t[e]>=0})}function ur(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,i=se(e,{elementContext:"reference"}),s=se(e,{altBoundary:!0}),f=Ue(i,n),c=Ue(s,a,o),p=Ge(f),m=Ge(c);e.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ur};var vr=[at,ot,it,st],hr=nt({defaultModifiers:vr}),dr=[at,ot,it,st,Kt,rr,ir,cr,lr],mr=nt({defaultModifiers:dr});export{st as applyStyles,cr as arrow,it as computeStyles,mr as createPopper,hr as createPopperLite,dr as defaultModifiers,se as detectOverflow,at as eventListeners,rr as flip,lr as hide,Kt as offset,nt as popperGenerator,ot as popperOffsets,ir as preventOverflow};
