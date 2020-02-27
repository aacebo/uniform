import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniColor } from '../core/enums';
import * as i0 from "@angular/core";
const _c0 = ["uni-button", ""];
const _c1 = ["*"];
const UNI_BUTTON_HOST_ATTRIBUTES = [
    'uni-button',
    'uni-link-button',
    'uni-icon-button',
    'uni-fab',
    'uni-mini-fab',
];
export class UniButtonComponent {
    constructor(_el) {
        this._el = _el;
        for (const attr of UNI_BUTTON_HOST_ATTRIBUTES) {
            if (this._element.hasAttribute(attr)) {
                this._element.classList.add(attr);
            }
        }
    }
    get _element() {
        return this._el.nativeElement;
    }
}
UniButtonComponent.ɵfac = function UniButtonComponent_Factory(t) { return new (t || UniButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniButtonComponent, selectors: [["button", "uni-button", ""], ["button", "uni-icon-button", ""], ["button", "uni-fab", ""], ["button", "uni-mini-fab", ""], ["button", "uni-link-button", ""]], hostVars: 8, hostBindings: function UniButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { color: "color" }, exportAs: ["uniButton"], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function UniButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]{padding:.3em .55em;font-size:.9em;font-weight:700;outline:0;border:2px solid transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--white);cursor:pointer;border-radius:3px;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,opacity .2s ease-in-out}[_nghost-%COMP%]:disabled{opacity:.6;box-shadow:none!important;cursor:not-allowed}[_nghost-%COMP%]:disabled:active{-webkit-filter:none;filter:none}[_nghost-%COMP%]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.uni-button[_nghost-%COMP%]{background-color:var(--grey)}.uni-button.primary[_nghost-%COMP%]{color:var(--white);background-color:var(--primary)}.uni-button.success[_nghost-%COMP%]{color:var(--white);background-color:var(--success)}.uni-button.warning[_nghost-%COMP%]{color:var(--black);background-color:var(--warning)}.uni-button.danger[_nghost-%COMP%]{color:var(--white);background-color:var(--danger)}.uni-fab[_nghost-%COMP%]{height:50px;width:50px}.uni-button[_nghost-%COMP%], .uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-fab[_nghost-%COMP%]     .uni-icon, .uni-icon-button[_nghost-%COMP%]     .uni-icon, .uni-mini-fab[_nghost-%COMP%]     .uni-icon{font-size:20px}.uni-icon-button[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{height:40px;width:40px}.uni-fab[_nghost-%COMP%], .uni-mini-fab[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:var(--grey);color:var(--white)}.uni-fab.primary[_nghost-%COMP%], .uni-mini-fab.primary[_nghost-%COMP%]{background-color:var(--primary);color:var(--white)}.uni-fab.success[_nghost-%COMP%], .uni-mini-fab.success[_nghost-%COMP%]{background-color:var(--success);color:var(--white)}.uni-fab.warning[_nghost-%COMP%], .uni-mini-fab.warning[_nghost-%COMP%]{background-color:var(--warning);color:var(--white);color:var(--black)}.uni-fab.danger[_nghost-%COMP%], .uni-mini-fab.danger[_nghost-%COMP%]{background-color:var(--danger);color:var(--white)}.uni-icon-button[_nghost-%COMP%]{border-radius:100%;padding:0;background-color:transparent;opacity:.7;color:var(--white)}.uni-icon-button[_nghost-%COMP%]:hover{opacity:1}.uni-icon-button[_nghost-%COMP%]:hover:disabled{opacity:.6}.uni-icon-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-icon-button.success[_nghost-%COMP%]{color:var(--success)}.uni-icon-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-icon-button.danger[_nghost-%COMP%]{color:var(--danger)}.uni-link-button[_nghost-%COMP%]{background-color:transparent;box-shadow:none}.uni-link-button.primary[_nghost-%COMP%]{color:var(--primary)}.uni-link-button.success[_nghost-%COMP%]{color:var(--success)}.uni-link-button.warning[_nghost-%COMP%]{color:var(--warning)}.uni-link-button.danger[_nghost-%COMP%]{color:var(--danger)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniButtonComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: `button[uni-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab],
             button[uni-link-button]`,
                exportAs: 'uniButton',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./button.component.scss'],
                host: Object.assign({}, UNI_HOST_COLORS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXpDLE1BQU0sMEJBQTBCLEdBQUc7SUFDakMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGNBQWM7Q0FDZixDQUFDO0FBYUYsTUFBTSxPQUFPLGtCQUFrQjtJQU83QixZQUE2QixHQUE0QjtRQUE1QixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUN2RCxLQUFLLE1BQU0sSUFBSSxJQUFJLDBCQUEwQixFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQVZELElBQVksUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7O29GQUxVLGtCQUFrQjt1REFBbEIsa0JBQWtCOzs7O1FBTGxCLGtCQUFZOztrREFLWixrQkFBa0I7Y0FYOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFOztxQ0FFeUI7Z0JBQ25DLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsSUFBSSxvQkFBTyxlQUFlLENBQUU7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVU5JX0hPU1RfQ09MT1JTIH0gZnJvbSAnLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcblxuY29uc3QgVU5JX0JVVFRPTl9IT1NUX0FUVFJJQlVURVMgPSBbXG4gICd1bmktYnV0dG9uJyxcbiAgJ3VuaS1saW5rLWJ1dHRvbicsXG4gICd1bmktaWNvbi1idXR0b24nLFxuICAndW5pLWZhYicsXG4gICd1bmktbWluaS1mYWInLFxuXTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBgYnV0dG9uW3VuaS1idXR0b25dLCBidXR0b25bdW5pLWljb24tYnV0dG9uXSxcbiAgICAgICAgICAgICBidXR0b25bdW5pLWZhYl0sIGJ1dHRvblt1bmktbWluaS1mYWJdLFxuICAgICAgICAgICAgIGJ1dHRvblt1bmktbGluay1idXR0b25dYCxcbiAgZXhwb3J0QXM6ICd1bmlCdXR0b24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyAuLi5VTklfSE9TVF9DT0xPUlMgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9yPzogVW5pQ29sb3I7XG5cbiAgcHJpdmF0ZSBnZXQgX2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgb2YgVU5JX0JVVFRPTl9IT1NUX0FUVFJJQlVURVMpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=