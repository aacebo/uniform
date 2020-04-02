import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'uniTabLabel',
  selector: 'ng-template[uniTabLabel]',
})
export class UniTabLabelDirective {
  constructor(readonly template: TemplateRef<any>) { }
}
