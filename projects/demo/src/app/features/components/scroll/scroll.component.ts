import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollComponent {
  readonly text = faker.random.words(1000);
}
