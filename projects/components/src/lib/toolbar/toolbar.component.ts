import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';

@Component({
  moduleId: module.id,
  selector: 'uni-toolbar',
  exportAs: 'uniToolbar',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./toolbar.component.scss'],
  host: {
    class: 'uni-toolbar',
    ...UNI_HOST_COLORS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniToolbarComponent {
  @Input() color?: UniColor;
}
