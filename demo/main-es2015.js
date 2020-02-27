(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/components/fesm2015/uniform-components.js":
/*!********************************************************************************************!*\
  !*** /home/aacebo/Documents/Github/uniform/dist/components/fesm2015/uniform-components.js ***!
  \********************************************************************************************/
/*! exports provided: UNI_DIALOG_CONTENT, UNI_DIALOG_DATA, UNI_DIALOG_DEFAULT_OPTIONS, UNI_DIALOG_OPTIONS, UNI_HOST_COLORS, UNI_HOST_SIZES, UNI_POSITIONS, UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG, UNI_TOAST_OPTIONS, UniButtonComponent, UniButtonModule, UniCardAvatarDirective, UniCardComponent, UniCardContentComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardModule, UniCardSubtitleComponent, UniCardTitleComponent, UniCheckboxComponent, UniCheckboxModule, UniCodeComponent, UniCodeModule, UniColor, UniDialogCloseDirective, UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogModule, UniDialogRef, UniDialogService, UniDialogTitleComponent, UniErrorComponent, UniFormFieldComponent, UniFormFieldControlBase, UniFormFieldModule, UniHintComponent, UniIconComponent, UniIconModule, UniIconService, UniInputComponent, UniInputModule, UniLabelComponent, UniMarkedComponent, UniMarkedModule, UniOptionComponent, UniPopoverComponent, UniPopoverDirective, UniPopoverModule, UniPopoverTrigger, UniPosition, UniPositionBase, UniProgressBarComponent, UniProgressMode, UniProgressModule, UniProgressSpinnerComponent, UniResizeObserverDirective, UniResizeObserverModule, UniResizeObserverService, UniSelectComponent, UniSelectModule, UniSelectPanelComponent, UniSidenavBodyDirective, UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavMode, UniSidenavModule, UniSidenavPosition, UniSidenavState, UniSize, UniSlideToggleComponent, UniSlideToggleModule, UniSplitAreaComponent, UniSplitComponent, UniSplitDirection, UniSplitHandleComponent, UniSplitModule, UniTabBodyDirective, UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabModule, UniToastComponent, UniToastModule, UniToastPosition, UniToastRef, UniToastService, UniToastType, UniToolbarComponent, UniToolbarModule, UniTooltipComponent, UniTooltipDirective, UniTooltipModule, getUniPosition, uniColors, uniFormFieldProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_CONTENT", function() { return UNI_DIALOG_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_DATA", function() { return UNI_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_DEFAULT_OPTIONS", function() { return UNI_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_DIALOG_OPTIONS", function() { return UNI_DIALOG_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_HOST_COLORS", function() { return UNI_HOST_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_HOST_SIZES", function() { return UNI_HOST_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_POSITIONS", function() { return UNI_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_TOAST_CONFIG", function() { return UNI_TOAST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_TOAST_DEFAULT_CONFIG", function() { return UNI_TOAST_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNI_TOAST_OPTIONS", function() { return UNI_TOAST_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniButtonComponent", function() { return UniButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniButtonModule", function() { return UniButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardAvatarDirective", function() { return UniCardAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardComponent", function() { return UniCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardContentComponent", function() { return UniCardContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardFooterComponent", function() { return UniCardFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardHeaderComponent", function() { return UniCardHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardModule", function() { return UniCardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardSubtitleComponent", function() { return UniCardSubtitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCardTitleComponent", function() { return UniCardTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCheckboxComponent", function() { return UniCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCheckboxModule", function() { return UniCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCodeComponent", function() { return UniCodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniCodeModule", function() { return UniCodeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniColor", function() { return UniColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogCloseDirective", function() { return UniDialogCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogContainerComponent", function() { return UniDialogContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogContentComponent", function() { return UniDialogContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogFooterComponent", function() { return UniDialogFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogHeaderComponent", function() { return UniDialogHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogModule", function() { return UniDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogRef", function() { return UniDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogService", function() { return UniDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniDialogTitleComponent", function() { return UniDialogTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniErrorComponent", function() { return UniErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniFormFieldComponent", function() { return UniFormFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniFormFieldControlBase", function() { return UniFormFieldControlBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniFormFieldModule", function() { return UniFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniHintComponent", function() { return UniHintComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniIconComponent", function() { return UniIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniIconModule", function() { return UniIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniIconService", function() { return UniIconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniInputComponent", function() { return UniInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniInputModule", function() { return UniInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniLabelComponent", function() { return UniLabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniMarkedComponent", function() { return UniMarkedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniMarkedModule", function() { return UniMarkedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniOptionComponent", function() { return UniOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPopoverComponent", function() { return UniPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPopoverDirective", function() { return UniPopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPopoverModule", function() { return UniPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPopoverTrigger", function() { return UniPopoverTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPosition", function() { return UniPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniPositionBase", function() { return UniPositionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniProgressBarComponent", function() { return UniProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniProgressMode", function() { return UniProgressMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniProgressModule", function() { return UniProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniProgressSpinnerComponent", function() { return UniProgressSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniResizeObserverDirective", function() { return UniResizeObserverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniResizeObserverModule", function() { return UniResizeObserverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniResizeObserverService", function() { return UniResizeObserverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSelectComponent", function() { return UniSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSelectModule", function() { return UniSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSelectPanelComponent", function() { return UniSelectPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavBodyDirective", function() { return UniSidenavBodyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavComponent", function() { return UniSidenavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavContainerComponent", function() { return UniSidenavContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavContentComponent", function() { return UniSidenavContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavMode", function() { return UniSidenavMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavModule", function() { return UniSidenavModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavPosition", function() { return UniSidenavPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSidenavState", function() { return UniSidenavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSize", function() { return UniSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSlideToggleComponent", function() { return UniSlideToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSlideToggleModule", function() { return UniSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSplitAreaComponent", function() { return UniSplitAreaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSplitComponent", function() { return UniSplitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSplitDirection", function() { return UniSplitDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSplitHandleComponent", function() { return UniSplitHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniSplitModule", function() { return UniSplitModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTabBodyDirective", function() { return UniTabBodyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTabComponent", function() { return UniTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTabGroupComponent", function() { return UniTabGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTabLabelComponent", function() { return UniTabLabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTabModule", function() { return UniTabModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastComponent", function() { return UniToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastModule", function() { return UniToastModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastPosition", function() { return UniToastPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastRef", function() { return UniToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastService", function() { return UniToastService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToastType", function() { return UniToastType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToolbarComponent", function() { return UniToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniToolbarModule", function() { return UniToolbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTooltipComponent", function() { return UniTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTooltipDirective", function() { return UniTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniTooltipModule", function() { return UniTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniPosition", function() { return getUniPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniColors", function() { return uniColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniFormFieldProvider", function() { return uniFormFieldProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! marked */ "../../node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js */ "../../node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! resize-observer-polyfill */ "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");















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

const UNI_HOST_COLORS = {
    '[class.primary]': `color === "${UniColor.Primary}"`,
    '[class.success]': `color === "${UniColor.Success}"`,
    '[class.warning]': `color === "${UniColor.Warning}"`,
    '[class.danger]': `color === "${UniColor.Danger}"`,
};
function uniColors(color) {
    return {
        primary: color === UniColor.Primary,
        success: color === UniColor.Success,
        warning: color === UniColor.Warning,
        danger: color === UniColor.Danger,
    };
}

const UNI_HOST_SIZES = {
    '[class.small]': `size === "${UniSize.Small}"`,
    '[class.large]': `size === "${UniSize.Large}"`,
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

const UNI_POSITION_OFFSET = 16;
function getUniPosition(position) {
    let originX = 'center';
    let originY = 'top';
    let overlayX = 'center';
    let overlayY = 'bottom';
    let offsetX = 0;
    if (position === UniPosition.Bottom) {
        originY = 'bottom';
        overlayX = 'center';
        overlayY = 'top';
    }
    else if (position === UniPosition.Left) {
        originX = 'start';
        originY = 'center';
        overlayX = 'end';
        overlayY = 'center';
    }
    else if (position === UniPosition.Right) {
        originX = 'end';
        originY = 'center';
        overlayX = 'start';
        overlayY = 'center';
    }
    else if (position === UniPosition.BottomLeft) {
        originY = 'bottom';
        overlayX = 'end';
        overlayY = 'top';
        offsetX = UNI_POSITION_OFFSET;
    }
    else if (position === UniPosition.BottomRight) {
        originY = 'bottom';
        overlayX = 'start';
        overlayY = 'top';
        offsetX = UNI_POSITION_OFFSET * -1;
    }
    else if (position === UniPosition.TopLeft) {
        overlayX = 'end';
        offsetX = UNI_POSITION_OFFSET;
    }
    else if (position === UniPosition.TopRight) {
        overlayX = 'start';
        offsetX = UNI_POSITION_OFFSET * -1;
    }
    return {
        originX,
        originY,
        overlayX,
        overlayY,
        offsetX,
    };
}

const UNI_POSITIONS = {
    '[class.top]': 'position === "top"',
    '[class.bottom]': 'position === "bottom"',
    '[class.left]': 'position === "left"',
    '[class.right]': 'position === "right"',
    '[class.bottom-left]': 'position === "bottom left"',
    '[class.bottom-right]': 'position === "bottom right"',
    '[class.top-left]': 'position === "top left"',
    '[class.top-right]': 'position === "top right"',
};

class UniPositionBase {
    get isString() {
        return typeof this.content === 'string';
    }
}
UniPositionBase.ɵfac = function UniPositionBase_Factory(t) { return new (t || UniPositionBase)(); };
UniPositionBase.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniPositionBase, inputs: { content: "content", position: "position" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPositionBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], null, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function UniTooltipComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function UniTooltipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r2.content, "\n");
} }
class UniTooltipComponent extends UniPositionBase {
}
UniTooltipComponent.ɵfac = function UniTooltipComponent_Factory(t) { return ɵUniTooltipComponent_BaseFactory(t || UniTooltipComponent); };
UniTooltipComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniTooltipComponent, selectors: [["uni-tooltip"]], hostAttrs: [1, "uni-tooltip"], hostVars: 16, hostBindings: function UniTooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["default", ""]], template: function UniTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniTooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniTooltipComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.isString ? _r1 : ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%]{max-width:250px;overflow-wrap:break-word;padding:10px;border-radius:3px;font-size:12px;font-weight:500;background-color:var(--black);color:var(--white);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--black);border:2px solid var(--black)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--black);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--black);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"], changeDetection: 0 });
const ɵUniTooltipComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniTooltipComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.scss'],
                host: Object.assign({ class: 'uni-tooltip' }, UNI_POSITIONS),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

class UniTooltipDirective {
    constructor(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.panelClass = 'uni-tooltip-panel';
    }
    get _vertical() {
        return this.position === UniPosition.Top ||
            this.position === UniPosition.Bottom;
    }
    get _positionStrategy() {
        return this._overlay
            .position()
            .flexibleConnectedTo(this.origin || this._el)
            .withFlexibleDimensions(true)
            .withPush(this._vertical ? true : false)
            .withViewportMargin(8)
            .withPositions([getUniPosition(this.position)]);
    }
    ngOnInit() {
        const positionStrategy = this._positionStrategy;
        this._overlayRef = this._overlay.create({
            positionStrategy,
            panelClass: this.panelClass,
        });
    }
    onMouseEnter() {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniTooltipComponent);
            const ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    }
    onMouseLeave() {
        this._overlayRef.detach();
    }
}
UniTooltipDirective.ɵfac = function UniTooltipDirective_Factory(t) { return new (t || UniTooltipDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniTooltipDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniTooltipDirective, selectors: [["", "uniTooltip", ""]], hostBindings: function UniTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mouseenter", function UniTooltipDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniTooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
    } }, inputs: { content: ["uniTooltip", "content"], disabled: ["uniTooltipDisabled", "disabled"], position: ["uniTooltipPosition", "position"], panelClass: ["uniTooltipPanelClass", "panelClass"], origin: ["uniTooltipOrigin", "origin"] }, exportAs: ["uniTooltip"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[uniTooltip]',
                exportAs: 'uniTooltip',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                },
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniTooltip']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniTooltipDisabled']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniTooltipPosition']
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniTooltipPanelClass']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniTooltipOrigin']
        }] }); })();

class UniTooltipModule {
}
UniTooltipModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniTooltipModule });
UniTooltipModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniTooltipModule_Factory(t) { return new (t || UniTooltipModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniTooltipModule, { declarations: [UniTooltipComponent, UniTooltipDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]], exports: [UniTooltipDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniTooltipComponent, UniTooltipDirective],
                entryComponents: [UniTooltipComponent],
                exports: [UniTooltipDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
            }]
    }], null, null); })();

function UniPopoverComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function UniPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r5.content, "\n");
} }
class UniPopoverComponent extends UniPositionBase {
}
UniPopoverComponent.ɵfac = function UniPopoverComponent_Factory(t) { return ɵUniPopoverComponent_BaseFactory(t || UniPopoverComponent); };
UniPopoverComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniPopoverComponent, selectors: [["uni-popover"]], hostAttrs: [1, "uni-popover"], hostVars: 16, hostBindings: function UniPopoverComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["default", ""]], template: function UniPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniPopoverComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniPopoverComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.isString ? _r4 : ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%]{font-size:12px;max-width:250px;padding:15px;overflow-wrap:break-word;border-radius:3px;background-color:var(--white);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4);color:var(--black);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--white);border:2px solid var(--white)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--white);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--white);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"], changeDetection: 0 });
const ɵUniPopoverComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniPopoverComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-popover',
                templateUrl: './popover.component.html',
                styleUrls: ['./popover.component.scss'],
                host: Object.assign({ class: 'uni-popover' }, UNI_POSITIONS),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

var UniPopoverTrigger;
(function (UniPopoverTrigger) {
    UniPopoverTrigger["Click"] = "click";
    UniPopoverTrigger["Hover"] = "hover";
})(UniPopoverTrigger || (UniPopoverTrigger = {}));

class UniPopoverDirective {
    constructor(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.trigger = UniPopoverTrigger.Click;
        this.panelClass = 'uni-popover-panel';
        this.hasBackdrop = true;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
    }
    get _vertical() {
        return this.position === UniPosition.Top ||
            this.position === UniPosition.Bottom;
    }
    get _positionStrategy() {
        return this._overlay
            .position()
            .flexibleConnectedTo(this.origin || this._el)
            .withFlexibleDimensions(true)
            .withPush(this._vertical ? true : false)
            .withViewportMargin(8)
            .withPositions([getUniPosition(this.position)]);
    }
    ngOnInit() {
        this._overlayRef = this._overlay.create({
            positionStrategy: this._positionStrategy,
            panelClass: this.panelClass,
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass,
        });
        this._overlayRef.backdropClick().subscribe(() => {
            this._hide();
        });
    }
    onMouseEnter() {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._show();
        }
    }
    onMouseLeave() {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._hide();
        }
    }
    onClick() {
        if (this.trigger === UniPopoverTrigger.Click) {
            if (this._overlayRef.hasAttached()) {
                this._hide();
            }
            else {
                this._show();
            }
        }
    }
    _show() {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniPopoverComponent);
            const ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    }
    _hide() {
        this._overlayRef.detach();
    }
}
UniPopoverDirective.ɵfac = function UniPopoverDirective_Factory(t) { return new (t || UniPopoverDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniPopoverDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniPopoverDirective, selectors: [["", "uniPopover", ""]], hostBindings: function UniPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mouseenter", function UniPopoverDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniPopoverDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function UniPopoverDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } }, inputs: { content: ["uniPopover", "content"], disabled: ["uniPopoverDisabled", "disabled"], position: ["uniPopoverPosition", "position"], trigger: ["uniPopoverTrigger", "trigger"], panelClass: ["uniPopoverPanelClass", "panelClass"], hasBackdrop: ["uniPopoverHasBackdrop", "hasBackdrop"], backdropClass: ["uniPopoverBackdropClass", "backdropClass"], origin: ["uniPopoverOrigin", "origin"] }, exportAs: ["uniPopover"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[uniPopover]',
                exportAs: 'uniPopover',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopover']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverDisabled']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverPosition']
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverTrigger']
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverPanelClass']
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverHasBackdrop']
        }], backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverBackdropClass']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['uniPopoverOrigin']
        }] }); })();

