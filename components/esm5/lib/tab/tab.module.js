import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniTabComponent } from './components/tab/tab.component';
import { UniTabGroupComponent } from './components/tab-group/tab-group.component';
import { UniTabLabelComponent } from './components/tab-label/tab-label.component';
import { UniTabBodyDirective } from './directives/tab-body/tab-body.directive';
import * as i0 from "@angular/core";
var declarations = [
    UniTabComponent,
    UniTabGroupComponent,
    UniTabLabelComponent,
    UniTabBodyDirective,
];
var UniTabModule = /** @class */ (function () {
    function UniTabModule() {
    }
    UniTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniTabModule });
    UniTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniTabModule_Factory(t) { return new (t || UniTabModule)(); }, imports: [[CommonModule]] });
    return UniTabModule;
}());
export { UniTabModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniTabModule, { declarations: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective], imports: [CommonModule], exports: [UniTabComponent,
        UniTabGroupComponent,
        UniTabLabelComponent,
        UniTabBodyDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTabModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFiL3RhYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUUvRSxJQUFNLFlBQVksR0FBRztJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGO0lBQUE7S0FLNkI7b0RBQWhCLFlBQVk7MkdBQVosWUFBWSxrQkFGZCxDQUFDLFlBQVksQ0FBQzt1QkFsQnpCO0NBb0I2QixBQUw3QixJQUs2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksbUJBWHZCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQU1ULFlBQVksYUFUdEIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsbUJBQW1CO2tEQVFSLFlBQVk7Y0FMeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksY0FBQTtnQkFDWixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVuaVRhYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlUYWJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWItZ3JvdXAvdGFiLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlUYWJMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWItbGFiZWwvdGFiLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlUYWJCb2R5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYi1ib2R5L3RhYi1ib2R5LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgVW5pVGFiQ29tcG9uZW50LFxuICBVbmlUYWJHcm91cENvbXBvbmVudCxcbiAgVW5pVGFiTGFiZWxDb21wb25lbnQsXG4gIFVuaVRhYkJvZHlEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaVRhYk1vZHVsZSB7IH1cbiJdfQ==