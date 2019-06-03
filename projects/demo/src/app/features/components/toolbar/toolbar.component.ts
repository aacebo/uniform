import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor } from '@uniform/components';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  readonly colors: string[] = Object.values(UniColor);
}
