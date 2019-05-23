import { Directive, Input, HostListener, OnInit, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipPosition } from './tooltip-position.enum';

@Directive({
  selector: '[uniTooltip]',
  exportAs: 'uniTooltip'
})
export class UniTooltipDirective implements OnInit {
  @Input('uniTooltip') text: string;
  @Input('uniTooltipDisabled') disabled = false;
  @Input('uniTooltipPosition') position = UniTooltipPosition.Auto;

  private overlayRef: OverlayRef;

  constructor(
    private readonly overlay: Overlay,
    private readonly el: ElementRef,
    private readonly opb: OverlayPositionBuilder
  ) {}

  ngOnInit() {
    const positionStrategy = this.opb
      .flexibleConnectedTo(this.el)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const portal = new ComponentPortal(UniTooltipComponent);
    const ref = this.overlayRef.attach(portal);
    ref.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
