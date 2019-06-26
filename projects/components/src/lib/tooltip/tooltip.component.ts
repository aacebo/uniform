import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UNI_POSITIONS, UniPosition } from '../core/position';

@Component({
  moduleId: module.id,
  selector: 'uni-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    class: 'uni-tooltip',
    ...UNI_POSITIONS
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniTooltipComponent {
  @Input() text: string;
  @Input() position: UniPosition;

  get top() {
    return this.position === UniPosition.Top;
  }

  get bottom() {
    return this.position === UniPosition.Bottom;
  }

  get left() {
    return this.position === UniPosition.Left;
  }

  get right() {
    return this.position === UniPosition.Right;
  }
}
