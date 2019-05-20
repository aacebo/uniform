import { Component, ChangeDetectionStrategy, Inject, forwardRef } from '@angular/core';

import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';

@Component({
  selector: 'uni-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  host: {
    class: 'uni-sidenav-content'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContentComponent {
  constructor(
    @Inject(forwardRef(() => UniSidenavContainerComponent))
    private readonly container: UniSidenavContainerComponent,
  ) {
    console.log(this.container.sidenav.el.nativeElement.clientWidth);
  }
}
