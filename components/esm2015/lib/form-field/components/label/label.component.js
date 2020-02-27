import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class UniLabelComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
    }
    get for() { return this._for; }
    set for(v) {
        if (v !== this._for) {
            this._for = v;
            this._cdr.markForCheck();
        }
    }
}
UniLabelComponent.ɵfac = function UniLabelComponent_Factory(t) { return new (t || UniLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
UniLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniLabelComponent, selectors: [["uni-label"]], hostAttrs: [1, "uni-label"], exportAs: ["uniLabel"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "for"]], template: function UniLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("for", ctx.for);
    } }, styles: [".uni-label{position:absolute;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.uni-label label{cursor:text}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwibGliL2Zvcm0tZmllbGQvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZekcsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixZQUE2QixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUFJLENBQUM7SUFUekQsSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLEdBQUcsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOztrRkFQVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjs7UUNaOUIsZ0NBQ0U7UUFBQSxrQkFBWTtRQUNkLGlCQUFROztRQUZELDZCQUFXOztrRERZTCxpQkFBaUI7Y0FWN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1sYWJlbCcsXG4gIGV4cG9ydEFzOiAndW5pTGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYWJlbC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7IGNsYXNzOiAndW5pLWxhYmVsJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pTGFiZWxDb21wb25lbnQge1xuICBnZXQgZm9yKCkgeyByZXR1cm4gdGhpcy5fZm9yOyB9XG4gIHNldCBmb3Iodjogc3RyaW5nKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2Zvcikge1xuICAgICAgdGhpcy5fZm9yID0gdjtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZm9yPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuIiwiPGxhYmVsIFtmb3JdPVwiZm9yXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG4iXX0=