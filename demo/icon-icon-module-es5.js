function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon-icon-module"], {
  /***/
  "./src/app/features/components/icon/icon-example.constant.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/features/components/icon/icon-example.constant.ts ***!
    \*******************************************************************/

  /*! exports provided: ICON_EXAMPLE */

  /***/
  function srcAppFeaturesComponentsIconIconExampleConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ICON_EXAMPLE", function () {
      return ICON_EXAMPLE;
    });

    var ICON_EXAMPLE = "\n<uni-icon icon=\"mdi-home\"></uni-icon>\n<uni-icon icon=\"mdi-account\"></uni-icon>\n<uni-icon icon=\"mdi-bluetooth\"></uni-icon>\n<uni-icon icon=\"mdi-calendar\"></uni-icon>\n";
    /***/
  },

  /***/
  "./src/app/features/components/icon/icon-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/features/components/icon/icon-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: IconRoutingModule */

  /***/
  function srcAppFeaturesComponentsIconIconRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconRoutingModule", function () {
      return IconRoutingModule;
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


    var _icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icon.component */
    "./src/app/features/components/icon/icon.component.ts");

    var routes = [{
      path: '',
      component: _icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]
    }];

    var IconRoutingModule = function IconRoutingModule() {
      _classCallCheck(this, IconRoutingModule);
    };

    IconRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconRoutingModule
    });
    IconRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconRoutingModule_Factory(t) {
        return new (t || IconRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconRoutingModule, [{
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
  "./src/app/features/components/icon/icon.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/components/icon/icon.component.ts ***!
    \************************************************************/

  /*! exports provided: IconComponent */

  /***/
  function srcAppFeaturesComponentsIconIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconComponent", function () {
      return IconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _icon_example_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./icon-example.constant */
    "./src/app/features/components/icon/icon-example.constant.ts");
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

    function IconComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-code-example", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "uni-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "uni-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "uni-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "uni-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", ctx_r35.example);
      }
    }

    function IconComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doc-viewer", 9);
      }
    }

    var IconComponent = function IconComponent() {
      _classCallCheck(this, IconComponent);

      this.example = _icon_example_constant__WEBPACK_IMPORTED_MODULE_1__["ICON_EXAMPLE"];
    };

    IconComponent.ɵfac = function IconComponent_Factory(t) {
      return new (t || IconComponent)();
    };

    IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconComponent,
      selectors: [["app-icon"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], ["label", "Examples"], ["uniTabBody", ""], ["label", "API"], ["title", "Icon", 3, "html"], ["icon", "mdi-home"], ["icon", "mdi-account"], ["icon", "mdi-bluetooth"], ["icon", "mdi-calendar"], ["component", "icon"]],
      template: function IconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconComponent_ng_template_2_Template, 5, 1, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconComponent_ng_template_4_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabBodyDirective"], _code_example_code_example_component__WEBPACK_IMPORTED_MODULE_3__["CodeExampleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconComponent"], _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_4__["DocViewerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   uni-icon[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICB1bmktaWNvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgdW5pLWljb24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-icon',
          templateUrl: './icon.component.html',
          styleUrls: ['./icon.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/icon/icon.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/components/icon/icon.module.ts ***!
    \*********************************************************/

  /*! exports provided: IconModule */

  /***/
  function srcAppFeaturesComponentsIconIconModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconModule", function () {
      return IconModule;
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


    var _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icon-routing.module */
    "./src/app/features/components/icon/icon-routing.module.ts");
    /* harmony import */


    var _icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./icon.component */
    "./src/app/features/components/icon/icon.component.ts");

    var IconModule = function IconModule() {
      _classCallCheck(this, IconModule);
    };

    IconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconModule
    });
    IconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconModule_Factory(t) {
        return new (t || IconModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__["IconRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCodeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconModule, {
        declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__["IconRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCodeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__["IconRoutingModule"], _doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewerModule"], _code_example__WEBPACK_IMPORTED_MODULE_4__["CodeExampleModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCodeModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=icon-icon-module-es5.js.map