import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniSidenavComponent } from './components/sidenav/sidenav.component';
import { UniSidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { UniSidenavContentComponent } from './components/sidenav-content/sidenav-content.component';

const declarations = [
  UniSidenavComponent,
  UniSidenavContainerComponent,
  UniSidenavContentComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniSidenavModule { }
