import { __assign } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UNI_HOST_COLORS } from '../../../core/constants';
import { UniColor } from '../../../core/enums';
import { UniProgressMode } from '../../enums/progress-mode.enum';
import * as i0 from "@angular/core";
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
    UniProgressSpinnerComponent.ɵfac = function UniProgressSpinnerComponent_Factory(t) { return new (t || UniProgressSpinnerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    UniProgressSpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniProgressSpinnerComponent, selectors: [["uni-progress-spinner"]], hostAttrs: [1, "uni-progress-spinner"], hostVars: 10, hostBindings: function UniProgressSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("indeterminate", ctx.mode === ctx.UniProgressMode.Indeterminate);
        } }, inputs: { mode: "mode", color: "color", total: "total", value: "value", strokeWidth: "strokeWidth", diameter: "diameter" }, exportAs: ["uniProgressSpinner"], decls: 2, vars: 16, template: function UniProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg");
            i0.ɵɵelement(1, "circle");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("stroke-width", ctx.strokeWidth, "px")("stroke-dashoffset", ctx.strokeDashoffset)("stroke-dasharray", ctx.strokeDasharray)("r", ctx.radius, "px")("cx", ctx.diameter / 2, "px")("cy", ctx.diameter / 2, "px");
        } }, styles: ["@-webkit-keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uni-spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}@keyframes uni-bar-slide{0%{-webkit-transform:translateX(0) scaleX(.5);transform:translateX(0) scaleX(.5)}20%{-webkit-transform:translateX(20%) scaleX(2);transform:translateX(20%) scaleX(2)}80%{-webkit-transform:translateX(80%) scaleX(.5);transform:translateX(80%) scaleX(.5)}100%{-webkit-transform:translateX(100%) scaleX(0);transform:translateX(100%) scaleX(0)}}.uni-progress-spinner{display:inline-block}.uni-progress-spinner.indeterminate circle{-webkit-animation:1s linear infinite uni-spinner-rotate;animation:1s linear infinite uni-spinner-rotate}.uni-progress-spinner.primary circle{stroke:var(--primary)}.uni-progress-spinner.success circle{stroke:var(--success)}.uni-progress-spinner.warning circle{stroke:var(--warning)}.uni-progress-spinner.danger circle{stroke:var(--danger)}.uni-progress-spinner svg circle{fill:transparent;-webkit-transition:stroke-dashoffset .2s;transition:stroke-dashoffset .2s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}"], encapsulation: 2, changeDetection: 0 });
    return UniProgressSpinnerComponent;
}());
export { UniProgressSpinnerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniProgressSpinnerComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { mode: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyIsImxpYi9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBR2pFO0lBcUZFLHFDQUE2QixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQXRFM0MsU0FBSSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDckMsVUFBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFRMUIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQVFiLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFRWCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQVFqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRU4sbUJBQWMsR0FBRztZQUNoQyxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQztRQThCTyxvQkFBZSxHQUFHLGVBQWUsQ0FBQztJQUVhLENBQUM7SUFuRXpELHNCQUNJLDhDQUFLO2FBRFQsY0FDYyxP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QTJCO2NBZHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxJQUFJLHNCQUNGLEtBQUssRUFBRSxzQkFBc0IsSUFDMUIsZUFBZSxLQUNsQix1QkFBdUIsRUFBRSx3Q0FBd0MsR0FDbEU7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFRTCxLQUFLOztrQkFRTCxLQUFLOztrQkFRTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBVTklfSE9TVF9DT0xPUlMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBVbmlDb2xvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMnO1xuXG5pbXBvcnQgeyBVbmlQcm9ncmVzc01vZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9wcm9ncmVzcy1tb2RlLmVudW0nO1xuaW1wb3J0IHsgSVVuaVByb2dyZXNzIH0gZnJvbSAnLi4vLi4vcHJvZ3Jlc3MuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLXByb2dyZXNzLXNwaW5uZXInLFxuICBleHBvcnRBczogJ3VuaVByb2dyZXNzU3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICAgICdbY2xhc3MuaW5kZXRlcm1pbmF0ZV0nOiAnbW9kZSA9PT0gVW5pUHJvZ3Jlc3NNb2RlLkluZGV0ZXJtaW5hdGUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgSVVuaVByb2dyZXNzIHtcbiAgQElucHV0KCkgbW9kZSA9IFVuaVByb2dyZXNzTW9kZS5JbmRldGVybWluYXRlO1xuICBASW5wdXQoKSBjb2xvciA9IFVuaUNvbG9yLlByaW1hcnk7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRvdGFsKCkgeyByZXR1cm4gdGhpcy5fdG90YWw7IH1cbiAgc2V0IHRvdGFsKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX3RvdGFsID0gMTAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZSA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCkgeyByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGg7IH1cbiAgc2V0IHN0cm9rZVdpZHRoKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gNTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlhbWV0ZXIoKSB7IHJldHVybiB0aGlzLl9kaWFtZXRlcjsgfVxuICBzZXQgZGlhbWV0ZXIodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlhbWV0ZXIgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlhbWV0ZXIgPSA5MDtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9pbmRldGVybWluYXRlID0ge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0b3RhbDogMTAwLFxuICB9O1xuXG4gIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLmRpYW1ldGVyIC8gMikgLSB0aGlzLnN0cm9rZVdpZHRoO1xuICB9XG5cbiAgZ2V0IHN0cm9rZURhc2hhcnJheSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fY2lyY3VtZmVyZW5jZX0gJHt0aGlzLl9jaXJjdW1mZXJlbmNlfWA7XG4gIH1cblxuICBnZXQgc3Ryb2tlRGFzaG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY3VtZmVyZW5jZSAtIHRoaXMuX3BlcmNlbnRhZ2UgLyAxMDAgKiB0aGlzLl9jaXJjdW1mZXJlbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NpcmN1bWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzICogMiAqIE1hdGguUEk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gKDEwMCAvIHRoaXMuX21vZGVUb3RhbCkgKiB0aGlzLl9tb2RlVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbW9kZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IFVuaVByb2dyZXNzTW9kZS5EZXRlcm1pbmF0ZSA/IHRoaXMudmFsdWUgOiB0aGlzLl9pbmRldGVybWluYXRlLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21vZGVUb3RhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBVbmlQcm9ncmVzc01vZGUuRGV0ZXJtaW5hdGUgPyB0aGlzLnRvdGFsIDogdGhpcy5faW5kZXRlcm1pbmF0ZS50b3RhbDtcbiAgfVxuXG4gIHJlYWRvbmx5IFVuaVByb2dyZXNzTW9kZSA9IFVuaVByb2dyZXNzTW9kZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbn1cbiIsIjxzdmdcbiAgW3N0eWxlLndpZHRoLnB4XT1cImRpYW1ldGVyXCJcbiAgW3N0eWxlLmhlaWdodC5weF09XCJkaWFtZXRlclwiXG4+XG4gIDxjaXJjbGVcbiAgICBbc3R5bGUuc3Ryb2tlLXdpZHRoLnB4XT1cInN0cm9rZVdpZHRoXCJcbiAgICBbc3R5bGUuc3Ryb2tlLWRhc2hvZmZzZXRdPVwic3Ryb2tlRGFzaG9mZnNldFwiXG4gICAgW3N0eWxlLnN0cm9rZS1kYXNoYXJyYXldPVwic3Ryb2tlRGFzaGFycmF5XCJcbiAgICBbc3R5bGUuci5weF09XCJyYWRpdXNcIlxuICAgIFtzdHlsZS5jeC5weF09XCJkaWFtZXRlciAvIDJcIlxuICAgIFtzdHlsZS5jeS5weF09XCJkaWFtZXRlciAvIDJcIlxuICA+PC9jaXJjbGU+XG48L3N2Zz5cbiJdfQ==