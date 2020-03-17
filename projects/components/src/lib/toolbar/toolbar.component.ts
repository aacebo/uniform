import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

import { UniColor } from '../core/color/color.enum';
import { uniColorMixin } from '../core/color/color.mixin';

class UniToolbarBase { }
const _UniToolbarMixinBase = uniColorMixin(UniToolbarBase);

@Component({
  moduleId: module.id,
  selector: 'uni-toolbar',
  exportAs: 'uniToolbar',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./toolbar.component.scss'],
  host: { class: 'uni-toolbar' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniToolbarComponent extends _UniToolbarMixinBase {
  @Input() color?: UniColor;
}
