import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor } from '@uniform/components';

import { TOOLBAR_EXAMPLE } from './toolbar-example.constant';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  readonly colors = Object.values(UniColor);
  readonly example = TOOLBAR_EXAMPLE;
}
