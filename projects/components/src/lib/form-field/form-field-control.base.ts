import { Optional, Self, Input } from '@angular/core';
import { NgForm, NgControl, FormControl } from '@angular/forms';

import { UniFormFieldComponent } from './components/form-field/form-field.component';

export class UniFormFieldControlBase {
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() required?: boolean;
  @Input() disabled?: boolean;
  @Input() formControl = new FormControl();

  constructor(
    @Optional() public uniFormField: UniFormFieldComponent,
    @Optional() public ngForm: NgForm,
    @Optional() @Self() public ngControl: NgControl,
  ) {}
}
