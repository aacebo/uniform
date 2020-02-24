import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef, ContentChild, EventEmitter } from '@angular/core';

import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';

import { UniLabelComponent } from '../label/label.component';
import { UniErrorComponent } from '../error/error.component';

@Component({
  moduleId: module.id,
  selector: 'uni-form-field',
  exportAs: 'uniFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'uni-form-field',
    '[class.focused]': 'focused',
    '[class.has-value]': 'hasValue',
    '[class.has-label]': '!!label',
    '[class.has-error]': '!!error',
    ...UNI_HOST_COLORS,
    '(click)': 'clicked.emit($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldComponent {
  @Input() color = UniColor.Primary;

  @ContentChild(UniLabelComponent)
  get label() { return this._label; }
  set label(v: UniLabelComponent) {
    if (v !== this._label) {
      this._label = v;

      if (this._label) {
        this._label.for = this._id;
      }
    }
  }
  private _label?: UniLabelComponent;

  @ContentChild(UniErrorComponent)
  get error() { return this._error; }
  set error(v: UniErrorComponent) {
    if (v !== this._error) {
      this._error = v;
    }
  }
  private _error?: UniErrorComponent;

  get id() { return this._id; }
  set id(v: string) {
    if (v !== this._id) {
      this._id = v;

      if (this._label) {
        this._label.for = this._id;
      }

      this._cdr.markForCheck();
    }
  }
  private _id?: string;

  get focused() { return this._focused; }
  set focused(v: boolean) {
    if (v !== this._focused) {
      this._focused = v;
      this._cdr.markForCheck();
    }
  }
  private _focused?: boolean;

  get hasValue() { return this._hasValue; }
  set hasValue(v: boolean) {
    if (v !== this._hasValue) {
      this._hasValue = v;
      this._cdr.markForCheck();
    }
  }
  private _hasValue?: boolean;

  readonly clicked = new EventEmitter<Event>();

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
