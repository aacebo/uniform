import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { uniPositionMixin } from '../core/position/position.mixin';

class UniPopoverBase { }
const _UniPopoverMixinBase = uniPositionMixin(UniPopoverBase);

@Component({
  moduleId: module.id,
  selector: 'uni-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: {
    class: 'uni-popover',
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
export class UniPopoverComponent extends _UniPopoverMixinBase { }