class UniPopoverModule {
}
UniPopoverModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniPopoverModule });
UniPopoverModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniPopoverModule_Factory(t) { return new (t || UniPopoverModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniPopoverModule, { declarations: [UniPopoverComponent, UniPopoverDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]], exports: [UniPopoverDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniPopoverComponent, UniPopoverDirective],
                entryComponents: [UniPopoverComponent],
                exports: [UniPopoverDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
            }]
    }], null, null); })();

const UNI_TOAST_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_TOAST_OPTIONS');

const UNI_TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_TOAST_CONFIG');
const UNI_TOAST_DEFAULT_CONFIG = {
    progressBar: true,
    tapToDismiss: true,
    margin: 10,
};

class UniToastRef {
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    get closed$() {
        return this._closed$.asObservable();
    }
    get config() {
        return this._overlayRef.getConfig();
    }
    get position() {
        return this._overlayRef.overlayElement.getBoundingClientRect();
    }
    dismiss() {
        this._closed$.next();
        this._overlayRef.detach();
    }
    updatePosition(strategy) {
        this._overlayRef.updatePositionStrategy(strategy);
    }
}

function UniToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r6.options.title, " ");
} }
function UniToastComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, ctx_r7.progress$), "%");
} }
class UniToastComponent {
    constructor(config, options, _toastRef) {
        this.config = config;
        this.options = options;
        this._toastRef = _toastRef;
        this.progress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._ticks = 25;
        this._total = 100;
    }
    get _tick() {
        return (this._total / this.options.duration) * this._ticks;
    }
    ngOnInit() {
        if (this.options.duration) {
            this._timeout = setTimeout(() => {
                this._toastRef.dismiss();
            }, this.options.duration);
            if (this.config.progressBar) {
                this._interval = setInterval(() => {
                    this.progress$.next(this.progress$.value + this._tick);
                }, this._ticks);
            }
        }
    }
    ngOnDestroy() {
        if (this._timeout) {
            clearTimeout(this._timeout);
            if (this._interval) {
                clearInterval(this._interval);
            }
        }
    }
    onClick() {
        if (this.config.tapToDismiss) {
            this._toastRef.dismiss();
        }
    }
}
UniToastComponent.ɵfac = function UniToastComponent_Factory(t) { return new (t || UniToastComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_TOAST_OPTIONS), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniToastRef)); };
UniToastComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniToastComponent, selectors: [["uni-toast"]], hostAttrs: [1, "uni-toast"], hostVars: 10, hostBindings: function UniToastComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniToastComponent_click_HostBindingHandler($event) { return ctx.onClick(); });
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("info", ctx.options.type === "info")("success", ctx.options.type === "success")("warning", ctx.options.type === "warning")("danger", ctx.options.type === "danger")("dismissable", ctx.config.tapToDismiss);
    } }, exportAs: ["uniToast"], decls: 5, vars: 3, consts: [[1, "uni-toast-content"], ["class", "uni-toast-title", 4, "ngIf"], [1, "uni-toast-message"], ["class", "uni-toast-progressbar", 3, "width", 4, "ngIf"], [1, "uni-toast-title"], [1, "uni-toast-progressbar"]], template: function UniToastComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniToastComponent_div_1_Template, 2, 1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, UniToastComponent_div_4_Template, 2, 4, "div", 3);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.options.title);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.options.message, " ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.config.progressBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], styles: ["@-webkit-keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}@keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}[_nghost-%COMP%]{visibility:hidden;font-size:12pt;color:var(--white);border-radius:3px;min-width:200px;-webkit-animation:.5s both uniFadeIn;animation:.5s both uniFadeIn}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;padding:15px 20px}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]   .uni-toast-title[_ngcontent-%COMP%]{font-size:14pt;font-weight:550}[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{height:5px;border-bottom-left-radius:3px}.dismissable[_nghost-%COMP%]{cursor:pointer}.info[_nghost-%COMP%]{background-color:var(--primary)}.info[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--primary-l20)}.info[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--primary-l20)}.success[_nghost-%COMP%]{background-color:var(--success)}.success[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--success-l20)}.success[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--success-l20)}.warning[_nghost-%COMP%]{background-color:var(--warning)}.warning[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--warning-l20)}.warning[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--warning-l20)}.danger[_nghost-%COMP%]{background-color:var(--danger)}.danger[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--danger-l20)}.danger[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--danger-l20)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-toast',
                exportAs: 'uniToast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss'],
                host: {
                    class: 'uni-toast',
                    '[class.info]': 'options.type === "info"',
                    '[class.success]': 'options.type === "success"',
                    '[class.warning]': 'options.type === "warning"',
                    '[class.danger]': 'options.type === "danger"',
                    '[class.dismissable]': 'config.tapToDismiss',
                    '(click)': 'onClick()',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [UNI_TOAST_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [UNI_TOAST_OPTIONS]
            }] }, { type: UniToastRef }]; }, null); })();

var UniToastPosition;
(function (UniToastPosition) {
    UniToastPosition["TopLeft"] = "top left";
    UniToastPosition["TopRight"] = "top right";
    UniToastPosition["BottomLeft"] = "bottom left";
    UniToastPosition["BottomRight"] = "bottom right";
})(UniToastPosition || (UniToastPosition = {}));

class UniToastService {
    constructor(_config, _overlay) {
        this._config = _config;
        this._overlay = _overlay;
        this._index = -1;
        this._toasts = [];
    }
    get _id() {
        this._index++;
        return this._index;
    }
    open(options) {
        return this._create(UniToastComponent, options);
    }
    create(component, options) {
        return this._create(component, options);
    }
    remove(id) {
        for (let i = 0; i < this._toasts.length; i++) {
            if (this._toasts[i].id === id) {
                this._toasts.splice(i, 1);
                return i;
            }
        }
        return -1;
    }
    find(id) {
        return this._toasts.find(t => t.id === id);
    }
    _create(component, options) {
        const latest = this._getLatestByPosition(options.position);
        const position = latest ? latest.ref.position : undefined;
        const overlayRef = this._overlay.create({
            panelClass: options.panelClass,
            positionStrategy: this._getPositionStrategy(options.position, position),
        });
        const toastRef = new UniToastRef(overlayRef);
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](component, null, this._getInjector(toastRef, options));
        const instance = overlayRef.attach(portal).instance;
        const toast = {
            id: this._id,
            type: options.type,
            position: options.position,
            component: instance,
            ref: toastRef,
        };
        toastRef.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            this.remove(toast.id);
            this._updatePositions(toast.position);
        });
        this._toasts.push(toast);
        return toast;
    }
    _getInjector(ref, options) {
        const tokens = new WeakMap();
        tokens.set(UniToastRef, ref);
        tokens.set(UNI_TOAST_OPTIONS, options);
        tokens.set(UNI_TOAST_CONFIG, this._config);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](null, tokens);
    }
    _getPositionStrategy(position, latest) {
        const pb = this._overlay.position().global();
        if (position === UniToastPosition.TopLeft) {
            return pb.top(this._getLatestMargin(position, latest)).left(`${this._config.margin}px`);
        }
        else if (position === UniToastPosition.TopRight) {
            return pb.top(this._getLatestMargin(position, latest)).right(`${this._config.margin}px`);
        }
        else if (position === UniToastPosition.BottomLeft) {
            if (!latest) {
                return pb.bottom(this._getLatestMargin(position, latest)).left(`${this._config.margin}px`);
            }
            else {
                return pb.top(this._getLatestMargin(position, latest)).left(`${this._config.margin}px`);
            }
        }
        if (!latest) {
            return pb.bottom(this._getLatestMargin(position, latest)).right(`${this._config.margin}px`);
        }
        else {
            return pb.top(this._getLatestMargin(position, latest)).right(`${this._config.margin}px`);
        }
    }
    _getLatestMargin(position, latest) {
        const key = (position === UniToastPosition.TopLeft || position === UniToastPosition.TopRight) ? 'bottom' : 'top';
        if (key === 'bottom') {
            return latest ? `${latest[key] + this._config.margin}px` : `${this._config.margin}px`;
        }
        else {
            return latest ? `${latest[key] - latest.height - this._config.margin}px` : `${this._config.margin}px`;
        }
    }
    _getToastsByPosition(position) {
        return this._toasts.filter(t => t.position === position)
            .sort((a, b) => a.id - b.id);
    }
    _getLatestByPosition(position) {
        const toasts = this._getToastsByPosition(position);
        return toasts[toasts.length - 1];
    }
    _updatePositions(position) {
        const toasts = this._getToastsByPosition(position);
        for (let i = 0; i < toasts.length; i++) {
            toasts[i].ref.updatePosition(this._getPositionStrategy(toasts[i].position, toasts[i - 1] ? toasts[i - 1].ref.position : undefined));
        }
    }
}
UniToastService.ɵfac = function UniToastService_Factory(t) { return new (t || UniToastService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(UNI_TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"])); };
UniToastService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: UniToastService, factory: UniToastService.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [UNI_TOAST_CONFIG]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }]; }, null); })();

class UniToastModule {
    static forRoot(config) {
        return {
            ngModule: UniToastModule,
            providers: [{
                    provide: UNI_TOAST_CONFIG,
                    useValue: config,
                }],
        };
    }
}
UniToastModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniToastModule });
UniToastModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniToastModule_Factory(t) { return new (t || UniToastModule)(); }, providers: [
        UniToastService,
        {
            provide: UNI_TOAST_CONFIG,
            useValue: UNI_TOAST_DEFAULT_CONFIG,
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniToastModule, { declarations: [UniToastComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniToastComponent],
                entryComponents: [UniToastComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
                providers: [
                    UniToastService,
                    {
                        provide: UNI_TOAST_CONFIG,
                        useValue: UNI_TOAST_DEFAULT_CONFIG,
                    },
                ],
            }]
    }], null, null); })();

var UniToastType;
(function (UniToastType) {
    UniToastType["Info"] = "info";
    UniToastType["Success"] = "success";
    UniToastType["Warning"] = "warning";
    UniToastType["Danger"] = "danger";
})(UniToastType || (UniToastType = {}));

const UNI_DIALOG_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_CONTENT');

const _c0 = ["vc"];
class UniDialogContainerComponent {
    constructor(_content, _resolver) {
        this._content = _content;
        this._resolver = _resolver;
    }
    ngAfterViewInit() {
        const factory = this._resolver.resolveComponentFactory(this._content);
        this.vc.clear();
        const ref = this.vc.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}
UniDialogContainerComponent.ɵfac = function UniDialogContainerComponent_Factory(t) { return new (t || UniDialogContainerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UNI_DIALOG_CONTENT), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
UniDialogContainerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniDialogContainerComponent, selectors: [["uni-dialog-container"]], viewQuery: function UniDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.vc = _t.first);
    } }, hostAttrs: [1, "uni-dialog-container"], exportAs: ["uniDialogContainer"], decls: 2, vars: 0, consts: [["vc", ""]], template: function UniDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, null, 0);
    } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%;background-color:var(--white);border-radius:10px;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-dialog-container',
                exportAs: 'uniDialogContainer',
                templateUrl: './dialog-container.component.html',
                styleUrls: ['./dialog-container.component.scss'],
                host: {
                    class: 'uni-dialog-container',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [UNI_DIALOG_CONTENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { vc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();

const _c0$1 = ["*"];
class UniDialogContentComponent {
}
UniDialogContentComponent.ɵfac = function UniDialogContentComponent_Factory(t) { return new (t || UniDialogContentComponent)(); };
UniDialogContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniDialogContentComponent, selectors: [["uni-dialog-content"]], hostAttrs: [1, "uni-dialog-content"], exportAs: ["uniDialogContent"], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function UniDialogContentComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: ["[_nghost-%COMP%]{display:block;padding:20px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-dialog-content',
                exportAs: 'uniDialogContent',
                templateUrl: './dialog-content.component.html',
                styleUrls: ['./dialog-content.component.scss'],
                host: {
                    class: 'uni-dialog-content',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

const _c0$2 = ["*"];
class UniDialogFooterComponent {
}
UniDialogFooterComponent.ɵfac = function UniDialogFooterComponent_Factory(t) { return new (t || UniDialogFooterComponent)(); };
UniDialogFooterComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniDialogFooterComponent, selectors: [["uni-dialog-footer"]], hostAttrs: [1, "uni-dialog-footer"], exportAs: ["uniDialogFooter"], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function UniDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: ["[_nghost-%COMP%]{display:block;text-align:right;padding-bottom:20px;padding-left:20px;padding-right:20px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-dialog-footer',
                exportAs: 'uniDialogFooter',
                templateUrl: './dialog-footer.component.html',
                styleUrls: ['./dialog-footer.component.scss'],
                host: {
                    class: 'uni-dialog-footer',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

const _c0$3 = [[["uni-dialog-title"]]];
const _c1 = ["uni-dialog-title"];
class UniDialogHeaderComponent {
}
UniDialogHeaderComponent.ɵfac = function UniDialogHeaderComponent_Factory(t) { return new (t || UniDialogHeaderComponent)(); };
UniDialogHeaderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniDialogHeaderComponent, selectors: [["uni-dialog-header"]], hostAttrs: [1, "uni-dialog-header"], exportAs: ["uniDialogHeader"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function UniDialogHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: ["[_nghost-%COMP%]{display:block;padding-top:20px;padding-left:20px;padding-right:20px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-dialog-header',
                exportAs: 'uniDialogHeader',
                templateUrl: './dialog-header.component.html',
                styleUrls: ['./dialog-header.component.scss'],
                host: {
                    class: 'uni-dialog-header',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

const _c0$4 = ["*"];
class UniDialogTitleComponent {
}
UniDialogTitleComponent.ɵfac = function UniDialogTitleComponent_Factory(t) { return new (t || UniDialogTitleComponent)(); };
UniDialogTitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniDialogTitleComponent, selectors: [["uni-dialog-title"]], hostAttrs: [1, "uni-dialog-title"], exportAs: ["uniDialogTitle"], ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function UniDialogTitleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: ["[_nghost-%COMP%]{font-size:20pt}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-dialog-title',
                exportAs: 'uniDialogTitle',
                templateUrl: './dialog-title.component.html',
                styleUrls: ['./dialog-title.component.scss'],
                host: {
                    class: 'uni-dialog-title',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();

class UniDialogRef {
    constructor(_overlayRef, _disableClose) {
        this._overlayRef = _overlayRef;
        this._disableClose = _disableClose;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        if (!this._disableClose) {
            this._overlayRef.backdropClick()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(() => this.dismiss());
        }
    }
    get closed$() {
        return this._closed$.asObservable();
    }
    dismiss() {
        this._closed$.next();
        this._overlayRef.detach();
    }
}

class UniDialogCloseDirective {
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    onClick() {
        this._dialogRef.dismiss();
    }
}
UniDialogCloseDirective.ɵfac = function UniDialogCloseDirective_Factory(t) { return new (t || UniDialogCloseDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniDialogRef)); };
UniDialogCloseDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniDialogCloseDirective, selectors: [["", "uniDialogClose", ""]], hostBindings: function UniDialogCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniDialogCloseDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogCloseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[uniDialogClose]',
                host: {
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: UniDialogRef }]; }, null); })();

const UNI_DIALOG_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_OPTIONS');
const UNI_DIALOG_DEFAULT_OPTIONS = {
    width: 'auto',
    height: 'auto',
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-dark-backdrop',
};

const UNI_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNI_DIALOG_DATA');

class UniDialogService {
    constructor(_overlay, _resolver) {
        this._overlay = _overlay;
        this._resolver = _resolver;
        this._index = -1;
        this._dialogs = [];
    }
    get _id() {
        this._index++;
        return this._index;
    }
    find(id) {
        return this._dialogs.find(t => t.id === id);
    }
    remove(id) {
        for (let i = 0; i < this._dialogs.length; i++) {
            if (this._dialogs[i].id === id) {
                this._dialogs.splice(i, 1);
                return i;
            }
        }
        return -1;
    }
    open(content, options) {
        const overlayRef = this._overlay.create(Object.assign(Object.assign(Object.assign({}, UNI_DIALOG_DEFAULT_OPTIONS), options), { positionStrategy: this._getPositionStrategy() }));
        const dialogRef = new UniDialogRef(overlayRef, options.disableClose);
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](UniDialogContainerComponent, undefined, this._getInjector(dialogRef, content, options));
        overlayRef.attach(portal);
        const dialog = {
            id: this._id,
            ref: dialogRef,
        };
        dialogRef.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            this.remove(dialog.id);
        });
        this._dialogs.push(dialog);
        return dialog;
    }
    _getInjector(ref, content, options) {
        const tokens = new WeakMap();
        tokens.set(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], this._resolver);
        tokens.set(UniDialogRef, ref);
        tokens.set(UNI_DIALOG_OPTIONS, options);
        tokens.set(UNI_DIALOG_CONTENT, content);
        if (options.data) {
            tokens.set(UNI_DIALOG_DATA, options.data);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](null, tokens);
    }
    _getPositionStrategy() {
        const pb = this._overlay.position().global();
        return pb.centerVertically().centerHorizontally();
    }
}
UniDialogService.ɵfac = function UniDialogService_Factory(t) { return new (t || UniDialogService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
UniDialogService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: UniDialogService, factory: UniDialogService.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();

const declarations = [
    UniDialogContainerComponent,
    UniDialogContentComponent,
    UniDialogFooterComponent,
    UniDialogHeaderComponent,
    UniDialogTitleComponent,
    UniDialogCloseDirective,
];
class UniDialogModule {
}
UniDialogModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniDialogModule });
UniDialogModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniDialogModule_Factory(t) { return new (t || UniDialogModule)(); }, providers: [UniDialogService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniDialogModule, { declarations: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]], exports: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations,
                exports: declarations,
                entryComponents: [UniDialogContainerComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
                providers: [UniDialogService],
            }]
    }], null, null); })();

