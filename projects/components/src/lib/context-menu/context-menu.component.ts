import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

import { UniPositionBase } from '../core/position';

@Component({
  moduleId: module.id,
  exportAs: 'uniContextMenu',
  selector: 'uni-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  host: {
    class: 'uni-context-menu',
    '(click)': 'clicked$.next()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniContextMenuComponent extends UniPositionBase {
  readonly clicked$ = new Subject<void>();
}
