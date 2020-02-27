import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import * as i0 from "@angular/core";
const _c0 = ["uniInput", ""];
export class UniInputComponent extends UniFormFieldControlBase {
    get autoResize() { return this._autoResize; }
    set autoResize(v) {
        if (v !== this._autoResize) {
            this._autoResize = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        }
    }
    get _height() {
        return this._isTextArea && this._autoResize ? `${this._element.scrollHeight}px` : 'auto';
    }
    get _element() {
        return this.el.nativeElement;
    }
    get _isTextArea() {
        return this.el.nativeElement instanceof HTMLTextAreaElement;
    }
    ngOnInit() {
        super.ngOnInit();
        this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this._element.focus();
        });
    }
    ngAfterViewInit() {
        setTimeout(() => this.onInput());
    }
    onFocus(e) {
        this.uniFormField.focused = e;
    }
    onInput() {
        this.uniFormField.hasValue = !!this._element.value;
        this._element.style.height = 'auto';
        if (this._element.clientHeight < this._element.scrollHeight) {
            this._element.style.height = this._height;
        }
    }
}
UniInputComponent.ɵfac = function UniInputComponent_Factory(t) { return ɵUniInputComponent_BaseFactory(t || UniInputComponent); };
UniInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniInputComponent, selectors: [["input", "uniInput", ""], ["textarea", "uniInput", ""]], hostAttrs: [1, "uni-input"], hostVars: 5, hostBindings: function UniInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function UniInputComponent_focus_HostBindingHandler($event) { return ctx.onFocus(true); })("focusout", function UniInputComponent_focusout_HostBindingHandler($event) { return ctx.onFocus(false); })("input", function UniInputComponent_input_HostBindingHandler($event) { return ctx.onInput(); });
    } if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id)("tabIndex", ctx.tabIndex)("required", ctx.required)("autofocus", ctx.autofocus)("autocomplete", ctx.autocomplete);
    } }, inputs: { autoResize: "autoResize" }, exportAs: ["uniInput"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 0, vars: 0, template: function UniInputComponent_Template(rf, ctx) { }, styles: [".uni-input{width:100%;outline:0;border:0;border-radius:3px;background-color:transparent;font:inherit;color:var(--white);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
const ɵUniInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniInputComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniInputComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'input[uniInput], textarea[uniInput]',
                exportAs: 'uniInput',
                template: ``,
                styleUrls: ['./input.component.scss'],
                host: {
                    class: 'uni-input',
                    '[id]': 'id',
                    '[tabIndex]': 'tabIndex',
                    '[required]': 'required',
                    '[autofocus]': 'autofocus',
                    '[autocomplete]': 'autocomplete',
                    '(focus)': 'onFocus(true)',
                    '(focusout)': 'onFocus(false)',
                    '(input)': 'onInput()',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { autoResize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBeUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBc0JoRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsdUJBQStCO0lBQ3BFLElBQ0ksVUFBVSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxVQUFVLENBQUMsQ0FBVTtRQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFHRCxJQUFZLE9BQU87UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdGLENBQUM7SUFFRCxJQUFZLFFBQVE7UUFDbEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQXdELENBQUM7SUFDMUUsQ0FBQztJQUVELElBQVksV0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxZQUFZLG1CQUFtQixDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFVO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs0R0FoRFUsaUJBQWlCO3NEQUFqQixpQkFBaUI7Ozs7O2dFQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQXBCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLE1BQU0sRUFBRSxJQUFJO29CQUNaLFlBQVksRUFBRSxVQUFVO29CQUN4QixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsYUFBYSxFQUFFLFdBQVc7b0JBQzFCLGdCQUFnQixFQUFFLGNBQWM7b0JBQ2hDLFNBQVMsRUFBRSxlQUFlO29CQUMxQixZQUFZLEVBQUUsZ0JBQWdCO29CQUM5QixTQUFTLEVBQUUsV0FBVztpQkFDdkI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlIH0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkLWNvbnRyb2wuYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2lucHV0W3VuaUlucHV0XSwgdGV4dGFyZWFbdW5pSW5wdXRdJyxcbiAgZXhwb3J0QXM6ICd1bmlJbnB1dCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLWlucHV0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1t0YWJJbmRleF0nOiAndGFiSW5kZXgnLFxuICAgICdbcmVxdWlyZWRdJzogJ3JlcXVpcmVkJyxcbiAgICAnW2F1dG9mb2N1c10nOiAnYXV0b2ZvY3VzJyxcbiAgICAnW2F1dG9jb21wbGV0ZV0nOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAnKGZvY3VzKSc6ICdvbkZvY3VzKHRydWUpJyxcbiAgICAnKGZvY3Vzb3V0KSc6ICdvbkZvY3VzKGZhbHNlKScsXG4gICAgJyhpbnB1dCknOiAnb25JbnB1dCgpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUlucHV0Q29tcG9uZW50IGV4dGVuZHMgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2U8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvUmVzaXplKCkgeyByZXR1cm4gdGhpcy5fYXV0b1Jlc2l6ZTsgfVxuICBzZXQgYXV0b1Jlc2l6ZSh2OiBib29sZWFuKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2F1dG9SZXNpemUpIHtcbiAgICAgIHRoaXMuX2F1dG9SZXNpemUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYXV0b1Jlc2l6ZT86IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBnZXQgX2hlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNUZXh0QXJlYSAmJiB0aGlzLl9hdXRvUmVzaXplID8gYCR7IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0IH1weGAgOiAnYXV0byc7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzICBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9pc1RleHRBcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMudW5pRm9ybUZpZWxkLmNsaWNrZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uSW5wdXQoKSk7XG4gIH1cblxuICBvbkZvY3VzKGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVuaUZvcm1GaWVsZC5mb2N1c2VkID0gZTtcbiAgfVxuXG4gIG9uSW5wdXQoKSB7XG4gICAgdGhpcy51bmlGb3JtRmllbGQuaGFzVmFsdWUgPSAhIXRoaXMuX2VsZW1lbnQudmFsdWU7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGllbnRIZWlnaHQgPCB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iXX0=