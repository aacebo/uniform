import { Directive, OnInit, Input, ElementRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { getUniPosition, UniPosition } from '../core/position';
import { UniPopoverComponent } from './popover.component';
import { UniPopoverTrigger } from './popover-trigger.enum';

@Directive({
  selector: '[uniPopover]',
  exportAs: 'uniPopover',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
  },
})
export class UniPopoverDirective implements OnInit {
  @Input('uniPopover') content: string | TemplateRef<any>;
  @Input('uniPopoverPosition') position = UniPosition.Top;
  @Input('uniPopoverTrigger') trigger = UniPopoverTrigger.Click;
  @Input('uniPopoverPanelClass') panelClass = 'uni-popover-panel';
  @Input('uniPopoverBackdropClass') backdropClass = 'cdk-overlay-transparent-backdrop';
  @Input('uniPopoverOrigin') origin?: HTMLElement;

  @Input('uniPopoverDisabled')
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
  }
  private _disabled = false;

  @Input('uniPopoverHasBackdrop')
  get hasBackdrop() { return this._hasBackdrop; }
  set hasBackdrop(v: boolean) {
    this._hasBackdrop = coerceBooleanProperty(v);
  }
  private _hasBackdrop = true;

  private get _vertical() {
    return this.position === UniPosition.Top ||
           this.position === UniPosition.Bottom;
  }

  private get _positionStrategy() {
    return this._overlay
               .position()
               .flexibleConnectedTo(this.origin || this._el)
               .withFlexibleDimensions(false)
               .withPush(this._vertical ? true : false)
               .withViewportMargin(8)
               .withPositions([getUniPosition(this.position)]);
  }

  private _overlayRef: OverlayRef;

  constructor(
    private readonly _overlay: Overlay,
    private readonly _el: ElementRef<HTMLElement>,
  ) {}

  ngOnInit() {
    this._overlayRef = this._overlay.create({
      positionStrategy: this._positionStrategy,
      panelClass: this.panelClass,
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass,
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
      ref.instance.content = this.content;
      ref.instance.position = this.position;
    }
  }

  private _hide() {
    this._overlayRef.detach();
  }
}
