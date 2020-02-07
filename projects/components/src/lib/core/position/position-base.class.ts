import { Input, TemplateRef, Directive } from '@angular/core';

import { UniPosition } from './position.enum';

@Directive()
export class UniPositionBase {
  @Input() content: string | TemplateRef<any>;
  @Input() position: UniPosition;

  get isString() {
    return typeof this.content === 'string';
  }
}