const _c0$5 = ["*"];
class UniLabelComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
    }
    get for() { return this._for; }
    set for(v) {
        if (v !== this._for) {
            this._for = v;
            this._cdr.markForCheck();
        }
    }
}
UniLabelComponent.ɵfac = function UniLabelComponent_Factory(t) { return new (t || UniLabelComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniLabelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniLabelComponent, selectors: [["uni-label"]], hostAttrs: [1, "uni-label"], exportAs: ["uniLabel"], ngContentSelectors: _c0$5, decls: 2, vars: 1, consts: [[3, "for"]], template: function UniLabelComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.for);
    } }, styles: [".uni-label{position:absolute;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-label label{cursor:text}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-label',
                exportAs: 'uniLabel',
                templateUrl: './label.component.html',
                styleUrls: ['./label.component.scss'],
                host: { class: 'uni-label' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();

const _c0$6 = ["*"];
class UniErrorComponent {
}
UniErrorComponent.ɵfac = function UniErrorComponent_Factory(t) { return new (t || UniErrorComponent)(); };
UniErrorComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniErrorComponent, selectors: [["uni-error"]], hostAttrs: [1, "uni-error"], exportAs: ["uniError"], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function UniErrorComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-error{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-error',
                exportAs: 'uniError',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./error.component.scss'],
                host: { class: 'uni-error' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$7 = [[["uni-label"]], [["uni-select"]], [["", "uniInput", ""]], [["uni-hint"]], [["uni-error"]]];
const _c1$1 = ["uni-label", "uni-select", "[uniInput]", "uni-hint", "uni-error"];
class UniFormFieldComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.color = UniColor.Primary;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get label() { return this._label; }
    set label(v) {
        if (v !== this._label) {
            this._label = v;
            if (this._label) {
                this._label.for = this._id;
            }
        }
    }
    get error() { return this._error; }
    set error(v) {
        if (v !== this._error) {
            this._error = v;
        }
    }
    get id() { return this._id; }
    set id(v) {
        if (v !== this._id) {
            this._id = v;
            if (this._label) {
                this._label.for = this._id;
            }
            this.cdr.markForCheck();
        }
    }
    get focused() { return this._focused; }
    set focused(v) {
        if (v !== this._focused) {
            this._focused = v;
            this.cdr.markForCheck();
        }
    }
    get hasValue() { return this._hasValue; }
    set hasValue(v) {
        if (v !== this._hasValue) {
            this._hasValue = v;
            this.cdr.markForCheck();
        }
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        if (v !== this._disabled) {
            this._disabled = v;
            this.cdr.markForCheck();
        }
    }
}
UniFormFieldComponent.ɵfac = function UniFormFieldComponent_Factory(t) { return new (t || UniFormFieldComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniFormFieldComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniFormFieldComponent, selectors: [["uni-form-field"]], contentQueries: function UniFormFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniLabelComponent, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniErrorComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.label = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.error = _t.first);
    } }, hostAttrs: [1, "uni-form-field"], hostVars: 18, hostBindings: function UniFormFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniFormFieldComponent_click_HostBindingHandler($event) { return ctx.clicked.emit($event); });
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("focused", ctx.focused)("has-value", ctx.hasValue)("has-label", !!ctx.label)("has-error", !!ctx.error)("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniFormField"], ngContentSelectors: _c1$1, decls: 5, vars: 0, template: function UniFormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(3, 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4, 4);
    } }, styles: [".uni-form-field{display:inline-block;position:relative;border-radius:5px;border:1px solid var(--white-a50);padding:15px 10px;margin-bottom:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.uni-form-field:hover{box-shadow:inset 0 0 0 1px var(--white)}.uni-form-field.disabled{border-style:dotted;opacity:.8}.uni-form-field.disabled:hover{box-shadow:none!important}.uni-form-field.has-value .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75)}.uni-form-field.has-label.focused .uni-input,.uni-form-field.has-label.focused .uni-select-placeholder,.uni-form-field.has-label.has-value .uni-input,.uni-form-field.has-label.has-value .uni-select-placeholder{opacity:1}.uni-form-field.has-label .uni-input,.uni-form-field.has-label .uni-select-placeholder{opacity:0}.uni-form-field.has-error{border-color:var(--danger)}.uni-form-field.has-error:hover{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.has-error .uni-input{caret-color:var(--danger)!important}.uni-form-field.has-error .uni-hint{display:none}.uni-form-field.has-error .uni-label label{color:var(--danger)}.uni-form-field.primary.focused{box-shadow:inset 0 0 0 1px var(--primary)}.uni-form-field.primary.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.primary.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--primary)}.uni-form-field.primary .uni-input{caret-color:var(--primary)}.uni-form-field.success.focused{box-shadow:inset 0 0 0 1px var(--success)}.uni-form-field.success.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.success.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--success)}.uni-form-field.success .uni-input{caret-color:var(--success)}.uni-form-field.warning.focused{box-shadow:inset 0 0 0 1px var(--warning)}.uni-form-field.warning.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.warning.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--warning)}.uni-form-field.warning .uni-input{caret-color:var(--warning)}.uni-form-field.danger.focused,.uni-form-field.danger.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.danger.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--danger)}.uni-form-field.danger .uni-input{caret-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniFormFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-form-field',
                exportAs: 'uniFormField',
                templateUrl: './form-field.component.html',
                styleUrls: ['./form-field.component.scss'],
                host: Object.assign(Object.assign({ class: 'uni-form-field', '[class.focused]': 'focused', '[class.has-value]': 'hasValue', '[class.has-label]': '!!label', '[class.has-error]': '!!error', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS), { '(click)': 'clicked.emit($event)' }),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniLabelComponent]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniErrorComponent]
        }] }); })();

const _c0$8 = ["*"];
class UniHintComponent {
}
UniHintComponent.ɵfac = function UniHintComponent_Factory(t) { return new (t || UniHintComponent)(); };
UniHintComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniHintComponent, selectors: [["uni-hint"]], hostAttrs: [1, "uni-hint"], exportAs: ["uniHint"], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function UniHintComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-hint{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--white-d20)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniHintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-hint',
                exportAs: 'uniHint',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./hint.component.scss'],
                host: { class: 'uni-hint' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const declarations$1 = [
    UniFormFieldComponent,
    UniErrorComponent,
    UniHintComponent,
    UniLabelComponent,
];
class UniFormFieldModule {
}
UniFormFieldModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniFormFieldModule });
UniFormFieldModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniFormFieldModule_Factory(t) { return new (t || UniFormFieldModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniFormFieldModule, { declarations: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$1,
                exports: declarations$1,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

class UniSubscriptionHelper {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
UniSubscriptionHelper.ɵfac = function UniSubscriptionHelper_Factory(t) { return new (t || UniSubscriptionHelper)(); };
UniSubscriptionHelper.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniSubscriptionHelper });

/**
 * This is being used to fix issue when running --aot, where
 * lifecycle hooks are only called if they are explicitly declared.
 */
class UniInitHelper {
    ngOnInit() { }
    ngOnDestroy() { }
}
UniInitHelper.ɵfac = function UniInitHelper_Factory(t) { return new (t || UniInitHelper)(); };
UniInitHelper.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniInitHelper });

let nextId = 0;
class UniFormFieldControlBase extends UniSubscriptionHelper {
    constructor(el, cdr, uniFormField, ngForm, ngFormGroup) {
        super();
        this.el = el;
        this.cdr = cdr;
        this.uniFormField = uniFormField;
        this.ngForm = ngForm;
        this.ngFormGroup = ngFormGroup;
        this._id = `uni-form-field--${++nextId}`;
        this._tabIndex = 0;
        this._required = false;
        this._disabled = false;
        this._autofocus = false;
        this._autocomplete = false;
        this.onChange = () => { };
        this.onTouch = () => { };
    }
    get id() { return this._id; }
    set id(v) {
        this._id = v;
        this.uniFormField.id = v;
    }
    get tabIndex() { return this._tabIndex; }
    set tabIndex(v) {
        this._tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this.el.nativeElement.tabIndex = this._tabIndex;
    }
    get placeholder() { return this._placeholder; }
    set placeholder(v) {
        this._placeholder = v;
        this.cdr.markForCheck();
    }
    get required() { return this._required; }
    set required(v) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this.cdr.markForCheck();
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        if (v !== this._disabled) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
            if (this.uniFormField) {
                this.uniFormField.disabled = this._disabled;
            }
        }
    }
    get autofocus() { return this._autofocus; }
    set autofocus(v) {
        this._autofocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this.cdr.markForCheck();
    }
    get autocomplete() { return this._autocomplete; }
    set autocomplete(v) {
        this._autocomplete = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this.cdr.markForCheck();
    }
    get value() { return this._value; }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.cdr.markForCheck();
            if (this.uniFormField) {
                this.uniFormField.hasValue = !!v;
            }
        }
    }
    ngOnInit() {
        if (this.uniFormField) {
            this.uniFormField.id = this._id;
        }
    }
    writeValue(v) {
        if (v !== this.value) {
            this.value = v;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
UniFormFieldControlBase.ɵfac = function UniFormFieldControlBase_Factory(t) { return new (t || UniFormFieldControlBase)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniFormFieldComponent, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], 8)); };
UniFormFieldControlBase.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniFormFieldControlBase, inputs: { id: "id", tabIndex: "tabIndex", placeholder: "placeholder", required: "required", disabled: "disabled", autofocus: "autofocus", autocomplete: "autocomplete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });

function uniFormFieldProvider(component) {
    return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => component),
        multi: true,
    };
}

const _c0$9 = ["*"];
class UniOptionComponent {
    constructor(_el) {
        this._el = _el;
        this.disabled = false;
        this.selected = false;
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get content() {
        return this._el.nativeElement.textContent.trim();
    }
    select() {
        if (!this.disabled && !this.selected) {
            this.selected = true;
            this._emitChanged();
        }
    }
    deselect() {
        if (!this.disabled && this.selected) {
            this.selected = false;
            this._emitChanged();
        }
    }
    _emitChanged() {
        this.selectionChanged.emit({ source: this });
    }
}
UniOptionComponent.ɵfac = function UniOptionComponent_Factory(t) { return new (t || UniOptionComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniOptionComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniOptionComponent, selectors: [["uni-option"]], hostAttrs: [1, "uni-option"], hostVars: 12, hostBindings: function UniOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniOptionComponent_click_HostBindingHandler($event) { return ctx.select(); });
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("disabled", ctx.disabled)("selected", ctx.selected);
    } }, inputs: { value: "value", color: "color", disabled: "disabled", selected: "selected" }, outputs: { selectionChanged: "selectionChanged" }, exportAs: ["uniOption"], ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function UniOptionComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-option{display:block;padding:10px;cursor:pointer}.uni-option.selected.primary{color:var(--white);background-color:var(--primary)}.uni-option.selected.success{color:var(--white);background-color:var(--success)}.uni-option.selected.warning{color:var(--black);background-color:var(--warning)}.uni-option.selected.danger{color:var(--white);background-color:var(--danger)}.uni-option.disabled{cursor:default;opacity:.4}.uni-option.disabled:hover{background-color:transparent}.uni-option:hover{background-color:var(--black-a15)}.uni-option:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.uni-option:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-option',
                exportAs: 'uniOption',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./option.component.scss'],
                host: Object.assign(Object.assign({ class: 'uni-option' }, UNI_HOST_COLORS), { '[class.disabled]': 'disabled', '[class.selected]': 'selected', '(click)': 'select()' }),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

