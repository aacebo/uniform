function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var c=n[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0t/Y":function(e,n,r){"use strict";r.r(n);var c=r("An66"),o=r("3kIJ"),t=r("7Hrl"),i=r("9AG8"),a=r("eBRF"),u=r("1VvW"),l=r("kZht"),s=r("mrVO"),f=r("01uY");function p(e,n){1&e&&(l.ec(0,"uni-error"),l.Ic(1,"username is required!"),l.dc())}function m(e,n){1&e&&(l.ec(0,"uni-error"),l.Ic(1,"password is required!"),l.dc())}function d(e,n){if(1&e){var r=l.fc();l.ec(0,"app-code-example",4),l.ec(1,"uni-form-field"),l.ec(2,"uni-label"),l.Ic(3,"Username"),l.dc(),l.ec(4,"button",5),l.Zb(5,"uni-icon",6),l.dc(),l.Zb(6,"input",7),l.ec(7,"uni-hint"),l.Ic(8,"max 20 characters"),l.dc(),l.Gc(9,p,2,0,"uni-error",8),l.dc(),l.ec(10,"uni-form-field"),l.ec(11,"uni-label"),l.Ic(12,"Password"),l.dc(),l.Zb(13,"input",9),l.ec(14,"button",10),l.mc("click",(function(e){l.zc(r);var n=l.pc();return n.form.get("showPassword").setValue(!(null!=n.form.value&&n.form.value.showPassword))})),l.Zb(15,"uni-icon",11),l.dc(),l.ec(16,"uni-hint"),l.Ic(17,"max 50 characters"),l.dc(),l.Gc(18,m,2,0,"uni-error",8),l.dc(),l.ec(19,"uni-form-field"),l.ec(20,"uni-label"),l.Ic(21,"Bio"),l.dc(),l.Zb(22,"textarea",12),l.ec(23,"uni-hint"),l.Ic(24),l.dc(),l.dc(),l.dc()}if(2&e){var c=l.pc();l.uc("html",c.example)("formGroup",c.form),l.Nb(9),l.uc("ngIf",c.form.get("username").dirty&&!(null!=c.form.value&&c.form.value.username)),l.Nb(4),l.uc("type",null!=c.form.value&&c.form.value.showPassword?"text":"password"),l.Nb(2),l.uc("icon",null!=c.form.value&&c.form.value.showPassword?"mdi-eye":"mdi-eye-off"),l.Nb(3),l.uc("ngIf",c.form.get("password").dirty&&!(null!=c.form.value&&c.form.value.password)),l.Nb(6),l.Kc("",null==c.form.value?null:c.form.value.bio.length," / 500 characters")}}function b(e,n){1&e&&l.Zb(0,"app-doc-viewer",13)}var h,w,v=[{path:"",component:(h=function(){function e(n){_classCallCheck(this,e),this._fb=n,this.example='\n<uni-form-field>\n  <uni-label>test label</uni-label>\n\n  <input\n    uniInput\n    placeholder="test placeholder"\n    spellcheck="false"\n    required\n    [(ngModel)]="value"\n  />\n\n  <uni-hint>max 5 characters</uni-hint>\n  <uni-error *ngIf="value?.length > 5">too many characters!</uni-error>\n</uni-form-field>\n'}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this._fb.group({username:this._fb.control(""),password:this._fb.control(""),bio:this._fb.control(""),showPassword:this._fb.control(!1)})}}]),e}(),h.\u0275fac=function(e){return new(e||h)(l.Yb(o.c))},h.\u0275cmp=l.Sb({type:h,selectors:[["app-input"]],hostAttrs:[1,"page"],decls:5,vars:0,consts:[["color","primary"],["label","Examples"],["uniTabBody",""],["label","API"],["title","Input",3,"html","formGroup"],["uni-icon-button","","uniPrefix",""],["icon","mdi-account"],["uniInput","","placeholder","Username...","spellcheck","false","formControlName","username","maxlength","20","required",""],[4,"ngIf"],["uniInput","","placeholder","Password...","spellcheck","false","formControlName","password","maxlength","50","required","",3,"type"],["uni-icon-button","","uniSuffix","",3,"click"],[3,"icon"],["uniInput","","placeholder","Bio...","spellcheck","false","formControlName","bio","maxlength","500","autoResize",""],["component","input"]],template:function(e,n){1&e&&(l.ec(0,"uni-tab-group",0),l.ec(1,"uni-tab",1),l.Gc(2,d,25,7,"ng-template",2),l.dc(),l.ec(3,"uni-tab",3),l.Gc(4,b,1,0,"ng-template",2),l.dc(),l.dc())},directives:[t.Ab,t.zb,t.yb,s.a,o.j,o.e,t.D,t.S,t.f,t.ab,t.L,t.O,o.b,o.i,o.d,o.g,o.n,t.I,c.k,t.xb,t.C,f.a],styles:[""],changeDetection:0}),h)}],g=((w=function e(){_classCallCheck(this,e)}).\u0275mod=l.Wb({type:w}),w.\u0275inj=l.Vb({factory:function(e){return new(e||w)},imports:[[u.c.forChild(v)],u.c]}),w);r.d(n,"InputModule",(function(){return y}));var I,y=((I=function e(){_classCallCheck(this,e)}).\u0275mod=l.Wb({type:I}),I.\u0275inj=l.Vb({factory:function(e){return new(e||I)},imports:[[c.c,o.f,o.m,g,i.a,a.a,t.E,t.P,t.Bb,t.g,t.M]]}),I)}}]);