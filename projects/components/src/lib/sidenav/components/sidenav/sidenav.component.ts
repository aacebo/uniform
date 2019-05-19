import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';

@Component({
  selector: 'uni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    class: 'uni-sidenav',
    '[class.side]': 'mode === "side"',
    '[class.over]': 'mode === "over"',
    '[class.start]': 'position === "start"',
    '[class.end]': 'position === "end"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavComponent {
  @Input() position = UniSidenavPosition.Start;
  @Input() mode = UniSidenavMode.Side;
}
