import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniTabComponent } from '../tab/tab.component';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-group',
  exportAs: 'uniTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: { class: 'uni-tab-group' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTabGroupComponent {
  @Input()
  get active() { return this._active; }
  set active(v: number) {
    if (v !== this._active) {
      this._active = coerceNumberProperty(v);
      this._setActive();
      this.activeChange.emit(this._active);
    }
  }
  private _active = 0;

  @Output() activeChange = new EventEmitter<number>();

  @ContentChildren(UniTabComponent)
  get tabs() { return this._tabs; }
  set tabs(v: QueryList<UniTabComponent>) {
    this._tabs = v;

    setTimeout(() => {
      this._setActive();
    });
  }
  private _tabs: QueryList<UniTabComponent>;

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  select(index: number) {
    this.active = index;
  }

  private _setActive() {
    if (this.tabs) {
      this.tabs.forEach((tab, i) => {
        tab.active = i === this._active;
      });
    }

    this._cdr.markForCheck();
  }
}
