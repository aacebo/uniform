import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  moduleId: module.id,
  exportAs: 'uniSplitArea',
  selector: 'uni-split-area',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./split-area.component.scss'],
  host: {
    class: 'uni-split-area',
    '[style.order]': 'index',
    '[style.flex]': 'flex',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSplitAreaComponent {
  get flex() { return this._flex; }
  set flex(v: string) {
    if (v !== this._flex) {
      this._flex = v;
      this._cdr.markForCheck();
    }
  }
  private _flex?: string;

  get index() { return this._index; }
  set index(v: number) {
    if (v !== this._index) {
      this._index = coerceNumberProperty(v);
      this._cdr.markForCheck();
    }
  }
  private _index?: number;

  get dirty() { return this._dirty; }
  private _dirty = false;

  get clientWidth() {
    return this._el.nativeElement.clientWidth;
  }

  get clientHeight() {
    return this._el.nativeElement.clientHeight;
  }

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }
}
