import { Directive } from '@angular/core';
import { UniDialogRef } from '../../dialog-ref.class';
import * as i0 from "@angular/core";
import * as i1 from "../../dialog-ref.class";
export class UniDialogCloseDirective {
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    onClick() {
        this._dialogRef.dismiss();
    }
}
UniDialogCloseDirective.ɵfac = function UniDialogCloseDirective_Factory(t) { return new (t || UniDialogCloseDirective)(i0.ɵɵdirectiveInject(i1.UniDialogRef)); };
UniDialogCloseDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniDialogCloseDirective, selectors: [["", "uniDialogClose", ""]], hostBindings: function UniDialogCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function UniDialogCloseDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniDialogCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[uniDialogClose]',
                host: {
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: i1.UniDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpcmVjdGl2ZXMvZGlhbG9nLWNsb3NlL2RpYWxvZy1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVF0RCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQTZCLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBRyxDQUFDO0lBRXpELE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7OzhGQUxVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzs7a0RBQXZCLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxXQUFXO2lCQUN2QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaURpYWxvZ1JlZiB9IGZyb20gJy4uLy4uL2RpYWxvZy1yZWYuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdW5pRGlhbG9nQ2xvc2VdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29uQ2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaURpYWxvZ0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZGlhbG9nUmVmOiBVbmlEaWFsb2dSZWYpIHt9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuZGlzbWlzcygpO1xuICB9XG59XG4iXX0=