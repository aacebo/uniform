function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/components/fesm2015/uniform-components.js":
  /*!********************************************************************************************!*\
    !*** /home/aacebo/Documents/Github/uniform/dist/components/fesm2015/uniform-components.js ***!
    \********************************************************************************************/

  /*! exports provided: UNI_DIALOG_CONTENT, UNI_DIALOG_DATA, UNI_DIALOG_DEFAULT_OPTIONS, UNI_DIALOG_OPTIONS, UNI_HOST_COLORS, UNI_HOST_SIZES, UNI_POSITIONS, UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG, UNI_TOAST_OPTIONS, UniButtonComponent, UniButtonModule, UniCardAvatarDirective, UniCardComponent, UniCardContentComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardModule, UniCardSubtitleComponent, UniCardTitleComponent, UniCheckboxComponent, UniCheckboxModule, UniCodeComponent, UniCodeModule, UniColor, UniDialogCloseDirective, UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogModule, UniDialogRef, UniDialogService, UniDialogTitleComponent, UniErrorComponent, UniFormFieldComponent, UniFormFieldControlBase, UniFormFieldModule, UniHintComponent, UniIconComponent, UniIconModule, UniIconService, UniInputComponent, UniInputModule, UniLabelComponent, UniMarkedComponent, UniMarkedModule, UniOptionComponent, UniPopoverComponent, UniPopoverDirective, UniPopoverModule, UniPopoverTrigger, UniPosition, UniPositionBase, UniProgressBarComponent, UniProgressMode, UniProgressModule, UniProgressSpinnerComponent, UniResizeObserverDirective, UniResizeObserverModule, UniResizeObserverService, UniSelectComponent, UniSelectModule, UniSelectPanelComponent, UniSidenavBodyDirective, UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavMode, UniSidenavModule, UniSidenavPosition, UniSidenavState, UniSize, UniSlideToggleComponent, UniSlideToggleModule, UniSplitAreaComponent, UniSplitComponent, UniSplitDirection, UniSplitHandleComponent, UniSplitModule, UniTabBodyDirective, UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabModule, UniToastComponent, UniToastModule, UniToastPosition, UniToastRef, UniToastService, UniToastType, UniToolbarComponent, UniToolbarModule, UniTooltipComponent, UniTooltipDirective, UniTooltipModule, getUniPosition, uniColors, uniFormFieldProvider */

  /***/
  function distComponentsFesm2015UniformComponentsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_CONTENT", function () {
      return UNI_DIALOG_CONTENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_DATA", function () {
      return UNI_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_DEFAULT_OPTIONS", function () {
      return UNI_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_OPTIONS", function () {
      return UNI_DIALOG_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_HOST_COLORS", function () {
      return UNI_HOST_COLORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_HOST_SIZES", function () {
      return UNI_HOST_SIZES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_POSITIONS", function () {
      return UNI_POSITIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_TOAST_CONFIG", function () {
      return UNI_TOAST_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_TOAST_DEFAULT_CONFIG", function () {
      return UNI_TOAST_DEFAULT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNI_TOAST_OPTIONS", function () {
      return UNI_TOAST_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniButtonComponent", function () {
      return UniButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniButtonModule", function () {
      return UniButtonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardAvatarDirective", function () {
      return UniCardAvatarDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardComponent", function () {
      return UniCardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardContentComponent", function () {
      return UniCardContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardFooterComponent", function () {
      return UniCardFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardHeaderComponent", function () {
      return UniCardHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardModule", function () {
      return UniCardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardSubtitleComponent", function () {
      return UniCardSubtitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCardTitleComponent", function () {
      return UniCardTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCheckboxComponent", function () {
      return UniCheckboxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCheckboxModule", function () {
      return UniCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCodeComponent", function () {
      return UniCodeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniCodeModule", function () {
      return UniCodeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniColor", function () {
      return UniColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogCloseDirective", function () {
      return UniDialogCloseDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogContainerComponent", function () {
      return UniDialogContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogContentComponent", function () {
      return UniDialogContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogFooterComponent", function () {
      return UniDialogFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogHeaderComponent", function () {
      return UniDialogHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogModule", function () {
      return UniDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogRef", function () {
      return UniDialogRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogService", function () {
      return UniDialogService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniDialogTitleComponent", function () {
      return UniDialogTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniErrorComponent", function () {
      return UniErrorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniFormFieldComponent", function () {
      return UniFormFieldComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniFormFieldControlBase", function () {
      return UniFormFieldControlBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniFormFieldModule", function () {
      return UniFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniHintComponent", function () {
      return UniHintComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniIconComponent", function () {
      return UniIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniIconModule", function () {
      return UniIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniIconService", function () {
      return UniIconService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniInputComponent", function () {
      return UniInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniInputModule", function () {
      return UniInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniLabelComponent", function () {
      return UniLabelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniMarkedComponent", function () {
      return UniMarkedComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniMarkedModule", function () {
      return UniMarkedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniOptionComponent", function () {
      return UniOptionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPopoverComponent", function () {
      return UniPopoverComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPopoverDirective", function () {
      return UniPopoverDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPopoverModule", function () {
      return UniPopoverModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPopoverTrigger", function () {
      return UniPopoverTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPosition", function () {
      return UniPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniPositionBase", function () {
      return UniPositionBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniProgressBarComponent", function () {
      return UniProgressBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniProgressMode", function () {
      return UniProgressMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniProgressModule", function () {
      return UniProgressModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniProgressSpinnerComponent", function () {
      return UniProgressSpinnerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniResizeObserverDirective", function () {
      return UniResizeObserverDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniResizeObserverModule", function () {
      return UniResizeObserverModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniResizeObserverService", function () {
      return UniResizeObserverService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSelectComponent", function () {
      return UniSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSelectModule", function () {
      return UniSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSelectPanelComponent", function () {
      return UniSelectPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavBodyDirective", function () {
      return UniSidenavBodyDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavComponent", function () {
      return UniSidenavComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavContainerComponent", function () {
      return UniSidenavContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavContentComponent", function () {
      return UniSidenavContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavMode", function () {
      return UniSidenavMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavModule", function () {
      return UniSidenavModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavPosition", function () {
      return UniSidenavPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSidenavState", function () {
      return UniSidenavState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSize", function () {
      return UniSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSlideToggleComponent", function () {
      return UniSlideToggleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSlideToggleModule", function () {
      return UniSlideToggleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSplitAreaComponent", function () {
      return UniSplitAreaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSplitComponent", function () {
      return UniSplitComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSplitDirection", function () {
      return UniSplitDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSplitHandleComponent", function () {
      return UniSplitHandleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniSplitModule", function () {
      return UniSplitModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTabBodyDirective", function () {
      return UniTabBodyDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTabComponent", function () {
      return UniTabComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTabGroupComponent", function () {
      return UniTabGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTabLabelComponent", function () {
      return UniTabLabelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTabModule", function () {
      return UniTabModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastComponent", function () {
      return UniToastComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastModule", function () {
      return UniToastModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastPosition", function () {
      return UniToastPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastRef", function () {
      return UniToastRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastService", function () {
      return UniToastService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToastType", function () {
      return UniToastType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToolbarComponent", function () {
      return UniToolbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniToolbarModule", function () {
      return UniToolbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTooltipComponent", function () {
      return UniTooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTooltipDirective", function () {
      return UniTooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniTooltipModule", function () {
      return UniTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUniPosition", function () {
      return getUniPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uniColors", function () {
      return uniColors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uniFormFieldProvider", function () {
      return uniFormFieldProvider;
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


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var marked__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! marked */
    "../../node_modules/marked/src/marked.js");
    /* harmony import */


    var marked__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var highlight_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! highlight.js */
    "../../node_modules/highlight.js/lib/index.js");
    /* harmony import */


    var highlight_js__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! resize-observer-polyfill */
    "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

    var UniColor;

    (function (UniColor) {
      UniColor["Primary"] = "primary";
      UniColor["Success"] = "success";
      UniColor["Warning"] = "warning";
      UniColor["Danger"] = "danger";
    })(UniColor || (UniColor = {}));

    var UniSize;

    (function (UniSize) {
      UniSize["Small"] = "sm";
      UniSize["Large"] = "lg";
    })(UniSize || (UniSize = {}));

    var UNI_HOST_COLORS = {
      '[class.primary]': "color === \"".concat(UniColor.Primary, "\""),
      '[class.success]': "color === \"".concat(UniColor.Success, "\""),
      '[class.warning]': "color === \"".concat(UniColor.Warning, "\""),
      '[class.danger]': "color === \"".concat(UniColor.Danger, "\"")
    };

    function uniColors(color) {
      return {
        primary: color === UniColor.Primary,
        success: color === UniColor.Success,
        warning: color === UniColor.Warning,
        danger: color === UniColor.Danger
      };
    }

    var UNI_HOST_SIZES = {
      '[class.small]': "size === \"".concat(UniSize.Small, "\""),
      '[class.large]': "size === \"".concat(UniSize.Large, "\"")
    };
    var UniPosition;

    (function (UniPosition) {
      UniPosition["Top"] = "top";
      UniPosition["Bottom"] = "bottom";
      UniPosition["Left"] = "left";
      UniPosition["Right"] = "right";
      UniPosition["BottomLeft"] = "bottom left";
      UniPosition["BottomRight"] = "bottom right";
      UniPosition["TopLeft"] = "top left";
      UniPosition["TopRight"] = "top right";
    })(UniPosition || (UniPosition = {}));

    var UNI_POSITION_OFFSET = 16;

    function getUniPosition(position) {
      var originX = 'center';
      var originY = 'top';
      var overlayX = 'center';
      var overlayY = 'bottom';
      var offsetX = 0;

      if (position === UniPosition.Bottom) {
        originY = 'bottom';
        overlayX = 'center';
        overlayY = 'top';
      } else if (position === UniPosition.Left) {
        originX = 'start';
        originY = 'center';
        overlayX = 'end';
        overlayY = 'center';
      } else if (position === UniPosition.Right) {
        originX = 'end';
        originY = 'center';
        overlayX = 'start';
        overlayY = 'center';
      } else if (position === UniPosition.BottomLeft) {
        originY = 'bottom';
        overlayX = 'end';
        overlayY = 'top';
        offsetX = UNI_POSITION_OFFSET;
      } else if (position === UniPosition.BottomRight) {
        originY = 'bottom';
        overlayX = 'start';
        overlayY = 'top';
        offsetX = UNI_POSITION_OFFSET * -1;
      } else if (position === UniPosition.TopLeft) {
        overlayX = 'end';
        offsetX = UNI_POSITION_OFFSET;
      } else if (position === UniPosition.TopRight) {
        overlayX = 'start';
        offsetX = UNI_POSITION_OFFSET * -1;
      }

      return {
        originX: originX,
        originY: originY,
        overlayX: overlayX,
        overlayY: overlayY,
        offsetX: offsetX
      };
    }

    var UNI_POSITIONS = {
      '[class.top]': 'position === "top"',
      '[class.bottom]': 'position === "bottom"',
      '[class.left]': 'position === "left"',
      '[class.right]': 'position === "right"',
      '[class.bottom-left]': 'position === "bottom left"',
      '[class.bottom-right]': 'position === "bottom right"',
      '[class.top-left]': 'position === "top left"',
      '[class.top-right]': 'position === "top right"'
    };

    var UniPositionBase =
    /*#__PURE__*/
    function () {
      function UniPositionBase() {
        _classCallCheck(this, UniPositionBase);
      }

      _createClass(UniPositionBase, [{
        key: "isString",
        get: function get() {
          return typeof this.content === 'string';
        }
      }]);

      return UniPositionBase;
    }();

    UniPositionBase.ɵfac = function UniPositionBase_Factory(t) {
      return new (t || UniPositionBase)();
    };

    UniPositionBase.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniPositionBase,
      inputs: {
        content: "content",
        position: "position"
      }
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPositionBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], null, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function UniTooltipComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
      }
    }

    function UniTooltipComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r2.content, "\n");
      }
    }

    var UniTooltipComponent =
    /*#__PURE__*/
    function (_UniPositionBase) {
      _inherits(UniTooltipComponent, _UniPositionBase);

      function UniTooltipComponent() {
        _classCallCheck(this, UniTooltipComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(UniTooltipComponent).apply(this, arguments));
      }

      return UniTooltipComponent;
    }(UniPositionBase);

    UniTooltipComponent.ɵfac = function UniTooltipComponent_Factory(t) {
      return ɵUniTooltipComponent_BaseFactory(t || UniTooltipComponent);
    };

    UniTooltipComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniTooltipComponent,
      selectors: [["uni-tooltip"]],
      hostAttrs: [1, "uni-tooltip"],
      hostVars: 16,
      hostBindings: function UniTooltipComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 1,
      consts: [[4, "ngTemplateOutlet"], ["default", ""]],
      template: function UniTooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniTooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniTooltipComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.isString ? _r1 : ctx.content);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%]{max-width:250px;overflow-wrap:break-word;padding:10px;border-radius:3px;font-size:12px;font-weight:500;background-color:var(--black);color:var(--white);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--black);border:2px solid var(--black)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--black);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--black);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"],
      changeDetection: 0
    });
    var ɵUniTooltipComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniTooltipComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-tooltip',
          templateUrl: './tooltip.component.html',
          styleUrls: ['./tooltip.component.scss'],
          host: Object.assign({
            "class": 'uni-tooltip'
          }, UNI_POSITIONS),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var UniTooltipDirective =
    /*#__PURE__*/
    function () {
      function UniTooltipDirective(_overlay, _el) {
        _classCallCheck(this, UniTooltipDirective);

        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.panelClass = 'uni-tooltip-panel';
      }

      _createClass(UniTooltipDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var positionStrategy = this._positionStrategy;
          this._overlayRef = this._overlay.create({
            positionStrategy: positionStrategy,
            panelClass: this.panelClass
          });
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);

            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniTooltipComponent);

            var ref = this._overlayRef.attach(portal);

            ref.instance.content = this.content;
            ref.instance.position = this.position;
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this._overlayRef.detach();
        }
      }, {
        key: "_vertical",
        get: function get() {
          return this.position === UniPosition.Top || this.position === UniPosition.Bottom;
        }
      }, {
        key: "_positionStrategy",
        get: function get() {
          return this._overlay.position().flexibleConnectedTo(this.origin || this._el).withFlexibleDimensions(true).withPush(this._vertical ? true : false).withViewportMargin(8).withPositions([getUniPosition(this.position)]);
        }
      }]);

      return UniTooltipDirective;
    }();

    UniTooltipDirective.ɵfac = function UniTooltipDirective_Factory(t) {
      return new (t || UniTooltipDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniTooltipDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniTooltipDirective,
      selectors: [["", "uniTooltip", ""]],
      hostBindings: function UniTooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mouseenter", function UniTooltipDirective_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter();
          })("mouseleave", function UniTooltipDirective_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        content: ["uniTooltip", "content"],
        disabled: ["uniTooltipDisabled", "disabled"],
        position: ["uniTooltipPosition", "position"],
        panelClass: ["uniTooltipPanelClass", "panelClass"],
        origin: ["uniTooltipOrigin", "origin"]
      },
      exportAs: ["uniTooltip"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[uniTooltip]',
          exportAs: 'uniTooltip',
          host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniTooltip']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniTooltipDisabled']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniTooltipPosition']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniTooltipPanelClass']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniTooltipOrigin']
        }]
      });
    })();

    var UniTooltipModule = function UniTooltipModule() {
      _classCallCheck(this, UniTooltipModule);
    };

    UniTooltipModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniTooltipModule
    });
    UniTooltipModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniTooltipModule_Factory(t) {
        return new (t || UniTooltipModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniTooltipModule, {
        declarations: [UniTooltipComponent, UniTooltipDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [UniTooltipDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniTooltipComponent, UniTooltipDirective],
          entryComponents: [UniTooltipComponent],
          exports: [UniTooltipDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]
        }]
      }], null, null);
    })();

    function UniPopoverComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
      }
    }

    function UniPopoverComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
      }

      if (rf & 2) {
        var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r5.content, "\n");
      }
    }

    var UniPopoverComponent =
    /*#__PURE__*/
    function (_UniPositionBase2) {
      _inherits(UniPopoverComponent, _UniPositionBase2);

      function UniPopoverComponent() {
        _classCallCheck(this, UniPopoverComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(UniPopoverComponent).apply(this, arguments));
      }

      return UniPopoverComponent;
    }(UniPositionBase);

    UniPopoverComponent.ɵfac = function UniPopoverComponent_Factory(t) {
      return ɵUniPopoverComponent_BaseFactory(t || UniPopoverComponent);
    };

    UniPopoverComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniPopoverComponent,
      selectors: [["uni-popover"]],
      hostAttrs: [1, "uni-popover"],
      hostVars: 16,
      hostBindings: function UniPopoverComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 1,
      consts: [[4, "ngTemplateOutlet"], ["default", ""]],
      template: function UniPopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniPopoverComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniPopoverComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.isString ? _r4 : ctx.content);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%]{font-size:12px;max-width:250px;padding:15px;overflow-wrap:break-word;border-radius:3px;background-color:var(--white);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4);color:var(--black);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--white);border:2px solid var(--white)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--white);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--white);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"],
      changeDetection: 0
    });
    var ɵUniPopoverComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniPopoverComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-popover',
          templateUrl: './popover.component.html',
          styleUrls: ['./popover.component.scss'],
          host: Object.assign({
            "class": 'uni-popover'
          }, UNI_POSITIONS),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var UniPopoverTrigger;

    (function (UniPopoverTrigger) {
      UniPopoverTrigger["Click"] = "click";
      UniPopoverTrigger["Hover"] = "hover";
    })(UniPopoverTrigger || (UniPopoverTrigger = {}));

    var UniPopoverDirective =
    /*#__PURE__*/
    function () {
      function UniPopoverDirective(_overlay, _el) {
        _classCallCheck(this, UniPopoverDirective);

        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.trigger = UniPopoverTrigger.Click;
        this.panelClass = 'uni-popover-panel';
        this.hasBackdrop = true;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
      }

      _createClass(UniPopoverDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._overlayRef = this._overlay.create({
            positionStrategy: this._positionStrategy,
            panelClass: this.panelClass,
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass
          });

          this._overlayRef.backdropClick().subscribe(function () {
            _this._hide();
          });
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (this.trigger === UniPopoverTrigger.Hover) {
            this._show();
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          if (this.trigger === UniPopoverTrigger.Hover) {
            this._hide();
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.trigger === UniPopoverTrigger.Click) {
            if (this._overlayRef.hasAttached()) {
              this._hide();
            } else {
              this._show();
            }
          }
        }
      }, {
        key: "_show",
        value: function _show() {
          if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);

            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniPopoverComponent);

            var ref = this._overlayRef.attach(portal);

            ref.instance.content = this.content;
            ref.instance.position = this.position;
          }
        }
      }, {
        key: "_hide",
        value: function _hide() {
          this._overlayRef.detach();
        }
      }, {
        key: "_vertical",
        get: function get() {
          return this.position === UniPosition.Top || this.position === UniPosition.Bottom;
        }
      }, {
        key: "_positionStrategy",
        get: function get() {
          return this._overlay.position().flexibleConnectedTo(this.origin || this._el).withFlexibleDimensions(true).withPush(this._vertical ? true : false).withViewportMargin(8).withPositions([getUniPosition(this.position)]);
        }
      }]);

      return UniPopoverDirective;
    }();

    UniPopoverDirective.ɵfac = function UniPopoverDirective_Factory(t) {
      return new (t || UniPopoverDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniPopoverDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniPopoverDirective,
      selectors: [["", "uniPopover", ""]],
      hostBindings: function UniPopoverDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mouseenter", function UniPopoverDirective_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter();
          })("mouseleave", function UniPopoverDirective_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseLeave();
          })("click", function UniPopoverDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        content: ["uniPopover", "content"],
        disabled: ["uniPopoverDisabled", "disabled"],
        position: ["uniPopoverPosition", "position"],
        trigger: ["uniPopoverTrigger", "trigger"],
        panelClass: ["uniPopoverPanelClass", "panelClass"],
        hasBackdrop: ["uniPopoverHasBackdrop", "hasBackdrop"],
        backdropClass: ["uniPopoverBackdropClass", "backdropClass"],
        origin: ["uniPopoverOrigin", "origin"]
      },
      exportAs: ["uniPopover"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[uniPopover]',
          exportAs: 'uniPopover',
          host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()',
            '(click)': 'onClick()'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopover']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverDisabled']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverPosition']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverTrigger']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverPanelClass']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverHasBackdrop']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverBackdropClass']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['uniPopoverOrigin']
        }]
      });
    })();

    var UniPopoverModule = function UniPopoverModule() {
      _classCallCheck(this, UniPopoverModule);
    };

    UniPopoverModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniPopoverModule
    });
    UniPopoverModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniPopoverModule_Factory(t) {
        return new (t || UniPopoverModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniPopoverModule, {
        declarations: [UniPopoverComponent, UniPopoverDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [UniPopoverDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniPopoverComponent, UniPopoverDirective],
          entryComponents: [UniPopoverComponent],
          exports: [UniPopoverDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]
        }]
      }], null, null);
    })();

    var UNI_TOAST_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_TOAST_OPTIONS');
    var UNI_TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_TOAST_CONFIG');
    var UNI_TOAST_DEFAULT_CONFIG = {
      progressBar: true,
      tapToDismiss: true,
      margin: 10
    };

    var UniToastRef =
    /*#__PURE__*/
    function () {
      function UniToastRef(_overlayRef) {
        _classCallCheck(this, UniToastRef);

        this._overlayRef = _overlayRef;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(UniToastRef, [{
        key: "dismiss",
        value: function dismiss() {
          this._closed$.next();

          this._overlayRef.detach();
        }
      }, {
        key: "updatePosition",
        value: function updatePosition(strategy) {
          this._overlayRef.updatePositionStrategy(strategy);
        }
      }, {
        key: "closed$",
        get: function get() {
          return this._closed$.asObservable();
        }
      }, {
        key: "config",
        get: function get() {
          return this._overlayRef.getConfig();
        }
      }, {
        key: "position",
        get: function get() {
          return this._overlayRef.overlayElement.getBoundingClientRect();
        }
      }]);

      return UniToastRef;
    }();

    function UniToastComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r6.options.title, " ");
      }
    }

    function UniToastComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, ctx_r7.progress$), "%");
      }
    }

    var UniToastComponent =
    /*#__PURE__*/
    function () {
      function UniToastComponent(config, options, _toastRef) {
        _classCallCheck(this, UniToastComponent);

        this.config = config;
        this.options = options;
        this._toastRef = _toastRef;
        this.progress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._ticks = 25;
        this._total = 100;
      }

      _createClass(UniToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.options.duration) {
            this._timeout = setTimeout(function () {
              _this2._toastRef.dismiss();
            }, this.options.duration);

            if (this.config.progressBar) {
              this._interval = setInterval(function () {
                _this2.progress$.next(_this2.progress$.value + _this2._tick);
              }, this._ticks);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._timeout) {
            clearTimeout(this._timeout);

            if (this._interval) {
              clearInterval(this._interval);
            }
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.config.tapToDismiss) {
            this._toastRef.dismiss();
          }
        }
      }, {
        key: "_tick",
        get: function get() {
          return this._total / this.options.duration * this._ticks;
        }
      }]);

      return UniToastComponent;
    }();

    UniToastComponent.ɵfac = function UniToastComponent_Factory(t) {
      return new (t || UniToastComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_TOAST_OPTIONS), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniToastRef));
    };

    UniToastComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniToastComponent,
      selectors: [["uni-toast"]],
      hostAttrs: [1, "uni-toast"],
      hostVars: 10,
      hostBindings: function UniToastComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniToastComponent_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("info", ctx.options.type === "info")("success", ctx.options.type === "success")("warning", ctx.options.type === "warning")("danger", ctx.options.type === "danger")("dismissable", ctx.config.tapToDismiss);
        }
      },
      exportAs: ["uniToast"],
      decls: 5,
      vars: 3,
      consts: [[1, "uni-toast-content"], ["class", "uni-toast-title", 4, "ngIf"], [1, "uni-toast-message"], ["class", "uni-toast-progressbar", 3, "width", 4, "ngIf"], [1, "uni-toast-title"], [1, "uni-toast-progressbar"]],
      template: function UniToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniToastComponent_div_1_Template, 2, 1, "div", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, UniToastComponent_div_4_Template, 2, 4, "div", 3);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.options.title);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.options.message, " ");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.progressBar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
      styles: ["@-webkit-keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}@keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}[_nghost-%COMP%]{visibility:hidden;font-size:12pt;color:var(--white);border-radius:3px;min-width:200px;-webkit-animation:.5s both uniFadeIn;animation:.5s both uniFadeIn}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;padding:15px 20px}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]   .uni-toast-title[_ngcontent-%COMP%]{font-size:14pt;font-weight:550}[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{height:5px;border-bottom-left-radius:3px}.dismissable[_nghost-%COMP%]{cursor:pointer}.info[_nghost-%COMP%]{background-color:var(--primary)}.info[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--primary-l20)}.info[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--primary-l20)}.success[_nghost-%COMP%]{background-color:var(--success)}.success[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--success-l20)}.success[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--success-l20)}.warning[_nghost-%COMP%]{background-color:var(--warning)}.warning[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--warning-l20)}.warning[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--warning-l20)}.danger[_nghost-%COMP%]{background-color:var(--danger)}.danger[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--danger-l20)}.danger[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--danger-l20)}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-toast',
          exportAs: 'uniToast',
          templateUrl: './toast.component.html',
          styleUrls: ['./toast.component.scss'],
          host: {
            "class": 'uni-toast',
            '[class.info]': 'options.type === "info"',
            '[class.success]': 'options.type === "success"',
            '[class.warning]': 'options.type === "warning"',
            '[class.danger]': 'options.type === "danger"',
            '[class.dismissable]': 'config.tapToDismiss',
            '(click)': 'onClick()'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [UNI_TOAST_CONFIG]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [UNI_TOAST_OPTIONS]
          }]
        }, {
          type: UniToastRef
        }];
      }, null);
    })();

    var UniToastPosition;

    (function (UniToastPosition) {
      UniToastPosition["TopLeft"] = "top left";
      UniToastPosition["TopRight"] = "top right";
      UniToastPosition["BottomLeft"] = "bottom left";
      UniToastPosition["BottomRight"] = "bottom right";
    })(UniToastPosition || (UniToastPosition = {}));

    var UniToastService =
    /*#__PURE__*/
    function () {
      function UniToastService(_config, _overlay) {
        _classCallCheck(this, UniToastService);

        this._config = _config;
        this._overlay = _overlay;
        this._index = -1;
        this._toasts = [];
      }

      _createClass(UniToastService, [{
        key: "open",
        value: function open(options) {
          return this._create(UniToastComponent, options);
        }
      }, {
        key: "create",
        value: function create(component, options) {
          return this._create(component, options);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          for (var i = 0; i < this._toasts.length; i++) {
            if (this._toasts[i].id === id) {
              this._toasts.splice(i, 1);

              return i;
            }
          }

          return -1;
        }
      }, {
        key: "find",
        value: function find(id) {
          return this._toasts.find(function (t) {
            return t.id === id;
          });
        }
      }, {
        key: "_create",
        value: function _create(component, options) {
          var _this3 = this;

          var latest = this._getLatestByPosition(options.position);

          var position = latest ? latest.ref.position : undefined;

          var overlayRef = this._overlay.create({
            panelClass: options.panelClass,
            positionStrategy: this._getPositionStrategy(options.position, position)
          });

          var toastRef = new UniToastRef(overlayRef);
          var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](component, null, this._getInjector(toastRef, options));
          var instance = overlayRef.attach(portal).instance;
          var toast = {
            id: this._id,
            type: options.type,
            position: options.position,
            component: instance,
            ref: toastRef
          };
          toastRef.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            _this3.remove(toast.id);

            _this3._updatePositions(toast.position);
          });

          this._toasts.push(toast);

          return toast;
        }
      }, {
        key: "_getInjector",
        value: function _getInjector(ref, options) {
          var tokens = new WeakMap();
          tokens.set(UniToastRef, ref);
          tokens.set(UNI_TOAST_OPTIONS, options);
          tokens.set(UNI_TOAST_CONFIG, this._config);
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](null, tokens);
        }
      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy(position, latest) {
          var pb = this._overlay.position().global();

          if (position === UniToastPosition.TopLeft) {
            return pb.top(this._getLatestMargin(position, latest)).left("".concat(this._config.margin, "px"));
          } else if (position === UniToastPosition.TopRight) {
            return pb.top(this._getLatestMargin(position, latest)).right("".concat(this._config.margin, "px"));
          } else if (position === UniToastPosition.BottomLeft) {
            if (!latest) {
              return pb.bottom(this._getLatestMargin(position, latest)).left("".concat(this._config.margin, "px"));
            } else {
              return pb.top(this._getLatestMargin(position, latest)).left("".concat(this._config.margin, "px"));
            }
          }

          if (!latest) {
            return pb.bottom(this._getLatestMargin(position, latest)).right("".concat(this._config.margin, "px"));
          } else {
            return pb.top(this._getLatestMargin(position, latest)).right("".concat(this._config.margin, "px"));
          }
        }
      }, {
        key: "_getLatestMargin",
        value: function _getLatestMargin(position, latest) {
          var key = position === UniToastPosition.TopLeft || position === UniToastPosition.TopRight ? 'bottom' : 'top';

          if (key === 'bottom') {
            return latest ? "".concat(latest[key] + this._config.margin, "px") : "".concat(this._config.margin, "px");
          } else {
            return latest ? "".concat(latest[key] - latest.height - this._config.margin, "px") : "".concat(this._config.margin, "px");
          }
        }
      }, {
        key: "_getToastsByPosition",
        value: function _getToastsByPosition(position) {
          return this._toasts.filter(function (t) {
            return t.position === position;
          }).sort(function (a, b) {
            return a.id - b.id;
          });
        }
      }, {
        key: "_getLatestByPosition",
        value: function _getLatestByPosition(position) {
          var toasts = this._getToastsByPosition(position);

          return toasts[toasts.length - 1];
        }
      }, {
        key: "_updatePositions",
        value: function _updatePositions(position) {
          var toasts = this._getToastsByPosition(position);

          for (var i = 0; i < toasts.length; i++) {
            toasts[i].ref.updatePosition(this._getPositionStrategy(toasts[i].position, toasts[i - 1] ? toasts[i - 1].ref.position : undefined));
          }
        }
      }, {
        key: "_id",
        get: function get() {
          this._index++;
          return this._index;
        }
      }]);

      return UniToastService;
    }();

    UniToastService.ɵfac = function UniToastService_Factory(t) {
      return new (t || UniToastService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(UNI_TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]));
    };

    UniToastService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: UniToastService,
      factory: UniToastService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [UNI_TOAST_CONFIG]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }];
      }, null);
    })();

    var UniToastModule =
    /*#__PURE__*/
    function () {
      function UniToastModule() {
        _classCallCheck(this, UniToastModule);
      }

      _createClass(UniToastModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: UniToastModule,
            providers: [{
              provide: UNI_TOAST_CONFIG,
              useValue: config
            }]
          };
        }
      }]);

      return UniToastModule;
    }();

    UniToastModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniToastModule
    });
    UniToastModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniToastModule_Factory(t) {
        return new (t || UniToastModule)();
      },
      providers: [UniToastService, {
        provide: UNI_TOAST_CONFIG,
        useValue: UNI_TOAST_DEFAULT_CONFIG
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniToastModule, {
        declarations: [UniToastComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniToastComponent],
          entryComponents: [UniToastComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
          providers: [UniToastService, {
            provide: UNI_TOAST_CONFIG,
            useValue: UNI_TOAST_DEFAULT_CONFIG
          }]
        }]
      }], null, null);
    })();

    var UniToastType;

    (function (UniToastType) {
      UniToastType["Info"] = "info";
      UniToastType["Success"] = "success";
      UniToastType["Warning"] = "warning";
      UniToastType["Danger"] = "danger";
    })(UniToastType || (UniToastType = {}));

    var UNI_DIALOG_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_CONTENT');
    var _c0 = ["vc"];

    var UniDialogContainerComponent =
    /*#__PURE__*/
    function () {
      function UniDialogContainerComponent(_content, _resolver) {
        _classCallCheck(this, UniDialogContainerComponent);

        this._content = _content;
        this._resolver = _resolver;
      }

      _createClass(UniDialogContainerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var factory = this._resolver.resolveComponentFactory(this._content);

          this.vc.clear();
          var ref = this.vc.createComponent(factory);
          ref.changeDetectorRef.detectChanges();
        }
      }]);

      return UniDialogContainerComponent;
    }();

    UniDialogContainerComponent.ɵfac = function UniDialogContainerComponent_Factory(t) {
      return new (t || UniDialogContainerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_DIALOG_CONTENT), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    UniDialogContainerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniDialogContainerComponent,
      selectors: [["uni-dialog-container"]],
      viewQuery: function UniDialogContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.vc = _t.first);
        }
      },
      hostAttrs: [1, "uni-dialog-container"],
      exportAs: ["uniDialogContainer"],
      decls: 2,
      vars: 0,
      consts: [["vc", ""]],
      template: function UniDialogContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, null, 0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%;background-color:var(--white);border-radius:10px;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-dialog-container',
          exportAs: 'uniDialogContainer',
          templateUrl: './dialog-container.component.html',
          styleUrls: ['./dialog-container.component.scss'],
          host: {
            "class": 'uni-dialog-container'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [UNI_DIALOG_CONTENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        vc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['vc', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();

    var _c0$1 = ["*"];

    var UniDialogContentComponent = function UniDialogContentComponent() {
      _classCallCheck(this, UniDialogContentComponent);
    };

    UniDialogContentComponent.ɵfac = function UniDialogContentComponent_Factory(t) {
      return new (t || UniDialogContentComponent)();
    };

    UniDialogContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniDialogContentComponent,
      selectors: [["uni-dialog-content"]],
      hostAttrs: [1, "uni-dialog-content"],
      exportAs: ["uniDialogContent"],
      ngContentSelectors: _c0$1,
      decls: 1,
      vars: 0,
      template: function UniDialogContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;padding:20px}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-dialog-content',
          exportAs: 'uniDialogContent',
          templateUrl: './dialog-content.component.html',
          styleUrls: ['./dialog-content.component.scss'],
          host: {
            "class": 'uni-dialog-content'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var _c0$2 = ["*"];

    var UniDialogFooterComponent = function UniDialogFooterComponent() {
      _classCallCheck(this, UniDialogFooterComponent);
    };

    UniDialogFooterComponent.ɵfac = function UniDialogFooterComponent_Factory(t) {
      return new (t || UniDialogFooterComponent)();
    };

    UniDialogFooterComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniDialogFooterComponent,
      selectors: [["uni-dialog-footer"]],
      hostAttrs: [1, "uni-dialog-footer"],
      exportAs: ["uniDialogFooter"],
      ngContentSelectors: _c0$2,
      decls: 1,
      vars: 0,
      template: function UniDialogFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;text-align:right;padding-bottom:20px;padding-left:20px;padding-right:20px}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-dialog-footer',
          exportAs: 'uniDialogFooter',
          templateUrl: './dialog-footer.component.html',
          styleUrls: ['./dialog-footer.component.scss'],
          host: {
            "class": 'uni-dialog-footer'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var _c0$3 = [[["uni-dialog-title"]]];
    var _c1 = ["uni-dialog-title"];

    var UniDialogHeaderComponent = function UniDialogHeaderComponent() {
      _classCallCheck(this, UniDialogHeaderComponent);
    };

    UniDialogHeaderComponent.ɵfac = function UniDialogHeaderComponent_Factory(t) {
      return new (t || UniDialogHeaderComponent)();
    };

    UniDialogHeaderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniDialogHeaderComponent,
      selectors: [["uni-dialog-header"]],
      hostAttrs: [1, "uni-dialog-header"],
      exportAs: ["uniDialogHeader"],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function UniDialogHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;padding-top:20px;padding-left:20px;padding-right:20px}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-dialog-header',
          exportAs: 'uniDialogHeader',
          templateUrl: './dialog-header.component.html',
          styleUrls: ['./dialog-header.component.scss'],
          host: {
            "class": 'uni-dialog-header'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var _c0$4 = ["*"];

    var UniDialogTitleComponent = function UniDialogTitleComponent() {
      _classCallCheck(this, UniDialogTitleComponent);
    };

    UniDialogTitleComponent.ɵfac = function UniDialogTitleComponent_Factory(t) {
      return new (t || UniDialogTitleComponent)();
    };

    UniDialogTitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniDialogTitleComponent,
      selectors: [["uni-dialog-title"]],
      hostAttrs: [1, "uni-dialog-title"],
      exportAs: ["uniDialogTitle"],
      ngContentSelectors: _c0$4,
      decls: 1,
      vars: 0,
      template: function UniDialogTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: ["[_nghost-%COMP%]{font-size:20pt}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-dialog-title',
          exportAs: 'uniDialogTitle',
          templateUrl: './dialog-title.component.html',
          styleUrls: ['./dialog-title.component.scss'],
          host: {
            "class": 'uni-dialog-title'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();

    var UniDialogRef =
    /*#__PURE__*/
    function () {
      function UniDialogRef(_overlayRef, _disableClose) {
        var _this4 = this;

        _classCallCheck(this, UniDialogRef);

        this._overlayRef = _overlayRef;
        this._disableClose = _disableClose;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

        if (!this._disableClose) {
          this._overlayRef.backdropClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            return _this4.dismiss();
          });
        }
      }

      _createClass(UniDialogRef, [{
        key: "dismiss",
        value: function dismiss() {
          this._closed$.next();

          this._overlayRef.detach();
        }
      }, {
        key: "closed$",
        get: function get() {
          return this._closed$.asObservable();
        }
      }]);

      return UniDialogRef;
    }();

    var UniDialogCloseDirective =
    /*#__PURE__*/
    function () {
      function UniDialogCloseDirective(_dialogRef) {
        _classCallCheck(this, UniDialogCloseDirective);

        this._dialogRef = _dialogRef;
      }

      _createClass(UniDialogCloseDirective, [{
        key: "onClick",
        value: function onClick() {
          this._dialogRef.dismiss();
        }
      }]);

      return UniDialogCloseDirective;
    }();

    UniDialogCloseDirective.ɵfac = function UniDialogCloseDirective_Factory(t) {
      return new (t || UniDialogCloseDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniDialogRef));
    };

    UniDialogCloseDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniDialogCloseDirective,
      selectors: [["", "uniDialogClose", ""]],
      hostBindings: function UniDialogCloseDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniDialogCloseDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogCloseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[uniDialogClose]',
          host: {
            '(click)': 'onClick()'
          }
        }]
      }], function () {
        return [{
          type: UniDialogRef
        }];
      }, null);
    })();

    var UNI_DIALOG_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_OPTIONS');
    var UNI_DIALOG_DEFAULT_OPTIONS = {
      width: 'auto',
      height: 'auto',
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop'
    };
    var UNI_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_DATA');

    var UniDialogService =
    /*#__PURE__*/
    function () {
      function UniDialogService(_overlay, _resolver) {
        _classCallCheck(this, UniDialogService);

        this._overlay = _overlay;
        this._resolver = _resolver;
        this._index = -1;
        this._dialogs = [];
      }

      _createClass(UniDialogService, [{
        key: "find",
        value: function find(id) {
          return this._dialogs.find(function (t) {
            return t.id === id;
          });
        }
      }, {
        key: "remove",
        value: function remove(id) {
          for (var i = 0; i < this._dialogs.length; i++) {
            if (this._dialogs[i].id === id) {
              this._dialogs.splice(i, 1);

              return i;
            }
          }

          return -1;
        }
      }, {
        key: "open",
        value: function open(content, options) {
          var _this5 = this;

          var overlayRef = this._overlay.create(Object.assign(Object.assign(Object.assign({}, UNI_DIALOG_DEFAULT_OPTIONS), options), {
            positionStrategy: this._getPositionStrategy()
          }));

          var dialogRef = new UniDialogRef(overlayRef, options.disableClose);
          var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniDialogContainerComponent, undefined, this._getInjector(dialogRef, content, options));
          overlayRef.attach(portal);
          var dialog = {
            id: this._id,
            ref: dialogRef
          };
          dialogRef.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
            _this5.remove(dialog.id);
          });

          this._dialogs.push(dialog);

          return dialog;
        }
      }, {
        key: "_getInjector",
        value: function _getInjector(ref, content, options) {
          var tokens = new WeakMap();
          tokens.set(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], this._resolver);
          tokens.set(UniDialogRef, ref);
          tokens.set(UNI_DIALOG_OPTIONS, options);
          tokens.set(UNI_DIALOG_CONTENT, content);

          if (options.data) {
            tokens.set(UNI_DIALOG_DATA, options.data);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](null, tokens);
        }
      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy() {
          var pb = this._overlay.position().global();

          return pb.centerVertically().centerHorizontally();
        }
      }, {
        key: "_id",
        get: function get() {
          this._index++;
          return this._index;
        }
      }]);

      return UniDialogService;
    }();

    UniDialogService.ɵfac = function UniDialogService_Factory(t) {
      return new (t || UniDialogService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    UniDialogService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: UniDialogService,
      factory: UniDialogService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, null);
    })();

    var declarations = [UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogTitleComponent, UniDialogCloseDirective];

    var UniDialogModule = function UniDialogModule() {
      _classCallCheck(this, UniDialogModule);
    };

    UniDialogModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniDialogModule
    });
    UniDialogModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniDialogModule_Factory(t) {
        return new (t || UniDialogModule)();
      },
      providers: [UniDialogService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniDialogModule, {
        declarations: [UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogTitleComponent, UniDialogCloseDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogTitleComponent, UniDialogCloseDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations,
          exports: declarations,
          entryComponents: [UniDialogContainerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
          providers: [UniDialogService]
        }]
      }], null, null);
    })();

    var _c0$5 = ["*"];

    var UniLabelComponent =
    /*#__PURE__*/
    function () {
      function UniLabelComponent(_cdr) {
        _classCallCheck(this, UniLabelComponent);

        this._cdr = _cdr;
      }

      _createClass(UniLabelComponent, [{
        key: "for",
        get: function get() {
          return this._for;
        },
        set: function set(v) {
          if (v !== this._for) {
            this._for = v;

            this._cdr.markForCheck();
          }
        }
      }]);

      return UniLabelComponent;
    }();

    UniLabelComponent.ɵfac = function UniLabelComponent_Factory(t) {
      return new (t || UniLabelComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniLabelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniLabelComponent,
      selectors: [["uni-label"]],
      hostAttrs: [1, "uni-label"],
      exportAs: ["uniLabel"],
      ngContentSelectors: _c0$5,
      decls: 2,
      vars: 1,
      consts: [[3, "for"]],
      template: function UniLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx["for"]);
        }
      },
      styles: [".uni-label{position:absolute;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-label label{cursor:text}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-label',
          exportAs: 'uniLabel',
          templateUrl: './label.component.html',
          styleUrls: ['./label.component.scss'],
          host: {
            "class": 'uni-label'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();

    var _c0$6 = ["*"];

    var UniErrorComponent = function UniErrorComponent() {
      _classCallCheck(this, UniErrorComponent);
    };

    UniErrorComponent.ɵfac = function UniErrorComponent_Factory(t) {
      return new (t || UniErrorComponent)();
    };

    UniErrorComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniErrorComponent,
      selectors: [["uni-error"]],
      hostAttrs: [1, "uni-error"],
      exportAs: ["uniError"],
      ngContentSelectors: _c0$6,
      decls: 1,
      vars: 0,
      template: function UniErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-error{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--danger)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-error',
          exportAs: 'uniError',
          template: "<ng-content></ng-content>",
          styleUrls: ['./error.component.scss'],
          host: {
            "class": 'uni-error'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$7 = [[["uni-label"]], [["uni-select"]], [["", "uniInput", ""]], [["uni-hint"]], [["uni-error"]]];
    var _c1$1 = ["uni-label", "uni-select", "[uniInput]", "uni-hint", "uni-error"];

    var UniFormFieldComponent =
    /*#__PURE__*/
    function () {
      function UniFormFieldComponent(cdr) {
        _classCallCheck(this, UniFormFieldComponent);

        this.cdr = cdr;
        this.color = UniColor.Primary;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniFormFieldComponent, [{
        key: "label",
        get: function get() {
          return this._label;
        },
        set: function set(v) {
          if (v !== this._label) {
            this._label = v;

            if (this._label) {
              this._label["for"] = this._id;
            }
          }
        }
      }, {
        key: "error",
        get: function get() {
          return this._error;
        },
        set: function set(v) {
          if (v !== this._error) {
            this._error = v;
          }
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(v) {
          if (v !== this._id) {
            this._id = v;

            if (this._label) {
              this._label["for"] = this._id;
            }

            this.cdr.markForCheck();
          }
        }
      }, {
        key: "focused",
        get: function get() {
          return this._focused;
        },
        set: function set(v) {
          if (v !== this._focused) {
            this._focused = v;
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "hasValue",
        get: function get() {
          return this._hasValue;
        },
        set: function set(v) {
          if (v !== this._hasValue) {
            this._hasValue = v;
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(v) {
          if (v !== this._disabled) {
            this._disabled = v;
            this.cdr.markForCheck();
          }
        }
      }]);

      return UniFormFieldComponent;
    }();

    UniFormFieldComponent.ɵfac = function UniFormFieldComponent_Factory(t) {
      return new (t || UniFormFieldComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniFormFieldComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniFormFieldComponent,
      selectors: [["uni-form-field"]],
      contentQueries: function UniFormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniLabelComponent, true);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniErrorComponent, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.label = _t.first);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.error = _t.first);
        }
      },
      hostAttrs: [1, "uni-form-field"],
      hostVars: 18,
      hostBindings: function UniFormFieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniFormFieldComponent_click_HostBindingHandler($event) {
            return ctx.clicked.emit($event);
          });
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("focused", ctx.focused)("has-value", ctx.hasValue)("has-label", !!ctx.label)("has-error", !!ctx.error)("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["uniFormField"],
      ngContentSelectors: _c1$1,
      decls: 5,
      vars: 0,
      template: function UniFormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$7);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(3, 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4, 4);
        }
      },
      styles: [".uni-form-field{display:inline-block;position:relative;border-radius:5px;border:1px solid var(--white-a50);padding:15px 10px;margin-bottom:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.uni-form-field:hover{box-shadow:inset 0 0 0 1px var(--white)}.uni-form-field.disabled{border-style:dotted;opacity:.8}.uni-form-field.disabled:hover{box-shadow:none!important}.uni-form-field.has-value .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75)}.uni-form-field.has-label.focused .uni-input,.uni-form-field.has-label.focused .uni-select-placeholder,.uni-form-field.has-label.has-value .uni-input,.uni-form-field.has-label.has-value .uni-select-placeholder{opacity:1}.uni-form-field.has-label .uni-input,.uni-form-field.has-label .uni-select-placeholder{opacity:0}.uni-form-field.has-error{border-color:var(--danger)}.uni-form-field.has-error:hover{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.has-error .uni-input{caret-color:var(--danger)!important}.uni-form-field.has-error .uni-hint{display:none}.uni-form-field.has-error .uni-label label{color:var(--danger)}.uni-form-field.primary.focused{box-shadow:inset 0 0 0 1px var(--primary)}.uni-form-field.primary.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.primary.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--primary)}.uni-form-field.primary .uni-input{caret-color:var(--primary)}.uni-form-field.success.focused{box-shadow:inset 0 0 0 1px var(--success)}.uni-form-field.success.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.success.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--success)}.uni-form-field.success .uni-input{caret-color:var(--success)}.uni-form-field.warning.focused{box-shadow:inset 0 0 0 1px var(--warning)}.uni-form-field.warning.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.warning.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--warning)}.uni-form-field.warning .uni-input{caret-color:var(--warning)}.uni-form-field.danger.focused,.uni-form-field.danger.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.danger.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--danger)}.uni-form-field.danger .uni-input{caret-color:var(--danger)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniFormFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-form-field',
          exportAs: 'uniFormField',
          templateUrl: './form-field.component.html',
          styleUrls: ['./form-field.component.scss'],
          host: Object.assign(Object.assign({
            "class": 'uni-form-field',
            '[class.focused]': 'focused',
            '[class.has-value]': 'hasValue',
            '[class.has-label]': '!!label',
            '[class.has-error]': '!!error',
            '[class.disabled]': 'disabled'
          }, UNI_HOST_COLORS), {
            '(click)': 'clicked.emit($event)'
          }),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniLabelComponent]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniErrorComponent]
        }]
      });
    })();

    var _c0$8 = ["*"];

    var UniHintComponent = function UniHintComponent() {
      _classCallCheck(this, UniHintComponent);
    };

    UniHintComponent.ɵfac = function UniHintComponent_Factory(t) {
      return new (t || UniHintComponent)();
    };

    UniHintComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniHintComponent,
      selectors: [["uni-hint"]],
      hostAttrs: [1, "uni-hint"],
      exportAs: ["uniHint"],
      ngContentSelectors: _c0$8,
      decls: 1,
      vars: 0,
      template: function UniHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-hint{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--white-d20)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniHintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-hint',
          exportAs: 'uniHint',
          template: "<ng-content></ng-content>",
          styleUrls: ['./hint.component.scss'],
          host: {
            "class": 'uni-hint'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var declarations$1 = [UniFormFieldComponent, UniErrorComponent, UniHintComponent, UniLabelComponent];

    var UniFormFieldModule = function UniFormFieldModule() {
      _classCallCheck(this, UniFormFieldModule);
    };

    UniFormFieldModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniFormFieldModule
    });
    UniFormFieldModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniFormFieldModule_Factory(t) {
        return new (t || UniFormFieldModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniFormFieldModule, {
        declarations: [UniFormFieldComponent, UniErrorComponent, UniHintComponent, UniLabelComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniFormFieldComponent, UniErrorComponent, UniHintComponent, UniLabelComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$1,
          exports: declarations$1,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniSubscriptionHelper =
    /*#__PURE__*/
    function () {
      function UniSubscriptionHelper() {
        _classCallCheck(this, UniSubscriptionHelper);

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(UniSubscriptionHelper, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return UniSubscriptionHelper;
    }();

    UniSubscriptionHelper.ɵfac = function UniSubscriptionHelper_Factory(t) {
      return new (t || UniSubscriptionHelper)();
    };

    UniSubscriptionHelper.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniSubscriptionHelper
    });
    /**
     * This is being used to fix issue when running --aot, where
     * lifecycle hooks are only called if they are explicitly declared.
     */

    var UniInitHelper =
    /*#__PURE__*/
    function () {
      function UniInitHelper() {
        _classCallCheck(this, UniInitHelper);
      }

      _createClass(UniInitHelper, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return UniInitHelper;
    }();

    UniInitHelper.ɵfac = function UniInitHelper_Factory(t) {
      return new (t || UniInitHelper)();
    };

    UniInitHelper.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniInitHelper
    });
    var nextId = 0;

    var UniFormFieldControlBase =
    /*#__PURE__*/
    function (_UniSubscriptionHelpe) {
      _inherits(UniFormFieldControlBase, _UniSubscriptionHelpe);

      function UniFormFieldControlBase(el, cdr, uniFormField, ngForm, ngFormGroup) {
        var _this6;

        _classCallCheck(this, UniFormFieldControlBase);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(UniFormFieldControlBase).call(this));
        _this6.el = el;
        _this6.cdr = cdr;
        _this6.uniFormField = uniFormField;
        _this6.ngForm = ngForm;
        _this6.ngFormGroup = ngFormGroup;
        _this6._id = "uni-form-field--".concat(++nextId);
        _this6._tabIndex = 0;
        _this6._required = false;
        _this6._disabled = false;
        _this6._autofocus = false;
        _this6._autocomplete = false;

        _this6.onChange = function () {};

        _this6.onTouch = function () {};

        return _this6;
      }

      _createClass(UniFormFieldControlBase, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.uniFormField) {
            this.uniFormField.id = this._id;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(v) {
          if (v !== this.value) {
            this.value = v;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouch = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this.disabled = disabled;
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(v) {
          this._id = v;
          this.uniFormField.id = v;
        }
      }, {
        key: "tabIndex",
        get: function get() {
          return this._tabIndex;
        },
        set: function set(v) {
          this._tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
          this.el.nativeElement.tabIndex = this._tabIndex;
        }
      }, {
        key: "placeholder",
        get: function get() {
          return this._placeholder;
        },
        set: function set(v) {
          this._placeholder = v;
          this.cdr.markForCheck();
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        },
        set: function set(v) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
          this.cdr.markForCheck();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(v) {
          if (v !== this._disabled) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();

            if (this.uniFormField) {
              this.uniFormField.disabled = this._disabled;
            }
          }
        }
      }, {
        key: "autofocus",
        get: function get() {
          return this._autofocus;
        },
        set: function set(v) {
          this._autofocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
          this.cdr.markForCheck();
        }
      }, {
        key: "autocomplete",
        get: function get() {
          return this._autocomplete;
        },
        set: function set(v) {
          this._autocomplete = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
          this.cdr.markForCheck();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.cdr.markForCheck();

            if (this.uniFormField) {
              this.uniFormField.hasValue = !!v;
            }
          }
        }
      }]);

      return UniFormFieldControlBase;
    }(UniSubscriptionHelper);

    UniFormFieldControlBase.ɵfac = function UniFormFieldControlBase_Factory(t) {
      return new (t || UniFormFieldControlBase)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniFormFieldComponent, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], 8));
    };

    UniFormFieldControlBase.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniFormFieldControlBase,
      inputs: {
        id: "id",
        tabIndex: "tabIndex",
        placeholder: "placeholder",
        required: "required",
        disabled: "disabled",
        autofocus: "autofocus",
        autocomplete: "autocomplete"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    function uniFormFieldProvider(component) {
      return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return component;
        }),
        multi: true
      };
    }

    var _c0$9 = ["*"];

    var UniOptionComponent =
    /*#__PURE__*/
    function () {
      function UniOptionComponent(_el) {
        _classCallCheck(this, UniOptionComponent);

        this._el = _el;
        this.disabled = false;
        this.selected = false;
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniOptionComponent, [{
        key: "select",
        value: function select() {
          if (!this.disabled && !this.selected) {
            this.selected = true;

            this._emitChanged();
          }
        }
      }, {
        key: "deselect",
        value: function deselect() {
          if (!this.disabled && this.selected) {
            this.selected = false;

            this._emitChanged();
          }
        }
      }, {
        key: "_emitChanged",
        value: function _emitChanged() {
          this.selectionChanged.emit({
            source: this
          });
        }
      }, {
        key: "content",
        get: function get() {
          return this._el.nativeElement.textContent.trim();
        }
      }]);

      return UniOptionComponent;
    }();

    UniOptionComponent.ɵfac = function UniOptionComponent_Factory(t) {
      return new (t || UniOptionComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniOptionComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniOptionComponent,
      selectors: [["uni-option"]],
      hostAttrs: [1, "uni-option"],
      hostVars: 12,
      hostBindings: function UniOptionComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniOptionComponent_click_HostBindingHandler($event) {
            return ctx.select();
          });
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("disabled", ctx.disabled)("selected", ctx.selected);
        }
      },
      inputs: {
        value: "value",
        color: "color",
        disabled: "disabled",
        selected: "selected"
      },
      outputs: {
        selectionChanged: "selectionChanged"
      },
      exportAs: ["uniOption"],
      ngContentSelectors: _c0$9,
      decls: 1,
      vars: 0,
      template: function UniOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-option{display:block;padding:10px;cursor:pointer}.uni-option.selected.primary{color:var(--white);background-color:var(--primary)}.uni-option.selected.success{color:var(--white);background-color:var(--success)}.uni-option.selected.warning{color:var(--black);background-color:var(--warning)}.uni-option.selected.danger{color:var(--white);background-color:var(--danger)}.uni-option.disabled{cursor:default;opacity:.4}.uni-option.disabled:hover{background-color:transparent}.uni-option:hover{background-color:var(--black-a15)}.uni-option:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.uni-option:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-option',
          exportAs: 'uniOption',
          template: "<ng-content></ng-content>",
          styleUrls: ['./option.component.scss'],
          host: Object.assign(Object.assign({
            "class": 'uni-option'
          }, UNI_HOST_COLORS), {
            '[class.disabled]': 'disabled',
            '[class.selected]': 'selected',
            '(click)': 'select()'
          }),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    var _c0$a = ["*"];

    var UniSelectPanelComponent = function UniSelectPanelComponent() {
      _classCallCheck(this, UniSelectPanelComponent);
    };

    UniSelectPanelComponent.ɵfac = function UniSelectPanelComponent_Factory(t) {
      return new (t || UniSelectPanelComponent)();
    };

    UniSelectPanelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSelectPanelComponent,
      selectors: [["uni-select-panel"]],
      hostAttrs: [1, "uni-select-panel"],
      exportAs: ["uniSelectPanel"],
      ngContentSelectors: _c0$a,
      decls: 1,
      vars: 0,
      template: function UniSelectPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-select-panel{display:block;border-radius:3px;width:100%;background-color:var(--dark);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-select-panel',
          exportAs: 'uniSelectPanel',
          template: "<ng-content></ng-content>",
          styleUrls: ['./select-panel.component.scss'],
          host: {
            "class": 'uni-select-panel'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$b = ["trigger"];

    function UniSelectComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r11.placeholder);
      }
    }

    function UniSelectComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r12.selected);
      }
    }

    function UniSelectComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "uni-select-panel", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", ctx_r13.panelClass);
      }
    }

    var _c1$2 = [[["uni-option"]]];
    var _c2 = ["uni-option"];

    var UniSelectComponent =
    /*#__PURE__*/
    function (_UniFormFieldControlB) {
      _inherits(UniSelectComponent, _UniFormFieldControlB);

      function UniSelectComponent() {
        var _this7;

        _classCallCheck(this, UniSelectComponent);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(UniSelectComponent).apply(this, arguments));
        _this7.panelClass = 'uni-select-panel';
        _this7.opened$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        _this7.positions = [{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }];
        return _this7;
      }

      _createClass(UniSelectComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this8 = this;

          this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](false);
          this.opened$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (open) {
            _this8.uniFormField.focused = open;
          });
          this.uniFormField.clicked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (!_this8.opened$.value && !_this8.disabled) {
              _this8.toggle();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== this.value) {
            this.value = value;

            if (this.options) {
              this.initOptions();
            }
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.opened$.next(!this.opened$.value);
        }
      }, {
        key: "close",
        value: function close() {
          this.opened$.next(false);
        }
      }, {
        key: "select",
        value: function select(v) {
          var options = this.options.toArray();
          this.selectionModel.select(v);
          this.value = this.optionValue(v);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var option = _step.value;

              if (option !== v) {
                option.deselect();
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "initOptions",
        value: function initOptions() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.options.toArray()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var option = _step2.value;
              var value = this.optionValue(option);

              if (!option.color) {
                option.color = this.uniFormField.color;
              }

              if (value === this.value) {
                option.select();
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "optionValue",
        value: function optionValue(v) {
          return v.value || v.content;
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(v) {
          var _this9 = this;

          this._options = v;
          this.optionSelectionChanged = this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this9.options.map(function (o) {
              return o.selectionChanged;
            })));
          }));
          this.optionSelectionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (e) {
            if (e.source.selected) {
              _this9.select(e.source);
            }

            if (_this9.opened$.value) {
              _this9.close();
            }
          });
          this.initOptions();
        }
      }, {
        key: "selected",
        get: function get() {
          return this.selectionModel.selected.map(function (v) {
            return v.content;
          }).join(', ');
        }
      }, {
        key: "minWidth",
        get: function get() {
          return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
        }
      }]);

      return UniSelectComponent;
    }(UniFormFieldControlBase);

    UniSelectComponent.ɵfac = function UniSelectComponent_Factory(t) {
      return ɵUniSelectComponent_BaseFactory(t || UniSelectComponent);
    };

    UniSelectComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSelectComponent,
      selectors: [["uni-select"]],
      contentQueries: function UniSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniOptionComponent, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.options = _t);
        }
      },
      viewQuery: function UniSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$b, true);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(UniSelectPanelComponent, true);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.trigger = _t.first);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.panel = _t.first);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.overlay = _t.first);
        }
      },
      hostAttrs: [1, "uni-select"],
      hostVars: 2,
      hostBindings: function UniSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled);
        }
      },
      inputs: {
        panelClass: "panelClass"
      },
      exportAs: ["uniSelect"],
      features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniSelectComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c2,
      decls: 10,
      vars: 12,
      consts: [["cdk-overlay-origin", "", 1, "uni-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "uni-select-text"], ["class", "uni-select-placeholder", 4, "ngIf"], ["class", "uni-select-value", 4, "ngIf"], [1, "uni-select-icon"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick", "detach"], [1, "uni-select-placeholder"], [1, "uni-select-value"], [3, "ngClass"]],
      template: function UniSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c1$2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0, 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniSelectComponent_Template_div_click_0_listener($event) {
            return ctx.toggle();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, UniSelectComponent_div_4_Template, 2, 1, "div", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, UniSelectComponent_div_5_Template, 2, 1, "div", 4);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 5);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(7, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, UniSelectComponent_ng_template_8_Template, 2, 1, "ng-template", 6);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(9, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("backdropClick", function UniSelectComponent_Template_ng_template_backdropClick_8_listener($event) {
            return ctx.close();
          })("detach", function UniSelectComponent_Template_ng_template_detach_8_listener($event) {
            return ctx.close();
          });
        }

        if (rf & 2) {
          var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1);

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.selected);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.selected);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("bottom", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(7, 8, ctx.opened$));
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("cdkConnectedOverlayOrigin", _r9)("cdkConnectedOverlayOpen", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(9, 10, ctx.opened$))("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.minWidth);
        }
      },
      directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], UniSelectPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
      styles: [".uni-select{display:block;outline:0;border-radius:3px;font:inherit}.uni-select.disabled .uni-select-trigger{pointer-events:none}.uni-select .uni-select-trigger{display:-webkit-box;display:flex;cursor:pointer;border-radius:3px}.uni-select .uni-select-trigger .uni-select-text{-webkit-box-flex:1;flex:1 1 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-placeholder{color:var(--white-a20)}.uni-select .uni-select-trigger .uni-select-icon{font-size:12px;margin:auto 10px;color:var(--grey);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-icon:before{border-style:solid;border-width:.25em .25em 0 0;content:\"\";display:inline-block;height:.45em;left:0;position:relative;top:.15em;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:top;width:.45em;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-select .uni-select-trigger .uni-select-icon.bottom:before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    var ɵUniSelectComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniSelectComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-select',
          exportAs: 'uniSelect',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss'],
          host: {
            "class": 'uni-select',
            '[class.disabled]': 'disabled'
          },
          providers: [uniFormFieldProvider(UniSelectComponent)],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [UniSelectPanelComponent]
        }],
        overlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [UniOptionComponent, {
            descendants: true
          }]
        }]
      });
    })();

    var declarations$2 = [UniSelectComponent, UniOptionComponent, UniSelectPanelComponent];

    var UniSelectModule = function UniSelectModule() {
      _classCallCheck(this, UniSelectModule);
    };

    UniSelectModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniSelectModule
    });
    UniSelectModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniSelectModule_Factory(t) {
        return new (t || UniSelectModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSelectModule, {
        declarations: [UniSelectComponent, UniOptionComponent, UniSelectPanelComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [UniSelectComponent, UniOptionComponent, UniSelectPanelComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$2,
          exports: declarations$2,
          entryComponents: [UniSelectPanelComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]
        }]
      }], null, null);
    })();

    var _c0$c = ["uniInput", ""];

    var UniInputComponent =
    /*#__PURE__*/
    function (_UniFormFieldControlB2) {
      _inherits(UniInputComponent, _UniFormFieldControlB2);

      function UniInputComponent() {
        _classCallCheck(this, UniInputComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(UniInputComponent).apply(this, arguments));
      }

      _createClass(UniInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          _get(_getPrototypeOf(UniInputComponent.prototype), "ngOnInit", this).call(this);

          this.uniFormField.clicked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            _this10._element.focus();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this11 = this;

          setTimeout(function () {
            return _this11.onInput();
          });
        }
      }, {
        key: "onFocus",
        value: function onFocus(e) {
          this.uniFormField.focused = e;
        }
      }, {
        key: "onInput",
        value: function onInput() {
          this.uniFormField.hasValue = !!this._element.value;
          this._element.style.height = 'auto';

          if (this._element.clientHeight < this._element.scrollHeight) {
            this._element.style.height = this._height;
          }
        }
      }, {
        key: "autoResize",
        get: function get() {
          return this._autoResize;
        },
        set: function set(v) {
          if (v !== this._autoResize) {
            this._autoResize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "_height",
        get: function get() {
          return this._isTextArea && this._autoResize ? "".concat(this._element.scrollHeight, "px") : 'auto';
        }
      }, {
        key: "_element",
        get: function get() {
          return this.el.nativeElement;
        }
      }, {
        key: "_isTextArea",
        get: function get() {
          return this.el.nativeElement instanceof HTMLTextAreaElement;
        }
      }]);

      return UniInputComponent;
    }(UniFormFieldControlBase);

    UniInputComponent.ɵfac = function UniInputComponent_Factory(t) {
      return ɵUniInputComponent_BaseFactory(t || UniInputComponent);
    };

    UniInputComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniInputComponent,
      selectors: [["input", "uniInput", ""], ["textarea", "uniInput", ""]],
      hostAttrs: [1, "uni-input"],
      hostVars: 5,
      hostBindings: function UniInputComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("focus", function UniInputComponent_focus_HostBindingHandler($event) {
            return ctx.onFocus(true);
          })("focusout", function UniInputComponent_focusout_HostBindingHandler($event) {
            return ctx.onFocus(false);
          })("input", function UniInputComponent_input_HostBindingHandler($event) {
            return ctx.onInput();
          });
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"])("id", ctx.id)("tabIndex", ctx.tabIndex)("required", ctx.required)("autofocus", ctx.autofocus)("autocomplete", ctx.autocomplete);
        }
      },
      inputs: {
        autoResize: "autoResize"
      },
      exportAs: ["uniInput"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0$c,
      decls: 0,
      vars: 0,
      template: function UniInputComponent_Template(rf, ctx) {},
      styles: [".uni-input{width:100%;outline:0;border:0;border-radius:3px;background-color:transparent;font:inherit;color:var(--white);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}"],
      encapsulation: 2,
      changeDetection: 0
    });
    var ɵUniInputComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniInputComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'input[uniInput], textarea[uniInput]',
          exportAs: 'uniInput',
          template: "",
          styleUrls: ['./input.component.scss'],
          host: {
            "class": 'uni-input',
            '[id]': 'id',
            '[tabIndex]': 'tabIndex',
            '[required]': 'required',
            '[autofocus]': 'autofocus',
            '[autocomplete]': 'autocomplete',
            '(focus)': 'onFocus(true)',
            '(focusout)': 'onFocus(false)',
            '(input)': 'onInput()'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        autoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniInputModule = function UniInputModule() {
      _classCallCheck(this, UniInputModule);
    };

    UniInputModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniInputModule
    });
    UniInputModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniInputModule_Factory(t) {
        return new (t || UniInputModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniInputModule, {
        declarations: [UniInputComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniInputComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniInputComponent],
          exports: [UniInputComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$d = ["*"];

    var UniCheckboxComponent =
    /*#__PURE__*/
    function (_UniFormFieldControlB3) {
      _inherits(UniCheckboxComponent, _UniFormFieldControlB3);

      function UniCheckboxComponent() {
        var _this12;

        _classCallCheck(this, UniCheckboxComponent);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(UniCheckboxComponent).apply(this, arguments));
        _this12.diameter = '18px';
        _this12.color = UniColor.Primary;
        return _this12;
      }

      return UniCheckboxComponent;
    }(UniFormFieldControlBase);

    UniCheckboxComponent.ɵfac = function UniCheckboxComponent_Factory(t) {
      return ɵUniCheckboxComponent_BaseFactory(t || UniCheckboxComponent);
    };

    UniCheckboxComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCheckboxComponent,
      selectors: [["uni-checkbox"]],
      hostAttrs: [1, "uni-checkbox"],
      hostVars: 10,
      hostBindings: function UniCheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        }
      },
      inputs: {
        diameter: "diameter",
        color: "color"
      },
      exportAs: ["uniCheckbox"],
      features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniCheckboxComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0$d,
      decls: 5,
      vars: 14,
      consts: [[1, "uni-checkbox--label", 3, "for"], ["type", "checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-checkbox--box"], [1, "uni-checkbox--content"]],
      template: function UniCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function UniCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.value = $event;
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "div", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.diameter)("height", ctx.diameter)("min-width", ctx.diameter)("min-height", ctx.diameter);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("checked", ctx.value);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".uni-checkbox{display:-webkit-inline-box;display:inline-flex}.uni-checkbox.primary .uni-checkbox--box.checked{background-color:var(--primary);border-color:var(--primary)}.uni-checkbox.success .uni-checkbox--box.checked{background-color:var(--success);border-color:var(--success)}.uni-checkbox.danger .uni-checkbox--box.checked{background-color:var(--danger);border-color:var(--danger)}.uni-checkbox.warning .uni-checkbox--box.checked{background-color:var(--warning);border-color:var(--warning)}.uni-checkbox.disabled{opacity:.7;cursor:not-allowed}.uni-checkbox.disabled *{cursor:not-allowed!important}.uni-checkbox .uni-checkbox--label{display:-webkit-box;display:flex;cursor:pointer;margin-bottom:0}.uni-checkbox .uni-checkbox--label input{display:none}.uni-checkbox .uni-checkbox--label .uni-checkbox--box{border-radius:5px;background-color:transparent;border:2px solid var(--hairline-strong);-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto 10px auto 0}.uni-checkbox .uni-checkbox--label .uni-checkbox--box:after{position:absolute;top:calc(50% - 8px);left:calc(50% - 3px);width:6px;height:12px;content:\"\";border:solid var(--white);border-width:0 2px 2px 0;-webkit-transform:rotate(0) scale(0);transform:rotate(0) scale(0);-webkit-transition:.3s ease-out;transition:.3s ease-out}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked{border-radius:5px;opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked:after{-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--content{margin:auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"],
      encapsulation: 2,
      changeDetection: 0
    });
    var ɵUniCheckboxComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniCheckboxComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          exportAs: 'uniCheckbox',
          selector: 'uni-checkbox',
          templateUrl: './checkbox.component.html',
          styleUrls: ['./checkbox.component.scss'],
          host: Object.assign({
            "class": 'uni-checkbox',
            '[class.disabled]': 'disabled'
          }, UNI_HOST_COLORS),
          providers: [uniFormFieldProvider(UniCheckboxComponent)],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniCheckboxModule = function UniCheckboxModule() {
      _classCallCheck(this, UniCheckboxModule);
    };

    UniCheckboxModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniCheckboxModule
    });
    UniCheckboxModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniCheckboxModule_Factory(t) {
        return new (t || UniCheckboxModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCheckboxModule, {
        declarations: [UniCheckboxComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
        exports: [UniCheckboxComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniCheckboxComponent],
          exports: [UniCheckboxComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        }]
      }], null, null);
    })();

    var _c0$e = ["*"];

    var UniSlideToggleComponent =
    /*#__PURE__*/
    function (_UniFormFieldControlB4) {
      _inherits(UniSlideToggleComponent, _UniFormFieldControlB4);

      function UniSlideToggleComponent() {
        var _this13;

        _classCallCheck(this, UniSlideToggleComponent);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(UniSlideToggleComponent).apply(this, arguments));
        _this13.color = UniColor.Primary;
        return _this13;
      }

      return UniSlideToggleComponent;
    }(UniFormFieldControlBase);

    UniSlideToggleComponent.ɵfac = function UniSlideToggleComponent_Factory(t) {
      return ɵUniSlideToggleComponent_BaseFactory(t || UniSlideToggleComponent);
    };

    UniSlideToggleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSlideToggleComponent,
      selectors: [["uni-slide-toggle"]],
      hostAttrs: [1, "uni-slide-toggle"],
      hostVars: 10,
      hostBindings: function UniSlideToggleComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["uniSlideToggle"],
      features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniSlideToggleComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0$e,
      decls: 5,
      vars: 5,
      consts: [[1, "uni-slide-toggle--switch", 3, "for"], ["type", "checkbox", 1, "uni-slide-toggle--checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-slide-toggle--slider"], [1, "uni-slide-toggle--label", 3, "for"]],
      template: function UniSlideToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function UniSlideToggleComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.value = $event;
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "span", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "label", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".uni-slide-toggle{display:-webkit-inline-box;display:inline-flex}.uni-slide-toggle.disabled{opacity:.7;cursor:not-allowed}.uni-slide-toggle.disabled *{cursor:not-allowed!important}.uni-slide-toggle .uni-slide-toggle--label{margin:auto 0 auto 5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-slide-toggle .uni-slide-toggle--switch{position:relative;width:50px;height:30px;margin:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox{opacity:0;width:0;height:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider{background-color:var(--primary)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider:before{-webkit-transform:translateX(21px);transform:translateX(21px)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey);-webkit-transition:.4s;transition:.4s;border-radius:34px}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider:before{position:absolute;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);content:\"\";height:22px;width:22px;left:4px;bottom:4px;background-color:var(--white);-webkit-transition:.4s;transition:.4s;border-radius:50%}"],
      encapsulation: 2,
      changeDetection: 0
    });
    var ɵUniSlideToggleComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniSlideToggleComponent);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSlideToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          exportAs: 'uniSlideToggle',
          selector: 'uni-slide-toggle',
          templateUrl: './slide-toggle.component.html',
          styleUrls: ['./slide-toggle.component.scss'],
          host: Object.assign({
            "class": 'uni-slide-toggle',
            '[class.disabled]': 'disabled'
          }, UNI_HOST_COLORS),
          providers: [uniFormFieldProvider(UniSlideToggleComponent)],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniSlideToggleModule = function UniSlideToggleModule() {
      _classCallCheck(this, UniSlideToggleModule);
    };

    UniSlideToggleModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniSlideToggleModule
    });
    UniSlideToggleModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniSlideToggleModule_Factory(t) {
        return new (t || UniSlideToggleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSlideToggleModule, {
        declarations: [UniSlideToggleComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
        exports: [UniSlideToggleComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniSlideToggleComponent],
          exports: [UniSlideToggleComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        }]
      }], null, null);
    })();

    var _c0$f = [[["uni-card-header"]], [["uni-card-content"]], [["uni-card-footer"]]];
    var _c1$3 = ["uni-card-header", "uni-card-content", "uni-card-footer"];

    var UniCardComponent = function UniCardComponent() {
      _classCallCheck(this, UniCardComponent);
    };

    UniCardComponent.ɵfac = function UniCardComponent_Factory(t) {
      return new (t || UniCardComponent)();
    };

    UniCardComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardComponent,
      selectors: [["uni-card"]],
      hostAttrs: [1, "uni-card"],
      exportAs: ["uniCard"],
      ngContentSelectors: _c1$3,
      decls: 3,
      vars: 0,
      template: function UniCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$f);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
        }
      },
      styles: [".uni-card{display:block;padding-bottom:15px;padding-top:15px;background-color:var(--dark);border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card',
          exportAs: 'uniCard',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss'],
          host: {
            "class": 'uni-card'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$g = ["*"];

    var UniCardFooterComponent = function UniCardFooterComponent() {
      _classCallCheck(this, UniCardFooterComponent);
    };

    UniCardFooterComponent.ɵfac = function UniCardFooterComponent_Factory(t) {
      return new (t || UniCardFooterComponent)();
    };

    UniCardFooterComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardFooterComponent,
      selectors: [["uni-card-footer"]],
      hostAttrs: [1, "uni-card-footer"],
      exportAs: ["uniCardFooter"],
      ngContentSelectors: _c0$g,
      decls: 1,
      vars: 0,
      template: function UniCardFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-card-footer{display:block;padding:15px 15px 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card-footer',
          exportAs: 'uniCardFooter',
          templateUrl: './card-footer.component.html',
          styleUrls: ['./card-footer.component.scss'],
          host: {
            "class": 'uni-card-footer'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$h = [[["uni-card-title"]], [["uni-card-subtitle"]]];
    var _c1$4 = ["uni-card-title", "uni-card-subtitle"];

    var UniCardHeaderComponent = function UniCardHeaderComponent() {
      _classCallCheck(this, UniCardHeaderComponent);
    };

    UniCardHeaderComponent.ɵfac = function UniCardHeaderComponent_Factory(t) {
      return new (t || UniCardHeaderComponent)();
    };

    UniCardHeaderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardHeaderComponent,
      selectors: [["uni-card-header"]],
      hostAttrs: [1, "uni-card-header"],
      exportAs: ["uniCardHeader"],
      ngContentSelectors: _c1$4,
      decls: 2,
      vars: 0,
      template: function UniCardHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$h);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
        }
      },
      styles: [".uni-card-header{display:block;padding-left:15px;padding-right:15px;margin-bottom:15px}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card-header',
          exportAs: 'uniCardHeader',
          templateUrl: './card-header.component.html',
          styleUrls: ['./card-header.component.scss'],
          host: {
            "class": 'uni-card-header'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$i = ["*"];

    var UniCardSubtitleComponent = function UniCardSubtitleComponent() {
      _classCallCheck(this, UniCardSubtitleComponent);
    };

    UniCardSubtitleComponent.ɵfac = function UniCardSubtitleComponent_Factory(t) {
      return new (t || UniCardSubtitleComponent)();
    };

    UniCardSubtitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardSubtitleComponent,
      selectors: [["uni-card-subtitle"]],
      hostAttrs: [1, "uni-card-subtitle"],
      exportAs: ["uniCardSubtitle"],
      ngContentSelectors: _c0$i,
      decls: 1,
      vars: 0,
      template: function UniCardSubtitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-card-subtitle{display:block;color:rgba(0,0,0,.6)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardSubtitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card-subtitle',
          exportAs: 'uniCardSubtitle',
          templateUrl: './card-subtitle.component.html',
          styleUrls: ['./card-subtitle.component.scss'],
          host: {
            "class": 'uni-card-subtitle'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$j = ["*"];

    var UniCardTitleComponent = function UniCardTitleComponent() {
      _classCallCheck(this, UniCardTitleComponent);
    };

    UniCardTitleComponent.ɵfac = function UniCardTitleComponent_Factory(t) {
      return new (t || UniCardTitleComponent)();
    };

    UniCardTitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardTitleComponent,
      selectors: [["uni-card-title"]],
      hostAttrs: [1, "uni-card-title"],
      exportAs: ["uniCardTitle"],
      ngContentSelectors: _c0$j,
      decls: 1,
      vars: 0,
      template: function UniCardTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-card-title{display:block;font-size:20px;font-weight:500;line-height:1.6}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card-title',
          exportAs: 'uniCardTitle',
          templateUrl: './card-title.component.html',
          styleUrls: ['./card-title.component.scss'],
          host: {
            "class": 'uni-card-title'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var _c0$k = ["*"];

    var UniCardContentComponent = function UniCardContentComponent() {
      _classCallCheck(this, UniCardContentComponent);
    };

    UniCardContentComponent.ɵfac = function UniCardContentComponent_Factory(t) {
      return new (t || UniCardContentComponent)();
    };

    UniCardContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCardContentComponent,
      selectors: [["uni-card-content"]],
      hostAttrs: [1, "uni-card-content"],
      exportAs: ["uniCardContent"],
      ngContentSelectors: _c0$k,
      decls: 1,
      vars: 0,
      template: function UniCardContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-card-content{display:block;padding-left:15px;padding-right:15px}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-card-content',
          exportAs: 'uniCardContent',
          templateUrl: './card-content.component.html',
          styleUrls: ['./card-content.component.scss'],
          host: {
            "class": 'uni-card-content'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();

    var UniCardAvatarDirective = function UniCardAvatarDirective() {
      _classCallCheck(this, UniCardAvatarDirective);
    };

    UniCardAvatarDirective.ɵfac = function UniCardAvatarDirective_Factory(t) {
      return new (t || UniCardAvatarDirective)();
    };

    UniCardAvatarDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniCardAvatarDirective,
      selectors: [["", "uniCardAvatar", ""]],
      hostAttrs: [1, "uni-card-avatar"],
      exportAs: ["uniCardAvatar"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardAvatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          exportAs: 'uniCardAvatar',
          selector: '[uniCardAvatar]',
          host: {
            "class": 'uni-card-avatar'
          }
        }]
      }], null, null);
    })();

    var declarations$3 = [UniCardComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardSubtitleComponent, UniCardTitleComponent, UniCardContentComponent, UniCardAvatarDirective];

    var UniCardModule = function UniCardModule() {
      _classCallCheck(this, UniCardModule);
    };

    UniCardModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniCardModule
    });
    UniCardModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniCardModule_Factory(t) {
        return new (t || UniCardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCardModule, {
        declarations: [UniCardComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardSubtitleComponent, UniCardTitleComponent, UniCardContentComponent, UniCardAvatarDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniCardComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardSubtitleComponent, UniCardTitleComponent, UniCardContentComponent, UniCardAvatarDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$3,
          exports: declarations$3,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$l = ["*"];

    var UniTabLabelComponent =
    /*#__PURE__*/
    function () {
      function UniTabLabelComponent(_cdr, _el) {
        _classCallCheck(this, UniTabLabelComponent);

        this._cdr = _cdr;
        this._el = _el;
        this._active = false;
        this._disabled = false;
      }

      _createClass(UniTabLabelComponent, [{
        key: "active",
        get: function get() {
          return this._active;
        },
        set: function set(v) {
          this._active = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(v) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "width",
        get: function get() {
          return this._el.nativeElement.clientWidth;
        }
      }]);

      return UniTabLabelComponent;
    }();

    UniTabLabelComponent.ɵfac = function UniTabLabelComponent_Factory(t) {
      return new (t || UniTabLabelComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniTabLabelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniTabLabelComponent,
      selectors: [["uni-tab-label"]],
      hostAttrs: [1, "uni-tab-label"],
      hostVars: 4,
      hostBindings: function UniTabLabelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", ctx.active)("disabled", ctx.disabled);
        }
      },
      inputs: {
        active: "active",
        disabled: "disabled"
      },
      exportAs: ["uniTabLabel"],
      ngContentSelectors: _c0$l,
      decls: 1,
      vars: 0,
      template: function UniTabLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-tab-label{padding:.8em;color:var(--white-d20);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-tab-label.active{color:var(--white)}.uni-tab-label.disabled{cursor:not-allowed}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-tab-label',
          exportAs: 'uniTabLabel',
          templateUrl: './tab-label.component.html',
          styleUrls: ['./tab-label.component.scss'],
          host: {
            "class": 'uni-tab-label',
            '[class.active]': 'active',
            '[class.disabled]': 'disabled'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniTabBodyDirective = function UniTabBodyDirective(template) {
      _classCallCheck(this, UniTabBodyDirective);

      this.template = template;
    };

    UniTabBodyDirective.ɵfac = function UniTabBodyDirective_Factory(t) {
      return new (t || UniTabBodyDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    UniTabBodyDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniTabBodyDirective,
      selectors: [["ng-template", "uniTabBody", ""]],
      exportAs: ["uniTabBody"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabBodyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          exportAs: 'uniTabBody',
          selector: 'ng-template[uniTabBody]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    function UniTabComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
      }
    }

    var UniTabComponent =
    /*#__PURE__*/
    function () {
      function UniTabComponent(_cdr) {
        _classCallCheck(this, UniTabComponent);

        this._cdr = _cdr;
        this._disabled = false;
        this._active = false;
      }

      _createClass(UniTabComponent, [{
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(v) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "active",
        get: function get() {
          return this._active;
        },
        set: function set(v) {
          if (v !== this._active) {
            this._active = v;

            this._cdr.markForCheck();
          }
        }
      }]);

      return UniTabComponent;
    }();

    UniTabComponent.ɵfac = function UniTabComponent_Factory(t) {
      return new (t || UniTabComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniTabComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniTabComponent,
      selectors: [["uni-tab"]],
      contentQueries: function UniTabComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"])(dirIndex, UniTabLabelComponent, true);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniTabBodyDirective, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.uniLabel = _t.first);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.uniBody = _t.first);
        }
      },
      hostAttrs: [1, "uni-tab"],
      hostVars: 2,
      hostBindings: function UniTabComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", ctx.active);
        }
      },
      inputs: {
        label: "label",
        disabled: "disabled"
      },
      exportAs: ["uniTab"],
      decls: 1,
      vars: 1,
      consts: [[4, "ngTemplateOutlet"]],
      template: function UniTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniTabComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.active ? ctx.uniBody.template : null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      styles: [".uni-tab{display:block;background-color:var(--darker)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-tab',
          exportAs: 'uniTab',
          templateUrl: './tab.component.html',
          styleUrls: ['./tab.component.scss'],
          host: {
            "class": 'uni-tab',
            '[class.active]': 'active'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        uniLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniTabLabelComponent, {
            "static": true
          }]
        }],
        uniBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniTabBodyDirective, {
            "static": false
          }]
        }]
      });
    })();

    function UniTabGroupComponent_uni_tab_label_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "uni-tab-label", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniTabGroupComponent_uni_tab_label_1_Template_uni_tab_label_click_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r20);
          var i_r18 = ctx.index;
          var ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r19.select(i_r18);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var tab_r17 = ctx.$implicit;
        var i_r18 = ctx.index;
        var ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("active", ctx_r15.active === i_r18)("disabled", tab_r17.disabled);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", tab_r17.label, " ");
      }
    }

    function UniTabGroupComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 5);
      }

      if (rf & 2) {
        var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx_r16.activeLabel == null ? null : ctx_r16.activeLabel.width, "px")("transform", ctx_r16.transform);
      }
    }

    var _c0$m = [[["uni-tab"]]];
    var _c1$5 = ["uni-tab"];

    var UniTabGroupComponent =
    /*#__PURE__*/
    function () {
      function UniTabGroupComponent(_cdr) {
        _classCallCheck(this, UniTabGroupComponent);

        this._cdr = _cdr;
        this._active = 0;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniTabGroupComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._setActive();
        }
      }, {
        key: "select",
        value: function select(index) {
          this.active = index;

          this._setActive();
        }
      }, {
        key: "_setActive",
        value: function _setActive() {
          var _this14 = this;

          this.tabs.forEach(function (tab, i) {
            tab.active = i === _this14._active;
          });
        }
      }, {
        key: "active",
        get: function get() {
          return this._active;
        },
        set: function set(v) {
          if (v !== this._active) {
            this._active = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

            this._cdr.markForCheck();

            this.activeChange.emit(this._active);
          }
        }
      }, {
        key: "labels",
        get: function get() {
          return this._labels;
        },
        set: function set(v) {
          var _this15 = this;

          setTimeout(function () {
            _this15._labels = v;

            _this15._cdr.markForCheck();
          });
        }
      }, {
        key: "transform",
        get: function get() {
          var width = 0;

          for (var i = 0; i < this._active; i++) {
            width += this._labels.toArray()[i].width;
          }

          return "translateX(".concat(width, "px)");
        }
      }, {
        key: "activeLabel",
        get: function get() {
          return this._labels.toArray()[this._active];
        }
      }]);

      return UniTabGroupComponent;
    }();

    UniTabGroupComponent.ɵfac = function UniTabGroupComponent_Factory(t) {
      return new (t || UniTabGroupComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniTabGroupComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniTabGroupComponent,
      selectors: [["uni-tab-group"]],
      contentQueries: function UniTabGroupComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniTabComponent, false);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.tabs = _t);
        }
      },
      viewQuery: function UniTabGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(UniTabLabelComponent, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.labels = _t);
        }
      },
      hostAttrs: [1, "uni-tab-group"],
      inputs: {
        active: "active"
      },
      outputs: {
        activeChange: "activeChange"
      },
      exportAs: ["uniTabGroup"],
      ngContentSelectors: _c1$5,
      decls: 5,
      vars: 2,
      consts: [[1, "uni-tab-header"], [3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "uni-tab-track"], ["class", "uni-tab-bar", 3, "width", "transform", 4, "ngIf"], [3, "active", "disabled", "click"], [1, "uni-tab-bar"]],
      template: function UniTabGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$m);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniTabGroupComponent_uni_tab_label_1_Template, 2, 3, "uni-tab-label", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, UniTabGroupComponent_div_3_Template, 1, 4, "div", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.tabs.toArray());
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.labels);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], UniTabLabelComponent],
      styles: [".uni-tab-group{display:block}.uni-tab-group .uni-tab-header{display:-webkit-box;display:flex}.uni-tab-group .uni-tab-track{display:block;position:relative;height:2px;border-bottom:1px solid var(--hairline-regular)}.uni-tab-group .uni-tab-track .uni-tab-bar{position:absolute;height:2px;background-color:var(--primary);-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-tab-group',
          exportAs: 'uniTabGroup',
          templateUrl: './tab-group.component.html',
          styleUrls: ['./tab-group.component.scss'],
          host: {
            "class": 'uni-tab-group'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [UniTabComponent]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [UniTabLabelComponent]
        }]
      });
    })();

    var declarations$4 = [UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabBodyDirective];

    var UniTabModule = function UniTabModule() {
      _classCallCheck(this, UniTabModule);
    };

    UniTabModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniTabModule
    });
    UniTabModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniTabModule_Factory(t) {
        return new (t || UniTabModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniTabModule, {
        declarations: [UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabBodyDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabBodyDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$4,
          exports: declarations$4,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$n = ["*"];

    var UniToolbarComponent = function UniToolbarComponent() {
      _classCallCheck(this, UniToolbarComponent);
    };

    UniToolbarComponent.ɵfac = function UniToolbarComponent_Factory(t) {
      return new (t || UniToolbarComponent)();
    };

    UniToolbarComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniToolbarComponent,
      selectors: [["uni-toolbar"]],
      hostAttrs: [1, "uni-toolbar"],
      hostVars: 8,
      hostBindings: function UniToolbarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["uniToolbar"],
      ngContentSelectors: _c0$n,
      decls: 1,
      vars: 0,
      template: function UniToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-toolbar{display:-webkit-box;display:flex;padding:5px 10px;box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}.uni-toolbar.primary{color:var(--white);background-color:var(--primary)}.uni-toolbar.success{color:var(--white);background-color:var(--success)}.uni-toolbar.warning{color:var(--black);background-color:var(--warning)}.uni-toolbar.danger{color:var(--white);background-color:var(--danger)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-toolbar',
          exportAs: 'uniToolbar',
          template: "<ng-content></ng-content>",
          styleUrls: ['./toolbar.component.scss'],
          host: Object.assign({
            "class": 'uni-toolbar'
          }, UNI_HOST_COLORS),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniToolbarModule = function UniToolbarModule() {
      _classCallCheck(this, UniToolbarModule);
    };

    UniToolbarModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniToolbarModule
    });
    UniToolbarModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniToolbarModule_Factory(t) {
        return new (t || UniToolbarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniToolbarModule, {
        declarations: [UniToolbarComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniToolbarComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniToolbarComponent],
          exports: [UniToolbarComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniSidenavPosition;

    (function (UniSidenavPosition) {
      UniSidenavPosition["Start"] = "start";
      UniSidenavPosition["End"] = "end";
    })(UniSidenavPosition || (UniSidenavPosition = {}));

    var UniSidenavMode;

    (function (UniSidenavMode) {
      UniSidenavMode["Side"] = "side";
      UniSidenavMode["Over"] = "over";
    })(UniSidenavMode || (UniSidenavMode = {}));

    var UniSidenavState;

    (function (UniSidenavState) {
      UniSidenavState["Opened"] = "opened";
      UniSidenavState["Opening"] = "opening";
      UniSidenavState["Closed"] = "closed";
      UniSidenavState["Closing"] = "closing";
    })(UniSidenavState || (UniSidenavState = {}));

    var UNI_SIDENAV_ANIMATIONS = {
      slideTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('slideTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateX({{ distance }}%)'
      }), {
        params: {
          distance: '-100'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms cubic-bezier(0.35, 0, 0.25, 1)'))])
    };

    var UniSidenavBodyDirective = function UniSidenavBodyDirective(template) {
      _classCallCheck(this, UniSidenavBodyDirective);

      this.template = template;
    };

    UniSidenavBodyDirective.ɵfac = function UniSidenavBodyDirective_Factory(t) {
      return new (t || UniSidenavBodyDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    UniSidenavBodyDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniSidenavBodyDirective,
      selectors: [["ng-template", "uniSidenavBody", ""]],
      exportAs: ["uniSidenavBody"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavBodyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          exportAs: 'uniSidenavBody',
          selector: 'ng-template[uniSidenavBody]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    var _c0$o = ["view"];

    var UniSidenavComponent =
    /*#__PURE__*/
    function () {
      function UniSidenavComponent(el, cdr) {
        _classCallCheck(this, UniSidenavComponent);

        this.el = el;
        this.cdr = cdr;
        this._position = UniSidenavPosition.Start;
        this._mode = UniSidenavMode.Side;
        this._closeOnBackdropClick = true;
        this._hasBackdrop = true;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.UniSidenavPosition = UniSidenavPosition;
        this.UniSidenavMode = UniSidenavMode;
        this.UniSidenavState = UniSidenavState;
      }

      _createClass(UniSidenavComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.open) {
            this.view.createEmbeddedView(this.body.template);
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this16 = this;

          setTimeout(function () {
            return _this16.cdr.markForCheck();
          });
        }
      }, {
        key: "onEscape",
        value: function onEscape() {
          if (this.mode === UniSidenavMode.Over) {
            this.open = false;
          }
        }
      }, {
        key: "onSlideEnd",
        value: function onSlideEnd() {
          this.state = this.open ? UniSidenavState.Opened : UniSidenavState.Closed;
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        },
        set: function set(v) {
          if (v !== this._position) {
            this._position = v;
            this.positionChange.emit(this._position);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "mode",
        get: function get() {
          return this._mode;
        },
        set: function set(v) {
          if (v !== this._mode) {
            this._mode = v;
            this.modeChange.emit(this._mode);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "open",
        get: function get() {
          return this._open;
        },
        set: function set(v) {
          if (v !== this._open) {
            this._open = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.state = this.open ? UniSidenavState.Opening : UniSidenavState.Closing;
            this.openChange.emit(this._open);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "closeOnBackdropClick",
        get: function get() {
          return this._closeOnBackdropClick;
        },
        set: function set(v) {
          if (v !== this._closeOnBackdropClick) {
            this._closeOnBackdropClick = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        },
        set: function set(v) {
          if (v !== this._hasBackdrop) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "slide",
        get: function get() {
          return {
            value: this.open,
            params: {
              distance: this.position === UniSidenavPosition.Start ? '-100' : '100'
            }
          };
        }
      }, {
        key: "state",
        get: function get() {
          return this._state;
        },
        set: function set(v) {
          if (v !== this._state) {
            var prev = this._state;
            this._state = v;

            if (this.view) {
              if (prev === UniSidenavState.Closed && this._state === UniSidenavState.Opening) {
                this.view.createEmbeddedView(this.body.template);
              } else if (this._state === UniSidenavState.Closed) {
                this.view.remove();
              }
            }

            this.stateChange.emit(v);
            this.cdr.markForCheck();
          }
        }
      }]);

      return UniSidenavComponent;
    }();

    UniSidenavComponent.ɵfac = function UniSidenavComponent_Factory(t) {
      return new (t || UniSidenavComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniSidenavComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSidenavComponent,
      selectors: [["uni-sidenav"]],
      contentQueries: function UniSidenavComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSidenavBodyDirective, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.body = _t.first);
        }
      },
      viewQuery: function UniSidenavComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$o, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.view = _t.first);
        }
      },
      hostAttrs: [1, "uni-sidenav"],
      hostVars: 7,
      hostBindings: function UniSidenavComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentHostSyntheticListener"])("@slideTransition.done", function UniSidenavComponent_animation_slideTransition_done_HostBindingHandler($event) {
            return ctx.onSlideEnd();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keydown.escape", function UniSidenavComponent_keydown_escape_HostBindingHandler($event) {
            return ctx.onEscape();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"])("@slideTransition", ctx.slide);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("over", ctx.mode === ctx.UniSidenavMode.Over)("end", ctx.position === ctx.UniSidenavPosition.End)("closed", ctx.open === false);
        }
      },
      inputs: {
        position: "position",
        mode: "mode",
        open: "open",
        closeOnBackdropClick: "closeOnBackdropClick",
        hasBackdrop: "hasBackdrop"
      },
      outputs: {
        openChange: "openChange",
        stateChange: "stateChange",
        modeChange: "modeChange",
        positionChange: "positionChange"
      },
      exportAs: ["uniSidenav"],
      decls: 2,
      vars: 0,
      consts: [["view", ""]],
      template: function UniSidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, null, 0);
        }
      },
      styles: [".uni-sidenav{display:block;position:absolute;height:100%;overflow-y:auto;z-index:2;background-color:var(--dark);color:var(--white)}.uni-sidenav.end{right:0}.uni-sidenav.over{z-index:3}"],
      encapsulation: 2,
      data: {
        animation: [UNI_SIDENAV_ANIMATIONS.slideTransition]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-sidenav',
          exportAs: 'uniSidenav',
          template: "<ng-container #view></ng-container>",
          styleUrls: ['./sidenav.component.scss'],
          animations: [UNI_SIDENAV_ANIMATIONS.slideTransition],
          host: {
            "class": 'uni-sidenav',
            '[class.over]': 'mode === UniSidenavMode.Over',
            '[class.end]': 'position === UniSidenavPosition.End',
            '[class.closed]': 'open === false',
            '[@slideTransition]': 'slide',
            '(@slideTransition.done)': 'onSlideEnd()'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnBackdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        stateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        modeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniSidenavBodyDirective]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['view', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }],
        onEscape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keydown.escape']
        }]
      });
    })();

    function UniSidenavContainerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniSidenavContainerComponent_div_0_Template_div_click_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r24);
          var ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r23.onBackdropClick();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("visible", ctx_r22.showBackdrop);
      }
    }

    var _c0$p = [[["uni-sidenav"]], [["uni-sidenav-content"]]];
    var _c1$6 = ["uni-sidenav", "uni-sidenav-content"];

    var UniSidenavContainerComponent =
    /*#__PURE__*/
    function (_UniSubscriptionHelpe2) {
      _inherits(UniSidenavContainerComponent, _UniSubscriptionHelpe2);

      function UniSidenavContainerComponent(_cdr) {
        var _this17;

        _classCallCheck(this, UniSidenavContainerComponent);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(UniSidenavContainerComponent).call(this));
        _this17._cdr = _cdr;
        _this17.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this17;
      }

      _createClass(UniSidenavContainerComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this18 = this;

          this.sidenav.openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
            return _this18._cdr.markForCheck();
          });
          this.sidenav.modeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
            return _this18._cdr.markForCheck();
          });
          this.sidenav.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
            return _this18._cdr.markForCheck();
          });
        }
      }, {
        key: "onBackdropClick",
        value: function onBackdropClick() {
          this.backdropClicked.emit();

          if (this.sidenav.closeOnBackdropClick) {
            this.sidenav.open = !this.sidenav.open;
          }
        }
      }, {
        key: "showBackdrop",
        get: function get() {
          return this.sidenav.mode === UniSidenavMode.Over && this.sidenav.open && this.sidenav.hasBackdrop;
        }
      }, {
        key: "hasBackdrop",
        get: function get() {
          return this.sidenav.mode === UniSidenavMode.Over && this.sidenav.hasBackdrop;
        }
      }]);

      return UniSidenavContainerComponent;
    }(UniSubscriptionHelper);

    UniSidenavContainerComponent.ɵfac = function UniSidenavContainerComponent_Factory(t) {
      return new (t || UniSidenavContainerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniSidenavContainerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSidenavContainerComponent,
      selectors: [["uni-sidenav-container"]],
      contentQueries: function UniSidenavContainerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSidenavComponent, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.sidenav = _t.first);
        }
      },
      hostAttrs: [1, "uni-sidenav-container"],
      outputs: {
        backdropClicked: "backdropClicked"
      },
      exportAs: ["uniSidenavContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1$6,
      decls: 3,
      vars: 1,
      consts: [["class", "uni-backdrop", 3, "visible", "click", 4, "ngIf"], [1, "uni-backdrop", 3, "click"]],
      template: function UniSidenavContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$p);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniSidenavContainerComponent_div_0_Template, 1, 2, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.hasBackdrop);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".uni-backdrop{position:absolute;height:100%;width:100%;opacity:0;pointer-events:none;z-index:2;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.uni-backdrop.visible{opacity:1;pointer-events:all}.uni-sidenav-container{display:block;position:relative;overflow:hidden}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-sidenav-container',
          exportAs: 'uniSidenavContainer',
          templateUrl: './sidenav-container.component.html',
          styleUrls: ['./sidenav-container.component.scss'],
          host: {
            "class": 'uni-sidenav-container'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        backdropClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniSidenavComponent, {
            "static": false
          }]
        }]
      });
    })();

    var _c0$q = ["*"];

    var UniSidenavContentComponent =
    /*#__PURE__*/
    function () {
      function UniSidenavContentComponent(_container, _el) {
        _classCallCheck(this, UniSidenavContentComponent);

        this._container = _container;
        this._el = _el;
      }

      _createClass(UniSidenavContentComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this19 = this;

          setTimeout(function () {
            _this19._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
          }, 1000);
        }
      }, {
        key: "marginLeft",
        get: function get() {
          return this._open && this._position === UniSidenavPosition.Start && this._mode === UniSidenavMode.Side ? this._width : undefined;
        }
      }, {
        key: "marginRight",
        get: function get() {
          return this._open && this._position === UniSidenavPosition.End && this._mode === UniSidenavMode.Side ? this._width : undefined;
        }
      }, {
        key: "_open",
        get: function get() {
          return this._container.sidenav.open;
        }
      }, {
        key: "_mode",
        get: function get() {
          return this._container.sidenav.mode;
        }
      }, {
        key: "_position",
        get: function get() {
          return this._container.sidenav.position;
        }
      }, {
        key: "_width",
        get: function get() {
          return this._container.sidenav.el.nativeElement.clientWidth;
        }
      }]);

      return UniSidenavContentComponent;
    }();

    UniSidenavContentComponent.ɵfac = function UniSidenavContentComponent_Factory(t) {
      return new (t || UniSidenavContentComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return UniSidenavContainerComponent;
      })), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniSidenavContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSidenavContentComponent,
      selectors: [["uni-sidenav-content"]],
      hostAttrs: [1, "uni-sidenav-content"],
      hostVars: 4,
      hostBindings: function UniSidenavContentComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("margin-left", ctx.marginLeft, "px")("margin-right", ctx.marginRight, "px");
        }
      },
      exportAs: ["uniSidenavContent"],
      ngContentSelectors: _c0$q,
      decls: 1,
      vars: 0,
      template: function UniSidenavContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-sidenav-content{display:block;position:relative;overflow:auto;z-index:1;height:100%}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-sidenav-content',
          exportAs: 'uniSidenavContent',
          template: "<ng-content></ng-content>",
          styleUrls: ['./sidenav-content.component.scss'],
          host: {
            "class": 'uni-sidenav-content',
            '[style.margin-left.px]': 'marginLeft',
            '[style.margin-right.px]': 'marginRight'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: UniSidenavContainerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return UniSidenavContainerComponent;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();

    var declarations$5 = [UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavBodyDirective];

    var UniSidenavModule = function UniSidenavModule() {
      _classCallCheck(this, UniSidenavModule);
    };

    UniSidenavModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniSidenavModule
    });
    UniSidenavModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniSidenavModule_Factory(t) {
        return new (t || UniSidenavModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSidenavModule, {
        declarations: [UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavBodyDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavBodyDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$5,
          exports: declarations$5,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$r = ["*"];

    var UniSplitAreaComponent =
    /*#__PURE__*/
    function () {
      function UniSplitAreaComponent(_cdr, _el) {
        _classCallCheck(this, UniSplitAreaComponent);

        this._cdr = _cdr;
        this._el = _el;
        this._flex = '1 1 auto';
        this.flexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniSplitAreaComponent, [{
        key: "flex",
        get: function get() {
          return this._flex;
        },
        set: function set(v) {
          if (v !== this._flex) {
            this._flex = v;

            this._cdr.markForCheck();

            this.flexChange.emit(this._flex);
          }
        }
      }, {
        key: "index",
        get: function get() {
          return this._index;
        },
        set: function set(v) {
          if (v !== this._index) {
            this._index = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

            this._cdr.markForCheck();
          }
        }
      }, {
        key: "clientWidth",
        get: function get() {
          return this._el.nativeElement.clientWidth;
        }
      }, {
        key: "clientHeight",
        get: function get() {
          return this._el.nativeElement.clientHeight;
        }
      }]);

      return UniSplitAreaComponent;
    }();

    UniSplitAreaComponent.ɵfac = function UniSplitAreaComponent_Factory(t) {
      return new (t || UniSplitAreaComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniSplitAreaComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSplitAreaComponent,
      selectors: [["uni-split-area"]],
      hostAttrs: [1, "uni-split-area"],
      hostVars: 4,
      hostBindings: function UniSplitAreaComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("order", ctx.index)("flex", ctx.flex);
        }
      },
      inputs: {
        flex: "flex",
        index: "index"
      },
      outputs: {
        flexChange: "flexChange"
      },
      exportAs: ["uniSplitArea"],
      ngContentSelectors: _c0$r,
      decls: 1,
      vars: 0,
      template: function UniSplitAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-split-area{display:-webkit-box;display:flex;overflow:auto;background-color:var(--darker)}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          exportAs: 'uniSplitArea',
          selector: 'uni-split-area',
          template: "<ng-content></ng-content>",
          styleUrls: ['./split-area.component.scss'],
          host: {
            "class": 'uni-split-area',
            '[style.order]': 'index',
            '[style.flex]': 'flex'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        flex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    var UniSplitDirection;

    (function (UniSplitDirection) {
      UniSplitDirection["Vertical"] = "vertical";
      UniSplitDirection["Horizontal"] = "horizontal";
    })(UniSplitDirection || (UniSplitDirection = {}));

    var UniSplitHandleComponent =
    /*#__PURE__*/
    function () {
      function UniSplitHandleComponent() {
        _classCallCheck(this, UniSplitHandleComponent);

        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniSplitHandleComponent, [{
        key: "onMouseDown",
        value: function onMouseDown(e) {
          if (this.vertical) {
            this._x = e.clientX;
          } else {
            this._y = e.clientY;
          }
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          e.preventDefault();

          if (this._x !== undefined) {
            this.resize.emit(e.clientX - this._x);
            this._x = e.clientX;
          } else if (this._y !== undefined) {
            this.resize.emit(e.clientY - this._y);
            this._y = e.clientY;
          }
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp() {
          if (this._x !== undefined) {
            this._x = undefined;
          }

          if (this._y !== undefined) {
            this._y = undefined;
          }
        }
      }, {
        key: "resizing",
        get: function get() {
          return this._x !== undefined;
        }
      }, {
        key: "vertical",
        get: function get() {
          return this.direction === UniSplitDirection.Vertical;
        }
      }]);

      return UniSplitHandleComponent;
    }();

    UniSplitHandleComponent.ɵfac = function UniSplitHandleComponent_Factory(t) {
      return new (t || UniSplitHandleComponent)();
    };

    UniSplitHandleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSplitHandleComponent,
      selectors: [["uni-split-handle"]],
      hostAttrs: [1, "uni-split-handle"],
      hostVars: 6,
      hostBindings: function UniSplitHandleComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function UniSplitHandleComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          })("mousemove", function UniSplitHandleComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMouseMove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function UniSplitHandleComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseUp();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("uni-split-handle--resizing", ctx.resizing)("uni-split-handle--vertical", ctx.vertical)("uni-split-handle--horizontal", !ctx.vertical);
        }
      },
      outputs: {
        resize: "resize"
      },
      exportAs: ["uniSplitHandle"],
      decls: 0,
      vars: 0,
      template: function UniSplitHandleComponent_Template(rf, ctx) {},
      styles: [".uni-split-handle{-webkit-box-ordinal-group:2;order:1;-webkit-transition:background-color .5s;transition:background-color .5s;background-color:var(--dark)}.uni-split-handle.uni-split-handle--resizing,.uni-split-handle:hover{background-color:var(--primary)}.uni-split-handle.uni-split-handle--vertical{width:10px;min-width:10px;cursor:col-resize}.uni-split-handle.uni-split-handle--horizontal{height:10px;min-height:10px;cursor:row-resize}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          exportAs: 'uniSplitHandle',
          selector: 'uni-split-handle',
          template: "",
          styleUrls: ['./split-handle.component.scss'],
          host: {
            "class": 'uni-split-handle',
            '[class.uni-split-handle--resizing]': 'resizing',
            '[class.uni-split-handle--vertical]': 'vertical',
            '[class.uni-split-handle--horizontal]': '!vertical'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }],
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup']
        }]
      });
    })();

    function areaPct(area, container) {
      return area / container * 100;
    }

    var _c0$s = [[["uni-split-area"]], [["uni-split-handle"]], [["uni-split-area"]], [["uni-split"]]];
    var _c1$7 = ["uni-split-area", "uni-split-handle", "uni-split-area", "uni-split"];

    var UniSplitComponent =
    /*#__PURE__*/
    function (_UniSubscriptionHelpe3) {
      _inherits(UniSplitComponent, _UniSubscriptionHelpe3);

      function UniSplitComponent(_el) {
        var _this20;

        _classCallCheck(this, UniSplitComponent);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(UniSplitComponent).call(this));
        _this20._el = _el;

        _this20._el.nativeElement.classList.add(_this20._name);

        return _this20;
      }

      _createClass(UniSplitComponent, [{
        key: "_onResize",
        value: function _onResize(distance) {
          if (this._areas) {
            var pct;

            if (this._vertical) {
              pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
            } else {
              pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
            }

            this._areas.first.flex = "0 0 ".concat(pct <= 100 ? pct : 100, "%");
          }
        }
      }, {
        key: "areas",
        get: function get() {
          return this._areas;
        },
        set: function set(v) {
          if (v && v.length === 2) {
            this._areas = v;

            if (this._areas.first.index === undefined) {
              this._areas.first.index = 0;
            }

            if (this._areas.last.index === undefined) {
              this._areas.last.index = 2;
            }
          }
        }
      }, {
        key: "handle",
        get: function get() {
          return this._handle;
        },
        set: function set(v) {
          if (v) {
            this._handle = v;
            this._handle.direction = this._vertical ? UniSplitDirection.Vertical : UniSplitDirection.Horizontal;

            this._handle.resize.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(this._onResize.bind(this));
          }
        }
      }, {
        key: "_name",
        get: function get() {
          return this._el.nativeElement.nodeName.toLowerCase();
        }
      }, {
        key: "_vertical",
        get: function get() {
          return this._name === 'uni-vertical-split';
        }
      }]);

      return UniSplitComponent;
    }(UniSubscriptionHelper);

    UniSplitComponent.ɵfac = function UniSplitComponent_Factory(t) {
      return new (t || UniSplitComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniSplitComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniSplitComponent,
      selectors: [["uni-vertical-split"], ["uni-horizontal-split"]],
      contentQueries: function UniSplitComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSplitHandleComponent, true);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSplitAreaComponent, false);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.handle = _t.first);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.areas = _t);
        }
      },
      hostAttrs: [1, "uni-split"],
      exportAs: ["uniSplit"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1$7,
      decls: 4,
      vars: 0,
      template: function UniSplitComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$s);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(3, 3);
        }
      },
      styles: [".uni-split{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto}.uni-split.uni-vertical-split{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.uni-split.uni-horizontal-split{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          exportAs: 'uniSplit',
          selector: 'uni-vertical-split, uni-horizontal-split',
          templateUrl: './split.component.html',
          styleUrls: ['./split.component.scss'],
          host: {
            "class": 'uni-split'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        areas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [UniSplitAreaComponent]
        }],
        handle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [UniSplitHandleComponent]
        }]
      });
    })();

    var declarations$6 = [UniSplitComponent, UniSplitAreaComponent, UniSplitHandleComponent];

    var UniSplitModule = function UniSplitModule() {
      _classCallCheck(this, UniSplitModule);
    };

    UniSplitModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniSplitModule
    });
    UniSplitModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniSplitModule_Factory(t) {
        return new (t || UniSplitModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSplitModule, {
        declarations: [UniSplitComponent, UniSplitAreaComponent, UniSplitHandleComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniSplitComponent, UniSplitAreaComponent, UniSplitHandleComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$6,
          exports: declarations$6,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniIconService =
    /*#__PURE__*/
    function () {
      function UniIconService() {
        _classCallCheck(this, UniIconService);
      }

      _createClass(UniIconService, [{
        key: "registry",
        value: function registry(prefix) {
          this._prefix = prefix;
        }
      }, {
        key: "prefix",
        get: function get() {
          return this._prefix;
        }
      }]);

      return UniIconService;
    }();

    UniIconService.ɵfac = function UniIconService_Factory(t) {
      return new (t || UniIconService)();
    };

    UniIconService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: UniIconService,
      factory: UniIconService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var UniIconComponent =
    /*#__PURE__*/
    function () {
      function UniIconComponent(_el, _iconService) {
        _classCallCheck(this, UniIconComponent);

        this._el = _el;
        this._iconService = _iconService;
      }

      _createClass(UniIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._el.nativeElement.classList.add(this._iconService.prefix);
        }
      }, {
        key: "icon",
        get: function get() {
          return this._icon;
        },
        set: function set(v) {
          if (v !== this._icon) {
            if (v && this._el.nativeElement.classList.contains(this._icon)) {
              this._el.nativeElement.classList.remove(this._icon);
            }

            this._icon = v;

            this._el.nativeElement.classList.add(v);
          }
        }
      }]);

      return UniIconComponent;
    }();

    UniIconComponent.ɵfac = function UniIconComponent_Factory(t) {
      return new (t || UniIconComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniIconService));
    };

    UniIconComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniIconComponent,
      selectors: [["uni-icon"]],
      hostAttrs: [1, "uni-icon"],
      inputs: {
        icon: "icon"
      },
      exportAs: ["uniIcon"],
      decls: 0,
      vars: 0,
      template: function UniIconComponent_Template(rf, ctx) {},
      styles: [".uni-icon{display:inline-block}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-icon',
          exportAs: 'uniIcon',
          template: "",
          styleUrls: ['./icon.component.scss'],
          host: {
            "class": 'uni-icon'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: UniIconService
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniIconModule = function UniIconModule() {
      _classCallCheck(this, UniIconModule);
    };

    UniIconModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniIconModule
    });
    UniIconModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniIconModule_Factory(t) {
        return new (t || UniIconModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniIconModule, {
        declarations: [UniIconComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniIconComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniIconComponent],
          exports: [UniIconComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$t = ["uni-button", ""];
    var _c1$8 = ["*"];
    var UNI_BUTTON_HOST_ATTRIBUTES = ['uni-button', 'uni-link-button', 'uni-icon-button', 'uni-fab', 'uni-mini-fab'];

    var UniButtonComponent =
    /*#__PURE__*/
    function () {
      function UniButtonComponent(_el) {
        _classCallCheck(this, UniButtonComponent);

        this._el = _el;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = UNI_BUTTON_HOST_ATTRIBUTES[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var attr = _step3.value;

            if (this._element.hasAttribute(attr)) {
              this._element.classList.add(attr);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      _createClass(UniButtonComponent, [{
        key: "_element",
        get: function get() {
          return this._el.nativeElement;
        }
      }]);

      return UniButtonComponent;
    }();

    UniButtonComponent.ɵfac = function UniButtonComponent_Factory(t) {
      return new (t || UniButtonComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniButtonComponent,
      selectors: [["button", "uni-button", ""], ["button", "uni-icon-button", ""], ["button", "uni-fab", ""], ["button", "uni-mini-fab", ""], ["button", "uni-link-button", ""]],
      hostVars: 8,
      hostBindings: function UniButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["uniButton"],
      attrs: _c0$t,
      ngContentSelectors: _c1$8,
      decls: 1,
      vars: 0,
      template: function UniButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: ["[_nghost-%COMP%]{padding:.3em .55em;font-size:.9em;font-weight:700;outline:0;border:2px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--white);cursor:pointer;border-radius:3px;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out}[_nghost-%COMP%]:disabled{opacity:.6;box-shadow:none!important;cursor:not-allowed}[_nghost-%COMP%]:disabled:active{-webkit-filter:none;filter:none}[_nghost-%COMP%]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.uni-button[_nghost-%COMP%]{background-color:var(--grey)}.uni-button.primary[_nghost-%COMP%]{color:var(--white);background-color:var(--primary)}.uni-button.success[_nghost-%COMP%]{color:var(--white);background-color:var(--success)}.uni-button.warning[_nghost-%COMP%]{color:var(--black);background-color:var(--warning)}.uni-button.danger[_nghost-%COMP%]{color:var(--white);background-color:var(--danger)}.uni-fab[_nghost-%COMP%]{height:50px;width:50px}.uni-button[_nghost-%COMP%], .uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-fab[_nghost-%COMP%]     .uni-icon, .uni-icon-button[_nghost-%COMP%]     .uni-icon, .uni-mini-fab[_nghost-%COMP%]     .uni-icon{font-size:20px}.uni-icon-button[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{height:40px;width:40px}.uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:var(--grey);color:var(--white)}.uni-fab.primary[_nghost-%COMP%], .uni-mini-fab.primary[_nghost-%COMP%]{background-color:var(--primary);color:var(--white)}.uni-fab.success[_nghost-%COMP%], .uni-mini-fab.success[_nghost-%COMP%]{background-color:var(--success);color:var(--white)}.uni-fab.warning[_nghost-%COMP%], .uni-mini-fab.warning[_nghost-%COMP%]{background-color:var(--warning);color:var(--white);color:var(--black)}.uni-fab.danger[_nghost-%COMP%], .uni-mini-fab.danger[_nghost-%COMP%]{background-color:var(--danger);color:var(--white)}.uni-icon-button[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:transparent;opacity:.7;color:var(--white)}.uni-icon-button[_nghost-%COMP%]:hover{opacity:1}.uni-icon-button[_nghost-%COMP%]:hover:disabled{opacity:.6}.uni-icon-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-icon-button.success[_nghost-%COMP%]{color:var(--success)}.uni-icon-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-icon-button.danger[_nghost-%COMP%]{color:var(--danger)}.uni-link-button[_nghost-%COMP%]{background-color:transparent;box-shadow:none}.uni-link-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-link-button.success[_nghost-%COMP%]{color:var(--success)}.uni-link-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-link-button.danger[_nghost-%COMP%]{color:var(--danger)}"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: "button[uni-button], button[uni-icon-button],\n             button[uni-fab], button[uni-mini-fab],\n             button[uni-link-button]",
          exportAs: 'uniButton',
          template: "<ng-content></ng-content>",
          styleUrls: ['./button.component.scss'],
          host: Object.assign({}, UNI_HOST_COLORS),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniButtonModule = function UniButtonModule() {
      _classCallCheck(this, UniButtonModule);
    };

    UniButtonModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniButtonModule
    });
    UniButtonModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniButtonModule_Factory(t) {
        return new (t || UniButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniButtonModule, {
        declarations: [UniButtonComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniButtonComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniButtonComponent],
          exports: [UniButtonComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniProgressMode;

    (function (UniProgressMode) {
      UniProgressMode["Determinate"] = "determinate";
      UniProgressMode["Indeterminate"] = "indeterminate";
    })(UniProgressMode || (UniProgressMode = {}));

    var UniProgressBarComponent =
    /*#__PURE__*/
    function () {
      function UniProgressBarComponent(_cdr) {
        _classCallCheck(this, UniProgressBarComponent);

        this._cdr = _cdr;
        this.mode = UniProgressMode.Indeterminate;
        this.color = UniColor.Primary;
        this._total = 100;
        this._value = 0;
        this.UniProgressMode = UniProgressMode;
        this._indeterminate = {
          value: 25,
          total: 100
        };
      }

      _createClass(UniProgressBarComponent, [{
        key: "total",
        get: function get() {
          return this._total;
        },
        set: function set(v) {
          this._total = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          this._value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "percentage",
        get: function get() {
          return this.mode === UniProgressMode.Determinate ? 100 / this.total * this.value : 100 / this._indeterminate.total * this._indeterminate.value;
        }
      }]);

      return UniProgressBarComponent;
    }();

    UniProgressBarComponent.ɵfac = function UniProgressBarComponent_Factory(t) {
      return new (t || UniProgressBarComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniProgressBarComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniProgressBarComponent,
      selectors: [["uni-progress-bar"]],
      hostAttrs: [1, "uni-progress-bar"],
      hostVars: 10,
      hostBindings: function UniProgressBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        }
      },
      inputs: {
        mode: "mode",
        color: "color",
        total: "total",
        value: "value"
      },
      exportAs: ["uniProgresssBar"],
      decls: 3,
      vars: 2,
      consts: [["width", "100%", "height", "4px"], ["rx", "2px", "width", "100%", 1, "uni-progress-bar-background"], ["rx", "2px", 1, "uni-progress-bar-foreground"]],
      template: function UniProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "svg", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "rect", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "rect", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.percentage, "%");
        }
      },
      styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-bar{display:-webkit-box;display:flex}.uni-progress-bar.indeterminate .uni-progress-bar-foreground{-webkit-animation:1s linear infinite uni-bar-slide;animation:1s linear infinite uni-bar-slide}.uni-progress-bar.primary .uni-progress-bar-background{fill:var(--primary-a50)}.uni-progress-bar.primary .uni-progress-bar-foreground{fill:var(--primary)}.uni-progress-bar.success .uni-progress-bar-background{fill:var(--success-a50)}.uni-progress-bar.success .uni-progress-bar-foreground{fill:var(--success)}.uni-progress-bar.warning .uni-progress-bar-background{fill:var(--warning-a50)}.uni-progress-bar.warning .uni-progress-bar-foreground{fill:var(--warning)}.uni-progress-bar.danger .uni-progress-bar-background{fill:var(--danger-a50)}.uni-progress-bar.danger .uni-progress-bar-foreground{fill:var(--danger)}.uni-progress-bar .uni-progress-bar-foreground{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-progress-bar',
          exportAs: 'uniProgresssBar',
          templateUrl: './progress-bar.component.html',
          styleUrls: ['./progress-bar.component.scss'],
          host: Object.assign(Object.assign({
            "class": 'uni-progress-bar'
          }, UNI_HOST_COLORS), {
            '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate'
          }),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniProgressSpinnerComponent =
    /*#__PURE__*/
    function () {
      function UniProgressSpinnerComponent(_cdr) {
        _classCallCheck(this, UniProgressSpinnerComponent);

        this._cdr = _cdr;
        this.mode = UniProgressMode.Indeterminate;
        this.color = UniColor.Primary;
        this._total = 100;
        this._value = 0;
        this._strokeWidth = 5;
        this._diameter = 90;
        this._indeterminate = {
          value: 25,
          total: 100
        };
        this.UniProgressMode = UniProgressMode;
      }

      _createClass(UniProgressSpinnerComponent, [{
        key: "total",
        get: function get() {
          return this._total;
        },
        set: function set(v) {
          this._total = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          this._value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth;
        },
        set: function set(v) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        },
        set: function set(v) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);

          this._cdr.markForCheck();
        }
      }, {
        key: "radius",
        get: function get() {
          return this.diameter / 2 - this.strokeWidth;
        }
      }, {
        key: "strokeDasharray",
        get: function get() {
          return "".concat(this._circumference, " ").concat(this._circumference);
        }
      }, {
        key: "strokeDashoffset",
        get: function get() {
          return this._circumference - this._percentage / 100 * this._circumference;
        }
      }, {
        key: "_circumference",
        get: function get() {
          return this.radius * 2 * Math.PI;
        }
      }, {
        key: "_percentage",
        get: function get() {
          return 100 / this._modeTotal * this._modeValue;
        }
      }, {
        key: "_modeValue",
        get: function get() {
          return this.mode === UniProgressMode.Determinate ? this.value : this._indeterminate.value;
        }
      }, {
        key: "_modeTotal",
        get: function get() {
          return this.mode === UniProgressMode.Determinate ? this.total : this._indeterminate.total;
        }
      }]);

      return UniProgressSpinnerComponent;
    }();

    UniProgressSpinnerComponent.ɵfac = function UniProgressSpinnerComponent_Factory(t) {
      return new (t || UniProgressSpinnerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniProgressSpinnerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniProgressSpinnerComponent,
      selectors: [["uni-progress-spinner"]],
      hostAttrs: [1, "uni-progress-spinner"],
      hostVars: 10,
      hostBindings: function UniProgressSpinnerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        }
      },
      inputs: {
        mode: "mode",
        color: "color",
        total: "total",
        value: "value",
        strokeWidth: "strokeWidth",
        diameter: "diameter"
      },
      exportAs: ["uniProgressSpinner"],
      decls: 2,
      vars: 16,
      template: function UniProgressSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "svg");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "circle");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.diameter, "px")("height", ctx.diameter, "px");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("stroke-width", ctx.strokeWidth, "px")("stroke-dashoffset", ctx.strokeDashoffset)("stroke-dasharray", ctx.strokeDasharray)("r", ctx.radius, "px")("cx", ctx.diameter / 2, "px")("cy", ctx.diameter / 2, "px");
        }
      },
      styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-spinner{display:inline-block}.uni-progress-spinner.indeterminate circle{-webkit-animation:1s linear infinite uni-spinner-rotate;animation:1s linear infinite uni-spinner-rotate}.uni-progress-spinner.primary circle{stroke:var(--primary)}.uni-progress-spinner.success circle{stroke:var(--success)}.uni-progress-spinner.warning circle{stroke:var(--warning)}.uni-progress-spinner.danger circle{stroke:var(--danger)}.uni-progress-spinner svg circle{fill:transparent;-webkit-transition:stroke-dashoffset .2s;transition:stroke-dashoffset .2s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-progress-spinner',
          exportAs: 'uniProgressSpinner',
          templateUrl: './progress-spinner.component.html',
          styleUrls: ['./progress-spinner.component.scss'],
          host: Object.assign(Object.assign({
            "class": 'uni-progress-spinner'
          }, UNI_HOST_COLORS), {
            '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate'
          }),
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var declarations$7 = [UniProgressBarComponent, UniProgressSpinnerComponent];

    var UniProgressModule = function UniProgressModule() {
      _classCallCheck(this, UniProgressModule);
    };

    UniProgressModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniProgressModule
    });
    UniProgressModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniProgressModule_Factory(t) {
        return new (t || UniProgressModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniProgressModule, {
        declarations: [UniProgressBarComponent, UniProgressSpinnerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniProgressBarComponent, UniProgressSpinnerComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: declarations$7,
          exports: declarations$7,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var _c0$u = ["*"];

    var UniMarkedComponent =
    /*#__PURE__*/
    function () {
      function UniMarkedComponent(_cdr, _sanitizer, _el) {
        _classCallCheck(this, UniMarkedComponent);

        this._cdr = _cdr;
        this._sanitizer = _sanitizer;
        this._el = _el;
        this._options = {
          silent: true,
          smartLists: true,
          gfm: true,
          breaks: true,
          highlight: null
        };
      }

      _createClass(UniMarkedComponent, [{
        key: "_highlightCodeBlock",
        value: function _highlightCodeBlock(code) {
          return highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlightAuto(code).value;
        }
      }, {
        key: "markdown",
        get: function get() {
          return this._markdown;
        },
        set: function set(v) {
          this._markdown = v;
          this.html = marked__WEBPACK_IMPORTED_MODULE_11___default()(v || '', this._options);
        }
      }, {
        key: "highlight",
        get: function get() {
          return this._highlight;
        },
        set: function set(v) {
          if (v !== this._highlight) {
            this._highlight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;

            this._cdr.markForCheck();
          }
        }
      }, {
        key: "sanitize",
        get: function get() {
          return this._sanitize;
        },
        set: function set(v) {
          if (v !== this._sanitize) {
            this._sanitize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);

            this._cdr.markForCheck();
          }
        }
      }, {
        key: "html",
        get: function get() {
          return this._html;
        },
        set: function set(v) {
          this._html = this._sanitize ? this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, v) : v;
          this._el.nativeElement.innerHTML = this._html;

          this._cdr.markForCheck();
        }
      }]);

      return UniMarkedComponent;
    }();

    UniMarkedComponent.ɵfac = function UniMarkedComponent_Factory(t) {
      return new (t || UniMarkedComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    UniMarkedComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniMarkedComponent,
      selectors: [["uni-marked"]],
      hostAttrs: [1, "uni-marked"],
      inputs: {
        markdown: "markdown",
        highlight: "highlight",
        sanitize: "sanitize"
      },
      exportAs: ["uniMarked"],
      ngContentSelectors: _c0$u,
      decls: 1,
      vars: 0,
      template: function UniMarkedComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        }
      },
      styles: [".uni-marked{display:block}.uni-marked code{color:var(--blood-orange)}.uni-marked table{border-spacing:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-marked table td,.uni-marked table th{padding:10px}.uni-marked table thead tr{background-color:var(--darker)}.uni-marked table thead tr th{text-align:left;color:var(--white);font-weight:500}.uni-marked table thead tr th:first-child{border-top-left-radius:3px}.uni-marked table thead tr th:last-child{border-top-right-radius:3px}.uni-marked table tbody tr{background-color:var(--dark)}.uni-marked table tbody tr:last-child td:first-child{border-bottom-left-radius:3px}.uni-marked table tbody tr:last-child td:last-child{border-bottom-right-radius:3px}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniMarkedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-marked',
          exportAs: 'uniMarked',
          template: "<ng-content></ng-content>",
          styleUrls: ['./marked.component.scss'],
          host: {
            "class": 'uni-marked'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        markdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniMarkedModule = function UniMarkedModule() {
      _classCallCheck(this, UniMarkedModule);
    };

    UniMarkedModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniMarkedModule
    });
    UniMarkedModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniMarkedModule_Factory(t) {
        return new (t || UniMarkedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniMarkedModule, {
        declarations: [UniMarkedComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniMarkedComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniMarkedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniMarkedComponent],
          exports: [UniMarkedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniCodeComponent =
    /*#__PURE__*/
    function () {
      function UniCodeComponent(_cdr) {
        _classCallCheck(this, UniCodeComponent);

        this._cdr = _cdr;
      }

      _createClass(UniCodeComponent, [{
        key: "code",
        get: function get() {
          return this._code;
        },
        set: function set(v) {
          this._code = v;
          this.html = this._language ? highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlight(this._language, v).value : highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlightAuto(v).value;
        }
      }, {
        key: "language",
        get: function get() {
          return this._language;
        },
        set: function set(v) {
          this._language = v;
        }
      }, {
        key: "html",
        get: function get() {
          return this._html;
        },
        set: function set(v) {
          this._html = v;

          this._cdr.markForCheck();
        }
      }]);

      return UniCodeComponent;
    }();

    UniCodeComponent.ɵfac = function UniCodeComponent_Factory(t) {
      return new (t || UniCodeComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    UniCodeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UniCodeComponent,
      selectors: [["uni-code"]],
      hostAttrs: [1, "uni-code"],
      inputs: {
        code: "code",
        language: "language"
      },
      exportAs: ["uniCode"],
      decls: 1,
      vars: 1,
      consts: [[3, "innerHTML"]],
      template: function UniCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "pre", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: [".uni-code{display:block;background-color:var(--darkest);color:var(--white);padding:10px;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-code pre{margin:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          moduleId: module.i,
          selector: 'uni-code',
          exportAs: 'uniCode',
          template: "<pre [innerHTML]=\"html\"></pre>",
          styleUrls: ['./code.component.scss'],
          host: {
            "class": 'uni-code'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UniCodeModule = function UniCodeModule() {
      _classCallCheck(this, UniCodeModule);
    };

    UniCodeModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniCodeModule
    });
    UniCodeModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniCodeModule_Factory(t) {
        return new (t || UniCodeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCodeModule, {
        declarations: [UniCodeComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniCodeComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniCodeComponent],
          exports: [UniCodeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();

    var UniResizeObserverService =
    /*#__PURE__*/
    function () {
      function UniResizeObserverService() {
        _classCallCheck(this, UniResizeObserverService);
      }

      _createClass(UniResizeObserverService, [{
        key: "observe",
        value: function observe(el, cb) {
          var _this21 = this;

          var throttle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
          var observer = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_13__["default"](function (entries) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              var _loop = function _loop() {
                var entry = _step4.value;

                if (_this21._timer) {
                  clearTimeout(_this21._timer);
                  _this21._timer = undefined;
                }

                _this21._timer = setTimeout(function () {
                  return cb(entry.contentRect);
                }, throttle);
              };

              for (var _iterator4 = entries[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                _loop();
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
          observer.observe(el);
          return observer;
        }
      }]);

      return UniResizeObserverService;
    }();

    UniResizeObserverService.ɵfac = function UniResizeObserverService_Factory(t) {
      return new (t || UniResizeObserverService)();
    };

    UniResizeObserverService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: UniResizeObserverService,
      factory: UniResizeObserverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var UniResizeObserverDirective =
    /*#__PURE__*/
    function () {
      function UniResizeObserverDirective(_el, _resizeObserverService) {
        _classCallCheck(this, UniResizeObserverDirective);

        this._el = _el;
        this._resizeObserverService = _resizeObserverService;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UniResizeObserverDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this._observer = this._resizeObserverService.observe(this._el.nativeElement, function (e) {
            _this22.resize.emit(e);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._observer.unobserve(this._el.nativeElement);
        }
      }]);

      return UniResizeObserverDirective;
    }();

    UniResizeObserverDirective.ɵfac = function UniResizeObserverDirective_Factory(t) {
      return new (t || UniResizeObserverDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniResizeObserverService));
    };

    UniResizeObserverDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: UniResizeObserverDirective,
      selectors: [["", "uniResizeObserver", ""]],
      outputs: {
        resize: "uniResizeObserver"
      },
      exportAs: ["uniResizeObserver"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          exportAs: 'uniResizeObserver',
          selector: '[uniResizeObserver]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: UniResizeObserverService
        }];
      }, {
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['uniResizeObserver']
        }]
      });
    })();

    var UniResizeObserverModule = function UniResizeObserverModule() {
      _classCallCheck(this, UniResizeObserverModule);
    };

    UniResizeObserverModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UniResizeObserverModule
    });
    UniResizeObserverModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UniResizeObserverModule_Factory(t) {
        return new (t || UniResizeObserverModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniResizeObserverModule, {
        declarations: [UniResizeObserverDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [UniResizeObserverDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [UniResizeObserverDirective],
          exports: [UniResizeObserverDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of components
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=uniform-components.js.map

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'components',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | features-components-components-module */
        "features-components-components-module").then(__webpack_require__.bind(null,
        /*! ./features/components/components.module */
        "./src/app/features/components/components.module.ts")).then(function (m) {
          return m.ComponentsModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _features_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./features/sidenav/sidenav.component */
    "./src/app/features/sidenav/sidenav.component.ts");
    /* harmony import */


    var _features_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./features/toolbar/toolbar.component */
    "./src/app/features/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.toggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
      this.sidenavItems = [{
        text: 'Buttons/Indicators',
        icon: 'mdi-circle-outline',
        expanded: true,
        routes: [{
          text: 'Button',
          route: '/components/button'
        }, {
          text: 'Icon',
          route: '/components/icon'
        }, {
          text: 'Progress',
          route: '/components/progress'
        }]
      }, {
        text: 'Layout',
        icon: 'mdi-view-dashboard',
        expanded: true,
        routes: [{
          text: 'Card',
          route: '/components/card'
        }, {
          text: 'Toolbar',
          route: '/components/toolbar'
        }, {
          text: 'Sidenav',
          route: '/components/sidenav'
        }, {
          text: 'Tab',
          route: '/components/tab'
        }, {
          text: 'Split',
          route: '/components/split'
        }]
      }, {
        text: 'Form Controls',
        icon: 'mdi-keyboard-outline',
        expanded: true,
        routes: [{
          text: 'Input',
          route: '/components/input'
        }, {
          text: 'Select',
          route: '/components/select'
        }, {
          text: 'Checkbox',
          route: '/components/checkbox'
        }, {
          text: 'Slide Toggle',
          route: '/components/slide-toggle'
        }]
      }, {
        text: 'Overlays',
        icon: 'mdi-checkbox-multiple-blank',
        expanded: true,
        routes: [{
          text: 'Tooltip',
          route: '/components/tooltip'
        }, {
          text: 'Popover',
          route: '/components/popover'
        }, {
          text: 'Toast',
          route: '/components/toast'
        }, {
          text: 'Dialog',
          route: '/components/dialog'
        }]
      }, {
        text: 'Code',
        icon: 'mdi-code-tags',
        expanded: true,
        routes: [{
          text: 'Marked',
          route: '/components/marked'
        }, {
          text: 'Code',
          route: '/components/code'
        }]
      }];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 4,
      consts: [[3, "items", "open", "backdropClicked"], ["title", "/components/button", 3, "toggle"], [1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidenav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClicked", function AppComponent_Template_app_sidenav_backdropClicked_0_listener($event) {
            return ctx.toggle$.next(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function AppComponent_Template_app_toolbar_toggle_2_listener($event) {
            return ctx.toggle$.next(!ctx.toggle$.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sidenavItems)("open", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.toggle$));
        }
      },
      directives: [_features_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _features_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100% - 60px);\n  display: block;\n  overflow-y: auto;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIiwiLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _features_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./features/sidenav */
    "./src/app/features/sidenav/index.ts");
    /* harmony import */


    var _features_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/toolbar */
    "./src/app/features/toolbar/index.ts");

    var AppModule = function AppModule(iconService) {
      _classCallCheck(this, AppModule);

      this.iconService = iconService;
      this.iconService.registry('mdi');
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconService"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"], _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"], _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"], _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/sidenav/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/features/sidenav/index.ts ***!
    \*******************************************/

  /*! exports provided: SidenavModule */

  /***/
  function srcAppFeaturesSidenavIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _sidenav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidenav.module */
    "./src/app/features/sidenav/sidenav.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
      return _sidenav_module__WEBPACK_IMPORTED_MODULE_0__["SidenavModule"];
    });
    /***/

  },

  /***/
  "./src/app/features/sidenav/sidenav.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/sidenav/sidenav.component.ts ***!
    \*******************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppFeaturesSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SidenavComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function SidenavComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r6.routes ? _r1 : _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r6));
      }
    }

    function SidenavComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_2_ng_container_1_Template, 2, 4, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
      }
    }

    function SidenavComponent_ng_template_5_div_6_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function SidenavComponent_ng_template_5_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_5_div_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var subItem_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, subItem_r11));
      }
    }

    function SidenavComponent_ng_template_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_5_div_6_ng_container_1_Template, 2, 4, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r8.routes);
      }
    }

    function SidenavComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_ng_template_5_Template_div_click_1_listener($event) {
          var item_r8 = ctx.$implicit;
          return item_r8.expanded = !item_r8.expanded;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "uni-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "uni-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_ng_template_5_div_6_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", item_r8.expanded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r8.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.expanded);
      }
    }

    function SidenavComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r15.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.text);
      }
    }

    var _c1 = ["*"];

    var SidenavComponent =
    /*#__PURE__*/
    function () {
      function SidenavComponent() {
        _classCallCheck(this, SidenavComponent);

        this.items = [];
        this.open = false;
        this.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SidenavComponent, [{
        key: "onOpenChange",
        value: function onOpenChange(e) {
          if (!e) {
            this.backdropClicked.emit();
          }
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
      return new (t || SidenavComponent)();
    };

    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["app-sidenav"]],
      inputs: {
        items: "items",
        open: "open"
      },
      outputs: {
        backdropClicked: "backdropClicked"
      },
      ngContentSelectors: _c1,
      decls: 9,
      vars: 1,
      consts: [[3, "backdropClicked"], ["position", "start", "mode", "side", "color", "secondary", 3, "open", "openChange"], ["uniSidenavBody", ""], ["groupTpl", ""], ["itemTpl", ""], [1, "sidenav--list"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sidenav--list-group"], [1, "sidenav--list-group-text", 3, "click"], [1, "item-icon", 3, "icon"], [1, "text"], ["icon", "mdi-chevron-right", 1, "expand-icon"], ["class", "sidenav--list-group-items", 4, "ngIf"], [1, "sidenav--list-group-items"], ["routerLinkActive", "active", 1, "sidenav--list-item", 3, "routerLink"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClicked", function SidenavComponent_Template_uni_sidenav_container_backdropClicked_0_listener($event) {
            return ctx.backdropClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openChange", function SidenavComponent_Template_uni_sidenav_openChange_1_listener($event) {
            return ctx.onOpenChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_ng_template_2_Template, 2, 1, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_ng_template_5_Template, 7, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.open);
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContainerComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavBodyDirective"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  cursor: pointer;\n  outline: none;\n  padding: 15px;\n  opacity: 0.6;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--darker);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  box-shadow: inset 3px 0 0 0 var(--primary);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]:hover   .sidenav--list-group-text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group.expanded[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: var(--darker);\n  opacity: 0.6;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  margin: 15px 15px 15px 0;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  margin: 15px 15px 15px 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9hYWNlYm8vRG9jdW1lbnRzL0dpdGh1Yi91bmlmb3JtL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb3JlL3N0eWxlcy9fYm94LXNoYWRvdy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNKRjtBRE1FO0VBQ0UsWUFBQTtBQ0pKO0FET007RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0xSO0FET1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFsQkE7RUFtQkEsWUFsQkE7QUNhVjtBRE9VO0VBQ0Usc0NBQUE7QUNMWjtBRFFVO0VBRUUsVUFBQTtFQUNBLDBDQUFBO0FDUFo7QURXUTtFQUNFLGdCQUFBO0FDVFY7QURZWTtFQUNFLFVBQUE7QUNWZDtBRGdCYztFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNkaEI7QURtQlU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFlBbkRGO0VBb0RFLGVBQUE7RUFDQSwrR0V4REs7QUR1Q2pCO0FEbUJZO0VBQ0UsWUF6REo7QUN3Q1Y7QURvQlk7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSx3QkFBQTtBQ2xCZDtBRHFCWTtFQUNFLHdCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ25CZCIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2NvcmUvc3R5bGVzL2JveC1zaGFkb3cnO1xuXG4kcGFkZGluZzogMTVweDtcbiRvcGFjaXR5OiAwLjY7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcblxuICB1bmktc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHVuaS1zaWRlbmF2IHtcbiAgICAgIC5zaWRlbmF2LS1saXN0IHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgLnNpZGVuYXYtLWxpc3QtaXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcbiAgICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcblxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFya2VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwIDAgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gICAgICAgICAgICAgIC5leHBhbmQtaWNvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyKTtcbiAgICAgICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHVuaS1zaGFkb3ctMmRwO1xuXG4gICAgICAgICAgICAuaXRlbS1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAkcGFkZGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luOiAkcGFkZGluZyAkcGFkZGluZyAkcGFkZGluZyAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXhwYW5kLWljb24ge1xuICAgICAgICAgICAgICBtYXJnaW46ICRwYWRkaW5nICRwYWRkaW5nICRwYWRkaW5nIDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgb3BhY2l0eTogMC42O1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrZXIpO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWl0ZW06aG92ZXIsIDpob3N0IHVuaS1zaWRlbmF2LWNvbnRhaW5lciB1bmktc2lkZW5hdiAuc2lkZW5hdi0tbGlzdCAuc2lkZW5hdi0tbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDAgMCB2YXIoLS1wcmltYXJ5KTtcbn1cbjpob3N0IHVuaS1zaWRlbmF2LWNvbnRhaW5lciB1bmktc2lkZW5hdiAuc2lkZW5hdi0tbGlzdCAuc2lkZW5hdi0tbGlzdC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXA6aG92ZXIgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAuZXhwYW5kZWQgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCAuZXhwYW5kLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcik7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCAuaXRlbS1pY29uIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWdyb3VwIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQgLnRleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWdyb3VwIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQgLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn0iLCIkdW5pLXNoYWRvdy0yZHA6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuJHVuaS1zaGFkb3ctNGRwOiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4kdW5pLXNoYWRvdy02ZHA6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4kdW5pLXNoYWRvdy04ZHA6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcblxuJHVuaS1zaGFkb3ctMTZkcDogMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgIDAgIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidenav',
          templateUrl: './sidenav.component.html',
          styleUrls: ['./sidenav.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backdropClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/sidenav/sidenav.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/features/sidenav/sidenav.module.ts ***!
    \****************************************************/

  /*! exports provided: SidenavModule */

  /***/
  function srcAppFeaturesSidenavSidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
      return SidenavModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidenav.component */
    "./src/app/features/sidenav/sidenav.component.ts");

    var SidenavModule = function SidenavModule() {
      _classCallCheck(this, SidenavModule);
    };

    SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SidenavModule
    });
    SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SidenavModule_Factory(t) {
        return new (t || SidenavModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, {
        declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]],
        exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
          exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/toolbar/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/features/toolbar/index.ts ***!
    \*******************************************/

  /*! exports provided: ToolbarModule, ToolbarService */

  /***/
  function srcAppFeaturesToolbarIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _toolbar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./toolbar.module */
    "./src/app/features/toolbar/toolbar.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
      return _toolbar_module__WEBPACK_IMPORTED_MODULE_0__["ToolbarModule"];
    });
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/features/toolbar/toolbar.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToolbarService", function () {
      return _toolbar_service__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"];
    });
    /***/

  },

  /***/
  "./src/app/features/toolbar/toolbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/toolbar/toolbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppFeaturesToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/features/toolbar/toolbar.service.ts");
    /* harmony import */


    var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @uniform/components */
    "../../dist/components/fesm2015/uniform-components.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["uniIcon"];

    function ToolbarComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Author");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "License");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Version");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Alexander Acebo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "MIT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0.0.1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent(toolbarService) {
        _classCallCheck(this, ToolbarComponent);

        this.toolbarService = toolbarService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToolbarComponent, [{
        key: "github",
        value: function github() {
          window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.repository, '_blank');
        }
      }, {
        key: "component",
        value: function component() {
          if (this.toolbarService.component) {
            window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components, "/").concat(this.toolbarService.component), '_blank');
          } else {
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components, '_blank');
          }
        }
      }, {
        key: "documentation",
        value: function documentation() {
          var comp = this.toolbarService.component;
          window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components, "/").concat(comp, "/").concat(comp, ".md"));
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"]));
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      viewQuery: function ToolbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
        }
      },
      inputs: {
        title: "title"
      },
      outputs: {
        toggle: "toggle"
      },
      decls: 14,
      vars: 5,
      consts: [["color", "primary"], ["uni-icon-button", "", 3, "click"], ["icon", "mdi-menu"], ["title", "", "uniTooltip", "View Source", "uniTooltipPosition", "bottom", 1, "uni-toolbar-title", 3, "click"], [1, "uni-toolbar-spacer"], ["uni-icon-button", "", "uniPopoverPosition", "bottom left", 3, "uniPopover", "uniPopoverOrigin"], ["icon", "mdi-information-outline"], ["uniIcon", ""], ["icon", "mdi-github-circle"], ["info", ""], [1, "info"], [1, "labels"], [1, "label"], [1, "values"], [1, "value"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener($event) {
            return ctx.toggle.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "uni-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_3_listener($event) {
            return ctx.component();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "uni-icon", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_10_listener($event) {
            return ctx.github();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "uni-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolbarComponent_ng_template_12_Template, 15, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.toolbarService.$title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uniPopover", _r17)("uniPopoverOrigin", ctx.icon);
        }
      },
      directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTooltipDirective"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniPopoverDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .uni-toolbar-title[_ngcontent-%COMP%] {\n  margin: auto 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .uni-toolbar-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  font-weight: 550;\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0FKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNESjtBREdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRE47QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRFI7QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0FDSFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLnVuaS10b29sYmFyLXRpdGxlIHtcbiAgICBtYXJnaW46IGF1dG8gMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC51bmktdG9vbGJhci1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5sYWJlbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZhbHVlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC51bmktdG9vbGJhci10aXRsZSB7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAudW5pLXRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG46aG9zdCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAuaW5mbyAubGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5pbmZvIC5sYWJlbHMgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbjpob3N0IC5pbmZvIC52YWx1ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmluZm8gLnZhbHVlcyAudmFsdWUge1xuICBmb250LXNpemU6IDE0cHQ7XG59Il19 */"],
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
      }], function () {
        return [{
          type: _toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['uniIcon', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/features/toolbar/toolbar.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/features/toolbar/toolbar.module.ts ***!
    \****************************************************/

  /*! exports provided: ToolbarModule */

  /***/
  function srcAppFeaturesToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar.component */
    "./src/app/features/toolbar/toolbar.component.ts");
    /* harmony import */


    var _toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toolbar.service */
    "./src/app/features/toolbar/toolbar.service.ts");

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
      providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, {
        declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]],
        exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
          exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]],
          providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/toolbar/toolbar.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/features/toolbar/toolbar.service.ts ***!
    \*****************************************************/

  /*! exports provided: ToolbarService */

  /***/
  function srcAppFeaturesToolbarToolbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarService", function () {
      return ToolbarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    });

    var ToolbarService =
    /*#__PURE__*/
    function () {
      function ToolbarService() {
        _classCallCheck(this, ToolbarService);

        this.base = '@uniform/components';
        this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
      }

      _createClass(ToolbarService, [{
        key: "setTitle",
        value: function setTitle(component) {
          this.component$.next(component);
        }
      }, {
        key: "$title",
        get: function get() {
          var _this23 = this;

          return this.component$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) {
            return "".concat(_this23.base).concat(c ? "/".concat(c) : '');
          }));
        }
      }, {
        key: "component",
        get: function get() {
          return this.component$.value;
        }
      }]);

      return ToolbarService;
    }();

    ToolbarService.ɵfac = function ToolbarService_Factory(t) {
      return new (t || ToolbarService)();
    };

    ToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolbarService,
      factory: ToolbarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      github: {
        repository: 'https://github.com/aacebo/uniform',
        components: 'https://github.com/aacebo/uniform/tree/master/projects/components/src/lib',
        raw: 'https://raw.githubusercontent.com/aacebo/uniform/master/projects/components/src/lib'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/aacebo/Documents/Github/uniform/projects/demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map