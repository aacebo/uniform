import { Subject } from 'rxjs';
var UniToastRef = /** @class */ (function () {
    function UniToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        this._closed$ = new Subject();
    }
    Object.defineProperty(UniToastRef.prototype, "closed$", {
        get: function () {
            return this._closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniToastRef.prototype, "config", {
        get: function () {
            return this._overlayRef.getConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniToastRef.prototype, "position", {
        get: function () {
            return this._overlayRef.overlayElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    UniToastRef.prototype.dismiss = function () {
        this._closed$.next();
        this._overlayRef.detach();
    };
    UniToastRef.prototype.updatePosition = function (strategy) {
        this._overlayRef.updatePositionStrategy(strategy);
    };
    return UniToastRef;
}());
export { UniToastRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQWNFLHFCQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWJuQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQWFPLENBQUM7SUFaeEQsc0JBQUksZ0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBSUQsNkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFFBQTBCO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYsIFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBVbmlUb2FzdFJlZiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Nsb3NlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBnZXQgY2xvc2VkJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VkJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxuXG4gIGRpc21pc3MoKSB7XG4gICAgdGhpcy5fY2xvc2VkJC5uZXh0KCk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKHN0cmF0ZWd5OiBQb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHN0cmF0ZWd5KTtcbiAgfVxufVxuIl19