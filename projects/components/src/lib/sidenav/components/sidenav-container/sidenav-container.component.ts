import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';

import { UniSidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'uni-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  host: {
    class: 'uni-sidenav-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContainerComponent {
  @ContentChild(UniSidenavComponent) sidenav: UniSidenavComponent;
}
