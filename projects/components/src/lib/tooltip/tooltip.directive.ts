import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipPosition } from './tooltip-position.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';
const UNI_TOOLTIP_OFFSET = 15;

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
  @Input('uniTooltipPosition') position = UniTooltipPosition.Top;
  @Input('uniTooltipPanelClass') panelClass = 'uni-tooltip-panel';

  private _overlayRef: OverlayRef;

  private get _origin(): ConnectedPosition {
    let originX: xType = 'center';
    let originY: yType = 'top';
    let overlayX: xType = 'center';
    let overlayY: yType = 'bottom';
    let offsetX = 0;

    if (this.position === UniTooltipPosition.Bottom) {
      originY = 'bottom';
      overlayX = 'center';
      overlayY = 'top';
    } else if (this.position === UniTooltipPosition.Left) {
      originX = 'start';
      originY = 'center';
      overlayX = 'end';
      overlayY = 'center';
    } else if (this.position === UniTooltipPosition.Right) {
      originX = 'end';
      originY = 'center';
      overlayX = 'start';
      overlayY = 'center';
    } else if (this.position === UniTooltipPosition.BottomLeft) {
      originY = 'bottom';
      overlayX = 'end';
      overlayY = 'top';
      offsetX = UNI_TOOLTIP_OFFSET;
    } else if (this.position === UniTooltipPosition.BottomRight) {
      originY = 'bottom';
      overlayX = 'start';
      overlayY = 'top';
      offsetX = UNI_TOOLTIP_OFFSET * -1;
    } else if (this.position === UniTooltipPosition.TopLeft) {
      overlayX = 'end';
      offsetX = UNI_TOOLTIP_OFFSET;
    } else if (this.position === UniTooltipPosition.TopRight) {
      overlayX = 'start';
      offsetX = UNI_TOOLTIP_OFFSET * -1;
    }

    return {
      originX,
      originY,
      overlayX,
      overlayY,
      offsetX
    };
  }

  private get _positionStrategy() {
    return this._overlay
               .position()
               .flexibleConnectedTo(this._el)
               .withFlexibleDimensions(true)
               .withPush(false)
               .withViewportMargin(8)
               .withPositions([this._origin]);
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
