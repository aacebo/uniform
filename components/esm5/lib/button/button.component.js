import { __assign, __values } from "tslib";
import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniColor } from '../core/enums';
import * as i0 from "@angular/core";
var _c0 = ["uni-button", ""];
var _c1 = ["*"];
var UNI_BUTTON_HOST_ATTRIBUTES = [
    'uni-button',
    'uni-link-button',
    'uni-icon-button',
    'uni-fab',
    'uni-mini-fab',
];
var UniButtonComponent = /** @class */ (function () {
    function UniButtonComponent(_el) {
        var e_1, _a;
        this._el = _el;
        try {
            for (var UNI_BUTTON_HOST_ATTRIBUTES_1 = __values(UNI_BUTTON_HOST_ATTRIBUTES), UNI_BUTTON_HOST_ATTRIBUTES_1_1 = UNI_BUTTON_HOST_ATTRIBUTES_1.next(); !UNI_BUTTON_HOST_ATTRIBUTES_1_1.done; UNI_BUTTON_HOST_ATTRIBUTES_1_1 = UNI_BUTTON_HOST_ATTRIBUTES_1.next()) {
                var attr = UNI_BUTTON_HOST_ATTRIBUTES_1_1.value;
                if (this._element.hasAttribute(attr)) {
                    this._element.classList.add(attr);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (UNI_BUTTON_HOST_ATTRIBUTES_1_1 && !UNI_BUTTON_HOST_ATTRIBUTES_1_1.done && (_a = UNI_BUTTON_HOST_ATTRIBUTES_1.return)) _a.call(UNI_BUTTON_HOST_ATTRIBUTES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(UniButtonComponent.prototype, "_element", {
        get: function () {
            return this._el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    UniButtonComponent.ɵfac = function UniButtonComponent_Factory(t) { return new (t || UniButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniButtonComponent, selectors: [["button", "uni-button", ""], ["button", "uni-icon-button", ""], ["button", "uni-fab", ""], ["button", "uni-mini-fab", ""], ["button", "uni-link-button", ""]], hostVars: 8, hostBindings: function UniButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniButton"], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function UniButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{padding:.3em .55em;font-size:.9em;font-weight:700;outline:0;border:2px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--white);cursor:pointer;border-radius:3px;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out}[_nghost-%COMP%]:disabled{opacity:.6;box-shadow:none!important;cursor:not-allowed}[_nghost-%COMP%]:disabled:active{-webkit-filter:none;filter:none}[_nghost-%COMP%]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.uni-button[_nghost-%COMP%]{background-color:var(--grey)}.uni-button.primary[_nghost-%COMP%]{color:var(--white);background-color:var(--primary)}.uni-button.success[_nghost-%COMP%]{color:var(--white);background-color:var(--success)}.uni-button.warning[_nghost-%COMP%]{color:var(--black);background-color:var(--warning)}.uni-button.danger[_nghost-%COMP%]{color:var(--white);background-color:var(--danger)}.uni-fab[_nghost-%COMP%]{height:50px;width:50px}.uni-button[_nghost-%COMP%], .uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-fab[_nghost-%COMP%]     .uni-icon, .uni-icon-button[_nghost-%COMP%]     .uni-icon, .uni-mini-fab[_nghost-%COMP%]     .uni-icon{font-size:20px}.uni-icon-button[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{height:40px;width:40px}.uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:var(--grey);color:var(--white)}.uni-fab.primary[_nghost-%COMP%], .uni-mini-fab.primary[_nghost-%COMP%]{background-color:var(--primary);color:var(--white)}.uni-fab.success[_nghost-%COMP%], .uni-mini-fab.success[_nghost-%COMP%]{background-color:var(--success);color:var(--white)}.uni-fab.warning[_nghost-%COMP%], .uni-mini-fab.warning[_nghost-%COMP%]{background-color:var(--warning);color:var(--white);color:var(--black)}.uni-fab.danger[_nghost-%COMP%], .uni-mini-fab.danger[_nghost-%COMP%]{background-color:var(--danger);color:var(--white)}.uni-icon-button[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:transparent;opacity:.7;color:var(--white)}.uni-icon-button[_nghost-%COMP%]:hover{opacity:1}.uni-icon-button[_nghost-%COMP%]:hover:disabled{opacity:.6}.uni-icon-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-icon-button.success[_nghost-%COMP%]{color:var(--success)}.uni-icon-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-icon-button.danger[_nghost-%COMP%]{color:var(--danger)}.uni-link-button[_nghost-%COMP%]{background-color:transparent;box-shadow:none}.uni-link-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-link-button.success[_nghost-%COMP%]{color:var(--success)}.uni-link-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-link-button.danger[_nghost-%COMP%]{color:var(--danger)}"], changeDetection: 0 });
    return UniButtonComponent;
}());
export { UniButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniButtonComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: "button[uni-button], button[uni-icon-button],\n             button[uni-fab], button[uni-mini-fab],\n             button[uni-link-button]",
                exportAs: 'uniButton',
                template: "<ng-content></ng-content>",
                styleUrls: ['./button.component.scss'],
                host: __assign({}, UNI_HOST_COLORS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV6QyxJQUFNLDBCQUEwQixHQUFHO0lBQ2pDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0NBQ2YsQ0FBQztBQUVGO0lBa0JFLDRCQUE2QixHQUE0Qjs7UUFBNUIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7O1lBQ3ZELEtBQW1CLElBQUEsK0JBQUEsU0FBQSwwQkFBMEIsQ0FBQSxzRUFBQSw4R0FBRTtnQkFBMUMsSUFBTSxJQUFJLHVDQUFBO2dCQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkM7YUFDRjs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQVZELHNCQUFZLHdDQUFRO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTt3RkFMVSxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7OztZQUxsQixrQkFBWTs7NkJBbkJ6QjtDQXNDQyxBQXpCRCxJQXlCQztTQWRZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBWDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSx5SUFFeUI7Z0JBQ25DLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsSUFBSSxlQUFPLGVBQWUsQ0FBRTtnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVTklfSE9TVF9DT0xPUlMgfSBmcm9tICcuLi9jb3JlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBVbmlDb2xvciB9IGZyb20gJy4uL2NvcmUvZW51bXMnO1xuXG5jb25zdCBVTklfQlVUVE9OX0hPU1RfQVRUUklCVVRFUyA9IFtcbiAgJ3VuaS1idXR0b24nLFxuICAndW5pLWxpbmstYnV0dG9uJyxcbiAgJ3VuaS1pY29uLWJ1dHRvbicsXG4gICd1bmktZmFiJyxcbiAgJ3VuaS1taW5pLWZhYicsXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IGBidXR0b25bdW5pLWJ1dHRvbl0sIGJ1dHRvblt1bmktaWNvbi1idXR0b25dLFxuICAgICAgICAgICAgIGJ1dHRvblt1bmktZmFiXSwgYnV0dG9uW3VuaS1taW5pLWZhYl0sXG4gICAgICAgICAgICAgYnV0dG9uW3VuaS1saW5rLWJ1dHRvbl1gLFxuICBleHBvcnRBczogJ3VuaUJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7IC4uLlVOSV9IT1NUX0NPTE9SUyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVW5pQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29sb3I/OiBVbmlDb2xvcjtcblxuICBwcml2YXRlIGdldCBfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBVTklfQlVUVE9OX0hPU1RfQVRUUklCVVRFUykge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==