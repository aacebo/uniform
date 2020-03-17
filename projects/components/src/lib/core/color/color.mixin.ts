import { Input } from '@angular/core';

import { UniConstructor } from '../types/constructor.type';
import { UniColor } from './color.enum';

export function uniColorMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniColorBase extends Base {
    @Input() color?: UniColor;
  }

  return UniColorBase;
}
