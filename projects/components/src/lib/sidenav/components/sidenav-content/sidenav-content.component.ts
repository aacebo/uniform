import { Component, ChangeDetectionStrategy, Inject, forwardRef } from '@angular/core';

import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav-content',
  exportAs: 'uniSidenavContent',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  host: {
    class: 'uni-sidenav-content',
    '[style.margin-left.px]': 'marginLeft',
    '[style.margin-right.px]': 'marginRight',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavContentComponent {
  get marginLeft() {
    return this.open && this.position === 'start' && this.mode === 'side' ? this.width : 0;
  }

  get marginRight() {
    return this.open && this.position === 'end' && this.mode === 'side' ? this.width : 0;
  }

  private get open() {
    return this.container.sidenav.open;
  }

  private get mode() {
    return this.container.sidenav.mode;
  }

  private get position() {
    return this.container.sidenav.position;
  }

  private get width() {
    return +this.container.sidenav.el.nativeElement.clientWidth;
  }

  constructor(
    @Inject(forwardRef(() => UniSidenavContainerComponent))
    private readonly container: UniSidenavContainerComponent,
  ) {}
}
