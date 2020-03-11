import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniPosition, UniPopoverTrigger } from '@uniform/components';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  readonly positions = Object.values(UniPosition);
  readonly triggers = Object.values(UniPopoverTrigger);

  position = UniPosition.Top;
  trigger = UniPopoverTrigger.Click;
  disabled = false;
}
