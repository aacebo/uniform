function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-tab-module"], {
  /***/
  "./src/app/features/components/tab/tab-example.constant.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/features/components/tab/tab-example.constant.ts ***!
    \*****************************************************************/

  /*! exports provided: TAB_EXAMPLE */

  /***/
  function srcAppFeaturesComponentsTabTabExampleConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB_EXAMPLE", function () {
      return TAB_EXAMPLE;
    });

    var TAB_EXAMPLE = "\n<uni-tab-group [(active)]=\"active\">\n  <uni-tab label=\"First\">\n    <ng-template uniTabBody>\n      {{ active }}\n    </ng-template>\n  </uni-tab>\n\n  <uni-tab label=\"Second\">\n    <ng-template uniTabBody>\n      {{ active }}\n    </ng-template>\n  </uni-tab>\n</uni-tab-group>\n";
    /***/
  },

  /***/
  "./src/app/features/components/tab/tab-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/features/components/tab/tab-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: TabRoutingModule */

  /***/
  function srcAppFeaturesComponentsTabTabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabRoutingModule", function () {
      return TabRoutingModule;
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


    var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tab.component */
    "./src/app/features/components/tab/tab.component.ts");

    var routes = [{
      path: '',
      component: _tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"]
    }];

    var TabRoutingModule = function TabRoutingModule() {
      _classCallCheck(this, TabRoutingModule);
    };

    TabRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabRoutingModule
    });
    TabRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TabRoutingModule_Factory(t) {
        return new (t || TabRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabRoutingModule, [{
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
  "./src/app/features/components/tab/tab.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/features/components/tab/tab.component.ts ***!
    \**********************************************************/

  /*! exports provided: TabComponent */

  /***/
  function srcAppFeaturesComponentsTabTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return TabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tab_example_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tab-example.constant */
    "./src/app/features/components/tab/tab-example.constant.ts");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../code-example/code-example.component */
    "./src/app/features/code-example/code-example.component.ts");
    /* harmony import */


    var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../doc-viewer/doc-viewer.component */
    "./src/app/features/doc-viewer/doc-viewer.component.ts");

    function TabComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r80.active, " ");
      }
    }

    function TabComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.active, " ");
      }
    }

    function TabComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab-group", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeChange", function TabComponent_ng_template_2_Template_uni_tab_group_activeChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.active = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-tab", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-tab", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabComponent_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r78.example);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r78.active);
      }
    }

    function TabComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 8);
      }
    }

    var TabComponent = function TabComponent() {
      _classCallCheck(this, TabComponent);

      this.example = _tab_example_constant__WEBPACK_IMPORTED_MODULE_1__["TAB_EXAMPLE"];
      this.active = 0;
    };

    TabComponent.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent)();
    };

    TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabComponent,
      selectors: [["app-tab"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Tab", 3, "html"], [3, "active", "activeChange"], ["label", "First"], ["label", "Second"], ["component", "tab"]],
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabComponent_ng_template_2_Template, 6, 2, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabComponent_ng_template_4_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__["CodeExampleComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__["DocViewerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   app-code-example[_ngcontent-%COMP%]   uni-tab-group[_ngcontent-%COMP%]   uni-tab.active[_ngcontent-%COMP%] {\n  border: 1px solid var(--hairline-regular);\n  border-top: none;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURJUTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZWIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGFwcC1jb2RlLWV4YW1wbGUge1xuICAgIHVuaS10YWItZ3JvdXAge1xuICAgICAgdW5pLXRhYiB7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYWlybGluZS1yZWd1bGFyKTtcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IGFwcC1jb2RlLWV4YW1wbGUgdW5pLXRhYi1ncm91cCB1bmktdGFiLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhaXJsaW5lLXJlZ3VsYXIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab',
          templateUrl: './tab.component.html',
          styleUrls: ['./tab.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/tab/tab.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/components/tab/tab.module.ts ***!
    \*******************************************************/

  /*! exports provided: TabModule */

  /***/
  function srcAppFeaturesComponentsTabTabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabModule", function () {
      return TabModule;
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


    var _code_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../code-example */
    "./src/app/features/code-example/index.ts");
    /* harmony import */


    var _doc_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../doc-viewer */
    "./src/app/features/doc-viewer/index.ts");
    /* harmony import */


    var _tab_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab-routing.module */
    "./src/app/features/components/tab/tab-routing.module.ts");
    /* harmony import */


    var _tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab.component */
    "./src/app/features/components/tab/tab.component.ts");

    var TabModule = function TabModule() {
      _classCallCheck(this, TabModule);
    };

    TabModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabModule
    });
    TabModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TabModule_Factory(t) {
        return new (t || TabModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabRoutingModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabModule, {
        declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_7__["TabComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabRoutingModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_7__["TabComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabRoutingModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_5__["DocViewerModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=tab-tab-module-es5.js.map