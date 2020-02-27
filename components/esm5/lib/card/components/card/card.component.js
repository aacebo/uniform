import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = [[["uni-card-header"]], [["uni-card-content"]], [["uni-card-footer"]]];
var _c1 = ["uni-card-header", "uni-card-content", "uni-card-footer"];
var UniCardComponent = /** @class */ (function () {
    function UniCardComponent() {
    }
    UniCardComponent.ɵfac = function UniCardComponent_Factory(t) { return new (t || UniCardComponent)(); };
    UniCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniCardComponent, selectors: [["uni-card"]], hostAttrs: [1, "uni-card"], exportAs: ["uniCard"], ngContentSelectors: _c1, decls: 3, vars: 0, template: function UniCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵprojection(1, 1);
            i0.ɵɵprojection(2, 2);
        } }, styles: [".uni-card{display:block;padding-bottom:15px;padding-top:15px;background-color:var(--dark);border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniCardComponent;
}());
export { UniCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibGliL2NhcmQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV0RjtJQUFBO0tBVWlDO29GQUFwQixnQkFBZ0I7eURBQWhCLGdCQUFnQjs7WUNaN0Isa0JBQXFDO1lBQ3JDLHFCQUFzQztZQUN0QyxxQkFBcUM7OzJCREZyQztDQVlpQyxBQVZqQyxJQVVpQztTQUFwQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQVY1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktY2FyZCcsXG4gIGV4cG9ydEFzOiAndW5pQ2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7IGNsYXNzOiAndW5pLWNhcmQnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlDYXJkQ29tcG9uZW50IHsgfVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLWNhcmQtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLWNhcmQtY29udGVudFwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1jYXJkLWZvb3RlclwiPjwvbmctY29udGVudD5cbiJdfQ==