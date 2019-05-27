import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniTooltipPosition } from './tooltip-position.enum';
import { UNI_POSITIONS } from '../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    class: 'uni-tooltip',
    ...UNI_POSITIONS,
    '[class.top]': 'top',
    '[class.bottom]': 'bottom',
    '[class.left]': 'left',
    '[class.right]': 'right'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniTooltipComponent {
  @Input() text: string;
  @Input() position: UniTooltipPosition;

  get top() {
    return this.position === UniTooltipPosition.Top;
  }

  get bottom() {
    return this.position === UniTooltipPosition.Bottom;
  }

  get left() {
    return this.position === UniTooltipPosition.Left;
  }

  get right() {
    return this.position === UniTooltipPosition.Right;
  }
}
