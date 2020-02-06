import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UNI_DIALOG_DATA } from '@uniform/components';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDialogComponent {
  constructor(
    @Inject(UNI_DIALOG_DATA) readonly data: any,
  ) {}
}
