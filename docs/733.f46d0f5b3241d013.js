"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[733],{2154:(A,f,s)=>{s.d(f,{J:()=>_});var o=s(4946),e=s(6814),b=s(3965),v=s(95),g=s(3259);const n=function(){return{width:"100%"}},M=function(m,C){return{"ng-invalid":m,"ng-dirty":C}};let _=(()=>{var m;class C{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new o.vpe,this.onChange=new o.vpe,this.inputModelChange=new o.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(m=C).\u0275fac=function(E){return new(E||m)},m.\u0275cmp=o.Xpm({type:m,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(E,p){1&E&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),o._uU(4),o.qZA(),o.TgZ(5,"p-dropdown",4),o.NdJ("ngModelChange",function(T){return p.inputModel=T})("onBlur",function(){return p.onLeaveControl()})("onChange",function(){return p.onChangeControl()}),o.qZA(),o.TgZ(6,"small",5),o._uU(7),o.qZA()()()()),2&E&&(o.xp6(2),o.Q6J("ngClass",!0===p.dropdownAxis?"formgroup-inline":"displayBlock"),o.xp6(1),o.s9C("htmlFor",p.labelName),o.xp6(1),o.Oqu(p.labelName),o.xp6(1),o.Akn(o.DdM(16,n)),o.MGl("placeholder","Select ",p.labelName,""),o.Q6J("filter",!0)("options",p.options)("ngModel",p.inputModel)("optionLabel",p.optionLabel)("optionValue",p.optionValue)("appendTo",p.appendTo)("ngClass",o.WLB(17,M,""!==p.errorMessages,""!==p.errorMessages))("disabled",p.disabled),o.xp6(1),o.s9C("pTooltip",p.errorMessages),o.xp6(1),o.Oqu(p.errorMessages))},dependencies:[e.mk,b.Lt,v.JJ,v.On,g.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),C})()},7934:(A,f,s)=>{s.d(f,{G:()=>D});var o=s(5861),e=s(4946),b=s(7664),v=s(6113),g=s(5219),n=s(6814),M=s(707),_=s(4104);function m(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function C(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function h(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function E(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function p(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function N(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function T(d,l){if(1&d){const c=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let D=(()=>{var d;class l{constructor(a,t,i,r){this._router=a,this._service=t,this._activatedRoute=i,this._messageService=r,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var a=this;return(0,o.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),console.log(a),a._activatedRoute.paramMap.subscribe(function(){var t=(0,o.Z)(function*(i){let r=i.get("params");if(null!=r&&null!=r){let u=JSON.parse(atob(r)),G=a._service.getDocPermissions(u).subscribe(w=>{G=w.data[0],a.permissions(u,G)})}else a._router.navigate(["/home"],{relativeTo:a._activatedRoute})});return function(i){return t.apply(this,arguments)}}())})()}permissions(a,t){console.log("aaa",a),null!=a&&null!=a&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=a,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:a}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:a}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(d=l).\u0275fac=function(a){return new(a||d)(e.Y36(b.F0),e.Y36(v.f),e.Y36(b.gz),e.Y36(g.ez))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,m,1,0,"button",4),e.YNc(6,C,1,0,"button",5),e.YNc(7,h,1,0,"button",6),e.YNc(8,E,1,0,"button",7),e.YNc(9,p,1,0,"button",8),e.YNc(10,N,1,0,"button",9),e.YNc(11,T,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&a&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[n.O5,M.Hq,_.FN]}),l})()},1038:(A,f,s)=>{s.d(f,{g:()=>v});var o=s(4946),e=s(6113),b=s(5219);let v=(()=>{var g;class n{constructor(_,m){this._service=_,this._messageService=m}onSaveJson(_,m,C){console.log(_),console.log(C),this._service.serpostData(m,C).subscribe(h=>{console.log(h),"200"==h.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Create Successfully `}):"201"==h.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Update Successfully `}):"500"==h.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Unable to Create / Update Successfully `})})}}return(g=n).\u0275fac=function(_){return new(_||g)(o.Y36(e.f),o.Y36(b.ez))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-saving"]],decls:0,vars:0,template:function(_,m){}}),n})()},733:(A,f,s)=>{s.r(f),s.d(f,{GenericdetailsModule:()=>d});var o=s(6814),e=s(5861),b=s(6990),v=s(7934),g=s(1038),n=s(4946),M=s(6113),_=s(7664),m=s(5219),C=s(7338),h=s(8911),E=s(2154);const p=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let N=(()=>{var l;class c{constructor(t,i,r){this._service=t,this._activatedRoute=i,this._messageService=r,this.pageTitle="Generic Details",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericDetails={genericName:"",clasificationName:"",subClassificationName:"",standrdAdultDose:"",status:"ZLS11",crability:"",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyGenericDetails=JSON.stringify(this.genericDetails),this.geneticClassificationList=[],this.geneticSubClassificationList=[],this.zeroLevelEntity=[],this.critialityList=[],this.statusList=[],this.errorMsgs={clasificationNameReq:"",genericNameReq:""}}onGetErrorMsgs(t,i){switch(t){case"clasificationName":this.errorMsgs.clasificationNameReq=""==this.genericDetails[t]||null==this.genericDetails[t]||null==this.genericDetails[t]?this._service.onGetErrorMsgs(t,!0,"Clasification Name"):"";break;case"genericName":this.errorMsgs.genericNameReq=""==this.genericDetails[t]||null==this.genericDetails[t]||null==this.genericDetails[t]?this._service.onGetErrorMsgs(t,!0,"Generic Name"):""}}ngOnInit(){var t=this;return(0,e.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._activatedRoute.paramMap.subscribe(i=>{let r=i.get("param");null!=r?(r=JSON.parse(atob(r)),t.getMasterData(r._id),t.pageMode=r.mode):(t.isEditable=!0,t.pageMode="NEW"),t.isEditable="VIEW"!=t.pageMode}),t._service.serGetDataobject("getGenericClassificationDetails",{status:"ZLS11"}).subscribe(i=>{t.geneticClassificationList=i.data}),t._service.serGetDataobject("getGenericSubClassificationDetails",{status:"ZLS11"}).subscribe(i=>{t.geneticSubClassificationList=i.data}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(i=>{t.statusList=i.data[0].subMasterData}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLCra1"}).subscribe(i=>{t.critialityList=i.data[0].subMasterData}),t._service.serGetData("getGeneralMaster").subscribe(i=>{t.zeroLevelEntity=i.data;let r=b.filter(t.zeroLevelEntity,{masterid:"ZLC9"});b.forEach(r,(u,G)=>{t.statusList.push({label:u.mastername,value:u._id})})})})()}getMasterData(t){this._service.serGetDataobject("getGenericDetails",{_id:t}).subscribe(i=>{console.log("dt",i),this.genericDetails=i.data[0],this.genericDetails._id=this.genericDetails._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){b.forEach(["genericName","clasificationName"],u=>{this.onGetErrorMsgs(u,!0)}),this._service.showErr(this.errorMsgs)?this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}):(this.saving.onSaveJson(this.pageTitle,"insertGenericDetails",[this.genericDetails]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode)}onClearClick(){this.genericDetails=JSON.parse(this.emptyGenericDetails)}}return(l=c).\u0275fac=function(t){return new(t||l)(n.Y36(M.f),n.Y36(_.gz),n.Y36(m.ez))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-genericdetails"]],viewQuery:function(t,i){if(1&t&&(n.Gf(v.G,5),n.Gf(g.g,5)),2&t){let r;n.iGM(r=n.CRH())&&(i.header=r.first),n.iGM(r=n.CRH())&&(i.saving=r.first)}},decls:20,vars:44,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","options","disabled","errorMessages","optionLabel","optionValue","inputModelChange","onBlur"],[3,"labelName","inputModel","options","disabled","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],["saving",""]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),n.NdJ("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),n.qZA()(),n.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"app-inputtext",5),n.NdJ("inputModelChange",function(u){return i.genericDetails.genericName=u})("onBlur",function(){return i._service.onGetErrorMsgs(i.genericDetails,"genericName",!0)})("onBlur",function(){return i.onGetErrorMsgs("genericName",!0)}),n.qZA()(),n.TgZ(8,"div",4)(9,"app-dropdown",6),n.NdJ("inputModelChange",function(u){return i.genericDetails.clasificationName=u})("onBlur",function(){return i.onGetErrorMsgs("clasificationName",!0)}),n.qZA()(),n.TgZ(10,"div",4)(11,"app-dropdown",7),n.NdJ("inputModelChange",function(u){return i.genericDetails.subClassificationName=u}),n.qZA()(),n.TgZ(12,"div",4)(13,"app-inputtext",8),n.NdJ("inputModelChange",function(u){return i.genericDetails.standrdAdultDose=u}),n.qZA()(),n.TgZ(14,"div",4)(15,"app-dropdown",9),n.NdJ("inputModelChange",function(u){return i.genericDetails.crability=u}),n.qZA()(),n.TgZ(16,"div",4)(17,"app-dropdown",9),n.NdJ("inputModelChange",function(u){return i.genericDetails.status=u}),n.qZA()()()()(),n._UZ(18,"app-saving",null,10)),2&t&&(n.xp6(2),n.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",i.onClear)("onEdit",i.onEdit)("onView",i.onView)("redirectToGrid",i.redirectToGrid),n.xp6(3),n.Akn(n.DdM(43,p)),n.xp6(2),n.s9C("errorMessages",i._service.errorMsgs.genericName),n.s9C("errorMessages",i.errorMsgs.genericNameReq),n.Q6J("labelName","Generic Name")("inputModel",i.genericDetails.genericName)("disabled",!i.isEditable),n.xp6(2),n.s9C("errorMessages",i.errorMsgs.clasificationNameReq),n.Q6J("labelName","Classification Name")("inputModel",i.genericDetails.clasificationName)("options",i.geneticClassificationList)("disabled",!i.isEditable)("optionLabel","clasificationName")("optionValue","_id"),n.xp6(2),n.Q6J("labelName","Sub Classification Name")("inputModel",i.genericDetails.subClassificationName)("options",i.geneticSubClassificationList)("disabled",!i.isEditable)("optionLabel","subClasificationName")("optionValue","_id"),n.xp6(2),n.Q6J("labelName","standrd Adult Dose")("inputModel",i.genericDetails.standrdAdultDose)("disabled",!i.isEditable),n.xp6(2),n.Q6J("labelName","Crability")("inputModel",i.genericDetails.crability)("disabled",!i.isEditable)("options",i.critialityList)("optionLabel","subMasterName")("optionValue","subMasterId"),n.xp6(2),n.Q6J("labelName","Status")("inputModel",i.genericDetails.status)("disabled",!i.isEditable)("options",i.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[C.P,h.G,E.J,v.G,g.g]}),c})();var T=s(8032);const D=[{path:"",component:N}];let d=(()=>{var l;class c{}return(l=c).\u0275fac=function(t){return new(t||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[o.ez,T.u,_.Bz.forChild(D)]}),c})()}}]);