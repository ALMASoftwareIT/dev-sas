(this["webpackJsonpsas-fe"]=this["webpackJsonpsas-fe"]||[]).push([[19],{1077:function(e,t,a){"use strict";var n=a(1196),i=a(1197),l=a(1198),r=a(1043),c=a(1199),o=a(0);t.a=function(e){var t=e.title,a=e.content,s=e.cancel,d=e.confirm,u=e.cancelDialog,b=e.confirmDialog;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(n.a,{id:"alert-dialog-title",children:t}),Object(o.jsx)(i.a,{children:Object(o.jsx)(l.a,{id:"alert-dialog-description",children:a})}),Object(o.jsxs)(c.a,{children:[Object(o.jsx)(r.a,{onClick:function(){return u()},color:"primary",children:s}),Object(o.jsx)(r.a,{onClick:function(){return b()},color:"primary",autoFocus:!0,children:d})]})]})}},1080:function(e,t,a){"use strict";var n=a(6),i={id:"",searchForm:{text:""},rowsPerPage:25,order:"asc",orderBy:"",selected:[],page:0},l={updateTableConfig:function(e,t){var a=e.find((function(e){return e.id===t.id}));return a?(e=e.filter((function(e){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),t)):e.push(Object(n.a)(Object(n.a)({},i),t)),e},updateRowsPerPage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{rowsPerPage:t.rowsPerPage,page:0})),e},updateOrder:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{order:t.order})),e},updateOrderBy:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{orderBy:t.orderBy})),e},updateSelected:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{selected:t.selected})),e},updatePage:function(e,t){var a=e.find((function(e){return e.id===t.id}));return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(Object(n.a)(Object(n.a)({},a),{},{page:t.page})),e},updateSearchText:function(e,t){var a=e.find((function(e){return e.id===t.id})),i=Object(n.a)(Object(n.a)({},a),{},{searchForm:Object(n.a)(Object(n.a)({},a.searchForm),{},{text:t.searchText}),page:0});return(e=e.filter((function(e,t,n){return e.id!==a.id}))).push(i),e}};t.a=l},1087:function(e,t,a){"use strict";var n=a(12),i=function(e){var t=e.condition,a=e.children;return t?a:null};i.propTypes={condition:a.n(n).a.bool.isRequired},i.defaultProps={condition:!1},t.a=i},1099:function(e,t,a){"use strict";var n=a(16),i=a(1221),l=a(37),r=a(1222),c=a(1202),o=a(1223),s=a(1070),d=a(1240),u=a(1201),b=a(1185),j=a(58),m=a(1048),h=a(1028),f=a(1029),p=a(1200),O=a(1242),x=a(1033),g=a(998),v=a(17),y=a(1018),w=a(1),C=a(438),N=a(1041),D=a(1e3),S=a(1042),P=a(1037),E=a(1077),R=a(0),T=function(e){var t=e.onSelectAllClick,a=e.order,i=e.orderBy,l=e.numSelected,r=e.setSelected,o=e.rowCount,s=e.onRequestSort,d=e.headCells,j=e.editColumn,T=e.selectedItemIds,I=e.deleteItemsAction,k=e.openDialog,F=e.closeDialog,A=e.showMessage,z=Object(v.b)(),B=Object(y.a)("Table").t,M=Object(w.useState)(null),U=Object(n.a)(M,2),H=U[0],L=U[1];return Object(R.jsx)(p.a,{children:Object(R.jsxs)(u.a,{className:"h-48 sm:h-64",children:[j.deleteEnabled&&Object(R.jsxs)(c.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(R.jsx)(b.a,{color:"primary",indeterminate:l>0&&l<o,checked:o>0&&l===o,onChange:t,inputProps:{"aria-label":"select all"}}),l>0&&Object(R.jsxs)(m.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(R.jsx)(f.a,{"aria-owns":H?"selectedItemsMenu":null,"aria-haspopup":"true",onClick:function(e){L(e.currentTarget)},size:"large",children:Object(R.jsx)(h.a,{children:"more_horiz"})}),Object(R.jsx)(C.a,{id:"selectedItemsMenu",anchorEl:H,open:Boolean(H),onClose:function(){L(null)},children:Object(R.jsx)(D.a,{children:Object(R.jsxs)(N.a,{onClick:function(e){e.stopPropagation(),z(k({children:Object(R.jsx)(E.a,{title:B("Eliminazione"),content:B("EliminazioneDomandaMultipla"),cancel:B("Annulla"),confirm:B("Conferma"),cancelDialog:function(){return z(F())},confirmDialog:function(){z(I(T)).then((function(e){e.error?z(A({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(z(A({message:B("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),z(F()),r([]))}))}})}))},children:[Object(R.jsx)(S.a,{className:"min-w-40",children:Object(R.jsx)(h.a,{children:"delete"})}),Object(R.jsx)(P.a,{primary:B("common:Delete")})]})})})]})]}),d.map((function(e){return e.disableSort?Object(R.jsx)(c.a,{className:"p-4 md:p-16",align:"left",padding:e.disablePadding?"none":"normal",children:e.label},e.id):Object(R.jsx)(c.a,{className:"p-4 md:p-16",align:"left",padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&a,children:Object(R.jsx)(x.a,{title:B("Ordina"),placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(R.jsxs)(O.a,{active:i===e.id,direction:i===e.id?a:"asc",onClick:(t=e.id,function(e){s(e,t)}),children:[e.label,i===e.id?Object(R.jsx)(m.a,{component:"span",sx:g.a,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})})},e.id);var t})),(j.updateEnabled||j.deleteEnabled)&&Object(R.jsx)(c.a,{className:"p-4 md:p-16",align:"center",children:"#"})]})})},I=a(1237),k=a(14),F=a(1108),A=Object(k.a)("div")((function(e){return{width:"100%",paddingTop:e.theme.spacing(2)}})),z=function(e){var t=e.data,a=e.customNoData,n=e.colSpan,i=Object(y.a)("Table").t;return Object(R.jsx)(u.a,{children:Object(R.jsx)(c.a,{colSpan:n,style:{borderBottom:"0"},children:Object(R.jsx)(I.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(I.a,{item:!0,xs:4,children:0===t.length&&Object(R.jsx)(A,{children:Object(R.jsx)(F.Alert,{severity:"info",children:a||i("NoData")})})})})})},"TableRowEmptyRows")},B=function(e){var t=e.row,a=e.edit,n=e.history,i=e.openDialog,l=e.closeDialog,r=e.showMessage,o=e.deleteItemsAction,s=e.rowTitleProperty,d=Object(y.a)("Table").t,u=Object(v.b)();return a.updateEnabled||a.deleteEnabled?Object(R.jsx)(c.a,{className:"p-4 md:p-16",align:"center",component:"th",children:Object(R.jsxs)(m.a,{sx:{display:"inline-flex"},children:[a.updateEnabled&&Object(R.jsx)(x.a,{title:d("Edit"),children:Object(R.jsx)("span",{children:Object(R.jsx)(f.a,{onClick:function(){return n.push("".concat(a.editLink,"/").concat(t.id))},size:"medium",children:Object(R.jsx)(h.a,{children:"edit"})})})}),a.deleteEnabled&&Object(R.jsx)(x.a,{title:d("Delete"),children:Object(R.jsx)("span",{children:Object(R.jsx)(f.a,{onClick:function(e){e.stopPropagation(),u(i({children:Object(R.jsx)(E.a,{title:d("Eliminazione"),content:d("EliminazioneDomanda",{recordName:t[s]}),cancel:d("Annulla"),confirm:d("Conferma"),cancelDialog:function(){return u(l())},confirmDialog:function(){u(o([t.id])).then((function(e){e.error?u(r({message:e.error.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"})):(u(r({message:d("Cancellazione effettuata correttamente"),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),u(l()))}))}})}))},size:"medium",children:Object(R.jsx)(h.a,{children:"delete"})})})})]})}):null};B.defaultProps={};var M=Object(j.j)(B),U={NoData:"No data",RetrievingDataError:"Retrieving data failed",selected:"Selected",Annulla:"Cancel",Salva:"Save",Elimina:"Delete",Nuovo:"New",Risultati:"Results",Conferma:"Confirm",Eliminazione:"Delete",EliminazioneDomanda:"Are you sure you want to delete '{{recordName}}'?",EliminazioneDomandaMultipla:"Are you sure you want to delete all the selected elements?"},H={NoData:"Nessun dato",RetrievingDataError:"Errore durante il recupero dei dati",selected:"Selezionati",Annulla:"Annulla",Salva:"Salva",Elimina:"Elimina",Nuovo:"Nuovo",Risultati:"Risultati",Conferma:"Conferma",Eliminazione:"Eliminazione",EliminazioneDomanda:"Confermi di voler eliminare il record '{{recordName}}'?",EliminazioneDomandaMultipla:"Confermi di voler eliminare tutti i record selezionati?"},L=a(1080);l.a.addResourceBundle("en","Table",U),l.a.addResourceBundle("it","Table",H);var _=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},q=function(e,t){return"desc"===e?function(e,a){return _(e,a,t)}:function(e,a){return-_(e,a,t)}},V=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))},W=function(e){var t=e.data,a=e.customNoData,l=e.headCells,j=e.editColumn,m=e.deleteItemsAction,h=e.openDialog,f=e.closeDialog,p=e.showMessage,O=e.rowTitleProperty,x=e.history,g=e.tableConfig,v=Object(s.a)(["tables"]),y=Object(n.a)(v,2),w=y[0],C=y[1],N=g.rowsPerPage,D=g.order,S=g.orderBy,P=g.selected,E=g.page,I=E>0?Math.max(0,(1+E)*N-t.length):0;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(o.a,{className:"flex flex-1",children:Object(R.jsxs)(i.a,{stickyHeader:!0,className:"simple borderless","aria-labelledby":"tableTitle",children:[Object(R.jsx)(T,{selectedItemIds:P,numSelected:P.length,setSelected:function(e){var t=w.tables;L.a.updateSelected(t,{id:g.id,selected:e})},order:D,orderBy:S,onSelectAllClick:function(e){var a=w.tables;if(e.target.checked){var n=t.map((function(e){return e.id}));L.a.updateSelected(a,{id:g.id,selected:n})}else L.a.updateSelected(a,{id:g.id,selected:[]})},onRequestSort:function(e,t){var a=w.tables,n=S===t&&"asc"===D,i=L.a.updateOrder(a,{id:g.id,order:n?"desc":"asc"});i=L.a.updateOrderBy(i,{id:g.id,orderBy:t}),C("tables",i,{path:"/"})},rowCount:t.length,headCells:l,editColumn:j,deleteItemsAction:m,openDialog:h,closeDialog:f,showMessage:p}),Object(R.jsxs)(r.a,{children:[t.length>0&&V(t,q(D,S)).slice(E*N,E*N+N).map((function(e){var t,a=(t=e.id,-1!==P.indexOf(t)),n="enhanced-table-checkbox-".concat(e.id);return Object(R.jsxs)(u.a,{hover:!0,className:"h-72 cursor-pointer",role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,onClick:function(t){x.push("".concat(j.editLink,"/").concat(e.id))},children:[j.deleteEnabled&&Object(R.jsx)(c.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(R.jsx)(b.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":n},onClick:function(e){return e.stopPropagation()},onChange:function(t){return function(e,t){var a=P.indexOf(t),n=[],i=w.tables;-1===a?n=n.concat(P,t):0===a?n=n.concat(P.slice(1)):a===P.length-1?n=n.concat(P.slice(0,-1)):a>0&&(n=n.concat(P.slice(0,a),P.slice(a+1))),L.a.updateSelected(i,{id:g.id,selected:n})}(0,e.id)}})},"".concat(e.id,"0")),l.filter((function(e){return!e.invisible||!1===e.invisible})).map((function(t,a){return Object(R.jsx)(c.a,{align:t.alignContent,scope:"row",component:"th",children:"object"===typeof e[t.id]?e[t.id]:Object(R.jsx)("div",{dangerouslySetInnerHTML:{__html:e[t.id]}})},"".concat(e.id).concat(a))})),Object(R.jsx)(M,{rowTitleProperty:O,row:e,edit:j,scope:"row",component:"th",deleteItemsAction:m,openDialog:h,closeDialog:f,showMessage:p})]},e.id)})),I>0&&Object(R.jsx)(u.a,{style:{height:72*I},children:Object(R.jsx)(c.a,{colSpan:l.length+(j.updateEnabled||j.deleteEnabled?1:0)+1})},"TableRowEmptyRows"),0===t.length&&Object(R.jsx)(z,{data:t,customNoData:a,colSpan:l.length+(j.updateEnabled||j.deleteEnabled?1:0)+1})]})]})}),t.length>0&&Object(R.jsx)(d.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:N,page:E,onPageChange:function(e,t){var a=w.tables,n=L.a.updatePage(a,{id:g.id,page:t});C("tables",n,{path:"/"})},onRowsPerPageChange:function(e){var t=w.tables,a=L.a.updateRowsPerPage(t,{id:g.id,rowsPerPage:e.target.value});C("tables",a,{path:"/"})}})]})};W.defaultProps={data:[],rowTemplateComponent:null,customNoData:null,rootClassName:"",refScrollablePanel:null,checkInViewportEnabled:!0,headCells:[],title:null,edit:{updateEnabled:!1,updateLink:"#",deleteEnabled:!1},rowTitleProperty:"title",tableConfig:null};t.a=Object(j.j)(W)},1107:function(e,t,a){"use strict";var n=a(16),i=a(4),l=a(1),r=a(403),c=a(247),o=a(14),s=a(185),d=a(1068),u=a(1070),b=a(1099),j=a(1018),m=a(1071),h=a(1028),f=a(1043),p=a(612),O=a(1029),x=a(1048),g=a(209),v=a(1061),y=a(58),w=a(1087),C=a(1152),N=a.n(C),D=a(1150),S=a.n(D),P=a(1151),E=a(0),R=function(e){var t=e.label,a=e.data,n=e.fileName;return Object(E.jsx)(f.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:Object(E.jsx)(N.a,{}),onClick:function(e){return function(e,t){var a={Sheets:{data:P.a.json_to_sheet(e)},SheetNames:["data"]},n=P.b(a,{bookType:"xlsx",type:"array"}),i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});S.a.saveAs(i,t+".xlsx")}(a,n)},children:t})},T=a(1153),I=a.n(T),k=a(1080),F=function(e){var t=e.id,a=e.data,i=e.title,l=e.icon,r=e.createButton,c=e.history,o=e.tableConfig,b=e.theme,y=(e.pageLayout,o.searchForm),C=Object(j.a)("Table").t,N=Object(u.a)(["tables"]),D=Object(n.a)(N,2),S=D[0],P=D[1],T=function(e){var a=S.tables,n=k.a.updateSearchText(a,{searchText:e,id:t});P("tables",n,{path:"/"})};return Object(E.jsxs)("div",{className:"flex flex-1 items-center justify-between p-4 sm:p-24",children:[Object(E.jsxs)("div",{className:"flex flex-shrink items-center sm:w-224",children:[Object(E.jsx)(m.a,{lgUp:!0,children:Object(E.jsx)(O.a,{onClick:function(t){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(E.jsx)(h.a,{children:"search"})})}),Object(E.jsxs)("div",{className:"flex items-center",children:[Object(E.jsx)(h.a,{component:d.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:l}),Object(E.jsx)(g.a,{component:d.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:i})]})]}),Object(E.jsx)("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12",children:Object(E.jsx)(v.a,{theme:b,children:Object(E.jsxs)(s.a,{component:d.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex p-4 items-center w-full max-w-512 h-48 px-16 py-4 shadow",children:[Object(E.jsx)(h.a,{color:"action",children:"search"}),Object(E.jsx)(p.a,{placeholder:C("Cerca"),className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:y.text,inputProps:{"aria-label":"Search"},onChange:function(e){T(e.target.value)}}),Object(E.jsx)(w.a,{condition:""!==y.text,children:Object(E.jsx)(O.a,{size:"small",onClick:function(){T("")},children:Object(E.jsx)(I.a,{})})})]})})}),Object(E.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(E.jsx)(x.a,{m:1,children:Object(E.jsx)(R,{label:C("Excel"),data:a,fileName:"dati"})})}),Object(E.jsx)(w.a,{condition:r.enabled,children:Object(E.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(E.jsxs)(f.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:Object(E.jsx)(h.a,{children:r.icon}),onClick:function(){return c.push("".concat(r.link))},children:[Object(E.jsx)("span",{className:"hidden sm:flex",children:r.label}),Object(E.jsx)("span",{className:"flex sm:hidden",children:r.label})]})})})]})};F.defaultProps={numSelected:0,searchText:""};var A=Object(y.j)(F);var z=function(e){var t=e.filterForm,a=Object(j.a)("common").t;return Object(E.jsx)("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4",children:Object(E.jsxs)(s.a,{component:d.a.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"shadow-none lg:shadow",square:!0,children:[Object(E.jsx)("div",{className:"p-20 flex items-center",style:{backgroundColor:"#F6F7FB"},children:Object(E.jsx)(g.a,{variant:"button",display:"block",children:a("Filtri di ricerca")})}),Object(E.jsx)(x.a,{pt:1,pb:1,sx:{display:"flex",alignItems:"flex-start",flexDirection:"column",alignContent:"space-around"},children:t})]})})},B=Object(o.a)(r.a)((function(e){var t=e.theme;return{"& .FusePageSimple-header":Object(i.a)({minHeight:72,height:72},t.breakpoints.up("lg"),{minHeight:136,height:136}),"& .FusePageSimple-wrapper":{minHeight:0},"& .FusePageSimple-contentWrapper":Object(i.a)({padding:0},t.breakpoints.up("sm"),{padding:24,height:"100%"}),"& .FusePageSimple-content":{display:"flex",flexDirection:"column",height:"100%"},"& .FusePageSimple-sidebar":{width:256,border:0}}}));t.a=function(e){var t=e.id,a=e.theme,i=e.title,r=e.icon,o=e.data,j=e.exportData,m=e.headCells,h=e.editColumn,f=e.createButton,p=e.deleteItemsAction,O=e.openDialog,x=e.closeDialog,g=e.showMessage,v=e.rowTitleProperty,y=e.loading,w=e.orderByDefault,C=e.orderDirDefault,N=e.filterForm,D=Object(u.a)(["tables"]),S=Object(n.a)(D,2),P=S[0],R=S[1],T=Object(l.useState)(null),I=Object(n.a)(T,2),F=I[0],M=I[1],U=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e=P.tables,a=e.find((function(e){return e.id===t}));if(!a){var n=k.a.updateTableConfig(e,{id:t,searchForm:{text:""},orderBy:w,order:C});R("tables",n,{path:"/"})}M(a)}),[R,P,F,t,w,C]),F&&!y?Object(E.jsx)(B,{header:Object(E.jsx)(A,{id:t,data:j,createButton:f,theme:a,tableConfig:F,title:i,icon:r,pageLayout:U}),content:Object(E.jsx)(s.a,{component:d.a.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"shadow-none lg:shadow",square:!0,children:Object(E.jsx)(b.a,{data:o,headCells:m,editColumn:h,deleteItemsAction:p,openDialog:O,closeDialog:x,showMessage:g,rowTitleProperty:v,tableConfig:F})}),leftSidebarContent:N?Object(E.jsx)(z,{filterForm:N}):null,ref:U,sidebarInner:!0,innerScroll:!0}):y?Object(E.jsx)(c.a,{}):Object(E.jsx)(E.Fragment,{})}},1327:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(16),l=a(1018),r=a(1),c=a(31),o=a(40),s=a(1107),d=a(250),u=a(17),b=a(70),j=a(433),m=a(54),h=a(1070),f=a(614),p=a(615),O=a(620),x=a(1041),g=a(1048),v=a(58),y=a(1080),w=a(0),C=function(e){e.rows;var t=e.id,a=Object(l.a)("Valutazione").t,n=Object(h.a)(["tables"]),c=Object(i.a)(n,2),o=c[0],s=c[1],d=Object(r.useState)({enbaledId:"",ruoloId:""}),u=Object(i.a)(d,2),b=u[0],j=u[1],C=Object(r.useState)([]),N=Object(i.a)(C,2),D=N[0],S=N[1];Object(v.i)();Object(r.useEffect)((function(){var e=o.tables.find((function(e){return e.id===t}));e.searchForm&&j(e.searchForm)}),[b,o,t]),Object(r.useEffect)((function(){m.a.hasRole(["Admin"])?S([{label:"Amministratori di aziende",value:"HRAdmin"},{label:"Utenti di aziende",value:"HRUser"},{label:"Amministratori di istituti",value:"TRAdmin"},{label:"Valutatori",value:"TRUser"},{label:"Amministratori di BI",value:"BIAdmin"},{label:"Utenti di BI",value:"BIUser"}]):m.a.hasRole(["HRAdmin"])?S([{label:"Amministratori",value:"HRAdmin"},{label:"Utenti",value:"HRUser"}]):m.a.hasRole(["TRAdmin"])?S([{label:"Amministratori",value:"TRAdmin"},{label:"Valutatori",value:"TRUser"}]):m.a.hasRole(["BIAdmin"])&&S([{label:"Amministratori",value:"BIAdmin"},{label:"Utenti",value:"BIUser"}])}),[D,o,t]);var P=function(e,a){var n=o.tables,i=n.find((function(e){return e.id===t}));i.searchForm[a]=e.target.value;var l=y.a.updateTableConfig(n,i);s("tables",l,{path:"/"})};return b?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.a,{sx:{p:1,width:"100%"},children:Object(w.jsxs)(f.a,{fullWidth:!0,children:[Object(w.jsx)(p.a,{id:"demo-enabled-select-label",children:a("Abilitati")}),Object(w.jsxs)(O.a,{labelId:"demo-enabled-label",id:"demo-enabled-select",value:b.enabledId,label:a("Abilitati"),onChange:function(e){return P(e,"enabledId")},children:[Object(w.jsx)(x.a,{value:"",children:Object(w.jsx)("em",{children:a("Nessuna selezione")})},"demo-enabled-select-0"),Object(w.jsx)(x.a,{value:"1",children:a("Solo abilitati")},"demo-enabled-select-1"),Object(w.jsx)(x.a,{value:"2",children:a("Solo disabilitati")},"demo-enabled-select-2")]})]})}),Object(w.jsx)(g.a,{sx:{p:1,width:"100%"},children:Object(w.jsxs)(f.a,{fullWidth:!0,children:[Object(w.jsx)(p.a,{id:"demo-ruolo-select-label",children:a("Ruolo")}),Object(w.jsxs)(O.a,{labelId:"demo-ruolo-label",id:"demo-ruolo-select",value:b.ruoloId,label:a("Ruolo"),onChange:function(e){return P(e,"ruoloId")},children:[Object(w.jsx)(x.a,{value:"",children:Object(w.jsx)("em",{children:a("Nessuna selezione")})},"demo-ruolo-select"),D.map((function(e){return Object(w.jsx)(x.a,{value:e.value,children:e.label},"demo-ruolo-select-".concat(e.value))}))]})]})})]}):null};t.default=function(e){var t=Object(u.b)(),a=Object(l.a)("UserManager").t,f=Object(h.a)(["tables"]),p=Object(i.a)(f,2),O=p[0],x=(p[1],Object(r.useState)(null)),g=Object(i.a)(x,2),v=g[0],y=g[1],N=Object(u.c)(j.d),D=Object(r.useMemo)((function(){return N?N.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{enabledTxt:e.enabled?a("Si"):a("No"),roles:"".concat(e.attributes.mainRole," ").concat(e.attributes.hrcRole," ").concat(e.attributes.trcRole," ").concat(e.attributes.biRole)})})):[]}),[N,a]),S=Object(u.c)(o.e),P=Object(r.useState)(!0),E=Object(i.a)(P,2),R=E[0],T=E[1],I=Object(r.useState)(D),k=Object(i.a)(I,2),F=k[0],A=k[1];Object(r.useEffect)((function(){t(Object(j.b)()).then((function(){return T(!1)}))}),[t]),Object(r.useEffect)((function(){var e=O.tables;y(e.find((function(e){return"user"===e.id})))}),[O]),Object(r.useEffect)((function(){if(null===v||void 0===v?void 0:v.searchForm){var e=D;v.searchForm.text&&(e=c.a.filter(e,(function(e){var t=v.searchForm.text.toLowerCase();return e.lastName.toLowerCase().includes(t)||e.firstName.toLowerCase().includes(t)}))),v.searchForm.enabledId&&(e=c.a.filter(e,(function(e){return"1"===v.searchForm.enabledId?e.enabled:!e.enabled}))),v.searchForm.ruoloId&&(e=c.a.filter(e,(function(e){var t=v.searchForm.ruoloId;return e.roles.includes(t)}))),A(e)}else A(D)}),[D,v]);var z=function(e,t,a,n,i){return{id:e,numeric:t,disablePadding:a,alignContent:n,label:i}},B=[z("lastFirstName",!1,!1,"left",a("Utente")),z("email",!1,!1,"left",a("Email")),z("enabledTxt",!1,!1,"left",a("Enabled")),z("roles",!1,!1,"left",a("Ruoli"))];return Object(w.jsx)(s.a,{loading:R,theme:S,id:"user",data:F,exportData:F.map((function(e){return{lastFirstName:e.lastFirstName,email:e.email,enabledTxt:e.enabledTxt,roles:e.roles}})),headCells:B,title:a("Title"),icon:"group",editColumn:{updateEnabled:!0,editLink:"/user",deleteEnabled:!1},createButton:{enabled:!0,icon:"person_add",label:a("Nuovo"),link:"/user/new"},showMessage:b.c,openDialog:d.c,closeDialog:d.a,rowTitleProperty:"Utente",orderByDefault:"lastFirstName",orderDirDefault:"asc",filterForm:m.a.hasRole(["Admin"])?Object(w.jsx)(C,{rows:F,id:"user"}):null})}}}]);