import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
var _c0 = ["*"];
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
    UniTabLabelComponent.ɵfac = function UniTabLabelComponent_Factory(t) { return new (t || UniTabLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniTabLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniTabLabelComponent, selectors: [["uni-tab-label"]], hostAttrs: [1, "uni-tab-label"], hostVars: 4, hostBindings: function UniTabLabelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
        } }, inputs: { active: "active", disabled: "disabled" }, exportAs: ["uniTabLabel"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniTabLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".uni-tab-label{padding:.8em;color:var(--white-d20);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-tab-label.active{color:var(--white)}.uni-tab-label.disabled{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
    return UniTabLabelComponent;
}());
export { UniTabLabelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTabLabelComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWxhYmVsL3RhYi1sYWJlbC5jb21wb25lbnQudHMiLCJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWxhYmVsL3RhYi1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUU5RDtJQW1DRSw4QkFDbUIsSUFBdUIsRUFDdkIsR0FBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFoQnZDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFRaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVN0QixDQUFDO0lBdkJMLHNCQUNJLHdDQUFNO2FBRFYsY0FDZSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3JDLFVBQVcsQ0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BSm9DO0lBT3JDLHNCQUNJLDBDQUFRO2FBRFosY0FDaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN6QyxVQUFhLENBQVU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUp3QztJQU96QyxzQkFBSSx1Q0FBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7NEZBbkJVLG9CQUFvQjs2REFBcEIsb0JBQW9COzs7O1lDakJqQyxrQkFBWTs7K0JEQVo7Q0EwQ0MsQUF2Q0QsSUF1Q0M7U0F6Qlksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FkaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxlQUFlO29CQUN0QixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQVFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktdGFiLWxhYmVsJyxcbiAgZXhwb3J0QXM6ICd1bmlUYWJMYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItbGFiZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXRhYi1sYWJlbCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pVGFiTGFiZWxDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG4gIHNldCBhY3RpdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgKSB7IH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=