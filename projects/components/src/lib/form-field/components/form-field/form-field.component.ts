import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-form-field',
  exportAs: 'uniFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'uni-form-field'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniFormFieldComponent {}
