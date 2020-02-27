import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniPopoverComponent } from './popover.component';
import { UniPopoverDirective } from './popover.directive';
import * as i0 from "@angular/core";
var UniPopoverModule = /** @class */ (function () {
    function UniPopoverModule() {
    }
    UniPopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniPopoverModule });
    UniPopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniPopoverModule_Factory(t) { return new (t || UniPopoverModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniPopoverModule;
}());
export { UniPopoverModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniPopoverModule, { declarations: [UniPopoverComponent, UniPopoverDirective], imports: [CommonModule, OverlayModule], exports: [UniPopoverDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniPopoverModule, [{
        type: NgModule,
        args: [{
                declarations: [UniPopoverComponent, UniPopoverDirective],
                entryComponents: [UniPopoverComponent],
                exports: [UniPopoverDirective],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRDtJQUFBO0tBTWdDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFGbEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOzJCQVh4QztDQWFnQyxBQU5oQyxJQU1nQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFMWixtQkFBbUIsRUFBRSxtQkFBbUIsYUFHN0MsWUFBWSxFQUFFLGFBQWEsYUFEM0IsbUJBQW1CO2tEQUdsQixnQkFBZ0I7Y0FONUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO2dCQUN4RCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFVuaVBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVW5pUG9wb3ZlckNvbXBvbmVudCwgVW5pUG9wb3ZlckRpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VuaVBvcG92ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVW5pUG9wb3ZlckRpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlQb3BvdmVyTW9kdWxlIHt9XG4iXX0=