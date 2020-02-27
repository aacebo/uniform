import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import * as i0 from "@angular/core";
export class UniResizeObserverService {
    observe(el, cb, throttle = 100) {
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (this._timer) {
                    clearTimeout(this._timer);
                    this._timer = undefined;
                }
                this._timer = setTimeout(() => cb(entry.contentRect), throttle);
            }
        });
        observer.observe(el);
        return observer;
    }
}
UniResizeObserverService.ɵfac = function UniResizeObserverService_Factory(t) { return new (t || UniResizeObserverService)(); };
UniResizeObserverService.ɵprov = i0.ɵɵdefineInjectable({ token: UniResizeObserverService, factory: UniResizeObserverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniResizeObserverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6ZS1vYnNlcnZlci9yZXNpemUtb2JzZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDOztBQUt0RCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLE9BQU8sQ0FBQyxFQUFlLEVBQUUsRUFBeUMsRUFBRSxRQUFRLEdBQUcsR0FBRztRQUNoRixNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtnQkFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2lCQUN6QjtnQkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dHQWpCVSx3QkFBd0I7Z0VBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnZCLE1BQU07a0RBRVAsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5pUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdGltZXI6IE5vZGVKUy5UaW1lcjtcblxuICBvYnNlcnZlKGVsOiBIVE1MRWxlbWVudCwgY2I6IChlOiBQYXJ0aWFsPERPTVJlY3RSZWFkT25seT4pID0+IHZvaWQsIHRocm90dGxlID0gMTAwKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICAgICAgICB0aGlzLl90aW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjYihlbnRyeS5jb250ZW50UmVjdCksIHRocm90dGxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIHJldHVybiBvYnNlcnZlcjtcbiAgfVxufVxuIl19