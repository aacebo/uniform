import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipDirective } from './tooltip.directive';
import * as i0 from "@angular/core";
export class UniTooltipModule {
}
UniTooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniTooltipModule });
UniTooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniTooltipModule_Factory(t) { return new (t || UniTooltipModule)(); }, imports: [[CommonModule, OverlayModule]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQVExRCxNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBRmxCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzt3RkFFM0IsZ0JBQWdCLG1CQUxaLG1CQUFtQixFQUFFLG1CQUFtQixhQUc3QyxZQUFZLEVBQUUsYUFBYSxhQUQzQixtQkFBbUI7a0RBR2xCLGdCQUFnQjtjQU41QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3hELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgVW5pVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtVbmlUb29sdGlwQ29tcG9uZW50LCBVbmlUb29sdGlwRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVW5pVG9vbHRpcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtVbmlUb29sdGlwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaVRvb2x0aXBNb2R1bGUge31cbiJdfQ==