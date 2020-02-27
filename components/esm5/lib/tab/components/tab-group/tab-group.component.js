import { Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList, ChangeDetectorRef, Output, EventEmitter, ViewEncapsulation, ViewChildren, } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UniTabComponent } from '../tab/tab.component';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../tab-label/tab-label.component";
function UniTabGroupComponent_uni_tab_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "uni-tab-label", 4);
    i0.ɵɵlistener("click", function UniTabGroupComponent_uni_tab_label_1_Template_uni_tab_label_click_0_listener($event) { i0.ɵɵrestoreView(_r45); var i_r43 = ctx.index; var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.select(i_r43); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r42 = ctx.$implicit;
    var i_r43 = ctx.index;
    var ctx_r40 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r40.active === i_r43)("disabled", tab_r42.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tab_r42.label, " ");
} }
function UniTabGroupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    var ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r41.activeLabel == null ? null : ctx_r41.activeLabel.width, "px")("transform", ctx_r41.transform);
} }
var _c0 = [[["uni-tab"]]];
var _c1 = ["uni-tab"];
var UniTabGroupComponent = /** @class */ (function () {
    function UniTabGroupComponent(_cdr) {
        this._cdr = _cdr;
        this._active = 0;
        this.activeChange = new EventEmitter();
    }
    Object.defineProperty(UniTabGroupComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (v) {
            if (v !== this._active) {
                this._active = coerceNumberProperty(v);
                this._cdr.markForCheck();
                this.activeChange.emit(this._active);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "labels", {
        get: function () { return this._labels; },
        set: function (v) {
            var _this = this;
            setTimeout(function () {
                _this._labels = v;
                _this._cdr.markForCheck();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "transform", {
        get: function () {
            var width = 0;
            for (var i = 0; i < this._active; i++) {
                width += this._labels.toArray()[i].width;
            }
            return "translateX(" + width + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniTabGroupComponent.prototype, "activeLabel", {
        get: function () {
            return this._labels.toArray()[this._active];
        },
        enumerable: true,
        configurable: true
    });
    UniTabGroupComponent.prototype.ngAfterContentInit = function () {
        this._setActive();
    };
    UniTabGroupComponent.prototype.select = function (index) {
        this.active = index;
        this._setActive();
    };
    UniTabGroupComponent.prototype._setActive = function () {
        var _this = this;
        this.tabs.forEach(function (tab, i) {
            tab.active = i === _this._active;
        });
    };
    UniTabGroupComponent.ɵfac = function UniTabGroupComponent_Factory(t) { return new (t || UniTabGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    UniTabGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniTabGroupComponent, selectors: [["uni-tab-group"]], contentQueries: function UniTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, UniTabComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabs = _t);
        } }, viewQuery: function UniTabGroupComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(UniTabLabelComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labels = _t);
        } }, hostAttrs: [1, "uni-tab-group"], inputs: { active: "active" }, outputs: { activeChange: "activeChange" }, exportAs: ["uniTabGroup"], ngContentSelectors: _c1, decls: 5, vars: 2, consts: [[1, "uni-tab-header"], [3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "uni-tab-track"], ["class", "uni-tab-bar", 3, "width", "transform", 4, "ngIf"], [3, "active", "disabled", "click"], [1, "uni-tab-bar"]], template: function UniTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, UniTabGroupComponent_uni_tab_label_1_Template, 2, 3, "uni-tab-label", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, UniTabGroupComponent_div_3_Template, 1, 4, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(4);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.tabs.toArray());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.labels);
        } }, directives: [i1.NgForOf, i1.NgIf, i2.UniTabLabelComponent], styles: [".uni-tab-group{display:block}.uni-tab-group .uni-tab-header{display:-webkit-box;display:flex}.uni-tab-group .uni-tab-track{display:block;position:relative;height:2px;border-bottom:1px solid var(--hairline-regular)}.uni-tab-group .uni-tab-track .uni-tab-bar{position:absolute;height:2px;background-color:var(--primary);-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniTabGroupComponent;
}());
export { UniTabGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTabGroupComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tab-group',
                exportAs: 'uniTabGroup',
                templateUrl: './tab-group.component.html',
                styleUrls: ['./tab-group.component.scss'],
                host: { class: 'uni-tab-group' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { active: [{
            type: Input
        }], activeChange: [{
            type: Output
        }], tabs: [{
            type: ContentChildren,
            args: [UniTabComponent]
        }], labels: [{
            type: ViewChildren,
            args: [UniTabLabelComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0lDZnRFLHdDQUlFO0lBRGEsd09BQW1CO0lBQ2hDLFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7O0lBSkQsaURBQXVCLDhCQUFBO0lBR3BDLGVBQ0Y7SUFERSw4Q0FDRjs7O0lBSUEseUJBS087OztJQUZMLDZGQUFxQyxnQ0FBQTs7OztBREt6QztJQW1ERSw4QkFBNkIsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUEvQjVDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFVixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUE2QkksQ0FBQztJQXhDekQsc0JBQ0ksd0NBQU07YUFEVixjQUNlLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDckMsVUFBVyxDQUFTO1lBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUM7OztPQVBvQztJQWVyQyxzQkFDSSx3Q0FBTTthQURWLGNBQ2UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNyQyxVQUFXLENBQWtDO1lBQTdDLGlCQUtDO1lBSkMsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BTm9DO0lBU3JDLHNCQUFJLDJDQUFTO2FBQWI7WUFDRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQzFDO1lBRUQsT0FBTyxnQkFBZSxLQUFLLFFBQU0sQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBSUQsaURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLHlDQUFVLEdBQWxCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzRGQXhEVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjt3Q0FjZCxlQUFlOzs7OzsyQkFHbEIsb0JBQW9COzs7Ozs7WUM3Q3BDLDhCQUNFO1lBQUEseUZBSUU7WUFFSixpQkFBTTtZQUVOLDhCQUNFO1lBQUEscUVBS0M7WUFDSCxpQkFBTTtZQUVOLGtCQUE2Qjs7WUFqQlosZUFBOEM7WUFBOUMsNENBQThDO1lBVTNELGVBQWM7WUFBZCxpQ0FBYzs7K0JEWGxCO0NBcUZDLEFBbkVELElBbUVDO1NBekRZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBVmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7Z0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBV0wsTUFBTTs7a0JBRU4sZUFBZTttQkFBQyxlQUFlOztrQkFHL0IsWUFBWTttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IFVuaVRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVRhYkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLWxhYmVsL3RhYi1sYWJlbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktdGFiLWdyb3VwJyxcbiAgZXhwb3J0QXM6ICd1bmlUYWJHcm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyBjbGFzczogJ3VuaS10YWItZ3JvdXAnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlUYWJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG4gIHNldCBhY3RpdmUodjogbnVtYmVyKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuX2FjdGl2ZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2FjdGl2ZSA9IDA7XG5cbiAgQE91dHB1dCgpIGFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVW5pVGFiQ29tcG9uZW50KVxuICByZWFkb25seSB0YWJzOiBRdWVyeUxpc3Q8VW5pVGFiQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFVuaVRhYkxhYmVsQ29tcG9uZW50KVxuICBnZXQgbGFiZWxzKCkgeyByZXR1cm4gdGhpcy5fbGFiZWxzOyB9XG4gIHNldCBsYWJlbHModjogUXVlcnlMaXN0PFVuaVRhYkxhYmVsQ29tcG9uZW50Pikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fbGFiZWxzID0gdjtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIF9sYWJlbHM6IFF1ZXJ5TGlzdDxVbmlUYWJMYWJlbENvbXBvbmVudD47XG5cbiAgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICBsZXQgd2lkdGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hY3RpdmU7IGkrKykge1xuICAgICAgd2lkdGggKz0gdGhpcy5fbGFiZWxzLnRvQXJyYXkoKVtpXS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gYHRyYW5zbGF0ZVgoJHsgd2lkdGggfXB4KWA7XG4gIH1cblxuICBnZXQgYWN0aXZlTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscy50b0FycmF5KClbdGhpcy5fYWN0aXZlXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmUoKTtcbiAgfVxuXG4gIHNlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBpbmRleDtcbiAgICB0aGlzLl9zZXRBY3RpdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEFjdGl2ZSgpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICB0YWIuYWN0aXZlID0gaSA9PT0gdGhpcy5fYWN0aXZlO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidW5pLXRhYi1oZWFkZXJcIj5cbiAgPHVuaS10YWItbGFiZWwgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzLnRvQXJyYXkoKTsgaW5kZXggYXMgaVwiXG4gICAgICAgICAgICAgICAgIFthY3RpdmVdPVwiYWN0aXZlID09PSBpXCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIj5cbiAgICB7eyB0YWIubGFiZWwgfX1cbiAgPC91bmktdGFiLWxhYmVsPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ1bmktdGFiLXRyYWNrXCI+XG4gIDxkaXZcbiAgICAqbmdJZj1cImxhYmVsc1wiXG4gICAgY2xhc3M9XCJ1bmktdGFiLWJhclwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cImFjdGl2ZUxhYmVsPy53aWR0aFwiXG4gICAgW3N0eWxlLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIlxuICA+PC9kaXY+XG48L2Rpdj5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLXRhYlwiPjwvbmctY29udGVudD5cbiJdfQ==