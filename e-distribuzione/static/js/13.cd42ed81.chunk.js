(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[13],{1077:function(e,t,a){"use strict";var r=a(1196),i=a(1197),n=a(1198),c=a(1043),l=a(1199),o=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,u=e.cancelDialog,b=e.confirmDialog;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{id:"alert-dialog-title",children:t}),Object(o.jsx)(i.a,{children:Object(o.jsx)(n.a,{id:"alert-dialog-description",children:a})}),Object(o.jsxs)(l.a,{children:[Object(o.jsx)(c.a,{onClick:function(){return u()},color:"primary",children:s}),Object(o.jsx)(c.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1097:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var r=a(95),i=a(4),n=a(55),c=a(14),l=a(8),o=a(1),s=a(995),d=a(48),u=a(1061),b=a(40),j=a(17),m=a(0);var h=function(e){var t=Object(d.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(u.a,{theme:a,children:e.header})})},O=a(6),x=a(16),f=a(112),v=a(1071),g=a(1073);var p=function(e){var t=Object(d.a)(),a=Object(j.c)(Object(b.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(u.a,{theme:a,children:Object(m.jsx)("div",{className:Object(l.a)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(n.a,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function S(e,t){var a=Object(o.useState)(!1),r=Object(x.a)(a,2),i=r[0],n=r[1];Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:c}}));var c=function(){n(!i)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(g.a,{variant:"temporary",anchor:e.position,open:i,onOpen:function(e){},onClose:function(e){return c()},disableSwipeToOpen:!0,classes:{root:Object(l.a)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(l.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(p,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(v.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(l.a)("FusePageCarded-sidebarWrapper",e.variant),open:i,classes:{paper:Object(l.a)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(p,Object(O.a)({},e))})})]})}var N,y=Object(o.forwardRef)(S),R=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:C,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(i.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:w,minHeight:w,maxHeight:w,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:F,minHeight:F,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:I,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:C,minHeight:C,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(i.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(i.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),I=240,C=200,F=64,w=C-F,P=Object(o.forwardRef)((function(e,t){var a=Object(o.useRef)(null),r=Object(o.useRef)(null),i=Object(o.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(o.useImperativeHandle)(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(R,{className:Object(l.a)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:i,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(y,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:i}),Object(m.jsxs)("div",{className:Object(l.a)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(l.a)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(n.a,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&Object(m.jsx)(y,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:i})]})]})]})}));P.defaultProps={};var k=Object(o.memo)(Object(c.a)(P)(N||(N=Object(r.a)([""]))))},1102:function(e,t,a){"use strict";var r=a(12),i=a.n(r),n=a(53),c=function(e){var t=e.roles,a=e.children;return n.a.hasRole(t)?a:null};c.propTypes={roles:i.a.arrayOf(i.a.string).isRequired},t.a=c},1103:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(106),i=function(e,t){for(var a in t.fields){var i=t.fields[a];if(i&&i.ref&&"reportValidity"in i.ref){var n=Object(r.d)(e,a);i.ref.setCustomValidity(n&&n.message||""),i.ref.reportValidity()}}},n=function(e,t){t.shouldUseNativeValidation&&i(e,t);var a={};for(var n in e){var c=Object(r.d)(t.fields,n);Object(r.e)(a,n,Object.assign(e[n],{ref:c&&c.ref}))}return a},c=function(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),function(c,l,o){try{return Promise.resolve(function(r,n){try{var s=(t.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:l}))).then((function(e){return o.shouldUseNativeValidation&&i({},o),{values:e,errors:{}}})))}catch(d){return n(d)}return s&&s.then?s.then(void 0,n):s}(0,(function(e){return{values:{},errors:n((t=e,a=!o.shouldUseNativeValidation&&"all"===o.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),a){var i=e[t.path].types,n=i&&i[t.type];e[t.path]=Object(r.c)(t.path,a,e,t.type,n?[].concat(n,t.message):t.message)}return e}),{})),o)};var t,a})))}catch(s){return Promise.reject(s)}}}},1106:function(e,t,a){"use strict";var r=a(16),i=a(1028),n=a(48),c=a(1),l=a(1175),o=a(209),s=a(1018),d=a(1068),u=a(106),b=a(17),j=a(70),m=a(58),h=a(60),O=a(31),x=a(1077),f=a(250),v=a(0),g=function(e){var t=Object(b.b)(),a=e.title,g=e.titleStatic,p=e.subtitleStatic,S=e.updateElement,N=e.deleteElement,y=e.urlIndex,R=e.urlIndexLabel,I=e.backOnSave,C=Object(s.a)("common").t,F=Object(u.h)(),w=F.formState,P=F.watch,k=F.getValues,V=w.isValid,z=w.dirtyFields,A=a?P(a):"",E=Object(n.a)(),B=Object(m.g)(),H=Object(c.useState)(!1),W=Object(r.a)(H,2),U=W[0],q=W[1],T=Object(m.i)();return Object(v.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(v.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[y&&R&&Object(v.jsx)(d.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(v.jsxs)(o.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:y,color:"inherit",children:[Object(v.jsx)(i.a,{className:"text-20",children:"ltr"===E.direction?"arrow_back":"arrow_forward"}),Object(v.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:R})]})}),Object(v.jsx)("div",{className:"flex items-center max-w-full",children:Object(v.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(v.jsxs)(d.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(v.jsx)(o.a,{className:"text-16 sm:text-20 truncate font-semibold",children:A||g||C("Nuovo")}),p&&Object(v.jsx)(o.a,{className:"text-16 sm:text-20 truncate font-semibold",children:p})]})})})]}),Object(v.jsxs)(d.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:["new"!==T.id&&N&&Object(v.jsx)(l.a,{loading:U,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(f.c)({children:Object(v.jsx)(x.a,{title:C("Eliminazione"),content:C("EliminazioneDomanda",{recordName:A}),cancel:C("Annulla"),confirm:C("Conferma"),cancelDialog:function(){return t(Object(f.a)())},confirmDialog:function(){q(!0),t(N()).then((function(e){e.error?(q(!1),t(Object(j.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(q(!1),t(Object(j.c)({message:C("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),t(Object(f.a)()),B.push(y))}))}})}))},startIcon:Object(v.jsx)(i.a,{className:"hidden sm:flex",children:"delete"}),children:C("Elimina")}),Object(v.jsx)(l.a,{loading:U,loadingPosition:"start",className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:O.a.isEmpty(z)||!V,startIcon:Object(v.jsx)(i.a,{className:"hidden sm:flex",children:"save"}),onClick:function(){q(!0),t(S(k())).then((function(e){e.error?(q(!1),t(Object(j.c)({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))):(q(!1),t(Object(j.c)({message:C("Modifiche effettuate correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),I&&B.push(y))}))},children:C("Salva")})]})]})};g.defaultProps={title:"",deleteElement:void 0,backOnSave:!0,urlIndex:"",urlIndexLabel:""},t.a=g},1175:function(e,t,a){"use strict";var r=a(4),i=a(13),n=a(3),c=a(1),l=(a(12),a(19)),o=a(1312),s=a(14),d=a(23),u=a(1043),b=a(1214),j=a(1313),m=a(1314);function h(e){return Object(j.a)("MuiLoadingButton",e)}var O=Object(m.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),x=a(0),f=["children","disabled","loading","loadingIndicator","loadingPosition"],v=Object(s.a)(u.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(r.a)({},"& .".concat(O.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(r.a)({},"& .".concat(O.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,a=e.theme;return Object(n.a)(Object(r.a)({},"& .".concat(O.startIconLoadingStart,", & .").concat(O.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(r.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(O.loading),{color:"transparent"}))})),g=Object(s.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var a=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(l.a)(a.loadingPosition))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&{left:14},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&{right:14})})),p=Object(x.jsx)(b.a,{color:"inherit",size:16}),S=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiLoadingButton"}),r=a.children,c=a.disabled,s=void 0!==c&&c,u=a.loading,b=void 0!==u&&u,j=a.loadingIndicator,m=void 0===j?p:j,O=a.loadingPosition,S=void 0===O?"center":O,N=Object(i.a)(a,f),y=Object(n.a)({},a,{disabled:s,loading:b,loadingIndicator:m,loadingPosition:S}),R=function(e){var t=e.loading,a=e.loadingPosition,r=e.classes,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(l.a)(a))],endIcon:[t&&"endIconLoading".concat(Object(l.a)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(l.a)(a))]},c=Object(o.a)(i,h,r);return Object(n.a)({},r,c)}(y);return Object(x.jsxs)(v,Object(n.a)({disabled:s||b,ref:t},N,{classes:R,ownerState:y,children:[b&&Object(x.jsx)(g,{className:R.loadingIndicator,ownerState:y,children:m}),r]}))}));t.a=S},1328:function(e,t,a){"use strict";a.r(t);var r=a(6),i=a(16),n=a(4),c=a(247),l=a(1097),o=a(109),s=a(1043),d=a(1220),u=a(1236),b=a(209),j=a(1018),m=a(405),h=a(1068),O=a(1),x=a(17),f=a(58),v=a(60),g=a(31),p=a(106),S=a(252),N=a(1103),y=a(14),R=a(434),I=a(253),C=a(1106),F=a(27),w=a(1040),P=a(1039),k=a(1041),V=a(614),z=a(617),A=a(620),E=a(1237),B=a(53),H=a(1102),W=a(1108),U=a(1045),q=a(1185),T=a(1048),L=a(0),D=function(e){var t,a,n,l,o,s,d=Object(p.h)(),u=d.control,m=d.formState,h=d.watch,f=d.trigger,v=d.setValue,g=h(),S=m.errors,N=(Object(x.c)((function(e){var t=e.i18n;return null===t||void 0===t?void 0:t.language})),Object(x.c)((function(e){return e.auth.user}))),y=Object(O.useState)(!0),I=Object(i.a)(y,2),C=I[0],D=I[1],M=Object(O.useState)(!0),J=Object(i.a)(M,2),_=J[0],G=J[1],K=Object(x.b)(),Q=Object(O.useState)([]),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],$=Object(O.useState)([]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],re=Object(j.a)("UserManager").t,ie=Object(j.a)("common").t,ne="undefined"!==typeof g.id,ce=function(){return v("attributes.hrcRole","")},le=function(){v("attributes.trcRole",""),oe()},oe=function(){v("attributes.profiliValutatore",[])};return Object(O.useEffect)((function(){B.a.hasRole(["Admin"])&&(K(Object(R.c)()).then((function(e){Z(e.payload),D(!1)})),K(Object(R.d)()).then((function(e){ae(e.payload),G(!1)}))),B.a.hasRole(["Admin"])||(v("attributes.mainRole","User"),f()),B.a.hasRole(["HRAdmin"])&&K(Object(R.b)()).then((function(e){Z([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),D(!1),v("attributes.hrcId",e.payload.id),f()})),B.a.hasRole(["TRAdmin"])&&K(Object(R.e)()).then((function(e){ae([{id:e.payload.id,ragioneSociale:e.payload.ragioneSociale}]),G(!1),v("attributes.trcId",e.payload.id),f()}))}),[K,v,f,N]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"pb-8",children:[Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Dati")})}),Object(L.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(L.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"firstName",control:u,render:function(e){var t,a=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Nome")}),Object(L.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.firstName,required:!0,helperText:null===S||void 0===S||null===(t=S.firstName)||void 0===t?void 0:t.message,id:"firstName",variant:"outlined",fullWidth:!0,autoFocus:!0}))]})}})}),Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"lastName",control:u,render:function(e){var t,a=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Cognome")}),Object(L.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.lastName,required:!0,helperText:null===S||void 0===S||null===(t=S.lastName)||void 0===t?void 0:t.message,id:"lastName",variant:"outlined",fullWidth:!0}))]})}})}),Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"email",control:u,render:function(e){var t,a=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Email")}),Object(L.jsx)(w.a,Object(r.a)(Object(r.a)({},a),{},{className:"mt-8 mb-16",error:!!S.email,required:!0,helperText:null===S||void 0===S||null===(t=S.email)||void 0===t?void 0:t.message,id:"email",variant:"outlined",fullWidth:!0}))]})}})}),Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"enabled",control:u,render:function(e){var t,a=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Abilitato")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!S.enabled,required:!0,children:[Object(L.jsxs)(A.a,Object(r.a)(Object(r.a)({},a),{},{id:"enabled",children:[Object(L.jsx)(k.a,{value:!0,children:ie("Si")}),Object(L.jsx)(k.a,{value:!1,children:ie("No")})]})),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(t=S.enabled)||void 0===t?void 0:t.message})]})]})}})}),Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"emailVerified",control:u,render:function(e){var t,a=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Email verificata")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!S.emailVerified,required:!0,children:[Object(L.jsxs)(A.a,Object(r.a)(Object(r.a)({},a),{},{id:"emailVerified",children:[Object(L.jsx)(k.a,{value:!0,children:ie("Si")}),Object(L.jsx)(k.a,{value:!1,children:ie("No")})]})),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(t=S.emailVerified)||void 0===t?void 0:t.message})]})]})}})})]})]}),Object(L.jsx)("div",{className:"pb-8",children:Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(E.a,{container:!0,spacing:2,className:"px-12",children:Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(W.Alert,{severity:"warning",children:re("Non \xe8 possibile modificare i ruoli di un utente una volta creato")})})})})}),Object(L.jsx)(H.a,{roles:["Admin"],children:Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"pb-8",children:[Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Ruolo")})}),Object(L.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(L.jsx)(E.a,{container:!0,spacing:2,className:"px-12",children:Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.mainRole",control:u,render:function(e){var t,a,r,i=e.field,n=i.onChange,c=i.onBlur,l=i.value,o=(i.name,i.ref);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo principale")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.mainRole),required:!0,children:[Object(L.jsxs)(A.a,{id:"attributes.mainRole",onChange:function(e){n(e),"User"!==e.target.value&&(v("attributes.hrcId",""),ce(),v("attributes.trcId",""),le()),f()},onBlur:c,value:l,inputRef:o,displayEmpty:!0,disabled:ne,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Selezionare il ruolo principale")})}),Object(L.jsx)(k.a,{value:"Admin",children:re("Amminstratore di sistema")},"Admin"),Object(L.jsx)(k.a,{value:"User",children:re("Utente")},"User")]}),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(r=a.mainRole)||void 0===r?void 0:r.message})]})]})}})})})]})})}),Object(L.jsx)(H.a,{roles:["HRAdmin","TRAdmin","BIAdmin"],children:Object(L.jsx)(p.a,{name:"attributes.mainRole",control:u,render:function(e){var t=e.field;return Object(L.jsx)("input",Object(r.a)(Object(r.a)({},t),{},{type:"hidden",name:"attributes.mainRole",id:"attributes.mainRole"}))}})}),"User"===g.attributes.mainRole&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H.a,{roles:["Admin","HRAdmin"],children:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H.a,{roles:["Admin"],children:!ne&&Object(L.jsx)("div",{className:"pb-8",children:Object(L.jsx)(E.a,{container:!0,spacing:2,className:"px-12",children:Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(W.Alert,{severity:"info",children:re("\xc8 possibile selezionare o un'azienda appaltatrice o un istituto di formazione o un profilo business intelligence")})})})})}),Object(L.jsxs)("div",{className:"pb-8",children:[Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Azienda appaltatrice")})}),Object(L.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(L.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.hrcId",control:u,render:function(e){var t,a,r,i,n,l,o=e.field,s=o.onChange,d=o.onBlur,u=o.value,j=(o.name,o.ref);return Object(L.jsxs)(L.Fragment,{children:[C&&Object(L.jsx)(c.a,{}),!C&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare un'azienda appaltatrice")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.hrcId),required:!0,disabled:""!==(null===(a=g.attributes)||void 0===a?void 0:a.trcId)||ne,children:[Object(L.jsxs)(A.a,{id:"attributes.hrcId",onChange:function(e){s(e),e.target.value||ce(),f()},onBlur:d,value:u,inputRef:j,displayEmpty:!0,disabled:""!==(null===(r=g.attributes)||void 0===r?void 0:r.trcId)||""!==(null===(i=g.attributes)||void 0===i?void 0:i.biRole)||ne,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Nessuna azienda appaltatrice")})}),Y&&Y.map((function(e){return Object(L.jsx)(k.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(n=S.attributes)||void 0===n||null===(l=n.hrcId)||void 0===l?void 0:l.message})]})]})]})}})}),(null===(t=g.attributes)||void 0===t?void 0:t.hrcId)&&Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.hrcRole",control:u,render:function(e){var t,a,i,n=e.field;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.hrcRole),required:!0,children:[Object(L.jsxs)(A.a,Object(r.a)(Object(r.a)({},n),{},{id:"attributes.hrcRole",displayEmpty:!0,disabled:ne,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Selezionare il ruolo")})}),Object(L.jsx)(k.a,{value:"HRAdmin",children:re("HRAdmin")},"Admin"),Object(L.jsx)(k.a,{value:"HRUser",children:re("HRUser")},"User")]})),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(i=a.hrcRole)||void 0===i?void 0:i.message})]})]})}})})]})]})]})}),Object(L.jsx)(H.a,{roles:["Admin","TRAdmin"],children:Object(L.jsxs)("div",{className:"pb-8",children:[Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Istituto di formazione")})}),Object(L.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(L.jsxs)(E.a,{container:!0,spacing:2,className:"px-12",children:[Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.trcId",control:u,render:function(e){var t,a,r,i,n,l=e.field,o=l.onChange,s=l.onBlur,d=l.value,u=l.ref;return Object(L.jsxs)(L.Fragment,{children:[_&&Object(L.jsx)(c.a,{}),!_&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare un istituto di formazione")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.trcId),required:!0,disabled:""!==(null===(a=g.attributes)||void 0===a?void 0:a.hrcId)||""!==(null===(r=g.attributes)||void 0===r?void 0:r.biRole)||ne,children:[Object(L.jsxs)(A.a,{id:"attributes.trcId",onChange:function(e){o(e),e.target.value||le(),f()},onBlur:s,value:d,inputRef:u,displayEmpty:!0,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Nessun istituto di formazione")})}),te&&te.map((function(e){return Object(L.jsx)(k.a,{value:e.id,children:e.ragioneSociale},e.id)}))]}),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(i=S.attributes)||void 0===i||null===(n=i.trcId)||void 0===n?void 0:n.message})]})]})]})}})}),(null===(a=g.attributes)||void 0===a?void 0:a.trcId)&&Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.trcRole",control:u,render:function(e){var t,a,r,i=e.field,n=i.onChange,c=i.onBlur,l=i.value,o=i.ref;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.trcRole),required:!0,children:[Object(L.jsxs)(A.a,{id:"attributes.trcRole",displayEmpty:!0,onChange:function(e){n(e),"TRUser"!==e.target.value&&oe(),f()},onBlur:c,value:l,inputRef:o,disabled:ne,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Selezionare il ruolo")})}),Object(L.jsx)(k.a,{value:"TRAdmin",children:re("TRAdmin")},"Admin"),Object(L.jsx)(k.a,{value:"TRUser",children:re("TRUser")},"User")]}),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(a=S.attributes)||void 0===a||null===(r=a.trcRole)||void 0===r?void 0:r.message})]})]})}})})]}),Object(L.jsx)(E.a,{container:!0,spacing:2,className:"px-12",children:"TRUser"===(null===(n=g.attributes)||void 0===n?void 0:n.trcRole)&&Object(L.jsxs)(E.a,{item:!0,xs:12,sm:12,children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Indicare i profili del valutatore")}),Object(L.jsx)(T.a,{sx:{display:"flex",flexDirection:"row"},children:["Sicurezza","D","E","F","G"].map((function(e){return Object(L.jsx)(p.a,{name:"attributes.profiliValutatore",control:u,render:function(t){var a,r=t.field,i=(r.value,r.onChange,r.ref);return Object(L.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(a=S.attributes)||void 0===a?void 0:a.profiliValutatore),required:!0,disabled:ne,children:Object(L.jsx)(U.a,{control:Object(L.jsx)(q.a,{value:e,onChange:function(t){if(g.attributes.profiliValutatore.includes(e)){var a=g.attributes.profiliValutatore.filter((function(t){return t!==e}));v("attributes.profiliValutatore",a)}else{var r=[].concat(Object(F.a)(g.attributes.profiliValutatore),[e]);v("attributes.profiliValutatore",r)}f()},inputRef:i,name:"attributes.profiliValutatore",id:"attributes.profiliValutatore",checked:g.attributes.profiliValutatore.includes(e),disabled:ne}),label:re(e)})})}},e)}))}),Object(L.jsx)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(l=S.attributes)||void 0===l?void 0:l.profiliValutatore),required:!0,disabled:ne,children:Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(o=S.attributes)||void 0===o||null===(s=o.profiliValutatore)||void 0===s?void 0:s.message})})]})})]})}),Object(L.jsx)(H.a,{roles:["Admin","BIAdmin"],children:Object(L.jsxs)("div",{className:"pb-8",children:[Object(L.jsx)("div",{className:"pb-8 flex items-center",children:Object(L.jsx)(b.a,{className:"h2 font-medium",color:"textSecondary",children:re("Business Intelligence")})}),Object(L.jsx)(P.a,{variant:"fullWidth",sx:{mb:2}}),Object(L.jsx)(E.a,{container:!0,spacing:2,className:"px-12",children:Object(L.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(p.a,{name:"attributes.biRole",control:u,render:function(e){var t,a,r,i,n,c=e.field,l=c.onChange,o=c.onBlur,s=c.value,d=c.ref;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(b.a,{className:"h5 font-medium",color:"textSecondary",children:re("Selezionare il ruolo")}),Object(L.jsxs)(V.a,{fullWidth:!0,className:"mt-8 mb-16",error:!!(null===(t=S.attributes)||void 0===t?void 0:t.biRole),required:!0,children:[Object(L.jsxs)(A.a,{id:"attributes.biRole",displayEmpty:!0,onChange:function(e){l(e),f()},onBlur:o,value:s,inputRef:d,disabled:""!==(null===(a=g.attributes)||void 0===a?void 0:a.hrcId)||""!==(null===(r=g.attributes)||void 0===r?void 0:r.trcId)||ne,children:[Object(L.jsx)(k.a,{value:"",children:Object(L.jsx)("em",{children:ie("Nessun ruolo")})}),Object(L.jsx)(k.a,{value:"BIAdmin",children:re("BIAdmin")},"Admin"),Object(L.jsx)(k.a,{value:"BIUser",children:re("BIUser")},"User")]}),Object(L.jsx)(z.a,{children:null===S||void 0===S||null===(i=S.attributes)||void 0===i||null===(n=i.biRole)||void 0===n?void 0:n.message})]})]})}})})})]})})]})]})},M=Object(y.a)(l.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(n.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}}));t.default=Object(m.a)("user",I.a)((function(e){var t=Object(j.a)("UserManager").t,a=(Object(j.a)("common").t,Object(x.b)()),n=Object(x.c)((function(e){var t=e.userManager;return null===t||void 0===t?void 0:t.user})),l=Object(f.i)(),m=Object(O.useState)(0),y=Object(i.a)(m,2),I=y[0],F=y[1],w=Object(O.useState)(!1),P=Object(i.a)(w,2),k=P[0],V=P[1],z=S.g().shape({firstName:S.i().required().max(255),lastName:S.i().required().max(255),email:S.i().required().email(),enabled:S.c().required(),emailVerified:S.c().required(),attributes:S.g().shape({mainRole:S.i().required(),hrcId:S.i().when("mainRole",{is:"User",then:S.i().when(["trcId","biRole"],{is:function(e,t){return(!e||e&&0===e.length)&&(!t||t&&0===t.length)},then:S.i().required()})}),hrcRole:S.i().when("hrcId",{is:function(e){return e.length>0},then:S.i().required()}),trcId:S.i().when("mainRole",{is:"User",then:S.i().when(["hrcId","biRole"],{is:function(e,t){return(!e||e&&0===e.length)&&(!t||t&&0===t.length)},then:S.i().required()})}),trcRole:S.i().when("trcId",{is:function(e){return e.length>0},then:S.i().required()}),biRole:S.i().when("mainRole",{is:"User",then:S.i().when(["trcId","hrcId"],{is:function(e,t){return(!e||e&&0===e.length)&&(!t||t&&0===t.length)},then:S.i().required()})}),profiliValutatore:S.a().when("trcRole",{is:function(e){return"TRUser"===e},then:S.a().min(1,t("Selezionare almeno un profilo"))})})}).required(),A=Object(p.g)({mode:"onChange",defaultValues:{},resolver:Object(N.a)(z)}),E=A.reset,B=A.watch,H=(A.control,A.onChange,A.formState,A.trigger),W=B();return Object(o.b)((function(){"new"===l.id?a(Object(R.g)()):a(Object(R.f)(l)).then((function(e){e.payload||V(!0)}))}),[a,l]),Object(O.useEffect)((function(){n&&(E(n),H())}),[n,E,H]),Object(O.useEffect)((function(){return function(){a(Object(R.h)()),V(!1)}}),[a]),k?Object(L.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(L.jsx)(b.a,{color:"textSecondary",variant:"h5",children:t("L'utente richiesto non esiste")}),Object(L.jsx)(s.a,{className:"mt-24",component:v.a,variant:"outlined",to:"/user",color:"inherit",children:t("Torna indietro")})]}):g.a.isEmpty(W)||n&&l.id!==n.id&&"new"!==l.id?Object(L.jsx)(c.a,{}):Object(L.jsx)(p.b,Object(r.a)(Object(r.a)({},A),{},{children:Object(L.jsx)(M,{header:Object(L.jsx)(C.a,{title:"firstAndLastName",updateElement:R.i,urlIndex:"/user",urlIndexLabel:t("Title")}),contentToolbar:Object(L.jsx)(u.a,{value:I,onChange:function(e,t){return F(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:Object(L.jsx)(d.a,{className:"h-64",label:t("Informazioni")})}),content:Object(L.jsx)("div",{className:"p-16 sm:p-24 max-w-2xl",children:Object(L.jsx)("div",{className:0!==I?"hidden":"",children:Object(L.jsx)(D,{form:W})})}),innerScroll:!0})}))}))}}]);