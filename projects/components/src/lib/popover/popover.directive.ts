import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniPopoverComponent } from './popover.component';
import { UniPopoverPosition } from './popover-position.enum';
import { UniPopoverTrigger } from './popover-trigger.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';

@Directive({
  selector: '[uniPopover]',
  exportAs: 'uniPopover',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class UniPopoverDirective implements OnInit {
  @Input('uniPopover') text: string;
  @Input('uniPopoverDisabled') disabled = false;
  @Input('uniPopoverPosition') position = UniPopoverPosition.Top;
  @Input('uniPopoverTrigger') trigger = UniPopoverTrigger.Click;
  @Input('uniPopoverPanelClass') panelClass = 'uni-popover-panel';
  @Input('uniPopoverHasBackdrop') hasBackdrop = false;
  @Input('uniPopoverBackdropClass') backdropClass?: string;

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
      panelClass: this.panelClass,
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.hide();
    });
  }

  onMouseEnter() {
    if (this.trigger === UniPopoverTrigger.Hover) {
      this.show();
    }
  }

  onMouseLeave() {
    if (this.trigger === UniPopoverTrigger.Hover) {
      this.hide();
    }
  }

  onClick() {
    if (this.trigger === UniPopoverTrigger.Click) {
      if (this.overlayRef.hasAttached()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  private show() {
    if (!this.disabled && !this.overlayRef.hasAttached()) {
      const portal = new ComponentPortal(UniPopoverComponent);
      const ref = this.overlayRef.attach(portal);
      ref.instance.text = this.text;
      ref.instance.position = this.position;
    }
  }

  private hide() {
    this.overlayRef.detach();
  }
}
