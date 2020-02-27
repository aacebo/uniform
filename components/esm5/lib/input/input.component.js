import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import * as i0 from "@angular/core";
var _c0 = ["uniInput", ""];
var UniInputComponent = /** @class */ (function (_super) {
    __extends(UniInputComponent, _super);
    function UniInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UniInputComponent.prototype, "autoResize", {
        get: function () { return this._autoResize; },
        set: function (v) {
            if (v !== this._autoResize) {
                this._autoResize = coerceBooleanProperty(v);
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_height", {
        get: function () {
            return this._isTextArea && this._autoResize ? this._element.scrollHeight + "px" : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniInputComponent.prototype, "_isTextArea", {
        get: function () {
            return this.el.nativeElement instanceof HTMLTextAreaElement;
        },
        enumerable: true,
        configurable: true
    });
    UniInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            _this._element.focus();
        });
    };
    UniInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onInput(); });
    };
    UniInputComponent.prototype.onFocus = function (e) {
        this.uniFormField.focused = e;
    };
    UniInputComponent.prototype.onInput = function () {
        this.uniFormField.hasValue = !!this._element.value;
        this._element.style.height = 'auto';
        if (this._element.clientHeight < this._element.scrollHeight) {
            this._element.style.height = this._height;
        }
    };
    UniInputComponent.ɵfac = function UniInputComponent_Factory(t) { return ɵUniInputComponent_BaseFactory(t || UniInputComponent); };
    UniInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniInputComponent, selectors: [["input", "uniInput", ""], ["textarea", "uniInput", ""]], hostAttrs: [1, "uni-input"], hostVars: 5, hostBindings: function UniInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focus", function UniInputComponent_focus_HostBindingHandler($event) { return ctx.onFocus(true); })("focusout", function UniInputComponent_focusout_HostBindingHandler($event) { return ctx.onFocus(false); })("input", function UniInputComponent_input_HostBindingHandler($event) { return ctx.onInput(); });
        } if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.id)("tabIndex", ctx.tabIndex)("required", ctx.required)("autofocus", ctx.autofocus)("autocomplete", ctx.autocomplete);
        } }, inputs: { autoResize: "autoResize" }, exportAs: ["uniInput"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 0, vars: 0, template: function UniInputComponent_Template(rf, ctx) { }, styles: [".uni-input{width:100%;outline:0;border:0;border-radius:3px;background-color:transparent;font:inherit;color:var(--white);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
    return UniInputComponent;
}(UniFormFieldControlBase));
export { UniInputComponent };
var ɵUniInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniInputComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniInputComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'input[uniInput], textarea[uniInput]',
                exportAs: 'uniInput',
                template: "",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQXlCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7OztBQUVoRjtJQW9CdUMscUNBQStCO0lBcEJ0RTs7S0FxRUM7SUFoREMsc0JBQ0kseUNBQVU7YUFEZCxjQUNtQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzdDLFVBQWUsQ0FBVTtZQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BTjRDO0lBUzdDLHNCQUFZLHNDQUFPO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxPQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3RixDQUFDOzs7T0FBQTtJQUVELHNCQUFZLHVDQUFRO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQXdELENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSwwQ0FBVzthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLFlBQVksbUJBQW1CLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDbEUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxDQUFVO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7SUFDSCxDQUFDO2dIQWhEVSxpQkFBaUI7MERBQWpCLGlCQUFpQjs7Ozs7NEJBMUI5QjtDQTJFQyxBQXJFRCxDQW9CdUMsdUJBQXVCLEdBaUQ3RDtTQWpEWSxpQkFBaUI7OERBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBcEI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztvQkFDbEIsTUFBTSxFQUFFLElBQUk7b0JBQ1osWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLFlBQVksRUFBRSxVQUFVO29CQUN4QixhQUFhLEVBQUUsV0FBVztvQkFDMUIsZ0JBQWdCLEVBQUUsY0FBYztvQkFDaEMsU0FBUyxFQUFFLGVBQWU7b0JBQzFCLFlBQVksRUFBRSxnQkFBZ0I7b0JBQzlCLFNBQVMsRUFBRSxXQUFXO2lCQUN2QjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2UgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtY29udHJvbC5iYXNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnaW5wdXRbdW5pSW5wdXRdLCB0ZXh0YXJlYVt1bmlJbnB1dF0nLFxuICBleHBvcnRBczogJ3VuaUlucHV0JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktaW5wdXQnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW3RhYkluZGV4XSc6ICd0YWJJbmRleCcsXG4gICAgJ1tyZXF1aXJlZF0nOiAncmVxdWlyZWQnLFxuICAgICdbYXV0b2ZvY3VzXSc6ICdhdXRvZm9jdXMnLFxuICAgICdbYXV0b2NvbXBsZXRlXSc6ICdhdXRvY29tcGxldGUnLFxuICAgICcoZm9jdXMpJzogJ29uRm9jdXModHJ1ZSknLFxuICAgICcoZm9jdXNvdXQpJzogJ29uRm9jdXMoZmFsc2UpJyxcbiAgICAnKGlucHV0KSc6ICdvbklucHV0KCknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBVbmlGb3JtRmllbGRDb250cm9sQmFzZTxzdHJpbmc+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGF1dG9SZXNpemUoKSB7IHJldHVybiB0aGlzLl9hdXRvUmVzaXplOyB9XG4gIHNldCBhdXRvUmVzaXplKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fYXV0b1Jlc2l6ZSkge1xuICAgICAgdGhpcy5fYXV0b1Jlc2l6ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9hdXRvUmVzaXplPzogYm9vbGVhbjtcblxuICBwcml2YXRlIGdldCBfaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1RleHRBcmVhICYmIHRoaXMuX2F1dG9SZXNpemUgPyBgJHsgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgfXB4YCA6ICdhdXRvJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9lbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2lzVGV4dEFyZWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy51bmlGb3JtRmllbGQuY2xpY2tlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25JbnB1dCgpKTtcbiAgfVxuXG4gIG9uRm9jdXMoZTogYm9vbGVhbikge1xuICAgIHRoaXMudW5pRm9ybUZpZWxkLmZvY3VzZWQgPSBlO1xuICB9XG5cbiAgb25JbnB1dCgpIHtcbiAgICB0aGlzLnVuaUZvcm1GaWVsZC5oYXNWYWx1ZSA9ICEhdGhpcy5fZWxlbWVudC52YWx1ZTtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsaWVudEhlaWdodCA8IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==