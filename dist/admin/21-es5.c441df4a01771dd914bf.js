function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8XlG":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("Wlo7"),t=u("P6It"),a=function(){function l(n,u,e){_classCallCheck(this,l),this.http=n,this.message=u,this.router=e,this.text="",this.type="",this.update=!1,this.allData=!1,this.policy=""}return _createClass(l,[{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var l=this;this.http.getData(o.a.PolicyTermListing,{}).subscribe((function(n){n.data.length?(l.update=!0,l.policy=n.data[0].policy):l.allData=void 0}),(function(){}))}},{key:"submitForm",value:function(){var l=this,n={};console.log(n),this.update&&(n._id=this.allData._id),n.policy=this.policy,this.http.postData(o.a.Add_policyTerm,n).subscribe((function(){l.message.toast("success",t.a.updatedSuccess)}),(function(){}))}}]),l}(),c=function l(){_classCallCheck(this,l)},i=u("pMnS"),s=u("xPiK"),d=u("Q6Ar"),r=u("IheW"),p=u("SVse"),m=u("cUpR"),g=u("s7LF"),f=u("A1Tq"),v=u("0UgC"),h=u("iInd"),C=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","card card-plain title-style-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h4",[["class","card-title col-md-6 float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Privacy Policy "])),(l()(),e["\u0275eld"](6,0,null,null,17,"div",[["class","row mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,16,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,15,"div",[["class","card card-user"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"h4",[["class","card-title col-md-12 float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Privacy Policy "])),(l()(),e["\u0275eld"](13,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,6,"angular-editor",[],[[1,"tabindex",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"]],(function(l,n,u){var o=!0,t=l.component;return"focus"===n&&(o=!1!==e["\u0275nov"](l,16).onFocus()&&o),"ngModelChange"===n&&(o=!1!==(t.policy=u)&&o),o}),s.b,s.a)),e["\u0275prd"](512,null,d.c,d.c,[r.c,p.DOCUMENT]),e["\u0275did"](16,4440064,null,0,d.a,[e.Renderer2,d.c,p.DOCUMENT,m.DomSanitizer,e.ChangeDetectorRef,[8,null],[8,null]],{placeholder:[0,"placeholder"]},{focusEvent:"focus"}),e["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.a]),e["\u0275did"](18,671744,null,0,g.NgModel,[[8,null],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),e["\u0275did"](20,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),(l()(),e["\u0275eld"](21,0,null,null,2,"div",[["class","col-md-12"],["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-primary float-right"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submitForm()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,["Submit"]))],(function(l,n){var u=n.component;l(n,16,0,"Enter text here..."),l(n,18,0,u.policy)}),(function(l,n){l(n,14,0,e["\u0275nov"](n,16).tabindex,e["\u0275nov"](n,20).ngClassUntouched,e["\u0275nov"](n,20).ngClassTouched,e["\u0275nov"](n,20).ngClassPristine,e["\u0275nov"](n,20).ngClassDirty,e["\u0275nov"](n,20).ngClassValid,e["\u0275nov"](n,20).ngClassInvalid,e["\u0275nov"](n,20).ngClassPending)}))}var _=e["\u0275ccf"]("app-policy",a,(function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-policy",[],null,null,null,y,C)),e["\u0275did"](1,114688,null,0,a,[f.a,v.a,h.l],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),b=u("5hlg");u.d(n,"PolicyModuleNgFactory",(function(){return M}));var M=e["\u0275cmf"](c,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,_]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[e.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),e["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),e["\u0275mpd"](1073742336,h.p,h.p,[[2,h.u],[2,h.l]]),e["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),e["\u0275mpd"](1073742336,b.TrimValueAccessorModule,b.TrimValueAccessorModule,[]),e["\u0275mpd"](1073742336,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,d.b,d.b,[]),e["\u0275mpd"](1073742336,c,c,[]),e["\u0275mpd"](1024,h.j,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);