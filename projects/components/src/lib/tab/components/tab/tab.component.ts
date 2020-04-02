import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniTabBodyDirective } from '../../directives/tab-body/tab-body.directive';
import { UniTabLabelDirective } from '../../directives/tab-label/tab-label.directive';

@Component({
  moduleId: module.id,
  selector: 'uni-tab',
  exportAs: 'uniTab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: {
    class: 'uni-tab',
    '[class.active]': 'active',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTabComponent {
  @Input()
  get label() { return this._label; }
  set label(v: string) {
    this._label = v;
    this._cdr.markForCheck();
  }
  private _label?: string;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _disabled = false;

  @ContentChild(UniTabLabelDirective)
  get uniLabel() { return this._uniLabel; }
  set uniLabel(v: UniTabLabelDirective) {
    this._uniLabel = v;
    this._cdr.markForCheck();
  }
  private _uniLabel?: UniTabLabelDirective;

  @ContentChild(UniTabBodyDirective)
  get uniBody() { return this._uniBody; }
  set uniBody(v: UniTabBodyDirective) {
    this._uniBody = v;
    this._cdr.markForCheck();
  }
  private _uniBody?: UniTabBodyDirective;

  get active() { return this._active; }
  set active(v: boolean) {
    if (v !== this._active) {
      this._active = v;
      this._cdr.detectChanges();
    }
  }
  private _active = false;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
