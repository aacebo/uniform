import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniIconService } from './icon.service';

@Component({
  selector: 'uni-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniIconComponent {
  @Input() icon: string;

  constructor(readonly iconService: UniIconService) {}
}
