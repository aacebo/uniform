import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ICON_EXAMPLE } from './icon-example.constant';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly example = ICON_EXAMPLE;
}
