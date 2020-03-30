import { Directive, Input } from '@angular/core';

import { UniDialogRef } from '../../dialog-ref.class';

@Directive({
  exportAs: 'uniDialogClose',
  selector: '[uniDialogClose]',
  host: {
    '(click)': 'onClick()',
  },
})
export class UniDialogCloseDirective {
  @Input('uniDialogClose') value?: any;

  constructor(private readonly _dialogRef: UniDialogRef) { }

  onClick() {
    this._dialogRef.close(this.value);
  }
}
