import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var UniIconService = /** @class */ (function () {
    function UniIconService() {
    }
    Object.defineProperty(UniIconService.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    UniIconService.prototype.registry = function (prefix) {
        this._prefix = prefix;
    };
    UniIconService.ɵfac = function UniIconService_Factory(t) { return new (t || UniIconService)(); };
    UniIconService.ɵprov = i0.ɵɵdefineInjectable({ token: UniIconService, factory: UniIconService.ɵfac, providedIn: 'root' });
    return UniIconService;
}());
export { UniIconService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9pY29uL2ljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBYUM7SUFQQyxzQkFBSSxrQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsaUNBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztnRkFUVSxjQUFjOzBEQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZiLE1BQU07eUJBSHBCO0NBZUMsQUFiRCxJQWFDO1NBVlksY0FBYztrREFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nO1xuXG4gIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxuXG4gIHJlZ2lzdHJ5KHByZWZpeDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gcHJlZml4O1xuICB9XG59XG4iXX0=