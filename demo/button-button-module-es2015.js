(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-button-module"],{

/***/ "./src/app/features/components/button/button-example.constant.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/components/button/button-example.constant.ts ***!
  \***********************************************************************/
/*! exports provided: BUTTON_EXAMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_EXAMPLE", function() { return BUTTON_EXAMPLE; });
const BUTTON_EXAMPLE = `
<h4>Button</h4>

<button uni-button
        *ngFor="let color of colors"
        [color]="color">
  {{ color }}
</button>

<button uni-button>
  default
</button>

<button uni-button
        disabled>
  disabled
</button>

<h4>Icon Button</h4>

<button uni-icon-button
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-icon-button>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-icon-button
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Fab</h4>

<button uni-fab
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-fab>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-fab
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Mini Fab</h4>

<button uni-mini-fab
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-mini-fab>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-mini-fab
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Link</h4>

<button uni-link-button
        *ngFor="let color of colors"
        [color]="color">
  {{ color }}
</button>

<button uni-link-button>
  default
</button>

<button uni-link-button
        disabled>
  disabled
</button>
`;


/***/ }),

/***/ "./src/app/features/components/button/button-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/components/button/button-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ButtonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRoutingModule", function() { return ButtonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/app/features/components/button/button.component.ts");





const routes = [
    { path: '', component: _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"] },
];
class ButtonRoutingModule {
}
ButtonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonRoutingModule });
ButtonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonRoutingModule_Factory(t) { return new (t || ButtonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/button/button.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/components/button/button.component.ts ***!
  \****************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _button_example_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-example.constant */ "./src/app/features/components/button/button-example.constant.ts");
/* harmony import */ var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../code-example/code-example.component */ "./src/app/features/code-example/code-example.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../doc-viewer/doc-viewer.component */ "./src/app/features/doc-viewer/doc-viewer.component.ts");








function ButtonComponent_ng_template_2_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r28, " ");
} }
function ButtonComponent_ng_template_2_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r29);
} }
function ButtonComponent_ng_template_2_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r30);
} }
function ButtonComponent_ng_template_2_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r31);
} }
function ButtonComponent_ng_template_2_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r32, " ");
} }
function ButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_ng_template_2_button_3_Template, 2, 2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Icon Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ButtonComponent_ng_template_2_button_10_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ButtonComponent_ng_template_2_button_17_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mini Fab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ButtonComponent_ng_template_2_button_24_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ButtonComponent_ng_template_2_button_31_Template, 2, 2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r21.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.colors);
} }
function ButtonComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 26);
} }
class ButtonComponent {
    constructor() {
        this.colors = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniColor"]);
        this.sizes = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSize"]);
        this.example = _button_example_constant__WEBPACK_IMPORTED_MODULE_2__["BUTTON_EXAMPLE"];
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], decls: 5, vars: 0, consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Button Types", 3, "html"], ["uni-button", "", 3, "color", 4, "ngFor", "ngForOf"], ["uni-button", ""], ["uni-button", "", "disabled", ""], ["uni-icon-button", "", 3, "color", 4, "ngFor", "ngForOf"], ["uni-icon-button", ""], ["icon", "mdi-home"], ["uni-icon-button", "", "disabled", ""], ["uni-fab", "", 3, "color", 4, "ngFor", "ngForOf"], ["uni-fab", ""], ["uni-fab", "", "disabled", ""], ["uni-mini-fab", "", 3, "color", 4, "ngFor", "ngForOf"], ["uni-mini-fab", ""], ["uni-mini-fab", "", "disabled", ""], ["uni-link-button", "", 3, "color", 4, "ngFor", "ngForOf"], ["uni-link-button", ""], ["uni-link-button", "", "disabled", ""], ["uni-button", "", 3, "color"], ["uni-icon-button", "", 3, "color"], ["uni-fab", "", 3, "color"], ["uni-mini-fab", "", 3, "color"], ["uni-link-button", "", 3, "color"], ["component", "button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_ng_template_2_Template, 36, 6, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__["CodeExampleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniIconComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__["DocViewerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBidXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/button/button.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/components/button/button.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../doc-viewer */ "./src/app/features/doc-viewer/index.ts");
/* harmony import */ var _code_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-example */ "./src/app/features/code-example/index.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.component */ "./src/app/features/components/button/button.component.ts");
/* harmony import */ var _button_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-routing.module */ "./src/app/features/components/button/button-routing.module.ts");








class ButtonModule {
}
ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_routing_module__WEBPACK_IMPORTED_MODULE_6__["ButtonRoutingModule"],
            _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"],
            _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _button_routing_module__WEBPACK_IMPORTED_MODULE_6__["ButtonRoutingModule"],
        _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"],
        _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _button_routing_module__WEBPACK_IMPORTED_MODULE_6__["ButtonRoutingModule"],
                    _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"],
                    _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=button-button-module-es2015.js.map