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
  object = {
    test: faker.random.words(50),
    array: [
      faker.random.number(),
      faker.random.number(),
      faker.random.number(),
    ],
    object: {
      anotherTest: faker.random.boolean(),
      test: {
        anotherTest: {
          test: faker.random.number(),
        },
      },
    },
  };

  get json() { return this._json; }
  set json(v) {
    this._json = v;

    try {
      this.object = JSON.parse(v);
    } catch (_) {
      this.object = undefined;
    }
  }
  private _json = JSON.stringify(this.object);
}
