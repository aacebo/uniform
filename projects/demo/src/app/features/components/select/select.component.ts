import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  value?: string;
  disabled?: boolean;
}
