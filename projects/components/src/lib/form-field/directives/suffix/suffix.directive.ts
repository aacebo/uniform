import { Directive } from '@angular/core';

@Directive({
  exportAs: 'uniSuffix',
  selector: '[uniSuffix]',
  host: { '(click)': 'onClick($event)' },
})
export class UniSuffixDirective {
  onClick(e: Event) {
    e.stopImmediatePropagation();
  }
}
