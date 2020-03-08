import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-dialog-content',
  exportAs: 'uniDialogContent',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./dialog-content.component.scss'],
  host: { class: 'uni-dialog-content' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniDialogContentComponent { }
