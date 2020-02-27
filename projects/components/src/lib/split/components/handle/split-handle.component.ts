import { Component, ChangeDetectionStrategy, ViewEncapsulation, Output, HostListener, EventEmitter } from '@angular/core';

import { UniSplitDirection } from '../../enums/split-direction.enum';

@Component({
  moduleId: module.id,
  exportAs: 'uniSplitHandle',
  selector: 'uni-split-handle',
  template: ``,
  styleUrls: ['./split-handle.component.scss'],
  host: {
    class: 'uni-split-handle',
    '[class.uni-split-handle--resizing]': 'resizing',
    '[class.uni-split-handle--vertical]': 'vertical',
    '[class.uni-split-handle--horizontal]': '!vertical',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSplitHandleComponent {
  @Output() resize = new EventEmitter<number>();

  direction?: UniSplitDirection;

  get resizing() {
    return this._x !== undefined;
  }

  get vertical() {
    return this.direction === UniSplitDirection.Vertical;
  }

  private _x?: number;
  private _y?: number;

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    if (this.vertical) {
      this._x = e.clientX;
    } else {
      this._y = e.clientY;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    e.preventDefault();

    if (this._x !== undefined) {
      this.resize.emit(e.clientX - this._x);
      this._x = e.clientX;
    } else if (this._y !== undefined) {
      this.resize.emit(e.clientY - this._y);
      this._y = e.clientY;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this._x !== undefined) {
      this._x = undefined;
    }

    if (this._y !== undefined) {
      this._y = undefined;
    }
  }
}
