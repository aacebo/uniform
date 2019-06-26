import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniPopoverPosition } from './popover-position.enum';
import { UNI_POSITIONS } from '../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: {
    class: 'uni-popover',
    ...UNI_POSITIONS
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniPopoverComponent {
  @Input() text: string;
  @Input() position: UniPopoverPosition;
  @Input() title?: string;

  get top() {
    return this.position === UniPopoverPosition.Top;
  }

  get bottom() {
    return this.position === UniPopoverPosition.Bottom;
  }

  get left() {
    return this.position === UniPopoverPosition.Left;
  }

  get right() {
    return this.position === UniPopoverPosition.Right;
  }
}
