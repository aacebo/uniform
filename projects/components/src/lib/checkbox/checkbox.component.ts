import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

import { UniColor } from '../core/color/color.enum';
import { uniColorMixin } from '../core/color/color.mixin';

import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import { uniFormFieldProvider } from '../form-field/form-field-control.provider';

class UniCheckboxBase extends UniFormFieldControlBase<boolean> { }
const _UniCheckboxMixinBase = uniColorMixin(UniCheckboxBase);

@Component({
  moduleId: module.id,
  exportAs: 'uniCheckbox',
  selector: 'uni-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    class: 'uni-checkbox',
    '[class.disabled]': 'disabled',
  },
  providers: [uniFormFieldProvider(UniCheckboxComponent)],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniCheckboxComponent extends _UniCheckboxMixinBase {
  @Input() diameter = '18px';
  @Input() color = UniColor.Primary;
}
