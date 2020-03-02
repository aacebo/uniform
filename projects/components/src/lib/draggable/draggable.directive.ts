import { Output, HostListener, EventEmitter, Directive, Input } from '@angular/core';

import { UniDraggableDirection } from './draggable-direction.enum';

@Directive({
  exportAs: 'uniDraggable',
  selector: '[uniDraggable]',
  host: {
    class: 'uni-draggable',
    '[class.uni-draggable--dragging]': 'dragging',
  },
})
export class UniDraggableDirective {
  @Input('uniDraggable') direction = UniDraggableDirection.Vertical;

  @Output('uniDraggableDrag') drag = new EventEmitter<number>();
  @Output('uniDraggableDragStart') dragStart = new EventEmitter<number>();
  @Output('uniDraggableDragEnd') dragEnd = new EventEmitter<number>();

  get vertical() {
    return this.direction === UniDraggableDirection.Vertical;
  }

  get dragging() {
    return this._x !== undefined || this._y !== undefined;
  }

  protected _x?: number;
  protected _y?: number;

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    if (!this.vertical) {
      this._x = e.clientX;
    } else {
      this._y = e.clientY;
    }

    this.dragStart.emit(this.vertical ? e.clientY : e.clientX);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    e.preventDefault();

    if (this._x !== undefined) {
      this.drag.emit(e.clientX - this._x);
      this._x = e.clientX;
    } else if (this._y !== undefined) {
      this.drag.emit(e.clientY - this._y);
      this._y = e.clientY;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    if (this._x !== undefined) {
      this._x = undefined;
    }

    if (this._y !== undefined) {
      this._y = undefined;
    }

    this.dragEnd.emit(this.vertical ? e.clientY : e.clientX);
  }
}
