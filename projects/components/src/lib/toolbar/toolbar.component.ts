import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniColor } from '../core/enums';

@Component({
  selector: 'uni-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    class: 'uni-toolbar',
    '[class.primary]': 'color === "primary"',
    '[class.secondary]': 'color === "secondary"',
    '[class.success]': 'color === "success"',
    '[class.warning]': 'color === "warning"',
    '[class.danger]': 'color === "danger"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniToolbarComponent {
  @Input() color?: UniColor;
}
