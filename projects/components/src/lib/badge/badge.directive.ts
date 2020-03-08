import {
  Directive,
  Input,
  ChangeDetectorRef,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  ElementRef,
  ApplicationRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

import { UniColor, UniSize } from '../core/enums';

import { UniBadgeComponent } from './badge.component';
import { UniBadgePosition } from './badge-position.enum';

@Directive({
  selector: '[uniBadge]',
})
export class UniBadgeDirective implements OnInit {
  @Input('uniBadge')
  get content() { return this._content; }
  set content(v: string) {
    this._content = v;
    this._update();
    this._cdr.markForCheck();
  }
  private _content: string;

  @Input('uniBadgeColor')
  get color() { return this._color; }
  set color(v: UniColor) {
    this._color = v;
    this._update();
    this._cdr.markForCheck();
  }
  private _color?: UniColor;

  @Input('uniBadgeSize')
  get size() { return this._size; }
  set size(v: UniSize) {
    this._size = v;
    this._update();
    this._cdr.markForCheck();
  }
  private _size?: UniSize;

  @Input('uniBadgePosition')
  get position() { return this._position; }
  set position(v: UniBadgePosition) {
    this._position = v;
    this._update();
    this._cdr.markForCheck();
  }
  private _position = UniBadgePosition.TopRight;

  @Input('uniBadgeDisabled')
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this._update();
    this._cdr.markForCheck();
  }
  private _disabled?: boolean;

  get badge() { return this._badgeRef.instance; }
  private _badgeRef: ComponentRef<UniBadgeComponent>;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _factoryResolver: ComponentFactoryResolver,
    private readonly _injector: Injector,
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _app: ApplicationRef,
  ) { }

  ngOnInit() {
    this._el.nativeElement.style.position = 'relative';
    const outlet = new DomPortalOutlet(
      this._el.nativeElement,
      this._factoryResolver,
      this._app,
      this._injector,
    );

    const portal = new ComponentPortal(UniBadgeComponent);
    this._badgeRef = outlet.attach(portal);
    this._update();
  }

  private _update() {
    if (this._badgeRef) {
      this.badge.color = this.color;
      this.badge.content = this.content;
      this.badge.position = this.position;
      this.badge.size = this.size;
      this.badge.disabled = this.disabled;
    }
  }
}
