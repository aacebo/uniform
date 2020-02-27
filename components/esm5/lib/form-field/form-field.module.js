import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniFormFieldComponent } from './components/form-field/form-field.component';
import { UniErrorComponent } from './components/error/error.component';
import { UniHintComponent } from './components/hint/hint.component';
import { UniLabelComponent } from './components/label/label.component';
import * as i0 from "@angular/core";
var declarations = [
    UniFormFieldComponent,
    UniErrorComponent,
    UniHintComponent,
    UniLabelComponent,
];
var UniFormFieldModule = /** @class */ (function () {
    function UniFormFieldModule() {
    }
    UniFormFieldModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniFormFieldModule });
    UniFormFieldModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniFormFieldModule_Factory(t) { return new (t || UniFormFieldModule)(); }, imports: [[CommonModule]] });
    return UniFormFieldModule;
}());
export { UniFormFieldModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniFormFieldModule, { declarations: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent], imports: [CommonModule], exports: [UniFormFieldComponent,
        UniErrorComponent,
        UniHintComponent,
        UniLabelComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniFormFieldModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRXZFLElBQU0sWUFBWSxHQUFHO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNsQixDQUFDO0FBRUY7SUFBQTtLQUttQzswREFBdEIsa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBRnBCLENBQUMsWUFBWSxDQUFDOzZCQWxCekI7Q0FvQm1DLEFBTG5DLElBS21DO1NBQXRCLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQVg3QixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUIsYUFNUCxZQUFZLGFBVHRCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtrREFRTixrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksY0FBQTtnQkFDWixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlIaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hpbnQvaGludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBVbmlGb3JtRmllbGRDb21wb25lbnQsXG4gIFVuaUVycm9yQ29tcG9uZW50LFxuICBVbmlIaW50Q29tcG9uZW50LFxuICBVbmlMYWJlbENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9ucyxcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pRm9ybUZpZWxkTW9kdWxlIHsgfVxuIl19