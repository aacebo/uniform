import { Component, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UniIconComponent } from '@uniform/components';

import { environment } from '../../../environments/environment';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Output() toggle = new EventEmitter<void>();

  @ViewChild('uniIcon', { read: ElementRef, static: false })
  readonly icon: ElementRef<UniIconComponent>;

  constructor(
    readonly toolbarService: ToolbarService,
  ) { }

  github() {
    window.open(environment.github.repository, '_blank');
  }

  component() {
    if (this.toolbarService.component) {
      window.open(`${environment.github.components}/${this.toolbarService.component}`, '_blank');
    } else {
      window.open(environment.github.components, '_blank');
    }
  }

  documentation() {
    const comp = this.toolbarService.component;
    window.open(
      `${environment.github.components}/${comp}/${comp}.md`,
    );
  }

  onMenuClick() {
    this.toggle.emit();
  }
}
