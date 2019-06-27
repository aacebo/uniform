import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniDialogRef } from '@uniform/components';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDialogComponent {
  constructor(private readonly _dialogRef: UniDialogRef) {}

  close() {
    this._dialogRef.dismiss();
  }
}
