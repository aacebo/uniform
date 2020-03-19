import { Directive } from '@angular/core';

@Directive({
  exportAs: 'uniSuffix',
  selector: '[uniSuffix]',
  host: {
    class: 'uni-suffix',
    tabIndex: '-1',
    '(click)': 'onClick($event)',
  },
})
export class UniSuffixDirective {
  onClick(e: Event) {
    e.stopImmediatePropagation();
  }
}
