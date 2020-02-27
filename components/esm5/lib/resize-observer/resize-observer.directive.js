import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { UniResizeObserverService } from './resize-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "./resize-observer.service";
var UniResizeObserverDirective = /** @class */ (function () {
    function UniResizeObserverDirective(_el, _resizeObserverService) {
        this._el = _el;
        this._resizeObserverService = _resizeObserverService;
        this.resize = new EventEmitter();
    }
    UniResizeObserverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._observer = this._resizeObserverService.observe(this._el.nativeElement, function (e) {
            _this.resize.emit(e);
        });
    };
    UniResizeObserverDirective.prototype.ngOnDestroy = function () {
        this._observer.unobserve(this._el.nativeElement);
    };
    UniResizeObserverDirective.ɵfac = function UniResizeObserverDirective_Factory(t) { return new (t || UniResizeObserverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UniResizeObserverService)); };
    UniResizeObserverDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniResizeObserverDirective, selectors: [["", "uniResizeObserver", ""]], outputs: { resize: "uniResizeObserver" }, exportAs: ["uniResizeObserver"] });
    return UniResizeObserverDirective;
}());
export { UniResizeObserverDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniResizeObserverDirective, [{
        type: Directive,
        args: [{
                exportAs: 'uniResizeObserver',
                selector: '[uniResizeObserver]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.UniResizeObserverService }]; }, { resize: [{
            type: Output,
            args: ['uniResizeObserver']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVzaXplLW9ic2VydmVyL3Jlc2l6ZS1vYnNlcnZlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUVyRTtJQVNFLG9DQUNtQixHQUE0QixFQUM1QixzQkFBZ0Q7UUFEaEQsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQU50QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7SUFPaEYsQ0FBQztJQUVKLDZDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUM7WUFDNUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzt3R0FsQlUsMEJBQTBCO21FQUExQiwwQkFBMEI7cUNBVHZDO0NBNEJDLEFBdkJELElBdUJDO1NBbkJZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOztrQkFFRSxNQUFNO21CQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgVW5pUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBleHBvcnRBczogJ3VuaVJlc2l6ZU9ic2VydmVyJyxcbiAgc2VsZWN0b3I6ICdbdW5pUmVzaXplT2JzZXJ2ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVW5pUmVzaXplT2JzZXJ2ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoJ3VuaVJlc2l6ZU9ic2VydmVyJykgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxQYXJ0aWFsPERPTVJlY3RSZWFkT25seT4+KCk7XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZXNpemVPYnNlcnZlclNlcnZpY2U6IFVuaVJlc2l6ZU9ic2VydmVyU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fcmVzaXplT2JzZXJ2ZXJTZXJ2aWNlLm9ic2VydmUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZS5lbWl0KGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=