function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1TZH":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),i=e("JM/T"),t=e("Wlo7"),a=function(){function l(n,e,u){_classCallCheck(this,l),this.http=n,this.message=e,this.util=u,this.allData=[],this.pagination=new i.a}return _createClass(l,[{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var l=this;this.http.getData(t.a.Task_List,{pageNumber:10*(this.pagination.page-1)}).subscribe((function(n){l.allData=n.data,l.pagination.count=n.data.pastCount}),(function(){}))}}]),l}(),d=function l(){_classCallCheck(this,l)},o=e("pMnS"),r=e("rMcs"),c=e("W8s6"),s=e("atuK"),m=e("z5nN"),p=e("sgtA"),g=e("3DoR"),A=e("MHop"),_=e("abRS"),b=e("xkgV"),L=e("SVse"),f=e("A1Tq"),C=e("0UgC"),R=e("YOl1"),P=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,20,"tr",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,["",""])),(l()(),u["\u0275eld"](3,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](4,null,["",""])),(l()(),u["\u0275eld"](5,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](6,null,["",""])),(l()(),u["\u0275eld"](7,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["",""])),(l()(),u["\u0275eld"](9,0,null,null,2,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](10,null,["",""])),u["\u0275ppd"](11,2),(l()(),u["\u0275eld"](12,0,null,null,2,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),u["\u0275ppd"](14,2),(l()(),u["\u0275eld"](15,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](16,null,["",""])),(l()(),u["\u0275eld"](17,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](18,null,["",""])),(l()(),u["\u0275eld"](19,0,null,null,1,"td",[["class","big-image"]],null,null,null,null,null)),(l()(),u["\u0275ted"](20,null,["",""]))],null,(function(l,n){var e=n.component;l(n,2,0,n.context.index+e.pagination.perPage*(e.pagination.page-1)+1),l(n,4,0,null==n.context.$implicit||null==n.context.$implicit.userId?null:n.context.$implicit.userId.userName),l(n,6,0,null==n.context.$implicit||null==n.context.$implicit.performedBy?null:n.context.$implicit.performedBy.userName),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.title);var i=u["\u0275unv"](n,10,0,l(n,11,0,u["\u0275nov"](n.parent,0),null==n.context.$implicit?null:n.context.$implicit.startDate,"dd/MM/yyyy"));l(n,10,0,i);var t=u["\u0275unv"](n,13,0,l(n,14,0,u["\u0275nov"](n.parent,0),null==n.context.$implicit?null:n.context.$implicit.endDate,"dd/MM/yyyy"));l(n,13,0,t),l(n,16,0,null==n.context.$implicit?null:n.context.$implicit.payType),l(n,18,0,null==n.context.$implicit?null:n.context.$implicit.status),l(n,20,0,null==n.context.$implicit?null:n.context.$implicit.price)}))}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-no-record",[],null,null,null,g.b,g.a)),u["\u0275did"](1,114688,null,0,A.a,[],null,null)],(function(l,n){l(n,1,0)}),null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,2,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](3,null,[" Showing "," to "," out of "," entries "])),(l()(),u["\u0275eld"](4,0,null,null,2,"div",[["class","col-sm-6 text-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,1,"pagination-controls",[["autoHide","true"],["directionLinks","true"],["nextLabel","Next"],["previousLabel","Previous"],["screenReaderCurrentLabel","You're on page"],["screenReaderPageLabel","page"],["screenReaderPaginationLabel","Pagination"]],null,[[null,"pageChange"]],(function(l,n,e){var u=!0,i=l.component;return"pageChange"===n&&(i.pagination.page=e,u=!1!==i.getData()&&u),u}),_.b,_.a)),u["\u0275did"](6,49152,null,0,b.c,[],{directionLinks:[0,"directionLinks"],autoHide:[1,"autoHide"],previousLabel:[2,"previousLabel"],nextLabel:[3,"nextLabel"],screenReaderPaginationLabel:[4,"screenReaderPaginationLabel"],screenReaderPageLabel:[5,"screenReaderPageLabel"],screenReaderCurrentLabel:[6,"screenReaderCurrentLabel"]},{pageChange:"pageChange"})],(function(l,n){l(n,6,0,"true","true","Previous","Next","Pagination","page","You're on page")}),(function(l,n){var e=n.component;l(n,3,0,0===e.pagination.count?0:e.pagination.skip+1,e.util.cal(e.pagination.page,e.pagination.perPage,e.pagination.count),e.pagination.count)}))}function D(l){return u["\u0275vid"](0,[u["\u0275pid"](0,L.DatePipe,[u.LOCALE_ID]),(l()(),u["\u0275eld"](1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,5,"div",[["class","card card-plain title-style-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,4,"div",[["class","card-header card-header-without-back"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,1,"h4",[["class","card-title col-md-8"]],null,null,null,null,null)),(l()(),u["\u0275ted"](7,null,["",""])),(l()(),u["\u0275eld"](8,0,null,null,0,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,33,"div",[["class","row mt-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,32,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,31,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,30,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,27,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,24,"table",[["class","table"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,18,"thead",[["class","text-primary"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Sr. No."])),(l()(),u["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["User Name "])),(l()(),u["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Proformed By"])),(l()(),u["\u0275eld"](22,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Title"])),(l()(),u["\u0275eld"](24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Start Date"])),(l()(),u["\u0275eld"](26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["End Date"])),(l()(),u["\u0275eld"](28,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Pay Type"])),(l()(),u["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Status"])),(l()(),u["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Price "])),(l()(),u["\u0275eld"](34,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,3,null,E)),u["\u0275did"](36,278528,null,0,L.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),u["\u0275pod"](37,{itemsPerPage:0,currentPage:1,totalItems:2}),u["\u0275pid"](0,b.b,[b.e]),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](40,16384,null,0,L.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](42,16384,null,0,L.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component,i=u["\u0275unv"](n,36,0,u["\u0275nov"](n,38).transform(e.allData.pastTask,l(n,37,0,e.pagination.perPage,e.pagination.page,e.pagination.count)));l(n,36,0,i),l(n,40,0,!e.pagination.count),l(n,42,0,e.pagination.count)}),(function(l,n){var e=n.component;l(n,7,0,null==e.util?null:e.util.breadcrumb)}))}var v=u["\u0275ccf"]("app-historytask",a,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-historytask",[],null,null,null,D,P)),u["\u0275did"](1,114688,null,0,a,[f.a,C.a,R.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),I=e("s7LF"),N=e("UPO+"),y=e("luWi"),S=e("0NUV"),O=e("DoSW"),M=e("IheW"),k=e("2uy1"),x=e("z/SZ"),B=e("ienR"),G=e("lQde"),U=e("LqlI"),w=e("iInd"),F=e("iAM3"),$=e("CSQi"),Y=e("wTG2"),V=e("St1U"),H=e("PCNd");e.d(n,"HistorytaskModuleNgFactory",(function(){return j}));var j=u["\u0275cmf"](d,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,r.a,c.a,s.a,s.c,s.b,s.d,m.a,m.b,p.a,v]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[u.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,I["\u0275angular_packages_forms_forms_o"],I["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,N.b,N.b,[]),u["\u0275mpd"](4608,y.LightboxConfig,y.LightboxConfig,[]),u["\u0275mpd"](4608,S.LightboxEvent,S.LightboxEvent,[]),u["\u0275mpd"](4608,O.Lightbox,O.Lightbox,[u.ComponentFactoryResolver,u.Injector,u.ApplicationRef,y.LightboxConfig,S.LightboxEvent,L.DOCUMENT]),u["\u0275mpd"](4608,S.LightboxWindowRef,S.LightboxWindowRef,[]),u["\u0275mpd"](4608,I.FormBuilder,I.FormBuilder,[]),u["\u0275mpd"](4608,M.j,M.p,[L.DOCUMENT,u.PLATFORM_ID,M.n]),u["\u0275mpd"](4608,M.q,M.q,[M.j,M.o]),u["\u0275mpd"](5120,M.a,(function(l){return[l]}),[M.q]),u["\u0275mpd"](4608,M.m,M.m,[]),u["\u0275mpd"](6144,M.k,null,[M.m]),u["\u0275mpd"](4608,M.i,M.i,[M.k]),u["\u0275mpd"](6144,M.b,null,[M.i]),u["\u0275mpd"](4608,M.f,M.l,[M.b,u.Injector]),u["\u0275mpd"](4608,M.c,M.c,[M.f]),u["\u0275mpd"](4608,b.e,b.e,[]),u["\u0275mpd"](4608,k.a,k.a,[u.NgZone,u.RendererFactory2,u.PLATFORM_ID]),u["\u0275mpd"](4608,x.a,x.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,k.a,u.ApplicationRef]),u["\u0275mpd"](4608,B.r,B.r,[]),u["\u0275mpd"](4608,B.t,B.t,[]),u["\u0275mpd"](4608,B.a,B.a,[]),u["\u0275mpd"](4608,B.f,B.f,[]),u["\u0275mpd"](4608,B.c,B.c,[]),u["\u0275mpd"](4608,B.h,B.h,[]),u["\u0275mpd"](4608,B.j,B.j,[]),u["\u0275mpd"](4608,B.s,B.s,[B.t,B.j]),u["\u0275mpd"](4608,G.b,G.b,[]),u["\u0275mpd"](4608,U.b,U.b,[u.RendererFactory2,x.a]),u["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),u["\u0275mpd"](1073742336,w.p,w.p,[[2,w.u],[2,w.l]]),u["\u0275mpd"](1073742336,I["\u0275angular_packages_forms_forms_d"],I["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,I.FormsModule,I.FormsModule,[]),u["\u0275mpd"](1073742336,N.a,N.a,[]),u["\u0275mpd"](1073742336,F.LightboxModule,F.LightboxModule,[]),u["\u0275mpd"](1073742336,I.ReactiveFormsModule,I.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,M.e,M.e,[]),u["\u0275mpd"](1073742336,M.d,M.d,[]),u["\u0275mpd"](1073742336,b.a,b.a,[]),u["\u0275mpd"](1073742336,$.a,$.a,[]),u["\u0275mpd"](1073742336,Y.a,Y.a,[]),u["\u0275mpd"](1073742336,B.e,B.e,[]),u["\u0275mpd"](1073742336,V.b,V.b,[]),u["\u0275mpd"](1073742336,G.c,G.c,[]),u["\u0275mpd"](1073742336,U.e,U.e,[]),u["\u0275mpd"](1073742336,H.a,H.a,[]),u["\u0275mpd"](1073742336,d,d,[]),u["\u0275mpd"](256,M.n,"XSRF-TOKEN",[]),u["\u0275mpd"](256,M.o,"X-XSRF-TOKEN",[]),u["\u0275mpd"](256,Y.b,Y.c,[]),u["\u0275mpd"](1024,w.j,(function(){return[[{path:"",component:a}]]}),[])])}))},Wlo7:function(l,n,e){"use strict";e.d(n,"a",(function(){return u}));var u={LOGIN:"Admin/Login",upload_attachment:"common/v1/upload",Task_List:"Admin/taskListing",Charities_List:"Admin/charitiesList",ADD_CHARITIES:"Admin/addEditCharities",MANAGE_CHARITIES:"Admin/deleteBlockedCharities",Donated_Charities:"Admin/donatedCharitiesListing",Order_List:"Admin/orderListing",Order_Managed:"Admin/orderManaged",SubscribePlan:"Admin/subscribePlanListing",ADD_SubscribePlan:"Admin/addEditSubscribePlans",MANAGE_SUBSCRIBEPLan:"Admin/deleteSubscribePlans",CATEGORY_LIST:"Admin/categoryList",ADD_CATEGORY:"Admin/addEditCategory",MANAGE_CATEGORY:"Admin/deleteBlockedCategory",BANNER_LIST:"Admin/bannersListing",ADD_BANNER:"Admin/addEditBanners",MANAGE_BANNER:"Admin/deleteBlockedBanners",CATEGORY_SUB_LIST:"Admin/subCategoryList",ADD_SUB_CATEGORY:"Admin/addEditSubcategory",MANAGE_SUB_CATEGORY:"Admin/deleteBlockedSubCategory",CITY_LIST:"Admin/citiesListing",ADD_CITY:"Admin/addEditCities",MANAGE_CITY:"Admin/deleteBlockedCities",VENDOR_LIST:"Admin/vendorListing",ADD_VENDOR:"Admin/addEditVendor",MANAGE_VENDOR:"Admin/deleteVendor",PENDING_PRODUCT_LIST:"Admin/vendorProductList",PRODUCT_LIST:"Admin/productList",ADD_PRODUCT:"Admin/addEditProducts",MANAGE_PRODUCT:"Admin/deleteBlockedProduct",PRODUCT_PRICE_APPROVE:"Admin/productPriceApproval",TUTORIAL_LIST:"Admin/tutorialListing",ADD_TUTORIAL:"Admin/addEditToutorial",MANAGE_TUTORIAL:"Admin/deleteBlockTutorial",PROMO_LIST:"Admin/promoCodeListing",ADD_PROMO:"Admin/addEditPromocode",MANAGE_PROMO:"Admin/deleteBlockPromoCode",USER_LIST:"Admin/userListing",MANAGE_USER:"Admin/blockUser",ORDERS:"Admin/orderListing",QUERIES:"Admin/queryList",SHIPPING_PRICE_LIST:"Admin/shippingPriceListing",ADD_SHIPPING_PRICE:"Admin/addEditShippingPrice",MANAGE_SHIPPING_PRICE:"Admin/deleteBlockShippingPrice",PolicyTermListing:"Admin/policyTermsListing",Add_policyTerm:"Admin/addEditPolicyTermsCondntion",MANAGE_POLICYTERM:"Admin/deleteBlockedPolicyTerms",ABOUT_LISTING:"Admin/aboutUsListing",ADD_ABOUT:"Admin/addEditAboutUs",MANAGE_ABOUT:"Admin/deleteBlockedAboutUs",AppDataListing:"Admin/appDataListing",Add_APPDATA:"Admin/addEditAppData",MANAGE_APPDATA:"Admin/deleteAppData",Bank_Listing:"Admin/banksListing",ADD_BANKS:"Admin/addEditBanks",MANAGE_BANKS:"Admin/deleteBanks"}}}]);