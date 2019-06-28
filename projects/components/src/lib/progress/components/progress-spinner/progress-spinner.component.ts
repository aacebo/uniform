import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-progress-spinner',
  exportAs: 'uniProgressSpinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  host: {
    class: 'uni-progress-spinner'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniProgressSpinnerComponent {}
