import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-hint',
  exportAs: 'uniHint',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./hint.component.scss'],
  host: { class: 'uni-hint uni-ellipsis' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniHintComponent { }
