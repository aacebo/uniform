import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-label',
  exportAs: 'uniTabLabel',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
  host: {
    class: 'uni-tab-label',
    '[class.active]': 'active',
    '[class.disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniTabLabelComponent {
  @Input()
  get active() { return this._active; }
  set active(v: boolean) {
    this._active = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _active = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _disabled = false;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
