import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniSidenavComponent } from './components/sidenav/sidenav.component';
import { UniSidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { UniSidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { UniSidenavBodyDirective } from './directives/sidenav-body/sidenav-body.directive';
import * as i0 from "@angular/core";
const declarations = [
    UniSidenavComponent,
    UniSidenavContainerComponent,
    UniSidenavContentComponent,
    UniSidenavBodyDirective,
];
export class UniSidenavModule {
}
UniSidenavModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniSidenavModule });
UniSidenavModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniSidenavModule_Factory(t) { return new (t || UniSidenavModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniSidenavModule, { declarations: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective], imports: [CommonModule], exports: [UniSidenavComponent,
        UniSidenavContainerComponent,
        UniSidenavContentComponent,
        UniSidenavBodyDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSidenavModule, [{
        type: NgModule,
        args: [{
                declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NpZGVuYXYvc2lkZW5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBRTNGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtDQUN4QixDQUFDO0FBT0YsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQUZsQixDQUFDLFlBQVksQ0FBQzt3RkFFWixnQkFBZ0IsbUJBWDNCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVCQUF1QixhQU1iLFlBQVksYUFUdEIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsdUJBQXVCO2tEQVFaLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWTtnQkFDWixPQUFPLEVBQUUsWUFBWTtnQkFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVuaVNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGVuYXYtY29udGFpbmVyL3NpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlbmF2LWNvbnRlbnQvc2lkZW5hdi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2Qm9keURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaWRlbmF2LWJvZHkvc2lkZW5hdi1ib2R5LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgVW5pU2lkZW5hdkNvbXBvbmVudCxcbiAgVW5pU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCxcbiAgVW5pU2lkZW5hdkNvbnRlbnRDb21wb25lbnQsXG4gIFVuaVNpZGVuYXZCb2R5RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zLFxuICBleHBvcnRzOiBkZWNsYXJhdGlvbnMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlTaWRlbmF2TW9kdWxlIHsgfVxuIl19