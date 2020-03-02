import { Component, ChangeDetectionStrategy } from '@angular/core';

import { INPUT_EXAMPLE } from './input-example.constant';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly example = INPUT_EXAMPLE;

  value?: string;
  disabled?: boolean;
}
