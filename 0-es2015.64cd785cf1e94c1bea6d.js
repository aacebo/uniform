(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"01uY":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s("J9R2"),n=s("kZht"),o=s("7Hrl"),a=s("An66");let i=(()=>{class e{constructor(e){this._docViewerService=e}ngOnInit(){this.markdown$=this._docViewerService.get(this.component)}}return e.\u0275fac=function(t){return new(t||e)(n.Yb(r.a))},e.\u0275cmp=n.Sb({type:e,selectors:[["app-doc-viewer"]],inputs:{component:"component"},decls:2,vars:3,consts:[["highlight","","sanitize","",3,"markdown"]],template:function(e,t){1&e&&(n.Zb(0,"uni-marked",0),n.qc(1,"async")),2&e&&n.uc("markdown",n.rc(1,1,t.markdown$))},directives:[o.T],pipes:[a.b],styles:["[_nghost-%COMP%]{display:block;padding:10px}"],changeDetection:0}),e})()},"6uGs":function(e,t,s){"use strict";s.d(t,"a",(function(){return E})),s.d(t,"b",(function(){return q}));var r=s("kZht"),n=s("ROBh"),o=s("IdLP"),a=s("5uDM"),i=s("xVbo"),c=s("YtkY"),l=s("An66");class h{}class u{}class d{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof d?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new d;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof d?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class p{encodeKey(e){return m(e)}encodeValue(e){return m(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function m(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class f{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new p,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new f({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function y(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function b(e){return"undefined"!=typeof Blob&&e instanceof Blob}function g(e){return"undefined"!=typeof FormData&&e instanceof FormData}class w{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new d),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new f,this.urlWithParams=t}serializeBody(){return null===this.body?null:y(this.body)||b(this.body)||g(this.body)||"string"==typeof this.body?this.body:this.body instanceof f?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body?null:g(this.body)?null:b(this.body)?this.body.type||null:y(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof f?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,c=e.params||this.params;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),i)),e.setParams&&(c=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),c)),new w(t,s,n,{params:c,headers:i,reportProgress:a,responseType:r,withCredentials:o})}}const v=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}();class k{constructor(e,t=200,s="OK"){this.headers=e.headers||new d,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class T extends k{constructor(e={}){super(e),this.type=v.ResponseHeader}clone(e={}){return new T({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class x extends k{constructor(e={}){super(e),this.type=v.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new x({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class O extends k{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function C(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let E=(()=>{class e{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof w)r=e;else{let n=void 0;n=s.headers instanceof d?s.headers:new d(s.headers);let o=void 0;s.params&&(o=s.params instanceof f?s.params:new f({fromObject:s.params})),r=new w(e,t,void 0!==s.body?s.body:null,{headers:n,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const o=Object(n.a)(r).pipe(Object(a.a)(e=>this.handler.handle(e)));if(e instanceof w||"events"===s.observe)return o;const l=o.pipe(Object(i.a)(e=>e instanceof x));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(Object(c.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return l.pipe(Object(c.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return l.pipe(Object(c.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return l.pipe(Object(c.a)(e=>e.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new f).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,C(s,t))}post(e,t,s={}){return this.request("POST",e,C(s,t))}put(e,t,s={}){return this.request("PUT",e,C(s,t))}}return e.\u0275fac=function(t){return new(t||e)(r.ic(h))},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})();class P{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const N=new r.x("HTTP_INTERCEPTORS");let R=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})();const S=/^\)\]\}',?\n/;class j{}let A=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new o.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new d(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new T({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:i}=o(),c=null;204!==n&&(c=void 0===s.response?s.responseText:s.response),0===n&&(n=c?200:0);let l=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof c){const e=c;c=c.replace(S,"");try{c=""!==c?JSON.parse(c):null}catch(h){c=e,l&&(l=!1,c={error:h,text:c})}}l?(t.next(new x({body:c,headers:r,status:n,statusText:a,url:i||void 0})),t.complete()):t.error(new O({error:c,headers:r,status:n,statusText:a,url:i||void 0}))},i=e=>{const{url:r}=o(),n=new O({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let c=!1;const l=r=>{c||(t.next(o()),c=!0);let n={type:v.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},h=e=>{let s={type:v.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",i),e.reportProgress&&(s.addEventListener("progress",l),null!==r&&s.upload&&s.upload.addEventListener("progress",h)),s.send(r),t.next({type:v.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("load",a),e.reportProgress&&(s.removeEventListener("progress",l),null!==r&&s.upload&&s.upload.removeEventListener("progress",h)),s.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(r.ic(j))},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})();const z=new r.x("XSRF_COOKIE_NAME"),H=new r.x("XSRF_HEADER_NAME");class L{}let _=(()=>{class e{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(l.t)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(r.ic(l.d),r.ic(r.L),r.ic(z))},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})(),I=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(r.ic(L),r.ic(H))},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})(),M=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(N,[]);this.chain=e.reduceRight((e,t)=>new P(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(r.ic(u),r.ic(r.y))},e.\u0275prov=r.Ub({token:e,factory:e.\u0275fac}),e})(),F=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:I,useClass:R}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:z,useValue:t.cookieName}:[],t.headerName?{provide:H,useValue:t.headerName}:[]]}}}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(t){return new(t||e)},providers:[I,{provide:N,useExisting:I,multi:!0},{provide:L,useClass:_},{provide:z,useValue:"XSRF-TOKEN"},{provide:H,useValue:"X-XSRF-TOKEN"}]}),e})(),q=(()=>{class e{}return e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({factory:function(t){return new(t||e)},providers:[E,{provide:h,useClass:M},U,{provide:u,useExisting:U},A,{provide:j,useExisting:A}],imports:[[F.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})()},"9AG8":function(e,t,s){"use strict";var r=s("An66"),n=s("7Hrl"),o=s("kZht");let a=(()=>{class e{}return e.\u0275mod=o.Wb({type:e}),e.\u0275inj=o.Vb({factory:function(t){return new(t||e)},imports:[[r.c,n.g,n.M,n.l,n.r]]}),e})();s.d(t,"a",(function(){return a}))},J9R2:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("AytR"),n=s("kZht"),o=s("6uGs");let a=(()=>{class e{constructor(e){this._http=e}get(e){return this._http.get(`${r.a.github.raw}/${e}/${e}.md`,{responseType:"text"})}}return e.\u0275fac=function(t){return new(t||e)(n.ic(o.a))},e.\u0275prov=n.Ub({token:e,factory:e.\u0275fac}),e})()},eBRF:function(e,t,s){"use strict";var r=s("An66"),n=s("6uGs"),o=s("7Hrl"),a=s("J9R2"),i=s("kZht");let c=(()=>{class e{}return e.\u0275mod=i.Wb({type:e}),e.\u0275inj=i.Vb({factory:function(t){return new(t||e)},providers:[a.a],imports:[[r.c,n.b,o.U]]}),e})();s.d(t,"a",(function(){return c}))},mrVO:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var r=s("5XID"),n=s("kZht"),o=s("7Hrl"),a=s("An66");function i(e,t){if(1&e&&n.Zb(0,"uni-code",5),2&e){const e=n.pc();n.uc("code",e.html)}}function c(e,t){1&e&&(n.cc(0),n.sc(1),n.bc())}const l=["*"];let h=(()=>{class e{constructor(e,t){this._cdr=e,this._el=t}get code(){return this._code}set code(e){this._code=Object(r.b)(e),this._cdr.markForCheck()}ngOnInit(){this._el.nativeElement.title=""}}return e.\u0275fac=function(t){return new(t||e)(n.Yb(n.i),n.Yb(n.q))},e.\u0275cmp=n.Sb({type:e,selectors:[["app-code-example"]],inputs:{title:"title",html:"html",code:"code"},ngContentSelectors:l,decls:10,vars:3,consts:[[1,"code-example--title"],["uni-icon-button","",3,"click"],["icon","mdi-code-tags"],["language","html",3,"code",4,"ngIf"],[4,"ngIf"],["language","html",3,"code"]],template:function(e,t){1&e&&(n.tc(),n.ec(0,"uni-card"),n.ec(1,"uni-card-header"),n.ec(2,"uni-card-title"),n.ec(3,"span",0),n.Ic(4),n.dc(),n.ec(5,"button",1),n.mc("click",(function(e){return t.code=!t.code})),n.Zb(6,"uni-icon",2),n.dc(),n.dc(),n.dc(),n.ec(7,"uni-card-content"),n.Gc(8,i,1,1,"uni-code",3),n.Gc(9,c,2,0,"ng-container",4),n.dc(),n.dc()),2&e&&(n.Nb(4),n.Jc(t.title),n.Nb(4),n.uc("ngIf",t.code),n.Nb(1),n.uc("ngIf",!t.code))},directives:[o.h,o.k,o.n,o.f,o.L,o.i,a.k,o.q],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   uni-card[_ngcontent-%COMP%]{background-color:var(--dark-a50)}[_nghost-%COMP%]   uni-card[_ngcontent-%COMP%]   uni-card-title[_ngcontent-%COMP%]{display:-webkit-box;display:flex}[_nghost-%COMP%]   uni-card[_ngcontent-%COMP%]   uni-card-title[_ngcontent-%COMP%]   .code-example--title[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto}"],changeDetection:0}),e})()}}]);