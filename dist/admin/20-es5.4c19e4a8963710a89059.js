function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/cdV":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=function l(){_classCallCheck(this,l)},o=e("pMnS"),a=function(){function l(n,e){_classCallCheck(this,l),this.uiService=n,this.router=e,this.showSideBar=!0}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"closeNav",value:function(){this.showSideBar?(document.getElementById("app-sidebar").style.width="230px",document.getElementById("app-content").style["margin-left"]="230px"):(document.getElementById("app-sidebar").style.width="0",document.getElementById("app-content").style["margin-left"]="0")}},{key:"fullScreen",value:function(){var l=document.documentElement,n=l.requestFullscreen||l.webkitRequestFullScreen||l.mozRequestFullscreen||l.msRequestFullscreen;n&&n.call(l)}}]),l}(),r=e("YOl1"),s=e("iInd"),i=u["\u0275crt"]({encapsulation:0,styles:[[".app-sidebar__toggle[_ngcontent-%COMP%]{color:#000!important}"]],data:{}});function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,8,"header",[["class","app-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"a",[["class","app-header__logo"],["href","javascript://"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Debican Admin"])),(l()(),u["\u0275eld"](3,0,null,null,0,"a",[["aria-label","Hide Sidebar"],["class","app-sidebar__toggle"],["data-toggle","sidebar"],["href","javascript://"]],null,[[null,"click"]],(function(l,n,e){var u=!0,t=l.component;return"click"===n&&(t.showSideBar=!t.showSideBar,u=!1!==t.closeNav()&&u),u}),null,null)),(l()(),u["\u0275eld"](4,0,null,null,4,"ul",[["class","app-nav"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,0,"li",[["class","item_btn"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"li",[["class","item_btn"],["style","display: inline-flex;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.fullScreen()&&u),u}),null,null)),(l()(),u["\u0275ted"](-1,null,["Full Screen"]))],null,null)}var c=e("SVse"),p=e("P6It"),m=e("s7LF"),g=function(){function l(n,e,u,t,o){_classCallCheck(this,l),this.bsModalRef=n,this.http=e,this.message=u,this.router=t,this.fb=o,this.show=!1}return _createClass(l,[{key:"ngOnInit",value:function(){this.makeForm()}},{key:"makeForm",value:function(){this.resetForm=this.fb.group({old_password:["",m.Validators.required],new_password:["",m.Validators.required],changePassword:["",m.Validators.required]})}},{key:"changePassword",value:function(){this.resetForm.valid?this.resetForm.value.new_password!==this.resetForm.value.changePassword?this.message.toast("info","Password and confirmed password not matched!"):this.changePasswordCall():this.show=!0}},{key:"changePasswordCall",value:function(){var l=this;this.http.postData("",{new_password:this.resetForm.value.new_password,old_password:this.resetForm.value.old_password}).subscribe((function(n){l.bsModalRef.hide(),l.message.toast("success",p.a.updatedSuccess),localStorage.clear(),l.router.navigate(["/login"])}),(function(l){}))}},{key:"ngOnDestroy",value:function(){this.bsModalRef.hide()}}]),l}(),f=e("KRhG"),h=function(){function l(n,e,u){_classCallCheck(this,l),this.message=n,this.modalService=e,this.router=u,this.sideBar=f.c.list}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"changePassword",value:function(){this.modalService.show(g,{backdrop:"static",keyboard:!1})}},{key:"logout",value:function(){var l=this;this.message.confirm("Logout").then((function(n){n.value&&(localStorage.clear(),l.router.navigate(["/login"]))}))}}]),l}(),v=e("0UgC"),C=e("LqlI"),b=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,9,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,8,"a",[["class","app-menu__item"],["href","javascript://"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),u["\u0275did"](2,671744,[[2,4]],0,s.o,[s.l,s.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](3,1),u["\u0275did"](4,1720320,null,2,s.n,[s.l,u.ElementRef,u.Renderer2,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,1,{links:1}),u["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),u["\u0275eld"](7,0,null,null,0,"i",[["aria-hidden","true"],["class","app-menu__icon"]],[[8,"className",0]],null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"span",[["class","app-menu__label"]],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,["",""]))],(function(l,n){var e=l(n,3,0,"/"+(null==n.context.$implicit?null:n.context.$implicit.path));l(n,2,0,e),l(n,4,0,"active")}),(function(l,n){l(n,1,0,u["\u0275nov"](n,2).target,u["\u0275nov"](n,2).href),l(n,7,0,n.context.$implicit.icon),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.name)}))}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,"div",[["class","app-sidebar__overlay"],["data-toggle","sidebar"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,8,"aside",[["class","app-sidebar"],["id","app-sidebar"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,7,"ul",[["class","app-menu"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](4,278528,null,0,c.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](5,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,3,"a",[["class","app-menu__item"],["href","javascript://"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.logout()&&u),u}),null,null)),(l()(),u["\u0275eld"](7,0,null,null,0,"i",[["class","app-menu__icon fa fa-sign-out"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"span",[["class","app-menu__label"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Logout"]))],(function(l,n){l(n,4,0,n.component.sideBar)}),null)}var y=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),k=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function F(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,8,"div",[["class","app sidebar-mini"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"app-header",[],null,null,null,d,i)),u["\u0275did"](2,114688,null,0,a,[r.a,s.l],null,null),(l()(),u["\u0275eld"](3,0,null,null,1,"app-side-bar",[],null,null,null,w,b)),u["\u0275did"](4,114688,null,0,h,[v.a,C.b,s.l],null,null),(l()(),u["\u0275eld"](5,0,null,null,3,"main",[["class","app-content"],["id","app-content"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"div",[["class","container-fluid mt-5 pt-5"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](8,212992,null,0,s.q,[s.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],(function(l,n){l(n,2,0),l(n,4,0),l(n,8,0)}),null)}var R=u["\u0275ccf"]("app-layout",y,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,F,k)),u["\u0275did"](1,114688,null,0,y,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),S=e("z5nN"),N=e("rMcs"),P=e("W8s6"),M=e("atuK"),I=e("sgtA"),O=e("A1Tq"),E=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","text-error"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Please enter old password. "]))],null,null)}function A(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","text-error"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Please enter new password. "]))],null,null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","text-error"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Please enter confirm password. "]))],null,null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,o=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.changePassword()&&t),t}),null,null)),u["\u0275did"](1,16384,null,0,m["\u0275angular_packages_forms_forms_z"],[],null,null),u["\u0275did"](2,540672,null,0,m.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,m.ControlContainer,null,[m.FormGroupDirective]),u["\u0275did"](4,16384,null,0,m.NgControlStatusGroup,[[4,m.ControlContainer]],null,null),(l()(),u["\u0275eld"](5,0,null,null,2,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,1,"h4",[["class","modal-title"],["id","modal-basic-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Change Password"])),(l()(),u["\u0275eld"](8,0,null,null,37,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,1,"label",[["class","required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Old Password"])),(l()(),u["\u0275eld"](14,0,null,null,5,"input",[["autocomplete","off"],["class","form-control"],["formControlName","old_password"],["name","old_password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.space"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,15)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,15).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,15)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,15)._compositionEnd(e.target.value)&&t),"keydown.space"===n&&(t=!1!==e.preventDefault()&&t),t}),null,null)),u["\u0275did"](15,16384,null,0,m.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(l){return[l]}),[m.DefaultValueAccessor]),u["\u0275did"](17,671744,null,0,m.FormControlName,[[3,m.ControlContainer],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR],[2,m["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.NgControl,null,[m.FormControlName]),u["\u0275did"](19,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](21,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](22,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,1,"label",[["class","required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["New Password"])),(l()(),u["\u0275eld"](26,0,null,null,5,"input",[["autocomplete","off"],["class","form-control"],["formControlName","new_password"],["name","new_password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.space"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,27)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,27).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,27)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,27)._compositionEnd(e.target.value)&&t),"keydown.space"===n&&(t=!1!==e.preventDefault()&&t),t}),null,null)),u["\u0275did"](27,16384,null,0,m.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(l){return[l]}),[m.DefaultValueAccessor]),u["\u0275did"](29,671744,null,0,m.FormControlName,[[3,m.ControlContainer],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR],[2,m["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.NgControl,null,[m.FormControlName]),u["\u0275did"](31,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](33,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](34,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,1,"label",[["class","required"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Confirm Password"])),(l()(),u["\u0275eld"](38,0,null,null,5,"input",[["autocomplete","off"],["class","form-control"],["formControlName","changePassword"],["name","changePassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.space"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,39)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,39).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,39)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,39)._compositionEnd(e.target.value)&&t),"keydown.space"===n&&(t=!1!==e.preventDefault()&&t),t}),null,null)),u["\u0275did"](39,16384,null,0,m.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,m.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(l){return[l]}),[m.DefaultValueAccessor]),u["\u0275did"](41,671744,null,0,m.FormControlName,[[3,m.ControlContainer],[8,null],[8,null],[6,m.NG_VALUE_ACCESSOR],[2,m["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,m.NgControl,null,[m.FormControlName]),u["\u0275did"](43,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,D)),u["\u0275did"](45,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](46,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u["\u0275eld"](47,0,null,null,1,"button",[["class","form-cancel btn btn-default mr-3"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.bsModalRef.hide()&&u),u}),null,null)),(l()(),u["\u0275ted"](-1,null,["Cancel"])),(l()(),u["\u0275eld"](49,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Submit"]))],(function(l,n){var e=n.component;l(n,2,0,e.resetForm),l(n,17,0,"old_password"),l(n,21,0,(null==e.resetForm.controls.old_password.errors?null:e.resetForm.controls.old_password.errors.required)&&e.show),l(n,29,0,"new_password"),l(n,33,0,(null==e.resetForm.controls.new_password.errors?null:e.resetForm.controls.new_password.errors.required)&&e.show),l(n,41,0,"changePassword"),l(n,45,0,(null==e.resetForm.controls.changePassword.errors?null:e.resetForm.controls.changePassword.errors.required)&&e.show)}),(function(l,n){l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,14,0,u["\u0275nov"](n,19).ngClassUntouched,u["\u0275nov"](n,19).ngClassTouched,u["\u0275nov"](n,19).ngClassPristine,u["\u0275nov"](n,19).ngClassDirty,u["\u0275nov"](n,19).ngClassValid,u["\u0275nov"](n,19).ngClassInvalid,u["\u0275nov"](n,19).ngClassPending),l(n,26,0,u["\u0275nov"](n,31).ngClassUntouched,u["\u0275nov"](n,31).ngClassTouched,u["\u0275nov"](n,31).ngClassPristine,u["\u0275nov"](n,31).ngClassDirty,u["\u0275nov"](n,31).ngClassValid,u["\u0275nov"](n,31).ngClassInvalid,u["\u0275nov"](n,31).ngClassPending),l(n,38,0,u["\u0275nov"](n,43).ngClassUntouched,u["\u0275nov"](n,43).ngClassTouched,u["\u0275nov"](n,43).ngClassPristine,u["\u0275nov"](n,43).ngClassDirty,u["\u0275nov"](n,43).ngClassValid,u["\u0275nov"](n,43).ngClassInvalid,u["\u0275nov"](n,43).ngClassPending)}))}var V=u["\u0275ccf"]("app-change-password",g,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-change-password",[],null,null,null,T,E)),u["\u0275did"](1,245760,null,0,g,[C.a,O.a,v.a,s.l,m.FormBuilder],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),q=e("UPO+"),x=e("luWi"),U=e("0NUV"),B=e("DoSW"),j=e("IheW"),G=e("xkgV"),K=e("2uy1"),W=e("z/SZ"),z=e("ienR"),H=e("lQde"),$={breadcrumb:"Task List",title:"Task- ist"},J={breadcrumb:"History",title:"History"},X={breadcrumb:"Users",title:"user"},Z={breadcrumb:"Terms & Conditons",title:"Terms"},Q={breadcrumb:"About Us",title:"about"},Y={breadcrumb:"Tutorials",title:"tutorial"},ll={breadcrumb:"Charities",title:"Charities"},nl={breadcrumb:"Donated Charities",title:"Donated Charities"},el={breadcrumb:"Subscribe Plans",title:"Subscribe Plan"},ul={breadcrumb:"Product List",title:"product"},tl={breadcrumb:"App Data",title:"App Data"},ol={breadcrumb:"Banks",title:"Banks"},al={breadcrumb:"Order List",title:"order"},rl={breadcrumb:"Privacy Policy",title:"policy"},sl=function l(){_classCallCheck(this,l)},il=e("iAM3"),dl=e("CSQi"),cl=e("wTG2"),pl=e("St1U"),ml=e("PCNd"),gl=function l(){_classCallCheck(this,l)};e.d(n,"LayoutModuleNgFactory",(function(){return fl}));var fl=u["\u0275cmf"](t,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,R,S.a,S.b,N.a,P.a,M.a,M.c,M.b,M.d,I.a,V]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[u.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,m["\u0275angular_packages_forms_forms_o"],m["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,q.b,q.b,[]),u["\u0275mpd"](4608,x.LightboxConfig,x.LightboxConfig,[]),u["\u0275mpd"](4608,U.LightboxEvent,U.LightboxEvent,[]),u["\u0275mpd"](4608,B.Lightbox,B.Lightbox,[u.ComponentFactoryResolver,u.Injector,u.ApplicationRef,x.LightboxConfig,U.LightboxEvent,c.DOCUMENT]),u["\u0275mpd"](4608,U.LightboxWindowRef,U.LightboxWindowRef,[]),u["\u0275mpd"](4608,m.FormBuilder,m.FormBuilder,[]),u["\u0275mpd"](4608,j.j,j.p,[c.DOCUMENT,u.PLATFORM_ID,j.n]),u["\u0275mpd"](4608,j.q,j.q,[j.j,j.o]),u["\u0275mpd"](5120,j.a,(function(l){return[l]}),[j.q]),u["\u0275mpd"](4608,j.m,j.m,[]),u["\u0275mpd"](6144,j.k,null,[j.m]),u["\u0275mpd"](4608,j.i,j.i,[j.k]),u["\u0275mpd"](6144,j.b,null,[j.i]),u["\u0275mpd"](4608,j.f,j.l,[j.b,u.Injector]),u["\u0275mpd"](4608,j.c,j.c,[j.f]),u["\u0275mpd"](4608,G.e,G.e,[]),u["\u0275mpd"](4608,K.a,K.a,[u.NgZone,u.RendererFactory2,u.PLATFORM_ID]),u["\u0275mpd"](4608,W.a,W.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,K.a,u.ApplicationRef]),u["\u0275mpd"](4608,z.r,z.r,[]),u["\u0275mpd"](4608,z.t,z.t,[]),u["\u0275mpd"](4608,z.a,z.a,[]),u["\u0275mpd"](4608,z.f,z.f,[]),u["\u0275mpd"](4608,z.c,z.c,[]),u["\u0275mpd"](4608,z.h,z.h,[]),u["\u0275mpd"](4608,z.j,z.j,[]),u["\u0275mpd"](4608,z.s,z.s,[z.t,z.j]),u["\u0275mpd"](4608,H.b,H.b,[]),u["\u0275mpd"](4608,C.b,C.b,[u.RendererFactory2,W.a]),u["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),u["\u0275mpd"](1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),u["\u0275mpd"](1073742336,sl,sl,[]),u["\u0275mpd"](1073742336,C.e,C.e,[]),u["\u0275mpd"](1073742336,m["\u0275angular_packages_forms_forms_d"],m["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,m.FormsModule,m.FormsModule,[]),u["\u0275mpd"](1073742336,q.a,q.a,[]),u["\u0275mpd"](1073742336,il.LightboxModule,il.LightboxModule,[]),u["\u0275mpd"](1073742336,m.ReactiveFormsModule,m.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,j.e,j.e,[]),u["\u0275mpd"](1073742336,j.d,j.d,[]),u["\u0275mpd"](1073742336,G.a,G.a,[]),u["\u0275mpd"](1073742336,dl.a,dl.a,[]),u["\u0275mpd"](1073742336,cl.a,cl.a,[]),u["\u0275mpd"](1073742336,z.e,z.e,[]),u["\u0275mpd"](1073742336,pl.b,pl.b,[]),u["\u0275mpd"](1073742336,H.c,H.c,[]),u["\u0275mpd"](1073742336,ml.a,ml.a,[]),u["\u0275mpd"](1073742336,gl,gl,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,s.j,(function(){return[[{path:"",component:y,children:[{path:"tasklist",loadChildren:"./tasklist/tasklist.module#TasklistModule",data:$},{path:"history-list",loadChildren:"./historytask/historytask.module#HistorytaskModule",data:J},{path:"users",loadChildren:"./users/users.module#UsersModule",data:X},{path:"terms",loadChildren:"./terms/terms.module#TermsModule",data:Z},{path:"about",loadChildren:"./about/about.module#AboutModule",data:Q},{path:"tutorials",loadChildren:"./tutorials/tutorials.module#TutorialsModule",data:Y},{path:"charities",loadChildren:"./charities/charities.module#CharitiesModule",data:ll},{path:"donated",loadChildren:"./donatedcharities/donatedcharities.module#DonatedcharitiesModule",data:nl},{path:"subscriptionplan",loadChildren:"./subscriptionplan/subscriptionplan.module#SubscriptionplanModule",data:el},{path:"products",loadChildren:"./products/products.module#ProductsModule",data:ul},{path:"appdata",loadChildren:"./appdata/appdata.module#AppdataModule",data:tl},{path:"banks",loadChildren:"./banklist/banklist.module#BanklistModule",data:ol},{path:"orders",loadChildren:"./orders/orders.module#OrdersModule",data:al},{path:"policy",loadChildren:"./policy/policy.module#PolicyModule",data:rl}]}]]}),[]),u["\u0275mpd"](256,j.n,"XSRF-TOKEN",[]),u["\u0275mpd"](256,j.o,"X-XSRF-TOKEN",[]),u["\u0275mpd"](256,cl.b,cl.c,[])])}))}}]);