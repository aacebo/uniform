import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  Output,
  EventEmitter,
  ViewEncapsulation,
  AfterContentInit,
  ChangeDetectorRef,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { uniSubscribableMixin } from '../../../core/mixins/subscribable.mixin';

import { UniSidenavComponent } from '../sidenav/sidenav.component';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';

class UniSidenavContainerBase { }
const _UniSidenavContainerMixinBase = uniSubscribableMixin(UniSidenavContainerBase);

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav-container',
  exportAs: 'uniSidenavContainer',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  host: { class: 'uni-sidenav-container' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSidenavContainerComponent extends _UniSidenavContainerMixinBase implements AfterContentInit {
  @Output() backdropClicked = new EventEmitter<void>();

  @ContentChild(UniSidenavComponent, { static: false })
  readonly sidenav: UniSidenavComponent;

  get showBackdrop() {
    return this.sidenav.mode === UniSidenavMode.Over &&
           this.sidenav.open &&
           this.sidenav.hasBackdrop;
  }

  get hasBackdrop() {
    return this.sidenav.mode === UniSidenavMode.Over &&
           this.sidenav.hasBackdrop;
  }

  constructor(private readonly _cdr: ChangeDetectorRef) { super(); }

  ngAfterContentInit() {
    this.sidenav.openChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
    this.sidenav.modeChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
    this.sidenav.positionChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
  }

  onBackdropClick() {
    this.backdropClicked.emit();

    if (this.sidenav.closeOnBackdropClick) {
      this.sidenav.open = !this.sidenav.open;
    }
  }
}