const _c0$a = ["*"];
class UniSelectPanelComponent {
}
UniSelectPanelComponent.ɵfac = function UniSelectPanelComponent_Factory(t) { return new (t || UniSelectPanelComponent)(); };
UniSelectPanelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSelectPanelComponent, selectors: [["uni-select-panel"]], hostAttrs: [1, "uni-select-panel"], exportAs: ["uniSelectPanel"], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function UniSelectPanelComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-select-panel{display:block;border-radius:3px;width:100%;background-color:var(--dark);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-select-panel',
                exportAs: 'uniSelectPanel',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./select-panel.component.scss'],
                host: { class: 'uni-select-panel' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$b = ["trigger"];
function UniSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r11.placeholder);
} }
function UniSelectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r12.selected);
} }
function UniSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "uni-select-panel", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", ctx_r13.panelClass);
} }
const _c1$2 = [[["uni-option"]]];
const _c2 = ["uni-option"];
class UniSelectComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.panelClass = 'uni-select-panel';
        this.opened$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
    }
    get options() { return this._options; }
    set options(v) {
        this._options = v;
        this.optionSelectionChanged = this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...this.options.map(o => o.selectionChanged))));
        this.optionSelectionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(e => {
            if (e.source.selected) {
                this.select(e.source);
            }
            if (this.opened$.value) {
                this.close();
            }
        });
        this.initOptions();
    }
    get selected() {
        return this.selectionModel.selected.map(v => v.content).join(', ');
    }
    get minWidth() {
        return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
    }
    ngAfterContentInit() {
        this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](false);
        this.opened$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(open => {
            this.uniFormField.focused = open;
        });
        this.uniFormField.clicked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!this.opened$.value && !this.disabled) {
                this.toggle();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        if (value !== this.value) {
            this.value = value;
            if (this.options) {
                this.initOptions();
            }
        }
    }
    toggle() {
        this.opened$.next(!this.opened$.value);
    }
    close() {
        this.opened$.next(false);
    }
    select(v) {
        const options = this.options.toArray();
        this.selectionModel.select(v);
        this.value = this.optionValue(v);
        for (const option of options) {
            if (option !== v) {
                option.deselect();
            }
        }
    }
    initOptions() {
        for (const option of this.options.toArray()) {
            const value = this.optionValue(option);
            if (!option.color) {
                option.color = this.uniFormField.color;
            }
            if (value === this.value) {
                option.select();
            }
        }
    }
    optionValue(v) {
        return v.value || v.content;
    }
}
UniSelectComponent.ɵfac = function UniSelectComponent_Factory(t) { return ɵUniSelectComponent_BaseFactory(t || UniSelectComponent); };
UniSelectComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSelectComponent, selectors: [["uni-select"]], contentQueries: function UniSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniOptionComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.options = _t);
    } }, viewQuery: function UniSelectComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$b, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(UniSelectPanelComponent, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.trigger = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.panel = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.overlay = _t.first);
    } }, hostAttrs: [1, "uni-select"], hostVars: 2, hostBindings: function UniSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled);
    } }, inputs: { panelClass: "panelClass" }, exportAs: ["uniSelect"], features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniSelectComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 10, vars: 12, consts: [["cdk-overlay-origin", "", 1, "uni-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "uni-select-text"], ["class", "uni-select-placeholder", 4, "ngIf"], ["class", "uni-select-value", 4, "ngIf"], [1, "uni-select-icon"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick", "detach"], [1, "uni-select-placeholder"], [1, "uni-select-value"], [3, "ngClass"]], template: function UniSelectComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c1$2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniSelectComponent_Template_div_click_0_listener($event) { return ctx.toggle(); });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("backdropClick", function UniSelectComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.close(); })("detach", function UniSelectComponent_Template_ng_template_detach_8_listener($event) { return ctx.close(); });
    } if (rf & 2) {
        const _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.selected);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.selected);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("bottom", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(7, 8, ctx.opened$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("cdkConnectedOverlayOrigin", _r9)("cdkConnectedOverlayOpen", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(9, 10, ctx.opened$))("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.minWidth);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], UniSelectPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], styles: [".uni-select{display:block;outline:0;border-radius:3px;font:inherit}.uni-select.disabled .uni-select-trigger{pointer-events:none}.uni-select .uni-select-trigger{display:-webkit-box;display:flex;cursor:pointer;border-radius:3px}.uni-select .uni-select-trigger .uni-select-text{-webkit-box-flex:1;flex:1 1 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-placeholder{color:var(--white-a20)}.uni-select .uni-select-trigger .uni-select-icon{font-size:12px;margin:auto 10px;color:var(--grey);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-icon:before{border-style:solid;border-width:.25em .25em 0 0;content:\"\";display:inline-block;height:.45em;left:0;position:relative;top:.15em;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:top;width:.45em;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-select .uni-select-trigger .uni-select-icon.bottom:before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
const ɵUniSelectComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniSelectComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-select',
                exportAs: 'uniSelect',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
                host: {
                    class: 'uni-select',
                    '[class.disabled]': 'disabled',
                },
                providers: [uniFormFieldProvider(UniSelectComponent)],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['trigger']
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [UniSelectPanelComponent]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"]]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [UniOptionComponent, { descendants: true }]
        }] }); })();

const declarations$2 = [
    UniSelectComponent,
    UniOptionComponent,
    UniSelectPanelComponent,
];
class UniSelectModule {
}
UniSelectModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniSelectModule });
UniSelectModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniSelectModule_Factory(t) { return new (t || UniSelectModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSelectModule, { declarations: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]], exports: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$2,
                exports: declarations$2,
                entryComponents: [UniSelectPanelComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
            }]
    }], null, null); })();

const _c0$c = ["uniInput", ""];
class UniInputComponent extends UniFormFieldControlBase {
    get autoResize() { return this._autoResize; }
    set autoResize(v) {
        if (v !== this._autoResize) {
            this._autoResize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
        }
    }
    get _height() {
        return this._isTextArea && this._autoResize ? `${this._element.scrollHeight}px` : 'auto';
    }
    get _element() {
        return this.el.nativeElement;
    }
    get _isTextArea() {
        return this.el.nativeElement instanceof HTMLTextAreaElement;
    }
    ngOnInit() {
        super.ngOnInit();
        this.uniFormField.clicked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this._element.focus();
        });
    }
    ngAfterViewInit() {
        setTimeout(() => this.onInput());
    }
    onFocus(e) {
        this.uniFormField.focused = e;
    }
    onInput() {
        this.uniFormField.hasValue = !!this._element.value;
        this._element.style.height = 'auto';
        if (this._element.clientHeight < this._element.scrollHeight) {
            this._element.style.height = this._height;
        }
    }
}
UniInputComponent.ɵfac = function UniInputComponent_Factory(t) { return ɵUniInputComponent_BaseFactory(t || UniInputComponent); };
UniInputComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniInputComponent, selectors: [["input", "uniInput", ""], ["textarea", "uniInput", ""]], hostAttrs: [1, "uni-input"], hostVars: 5, hostBindings: function UniInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("focus", function UniInputComponent_focus_HostBindingHandler($event) { return ctx.onFocus(true); })("focusout", function UniInputComponent_focusout_HostBindingHandler($event) { return ctx.onFocus(false); })("input", function UniInputComponent_input_HostBindingHandler($event) { return ctx.onInput(); });
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"])("id", ctx.id)("tabIndex", ctx.tabIndex)("required", ctx.required)("autofocus", ctx.autofocus)("autocomplete", ctx.autocomplete);
    } }, inputs: { autoResize: "autoResize" }, exportAs: ["uniInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0$c, decls: 0, vars: 0, template: function UniInputComponent_Template(rf, ctx) { }, styles: [".uni-input{width:100%;outline:0;border:0;border-radius:3px;background-color:transparent;font:inherit;color:var(--white);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
const ɵUniInputComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniInputComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'input[uniInput], textarea[uniInput]',
                exportAs: 'uniInput',
                template: ``,
                styleUrls: ['./input.component.scss'],
                host: {
                    class: 'uni-input',
                    '[id]': 'id',
                    '[tabIndex]': 'tabIndex',
                    '[required]': 'required',
                    '[autofocus]': 'autofocus',
                    '[autocomplete]': 'autocomplete',
                    '(focus)': 'onFocus(true)',
                    '(focusout)': 'onFocus(false)',
                    '(input)': 'onInput()',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { autoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniInputModule {
}
UniInputModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniInputModule });
UniInputModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniInputModule_Factory(t) { return new (t || UniInputModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniInputModule, { declarations: [UniInputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniInputComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniInputComponent],
                exports: [UniInputComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$d = ["*"];
class UniCheckboxComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.diameter = '18px';
        this.color = UniColor.Primary;
    }
}
UniCheckboxComponent.ɵfac = function UniCheckboxComponent_Factory(t) { return ɵUniCheckboxComponent_BaseFactory(t || UniCheckboxComponent); };
UniCheckboxComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCheckboxComponent, selectors: [["uni-checkbox"]], hostAttrs: [1, "uni-checkbox"], hostVars: 10, hostBindings: function UniCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { diameter: "diameter", color: "color" }, exportAs: ["uniCheckbox"], features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniCheckboxComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0$d, decls: 5, vars: 14, consts: [[1, "uni-checkbox--label", 3, "for"], ["type", "checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-checkbox--box"], [1, "uni-checkbox--content"]], template: function UniCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function UniCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.diameter)("height", ctx.diameter)("min-width", ctx.diameter)("min-height", ctx.diameter);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("checked", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".uni-checkbox{display:-webkit-inline-box;display:inline-flex}.uni-checkbox.primary .uni-checkbox--box.checked{background-color:var(--primary);border-color:var(--primary)}.uni-checkbox.success .uni-checkbox--box.checked{background-color:var(--success);border-color:var(--success)}.uni-checkbox.danger .uni-checkbox--box.checked{background-color:var(--danger);border-color:var(--danger)}.uni-checkbox.warning .uni-checkbox--box.checked{background-color:var(--warning);border-color:var(--warning)}.uni-checkbox.disabled{opacity:.7;cursor:not-allowed}.uni-checkbox.disabled *{cursor:not-allowed!important}.uni-checkbox .uni-checkbox--label{display:-webkit-box;display:flex;cursor:pointer;margin-bottom:0}.uni-checkbox .uni-checkbox--label input{display:none}.uni-checkbox .uni-checkbox--label .uni-checkbox--box{border-radius:5px;background-color:transparent;border:2px solid var(--hairline-strong);-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto 10px auto 0}.uni-checkbox .uni-checkbox--label .uni-checkbox--box:after{position:absolute;top:calc(50% - 8px);left:calc(50% - 3px);width:6px;height:12px;content:\"\";border:solid var(--white);border-width:0 2px 2px 0;-webkit-transform:rotate(0) scale(0);transform:rotate(0) scale(0);-webkit-transition:.3s ease-out;transition:.3s ease-out}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked{border-radius:5px;opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked:after{-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--content{margin:auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"], encapsulation: 2, changeDetection: 0 });
const ɵUniCheckboxComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniCheckboxComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                exportAs: 'uniCheckbox',
                selector: 'uni-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                host: Object.assign({ class: 'uni-checkbox', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniCheckboxComponent)],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniCheckboxModule {
}
UniCheckboxModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniCheckboxModule });
UniCheckboxModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniCheckboxModule_Factory(t) { return new (t || UniCheckboxModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCheckboxModule, { declarations: [UniCheckboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]], exports: [UniCheckboxComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniCheckboxComponent],
                exports: [UniCheckboxComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            }]
    }], null, null); })();

const _c0$e = ["*"];
class UniSlideToggleComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.color = UniColor.Primary;
    }
}
UniSlideToggleComponent.ɵfac = function UniSlideToggleComponent_Factory(t) { return ɵUniSlideToggleComponent_BaseFactory(t || UniSlideToggleComponent); };
UniSlideToggleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSlideToggleComponent, selectors: [["uni-slide-toggle"]], hostAttrs: [1, "uni-slide-toggle"], hostVars: 10, hostBindings: function UniSlideToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniSlideToggle"], features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([uniFormFieldProvider(UniSlideToggleComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0$e, decls: 5, vars: 5, consts: [[1, "uni-slide-toggle--switch", 3, "for"], ["type", "checkbox", 1, "uni-slide-toggle--checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-slide-toggle--slider"], [1, "uni-slide-toggle--label", 3, "for"]], template: function UniSlideToggleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "label", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function UniSlideToggleComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "span", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "label", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("for", ctx.id);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".uni-slide-toggle{display:-webkit-inline-box;display:inline-flex}.uni-slide-toggle.disabled{opacity:.7;cursor:not-allowed}.uni-slide-toggle.disabled *{cursor:not-allowed!important}.uni-slide-toggle .uni-slide-toggle--label{margin:auto 0 auto 5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-slide-toggle .uni-slide-toggle--switch{position:relative;width:50px;height:30px;margin:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox{opacity:0;width:0;height:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider{background-color:var(--primary)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider:before{-webkit-transform:translateX(21px);transform:translateX(21px)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey);-webkit-transition:.4s;transition:.4s;border-radius:34px}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider:before{position:absolute;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);content:\"\";height:22px;width:22px;left:4px;bottom:4px;background-color:var(--white);-webkit-transition:.4s;transition:.4s;border-radius:50%}"], encapsulation: 2, changeDetection: 0 });
const ɵUniSlideToggleComponent_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(UniSlideToggleComponent);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSlideToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                exportAs: 'uniSlideToggle',
                selector: 'uni-slide-toggle',
                templateUrl: './slide-toggle.component.html',
                styleUrls: ['./slide-toggle.component.scss'],
                host: Object.assign({ class: 'uni-slide-toggle', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniSlideToggleComponent)],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniSlideToggleModule {
}
UniSlideToggleModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniSlideToggleModule });
UniSlideToggleModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniSlideToggleModule_Factory(t) { return new (t || UniSlideToggleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSlideToggleModule, { declarations: [UniSlideToggleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]], exports: [UniSlideToggleComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniSlideToggleComponent],
                exports: [UniSlideToggleComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            }]
    }], null, null); })();

