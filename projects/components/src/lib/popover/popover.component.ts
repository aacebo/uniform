import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { uniPositionMixin } from '../core/position/position.mixin';

class UniPopoverBase { }
const _UniPopoverMixinBase = uniPositionMixin(UniPopoverBase);

@Component({
  moduleId: module.id,
  selector: 'uni-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: { class: 'uni-popover' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniPopoverComponent extends _UniPopoverMixinBase { }
