import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'uni-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  host: {
    class: 'uni-sidenav-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContainerComponent {}
