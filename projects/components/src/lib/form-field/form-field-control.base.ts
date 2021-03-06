import { Optional, Input, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgForm, FormGroupDirective, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

import { UniFormFieldComponent } from './components/form-field/form-field.component';

let nextId = 0;

export class UniFormFieldControlBase<T> implements ControlValueAccessor, OnInit {
  @Input()
  get id() { return this._id; }
  set id(v: string) {
    this._id = v;
    this.uniFormField.id = v;
  }
  protected _id = `uni-form-field--${++nextId}`;

  @Input()
  get tabIndex() { return this._tabIndex; }
  set tabIndex(v: number) {
    this._tabIndex = coerceNumberProperty(v);
    this.el.nativeElement.tabIndex = this._tabIndex;
  }
  protected _tabIndex = 0;

  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(v: string) {
    this._placeholder = v;
    this.cdr.markForCheck();
  }
  protected _placeholder?: string;

  @Input()
  get required() { return this._required; }
  set required(v: boolean) {
    this._required = coerceBooleanProperty(v);
    this.cdr.markForCheck();
  }
  protected _required = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    if (v !== this._disabled) {
      this._disabled = coerceBooleanProperty(v);
      this.cdr.markForCheck();

      if (this.uniFormField) {
        this.uniFormField.disabled = this._disabled;
      }
    }
  }
  protected _disabled = false;

  @Input()
  get autofocus() { return this._autofocus; }
  set autofocus(v: boolean) {
    this._autofocus = coerceBooleanProperty(v);
    this.cdr.markForCheck();
  }
  protected _autofocus = false;

  @Input()
  get autocomplete() { return this._autocomplete; }
  set autocomplete(v: boolean) {
    this._autocomplete = coerceBooleanProperty(v);
    this.cdr.markForCheck();
  }
  protected _autocomplete = false;

  get value() { return this._value; }
  set value(v: T) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.cdr.markForCheck();

      if (this.uniFormField) {
        this.uniFormField.hasValue = !!v;
      }
    }
  }
  protected _value?: T;

  onChange: (v: any) => void = () => {};
  onTouch = () => {};

  constructor(
    readonly el: ElementRef<HTMLElement>,
    readonly cdr: ChangeDetectorRef,
    @Optional() readonly uniFormField: UniFormFieldComponent,
    @Optional() readonly ngForm: NgForm,
    @Optional() readonly ngFormGroup: FormGroupDirective,
  ) { }

  ngOnInit() {
    if (this.uniFormField) {
      this.uniFormField.id = this._id;
    }
  }

  writeValue(v: T) {
    if (v !== this.value) {
      this.value = v;
    }
  }

  registerOnChange(fn: (v: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
