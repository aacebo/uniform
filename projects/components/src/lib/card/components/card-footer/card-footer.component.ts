import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-card-footer',
  exportAs: 'uniCardFooter',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
  host: { class: 'uni-card-footer' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniCardFooterComponent { }
