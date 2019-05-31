import { Directive, Input, HostListener, OnInit, ElementRef } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipPosition } from './tooltip-position.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';

@Directive({
  selector: '[uniTooltip]',
  exportAs: 'uniTooltip'
})
export class UniTooltipDirective implements OnInit {
  @Input('uniTooltip') text: string;
  @Input('uniTooltipDisabled') disabled = false;
  @Input('uniTooltipPosition') position = UniTooltipPosition.Top;
  @Input('uniTooltipPanelClass') panelClass = 'uni-tooltip-panel';

  private overlayRef: OverlayRef;

  private get origin() {
    let originX: xType = 'center';
    let originY: yType = 'top';
    let overlayX: xType = 'center';
    let overlayY: yType = 'bottom';

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
    }

    return {
      originX,
      originY,
      overlayX,
      overlayY
    };
  }

  constructor(
    private readonly overlay: Overlay,
    private readonly el: ElementRef
  ) {}

  ngOnInit() {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.el)
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withPositions([this.origin]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      panelClass: this.panelClass
    });
  }

  @HostListener('mouseenter')
  show() {
    if (!this.disabled && !this.overlayRef.hasAttached()) {
      const portal = new ComponentPortal(UniTooltipComponent);
      const ref = this.overlayRef.attach(portal);
      ref.instance.text = this.text;
      ref.instance.position = this.position;
    }
  }

  @HostListener('mouseleave')
  hide() {
    this.overlayRef.detach();
  }
}
