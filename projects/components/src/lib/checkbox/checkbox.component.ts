import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

import { UniColor } from '../core/color/color.enum';
import { UNI_COLORS } from '../core/color/colors.constant';

import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import { uniFormFieldProvider } from '../form-field/form-field-control.provider';

@Component({
  moduleId: module.id,
  exportAs: 'uniCheckbox',
  selector: 'uni-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    class: 'uni-checkbox',
    '[class.disabled]': 'disabled',
    ...UNI_COLORS,
  },
  providers: [uniFormFieldProvider(UniCheckboxComponent)],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniCheckboxComponent extends UniFormFieldControlBase<boolean> {
  @Input() diameter = '18px';
  @Input() color = UniColor.Primary;
}
