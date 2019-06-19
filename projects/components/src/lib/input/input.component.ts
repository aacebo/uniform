import { Component, ChangeDetectionStrategy } from '@angular/core';

import { uniFormFieldProvider, UniFormFieldControlBase } from '../form-field';

@Component({
  moduleId: module.id,
  selector: 'uni-input',
  exportAs: 'uniInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [uniFormFieldProvider(UniInputComponent)],
  host: {
    class: 'uni-input'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniInputComponent extends UniFormFieldControlBase<string> {}
