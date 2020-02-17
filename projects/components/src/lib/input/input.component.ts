import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
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
export class UniInputComponent extends UniFormFieldControlBase<string> implements OnInit {
  private get _element() {
    return this.el.nativeElement as  HTMLInputElement | HTMLTextAreaElement;
  }

  ngOnInit() {
    super.ngOnInit();

    this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this._element.focus();
    });
  }

  onFocus(e: boolean) {
    this.uniFormField.focused = e;
  }

  onInput() {
    this.uniFormField.hasValue = !!this._element.value;
  }
}
