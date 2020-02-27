import { __assign } from "tslib";
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import { UniDialogRef } from './dialog-ref.class';
import { UniDialogContainerComponent } from './components/dialog-container/dialog-container.component';
import { UNI_DIALOG_OPTIONS, UNI_DIALOG_DEFAULT_OPTIONS } from './dialog-options.constant';
import { UNI_DIALOG_CONTENT } from './dialog-content.constant';
import { UNI_DIALOG_DATA } from './dialog-data.constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var UniDialogService = /** @class */ (function () {
    function UniDialogService(_overlay, _resolver) {
        this._overlay = _overlay;
        this._resolver = _resolver;
        this._index = -1;
        this._dialogs = [];
    }
    Object.defineProperty(UniDialogService.prototype, "_id", {
        get: function () {
            this._index++;
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    UniDialogService.prototype.find = function (id) {
        return this._dialogs.find(function (t) { return t.id === id; });
    };
    UniDialogService.prototype.remove = function (id) {
        for (var i = 0; i < this._dialogs.length; i++) {
            if (this._dialogs[i].id === id) {
                this._dialogs.splice(i, 1);
                return i;
            }
        }
        return -1;
    };
    UniDialogService.prototype.open = function (content, options) {
        var _this = this;
        var overlayRef = this._overlay.create(__assign(__assign(__assign({}, UNI_DIALOG_DEFAULT_OPTIONS), options), { positionStrategy: this._getPositionStrategy() }));
        var dialogRef = new UniDialogRef(overlayRef, options.disableClose);
        var portal = new ComponentPortal(UniDialogContainerComponent, undefined, this._getInjector(dialogRef, content, options));
        overlayRef.attach(portal);
        var dialog = {
            id: this._id,
            ref: dialogRef,
        };
        dialogRef.closed$.pipe(take(1)).subscribe(function () {
            _this.remove(dialog.id);
        });
        this._dialogs.push(dialog);
        return dialog;
    };
    UniDialogService.prototype._getInjector = function (ref, content, options) {
        var tokens = new WeakMap();
        tokens.set(ComponentFactoryResolver, this._resolver);
        tokens.set(UniDialogRef, ref);
        tokens.set(UNI_DIALOG_OPTIONS, options);
        tokens.set(UNI_DIALOG_CONTENT, content);
        if (options.data) {
            tokens.set(UNI_DIALOG_DATA, options.data);
        }
        return new PortalInjector(null, tokens);
    };
    UniDialogService.prototype._getPositionStrategy = function () {
        var pb = this._overlay.position().global();
        return pb.centerVertically().centerHorizontally();
    };
    UniDialogService.ɵfac = function UniDialogService_Factory(t) { return new (t || UniDialogService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.ComponentFactoryResolver)); };
    UniDialogService.ɵprov = i0.ɵɵdefineInjectable({ token: UniDialogService, factory: UniDialogService.ɵfac });
    return UniDialogService;
}());
export { UniDialogService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1.Overlay }, { type: i0.ComponentFactoryResolver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXpEO0lBVUUsMEJBQ21CLFFBQWlCLEVBQ2pCLFNBQW1DO1FBRG5DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFWOUMsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsYUFBUSxHQUFpQixFQUFFLENBQUM7SUFVMUMsQ0FBQztJQVJKLHNCQUFZLGlDQUFHO2FBQWY7WUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFPRCwrQkFBSSxHQUFKLFVBQUssRUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFB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QUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElVbmlEaWFsb2cgfSBmcm9tICcuL2RpYWxvZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVVuaURpYWxvZ09wdGlvbnMgfSBmcm9tICcuL2RpYWxvZy1vcHRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVbmlEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgVW5pRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVU5JX0RJQUxPR19PUFRJT05TLCBVTklfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJy4vZGlhbG9nLW9wdGlvbnMuY29uc3RhbnQnO1xuaW1wb3J0IHsgVU5JX0RJQUxPR19DT05URU5UIH0gZnJvbSAnLi9kaWFsb2ctY29udGVudC5jb25zdGFudCc7XG5pbXBvcnQgeyBVTklfRElBTE9HX0RBVEEgfSBmcm9tICcuL2RpYWxvZy1kYXRhLmNvbnN0YW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuaURpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIHJlYWRvbmx5IF9kaWFsb2dzOiBJVW5pRGlhbG9nW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBfaWQoKSB7XG4gICAgdGhpcy5faW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge31cblxuICBmaW5kKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9ncy5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RpYWxvZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9kaWFsb2dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLl9kaWFsb2dzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgb3BlbjxUID0gYW55Pihjb250ZW50OiBULCBvcHRpb25zPzogSVVuaURpYWxvZ09wdGlvbnMpIHtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xuICAgICAgLi4uVU5JX0RJQUxPR19ERUZBVUxUX09QVElPTlMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fZ2V0UG9zaXRpb25TdHJhdGVneSgpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IFVuaURpYWxvZ1JlZihvdmVybGF5UmVmLCBvcHRpb25zLmRpc2FibGVDbG9zZSk7XG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChVbmlEaWFsb2dDb250YWluZXJDb21wb25lbnQsIHVuZGVmaW5lZCwgdGhpcy5fZ2V0SW5qZWN0b3IoZGlhbG9nUmVmLCBjb250ZW50LCBvcHRpb25zKSk7XG4gICAgb3ZlcmxheVJlZi5hdHRhY2gocG9ydGFsKTtcbiAgICBjb25zdCBkaWFsb2c6IElVbmlEaWFsb2cgPSB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICByZWY6IGRpYWxvZ1JlZixcbiAgICB9O1xuXG4gICAgZGlhbG9nUmVmLmNsb3NlZCQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZGlhbG9nLmlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2RpYWxvZ3MucHVzaChkaWFsb2cpO1xuXG4gICAgcmV0dXJuIGRpYWxvZztcbiAgfVxuXG4gIHByaXZhdGUgX2dldEluamVjdG9yPFQgPSBhbnk+KHJlZjogVW5pRGlhbG9nUmVmLCBjb250ZW50OiBULCBvcHRpb25zPzogSVVuaURpYWxvZ09wdGlvbnMpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgdG9rZW5zLnNldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX3Jlc29sdmVyKTtcbiAgICB0b2tlbnMuc2V0KFVuaURpYWxvZ1JlZiwgcmVmKTtcbiAgICB0b2tlbnMuc2V0KFVOSV9ESUFMT0dfT1BUSU9OUywgb3B0aW9ucyk7XG4gICAgdG9rZW5zLnNldChVTklfRElBTE9HX0NPTlRFTlQsIGNvbnRlbnQpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgdG9rZW5zLnNldChVTklfRElBTE9HX0RBVEEsIG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3RvcihudWxsLCB0b2tlbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25TdHJhdGVneSgpIHtcbiAgICBjb25zdCBwYiA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKTtcbiAgICByZXR1cm4gcGIuY2VudGVyVmVydGljYWxseSgpLmNlbnRlckhvcml6b250YWxseSgpO1xuICB9XG59XG4iXX0=