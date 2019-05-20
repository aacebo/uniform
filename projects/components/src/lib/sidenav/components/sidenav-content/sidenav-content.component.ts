import { Component, ChangeDetectionStrategy, Inject, forwardRef } from '@angular/core';

import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';

@Component({
  selector: 'uni-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  host: {
    class: 'uni-sidenav-content',
    '[style.margin-left.px]': 'container.sidenav.open ? container.sidenav.el.nativeElement.clientWidth : 0'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContentComponent {
  constructor(
    @Inject(forwardRef(() => UniSidenavContainerComponent))
    readonly container: UniSidenavContainerComponent,
  ) {}
}
