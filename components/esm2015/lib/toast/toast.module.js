import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UniToastComponent } from './toast.component';
import { UniToastService } from './toast.service';
import { UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG } from './toast-config.constant';
import * as i0 from "@angular/core";
export class UniToastModule {
    static forRoot(config) {
        return {
            ngModule: UniToastModule,
            providers: [{
                    provide: UNI_TOAST_CONFIG,
                    useValue: config,
                }],
        };
    }
}
UniToastModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniToastModule });
UniToastModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniToastModule_Factory(t) { return new (t || UniToastModule)(); }, providers: [
        UniToastService,
        {
            provide: UNI_TOAST_CONFIG,
            useValue: UNI_TOAST_DEFAULT_CONFIG,
        },
    ], imports: [[CommonModule, OverlayModule]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBZXJGLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdUI7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7O2tEQVRVLGNBQWM7MkdBQWQsY0FBYyxtQkFSZDtRQUNULGVBQWU7UUFDZjtZQUNFLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLHdCQUF3QjtTQUNuQztLQUNGLFlBUFEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO3dGQVMzQixjQUFjLG1CQVhWLGlCQUFpQixhQUV0QixZQUFZLEVBQUUsYUFBYTtrREFTMUIsY0FBYztjQVoxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZjt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLEVBQUUsd0JBQXdCO3FCQUNuQztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBVbmlUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBVTklfVE9BU1RfQ09ORklHLCBVTklfVE9BU1RfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LWNvbmZpZy5jb25zdGFudCc7XG5pbXBvcnQgeyBJVW5pVG9hc3RDb25maWcgfSBmcm9tICcuL3RvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtVbmlUb2FzdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1VuaVRvYXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIFVuaVRvYXN0U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVTklfVE9BU1RfQ09ORklHLFxuICAgICAgdXNlVmFsdWU6IFVOSV9UT0FTVF9ERUZBVUxUX0NPTkZJRyxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlUb2FzdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSVVuaVRvYXN0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxVbmlUb2FzdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVW5pVG9hc3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IFVOSV9UT0FTVF9DT05GSUcsXG4gICAgICAgIHVzZVZhbHVlOiBjb25maWcsXG4gICAgICB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=