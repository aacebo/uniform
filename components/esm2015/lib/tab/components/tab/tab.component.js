import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import { UniTabBodyDirective } from '../../directives/tab-body/tab-body.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UniTabComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
export class UniTabComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this._disabled = false;
        this._active = false;
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        this._disabled = coerceBooleanProperty(v);
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
UniTabComponent.ɵfac = function UniTabComponent_Factory(t) { return new (t || UniTabComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
UniTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniTabComponent, selectors: [["uni-tab"]], contentQueries: function UniTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵstaticContentQuery(dirIndex, UniTabLabelComponent, true);
        i0.ɵɵcontentQuery(dirIndex, UniTabBodyDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uniLabel = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uniBody = _t.first);
    } }, hostAttrs: [1, "uni-tab"], hostVars: 2, hostBindings: function UniTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active);
    } }, inputs: { label: "label", disabled: "disabled" }, exportAs: ["uniTab"], decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function UniTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, UniTabComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngTemplateOutlet", ctx.active ? ctx.uniBody.template : null);
    } }, directives: [i1.NgTemplateOutlet], styles: [".uni-tab{display:block;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTabComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQudHMiLCJsaWIvdGFiL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7SUNKbkYsd0JBQWtGOztBRG1CbEYsTUFBTSxPQUFPLGVBQWU7SUEwQjFCLFlBQTZCLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBakI1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBZWxCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFFZ0MsQ0FBQztJQXZCekQsSUFDSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFVO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBU0QsSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxJQUFJLE1BQU0sQ0FBQyxDQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OzhFQXZCVSxlQUFlO29EQUFmLGVBQWU7MENBV1osb0JBQW9CO29DQUdwQixtQkFBbUI7Ozs7Ozs7O1FDakNuQyxrRkFBbUU7O1FBQXJELDJFQUFvRDs7a0REbUJyRCxlQUFlO2NBYjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsU0FBUztvQkFDaEIsZ0JBQWdCLEVBQUUsUUFBUTtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFRTCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBR25ELFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBVbmlUYWJMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1sYWJlbC90YWItbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVRhYkJvZHlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RhYi1ib2R5L3RhYi1ib2R5LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS10YWInLFxuICBleHBvcnRBczogJ3VuaVRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXRhYicsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlUYWJDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoVW5pVGFiTGFiZWxDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHJlYWRvbmx5IHVuaUxhYmVsPzogVW5pVGFiTGFiZWxDb21wb25lbnQ7XG5cbiAgQENvbnRlbnRDaGlsZChVbmlUYWJCb2R5RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcmVhZG9ubHkgdW5pQm9keT86IFVuaVRhYkJvZHlEaXJlY3RpdmU7XG5cbiAgZ2V0IGFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuICBzZXQgYWN0aXZlKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB2O1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhY3RpdmUgPyB1bmlCb2R5LnRlbXBsYXRlIDogbnVsbFwiPjwvbmctY29udGFpbmVyPlxuIl19