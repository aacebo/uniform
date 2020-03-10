import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonTreeComponent {
  readonly json = {
    test: faker.random.word(),
    array: [
      faker.random.number(),
      faker.random.number(),
      faker.random.number(),
    ],
    object: {
      anotherTest: faker.random.boolean(),
    },
  };
}
