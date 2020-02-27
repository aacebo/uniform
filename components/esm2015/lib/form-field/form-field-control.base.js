import { Optional, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { UniSubscriptionHelper } from '../core/helpers';
import { UniFormFieldComponent } from './components/form-field/form-field.component';
import * as i0 from "@angular/core";
import * as i1 from "./components/form-field/form-field.component";
import * as i2 from "@angular/forms";
let nextId = 0;
export class UniFormFieldControlBase extends UniSubscriptionHelper {
    constructor(el, cdr, uniFormField, ngForm, ngFormGroup) {
        super();
        this.el = el;
        this.cdr = cdr;
        this.uniFormField = uniFormField;
        this.ngForm = ngForm;
        this.ngFormGroup = ngFormGroup;
        this._id = `uni-form-field--${++nextId}`;
        this._tabIndex = 0;
        this._required = false;
        this._disabled = false;
        this._autofocus = false;
        this._autocomplete = false;
        this.onChange = () => { };
        this.onTouch = () => { };
    }
    get id() { return this._id; }
    set id(v) {
        this._id = v;
        this.uniFormField.id = v;
    }
    get tabIndex() { return this._tabIndex; }
    set tabIndex(v) {
        this._tabIndex = coerceNumberProperty(v);
        this.el.nativeElement.tabIndex = this._tabIndex;
    }
    get placeholder() { return this._placeholder; }
    set placeholder(v) {
        this._placeholder = v;
        this.cdr.markForCheck();
    }
    get required() { return this._required; }
    set required(v) {
        this._required = coerceBooleanProperty(v);
        this.cdr.markForCheck();
    }
    get disabled() { return this._disabled; }
    set disabled(v) {
        if (v !== this._disabled) {
            this._disabled = coerceBooleanProperty(v);
            this.cdr.markForCheck();
            if (this.uniFormField) {
                this.uniFormField.disabled = this._disabled;
            }
        }
    }
    get autofocus() { return this._autofocus; }
    set autofocus(v) {
        this._autofocus = coerceBooleanProperty(v);
        this.cdr.markForCheck();
    }
    get autocomplete() { return this._autocomplete; }
    set autocomplete(v) {
        this._autocomplete = coerceBooleanProperty(v);
        this.cdr.markForCheck();
    }
    get value() { return this._value; }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.cdr.markForCheck();
            if (this.uniFormField) {
                this.uniFormField.hasValue = !!v;
            }
        }
    }
    ngOnInit() {
        if (this.uniFormField) {
            this.uniFormField.id = this._id;
        }
    }
    writeValue(v) {
        if (v !== this.value) {
            this.value = v;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
UniFormFieldControlBase.ɵfac = function UniFormFieldControlBase_Factory(t) { return new (t || UniFormFieldControlBase)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.UniFormFieldComponent, 8), i0.ɵɵdirectiveInject(i2.NgForm, 8), i0.ɵɵdirectiveInject(i2.FormGroupDirective, 8)); };
UniFormFieldControlBase.ɵdir = i0.ɵɵdefineDirective({ type: UniFormFieldControlBase, inputs: { id: "id", tabIndex: "tabIndex", placeholder: "placeholder", required: "required", disabled: "disabled", autofocus: "autofocus", autocomplete: "autocomplete" }, features: [i0.ɵɵInheritDefinitionFeature] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jb250cm9sLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFckYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWYsTUFBTSxPQUFPLHVCQUEyQixTQUFRLHFCQUFxQjtJQWdGbkUsWUFDVyxFQUEyQixFQUMzQixHQUFzQixFQUNWLFlBQW1DLEVBQ25DLE1BQWMsRUFDZCxXQUErQjtRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUxELE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUE5RTVDLFFBQUcsR0FBRyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQVF0QyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBZ0JkLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFjbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUW5CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBZ0I5QixhQUFRLEdBQXFCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN0QyxZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBUU4sQ0FBQztJQXJGZCxJQUNJLEVBQUUsS0FBSyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksRUFBRSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR0QsSUFDSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFTO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUdELElBQ0ksV0FBVyxLQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxXQUFXLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxJQUNJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLENBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxJQUNJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLENBQVU7UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdDO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsSUFDSSxTQUFTLEtBQUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLFNBQVMsQ0FBQyxDQUFVO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBR0QsSUFDSSxZQUFZLEtBQUssT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLFlBQVksQ0FBQyxDQUFVO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBR0QsSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLEtBQUssQ0FBQyxDQUFJO1FBQ1osSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBY0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFJO1FBQ2IsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OEZBOUdVLHVCQUF1Qjs0REFBdkIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIElucHV0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgVW5pU3Vic2NyaXB0aW9uSGVscGVyIH0gZnJvbSAnLi4vY29yZS9oZWxwZXJzJztcbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50JztcblxubGV0IG5leHRJZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVbmlGb3JtRmllbGRDb250cm9sQmFzZTxUPiBleHRlbmRzIFVuaVN1YnNjcmlwdGlvbkhlbHBlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZDsgfVxuICBzZXQgaWQodjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2O1xuICAgIHRoaXMudW5pRm9ybUZpZWxkLmlkID0gdjtcbiAgfVxuICBwcm90ZWN0ZWQgX2lkID0gYHVuaS1mb3JtLWZpZWxkLS0keysrbmV4dElkfWA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhYkluZGV4KCkgeyByZXR1cm4gdGhpcy5fdGFiSW5kZXg7IH1cbiAgc2V0IHRhYkluZGV4KHY6IG51bWJlcikge1xuICAgIHRoaXMuX3RhYkluZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodik7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRhYkluZGV4ID0gdGhpcy5fdGFiSW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfdGFiSW5kZXggPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG4gIHNldCBwbGFjZWhvbGRlcih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHY7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2OiBib29sZWFuKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICBpZiAodGhpcy51bmlGb3JtRmllbGQpIHtcbiAgICAgICAgdGhpcy51bmlGb3JtRmllbGQuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgYXV0b2ZvY3VzKCkgeyByZXR1cm4gdGhpcy5fYXV0b2ZvY3VzOyB9XG4gIHNldCBhdXRvZm9jdXModjogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9mb2N1cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9hdXRvZm9jdXMgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgYXV0b2NvbXBsZXRlKCkgeyByZXR1cm4gdGhpcy5fYXV0b2NvbXBsZXRlOyB9XG4gIHNldCBhdXRvY29tcGxldGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9hdXRvY29tcGxldGUgPSBmYWxzZTtcblxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICBzZXQgdmFsdWUodjogVCkge1xuICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICBpZiAodGhpcy51bmlGb3JtRmllbGQpIHtcbiAgICAgICAgdGhpcy51bmlGb3JtRmllbGQuaGFzVmFsdWUgPSAhIXY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3ZhbHVlPzogVDtcblxuICBvbkNoYW5nZTogKHY6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBvblRvdWNoID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcmVhZG9ubHkgdW5pRm9ybUZpZWxkOiBVbmlGb3JtRmllbGRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcmVhZG9ubHkgbmdGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcmVhZG9ubHkgbmdGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgKSB7IHN1cGVyKCk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51bmlGb3JtRmllbGQpIHtcbiAgICAgIHRoaXMudW5pRm9ybUZpZWxkLmlkID0gdGhpcy5faWQ7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2OiBUKSB7XG4gICAgaWYgKHYgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2OiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==