import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Input() title?: string;
  @Output() toggle = new EventEmitter<void>();

  constructor(readonly toolbarService: ToolbarService) {}
}
