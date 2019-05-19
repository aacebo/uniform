import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'uni-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  host: {
    class: 'uni-sidenav-content'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContentComponent {}
