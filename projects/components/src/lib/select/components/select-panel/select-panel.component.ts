import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-select-panel',
  exportAs: 'uniSelectPanel',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./select-panel.component.scss'],
  host: { class: 'uni-select-panel' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSelectPanelComponent { }
