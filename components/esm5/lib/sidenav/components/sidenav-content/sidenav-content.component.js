import { Component, ChangeDetectionStrategy, Inject, forwardRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';
import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "../sidenav-container/sidenav-container.component";
var _c0 = ["*"];
var UniSidenavContentComponent = /** @class */ (function () {
    function UniSidenavContentComponent(_container, _el) {
        this._container = _container;
        this._el = _el;
    }
    Object.defineProperty(UniSidenavContentComponent.prototype, "marginLeft", {
        get: function () {
            return this._open &&
                this._position === UniSidenavPosition.Start &&
                this._mode === UniSidenavMode.Side ? this._width : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "marginRight", {
        get: function () {
            return this._open &&
                this._position === UniSidenavPosition.End &&
                this._mode === UniSidenavMode.Side ? this._width : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_open", {
        get: function () {
            return this._container.sidenav.open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_mode", {
        get: function () {
            return this._container.sidenav.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_position", {
        get: function () {
            return this._container.sidenav.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContentComponent.prototype, "_width", {
        get: function () {
            return this._container.sidenav.el.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    UniSidenavContentComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
        }, 1000);
    };
    UniSidenavContentComponent.ɵfac = function UniSidenavContentComponent_Factory(t) { return new (t || UniSidenavContentComponent)(i0.ɵɵdirectiveInject(forwardRef(function () { return UniSidenavContainerComponent; })), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniSidenavContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSidenavContentComponent, selectors: [["uni-sidenav-content"]], hostAttrs: [1, "uni-sidenav-content"], hostVars: 4, hostBindings: function UniSidenavContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("margin-left", ctx.marginLeft, "px")("margin-right", ctx.marginRight, "px");
        } }, exportAs: ["uniSidenavContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniSidenavContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".uni-sidenav-content{display:block;position:relative;overflow:auto;z-index:1;height:100%}"], encapsulation: 2, changeDetection: 0 });
    return UniSidenavContentComponent;
}());
export { UniSidenavContentComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSidenavContentComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav-content',
                exportAs: 'uniSidenavContent',
                template: "<ng-content></ng-content>",
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
                args: [forwardRef(function () { return UniSidenavContainerComponent; })]
            }] }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2lkZW5hdi9jb21wb25lbnRzL3NpZGVuYXYtY29udGVudC9zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUUvRDtJQTJDRSxvQ0FFbUIsVUFBd0MsRUFDeEMsR0FBNEI7UUFENUIsZUFBVSxHQUFWLFVBQVUsQ0FBOEI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBeUI7SUFDM0MsQ0FBQztJQWhDTCxzQkFBSSxrREFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSztnQkFDVixJQUFJLENBQUMsU0FBUyxLQUFLLGtCQUFrQixDQUFDLEtBQUs7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbURBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUs7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsS0FBSyxrQkFBa0IsQ0FBQyxHQUFHO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDZDQUFLO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSw2Q0FBSzthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksaURBQVM7YUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDhDQUFNO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQVFELHVEQUFrQixHQUFsQjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNuRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO3dHQXZDVSwwQkFBMEIsdUJBOEIzQixVQUFVLENBQUMsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QixDQUFDO21FQTlCN0MsMEJBQTBCOzs7O1lBVjFCLGtCQUFZOztxQ0FWekI7Q0E0REMsQUF0REQsSUFzREM7U0F4Q1ksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FkdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUscUJBQXFCO29CQUM1Qix3QkFBd0IsRUFBRSxZQUFZO29CQUN0Qyx5QkFBeUIsRUFBRSxhQUFhO2lCQUN6QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQStCSSxNQUFNO3VCQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbmplY3QsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaVNpZGVuYXZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlbmF2LWNvbnRhaW5lci9zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pU2lkZW5hdlBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vZW51bXMvc2lkZW5hdi1wb3NpdGlvbi5lbnVtJztcbmltcG9ydCB7IFVuaVNpZGVuYXZNb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2lkZW5hdi1tb2RlLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktc2lkZW5hdi1jb250ZW50JyxcbiAgZXhwb3J0QXM6ICd1bmlTaWRlbmF2Q29udGVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL3NpZGVuYXYtY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktc2lkZW5hdi1jb250ZW50JyxcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdtYXJnaW5MZWZ0JyxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiAnbWFyZ2luUmlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2lkZW5hdkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgZ2V0IG1hcmdpbkxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4gJiZcbiAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPT09IFVuaVNpZGVuYXZQb3NpdGlvbi5TdGFydCAmJlxuICAgICAgICAgICB0aGlzLl9tb2RlID09PSBVbmlTaWRlbmF2TW9kZS5TaWRlID8gdGhpcy5fd2lkdGggOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgbWFyZ2luUmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4gJiZcbiAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPT09IFVuaVNpZGVuYXZQb3NpdGlvbi5FbmQgJiZcbiAgICAgICAgICAgdGhpcy5fbW9kZSA9PT0gVW5pU2lkZW5hdk1vZGUuU2lkZSA/IHRoaXMuX3dpZHRoIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX29wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5zaWRlbmF2Lm9wZW47XG4gIH1cblxuICBwcml2YXRlIGdldCBfbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnNpZGVuYXYubW9kZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9wb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnNpZGVuYXYucG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIGdldCBfd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5zaWRlbmF2LmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVW5pU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCkpXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29udGFpbmVyOiBVbmlTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=