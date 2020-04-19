import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { UniDraggableDirection } from '../../../draggable/draggable-direction.enum';

@Component({
  moduleId: module.id,
  exportAs: 'uniScrollbar',
  selector: 'uni-scrollbar-x, uni-scrollbar-y',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  host: {
    class: 'uni-scrollbar',
    '[class.uni-scrollbar--dragging]': 'dragging',
    '[style.width.px]': 'isY ? size : undefined',
    '[style.height.px]': 'isY ? undefined : size',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniScrollbarComponent {
  @Input()
  get size() { return this._size; }
  set size(v: number) {
    this._size = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _size = 14;

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

  @Output() drag = new EventEmitter<number>();
  @Output() scrollTo = new EventEmitter<number>();

  dragging = false;

  get isY() {
    return this._name === 'uni-scrollbar-y';
  }

  get thumbHeight() {
    return this.isY ? this._thumbSize : undefined;
  }

  get thumbWidth() {
    return this.isY ? undefined : this._thumbSize;
  }

  get thumbTop() {
    return this.isY ? this._start : undefined;
  }

  get thumbLeft() {
    return this.isY ? undefined : this._start;
  }

  get dragDirection() {
    return this.isY ? UniDraggableDirection.Vertical : UniDraggableDirection.Horizontal;
  }

  private get _name() {
    return this._el.nativeElement.nodeName.toLowerCase();
  }

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _cdr: ChangeDetectorRef,
  ) {
    this._el.nativeElement.classList.add(this._name);
  }

  onDrag(e: number) {
    this.drag.emit(e);
  }

  onDragStart() {
    this.dragging = true;
  }

  onDragEnd() {
    this.dragging = false;
  }

  onThumbClick(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  onTrackClick(e: MouseEvent) {
    if (!this.dragging) {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (this.isY) {
        this.scrollTo.emit(e.offsetY);
      } else {
        this.scrollTo.emit(e.offsetX);
      }
    }
  }
}
