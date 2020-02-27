import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UNI_HOST_COLORS } from '../../../core/constants';
import { UniColor } from '../../../core/enums';
import { UniProgressMode } from '../../enums/progress-mode.enum';
import * as i0 from "@angular/core";
export class UniProgressSpinnerComponent {
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
        this._total = coerceNumberProperty(v);
        this._cdr.markForCheck();
    }
    get value() { return this._value; }
    set value(v) {
        this._value = coerceNumberProperty(v);
        this._cdr.markForCheck();
    }
    get strokeWidth() { return this._strokeWidth; }
    set strokeWidth(v) {
        this._strokeWidth = coerceNumberProperty(v);
        this._cdr.markForCheck();
    }
    get diameter() { return this._diameter; }
    set diameter(v) {
        this._diameter = coerceNumberProperty(v);
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniProgressSpinnerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-progress-spinner',
                exportAs: 'uniProgressSpinner',
                templateUrl: './progress-spinner.component.html',
                styleUrls: ['./progress-spinner.component.scss'],
                host: Object.assign(Object.assign({ class: 'uni-progress-spinner' }, UNI_HOST_COLORS), { '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyIsImxpYi9wcm9ncmVzcy9jb21wb25lbnRzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFpQmpFLE1BQU0sT0FBTywyQkFBMkI7SUF1RXRDLFlBQTZCLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBdEUzQyxTQUFJLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxVQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQVExQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBUWIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQVFYLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBUWpCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFTixtQkFBYyxHQUFHO1lBQ2hDLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO1FBOEJPLG9CQUFlLEdBQUcsZUFBZSxDQUFDO0lBRWEsQ0FBQztJQW5FekQsSUFDSSxL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LEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsSUFBSSxnQ0FDRixLQUFLLEVBQUUsc0JBQXNCLElBQzFCLGVBQWUsS0FDbEIsdUJBQXVCLEVBQUUsd0NBQXdDLEdBQ2xFO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBUUwsS0FBSzs7a0JBUUwsS0FBSzs7a0JBUUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgVU5JX0hPU1RfQ09MT1JTIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcblxuaW1wb3J0IHsgVW5pUHJvZ3Jlc3NNb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvcHJvZ3Jlc3MtbW9kZS5lbnVtJztcbmltcG9ydCB7IElVbmlQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3Byb2dyZXNzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1wcm9ncmVzcy1zcGlubmVyJyxcbiAgZXhwb3J0QXM6ICd1bmlQcm9ncmVzc1NwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXByb2dyZXNzLXNwaW5uZXInLFxuICAgIC4uLlVOSV9IT1NUX0NPTE9SUyxcbiAgICAnW2NsYXNzLmluZGV0ZXJtaW5hdGVdJzogJ21vZGUgPT09IFVuaVByb2dyZXNzTW9kZS5JbmRldGVybWluYXRlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElVbmlQcm9ncmVzcyB7XG4gIEBJbnB1dCgpIG1vZGUgPSBVbmlQcm9ncmVzc01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgQElucHV0KCkgY29sb3IgPSBVbmlDb2xvci5QcmltYXJ5O1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0b3RhbCgpIHsgcmV0dXJuIHRoaXMuX3RvdGFsOyB9XG4gIHNldCB0b3RhbCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF90b3RhbCA9IDEwMDtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzdHJva2VXaWR0aCgpIHsgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoOyB9XG4gIHNldCBzdHJva2VXaWR0aCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdHJva2VXaWR0aCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9zdHJva2VXaWR0aCA9IDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpYW1ldGVyKCkgeyByZXR1cm4gdGhpcy5fZGlhbWV0ZXI7IH1cbiAgc2V0IGRpYW1ldGVyKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2RpYW1ldGVyID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX2RpYW1ldGVyID0gOTA7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfaW5kZXRlcm1pbmF0ZSA9IHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdG90YWw6IDEwMCxcbiAgfTtcblxuICBnZXQgcmFkaXVzKCkge1xuICAgIHJldHVybiAodGhpcy5kaWFtZXRlciAvIDIpIC0gdGhpcy5zdHJva2VXaWR0aDtcbiAgfVxuXG4gIGdldCBzdHJva2VEYXNoYXJyYXkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NpcmN1bWZlcmVuY2V9ICR7dGhpcy5fY2lyY3VtZmVyZW5jZX1gO1xuICB9XG5cbiAgZ2V0IHN0cm9rZURhc2hvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NpcmN1bWZlcmVuY2UgLSB0aGlzLl9wZXJjZW50YWdlIC8gMTAwICogdGhpcy5fY2lyY3VtZmVyZW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9jaXJjdW1mZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyAqIDIgKiBNYXRoLlBJO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuICgxMDAgLyB0aGlzLl9tb2RlVG90YWwpICogdGhpcy5fbW9kZVZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21vZGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBVbmlQcm9ncmVzc01vZGUuRGV0ZXJtaW5hdGUgPyB0aGlzLnZhbHVlIDogdGhpcy5faW5kZXRlcm1pbmF0ZS52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9tb2RlVG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gVW5pUHJvZ3Jlc3NNb2RlLkRldGVybWluYXRlID8gdGhpcy50b3RhbCA6IHRoaXMuX2luZGV0ZXJtaW5hdGUudG90YWw7XG4gIH1cblxuICByZWFkb25seSBVbmlQcm9ncmVzc01vZGUgPSBVbmlQcm9ncmVzc01vZGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG59XG4iLCI8c3ZnXG4gIFtzdHlsZS53aWR0aC5weF09XCJkaWFtZXRlclwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiZGlhbWV0ZXJcIlxuPlxuICA8Y2lyY2xlXG4gICAgW3N0eWxlLnN0cm9rZS13aWR0aC5weF09XCJzdHJva2VXaWR0aFwiXG4gICAgW3N0eWxlLnN0cm9rZS1kYXNob2Zmc2V0XT1cInN0cm9rZURhc2hvZmZzZXRcIlxuICAgIFtzdHlsZS5zdHJva2UtZGFzaGFycmF5XT1cInN0cm9rZURhc2hhcnJheVwiXG4gICAgW3N0eWxlLnIucHhdPVwicmFkaXVzXCJcbiAgICBbc3R5bGUuY3gucHhdPVwiZGlhbWV0ZXIgLyAyXCJcbiAgICBbc3R5bGUuY3kucHhdPVwiZGlhbWV0ZXIgLyAyXCJcbiAgPjwvY2lyY2xlPlxuPC9zdmc+XG4iXX0=