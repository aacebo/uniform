import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipDirective } from './tooltip.directive';
import * as i0 from "@angular/core";
var UniTooltipModule = /** @class */ (function () {
    function UniTooltipModule() {
    }
    UniTooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniTooltipModule });
    UniTooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniTooltipModule_Factory(t) { return new (t || UniTooltipModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniTooltipModule;
}());
export { UniTooltipModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniTooltipModule, { declarations: [UniTooltipComponent, UniTooltipDirective], imports: [CommonModule, OverlayModule], exports: [UniTooltipDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [UniTooltipComponent, UniTooltipDirective],
                entryComponents: [UniTooltipComponent],
                exports: [UniTooltipDirective],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRDtJQUFBO0tBTWdDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFGbEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOzJCQVh4QztDQWFnQyxBQU5oQyxJQU1nQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFMWixtQkFBbUIsRUFBRSxtQkFBbUIsYUFHN0MsWUFBWSxFQUFFLGFBQWEsYUFEM0IsbUJBQW1CO2tEQUdsQixnQkFBZ0I7Y0FONUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO2dCQUN4RCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFVuaVRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVW5pVG9vbHRpcENvbXBvbmVudCwgVW5pVG9vbHRpcERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VuaVRvb2x0aXBDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVW5pVG9vbHRpcERpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlUb29sdGlwTW9kdWxlIHt9XG4iXX0=