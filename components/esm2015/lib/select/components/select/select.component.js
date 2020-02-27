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
const _c0 = ["trigger"];
function UniSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.placeholder);
} }
function UniSelectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r12.selected);
} }
function UniSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "uni-select-panel", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r13.panelClass);
} }
const _c1 = [[["uni-option"]]];
const _c2 = ["uni-option"];
export class UniSelectComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.panelClass = 'uni-select-panel';
        this.opened$ = new BehaviorSubject(false);
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
        this.optionSelectionChanged = this.options.changes.pipe(startWith(this.options), mergeMap(() => merge(...this.options.map(o => o.selectionChanged))));
        this.optionSelectionChanged.pipe(takeUntil(this.destroy$))
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
        this.selectionModel = new SelectionModel(false);
        this.opened$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            this.uniFormField.focused = open;
        });
        this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(e => {
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
        const _r9 = i0.ɵɵreference(1);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.selected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selected);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("bottom", i0.ɵɵpipeBind1(7, 8, ctx.opened$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r9)("cdkConnectedOverlayOpen", i0.ɵɵpipeBind1(9, 10, ctx.opened$))("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.minWidth);
    } }, directives: [i1.CdkOverlayOrigin, i2.NgIf, i1.CdkConnectedOverlay, i3.UniSelectPanelComponent, i2.NgClass], pipes: [i2.AsyncPipe], styles: [".uni-select{display:block;outline:0;border-radius:3px;font:inherit}.uni-select.disabled .uni-select-trigger{pointer-events:none}.uni-select .uni-select-trigger{display:-webkit-box;display:flex;cursor:pointer;border-radius:3px}.uni-select .uni-select-trigger .uni-select-text{-webkit-box-flex:1;flex:1 1 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-placeholder{color:var(--white-a20)}.uni-select .uni-select-trigger .uni-select-icon{font-size:12px;margin:auto 10px;color:var(--grey);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-select .uni-select-trigger .uni-select-icon:before{border-style:solid;border-width:.25em .25em 0 0;content:\"\";display:inline-block;height:.45em;left:0;position:relative;top:.15em;-webkit-transform:rotate(45deg);transform:rotate(45deg);vertical-align:top;width:.45em;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-select .uni-select-trigger .uni-select-icon.bottom:before{top:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"], encapsulation: 2, changeDetection: 0 });
const ɵUniSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniSelectComponent);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJsaWIvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixlQUFlLEVBQ2YsU0FBUyxFQUdULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXFCLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7O0lDYjdFLDhCQUFzRDtJQUFBLFlBQWlCO0lBQUEsaUJBQU07OztJQUF2QixlQUFpQjtJQUFqQix5Q0FBaUI7OztJQUN2RSw4QkFBK0M7SUFBQSxZQUFjO0lBQUEsaUJBQU07OztJQUFwQixlQUFjO0lBQWQsc0NBQWM7OztJQW1CL0QsMkNBQ0U7SUFBQSxrQkFBZ0M7SUFDbEMsaUJBQW1COzs7SUFGRCw0Q0FBc0I7Ozs7QURTMUMsTUFBTSxPQUFPLGtCQUFtQixTQUFR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LEVBQUU7b0JBQ0osS0FBSyxFQUFFLFlBQVk7b0JBQ25CLGtCQUFrQixFQUFFLFVBQVU7aUJBQy9CO2dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxTQUFTOztrQkFHbkIsU0FBUzttQkFBQyx1QkFBdUI7O2tCQUdqQyxTQUFTO21CQUFDLG1CQUFtQjs7a0JBRzdCLGVBQWU7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24sIENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlLCB1bmlGb3JtRmllbGRQcm92aWRlciB9IGZyb20gJy4uLy4uLy4uL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgSVVuaU9wdGlvblNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL29wdGlvbi1zZWxlY3RlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVW5pT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pU2VsZWN0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3QtcGFuZWwvc2VsZWN0LXBhbmVsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1zZWxlY3QnLFxuICBleHBvcnRBczogJ3VuaVNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXNlbGVjdCcsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICBwcm92aWRlcnM6IFt1bmlGb3JtRmllbGRQcm92aWRlcihVbmlTZWxlY3RDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNlbGVjdENvbXBvbmVudCBleHRlbmRzIFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlPHN0cmluZz4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwYW5lbENsYXNzID0gJ3VuaS1zZWxlY3QtcGFuZWwnO1xuXG4gIEBWaWV3Q2hpbGQoJ3RyaWdnZXInKVxuICByZWFkb25seSB0cmlnZ2VyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBAVmlld0NoaWxkKFVuaVNlbGVjdFBhbmVsQ29tcG9uZW50KVxuICByZWFkb25seSBwYW5lbDogVW5pU2VsZWN0UGFuZWxDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KVxuICByZWFkb25seSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVW5pT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGdldCBvcHRpb25zKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuICBzZXQgb3B0aW9ucyh2OiBRdWVyeUxpc3Q8VW5pT3B0aW9uQ29tcG9uZW50Pikge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2O1xuXG4gICAgdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLm9wdGlvbnMpLFxuICAgICAgbWVyZ2VNYXAoKCkgPT4gbWVyZ2U8SVVuaU9wdGlvblNlbGVjdGVkRXZlbnQ+KC4uLnRoaXMub3B0aW9ucy5tYXAobyA9PiBvLnNlbGVjdGlvbkNoYW5nZWQpKSksXG4gICAgKTtcblxuICAgIHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUuc291cmNlLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGUuc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3BlbmVkJC52YWx1ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRPcHRpb25zKCk7XG4gIH1cbiAgcHJpdmF0ZSBfb3B0aW9uczogUXVlcnlMaXN0PFVuaU9wdGlvbkNvbXBvbmVudD47XG5cbiAgc2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPFVuaU9wdGlvbkNvbXBvbmVudD47XG4gIG9wdGlvblNlbGVjdGlvbkNoYW5nZWQ6IE9ic2VydmFibGU8SVVuaU9wdGlvblNlbGVjdGVkRXZlbnQ+O1xuICByZWFkb25seSBvcGVuZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHJlYWRvbmx5IHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgIH0sXG4gIF07XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcCh2ID0+IHYuY29udGVudCkuam9pbignLCAnKTtcbiAgfVxuXG4gIGdldCBtaW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyID8gdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggOiAwO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWw8VW5pT3B0aW9uQ29tcG9uZW50PihmYWxzZSk7XG5cbiAgICB0aGlzLm9wZW5lZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcbiAgICAgIHRoaXMudW5pRm9ybUZpZWxkLmZvY3VzZWQgPSBvcGVuO1xuICAgIH0pO1xuXG4gICAgdGhpcy51bmlGb3JtRmllbGQuY2xpY2tlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCQudmFsdWUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5vcGVuZWQkLm5leHQoIXRoaXMub3BlbmVkJC52YWx1ZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW5lZCQubmV4dChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdCh2OiBVbmlPcHRpb25Db21wb25lbnQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHYpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wdGlvblZhbHVlKHYpO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbiAhPT0gdikge1xuICAgICAgICBvcHRpb24uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPcHRpb25zKCkge1xuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHRoaXMub3B0aW9ucy50b0FycmF5KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5vcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICBpZiAoIW9wdGlvbi5jb2xvcikge1xuICAgICAgICBvcHRpb24uY29sb3IgPSB0aGlzLnVuaUZvcm1GaWVsZC5jb2xvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wdGlvblZhbHVlKHY6IFVuaU9wdGlvbkNvbXBvbmVudCkge1xuICAgIHJldHVybiB2LnZhbHVlIHx8IHYuY29udGVudDtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInVuaS1zZWxlY3QtdHJpZ2dlclwiXG4gIGNkay1vdmVybGF5LW9yaWdpblxuICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXG4gICN0cmlnZ2VyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICA8ZGl2IGNsYXNzPVwidW5pLXNlbGVjdC10ZXh0XCI+XG4gICAgPGRpdiAqbmdJZj1cIiFzZWxlY3RlZFwiIGNsYXNzPVwidW5pLXNlbGVjdC1wbGFjZWhvbGRlclwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkXCIgY2xhc3M9XCJ1bmktc2VsZWN0LXZhbHVlXCI+e3sgc2VsZWN0ZWQgfX08L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInVuaS1zZWxlY3QtaWNvblwiXG4gICAgICAgW2NsYXNzLmJvdHRvbV09XCJvcGVuZWQkIHwgYXN5bmNcIj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxuICBjZGtDb25uZWN0ZWRPdmVybGF5TG9ja1Bvc2l0aW9uXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcFxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm9wZW5lZCQgfCBhc3luY1wiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwibWluV2lkdGhcIlxuICAoYmFja2Ryb3BDbGljayk9XCJjbG9zZSgpXCJcbiAgKGRldGFjaCk9XCJjbG9zZSgpXCI+XG4gIDx1bmktc2VsZWN0LXBhbmVsIFtuZ0NsYXNzXT1cInBhbmVsQ2xhc3NcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ1bmktb3B0aW9uXCI+PC9uZy1jb250ZW50PlxuICA8L3VuaS1zZWxlY3QtcGFuZWw+XG48L25nLXRlbXBsYXRlPlxuIl19