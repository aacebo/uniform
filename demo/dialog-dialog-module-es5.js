function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-dialog-module"], {
  /***/
  "./src/app/features/components/dialog/dialog-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/components/dialog/dialog-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DialogRoutingModule */

  /***/
  function srcAppFeaturesComponentsDialogDialogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogRoutingModule", function () {
      return DialogRoutingModule;
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


    var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog.component */
    "./src/app/features/components/dialog/dialog.component.ts");

    var routes = [{
      path: '',
      component: _dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]
    }];

    var DialogRoutingModule = function DialogRoutingModule() {
      _classCallCheck(this, DialogRoutingModule);
    };

    DialogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogRoutingModule
    });
    DialogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DialogRoutingModule_Factory(t) {
        return new (t || DialogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogRoutingModule, [{
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
  "./src/app/features/components/dialog/dialog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/features/components/dialog/dialog.component.ts ***!
    \****************************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppFeaturesComponentsDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
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


    var _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./example-dialog/example-dialog.component */
    "./src/app/features/components/dialog/example-dialog/example-dialog.component.ts");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(_dialog) {
        _classCallCheck(this, DialogComponent);

        this._dialog = _dialog;
      }

      _createClass(DialogComponent, [{
        key: "onClick",
        value: function onClick() {
          this._dialog.open(_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ExampleDialogComponent"], {
            width: 500,
            data: {
              title: 'Example Dialog',
              content: 'example dialog content...'
            }
          });
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogService"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 9,
      vars: 0,
      consts: [["color", "primary"], ["label", "Examples"], ["uni-button", "", "color", "primary", 3, "click"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "uni-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_7_listener($event) {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Open ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardHeaderComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardTitleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardContentComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/dialog/dialog.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/features/components/dialog/dialog.module.ts ***!
    \*************************************************************/

  /*! exports provided: DialogModule */

  /***/
  function srcAppFeaturesComponentsDialogDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return DialogModule;
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


    var _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog-routing.module */
    "./src/app/features/components/dialog/dialog-routing.module.ts");
    /* harmony import */


    var _dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog.component */
    "./src/app/features/components/dialog/dialog.component.ts");
    /* harmony import */


    var _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./example-dialog/example-dialog.component */
    "./src/app/features/components/dialog/example-dialog/example-dialog.component.ts");

    var DialogModule = function DialogModule() {
      _classCallCheck(this, DialogModule);
    };

    DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DialogModule_Factory(t) {
        return new (t || DialogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniDialogModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, {
        declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniDialogModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDialogComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          entryComponents: [_example_dialog_example_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExampleDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniDialogModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/dialog/example-dialog/example-dialog.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/features/components/dialog/example-dialog/example-dialog.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ExampleDialogComponent */

  /***/
  function srcAppFeaturesComponentsDialogExampleDialogExampleDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleDialogComponent", function () {
      return ExampleDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");

    var ExampleDialogComponent = function ExampleDialogComponent(data) {
      _classCallCheck(this, ExampleDialogComponent);

      this.data = data;
    };

    ExampleDialogComponent.ɵfac = function ExampleDialogComponent_Factory(t) {
      return new (t || ExampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UNI_DIALOG_DATA"]));
    };

    ExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleDialogComponent,
      selectors: [["app-example-dialog"]],
      decls: 8,
      vars: 2,
      consts: [["uni-button", "", "uniDialogClose", "", "color", "danger"]],
      template: function ExampleDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-dialog-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-dialog-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "uni-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.content, "\n");
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogHeaderComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogTitleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogContentComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogFooterComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniDialogCloseDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy9kaWFsb2cvZXhhbXBsZS1kaWFsb2cvZXhhbXBsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-dialog',
          templateUrl: './example-dialog.component.html',
          styleUrls: ['./example-dialog.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UNI_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dialog-dialog-module-es5.js.map