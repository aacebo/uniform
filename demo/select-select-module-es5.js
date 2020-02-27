function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"], {
  /***/
  "./src/app/features/components/select/select-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/components/select/select-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SelectRoutingModule */

  /***/
  function srcAppFeaturesComponentsSelectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRoutingModule", function () {
      return SelectRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/features/components/select/select.component.ts");

    var routes = [{
      path: '',
      component: _select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"]
    }];

    var SelectRoutingModule = function SelectRoutingModule() {
      _classCallCheck(this, SelectRoutingModule);
    };

    SelectRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectRoutingModule
    });
    SelectRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectRoutingModule_Factory(t) {
        return new (t || SelectRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/select/select.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/components/select/select.component.ts ***!
    \****************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppFeaturesComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../code-example/code-example.component */
    "./src/app/features/code-example/code-example.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../doc-viewer/doc-viewer.component */
    "./src/app/features/doc-viewer/doc-viewer.component.ts");

    function SelectComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test Label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-select", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_ng_template_2_Template_uni_select_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "uni-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "option 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "uni-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "option 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "uni-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "option 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "uni-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "testing my hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "uni-slide-toggle", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_ng_template_2_Template_uni_slide_toggle_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.disabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.value)("disabled", ctx_r49.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("value: ", ctx_r49.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r49.disabled ? "Enable" : "Disable", " ");
      }
    }

    function SelectComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 7);
      }
    }

    var SelectComponent = function SelectComponent() {
      _classCallCheck(this, SelectComponent);
    };

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)();
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Select"], ["placeholder", "PLACEHOLDER...", 3, "ngModel", "disabled", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["component", "select"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_ng_template_2_Template, 17, 5, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_ng_template_4_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniFormFieldComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniLabelComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniOptionComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniHintComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSlideToggleComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__["DocViewerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/select/select.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/features/components/select/select.module.ts ***!
    \*************************************************************/

  /*! exports provided: SelectModule */

  /***/
  function srcAppFeaturesComponentsSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectModule", function () {
      return SelectModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../doc-viewer */
    "./src/app/features/doc-viewer/index.ts");
    /* harmony import */


    var _code_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../code-example */
    "./src/app/features/code-example/index.ts");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/features/components/select/select.component.ts");
    /* harmony import */


    var _select_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./select-routing.module */
    "./src/app/features/components/select/select-routing.module.ts");

    var SelectModule = function SelectModule() {
      _classCallCheck(this, SelectModule);
    };

    SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectModule
    });
    SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectModule_Factory(t) {
        return new (t || SelectModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectModule, {
        declarations: [_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_7__["SelectRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_5__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSlideToggleModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=select-select-module-es5.js.map