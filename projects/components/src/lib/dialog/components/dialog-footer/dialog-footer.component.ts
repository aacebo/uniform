import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-dialog-footer',
  exportAs: 'uniDialogFooter',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./dialog-footer.component.scss'],
  host: { class: 'uni-dialog-footer' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniDialogFooterComponent { }
