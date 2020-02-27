import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniDialogContainerComponent } from './components/dialog-container/dialog-container.component';
import { UniDialogContentComponent } from './components/dialog-content/dialog-content.component';
import { UniDialogFooterComponent } from './components/dialog-footer/dialog-footer.component';
import { UniDialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { UniDialogTitleComponent } from './components/dialog-title/dialog-title.component';
import { UniDialogCloseDirective } from './directives/dialog-close/dialog-close.directive';
import { UniDialogService } from './dialog.service';
import * as i0 from "@angular/core";
const declarations = [
    UniDialogContainerComponent,
    UniDialogContentComponent,
    UniDialogFooterComponent,
    UniDialogHeaderComponent,
    UniDialogTitleComponent,
    UniDialogCloseDirective,
];
export class UniDialogModule {
}
UniDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniDialogModule });
UniDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniDialogModule_Factory(t) { return new (t || UniDialogModule)(); }, providers: [UniDialogService], imports: [[CommonModule, OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniDialogModule, { declarations: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective], imports: [CommonModule, OverlayModule], exports: [UniDialogContainerComponent,
        UniDialogContentComponent,
        UniDialogFooterComponent,
        UniDialogHeaderComponent,
        UniDialogTitleComponent,
        UniDialogCloseDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniDialogModule, [{
        type: NgModule,
        args: [{
                declarations,
                exports: declarations,
                entryComponents: [UniDialogContainerComponent],
                imports: [CommonModule, OverlayModule],
                providers: [UniDialogService],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVwRCxNQUFNLFlBQVksR0FBRztJQUNuQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN4QixDQUFDO0FBU0YsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxtQkFGZixDQUFDLGdCQUFnQixDQUFDLFlBRHBCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzt3RkFHM0IsZUFBZSxtQkFmMUIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUIsYUFPYixZQUFZLEVBQUUsYUFBYSxhQVpyQywyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtrREFVWixlQUFlO2NBUDNCLFFBQVE7ZUFBQztnQkFDUixZQUFZO2dCQUNaLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDOUMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFVuaURpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaURpYWxvZ0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaURpYWxvZ0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctZm9vdGVyL2RpYWxvZy1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaURpYWxvZ0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctaGVhZGVyL2RpYWxvZy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaURpYWxvZ1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy10aXRsZS9kaWFsb2ctdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaURpYWxvZ0Nsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RpYWxvZy1jbG9zZS9kaWFsb2ctY2xvc2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVuaURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBVbmlEaWFsb2dDb250YWluZXJDb21wb25lbnQsXG4gIFVuaURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gIFVuaURpYWxvZ0Zvb3RlckNvbXBvbmVudCxcbiAgVW5pRGlhbG9nSGVhZGVyQ29tcG9uZW50LFxuICBVbmlEaWFsb2dUaXRsZUNvbXBvbmVudCxcbiAgVW5pRGlhbG9nQ2xvc2VEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgZW50cnlDb21wb25lbnRzOiBbVW5pRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1VuaURpYWxvZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlEaWFsb2dNb2R1bGUgeyB9XG4iXX0=