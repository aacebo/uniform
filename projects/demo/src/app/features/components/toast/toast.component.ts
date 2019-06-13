import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UniToastType, UniToastPosition, UniToastService } from '@uniform/components';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  readonly type = UniToastType.Info;
  readonly types = Object.values(UniToastType);
  readonly position = UniToastPosition.TopRight;
  readonly positions = Object.values(UniToastPosition);

  constructor(private readonly _uniToastService: UniToastService) {}

  open() {
    this._uniToastService.open({
      title: 'Toast Title',
      message: `${this.type} toast`,
      duration: 5000,
      type: this.type,
      position: this.position
    });
  }
}