import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleComponent {
  value?: boolean;
}
