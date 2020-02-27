import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { UniResizeObserverService } from './resize-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "./resize-observer.service";
export class UniResizeObserverDirective {
    constructor(_el, _resizeObserverService) {
        this._el = _el;
        this._resizeObserverService = _resizeObserverService;
        this.resize = new EventEmitter();
    }
    ngOnInit() {
        this._observer = this._resizeObserverService.observe(this._el.nativeElement, e => {
            this.resize.emit(e);
        });
    }
    ngOnDestroy() {
        this._observer.unobserve(this._el.nativeElement);
    }
}
UniResizeObserverDirective.ɵfac = function UniResizeObserverDirective_Factory(t) { return new (t || UniResizeObserverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UniResizeObserverService)); };
UniResizeObserverDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniResizeObserverDirective, selectors: [["", "uniResizeObserver", ""]], outputs: { resize: "uniResizeObserver" }, exportAs: ["uniResizeObserver"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVzaXplLW9ic2VydmVyL3Jlc2l6ZS1vYnNlcnZlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQU1yRSxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQ21CLEdBQTRCLEVBQzVCLHNCQUFnRDtRQURoRCxRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBTnRDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztJQU9oRixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOztvR0FsQlUsMEJBQTBCOytEQUExQiwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7a0JBRUUsTUFBTTttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IFVuaVJlc2l6ZU9ic2VydmVyU2VydmljZSB9IGZyb20gJy4vcmVzaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgZXhwb3J0QXM6ICd1bmlSZXNpemVPYnNlcnZlcicsXG4gIHNlbGVjdG9yOiAnW3VuaVJlc2l6ZU9ic2VydmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVJlc2l6ZU9ic2VydmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCd1bmlSZXNpemVPYnNlcnZlcicpIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFydGlhbDxET01SZWN0UmVhZE9ubHk+PigpO1xuXG4gIHByaXZhdGUgX29ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVzaXplT2JzZXJ2ZXJTZXJ2aWNlOiBVbmlSZXNpemVPYnNlcnZlclNlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX3Jlc2l6ZU9ic2VydmVyU2VydmljZS5vYnNlcnZlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGUgPT4ge1xuICAgICAgdGhpcy5yZXNpemUuZW1pdChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl19