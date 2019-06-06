import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniPopoverPosition } from '@uniform/components';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent {
  readonly position = UniPopoverPosition.Top;
  readonly positions = Object.values(UniPopoverPosition);
}
