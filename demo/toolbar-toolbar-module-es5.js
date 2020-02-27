function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toolbar-toolbar-module"], {
  /***/
  "./src/app/features/components/toolbar/toolbar-example.constant.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/components/toolbar/toolbar-example.constant.ts ***!
    \*************************************************************************/

  /*! exports provided: TOOLBAR_EXAMPLE */

  /***/
  function srcAppFeaturesComponentsToolbarToolbarExampleConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLBAR_EXAMPLE", function () {
      return TOOLBAR_EXAMPLE;
    });

    var TOOLBAR_EXAMPLE = "\n<uni-toolbar\n  *ngFor=\"let color of colors\"\n  [color]=\"color\"\n>\n  <span class=\"spacer\">{{ color }}</span>\n  <span>Right</span>\n</uni-toolbar>\n\n<uni-toolbar>\n  <span class=\"spacer\">default</span>\n  <span>Right</span>\n</uni-toolbar>\n";
    /***/
  },

  /***/
  "./src/app/features/components/toolbar/toolbar-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/features/components/toolbar/toolbar-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ToolbarRoutingModule */

  /***/
  function srcAppFeaturesComponentsToolbarToolbarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarRoutingModule", function () {
      return ToolbarRoutingModule;
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


    var _toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toolbar.component */
    "./src/app/features/components/toolbar/toolbar.component.ts");

    var routes = [{
      path: '',
      component: _toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]
    }];

    var ToolbarRoutingModule = function ToolbarRoutingModule() {
      _classCallCheck(this, ToolbarRoutingModule);
    };

    ToolbarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToolbarRoutingModule
    });
    ToolbarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToolbarRoutingModule_Factory(t) {
        return new (t || ToolbarRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarRoutingModule, [{
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
  "./src/app/features/components/toolbar/toolbar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/components/toolbar/toolbar.component.ts ***!
    \******************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppFeaturesComponentsToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
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


    var _toolbar_example_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toolbar-example.constant */
    "./src/app/features/components/toolbar/toolbar-example.constant.ts");
    /* harmony import */


    var _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../code-example/code-example.component */
    "./src/app/features/code-example/code-example.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../doc-viewer/doc-viewer.component */
    "./src/app/features/doc-viewer/doc-viewer.component.ts");

    function ToolbarComponent_ng_template_2_uni_toolbar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-toolbar", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r40);
      }
    }

    function ToolbarComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_ng_template_2_uni_toolbar_1_Template, 5, 2, "uni-toolbar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "default");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r37.example);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.colors);
      }
    }

    function ToolbarComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 7);
      }
    }

    var ToolbarComponent = function ToolbarComponent() {
      _classCallCheck(this, ToolbarComponent);

      this.colors = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniColor"]);
      this.example = _toolbar_example_constant__WEBPACK_IMPORTED_MODULE_2__["TOOLBAR_EXAMPLE"];
    };

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["title", "Toolbar", 3, "html"], [3, "color", 4, "ngFor", "ngForOf"], [1, "spacer"], [3, "color"], ["component", "toolbar"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_ng_template_2_Template, 7, 2, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_ng_template_4_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__["CodeExampleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToolbarComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_5__["DocViewerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-toolbar[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n[_nghost-%COMP%]   uni-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURDSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NOIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgdW5pLXRvb2xiYXIge1xuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCB1bmktdG9vbGJhciB7XG4gIG1hcmdpbjogNXB4O1xufVxuOmhvc3QgdW5pLXRvb2xiYXIgLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/toolbar/toolbar.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/features/components/toolbar/toolbar.module.ts ***!
    \***************************************************************/

  /*! exports provided: ToolbarModule */

  /***/
  function srcAppFeaturesComponentsToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
      return ToolbarModule;
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


    var _uniform_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _doc_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../doc-viewer */
    "./src/app/features/doc-viewer/index.ts");
    /* harmony import */


    var _code_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../code-example */
    "./src/app/features/code-example/index.ts");
    /* harmony import */


    var _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toolbar-routing.module */
    "./src/app/features/components/toolbar/toolbar-routing.module.ts");
    /* harmony import */


    var _toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toolbar.component */
    "./src/app/features/components/toolbar/toolbar.component.ts");

    var ToolbarModule = function ToolbarModule() {
      _classCallCheck(this, ToolbarModule);
    };

    ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToolbarModule
    });
    ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToolbarModule_Factory(t) {
        return new (t || ToolbarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, {
        declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=toolbar-toolbar-module-es5.js.map