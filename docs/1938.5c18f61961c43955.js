"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[1938],{2154:(A,b,s)=>{s.d(b,{J:()=>u});var r=s(4946),e=s(6814),M=s(3965),f=s(95),_=s(3259);const n=function(){return{width:"100%"}},E=function(m,h){return{"ng-invalid":m,"ng-dirty":h}};let u=(()=>{var m;class h{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new r.vpe,this.onChange=new r.vpe,this.inputModelChange=new r.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(m=h).\u0275fac=function(T){return new(T||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(T,c){1&T&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),r._uU(4),r.qZA(),r.TgZ(5,"p-dropdown",4),r.NdJ("ngModelChange",function(S){return c.inputModel=S})("onBlur",function(){return c.onLeaveControl()})("onChange",function(){return c.onChangeControl()}),r.qZA(),r.TgZ(6,"small",5),r._uU(7),r.qZA()()()()),2&T&&(r.xp6(2),r.Q6J("ngClass",!0===c.dropdownAxis?"formgroup-inline":"displayBlock"),r.xp6(1),r.s9C("htmlFor",c.labelName),r.xp6(1),r.Oqu(c.labelName),r.xp6(1),r.Akn(r.DdM(16,n)),r.MGl("placeholder","Select ",c.labelName,""),r.Q6J("filter",!0)("options",c.options)("ngModel",c.inputModel)("optionLabel",c.optionLabel)("optionValue",c.optionValue)("appendTo",c.appendTo)("ngClass",r.WLB(17,E,""!==c.errorMessages,""!==c.errorMessages))("disabled",c.disabled),r.xp6(1),r.s9C("pTooltip",c.errorMessages),r.xp6(1),r.Oqu(c.errorMessages))},dependencies:[e.mk,M.Lt,f.JJ,f.On,_.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),h})()},7934:(A,b,s)=>{s.d(b,{G:()=>k});var r=s(5861),e=s(4946),M=s(7664),f=s(6113),_=s(5219),n=s(6814),E=s(707),u=s(4104);function m(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function h(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function g(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function T(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function c(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function y(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function S(d,v){if(1&d){const l=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(l);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let k=(()=>{var d;class v{constructor(a,t,o,i){this._router=a,this._service=t,this._activatedRoute=o,this._messageService=i,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var a=this;return(0,r.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),console.log(a),a._activatedRoute.paramMap.subscribe(function(){var t=(0,r.Z)(function*(o){let i=o.get("params");if(null!=i&&null!=i){let p=JSON.parse(atob(i)),C=a._service.getDocPermissions(p).subscribe(w=>{C=w.data[0],a.permissions(p,C)})}else a._router.navigate(["/home"],{relativeTo:a._activatedRoute})});return function(o){return t.apply(this,arguments)}}())})()}permissions(a,t){console.log("aaa",a),null!=a&&null!=a&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=a,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:a}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:a}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(d=v).\u0275fac=function(a){return new(a||d)(e.Y36(M.F0),e.Y36(f.f),e.Y36(M.gz),e.Y36(_.ez))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,m,1,0,"button",4),e.YNc(6,h,1,0,"button",5),e.YNc(7,g,1,0,"button",6),e.YNc(8,T,1,0,"button",7),e.YNc(9,c,1,0,"button",8),e.YNc(10,y,1,0,"button",9),e.YNc(11,S,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&a&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[n.O5,E.Hq,u.FN]}),v})()},1038:(A,b,s)=>{s.d(b,{g:()=>f});var r=s(4946),e=s(6113),M=s(5219);let f=(()=>{var _;class n{constructor(u,m){this._service=u,this._messageService=m}onSaveJson(u,m,h){console.log(u),console.log(h),this._service.serpostData(m,h).subscribe(g=>{console.log(g),"200"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Create Successfully `}):"201"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Update Successfully `}):"500"==g.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Unable to Create / Update Successfully `})})}}return(_=n).\u0275fac=function(u){return new(u||_)(r.Y36(e.f),r.Y36(M.ez))},_.\u0275cmp=r.Xpm({type:_,selectors:[["app-saving"]],decls:0,vars:0,template:function(u,m){}}),n})()},1938:(A,b,s)=>{s.r(b),s.d(b,{StoretypemasterModule:()=>v});var r=s(6814),e=s(5861),M=s(6990),f=s(7934),_=s(1038),n=s(4946),E=s(6113),u=s(7664),m=s(5219),h=s(7338),g=s(8911),T=s(2154),c=s(8213);const y=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let S=(()=>{var l;class a{constructor(o,i,p){this._service=o,this._activatedRoute=i,this._messageService=p,this.pageTitle="Type",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.store={storetypename:"",storedescription:"",status:"ZLS11",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyStore=JSON.stringify(this.store),this.statusList=[],this.errorMsgs={storetypename:""}}ngOnInit(){var o=this;return(0,e.Z)(function*(){0==Object.keys(o._service.appConfig).length&&(yield o._service.getConfigData()),o._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(i=>{console.log(i),o.statusList=i.data[0].subMasterData,console.log("this.statusList",o.statusList)}),o._activatedRoute.paramMap.subscribe(i=>{let p=i.get("param");null!=p?(p=JSON.parse(atob(p)),o.getMasterData(p._id),o.pageMode=p.mode):(o.isEditable=!0,o.pageMode="NEW"),o.isEditable="VIEW"!=o.pageMode})})()}getMasterData(o){this._service.serGetDataobject("getStoreTypeMaster",{_id:o}).subscribe(i=>{console.log("dt",i),this.store=i.data[0],this.store._id=this.store._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGetErrorMsgs(o,i){"storetypename"===o&&(this.errorMsgs.storetypename=""==this.store[o]||null==this.store[o]||null==this.store[o]?this._service.onGetErrorMsgs("storetypename",!0,"Store Type Name"):"")}onSaveClick(){var o=this;return(0,e.Z)(function*(){if(M.forEach(["storetypename"],N=>{o.onGetErrorMsgs(N,!0)}),o._service.showErr(o.errorMsgs))return void o._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let C=o.store;yield o.saving.onSaveJson("Store Type Master","insertStoreTypeMaster",[C]),o.redirectToGrid="NEW"!=o.pageMode,o.onClearClick()})()}onClearClick(){"NEW"==this.pageMode?(this.store=JSON.parse(this.emptyStore),this.isEditable=!0):this.isEditable=!1}}return(l=a).\u0275fac=function(o){return new(o||l)(n.Y36(E.f),n.Y36(u.gz),n.Y36(m.ez))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-storetypemaster"]],viewQuery:function(o,i){if(1&o&&(n.Gf(f.G,5),n.Gf(_.g,5)),2&o){let p;n.iGM(p=n.CRH())&&(i.header=p.first),n.iGM(p=n.CRH())&&(i.saving=p.first)}},decls:13,vars:25,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"grid"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"inputModel","labelName","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","options","optionLabel","optionValue","inputModelChange"],[3,"labelName","rows","cols","disabled","inputModel","inputModelChange"],["saving",""]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),n.NdJ("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),n.qZA()(),n.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"div",5)(8,"app-inputtext",6),n.NdJ("inputModelChange",function(C){return i.store.storetypename=C})("onBlur",function(){return i.onGetErrorMsgs("storetypename",!0)}),n.qZA(),n.TgZ(9,"app-dropdown",7),n.NdJ("inputModelChange",function(C){return i.store.status=C}),n.qZA(),n.TgZ(10,"app-textarea",8),n.NdJ("inputModelChange",function(C){return i.store.storedescription=C}),n.qZA()()()()()(),n._UZ(11,"app-saving",null,9)),2&o&&(n.xp6(2),n.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",i.onClear)("onEdit",i.onEdit)("onView",i.onView)("redirectToGrid",i.redirectToGrid),n.xp6(3),n.Akn(n.DdM(24,y)),n.xp6(3),n.s9C("errorMessages",i.errorMsgs.storetypename),n.Q6J("inputModel",i.store.storetypename)("labelName","Store Type Name")("disabled",!i.isEditable),n.xp6(1),n.Q6J("labelName","Status")("inputModel",i.store.status)("options",i.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"),n.xp6(1),n.Q6J("labelName","Store Type Description")("rows","2")("cols","5")("disabled",!i.isEditable)("inputModel",i.store.storedescription))},dependencies:[h.P,g.G,T.J,f.G,c.R,_.g]}),a})();var k=s(8032);const d=[{path:"",component:S}];let v=(()=>{var l;class a{}return(l=a).\u0275fac=function(o){return new(o||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[r.ez,k.u,u.Bz.forChild(d)]}),a})()}}]);