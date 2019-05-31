import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor } from '@uniform/components';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  readonly colors: string[] = Object.values(UniColor);
}
