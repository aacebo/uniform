import { __values } from "tslib";
import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import * as i0 from "@angular/core";
var UniResizeObserverService = /** @class */ (function () {
    function UniResizeObserverService() {
    }
    UniResizeObserverService.prototype.observe = function (el, cb, throttle) {
        var _this = this;
        if (throttle === void 0) { throttle = 100; }
        var observer = new ResizeObserver(function (entries) {
            var e_1, _a;
            var _loop_1 = function (entry) {
                if (_this._timer) {
                    clearTimeout(_this._timer);
                    _this._timer = undefined;
                }
                _this._timer = setTimeout(function () { return cb(entry.contentRect); }, throttle);
            };
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    _loop_1(entry);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        observer.observe(el);
        return observer;
    };
    UniResizeObserverService.ɵfac = function UniResizeObserverService_Factory(t) { return new (t || UniResizeObserverService)(); };
    UniResizeObserverService.ɵprov = i0.ɵɵdefineInjectable({ token: UniResizeObserverService, factory: UniResizeObserverService.ɵfac, providedIn: 'root' });
    return UniResizeObserverService;
}());
export { UniResizeObserverService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniResizeObserverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6ZS1vYnNlcnZlci9yZXNpemUtb2JzZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFdEQ7SUFBQTtLQXFCQztJQWZDLDBDQUFPLEdBQVAsVUFBUSxFQUFlLEVBQUUsRUFBeUMsRUFBRSxRQUFjO1FBQWxGLGlCQWNDO1FBZG1FLHlCQUFBLEVBQUEsY0FBYztRQUNoRixJQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFBLE9BQU87O29DQUM5QixLQUFLO2dCQUNkLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztpQkFDekI7Z0JBRUQsS0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQXJCLENBQXFCLEVBQUUsUUFBUSxDQUFDLENBQUM7OztnQkFObEUsS0FBb0IsSUFBQSxZQUFBLFNBQUEsT0FBTyxDQUFBLGdDQUFBO29CQUF0QixJQUFNLEtBQUssb0JBQUE7NEJBQUwsS0FBSztpQkFPZjs7Ozs7Ozs7O1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7b0dBakJVLHdCQUF3QjtvRUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGdkIsTUFBTTttQ0FKcEI7Q0F3QkMsQUFyQkQsSUFxQkM7U0FsQlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlSZXNpemVPYnNlcnZlclNlcnZpY2Uge1xuICBwcml2YXRlIF90aW1lcjogTm9kZUpTLlRpbWVyO1xuXG4gIG9ic2VydmUoZWw6IEhUTUxFbGVtZW50LCBjYjogKGU6IFBhcnRpYWw8RE9NUmVjdFJlYWRPbmx5PikgPT4gdm9pZCwgdGhyb3R0bGUgPSAxMDApIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICAgICAgICAgIHRoaXMuX3RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGNiKGVudHJ5LmNvbnRlbnRSZWN0KSwgdGhyb3R0bGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgcmV0dXJuIG9ic2VydmVyO1xuICB9XG59XG4iXX0=