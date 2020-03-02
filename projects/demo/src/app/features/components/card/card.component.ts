import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';

import { CARD_EXAMPLE } from './card-example.constant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly text = faker.random.words(300);
  readonly example = CARD_EXAMPLE;
}
