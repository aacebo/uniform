import { Component, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import { UniColor } from '../../../core/enums';
import { UNI_COLORS } from '../../../core/constants';

@Component({
  selector: 'uni-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    class: 'uni-sidenav',
    '[class.over]': 'mode === "over"',
    '[class.end]': 'position === "end"',
    '[class.closed]': 'open === false',
    ...UNI_COLORS,
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSidenavComponent {
  @Input() position = UniSidenavPosition.Start;
  @Input() mode = UniSidenavMode.Side;
  @Input() open = true;
  @Input() color?: UniColor;

  constructor(readonly el: ElementRef) {}
}
