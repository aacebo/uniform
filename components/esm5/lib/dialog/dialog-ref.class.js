import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
var UniDialogRef = /** @class */ (function () {
    function UniDialogRef(_overlayRef, _disableClose) {
        var _this = this;
        this._overlayRef = _overlayRef;
        this._disableClose = _disableClose;
        this._closed$ = new Subject();
        if (!this._disableClose) {
            this._overlayRef.backdropClick()
                .pipe(take(1))
                .subscribe(function () { return _this.dismiss(); });
        }
    }
    Object.defineProperty(UniDialogRef.prototype, "closed$", {
        get: function () {
            return this._closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UniDialogRef.prototype.dismiss = function () {
        this._closed$.next();
        this._overlayRef.detach();
    };
    return UniDialogRef;
}());
export { UniDialogRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFNRSxzQkFDbUIsV0FBdUIsRUFDdkIsYUFBc0I7UUFGekMsaUJBU0M7UUFSa0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFQeEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFTOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7aUJBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFiRCxzQkFBSSxpQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBYUQsOEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBVbmlEaWFsb2dSZWYge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbG9zZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZ2V0IGNsb3NlZCQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlZCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rpc2FibGVDbG9zZTogYm9vbGVhbixcbiAgKSB7XG4gICAgaWYgKCF0aGlzLl9kaXNhYmxlQ2xvc2UpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGlzbWlzcygpKTtcbiAgICB9XG4gIH1cblxuICBkaXNtaXNzKCkge1xuICAgIHRoaXMuX2Nsb3NlZCQubmV4dCgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gIH1cbn1cbiJdfQ==