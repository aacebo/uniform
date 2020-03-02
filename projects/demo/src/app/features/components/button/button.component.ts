import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor, UniSize } from '@uniform/components';

import { BUTTON_EXAMPLE } from './button-example.constant';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly colors = Object.values(UniColor);
  readonly sizes = Object.values(UniSize);
  readonly example = BUTTON_EXAMPLE;
}
