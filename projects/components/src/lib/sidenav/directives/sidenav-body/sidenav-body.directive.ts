import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'uniSidenavBody',
  selector: 'ng-template[uniSidenavBody]',
})
export class UniSidenavBodyDirective {
  constructor(readonly template: TemplateRef<any>) { }
}
