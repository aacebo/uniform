import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';

@Component({
  selector: 'uni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    class: 'uni-sidenav',
    '[class.over]': 'mode === "over"',
    '[class.end]': 'position === "end"',
    '[class.closed]': 'open === false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavComponent {
  @Input() position = UniSidenavPosition.Start;
  @Input() mode = UniSidenavMode.Side;
  @Input() open = true;
}
