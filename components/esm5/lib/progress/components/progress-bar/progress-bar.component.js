import { __assign } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';
import { UniProgressMode } from '../../enums/progress-mode.enum';
import * as i0 from "@angular/core";
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
    UniProgressBarComponent.ɵfac = function UniProgressBarComponent_Factory(t) { return new (t || UniProgressBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    UniProgressBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniProgressBarComponent, selectors: [["uni-progress-bar"]], hostAttrs: [1, "uni-progress-bar"], hostVars: 10, hostBindings: function UniProgressBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        } }, inputs: { mode: "mode", color: "color", total: "total", value: "value" }, exportAs: ["uniProgresssBar"], decls: 3, vars: 2, consts: [["width", "100%", "height", "4px"], ["rx", "2px", "width", "100%", 1, "uni-progress-bar-background"], ["rx", "2px", 1, "uni-progress-bar-foreground"]], template: function UniProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0);
            i0.ɵɵelement(1, "rect", 1);
            i0.ɵɵelement(2, "rect", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.percentage, "%");
        } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-bar{display:-webkit-box;display:flex}.uni-progress-bar.indeterminate .uni-progress-bar-foreground{-webkit-animation:1s linear infinite uni-bar-slide;animation:1s linear infinite uni-bar-slide}.uni-progress-bar.primary .uni-progress-bar-background{fill:var(--primary-a50)}.uni-progress-bar.primary .uni-progress-bar-foreground{fill:var(--primary)}.uni-progress-bar.success .uni-progress-bar-background{fill:var(--success-a50)}.uni-progress-bar.success .uni-progress-bar-foreground{fill:var(--success)}.uni-progress-bar.warning .uni-progress-bar-background{fill:var(--warning-a50)}.uni-progress-bar.warning .uni-progress-bar-foreground{fill:var(--warning)}.uni-progress-bar.danger .uni-progress-bar-background{fill:var(--danger-a50)}.uni-progress-bar.danger .uni-progress-bar-foreground{fill:var(--danger)}.uni-progress-bar .uni-progress-bar-foreground{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniProgressBarComponent;
}());
export { UniProgressBarComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniProgressBarComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { mode: [{
            type: Input
        }], color: [{
            type: Input
        }], total: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsImxpYi9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUdqRTtJQThDRSxpQ0FBNkIsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUEvQjNDLFNBQUksR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQ3JDLFVBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBUTFCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFRYixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBUVYsb0JBQWUsR0FBRyxlQUFlLENBQUM7UUFDMUIsbUJBQWMsR0FBRztZQUNoQyxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQztJQUVzRCxDQUFDO0lBNUJ6RCxzQkFDSSwwQ0FBSzthQURULGNBQ2MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLENBQVM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUprQztJQU9uQyxzQkFDSSwwQ0FBSzthQURULGNBQ2MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLENBQVM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUprQztJQU9uQyxzQkFBSSwrQ0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTtrR0F4QlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7OztZQ3ZCcEMsbUJBRUU7WUFGRiw4QkFFRTtZQUFBLDBCQUdRO1lBRVIsMEJBR1E7WUFDVixpQkFBTTs7WUFGRSxlQUE0QjtZQUE1Qiw0Q0FBNEI7O2tDRFRwQztDQXdEQyxBQS9DRCxJQStDQztTQWpDWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQWRuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsSUFBSSxzQkFDRixLQUFLLEVBQUUsa0JBQWtCLElBQ3RCLGVBQWUsS0FDbEIsdUJBQXVCLEVBQUUsd0NBQXdDLEdBQ2xFO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBUUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IFVOSV9IT1NUX0NPTE9SUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgVW5pUHJvZ3Jlc3NNb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvcHJvZ3Jlc3MtbW9kZS5lbnVtJztcbmltcG9ydCB7IElVbmlQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3Byb2dyZXNzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1wcm9ncmVzcy1iYXInLFxuICBleHBvcnRBczogJ3VuaVByb2dyZXNzc0JhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXByb2dyZXNzLWJhcicsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICAgICdbY2xhc3MuaW5kZXRlcm1pbmF0ZV0nOiAnbW9kZSA9PT0gVW5pUHJvZ3Jlc3NNb2RlLkluZGV0ZXJtaW5hdGUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBJVW5pUHJvZ3Jlc3Mge1xuICBASW5wdXQoKSBtb2RlID0gVW5pUHJvZ3Jlc3NNb2RlLkluZGV0ZXJtaW5hdGU7XG4gIEBJbnB1dCgpIGNvbG9yID0gVW5pQ29sb3IuUHJpbWFyeTtcblxuICBASW5wdXQoKVxuICBnZXQgdG90YWwoKSB7IHJldHVybiB0aGlzLl90b3RhbDsgfVxuICBzZXQgdG90YWwodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfdG90YWwgPSAxMDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcblxuICBnZXQgcGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBVbmlQcm9ncmVzc01vZGUuRGV0ZXJtaW5hdGUgP1xuICAgICAgKDEwMCAvIHRoaXMudG90YWwpICogdGhpcy52YWx1ZSA6XG4gICAgICAoMTAwIC8gdGhpcy5faW5kZXRlcm1pbmF0ZS50b3RhbCkgKiB0aGlzLl9pbmRldGVybWluYXRlLnZhbHVlO1xuICB9XG5cbiAgcmVhZG9ubHkgVW5pUHJvZ3Jlc3NNb2RlID0gVW5pUHJvZ3Jlc3NNb2RlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9pbmRldGVybWluYXRlID0ge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0b3RhbDogMTAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuIiwiPHN2ZyB3aWR0aD1cIjEwMCVcIlxuICAgICBoZWlnaHQ9XCI0cHhcIj5cbiAgPHJlY3QgY2xhc3M9XCJ1bmktcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmRcIlxuICAgICAgICByeD1cIjJweFwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gID48L3JlY3Q+XG5cbiAgPHJlY3QgY2xhc3M9XCJ1bmktcHJvZ3Jlc3MtYmFyLWZvcmVncm91bmRcIlxuICAgICAgICByeD1cIjJweFwiXG4gICAgICAgIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIlxuICA+PC9yZWN0PlxuPC9zdmc+XG4iXX0=