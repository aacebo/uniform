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
  @Input('uniPopoverHasBackdrop') hasBackdrop = true;
  @Input('uniPopoverBackdropClass') backdropClass = 'cdk-overlay-transparent-backdrop';

  private _overlayRef: OverlayRef;

  private get _origin() {
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


  private get _positionStrategy() {
    return this._overlay
               .position()
               .flexibleConnectedTo(this._el)
               .withFlexibleDimensions(false)
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
      panelClass: this.panelClass,
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass
    });

    this._overlayRef.backdropClick().subscribe(() => {
      this._hide();
    });
  }

  onMouseEnter() {
    if (this.trigger === UniPopoverTrigger.Hover) {
      this._show();
    }
  }

  onMouseLeave() {
    if (this.trigger === UniPopoverTrigger.Hover) {
      this._hide();
    }
  }

  onClick() {
    if (this.trigger === UniPopoverTrigger.Click) {
      if (this._overlayRef.hasAttached()) {
        this._hide();
      } else {
        this._show();
      }
    }
  }

  private _show() {
    if (!this.disabled && !this._overlayRef.hasAttached()) {
      this._overlayRef.updatePositionStrategy(this._positionStrategy);
      const portal = new ComponentPortal(UniPopoverComponent);
      const ref = this._overlayRef.attach(portal);
      ref.instance.text = this.text;
      ref.instance.position = this.position;
    }
  }

  private _hide() {
    this._overlayRef.detach();
  }
}
