import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  ElementRef,
  Input,
  Output,
  EventEmitter,
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
    '[style.flex-grow]': 'grow',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSplitAreaComponent {
  @Input()
  get flex() { return this._flex; }
  set flex(v: string) {
    if (v !== this._flex) {
      this._flex = v;
      this._cdr.markForCheck();
      this.flexChange.emit(this._flex);
    }
  }
  private _flex?: string;

  @Input()
  get index() { return this._index; }
  set index(v: number) {
    if (v !== this._index) {
      this._index = coerceNumberProperty(v);
      this._cdr.markForCheck();
    }
  }
  private _index?: number;

  @Output() flexChange = new EventEmitter<string>();

  get grow() { return this._grow; }
  set grow(v) {
    this._grow = v;
    this._cdr.markForCheck();
  }
  private _grow = 1;

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

  setFlex(flex: string) {
    this._flex = flex;
    this._dirty = true;
    this._cdr.markForCheck();
    this.flexChange.emit(flex);
  }
}
