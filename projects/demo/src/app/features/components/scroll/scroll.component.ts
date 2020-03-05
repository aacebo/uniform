import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniScrollMode } from '@uniform/components';
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
  readonly UniScrollMode = UniScrollMode;

  mode = UniScrollMode.Side;
}
