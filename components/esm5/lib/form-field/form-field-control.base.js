import { __extends } from "tslib";
import { Optional, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { UniSubscriptionHelper } from '../core/helpers';
import { UniFormFieldComponent } from './components/form-field/form-field.component';
import * as i0 from "@angular/core";
import * as i1 from "./components/form-field/form-field.component";
import * as i2 from "@angular/forms";
var nextId = 0;
var UniFormFieldControlBase = /** @class */ (function (_super) {
    __extends(UniFormFieldControlBase, _super);
    function UniFormFieldControlBase(el, cdr, uniFormField, ngForm, ngFormGroup) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.cdr = cdr;
        _this.uniFormField = uniFormField;
        _this.ngForm = ngForm;
        _this.ngFormGroup = ngFormGroup;
        _this._id = "uni-form-field--" + ++nextId;
        _this._tabIndex = 0;
        _this._required = false;
        _this._disabled = false;
        _this._autofocus = false;
        _this._autocomplete = false;
        _this.onChange = function () { };
        _this.onTouch = function () { };
        return _this;
    }
    Object.defineProperty(UniFormFieldControlBase.prototype, "id", {
        get: function () { return this._id; },
        set: function (v) {
            this._id = v;
            this.uniFormField.id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "tabIndex", {
        get: function () { return this._tabIndex; },
        set: function (v) {
            this._tabIndex = coerceNumberProperty(v);
            this.el.nativeElement.tabIndex = this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (v) {
            this._placeholder = v;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "required", {
        get: function () { return this._required; },
        set: function (v) {
            this._required = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (v) {
            if (v !== this._disabled) {
                this._disabled = coerceBooleanProperty(v);
                this.cdr.markForCheck();
                if (this.uniFormField) {
                    this.uniFormField.disabled = this._disabled;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (v) {
            this._autofocus = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "autocomplete", {
        get: function () { return this._autocomplete; },
        set: function (v) {
            this._autocomplete = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniFormFieldControlBase.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this.cdr.markForCheck();
                if (this.uniFormField) {
                    this.uniFormField.hasValue = !!v;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    UniFormFieldControlBase.prototype.ngOnInit = function () {
        if (this.uniFormField) {
            this.uniFormField.id = this._id;
        }
    };
    UniFormFieldControlBase.prototype.writeValue = function (v) {
        if (v !== this.value) {
            this.value = v;
        }
    };
    UniFormFieldControlBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    UniFormFieldControlBase.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    UniFormFieldControlBase.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    UniFormFieldControlBase.ɵfac = function UniFormFieldControlBase_Factory(t) { return new (t || UniFormFieldControlBase)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.UniFormFieldComponent, 8), i0.ɵɵdirectiveInject(i2.NgForm, 8), i0.ɵɵdirectiveInject(i2.FormGroupDirective, 8)); };
    UniFormFieldControlBase.ɵdir = i0.ɵɵdefineDirective({ type: UniFormFieldControlBase, inputs: { id: "id", tabIndex: "tabIndex", placeholder: "placeholder", required: "required", disabled: "disabled", autofocus: "autofocus", autocomplete: "autocomplete" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return UniFormFieldControlBase;
}(UniSubscriptionHelper));
export { UniFormFieldControlBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jb250cm9sLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7O0FBRXJGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmO0lBQWdELDJDQUFxQjtJQWdGbkUsaUNBQ1csRUFBMkIsRUFDM0IsR0FBc0IsRUFDVixZQUFtQyxFQUNuQyxNQUFjLEVBQ2QsV0FBK0I7UUFMdEQsWUFNSSxpQkFBTyxTQUFHO1FBTEgsUUFBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixrQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUFDbkMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQTlFNUMsU0FBRyxHQUFHLHFCQUFtQixFQUFFLE1BQVEsQ0FBQztRQVF0QyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBZ0JkLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFjbEIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQVFuQixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQWdCOUIsY0FBUSxH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QUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDOzs7T0FYa0M7SUF5Qm5DLDBDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsQ0FBSTtRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLEVBQW9CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtREFBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7a0dBOUdVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO2tDQVRwQztDQXdIQyxBQS9HRCxDQUFnRCxxQkFBcUIsR0ErR3BFO1NBL0dZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IFVuaVN1YnNjcmlwdGlvbkhlbHBlciB9IGZyb20gJy4uL2NvcmUvaGVscGVycyc7XG5pbXBvcnQgeyBVbmlGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5leHBvcnQgY2xhc3MgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2U8VD4gZXh0ZW5kcyBVbmlTdWJzY3JpcHRpb25IZWxwZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGlkKCkgeyByZXR1cm4gdGhpcy5faWQ7IH1cbiAgc2V0IGlkKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdjtcbiAgICB0aGlzLnVuaUZvcm1GaWVsZC5pZCA9IHY7XG4gIH1cbiAgcHJvdGVjdGVkIF9pZCA9IGB1bmktZm9ybS1maWVsZC0tJHsrK25leHRJZH1gO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWJJbmRleCgpIHsgcmV0dXJuIHRoaXMuX3RhYkluZGV4OyB9XG4gIHNldCB0YWJJbmRleCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90YWJJbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWJJbmRleCA9IHRoaXMuX3RhYkluZGV4O1xuICB9XG4gIHByaXZhdGUgX3RhYkluZGV4ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuICBzZXQgcGxhY2Vob2xkZXIodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2O1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgaWYgKHRoaXMudW5pRm9ybUZpZWxkKSB7XG4gICAgICAgIHRoaXMudW5pRm9ybUZpZWxkLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9mb2N1cygpIHsgcmV0dXJuIHRoaXMuX2F1dG9mb2N1czsgfVxuICBzZXQgYXV0b2ZvY3VzKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvZm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfYXV0b2ZvY3VzID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9jb21wbGV0ZSgpIHsgcmV0dXJuIHRoaXMuX2F1dG9jb21wbGV0ZTsgfVxuICBzZXQgYXV0b2NvbXBsZXRlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfYXV0b2NvbXBsZXRlID0gZmFsc2U7XG5cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKHY6IFQpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgaWYgKHRoaXMudW5pRm9ybUZpZWxkKSB7XG4gICAgICAgIHRoaXMudW5pRm9ybUZpZWxkLmhhc1ZhbHVlID0gISF2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIF92YWx1ZT86IFQ7XG5cbiAgb25DaGFuZ2U6ICh2OiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHJlYWRvbmx5IHVuaUZvcm1GaWVsZDogVW5pRm9ybUZpZWxkQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHJlYWRvbmx5IG5nRm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHJlYWRvbmx5IG5nRm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICkgeyBzdXBlcigpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudW5pRm9ybUZpZWxkKSB7XG4gICAgICB0aGlzLnVuaUZvcm1GaWVsZC5pZCA9IHRoaXMuX2lkO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodjogVCkge1xuICAgIGlmICh2ICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodjogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=