import { Input, TemplateRef, HostBinding } from '@angular/core';

import { UniConstructor } from '../types/constructor.type';
import { UniPosition } from './position.enum';

export function uniPositionMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniPositionBase extends Base {
    @Input() content: string | TemplateRef<any>;
    @Input() position: UniPosition;

    @HostBinding('class.top')
    get top() { return this.position === UniPosition.Top; }

    @HostBinding('class.bottom')
    get bottom() { return this.position === UniPosition.Bottom; }

    @HostBinding('class.left')
    get left() { return this.position === UniPosition.Left; }

    @HostBinding('class.right')
    get right() { return this.position === UniPosition.Right; }

    @HostBinding('class.bottom-left')
    get bottomLeft() { return this.position === UniPosition.BottomLeft; }

    @HostBinding('class.bottom-right')
    get bottomRight() { return this.position === UniPosition.BottomRight; }

    @HostBinding('class.top-left')
    get topLeft() { return this.position === UniPosition.TopLeft; }

    @HostBinding('class.top-right')
    get topRight() { return this.position === UniPosition.TopRight; }

    get isString() {
      return typeof this.content === 'string';
    }
  }

  return UniPositionBase;
}
