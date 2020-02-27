import { Component, ChangeDetectionStrategy, ViewEncapsulation, Output, HostListener, EventEmitter } from '@angular/core';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import * as i0 from "@angular/core";
export class UniSplitHandleComponent {
    constructor() {
        this.resize = new EventEmitter();
    }
    get resizing() {
        return this._x !== undefined;
    }
    get vertical() {
        return this.direction === UniSplitDirection.Vertical;
    }
    onMouseDown(e) {
        if (this.vertical) {
            this._x = e.clientX;
        }
        else {
            this._y = e.clientY;
        }
    }
    onMouseMove(e) {
        e.preventDefault();
        if (this._x !== undefined) {
            this.resize.emit(e.clientX - this._x);
            this._x = e.clientX;
        }
        else if (this._y !== undefined) {
            this.resize.emit(e.clientY - this._y);
            this._y = e.clientY;
        }
    }
    onMouseUp() {
        if (this._x !== undefined) {
            this._x = undefined;
        }
        if (this._y !== undefined) {
            this._y = undefined;
        }
    }
}
UniSplitHandleComponent.ɵfac = function UniSplitHandleComponent_Factory(t) { return new (t || UniSplitHandleComponent)(); };
UniSplitHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSplitHandleComponent, selectors: [["uni-split-handle"]], hostAttrs: [1, "uni-split-handle"], hostVars: 6, hostBindings: function UniSplitHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function UniSplitHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousemove", function UniSplitHandleComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseup", function UniSplitHandleComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp(); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵclassProp("uni-split-handle--resizing", ctx.resizing)("uni-split-handle--vertical", ctx.vertical)("uni-split-handle--horizontal", !ctx.vertical);
    } }, outputs: { resize: "resize" }, exportAs: ["uniSplitHandle"], decls: 0, vars: 0, template: function UniSplitHandleComponent_Template(rf, ctx) { }, styles: [".uni-split-handle{-webkit-box-ordinal-group:2;order:1;-webkit-transition:background-color .5s;transition:background-color .5s;background-color:var(--dark)}.uni-split-handle.uni-split-handle--resizing,.uni-split-handle:hover{background-color:var(--primary)}.uni-split-handle.uni-split-handle--vertical{width:10px;min-width:10px;cursor:col-resize}.uni-split-handle.uni-split-handle--horizontal{height:10px;min-height:10px;cursor:row-resize}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitHandleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitHandle',
                selector: 'uni-split-handle',
                template: ``,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3BsaXQvY29tcG9uZW50cy9oYW5kbGUvc3BsaXQtaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQWlCckUsTUFBTSxPQUFPLHVCQUF1QjtJQWZwQztRQWdCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQStDL0M7SUEzQ0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztJQUN2RCxDQUFDO0lBTUQsV0FBVyxDQUFDLENBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUdELFdBQVcsQ0FBQyxDQUFhO1FBQ3ZCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUdELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztTQUNyQjtJQUNILENBQUM7OzhGQS9DVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7Ozs7a0RBQXZCLHVCQUF1QjtjQWZuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLG9DQUFvQyxFQUFFLFVBQVU7b0JBQ2hELG9DQUFvQyxFQUFFLFVBQVU7b0JBQ2hELHNDQUFzQyxFQUFFLFdBQVc7aUJBQ3BEO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsTUFBTTs7a0JBZU4sWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQVNwQyxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFhN0MsWUFBWTttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbmlTcGxpdERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2VudW1zL3NwbGl0LWRpcmVjdGlvbi5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIGV4cG9ydEFzOiAndW5pU3BsaXRIYW5kbGUnLFxuICBzZWxlY3RvcjogJ3VuaS1zcGxpdC1oYW5kbGUnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LWhhbmRsZS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktc3BsaXQtaGFuZGxlJyxcbiAgICAnW2NsYXNzLnVuaS1zcGxpdC1oYW5kbGUtLXJlc2l6aW5nXSc6ICdyZXNpemluZycsXG4gICAgJ1tjbGFzcy51bmktc3BsaXQtaGFuZGxlLS12ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICAgICdbY2xhc3MudW5pLXNwbGl0LWhhbmRsZS0taG9yaXpvbnRhbF0nOiAnIXZlcnRpY2FsJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNwbGl0SGFuZGxlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGRpcmVjdGlvbj86IFVuaVNwbGl0RGlyZWN0aW9uO1xuXG4gIGdldCByZXNpemluZygpIHtcbiAgICByZXR1cm4gdGhpcy5feCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gVW5pU3BsaXREaXJlY3Rpb24uVmVydGljYWw7XG4gIH1cblxuICBwcml2YXRlIF94PzogbnVtYmVyO1xuICBwcml2YXRlIF95PzogbnVtYmVyO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5feSA9IGUuY2xpZW50WTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICBvbk1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMuX3ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZXNpemUuZW1pdChlLmNsaWVudFggLSB0aGlzLl94KTtcbiAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG4gICAgfSBlbHNlIGlmICh0aGlzLl95ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVzaXplLmVtaXQoZS5jbGllbnRZIC0gdGhpcy5feSk7XG4gICAgICB0aGlzLl95ID0gZS5jbGllbnRZO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnKVxuICBvbk1vdXNlVXAoKSB7XG4gICAgaWYgKHRoaXMuX3ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5feCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5feSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl95ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19