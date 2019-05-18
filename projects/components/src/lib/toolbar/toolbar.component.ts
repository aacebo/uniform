import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniColor } from '../core';

@Component({
  selector: 'uni-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniToolbarComponent {
  @Input() color?: UniColor;
}
