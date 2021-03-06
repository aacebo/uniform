import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-card-title',
  exportAs: 'uniCardTitle',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  host: { class: 'uni-card-title' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniCardTitleComponent { }
