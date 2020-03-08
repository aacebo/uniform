import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniBadgePosition, UniSize, UniColor } from '@uniform/components';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly positions = Object.values(UniBadgePosition);
  readonly sizes = Object.values(UniSize);
  readonly colors = Object.values(UniColor);

  count = 1;
  position = UniBadgePosition.TopRight;
  size?: UniSize;
  color = UniColor.Danger;
}
