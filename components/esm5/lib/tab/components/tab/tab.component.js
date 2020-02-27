import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import { UniTabBodyDirective } from '../../directives/tab-body/tab-body.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UniTabComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
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
    return UniTabComponent;
}());
export { UniTabComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQudHMiLCJsaWIvdGFiL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7SUNKbkYsd0JBQWtGOztBRE1sRjtJQXVDRSx5QkFBNkIsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFqQjVDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFlbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUVnQyxDQUFDO0lBdkJ6RCxzQkFDSSxxQ0FBUTthQURaLGNBQ2lCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDekMsVUFBYSxDQUFVO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FKd0M7SUFhekMsc0JBQUksbUNBQU07YUFBVixjQUFlLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckMsVUFBVyxDQUFVO1lBQ25CLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQzs7O09BTm9DO2tGQWpCMUIsZUFBZTt3REFBZixlQUFlOzhDQVdaLG9CQUFvQjt3Q0FHcEIsbUJBQW1COzs7Ozs7OztZQ2pDbkMsa0ZBQW1FOztZQUFyRCwyRUFBb0Q7OzBCREFsRTtDQThDQyxBQXhDRCxJQXdDQztTQTNCWSxlQUFlO2tEQUFmLGVBQWU7Y0FiM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDbkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxTQUFTO29CQUNoQixnQkFBZ0IsRUFBRSxRQUFRO2lCQUMzQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVFMLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHbkQsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IFVuaVRhYkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLWxhYmVsL3RhYi1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pVGFiQm9keURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdGFiLWJvZHkvdGFiLWJvZHkuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLXRhYicsXG4gIGV4cG9ydEFzOiAndW5pVGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktdGFiJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVRhYkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChVbmlUYWJMYWJlbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcmVhZG9ubHkgdW5pTGFiZWw/OiBVbmlUYWJMYWJlbENvbXBvbmVudDtcblxuICBAQ29udGVudENoaWxkKFVuaVRhYkJvZHlEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICByZWFkb25seSB1bmlCb2R5PzogVW5pVGFiQm9keURpcmVjdGl2ZTtcblxuICBnZXQgYWN0aXZlKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG4gIHNldCBhY3RpdmUodjogYm9vbGVhbikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHY7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGl2ZSA/IHVuaUJvZHkudGVtcGxhdGUgOiBudWxsXCI+PC9uZy1jb250YWluZXI+XG4iXX0=