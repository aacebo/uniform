import { Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniTabComponent } from '../tab/tab.component';
import { UniColor } from '../../../core/enums';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-group',
  exportAs: 'uniTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    class: 'uni-tab-group',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniTabGroupComponent implements AfterContentInit {
  @Input() color = UniColor.Secondary;

  @Input()
  get active() { return this._active; }
  set active(v: number) {
    this._active = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _active = 0;

  @ContentChildren(UniTabComponent)
  readonly tabs: QueryList<UniTabComponent>;

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this._setActive();
  }

  select(index: number) {
    this.active = index;
    this._setActive();
  }

  private _setActive() {
    this.tabs.forEach((tab, i) => {
      tab.active = false;

      if (i === this._active) {
        tab.active = true;
      }
    });
  }
}
