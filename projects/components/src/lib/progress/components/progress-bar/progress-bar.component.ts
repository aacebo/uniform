import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniProgressMode } from '../../enums/progress-mode.enum';
import { UniColor } from '../../../core/enums';
import { uniColors } from '../../../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-progress-bar',
  exportAs: 'uniProgresssBar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  host: {
    class: 'uni-progress-bar',
    '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniProgressBarComponent {
  @Input() mode = UniProgressMode.Indeterminate;
  @Input() color = UniColor.Primary;

  @Input()
  get total() { return this._total; }
  set total(v: number) {
    this._total = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _total = 100;

  @Input()
  get value() { return this._value; }
  set value(v: number) {
    this._value = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _value = 0;

  get colors() {
    return uniColors(this.color);
  }

  get percentage() {
    return (100 / this.total) * this.value;
  }

  readonly UniProgressMode = UniProgressMode;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
