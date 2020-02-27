import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
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
    UniLabelComponent.ɵfac = function UniLabelComponent_Factory(t) { return new (t || UniLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    UniLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniLabelComponent, selectors: [["uni-label"]], hostAttrs: [1, "uni-label"], exportAs: ["uniLabel"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "for"]], template: function UniLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("for", ctx.for);
        } }, styles: [".uni-label{position:absolute;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-label label{cursor:text}"], encapsulation: 2, changeDetection: 0 });
    return UniLabelComponent;
}());
export { UniLabelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniLabelComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwibGliL2Zvcm0tZmllbGQvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFekc7SUFvQkUsMkJBQTZCLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1CO0lBQUksQ0FBQztJQVR6RCxzQkFBSSxrQ0FBRzthQUFQLGNBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMvQixVQUFRLENBQVM7WUFDZixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQzs7O09BTjhCO3NGQURwQixpQkFBaUI7MERBQWpCLGlCQUFpQjs7WUNaOUIsZ0NBQ0U7WUFBQSxrQkFBWTtZQUNkLGlCQUFROztZQUZELDZCQUFXOzs0QkRBbEI7Q0F1QkMsQUFyQkQsSUFxQkM7U0FYWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQVY3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLWxhYmVsJyxcbiAgZXhwb3J0QXM6ICd1bmlMYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xhYmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktbGFiZWwnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlMYWJlbENvbXBvbmVudCB7XG4gIGdldCBmb3IoKSB7IHJldHVybiB0aGlzLl9mb3I7IH1cbiAgc2V0IGZvcih2OiBzdHJpbmcpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fZm9yKSB7XG4gICAgICB0aGlzLl9mb3IgPSB2O1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9mb3I/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG59XG4iLCI8bGFiZWwgW2Zvcl09XCJmb3JcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbiJdfQ==