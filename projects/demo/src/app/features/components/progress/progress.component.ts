import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniColor, UniProgressMode } from '@uniform/components';

import { PROGRESS_BAR_EXAMPLE } from './progress-bar-example.constant';
import { PROGRESS_SPINNER_EXAMPLE } from './progress-spinner-example.constant';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  readonly colors = Object.values(UniColor);
  readonly mode = UniProgressMode.Determinate;
  readonly progressBarExample = PROGRESS_BAR_EXAMPLE;
  readonly progressSpinnerExample = PROGRESS_SPINNER_EXAMPLE;
}
