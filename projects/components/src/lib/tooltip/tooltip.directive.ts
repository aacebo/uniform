import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniPosition, getUniPosition } from '../core/position';
import { UniTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[uniTooltip]',
  exportAs: 'uniTooltip',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class UniTooltipDirective implements OnInit {
  @Input('uniTooltip') text: string;
  @Input('uniTooltipDisabled') disabled = false;
  @Input('uniTooltipPosition') position = UniPosition.Top;
  @Input('uniTooltipPanelClass') panelClass = 'uni-tooltip-panel';

  private _overlayRef: OverlayRef;

  private get _positionStrategy() {
    return this._overlay
               .position()
               .flexibleConnectedTo(this._el)
               .withFlexibleDimensions(true)
               .withPush(false)
               .withViewportMargin(8)
               .withPositions([getUniPosition(this.position)]);
  }

  constructor(
    private readonly _overlay: Overlay,
    private readonly _el: ElementRef
  ) {}

  ngOnInit() {
    const positionStrategy = this._positionStrategy;
    this._overlayRef = this._overlay.create({
      positionStrategy,
      panelClass: this.panelClass
    });
  }

  onMouseEnter() {
    if (!this.disabled && !this._overlayRef.hasAttached()) {
      this._overlayRef.updatePositionStrategy(this._positionStrategy);
      const portal = new ComponentPortal(UniTooltipComponent);
      const ref = this._overlayRef.attach(portal);
      ref.instance.text = this.text;
      ref.instance.position = this.position;
    }
  }

  onMouseLeave() {
    this._overlayRef.detach();
  }
}
