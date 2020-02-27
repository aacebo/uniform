import { Component, ChangeDetectionStrategy, Inject, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';
import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "../sidenav-container/sidenav-container.component";
const _c0 = ["*"];
export class UniSidenavContentComponent {
    constructor(_container, _el) {
        this._container = _container;
        this._el = _el;
    }
    get marginLeft() {
        return this._open &&
            this._position === UniSidenavPosition.Start &&
            this._mode === UniSidenavMode.Side ? this._width : undefined;
    }
    get marginRight() {
        return this._open &&
            this._position === UniSidenavPosition.End &&
            this._mode === UniSidenavMode.Side ? this._width : undefined;
    }
    get _open() {
        return this._container.sidenav.open;
    }
    get _mode() {
        return this._container.sidenav.mode;
    }
    get _position() {
        return this._container.sidenav.position;
    }
    get _width() {
        return this._container.sidenav.el.nativeElement.clientWidth;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
        }, 1000);
    }
}
UniSidenavContentComponent.ɵfac = function UniSidenavContentComponent_Factory(t) { return new (t || UniSidenavContentComponent)(i0.ɵɵdirectiveInject(forwardRef(() => UniSidenavContainerComponent)), i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniSidenavContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSidenavContentComponent, selectors: [["uni-sidenav-content"]], hostAttrs: [1, "uni-sidenav-content"], hostVars: 4, hostBindings: function UniSidenavContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("margin-left", ctx.marginLeft, "px")("margin-right", ctx.marginRight, "px");
    } }, exportAs: ["uniSidenavContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniSidenavContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".uni-sidenav-content{display:block;position:relative;overflow:auto;z-index:1;height:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSidenavContentComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav-content',
                exportAs: 'uniSidenavContent',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./sidenav-content.component.scss'],
                host: {
                    class: 'uni-sidenav-content',
                    '[style.margin-left.px]': 'marginLeft',
                    '[style.margin-right.px]': 'marginRight',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.UniSidenavContainerComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => UniSidenavContainerComponent)]
            }] }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZW5hdi9jb21wb25lbnRzL3NpZGVuYXYtY29udGVudC9zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQWdCL0QsTUFBTSxPQUFPLDBCQUEwQjtJQTZCckMsWUFFbUIsVUFBd0MsRUFDeEMsR0FBNEI7UUFENUIsZUFBVSxHQUFWLFVBQVUsQ0FBOEI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBeUI7SUFDM0MsQ0FBQztJQWhDTCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLFNBQVMsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLO1lBQzNDLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLFNBQVMsS0FBSyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxJQUFZLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBWSxLQUFLO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQVksU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUQsQ0FBQztJQVFELGtCQUFrQjtRQUNoQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNuRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOztvR0F2Q1UsMEJBQTBCLHVCQThCM0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDOytEQTlCN0MsMEJBQTBCOzs7O1FBVjFCLGtCQUFZOztrREFVWiwwQkFBMEI7Y0FkdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUscUJBQXFCO29CQUM1Qix3QkFBd0IsRUFBRSxZQUFZO29CQUN0Qyx5QkFBeUIsRUFBRSxhQUFhO2lCQUN6QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQStCSSxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEluamVjdCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL3NpZGVuYXYtY29udGFpbmVyL3NpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2UG9zaXRpb24gfSBmcm9tICcuLi8uLi9lbnVtcy9zaWRlbmF2LXBvc2l0aW9uLmVudW0nO1xuaW1wb3J0IHsgVW5pU2lkZW5hdk1vZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zaWRlbmF2LW1vZGUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1zaWRlbmF2LWNvbnRlbnQnLFxuICBleHBvcnRBczogJ3VuaVNpZGVuYXZDb250ZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS1zaWRlbmF2LWNvbnRlbnQnLFxuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogJ21hcmdpbkxlZnQnLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6ICdtYXJnaW5SaWdodCcsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlTaWRlbmF2Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBnZXQgbWFyZ2luTGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbiAmJlxuICAgICAgICAgICB0aGlzLl9wb3NpdGlvbiA9PT0gVW5pU2lkZW5hdlBvc2l0aW9uLlN0YXJ0ICYmXG4gICAgICAgICAgIHRoaXMuX21vZGUgPT09IFVuaVNpZGVuYXZNb2RlLlNpZGUgPyB0aGlzLl93aWR0aCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBtYXJnaW5SaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbiAmJlxuICAgICAgICAgICB0aGlzLl9wb3NpdGlvbiA9PT0gVW5pU2lkZW5hdlBvc2l0aW9uLkVuZCAmJlxuICAgICAgICAgICB0aGlzLl9tb2RlID09PSBVbmlTaWRlbmF2TW9kZS5TaWRlID8gdGhpcy5fd2lkdGggOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnNpZGVuYXYub3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9tb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIuc2lkZW5hdi5tb2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Bvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIuc2lkZW5hdi5wb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF93aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnNpZGVuYXYuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBVbmlTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50KSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb250YWluZXI6IFVuaVNpZGVuYXZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4ycyBlYXNlLWluLW91dCc7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbiJdfQ==