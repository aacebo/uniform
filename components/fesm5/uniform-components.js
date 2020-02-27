import { ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, ɵɵelementContainer, ɵɵtext, ɵɵnextContext, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵɵclassProp, ɵɵInheritDefinitionFeature, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵproperty, ɵɵgetInheritedFactory, Component, ChangeDetectionStrategy, ɵɵdirectiveInject, ElementRef, ɵɵlistener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, InjectionToken, ɵɵelementStart, ɵɵelementEnd, ɵɵadvance, ɵɵpipe, ɵɵstyleProp, ɵɵpipeBind1, Inject, ɵɵinject, ɵɵdefineInjectable, Injectable, ComponentFactoryResolver, ɵɵviewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵprojectionDef, ɵɵprojection, ChangeDetectorRef, ViewEncapsulation, EventEmitter, ɵɵcontentQuery, ContentChild, forwardRef, Output, ɵɵtextInterpolate, ɵɵProvidersFeature, ContentChildren, ɵɵhostProperty, ɵɵelement, TemplateRef, ɵɵstaticContentQuery, ɵɵgetCurrentView, ɵɵrestoreView, ViewChildren, ɵɵcomponentHostSyntheticListener, ɵɵresolveDocument, ɵɵupdateSyntheticHostBinding, HostListener, ɵɵnamespaceSVG, SecurityContext, ɵɵsanitizeHtml } from '@angular/core';
import { NgTemplateOutlet, CommonModule, NgIf, AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { Overlay, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { __extends, __assign, __spread, __values } from 'tslib';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Subject, BehaviorSubject, merge } from 'rxjs';
import { take, startWith, mergeMap, takeUntil } from 'rxjs/operators';
import { NgForm, FormGroupDirective, NG_VALUE_ACCESSOR, CheckboxControlValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import marked from 'marked';
import hljs from 'highlight.js';
import ResizeObserver from 'resize-observer-polyfill';

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
    '[class.primary]': "color === \"" + UniColor.Primary + "\"",
    '[class.success]': "color === \"" + UniColor.Success + "\"",
    '[class.warning]': "color === \"" + UniColor.Warning + "\"",
    '[class.danger]': "color === \"" + UniColor.Danger + "\"",
};
function uniColors(color) {
    return {
        primary: color === UniColor.Primary,
        success: color === UniColor.Success,
        warning: color === UniColor.Warning,
        danger: color === UniColor.Danger,
    };
}

var UNI_HOST_SIZES = {
    '[class.small]': "size === \"" + UniSize.Small + "\"",
    '[class.large]': "size === \"" + UniSize.Large + "\"",
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
        originX: originX,
        originY: originY,
        overlayX: overlayX,
        overlayY: overlayY,
        offsetX: offsetX,
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
    '[class.top-right]': 'position === "top right"',
};

var UniPositionBase = /** @class */ (function () {
    function UniPositionBase() {
    }
    Object.defineProperty(UniPositionBase.prototype, "isString", {
        get: function () {
            return typeof this.content === 'string';
        },
        enumerable: true,
        configurable: true
    });
    UniPositionBase.ɵfac = function UniPositionBase_Factory(t) { return new (t || UniPositionBase)(); };
    UniPositionBase.ɵdir = ɵɵdefineDirective({ type: UniPositionBase, inputs: { content: "content", position: "position" } });
    return UniPositionBase;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniPositionBase, [{
        type: Directive
    }], null, { content: [{
            type: Input
        }], position: [{
            type: Input
        }] }); })();

function UniTooltipComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function UniTooltipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    var ctx_r27 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r27.content, "\n");
} }
var UniTooltipComponent = /** @class */ (function (_super) {
    __extends(UniTooltipComponent, _super);
    function UniTooltipComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniTooltipComponent.ɵfac = function UniTooltipComponent_Factory(t) { return ɵUniTooltipComponent_BaseFactory(t || UniTooltipComponent); };
    UniTooltipComponent.ɵcmp = ɵɵdefineComponent({ type: UniTooltipComponent, selectors: [["uni-tooltip"]], hostAttrs: [1, "uni-tooltip"], hostVars: 16, hostBindings: function UniTooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
        } }, features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["default", ""]], template: function UniTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, UniTooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            ɵɵtemplate(1, UniTooltipComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r26 = ɵɵreference(2);
            ɵɵproperty("ngTemplateOutlet", ctx.isString ? _r26 : ctx.content);
        } }, directives: [NgTemplateOutlet], styles: ["[_nghost-%COMP%]{max-width:250px;overflow-wrap:break-word;padding:10px;border-radius:3px;font-size:12px;font-weight:500;background-color:var(--black);color:var(--white);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--black);border:2px solid var(--black)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--black);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--black);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"], changeDetection: 0 });
    return UniTooltipComponent;
}(UniPositionBase));
var ɵUniTooltipComponent_BaseFactory = ɵɵgetInheritedFactory(UniTooltipComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTooltipComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.scss'],
                host: __assign({ class: 'uni-tooltip' }, UNI_POSITIONS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var UniTooltipDirective = /** @class */ (function () {
    function UniTooltipDirective(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.panelClass = 'uni-tooltip-panel';
    }
    Object.defineProperty(UniTooltipDirective.prototype, "_vertical", {
        get: function () {
            return this.position === UniPosition.Top ||
                this.position === UniPosition.Bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTooltipDirective.prototype, "_positionStrategy", {
        get: function () {
            return this._overlay
                .position()
                .flexibleConnectedTo(this.origin || this._el)
                .withFlexibleDimensions(true)
                .withPush(this._vertical ? true : false)
                .withViewportMargin(8)
                .withPositions([getUniPosition(this.position)]);
        },
        enumerable: true,
        configurable: true
    });
    UniTooltipDirective.prototype.ngOnInit = function () {
        var positionStrategy = this._positionStrategy;
        this._overlayRef = this._overlay.create({
            positionStrategy: positionStrategy,
            panelClass: this.panelClass,
        });
    };
    UniTooltipDirective.prototype.onMouseEnter = function () {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            var portal = new ComponentPortal(UniTooltipComponent);
            var ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    };
    UniTooltipDirective.prototype.onMouseLeave = function () {
        this._overlayRef.detach();
    };
    UniTooltipDirective.ɵfac = function UniTooltipDirective_Factory(t) { return new (t || UniTooltipDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef)); };
    UniTooltipDirective.ɵdir = ɵɵdefineDirective({ type: UniTooltipDirective, selectors: [["", "uniTooltip", ""]], hostBindings: function UniTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseenter", function UniTooltipDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniTooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
        } }, inputs: { content: ["uniTooltip", "content"], disabled: ["uniTooltipDisabled", "disabled"], position: ["uniTooltipPosition", "position"], panelClass: ["uniTooltipPanelClass", "panelClass"], origin: ["uniTooltipOrigin", "origin"] }, exportAs: ["uniTooltip"] });
    return UniTooltipDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[uniTooltip]',
                exportAs: 'uniTooltip',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                },
            }]
    }], function () { return [{ type: Overlay }, { type: ElementRef }]; }, { content: [{
            type: Input,
            args: ['uniTooltip']
        }], disabled: [{
            type: Input,
            args: ['uniTooltipDisabled']
        }], position: [{
            type: Input,
            args: ['uniTooltipPosition']
        }], panelClass: [{
            type: Input,
            args: ['uniTooltipPanelClass']
        }], origin: [{
            type: Input,
            args: ['uniTooltipOrigin']
        }] }); })();

var UniTooltipModule = /** @class */ (function () {
    function UniTooltipModule() {
    }
    UniTooltipModule.ɵmod = ɵɵdefineNgModule({ type: UniTooltipModule });
    UniTooltipModule.ɵinj = ɵɵdefineInjector({ factory: function UniTooltipModule_Factory(t) { return new (t || UniTooltipModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniTooltipModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniTooltipModule, { declarations: [UniTooltipComponent, UniTooltipDirective], imports: [CommonModule, OverlayModule], exports: [UniTooltipDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [UniTooltipComponent, UniTooltipDirective],
                entryComponents: [UniTooltipComponent],
                exports: [UniTooltipDirective],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();

function UniPopoverComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function UniPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    var ctx_r30 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r30.content, "\n");
} }
var UniPopoverComponent = /** @class */ (function (_super) {
    __extends(UniPopoverComponent, _super);
    function UniPopoverComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniPopoverComponent.ɵfac = function UniPopoverComponent_Factory(t) { return ɵUniPopoverComponent_BaseFactory(t || UniPopoverComponent); };
    UniPopoverComponent.ɵcmp = ɵɵdefineComponent({ type: UniPopoverComponent, selectors: [["uni-popover"]], hostAttrs: [1, "uni-popover"], hostVars: 16, hostBindings: function UniPopoverComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
        } }, features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["default", ""]], template: function UniPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, UniPopoverComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            ɵɵtemplate(1, UniPopoverComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r29 = ɵɵreference(2);
            ɵɵproperty("ngTemplateOutlet", ctx.isString ? _r29 : ctx.content);
        } }, directives: [NgTemplateOutlet], styles: ["[_nghost-%COMP%]{font-size:12px;max-width:250px;padding:15px;overflow-wrap:break-word;border-radius:3px;background-color:var(--white);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4);color:var(--black);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--white);border:2px solid var(--white)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--white);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--white);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--white);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--white);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--white);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--white);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"], changeDetection: 0 });
    return UniPopoverComponent;
}(UniPositionBase));
var ɵUniPopoverComponent_BaseFactory = ɵɵgetInheritedFactory(UniPopoverComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniPopoverComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-popover',
                templateUrl: './popover.component.html',
                styleUrls: ['./popover.component.scss'],
                host: __assign({ class: 'uni-popover' }, UNI_POSITIONS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var UniPopoverTrigger;
(function (UniPopoverTrigger) {
    UniPopoverTrigger["Click"] = "click";
    UniPopoverTrigger["Hover"] = "hover";
})(UniPopoverTrigger || (UniPopoverTrigger = {}));

var UniPopoverDirective = /** @class */ (function () {
    function UniPopoverDirective(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.trigger = UniPopoverTrigger.Click;
        this.panelClass = 'uni-popover-panel';
        this.hasBackdrop = true;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
    }
    Object.defineProperty(UniPopoverDirective.prototype, "_vertical", {
        get: function () {
            return this.position === UniPosition.Top ||
                this.position === UniPosition.Bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniPopoverDirective.prototype, "_positionStrategy", {
        get: function () {
            return this._overlay
                .position()
                .flexibleConnectedTo(this.origin || this._el)
                .withFlexibleDimensions(true)
                .withPush(this._vertical ? true : false)
                .withViewportMargin(8)
                .withPositions([getUniPosition(this.position)]);
        },
        enumerable: true,
        configurable: true
    });
    UniPopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._overlayRef = this._overlay.create({
            positionStrategy: this._positionStrategy,
            panelClass: this.panelClass,
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass,
        });
        this._overlayRef.backdropClick().subscribe(function () {
            _this._hide();
        });
    };
    UniPopoverDirective.prototype.onMouseEnter = function () {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._show();
        }
    };
    UniPopoverDirective.prototype.onMouseLeave = function () {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._hide();
        }
    };
    UniPopoverDirective.prototype.onClick = function () {
        if (this.trigger === UniPopoverTrigger.Click) {
            if (this._overlayRef.hasAttached()) {
                this._hide();
            }
            else {
                this._show();
            }
        }
    };
    UniPopoverDirective.prototype._show = function () {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            var portal = new ComponentPortal(UniPopoverComponent);
            var ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    };
    UniPopoverDirective.prototype._hide = function () {
        this._overlayRef.detach();
    };
    UniPopoverDirective.ɵfac = function UniPopoverDirective_Factory(t) { return new (t || UniPopoverDirective)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef)); };
    UniPopoverDirective.ɵdir = ɵɵdefineDirective({ type: UniPopoverDirective, selectors: [["", "uniPopover", ""]], hostBindings: function UniPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseenter", function UniPopoverDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniPopoverDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function UniPopoverDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        } }, inputs: { content: ["uniPopover", "content"], disabled: ["uniPopoverDisabled", "disabled"], position: ["uniPopoverPosition", "position"], trigger: ["uniPopoverTrigger", "trigger"], panelClass: ["uniPopoverPanelClass", "panelClass"], hasBackdrop: ["uniPopoverHasBackdrop", "hasBackdrop"], backdropClass: ["uniPopoverBackdropClass", "backdropClass"], origin: ["uniPopoverOrigin", "origin"] }, exportAs: ["uniPopover"] });
    return UniPopoverDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[uniPopover]',
                exportAs: 'uniPopover',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: Overlay }, { type: ElementRef }]; }, { content: [{
            type: Input,
            args: ['uniPopover']
        }], disabled: [{
            type: Input,
            args: ['uniPopoverDisabled']
        }], position: [{
            type: Input,
            args: ['uniPopoverPosition']
        }], trigger: [{
            type: Input,
            args: ['uniPopoverTrigger']
        }], panelClass: [{
            type: Input,
            args: ['uniPopoverPanelClass']
        }], hasBackdrop: [{
            type: Input,
            args: ['uniPopoverHasBackdrop']
        }], backdropClass: [{
            type: Input,
            args: ['uniPopoverBackdropClass']
        }], origin: [{
            type: Input,
            args: ['uniPopoverOrigin']
        }] }); })();

var UniPopoverModule = /** @class */ (function () {
    function UniPopoverModule() {
    }
    UniPopoverModule.ɵmod = ɵɵdefineNgModule({ type: UniPopoverModule });
    UniPopoverModule.ɵinj = ɵɵdefineInjector({ factory: function UniPopoverModule_Factory(t) { return new (t || UniPopoverModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniPopoverModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniPopoverModule, { declarations: [UniPopoverComponent, UniPopoverDirective], imports: [CommonModule, OverlayModule], exports: [UniPopoverDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniPopoverModule, [{
        type: NgModule,
        args: [{
                declarations: [UniPopoverComponent, UniPopoverDirective],
                entryComponents: [UniPopoverComponent],
                exports: [UniPopoverDirective],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();

var UNI_TOAST_OPTIONS = new InjectionToken('UNI_TOAST_OPTIONS');

var UNI_TOAST_CONFIG = new InjectionToken('UNI_TOAST_CONFIG');
var UNI_TOAST_DEFAULT_CONFIG = {
    progressBar: true,
    tapToDismiss: true,
    margin: 10,
};

var UniToastRef = /** @class */ (function () {
    function UniToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        this._closed$ = new Subject();
    }
    Object.defineProperty(UniToastRef.prototype, "closed$", {
        get: function () {
            return this._closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniToastRef.prototype, "config", {
        get: function () {
            return this._overlayRef.getConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniToastRef.prototype, "position", {
        get: function () {
            return this._overlayRef.overlayElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    UniToastRef.prototype.dismiss = function () {
        this._closed$.next();
        this._overlayRef.detach();
    };
    UniToastRef.prototype.updatePosition = function (strategy) {
        this._overlayRef.updatePositionStrategy(strategy);
    };
    return UniToastRef;
}());

function UniToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r31.options.title, " ");
} }
function UniToastComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = ɵɵnextContext();
    ɵɵstyleProp("width", ɵɵpipeBind1(1, 2, ctx_r32.progress$), "%");
} }
var UniToastComponent = /** @class */ (function () {
    function UniToastComponent(config, options, _toastRef) {
        this.config = config;
        this.options = options;
        this._toastRef = _toastRef;
        this.progress$ = new BehaviorSubject(0);
        this._ticks = 25;
        this._total = 100;
    }
    Object.defineProperty(UniToastComponent.prototype, "_tick", {
        get: function () {
            return (this._total / this.options.duration) * this._ticks;
        },
        enumerable: true,
        configurable: true
    });
    UniToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.options.duration) {
            this._timeout = setTimeout(function () {
                _this._toastRef.dismiss();
            }, this.options.duration);
            if (this.config.progressBar) {
                this._interval = setInterval(function () {
                    _this.progress$.next(_this.progress$.value + _this._tick);
                }, this._ticks);
            }
        }
    };
    UniToastComponent.prototype.ngOnDestroy = function () {
        if (this._timeout) {
            clearTimeout(this._timeout);
            if (this._interval) {
                clearInterval(this._interval);
            }
        }
    };
    UniToastComponent.prototype.onClick = function () {
        if (this.config.tapToDismiss) {
            this._toastRef.dismiss();
        }
    };
    UniToastComponent.ɵfac = function UniToastComponent_Factory(t) { return new (t || UniToastComponent)(ɵɵdirectiveInject(UNI_TOAST_CONFIG), ɵɵdirectiveInject(UNI_TOAST_OPTIONS), ɵɵdirectiveInject(UniToastRef)); };
    UniToastComponent.ɵcmp = ɵɵdefineComponent({ type: UniToastComponent, selectors: [["uni-toast"]], hostAttrs: [1, "uni-toast"], hostVars: 10, hostBindings: function UniToastComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function UniToastComponent_click_HostBindingHandler($event) { return ctx.onClick(); });
        } if (rf & 2) {
            ɵɵclassProp("info", ctx.options.type === "info")("success", ctx.options.type === "success")("warning", ctx.options.type === "warning")("danger", ctx.options.type === "danger")("dismissable", ctx.config.tapToDismiss);
        } }, exportAs: ["uniToast"], decls: 5, vars: 3, consts: [[1, "uni-toast-content"], ["class", "uni-toast-title", 4, "ngIf"], [1, "uni-toast-message"], ["class", "uni-toast-progressbar", 3, "width", 4, "ngIf"], [1, "uni-toast-title"], [1, "uni-toast-progressbar"]], template: function UniToastComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, UniToastComponent_div_1_Template, 2, 1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(4, UniToastComponent_div_4_Template, 2, 4, "div", 3);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.options.title);
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.options.message, " ");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.config.progressBar);
        } }, directives: [NgIf], pipes: [AsyncPipe], styles: ["@-webkit-keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}@keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}[_nghost-%COMP%]{visibility:hidden;font-size:12pt;color:var(--white);border-radius:3px;min-width:200px;-webkit-animation:.5s both uniFadeIn;animation:.5s both uniFadeIn}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;padding:15px 20px}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]   .uni-toast-title[_ngcontent-%COMP%]{font-size:14pt;font-weight:550}[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{height:5px;border-bottom-left-radius:3px}.dismissable[_nghost-%COMP%]{cursor:pointer}.info[_nghost-%COMP%]{background-color:var(--primary)}.info[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--primary-l20)}.info[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--primary-l20)}.success[_nghost-%COMP%]{background-color:var(--success)}.success[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--success-l20)}.success[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--success-l20)}.warning[_nghost-%COMP%]{background-color:var(--warning)}.warning[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--warning-l20)}.warning[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--warning-l20)}.danger[_nghost-%COMP%]{background-color:var(--danger)}.danger[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--danger-l20)}.danger[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--danger-l20)}"], changeDetection: 0 });
    return UniToastComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniToastComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
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
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [UNI_TOAST_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [UNI_TOAST_OPTIONS]
            }] }, { type: UniToastRef }]; }, null); })();

