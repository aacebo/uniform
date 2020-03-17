import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { uniPositionMixin } from '../core/position/position.mixin';

class UniTooltipBase { }
const _UniTooltipMixinBase = uniPositionMixin(UniTooltipBase);

@Component({
  moduleId: module.id,
  selector: 'uni-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    class: 'uni-tooltip',
    '[class.top]': 'position === "top"',
    '[class.bottom]': 'position === "bottom"',
    '[class.left]': 'position === "left"',
    '[class.right]': 'position === "right"',
    '[class.bottom-left]': 'position === "bottom left"',
    '[class.bottom-right]': 'position === "bottom right"',
    '[class.top-left]': 'position === "top left"',
    '[class.top-right]': 'position === "top right"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTooltipComponent extends _UniTooltipMixinBase { }
