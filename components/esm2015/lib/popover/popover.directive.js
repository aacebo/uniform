import { Directive, Input, ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { getUniPosition, UniPosition } from '../core/position';
import { UniPopoverComponent } from './popover.component';
import { UniPopoverTrigger } from './popover-trigger.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class UniPopoverDirective {
    constructor(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.trigger = UniPopoverTrigger.Click;
        this.panelClass = 'uni-popover-panel';
        this.hasBackdrop = true;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
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
        this._overlayRef = this._overlay.create({
            positionStrategy: this._positionStrategy,
            panelClass: this.panelClass,
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass,
        });
        this._overlayRef.backdropClick().subscribe(() => {
            this._hide();
        });
    }
    onMouseEnter() {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._show();
        }
    }
    onMouseLeave() {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._hide();
        }
    }
    onClick() {
        if (this.trigger === UniPopoverTrigger.Click) {
            if (this._overlayRef.hasAttached()) {
                this._hide();
            }
            else {
                this._show();
            }
        }
    }
    _show() {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            const portal = new ComponentPortal(UniPopoverComponent);
            const ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    }
    _hide() {
        this._overlayRef.detach();
    }
}
UniPopoverDirective.ɵfac = function UniPopoverDirective_Factory(t) { return new (t || UniPopoverDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniPopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniPopoverDirective, selectors: [["", "uniPopover", ""]], hostBindings: function UniPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function UniPopoverDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniPopoverDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function UniPopoverDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } }, inputs: { content: ["uniPopover", "content"], disabled: ["uniPopoverDisabled", "disabled"], position: ["uniPopoverPosition", "position"], trigger: ["uniPopoverTrigger", "trigger"], panelClass: ["uniPopoverPanelClass", "panelClass"], hasBackdrop: ["uniPopoverHasBackdrop", "hasBackdrop"], backdropClass: ["uniPopoverBackdropClass", "backdropClass"], origin: ["uniPopoverOrigin", "origin"] }, exportAs: ["uniPopover"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[uniPopover]',
                exportAs: 'uniPopover',
                host: {
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()',
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }]; }, { content: [{
            type: Input,
            args: ['uniPopover']
        }], disabled: [{
            type: Input,
            args: ['uniPopoverDisabled']
        }], position: [{
            type: Input,
            args: ['uniPopoverPosition']
        }], trigger: [{
            type: Input,
            args: ['uniPopoverTrigger']
        }], panelClass: [{
            type: Input,
            args: ['uniPopoverPanelClass']
        }], hasBackdrop: [{
            type: Input,
            args: ['uniPopoverHasBackdrop']
        }], backdropClass: [{
            type: Input,
            args: ['uniPopoverBackdropClass']
        }], origin: [{
            type: Input,
            args: ['uniPopoverOrigin']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBVzNELE1BQU0sT0FBTyxtQkFBbUI7SUEyQjlCLFlBQ21CLFFBQWlCLEVBQ2pCLEdBQWU7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUEzQkwsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLGtDQUFrQyxDQUFDO0lBdUJsRixDQUFDO0lBbEJKLElBQVksU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLEdBQUc7WUFDakMsSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFZLGlCQUFpQjtRQUMzQixPQUFPLElBQUksQ0FB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QUN6QixLQUFLO21CQUFDLHNCQUFzQjs7a0JBQzVCLEtBQUs7bUJBQUMsdUJBQXVCOztrQkFDN0IsS0FBSzttQkFBQyx5QkFBeUI7O2tCQUMvQixLQUFLO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgZ2V0VW5pUG9zaXRpb24sIFVuaVBvc2l0aW9uIH0gZnJvbSAnLi4vY29yZS9wb3NpdGlvbic7XG5pbXBvcnQgeyBVbmlQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlQb3BvdmVyVHJpZ2dlciB9IGZyb20gJy4vcG9wb3Zlci10cmlnZ2VyLmVudW0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdW5pUG9wb3Zlcl0nLFxuICBleHBvcnRBczogJ3VuaVBvcG92ZXInLFxuICBob3N0OiB7XG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKScsXG4gICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndW5pUG9wb3ZlcicpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgndW5pUG9wb3ZlckRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCd1bmlQb3BvdmVyUG9zaXRpb24nKSBwb3NpdGlvbiA9IFVuaVBvc2l0aW9uLlRvcDtcbiAgQElucHV0KCd1bmlQb3BvdmVyVHJpZ2dlcicpIHRyaWdnZXIgPSBVbmlQb3BvdmVyVHJpZ2dlci5DbGljaztcbiAgQElucHV0KCd1bmlQb3BvdmVyUGFuZWxDbGFzcycpIHBhbmVsQ2xhc3MgPSAndW5pLXBvcG92ZXItcGFuZWwnO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJIYXNCYWNrZHJvcCcpIGhhc0JhY2tkcm9wID0gdHJ1ZTtcbiAgQElucHV0KCd1bmlQb3BvdmVyQmFja2Ryb3BDbGFzcycpIGJhY2tkcm9wQ2xhc3MgPSAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJPcmlnaW4nKSBvcmlnaW46IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgcHJpdmF0ZSBnZXQgX3ZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBVbmlQb3NpdGlvbi5Ub3AgfHxcbiAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gVW5pUG9zaXRpb24uQm90dG9tO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Bvc2l0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlcbiAgICAgICAgICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLm9yaWdpbiB8fCB0aGlzLl9lbClcbiAgICAgICAgICAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKHRydWUpXG4gICAgICAgICAgICAgICAud2l0aFB1c2godGhpcy5fdmVydGljYWwgPyB0cnVlIDogZmFsc2UpXG4gICAgICAgICAgICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbZ2V0VW5pUG9zaXRpb24odGhpcy5wb3NpdGlvbildKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWYsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHBhbmVsQ2xhc3M6IHRoaXMucGFuZWxDbGFzcyxcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLmhhc0JhY2tkcm9wLFxuICAgICAgYmFja2Ryb3BDbGFzczogdGhpcy5iYWNrZHJvcENsYXNzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSBVbmlQb3BvdmVyVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSBVbmlQb3BvdmVyVHJpZ2dlci5Ib3Zlcikge1xuICAgICAgdGhpcy5faGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gVW5pUG9wb3ZlclRyaWdnZXIuQ2xpY2spIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nob3coKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLl9wb3NpdGlvblN0cmF0ZWd5KTtcbiAgICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoVW5pUG9wb3ZlckNvbXBvbmVudCk7XG4gICAgICBjb25zdCByZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xuICAgICAgcmVmLmluc3RhbmNlLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICByZWYuaW5zdGFuY2UucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgfVxufVxuIl19