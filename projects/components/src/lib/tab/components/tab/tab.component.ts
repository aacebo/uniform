import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef } from '@angular/core';

import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import { UniTabBodyDirective } from '../../directives/tab-body';

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
})
export class UniTabComponent {
  @Input() label?: string;

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
