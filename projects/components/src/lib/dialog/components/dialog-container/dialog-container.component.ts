import {
  Component,
  ChangeDetectionStrategy,
  ViewContainerRef,
  Inject,
  ComponentFactoryResolver,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';

import { UNI_DIALOG_CONTENT } from '../../dialog-content.constant';
import { UNI_DIALOG_OPTIONS } from '../../dialog-options.constant';
import { IUniDialogOptions } from '../../dialog-options.interface';

@Component({
  moduleId: module.id,
  selector: 'uni-dialog-container',
  exportAs: 'uniDialogContainer',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
  host: { class: 'uni-dialog-container' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniDialogContainerComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef })
  readonly vc: ViewContainerRef;

  constructor(
    @Inject(UNI_DIALOG_OPTIONS) readonly options: IUniDialogOptions,
    @Inject(UNI_DIALOG_CONTENT) private readonly _content: any,
    private readonly _resolver: ComponentFactoryResolver,
  ) { }

  ngAfterViewInit() {
    const factory = this._resolver.resolveComponentFactory(this._content);
    this.vc.clear();
    const ref = this.vc.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
