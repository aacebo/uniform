import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var UniSplitAreaComponent = /** @class */ (function () {
    function UniSplitAreaComponent(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._flex = '1 1 auto';
        this.flexChange = new EventEmitter();
    }
    Object.defineProperty(UniSplitAreaComponent.prototype, "flex", {
        get: function () { return this._flex; },
        set: function (v) {
            if (v !== this._flex) {
                this._flex = v;
                this._cdr.markForCheck();
                this.flexChange.emit(this._flex);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "index", {
        get: function () { return this._index; },
        set: function (v) {
            if (v !== this._index) {
                this._index = coerceNumberProperty(v);
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "clientWidth", {
        get: function () {
            return this._el.nativeElement.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitAreaComponent.prototype, "clientHeight", {
        get: function () {
            return this._el.nativeElement.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    UniSplitAreaComponent.ɵfac = function UniSplitAreaComponent_Factory(t) { return new (t || UniSplitAreaComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniSplitAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSplitAreaComponent, selectors: [["uni-split-area"]], hostAttrs: [1, "uni-split-area"], hostVars: 4, hostBindings: function UniSplitAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("order", ctx.index)("flex", ctx.flex);
        } }, inputs: { flex: "flex", index: "index" }, outputs: { flexChange: "flexChange" }, exportAs: ["uniSplitArea"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniSplitAreaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".uni-split-area{display:-webkit-box;display:flex;overflow:auto;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitAreaComponent;
}());
export { UniSplitAreaComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitAreaComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitArea',
                selector: 'uni-split-area',
                template: "<ng-content></ng-content>",
                styleUrls: ['./split-area.component.scss'],
                host: {
                    class: 'uni-split-area',
                    '[style.order]': 'index',
                    '[style.flex]': 'flex',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { flex: [{
            type: Input
        }], index: [{
            type: Input
        }], flexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NwbGl0L2NvbXBvbmVudHMvYXJlYS9zcGxpdC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTdEO0lBOENFLCtCQUNtQixJQUF1QixFQUN2QixHQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQXhCdkMsVUFBSyxHQUFHLFVBQVUsQ0FBQztRQVlqQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWE5QyxDQUFDO0lBbENMLHNCQUNJLHVDQUFJO2FBRFIsY0FDYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2pDLFVBQVMsQ0FBUztZQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDOzs7T0FQZ0M7SUFVakMsc0JBQ0ksd0NBQUs7YUFEVCxjQUNjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkMsVUFBVSxDQUFTO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDOzs7T0FOa0M7SUFXbkMsc0JBQUksOENBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0NBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTs4RkE5QlUscUJBQXFCOzhEQUFyQixxQkFBcUI7Ozs7WUFWckIsa0JBQVk7O2dDQWhCekI7Q0E4REMsQUFsREQsSUFrREM7U0FwQ1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FkakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsZUFBZSxFQUFFLE9BQU87b0JBQ3hCLGNBQWMsRUFBRSxNQUFNO2lCQUN2QjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQVdMLEtBQUs7O2tCQVVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBleHBvcnRBczogJ3VuaVNwbGl0QXJlYScsXG4gIHNlbGVjdG9yOiAndW5pLXNwbGl0LWFyZWEnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9zcGxpdC1hcmVhLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS1zcGxpdC1hcmVhJyxcbiAgICAnW3N0eWxlLm9yZGVyXSc6ICdpbmRleCcsXG4gICAgJ1tzdHlsZS5mbGV4XSc6ICdmbGV4JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNwbGl0QXJlYUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCBmbGV4KCkgeyByZXR1cm4gdGhpcy5fZmxleDsgfVxuICBzZXQgZmxleCh2OiBzdHJpbmcpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fZmxleCkge1xuICAgICAgdGhpcy5fZmxleCA9IHY7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLmZsZXhDaGFuZ2UuZW1pdCh0aGlzLl9mbGV4KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZmxleCA9ICcxIDEgYXV0byc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGluZGV4KCkgeyByZXR1cm4gdGhpcy5faW5kZXg7IH1cbiAgc2V0IGluZGV4KHY6IG51bWJlcikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9pbmRleCkge1xuICAgICAgdGhpcy5faW5kZXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXg/OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGZsZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBnZXQgY2xpZW50V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBnZXQgY2xpZW50SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICApIHsgfVxufVxuIl19