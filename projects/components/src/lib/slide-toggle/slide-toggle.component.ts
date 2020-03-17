import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

import { UniColor } from '../core/color/color.enum';
import { uniColorMixin } from '../core/color/color.mixin';

import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import { uniFormFieldProvider } from '../form-field/form-field-control.provider';

class UniSlideToggleBase extends UniFormFieldControlBase<boolean> { }
const _UniSlideToggleMixinBase = uniColorMixin(UniSlideToggleBase);

@Component({
  moduleId: module.id,
  exportAs: 'uniSlideToggle',
  selector: 'uni-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  host: {
    class: 'uni-slide-toggle',
    '[class.disabled]': 'disabled',
  },
  providers: [uniFormFieldProvider(UniSlideToggleComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSlideToggleComponent extends _UniSlideToggleMixinBase {
  @Input() color = UniColor.Primary;
}
