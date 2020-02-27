import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniToastComponent } from './toast.component';
import { UniToastService } from './toast.service';
import { UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG } from './toast-config.constant';
import * as i0 from "@angular/core";
var UniToastModule = /** @class */ (function () {
    function UniToastModule() {
    }
    UniToastModule.forRoot = function (config) {
        return {
            ngModule: UniToastModule,
            providers: [{
                    provide: UNI_TOAST_CONFIG,
                    useValue: config,
                }],
        };
    };
    UniToastModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniToastModule });
    UniToastModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniToastModule_Factory(t) { return new (t || UniToastModule)(); }, providers: [
            UniToastService,
            {
                provide: UNI_TOAST_CONFIG,
                useValue: UNI_TOAST_DEFAULT_CONFIG,
            },
        ], imports: [[CommonModule, OverlayModule]] });
    return UniToastModule;
}());
export { UniToastModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniToastModule, { declarations: [UniToastComponent], imports: [CommonModule, OverlayModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniToastModule, [{
        type: NgModule,
        args: [{
                declarations: [UniToastComponent],
                entryComponents: [UniToastComponent],
                imports: [CommonModule, OverlayModule],
                providers: [
                    UniToastService,
                    {
                        provide: UNI_TOAST_CONFIG,
                        useValue: UNI_TOAST_DEFAULT_CONFIG,
                    },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBR3JGO0lBQUE7S0FzQkM7SUFUUSxzQkFBTyxHQUFkLFVBQWUsTUFBdUI7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7c0RBVFUsY0FBYzsrR0FBZCxjQUFjLG1CQVJkO1lBQ1QsZUFBZTtZQUNmO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7U0FDRixZQVBRLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzt5QkFaeEM7Q0ErQkMsQUF0QkQsSUFzQkM7U0FWWSxjQUFjO3dGQUFkLGNBQWMsbUJBWFYsaUJBQWlCLGFBRXRCLFlBQVksRUFBRSxhQUFhO2tEQVMxQixjQUFjO2NBWjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLFNBQVMsRUFBRTtvQkFDVCxlQUFlO29CQUNmO3dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ25DO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFVuaVRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFVOSV9UT0FTVF9DT05GSUcsIFVOSV9UT0FTVF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtY29uZmlnLmNvbnN0YW50JztcbmltcG9ydCB7IElVbmlUb2FzdENvbmZpZyB9IGZyb20gJy4vdG9hc3QtY29uZmlnLmludGVyZmFjZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1VuaVRvYXN0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVW5pVG9hc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVW5pVG9hc3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVOSV9UT0FTVF9DT05GSUcsXG4gICAgICB1c2VWYWx1ZTogVU5JX1RPQVNUX0RFRkFVTFRfQ09ORklHLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaVRvYXN0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJVW5pVG9hc3RDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVuaVRvYXN0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVbmlUb2FzdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogVU5JX1RPQVNUX0NPTkZJRyxcbiAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyxcbiAgICAgIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==