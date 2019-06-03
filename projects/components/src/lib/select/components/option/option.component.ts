import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-option',
  exportAs: 'uniOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  host: {
    class: 'uni-option'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniOptionComponent {}
