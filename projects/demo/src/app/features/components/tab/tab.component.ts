import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniTabDirection } from '@uniform/components';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  readonly UniTabDirection = UniTabDirection;

  direction = UniTabDirection.Start;
}
