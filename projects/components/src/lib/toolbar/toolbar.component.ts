import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniColor } from '../core/enums';
import { UNI_COLORS } from '../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-toolbar',
  exportAs: 'uniToolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    class: 'uni-toolbar',
    ...UNI_COLORS
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniToolbarComponent {
  @Input() color?: UniColor;
}
