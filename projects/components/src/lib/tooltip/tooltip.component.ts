import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniArrowPosition } from '../core/arrow';
import { UniTooltipPosition } from './tooltip-position.enum';
import { UNI_POSITIONS } from '../core/constants';

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

  get arrowPosition() {
    return this.position === UniTooltipPosition.Top ? UniArrowPosition.Bottom :
           this.position === UniTooltipPosition.Bottom ? UniArrowPosition.Top :
           this.position === UniTooltipPosition.Left ? UniArrowPosition.Right :
           UniArrowPosition.Left;
  }
}
