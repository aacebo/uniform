import { Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList, ChangeDetectorRef, Output, EventEmitter, ViewEncapsulation, ViewChildren, } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { UniTabComponent } from '../tab/tab.component';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../tab-label/tab-label.component";
function UniTabGroupComponent_uni_tab_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "uni-tab-label", 4);
    i0.ɵɵlistener("click", function UniTabGroupComponent_uni_tab_label_1_Template_uni_tab_label_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const i_r18 = ctx.index; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.select(i_r18); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r15.active === i_r18)("disabled", tab_r17.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tab_r17.label, " ");
} }
function UniTabGroupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r16.activeLabel == null ? null : ctx_r16.activeLabel.width, "px")("transform", ctx_r16.transform);
} }
const _c0 = [[["uni-tab"]]];
const _c1 = ["uni-tab"];
export class UniTabGroupComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this._active = 0;
        this.activeChange = new EventEmitter();
    }
    get active() { return this._active; }
    set active(v) {
        if (v !== this._active) {
            this._active = coerceNumberProperty(v);
            this._cdr.markForCheck();
            this.activeChange.emit(this._active);
        }
    }
    get labels() { return this._labels; }
    set labels(v) {
        setTimeout(() => {
            this._labels = v;
            this._cdr.markForCheck();
        });
    }
    get transform() {
        let width = 0;
        for (let i = 0; i < this._active; i++) {
            width += this._labels.toArray()[i].width;
        }
        return `translateX(${width}px)`;
    }
    get activeLabel() {
        return this._labels.toArray()[this._active];
    }
    ngAfterContentInit() {
        this._setActive();
    }
    select(index) {
        this.active = index;
        this._setActive();
    }
    _setActive() {
        this.tabs.forEach((tab, i) => {
            tab.active = i === this._active;
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCJsaWIvdGFiL2NvbXBvbmVudHMvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0lDZnRFLHdDQUlFO0lBRGEsNE9BQW1CO0lBQ2hDLFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7O0lBSkQsaURBQXVCLDhCQUFBO0lBR3BDLGVBQ0Y7SUFERSw4Q0FDRjs7O0lBSUEseUJBS087OztJQUZMLDZGQUFxQyxnQ0FBQTs7OztBRGV6QyxNQUFNLE9BQU8sb0JBQW9CO0lBeUMvQixZQUE2QixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQS9CNUMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVWLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQTZCSSxDQUFDO0lBeEN6RCxJQUNJLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLElBQUksTUFBTSxDQUFDLENBQVM7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQVFELElBQ0ksTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBSSxNQUFNLENBQUMsQ0FBa0M7UUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsSUFBSSxTQUFTO1FBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxjQUFlLEtBQU0sS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dGQXhEVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtvQ0FjZCxlQUFlOzs7Ozt1QkFHbEIsb0JBQW9COzs7Ozs7UUM3Q3BDLDhCQUNFO1FBQUEseUZBSUU7UUFFSixpQkFBTTtRQUVOLDhCQUNFO1FBQUEscUVBS0M7UUFDSCxpQkFBTTtRQUVOLGtCQUE2Qjs7UUFqQlosZUFBOEM7UUFBOUMsNENBQThDO1FBVTNELGVBQWM7UUFBZCxpQ0FBYzs7a0REaUJMLG9CQUFvQjtjQVZoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQVdMLE1BQU07O2tCQUVOLGVBQWU7bUJBQUMsZUFBZTs7a0JBRy9CLFlBQVk7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBVbmlUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlUYWJMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1sYWJlbC90YWItbGFiZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLXRhYi1ncm91cCcsXG4gIGV4cG9ydEFzOiAndW5pVGFiR3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktdGFiLWdyb3VwJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pVGFiR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuICBzZXQgYWN0aXZlKHY6IG51bWJlcikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLl9hY3RpdmUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9hY3RpdmUgPSAwO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAQ29udGVudENoaWxkcmVuKFVuaVRhYkNvbXBvbmVudClcbiAgcmVhZG9ubHkgdGFiczogUXVlcnlMaXN0PFVuaVRhYkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZHJlbihVbmlUYWJMYWJlbENvbXBvbmVudClcbiAgZ2V0IGxhYmVscygpIHsgcmV0dXJuIHRoaXMuX2xhYmVsczsgfVxuICBzZXQgbGFiZWxzKHY6IFF1ZXJ5TGlzdDxVbmlUYWJMYWJlbENvbXBvbmVudD4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2xhYmVscyA9IHY7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGFiZWxzOiBRdWVyeUxpc3Q8VW5pVGFiTGFiZWxDb21wb25lbnQ+O1xuXG4gIGdldCB0cmFuc2Zvcm0oKSB7XG4gICAgbGV0IHdpZHRoID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYWN0aXZlOyBpKyspIHtcbiAgICAgIHdpZHRoICs9IHRoaXMuX2xhYmVscy50b0FycmF5KClbaV0ud2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7IHdpZHRoIH1weClgO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHMudG9BcnJheSgpW3RoaXMuX2FjdGl2ZV07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlKCk7XG4gIH1cblxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlID0gaW5kZXg7XG4gICAgdGhpcy5fc2V0QWN0aXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRBY3RpdmUoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgdGFiLmFjdGl2ZSA9IGkgPT09IHRoaXMuX2FjdGl2ZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVuaS10YWItaGVhZGVyXCI+XG4gIDx1bmktdGFiLWxhYmVsICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFicy50b0FycmF5KCk7IGluZGV4IGFzIGlcIlxuICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZSA9PT0gaVwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KGkpXCI+XG4gICAge3sgdGFiLmxhYmVsIH19XG4gIDwvdW5pLXRhYi1sYWJlbD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidW5pLXRhYi10cmFja1wiPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJsYWJlbHNcIlxuICAgIGNsYXNzPVwidW5pLXRhYi1iYXJcIlxuICAgIFtzdHlsZS53aWR0aC5weF09XCJhY3RpdmVMYWJlbD8ud2lkdGhcIlxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCJcbiAgPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS10YWJcIj48L25nLWNvbnRlbnQ+XG4iXX0=