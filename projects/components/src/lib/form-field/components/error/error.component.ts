import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-error',
  exportAs: 'uniError',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./error.component.scss'],
  host: { class: 'uni-error uni-ellipsis' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniErrorComponent { }
