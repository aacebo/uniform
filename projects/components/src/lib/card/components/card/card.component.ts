import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-card',
  exportAs: 'uniCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'uni-card' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniCardComponent { }
