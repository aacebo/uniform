(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-toggle-slide-toggle-module"],{

/***/ "./src/app/features/components/slide-toggle/slide-toggle-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/components/slide-toggle/slide-toggle-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SlideToggleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleRoutingModule", function() { return SlideToggleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-toggle.component */ "./src/app/features/components/slide-toggle/slide-toggle.component.ts");





const routes = [
    { path: '', component: _slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__["SlideToggleComponent"] },
];
class SlideToggleRoutingModule {
}
SlideToggleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlideToggleRoutingModule });
SlideToggleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlideToggleRoutingModule_Factory(t) { return new (t || SlideToggleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideToggleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideToggleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/slide-toggle/slide-toggle.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/components/slide-toggle/slide-toggle.component.ts ***!
  \****************************************************************************/
/*! exports provided: SlideToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function() { return SlideToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");






function SlideToggleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-slide-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_ng_template_2_Template_uni_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-slide-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_ng_template_2_Template_uni_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r89.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r89.value ? "Enable" : "Disable", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r89.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r89.value ? "Enable" : "Disable", " ");
} }
function SlideToggleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 7);
} }
class SlideToggleComponent {
}
SlideToggleComponent.ɵfac = function SlideToggleComponent_Factory(t) { return new (t || SlideToggleComponent)(); };
SlideToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideToggleComponent, selectors: [["app-slide-toggle"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Slide Toggle"], [3, "ngModel", "ngModelChange"], ["disabled", "", 3, "ngModel", "ngModelChange"], ["component", "slide-toggle"]], template: function SlideToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideToggleComponent_ng_template_2_Template, 5, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlideToggleComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSlideToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-slide-toggle[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgdW5pLXNsaWRlLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCB1bmktc2xpZGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slide-toggle',
                templateUrl: './slide-toggle.component.html',
                styleUrls: ['./slide-toggle.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/slide-toggle/slide-toggle.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/components/slide-toggle/slide-toggle.module.ts ***!
  \*************************************************************************/
/*! exports provided: SlideToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleModule", function() { return SlideToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _slide_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-toggle.component */ "./src/app/features/components/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var _slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide-toggle-routing.module */ "./src/app/features/components/slide-toggle/slide-toggle-routing.module.ts");









class SlideToggleModule {
}
SlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlideToggleModule });
SlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlideToggleModule_Factory(t) { return new (t || SlideToggleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_7__["SlideToggleRoutingModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideToggleModule, { declarations: [_slide_toggle_component__WEBPACK_IMPORTED_MODULE_6__["SlideToggleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_7__["SlideToggleRoutingModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_slide_toggle_component__WEBPACK_IMPORTED_MODULE_6__["SlideToggleComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_7__["SlideToggleRoutingModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=slide-toggle-slide-toggle-module-es2015.js.map