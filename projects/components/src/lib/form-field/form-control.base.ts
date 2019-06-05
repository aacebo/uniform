import { Optional, Self, Input } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';

import { UniFormFieldComponent } from './components/form-field/form-field.component';

export class UniFormControlBase {
  @Input() placeholder?: string;
  @Input() required?: boolean;
  @Input() disabled?: boolean;

  constructor(
    @Optional() public uniFormField: UniFormFieldComponent,
    @Optional() public ngForm: NgForm,
    @Optional() @Self() public ngControl: NgControl,
  ) {}
}
