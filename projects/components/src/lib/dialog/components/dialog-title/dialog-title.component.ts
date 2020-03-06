import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-dialog-title',
  exportAs: 'uniDialogTitle',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  host: { class: 'uni-dialog-title' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniDialogTitleComponent { }
