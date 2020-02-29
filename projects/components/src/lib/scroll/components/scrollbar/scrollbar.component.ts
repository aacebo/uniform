import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  moduleId: module.id,
  exportAs: 'uniScrollbar',
  selector: 'uni-scrollbar-x, uni-scrollbar-y',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  host: { class: 'uni-scrollbar' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniScrollbarComponent {
  @Input()
  get thumbSize() { return this._thumbSize; }
  set thumbSize(v: number) {
    if (v !== this._thumbSize) {
      this._thumbSize = coerceNumberProperty(v);
      this._cdr.markForCheck();
    }
  }
  private _thumbSize?: number;

  @Input()
  get start() { return this._start; }
  set start(v: number) {
    if (v !== this._start) {
      this._start = coerceNumberProperty(v);
      this._cdr.markForCheck();
    }
  }
  private _start?: number;

  get thumbHeight() {
    return this._isY ? this._thumbSize : undefined;
  }

  get thumbWidth() {
    return this._isY ? undefined : this._thumbSize;
  }

  get thumbTop() {
    return this._isY ? this._start : undefined;
  }

  get thumbLeft() {
    return this._isY ? undefined : this._start;
  }

  private get _name() {
    return this._el.nativeElement.nodeName.toLowerCase();
  }

  private get _isY() {
    return this._name === 'uni-scrollbar-y';
  }

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _cdr: ChangeDetectorRef,
  ) {
    this._el.nativeElement.classList.add(this._name);
  }
}
