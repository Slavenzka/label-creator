(this["webpackJsonplabel-creator"]=this["webpackJsonplabel-creator"]||[]).push([[0],{1:function(e,a,t){e.exports={wrapper:"Template_wrapper__2f745",header:"Template_header__2Ybzt",icon:"Template_icon__2B4Nn",name:"Template_name__3nUPa",body:"Template_body__SnJ5-",sizes:"Template_sizes__3qg6z",item:"Template_item__1T8TZ",key:"Template_key__yrmvg",value:"Template_value__Ig9eh",info:"Template_info__1eHdc",model:"Template_model__3T6sX",label:"Template_label__3fRPQ",originals:"Template_originals__2-864",manufacturer:"Template_manufacturer__39tBe"}},14:function(e,a,t){e.exports={wrapper:"Home_wrapper__r1ExQ",heading:"Home_heading__bbP0i",template:"Home_template__3_NLg",button:"Home_button__32ecV",print:"Home_print__10Cyd",printable:"Home_printable__3Fif0"}},17:function(e,a,t){e.exports={label:"Input_label__2a4HG",input:"Input_input__1zet3",textarea:"Input_textarea__21Wve"}},23:function(e,a,t){e.exports={label:"Checkbox_label__1cxiw",labelChecked:"Checkbox_labelChecked__3n5ym"}},33:function(e,a,t){e.exports={wrapper:"Container_wrapper__-8iQB"}},34:function(e,a,t){e.exports={barcode:"Barcode_barcode__2AL4T"}},37:function(e,a,t){e.exports=t(50)},43:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(18),r=t.n(c),s=(t(42),t(43),t(16)),i=t(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,m=t(12),u=t(8),d="desktop",p="adaptive",_={deviceType:null,config:(o={},Object(u.a)(o,d,{baseSize:10,baseWidth:"1440",widthLimit:"1440"}),Object(u.a)(o,p,{baseSize:10,baseWidth:"320",widthLimit:"640"}),o),curFontSize:10};var v=t(32),E=t(25),b=t(20),f=function(e){var a=null;return function(){var t=this,n=arguments;a&&clearTimeout(a),a=setTimeout((function(){e.apply(t,n)}),250)}},h=function(e,a){return Object.assign({},e,a)},N=function(e){if(e.indexOf("/")<0)return e;var a=e.split(" "),t=Object(b.a)(a,2),n=t[0],l=t[1].split("/"),c=Object(b.a)(l,2),r=c[0],s=c[1];return"<span class='size'>\n    ".concat(n,"\n    <span class='fraction'>\n      <span>").concat(r,"</span>\n      <span>").concat(s,"</span>\n    </span>\n  </span>")},g={modal:{status:!1,content:null,options:{}}};var z=t(14),y=t.n(z),w=t(33),O=t.n(w),T=t(10),x=t.n(T),j=function(e){var a=e.children,t=e.className;return l.a.createElement("div",{className:x()(O.a.wrapper,t)},a)},C=t(7),S=t.n(C),k=t(22),F=t(17),I=t.n(F),U=function(e){var a=e.className,t=e.type,n=void 0===t?"text":t,c=e.label,r=e.name,s=Object(k.a)(e,["className","type","label","name"]);return l.a.createElement("div",{className:x()(I.a.wrapper,a)},c&&l.a.createElement("label",{className:I.a.label,htmlFor:r},c),"textarea"===n?l.a.createElement("textarea",Object.assign({className:x()(I.a.input,I.a.textarea)},s)):l.a.createElement("input",Object.assign({className:I.a.input,type:"text"},s)))},H=t(23),L=t.n(H),A=function(e){var a=e.className,t=e.name,n=e.checked,c=e.register,r=void 0===c?function(){}:c,s=Object(k.a)(e,["className","name","checked","register"]),i="checkbox - ".concat(t);return l.a.createElement("span",{className:x()(L.a.wrapper,a)},l.a.createElement("label",{className:x()(L.a.label,Object(u.a)({},L.a.labelChecked,n)),htmlFor:i},l.a.createElement("input",Object.assign({className:"visuallyHidden",type:"checkbox",id:i,checked:n,ref:r},s))))},M=function(e){var a=e.state,t=e.stateUpdater,n=a.sex,c=a.title,r=a.code,s=a.sizeUSA,i=a.sizeUK,o=a.sizeFrance,m=a.sizeDeutsch,u=a.sizeJapan,d=a.sizeChina,p=a.model,_=a.color;return l.a.createElement("form",null,l.a.createElement("div",{className:S.a.wrapper},l.a.createElement(U,{className:S.a.name,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c,onChange:function(e){return t({field:"title",value:e.target.value})},name:"title",type:"textarea"}),l.a.createElement(U,{className:S.a.code,label:"\u0428\u0442\u0440\u0438\u0445\u043a\u043e\u0434",value:r,onChange:function(e){return t({field:"code",value:e.target.value})},name:"code"}),l.a.createElement("div",{className:S.a.dual},l.a.createElement(U,{label:"\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0434\u0435\u043b\u0438",value:p,onChange:function(e){return t({field:"model",value:e.target.value})},name:"model"}),l.a.createElement(U,{label:"\u0426\u0432\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0438",value:_,onChange:function(e){return t({field:"color",value:e.target.value})},name:"color"})),l.a.createElement("div",{className:S.a.sizes},l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 USA",value:s,onChange:function(e){return t({field:"sizeUSA",value:e.target.value})},name:"sizeUSA"}),l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 UK",value:i,onChange:function(e){return t({field:"sizeUK",value:e.target.value})},name:"sizeUK"}),l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 France",value:o,onChange:function(e){return t({field:"sizeFrance",value:e.target.value})},name:"sizeFrance"}),l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 Deutsch",value:m,onChange:function(e){return t({field:"sizeDeutsch",value:e.target.value})},name:"sizeDeutsch"}),l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 Japan",value:u,onChange:function(e){return t({field:"sizeJapan",value:e.target.value})},name:"sizeJapan"}),l.a.createElement(U,{className:S.a.size,label:"\u0420\u0430\u0437\u043c\u0435\u0440 China",value:d,onChange:function(e){return t({field:"sizeChina",value:e.target.value})},name:"sizeChina"})),l.a.createElement("div",{className:S.a.sex},l.a.createElement("span",null,"\u0416\u0435\u043d"),l.a.createElement(A,{checked:n,onChange:function(){return t({field:"sex",value:!n})}}),l.a.createElement("span",null,"\u041c\u0443\u0436"))))},R=t(1),B=t.n(R),V=function(e){var a=e.className;return l.a.createElement("svg",{className:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("circle",{cx:"256",cy:"51.2",r:"51.2"}),l.a.createElement("path",{d:"M341.333,119.467H170.667c-23.564,0-42.667,19.103-42.667,42.667v128c0,14.138,11.461,25.6,25.6,25.6\r c14.138,0,25.6-11.461,25.6-25.6V179.2h17.067v307.2c0,14.138,11.462,25.6,25.6,25.6s25.6-11.461,25.6-25.6V315.733h17.067V486.4\r c0,14.138,11.462,25.6,25.6,25.6s25.6-11.461,25.6-25.6V179.2H332.8v110.933c0,14.138,11.462,25.6,25.6,25.6\r s25.6-11.461,25.6-25.6v-128C384,138.569,364.898,119.467,341.333,119.467z"}))},D=function(e){var a=e.className;return l.a.createElement("svg",{className:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M384.977,276.115c-0.33-0.902-33.149-90.694-47.603-132.749c-9.325-27.136-24.962-40.895-46.474-40.895\r c-29.934,0-39.899,0-69.8,0c-21.512,0-37.149,13.759-46.474,40.895c-14.452,42.055-47.272,131.848-47.603,132.749\r c-3.812,10.425,1.549,21.968,11.975,25.779c10.425,3.812,21.968-1.551,25.779-11.975c0.273-0.748,22.776-62.314,38.824-107.645\r c1.435,4.712,4.37,8.758,8.233,11.627l0.048,29.451l-34.573,87.18c-1.885,4.755,0.875,10.067,5.834,11.259\r c5.161,1.24,11.996,2.93,19.41,4.782V487.88c0,13.321,10.799,24.12,24.12,24.12c13.321,0,24.12-10.799,24.12-24.12V337.975\r c3.464,0.307,6.948,0.305,10.413-0.006V487.88c0,13.321,10.799,24.12,24.12,24.12c13.321,0,24.12-10.799,24.12-24.12V326.551\r c7.407-1.852,14.236-3.538,19.398-4.776c4.924-1.18,7.731-6.492,5.84-11.261l-34.567-87.163l0.048-29.451\r c3.864-2.868,6.797-6.914,8.233-11.627c16.047,45.331,38.551,106.897,38.824,107.645c3.812,10.426,15.354,15.787,25.779,11.975\r C383.428,298.083,388.789,286.54,384.977,276.115z"}),l.a.createElement("circle",{cx:"256",cy:"43.898",r:"43.898"}))},J=t(34),W=t.n(J),G=t(35),K=function(e){var a=e.value,t=Object(G.a)({value:a,options:{format:"ean13",font:"OCRB",fontSize:100,textMargin:0,background:"transparent",height:"250rem"}}).inputRef;return l.a.createElement("svg",{className:W.a.barcode,ref:t})},P=function(e){var a=e.className,t=e.state,n=t.sex,c=t.title,r=t.code,s=t.sizeUSA,i=t.sizeUK,o=t.sizeFrance,m=t.sizeDeutsch,u=t.sizeJapan,d=t.sizeChina,p=t.model,_=t.color;return console.log(i),l.a.createElement("div",{className:x()(B.a.wrapper,a)},l.a.createElement("div",{className:B.a.header},n?l.a.createElement(V,{className:B.a.icon}):l.a.createElement(D,{className:B.a.icon}),l.a.createElement("h2",{className:B.a.name},c)),l.a.createElement("div",{className:B.a.body},l.a.createElement("dl",{className:B.a.sizes},l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"USA"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(s)}})),l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"UK"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(i)}})),l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"F"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(o)}})),l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"D"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(m)}})),l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"J"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(u)}})),l.a.createElement("div",{className:B.a.item},l.a.createElement("dt",{className:B.a.key},"CHN"),l.a.createElement("dd",{className:B.a.value,dangerouslySetInnerHTML:{__html:N(d)}}))),l.a.createElement("div",{className:B.a.info},l.a.createElement("p",{className:B.a.model},p),l.a.createElement("p",{className:B.a.label},l.a.createElement("span",null,"".concat(_,"/").concat(_,"/").concat(_),l.a.createElement("br",null)),l.a.createElement("span",null,"".concat(_,"/").concat(_,"/").concat(_))),l.a.createElement("span",{className:x()(B.a.label,B.a.originals)},l.a.createElement("span",null,"ORIGINALS",l.a.createElement("br",null)),l.a.createElement("span",null,"ORIGINALS")),l.a.createElement("span",{className:B.a.manufacturer,dangerouslySetInnerHTML:{__html:"MADE IN CHINA<br/>FABRIQU&eacute; EN CHINE"}})),l.a.createElement("div",null,12===r.length&&l.a.createElement(K,{value:r}))))},Z=t(36),Q=t.n(Z),Y=function(){var e=Object(n.useState)({sex:!0,code:"123456789012",title:"Some demo title",sizeUSA:"8",sizeUK:"7 1/2",sizeFrance:"41 1/3",sizeDeutsch:"7 1/2",sizeJapan:"260",sizeChina:"255",model:"FV3254",color:"LUNDRF"}),a=Object(b.a)(e,2),t=a[0],c=a[1],r=Object(n.useRef)(null);return l.a.createElement(j,{className:y.a.wrapper},l.a.createElement("h1",{className:y.a.heading},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043d\u0430\u043a\u043b\u0435\u0435\u043a Adidas"),l.a.createElement(M,{state:t,stateUpdater:function(e){var a=e.field,n=e.value;"code"===a?(Number.isNaN(+n[n.length-1])&&c((function(e){return Object(m.a)({},e,Object(u.a)({},a,t.code))})),n.length>12&&12===t.code.length&&c((function(e){return Object(m.a)({},e,Object(u.a)({},a,t.code))})),n.length<=12&&!Number.isNaN(+n[n.length-1])&&c((function(e){return Object(m.a)({},e,Object(u.a)({},a,n))}))):c((function(e){return Object(m.a)({},e,Object(u.a)({},a,n))}))}}),l.a.createElement(Q.a,{trigger:function(){return l.a.createElement("button",{className:y.a.button,type:"button"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0435\u0447\u0430\u0442\u044c")},content:function(){return r.current}}),l.a.createElement(P,{className:y.a.template,state:t}),l.a.createElement("div",{className:y.a.printable,ref:r},new Array(6).fill("").map((function(e,a){return l.a.createElement(P,{className:y.a.templatePrint,state:t,key:a})}))))},q=function(){return l.a.createElement("main",null,l.a.createElement(Y,null))},X=t(3),$=function(e){return{type:"SET_USER_DEVICE_TYPE",payload:e}},ee=t(13),ae=Object(X.d)((function(e){var a=e.children,t=Object(i.c)((function(e){return e.elastic.config})),l=Object(i.c)((function(e){return e.elastic.deviceType})),c=Object(i.b)();Object(n.useEffect)((function(){return r(),l&&s(),window.addEventListener("resize",f(s)),window.addEventListener("orientationchange",f(s)),function(){window.removeEventListener("resize",f(s)),window.removeEventListener("orientationchange",f(s))}}));var r=function(){ee.isBrowser&&c($(d)),(ee.isTablet||ee.isMobileOnly)&&c($(p))},s=function(){setTimeout((function(){var e=document.getElementById("root"),a=e.clientWidth||e.clientWidth;if(r(),l){var n=document.documentElement,s=t[l],i=s.widthLimit,o=s.baseWidth,m=t[l].baseSize,u=a;i&&(u=Math.min(a,i));var d=u/o*m;c({type:"SET_CURRENT_FONT_SIZE",payload:d}),n.style.fontSize=d+"px"}}))};return a})),te=function(){var e=Object(i.c)((function(e){return e.elastic.deviceType})),a=Object(i.b)();return Object(n.useEffect)((function(){ee.isBrowser&&a($(d)),ee.isMobile&&a($(p))})),e?l.a.createElement(ae,null,l.a.createElement(q,null)):null},ne=Object(s.c)({elastic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_FONT_SIZE":return Object(m.a)({},e,{curFontSize:a.payload});case"SET_USER_DEVICE_TYPE":return Object(m.a)({},e,{deviceType:a.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_MODAL":return h(e,{modal:{status:a.payload.status,content:a.payload.content,options:a.payload.options}});default:return e}}}),le=Object(s.d)(ne,Object(s.a)(v.a)),ce=l.a.createElement(i.a,{store:le},l.a.createElement(E.a,null,l.a.createElement(te,null)));r.a.render(ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={wrapper:"Form_wrapper__r3qF0",name:"Form_name__1b31x",code:"Form_code__3EFd0",sizes:"Form_sizes__hGZAs",size:"Form_size__bfEC8",dual:"Form_dual__XVGzZ",sex:"Form_sex__2Tpec"}}},[[37,1,2]]]);
//# sourceMappingURL=main.b863bc2c.chunk.js.map