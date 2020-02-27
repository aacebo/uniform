import { __assign } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef, ContentChild, EventEmitter } from '@angular/core';
import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';
import { UniLabelComponent } from '../label/label.component';
import { UniErrorComponent } from '../error/error.component';
import * as i0 from "@angular/core";
var _c0 = [[["uni-label"]], [["uni-select"]], [["", "uniInput", ""]], [["uni-hint"]], [["uni-error"]]];
var _c1 = ["uni-label", "uni-select", "[uniInput]", "uni-hint", "uni-error"];
var UniFormFieldComponent = /** @class */ (function () {
    function UniFormFieldComponent(cdr) {
        this.cdr = cdr;
        this.color = UniColor.Primary;
        this.clicked = new EventEmitter();
    }
    Object.defineProperty(UniFormFieldComponent.prototype, "label", {
        get: function () { return this._label; },
        set: function (v) {
            if (v !== this._label) {
                this._label = v;
                if (this._label) {
                    this._label.for = this._id;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "error", {
        get: function () { return this._error; },
        set: function (v) {
            if (v !== this._error) {
                this._error = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "id", {
        get: function () { return this._id; },
        set: function (v) {
            if (v !== this._id) {
                this._id = v;
                if (this._label) {
                    this._label.for = this._id;
                }
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "focused", {
        get: function () { return this._focused; },
        set: function (v) {
            if (v !== this._focused) {
                this._focused = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "hasValue", {
        get: function () { return this._hasValue; },
        set: function (v) {
            if (v !== this._hasValue) {
                this._hasValue = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            if (v !== this._disabled) {
                this._disabled = v;
                this.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    UniFormFieldComponent.ɵfac = function UniFormFieldComponent_Factory(t) { return new (t || UniFormFieldComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    UniFormFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniFormFieldComponent, selectors: [["uni-form-field"]], contentQueries: function UniFormFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, UniLabelComponent, true);
            i0.ɵɵcontentQuery(dirIndex, UniErrorComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.label = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.error = _t.first);
        } }, hostAttrs: [1, "uni-form-field"], hostVars: 18, hostBindings: function UniFormFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function UniFormFieldComponent_click_HostBindingHandler($event) { return ctx.clicked.emit($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("focused", ctx.focused)("has-value", ctx.hasValue)("has-label", !!ctx.label)("has-error", !!ctx.error)("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniFormField"], ngContentSelectors: _c1, decls: 5, vars: 0, template: function UniFormFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵprojection(1, 1);
            i0.ɵɵprojection(2, 2);
            i0.ɵɵprojection(3, 3);
            i0.ɵɵprojection(4, 4);
        } }, styles: [".uni-form-field{display:inline-block;position:relative;border-radius:5px;border:1px solid var(--white-a50);padding:15px 10px;margin-bottom:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.uni-form-field:hover{box-shadow:inset 0 0 0 1px var(--white)}.uni-form-field.disabled{border-style:dotted;opacity:.8}.uni-form-field.disabled:hover{box-shadow:none!important}.uni-form-field.has-value .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75)}.uni-form-field.has-label.focused .uni-input,.uni-form-field.has-label.focused .uni-select-placeholder,.uni-form-field.has-label.has-value .uni-input,.uni-form-field.has-label.has-value .uni-select-placeholder{opacity:1}.uni-form-field.has-label .uni-input,.uni-form-field.has-label .uni-select-placeholder{opacity:0}.uni-form-field.has-error{border-color:var(--danger)}.uni-form-field.has-error:hover{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.has-error .uni-input{caret-color:var(--danger)!important}.uni-form-field.has-error .uni-hint{display:none}.uni-form-field.has-error .uni-label label{color:var(--danger)}.uni-form-field.primary.focused{box-shadow:inset 0 0 0 1px var(--primary)}.uni-form-field.primary.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.primary.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--primary)}.uni-form-field.primary .uni-input{caret-color:var(--primary)}.uni-form-field.success.focused{box-shadow:inset 0 0 0 1px var(--success)}.uni-form-field.success.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.success.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--success)}.uni-form-field.success .uni-input{caret-color:var(--success)}.uni-form-field.warning.focused{box-shadow:inset 0 0 0 1px var(--warning)}.uni-form-field.warning.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.warning.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--warning)}.uni-form-field.warning .uni-input{caret-color:var(--warning)}.uni-form-field.danger.focused,.uni-form-field.danger.focused.has-error{box-shadow:inset 0 0 0 1px var(--danger)}.uni-form-field.danger.focused .uni-label{-webkit-transform:translate(-8px,-15px) scale(.75);transform:translate(-8px,-15px) scale(.75);color:var(--danger)}.uni-form-field.danger .uni-input{caret-color:var(--danger)}"], encapsulation: 2, changeDetection: 0 });
    return UniFormFieldComponent;
}());
export { UniFormFieldComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniFormFieldComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-form-field',
                exportAs: 'uniFormField',
                templateUrl: './form-field.component.html',
                styleUrls: ['./form-field.component.scss'],
                host: __assign(__assign({ class: 'uni-form-field', '[class.focused]': 'focused', '[class.has-value]': 'hasValue', '[class.has-label]': '!!label', '[class.has-error]': '!!error', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS), { '(click)': 'clicked.emit($event)' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], label: [{
            type: ContentChild,
            args: [UniLabelComponent]
        }], error: [{
            type: ContentChild,
            args: [UniErrorComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGQvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnRzIiwibGliL2Zvcm0tZmllbGQvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUU3RDtJQXVGRSwrQkFBcUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuRWxDLFVBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBaUV6QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUVFLENBQUM7SUFqRWhELHNCQUNJLHdDQUFLO2FBRFQsY0FDYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ25DLFVBQVUsQ0FBb0I7WUFDNUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBRWhCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJ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aUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFFTCxZQUFZO21CQUFDLGlCQUFpQjs7a0JBYTlCLFlBQVk7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IFVOSV9IT1NUX0NPTE9SUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgVW5pTGFiZWxDb21wb25lbnQgfSBmcm9tICcuLi9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktZm9ybS1maWVsZCcsXG4gIGV4cG9ydEFzOiAndW5pRm9ybUZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS1mb3JtLWZpZWxkJyxcbiAgICAnW2NsYXNzLmZvY3VzZWRdJzogJ2ZvY3VzZWQnLFxuICAgICdbY2xhc3MuaGFzLXZhbHVlXSc6ICdoYXNWYWx1ZScsXG4gICAgJ1tjbGFzcy5oYXMtbGFiZWxdJzogJyEhbGFiZWwnLFxuICAgICdbY2xhc3MuaGFzLWVycm9yXSc6ICchIWVycm9yJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICAgICcoY2xpY2spJzogJ2NsaWNrZWQuZW1pdCgkZXZlbnQpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUZvcm1GaWVsZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9yID0gVW5pQ29sb3IuUHJpbWFyeTtcblxuICBAQ29udGVudENoaWxkKFVuaUxhYmVsQ29tcG9uZW50KVxuICBnZXQgbGFiZWwoKSB7IHJldHVybiB0aGlzLl9sYWJlbDsgfVxuICBzZXQgbGFiZWwodjogVW5pTGFiZWxDb21wb25lbnQpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fbGFiZWwpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdjtcblxuICAgICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsLmZvciA9IHRoaXMuX2lkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIF9sYWJlbD86IFVuaUxhYmVsQ29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoVW5pRXJyb3JDb21wb25lbnQpXG4gIGdldCBlcnJvcigpIHsgcmV0dXJuIHRoaXMuX2Vycm9yOyB9XG4gIHNldCBlcnJvcih2OiBVbmlFcnJvckNvbXBvbmVudCkge1xuICAgIGlmICh2ICE9PSB0aGlzLl9lcnJvcikge1xuICAgICAgdGhpcy5fZXJyb3IgPSB2O1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9lcnJvcj86IFVuaUVycm9yQ29tcG9uZW50O1xuXG4gIGdldCBpZCgpIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG4gIHNldCBpZCh2OiBzdHJpbmcpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5faWQpIHtcbiAgICAgIHRoaXMuX2lkID0gdjtcblxuICAgICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsLmZvciA9IHRoaXMuX2lkO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG5cbiAgZ2V0IGZvY3VzZWQoKSB7IHJldHVybiB0aGlzLl9mb2N1c2VkOyB9XG4gIHNldCBmb2N1c2VkKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fZm9jdXNlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHY7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZm9jdXNlZD86IGJvb2xlYW47XG5cbiAgZ2V0IGhhc1ZhbHVlKCkgeyByZXR1cm4gdGhpcy5faGFzVmFsdWU7IH1cbiAgc2V0IGhhc1ZhbHVlKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5faGFzVmFsdWUpIHtcbiAgICAgIHRoaXMuX2hhc1ZhbHVlID0gdjtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9oYXNWYWx1ZT86IGJvb2xlYW47XG5cbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdjtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgcmVhZG9ubHkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG59XG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJ1bmktbGFiZWxcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc2VsZWN0XCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3VuaUlucHV0XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1oaW50XCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLWVycm9yXCI+PC9uZy1jb250ZW50PlxuIl19