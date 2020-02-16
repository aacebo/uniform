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
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniTabComponent } from '../tab/tab.component';
import { UniTabDirection } from '../../enums/tab-direction.enum';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-group',
  exportAs: 'uniTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    class: 'uni-tab-group',
    '[class.uni-tab-group--start]': 'direction === UniTabDirection.Start',
    '[class.uni-tab-group--end]': 'direction === UniTabDirection.End',
    '[class.uni-tab-group--center]': 'direction === UniTabDirection.Center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTabGroupComponent implements AfterContentInit {
  @Input()
  get direction() { return this._direction; }
  set direction(v: UniTabDirection) {
    if (v !== this._direction) {
      this._direction = v;
      this._cdr.markForCheck();
    }
  }
  private _direction = UniTabDirection.Start;

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

  readonly UniTabDirection = UniTabDirection;

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
