import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniSelectComponent } from './components/select/select.component';
import { UniOptionComponent } from './components/option/option.component';
import { UniSelectPanelComponent } from './components/select-panel/select-panel.component';
import * as i0 from "@angular/core";
const declarations = [
    UniSelectComponent,
    UniOptionComponent,
    UniSelectPanelComponent,
];
export class UniSelectModule {
}
UniSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniSelectModule });
UniSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniSelectModule_Factory(t) { return new (t || UniSelectModule)(); }, imports: [[CommonModule, OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniSelectModule, { declarations: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent], imports: [CommonModule, OverlayModule], exports: [UniSelectComponent,
        UniOptionComponent,
        UniSelectPanelComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSelectModule, [{
        type: NgModule,
        args: [{
                declarations,
                exports: declarations,
                entryComponents: [UniSelectPanelComponent],
                imports: [CommonModule, OverlayModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQUUzRixNQUFNLFlBQVksR0FBRztJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtDQUN4QixDQUFDO0FBUUYsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFGakIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO3dGQUUzQixlQUFlLG1CQVgxQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHVCQUF1QixhQU9iLFlBQVksRUFBRSxhQUFhLGFBVHJDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsdUJBQXVCO2tEQVNaLGVBQWU7Y0FOM0IsUUFBUTtlQUFDO2dCQUNSLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBVbmlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29wdGlvbi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVNlbGVjdFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC1wYW5lbC9zZWxlY3QtcGFuZWwuY29tcG9uZW50JztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBVbmlTZWxlY3RDb21wb25lbnQsXG4gIFVuaU9wdGlvbkNvbXBvbmVudCxcbiAgVW5pU2VsZWN0UGFuZWxDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgZW50cnlDb21wb25lbnRzOiBbVW5pU2VsZWN0UGFuZWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2VsZWN0TW9kdWxlIHsgfVxuIl19