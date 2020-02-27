(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidenav-sidenav-module"],{

/***/ "./src/app/features/components/sidenav/sidenav-example.constant.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/components/sidenav/sidenav-example.constant.ts ***!
  \*************************************************************************/
/*! exports provided: SIDENAV_EXAMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDENAV_EXAMPLE", function() { return SIDENAV_EXAMPLE; });
const SIDENAV_EXAMPLE = `
<uni-sidenav-container>
  <uni-sidenav
    [(open)]="open"
    [mode]="mode"
    [position]="position"
  >
    <ng-template uniSidenavBody>
      sidenav content
    </ng-template>
  </uni-sidenav>

  <uni-sidenav-content>
    <button uni-button
            (click)="toggle()">
      Toggle
    </button>
  </uni-sidenav-content>
</uni-sidenav-container>
`;


/***/ }),

/***/ "./src/app/features/components/sidenav/sidenav-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/components/sidenav/sidenav-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SidenavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavRoutingModule", function() { return SidenavRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/features/components/sidenav/sidenav.component.ts");





const routes = [
    { path: '', component: _sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"] },
];
class SidenavRoutingModule {
}
SidenavRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidenavRoutingModule });
SidenavRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidenavRoutingModule_Factory(t) { return new (t || SidenavRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/sidenav/sidenav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/components/sidenav/sidenav.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _sidenav_example_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav-example.constant */ "./src/app/features/components/sidenav/sidenav-example.constant.ts");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");








function SidenavComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " sidenav content ");
} }
function SidenavComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-sidenav-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-sidenav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openChange", function SidenavComponent_ng_template_2_Template_uni_sidenav_openChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.open = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_ng_template_2_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Toggle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "uni-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "uni-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavComponent_ng_template_2_Template_uni_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "uni-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "uni-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Side");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "uni-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "uni-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidenavComponent_ng_template_2_Template_uni_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.position = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "uni-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "uni-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r70.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx_r70.open)("mode", ctx_r70.mode)("position", ctx_r70.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r70.UniSidenavMode.Over);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r70.UniSidenavMode.Side);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r70.UniSidenavPosition.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r70.UniSidenavPosition.End);
} }
function SidenavComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 10);
} }
class SidenavComponent {
    constructor() {
        this.UniSidenavMode = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavMode"];
        this.UniSidenavPosition = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavPosition"];
        this.example = _sidenav_example_constant__WEBPACK_IMPORTED_MODULE_2__["SIDENAV_EXAMPLE"];
        this.open = true;
        this.mode = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavMode"].Side;
        this.position = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavPosition"].Start;
    }
    toggle() {
        this.open = !this.open;
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Sidenav", 3, "html"], [3, "open", "mode", "position", "openChange"], ["uniSidenavBody", ""], ["uni-button", "", 3, "click"], [3, "ngModel", "ngModelChange"], [3, "value"], ["component", "sidenav"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_ng_template_2_Template, 19, 10, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContainerComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavBodyDirective"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContentComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniFormFieldComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniOptionComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%] {\n  height: 100px;\n  border: 1px solid var(--hairline-strong);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHVuaS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYWlybGluZS1zdHJvbmcpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGFpcmxpbmUtc3Ryb25nKTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/sidenav/sidenav.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/components/sidenav/sidenav.module.ts ***!
  \***************************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/features/components/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav-routing.module */ "./src/app/features/components/sidenav/sidenav-routing.module.ts");









class SidenavModule {
}
SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidenavModule_Factory(t) { return new (t || SidenavModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_7__["SidenavRoutingModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_7__["SidenavRoutingModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_7__["SidenavRoutingModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sidenav-sidenav-module-es2015.js.map