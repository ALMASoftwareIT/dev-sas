(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[17],{1077:function(e,t,a){"use strict";var n=a(1196),i=a(1197),c=a(1198),r=a(1043),l=a(1199),o=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,u=e.cancelDialog,b=e.confirmDialog;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(n.a,{id:"alert-dialog-title",children:t}),Object(o.jsx)(i.a,{children:Object(o.jsx)(c.a,{id:"alert-dialog-description",children:a})}),Object(o.jsxs)(l.a,{children:[Object(o.jsx)(r.a,{onClick:function(){return u()},color:"primary",children:s}),Object(o.jsx)(r.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1080:function(e,t,a){"use strict";var n=a(6),i={id:"",searchForm:{text:""},rowsPerPage:25,order:"asc",orderBy:"",selected:[],page:0},c={updateTableConfig:function(e,t){var a=e.find((function(e){return e.id===t.id}));return a?(e=e.filter((function(e){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),t)):e.push(Object(n.a)(Object(n.a)({},i),t)),e},updateRowsPerPage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{rowsPerPage:t.rowsPerPage,page:0})),e},updateOrder:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{order:t.order})),e},updateOrderBy:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{orderBy:t.orderBy})),e},updateSelected:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{selected:t.selected})),e},updatePage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{page:t.page})),e},updateSearchText:function(e,t){var a=e.find((function(e){return e.id===t.id})),i=Object(n.a)(Object(n.a)({},a),{},{searchForm:Object(n.a)(Object(n.a)({},a.searchForm),{},{text:t.searchText}),page:0});return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(i),e}};t.a=c},1086:function(e,t,a){"use strict";var n=a(12),i=function(e){var t=e.condition,a=e.children;return t?a:null};i.propTypes={condition:a.n(n).a.bool.isRequired},i.defaultProps={condition:!1},t.a=i},1099:function(e,t,a){"use strict";var n=a(16),i=a(1221),c=a(37),r=a(1222),l=a(1202),o=a(1223),s=a(1070),d=a(1240),u=a(1201),b=a(1185),j=a(58),p=a(1048),h=a(1028),m=a(1029),f=a(1200),x=a(1242),O=a(1033),g=a(998),v=a(17),y=a(1018),w=a(1),C=a(438),D=a(1041),P=a(1e3),S=a(1042),N=a(1037),E=a(1077),k=a(0),z=function(e){var t=e.onSelectAllClick,a=e.order,i=e.orderBy,c=e.numSelected,r=e.setSelected,o=e.rowCount,s=e.onRequestSort,d=e.headCells,j=e.editColumn,z=e.selectedItemIds,T=e.deleteItemsAction,F=e.openDialog,I=e.closeDialog,B=e.showMessage,R=Object(v.b)(),A=Object(y.a)("Table").t,M=Object(w.useState)(null),L=Object(n.a)(M,2),H=L[0],q=L[1];return Object(k.jsx)(f.a,{children:Object(k.jsxs)(u.a,{className:"h-48 sm:h-64",children:[j.deleteEnabled&&Object(k.jsxs)(l.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(k.jsx)(b.a,{color:"primary",indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:t,inputProps:{"aria-label":"select all"}}),c>0&&Object(k.jsxs)(p.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(k.jsx)(m.a,{"aria-owns":H?"selectedItemsMenu":null,"aria-haspopup":"true",onClick:function(e){q(e.currentTarget)},size:"large",children:Object(k.jsx)(h.a,{children:"more_horiz"})}),Object(k.jsx)(C.a,{id:"selectedItemsMenu",anchorEl:H,open:Boolean(H),onClose:function(){q(null)},children:Object(k.jsx)(P.a,{children:Object(k.jsxs)(D.a,{onClick:function(e){e.stopPropagation(),R(F({children:Object(k.jsx)(E.a,{title:A("Eliminazione"),content:A("EliminazioneDomandaMultipla"),cancel:A("Annulla"),confirm:A("Conferma"),cancelDialog:function(){return R(I())},confirmDialog:function(){R(T(z)).then((function(e){e.error?R(B({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(R(B({message:A("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),R(I()),r([]))}))}})}))},children:[Object(k.jsx)(S.a,{className:"min-w-40",children:Object(k.jsx)(h.a,{children:"delete"})}),Object(k.jsx)(N.a,{primary:A("common:Delete")})]})})})]})]}),d.map((function(e){return e.disableSort?Object(k.jsx)(l.a,{className:"p-4 md:p-16",align:"left",padding:e.disablePadding?"none":"normal",children:e.label},e.id):Object(k.jsx)(l.a,{className:"p-4 md:p-16",align:"left",padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&a,children:Object(k.jsx)(O.a,{title:A("Ordina"),placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(k.jsxs)(x.a,{active:i===e.id,direction:i===e.id?a:"asc",onClick:(t=e.id,function(e){s(e,t)}),children:[e.label,i===e.id?Object(k.jsx)(p.a,{component:"span",sx:g.a,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})})},e.id);var t})),(j.updateEnabled||j.deleteEnabled)&&Object(k.jsx)(l.a,{className:"p-4 md:p-16",align:"center",children:"#"})]})})},T=a(1237),F=a(14),I=a(1108),B=Object(F.a)("div")((function(e){return{width:"100%",paddingTop:e.theme.spacing(2)}})),R=function(e){var t=e.data,a=e.customNoData,n=e.colSpan,i=Object(y.a)("Table").t;return Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{colSpan:n,style:{borderBottom:"0"},children:Object(k.jsx)(T.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(T.a,{item:!0,xs:4,children:0===t.length&&Object(k.jsx)(B,{children:Object(k.jsx)(I.Alert,{severity:"info",children:a||i("NoData")})})})})})},"TableRowEmptyRows")},A=function(e){var t=e.row,a=e.edit,n=e.history,i=e.openDialog,c=e.closeDialog,r=e.showMessage,o=e.deleteItemsAction,s=e.rowTitleProperty,d=Object(y.a)("Table").t,u=Object(v.b)();return a.updateEnabled||a.deleteEnabled?Object(k.jsx)(l.a,{className:"p-4 md:p-16",align:"center",component:"th",children:Object(k.jsxs)(p.a,{sx:{display:"inline-flex"},children:[a.updateEnabled&&Object(k.jsx)(O.a,{title:d("Edit"),children:Object(k.jsx)("span",{children:Object(k.jsx)(m.a,{onClick:function(){return n.push("".concat(a.editLink,"/").concat(t.id))},size:"medium",children:Object(k.jsx)(h.a,{children:"edit"})})})}),a.deleteEnabled&&Object(k.jsx)(O.a,{title:d("Delete"),children:Object(k.jsx)("span",{children:Object(k.jsx)(m.a,{onClick:function(e){e.stopPropagation(),u(i({children:Object(k.jsx)(E.a,{title:d("Eliminazione"),content:d("EliminazioneDomanda",{recordName:t[s]}),cancel:d("Annulla"),confirm:d("Conferma"),cancelDialog:function(){return u(c())},confirmDialog:function(){u(o([t.id])).then((function(e){e.error?u(r({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(u(r({message:d("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),u(c()))}))}})}))},size:"medium",children:Object(k.jsx)(h.a,{children:"delete"})})})})]})}):null};A.defaultProps={};var M=Object(j.j)(A),L={NoData:"No data",RetrievingDataError:"Retrieving data failed",selected:"Selected",Annulla:"Cancel",Salva:"Save",Elimina:"Delete",Nuovo:"New",Risultati:"Results",Conferma:"Confirm",Eliminazione:"Delete",EliminazioneDomanda:"Are you sure you want to delete '{{recordName}}'?",EliminazioneDomandaMultipla:"Are you sure you want to delete all the selected elements?"},H={NoData:"Nessun dato",RetrievingDataError:"Errore durante il recupero dei dati",selected:"Selezionati",Annulla:"Annulla",Salva:"Salva",Elimina:"Elimina",Nuovo:"Nuovo",Risultati:"Risultati",Conferma:"Conferma",Eliminazione:"Eliminazione",EliminazioneDomanda:"Confermi di voler eliminare il record '{{recordName}}'?",EliminazioneDomandaMultipla:"Confermi di voler eliminare tutti i record selezionati?"},q=a(1080);c.a.addResourceBundle("en","Table",L),c.a.addResourceBundle("it","Table",H);var _=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},U=function(e,t){return"desc"===e?function(e,a){return _(e,a,t)}:function(e,a){return-_(e,a,t)}},J=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))},V=function(e){var t=e.data,a=e.customNoData,c=e.headCells,j=e.editColumn,p=e.deleteItemsAction,h=e.openDialog,m=e.closeDialog,f=e.showMessage,x=e.rowTitleProperty,O=e.history,g=e.tableConfig,v=Object(s.a)(["tables"]),y=Object(n.a)(v,2),w=y[0],C=y[1],D=g.rowsPerPage,P=g.order,S=g.orderBy,N=g.selected,E=g.page,T=E>0?Math.max(0,(1+E)*D-t.length):0;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(o.a,{className:"flex flex-1",children:Object(k.jsxs)(i.a,{stickyHeader:!0,className:"simple borderless","aria-labelledby":"tableTitle",children:[Object(k.jsx)(z,{selectedItemIds:N,numSelected:N.length,setSelected:function(e){var t=w.tables;q.a.updateSelected(t,{id:g.id,selected:e})},order:P,orderBy:S,onSelectAllClick:function(e){var a=w.tables;if(e.target.checked){var n=t.map((function(e){return e.id}));q.a.updateSelected(a,{id:g.id,selected:n})}else q.a.updateSelected(a,{id:g.id,selected:[]})},onRequestSort:function(e,t){var a=w.tables,n=S===t&&"asc"===P,i=q.a.updateOrder(a,{id:g.id,order:n?"desc":"asc"});i=q.a.updateOrderBy(i,{id:g.id,orderBy:t}),C("tables",i,{path:"/"})},rowCount:t.length,headCells:c,editColumn:j,deleteItemsAction:p,openDialog:h,closeDialog:m,showMessage:f}),Object(k.jsxs)(r.a,{children:[t.length>0&&J(t,U(P,S)).slice(E*D,E*D+D).map((function(e){var t,a=(t=e.id,-1!==N.indexOf(t)),n="enhanced-table-checkbox-".concat(e.id);return Object(k.jsxs)(u.a,{hover:!0,className:"h-72 cursor-pointer",role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,onClick:function(t){O.push("".concat(j.editLink,"/").concat(e.id))},children:[j.deleteEnabled&&Object(k.jsx)(l.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(k.jsx)(b.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":n},onClick:function(e){return e.stopPropagation()},onChange:function(t){return function(e,t){var a=N.indexOf(t),n=[],i=w.tables;-1===a?n=n.concat(N,t):0===a?n=n.concat(N.slice(1)):a===N.length-1?n=n.concat(N.slice(0,-1)):a>0&&(n=n.concat(N.slice(0,a),N.slice(a+1))),q.a.updateSelected(i,{id:g.id,selected:n})}(0,e.id)}})},"".concat(e.id,"0")),c.filter((function(e){return!e.invisible||!1===e.invisible})).map((function(t,a){return Object(k.jsx)(l.a,{align:t.alignContent,scope:"row",component:"th",children:"object"===typeof e[t.id]?e[t.id]:Object(k.jsx)("div",{dangerouslySetInnerHTML:{__html:e[t.id]}})},"".concat(e.id).concat(a))})),Object(k.jsx)(M,{rowTitleProperty:x,row:e,edit:j,scope:"row",component:"th",deleteItemsAction:p,openDialog:h,closeDialog:m,showMessage:f})]},e.id)})),T>0&&Object(k.jsx)(u.a,{style:{height:72*T},children:Object(k.jsx)(l.a,{colSpan:c.length+(j.updateEnabled||j.deleteEnabled?1:0)+1})},"TableRowEmptyRows"),0===t.length&&Object(k.jsx)(R,{data:t,customNoData:a,colSpan:c.length+(j.updateEnabled||j.deleteEnabled?1:0)+1})]})]})}),t.length>0&&Object(k.jsx)(d.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:D,page:E,onPageChange:function(e,t){var a=w.tables,n=q.a.updatePage(a,{id:g.id,page:t});C("tables",n,{path:"/"})},onRowsPerPageChange:function(e){var t=w.tables,a=q.a.updateRowsPerPage(t,{id:g.id,rowsPerPage:e.target.value});C("tables",a,{path:"/"})}})]})};V.defaultProps={data:[],rowTemplateComponent:null,customNoData:null,rootClassName:"",refScrollablePanel:null,checkInViewportEnabled:!0,headCells:[],title:null,edit:{updateEnabled:!1,updateLink:"#",deleteEnabled:!1},rowTitleProperty:"title",tableConfig:null};t.a=Object(j.j)(V)},1107:function(e,t,a){"use strict";var n=a(16),i=a(4),c=a(1),r=a(403),l=a(247),o=a(14),s=a(185),d=a(1068),u=a(1070),b=a(1099),j=a(1018),p=a(1071),h=a(1028),m=a(1043),f=a(612),x=a(1029),O=a(1048),g=a(209),v=a(1061),y=a(58),w=a(1086),C=a(1152),D=a.n(C),P=a(1150),S=a.n(P),N=a(1151),E=a(0),k=function(e){var t=e.label,a=e.data,n=e.fileName;return Object(E.jsx)(m.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:Object(E.jsx)(D.a,{}),onClick:function(e){return function(e,t){var a={Sheets:{data:N.a.json_to_sheet(e)},SheetNames:["data"]},n=N.b(a,{bookType:"xlsx",type:"array"}),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});S.a.saveAs(i,t+".xlsx")}(a,n)},children:t})},z=a(1153),T=a.n(z),F=a(1080),I=function(e){var t=e.id,a=e.data,i=e.title,c=e.icon,r=e.createButton,l=e.history,o=e.tableConfig,b=e.theme,y=(e.pageLayout,o.searchForm),C=Object(j.a)("Table").t,D=Object(u.a)(["tables"]),P=Object(n.a)(D,2),S=P[0],N=P[1],z=function(e){var a=S.tables,n=F.a.updateSearchText(a,{searchText:e,id:t});N("tables",n,{path:"/"})};return Object(E.jsxs)("div",{className:"flex flex-1 items-center justify-between p-4 sm:p-24",children:[Object(E.jsxs)("div",{className:"flex flex-shrink items-center sm:w-224",children:[Object(E.jsx)(p.a,{lgUp:!0,children:Object(E.jsx)(x.a,{onClick:function(t){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(E.jsx)(h.a,{children:"search"})})}),Object(E.jsxs)("div",{className:"flex items-center",children:[Object(E.jsx)(h.a,{component:d.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:c}),Object(E.jsx)(g.a,{component:d.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:i})]})]}),Object(E.jsx)("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12",children:Object(E.jsx)(v.a,{theme:b,children:Object(E.jsxs)(s.a,{component:d.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex p-4 items-center w-full max-w-512 h-48 px-16 py-4 shadow",children:[Object(E.jsx)(h.a,{color:"action",children:"search"}),Object(E.jsx)(f.a,{placeholder:C("Cerca"),className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:y.text,inputProps:{"aria-label":"Search"},onChange:function(e){z(e.target.value)}}),Object(E.jsx)(w.a,{condition:""!==y.text,children:Object(E.jsx)(x.a,{size:"small",onClick:function(){z("")},children:Object(E.jsx)(T.a,{})})})]})})}),Object(E.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(E.jsx)(O.a,{m:1,children:Object(E.jsx)(k,{label:C("Excel"),data:a,fileName:"dati"})})}),Object(E.jsx)(w.a,{condition:r.enabled,children:Object(E.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(E.jsxs)(m.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:Object(E.jsx)(h.a,{children:r.icon}),onClick:function(){return l.push("".concat(r.link))},children:[Object(E.jsx)("span",{className:"hidden sm:flex",children:r.label}),Object(E.jsx)("span",{className:"flex sm:hidden",children:r.label})]})})})]})};I.defaultProps={numSelected:0,searchText:""};var B=Object(y.j)(I);var R=function(e){var t=e.filterForm,a=Object(j.a)("common").t;return Object(E.jsx)("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4",children:Object(E.jsxs)(s.a,{component:d.a.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"shadow-none lg:shadow",square:!0,children:[Object(E.jsx)("div",{className:"p-20 flex items-center",style:{backgroundColor:"#F6F7FB"},children:Object(E.jsx)(g.a,{variant:"button",display:"block",children:a("Filtri di ricerca")})}),Object(E.jsx)(O.a,{pt:1,pb:1,sx:{display:"flex",alignItems:"flex-start",flexDirection:"column",alignContent:"space-around"},children:t})]})})},A=Object(o.a)(r.a)((function(e){var t=e.theme;return{"& .FusePageSimple-header":Object(i.a)({minHeight:72,height:72},t.breakpoints.up("lg"),{minHeight:136,height:136}),"& .FusePageSimple-wrapper":{minHeight:0},"& .FusePageSimple-contentWrapper":Object(i.a)({padding:0},t.breakpoints.up("sm"),{padding:24,height:"100%"}),"& .FusePageSimple-content":{display:"flex",flexDirection:"column",height:"100%"},"& .FusePageSimple-sidebar":{width:256,border:0}}}));t.a=function(e){var t=e.id,a=e.theme,i=e.title,r=e.icon,o=e.data,j=e.exportData,p=e.headCells,h=e.editColumn,m=e.createButton,f=e.deleteItemsAction,x=e.openDialog,O=e.closeDialog,g=e.showMessage,v=e.rowTitleProperty,y=e.loading,w=e.orderByDefault,C=e.orderDirDefault,D=e.filterForm,P=Object(u.a)(["tables"]),S=Object(n.a)(P,2),N=S[0],k=S[1],z=Object(c.useState)(null),T=Object(n.a)(z,2),I=T[0],M=T[1],L=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=N.tables,a=e.find((function(e){return e.id===t}));if(!a){var n=F.a.updateTableConfig(e,{id:t,searchForm:{text:""},orderBy:w,order:C});k("tables",n,{path:"/"})}M(a)}),[k,N,I,t,w,C]),I&&!y?Object(E.jsx)(A,{header:Object(E.jsx)(B,{id:t,data:j,createButton:m,theme:a,tableConfig:I,title:i,icon:r,pageLayout:L}),content:Object(E.jsx)(s.a,{component:d.a.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"shadow-none lg:shadow",square:!0,children:Object(E.jsx)(b.a,{data:o,headCells:p,editColumn:h,deleteItemsAction:f,openDialog:x,closeDialog:O,showMessage:g,rowTitleProperty:v,tableConfig:I})}),leftSidebarContent:D?Object(E.jsx)(R,{filterForm:D}):null,ref:L,sidebarInner:!0,innerScroll:!0}):y?Object(E.jsx)(l.a,{}):Object(E.jsx)(E.Fragment,{})}},1315:function(e,t,a){"use strict";a.r(t);var n=a(16),i=a(1018),c=a(40),r=a(31),l=a(17),o=a(1),s=a(1107),d=a(250),u=a(70),b=a(1070),j=a(549),p=a(0);t.default=function(e){var t=Object(l.b)(),a=Object(i.a)("HRC","istitutoFormazione").t,h=Object(b.a)(["tables"]),m=Object(n.a)(h,2),f=m[0],x=(m[1],Object(o.useState)(null)),O=Object(n.a)(x,2),g=O[0],v=O[1],y=Object(l.c)(j.d),w=Object(l.c)(c.e),C=Object(o.useState)(!0),D=Object(n.a)(C,2),P=D[0],S=D[1],N=Object(o.useState)([]),E=Object(n.a)(N,2),k=E[0],z=E[1];Object(o.useEffect)((function(){t(Object(j.c)()).then((function(){return S(!1)}))}),[t]),Object(o.useEffect)((function(){var e,t;(null===g||void 0===g||null===(e=g.searchForm)||void 0===e||null===(t=e.text)||void 0===t?void 0:t.length)?z(r.a.filter(y,(function(e){var t=g.searchForm.text.toLowerCase();return e.ragioneSociale.toLowerCase().includes(t)}))):z(y)}),[y,g]),Object(o.useEffect)((function(){var e=f.tables;v(e.find((function(e){return"hrc"===e.id})))}),[f]);var T=function(e,t,a,n,i){return{id:e,numeric:t,disablePadding:a,alignContent:n,label:i}},F=[T("ragioneSociale",!1,!1,"left","Ragione Sociale"),T("indirizzo",!1,!1,"left","Indirizzo"),T("citta",!1,!1,"left","Citt\xe0"),T("provincia",!1,!1,"left","Provincia"),T("partitaIva",!1,!1,"left","PIVA"),T("pec",!1,!1,"left","PEC")];return Object(p.jsx)(s.a,{loading:P,theme:w,id:"hrc",data:k,exportData:k,headCells:F,title:a("Title"),icon:"apartment",editColumn:{updateEnabled:!0,editLink:"/hrc",deleteEnabled:!1},createButton:{enabled:!0,icon:"add",label:a("Nuovo"),link:"/hrc/new"},deleteItemsAction:function(e){return function(t){return t(Object(j.b)(e))}},showMessage:u.c,openDialog:d.c,closeDialog:d.a,rowTitleProperty:"ragioneSociale",orderByDefault:"ragioneSociale",orderDirDefault:"asc"})}}}]);