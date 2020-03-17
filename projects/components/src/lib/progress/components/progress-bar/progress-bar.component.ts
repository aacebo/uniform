import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniColor } from '../../../core/color/color.enum';
import { uniColorMixin } from '../../../core/color/color.mixin';

import { UniProgressMode } from '../../enums/progress-mode.enum';
import { IUniProgress } from '../../progress.interface';

class UniProgressBarBase { }
const _UniProgressBarMixinBase = uniColorMixin(UniProgressBarBase);

@Component({
  moduleId: module.id,
  selector: 'uni-progress-bar',
  exportAs: 'uniProgresssBar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  host: {
    class: 'uni-progress-bar',
    '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate',
    '[class.primary]': 'color === "primary"',
    '[class.success]': 'color === "success"',
    '[class.warning]': 'color === "warning"',
    '[class.danger]': 'color === "danger"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniProgressBarComponent extends _UniProgressBarMixinBase implements IUniProgress {
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

  get percentage() {
    return this.mode === UniProgressMode.Determinate ?
      (100 / this.total) * this.value :
      (100 / this._indeterminate.total) * this._indeterminate.value;
  }

  readonly UniProgressMode = UniProgressMode;
  private readonly _indeterminate = {
    value: 25,
    total: 100,
  };

  constructor(private readonly _cdr: ChangeDetectorRef) { super(); }
}
