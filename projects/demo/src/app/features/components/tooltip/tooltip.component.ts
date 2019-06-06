import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniTooltipPosition } from '@uniform/components';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  position = UniTooltipPosition.Bottom;
}
