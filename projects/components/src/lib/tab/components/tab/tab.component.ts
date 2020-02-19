import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import { UniTabBodyDirective } from '../../directives/tab-body/tab-body.directive';

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
  @Input() label?: string;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _disabled = false;

  @ContentChild(UniTabLabelComponent, { static: true })
  readonly uniLabel?: UniTabLabelComponent;

  @ContentChild(UniTabBodyDirective, { static: false })
  readonly uniBody?: UniTabBodyDirective;

  get active() { return this._active; }
  set active(v: boolean) {
    if (v !== this._active) {
      this._active = v;
      this._cdr.markForCheck();
    }
  }
  private _active = false;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
