import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { uniColorMixin } from '../core/color/color.mixin';
import { uniSizeMixin } from '../core/size/size.mixin';
import { uniPositionMixin } from '../core/position/position.mixin';

import { UniColor } from '../core/color/color.enum';
import { UniSize } from '../core/size/size.enum';

import { UniBadgePosition } from './badge-position.enum';

class UniBadgeBase { }
const _UniBadgeMixinBase: typeof UniBadgeBase = uniColorMixin(uniPositionMixin(uniSizeMixin(UniBadgeBase)));

@Component({
  moduleId: module.id,
  exportAs: 'uniBadge',
  selector: 'uni-badge',
  template: '{{ content }} <ng-content></ng-content>',
  styleUrls: ['./badge.component.scss'],
  host: {
    class: 'uni-badge',
    '[class.disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniBadgeComponent extends _UniBadgeMixinBase {
  @Input()
  get content() { return this._content; }
  set content(v: string) {
    this._content = v;
    this.cdr.markForCheck();
  }
  private _content: string;

  @Input()
  get color() { return this._color; }
  set color(v: UniColor) {
    this._color = v;
    this.cdr.markForCheck();
  }
  private _color?: UniColor;

  @Input()
  get size() { return this._size; }
  set size(v: UniSize) {
    this._size = v;
    this.cdr.markForCheck();
  }
  private _size?: UniSize;

  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this.cdr.markForCheck();
  }
  private _disabled?: boolean;

  get position() { return this._position; }
  set position(v: UniBadgePosition) {
    this._position = v;
    this.cdr.markForCheck();
  }
  private _position = UniBadgePosition.TopRight;

  constructor(
    readonly cdr: ChangeDetectorRef,
    readonly el: ElementRef<HTMLElement>,
  ) { super(); }
}
