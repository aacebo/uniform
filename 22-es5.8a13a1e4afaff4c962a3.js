function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{tIK1:function(n,e,t){"use strict";t.r(e),t.d(e,"SidenavModule",(function(){return C}));var i=t("An66"),c=t("3kIJ"),o=t("7Hrl"),a=t("9AG8"),d=t("eBRF"),r=t("1VvW"),l=t("kZht"),s=t("mrVO"),u=t("01uY");function p(n,e){1&n&&l.Gc(0," sidenav content ")}function b(n,e){if(1&n){var t=l.ec();l.dc(0,"app-code-example",4),l.dc(1,"uni-sidenav-container"),l.dc(2,"uni-sidenav",5),l.lc("openChange",(function(n){return l.yc(t),l.oc().open=n})),l.Ec(3,p,1,0,"ng-template",6),l.cc(),l.dc(4,"uni-sidenav-content"),l.dc(5,"button",7),l.lc("click",(function(n){return l.yc(t),l.oc().toggle()})),l.Gc(6," Toggle "),l.cc(),l.cc(),l.cc(),l.dc(7,"uni-form-field"),l.dc(8,"uni-select",8),l.lc("ngModelChange",(function(n){return l.yc(t),l.oc().mode=n})),l.dc(9,"uni-option",9),l.Gc(10,"Over"),l.cc(),l.dc(11,"uni-option",9),l.Gc(12,"Side"),l.cc(),l.cc(),l.cc(),l.dc(13,"uni-form-field"),l.dc(14,"uni-select",8),l.lc("ngModelChange",(function(n){return l.yc(t),l.oc().position=n})),l.dc(15,"uni-option",9),l.Gc(16,"Start"),l.cc(),l.dc(17,"uni-option",9),l.Gc(18,"End"),l.cc(),l.cc(),l.cc(),l.cc()}if(2&n){var i=l.oc();l.tc("html",i.example),l.Mb(2),l.tc("open",i.open)("mode",i.mode)("position",i.position),l.Mb(6),l.tc("ngModel",i.mode),l.Mb(1),l.tc("value",i.UniSidenavMode.Over),l.Mb(2),l.tc("value",i.UniSidenavMode.Side),l.Mb(3),l.tc("ngModel",i.position),l.Mb(1),l.tc("value",i.UniSidenavPosition.Start),l.Mb(2),l.tc("value",i.UniSidenavPosition.End)}}function v(n,e){1&n&&l.Yb(0,"app-doc-viewer",10)}var f,g,h,m=[{path:"",component:(f=function(){function n(){_classCallCheck(this,n),this.UniSidenavMode=o.ob,this.UniSidenavPosition=o.qb,this.example='\n<uni-sidenav-container>\n  <uni-sidenav\n    [(open)]="open"\n    [mode]="mode"\n    [position]="position"\n  >\n    <ng-template uniSidenavBody>\n      sidenav content\n    </ng-template>\n  </uni-sidenav>\n\n  <uni-sidenav-content>\n    <button uni-button\n            (click)="toggle()">\n      Toggle\n    </button>\n  </uni-sidenav-content>\n</uni-sidenav-container>\n',this.open=!1,this.mode=o.ob.Side,this.position=o.qb.Start}return _createClass(n,[{key:"toggle",value:function(){this.open=!this.open}}]),n}(),f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=l.Rb({type:f,selectors:[["app-sidenav"]],hostAttrs:[1,"page"],decls:5,vars:0,consts:[["color","primary"],["label","Examples"],["uniTabBody",""],["label","API"],["title","Sidenav",3,"html"],[3,"open","mode","position","openChange"],["uniSidenavBody",""],["uni-button","",3,"click"],[3,"ngModel","ngModelChange"],[3,"value"],["component","sidenav"]],template:function(n,e){1&n&&(l.dc(0,"uni-tab-group",0),l.dc(1,"uni-tab",1),l.Ec(2,b,19,10,"ng-template",2),l.cc(),l.dc(3,"uni-tab",3),l.Ec(4,v,1,0,"ng-template",2),l.cc(),l.cc())},directives:[o.Ab,o.zb,o.yb,s.a,o.mb,o.lb,o.kb,o.nb,o.f,o.D,o.ib,c.i,c.l,o.V,u.a],styles:["[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]{height:100px;border:1px solid var(--hairline-strong)}"],changeDetection:0}),f)}],y=((h=function n(){_classCallCheck(this,n)}).\u0275mod=l.Vb({type:h}),h.\u0275inj=l.Ub({factory:function(n){return new(n||h)},imports:[[r.c.forChild(m)],r.c]}),h),C=((g=function n(){_classCallCheck(this,n)}).\u0275mod=l.Vb({type:g}),g.\u0275inj=l.Ub({factory:function(n){return new(n||g)},imports:[[i.c,c.f,y,a.a,d.a,o.Cb,o.pb,o.g,o.E,o.jb]]}),g)}}]);