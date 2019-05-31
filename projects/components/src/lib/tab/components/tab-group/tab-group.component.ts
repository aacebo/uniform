import { Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { UniTabComponent } from '../tab/tab.component';
import { UniColor } from '../../../core/enums';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-group',
  exportAs: 'uniTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    class: 'uni-tab-group'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniTabGroupComponent implements AfterContentInit {
  @Input() active = 0;
  @Input() color = UniColor.Secondary;

  @ContentChildren(UniTabComponent) tabs: QueryList<UniTabComponent>;

  ngAfterContentInit() {
    this.setActive();
  }

  select(index: number) {
    this.active = index;
    this.setActive();
  }

  private setActive() {
    this.tabs.forEach((tab, i) => {
      tab.active = false;

      if (i === +this.active) {
        tab.active = true;
      }
    });
  }
}
