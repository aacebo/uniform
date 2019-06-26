import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { UniPopoverComponent } from './popover.component';
import { UniPopoverPosition } from './popover-position.enum';
import { UniPopoverTrigger } from './popover-trigger.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';
const UNI_POPOVER_OFFSET = 15;

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
  @Input('uniPopoverTitle') title?: string;
  @Input('uniPopoverDisabled') disabled = false;
  @Input('uniPopoverPosition') position = UniPopoverPosition.Top;
  @Input('uniPopoverTrigger') trigger = UniPopoverTrigger.Click;
  @Input('uniPopoverPanelClass') panelClass = 'uni-popover-panel';
  @Input('uniPopoverHasBackdrop') hasBackdrop = true;
  @Input('uniPopoverBackdropClass') backdropClass = 'cdk-overlay-transparent-backdrop';

  private _overlayRef: OverlayRef;

  private get _origin(): ConnectedPosition {
    let originX: xType = 'center';
    let originY: yType = 'top';
    let overlayX: xType = 'center';
    let overlayY: yType = 'bottom';
    let offsetX = 0;

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
    } else if (this.position === UniPopoverPosition.BottomLeft) {
      originY = 'bottom';
      overlayX = 'end';
      overlayY = 'top';
      offsetX = UNI_POPOVER_OFFSET;
    } else if (this.position === UniPopoverPosition.BottomRight) {
      originY = 'bottom';
      overlayX = 'start';
      overlayY = 'top';
      offsetX = UNI_POPOVER_OFFSET * -1;
    } else if (this.position === UniPopoverPosition.TopLeft) {
      overlayX = 'end';
      offsetX = UNI_POPOVER_OFFSET;
    } else if (this.position === UniPopoverPosition.TopRight) {
      overlayX = 'start';
      offsetX = UNI_POPOVER_OFFSET * -1;
    }

    return {
      originX,
      originY,
      overlayX,
      overlayY,
      offsetX
    };
  }

  private get _vertical() {
    return this.position === UniPopoverPosition.Top ||
           this.position === UniPopoverPosition.Bottom;
  }

  private get _positionStrategy() {
    return this._overlay
               .position()
               .flexibleConnectedTo(this._el)
               .withFlexibleDimensions(true)
               .withPush(this._vertical ? true : false)
               .withViewportMargin(8)
               .withPositions([this._origin]);
  }

  constructor(
    private readonly _overlay: Overlay,
    private readonly _el: ElementRef
  ) {}

  ngOnInit() {
    this._overlayRef = this._overlay.create({
      positionStrategy: this._positionStrategy,
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
      ref.instance.title = this.title;
    }
  }

  private _hide() {
    this._overlayRef.detach();
  }
}
