import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UNI_POSITIONS } from '../constants';
import { UniArrowPosition } from './arrow-position.enum';
import { UniArrowType } from './arrow-type.enum';

@Component({
  moduleId: module.id,
  selector: 'uni-arrow',
  exportAs: 'uniArrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  host: {
    class: 'uni-arrow',
    ...UNI_POSITIONS,
    '[class.popover]': 'type === "popover"',
    '[class.tooltip]': 'type === "tooltip"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniArrowComponent {
  @Input() position = UniArrowPosition.Bottom;
  @Input() type = UniArrowType.Popover;
}
