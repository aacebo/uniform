import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { UniPositionBase } from '../core/position/position-base.class';
import { UNI_POSITIONS } from '../core/position/positions.constant';

@Component({
  moduleId: module.id,
  selector: 'uni-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    class: 'uni-tooltip',
    ...UNI_POSITIONS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTooltipComponent extends UniPositionBase { }
