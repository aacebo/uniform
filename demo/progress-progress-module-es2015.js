(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progress-progress-module"],{

/***/ "./src/app/features/components/progress/progress-bar-example.constant.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/components/progress/progress-bar-example.constant.ts ***!
  \*******************************************************************************/
/*! exports provided: PROGRESS_BAR_EXAMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_BAR_EXAMPLE", function() { return PROGRESS_BAR_EXAMPLE; });
const PROGRESS_BAR_EXAMPLE = `
<uni-progress-bar
  *ngFor="let color of colors"
  value="50"
  [mode]="mode"
  [color]="color"
></uni-progress-bar>
`;


/***/ }),

/***/ "./src/app/features/components/progress/progress-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/components/progress/progress-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressRoutingModule", function() { return ProgressRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress.component */ "./src/app/features/components/progress/progress.component.ts");





const routes = [
    { path: '', component: _progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"] },
];
class ProgressRoutingModule {
}
ProgressRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressRoutingModule });
ProgressRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProgressRoutingModule_Factory(t) { return new (t || ProgressRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/progress/progress-spinner-example.constant.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/components/progress/progress-spinner-example.constant.ts ***!
  \***********************************************************************************/
/*! exports provided: PROGRESS_SPINNER_EXAMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_SPINNER_EXAMPLE", function() { return PROGRESS_SPINNER_EXAMPLE; });
const PROGRESS_SPINNER_EXAMPLE = `
<uni-progress-spinner
  *ngFor="let color of colors"
  value="50"
  [mode]="mode"
  [color]="color"
></uni-progress-spinner>
`;


/***/ }),

/***/ "./src/app/features/components/progress/progress.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/components/progress/progress.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _progress_bar_example_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-bar-example.constant */ "./src/app/features/components/progress/progress-bar-example.constant.ts");
/* harmony import */ var _progress_spinner_example_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-spinner-example.constant */ "./src/app/features/components/progress/progress-spinner-example.constant.ts");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");










function ProgressComponent_ng_template_2_uni_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "uni-progress-spinner", 8);
} if (rf & 2) {
    const color_r66 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r64.value)("mode", ctx_r64.mode)("color", color_r66);
} }
function ProgressComponent_ng_template_2_uni_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "uni-progress-bar", 8);
} if (rf & 2) {
    const color_r67 = ctx.$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r65.value)("mode", ctx_r65.mode)("color", color_r67);
} }
function ProgressComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressComponent_ng_template_2_uni_progress_spinner_1_Template, 1, 3, "uni-progress-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressComponent_ng_template_2_uni_progress_bar_2_Template, 1, 3, "uni-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressComponent_ng_template_2_Template_uni_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "uni-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Indeterminate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "uni-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Determinate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r62.progressSpinnerExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r62.UniProgressMode.Indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r62.UniProgressMode.Determinate);
} }
function ProgressComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 9);
} }
class ProgressComponent {
    constructor() {
        this.colors = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniColor"]);
        this.progressBarExample = _progress_bar_example_constant__WEBPACK_IMPORTED_MODULE_2__["PROGRESS_BAR_EXAMPLE"];
        this.progressSpinnerExample = _progress_spinner_example_constant__WEBPACK_IMPORTED_MODULE_3__["PROGRESS_SPINNER_EXAMPLE"];
        this.UniProgressMode = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniProgressMode"];
        this.mode = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniProgressMode"].Indeterminate;
        this.value = 50;
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Progress Spinner", 3, "html"], [3, "value", "mode", "color", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", "mode", "color"], ["component", "progress"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressComponent_ng_template_2_Template, 9, 6, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_4__["CodeExampleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniFormFieldComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniOptionComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniProgressSpinnerComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniProgressBarComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_7__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-progress-bar[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICB1bmktcHJvZ3Jlc3MtYmFyIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IHVuaS1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress',
                templateUrl: './progress.component.html',
                styleUrls: ['./progress.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/progress/progress.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/components/progress/progress.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModule", function() { return ProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.component */ "./src/app/features/components/progress/progress.component.ts");
/* harmony import */ var _progress_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-routing.module */ "./src/app/features/components/progress/progress-routing.module.ts");









class ProgressModule {
}
ProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressModule });
ProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProgressModule_Factory(t) { return new (t || ProgressModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _progress_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProgressRoutingModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniProgressModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressModule, { declarations: [_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _progress_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProgressRoutingModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniProgressModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _progress_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProgressRoutingModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniProgressModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=progress-progress-module-es2015.js.map