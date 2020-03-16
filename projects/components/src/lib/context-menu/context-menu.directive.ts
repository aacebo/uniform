import { Directive, Input, OnInit, TemplateRef, Injector } from '@angular/core';
import { OverlayRef, Overlay, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';

import { UniSubscription } from '../core/classes/subscription.class';
import { UniContextMenuComponent } from './context-menu.component';

@Directive({
  selector: '[uniContextMenu]',
  exportAs: 'uniContextMenu',
  host: {
    '(contextmenu)': 'onRightClick($event)',
  },
})
export class UniContextMenuDirective extends UniSubscription implements OnInit {
  @Input('uniContextMenu') content: TemplateRef<any>;
  @Input('uniContextMenuPanelClass') panelClass = 'uni-context-menu-panel';
  @Input('uniContextMenuBackdropClass') backdropClass = 'cdk-overlay-transparent-backdrop';

  @Input('uniContextMenuDisabled')
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
  }
  private _disabled = false;

  @Input('uniContextMenuHasBackdrop')
  get hasBackdrop() { return this._hasBackdrop; }
  set hasBackdrop(v: boolean) {
    this._hasBackdrop = coerceBooleanProperty(v);
  }
  private _hasBackdrop = true;

  private _overlayRef: OverlayRef;

  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector,
  ) { super(); }

  ngOnInit() {
    this._overlayRef = this._overlay.create({
      positionStrategy: this._getPositionStrategy(),
      panelClass: this.panelClass,
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass,
    });

    this._overlayRef.backdropClick().subscribe(() => {
      this._hide();
    });
  }

  onRightClick(e: MouseEvent) {
    e.preventDefault();

    if (this._overlayRef.hasAttached()) {
      this._hide();
    } else {
      this._show(this._getPositionStrategy(e));
    }
  }

  private _show(positionStrategy: FlexibleConnectedPositionStrategy) {
    if (!this.disabled && !this._overlayRef.hasAttached()) {
      this._overlayRef.updatePositionStrategy(positionStrategy);
      const portal = new ComponentPortal(UniContextMenuComponent, undefined, this._injector);
      const ref = this._overlayRef.attach(portal);
      ref.instance.content = this.content;
      ref.instance.clicked$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this._hide();
      });
    }
  }

  private _hide() {
    this._overlayRef.detach();
  }

  private _getPositionStrategy(e?: MouseEvent) {
    return this._overlay.position()
                        .flexibleConnectedTo(
                          e ? ({ x: e.x, y: e.y }) : undefined,
                        )
                        .withPositions([{
                          originX: 'center',
                          originY: 'center',
                          overlayX: 'start',
                          overlayY: 'top',
                        }]);
  }
}
