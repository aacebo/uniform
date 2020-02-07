import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UniMarkedModule } from '@uniform/components';

import { DocViewerComponent } from './doc-viewer.component';
import { DocViewerService } from './doc-viewer.service';

@NgModule({
  declarations: [DocViewerComponent],
  exports: [DocViewerComponent],
  providers: [DocViewerService],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, HttpClientModule, UniMarkedModule],
})
export class DocViewerModule { }
