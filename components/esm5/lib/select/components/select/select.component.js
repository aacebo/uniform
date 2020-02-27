import { __extends, __read, __spread, __values } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, ContentChildren, QueryList, ViewEncapsulation, } from '@angular/core';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, merge } from 'rxjs';
import { mergeMap, startWith, takeUntil } from 'rxjs/operators';
import { UniFormFieldControlBase, uniFormFieldProvider } from '../../../form-field';
import { UniOptionComponent } from '../option/option.component';
import { UniSelectPanelComponent } from '../select-panel/select-panel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/common";
import * as i3 from "../select-panel/select-panel.component";
var _c0 = ["trigger"];
function UniSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r36 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r36.placeholder);
} }
function UniSelectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r37.selected);
} }
function UniSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "uni-select-panel", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r38.panelClass);
} }
var _c1 = [[["uni-option"]]];
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
    UniSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSelectComponent, selectors: [["uni-select"]], contentQueries: function UniSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, UniOptionComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
        } }, viewQuery: function UniSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(UniSelectPanelComponent, true);
            i0.ɵɵviewQuery(CdkConnectedOverlay, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.trigger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } }, hostAttrs: [1, "uni-select"], hostVars: 2, hostBindings: function UniSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.disabled);
        } }, inputs: { panelClass: "panelClass" }, exportAs: ["uniSelect"], features: [i0.ɵɵProvidersFeature([uniFormFieldProvider(UniSelectComponent)]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 10, vars: 12, consts: [["cdk-overlay-origin", "", 1, "uni-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "uni-select-text"], ["class", "uni-select-placeholder", 4, "ngIf"], ["class", "uni-select-value", 4, "ngIf"], [1, "uni-select-icon"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick", "detach"], [1, "uni-select-placeholder"], [1, "uni-select-value"], [3, "ngClass"]], template: function UniSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("click", function UniSelectComponent_Template_div_click_0_listener($event) { return ctx.toggle(); });
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, UniSelectComponent_div_4_Template, 2, 1, "div", 3);
            i0.ɵɵtemplate(5, UniSelectComponent_div_5_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵpipe(7, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, UniSelectComponent_ng_template_8_Template, 2, 1, "ng-template", 6);
            i0.ɵɵpipe(9, "async");
            i0.ɵɵlistener("backdropClick", function UniSelectComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.close(); })("detach", function UniSelectComponent_Template_ng_template_detach_8_listener($event) { return ctx.close(); });
        } if (rf & 2) {
            var _r34 = i0.ɵɵreference(1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.selected);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.selected);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("bottom", i0.ɵɵpipeBind1(7, 8, ctx.opened$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r34)("cdkConnectedOverlayOpen", i0.ɵɵpipeBind1(9, 10, ctx.opened$))("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.minWidth);
        } }, directives: [i1.CdkOverlayOrigin, i2.NgIf, i1.CdkConnectedOverlay, i3.UniSelectPanelComponent, i2.NgClass], pipes: [i2.AsyncPipe], styles: [".uni-select{display:block;outline:0;border-radius:3px;font:inherit}.uni-select.disabled .uni-select-trigger{pointer-events:none}.uni-select .uni-select-trigger{display:-webkit-box;display:flex;cursor:pointer;border-radius:3px}.uni-select .uni-select-trigger .uni-select-text{-webkit-box-flex:1;flex:1 1 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-placeholder{color:var(--white-a20)}.uni-select .uni-select-trigger .uni-select-icon{font-size:12px;margin:auto 10px;color:var(--grey);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-icon:before{border-style:solid;border-width:.25em .25em 0 0;content:\"\";display:inline-block;height:.45em;left:0;position:relative;top:.15em;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:top;width:.45em;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-select .uni-select-trigger .uni-select-icon.bottom:before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
    return UniSelectComponent;
}(UniFormFieldControlBase));
export { UniSelectComponent };
var ɵUniSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniSelectComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSelectComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJsaWIvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFNBQVMsRUFHVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQixtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7OztJQ2I3RSw4QkFBc0Q7SUFBQSxZQUFpQjtJQUFBLGlCQUFNOzs7SUFBdkIsZUFBaUI7SUFBakIseUNBQWlCOzs7SUFDdkUsOEJBQStDO0lBQUEsWUFBYztJQUFBLGlCQUFNOzs7SUFBcEIsZUFBYztJQUFkLHNDQUFjOzs7SUFtQi9ELDJDQUNFO0lBQUEsa0JBQWdDO0lBQ2xDLGlCQUFtQjs7O0lBRkQsNENBQXNCOzs7O0FETDFDO0lBY3dDLHNDQUErQjtJQWR2RTtR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REFBb0MsK0RBQUEsK0NBQUEsNkNBQUE7OzZCRHJCdEM7Q0F5S0MsQUFuSkQsQ0Fjd0MsdUJBQXVCLEdBcUk5RDtTQXJJWSxrQkFBa0I7K0RBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBZDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFNBQVM7O2tCQUduQixTQUFTO21CQUFDLHVCQUF1Qjs7a0JBR2pDLFNBQVM7bUJBQUMsbUJBQW1COztrQkFHN0IsZUFBZTttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2UsIHVuaUZvcm1GaWVsZFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBJVW5pT3B0aW9uU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvb3B0aW9uLXNlbGVjdGVkLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBVbmlPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9vcHRpb24vb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTZWxlY3RQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL3NlbGVjdC1wYW5lbC9zZWxlY3QtcGFuZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAndW5pU2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktc2VsZWN0JyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW3VuaUZvcm1GaWVsZFByb3ZpZGVyKFVuaVNlbGVjdENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2U8c3RyaW5nPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3MgPSAndW5pLXNlbGVjdC1wYW5lbCc7XG5cbiAgQFZpZXdDaGlsZCgndHJpZ2dlcicpXG4gIHJlYWRvbmx5IHRyaWdnZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoVW5pU2VsZWN0UGFuZWxDb21wb25lbnQpXG4gIHJlYWRvbmx5IHBhbmVsOiBVbmlTZWxlY3RQYW5lbENvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpXG4gIHJlYWRvbmx5IG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihVbmlPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgZ2V0IG9wdGlvbnMoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG4gIHNldCBvcHRpb25zKHY6IFF1ZXJ5TGlzdDxVbmlPcHRpb25Db21wb25lbnQ+KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHY7XG5cbiAgICB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKHRoaXMub3B0aW9ucyksXG4gICAgICBtZXJnZU1hcCgoKSA9PiBtZXJnZTxJVW5pT3B0aW9uU2VsZWN0ZWRFdmVudD4oLi4udGhpcy5vcHRpb25zLm1hcChvID0+IG8uc2VsZWN0aW9uQ2hhbmdlZCkpKSxcbiAgICApO1xuXG4gICAgdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZS5zb3VyY2Uuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoZS5zb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcGVuZWQkLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdE9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9vcHRpb25zOiBRdWVyeUxpc3Q8VW5pT3B0aW9uQ29tcG9uZW50PjtcblxuICBzZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWw8VW5pT3B0aW9uQ29tcG9uZW50PjtcbiAgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlZDogT2JzZXJ2YWJsZTxJVW5pT3B0aW9uU2VsZWN0ZWRFdmVudD47XG4gIHJlYWRvbmx5IG9wZW5lZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcmVhZG9ubHkgcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gICAgfSxcbiAgXTtcblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKHYgPT4gdi5jb250ZW50KS5qb2luKCcsICcpO1xuICB9XG5cbiAgZ2V0IG1pbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIgPyB0aGlzLnRyaWdnZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA6IDA7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxVbmlPcHRpb25Db21wb25lbnQ+KGZhbHNlKTtcblxuICAgIHRoaXMub3BlbmVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xuICAgICAgdGhpcy51bmlGb3JtRmllbGQuZm9jdXNlZCA9IG9wZW47XG4gICAgfSk7XG5cbiAgICB0aGlzLnVuaUZvcm1GaWVsZC5jbGlja2VkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoIXRoaXMub3BlbmVkJC52YWx1ZSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW5lZCQubmV4dCghdGhpcy5vcGVuZWQkLnZhbHVlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0KHY6IFVuaU9wdGlvbkNvbXBvbmVudCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpO1xuXG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qodik7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3B0aW9uVmFsdWUodik7XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uICE9PSB2KSB7XG4gICAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9wdGlvbnMoKSB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zLnRvQXJyYXkoKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm9wdGlvblZhbHVlKG9wdGlvbik7XG5cbiAgICAgIGlmICghb3B0aW9uLmNvbG9yKSB7XG4gICAgICAgIG9wdGlvbi5jb2xvciA9IHRoaXMudW5pRm9ybUZpZWxkLmNvbG9yO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3B0aW9uVmFsdWUodjogVW5pT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHYudmFsdWUgfHwgdi5jb250ZW50O1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwidW5pLXNlbGVjdC10cmlnZ2VyXCJcbiAgY2RrLW92ZXJsYXktb3JpZ2luXG4gICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcbiAgI3RyaWdnZXJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gIDxkaXYgY2xhc3M9XCJ1bmktc2VsZWN0LXRleHRcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiIXNlbGVjdGVkXCIgY2xhc3M9XCJ1bmktc2VsZWN0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRcIiBjbGFzcz1cInVuaS1zZWxlY3QtdmFsdWVcIj57eyBzZWxlY3RlZCB9fTwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidW5pLXNlbGVjdC1pY29uXCJcbiAgICAgICBbY2xhc3MuYm90dG9tXT1cIm9wZW5lZCQgfCBhc3luY1wiPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGVcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlMb2NrUG9zaXRpb25cbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlCYWNrZHJvcENsYXNzPVwiY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3BcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwib3BlbmVkJCB8IGFzeW5jXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwicG9zaXRpb25zXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJtaW5XaWR0aFwiXG4gIChiYWNrZHJvcENsaWNrKT1cImNsb3NlKClcIlxuICAoZGV0YWNoKT1cImNsb3NlKClcIj5cbiAgPHVuaS1zZWxlY3QtcGFuZWwgW25nQ2xhc3NdPVwicGFuZWxDbGFzc1wiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1vcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gIDwvdW5pLXNlbGVjdC1wYW5lbD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=