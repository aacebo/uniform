import { Directive, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniPopoverComponent } from './popover.component';
import { UniPopoverPosition } from './popover-position.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';

@Directive({
  selector: '[uniPopover]'
})
export class UniPopoverDirective implements OnInit {
  @Input('uniPopover') text: string;
  @Input('uniPopoverDisabled') disabled = false;
  @Input('uniPopoverPosition') position = UniPopoverPosition.Top;
  @Input('uniPopoverPanelClass') panelClass = 'uni-popover-panel';

  private overlayRef: OverlayRef;

  private get origin() {
    let originX: xType = 'center';
    let originY: yType = 'top';
    let overlayX: xType = 'center';
    let overlayY: yType = 'bottom';

    if (this.position === UniPopoverPosition.Bottom) {
      originY = 'bottom';
      overlayX = 'center';
      overlayY = 'top';
    } else if (this.position === UniPopoverPosition.Left) {
      originX = 'start';
      originY = 'center';
      overlayX = 'end';
      overlayY = 'center';
    } else if (this.position === UniPopoverPosition.Right) {
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
      const portal = new ComponentPortal(UniPopoverComponent);
      const ref = this.overlayRef.attach(portal);
      ref.instance.text = this.text;
      ref.instance.position = this.position;
    }
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
