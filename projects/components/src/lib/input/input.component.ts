import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, AfterViewInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';

import { UniFormFieldControlBase } from '../form-field/form-field-control.base';

@Component({
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
})
export class UniInputComponent extends UniFormFieldControlBase<string> implements OnInit, AfterViewInit {
  @Input()
  get autoResize() { return this._autoResize; }
  set autoResize(v: boolean) {
    if (v !== this._autoResize) {
      this._autoResize = coerceBooleanProperty(v);
      this.cdr.markForCheck();
    }
  }
  private _autoResize?: boolean;

  private get _height() {
    return this._isTextArea && this._autoResize ? `${ this._element.scrollHeight }px` : 'auto';
  }

  private get _element() {
    return this.el.nativeElement as  HTMLInputElement | HTMLTextAreaElement;
  }

  private get _isTextArea() {
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

  onFocus(e: boolean) {
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
