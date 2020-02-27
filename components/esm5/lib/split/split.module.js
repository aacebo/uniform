import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniSplitComponent } from './components/split/split.component';
import { UniSplitAreaComponent } from './components/area/split-area.component';
import { UniSplitHandleComponent } from './components/handle/split-handle.component';
import * as i0 from "@angular/core";
var declarations = [
    UniSplitComponent,
    UniSplitAreaComponent,
    UniSplitHandleComponent,
];
var UniSplitModule = /** @class */ (function () {
    function UniSplitModule() {
    }
    UniSplitModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniSplitModule });
    UniSplitModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniSplitModule_Factory(t) { return new (t || UniSplitModule)(); }, imports: [[CommonModule]] });
    return UniSplitModule;
}());
export { UniSplitModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniSplitModule, { declarations: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent], imports: [CommonModule], exports: [UniSplitComponent,
        UniSplitAreaComponent,
        UniSplitHandleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zcGxpdC9zcGxpdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBRXJGLElBQU0sWUFBWSxHQUFHO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRjtJQUFBO0tBSytCO3NEQUFsQixjQUFjOytHQUFkLGNBQWMsa0JBRmhCLENBQUMsWUFBWSxDQUFDO3lCQWhCekI7Q0FrQitCLEFBTC9CLElBSytCO1NBQWxCLGNBQWM7d0ZBQWQsY0FBYyxtQkFWekIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix1QkFBdUIsYUFNYixZQUFZLGFBUnRCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsdUJBQXVCO2tEQVFaLGNBQWM7Y0FMMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksY0FBQTtnQkFDWixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVuaVNwbGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTcGxpdEFyZWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJlYS9zcGxpdC1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTcGxpdEhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kbGUvc3BsaXQtaGFuZGxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgVW5pU3BsaXRDb21wb25lbnQsXG4gIFVuaVNwbGl0QXJlYUNvbXBvbmVudCxcbiAgVW5pU3BsaXRIYW5kbGVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNwbGl0TW9kdWxlIHsgfVxuIl19