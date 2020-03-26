import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniSidenavMode, UniSidenavPosition } from '@uniform/components';

import { SIDENAV_EXAMPLE } from './sidenav-example.constant';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  readonly UniSidenavMode = UniSidenavMode;
  readonly UniSidenavPosition = UniSidenavPosition;
  readonly example = SIDENAV_EXAMPLE;

  open = false;
  mode = UniSidenavMode.Side;
  position = UniSidenavPosition.Start;

  toggle() {
    this.open = !this.open;
  }
}
