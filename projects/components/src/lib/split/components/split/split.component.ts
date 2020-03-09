import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ContentChildren, QueryList } from '@angular/core';

import { UniSubscription } from '../../../core/classes';
import { pxToPct } from '../../../core/utils';

import { UniSplitAreaComponent } from '../area/split-area.component';

@Component({
  moduleId: module.id,
  exportAs: 'uniSplit',
  selector: 'uni-vertical-split, uni-horizontal-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss'],
  host: { class: 'uni-split' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSplitComponent extends UniSubscription {
  @ContentChildren(UniSplitAreaComponent)
  get areas() { return this._areas; }
  set areas(v: QueryList<UniSplitAreaComponent>) {
    if (v && v.length === 2) {
      this._areas = v;

      if (this._areas.first.index === undefined) {
        this._areas.first.index = 0;
      }

      if (this._areas.last.index === undefined) {
        this._areas.last.index = 2;
      }
    }
  }
  private _areas: QueryList<UniSplitAreaComponent>;

  get vertical() {
    return this._name === 'uni-vertical-split';
  }

  private get _name() {
    return this.el.nativeElement.nodeName.toLowerCase();
  }

  constructor(readonly el: ElementRef<HTMLElement>) {
    super();
    this.el.nativeElement.classList.add(this._name);
  }

  onDrag(e: number) {
    if (this._areas) {
      let pct: number;

      if (this.vertical) {
        pct = pxToPct(this._areas.first.clientWidth + e, this.el.nativeElement.clientWidth);
      } else {
        pct = pxToPct(this._areas.first.clientHeight + e, this.el.nativeElement.clientHeight);
      }

      this._areas.first.flex = `0 0 ${ pct <= 100 ? pct : 100 }%`;
    }
  }
}
