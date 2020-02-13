import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ISidenavItem } from './sidenav-item.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() items: ISidenavItem[] = [];
  @Input() open = false;

  @Output() backdropClicked = new EventEmitter<void>();

  onOpenChange(e: boolean) {
    if (!e) {
      this.backdropClicked.emit();
    }
  }
}
