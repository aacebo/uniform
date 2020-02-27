import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UniProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import * as i0 from "@angular/core";
const declarations = [
    UniProgressBarComponent,
    UniProgressSpinnerComponent,
];
export class UniProgressModule {
}
UniProgressModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniProgressModule });
UniProgressModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniProgressModule_Factory(t) { return new (t || UniProgressModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniProgressModule, { declarations: [UniProgressBarComponent,
        UniProgressSpinnerComponent], imports: [CommonModule], exports: [UniProgressBarComponent,
        UniProgressSpinnerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniProgressModule, [{
        type: NgModule,
        args: [{
                declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7O0FBRXZHLE1BQU0sWUFBWSxHQUFHO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQU9GLE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFGbkIsQ0FBQyxZQUFZLENBQUM7d0ZBRVosaUJBQWlCLG1CQVQ1Qix1QkFBdUI7UUFDdkIsMkJBQTJCLGFBTWpCLFlBQVksYUFQdEIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtrREFRaEIsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixZQUFZO2dCQUNaLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVW5pUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIFVuaVByb2dyZXNzQmFyQ29tcG9uZW50LFxuICBVbmlQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaVByb2dyZXNzTW9kdWxlIHsgfVxuIl19