const _c0$f = [[["uni-card-header"]], [["uni-card-content"]], [["uni-card-footer"]]];
const _c1$3 = ["uni-card-header", "uni-card-content", "uni-card-footer"];
class UniCardComponent {
}
UniCardComponent.ɵfac = function UniCardComponent_Factory(t) { return new (t || UniCardComponent)(); };
UniCardComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardComponent, selectors: [["uni-card"]], hostAttrs: [1, "uni-card"], exportAs: ["uniCard"], ngContentSelectors: _c1$3, decls: 3, vars: 0, template: function UniCardComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$f);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
    } }, styles: [".uni-card{display:block;padding-bottom:15px;padding-top:15px;background-color:var(--dark);border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card',
                exportAs: 'uniCard',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                host: { class: 'uni-card' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$g = ["*"];
class UniCardFooterComponent {
}
UniCardFooterComponent.ɵfac = function UniCardFooterComponent_Factory(t) { return new (t || UniCardFooterComponent)(); };
UniCardFooterComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardFooterComponent, selectors: [["uni-card-footer"]], hostAttrs: [1, "uni-card-footer"], exportAs: ["uniCardFooter"], ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function UniCardFooterComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-card-footer{display:block;padding:15px 15px 0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card-footer',
                exportAs: 'uniCardFooter',
                templateUrl: './card-footer.component.html',
                styleUrls: ['./card-footer.component.scss'],
                host: { class: 'uni-card-footer' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$h = [[["uni-card-title"]], [["uni-card-subtitle"]]];
const _c1$4 = ["uni-card-title", "uni-card-subtitle"];
class UniCardHeaderComponent {
}
UniCardHeaderComponent.ɵfac = function UniCardHeaderComponent_Factory(t) { return new (t || UniCardHeaderComponent)(); };
UniCardHeaderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardHeaderComponent, selectors: [["uni-card-header"]], hostAttrs: [1, "uni-card-header"], exportAs: ["uniCardHeader"], ngContentSelectors: _c1$4, decls: 2, vars: 0, template: function UniCardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$h);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
    } }, styles: [".uni-card-header{display:block;padding-left:15px;padding-right:15px;margin-bottom:15px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card-header',
                exportAs: 'uniCardHeader',
                templateUrl: './card-header.component.html',
                styleUrls: ['./card-header.component.scss'],
                host: { class: 'uni-card-header' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$i = ["*"];
class UniCardSubtitleComponent {
}
UniCardSubtitleComponent.ɵfac = function UniCardSubtitleComponent_Factory(t) { return new (t || UniCardSubtitleComponent)(); };
UniCardSubtitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardSubtitleComponent, selectors: [["uni-card-subtitle"]], hostAttrs: [1, "uni-card-subtitle"], exportAs: ["uniCardSubtitle"], ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function UniCardSubtitleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-card-subtitle{display:block;color:rgba(0,0,0,.6)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardSubtitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card-subtitle',
                exportAs: 'uniCardSubtitle',
                templateUrl: './card-subtitle.component.html',
                styleUrls: ['./card-subtitle.component.scss'],
                host: { class: 'uni-card-subtitle' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$j = ["*"];
class UniCardTitleComponent {
}
UniCardTitleComponent.ɵfac = function UniCardTitleComponent_Factory(t) { return new (t || UniCardTitleComponent)(); };
UniCardTitleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardTitleComponent, selectors: [["uni-card-title"]], hostAttrs: [1, "uni-card-title"], exportAs: ["uniCardTitle"], ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function UniCardTitleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-card-title{display:block;font-size:20px;font-weight:500;line-height:1.6}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card-title',
                exportAs: 'uniCardTitle',
                templateUrl: './card-title.component.html',
                styleUrls: ['./card-title.component.scss'],
                host: { class: 'uni-card-title' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

const _c0$k = ["*"];
class UniCardContentComponent {
}
UniCardContentComponent.ɵfac = function UniCardContentComponent_Factory(t) { return new (t || UniCardContentComponent)(); };
UniCardContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCardContentComponent, selectors: [["uni-card-content"]], hostAttrs: [1, "uni-card-content"], exportAs: ["uniCardContent"], ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function UniCardContentComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-card-content{display:block;padding-left:15px;padding-right:15px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-card-content',
                exportAs: 'uniCardContent',
                templateUrl: './card-content.component.html',
                styleUrls: ['./card-content.component.scss'],
                host: { class: 'uni-card-content' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();

class UniCardAvatarDirective {
}
UniCardAvatarDirective.ɵfac = function UniCardAvatarDirective_Factory(t) { return new (t || UniCardAvatarDirective)(); };
UniCardAvatarDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniCardAvatarDirective, selectors: [["", "uniCardAvatar", ""]], hostAttrs: [1, "uni-card-avatar"], exportAs: ["uniCardAvatar"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardAvatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                exportAs: 'uniCardAvatar',
                selector: '[uniCardAvatar]',
                host: { class: 'uni-card-avatar' },
            }]
    }], null, null); })();

const declarations$3 = [
    UniCardComponent,
    UniCardFooterComponent,
    UniCardHeaderComponent,
    UniCardSubtitleComponent,
    UniCardTitleComponent,
    UniCardContentComponent,
    UniCardAvatarDirective,
];
class UniCardModule {
}
UniCardModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniCardModule });
UniCardModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniCardModule_Factory(t) { return new (t || UniCardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCardModule, { declarations: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$3,
                exports: declarations$3,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$l = ["*"];
class UniTabLabelComponent {
    constructor(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._active = false;
        this._disabled = false;
    }
    get active() { return this._active; }
    set active(v) {
        this._active = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this._cdr.markForCheck();
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this._cdr.markForCheck();
    }
    get width() {
        return this._el.nativeElement.clientWidth;
    }
}
UniTabLabelComponent.ɵfac = function UniTabLabelComponent_Factory(t) { return new (t || UniTabLabelComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniTabLabelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniTabLabelComponent, selectors: [["uni-tab-label"]], hostAttrs: [1, "uni-tab-label"], hostVars: 4, hostBindings: function UniTabLabelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", ctx.active)("disabled", ctx.disabled);
    } }, inputs: { active: "active", disabled: "disabled" }, exportAs: ["uniTabLabel"], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function UniTabLabelComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-tab-label{padding:.8em;color:var(--white-d20);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-tab-label.active{color:var(--white)}.uni-tab-label.disabled{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-tab-label',
                exportAs: 'uniTabLabel',
                templateUrl: './tab-label.component.html',
                styleUrls: ['./tab-label.component.scss'],
                host: {
                    class: 'uni-tab-label',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniTabBodyDirective {
    constructor(template) {
        this.template = template;
    }
}
UniTabBodyDirective.ɵfac = function UniTabBodyDirective_Factory(t) { return new (t || UniTabBodyDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
UniTabBodyDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniTabBodyDirective, selectors: [["ng-template", "uniTabBody", ""]], exportAs: ["uniTabBody"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabBodyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                exportAs: 'uniTabBody',
                selector: 'ng-template[uniTabBody]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();

function UniTabComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
class UniTabComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this._disabled = false;
        this._active = false;
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
        this._cdr.markForCheck();
    }
    get active() { return this._active; }
    set active(v) {
        if (v !== this._active) {
            this._active = v;
            this._cdr.markForCheck();
        }
    }
}
UniTabComponent.ɵfac = function UniTabComponent_Factory(t) { return new (t || UniTabComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniTabComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniTabComponent, selectors: [["uni-tab"]], contentQueries: function UniTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"])(dirIndex, UniTabLabelComponent, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniTabBodyDirective, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.uniLabel = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.uniBody = _t.first);
    } }, hostAttrs: [1, "uni-tab"], hostVars: 2, hostBindings: function UniTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", ctx.active);
    } }, inputs: { label: "label", disabled: "disabled" }, exportAs: ["uniTab"], decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function UniTabComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniTabComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx.active ? ctx.uniBody.template : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".uni-tab{display:block;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-tab',
                exportAs: 'uniTab',
                templateUrl: './tab.component.html',
                styleUrls: ['./tab.component.scss'],
                host: {
                    class: 'uni-tab',
                    '[class.active]': 'active',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uniLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniTabLabelComponent, { static: true }]
        }], uniBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniTabBodyDirective, { static: false }]
        }] }); })();

function UniTabGroupComponent_uni_tab_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "uni-tab-label", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniTabGroupComponent_uni_tab_label_1_Template_uni_tab_label_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r20); const i_r18 = ctx.index; const ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r19.select(i_r18); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const tab_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("active", ctx_r15.active === i_r18)("disabled", tab_r17.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", tab_r17.label, " ");
} }
function UniTabGroupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 5);
} if (rf & 2) {
    const ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx_r16.activeLabel == null ? null : ctx_r16.activeLabel.width, "px")("transform", ctx_r16.transform);
} }
const _c0$m = [[["uni-tab"]]];
const _c1$5 = ["uni-tab"];
class UniTabGroupComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this._active = 0;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get active() { return this._active; }
    set active(v) {
        if (v !== this._active) {
            this._active = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
            this._cdr.markForCheck();
            this.activeChange.emit(this._active);
        }
    }
    get labels() { return this._labels; }
    set labels(v) {
        setTimeout(() => {
            this._labels = v;
            this._cdr.markForCheck();
        });
    }
    get transform() {
        let width = 0;
        for (let i = 0; i < this._active; i++) {
            width += this._labels.toArray()[i].width;
        }
        return `translateX(${width}px)`;
    }
    get activeLabel() {
        return this._labels.toArray()[this._active];
    }
    ngAfterContentInit() {
        this._setActive();
    }
    select(index) {
        this.active = index;
        this._setActive();
    }
    _setActive() {
        this.tabs.forEach((tab, i) => {
            tab.active = i === this._active;
        });
    }
}
UniTabGroupComponent.ɵfac = function UniTabGroupComponent_Factory(t) { return new (t || UniTabGroupComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniTabGroupComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniTabGroupComponent, selectors: [["uni-tab-group"]], contentQueries: function UniTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniTabComponent, false);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.tabs = _t);
    } }, viewQuery: function UniTabGroupComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(UniTabLabelComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.labels = _t);
    } }, hostAttrs: [1, "uni-tab-group"], inputs: { active: "active" }, outputs: { activeChange: "activeChange" }, exportAs: ["uniTabGroup"], ngContentSelectors: _c1$5, decls: 5, vars: 2, consts: [[1, "uni-tab-header"], [3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "uni-tab-track"], ["class", "uni-tab-bar", 3, "width", "transform", 4, "ngIf"], [3, "active", "disabled", "click"], [1, "uni-tab-bar"]], template: function UniTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$m);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UniTabGroupComponent_uni_tab_label_1_Template, 2, 3, "uni-tab-label", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, UniTabGroupComponent_div_3_Template, 1, 4, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(4);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.tabs.toArray());
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.labels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], UniTabLabelComponent], styles: [".uni-tab-group{display:block}.uni-tab-group .uni-tab-header{display:-webkit-box;display:flex}.uni-tab-group .uni-tab-track{display:block;position:relative;height:2px;border-bottom:1px solid var(--hairline-regular)}.uni-tab-group .uni-tab-track .uni-tab-bar{position:absolute;height:2px;background-color:var(--primary);-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-tab-group',
                exportAs: 'uniTabGroup',
                templateUrl: './tab-group.component.html',
                styleUrls: ['./tab-group.component.scss'],
                host: { class: 'uni-tab-group' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [UniTabComponent]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [UniTabLabelComponent]
        }] }); })();

const declarations$4 = [
    UniTabComponent,
    UniTabGroupComponent,
    UniTabLabelComponent,
    UniTabBodyDirective,
];
class UniTabModule {
}
UniTabModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniTabModule });
UniTabModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniTabModule_Factory(t) { return new (t || UniTabModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniTabModule, { declarations: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniTabModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$4,
                exports: declarations$4,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$n = ["*"];
class UniToolbarComponent {
}
UniToolbarComponent.ɵfac = function UniToolbarComponent_Factory(t) { return new (t || UniToolbarComponent)(); };
UniToolbarComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniToolbarComponent, selectors: [["uni-toolbar"]], hostAttrs: [1, "uni-toolbar"], hostVars: 8, hostBindings: function UniToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniToolbar"], ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function UniToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-toolbar{display:-webkit-box;display:flex;padding:5px 10px;box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}.uni-toolbar.primary{color:var(--white);background-color:var(--primary)}.uni-toolbar.success{color:var(--white);background-color:var(--success)}.uni-toolbar.warning{color:var(--black);background-color:var(--warning)}.uni-toolbar.danger{color:var(--white);background-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-toolbar',
                exportAs: 'uniToolbar',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./toolbar.component.scss'],
                host: Object.assign({ class: 'uni-toolbar' }, UNI_HOST_COLORS),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniToolbarModule {
}
UniToolbarModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniToolbarModule });
UniToolbarModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniToolbarModule_Factory(t) { return new (t || UniToolbarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniToolbarModule, { declarations: [UniToolbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniToolbarComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniToolbarComponent],
                exports: [UniToolbarComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

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

const UNI_SIDENAV_ANIMATIONS = {
    slideTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('slideTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
            transform: 'translateX({{ distance }}%)',
        }), { params: { distance: '-100' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
            transform: 'translateX(0)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms cubic-bezier(0.35, 0, 0.25, 1)')),
    ]),
};

class UniSidenavBodyDirective {
    constructor(template) {
        this.template = template;
    }
}
UniSidenavBodyDirective.ɵfac = function UniSidenavBodyDirective_Factory(t) { return new (t || UniSidenavBodyDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
UniSidenavBodyDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniSidenavBodyDirective, selectors: [["ng-template", "uniSidenavBody", ""]], exportAs: ["uniSidenavBody"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavBodyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                exportAs: 'uniSidenavBody',
                selector: 'ng-template[uniSidenavBody]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();

const _c0$o = ["view"];
class UniSidenavComponent {
    constructor(el, cdr) {
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
    get position() { return this._position; }
    set position(v) {
        if (v !== this._position) {
            this._position = v;
            this.positionChange.emit(this._position);
            this.cdr.markForCheck();
        }
    }
    get mode() { return this._mode; }
    set mode(v) {
        if (v !== this._mode) {
            this._mode = v;
            this.modeChange.emit(this._mode);
            this.cdr.markForCheck();
        }
    }
    get open() { return this._open; }
    set open(v) {
        if (v !== this._open) {
            this._open = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.state = this.open ? UniSidenavState.Opening : UniSidenavState.Closing;
            this.openChange.emit(this._open);
            this.cdr.markForCheck();
        }
    }
    get closeOnBackdropClick() { return this._closeOnBackdropClick; }
    set closeOnBackdropClick(v) {
        if (v !== this._closeOnBackdropClick) {
            this._closeOnBackdropClick = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
        }
    }
    get hasBackdrop() { return this._hasBackdrop; }
    set hasBackdrop(v) {
        if (v !== this._hasBackdrop) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this.cdr.markForCheck();
        }
    }
    get slide() {
        return {
            value: this.open,
            params: {
                distance: this.position === UniSidenavPosition.Start ? '-100' : '100',
            },
        };
    }
    get state() { return this._state; }
    set state(v) {
        if (v !== this._state) {
            const prev = this._state;
            this._state = v;
            if (this.view) {
                if (prev === UniSidenavState.Closed && this._state === UniSidenavState.Opening) {
                    this.view.createEmbeddedView(this.body.template);
                }
                else if (this._state === UniSidenavState.Closed) {
                    this.view.remove();
                }
            }
            this.stateChange.emit(v);
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        if (this.open) {
            this.view.createEmbeddedView(this.body.template);
        }
    }
    ngAfterContentInit() {
        setTimeout(() => this.cdr.markForCheck());
    }
    onEscape() {
        if (this.mode === UniSidenavMode.Over) {
            this.open = false;
        }
    }
    onSlideEnd() {
        this.state = this.open ? UniSidenavState.Opened : UniSidenavState.Closed;
    }
}
UniSidenavComponent.ɵfac = function UniSidenavComponent_Factory(t) { return new (t || UniSidenavComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniSidenavComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSidenavComponent, selectors: [["uni-sidenav"]], contentQueries: function UniSidenavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSidenavBodyDirective, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.body = _t.first);
    } }, viewQuery: function UniSidenavComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$o, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.view = _t.first);
    } }, hostAttrs: [1, "uni-sidenav"], hostVars: 7, hostBindings: function UniSidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentHostSyntheticListener"])("@slideTransition.done", function UniSidenavComponent_animation_slideTransition_done_HostBindingHandler($event) { return ctx.onSlideEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keydown.escape", function UniSidenavComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscape(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"])("@slideTransition", ctx.slide);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("over", ctx.mode === ctx.UniSidenavMode.Over)("end", ctx.position === ctx.UniSidenavPosition.End)("closed", ctx.open === false);
    } }, inputs: { position: "position", mode: "mode", open: "open", closeOnBackdropClick: "closeOnBackdropClick", hasBackdrop: "hasBackdrop" }, outputs: { openChange: "openChange", stateChange: "stateChange", modeChange: "modeChange", positionChange: "positionChange" }, exportAs: ["uniSidenav"], decls: 2, vars: 0, consts: [["view", ""]], template: function UniSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, null, 0);
    } }, styles: [".uni-sidenav{display:block;position:absolute;height:100%;overflow-y:auto;z-index:2;background-color:var(--dark);color:var(--white)}.uni-sidenav.end{right:0}.uni-sidenav.over{z-index:3}"], encapsulation: 2, data: { animation: [
            UNI_SIDENAV_ANIMATIONS.slideTransition,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-sidenav',
                exportAs: 'uniSidenav',
                template: `<ng-container #view></ng-container>`,
                styleUrls: ['./sidenav.component.scss'],
                animations: [
                    UNI_SIDENAV_ANIMATIONS.slideTransition,
                ],
                host: {
                    class: 'uni-sidenav',
                    '[class.over]': 'mode === UniSidenavMode.Over',
                    '[class.end]': 'position === UniSidenavPosition.End',
                    '[class.closed]': 'open === false',
                    '[@slideTransition]': 'slide',
                    '(@slideTransition.done)': 'onSlideEnd()',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnBackdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], modeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniSidenavBodyDirective]
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['view', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], onEscape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown.escape']
        }] }); })();

function UniSidenavContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UniSidenavContainerComponent_div_0_Template_div_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r24); const ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r23.onBackdropClick(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("visible", ctx_r22.showBackdrop);
} }
const _c0$p = [[["uni-sidenav"]], [["uni-sidenav-content"]]];
const _c1$6 = ["uni-sidenav", "uni-sidenav-content"];
class UniSidenavContainerComponent extends UniSubscriptionHelper {
    constructor(_cdr) {
        super();
        this._cdr = _cdr;
        this.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get showBackdrop() {
        return this.sidenav.mode === UniSidenavMode.Over &&
            this.sidenav.open &&
            this.sidenav.hasBackdrop;
    }
    get hasBackdrop() {
        return this.sidenav.mode === UniSidenavMode.Over &&
            this.sidenav.hasBackdrop;
    }
    ngAfterContentInit() {
        this.sidenav.openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => this._cdr.markForCheck());
        this.sidenav.modeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => this._cdr.markForCheck());
        this.sidenav.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => this._cdr.markForCheck());
    }
    onBackdropClick() {
        this.backdropClicked.emit();
        if (this.sidenav.closeOnBackdropClick) {
            this.sidenav.open = !this.sidenav.open;
        }
    }
}
UniSidenavContainerComponent.ɵfac = function UniSidenavContainerComponent_Factory(t) { return new (t || UniSidenavContainerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniSidenavContainerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSidenavContainerComponent, selectors: [["uni-sidenav-container"]], contentQueries: function UniSidenavContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSidenavComponent, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.sidenav = _t.first);
    } }, hostAttrs: [1, "uni-sidenav-container"], outputs: { backdropClicked: "backdropClicked" }, exportAs: ["uniSidenavContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1$6, decls: 3, vars: 1, consts: [["class", "uni-backdrop", 3, "visible", "click", 4, "ngIf"], [1, "uni-backdrop", 3, "click"]], template: function UniSidenavContainerComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$p);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UniSidenavContainerComponent_div_0_Template, 1, 2, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 1);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.hasBackdrop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".uni-backdrop{position:absolute;height:100%;width:100%;opacity:0;pointer-events:none;z-index:2;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.uni-backdrop.visible{opacity:1;pointer-events:all}.uni-sidenav-container{display:block;position:relative;overflow:hidden}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-sidenav-container',
                exportAs: 'uniSidenavContainer',
                templateUrl: './sidenav-container.component.html',
                styleUrls: ['./sidenav-container.component.scss'],
                host: { class: 'uni-sidenav-container' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { backdropClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniSidenavComponent, { static: false }]
        }] }); })();

const _c0$q = ["*"];
class UniSidenavContentComponent {
    constructor(_container, _el) {
        this._container = _container;
        this._el = _el;
    }
    get marginLeft() {
        return this._open &&
            this._position === UniSidenavPosition.Start &&
            this._mode === UniSidenavMode.Side ? this._width : undefined;
    }
    get marginRight() {
        return this._open &&
            this._position === UniSidenavPosition.End &&
            this._mode === UniSidenavMode.Side ? this._width : undefined;
    }
    get _open() {
        return this._container.sidenav.open;
    }
    get _mode() {
        return this._container.sidenav.mode;
    }
    get _position() {
        return this._container.sidenav.position;
    }
    get _width() {
        return this._container.sidenav.el.nativeElement.clientWidth;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
        }, 1000);
    }
}
UniSidenavContentComponent.ɵfac = function UniSidenavContentComponent_Factory(t) { return new (t || UniSidenavContentComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UniSidenavContainerComponent)), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniSidenavContentComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSidenavContentComponent, selectors: [["uni-sidenav-content"]], hostAttrs: [1, "uni-sidenav-content"], hostVars: 4, hostBindings: function UniSidenavContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("margin-left", ctx.marginLeft, "px")("margin-right", ctx.marginRight, "px");
    } }, exportAs: ["uniSidenavContent"], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function UniSidenavContentComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-sidenav-content{display:block;position:relative;overflow:auto;z-index:1;height:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-sidenav-content',
                exportAs: 'uniSidenavContent',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./sidenav-content.component.scss'],
                host: {
                    class: 'uni-sidenav-content',
                    '[style.margin-left.px]': 'marginLeft',
                    '[style.margin-right.px]': 'marginRight',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: UniSidenavContainerComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UniSidenavContainerComponent)]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();

const declarations$5 = [
    UniSidenavComponent,
    UniSidenavContainerComponent,
    UniSidenavContentComponent,
    UniSidenavBodyDirective,
];
class UniSidenavModule {
}
UniSidenavModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniSidenavModule });
UniSidenavModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniSidenavModule_Factory(t) { return new (t || UniSidenavModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSidenavModule, { declarations: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$5,
                exports: declarations$5,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$r = ["*"];
class UniSplitAreaComponent {
    constructor(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._flex = '1 1 auto';
        this.flexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get flex() { return this._flex; }
    set flex(v) {
        if (v !== this._flex) {
            this._flex = v;
            this._cdr.markForCheck();
            this.flexChange.emit(this._flex);
        }
    }
    get index() { return this._index; }
    set index(v) {
        if (v !== this._index) {
            this._index = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
            this._cdr.markForCheck();
        }
    }
    get clientWidth() {
        return this._el.nativeElement.clientWidth;
    }
    get clientHeight() {
        return this._el.nativeElement.clientHeight;
    }
}
UniSplitAreaComponent.ɵfac = function UniSplitAreaComponent_Factory(t) { return new (t || UniSplitAreaComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniSplitAreaComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSplitAreaComponent, selectors: [["uni-split-area"]], hostAttrs: [1, "uni-split-area"], hostVars: 4, hostBindings: function UniSplitAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("order", ctx.index)("flex", ctx.flex);
    } }, inputs: { flex: "flex", index: "index" }, outputs: { flexChange: "flexChange" }, exportAs: ["uniSplitArea"], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function UniSplitAreaComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-split-area{display:-webkit-box;display:flex;overflow:auto;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                exportAs: 'uniSplitArea',
                selector: 'uni-split-area',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./split-area.component.scss'],
                host: {
                    class: 'uni-split-area',
                    '[style.order]': 'index',
                    '[style.flex]': 'flex',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { flex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

var UniSplitDirection;
(function (UniSplitDirection) {
    UniSplitDirection["Vertical"] = "vertical";
    UniSplitDirection["Horizontal"] = "horizontal";
})(UniSplitDirection || (UniSplitDirection = {}));

class UniSplitHandleComponent {
    constructor() {
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get resizing() {
        return this._x !== undefined;
    }
    get vertical() {
        return this.direction === UniSplitDirection.Vertical;
    }
    onMouseDown(e) {
        if (this.vertical) {
            this._x = e.clientX;
        }
        else {
            this._y = e.clientY;
        }
    }
    onMouseMove(e) {
        e.preventDefault();
        if (this._x !== undefined) {
            this.resize.emit(e.clientX - this._x);
            this._x = e.clientX;
        }
        else if (this._y !== undefined) {
            this.resize.emit(e.clientY - this._y);
            this._y = e.clientY;
        }
    }
    onMouseUp() {
        if (this._x !== undefined) {
            this._x = undefined;
        }
        if (this._y !== undefined) {
            this._y = undefined;
        }
    }
}
UniSplitHandleComponent.ɵfac = function UniSplitHandleComponent_Factory(t) { return new (t || UniSplitHandleComponent)(); };
UniSplitHandleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSplitHandleComponent, selectors: [["uni-split-handle"]], hostAttrs: [1, "uni-split-handle"], hostVars: 6, hostBindings: function UniSplitHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function UniSplitHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousemove", function UniSplitHandleComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function UniSplitHandleComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("uni-split-handle--resizing", ctx.resizing)("uni-split-handle--vertical", ctx.vertical)("uni-split-handle--horizontal", !ctx.vertical);
    } }, outputs: { resize: "resize" }, exportAs: ["uniSplitHandle"], decls: 0, vars: 0, template: function UniSplitHandleComponent_Template(rf, ctx) { }, styles: [".uni-split-handle{-webkit-box-ordinal-group:2;order:1;-webkit-transition:background-color .5s;transition:background-color .5s;background-color:var(--dark)}.uni-split-handle.uni-split-handle--resizing,.uni-split-handle:hover{background-color:var(--primary)}.uni-split-handle.uni-split-handle--vertical{width:10px;min-width:10px;cursor:col-resize}.uni-split-handle.uni-split-handle--horizontal{height:10px;min-height:10px;cursor:row-resize}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                exportAs: 'uniSplitHandle',
                selector: 'uni-split-handle',
                template: ``,
                styleUrls: ['./split-handle.component.scss'],
                host: {
                    class: 'uni-split-handle',
                    '[class.uni-split-handle--resizing]': 'resizing',
                    '[class.uni-split-handle--vertical]': 'vertical',
                    '[class.uni-split-handle--horizontal]': '!vertical',
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
        }] }); })();

function areaPct(area, container) {
    return (area / container) * 100;
}

const _c0$s = [[["uni-split-area"]], [["uni-split-handle"]], [["uni-split-area"]], [["uni-split"]]];
const _c1$7 = ["uni-split-area", "uni-split-handle", "uni-split-area", "uni-split"];
class UniSplitComponent extends UniSubscriptionHelper {
    constructor(_el) {
        super();
        this._el = _el;
        this._el.nativeElement.classList.add(this._name);
    }
    get areas() { return this._areas; }
    set areas(v) {
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
    get handle() { return this._handle; }
    set handle(v) {
        if (v) {
            this._handle = v;
            this._handle.direction = this._vertical ? UniSplitDirection.Vertical :
                UniSplitDirection.Horizontal;
            this._handle.resize.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(this._onResize.bind(this));
        }
    }
    get _name() {
        return this._el.nativeElement.nodeName.toLowerCase();
    }
    get _vertical() {
        return this._name === 'uni-vertical-split';
    }
    _onResize(distance) {
        if (this._areas) {
            let pct;
            if (this._vertical) {
                pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
            }
            else {
                pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
            }
            this._areas.first.flex = `0 0 ${pct <= 100 ? pct : 100}%`;
        }
    }
}
UniSplitComponent.ɵfac = function UniSplitComponent_Factory(t) { return new (t || UniSplitComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniSplitComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniSplitComponent, selectors: [["uni-vertical-split"], ["uni-horizontal-split"]], contentQueries: function UniSplitComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSplitHandleComponent, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, UniSplitAreaComponent, false);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.handle = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.areas = _t);
    } }, hostAttrs: [1, "uni-split"], exportAs: ["uniSplit"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1$7, decls: 4, vars: 0, template: function UniSplitComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$s);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(2, 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(3, 3);
    } }, styles: [".uni-split{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto}.uni-split.uni-vertical-split{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.uni-split.uni-horizontal-split{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                exportAs: 'uniSplit',
                selector: 'uni-vertical-split, uni-horizontal-split',
                templateUrl: './split.component.html',
                styleUrls: ['./split.component.scss'],
                host: { class: 'uni-split' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { areas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [UniSplitAreaComponent]
        }], handle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [UniSplitHandleComponent]
        }] }); })();