var UniToastPosition;
(function (UniToastPosition) {
    UniToastPosition["TopLeft"] = "top left";
    UniToastPosition["TopRight"] = "top right";
    UniToastPosition["BottomLeft"] = "bottom left";
    UniToastPosition["BottomRight"] = "bottom right";
})(UniToastPosition || (UniToastPosition = {}));

var UniToastService = /** @class */ (function () {
    function UniToastService(_config, _overlay) {
        this._config = _config;
        this._overlay = _overlay;
        this._index = -1;
        this._toasts = [];
    }
    Object.defineProperty(UniToastService.prototype, "_id", {
        get: function () {
            this._index++;
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    UniToastService.prototype.open = function (options) {
        return this._create(UniToastComponent, options);
    };
    UniToastService.prototype.create = function (component, options) {
        return this._create(component, options);
    };
    UniToastService.prototype.remove = function (id) {
        for (var i = 0; i < this._toasts.length; i++) {
            if (this._toasts[i].id === id) {
                this._toasts.splice(i, 1);
                return i;
            }
        }
        return -1;
    };
    UniToastService.prototype.find = function (id) {
        return this._toasts.find(function (t) { return t.id === id; });
    };
    UniToastService.prototype._create = function (component, options) {
        var _this = this;
        var latest = this._getLatestByPosition(options.position);
        var position = latest ? latest.ref.position : undefined;
        var overlayRef = this._overlay.create({
            panelClass: options.panelClass,
            positionStrategy: this._getPositionStrategy(options.position, position),
        });
        var toastRef = new UniToastRef(overlayRef);
        var portal = new ComponentPortal(component, null, this._getInjector(toastRef, options));
        var instance = overlayRef.attach(portal).instance;
        var toast = {
            id: this._id,
            type: options.type,
            position: options.position,
            component: instance,
            ref: toastRef,
        };
        toastRef.closed$.pipe(take(1)).subscribe(function () {
            _this.remove(toast.id);
            _this._updatePositions(toast.position);
        });
        this._toasts.push(toast);
        return toast;
    };
    UniToastService.prototype._getInjector = function (ref, options) {
        var tokens = new WeakMap();
        tokens.set(UniToastRef, ref);
        tokens.set(UNI_TOAST_OPTIONS, options);
        tokens.set(UNI_TOAST_CONFIG, this._config);
        return new PortalInjector(null, tokens);
    };
    UniToastService.prototype._getPositionStrategy = function (position, latest) {
        var pb = this._overlay.position().global();
        if (position === UniToastPosition.TopLeft) {
            return pb.top(this._getLatestMargin(position, latest)).left(this._config.margin + "px");
        }
        else if (position === UniToastPosition.TopRight) {
            return pb.top(this._getLatestMargin(position, latest)).right(this._config.margin + "px");
        }
        else if (position === UniToastPosition.BottomLeft) {
            if (!latest) {
                return pb.bottom(this._getLatestMargin(position, latest)).left(this._config.margin + "px");
            }
            else {
                return pb.top(this._getLatestMargin(position, latest)).left(this._config.margin + "px");
            }
        }
        if (!latest) {
            return pb.bottom(this._getLatestMargin(position, latest)).right(this._config.margin + "px");
        }
        else {
            return pb.top(this._getLatestMargin(position, latest)).right(this._config.margin + "px");
        }
    };
    UniToastService.prototype._getLatestMargin = function (position, latest) {
        var key = (position === UniToastPosition.TopLeft || position === UniToastPosition.TopRight) ? 'bottom' : 'top';
        if (key === 'bottom') {
            return latest ? latest[key] + this._config.margin + "px" : this._config.margin + "px";
        }
        else {
            return latest ? latest[key] - latest.height - this._config.margin + "px" : this._config.margin + "px";
        }
    };
    UniToastService.prototype._getToastsByPosition = function (position) {
        return this._toasts.filter(function (t) { return t.position === position; })
            .sort(function (a, b) { return a.id - b.id; });
    };
    UniToastService.prototype._getLatestByPosition = function (position) {
        var toasts = this._getToastsByPosition(position);
        return toasts[toasts.length - 1];
    };
    UniToastService.prototype._updatePositions = function (position) {
        var toasts = this._getToastsByPosition(position);
        for (var i = 0; i < toasts.length; i++) {
            toasts[i].ref.updatePosition(this._getPositionStrategy(toasts[i].position, toasts[i - 1] ? toasts[i - 1].ref.position : undefined));
        }
    };
    UniToastService.ɵfac = function UniToastService_Factory(t) { return new (t || UniToastService)(ɵɵinject(UNI_TOAST_CONFIG), ɵɵinject(Overlay)); };
    UniToastService.ɵprov = ɵɵdefineInjectable({ token: UniToastService, factory: UniToastService.ɵfac });
    return UniToastService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniToastService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [UNI_TOAST_CONFIG]
            }] }, { type: Overlay }]; }, null); })();

