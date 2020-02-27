function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toast-toast-module"], {
  /***/
  "./src/app/features/components/toast/toast-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/features/components/toast/toast-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ToastRoutingModule */

  /***/
  function srcAppFeaturesComponentsToastToastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastRoutingModule", function () {
      return ToastRoutingModule;
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


    var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toast.component */
    "./src/app/features/components/toast/toast.component.ts");

    var routes = [{
      path: '',
      component: _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]
    }];

    var ToastRoutingModule = function ToastRoutingModule() {
      _classCallCheck(this, ToastRoutingModule);
    };

    ToastRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToastRoutingModule
    });
    ToastRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToastRoutingModule_Factory(t) {
        return new (t || ToastRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastRoutingModule, [{
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
  "./src/app/features/components/toast/toast.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/features/components/toast/toast.component.ts ***!
    \**************************************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppFeaturesComponentsToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ToastComponent_uni_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toastType_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toastType_r47, " ");
      }
    }

    function ToastComponent_uni_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pos_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pos_r48, " ");
      }
    }

    var ToastComponent =
    /*#__PURE__*/
    function () {
      function ToastComponent(_uniToastService) {
        _classCallCheck(this, ToastComponent);

        this._uniToastService = _uniToastService;
        this.type = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastType"].Success;
        this.types = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastType"]);
        this.position = _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastPosition"].TopRight;
        this.positions = Object.values(_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastPosition"]);
      }

      _createClass(ToastComponent, [{
        key: "open",
        value: function open() {
          this._uniToastService.open({
            title: 'Toast Title',
            message: "".concat(this.type, " toast"),
            type: this.type,
            position: this.position,
            duration: 5000
          });
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastService"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toast"]],
      decls: 15,
      vars: 4,
      consts: [["color", "primary"], ["label", "Examples"], ["placeholder", "Type...", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["placeholder", "Position...", 3, "ngModel", "ngModelChange"], ["uni-button", "", "color", "primary", 3, "click"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "uni-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "uni-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "uni-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "uni-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "uni-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToastComponent_Template_uni_select_ngModelChange_8_listener($event) {
            return ctx.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToastComponent_uni_option_9_Template, 2, 1, "uni-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "uni-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "uni-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToastComponent_Template_uni_select_ngModelChange_11_listener($event) {
            return ctx.position = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToastComponent_uni_option_12_Template, 2, 1, "uni-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_Template_button_click_13_listener($event) {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Toast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabGroupComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniTabComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardHeaderComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardTitleComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniCardContentComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniFormFieldComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniOptionComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuc2NzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toast',
          templateUrl: './toast.component.html',
          styleUrls: ['./toast.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/components/toast/toast.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/components/toast/toast.module.ts ***!
    \***********************************************************/

  /*! exports provided: ToastModule */

  /***/
  function srcAppFeaturesComponentsToastToastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastModule", function () {
      return ToastModule;
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


    var _toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toast.component */
    "./src/app/features/components/toast/toast.component.ts");
    /* harmony import */


    var _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toast-routing.module */
    "./src/app/features/components/toast/toast-routing.module.ts");

    var ToastModule = function ToastModule() {
      _classCallCheck(this, ToastModule);
    };

    ToastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToastModule
    });
    ToastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToastModule_Factory(t) {
        return new (t || ToastModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastRoutingModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToastModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastModule, {
        declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastRoutingModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToastModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastRoutingModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniCardModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTabModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToastModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniFormFieldModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSelectModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=toast-toast-module-es5.js.map