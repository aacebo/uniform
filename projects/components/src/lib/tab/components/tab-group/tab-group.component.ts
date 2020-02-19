import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChildren,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniTabComponent } from '../tab/tab.component';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';

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
export class UniTabGroupComponent implements AfterContentInit {
  @Input()
  get active() { return this._active; }
  set active(v: number) {
    if (v !== this._active) {
      this._active = coerceNumberProperty(v);
      this._cdr.markForCheck();
      this.activeChange.emit(this._active);
    }
  }
  private _active = 0;

  @Output() activeChange = new EventEmitter<number>();

  @ContentChildren(UniTabComponent)
  readonly tabs: QueryList<UniTabComponent>;

  @ViewChildren(UniTabLabelComponent)
  get labels() { return this._labels; }
  set labels(v: QueryList<UniTabLabelComponent>) {
    setTimeout(() => {
      this._labels = v;
      this._cdr.markForCheck();
    });
  }
  private _labels: QueryList<UniTabLabelComponent>;

  get transform() {
    let width = 0;

    for (let i = 0; i < this._active; i++) {
      width += this._labels.toArray()[i].width;
    }

    return `translateX(${ width }px)`;
  }

  get activeLabel() {
    return this._labels.toArray()[this._active];
  }

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
      tab.active = i === this._active;
    });
  }
}
