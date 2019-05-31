import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor } from '@uniform/components';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  readonly colors: string[] = Object.values(UniColor);
}
