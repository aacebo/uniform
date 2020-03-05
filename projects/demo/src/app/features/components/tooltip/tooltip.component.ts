import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniPosition } from '@uniform/components';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  readonly positions = Object.values(UniPosition);

  position = UniPosition.Top;
}
