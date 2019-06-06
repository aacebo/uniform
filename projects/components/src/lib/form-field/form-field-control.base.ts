import { Optional, Input, ElementRef } from '@angular/core';
import { NgForm, FormGroupDirective, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniFormFieldComponent } from './components/form-field/form-field.component';

export class UniFormFieldControlBase<T> implements ControlValueAccessor {
  @Input()
  get value() { return this._value; }
  set value(v: T) {
    this._value = v;
    this._onChange(v);
  }
  private _value?: T;

  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(v: string) {
    this._placeholder = v;
  }
  private _placeholder?: string;

  @Input()
  get required() { return this._required; }
  set required(v: boolean) {
    this._required = coerceBooleanProperty(v);
  }
  private _required?: boolean;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
  }
  private _disabled?: boolean;

  _onChange: (v: any) => void = () => {};
  _onTouch = () => {};

  constructor(
    readonly el: ElementRef,
    @Optional() readonly uniFormField: UniFormFieldComponent,
    @Optional() readonly ngForm: NgForm,
    @Optional() readonly ngFormGroup: FormGroupDirective
  ) {}

  writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  registerOnChange(fn: (v: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this._onTouch = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}