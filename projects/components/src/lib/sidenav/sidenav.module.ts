import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniSidenavComponent } from './components/sidenav/sidenav.component';
import { UniSidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { UniSidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { UniSidenavBodyDirective } from './directives/sidenav-body/sidenav-body.directive';

const declarations = [
  UniSidenavComponent,
  UniSidenavContainerComponent,
  UniSidenavContentComponent,
  UniSidenavBodyDirective,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniSidenavModule { }
