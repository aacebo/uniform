import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { UniDraggableDirective } from '../../../draggable';

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
export class UniSplitHandleComponent extends UniDraggableDirective {
  get resizing() {
    return this._x !== undefined || this._y !== undefined;
  }
}
