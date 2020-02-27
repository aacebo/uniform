import { Directive, Input, ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { UniPosition, getUniPosition } from '../core/position';
import { UniTooltipComponent } from './tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class UniTooltipDirective {
    constructor(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.panelClass = 'uni-tooltip-panel';
    }
    get _vertical() {
        return this.position === UniPosition.Top ||
            this.position === UniPosition.Bottom;
    }
    get _positionStrategy() {
        return this._overlay
            .position()
            .flexibleConnectedTo(this.origin || this._el)
            .withFlexibleDimensions(true)
            .withPush(this._vertical ? true : false)
            .withViewportMargin(8)
            .withPositions([getUniPosition(this.position)]);
    }
    ngOnInit() {
        const positionStrategy = this._positionStrategy;
        this._overlayRef = this._overlay.create({
            positionStrategy,
            panelClass: this.panelClass,
        });
    }
    onMouseEnter() {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            const portal = new ComponentPortal(UniTooltipComponent);
            const ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    }
    onMouseLeave() {
        this._overlayRef.detach();
    }
}
UniTooltipDirective.ɵfac = function UniTooltipDirective_Factory(t) { return new (t || UniTooltipDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniTooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniTooltipDirective, selectors: [["", "uniTooltip", ""]], hostBindings: function UniTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function UniTooltipDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniTooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
    } }, inputs: { content: ["uniTooltip", "content"], disabled: ["uniTooltipDisabled", "disabled"], position: ["uniTooltipPosition", "position"], panelClass: ["uniTooltipPanelClass", "panelClass"], origin: ["uniTooltipOrigin", "origin"] }, exportAs: ["uniTooltip"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[uniTooltip]',
                exportAs: 'uniTooltip',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                },
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }]; }, { content: [{
            type: Input,
            args: ['uniTooltip']
        }], disabled: [{
            type: Input,
            args: ['uniTooltipDisabled']
        }], position: [{
            type: Input,
            args: ['uniTooltipPosition']
        }], panelClass: [{
            type: Input,
            args: ['uniTooltipPanelClass']
        }], origin: [{
            type: Input,
            args: ['uniTooltipOrigin']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBVTFELE1BQU0sT0FBTyxtQkFBbUI7SUF3QjlCLFlBQ21CLFFBQWlCLEVBQ2pCLEdBQWU7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUF4QkwsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN6QixlQUFVLEdBQUcsbUJBQW1CLENBQUM7SUF1QjdELENBQUM7SUFsQkosSUFBWSxTQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsR0FBRztZQUNqQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQVksaUJBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDUixRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDNUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN2QyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDckIsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQU9ELFFBQVE7UUFDTixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3RDLGdCQUFnQjtZQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDOztzRkFqRFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7OztrREFBbkIsbUJBQW1CO2NBUi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsZ0JBQWdCO29CQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO2lCQUNqQzthQUNGOztrQkFFRSxLQUFLO21CQUFDLFlBQVk7O2tCQUNsQixLQUFLO21CQUFDLG9CQUFvQjs7a0JBQzFCLEtBQUs7bUJBQUMsb0JBQW9COztrQkFDMUIsS0FBSzttQkFBQyxzQkFBc0I7O2tCQUM1QixLQUFLO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlSZWYsIE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVW5pUG9zaXRpb24sIGdldFVuaVBvc2l0aW9uIH0gZnJvbSAnLi4vY29yZS9wb3NpdGlvbic7XG5pbXBvcnQgeyBVbmlUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1bmlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAndW5pVG9vbHRpcCcsXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndW5pVG9vbHRpcCcpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgndW5pVG9vbHRpcERpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCd1bmlUb29sdGlwUG9zaXRpb24nKSBwb3NpdGlvbiA9IFVuaVBvc2l0aW9uLlRvcDtcbiAgQElucHV0KCd1bmlUb29sdGlwUGFuZWxDbGFzcycpIHBhbmVsQ2xhc3MgPSAndW5pLXRvb2x0aXAtcGFuZWwnO1xuICBASW5wdXQoJ3VuaVRvb2x0aXBPcmlnaW4nKSBvcmlnaW46IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgcHJpdmF0ZSBnZXQgX3ZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBVbmlQb3NpdGlvbi5Ub3AgfHxcbiAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gVW5pUG9zaXRpb24uQm90dG9tO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Bvc2l0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlcbiAgICAgICAgICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLm9yaWdpbiB8fCB0aGlzLl9lbClcbiAgICAgICAgICAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKHRydWUpXG4gICAgICAgICAgICAgICAud2l0aFB1c2godGhpcy5fdmVydGljYWwgPyB0cnVlIDogZmFsc2UpXG4gICAgICAgICAgICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbZ2V0VW5pUG9zaXRpb24odGhpcy5wb3NpdGlvbildKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWYsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fcG9zaXRpb25TdHJhdGVneTtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHBhbmVsQ2xhc3M6IHRoaXMucGFuZWxDbGFzcyxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kpO1xuICAgICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChVbmlUb29sdGlwQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XG4gICAgICByZWYuaW5zdGFuY2UuY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgIHJlZi5pbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gIH1cbn1cbiJdfQ==