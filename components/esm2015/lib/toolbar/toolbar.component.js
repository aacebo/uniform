import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class UniToolbarComponent {
}
UniToolbarComponent.ɵfac = function UniToolbarComponent_Factory(t) { return new (t || UniToolbarComponent)(); };
UniToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniToolbarComponent, selectors: [["uni-toolbar"]], hostAttrs: [1, "uni-toolbar"], hostVars: 8, hostBindings: function UniToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniToolbar"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".uni-toolbar{display:-webkit-box;display:flex;padding:5px 10px;box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}.uni-toolbar.primary{color:var(--white);background-color:var(--primary)}.uni-toolbar.success{color:var(--white);background-color:var(--success)}.uni-toolbar.warning{color:var(--black);background-color:var(--warning)}.uni-toolbar.danger{color:var(--white);background-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniToolbarComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-toolbar',
                exportAs: 'uniToolbar',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./toolbar.component.scss'],
                host: Object.assign({ class: 'uni-toolbar' }, UNI_HOST_COLORS),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQWVwRCxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3dEQUFuQixtQkFBbUI7Ozs7UUFUbkIsa0JBQVk7O2tEQVNaLG1CQUFtQjtjQWIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxJQUFJLGtCQUNGLEtBQUssRUFBRSxhQUFhLElBQ2pCLGVBQWUsQ0FDbkI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaUNvbG9yIH0gZnJvbSAnLi4vY29yZS9lbnVtcyc7XG5pbXBvcnQgeyBVTklfSE9TVF9DT0xPUlMgfSBmcm9tICcuLi9jb3JlL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS10b29sYmFyJyxcbiAgZXhwb3J0QXM6ICd1bmlUb29sYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktdG9vbGJhcicsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pVG9vbGJhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9yPzogVW5pQ29sb3I7XG59XG4iXX0=