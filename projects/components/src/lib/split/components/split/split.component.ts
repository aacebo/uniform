import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { UniSubscriptionHelper } from '../../../core/helpers';

import { UniSplitAreaComponent } from '../area/split-area.component';
import { UniSplitHandleComponent } from '../handle/split-handle.component';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import { areaPct } from '../../utils/area-pct/area-pct.util';

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
export class UniSplitComponent extends UniSubscriptionHelper {
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

  @ContentChild(UniSplitHandleComponent)
  get handle() { return this._handle; }
  set handle(v: UniSplitHandleComponent) {
    if (v) {
      this._handle = v;
      this._handle.direction = this._vertical ? UniSplitDirection.Vertical :
                                                UniSplitDirection.Horizontal;
      this._handle.resize.pipe(takeUntil(this.destroy$)).subscribe(this._onResize.bind(this));
    }
  }
  private _handle: UniSplitHandleComponent;

  private get _name() {
    return this._el.nativeElement.nodeName.toLowerCase();
  }

  private get _vertical() {
    return this._name === 'uni-vertical-split';
  }

  constructor(private readonly _el: ElementRef<HTMLElement>) {
    super();
    this._el.nativeElement.classList.add(this._name);
  }

  private _onResize(distance: number) {
    if (this._areas) {
      let pct: number;

      if (this._vertical) {
        pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
      } else {
        pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
      }

      this._areas.first.flex = `0 0 ${ pct <= 100 ? pct : 100 }%`;
    }
  }
}
