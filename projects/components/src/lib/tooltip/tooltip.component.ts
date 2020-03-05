import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { UNI_POSITIONS, UniPositionBase } from '../core/position';

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
