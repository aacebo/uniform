import { Component, ChangeDetectionStrategy, Inject, forwardRef, ViewEncapsulation, ElementRef, AfterContentInit } from '@angular/core';

import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';
import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav-content',
  exportAs: 'uniSidenavContent',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./sidenav-content.component.scss'],
  host: {
    class: 'uni-sidenav-content',
    '[style.margin-left.px]': 'marginLeft',
    '[style.margin-right.px]': 'marginRight',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSidenavContentComponent implements AfterContentInit {
  get marginLeft() {
    return this._open &&
           this._position === UniSidenavPosition.Start &&
           this._mode === UniSidenavMode.Side ? this._width : undefined;
  }

  get marginRight() {
    return this._open &&
           this._position === UniSidenavPosition.End &&
           this._mode === UniSidenavMode.Side ? this._width : undefined;
  }

  private get _open() {
    return this._container.sidenav.open;
  }

  private get _mode() {
    return this._container.sidenav.mode;
  }

  private get _position() {
    return this._container.sidenav.position;
  }

  private get _width() {
    return this._container.sidenav.el.nativeElement.clientWidth;
  }

  constructor(
    @Inject(forwardRef(() => UniSidenavContainerComponent))
    private readonly _container: UniSidenavContainerComponent,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }

  ngAfterContentInit() {
    setTimeout(() => {
      this._el.nativeElement.style.transition = 'all 0.2s ease-in-out';
    }, 1000);
  }
}
