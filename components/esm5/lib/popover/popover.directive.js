import { Directive, Input, ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { getUniPosition, UniPosition } from '../core/position';
import { UniPopoverComponent } from './popover.component';
import { UniPopoverTrigger } from './popover-trigger.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var UniPopoverDirective = /** @class */ (function () {
    function UniPopoverDirective(_overlay, _el) {
        this._overlay = _overlay;
        this._el = _el;
        this.disabled = false;
        this.position = UniPosition.Top;
        this.trigger = UniPopoverTrigger.Click;
        this.panelClass = 'uni-popover-panel';
        this.hasBackdrop = true;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
    }
    Object.defineProperty(UniPopoverDirective.prototype, "_vertical", {
        get: function () {
            return this.position === UniPosition.Top ||
                this.position === UniPosition.Bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniPopoverDirective.prototype, "_positionStrategy", {
        get: function () {
            return this._overlay
                .position()
                .flexibleConnectedTo(this.origin || this._el)
                .withFlexibleDimensions(true)
                .withPush(this._vertical ? true : false)
                .withViewportMargin(8)
                .withPositions([getUniPosition(this.position)]);
        },
        enumerable: true,
        configurable: true
    });
    UniPopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._overlayRef = this._overlay.create({
            positionStrategy: this._positionStrategy,
            panelClass: this.panelClass,
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass,
        });
        this._overlayRef.backdropClick().subscribe(function () {
            _this._hide();
        });
    };
    UniPopoverDirective.prototype.onMouseEnter = function () {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._show();
        }
    };
    UniPopoverDirective.prototype.onMouseLeave = function () {
        if (this.trigger === UniPopoverTrigger.Hover) {
            this._hide();
        }
    };
    UniPopoverDirective.prototype.onClick = function () {
        if (this.trigger === UniPopoverTrigger.Click) {
            if (this._overlayRef.hasAttached()) {
                this._hide();
            }
            else {
                this._show();
            }
        }
    };
    UniPopoverDirective.prototype._show = function () {
        if (!this.disabled && !this._overlayRef.hasAttached()) {
            this._overlayRef.updatePositionStrategy(this._positionStrategy);
            var portal = new ComponentPortal(UniPopoverComponent);
            var ref = this._overlayRef.attach(portal);
            ref.instance.content = this.content;
            ref.instance.position = this.position;
        }
    };
    UniPopoverDirective.prototype._hide = function () {
        this._overlayRef.detach();
    };
    UniPopoverDirective.ɵfac = function UniPopoverDirective_Factory(t) { return new (t || UniPopoverDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniPopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniPopoverDirective, selectors: [["", "uniPopover", ""]], hostBindings: function UniPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function UniPopoverDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function UniPopoverDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function UniPopoverDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        } }, inputs: { content: ["uniPopover", "content"], disabled: ["uniPopoverDisabled", "disabled"], position: ["uniPopoverPosition", "position"], trigger: ["uniPopoverTrigger", "trigger"], panelClass: ["uniPopoverPanelClass", "panelClass"], hasBackdrop: ["uniPopoverHasBackdrop", "hasBackdrop"], backdropClass: ["uniPopoverBackdropClass", "backdropClass"], origin: ["uniPopoverOrigin", "origin"] }, exportAs: ["uniPopover"] });
    return UniPopoverDirective;
}());
export { UniPopoverDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRTNEO0lBb0NFLDZCQUNtQixRQUFpQixFQUNqQixHQUFlO1FBRGYsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBM0JMLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMvQixlQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxrQ0FBa0MsQ0FBQztJQXVCbEYsQ0FBQztJQWxCSixzQkFBWSwwQ0FBUzthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDakMsSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksa0RBQWlCO2FBQTdCO1lBQ0UsT0FBTyxJQUFJ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bUJBQUMsWUFBWTs7a0JBQ2xCLEtBQUs7bUJBQUMsb0JBQW9COztrQkFDMUIsS0FBSzttQkFBQyxvQkFBb0I7O2tCQUMxQixLQUFLO21CQUFDLG1CQUFtQjs7a0JBQ3pCLEtBQUs7bUJBQUMsc0JBQXNCOztrQkFDNUIsS0FBSzttQkFBQyx1QkFBdUI7O2tCQUM3QixLQUFLO21CQUFDLHlCQUF5Qjs7a0JBQy9CLEtBQUs7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBnZXRVbmlQb3NpdGlvbiwgVW5pUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3Bvc2l0aW9uJztcbmltcG9ydCB7IFVuaVBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVBvcG92ZXJUcmlnZ2VyIH0gZnJvbSAnLi9wb3BvdmVyLXRyaWdnZXIuZW51bSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1bmlQb3BvdmVyXScsXG4gIGV4cG9ydEFzOiAndW5pUG9wb3ZlcicsXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJyxcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBVbmlQb3BvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd1bmlQb3BvdmVyJykgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCd1bmlQb3BvdmVyRGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJQb3NpdGlvbicpIHBvc2l0aW9uID0gVW5pUG9zaXRpb24uVG9wO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJUcmlnZ2VyJykgdHJpZ2dlciA9IFVuaVBvcG92ZXJUcmlnZ2VyLkNsaWNrO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJQYW5lbENsYXNzJykgcGFuZWxDbGFzcyA9ICd1bmktcG9wb3Zlci1wYW5lbCc7XG4gIEBJbnB1dCgndW5pUG9wb3Zlckhhc0JhY2tkcm9wJykgaGFzQmFja2Ryb3AgPSB0cnVlO1xuICBASW5wdXQoJ3VuaVBvcG92ZXJCYWNrZHJvcENsYXNzJykgYmFja2Ryb3BDbGFzcyA9ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCc7XG4gIEBJbnB1dCgndW5pUG9wb3Zlck9yaWdpbicpIG9yaWdpbjogSFRNTEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBwcml2YXRlIGdldCBfdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IFVuaVBvc2l0aW9uLlRvcCB8fFxuICAgICAgICAgICB0aGlzLnBvc2l0aW9uID09PSBVbmlQb3NpdGlvbi5Cb3R0b207XG4gIH1cblxuICBwcml2YXRlIGdldCBfcG9zaXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVxuICAgICAgICAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMub3JpZ2luIHx8IHRoaXMuX2VsKVxuICAgICAgICAgICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModHJ1ZSlcbiAgICAgICAgICAgICAgIC53aXRoUHVzaCh0aGlzLl92ZXJ0aWNhbCA/IHRydWUgOiBmYWxzZSlcbiAgICAgICAgICAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcbiAgICAgICAgICAgICAgIC53aXRoUG9zaXRpb25zKFtnZXRVbmlQb3NpdGlvbih0aGlzLnBvc2l0aW9uKV0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9wb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgcGFuZWxDbGFzczogdGhpcy5wYW5lbENsYXNzLFxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuaGFzQmFja2Ryb3AsXG4gICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLmJhY2tkcm9wQ2xhc3MsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09IFVuaVBvcG92ZXJUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09IFVuaVBvcG92ZXJUcmlnZ2VyLkhvdmVyKSB7XG4gICAgICB0aGlzLl9oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSBVbmlQb3BvdmVyVHJpZ2dlci5DbGljaykge1xuICAgICAgaWYgKHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uU3RyYXRlZ3kpO1xuICAgICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChVbmlQb3BvdmVyQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XG4gICAgICByZWYuaW5zdGFuY2UuY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgIHJlZi5pbnN0YW5jZS5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZSgpIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICB9XG59XG4iXX0=