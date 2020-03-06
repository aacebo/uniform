import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniToastType, UniToastPosition, UniToastService } from '@uniform/components';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly types = Object.values(UniToastType);
  readonly positions = Object.values(UniToastPosition);

  type = UniToastType.Success;
  position = UniToastPosition.TopRight;

  constructor(private readonly _uniToastService: UniToastService) {}

  open() {
    this._uniToastService.open({
      title: 'Toast Title',
      message: `${this.type} toast`,
      type: this.type,
      position: this.position,
      duration: 5000,
    });
  }
}
