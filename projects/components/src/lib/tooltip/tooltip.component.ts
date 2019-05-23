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
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniTooltipComponent {
  @Input() text: string;
  @Input() position: UniTooltipPosition;
}
