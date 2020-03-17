import { Input, HostBinding } from '@angular/core';

import { UniConstructor } from '../types/constructor.type';
import { UniSize } from './size.enum';

export function uniSizeMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniSizeBase extends Base {
    @Input() size?: UniSize;

    @HostBinding('class.small')
    get small() { return this.size === UniSize.Small; }

    @HostBinding('class.large')
    get large() { return this.size === UniSize.Large; }
  }

  return UniSizeBase;
}
