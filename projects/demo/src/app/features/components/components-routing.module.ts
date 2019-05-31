import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingResolver } from '../../app-routing.resolver';

const routes: Routes = [
  {
    path: 'button',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)
  },
  {
    path: 'card',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./card/card.module').then(m => m.CardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AppRoutingResolver]
})
export class ComponentsRoutingModule {}
