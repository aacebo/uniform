import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniColor, UniSize } from '../core/enums';
import { UNI_POSITIONS } from '../core/position';
import { UNI_HOST_COLORS, UNI_HOST_SIZES } from '../core/constants';

import { UniBadgePosition } from './badge-position.enum';

@Component({
  moduleId: module.id,
  exportAs: 'uniBadge',
  selector: 'uni-badge',
  template: '{{ content }} <ng-content></ng-content>',
  styleUrls: ['./badge.component.scss'],
  host: {
    class: 'uni-badge',
    ...UNI_POSITIONS,
    ...UNI_HOST_COLORS,
    ...UNI_HOST_SIZES,
    '[class.disabled]': 'disabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniBadgeComponent {
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
  ) { }
}
