import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-progress-bar',
  exportAs: 'uniProgresssBar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  host: {
    class: 'uni-progress-bar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniProgressBarComponent {}
