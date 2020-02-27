import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniSelectComponent } from './components/select/select.component';
import { UniOptionComponent } from './components/option/option.component';
import { UniSelectPanelComponent } from './components/select-panel/select-panel.component';
import * as i0 from "@angular/core";
var declarations = [
    UniSelectComponent,
    UniOptionComponent,
    UniSelectPanelComponent,
];
var UniSelectModule = /** @class */ (function () {
    function UniSelectModule() {
    }
    UniSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniSelectModule });
    UniSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniSelectModule_Factory(t) { return new (t || UniSelectModule)(); }, imports: [[CommonModule, OverlayModule]] });
    return UniSelectModule;
}());
export { UniSelectModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniSelectModule, { declarations: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent], imports: [CommonModule, OverlayModule], exports: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSelectModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                exports: declarations,
                entryComponents: [UniSelectPanelComponent],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQUUzRixJQUFNLFlBQVksR0FBRztJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQTtLQU1nQzt1REFBbkIsZUFBZTtpSEFBZixlQUFlLGtCQUZqQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7MEJBbEJ4QztDQW9CZ0MsQUFOaEMsSUFNZ0M7U0FBbkIsZUFBZTt3RkFBZixlQUFlLG1CQVgxQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHVCQUF1QixhQU9iLFlBQVksRUFBRSxhQUFhLGFBVHJDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsdUJBQXVCO2tEQVNaLGVBQWU7Y0FOM0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksY0FBQTtnQkFDWixPQUFPLEVBQUUsWUFBWTtnQkFDckIsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFVuaVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pU2VsZWN0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LXBhbmVsL3NlbGVjdC1wYW5lbC5jb21wb25lbnQnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIFVuaVNlbGVjdENvbXBvbmVudCxcbiAgVW5pT3B0aW9uQ29tcG9uZW50LFxuICBVbmlTZWxlY3RQYW5lbENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9ucyxcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxuICBlbnRyeUNvbXBvbmVudHM6IFtVbmlTZWxlY3RQYW5lbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlTZWxlY3RNb2R1bGUgeyB9XG4iXX0=