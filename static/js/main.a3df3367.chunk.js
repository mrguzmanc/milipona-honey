(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(42)},33:function(e,t,a){e.exports=a.p+"static/media/bee-logo.f423a142.png"},34:function(e,t,a){e.exports=a.p+"static/media/honey-general.adec8209.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/miel-artesanal1.9cdcbeb1.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/nacional1.04c4d8a9.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/healthy1.3e84c6c0.jpg"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(20),n=a.n(r),s=a(11),o=a(7),c=a(6),m=a(2),d=a(10),u=a(3),v=a.n(u),p=a(16),b=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),n=r[0],s=r[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[n]),l.a.createElement(l.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(1),E=a.n(f),g=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,s=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(i.useState)(!1),u=Object(d.a)(c,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:r,height:n,alt:s,onLoad:function(){p(!0)}}))};g.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var N=g,O=function(e){var t=e.className,i=Object(m.a)(e,["className"]),r=E()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:r}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(c.b,{to:"/"},l.a.createElement(N,{src:a(33),alt:"Open",width:50,height:50}))))},w=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,u=Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),v=Object(i.useState)(!1),p=Object(d.a)(v,2),b=p[0],h=p[1],f=Object(i.useRef)(null),g=Object(i.useRef)(null);Object(i.useEffect)((function(){return b&&N(),document.addEventListener("keydown",x),document.addEventListener("click",j),function(){document.removeEventListener("keydown",x),document.removeEventListener("click",j),w()}}));var N=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",h(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),h(!1)},x=function(e){b&&27===e.keyCode&&w()},j=function(e){f.current&&b&&!f.current.contains(e.target)&&e.target!==g.current&&w()},y=E()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},u,{className:y}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(O,null),!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:g,className:"header-nav-toggle",onClick:b?w:N},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:f,className:E()("header-nav",b&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0",onClick:w},"Leer mas"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Registrarse")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=w,j=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=E()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0"},"FAQ's")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#0"},"Support"))))},y=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=E()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Facebook"),l.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://google.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Instagram"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),l.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},D=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(m.a)(e,["className","topOuterDivider","topDivider"]),n=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},r,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(O,null),l.a.createElement(y,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(j,null),l.a.createElement("div",{className:"footer-copyright"},"Made by ",l.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var C=D,k=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(C,null))},L=a(5),q={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},H={types:Object(L.a)({},q.types),defaults:Object(L.a)({},q.defaults)},F={types:Object(L.a)({},q.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)({},q.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(L.a)({},q.types,{pushLeft:v.a.bool}),defaults:Object(L.a)({},q.defaults,{pushLeft:!1})},P=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=E()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},z=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,n=e.loading,s=e.wide,o=e.wideMobile,c=e.disabled,d=Object(m.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:c}))};z.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var A=z,M=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,d=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},b=E()("modal",n&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",Object.assign({},d,{className:b,onClick:r}),l.a.createElement("div",{className:"modal-inner",onClick:p},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===c?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),l.a.createElement("div",{className:"modal-content"},a)))))};M.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var S=M,T=Object(L.a)({},H.defaults),R=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,u=e.invertColor,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),h=b[0],f=b[1],g=E()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",u&&"invert-color",t),O=E()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},v,{className:g}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:O},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Eat ",l.a.createElement("span",{className:"text-color-primary"},"Good")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Productos artesanales, 100% organicos."),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(P,null,l.a.createElement(A,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Productos"),l.a.createElement(A,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"Ordenar"))))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},l.a.createElement(N,{className:"has-shadow",src:a(34),alt:"Hero",width:896,height:504}))),l.a.createElement(S,{id:"video-modal",show:h,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};R.defaultProps=T;var I=R,G=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,n=Object(m.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=r;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},n,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};G.defaultProps={children:null,tag:"h2"};var V=G,U=Object(L.a)({},B.defaults),J=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=E()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:p},l.a.createElement(V,{data:{title:"Come como te mereces",paragraph:"Eres lo que comes. Nuestros productos son saludables, organicos y beneficiaran tu salud de gran manera."},className:"center-content"}),l.a.createElement("div",{className:b},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(N,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Miel de abejas miliponas"),l.a.createElement("p",{className:"m-0 text-sm"},"La miel melipona proviene de una abeja sin aguij\xf3n cuyo nombre en maya es Xun\xe1n-Kab, y que solo habita en la Pen\xednsula de Yucat\xe1n. Es muy apreciada ya que es la polinizadora por excelencia de las selvas tropicales de esta zona de M\xe9xico, y por lo tanto su miel proviene de flores de las selvas yucatecas.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(N,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Granola artesanal"),l.a.createElement("p",{className:"m-0 text-sm"},"Nuestra granola es una mezcla de hojuelas de avena, frutos secos y nueces. A esta mezcla se le puede agregar especias, otros granos y alg\xfan endulzante. Normalmente, se mete al horno con aceite vegetal, mantequilla o aceite de oliva a dorar.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(N,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Queso de cabra"),l.a.createElement("p",{className:"m-0 text-sm"},"Estudios recientes muestran que el queso hecho de leche de cabra tiene m\xe1s prote\xedna que el de vaca, y que es muy similar a la leche humana. Es bueno para el ri\xf1\xf3n y adecuado para quienes padecen insuficiencia renal cr\xf3nica gracias a su bajo contenido en potasio. Sin embargo, debe tenerse cuidado con su contenido en fosfatos."))))))))};J.defaultProps=U;var Q=J,W=Object(L.a)({},F.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=E()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=E()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},b,{className:h}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(V,{data:{title:"Como conseguimos nuestros productos?",paragraph:"Nuestros productos son 100% guatemaltecos, cultivados en las bellas tierras de .."},className:"center-content"}),l.a.createElement("div",{className:g},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"100% artesanal"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Artesanal"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(N,{src:a(38),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"100% Guatemalteco"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Orgullo nacional"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(N,{src:a(39),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"100% Saludable"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Beneficios a tu salud"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(N,{src:a(40),alt:"Features split 03",width:528,height:396})))))))};Y.defaultProps=W;var K=Y,X=Object(L.a)({},B.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),p=E()("tiles-wrap",c&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(V,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=X;var Z=$,_=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,n=Object(m.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),a)};_.defaultProps={children:null,labelHidden:!1,id:null};var ee=_,te=function(e){var t=e.children,a=e.className,i=e.status,r=Object(m.a)(e,["children","className","status"]),n=E()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},r,{className:n}),t)};te.defaultProps={children:null,status:!1};var ae=te,ie=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,n=e.type,s=e.name,o=e.status,c=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,g=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=E()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===n?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(ee,{labelHidden:r,id:g.id},i),l.a.createElement("div",{className:N},l.a.createElement(w,Object.assign({},g,{type:"textarea"!==n?n:null,className:O,name:s,disabled:c,value:d,placeholder:b,rows:"textarea"===n?h:null})),a),f&&l.a.createElement(ae,{status:o},f))};ie.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var le=ie,re=Object(L.a)({},H.defaults,{split:!1}),ne=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(le,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ne.defaultProps=re;var se=ne,oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{className:"illustration-section-01"}),l.a.createElement(Q,null),l.a.createElement(K,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(Z,{topDivider:!0}),l.a.createElement(se,{split:!0}))},ce=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){t.pathname;document.body.classList.add("is-loaded"),e.current.init()}),[t]),l.a.createElement(c.a,null,l.a.createElement(h,{ref:e,children:function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:oe,layout:k}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);var me=Object(o.a)();n.a.render(l.a.createElement(s.b,{history:me},l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a3df3367.chunk.js.map