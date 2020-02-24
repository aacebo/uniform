import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
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
    '(change)': 'onInput()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniInputComponent extends UniFormFieldControlBase<string> implements OnInit, AfterViewInit {
  private get _element() {
    return this.el.nativeElement as  HTMLInputElement | HTMLTextAreaElement;
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
  }
}
