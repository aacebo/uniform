import { Component, ChangeDetectionStrategy, ViewEncapsulation, Output, HostListener, EventEmitter } from '@angular/core';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import * as i0 from "@angular/core";
var UniSplitHandleComponent = /** @class */ (function () {
    function UniSplitHandleComponent() {
        this.resize = new EventEmitter();
    }
    Object.defineProperty(UniSplitHandleComponent.prototype, "resizing", {
        get: function () {
            return this._x !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitHandleComponent.prototype, "vertical", {
        get: function () {
            return this.direction === UniSplitDirection.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    UniSplitHandleComponent.prototype.onMouseDown = function (e) {
        if (this.vertical) {
            this._x = e.clientX;
        }
        else {
            this._y = e.clientY;
        }
    };
    UniSplitHandleComponent.prototype.onMouseMove = function (e) {
        e.preventDefault();
        if (this._x !== undefined) {
            this.resize.emit(e.clientX - this._x);
            this._x = e.clientX;
        }
        else if (this._y !== undefined) {
            this.resize.emit(e.clientY - this._y);
            this._y = e.clientY;
        }
    };
    UniSplitHandleComponent.prototype.onMouseUp = function () {
        if (this._x !== undefined) {
            this._x = undefined;
        }
        if (this._y !== undefined) {
            this._y = undefined;
        }
    };
    UniSplitHandleComponent.ɵfac = function UniSplitHandleComponent_Factory(t) { return new (t || UniSplitHandleComponent)(); };
    UniSplitHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSplitHandleComponent, selectors: [["uni-split-handle"]], hostAttrs: [1, "uni-split-handle"], hostVars: 6, hostBindings: function UniSplitHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function UniSplitHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousemove", function UniSplitHandleComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseup", function UniSplitHandleComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp(); }, false, i0.ɵɵresolveDocument);
        } if (rf & 2) {
            i0.ɵɵclassProp("uni-split-handle--resizing", ctx.resizing)("uni-split-handle--vertical", ctx.vertical)("uni-split-handle--horizontal", !ctx.vertical);
        } }, outputs: { resize: "resize" }, exportAs: ["uniSplitHandle"], decls: 0, vars: 0, template: function UniSplitHandleComponent_Template(rf, ctx) { }, styles: [".uni-split-handle{-webkit-box-ordinal-group:2;order:1;-webkit-transition:background-color .5s;transition:background-color .5s;background-color:var(--dark)}.uni-split-handle.uni-split-handle--resizing,.uni-split-handle:hover{background-color:var(--primary)}.uni-split-handle.uni-split-handle--vertical{width:10px;min-width:10px;cursor:col-resize}.uni-split-handle.uni-split-handle--horizontal{height:10px;min-height:10px;cursor:row-resize}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitHandleComponent;
}());
export { UniSplitHandleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitHandleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitHandle',
                selector: 'uni-split-handle',
                template: "",
                styleUrls: ['./split-handle.component.scss'],
                host: {
                    class: 'uni-split-handle',
                    '[class.uni-split-handle--resizing]': 'resizing',
                    '[class.uni-split-handle--vertical]': 'vertical',
                    '[class.uni-split-handle--horizontal]': '!vertical',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { resize: [{
            type: Output
        }], onMouseDown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onMouseMove: [{
            type: HostListener,
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: HostListener,
            args: ['document:mouseup']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3BsaXQvY29tcG9uZW50cy9oYW5kbGUvc3BsaXQtaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUVyRTtJQUFBO1FBZ0JZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBK0MvQztJQTNDQyxzQkFBSSw2Q0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBTUQsNkNBQVcsR0FEWCxVQUNZLENBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUdELDZDQUFXLEdBRFgsVUFDWSxDQUFhO1FBQ3ZCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUdELDJDQUFTLEdBRFQ7UUFFRSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztTQUNyQjtJQUNILENBQUM7a0dBL0NVLHVCQUF1QjtnRUFBdkIsdUJBQXVCOzs7OztrQ0FuQnBDO0NBbUVDLEFBL0RELElBK0RDO1NBaERZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBZm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsb0NBQW9DLEVBQUUsVUFBVTtvQkFDaEQsb0NBQW9DLEVBQUUsVUFBVTtvQkFDaEQsc0NBQXNDLEVBQUUsV0FBVztpQkFDcEQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxNQUFNOztrQkFlTixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBU3BDLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQWE3QyxZQUFZO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaVNwbGl0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vZW51bXMvc3BsaXQtZGlyZWN0aW9uLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgZXhwb3J0QXM6ICd1bmlTcGxpdEhhbmRsZScsXG4gIHNlbGVjdG9yOiAndW5pLXNwbGl0LWhhbmRsZScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVVcmxzOiBbJy4vc3BsaXQtaGFuZGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS1zcGxpdC1oYW5kbGUnLFxuICAgICdbY2xhc3MudW5pLXNwbGl0LWhhbmRsZS0tcmVzaXppbmddJzogJ3Jlc2l6aW5nJyxcbiAgICAnW2NsYXNzLnVuaS1zcGxpdC1oYW5kbGUtLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXG4gICAgJ1tjbGFzcy51bmktc3BsaXQtaGFuZGxlLS1ob3Jpem9udGFsXSc6ICchdmVydGljYWwnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU3BsaXRIYW5kbGVDb21wb25lbnQge1xuICBAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgZGlyZWN0aW9uPzogVW5pU3BsaXREaXJlY3Rpb247XG5cbiAgZ2V0IHJlc2l6aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl94ICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBVbmlTcGxpdERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgfVxuXG4gIHByaXZhdGUgX3g/OiBudW1iZXI7XG4gIHByaXZhdGUgX3k/OiBudW1iZXI7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLl94ID0gZS5jbGllbnRYO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl95ID0gZS5jbGllbnRZO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VNb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5feCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlc2l6ZS5lbWl0KGUuY2xpZW50WCAtIHRoaXMuX3gpO1xuICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZXNpemUuZW1pdChlLmNsaWVudFkgLSB0aGlzLl95KTtcbiAgICAgIHRoaXMuX3kgPSBlLmNsaWVudFk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcpXG4gIG9uTW91c2VVcCgpIHtcbiAgICBpZiAodGhpcy5feCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl94ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl95ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=