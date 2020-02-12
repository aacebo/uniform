import { Directive } from '@angular/core';

@Directive({
  exportAs: 'uniCardAvatar',
  selector: '[uniCardAvatar]',
  host: { class: 'uni-card-avatar' },
})
export class UniCardAvatarDirective { }
