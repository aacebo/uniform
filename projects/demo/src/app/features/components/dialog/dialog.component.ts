import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniDialogService } from '@uniform/components';

import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  draggable = false;

  constructor(private readonly _dialog: UniDialogService) { }

  onClick() {
    this._dialog.open(ExampleDialogComponent, {
      width: 500,
      draggable: this.draggable,
      data: {
        title: 'Example Dialog',
        content: 'example dialog content...',
      },
    }).subscribe(res => {
      alert(res);
    });
  }
}