const declarations$6 = [
    UniSplitComponent,
    UniSplitAreaComponent,
    UniSplitHandleComponent,
];
class UniSplitModule {
}
UniSplitModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniSplitModule });
UniSplitModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniSplitModule_Factory(t) { return new (t || UniSplitModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniSplitModule, { declarations: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniSplitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$6,
                exports: declarations$6,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

class UniIconService {
    get prefix() {
        return this._prefix;
    }
    registry(prefix) {
        this._prefix = prefix;
    }
}
UniIconService.ɵfac = function UniIconService_Factory(t) { return new (t || UniIconService)(); };
UniIconService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: UniIconService, factory: UniIconService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class UniIconComponent {
    constructor(_el, _iconService) {
        this._el = _el;
        this._iconService = _iconService;
    }
    get icon() { return this._icon; }
    set icon(v) {
        if (v !== this._icon) {
            if (v && this._el.nativeElement.classList.contains(this._icon)) {
                this._el.nativeElement.classList.remove(this._icon);
            }
            this._icon = v;
            this._el.nativeElement.classList.add(v);
        }
    }
    ngOnInit() {
        this._el.nativeElement.classList.add(this._iconService.prefix);
    }
}
UniIconComponent.ɵfac = function UniIconComponent_Factory(t) { return new (t || UniIconComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniIconService)); };
UniIconComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniIconComponent, selectors: [["uni-icon"]], hostAttrs: [1, "uni-icon"], inputs: { icon: "icon" }, exportAs: ["uniIcon"], decls: 0, vars: 0, template: function UniIconComponent_Template(rf, ctx) { }, styles: [".uni-icon{display:inline-block}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-icon',
                exportAs: 'uniIcon',
                template: ``,
                styleUrls: ['./icon.component.scss'],
                host: { class: 'uni-icon' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: UniIconService }]; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniIconModule {
}
UniIconModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniIconModule });
UniIconModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniIconModule_Factory(t) { return new (t || UniIconModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniIconModule, { declarations: [UniIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniIconComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniIconComponent],
                exports: [UniIconComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$t = ["uni-button", ""];
const _c1$8 = ["*"];
const UNI_BUTTON_HOST_ATTRIBUTES = [
    'uni-button',
    'uni-link-button',
    'uni-icon-button',
    'uni-fab',
    'uni-mini-fab',
];
class UniButtonComponent {
    constructor(_el) {
        this._el = _el;
        for (const attr of UNI_BUTTON_HOST_ATTRIBUTES) {
            if (this._element.hasAttribute(attr)) {
                this._element.classList.add(attr);
            }
        }
    }
    get _element() {
        return this._el.nativeElement;
    }
}
UniButtonComponent.ɵfac = function UniButtonComponent_Factory(t) { return new (t || UniButtonComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniButtonComponent, selectors: [["button", "uni-button", ""], ["button", "uni-icon-button", ""], ["button", "uni-fab", ""], ["button", "uni-mini-fab", ""], ["button", "uni-link-button", ""]], hostVars: 8, hostBindings: function UniButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniButton"], attrs: _c0$t, ngContentSelectors: _c1$8, decls: 1, vars: 0, template: function UniButtonComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: ["[_nghost-%COMP%]{padding:.3em .55em;font-size:.9em;font-weight:700;outline:0;border:2px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--white);cursor:pointer;border-radius:3px;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out}[_nghost-%COMP%]:disabled{opacity:.6;box-shadow:none!important;cursor:not-allowed}[_nghost-%COMP%]:disabled:active{-webkit-filter:none;filter:none}[_nghost-%COMP%]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.uni-button[_nghost-%COMP%]{background-color:var(--grey)}.uni-button.primary[_nghost-%COMP%]{color:var(--white);background-color:var(--primary)}.uni-button.success[_nghost-%COMP%]{color:var(--white);background-color:var(--success)}.uni-button.warning[_nghost-%COMP%]{color:var(--black);background-color:var(--warning)}.uni-button.danger[_nghost-%COMP%]{color:var(--white);background-color:var(--danger)}.uni-fab[_nghost-%COMP%]{height:50px;width:50px}.uni-button[_nghost-%COMP%], .uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-fab[_nghost-%COMP%]     .uni-icon, .uni-icon-button[_nghost-%COMP%]     .uni-icon, .uni-mini-fab[_nghost-%COMP%]     .uni-icon{font-size:20px}.uni-icon-button[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{height:40px;width:40px}.uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:var(--grey);color:var(--white)}.uni-fab.primary[_nghost-%COMP%], .uni-mini-fab.primary[_nghost-%COMP%]{background-color:var(--primary);color:var(--white)}.uni-fab.success[_nghost-%COMP%], .uni-mini-fab.success[_nghost-%COMP%]{background-color:var(--success);color:var(--white)}.uni-fab.warning[_nghost-%COMP%], .uni-mini-fab.warning[_nghost-%COMP%]{background-color:var(--warning);color:var(--white);color:var(--black)}.uni-fab.danger[_nghost-%COMP%], .uni-mini-fab.danger[_nghost-%COMP%]{background-color:var(--danger);color:var(--white)}.uni-icon-button[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:transparent;opacity:.7;color:var(--white)}.uni-icon-button[_nghost-%COMP%]:hover{opacity:1}.uni-icon-button[_nghost-%COMP%]:hover:disabled{opacity:.6}.uni-icon-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-icon-button.success[_nghost-%COMP%]{color:var(--success)}.uni-icon-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-icon-button.danger[_nghost-%COMP%]{color:var(--danger)}.uni-link-button[_nghost-%COMP%]{background-color:transparent;box-shadow:none}.uni-link-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-link-button.success[_nghost-%COMP%]{color:var(--success)}.uni-link-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-link-button.danger[_nghost-%COMP%]{color:var(--danger)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: `button[uni-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab],
             button[uni-link-button]`,
                exportAs: 'uniButton',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./button.component.scss'],
                host: Object.assign({}, UNI_HOST_COLORS),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniButtonModule {
}
UniButtonModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniButtonModule });
UniButtonModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniButtonModule_Factory(t) { return new (t || UniButtonModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniButtonModule, { declarations: [UniButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniButtonComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniButtonComponent],
                exports: [UniButtonComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

var UniProgressMode;
(function (UniProgressMode) {
    UniProgressMode["Determinate"] = "determinate";
    UniProgressMode["Indeterminate"] = "indeterminate";
})(UniProgressMode || (UniProgressMode = {}));

class UniProgressBarComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.mode = UniProgressMode.Indeterminate;
        this.color = UniColor.Primary;
        this._total = 100;
        this._value = 0;
        this.UniProgressMode = UniProgressMode;
        this._indeterminate = {
            value: 25,
            total: 100,
        };
    }
    get total() { return this._total; }
    set total(v) {
        this._total = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get value() { return this._value; }
    set value(v) {
        this._value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get percentage() {
        return this.mode === UniProgressMode.Determinate ?
            (100 / this.total) * this.value :
            (100 / this._indeterminate.total) * this._indeterminate.value;
    }
}
UniProgressBarComponent.ɵfac = function UniProgressBarComponent_Factory(t) { return new (t || UniProgressBarComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniProgressBarComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniProgressBarComponent, selectors: [["uni-progress-bar"]], hostAttrs: [1, "uni-progress-bar"], hostVars: 10, hostBindings: function UniProgressBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
    } }, inputs: { mode: "mode", color: "color", total: "total", value: "value" }, exportAs: ["uniProgresssBar"], decls: 3, vars: 2, consts: [["width", "100%", "height", "4px"], ["rx", "2px", "width", "100%", 1, "uni-progress-bar-background"], ["rx", "2px", 1, "uni-progress-bar-foreground"]], template: function UniProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "svg", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "rect", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "rect", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.percentage, "%");
    } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-bar{display:-webkit-box;display:flex}.uni-progress-bar.indeterminate .uni-progress-bar-foreground{-webkit-animation:1s linear infinite uni-bar-slide;animation:1s linear infinite uni-bar-slide}.uni-progress-bar.primary .uni-progress-bar-background{fill:var(--primary-a50)}.uni-progress-bar.primary .uni-progress-bar-foreground{fill:var(--primary)}.uni-progress-bar.success .uni-progress-bar-background{fill:var(--success-a50)}.uni-progress-bar.success .uni-progress-bar-foreground{fill:var(--success)}.uni-progress-bar.warning .uni-progress-bar-background{fill:var(--warning-a50)}.uni-progress-bar.warning .uni-progress-bar-foreground{fill:var(--warning)}.uni-progress-bar.danger .uni-progress-bar-background{fill:var(--danger-a50)}.uni-progress-bar.danger .uni-progress-bar-foreground{fill:var(--danger)}.uni-progress-bar .uni-progress-bar-foreground{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-progress-bar',
                exportAs: 'uniProgresssBar',
                templateUrl: './progress-bar.component.html',
                styleUrls: ['./progress-bar.component.scss'],
                host: Object.assign(Object.assign({ class: 'uni-progress-bar' }, UNI_HOST_COLORS), { '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate' }),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniProgressSpinnerComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.mode = UniProgressMode.Indeterminate;
        this.color = UniColor.Primary;
        this._total = 100;
        this._value = 0;
        this._strokeWidth = 5;
        this._diameter = 90;
        this._indeterminate = {
            value: 25,
            total: 100,
        };
        this.UniProgressMode = UniProgressMode;
    }
    get total() { return this._total; }
    set total(v) {
        this._total = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get value() { return this._value; }
    set value(v) {
        this._value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get strokeWidth() { return this._strokeWidth; }
    set strokeWidth(v) {
        this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get diameter() { return this._diameter; }
    set diameter(v) {
        this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(v);
        this._cdr.markForCheck();
    }
    get radius() {
        return (this.diameter / 2) - this.strokeWidth;
    }
    get strokeDasharray() {
        return `${this._circumference} ${this._circumference}`;
    }
    get strokeDashoffset() {
        return this._circumference - this._percentage / 100 * this._circumference;
    }
    get _circumference() {
        return this.radius * 2 * Math.PI;
    }
    get _percentage() {
        return (100 / this._modeTotal) * this._modeValue;
    }
    get _modeValue() {
        return this.mode === UniProgressMode.Determinate ? this.value : this._indeterminate.value;
    }
    get _modeTotal() {
        return this.mode === UniProgressMode.Determinate ? this.total : this._indeterminate.total;
    }
}
UniProgressSpinnerComponent.ɵfac = function UniProgressSpinnerComponent_Factory(t) { return new (t || UniProgressSpinnerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniProgressSpinnerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniProgressSpinnerComponent, selectors: [["uni-progress-spinner"]], hostAttrs: [1, "uni-progress-spinner"], hostVars: 10, hostBindings: function UniProgressSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
    } }, inputs: { mode: "mode", color: "color", total: "total", value: "value", strokeWidth: "strokeWidth", diameter: "diameter" }, exportAs: ["uniProgressSpinner"], decls: 2, vars: 16, template: function UniProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "svg");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "circle");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("stroke-width", ctx.strokeWidth, "px")("stroke-dashoffset", ctx.strokeDashoffset)("stroke-dasharray", ctx.strokeDasharray)("r", ctx.radius, "px")("cx", ctx.diameter / 2, "px")("cy", ctx.diameter / 2, "px");
    } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-spinner{display:inline-block}.uni-progress-spinner.indeterminate circle{-webkit-animation:1s linear infinite uni-spinner-rotate;animation:1s linear infinite uni-spinner-rotate}.uni-progress-spinner.primary circle{stroke:var(--primary)}.uni-progress-spinner.success circle{stroke:var(--success)}.uni-progress-spinner.warning circle{stroke:var(--warning)}.uni-progress-spinner.danger circle{stroke:var(--danger)}.uni-progress-spinner svg circle{fill:transparent;-webkit-transition:stroke-dashoffset .2s;transition:stroke-dashoffset .2s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-progress-spinner',
                exportAs: 'uniProgressSpinner',
                templateUrl: './progress-spinner.component.html',
                styleUrls: ['./progress-spinner.component.scss'],
                host: Object.assign(Object.assign({ class: 'uni-progress-spinner' }, UNI_HOST_COLORS), { '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate' }),
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const declarations$7 = [
    UniProgressBarComponent,
    UniProgressSpinnerComponent,
];
class UniProgressModule {
}
UniProgressModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniProgressModule });
UniProgressModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniProgressModule_Factory(t) { return new (t || UniProgressModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniProgressModule, { declarations: [UniProgressBarComponent,
        UniProgressSpinnerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniProgressBarComponent,
        UniProgressSpinnerComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: declarations$7,
                exports: declarations$7,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

const _c0$u = ["*"];
class UniMarkedComponent {
    constructor(_cdr, _sanitizer, _el) {
        this._cdr = _cdr;
        this._sanitizer = _sanitizer;
        this._el = _el;
        this._options = {
            silent: true,
            smartLists: true,
            gfm: true,
            breaks: true,
            highlight: null,
        };
    }
    get markdown() { return this._markdown; }
    set markdown(v) {
        this._markdown = v;
        this.html = marked__WEBPACK_IMPORTED_MODULE_11___default()(v || '', this._options);
    }
    get highlight() { return this._highlight; }
    set highlight(v) {
        if (v !== this._highlight) {
            this._highlight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;
            this._cdr.markForCheck();
        }
    }
    get sanitize() { return this._sanitize; }
    set sanitize(v) {
        if (v !== this._sanitize) {
            this._sanitize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(v);
            this._cdr.markForCheck();
        }
    }
    get html() { return this._html; }
    set html(v) {
        this._html = this._sanitize ? this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, v) : v;
        this._el.nativeElement.innerHTML = this._html;
        this._cdr.markForCheck();
    }
    _highlightCodeBlock(code) {
        return highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlightAuto(code).value;
    }
}
UniMarkedComponent.ɵfac = function UniMarkedComponent_Factory(t) { return new (t || UniMarkedComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UniMarkedComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniMarkedComponent, selectors: [["uni-marked"]], hostAttrs: [1, "uni-marked"], inputs: { markdown: "markdown", highlight: "highlight", sanitize: "sanitize" }, exportAs: ["uniMarked"], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function UniMarkedComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
    } }, styles: [".uni-marked{display:block}.uni-marked code{color:var(--blood-orange)}.uni-marked table{border-spacing:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-marked table td,.uni-marked table th{padding:10px}.uni-marked table thead tr{background-color:var(--darker)}.uni-marked table thead tr th{text-align:left;color:var(--white);font-weight:500}.uni-marked table thead tr th:first-child{border-top-left-radius:3px}.uni-marked table thead tr th:last-child{border-top-right-radius:3px}.uni-marked table tbody tr{background-color:var(--dark)}.uni-marked table tbody tr:last-child td:first-child{border-bottom-left-radius:3px}.uni-marked table tbody tr:last-child td:last-child{border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniMarkedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-marked',
                exportAs: 'uniMarked',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./marked.component.scss'],
                host: { class: 'uni-marked' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { markdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], highlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sanitize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniMarkedModule {
}
UniMarkedModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniMarkedModule });
UniMarkedModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniMarkedModule_Factory(t) { return new (t || UniMarkedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniMarkedModule, { declarations: [UniMarkedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniMarkedComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniMarkedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniMarkedComponent],
                exports: [UniMarkedComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

class UniCodeComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
    }
    get code() { return this._code; }
    set code(v) {
        this._code = v;
        this.html = this._language ? highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlight(this._language, v).value : highlight_js__WEBPACK_IMPORTED_MODULE_12___default.a.highlightAuto(v).value;
    }
    get language() { return this._language; }
    set language(v) {
        this._language = v;
    }
    get html() { return this._html; }
    set html(v) {
        this._html = v;
        this._cdr.markForCheck();
    }
}
UniCodeComponent.ɵfac = function UniCodeComponent_Factory(t) { return new (t || UniCodeComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UniCodeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: UniCodeComponent, selectors: [["uni-code"]], hostAttrs: [1, "uni-code"], inputs: { code: "code", language: "language" }, exportAs: ["uniCode"], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function UniCodeComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "pre", 0);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", ctx.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".uni-code{display:block;background-color:var(--darkest);color:var(--white);padding:10px;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-code pre{margin:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                moduleId: module.i,
                selector: 'uni-code',
                exportAs: 'uniCode',
                template: `<pre [innerHTML]="html"></pre>`,
                styleUrls: ['./code.component.scss'],
                host: { class: 'uni-code' },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class UniCodeModule {
}
UniCodeModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniCodeModule });
UniCodeModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniCodeModule_Factory(t) { return new (t || UniCodeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniCodeModule, { declarations: [UniCodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniCodeComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniCodeComponent],
                exports: [UniCodeComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

class UniResizeObserverService {
    observe(el, cb, throttle = 100) {
        const observer = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_13__["default"](entries => {
            for (const entry of entries) {
                if (this._timer) {
                    clearTimeout(this._timer);
                    this._timer = undefined;
                }
                this._timer = setTimeout(() => cb(entry.contentRect), throttle);
            }
        });
        observer.observe(el);
        return observer;
    }
}
UniResizeObserverService.ɵfac = function UniResizeObserverService_Factory(t) { return new (t || UniResizeObserverService)(); };
UniResizeObserverService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: UniResizeObserverService, factory: UniResizeObserverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class UniResizeObserverDirective {
    constructor(_el, _resizeObserverService) {
        this._el = _el;
        this._resizeObserverService = _resizeObserverService;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._observer = this._resizeObserverService.observe(this._el.nativeElement, e => {
            this.resize.emit(e);
        });
    }
    ngOnDestroy() {
        this._observer.unobserve(this._el.nativeElement);
    }
}
UniResizeObserverDirective.ɵfac = function UniResizeObserverDirective_Factory(t) { return new (t || UniResizeObserverDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(UniResizeObserverService)); };
UniResizeObserverDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: UniResizeObserverDirective, selectors: [["", "uniResizeObserver", ""]], outputs: { resize: "uniResizeObserver" }, exportAs: ["uniResizeObserver"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                exportAs: 'uniResizeObserver',
                selector: '[uniResizeObserver]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: UniResizeObserverService }]; }, { resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['uniResizeObserver']
        }] }); })();

class UniResizeObserverModule {
}
UniResizeObserverModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: UniResizeObserverModule });
UniResizeObserverModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function UniResizeObserverModule_Factory(t) { return new (t || UniResizeObserverModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UniResizeObserverModule, { declarations: [UniResizeObserverDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UniResizeObserverDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UniResizeObserverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [UniResizeObserverDirective],
                exports: [UniResizeObserverDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=uniform-components.js.map


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'components',
        loadChildren: () => __webpack_require__.e(/*! import() | features-components-components-module */ "features-components-components-module").then(__webpack_require__.bind(null, /*! ./features/components/components.module */ "./src/app/features/components/components.module.ts"))
            .then(m => m.ComponentsModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/sidenav/sidenav.component */ "./src/app/features/sidenav/sidenav.component.ts");
/* harmony import */ var _features_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/toolbar/toolbar.component */ "./src/app/features/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class AppComponent {
    constructor() {
        this.toggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.sidenavItems = [
            {
                text: 'Buttons/Indicators',
                icon: 'mdi-circle-outline',
                expanded: true,
                routes: [
                    { text: 'Button', route: '/components/button' },
                    { text: 'Icon', route: '/components/icon' },
                    { text: 'Progress', route: '/components/progress' },
                ],
            },
            {
                text: 'Layout',
                icon: 'mdi-view-dashboard',
                expanded: true,
                routes: [
                    { text: 'Card', route: '/components/card' },
                    { text: 'Toolbar', route: '/components/toolbar' },
                    { text: 'Sidenav', route: '/components/sidenav' },
                    { text: 'Tab', route: '/components/tab' },
                    { text: 'Split', route: '/components/split' },
                ],
            },
            {
                text: 'Form Controls',
                icon: 'mdi-keyboard-outline',
                expanded: true,
                routes: [
                    { text: 'Input', route: '/components/input' },
                    { text: 'Select', route: '/components/select' },
                    { text: 'Checkbox', route: '/components/checkbox' },
                    { text: 'Slide Toggle', route: '/components/slide-toggle' },
                ],
            },
            {
                text: 'Overlays',
                icon: 'mdi-checkbox-multiple-blank',
                expanded: true,
                routes: [
                    { text: 'Tooltip', route: '/components/tooltip' },
                    { text: 'Popover', route: '/components/popover' },
                    { text: 'Toast', route: '/components/toast' },
                    { text: 'Dialog', route: '/components/dialog' },
                ],
            },
            {
                text: 'Code',
                icon: 'mdi-code-tags',
                expanded: true,
                routes: [
                    { text: 'Marked', route: '/components/marked' },
                    { text: 'Code', route: '/components/code' },
                ],
            },
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[3, "items", "open", "backdropClicked"], ["title", "/components/button", 3, "toggle"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClicked", function AppComponent_Template_app_sidenav_backdropClicked_0_listener($event) { return ctx.toggle$.next(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function AppComponent_Template_app_toolbar_toggle_2_listener($event) { return ctx.toggle$.next(!ctx.toggle$.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sidenavItems)("open", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.toggle$));
    } }, directives: [_features_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _features_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100% - 60px);\n  display: block;\n  overflow-y: auto;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIiwiLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _features_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/sidenav */ "./src/app/features/sidenav/index.ts");
/* harmony import */ var _features_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/toolbar */ "./src/app/features/toolbar/index.ts");










class AppModule {
    constructor(iconService) {
        this.iconService = iconService;
        this.iconService.registry('mdi');
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconService"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"],
            _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"],
            _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"],
        _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"],
        _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _features_sidenav__WEBPACK_IMPORTED_MODULE_6__["SidenavModule"],
                    _features_toolbar__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarModule"],
                    _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], function () { return [{ type: _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/sidenav/index.ts":
/*!*******************************************!*\
  !*** ./src/app/features/sidenav/index.ts ***!
  \*******************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidenav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.module */ "./src/app/features/sidenav/sidenav.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return _sidenav_module__WEBPACK_IMPORTED_MODULE_0__["SidenavModule"]; });




/***/ }),

/***/ "./src/app/features/sidenav/sidenav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/sidenav/sidenav.component.ts ***!
  \*******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function SidenavComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SidenavComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r6.routes ? _r1 : _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r6));
} }
function SidenavComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_2_ng_container_1_Template, 2, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function SidenavComponent_ng_template_5_div_6_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SidenavComponent_ng_template_5_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_5_div_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, subItem_r11));
} }
function SidenavComponent_ng_template_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_template_5_div_6_ng_container_1_Template, 2, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r8.routes);
} }
function SidenavComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_ng_template_5_Template_div_click_1_listener($event) { const item_r8 = ctx.$implicit; return item_r8.expanded = !item_r8.expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "uni-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "uni-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_ng_template_5_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", item_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.expanded);
} }
function SidenavComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r15.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.text);
} }
const _c1 = ["*"];
class SidenavComponent {
    constructor() {
        this.items = [];
        this.open = false;
        this.backdropClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onOpenChange(e) {
        if (!e) {
            this.backdropClicked.emit();
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], inputs: { items: "items", open: "open" }, outputs: { backdropClicked: "backdropClicked" }, ngContentSelectors: _c1, decls: 9, vars: 1, consts: [[3, "backdropClicked"], ["position", "start", "mode", "side", "color", "secondary", 3, "open", "openChange"], ["uniSidenavBody", ""], ["groupTpl", ""], ["itemTpl", ""], [1, "sidenav--list"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sidenav--list-group"], [1, "sidenav--list-group-text", 3, "click"], [1, "item-icon", 3, "icon"], [1, "text"], ["icon", "mdi-chevron-right", 1, "expand-icon"], ["class", "sidenav--list-group-items", 4, "ngIf"], [1, "sidenav--list-group-items"], ["routerLinkActive", "active", 1, "sidenav--list-item", 3, "routerLink"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClicked", function SidenavComponent_Template_uni_sidenav_container_backdropClicked_0_listener($event) { return ctx.backdropClicked.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "uni-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openChange", function SidenavComponent_Template_uni_sidenav_openChange_1_listener($event) { return ctx.onOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "uni-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_ng_template_5_Template, 7, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.open);
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContainerComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavBodyDirective"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniSidenavContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _uniform_components__WEBPACK_IMPORTED_MODULE_1__["UniIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  cursor: pointer;\n  outline: none;\n  padding: 15px;\n  opacity: 0.6;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--darker);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  box-shadow: inset 3px 0 0 0 var(--primary);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]:hover   .sidenav--list-group-text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group.expanded[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: var(--darker);\n  opacity: 0.6;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  margin: 15px 15px 15px 0;\n}\n[_nghost-%COMP%]   uni-sidenav-container[_ngcontent-%COMP%]   uni-sidenav[_ngcontent-%COMP%]   .sidenav--list[_ngcontent-%COMP%]   .sidenav--list-group[_ngcontent-%COMP%]   .sidenav--list-group-text[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  margin: 15px 15px 15px 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9hYWNlYm8vRG9jdW1lbnRzL0dpdGh1Yi91bmlmb3JtL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb3JlL3N0eWxlcy9fYm94LXNoYWRvdy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNKRjtBRE1FO0VBQ0UsWUFBQTtBQ0pKO0FET007RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0xSO0FET1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFsQkE7RUFtQkEsWUFsQkE7QUNhVjtBRE9VO0VBQ0Usc0NBQUE7QUNMWjtBRFFVO0VBRUUsVUFBQTtFQUNBLDBDQUFBO0FDUFo7QURXUTtFQUNFLGdCQUFBO0FDVFY7QURZWTtFQUNFLFVBQUE7QUNWZDtBRGdCYztFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNkaEI7QURtQlU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFlBbkRGO0VBb0RFLGVBQUE7RUFDQSwrR0V4REs7QUR1Q2pCO0FEbUJZO0VBQ0UsWUF6REo7QUN3Q1Y7QURvQlk7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSx3QkFBQTtBQ2xCZDtBRHFCWTtFQUNFLHdCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ25CZCIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZmVhdHVyZXMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2NvcmUvc3R5bGVzL2JveC1zaGFkb3cnO1xuXG4kcGFkZGluZzogMTVweDtcbiRvcGFjaXR5OiAwLjY7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcblxuICB1bmktc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIHVuaS1zaWRlbmF2IHtcbiAgICAgIC5zaWRlbmF2LS1saXN0IHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgLnNpZGVuYXYtLWxpc3QtaXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcbiAgICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcblxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFya2VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwIDAgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gICAgICAgICAgICAgIC5leHBhbmQtaWNvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyKTtcbiAgICAgICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHVuaS1zaGFkb3ctMmRwO1xuXG4gICAgICAgICAgICAuaXRlbS1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAkcGFkZGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luOiAkcGFkZGluZyAkcGFkZGluZyAkcGFkZGluZyAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXhwYW5kLWljb24ge1xuICAgICAgICAgICAgICBtYXJnaW46ICRwYWRkaW5nICRwYWRkaW5nICRwYWRkaW5nIDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgb3BhY2l0eTogMC42O1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrZXIpO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWl0ZW06aG92ZXIsIDpob3N0IHVuaS1zaWRlbmF2LWNvbnRhaW5lciB1bmktc2lkZW5hdiAuc2lkZW5hdi0tbGlzdCAuc2lkZW5hdi0tbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDAgMCB2YXIoLS1wcmltYXJ5KTtcbn1cbjpob3N0IHVuaS1zaWRlbmF2LWNvbnRhaW5lciB1bmktc2lkZW5hdiAuc2lkZW5hdi0tbGlzdCAuc2lkZW5hdi0tbGlzdC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXA6aG92ZXIgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAuZXhwYW5kZWQgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCAuZXhwYW5kLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlcik7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG46aG9zdCB1bmktc2lkZW5hdi1jb250YWluZXIgdW5pLXNpZGVuYXYgLnNpZGVuYXYtLWxpc3QgLnNpZGVuYXYtLWxpc3QtZ3JvdXAgLnNpZGVuYXYtLWxpc3QtZ3JvdXAtdGV4dCAuaXRlbS1pY29uIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWdyb3VwIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQgLnRleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xufVxuOmhvc3QgdW5pLXNpZGVuYXYtY29udGFpbmVyIHVuaS1zaWRlbmF2IC5zaWRlbmF2LS1saXN0IC5zaWRlbmF2LS1saXN0LWdyb3VwIC5zaWRlbmF2LS1saXN0LWdyb3VwLXRleHQgLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn0iLCIkdW5pLXNoYWRvdy0yZHA6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuJHVuaS1zaGFkb3ctNGRwOiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4kdW5pLXNoYWRvdy02ZHA6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4kdW5pLXNoYWRvdy04ZHA6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcblxuJHVuaS1zaGFkb3ctMTZkcDogMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgIDAgIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backdropClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/sidenav/sidenav.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/sidenav/sidenav.module.ts ***!
  \****************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/features/sidenav/sidenav.component.ts");






class SidenavModule {
}
SidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidenavModule_Factory(t) { return new (t || SidenavModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]], exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
                exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniSidenavModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/toolbar/index.ts":
/*!*******************************************!*\
  !*** ./src/app/features/toolbar/index.ts ***!
  \*******************************************/
/*! exports provided: ToolbarModule, ToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.module */ "./src/app/features/toolbar/toolbar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return _toolbar_module__WEBPACK_IMPORTED_MODULE_0__["ToolbarModule"]; });

/* harmony import */ var _toolbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.service */ "./src/app/features/toolbar/toolbar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarService", function() { return _toolbar_service__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"]; });





/***/ }),

/***/ "./src/app/features/toolbar/toolbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/toolbar/toolbar.component.ts ***!
  \*******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.service */ "./src/app/features/toolbar/toolbar.service.ts");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["uniIcon"];
function ToolbarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
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
} }
class ToolbarComponent {
    constructor(toolbarService) {
        this.toolbarService = toolbarService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    github() {
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.repository, '_blank');
    }
    component() {
        if (this.toolbarService.component) {
            window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components}/${this.toolbarService.component}`, '_blank');
        }
        else {
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components, '_blank');
        }
    }
    documentation() {
        const comp = this.toolbarService.component;
        window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github.components}/${comp}/${comp}.md`);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    } }, inputs: { title: "title" }, outputs: { toggle: "toggle" }, decls: 14, vars: 5, consts: [["color", "primary"], ["uni-icon-button", "", 3, "click"], ["icon", "mdi-menu"], ["title", "", "uniTooltip", "View Source", "uniTooltipPosition", "bottom", 1, "uni-toolbar-title", 3, "click"], [1, "uni-toolbar-spacer"], ["uni-icon-button", "", "uniPopoverPosition", "bottom left", 3, "uniPopover", "uniPopoverOrigin"], ["icon", "mdi-information-outline"], ["uniIcon", ""], ["icon", "mdi-github-circle"], ["info", ""], [1, "info"], [1, "labels"], [1, "label"], [1, "values"], [1, "value"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "uni-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_1_listener($event) { return ctx.toggle.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "uni-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_3_listener($event) { return ctx.component(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "uni-icon", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_10_listener($event) { return ctx.github(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "uni-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolbarComponent_ng_template_12_Template, 15, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.toolbarService.$title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uniPopover", _r17)("uniPopoverOrigin", ctx.icon);
    } }, directives: [_uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniToolbarComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniButtonComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniIconComponent"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniTooltipDirective"], _uniform_components__WEBPACK_IMPORTED_MODULE_3__["UniPopoverDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .uni-toolbar-title[_ngcontent-%COMP%] {\n  margin: auto 10px;\n  cursor: pointer;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .uni-toolbar-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  font-weight: 550;\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .info[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2Viby9Eb2N1bWVudHMvR2l0aHViL3VuaWZvcm0vcHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mZWF0dXJlcy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0FKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNESjtBREdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRE47QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRFI7QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0FDSFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2ZlYXR1cmVzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLnVuaS10b29sYmFyLXRpdGxlIHtcbiAgICBtYXJnaW46IGF1dG8gMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC51bmktdG9vbGJhci1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5sYWJlbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZhbHVlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC51bmktdG9vbGJhci10aXRsZSB7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAudW5pLXRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG46aG9zdCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCAuaW5mbyAubGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5pbmZvIC5sYWJlbHMgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbjpob3N0IC5pbmZvIC52YWx1ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmluZm8gLnZhbHVlcyAudmFsdWUge1xuICBmb250LXNpemU6IDE0cHQ7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _toolbar_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uniIcon', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/features/toolbar/toolbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/toolbar/toolbar.module.ts ***!
  \****************************************************/
/*! exports provided: ToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return ToolbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _uniform_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uniform/components */ "../../dist/components/fesm2015/uniform-components.js");
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.component */ "./src/app/features/toolbar/toolbar.component.ts");
/* harmony import */ var _toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar.service */ "./src/app/features/toolbar/toolbar.service.ts");






class ToolbarModule {
}
ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToolbarModule });
ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToolbarModule_Factory(t) { return new (t || ToolbarModule)(); }, providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToolbarModule, { declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]], exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniToolbarModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniButtonModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniIconModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniTooltipModule"], _uniform_components__WEBPACK_IMPORTED_MODULE_2__["UniPopoverModule"]],
                providers: [_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/toolbar/toolbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/toolbar/toolbar.service.ts ***!
  \*****************************************************/
/*! exports provided: ToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarService", function() { return ToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' });
class ToolbarService {
    constructor() {
        this.base = '@uniform/components';
        this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    get $title() {
        return this.component$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(c => `${this.base}${c ? `/${c}` : ''}`));
    }
    get component() {
        return this.component$.value;
    }
    setTitle(component) {
        this.component$.next(component);
    }
}
ToolbarService.ɵfac = function ToolbarService_Factory(t) { return new (t || ToolbarService)(); };
ToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToolbarService, factory: ToolbarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    github: {
        repository: 'https://github.com/aacebo/uniform',
        components: 'https://github.com/aacebo/uniform/tree/master/projects/components/src/lib',
        raw: 'https://raw.githubusercontent.com/aacebo/uniform/master/projects/components/src/lib',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aacebo/Documents/Github/uniform/projects/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map