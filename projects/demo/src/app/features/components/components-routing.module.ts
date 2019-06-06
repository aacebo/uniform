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
  },
  {
    path: 'icon',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./icon/icon.module').then(m => m.IconModule)
  },
  {
    path: 'toolbar',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./toolbar/toolbar.module').then(m => m.ToolbarModule)
  },
  {
    path: 'tooltip',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule)
  },
  {
    path: 'popover',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./popover/popover.module').then(m => m.PopoverModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AppRoutingResolver]
})
export class ComponentsRoutingModule {}
