import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniTabDirection } from '@uniform/components';

import { TAB_EXAMPLE } from './tab-example.constant';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  readonly UniTabDirection = UniTabDirection;
  readonly example = TAB_EXAMPLE;

  direction = UniTabDirection.Start;
}
