import { Input, HostBinding } from '@angular/core';

import { UniConstructor } from '../types/constructor.type';
import { UniColor } from './color.enum';

export function uniColorMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniColorBase extends Base {
    @Input() color?: UniColor;

    @HostBinding('class.primary')
    get primary() { return this.color === UniColor.Primary; }

    @HostBinding('class.success')
    get success() { return this.color === UniColor.Success; }

    @HostBinding('class.warning')
    get warning() { return this.color === UniColor.Warning; }

    @HostBinding('class.danger')
    get danger() { return this.color === UniColor.Danger; }
  }

  return UniColorBase;
}
