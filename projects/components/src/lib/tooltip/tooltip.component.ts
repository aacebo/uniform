import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { uniPositionMixin } from '../core/position/position.mixin';

class UniTooltipBase { }
const _UniTooltipMixinBase = uniPositionMixin(UniTooltipBase);

@Component({
  moduleId: module.id,
  selector: 'uni-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: { class: 'uni-tooltip' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTooltipComponent extends _UniTooltipMixinBase { }
