import { Directive } from '@angular/core';

@Directive({
  exportAs: 'uniPrefix',
  selector: '[uniPrefix]',
  host: {
    class: 'uni-prefix',
    tabIndex: '-1',
  },
})
export class UniPrefixDirective { }
