function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var c=n[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0t/Y":function(e,n,r){"use strict";r.r(n),r.d(n,"InputModule",(function(){return C}));var c=r("An66"),o=r("3kIJ"),t=r("7Hrl"),i=r("9AG8"),a=r("eBRF"),l=r("1VvW"),u=r("kZht"),s=r("mrVO"),f=r("01uY");function d(e,n){1&e&&(u.dc(0,"uni-error"),u.Gc(1,"username is required!"),u.cc())}function m(e,n){1&e&&(u.dc(0,"uni-error"),u.Gc(1,"password is required and this is a large error!"),u.cc())}function p(e,n){1&e&&(u.dc(0,"uni-error"),u.Gc(1,"another error"),u.cc())}function b(e,n){if(1&e){var r=u.ec();u.dc(0,"app-code-example",4),u.dc(1,"uni-form-field"),u.dc(2,"uni-label"),u.Gc(3,"Username"),u.cc(),u.dc(4,"button",5),u.Yb(5,"uni-icon",6),u.cc(),u.Yb(6,"input",7),u.dc(7,"uni-hint"),u.Gc(8,"max 20 characters"),u.cc(),u.Ec(9,d,2,0,"uni-error",8),u.cc(),u.dc(10,"uni-form-field"),u.dc(11,"uni-label"),u.Gc(12,"Password"),u.cc(),u.Yb(13,"input",9),u.dc(14,"button",10),u.lc("click",(function(e){u.yc(r);var n=u.oc();return n.form.get("showPassword").setValue(!(null!=n.form.value&&n.form.value.showPassword))})),u.Yb(15,"uni-icon",11),u.cc(),u.dc(16,"uni-hint"),u.Gc(17,"max 50 characters"),u.cc(),u.Ec(18,m,2,0,"uni-error",8),u.Ec(19,p,2,0,"uni-error",8),u.cc(),u.dc(20,"uni-form-field"),u.dc(21,"uni-label"),u.Gc(22,"Bio"),u.cc(),u.Yb(23,"textarea",12),u.dc(24,"uni-hint"),u.Gc(25),u.cc(),u.cc(),u.cc()}if(2&e){var c=u.oc();u.tc("html",c.example)("formGroup",c.form),u.Mb(9),u.tc("ngIf",c.form.get("username").dirty&&!(null!=c.form.value&&c.form.value.username)),u.Mb(4),u.tc("type",null!=c.form.value&&c.form.value.showPassword?"text":"password"),u.Mb(2),u.tc("icon",null!=c.form.value&&c.form.value.showPassword?"mdi-eye":"mdi-eye-off"),u.Mb(3),u.tc("ngIf",c.form.get("password").dirty&&!(null!=c.form.value&&c.form.value.password)),u.Mb(1),u.tc("ngIf",c.form.get("password").dirty&&!(null!=c.form.value&&c.form.value.password)),u.Mb(6),u.Ic("",null==c.form.value?null:c.form.value.bio.length," / 500 characters")}}function h(e,n){1&e&&u.Yb(0,"app-doc-viewer",13)}var w,v,g,y=[{path:"",component:(w=function(){function e(n){_classCallCheck(this,e),this._fb=n,this.example='\n<uni-form-field>\n  <uni-label>test label</uni-label>\n\n  <input\n    uniInput\n    placeholder="test placeholder"\n    spellcheck="false"\n    required\n    [(ngModel)]="value"\n  />\n\n  <uni-hint>max 5 characters</uni-hint>\n  <uni-error *ngIf="value?.length > 5">too many characters!</uni-error>\n</uni-form-field>\n'}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this._fb.group({username:this._fb.control(""),password:this._fb.control(""),bio:this._fb.control(""),showPassword:this._fb.control(!1)})}}]),e}(),w.\u0275fac=function(e){return new(e||w)(u.Xb(o.c))},w.\u0275cmp=u.Rb({type:w,selectors:[["app-input"]],hostAttrs:[1,"page"],decls:5,vars:0,consts:[["color","primary"],["label","Examples"],["uniTabBody",""],["label","API"],["title","Input",3,"html","formGroup"],["uni-icon-button","","uniPrefix",""],["icon","mdi-account"],["uniInput","","placeholder","Username...","spellcheck","false","formControlName","username","maxlength","20","required",""],[4,"ngIf"],["uniInput","","placeholder","Password...","spellcheck","false","formControlName","password","maxlength","50","required","",3,"type"],["uni-icon-button","","uniSuffix","",3,"click"],[3,"icon"],["uniInput","","placeholder","Bio...","spellcheck","false","formControlName","bio","maxlength","500","autoResize",""],["component","input"]],template:function(e,n){1&e&&(u.dc(0,"uni-tab-group",0),u.dc(1,"uni-tab",1),u.Ec(2,b,26,8,"ng-template",2),u.cc(),u.dc(3,"uni-tab",3),u.Ec(4,h,1,0,"ng-template",2),u.cc(),u.cc())},directives:[t.Ab,t.zb,t.yb,s.a,o.j,o.e,t.D,t.S,t.f,t.ab,t.L,t.O,o.b,o.i,o.d,o.g,o.n,t.I,c.k,t.xb,t.C,f.a],styles:[""],changeDetection:0}),w)}],k=((g=function e(){_classCallCheck(this,e)}).\u0275mod=u.Vb({type:g}),g.\u0275inj=u.Ub({factory:function(e){return new(e||g)},imports:[[l.c.forChild(y)],l.c]}),g),C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=u.Vb({type:v}),v.\u0275inj=u.Ub({factory:function(e){return new(e||v)},imports:[[c.c,o.f,o.m,k,i.a,a.a,t.E,t.P,t.Cb,t.g,t.M]]}),v)}}]);