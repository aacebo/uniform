(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["split-split-module"],{

/***/ "./src/app/features/components/split/split-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/components/split/split-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SplitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitRoutingModule", function() { return SplitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _split_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./split.component */ "./src/app/features/components/split/split.component.ts");





const routes = [
    { path: '', component: _split_component__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"] },
];
class SplitRoutingModule {
}
SplitRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplitRoutingModule });
SplitRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplitRoutingModule_Factory(t) { return new (t || SplitRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplitRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/split/split.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/components/split/split.component.ts ***!
  \**************************************************************/
/*! exports provided: SplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitComponent", function() { return SplitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");





function SplitComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-vertical-split", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "area 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "uni-split-handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "uni-horizontal-split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "area 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "uni-split-handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "uni-vertical-split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "area 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "uni-split-handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "uni-split-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "area 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SplitComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 6);
} }
class SplitComponent {
}
SplitComponent.ɵfac = function SplitComponent_Factory(t) { return new (t || SplitComponent)(); };
SplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitComponent, selectors: [["app-split"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Split"], [1, "root"], ["component", "split"]], template: function SplitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SplitComponent_ng_template_2_Template, 17, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SplitComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSplitComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSplitAreaComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSplitHandleComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_3__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .root[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc3BsaXQvc3BsaXQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9zcGxpdC9zcGxpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAucm9vdCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5yb290IHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-split',
                templateUrl: './split.component.html',
                styleUrls: ['./split.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/split/split.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/components/split/split.module.ts ***!
  \***********************************************************/
/*! exports provided: SplitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitModule", function() { return SplitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _split_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./split.component */ "./src/app/features/components/split/split.component.ts");
/* harmony import */ var _split_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./split-routing.module */ "./src/app/features/components/split/split-routing.module.ts");









class SplitModule {
}
SplitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplitModule });
SplitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplitModule_Factory(t) { return new (t || SplitModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _split_routing_module__WEBPACK_IMPORTED_MODULE_7__["SplitRoutingModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSplitModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplitModule, { declarations: [_split_component__WEBPACK_IMPORTED_MODULE_6__["SplitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _split_routing_module__WEBPACK_IMPORTED_MODULE_7__["SplitRoutingModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSplitModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_split_component__WEBPACK_IMPORTED_MODULE_6__["SplitComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _split_routing_module__WEBPACK_IMPORTED_MODULE_7__["SplitRoutingModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSplitModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=split-split-module-es2015.js.map