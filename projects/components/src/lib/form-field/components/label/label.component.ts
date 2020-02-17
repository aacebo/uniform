import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { UniFormFieldComponent } from '../form-field/form-field.component';

@Component({
  moduleId: module.id,
  selector: 'uni-label',
  exportAs: 'uniLabel',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  host: { class: 'uni-label' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniLabelComponent {
  get for() {
    return this._uniFormField.id;
  }

  constructor(private readonly _uniFormField: UniFormFieldComponent) { }
}
