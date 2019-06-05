import { Optional, Self, Input, ElementRef } from '@angular/core';
import { NgForm, NgControl, FormControl } from '@angular/forms';

import { UniFormFieldComponent } from './components/form-field/form-field.component';

export class UniFormFieldControlBase {
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() required?: boolean;
  @Input() disabled?: boolean;
  @Input() formControl = new FormControl();

  onChange: (v: any) => void = () => {};
  onTouch = () => {};

  constructor(
    readonly el: ElementRef,
    @Optional() readonly uniFormField: UniFormFieldComponent,
    @Optional() readonly ngForm: NgForm,
    @Optional() @Self() readonly ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any) {
  }

  registerOnChange(fn: (v: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouch = fn;
  }
}
