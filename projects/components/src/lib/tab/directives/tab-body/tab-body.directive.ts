import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'uniTabBody',
  selector: 'ng-template[uniTabBody]',
})
export class UniTabBodyDirective {
  constructor(readonly template: TemplateRef<any>) { }
}
