import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-select',
  exportAs: 'uniSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'uni-select'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSelectComponent {}
