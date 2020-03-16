import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

import { UniColor } from '../core/color/color.enum';
import { UNI_COLORS } from '../core/color/colors.constant';

import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import { uniFormFieldProvider } from '../form-field/form-field-control.provider';

@Component({
  moduleId: module.id,
  exportAs: 'uniSlideToggle',
  selector: 'uni-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  host: {
    class: 'uni-slide-toggle',
    '[class.disabled]': 'disabled',
    ...UNI_COLORS,
  },
  providers: [uniFormFieldProvider(UniSlideToggleComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSlideToggleComponent extends UniFormFieldControlBase<boolean> {
  @Input() color = UniColor.Primary;
}