var UniToastModule = /** @class */ (function () {
    function UniToastModule() {
    }
    UniToastModule.forRoot = function (config) {
        return {
            ngModule: UniToastModule,
            providers: [{
                    provide: UNI_TOAST_CONFIG,
                    useValue: config,
                }],
        };
    };
    UniToastModule.ɵmod = ɵɵdefineNgModule({ type: UniToastModule });
    UniToastModule.ɵinj = ɵɵdefineInjector({ factory: function UniToastModule_Factory(t) { return new (t || UniToastModule)(); }, providers: [
            UniToastService,
            {
                provide: UNI_TOAST_CONFIG,
                useValue: UNI_TOAST_DEFAULT_CONFIG,
            },
        ], imports: [[CommonModule, OverlayModule]] });
    return UniToastModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniToastModule, { declarations: [UniToastComponent], imports: [CommonModule, OverlayModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniToastModule, [{
        type: NgModule,
        args: [{
                declarations: [UniToastComponent],
                entryComponents: [UniToastComponent],
                imports: [CommonModule, OverlayModule],
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

var UNI_DIALOG_CONTENT = new InjectionToken('UNI_DIALOG_CONTENT');

var _c0 = ["vc"];
var UniDialogContainerComponent = /** @class */ (function () {
    function UniDialogContainerComponent(_content, _resolver) {
        this._content = _content;
        this._resolver = _resolver;
    }
    UniDialogContainerComponent.prototype.ngAfterViewInit = function () {
        var factory = this._resolver.resolveComponentFactory(this._content);
        this.vc.clear();
        var ref = this.vc.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    UniDialogContainerComponent.ɵfac = function UniDialogContainerComponent_Factory(t) { return new (t || UniDialogContainerComponent)(ɵɵdirectiveInject(UNI_DIALOG_CONTENT), ɵɵdirectiveInject(ComponentFactoryResolver)); };
    UniDialogContainerComponent.ɵcmp = ɵɵdefineComponent({ type: UniDialogContainerComponent, selectors: [["uni-dialog-container"]], viewQuery: function UniDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vc = _t.first);
        } }, hostAttrs: [1, "uni-dialog-container"], exportAs: ["uniDialogContainer"], decls: 2, vars: 0, consts: [["vc", ""]], template: function UniDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainer(0, null, 0);
        } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%;background-color:var(--white);border-radius:10px;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"], changeDetection: 0 });
    return UniDialogContainerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogContainerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-container',
                exportAs: 'uniDialogContainer',
                templateUrl: './dialog-container.component.html',
                styleUrls: ['./dialog-container.component.scss'],
                host: {
                    class: 'uni-dialog-container',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [UNI_DIALOG_CONTENT]
            }] }, { type: ComponentFactoryResolver }]; }, { vc: [{
            type: ViewChild,
            args: ['vc', { read: ViewContainerRef }]
        }] }); })();

var _c0$1 = ["*"];
var UniDialogContentComponent = /** @class */ (function () {
    function UniDialogContentComponent() {
    }
    UniDialogContentComponent.ɵfac = function UniDialogContentComponent_Factory(t) { return new (t || UniDialogContentComponent)(); };
    UniDialogContentComponent.ɵcmp = ɵɵdefineComponent({ type: UniDialogContentComponent, selectors: [["uni-dialog-content"]], hostAttrs: [1, "uni-dialog-content"], exportAs: ["uniDialogContent"], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function UniDialogContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:block;padding:20px}"], changeDetection: 0 });
    return UniDialogContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogContentComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-content',
                exportAs: 'uniDialogContent',
                templateUrl: './dialog-content.component.html',
                styleUrls: ['./dialog-content.component.scss'],
                host: {
                    class: 'uni-dialog-content',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var _c0$2 = ["*"];
var UniDialogFooterComponent = /** @class */ (function () {
    function UniDialogFooterComponent() {
    }
    UniDialogFooterComponent.ɵfac = function UniDialogFooterComponent_Factory(t) { return new (t || UniDialogFooterComponent)(); };
    UniDialogFooterComponent.ɵcmp = ɵɵdefineComponent({ type: UniDialogFooterComponent, selectors: [["uni-dialog-footer"]], hostAttrs: [1, "uni-dialog-footer"], exportAs: ["uniDialogFooter"], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function UniDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:block;text-align:right;padding-bottom:20px;padding-left:20px;padding-right:20px}"], changeDetection: 0 });
    return UniDialogFooterComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogFooterComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-footer',
                exportAs: 'uniDialogFooter',
                templateUrl: './dialog-footer.component.html',
                styleUrls: ['./dialog-footer.component.scss'],
                host: {
                    class: 'uni-dialog-footer',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var _c0$3 = [[["uni-dialog-title"]]];
var _c1 = ["uni-dialog-title"];
var UniDialogHeaderComponent = /** @class */ (function () {
    function UniDialogHeaderComponent() {
    }
    UniDialogHeaderComponent.ɵfac = function UniDialogHeaderComponent_Factory(t) { return new (t || UniDialogHeaderComponent)(); };
    UniDialogHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: UniDialogHeaderComponent, selectors: [["uni-dialog-header"]], hostAttrs: [1, "uni-dialog-header"], exportAs: ["uniDialogHeader"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function UniDialogHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$3);
            ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:block;padding-top:20px;padding-left:20px;padding-right:20px}"], changeDetection: 0 });
    return UniDialogHeaderComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogHeaderComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-header',
                exportAs: 'uniDialogHeader',
                templateUrl: './dialog-header.component.html',
                styleUrls: ['./dialog-header.component.scss'],
                host: {
                    class: 'uni-dialog-header',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var _c0$4 = ["*"];
var UniDialogTitleComponent = /** @class */ (function () {
    function UniDialogTitleComponent() {
    }
    UniDialogTitleComponent.ɵfac = function UniDialogTitleComponent_Factory(t) { return new (t || UniDialogTitleComponent)(); };
    UniDialogTitleComponent.ɵcmp = ɵɵdefineComponent({ type: UniDialogTitleComponent, selectors: [["uni-dialog-title"]], hostAttrs: [1, "uni-dialog-title"], exportAs: ["uniDialogTitle"], ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function UniDialogTitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{font-size:20pt}"], changeDetection: 0 });
    return UniDialogTitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogTitleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-title',
                exportAs: 'uniDialogTitle',
                templateUrl: './dialog-title.component.html',
                styleUrls: ['./dialog-title.component.scss'],
                host: {
                    class: 'uni-dialog-title',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

var UniDialogRef = /** @class */ (function () {
    function UniDialogRef(_overlayRef, _disableClose) {
        var _this = this;
        this._overlayRef = _overlayRef;
        this._disableClose = _disableClose;
        this._closed$ = new Subject();
        if (!this._disableClose) {
            this._overlayRef.backdropClick()
                .pipe(take(1))
                .subscribe(function () { return _this.dismiss(); });
        }
    }
    Object.defineProperty(UniDialogRef.prototype, "closed$", {
        get: function () {
            return this._closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UniDialogRef.prototype.dismiss = function () {
        this._closed$.next();
        this._overlayRef.detach();
    };
    return UniDialogRef;
}());

var UniDialogCloseDirective = /** @class */ (function () {
    function UniDialogCloseDirective(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    UniDialogCloseDirective.prototype.onClick = function () {
        this._dialogRef.dismiss();
    };
    UniDialogCloseDirective.ɵfac = function UniDialogCloseDirective_Factory(t) { return new (t || UniDialogCloseDirective)(ɵɵdirectiveInject(UniDialogRef)); };
    UniDialogCloseDirective.ɵdir = ɵɵdefineDirective({ type: UniDialogCloseDirective, selectors: [["", "uniDialogClose", ""]], hostBindings: function UniDialogCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function UniDialogCloseDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        } } });
    return UniDialogCloseDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[uniDialogClose]',
                host: {
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: UniDialogRef }]; }, null); })();

var UNI_DIALOG_OPTIONS = new InjectionToken('UNI_DIALOG_OPTIONS');
var UNI_DIALOG_DEFAULT_OPTIONS = {
    width: 'auto',
    height: 'auto',
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-dark-backdrop',
};

var UNI_DIALOG_DATA = new InjectionToken('UNI_DIALOG_DATA');

var UniDialogService = /** @class */ (function () {
    function UniDialogService(_overlay, _resolver) {
        this._overlay = _overlay;
        this._resolver = _resolver;
        this._index = -1;
        this._dialogs = [];
    }
    Object.defineProperty(UniDialogService.prototype, "_id", {
        get: function () {
            this._index++;
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    UniDialogService.prototype.find = function (id) {
        return this._dialogs.find(function (t) { return t.id === id; });
    };
    UniDialogService.prototype.remove = function (id) {
        for (var i = 0; i < this._dialogs.length; i++) {
            if (this._dialogs[i].id === id) {
                this._dialogs.splice(i, 1);
                return i;
            }
        }
        return -1;
    };
    UniDialogService.prototype.open = function (content, options) {
        var _this = this;
        var overlayRef = this._overlay.create(__assign(__assign(__assign({}, UNI_DIALOG_DEFAULT_OPTIONS), options), { positionStrategy: this._getPositionStrategy() }));
        var dialogRef = new UniDialogRef(overlayRef, options.disableClose);
        var portal = new ComponentPortal(UniDialogContainerComponent, undefined, this._getInjector(dialogRef, content, options));
        overlayRef.attach(portal);
        var dialog = {
            id: this._id,
            ref: dialogRef,
        };
        dialogRef.closed$.pipe(take(1)).subscribe(function () {
            _this.remove(dialog.id);
        });
        this._dialogs.push(dialog);
        return dialog;
    };
    UniDialogService.prototype._getInjector = function (ref, content, options) {
        var tokens = new WeakMap();
        tokens.set(ComponentFactoryResolver, this._resolver);
        tokens.set(UniDialogRef, ref);
        tokens.set(UNI_DIALOG_OPTIONS, options);
        tokens.set(UNI_DIALOG_CONTENT, content);
        if (options.data) {
            tokens.set(UNI_DIALOG_DATA, options.data);
        }
        return new PortalInjector(null, tokens);
    };
    UniDialogService.prototype._getPositionStrategy = function () {
        var pb = this._overlay.position().global();
        return pb.centerVertically().centerHorizontally();
    };
    UniDialogService.ɵfac = function UniDialogService_Factory(t) { return new (t || UniDialogService)(ɵɵinject(Overlay), ɵɵinject(ComponentFactoryResolver)); };
    UniDialogService.ɵprov = ɵɵdefineInjectable({ token: UniDialogService, factory: UniDialogService.ɵfac });
    return UniDialogService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogService, [{
        type: Injectable
    }], function () { return [{ type: Overlay }, { type: ComponentFactoryResolver }]; }, null); })();

var declarations = [
    UniDialogContainerComponent,
    UniDialogContentComponent,
    UniDialogFooterComponent,
    UniDialogHeaderComponent,
    UniDialogTitleComponent,
    UniDialogCloseDirective,
];
var UniDialogModule = /** @class */ (function () {
    function UniDialogModule() {
    }
    UniDialogModule.ɵmod = ɵɵdefineNgModule({ type: UniDialogModule });
    UniDialogModule.ɵinj = ɵɵdefineInjector({ factory: function UniDialogModule_Factory(t) { return new (t || UniDialogModule)(); }, providers: [UniDialogService], imports: [[CommonModule, OverlayModule]] });
    return UniDialogModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniDialogModule, { declarations: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective], imports: [CommonModule, OverlayModule], exports: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniDialogModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                exports: declarations,
                entryComponents: [UniDialogContainerComponent],
                imports: [CommonModule, OverlayModule],
                providers: [UniDialogService],
            }]
    }], null, null); })();

var _c0$5 = ["*"];
var UniLabelComponent = /** @class */ (function () {
    function UniLabelComponent(_cdr) {
        this._cdr = _cdr;
    }
    Object.defineProperty(UniLabelComponent.prototype, "for", {
        get: function () { return this._for; },
        set: function (v) {
            if (v !== this._for) {
                this._for = v;
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    UniLabelComponent.ɵfac = function UniLabelComponent_Factory(t) { return new (t || UniLabelComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniLabelComponent.ɵcmp = ɵɵdefineComponent({ type: UniLabelComponent, selectors: [["uni-label"]], hostAttrs: [1, "uni-label"], exportAs: ["uniLabel"], ngContentSelectors: _c0$5, decls: 2, vars: 1, consts: [[3, "for"]], template: function UniLabelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "label", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("for", ctx.for);
        } }, styles: [".uni-label{position:absolute;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-label label{cursor:text}"], encapsulation: 2, changeDetection: 0 });
    return UniLabelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniLabelComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-label',
                exportAs: 'uniLabel',
                templateUrl: './label.component.html',
                styleUrls: ['./label.component.scss'],
                host: { class: 'uni-label' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, null); })();

var _c0$6 = ["*"];
var UniErrorComponent = /** @class */ (function () {
    function UniErrorComponent() {
    }
    UniErrorComponent.ɵfac = function UniErrorComponent_Factory(t) { return new (t || UniErrorComponent)(); };
    UniErrorComponent.ɵcmp = ɵɵdefineComponent({ type: UniErrorComponent, selectors: [["uni-error"]], hostAttrs: [1, "uni-error"], exportAs: ["uniError"], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function UniErrorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-error{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
    return UniErrorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniErrorComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-error',
                exportAs: 'uniError',
                template: "<ng-content></ng-content>",
                styleUrls: ['./error.component.scss'],
                host: { class: 'uni-error' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$7 = [[["uni-label"]], [["uni-select"]], [["", "uniInput", ""]], [["uni-hint"]], [["uni-error"]]];
var _c1$1 = ["uni-label", "uni-select", "[uniInput]", "uni-hint", "uni-error"];
var UniFormFieldComponent = /** @class */ (function () {
    function UniFormFieldComponent(cdr) {
        this.cdr = cdr;
        this.color = UniColor.Primary;
        this.clicked = new EventEmitter();
    }
    Object.defineProperty(UniFormFieldComponent.prototype, "label", {
        get: function () { return this._label; },
        set: function (v) {
            if (v !== this._label) {
                this._label = v;
                if (this._label) {
                    this._label.for = this._id;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "error", {
        get: function () { return this._error; },
        set: function (v) {
            if (v !== this._error) {
                this._error = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "id", {
        get: function () { return this._id; },
        set: function (v) {
            if (v !== this._id) {
                this._id = v;
                if (this._label) {
                    this._label.for = this._id;
                }
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "focused", {
        get: function () { return this._focused; },
        set: function (v) {
            if (v !== this._focused) {
                this._focused = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "hasValue", {
        get: function () { return this._hasValue; },
        set: function (v) {
            if (v !== this._hasValue) {
                this._hasValue = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            if (v !== this._disabled) {
                this._disabled = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    UniFormFieldComponent.ɵfac = function UniFormFieldComponent_Factory(t) { return new (t || UniFormFieldComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniFormFieldComponent.ɵcmp = ɵɵdefineComponent({ type: UniFormFieldComponent, selectors: [["uni-form-field"]], contentQueries: function UniFormFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniLabelComponent, true);
            ɵɵcontentQuery(dirIndex, UniErrorComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.error = _t.first);
        } }, hostAttrs: [1, "uni-form-field"], hostVars: 18, hostBindings: function UniFormFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function UniFormFieldComponent_click_HostBindingHandler($event) { return ctx.clicked.emit($event); });
        } if (rf & 2) {
            ɵɵclassProp("focused", ctx.focused)("has-value", ctx.hasValue)("has-label", !!ctx.label)("has-error", !!ctx.error)("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniFormField"], ngContentSelectors: _c1$1, decls: 5, vars: 0, template: function UniFormFieldComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$7);
            ɵɵprojection(0);
            ɵɵprojection(1, 1);
            ɵɵprojection(2, 2);
            ɵɵprojection(3, 3);
            ɵɵprojection(4, 4);
        } }, styles: [".uni-form-field{display:inline-block;position:relative;border-radius:5px;border:1px solid var(--white-a50);padding:15px 10px;margin-bottom:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.uni-form-field:hover{box-shadow:inset 0 0 0 1px var(--white)}.uni-form-field.disabled{border-style:dotted;opacity:.8}.uni-form-field.disabled:hover{box-shadow:none!important}.uni-form-field.has-value .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75)}.uni-form-field.has-label.focused .uni-input,.uni-form-field.has-label.focused .uni-select-placeholder,.uni-form-field.has-label.has-value .uni-input,.uni-form-field.has-label.has-value .uni-select-placeholder{opacity:1}.uni-form-field.has-label .uni-input,.uni-form-field.has-label .uni-select-placeholder{opacity:0}.uni-form-field.has-error{border-color:var(--danger)}.uni-form-field.has-error:hover{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.has-error .uni-input{caret-color:var(--danger)!important}.uni-form-field.has-error .uni-hint{display:none}.uni-form-field.has-error .uni-label label{color:var(--danger)}.uni-form-field.primary.focused{box-shadow:inset 0 0 0 1px var(--primary)}.uni-form-field.primary.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.primary.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--primary)}.uni-form-field.primary .uni-input{caret-color:var(--primary)}.uni-form-field.success.focused{box-shadow:inset 0 0 0 1px var(--success)}.uni-form-field.success.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.success.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--success)}.uni-form-field.success .uni-input{caret-color:var(--success)}.uni-form-field.warning.focused{box-shadow:inset 0 0 0 1px var(--warning)}.uni-form-field.warning.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.warning.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--warning)}.uni-form-field.warning .uni-input{caret-color:var(--warning)}.uni-form-field.danger.focused,.uni-form-field.danger.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.danger.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--danger)}.uni-form-field.danger .uni-input{caret-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
    return UniFormFieldComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniFormFieldComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-form-field',
                exportAs: 'uniFormField',
                templateUrl: './form-field.component.html',
                styleUrls: ['./form-field.component.scss'],
                host: __assign(__assign({ class: 'uni-form-field', '[class.focused]': 'focused', '[class.has-value]': 'hasValue', '[class.has-label]': '!!label', '[class.has-error]': '!!error', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS), { '(click)': 'clicked.emit($event)' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], label: [{
            type: ContentChild,
            args: [UniLabelComponent]
        }], error: [{
            type: ContentChild,
            args: [UniErrorComponent]
        }] }); })();

var _c0$8 = ["*"];
var UniHintComponent = /** @class */ (function () {
    function UniHintComponent() {
    }
    UniHintComponent.ɵfac = function UniHintComponent_Factory(t) { return new (t || UniHintComponent)(); };
    UniHintComponent.ɵcmp = ɵɵdefineComponent({ type: UniHintComponent, selectors: [["uni-hint"]], hostAttrs: [1, "uni-hint"], exportAs: ["uniHint"], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function UniHintComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-hint{position:absolute;left:5px;bottom:-15px;font-size:.7em;color:var(--white-d20)}"], encapsulation: 2, changeDetection: 0 });
    return UniHintComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniHintComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-hint',
                exportAs: 'uniHint',
                template: "<ng-content></ng-content>",
                styleUrls: ['./hint.component.scss'],
                host: { class: 'uni-hint' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var declarations$1 = [
    UniFormFieldComponent,
    UniErrorComponent,
    UniHintComponent,
    UniLabelComponent,
];
var UniFormFieldModule = /** @class */ (function () {
    function UniFormFieldModule() {
    }
    UniFormFieldModule.ɵmod = ɵɵdefineNgModule({ type: UniFormFieldModule });
    UniFormFieldModule.ɵinj = ɵɵdefineInjector({ factory: function UniFormFieldModule_Factory(t) { return new (t || UniFormFieldModule)(); }, imports: [[CommonModule]] });
    return UniFormFieldModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniFormFieldModule, { declarations: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent], imports: [CommonModule], exports: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniFormFieldModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$1,
                exports: declarations$1,
                imports: [CommonModule],
            }]
    }], null, null); })();

var UniSubscriptionHelper = /** @class */ (function () {
    function UniSubscriptionHelper() {
        this.destroy$ = new Subject();
    }
    UniSubscriptionHelper.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    UniSubscriptionHelper.ɵfac = function UniSubscriptionHelper_Factory(t) { return new (t || UniSubscriptionHelper)(); };
    UniSubscriptionHelper.ɵdir = ɵɵdefineDirective({ type: UniSubscriptionHelper });
    return UniSubscriptionHelper;
}());

/**
 * This is being used to fix issue when running --aot, where
 * lifecycle hooks are only called if they are explicitly declared.
 */
var UniInitHelper = /** @class */ (function () {
    function UniInitHelper() {
    }
    UniInitHelper.prototype.ngOnInit = function () { };
    UniInitHelper.prototype.ngOnDestroy = function () { };
    UniInitHelper.ɵfac = function UniInitHelper_Factory(t) { return new (t || UniInitHelper)(); };
    UniInitHelper.ɵdir = ɵɵdefineDirective({ type: UniInitHelper });
    return UniInitHelper;
}());

var nextId = 0;
var UniFormFieldControlBase = /** @class */ (function (_super) {
    __extends(UniFormFieldControlBase, _super);
    function UniFormFieldControlBase(el, cdr, uniFormField, ngForm, ngFormGroup) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.cdr = cdr;
        _this.uniFormField = uniFormField;
        _this.ngForm = ngForm;
        _this.ngFormGroup = ngFormGroup;
        _this._id = "uni-form-field--" + ++nextId;
        _this._tabIndex = 0;
        _this._required = false;
        _this._disabled = false;
        _this._autofocus = false;
        _this._autocomplete = false;
        _this.onChange = function () { };
        _this.onTouch = function () { };
        return _this;
    }
    Object.defineProperty(UniFormFieldControlBase.prototype, "id", {
        get: function () { return this._id; },
        set: function (v) {
            this._id = v;
            this.uniFormField.id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "tabIndex", {
        get: function () { return this._tabIndex; },
        set: function (v) {
            this._tabIndex = coerceNumberProperty(v);
            this.el.nativeElement.tabIndex = this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (v) {
            this._placeholder = v;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "required", {
        get: function () { return this._required; },
        set: function (v) {
            this._required = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            if (v !== this._disabled) {
                this._disabled = coerceBooleanProperty(v);
                this.cdr.markForCheck();
                if (this.uniFormField) {
                    this.uniFormField.disabled = this._disabled;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (v) {
            this._autofocus = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "autocomplete", {
        get: function () { return this._autocomplete; },
        set: function (v) {
            this._autocomplete = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this.cdr.markForCheck();
                if (this.uniFormField) {
                    this.uniFormField.hasValue = !!v;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    UniFormFieldControlBase.prototype.ngOnInit = function () {
        if (this.uniFormField) {
            this.uniFormField.id = this._id;
        }
    };
    UniFormFieldControlBase.prototype.writeValue = function (v) {
        if (v !== this.value) {
            this.value = v;
        }
    };
    UniFormFieldControlBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UniFormFieldControlBase.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    UniFormFieldControlBase.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    UniFormFieldControlBase.ɵfac = function UniFormFieldControlBase_Factory(t) { return new (t || UniFormFieldControlBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(UniFormFieldComponent, 8), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8)); };
    UniFormFieldControlBase.ɵdir = ɵɵdefineDirective({ type: UniFormFieldControlBase, inputs: { id: "id", tabIndex: "tabIndex", placeholder: "placeholder", required: "required", disabled: "disabled", autofocus: "autofocus", autocomplete: "autocomplete" }, features: [ɵɵInheritDefinitionFeature] });
    return UniFormFieldControlBase;
}(UniSubscriptionHelper));

function uniFormFieldProvider(component) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(function () { return component; }),
        multi: true,
    };
}

var _c0$9 = ["*"];
var UniOptionComponent = /** @class */ (function () {
    function UniOptionComponent(_el) {
        this._el = _el;
        this.disabled = false;
        this.selected = false;
        this.selectionChanged = new EventEmitter();
    }
    Object.defineProperty(UniOptionComponent.prototype, "content", {
        get: function () {
            return this._el.nativeElement.textContent.trim();
        },
        enumerable: true,
        configurable: true
    });
    UniOptionComponent.prototype.select = function () {
        if (!this.disabled && !this.selected) {
            this.selected = true;
            this._emitChanged();
        }
    };
    UniOptionComponent.prototype.deselect = function () {
        if (!this.disabled && this.selected) {
            this.selected = false;
            this._emitChanged();
        }
    };
    UniOptionComponent.prototype._emitChanged = function () {
        this.selectionChanged.emit({ source: this });
    };
    UniOptionComponent.ɵfac = function UniOptionComponent_Factory(t) { return new (t || UniOptionComponent)(ɵɵdirectiveInject(ElementRef)); };
    UniOptionComponent.ɵcmp = ɵɵdefineComponent({ type: UniOptionComponent, selectors: [["uni-option"]], hostAttrs: [1, "uni-option"], hostVars: 12, hostBindings: function UniOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("click", function UniOptionComponent_click_HostBindingHandler($event) { return ctx.select(); });
        } if (rf & 2) {
            ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("disabled", ctx.disabled)("selected", ctx.selected);
        } }, inputs: { value: "value", color: "color", disabled: "disabled", selected: "selected" }, outputs: { selectionChanged: "selectionChanged" }, exportAs: ["uniOption"], ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function UniOptionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-option{display:block;padding:10px;cursor:pointer}.uni-option.selected.primary{color:var(--white);background-color:var(--primary)}.uni-option.selected.success{color:var(--white);background-color:var(--success)}.uni-option.selected.warning{color:var(--black);background-color:var(--warning)}.uni-option.selected.danger{color:var(--white);background-color:var(--danger)}.uni-option.disabled{cursor:default;opacity:.4}.uni-option.disabled:hover{background-color:transparent}.uni-option:hover{background-color:var(--black-a15)}.uni-option:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.uni-option:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
    return UniOptionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniOptionComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-option',
                exportAs: 'uniOption',
                template: "<ng-content></ng-content>",
                styleUrls: ['./option.component.scss'],
                host: __assign(__assign({ class: 'uni-option' }, UNI_HOST_COLORS), { '[class.disabled]': 'disabled', '[class.selected]': 'selected', '(click)': 'select()' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }]; }, { value: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectionChanged: [{
            type: Output
        }] }); })();

var _c0$a = ["*"];
var UniSelectPanelComponent = /** @class */ (function () {
    function UniSelectPanelComponent() {
    }
    UniSelectPanelComponent.ɵfac = function UniSelectPanelComponent_Factory(t) { return new (t || UniSelectPanelComponent)(); };
    UniSelectPanelComponent.ɵcmp = ɵɵdefineComponent({ type: UniSelectPanelComponent, selectors: [["uni-select-panel"]], hostAttrs: [1, "uni-select-panel"], exportAs: ["uniSelectPanel"], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function UniSelectPanelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-select-panel{display:block;border-radius:3px;width:100%;background-color:var(--dark);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"], encapsulation: 2, changeDetection: 0 });
    return UniSelectPanelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSelectPanelComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-select-panel',
                exportAs: 'uniSelectPanel',
                template: "<ng-content></ng-content>",
                styleUrls: ['./select-panel.component.scss'],
                host: { class: 'uni-select-panel' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$b = ["trigger"];
function UniSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r36 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r36.placeholder);
} }
function UniSelectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r37.selected);
} }
function UniSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "uni-select-panel", 9);
    ɵɵprojection(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r38 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r38.panelClass);
} }
var _c1$2 = [[["uni-option"]]];
var _c2 = ["uni-option"];
var UniSelectComponent = /** @class */ (function (_super) {
    __extends(UniSelectComponent, _super);
    function UniSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panelClass = 'uni-select-panel';
        _this.opened$ = new BehaviorSubject(false);
        _this.positions = [
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
        return _this;
    }
    Object.defineProperty(UniSelectComponent.prototype, "options", {
        get: function () { return this._options; },
        set: function (v) {
            var _this = this;
            this._options = v;
            this.optionSelectionChanged = this.options.changes.pipe(startWith(this.options), mergeMap(function () { return merge.apply(void 0, __spread(_this.options.map(function (o) { return o.selectionChanged; }))); }));
            this.optionSelectionChanged.pipe(takeUntil(this.destroy$))
                .subscribe(function (e) {
                if (e.source.selected) {
                    _this.select(e.source);
                }
                if (_this.opened$.value) {
                    _this.close();
                }
            });
            this.initOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSelectComponent.prototype, "selected", {
        get: function () {
            return this.selectionModel.selected.map(function (v) { return v.content; }).join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSelectComponent.prototype, "minWidth", {
        get: function () {
            return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
        },
        enumerable: true,
        configurable: true
    });
    UniSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.selectionModel = new SelectionModel(false);
        this.opened$.pipe(takeUntil(this.destroy$)).subscribe(function (open) {
            _this.uniFormField.focused = open;
        });
        this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!_this.opened$.value && !_this.disabled) {
                _this.toggle();
            }
        });
    };
    UniSelectComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    UniSelectComponent.prototype.writeValue = function (value) {
        if (value !== this.value) {
            this.value = value;
            if (this.options) {
                this.initOptions();
            }
        }
    };
    UniSelectComponent.prototype.toggle = function () {
        this.opened$.next(!this.opened$.value);
    };
    UniSelectComponent.prototype.close = function () {
        this.opened$.next(false);
    };
    UniSelectComponent.prototype.select = function (v) {
        var e_1, _a;
        var options = this.options.toArray();
        this.selectionModel.select(v);
        this.value = this.optionValue(v);
        try {
            for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                var option = options_1_1.value;
                if (option !== v) {
                    option.deselect();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    UniSelectComponent.prototype.initOptions = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.options.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                var value = this.optionValue(option);
                if (!option.color) {
                    option.color = this.uniFormField.color;
                }
                if (value === this.value) {
                    option.select();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    UniSelectComponent.prototype.optionValue = function (v) {
        return v.value || v.content;
    };
    UniSelectComponent.ɵfac = function UniSelectComponent_Factory(t) { return ɵUniSelectComponent_BaseFactory(t || UniSelectComponent); };
    UniSelectComponent.ɵcmp = ɵɵdefineComponent({ type: UniSelectComponent, selectors: [["uni-select"]], contentQueries: function UniSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniOptionComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
        } }, viewQuery: function UniSelectComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$b, true);
            ɵɵviewQuery(UniSelectPanelComponent, true);
            ɵɵviewQuery(CdkConnectedOverlay, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trigger = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } }, hostAttrs: [1, "uni-select"], hostVars: 2, hostBindings: function UniSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("disabled", ctx.disabled);
        } }, inputs: { panelClass: "panelClass" }, exportAs: ["uniSelect"], features: [ɵɵProvidersFeature([uniFormFieldProvider(UniSelectComponent)]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 10, vars: 12, consts: [["cdk-overlay-origin", "", 1, "uni-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "uni-select-text"], ["class", "uni-select-placeholder", 4, "ngIf"], ["class", "uni-select-value", 4, "ngIf"], [1, "uni-select-icon"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick", "detach"], [1, "uni-select-placeholder"], [1, "uni-select-value"], [3, "ngClass"]], template: function UniSelectComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$2);
            ɵɵelementStart(0, "div", 0, 1);
            ɵɵlistener("click", function UniSelectComponent_Template_div_click_0_listener($event) { return ctx.toggle(); });
            ɵɵelementStart(3, "div", 2);
            ɵɵtemplate(4, UniSelectComponent_div_4_Template, 2, 1, "div", 3);
            ɵɵtemplate(5, UniSelectComponent_div_5_Template, 2, 1, "div", 4);
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 5);
            ɵɵpipe(7, "async");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(8, UniSelectComponent_ng_template_8_Template, 2, 1, "ng-template", 6);
            ɵɵpipe(9, "async");
            ɵɵlistener("backdropClick", function UniSelectComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.close(); })("detach", function UniSelectComponent_Template_ng_template_detach_8_listener($event) { return ctx.close(); });
        } if (rf & 2) {
            var _r34 = ɵɵreference(1);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", !ctx.selected);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.selected);
            ɵɵadvance(1);
            ɵɵclassProp("bottom", ɵɵpipeBind1(7, 8, ctx.opened$));
            ɵɵadvance(2);
            ɵɵproperty("cdkConnectedOverlayOrigin", _r34)("cdkConnectedOverlayOpen", ɵɵpipeBind1(9, 10, ctx.opened$))("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.minWidth);
        } }, directives: [CdkOverlayOrigin, NgIf, CdkConnectedOverlay, UniSelectPanelComponent, NgClass], pipes: [AsyncPipe], styles: [".uni-select{display:block;outline:0;border-radius:3px;font:inherit}.uni-select.disabled .uni-select-trigger{pointer-events:none}.uni-select .uni-select-trigger{display:-webkit-box;display:flex;cursor:pointer;border-radius:3px}.uni-select .uni-select-trigger .uni-select-text{-webkit-box-flex:1;flex:1 1 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-placeholder{color:var(--white-a20)}.uni-select .uni-select-trigger .uni-select-icon{font-size:12px;margin:auto 10px;color:var(--grey);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-icon:before{border-style:solid;border-width:.25em .25em 0 0;content:\"\";display:inline-block;height:.45em;left:0;position:relative;top:.15em;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:top;width:.45em;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-select .uni-select-trigger .uni-select-icon.bottom:before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
    return UniSelectComponent;
}(UniFormFieldControlBase));
var ɵUniSelectComponent_BaseFactory = ɵɵgetInheritedFactory(UniSelectComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSelectComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-select',
                exportAs: 'uniSelect',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
                host: {
                    class: 'uni-select',
                    '[class.disabled]': 'disabled',
                },
                providers: [uniFormFieldProvider(UniSelectComponent)],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { panelClass: [{
            type: Input
        }], trigger: [{
            type: ViewChild,
            args: ['trigger']
        }], panel: [{
            type: ViewChild,
            args: [UniSelectPanelComponent]
        }], overlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay]
        }], options: [{
            type: ContentChildren,
            args: [UniOptionComponent, { descendants: true }]
        }] }); })();

var declarations$2 = [
    UniSelectComponent,
    UniOptionComponent,
    UniSelectPanelComponent,
];
var UniSelectModule = /** @class */ (function () {
    function UniSelectModule() {
    }
    UniSelectModule.ɵmod = ɵɵdefineNgModule({ type: UniSelectModule });
    UniSelectModule.ɵinj = ɵɵdefineInjector({ factory: function UniSelectModule_Factory(t) { return new (t || UniSelectModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniSelectModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniSelectModule, { declarations: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent], imports: [CommonModule, OverlayModule], exports: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSelectModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$2,
                exports: declarations$2,
                entryComponents: [UniSelectPanelComponent],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();

var _c0$c = ["uniInput", ""];
var UniInputComponent = /** @class */ (function (_super) {
    __extends(UniInputComponent, _super);
    function UniInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UniInputComponent.prototype, "autoResize", {
        get: function () { return this._autoResize; },
        set: function (v) {
            if (v !== this._autoResize) {
                this._autoResize = coerceBooleanProperty(v);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_height", {
        get: function () {
            return this._isTextArea && this._autoResize ? this._element.scrollHeight + "px" : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_isTextArea", {
        get: function () {
            return this.el.nativeElement instanceof HTMLTextAreaElement;
        },
        enumerable: true,
        configurable: true
    });
    UniInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            _this._element.focus();
        });
    };
    UniInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onInput(); });
    };
    UniInputComponent.prototype.onFocus = function (e) {
        this.uniFormField.focused = e;
    };
    UniInputComponent.prototype.onInput = function () {
        this.uniFormField.hasValue = !!this._element.value;
        this._element.style.height = 'auto';
        if (this._element.clientHeight < this._element.scrollHeight) {
            this._element.style.height = this._height;
        }
    };
    UniInputComponent.ɵfac = function UniInputComponent_Factory(t) { return ɵUniInputComponent_BaseFactory(t || UniInputComponent); };
    UniInputComponent.ɵcmp = ɵɵdefineComponent({ type: UniInputComponent, selectors: [["input", "uniInput", ""], ["textarea", "uniInput", ""]], hostAttrs: [1, "uni-input"], hostVars: 5, hostBindings: function UniInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("focus", function UniInputComponent_focus_HostBindingHandler($event) { return ctx.onFocus(true); })("focusout", function UniInputComponent_focusout_HostBindingHandler($event) { return ctx.onFocus(false); })("input", function UniInputComponent_input_HostBindingHandler($event) { return ctx.onInput(); });
        } if (rf & 2) {
            ɵɵhostProperty("id", ctx.id)("tabIndex", ctx.tabIndex)("required", ctx.required)("autofocus", ctx.autofocus)("autocomplete", ctx.autocomplete);
        } }, inputs: { autoResize: "autoResize" }, exportAs: ["uniInput"], features: [ɵɵInheritDefinitionFeature], attrs: _c0$c, decls: 0, vars: 0, template: function UniInputComponent_Template(rf, ctx) { }, styles: [".uni-input{width:100%;outline:0;border:0;border-radius:3px;background-color:transparent;font:inherit;color:var(--white);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniInputComponent;
}(UniFormFieldControlBase));
var ɵUniInputComponent_BaseFactory = ɵɵgetInheritedFactory(UniInputComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniInputComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'input[uniInput], textarea[uniInput]',
                exportAs: 'uniInput',
                template: "",
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { autoResize: [{
            type: Input
        }] }); })();

var UniInputModule = /** @class */ (function () {
    function UniInputModule() {
    }
    UniInputModule.ɵmod = ɵɵdefineNgModule({ type: UniInputModule });
    UniInputModule.ɵinj = ɵɵdefineInjector({ factory: function UniInputModule_Factory(t) { return new (t || UniInputModule)(); }, imports: [[CommonModule]] });
    return UniInputModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniInputModule, { declarations: [UniInputComponent], imports: [CommonModule], exports: [UniInputComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniInputModule, [{
        type: NgModule,
        args: [{
                declarations: [UniInputComponent],
                exports: [UniInputComponent],
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$d = ["*"];
var UniCheckboxComponent = /** @class */ (function (_super) {
    __extends(UniCheckboxComponent, _super);
    function UniCheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diameter = '18px';
        _this.color = UniColor.Primary;
        return _this;
    }
    UniCheckboxComponent.ɵfac = function UniCheckboxComponent_Factory(t) { return ɵUniCheckboxComponent_BaseFactory(t || UniCheckboxComponent); };
    UniCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: UniCheckboxComponent, selectors: [["uni-checkbox"]], hostAttrs: [1, "uni-checkbox"], hostVars: 10, hostBindings: function UniCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { diameter: "diameter", color: "color" }, exportAs: ["uniCheckbox"], features: [ɵɵProvidersFeature([uniFormFieldProvider(UniCheckboxComponent)]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$d, decls: 5, vars: 14, consts: [[1, "uni-checkbox--label", 3, "for"], ["type", "checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-checkbox--box"], [1, "uni-checkbox--content"]], template: function UniCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "label", 0);
            ɵɵelementStart(1, "input", 1);
            ɵɵlistener("ngModelChange", function UniCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵelement(2, "div", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵprojection(4);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("for", ctx.id);
            ɵɵadvance(1);
            ɵɵproperty("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
            ɵɵadvance(1);
            ɵɵstyleProp("width", ctx.diameter)("height", ctx.diameter)("min-width", ctx.diameter)("min-height", ctx.diameter);
            ɵɵclassProp("checked", ctx.value);
        } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".uni-checkbox{display:-webkit-inline-box;display:inline-flex}.uni-checkbox.primary .uni-checkbox--box.checked{background-color:var(--primary);border-color:var(--primary)}.uni-checkbox.success .uni-checkbox--box.checked{background-color:var(--success);border-color:var(--success)}.uni-checkbox.danger .uni-checkbox--box.checked{background-color:var(--danger);border-color:var(--danger)}.uni-checkbox.warning .uni-checkbox--box.checked{background-color:var(--warning);border-color:var(--warning)}.uni-checkbox.disabled{opacity:.7;cursor:not-allowed}.uni-checkbox.disabled *{cursor:not-allowed!important}.uni-checkbox .uni-checkbox--label{display:-webkit-box;display:flex;cursor:pointer;margin-bottom:0}.uni-checkbox .uni-checkbox--label input{display:none}.uni-checkbox .uni-checkbox--label .uni-checkbox--box{border-radius:5px;background-color:transparent;border:2px solid var(--hairline-strong);-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto 10px auto 0}.uni-checkbox .uni-checkbox--label .uni-checkbox--box:after{position:absolute;top:calc(50% - 8px);left:calc(50% - 3px);width:6px;height:12px;content:\"\";border:solid var(--white);border-width:0 2px 2px 0;-webkit-transform:rotate(0) scale(0);transform:rotate(0) scale(0);-webkit-transition:.3s ease-out;transition:.3s ease-out}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked{border-radius:5px;opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked:after{-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--content{margin:auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"], encapsulation: 2, changeDetection: 0 });
    return UniCheckboxComponent;
}(UniFormFieldControlBase));
var ɵUniCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(UniCheckboxComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCheckboxComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniCheckbox',
                selector: 'uni-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                host: __assign({ class: 'uni-checkbox', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniCheckboxComponent)],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { diameter: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

var UniCheckboxModule = /** @class */ (function () {
    function UniCheckboxModule() {
    }
    UniCheckboxModule.ɵmod = ɵɵdefineNgModule({ type: UniCheckboxModule });
    UniCheckboxModule.ɵinj = ɵɵdefineInjector({ factory: function UniCheckboxModule_Factory(t) { return new (t || UniCheckboxModule)(); }, imports: [[CommonModule, FormsModule]] });
    return UniCheckboxModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniCheckboxModule, { declarations: [UniCheckboxComponent], imports: [CommonModule, FormsModule], exports: [UniCheckboxComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCheckboxModule, [{
        type: NgModule,
        args: [{
                declarations: [UniCheckboxComponent],
                exports: [UniCheckboxComponent],
                imports: [CommonModule, FormsModule],
            }]
    }], null, null); })();

var _c0$e = ["*"];
var UniSlideToggleComponent = /** @class */ (function (_super) {
    __extends(UniSlideToggleComponent, _super);
    function UniSlideToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = UniColor.Primary;
        return _this;
    }
    UniSlideToggleComponent.ɵfac = function UniSlideToggleComponent_Factory(t) { return ɵUniSlideToggleComponent_BaseFactory(t || UniSlideToggleComponent); };
    UniSlideToggleComponent.ɵcmp = ɵɵdefineComponent({ type: UniSlideToggleComponent, selectors: [["uni-slide-toggle"]], hostAttrs: [1, "uni-slide-toggle"], hostVars: 10, hostBindings: function UniSlideToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniSlideToggle"], features: [ɵɵProvidersFeature([uniFormFieldProvider(UniSlideToggleComponent)]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$e, decls: 5, vars: 5, consts: [[1, "uni-slide-toggle--switch", 3, "for"], ["type", "checkbox", 1, "uni-slide-toggle--checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-slide-toggle--slider"], [1, "uni-slide-toggle--label", 3, "for"]], template: function UniSlideToggleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "label", 0);
            ɵɵelementStart(1, "input", 1);
            ɵɵlistener("ngModelChange", function UniSlideToggleComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵelement(2, "span", 2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "label", 3);
            ɵɵprojection(4);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("for", ctx.id);
            ɵɵadvance(1);
            ɵɵproperty("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
            ɵɵadvance(2);
            ɵɵproperty("for", ctx.id);
        } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".uni-slide-toggle{display:-webkit-inline-box;display:inline-flex}.uni-slide-toggle.disabled{opacity:.7;cursor:not-allowed}.uni-slide-toggle.disabled *{cursor:not-allowed!important}.uni-slide-toggle .uni-slide-toggle--label{margin:auto 0 auto 5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-slide-toggle .uni-slide-toggle--switch{position:relative;width:50px;height:30px;margin:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox{opacity:0;width:0;height:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider{background-color:var(--primary)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider:before{-webkit-transform:translateX(21px);transform:translateX(21px)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey);-webkit-transition:.4s;transition:.4s;border-radius:34px}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider:before{position:absolute;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);content:\"\";height:22px;width:22px;left:4px;bottom:4px;background-color:var(--white);-webkit-transition:.4s;transition:.4s;border-radius:50%}"], encapsulation: 2, changeDetection: 0 });
    return UniSlideToggleComponent;
}(UniFormFieldControlBase));
var ɵUniSlideToggleComponent_BaseFactory = ɵɵgetInheritedFactory(UniSlideToggleComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSlideToggleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSlideToggle',
                selector: 'uni-slide-toggle',
                templateUrl: './slide-toggle.component.html',
                styleUrls: ['./slide-toggle.component.scss'],
                host: __assign({ class: 'uni-slide-toggle', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniSlideToggleComponent)],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }] }); })();

var UniSlideToggleModule = /** @class */ (function () {
    function UniSlideToggleModule() {
    }
    UniSlideToggleModule.ɵmod = ɵɵdefineNgModule({ type: UniSlideToggleModule });
    UniSlideToggleModule.ɵinj = ɵɵdefineInjector({ factory: function UniSlideToggleModule_Factory(t) { return new (t || UniSlideToggleModule)(); }, imports: [[CommonModule, FormsModule]] });
    return UniSlideToggleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniSlideToggleModule, { declarations: [UniSlideToggleComponent], imports: [CommonModule, FormsModule], exports: [UniSlideToggleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSlideToggleModule, [{
        type: NgModule,
        args: [{
                declarations: [UniSlideToggleComponent],
                exports: [UniSlideToggleComponent],
                imports: [CommonModule, FormsModule],
            }]
    }], null, null); })();

var _c0$f = [[["uni-card-header"]], [["uni-card-content"]], [["uni-card-footer"]]];
var _c1$3 = ["uni-card-header", "uni-card-content", "uni-card-footer"];
var UniCardComponent = /** @class */ (function () {
    function UniCardComponent() {
    }
    UniCardComponent.ɵfac = function UniCardComponent_Factory(t) { return new (t || UniCardComponent)(); };
    UniCardComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardComponent, selectors: [["uni-card"]], hostAttrs: [1, "uni-card"], exportAs: ["uniCard"], ngContentSelectors: _c1$3, decls: 3, vars: 0, template: function UniCardComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$f);
            ɵɵprojection(0);
            ɵɵprojection(1, 1);
            ɵɵprojection(2, 2);
        } }, styles: [".uni-card{display:block;padding-bottom:15px;padding-top:15px;background-color:var(--dark);border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniCardComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card',
                exportAs: 'uniCard',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                host: { class: 'uni-card' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$g = ["*"];
var UniCardFooterComponent = /** @class */ (function () {
    function UniCardFooterComponent() {
    }
    UniCardFooterComponent.ɵfac = function UniCardFooterComponent_Factory(t) { return new (t || UniCardFooterComponent)(); };
    UniCardFooterComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardFooterComponent, selectors: [["uni-card-footer"]], hostAttrs: [1, "uni-card-footer"], exportAs: ["uniCardFooter"], ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function UniCardFooterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-card-footer{display:block;padding:15px 15px 0}"], encapsulation: 2, changeDetection: 0 });
    return UniCardFooterComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardFooterComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card-footer',
                exportAs: 'uniCardFooter',
                templateUrl: './card-footer.component.html',
                styleUrls: ['./card-footer.component.scss'],
                host: { class: 'uni-card-footer' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$h = [[["uni-card-title"]], [["uni-card-subtitle"]]];
var _c1$4 = ["uni-card-title", "uni-card-subtitle"];
var UniCardHeaderComponent = /** @class */ (function () {
    function UniCardHeaderComponent() {
    }
    UniCardHeaderComponent.ɵfac = function UniCardHeaderComponent_Factory(t) { return new (t || UniCardHeaderComponent)(); };
    UniCardHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardHeaderComponent, selectors: [["uni-card-header"]], hostAttrs: [1, "uni-card-header"], exportAs: ["uniCardHeader"], ngContentSelectors: _c1$4, decls: 2, vars: 0, template: function UniCardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$h);
            ɵɵprojection(0);
            ɵɵprojection(1, 1);
        } }, styles: [".uni-card-header{display:block;padding-left:15px;padding-right:15px;margin-bottom:15px}"], encapsulation: 2, changeDetection: 0 });
    return UniCardHeaderComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardHeaderComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card-header',
                exportAs: 'uniCardHeader',
                templateUrl: './card-header.component.html',
                styleUrls: ['./card-header.component.scss'],
                host: { class: 'uni-card-header' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$i = ["*"];
var UniCardSubtitleComponent = /** @class */ (function () {
    function UniCardSubtitleComponent() {
    }
    UniCardSubtitleComponent.ɵfac = function UniCardSubtitleComponent_Factory(t) { return new (t || UniCardSubtitleComponent)(); };
    UniCardSubtitleComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardSubtitleComponent, selectors: [["uni-card-subtitle"]], hostAttrs: [1, "uni-card-subtitle"], exportAs: ["uniCardSubtitle"], ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function UniCardSubtitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-card-subtitle{display:block;color:rgba(0,0,0,.6)}"], encapsulation: 2, changeDetection: 0 });
    return UniCardSubtitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardSubtitleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card-subtitle',
                exportAs: 'uniCardSubtitle',
                templateUrl: './card-subtitle.component.html',
                styleUrls: ['./card-subtitle.component.scss'],
                host: { class: 'uni-card-subtitle' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$j = ["*"];
var UniCardTitleComponent = /** @class */ (function () {
    function UniCardTitleComponent() {
    }
    UniCardTitleComponent.ɵfac = function UniCardTitleComponent_Factory(t) { return new (t || UniCardTitleComponent)(); };
    UniCardTitleComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardTitleComponent, selectors: [["uni-card-title"]], hostAttrs: [1, "uni-card-title"], exportAs: ["uniCardTitle"], ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function UniCardTitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-card-title{display:block;font-size:20px;font-weight:500;line-height:1.6}"], encapsulation: 2, changeDetection: 0 });
    return UniCardTitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardTitleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card-title',
                exportAs: 'uniCardTitle',
                templateUrl: './card-title.component.html',
                styleUrls: ['./card-title.component.scss'],
                host: { class: 'uni-card-title' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var _c0$k = ["*"];
var UniCardContentComponent = /** @class */ (function () {
    function UniCardContentComponent() {
    }
    UniCardContentComponent.ɵfac = function UniCardContentComponent_Factory(t) { return new (t || UniCardContentComponent)(); };
    UniCardContentComponent.ɵcmp = ɵɵdefineComponent({ type: UniCardContentComponent, selectors: [["uni-card-content"]], hostAttrs: [1, "uni-card-content"], exportAs: ["uniCardContent"], ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function UniCardContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-card-content{display:block;padding-left:15px;padding-right:15px}"], encapsulation: 2, changeDetection: 0 });
    return UniCardContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardContentComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card-content',
                exportAs: 'uniCardContent',
                templateUrl: './card-content.component.html',
                styleUrls: ['./card-content.component.scss'],
                host: { class: 'uni-card-content' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

var UniCardAvatarDirective = /** @class */ (function () {
    function UniCardAvatarDirective() {
    }
    UniCardAvatarDirective.ɵfac = function UniCardAvatarDirective_Factory(t) { return new (t || UniCardAvatarDirective)(); };
    UniCardAvatarDirective.ɵdir = ɵɵdefineDirective({ type: UniCardAvatarDirective, selectors: [["", "uniCardAvatar", ""]], hostAttrs: [1, "uni-card-avatar"], exportAs: ["uniCardAvatar"] });
    return UniCardAvatarDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardAvatarDirective, [{
        type: Directive,
        args: [{
                exportAs: 'uniCardAvatar',
                selector: '[uniCardAvatar]',
                host: { class: 'uni-card-avatar' },
            }]
    }], null, null); })();

var declarations$3 = [
    UniCardComponent,
    UniCardFooterComponent,
    UniCardHeaderComponent,
    UniCardSubtitleComponent,
    UniCardTitleComponent,
    UniCardContentComponent,
    UniCardAvatarDirective,
];
var UniCardModule = /** @class */ (function () {
    function UniCardModule() {
    }
    UniCardModule.ɵmod = ɵɵdefineNgModule({ type: UniCardModule });
    UniCardModule.ɵinj = ɵɵdefineInjector({ factory: function UniCardModule_Factory(t) { return new (t || UniCardModule)(); }, imports: [[CommonModule]] });
    return UniCardModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniCardModule, { declarations: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective], imports: [CommonModule], exports: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCardModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$3,
                exports: declarations$3,
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$l = ["*"];
var UniTabLabelComponent = /** @class */ (function () {
    function UniTabLabelComponent(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._active = false;
        this._disabled = false;
    }
    Object.defineProperty(UniTabLabelComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (v) {
            this._active = coerceBooleanProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabLabelComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            this._disabled = coerceBooleanProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabLabelComponent.prototype, "width", {
        get: function () {
            return this._el.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    UniTabLabelComponent.ɵfac = function UniTabLabelComponent_Factory(t) { return new (t || UniTabLabelComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef)); };
    UniTabLabelComponent.ɵcmp = ɵɵdefineComponent({ type: UniTabLabelComponent, selectors: [["uni-tab-label"]], hostAttrs: [1, "uni-tab-label"], hostVars: 4, hostBindings: function UniTabLabelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
        } }, inputs: { active: "active", disabled: "disabled" }, exportAs: ["uniTabLabel"], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function UniTabLabelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-tab-label{padding:.8em;color:var(--white-d20);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-tab-label.active{color:var(--white)}.uni-tab-label.disabled{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
    return UniTabLabelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTabLabelComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tab-label',
                exportAs: 'uniTabLabel',
                templateUrl: './tab-label.component.html',
                styleUrls: ['./tab-label.component.scss'],
                host: {
                    class: 'uni-tab-label',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

var UniTabBodyDirective = /** @class */ (function () {
    function UniTabBodyDirective(template) {
        this.template = template;
    }
    UniTabBodyDirective.ɵfac = function UniTabBodyDirective_Factory(t) { return new (t || UniTabBodyDirective)(ɵɵdirectiveInject(TemplateRef)); };
    UniTabBodyDirective.ɵdir = ɵɵdefineDirective({ type: UniTabBodyDirective, selectors: [["ng-template", "uniTabBody", ""]], exportAs: ["uniTabBody"] });
    return UniTabBodyDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTabBodyDirective, [{
        type: Directive,
        args: [{
                exportAs: 'uniTabBody',
                selector: 'ng-template[uniTabBody]',
            }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

function UniTabComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var UniTabComponent = /** @class */ (function () {
    function UniTabComponent(_cdr) {
        this._cdr = _cdr;
        this._disabled = false;
        this._active = false;
    }
    Object.defineProperty(UniTabComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            this._disabled = coerceBooleanProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (v) {
            if (v !== this._active) {
                this._active = v;
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    UniTabComponent.ɵfac = function UniTabComponent_Factory(t) { return new (t || UniTabComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniTabComponent.ɵcmp = ɵɵdefineComponent({ type: UniTabComponent, selectors: [["uni-tab"]], contentQueries: function UniTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵstaticContentQuery(dirIndex, UniTabLabelComponent, true);
            ɵɵcontentQuery(dirIndex, UniTabBodyDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uniLabel = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uniBody = _t.first);
        } }, hostAttrs: [1, "uni-tab"], hostVars: 2, hostBindings: function UniTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("active", ctx.active);
        } }, inputs: { label: "label", disabled: "disabled" }, exportAs: ["uniTab"], decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function UniTabComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, UniTabComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngTemplateOutlet", ctx.active ? ctx.uniBody.template : null);
        } }, directives: [NgTemplateOutlet], styles: [".uni-tab{display:block;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
    return UniTabComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTabComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tab',
                exportAs: 'uniTab',
                templateUrl: './tab.component.html',
                styleUrls: ['./tab.component.scss'],
                host: {
                    class: 'uni-tab',
                    '[class.active]': 'active',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], uniLabel: [{
            type: ContentChild,
            args: [UniTabLabelComponent, { static: true }]
        }], uniBody: [{
            type: ContentChild,
            args: [UniTabBodyDirective, { static: false }]
        }] }); })();

function UniTabGroupComponent_uni_tab_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r45 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "uni-tab-label", 4);
    ɵɵlistener("click", function UniTabGroupComponent_uni_tab_label_1_Template_uni_tab_label_click_0_listener($event) { ɵɵrestoreView(_r45); var i_r43 = ctx.index; var ctx_r44 = ɵɵnextContext(); return ctx_r44.select(i_r43); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tab_r42 = ctx.$implicit;
    var i_r43 = ctx.index;
    var ctx_r40 = ɵɵnextContext();
    ɵɵproperty("active", ctx_r40.active === i_r43)("disabled", tab_r42.disabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", tab_r42.label, " ");
} }
function UniTabGroupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 5);
} if (rf & 2) {
    var ctx_r41 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r41.activeLabel == null ? null : ctx_r41.activeLabel.width, "px")("transform", ctx_r41.transform);
} }
var _c0$m = [[["uni-tab"]]];
var _c1$5 = ["uni-tab"];
var UniTabGroupComponent = /** @class */ (function () {
    function UniTabGroupComponent(_cdr) {
        this._cdr = _cdr;
        this._active = 0;
        this.activeChange = new EventEmitter();
    }
    Object.defineProperty(UniTabGroupComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (v) {
            if (v !== this._active) {
                this._active = coerceNumberProperty(v);
                this._cdr.markForCheck();
                this.activeChange.emit(this._active);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "labels", {
        get: function () { return this._labels; },
        set: function (v) {
            var _this = this;
            setTimeout(function () {
                _this._labels = v;
                _this._cdr.markForCheck();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "transform", {
        get: function () {
            var width = 0;
            for (var i = 0; i < this._active; i++) {
                width += this._labels.toArray()[i].width;
            }
            return "translateX(" + width + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "activeLabel", {
        get: function () {
            return this._labels.toArray()[this._active];
        },
        enumerable: true,
        configurable: true
    });
    UniTabGroupComponent.prototype.ngAfterContentInit = function () {
        this._setActive();
    };
    UniTabGroupComponent.prototype.select = function (index) {
        this.active = index;
        this._setActive();
    };
    UniTabGroupComponent.prototype._setActive = function () {
        var _this = this;
        this.tabs.forEach(function (tab, i) {
            tab.active = i === _this._active;
        });
    };
    UniTabGroupComponent.ɵfac = function UniTabGroupComponent_Factory(t) { return new (t || UniTabGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniTabGroupComponent.ɵcmp = ɵɵdefineComponent({ type: UniTabGroupComponent, selectors: [["uni-tab-group"]], contentQueries: function UniTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniTabComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
        } }, viewQuery: function UniTabGroupComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(UniTabLabelComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labels = _t);
        } }, hostAttrs: [1, "uni-tab-group"], inputs: { active: "active" }, outputs: { activeChange: "activeChange" }, exportAs: ["uniTabGroup"], ngContentSelectors: _c1$5, decls: 5, vars: 2, consts: [[1, "uni-tab-header"], [3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "uni-tab-track"], ["class", "uni-tab-bar", 3, "width", "transform", 4, "ngIf"], [3, "active", "disabled", "click"], [1, "uni-tab-bar"]], template: function UniTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$m);
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, UniTabGroupComponent_uni_tab_label_1_Template, 2, 3, "uni-tab-label", 1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, UniTabGroupComponent_div_3_Template, 1, 4, "div", 3);
            ɵɵelementEnd();
            ɵɵprojection(4);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.tabs.toArray());
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.labels);
        } }, directives: [NgForOf, NgIf, UniTabLabelComponent], styles: [".uni-tab-group{display:block}.uni-tab-group .uni-tab-header{display:-webkit-box;display:flex}.uni-tab-group .uni-tab-track{display:block;position:relative;height:2px;border-bottom:1px solid var(--hairline-regular)}.uni-tab-group .uni-tab-track .uni-tab-bar{position:absolute;height:2px;background-color:var(--primary);-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniTabGroupComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTabGroupComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tab-group',
                exportAs: 'uniTabGroup',
                templateUrl: './tab-group.component.html',
                styleUrls: ['./tab-group.component.scss'],
                host: { class: 'uni-tab-group' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { active: [{
            type: Input
        }], activeChange: [{
            type: Output
        }], tabs: [{
            type: ContentChildren,
            args: [UniTabComponent]
        }], labels: [{
            type: ViewChildren,
            args: [UniTabLabelComponent]
        }] }); })();

var declarations$4 = [
    UniTabComponent,
    UniTabGroupComponent,
    UniTabLabelComponent,
    UniTabBodyDirective,
];
var UniTabModule = /** @class */ (function () {
    function UniTabModule() {
    }
    UniTabModule.ɵmod = ɵɵdefineNgModule({ type: UniTabModule });
    UniTabModule.ɵinj = ɵɵdefineInjector({ factory: function UniTabModule_Factory(t) { return new (t || UniTabModule)(); }, imports: [[CommonModule]] });
    return UniTabModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniTabModule, { declarations: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective], imports: [CommonModule], exports: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniTabModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$4,
                exports: declarations$4,
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$n = ["*"];
var UniToolbarComponent = /** @class */ (function () {
    function UniToolbarComponent() {
    }
    UniToolbarComponent.ɵfac = function UniToolbarComponent_Factory(t) { return new (t || UniToolbarComponent)(); };
    UniToolbarComponent.ɵcmp = ɵɵdefineComponent({ type: UniToolbarComponent, selectors: [["uni-toolbar"]], hostAttrs: [1, "uni-toolbar"], hostVars: 8, hostBindings: function UniToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniToolbar"], ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function UniToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-toolbar{display:-webkit-box;display:flex;padding:5px 10px;box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}.uni-toolbar.primary{color:var(--white);background-color:var(--primary)}.uni-toolbar.success{color:var(--white);background-color:var(--success)}.uni-toolbar.warning{color:var(--black);background-color:var(--warning)}.uni-toolbar.danger{color:var(--white);background-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
    return UniToolbarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniToolbarComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-toolbar',
                exportAs: 'uniToolbar',
                template: "<ng-content></ng-content>",
                styleUrls: ['./toolbar.component.scss'],
                host: __assign({ class: 'uni-toolbar' }, UNI_HOST_COLORS),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }] }); })();

var UniToolbarModule = /** @class */ (function () {
    function UniToolbarModule() {
    }
    UniToolbarModule.ɵmod = ɵɵdefineNgModule({ type: UniToolbarModule });
    UniToolbarModule.ɵinj = ɵɵdefineInjector({ factory: function UniToolbarModule_Factory(t) { return new (t || UniToolbarModule)(); }, imports: [[CommonModule]] });
    return UniToolbarModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniToolbarModule, { declarations: [UniToolbarComponent], imports: [CommonModule], exports: [UniToolbarComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniToolbarModule, [{
        type: NgModule,
        args: [{
                declarations: [UniToolbarComponent],
                exports: [UniToolbarComponent],
                imports: [CommonModule],
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

var UNI_SIDENAV_ANIMATIONS = {
    slideTransition: trigger('slideTransition', [
        state('false', style({
            transform: 'translateX({{ distance }}%)',
        }), { params: { distance: '-100' } }),
        state('true', style({
            transform: 'translateX(0)',
        })),
        transition('* => *', animate('200ms cubic-bezier(0.35, 0, 0.25, 1)')),
    ]),
};

var UniSidenavBodyDirective = /** @class */ (function () {
    function UniSidenavBodyDirective(template) {
        this.template = template;
    }
    UniSidenavBodyDirective.ɵfac = function UniSidenavBodyDirective_Factory(t) { return new (t || UniSidenavBodyDirective)(ɵɵdirectiveInject(TemplateRef)); };
    UniSidenavBodyDirective.ɵdir = ɵɵdefineDirective({ type: UniSidenavBodyDirective, selectors: [["ng-template", "uniSidenavBody", ""]], exportAs: ["uniSidenavBody"] });
    return UniSidenavBodyDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSidenavBodyDirective, [{
        type: Directive,
        args: [{
                exportAs: 'uniSidenavBody',
                selector: 'ng-template[uniSidenavBody]',
            }]
    }], function () { return [{ type: TemplateRef }]; }, null); })();

var _c0$o = ["view"];
var UniSidenavComponent = /** @class */ (function () {
    function UniSidenavComponent(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this._position = UniSidenavPosition.Start;
        this._mode = UniSidenavMode.Side;
        this._closeOnBackdropClick = true;
        this._hasBackdrop = true;
        this.openChange = new EventEmitter();
        this.stateChange = new EventEmitter();
        this.modeChange = new EventEmitter();
        this.positionChange = new EventEmitter();
        this.UniSidenavPosition = UniSidenavPosition;
        this.UniSidenavMode = UniSidenavMode;
        this.UniSidenavState = UniSidenavState;
    }
    Object.defineProperty(UniSidenavComponent.prototype, "position", {
        get: function () { return this._position; },
        set: function (v) {
            if (v !== this._position) {
                this._position = v;
                this.positionChange.emit(this._position);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "mode", {
        get: function () { return this._mode; },
        set: function (v) {
            if (v !== this._mode) {
                this._mode = v;
                this.modeChange.emit(this._mode);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "open", {
        get: function () { return this._open; },
        set: function (v) {
            if (v !== this._open) {
                this._open = coerceBooleanProperty(v);
                this.state = this.open ? UniSidenavState.Opening : UniSidenavState.Closing;
                this.openChange.emit(this._open);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "closeOnBackdropClick", {
        get: function () { return this._closeOnBackdropClick; },
        set: function (v) {
            if (v !== this._closeOnBackdropClick) {
                this._closeOnBackdropClick = coerceBooleanProperty(v);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "hasBackdrop", {
        get: function () { return this._hasBackdrop; },
        set: function (v) {
            if (v !== this._hasBackdrop) {
                this._hasBackdrop = coerceBooleanProperty(v);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "slide", {
        get: function () {
            return {
                value: this.open,
                params: {
                    distance: this.position === UniSidenavPosition.Start ? '-100' : '100',
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavComponent.prototype, "state", {
        get: function () { return this._state; },
        set: function (v) {
            if (v !== this._state) {
                var prev = this._state;
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
        },
        enumerable: true,
        configurable: true
    });
    UniSidenavComponent.prototype.ngAfterViewInit = function () {
        if (this.open) {
            this.view.createEmbeddedView(this.body.template);
        }
    };
    UniSidenavComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () { return _this.cdr.markForCheck(); });
    };
    UniSidenavComponent.prototype.onEscape = function () {
        if (this.mode === UniSidenavMode.Over) {
            this.open = false;
        }
    };
    UniSidenavComponent.prototype.onSlideEnd = function () {
        this.state = this.open ? UniSidenavState.Opened : UniSidenavState.Closed;
    };
    UniSidenavComponent.ɵfac = function UniSidenavComponent_Factory(t) { return new (t || UniSidenavComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniSidenavComponent.ɵcmp = ɵɵdefineComponent({ type: UniSidenavComponent, selectors: [["uni-sidenav"]], contentQueries: function UniSidenavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniSidenavBodyDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.body = _t.first);
        } }, viewQuery: function UniSidenavComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$o, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.view = _t.first);
        } }, hostAttrs: [1, "uni-sidenav"], hostVars: 7, hostBindings: function UniSidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵcomponentHostSyntheticListener("@slideTransition.done", function UniSidenavComponent_animation_slideTransition_done_HostBindingHandler($event) { return ctx.onSlideEnd(); });
            ɵɵlistener("keydown.escape", function UniSidenavComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscape(); }, false, ɵɵresolveDocument);
        } if (rf & 2) {
            ɵɵupdateSyntheticHostBinding("@slideTransition", ctx.slide);
            ɵɵclassProp("over", ctx.mode === ctx.UniSidenavMode.Over)("end", ctx.position === ctx.UniSidenavPosition.End)("closed", ctx.open === false);
        } }, inputs: { position: "position", mode: "mode", open: "open", closeOnBackdropClick: "closeOnBackdropClick", hasBackdrop: "hasBackdrop" }, outputs: { openChange: "openChange", stateChange: "stateChange", modeChange: "modeChange", positionChange: "positionChange" }, exportAs: ["uniSidenav"], decls: 2, vars: 0, consts: [["view", ""]], template: function UniSidenavComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainer(0, null, 0);
        } }, styles: [".uni-sidenav{display:block;position:absolute;height:100%;overflow-y:auto;z-index:2;background-color:var(--dark);color:var(--white)}.uni-sidenav.end{right:0}.uni-sidenav.over{z-index:3}"], encapsulation: 2, data: { animation: [
                UNI_SIDENAV_ANIMATIONS.slideTransition,
            ] }, changeDetection: 0 });
    return UniSidenavComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSidenavComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav',
                exportAs: 'uniSidenav',
                template: "<ng-container #view></ng-container>",
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, { position: [{
            type: Input
        }], mode: [{
            type: Input
        }], open: [{
            type: Input
        }], closeOnBackdropClick: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], openChange: [{
            type: Output
        }], stateChange: [{
            type: Output
        }], modeChange: [{
            type: Output
        }], positionChange: [{
            type: Output
        }], body: [{
            type: ContentChild,
            args: [UniSidenavBodyDirective]
        }], view: [{
            type: ViewChild,
            args: ['view', { read: ViewContainerRef }]
        }], onEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();

function UniSidenavContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function UniSidenavContainerComponent_div_0_Template_div_click_0_listener($event) { ɵɵrestoreView(_r49); var ctx_r48 = ɵɵnextContext(); return ctx_r48.onBackdropClick(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r47 = ɵɵnextContext();
    ɵɵclassProp("visible", ctx_r47.showBackdrop);
} }
var _c0$p = [[["uni-sidenav"]], [["uni-sidenav-content"]]];
var _c1$6 = ["uni-sidenav", "uni-sidenav-content"];
var UniSidenavContainerComponent = /** @class */ (function (_super) {
    __extends(UniSidenavContainerComponent, _super);
    function UniSidenavContainerComponent(_cdr) {
        var _this = _super.call(this) || this;
        _this._cdr = _cdr;
        _this.backdropClicked = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UniSidenavContainerComponent.prototype, "showBackdrop", {
        get: function () {
            return this.sidenav.mode === UniSidenavMode.Over &&
                this.sidenav.open &&
                this.sidenav.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContainerComponent.prototype, "hasBackdrop", {
        get: function () {
            return this.sidenav.mode === UniSidenavMode.Over &&
                this.sidenav.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    UniSidenavContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sidenav.openChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
        this.sidenav.modeChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
        this.sidenav.positionChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
    };
    UniSidenavContainerComponent.prototype.onBackdropClick = function () {
        this.backdropClicked.emit();
        if (this.sidenav.closeOnBackdropClick) {
            this.sidenav.open = !this.sidenav.open;
        }
    };
    UniSidenavContainerComponent.ɵfac = function UniSidenavContainerComponent_Factory(t) { return new (t || UniSidenavContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniSidenavContainerComponent.ɵcmp = ɵɵdefineComponent({ type: UniSidenavContainerComponent, selectors: [["uni-sidenav-container"]], contentQueries: function UniSidenavContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniSidenavComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, hostAttrs: [1, "uni-sidenav-container"], outputs: { backdropClicked: "backdropClicked" }, exportAs: ["uniSidenavContainer"], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$6, decls: 3, vars: 1, consts: [["class", "uni-backdrop", 3, "visible", "click", 4, "ngIf"], [1, "uni-backdrop", 3, "click"]], template: function UniSidenavContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$p);
            ɵɵtemplate(0, UniSidenavContainerComponent_div_0_Template, 1, 2, "div", 0);
            ɵɵprojection(1);
            ɵɵprojection(2, 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.hasBackdrop);
        } }, directives: [NgIf], styles: [".uni-backdrop{position:absolute;height:100%;width:100%;opacity:0;pointer-events:none;z-index:2;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.uni-backdrop.visible{opacity:1;pointer-events:all}.uni-sidenav-container{display:block;position:relative;overflow:hidden}"], encapsulation: 2, changeDetection: 0 });
    return UniSidenavContainerComponent;
}(UniSubscriptionHelper));
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSidenavContainerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav-container',
                exportAs: 'uniSidenavContainer',
                templateUrl: './sidenav-container.component.html',
                styleUrls: ['./sidenav-container.component.scss'],
                host: { class: 'uni-sidenav-container' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { backdropClicked: [{
            type: Output
        }], sidenav: [{
            type: ContentChild,
            args: [UniSidenavComponent, { static: false }]
        }] }); })();

var _c0$q = ["*"];
var UniSidenavContentComponent = /** @class */ (function () {
    function UniSidenavContentComponent(_container, _el) {
        this._container = _container;
        this._el = _el;
    }
    Object.defineProperty(UniSidenavContentComponent.prototype, "marginLeft", {
        get: function () {
            return this._open &&
                this._position === UniSidenavPosition.Start &&
                this._mode === UniSidenavMode.Side ? this._width : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "marginRight", {
        get: function () {
            return this._open &&
                this._position === UniSidenavPosition.End &&
                this._mode === UniSidenavMode.Side ? this._width : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_open", {
        get: function () {
            return this._container.sidenav.open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_mode", {
        get: function () {
            return this._container.sidenav.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_position", {
        get: function () {
            return this._container.sidenav.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_width", {
        get: function () {
            return this._container.sidenav.el.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    UniSidenavContentComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
        }, 1000);
    };
    UniSidenavContentComponent.ɵfac = function UniSidenavContentComponent_Factory(t) { return new (t || UniSidenavContentComponent)(ɵɵdirectiveInject(forwardRef(function () { return UniSidenavContainerComponent; })), ɵɵdirectiveInject(ElementRef)); };
    UniSidenavContentComponent.ɵcmp = ɵɵdefineComponent({ type: UniSidenavContentComponent, selectors: [["uni-sidenav-content"]], hostAttrs: [1, "uni-sidenav-content"], hostVars: 4, hostBindings: function UniSidenavContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("margin-left", ctx.marginLeft, "px")("margin-right", ctx.marginRight, "px");
        } }, exportAs: ["uniSidenavContent"], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function UniSidenavContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-sidenav-content{display:block;position:relative;overflow:auto;z-index:1;height:100%}"], encapsulation: 2, changeDetection: 0 });
    return UniSidenavContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSidenavContentComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav-content',
                exportAs: 'uniSidenavContent',
                template: "<ng-content></ng-content>",
                styleUrls: ['./sidenav-content.component.scss'],
                host: {
                    class: 'uni-sidenav-content',
                    '[style.margin-left.px]': 'marginLeft',
                    '[style.margin-right.px]': 'marginRight',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: UniSidenavContainerComponent, decorators: [{
                type: Inject,
                args: [forwardRef(function () { return UniSidenavContainerComponent; })]
            }] }, { type: ElementRef }]; }, null); })();

var declarations$5 = [
    UniSidenavComponent,
    UniSidenavContainerComponent,
    UniSidenavContentComponent,
    UniSidenavBodyDirective,
];
var UniSidenavModule = /** @class */ (function () {
    function UniSidenavModule() {
    }
    UniSidenavModule.ɵmod = ɵɵdefineNgModule({ type: UniSidenavModule });
    UniSidenavModule.ɵinj = ɵɵdefineInjector({ factory: function UniSidenavModule_Factory(t) { return new (t || UniSidenavModule)(); }, imports: [[CommonModule]] });
    return UniSidenavModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniSidenavModule, { declarations: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective], imports: [CommonModule], exports: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSidenavModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$5,
                exports: declarations$5,
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$r = ["*"];
var UniSplitAreaComponent = /** @class */ (function () {
    function UniSplitAreaComponent(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._flex = '1 1 auto';
        this.flexChange = new EventEmitter();
    }
    Object.defineProperty(UniSplitAreaComponent.prototype, "flex", {
        get: function () { return this._flex; },
        set: function (v) {
            if (v !== this._flex) {
                this._flex = v;
                this._cdr.markForCheck();
                this.flexChange.emit(this._flex);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "index", {
        get: function () { return this._index; },
        set: function (v) {
            if (v !== this._index) {
                this._index = coerceNumberProperty(v);
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "clientWidth", {
        get: function () {
            return this._el.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "clientHeight", {
        get: function () {
            return this._el.nativeElement.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    UniSplitAreaComponent.ɵfac = function UniSplitAreaComponent_Factory(t) { return new (t || UniSplitAreaComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef)); };
    UniSplitAreaComponent.ɵcmp = ɵɵdefineComponent({ type: UniSplitAreaComponent, selectors: [["uni-split-area"]], hostAttrs: [1, "uni-split-area"], hostVars: 4, hostBindings: function UniSplitAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("order", ctx.index)("flex", ctx.flex);
        } }, inputs: { flex: "flex", index: "index" }, outputs: { flexChange: "flexChange" }, exportAs: ["uniSplitArea"], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function UniSplitAreaComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-split-area{display:-webkit-box;display:flex;overflow:auto;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitAreaComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSplitAreaComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitArea',
                selector: 'uni-split-area',
                template: "<ng-content></ng-content>",
                styleUrls: ['./split-area.component.scss'],
                host: {
                    class: 'uni-split-area',
                    '[style.order]': 'index',
                    '[style.flex]': 'flex',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }]; }, { flex: [{
            type: Input
        }], index: [{
            type: Input
        }], flexChange: [{
            type: Output
        }] }); })();

var UniSplitDirection;
(function (UniSplitDirection) {
    UniSplitDirection["Vertical"] = "vertical";
    UniSplitDirection["Horizontal"] = "horizontal";
})(UniSplitDirection || (UniSplitDirection = {}));

var UniSplitHandleComponent = /** @class */ (function () {
    function UniSplitHandleComponent() {
        this.resize = new EventEmitter();
    }
    Object.defineProperty(UniSplitHandleComponent.prototype, "resizing", {
        get: function () {
            return this._x !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitHandleComponent.prototype, "vertical", {
        get: function () {
            return this.direction === UniSplitDirection.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    UniSplitHandleComponent.prototype.onMouseDown = function (e) {
        if (this.vertical) {
            this._x = e.clientX;
        }
        else {
            this._y = e.clientY;
        }
    };
    UniSplitHandleComponent.prototype.onMouseMove = function (e) {
        e.preventDefault();
        if (this._x !== undefined) {
            this.resize.emit(e.clientX - this._x);
            this._x = e.clientX;
        }
        else if (this._y !== undefined) {
            this.resize.emit(e.clientY - this._y);
            this._y = e.clientY;
        }
    };
    UniSplitHandleComponent.prototype.onMouseUp = function () {
        if (this._x !== undefined) {
            this._x = undefined;
        }
        if (this._y !== undefined) {
            this._y = undefined;
        }
    };
    UniSplitHandleComponent.ɵfac = function UniSplitHandleComponent_Factory(t) { return new (t || UniSplitHandleComponent)(); };
    UniSplitHandleComponent.ɵcmp = ɵɵdefineComponent({ type: UniSplitHandleComponent, selectors: [["uni-split-handle"]], hostAttrs: [1, "uni-split-handle"], hostVars: 6, hostBindings: function UniSplitHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mousedown", function UniSplitHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousemove", function UniSplitHandleComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, ɵɵresolveDocument)("mouseup", function UniSplitHandleComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp(); }, false, ɵɵresolveDocument);
        } if (rf & 2) {
            ɵɵclassProp("uni-split-handle--resizing", ctx.resizing)("uni-split-handle--vertical", ctx.vertical)("uni-split-handle--horizontal", !ctx.vertical);
        } }, outputs: { resize: "resize" }, exportAs: ["uniSplitHandle"], decls: 0, vars: 0, template: function UniSplitHandleComponent_Template(rf, ctx) { }, styles: [".uni-split-handle{-webkit-box-ordinal-group:2;order:1;-webkit-transition:background-color .5s;transition:background-color .5s;background-color:var(--dark)}.uni-split-handle.uni-split-handle--resizing,.uni-split-handle:hover{background-color:var(--primary)}.uni-split-handle.uni-split-handle--vertical{width:10px;min-width:10px;cursor:col-resize}.uni-split-handle.uni-split-handle--horizontal{height:10px;min-height:10px;cursor:row-resize}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitHandleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSplitHandleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitHandle',
                selector: 'uni-split-handle',
                template: "",
                styleUrls: ['./split-handle.component.scss'],
                host: {
                    class: 'uni-split-handle',
                    '[class.uni-split-handle--resizing]': 'resizing',
                    '[class.uni-split-handle--vertical]': 'vertical',
                    '[class.uni-split-handle--horizontal]': '!vertical',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { resize: [{
            type: Output
        }], onMouseDown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onMouseMove: [{
            type: HostListener,
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: HostListener,
            args: ['document:mouseup']
        }] }); })();

function areaPct(area, container) {
    return (area / container) * 100;
}

var _c0$s = [[["uni-split-area"]], [["uni-split-handle"]], [["uni-split-area"]], [["uni-split"]]];
var _c1$7 = ["uni-split-area", "uni-split-handle", "uni-split-area", "uni-split"];
var UniSplitComponent = /** @class */ (function (_super) {
    __extends(UniSplitComponent, _super);
    function UniSplitComponent(_el) {
        var _this = _super.call(this) || this;
        _this._el = _el;
        _this._el.nativeElement.classList.add(_this._name);
        return _this;
    }
    Object.defineProperty(UniSplitComponent.prototype, "areas", {
        get: function () { return this._areas; },
        set: function (v) {
            if (v && v.length === 2) {
                this._areas = v;
                if (this._areas.first.index === undefined) {
                    this._areas.first.index = 0;
                }
                if (this._areas.last.index === undefined) {
                    this._areas.last.index = 2;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "handle", {
        get: function () { return this._handle; },
        set: function (v) {
            if (v) {
                this._handle = v;
                this._handle.direction = this._vertical ? UniSplitDirection.Vertical :
                    UniSplitDirection.Horizontal;
                this._handle.resize.pipe(takeUntil(this.destroy$)).subscribe(this._onResize.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "_name", {
        get: function () {
            return this._el.nativeElement.nodeName.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "_vertical", {
        get: function () {
            return this._name === 'uni-vertical-split';
        },
        enumerable: true,
        configurable: true
    });
    UniSplitComponent.prototype._onResize = function (distance) {
        if (this._areas) {
            var pct = void 0;
            if (this._vertical) {
                pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
            }
            else {
                pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
            }
            this._areas.first.flex = "0 0 " + (pct <= 100 ? pct : 100) + "%";
        }
    };
    UniSplitComponent.ɵfac = function UniSplitComponent_Factory(t) { return new (t || UniSplitComponent)(ɵɵdirectiveInject(ElementRef)); };
    UniSplitComponent.ɵcmp = ɵɵdefineComponent({ type: UniSplitComponent, selectors: [["uni-vertical-split"], ["uni-horizontal-split"]], contentQueries: function UniSplitComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, UniSplitHandleComponent, true);
            ɵɵcontentQuery(dirIndex, UniSplitAreaComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handle = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.areas = _t);
        } }, hostAttrs: [1, "uni-split"], exportAs: ["uniSplit"], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$7, decls: 4, vars: 0, template: function UniSplitComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$s);
            ɵɵprojection(0);
            ɵɵprojection(1, 1);
            ɵɵprojection(2, 2);
            ɵɵprojection(3, 3);
        } }, styles: [".uni-split{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto}.uni-split.uni-vertical-split{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.uni-split.uni-horizontal-split{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitComponent;
}(UniSubscriptionHelper));
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSplitComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplit',
                selector: 'uni-vertical-split, uni-horizontal-split',
                templateUrl: './split.component.html',
                styleUrls: ['./split.component.scss'],
                host: { class: 'uni-split' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }]; }, { areas: [{
            type: ContentChildren,
            args: [UniSplitAreaComponent]
        }], handle: [{
            type: ContentChild,
            args: [UniSplitHandleComponent]
        }] }); })();

var declarations$6 = [
    UniSplitComponent,
    UniSplitAreaComponent,
    UniSplitHandleComponent,
];
var UniSplitModule = /** @class */ (function () {
    function UniSplitModule() {
    }
    UniSplitModule.ɵmod = ɵɵdefineNgModule({ type: UniSplitModule });
    UniSplitModule.ɵinj = ɵɵdefineInjector({ factory: function UniSplitModule_Factory(t) { return new (t || UniSplitModule)(); }, imports: [[CommonModule]] });
    return UniSplitModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniSplitModule, { declarations: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent], imports: [CommonModule], exports: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniSplitModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$6,
                exports: declarations$6,
                imports: [CommonModule],
            }]
    }], null, null); })();

var UniIconService = /** @class */ (function () {
    function UniIconService() {
    }
    Object.defineProperty(UniIconService.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    UniIconService.prototype.registry = function (prefix) {
        this._prefix = prefix;
    };
    UniIconService.ɵfac = function UniIconService_Factory(t) { return new (t || UniIconService)(); };
    UniIconService.ɵprov = ɵɵdefineInjectable({ token: UniIconService, factory: UniIconService.ɵfac, providedIn: 'root' });
    return UniIconService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var UniIconComponent = /** @class */ (function () {
    function UniIconComponent(_el, _iconService) {
        this._el = _el;
        this._iconService = _iconService;
    }
    Object.defineProperty(UniIconComponent.prototype, "icon", {
        get: function () { return this._icon; },
        set: function (v) {
            if (v !== this._icon) {
                if (v && this._el.nativeElement.classList.contains(this._icon)) {
                    this._el.nativeElement.classList.remove(this._icon);
                }
                this._icon = v;
                this._el.nativeElement.classList.add(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    UniIconComponent.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add(this._iconService.prefix);
    };
    UniIconComponent.ɵfac = function UniIconComponent_Factory(t) { return new (t || UniIconComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(UniIconService)); };
    UniIconComponent.ɵcmp = ɵɵdefineComponent({ type: UniIconComponent, selectors: [["uni-icon"]], hostAttrs: [1, "uni-icon"], inputs: { icon: "icon" }, exportAs: ["uniIcon"], decls: 0, vars: 0, template: function UniIconComponent_Template(rf, ctx) { }, styles: [".uni-icon{display:inline-block}"], encapsulation: 2, changeDetection: 0 });
    return UniIconComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniIconComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-icon',
                exportAs: 'uniIcon',
                template: "",
                styleUrls: ['./icon.component.scss'],
                host: { class: 'uni-icon' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: UniIconService }]; }, { icon: [{
            type: Input
        }] }); })();

var UniIconModule = /** @class */ (function () {
    function UniIconModule() {
    }
    UniIconModule.ɵmod = ɵɵdefineNgModule({ type: UniIconModule });
    UniIconModule.ɵinj = ɵɵdefineInjector({ factory: function UniIconModule_Factory(t) { return new (t || UniIconModule)(); }, imports: [[CommonModule]] });
    return UniIconModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniIconModule, { declarations: [UniIconComponent], imports: [CommonModule], exports: [UniIconComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniIconModule, [{
        type: NgModule,
        args: [{
                declarations: [UniIconComponent],
                exports: [UniIconComponent],
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$t = ["uni-button", ""];
var _c1$8 = ["*"];
var UNI_BUTTON_HOST_ATTRIBUTES = [
    'uni-button',
    'uni-link-button',
    'uni-icon-button',
    'uni-fab',
    'uni-mini-fab',
];
var UniButtonComponent = /** @class */ (function () {
    function UniButtonComponent(_el) {
        var e_1, _a;
        this._el = _el;
        try {
            for (var UNI_BUTTON_HOST_ATTRIBUTES_1 = __values(UNI_BUTTON_HOST_ATTRIBUTES), UNI_BUTTON_HOST_ATTRIBUTES_1_1 = UNI_BUTTON_HOST_ATTRIBUTES_1.next(); !UNI_BUTTON_HOST_ATTRIBUTES_1_1.done; UNI_BUTTON_HOST_ATTRIBUTES_1_1 = UNI_BUTTON_HOST_ATTRIBUTES_1.next()) {
                var attr = UNI_BUTTON_HOST_ATTRIBUTES_1_1.value;
                if (this._element.hasAttribute(attr)) {
                    this._element.classList.add(attr);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (UNI_BUTTON_HOST_ATTRIBUTES_1_1 && !UNI_BUTTON_HOST_ATTRIBUTES_1_1.done && (_a = UNI_BUTTON_HOST_ATTRIBUTES_1.return)) _a.call(UNI_BUTTON_HOST_ATTRIBUTES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(UniButtonComponent.prototype, "_element", {
        get: function () {
            return this._el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    UniButtonComponent.ɵfac = function UniButtonComponent_Factory(t) { return new (t || UniButtonComponent)(ɵɵdirectiveInject(ElementRef)); };
    UniButtonComponent.ɵcmp = ɵɵdefineComponent({ type: UniButtonComponent, selectors: [["button", "uni-button", ""], ["button", "uni-icon-button", ""], ["button", "uni-fab", ""], ["button", "uni-mini-fab", ""], ["button", "uni-link-button", ""]], hostVars: 8, hostBindings: function UniButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniButton"], attrs: _c0$t, ngContentSelectors: _c1$8, decls: 1, vars: 0, template: function UniButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{padding:.3em .55em;font-size:.9em;font-weight:700;outline:0;border:2px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--white);cursor:pointer;border-radius:3px;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out}[_nghost-%COMP%]:disabled{opacity:.6;box-shadow:none!important;cursor:not-allowed}[_nghost-%COMP%]:disabled:active{-webkit-filter:none;filter:none}[_nghost-%COMP%]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.uni-button[_nghost-%COMP%]{background-color:var(--grey)}.uni-button.primary[_nghost-%COMP%]{color:var(--white);background-color:var(--primary)}.uni-button.success[_nghost-%COMP%]{color:var(--white);background-color:var(--success)}.uni-button.warning[_nghost-%COMP%]{color:var(--black);background-color:var(--warning)}.uni-button.danger[_nghost-%COMP%]{color:var(--white);background-color:var(--danger)}.uni-fab[_nghost-%COMP%]{height:50px;width:50px}.uni-button[_nghost-%COMP%], .uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-fab[_nghost-%COMP%]     .uni-icon, .uni-icon-button[_nghost-%COMP%]     .uni-icon, .uni-mini-fab[_nghost-%COMP%]     .uni-icon{font-size:20px}.uni-icon-button[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{height:40px;width:40px}.uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:var(--grey);color:var(--white)}.uni-fab.primary[_nghost-%COMP%], .uni-mini-fab.primary[_nghost-%COMP%]{background-color:var(--primary);color:var(--white)}.uni-fab.success[_nghost-%COMP%], .uni-mini-fab.success[_nghost-%COMP%]{background-color:var(--success);color:var(--white)}.uni-fab.warning[_nghost-%COMP%], .uni-mini-fab.warning[_nghost-%COMP%]{background-color:var(--warning);color:var(--white);color:var(--black)}.uni-fab.danger[_nghost-%COMP%], .uni-mini-fab.danger[_nghost-%COMP%]{background-color:var(--danger);color:var(--white)}.uni-icon-button[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:transparent;opacity:.7;color:var(--white)}.uni-icon-button[_nghost-%COMP%]:hover{opacity:1}.uni-icon-button[_nghost-%COMP%]:hover:disabled{opacity:.6}.uni-icon-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-icon-button.success[_nghost-%COMP%]{color:var(--success)}.uni-icon-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-icon-button.danger[_nghost-%COMP%]{color:var(--danger)}.uni-link-button[_nghost-%COMP%]{background-color:transparent;box-shadow:none}.uni-link-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-link-button.success[_nghost-%COMP%]{color:var(--success)}.uni-link-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-link-button.danger[_nghost-%COMP%]{color:var(--danger)}"], changeDetection: 0 });
    return UniButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniButtonComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: "button[uni-button], button[uni-icon-button],\n             button[uni-fab], button[uni-mini-fab],\n             button[uni-link-button]",
                exportAs: 'uniButton',
                template: "<ng-content></ng-content>",
                styleUrls: ['./button.component.scss'],
                host: __assign({}, UNI_HOST_COLORS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ElementRef }]; }, { color: [{
            type: Input
        }] }); })();

var UniButtonModule = /** @class */ (function () {
    function UniButtonModule() {
    }
    UniButtonModule.ɵmod = ɵɵdefineNgModule({ type: UniButtonModule });
    UniButtonModule.ɵinj = ɵɵdefineInjector({ factory: function UniButtonModule_Factory(t) { return new (t || UniButtonModule)(); }, imports: [[CommonModule]] });
    return UniButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniButtonModule, { declarations: [UniButtonComponent], imports: [CommonModule], exports: [UniButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [UniButtonComponent],
                exports: [UniButtonComponent],
                imports: [CommonModule],
            }]
    }], null, null); })();

var UniProgressMode;
(function (UniProgressMode) {
    UniProgressMode["Determinate"] = "determinate";
    UniProgressMode["Indeterminate"] = "indeterminate";
})(UniProgressMode || (UniProgressMode = {}));

var UniProgressBarComponent = /** @class */ (function () {
    function UniProgressBarComponent(_cdr) {
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
    Object.defineProperty(UniProgressBarComponent.prototype, "total", {
        get: function () { return this._total; },
        set: function (v) {
            this._total = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressBarComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            this._value = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressBarComponent.prototype, "percentage", {
        get: function () {
            return this.mode === UniProgressMode.Determinate ?
                (100 / this.total) * this.value :
                (100 / this._indeterminate.total) * this._indeterminate.value;
        },
        enumerable: true,
        configurable: true
    });
    UniProgressBarComponent.ɵfac = function UniProgressBarComponent_Factory(t) { return new (t || UniProgressBarComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniProgressBarComponent.ɵcmp = ɵɵdefineComponent({ type: UniProgressBarComponent, selectors: [["uni-progress-bar"]], hostAttrs: [1, "uni-progress-bar"], hostVars: 10, hostBindings: function UniProgressBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        } }, inputs: { mode: "mode", color: "color", total: "total", value: "value" }, exportAs: ["uniProgresssBar"], decls: 3, vars: 2, consts: [["width", "100%", "height", "4px"], ["rx", "2px", "width", "100%", 1, "uni-progress-bar-background"], ["rx", "2px", 1, "uni-progress-bar-foreground"]], template: function UniProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵnamespaceSVG();
            ɵɵelementStart(0, "svg", 0);
            ɵɵelement(1, "rect", 1);
            ɵɵelement(2, "rect", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵstyleProp("width", ctx.percentage, "%");
        } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-bar{display:-webkit-box;display:flex}.uni-progress-bar.indeterminate .uni-progress-bar-foreground{-webkit-animation:1s linear infinite uni-bar-slide;animation:1s linear infinite uni-bar-slide}.uni-progress-bar.primary .uni-progress-bar-background{fill:var(--primary-a50)}.uni-progress-bar.primary .uni-progress-bar-foreground{fill:var(--primary)}.uni-progress-bar.success .uni-progress-bar-background{fill:var(--success-a50)}.uni-progress-bar.success .uni-progress-bar-foreground{fill:var(--success)}.uni-progress-bar.warning .uni-progress-bar-background{fill:var(--warning-a50)}.uni-progress-bar.warning .uni-progress-bar-foreground{fill:var(--warning)}.uni-progress-bar.danger .uni-progress-bar-background{fill:var(--danger-a50)}.uni-progress-bar.danger .uni-progress-bar-foreground{fill:var(--danger)}.uni-progress-bar .uni-progress-bar-foreground{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniProgressBarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniProgressBarComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-progress-bar',
                exportAs: 'uniProgresssBar',
                templateUrl: './progress-bar.component.html',
                styleUrls: ['./progress-bar.component.scss'],
                host: __assign(__assign({ class: 'uni-progress-bar' }, UNI_HOST_COLORS), { '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { mode: [{
            type: Input
        }], color: [{
            type: Input
        }], total: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

var UniProgressSpinnerComponent = /** @class */ (function () {
    function UniProgressSpinnerComponent(_cdr) {
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
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "total", {
        get: function () { return this._total; },
        set: function (v) {
            this._total = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            this._value = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "strokeWidth", {
        get: function () { return this._strokeWidth; },
        set: function (v) {
            this._strokeWidth = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "diameter", {
        get: function () { return this._diameter; },
        set: function (v) {
            this._diameter = coerceNumberProperty(v);
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "radius", {
        get: function () {
            return (this.diameter / 2) - this.strokeWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "strokeDasharray", {
        get: function () {
            return this._circumference + " " + this._circumference;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "strokeDashoffset", {
        get: function () {
            return this._circumference - this._percentage / 100 * this._circumference;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "_circumference", {
        get: function () {
            return this.radius * 2 * Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "_percentage", {
        get: function () {
            return (100 / this._modeTotal) * this._modeValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "_modeValue", {
        get: function () {
            return this.mode === UniProgressMode.Determinate ? this.value : this._indeterminate.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniProgressSpinnerComponent.prototype, "_modeTotal", {
        get: function () {
            return this.mode === UniProgressMode.Determinate ? this.total : this._indeterminate.total;
        },
        enumerable: true,
        configurable: true
    });
    UniProgressSpinnerComponent.ɵfac = function UniProgressSpinnerComponent_Factory(t) { return new (t || UniProgressSpinnerComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniProgressSpinnerComponent.ɵcmp = ɵɵdefineComponent({ type: UniProgressSpinnerComponent, selectors: [["uni-progress-spinner"]], hostAttrs: [1, "uni-progress-spinner"], hostVars: 10, hostBindings: function UniProgressSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        } }, inputs: { mode: "mode", color: "color", total: "total", value: "value", strokeWidth: "strokeWidth", diameter: "diameter" }, exportAs: ["uniProgressSpinner"], decls: 2, vars: 16, template: function UniProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵnamespaceSVG();
            ɵɵelementStart(0, "svg");
            ɵɵelement(1, "circle");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
            ɵɵadvance(1);
            ɵɵstyleProp("stroke-width", ctx.strokeWidth, "px")("stroke-dashoffset", ctx.strokeDashoffset)("stroke-dasharray", ctx.strokeDasharray)("r", ctx.radius, "px")("cx", ctx.diameter / 2, "px")("cy", ctx.diameter / 2, "px");
        } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-spinner{display:inline-block}.uni-progress-spinner.indeterminate circle{-webkit-animation:1s linear infinite uni-spinner-rotate;animation:1s linear infinite uni-spinner-rotate}.uni-progress-spinner.primary circle{stroke:var(--primary)}.uni-progress-spinner.success circle{stroke:var(--success)}.uni-progress-spinner.warning circle{stroke:var(--warning)}.uni-progress-spinner.danger circle{stroke:var(--danger)}.uni-progress-spinner svg circle{fill:transparent;-webkit-transition:stroke-dashoffset .2s;transition:stroke-dashoffset .2s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}"], encapsulation: 2, changeDetection: 0 });
    return UniProgressSpinnerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniProgressSpinnerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-progress-spinner',
                exportAs: 'uniProgressSpinner',
                templateUrl: './progress-spinner.component.html',
                styleUrls: ['./progress-spinner.component.scss'],
                host: __assign(__assign({ class: 'uni-progress-spinner' }, UNI_HOST_COLORS), { '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { mode: [{
            type: Input
        }], color: [{
            type: Input
        }], total: [{
            type: Input
        }], value: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], diameter: [{
            type: Input
        }] }); })();

var declarations$7 = [
    UniProgressBarComponent,
    UniProgressSpinnerComponent,
];
var UniProgressModule = /** @class */ (function () {
    function UniProgressModule() {
    }
    UniProgressModule.ɵmod = ɵɵdefineNgModule({ type: UniProgressModule });
    UniProgressModule.ɵinj = ɵɵdefineInjector({ factory: function UniProgressModule_Factory(t) { return new (t || UniProgressModule)(); }, imports: [[CommonModule]] });
    return UniProgressModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniProgressModule, { declarations: [UniProgressBarComponent,
        UniProgressSpinnerComponent], imports: [CommonModule], exports: [UniProgressBarComponent,
        UniProgressSpinnerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniProgressModule, [{
        type: NgModule,
        args: [{
                declarations: declarations$7,
                exports: declarations$7,
                imports: [CommonModule],
            }]
    }], null, null); })();

var _c0$u = ["*"];
var UniMarkedComponent = /** @class */ (function () {
    function UniMarkedComponent(_cdr, _sanitizer, _el) {
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
    Object.defineProperty(UniMarkedComponent.prototype, "markdown", {
        get: function () { return this._markdown; },
        set: function (v) {
            this._markdown = v;
            this.html = marked(v || '', this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "highlight", {
        get: function () { return this._highlight; },
        set: function (v) {
            if (v !== this._highlight) {
                this._highlight = coerceBooleanProperty(v);
                this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "sanitize", {
        get: function () { return this._sanitize; },
        set: function (v) {
            if (v !== this._sanitize) {
                this._sanitize = coerceBooleanProperty(v);
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "html", {
        get: function () { return this._html; },
        set: function (v) {
            this._html = this._sanitize ? this._sanitizer.sanitize(SecurityContext.HTML, v) : v;
            this._el.nativeElement.innerHTML = this._html;
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    UniMarkedComponent.prototype._highlightCodeBlock = function (code) {
        return hljs.highlightAuto(code).value;
    };
    UniMarkedComponent.ɵfac = function UniMarkedComponent_Factory(t) { return new (t || UniMarkedComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef)); };
    UniMarkedComponent.ɵcmp = ɵɵdefineComponent({ type: UniMarkedComponent, selectors: [["uni-marked"]], hostAttrs: [1, "uni-marked"], inputs: { markdown: "markdown", highlight: "highlight", sanitize: "sanitize" }, exportAs: ["uniMarked"], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function UniMarkedComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: [".uni-marked{display:block}.uni-marked code{color:var(--blood-orange)}.uni-marked table{border-spacing:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-marked table td,.uni-marked table th{padding:10px}.uni-marked table thead tr{background-color:var(--darker)}.uni-marked table thead tr th{text-align:left;color:var(--white);font-weight:500}.uni-marked table thead tr th:first-child{border-top-left-radius:3px}.uni-marked table thead tr th:last-child{border-top-right-radius:3px}.uni-marked table tbody tr{background-color:var(--dark)}.uni-marked table tbody tr:last-child td:first-child{border-bottom-left-radius:3px}.uni-marked table tbody tr:last-child td:last-child{border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
    return UniMarkedComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniMarkedComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-marked',
                exportAs: 'uniMarked',
                template: "<ng-content></ng-content>",
                styleUrls: ['./marked.component.scss'],
                host: { class: 'uni-marked' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: DomSanitizer }, { type: ElementRef }]; }, { markdown: [{
            type: Input
        }], highlight: [{
            type: Input
        }], sanitize: [{
            type: Input
        }] }); })();

var UniMarkedModule = /** @class */ (function () {
    function UniMarkedModule() {
    }
    UniMarkedModule.ɵmod = ɵɵdefineNgModule({ type: UniMarkedModule });
    UniMarkedModule.ɵinj = ɵɵdefineInjector({ factory: function UniMarkedModule_Factory(t) { return new (t || UniMarkedModule)(); }, imports: [[CommonModule]] });
    return UniMarkedModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniMarkedModule, { declarations: [UniMarkedComponent], imports: [CommonModule], exports: [UniMarkedComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniMarkedModule, [{
        type: NgModule,
        args: [{
                declarations: [UniMarkedComponent],
                exports: [UniMarkedComponent],
                imports: [CommonModule],
            }]
    }], null, null); })();

var UniCodeComponent = /** @class */ (function () {
    function UniCodeComponent(_cdr) {
        this._cdr = _cdr;
    }
    Object.defineProperty(UniCodeComponent.prototype, "code", {
        get: function () { return this._code; },
        set: function (v) {
            this._code = v;
            this.html = this._language ? hljs.highlight(this._language, v).value : hljs.highlightAuto(v).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniCodeComponent.prototype, "language", {
        get: function () { return this._language; },
        set: function (v) {
            this._language = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniCodeComponent.prototype, "html", {
        get: function () { return this._html; },
        set: function (v) {
            this._html = v;
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    UniCodeComponent.ɵfac = function UniCodeComponent_Factory(t) { return new (t || UniCodeComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
    UniCodeComponent.ɵcmp = ɵɵdefineComponent({ type: UniCodeComponent, selectors: [["uni-code"]], hostAttrs: [1, "uni-code"], inputs: { code: "code", language: "language" }, exportAs: ["uniCode"], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function UniCodeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "pre", 0);
        } if (rf & 2) {
            ɵɵproperty("innerHTML", ctx.html, ɵɵsanitizeHtml);
        } }, styles: [".uni-code{display:block;background-color:var(--darkest);color:var(--white);padding:10px;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-code pre{margin:0}"], encapsulation: 2, changeDetection: 0 });
    return UniCodeComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCodeComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-code',
                exportAs: 'uniCode',
                template: "<pre [innerHTML]=\"html\"></pre>",
                styleUrls: ['./code.component.scss'],
                host: { class: 'uni-code' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { code: [{
            type: Input
        }], language: [{
            type: Input
        }] }); })();

var UniCodeModule = /** @class */ (function () {
    function UniCodeModule() {
    }
    UniCodeModule.ɵmod = ɵɵdefineNgModule({ type: UniCodeModule });
    UniCodeModule.ɵinj = ɵɵdefineInjector({ factory: function UniCodeModule_Factory(t) { return new (t || UniCodeModule)(); }, imports: [[CommonModule]] });
    return UniCodeModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniCodeModule, { declarations: [UniCodeComponent], imports: [CommonModule], exports: [UniCodeComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniCodeModule, [{
        type: NgModule,
        args: [{
                declarations: [UniCodeComponent],
                exports: [UniCodeComponent],
                imports: [CommonModule],
            }]
    }], null, null); })();

var UniResizeObserverService = /** @class */ (function () {
    function UniResizeObserverService() {
    }
    UniResizeObserverService.prototype.observe = function (el, cb, throttle) {
        var _this = this;
        if (throttle === void 0) { throttle = 100; }
        var observer = new ResizeObserver(function (entries) {
            var e_1, _a;
            var _loop_1 = function (entry) {
                if (_this._timer) {
                    clearTimeout(_this._timer);
                    _this._timer = undefined;
                }
                _this._timer = setTimeout(function () { return cb(entry.contentRect); }, throttle);
            };
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    _loop_1(entry);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        observer.observe(el);
        return observer;
    };
    UniResizeObserverService.ɵfac = function UniResizeObserverService_Factory(t) { return new (t || UniResizeObserverService)(); };
    UniResizeObserverService.ɵprov = ɵɵdefineInjectable({ token: UniResizeObserverService, factory: UniResizeObserverService.ɵfac, providedIn: 'root' });
    return UniResizeObserverService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniResizeObserverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var UniResizeObserverDirective = /** @class */ (function () {
    function UniResizeObserverDirective(_el, _resizeObserverService) {
        this._el = _el;
        this._resizeObserverService = _resizeObserverService;
        this.resize = new EventEmitter();
    }
    UniResizeObserverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._observer = this._resizeObserverService.observe(this._el.nativeElement, function (e) {
            _this.resize.emit(e);
        });
    };
    UniResizeObserverDirective.prototype.ngOnDestroy = function () {
        this._observer.unobserve(this._el.nativeElement);
    };
    UniResizeObserverDirective.ɵfac = function UniResizeObserverDirective_Factory(t) { return new (t || UniResizeObserverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(UniResizeObserverService)); };
    UniResizeObserverDirective.ɵdir = ɵɵdefineDirective({ type: UniResizeObserverDirective, selectors: [["", "uniResizeObserver", ""]], outputs: { resize: "uniResizeObserver" }, exportAs: ["uniResizeObserver"] });
    return UniResizeObserverDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniResizeObserverDirective, [{
        type: Directive,
        args: [{
                exportAs: 'uniResizeObserver',
                selector: '[uniResizeObserver]',
            }]
    }], function () { return [{ type: ElementRef }, { type: UniResizeObserverService }]; }, { resize: [{
            type: Output,
            args: ['uniResizeObserver']
        }] }); })();

var UniResizeObserverModule = /** @class */ (function () {
    function UniResizeObserverModule() {
    }
    UniResizeObserverModule.ɵmod = ɵɵdefineNgModule({ type: UniResizeObserverModule });
    UniResizeObserverModule.ɵinj = ɵɵdefineInjector({ factory: function UniResizeObserverModule_Factory(t) { return new (t || UniResizeObserverModule)(); }, imports: [[CommonModule]] });
    return UniResizeObserverModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UniResizeObserverModule, { declarations: [UniResizeObserverDirective], imports: [CommonModule], exports: [UniResizeObserverDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UniResizeObserverModule, [{
        type: NgModule,
        args: [{
                declarations: [UniResizeObserverDirective],
                exports: [UniResizeObserverDirective],
                imports: [CommonModule],
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UNI_DIALOG_CONTENT, UNI_DIALOG_DATA, UNI_DIALOG_DEFAULT_OPTIONS, UNI_DIALOG_OPTIONS, UNI_HOST_COLORS, UNI_HOST_SIZES, UNI_POSITIONS, UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG, UNI_TOAST_OPTIONS, UniButtonComponent, UniButtonModule, UniCardAvatarDirective, UniCardComponent, UniCardContentComponent, UniCardFooterComponent, UniCardHeaderComponent, UniCardModule, UniCardSubtitleComponent, UniCardTitleComponent, UniCheckboxComponent, UniCheckboxModule, UniCodeComponent, UniCodeModule, UniColor, UniDialogCloseDirective, UniDialogContainerComponent, UniDialogContentComponent, UniDialogFooterComponent, UniDialogHeaderComponent, UniDialogModule, UniDialogRef, UniDialogService, UniDialogTitleComponent, UniErrorComponent, UniFormFieldComponent, UniFormFieldControlBase, UniFormFieldModule, UniHintComponent, UniIconComponent, UniIconModule, UniIconService, UniInputComponent, UniInputModule, UniLabelComponent, UniMarkedComponent, UniMarkedModule, UniOptionComponent, UniPopoverComponent, UniPopoverDirective, UniPopoverModule, UniPopoverTrigger, UniPosition, UniPositionBase, UniProgressBarComponent, UniProgressMode, UniProgressModule, UniProgressSpinnerComponent, UniResizeObserverDirective, UniResizeObserverModule, UniResizeObserverService, UniSelectComponent, UniSelectModule, UniSelectPanelComponent, UniSidenavBodyDirective, UniSidenavComponent, UniSidenavContainerComponent, UniSidenavContentComponent, UniSidenavMode, UniSidenavModule, UniSidenavPosition, UniSidenavState, UniSize, UniSlideToggleComponent, UniSlideToggleModule, UniSplitAreaComponent, UniSplitComponent, UniSplitDirection, UniSplitHandleComponent, UniSplitModule, UniTabBodyDirective, UniTabComponent, UniTabGroupComponent, UniTabLabelComponent, UniTabModule, UniToastComponent, UniToastModule, UniToastPosition, UniToastRef, UniToastService, UniToastType, UniToolbarComponent, UniToolbarModule, UniTooltipComponent, UniTooltipDirective, UniTooltipModule, getUniPosition, uniColors, uniFormFieldProvider };
//# sourceMappingURL=uniform-components.js.map
