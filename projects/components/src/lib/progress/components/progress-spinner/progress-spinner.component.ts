import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { uniColors } from '../../../core/constants';
import { UniProgressSpinnerType } from '../../enums/progress-spinner-type.enum';
import { UniProgressMode } from '../../enums/progress-mode.enum';
import { UniColor } from '../../../core/enums';

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
export class UniProgressSpinnerComponent {
  @Input() type = UniProgressSpinnerType.Default;
  @Input() mode = UniProgressMode.Indeterminate;
  @Input() color = UniColor.Primary;
  @Input() total = 100;
  @Input() value = 0;
  @Input() strokeWidth = 5;
  @Input() diameter = 40;
  @Input() fill = 'transparent';

  get colors() {
    return uniColors(this.color);
  }

  get radius() {
    return (this.diameter / 2) - this.strokeWidth;
  }

  get strokeDasharray() {
    return `${this._circumference} ${this._circumference}`;
  }

  get strokeDashoffset() {
    return this._circumference - this._percentage / 100 * this._circumference;
  }

  private get _circumference() {
    return this.radius * 2 * Math.PI;
  }

  private get _percentage() {
    return (100 / this.total) * this.value;
  }
}
