import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';

import { UniFormFieldControlBase } from '../../../form-field';

@Component({
  moduleId: module.id,
  selector: 'uni-select',
  exportAs: 'uniSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'uni-select',
    '(click)': 'open.next(!open.value)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSelectComponent extends UniFormFieldControlBase {
  readonly open = new BehaviorSubject(false);
}
