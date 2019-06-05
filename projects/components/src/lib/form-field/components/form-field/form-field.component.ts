import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-form-field',
  exportAs: 'uniFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'uni-form-field',
    ...UNI_HOST_COLORS
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniFormFieldComponent {
  @Input() color?: UniColor;
}
