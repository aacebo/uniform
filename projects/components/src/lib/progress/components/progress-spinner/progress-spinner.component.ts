import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { uniColorMixin } from '../../../core/color/color.mixin';
import { UniColor } from '../../../core/color/color.enum';

import { UniProgressMode } from '../../enums/progress-mode.enum';
import { IUniProgress } from '../../progress.interface';

class UniProgressSpinnerBase { }
const _UniProgressSpinnerMixinBase = uniColorMixin(UniProgressSpinnerBase);

@Component({
  moduleId: module.id,
  selector: 'uni-progress-spinner',
  exportAs: 'uniProgressSpinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  host: {
    class: 'uni-progress-spinner',
    '[class.indeterminate]': 'mode === UniProgressMode.Indeterminate',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniProgressSpinnerComponent extends _UniProgressSpinnerMixinBase implements IUniProgress {
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

  @Input()
  get strokeWidth() { return this._strokeWidth; }
  set strokeWidth(v: number) {
    this._strokeWidth = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _strokeWidth = 5;

  @Input()
  get diameter() { return this._diameter; }
  set diameter(v: number) {
    this._diameter = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _diameter = 90;

  private readonly _indeterminate = {
    value: 25,
    total: 100,
  };

  get radius() {
    return (this.diameter / 2) - this.strokeWidth;
  }

  get strokeDasharray() {
    return `${this._circumference} ${this._circumference}`;
  }

  get strokeDashoffset() {
    return this._circumference - this._percentage / 100 * this._circumference;
  }

  private get _circumference() {
    return this.radius * 2 * Math.PI;
  }

  private get _percentage() {
    return (100 / this._modeTotal) * this._modeValue;
  }

  private get _modeValue() {
    return this.mode === UniProgressMode.Determinate ? this.value : this._indeterminate.value;
  }

  private get _modeTotal() {
    return this.mode === UniProgressMode.Determinate ? this.total : this._indeterminate.total;
  }

  readonly UniProgressMode = UniProgressMode;

  constructor(private readonly _cdr: ChangeDetectorRef) { super(); }
}
