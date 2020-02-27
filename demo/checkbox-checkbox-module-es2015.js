(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkbox-checkbox-module"],{

/***/ "./src/app/features/components/checkbox/checkbox-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/components/checkbox/checkbox-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CheckboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRoutingModule", function() { return CheckboxRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.component */ "./src/app/features/components/checkbox/checkbox.component.ts");





const routes = [
    { path: '', component: _checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"] },
];
class CheckboxRoutingModule {
}
CheckboxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckboxRoutingModule });
CheckboxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckboxRoutingModule_Factory(t) { return new (t || CheckboxRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/checkbox/checkbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/components/checkbox/checkbox.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");






function CheckboxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_ng_template_2_Template_uni_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_ng_template_2_Template_uni_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r84.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r84.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" value: ", ctx_r84.value, " ");
} }
function CheckboxComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 7);
} }
class CheckboxComponent {
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Checkbox"], [3, "ngModel", "ngModelChange"], ["disabled", "", 3, "ngModel", "ngModelChange"], ["component", "checkbox"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckboxComponent_ng_template_2_Template, 6, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckboxComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-checkbox[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgdW5pLWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IHVuaS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/checkbox/checkbox.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/components/checkbox/checkbox.module.ts ***!
  \*****************************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox.component */ "./src/app/features/components/checkbox/checkbox.component.ts");
/* harmony import */ var _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox-routing.module */ "./src/app/features/components/checkbox/checkbox-routing.module.ts");









class CheckboxModule {
}
CheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckboxModule });
CheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["CheckboxRoutingModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCheckboxModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckboxModule, { declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["CheckboxRoutingModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCheckboxModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _checkbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["CheckboxRoutingModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCheckboxModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=checkbox-checkbox-module-es2015.js.map