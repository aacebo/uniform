import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniSidenavModule, UniButtonModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { SidenavComponent } from './sidenav.component';
import { SidenavRoutingModule } from './sidenav-routing.module';

@NgModule({
  declarations: [SidenavComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    SidenavRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniSidenavModule,
    UniButtonModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class SidenavModule { }
