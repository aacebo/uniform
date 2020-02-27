import { Directive } from '@angular/core';
import { UniDialogRef } from '../../dialog-ref.class';
import * as i0 from "@angular/core";
import * as i1 from "../../dialog-ref.class";
var UniDialogCloseDirective = /** @class */ (function () {
    function UniDialogCloseDirective(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    UniDialogCloseDirective.prototype.onClick = function () {
        this._dialogRef.dismiss();
    };
    UniDialogCloseDirective.ɵfac = function UniDialogCloseDirective_Factory(t) { return new (t || UniDialogCloseDirective)(i0.ɵɵdirectiveInject(i1.UniDialogRef)); };
    UniDialogCloseDirective.ɵdir = i0.ɵɵdefineDirective({ type: UniDialogCloseDirective, selectors: [["", "uniDialogClose", ""]], hostBindings: function UniDialogCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function UniDialogCloseDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        } } });
    return UniDialogCloseDirective;
}());
export { UniDialogCloseDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniDialogCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[uniDialogClose]',
                host: {
                    '(click)': 'onClick()',
                },
            }]
    }], function () { return [{ type: i1.UniDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpcmVjdGl2ZXMvZGlhbG9nLWNsb3NlL2RpYWxvZy1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUV0RDtJQU9FLGlDQUE2QixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQUcsQ0FBQztJQUV6RCx5Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO2tHQUxVLHVCQUF1QjtnRUFBdkIsdUJBQXVCOzs7a0NBVnBDO0NBZ0JDLEFBWkQsSUFZQztTQU5ZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFdBQVc7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pRGlhbG9nUmVmIH0gZnJvbSAnLi4vLi4vZGlhbG9nLXJlZi5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1bmlEaWFsb2dDbG9zZV0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pRGlhbG9nQ2xvc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9kaWFsb2dSZWY6IFVuaURpYWxvZ1JlZikge31cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5kaXNtaXNzKCk7XG4gIH1cbn1cbiJdfQ==