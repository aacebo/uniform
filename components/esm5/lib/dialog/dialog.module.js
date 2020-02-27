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
var declarations = [
    UniDialogContainerComponent,
    UniDialogContentComponent,
    UniDialogFooterComponent,
    UniDialogHeaderComponent,
    UniDialogTitleComponent,
    UniDialogCloseDirective,
];
var UniDialogModule = /** @class */ (function () {
    function UniDialogModule() {
    }
    UniDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniDialogModule });
    UniDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniDialogModule_Factory(t) { return new (t || UniDialogModule)(); }, providers: [UniDialogService], imports: [[CommonModule, OverlayModule]] });
    return UniDialogModule;
}());
export { UniDialogModule };
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
                declarations: declarations,
                exports: declarations,
                entryComponents: [UniDialogContainerComponent],
                imports: [CommonModule, OverlayModule],
                providers: [UniDialogService],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVwRCxJQUFNLFlBQVksR0FBRztJQUNuQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQTtLQU9nQzt1REFBbkIsZUFBZTtpSEFBZixlQUFlLG1CQUZmLENBQUMsZ0JBQWdCLENBQUMsWUFEcEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOzBCQXpCeEM7Q0E0QmdDLEFBUGhDLElBT2dDO1NBQW5CLGVBQWU7d0ZBQWYsZUFBZSxtQkFmMUIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUIsYUFPYixZQUFZLEVBQUUsYUFBYSxhQVpyQywyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtrREFVWixlQUFlO2NBUDNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLGNBQUE7Z0JBQ1osT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgVW5pRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRGlhbG9nQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRGlhbG9nRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1mb290ZXIvZGlhbG9nLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRGlhbG9nSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1oZWFkZXIvZGlhbG9nLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRGlhbG9nVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nLXRpdGxlL2RpYWxvZy10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRGlhbG9nQ2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlhbG9nLWNsb3NlL2RpYWxvZy1jbG9zZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVW5pRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIFVuaURpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCxcbiAgVW5pRGlhbG9nQ29udGVudENvbXBvbmVudCxcbiAgVW5pRGlhbG9nRm9vdGVyQ29tcG9uZW50LFxuICBVbmlEaWFsb2dIZWFkZXJDb21wb25lbnQsXG4gIFVuaURpYWxvZ1RpdGxlQ29tcG9uZW50LFxuICBVbmlEaWFsb2dDbG9zZURpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9ucyxcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxuICBlbnRyeUNvbXBvbmVudHM6IFtVbmlEaWFsb2dDb250YWluZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVW5pRGlhbG9nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaURpYWxvZ01vZHVsZSB7IH1cbiJdfQ==