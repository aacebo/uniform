import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { UniPositionBase } from '../core/position/position-base.class';
import { UNI_POSITIONS } from '../core/position/positions.constant';

@Component({
  moduleId: module.id,
  selector: 'uni-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: {
    class: 'uni-popover',
    ...UNI_POSITIONS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniPopoverComponent extends UniPositionBase { }
