import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["uni-card-header"]], [["uni-card-content"]], [["uni-card-footer"]]];
const _c1 = ["uni-card-header", "uni-card-content", "uni-card-footer"];
export class UniCardComponent {
}
UniCardComponent.ɵfac = function UniCardComponent_Factory(t) { return new (t || UniCardComponent)(); };
UniCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniCardComponent, selectors: [["uni-card"]], hostAttrs: [1, "uni-card"], exportAs: ["uniCard"], ngContentSelectors: _c1, decls: 3, vars: 0, template: function UniCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵprojection(0);
        i0.ɵɵprojection(1, 1);
        i0.ɵɵprojection(2, 2);
    } }, styles: [".uni-card{display:block;padding-bottom:15px;padding-top:15px;background-color:var(--dark);border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniCardComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-card',
                exportAs: 'uniCard',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                host: { class: 'uni-card' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibGliL2NhcmQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVl0RixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O1FDWjdCLGtCQUFxQztRQUNyQyxxQkFBc0M7UUFDdEMscUJBQXFDOztrRERVeEIsZ0JBQWdCO2NBVjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1jYXJkJyxcbiAgZXhwb3J0QXM6ICd1bmlDYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktY2FyZCcgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUNhcmRDb21wb25lbnQgeyB9XG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJ1bmktY2FyZC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktY2FyZC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLWNhcmQtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuIl19