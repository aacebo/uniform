import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniPosition } from '@uniform/components';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  position = UniPosition.Top;
  readonly positions = Object.values(UniPosition);
}
