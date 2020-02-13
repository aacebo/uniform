import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniSidenavMode, UniSidenavPosition } from '@uniform/components';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  readonly UniSidenavMode = UniSidenavMode;
  readonly UniSidenavPosition = UniSidenavPosition;

  open = true;
  mode = UniSidenavMode.Side;
  position = UniSidenavPosition.Start;

  toggle() {
    this.open = !this.open;
  }
}
