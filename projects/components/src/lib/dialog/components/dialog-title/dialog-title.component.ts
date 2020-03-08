import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-dialog-title',
  exportAs: 'uniDialogTitle',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./dialog-title.component.scss'],
  host: { class: 'uni-dialog-title' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniDialogTitleComponent { }
