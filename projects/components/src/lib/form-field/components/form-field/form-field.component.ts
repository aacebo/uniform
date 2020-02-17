import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';

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
    ...UNI_HOST_COLORS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldComponent {
  @Input() color = UniColor.Primary;

  get id() { return this._id; }
  set id(v: string) {
    if (v !== this._id) {
      this._id = v;
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

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
