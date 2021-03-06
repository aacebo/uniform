import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TAB_EXAMPLE } from './tab-example.constant';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  readonly example = TAB_EXAMPLE;

  tabs = [0];
  active = 0;

  add() {
    this.tabs.push(this.tabs.length);
    this.active = this.tabs.length - 1;
  }
}
