import { Input, TemplateRef } from '@angular/core';

import { UniConstructor } from '../types/constructor.type';
import { UniPosition } from './position.enum';

export function uniPositionMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniPositionBase extends Base {
    @Input() content: string | TemplateRef<any>;
    @Input() position: UniPosition;

    get isString() {
      return typeof this.content === 'string';
    }
  }

  return UniPositionBase;
}
