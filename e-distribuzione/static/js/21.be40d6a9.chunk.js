(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[21],{1077:function(e,t,a){"use strict";var n=a(1196),r=a(1197),i=a(1198),c=a(1043),l=a(1199),s=a(0);t.a=function(e){var t=e.title,a=e.content,o=e.cancel,d=e.confirm,j=e.cancelDialog,b=e.confirmDialog;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(n.a,{id:"alert-dialog-title",children:t}),Object(s.jsx)(r.a,{children:Object(s.jsx)(i.a,{id:"alert-dialog-description",children:a})}),Object(s.jsxs)(l.a,{children:[Object(s.jsx)(c.a,{onClick:function(){return j()},color:"primary",children:o}),Object(s.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1088:function(e,t,a){"use strict";var n=a(1233),r=a(201),i={en_US:r.a,en:r.a,it:n.a,it_IT:n.a},c={getLocale:function(e){return i[e]}};t.a=c},1097:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(95),r=a(4),i=a(55),c=a(14),l=a(8),s=a(1),o=a(995),d=a(48),j=a(1061),b=a(40),m=a(17),u=a(0);var x=function(e){var t=Object(d.a)(),a=Object(m.c)(Object(b.c)(t.palette.primary.main));return Object(u.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(u.jsx)(j.a,{theme:a,children:e.header})})},h=a(6),O=a(16),f=a(112),p=a(1071),v=a(1073);var g=function(e){var t=Object(d.a)(),a=Object(m.c)(Object(b.c)(t.palette.primary.main));return Object(u.jsxs)(u.Fragment,{children:[e.header&&Object(u.jsx)(j.a,{theme:a,children:Object(u.jsx)("div",{className:Object(l.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(u.jsx)(i.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function N(e,t){var a=Object(s.useState)(!1),n=Object(O.a)(a,2),r=n[0],i=n[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){i(!r)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{lgUp:"permanent"===e.variant,children:Object(u.jsx)(v.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(l.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(l.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(u.jsx)(g,Object(h.a)({},e))})}),"permanent"===e.variant&&Object(u.jsx)(p.a,{lgDown:!0,children:Object(u.jsx)(f.a,{variant:"permanent",className:Object(l.a)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:Object(l.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(u.jsx)(g,Object(h.a)({},e))})})]})}var S,y=Object(s.forwardRef)(N),C=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:P,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:I,minHeight:I,maxHeight:I,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:z,minHeight:z,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:F,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:P,minHeight:P,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),F=240,P=200,z=64,I=P-z,w=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),n=Object(s.useRef)(null),r=Object(s.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(u.jsxs)(C,{className:Object(l.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:r,children:[Object(u.jsx)("div",{className:"FusePageCarded-topBg"}),Object(u.jsxs)("div",{className:"flex container w-full",children:[d&&Object(u.jsx)(y,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:r}),Object(u.jsxs)("div",{className:Object(l.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(u.jsx)(x,{header:e.header}),Object(u.jsxs)("div",{className:Object(l.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(u.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(u.jsx)(i.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(u.jsx)(y,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:n,rootRef:r})]})]})]})}));w.defaultProps={};var k=Object(s.memo)(Object(c.a)(w)(S||(S=Object(n.a)([""]))))},1106:function(e,t,a){"use strict";var n=a(16),r=a(1028),i=a(48),c=a(1),l=a(1175),s=a(209),o=a(1018),d=a(1068),j=a(106),b=a(17),m=a(70),u=a(58),x=a(60),h=a(31),O=a(1077),f=a(250),p=a(0),v=function(e){var t=Object(b.b)(),a=e.title,v=e.titleStatic,g=e.subtitleStatic,N=e.updateElement,S=e.deleteElement,y=e.urlIndex,C=e.urlIndexLabel,F=e.backOnSave,P=Object(o.a)("common").t,z=Object(j.h)(),I=z.formState,w=z.watch,k=z.getValues,T=I.isValid,W=I.dirtyFields,D=a?w(a):"",H=Object(i.a)(),R=Object(u.g)(),V=Object(c.useState)(!1),E=Object(n.a)(V,2),M=E[0],L=E[1],A=Object(u.i)();return Object(p.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(p.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[y&&C&&Object(p.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(p.jsxs)(s.a,{className:"flex items-center sm:mb-12",component:x.a,role:"button",to:y,color:"inherit",children:[Object(p.jsx)(r.a,{className:"text-20",children:"ltr"===H.direction?"arrow_back":"arrow_forward"}),Object(p.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:C})]})}),Object(p.jsx)("div",{className:"flex items-center max-w-full",children:Object(p.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(p.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(p.jsx)(s.a,{className:"text-16 sm:text-20 truncate font-semibold",children:D||v||P("Nuovo")}),g&&Object(p.jsx)(s.a,{className:"text-16 sm:text-20 truncate font-semibold",children:g})]})})})]}),Object(p.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==A.id&&S&&Object(p.jsx)(l.a,{loading:M,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(p.jsx)(O.a,{title:P("Eliminazione"),content:P("EliminazioneDomanda",{recordName:D}),cancel:P("Annulla"),confirm:P("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){L(!0),t(S()).then((function(e){e.error?(L(!1),t(Object(m.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(L(!1),t(Object(m.c)({message:P("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),R.push(y))}))}})}))},startIcon:Object(p.jsx)(r.a,{className:"hidden sm:flex",children:"delete"}),children:P("Elimina")}),Object(p.jsx)(l.a,{loading:M,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:h.a.isEmpty(W)||!T,startIcon:Object(p.jsx)(r.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){L(!0),t(N(k())).then((function(e){e.error?(L(!1),t(Object(m.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(L(!1),t(Object(m.c)({message:P("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),F&&R.push(y))}))},children:P("Salva")})]})]})};v.defaultProps={title:"",deleteElement:void 0,backOnSave:!0,urlIndex:"",urlIndexLabel:""},t.a=v},1326:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(16),i=a(4),c=a(247),l=a(1097),s=a(109),o=a(1043),d=a(1220),j=a(1236),b=a(209),m=a(1018),u=a(405),x=a(1068),h=a(1),O=a(17),f=a(58),p=a(60),v=a(31),g=a(106),N=a(1103),S=a(252),y=a(14),C=a(553),F=a(253),P=a(1106),z=a(1040),I=a(1069),w=a(1321),k=a(1066),T=a(1041),W=a(614),D=a(617),H=a(620),R=a(1088),V=a(1237),E=a(1039),M=a(434),L=a(53),A=a(0),q=function(e){var t=Object(g.h)(),a=t.control,i=t.formState,l=t.setValue,s=t.trigger,o=i.errors,d=Object(O.c)((function(e){return e.auth.user})),j=Object(O.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),u=R.a.getLocale(j),x=Object(h.useState)(!0),f=Object(r.a)(x,2),p=f[0],v=f[1],N=Object(h.useState)([]),S=Object(r.a)(N,2),y=S[0],C=S[1],F=L.a.hasRole(["Admin"]),P=Object(O.b)(),q=Object(m.a)("Dipendente").t,B=Object(m.a)("common").t;return Object(h.useEffect)((function(){d.hrcId?(v(!1),l("hrcId",d.hrcId),s()):P(Object(M.c)()).then((function(e){C(e.payload),v(!1)}))}),[P,d.hrcId,l,s]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"pb-8",children:[Object(A.jsx)("div",{className:"pb-8 flex items-center",children:Object(A.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:q("Dati personali")})}),Object(A.jsx)(E.a,{variant:"fullWidth",sx:{mb:2}}),Object(A.jsxs)(V.a,{container:!0,spacing:2,className:"px-12",children:[Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"nome",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Nome")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.nome,required:!0,helperText:null===o||void 0===o||null===(t=o.nome)||void 0===t?void 0:t.message,id:"nome",variant:"outlined",fullWidth:!0,autoFocus:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"cognome",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Cognome")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.cognome,required:!0,helperText:null===o||void 0===o||null===(t=o.cognome)||void 0===t?void 0:t.message,id:"cognome",variant:"outlined",fullWidth:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"codiceFiscale",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Codice fiscale")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.codiceFiscale,required:!0,helperText:null===o||void 0===o||null===(t=o.codiceFiscale)||void 0===t?void 0:t.message,id:"codiceFiscale",variant:"outlined",fullWidth:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"nazionalita",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Nazionalit\xe0")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.nazionalita,helperText:null===o||void 0===o||null===(t=o.nazionalita)||void 0===t?void 0:t.message,id:"nazionalita",variant:"outlined",fullWidth:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"dataDiNascita",control:a,render:function(e){var t=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Data di nascita")}),Object(A.jsx)(k.b,{dateAdapter:I.a,locale:u,children:Object(A.jsx)(w.a,Object(n.a)(Object(n.a)({},t),{},{disabled:F,renderInput:function(e){var t;return Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},e),{},{className:"mt-8 mb-16",variant:"outlined",fullWidth:!0,error:!!o.dataDiNascita,helperText:null===o||void 0===o||null===(t=o.dataDiNascita)||void 0===t?void 0:t.message,id:"dataDiNascita"}))}}))})]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"sesso",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Sesso")}),Object(A.jsxs)(W.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!o.sesso,required:!0,disabled:F,children:[Object(A.jsxs)(H.a,Object(n.a)(Object(n.a)({},a),{},{id:"sesso",displayEmpty:!0,variant:"outlined",children:[Object(A.jsx)(T.a,{value:"",children:Object(A.jsx)("em",{children:B("Selezionare un valore")})}),Object(A.jsx)(T.a,{value:"M",children:q("Maschio")}),Object(A.jsx)(T.a,{value:"F",children:q("Femmina")}),Object(A.jsx)(T.a,{value:"N",children:q("Non Definito")})]})),Object(A.jsx)(D.a,{children:null===o||void 0===o||null===(t=o.sesso)||void 0===t?void 0:t.message})]})]})}})})]})]}),!d.hrcId&&Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"pb-8",children:[Object(A.jsx)("div",{className:"pb-8 flex items-center",children:Object(A.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:q("Azienda appaltatrice")})}),Object(A.jsx)(E.a,{variant:"fullWidth",sx:{mb:2}}),Object(A.jsx)(V.a,{container:!0,spacing:2,className:"px-12",children:Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"hrcId",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[p&&Object(A.jsx)(c.a,{}),!p&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Ragione sociale")}),Object(A.jsxs)(W.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!o.hrcId,disabled:F,children:[Object(A.jsxs)(H.a,Object(n.a)(Object(n.a)({},a),{},{id:"hrcId",displayEmpty:!0,variant:"outlined",children:[Object(A.jsx)(T.a,{value:"",children:Object(A.jsx)("em",{children:B("Selezionare un'azienda")})}),y&&y.map((function(e){return Object(A.jsx)(T.a,{value:e.id,children:e.ragioneSociale},e.id)}))]})),Object(A.jsx)(D.a,{children:null===o||void 0===o||null===(t=o.hrcId)||void 0===t?void 0:t.message})]})]})]})}})})})]})}),d.hrcId&&Object(A.jsx)(g.a,{name:"hrcId",control:a,render:function(e){var t=e.field;return Object(A.jsx)("input",Object(n.a)(Object(n.a)({},t),{},{type:"hidden",name:"hrcId",id:"hrcId"}))}}),Object(A.jsxs)("div",{className:"pb-8",children:[Object(A.jsx)("div",{className:"pb-8 flex items-center",children:Object(A.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:q("Residenza")})}),Object(A.jsx)(E.a,{variant:"fullWidth",sx:{mb:2}}),Object(A.jsxs)(V.a,{container:!0,spacing:2,className:"px-12",children:[Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"indirizzo",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Indirizzo")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.indirizzo,helperText:null===o||void 0===o||null===(t=o.indirizzo)||void 0===t?void 0:t.message,id:"indirizzo",variant:"outlined",fullWidth:!0,required:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"citta",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Citta")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.citta,helperText:null===o||void 0===o||null===(t=o.citta)||void 0===t?void 0:t.message,id:"citta",variant:"outlined",fullWidth:!0,required:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"provincia",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Provincia")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.provincia,helperText:null===o||void 0===o||null===(t=o.provincia)||void 0===t?void 0:t.message,id:"provincia",variant:"outlined",fullWidth:!0,required:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"cap",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("CAP")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.cap,helperText:null===o||void 0===o||null===(t=o.cap)||void 0===t?void 0:t.message,id:"cap",variant:"outlined",fullWidth:!0,required:!0,disabled:F}))]})}})})]})]}),Object(A.jsxs)("div",{className:"pb-8",children:[Object(A.jsx)("div",{className:"pb-8 flex items-center",children:Object(A.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:q("Contatti")})}),Object(A.jsx)(E.a,{variant:"fullWidth",sx:{mb:2}}),Object(A.jsxs)(V.a,{container:!0,spacing:2,className:"px-12",children:[Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"telefono",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Telefono")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.telefono,helperText:null===o||void 0===o||null===(t=o.telefono)||void 0===t?void 0:t.message,id:"telefono",variant:"outlined",fullWidth:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"cellulare",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Cellulare")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16 mx-4",error:!!o.cellulare,helperText:null===o||void 0===o||null===(t=o.cellulare)||void 0===t?void 0:t.message,id:"cellulare",variant:"outlined",fullWidth:!0,required:!0,disabled:F}))]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(g.a,{name:"email",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Email")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16 mx-4",error:!!o.email,helperText:null===o||void 0===o||null===(t=o.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0,disabled:F}))]})}})})]})]}),Object(A.jsxs)("div",{className:"pb-8",children:[Object(A.jsx)("div",{className:"pb-8 flex items-center",children:Object(A.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:q("Altro")})}),Object(A.jsx)(E.a,{variant:"fullWidth",sx:{mb:2}}),Object(A.jsxs)(V.a,{container:!0,spacing:2,className:"px-12",children:[Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"conoscenzaItaliano",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Conoscenza italiano")}),Object(A.jsxs)(W.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!o.conoscenzaItaliano,disabled:F,children:[Object(A.jsxs)(H.a,Object(n.a)(Object(n.a)({},a),{},{id:"conoscenzaItaliano",displayEmpty:!0,children:[Object(A.jsx)(T.a,{value:"",children:Object(A.jsx)("em",{children:B("Selezionare un valore")})}),Object(A.jsx)(T.a,{value:!0,children:q("common:Si")}),Object(A.jsx)(T.a,{value:!1,children:q("common:No")})]})),Object(A.jsx)(D.a,{children:null===o||void 0===o||null===(t=o.conoscenzaItaliano)||void 0===t?void 0:t.message})]})]})}})}),Object(A.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(g.a,{name:"sedeDiRiferimento",control:a,render:function(e){var t,a=e.field;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:q("Sede di riferimento")}),Object(A.jsx)(z.a,Object(n.a)(Object(n.a)({},a),{},{className:"mt-8 mb-16",error:!!o.sedeDiRiferimento,helperText:null===o||void 0===o||null===(t=o.sedeDiRiferimento)||void 0===t?void 0:t.message,id:"sedeDiRiferimento",variant:"outlined",fullWidth:!0,disabled:F}))]})}})})]})]})]})},B=a(40),U=a(554),Z=a(1108),_=a(64);var J=function(e){var t=Object(O.b)(),a=Object(O.c)((function(e){var t=e.dipendenteManager;return null===t||void 0===t?void 0:t.dipendente})),n=Object(f.i)(),i=Object(m.a)("Dipendente").t,l=Object(m.a)("common").t,s=L.a.hasRole(["Admin"]),d=Object(O.c)(U.c),j=(Object(O.c)(B.e),Object(h.useState)(!0)),b=Object(r.a)(j,2),u=b[0],v=b[1];return Object(h.useEffect)((function(){t(Object(U.b)(n)).then((function(){return v(!1)}))}),[t,n]),u?Object(A.jsx)(c.a,{}):d.filter((function(e){return!_.a.isStatoFinale(e.stato)})).length>0?Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(x.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(A.jsxs)(Z.Alert,{severity:"info",children:[" ",l("Valutazione in corso")]}),Object(A.jsx)(o.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/valutazione/".concat(d[0].id),color:"inherit",children:i("Vai alla valutazione")})]})}):Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(x.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(A.jsx)(Z.Alert,{severity:"info",children:l("Non \xe8 presente alcuna valutazione in corso")}),Object(A.jsx)(o.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/valutazione/new/".concat(a.id),color:"inherit",disabled:s,children:i("Nuova valutazione")})]})})},Q=Object(y.a)(l.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(u.a)("dipendente",F.a)((function(e){var t=Object(m.a)("Dipendente").t,a=Object(m.a)("common").t,i=Object(O.b)(),l=Object(O.c)((function(e){var t=e.dipendenteManager;return null===t||void 0===t?void 0:t.dipendente})),u=Object(f.i)(),y=Object(h.useState)(0),F=Object(r.a)(y,2),z=F[0],I=F[1],w=Object(h.useState)(!1),k=Object(r.a)(w,2),T=k[0],W=k[1],D=S.g().shape({codiceFiscale:S.i().required().matches(/^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i),sesso:S.i(),nome:S.i().required(),cognome:S.i().required(),indirizzo:S.i(),citta:S.i(),provincia:S.i(),cap:S.i().matches(/^\d{5}$/,{excludeEmptyString:!0,message:a("Inserire un zip/cap corretto")}),cellulare:S.i().required(),email:S.i().email(),conoscenzaItaliano:S.i().required(),hrcId:S.i().required()}),H=Object(g.g)({mode:"onChange",defaultValues:{},resolver:Object(N.a)(D)}),R=H.reset,V=H.watch,E=(H.control,H.onChange,H.formState,H.trigger),M=V();return Object(s.b)((function(){"new"===u.id?i(Object(C.c)()):i(Object(C.b)(u)).then((function(e){e.payload||W(!0)}))}),[i,u]),Object(h.useEffect)((function(){l&&(R(l),E())}),[l,R,E]),Object(h.useEffect)((function(){return function(){i(Object(C.d)()),W(!1)}}),[i]),T?Object(A.jsxs)(x.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(A.jsx)(b.a,{color:"textSecondary",variant:"h5",children:a("L'elemento richiesto non esiste")}),Object(A.jsx)(o.a,{className:"mt-24",component:p.a,variant:"outlined",to:"/dipendente",color:"inherit",children:a("Torna indietro")})]}):v.a.isEmpty(M)||l&&u.id!==l.id&&"new"!==u.id?Object(A.jsx)(c.a,{}):Object(A.jsx)(g.b,Object(n.a)(Object(n.a)({},H),{},{children:Object(A.jsx)(Q,{header:Object(A.jsx)(P.a,{updateElement:C.e,urlIndex:"/dipendente",urlIndexLabel:t("Title")}),contentToolbar:Object(A.jsxs)(j.a,{value:z,onChange:function(e,t){return I(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:[Object(A.jsx)(d.a,{className:"h-64",label:t("Informazioni")}),l&&l.id&&Object(A.jsx)(d.a,{className:"h-64",label:t("Valutazioni")})]}),content:Object(A.jsxs)("div",{className:"p-16 sm:p-24 max-w-2xl w-full",children:[Object(A.jsx)("div",{className:0!==z?"hidden":"",children:Object(A.jsx)(q,{})}),Object(A.jsx)("div",{className:1!==z?"hidden":"",children:Object(A.jsx)(J,{})})]}),innerScroll:!0})}))}))}}]);