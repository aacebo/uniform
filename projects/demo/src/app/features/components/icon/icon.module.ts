import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniIconModule, UniTabModule, UniCodeModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    IconRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniIconModule,
    UniTabModule,
    UniCodeModule,
  ],
})
export class IconModule { }
