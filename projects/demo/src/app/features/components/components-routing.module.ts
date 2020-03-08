import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingResolver } from '../../app-routing.resolver';

const routes: Routes = [
  {
    path: 'button',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./button/button.module').then(m => m.ButtonModule),
  },
  {
    path: 'card',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./card/card.module').then(m => m.CardModule),
  },
  {
    path: 'icon',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./icon/icon.module').then(m => m.IconModule),
  },
  {
    path: 'toolbar',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./toolbar/toolbar.module').then(m => m.ToolbarModule),
  },
  {
    path: 'tooltip',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule),
  },
  {
    path: 'popover',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./popover/popover.module').then(m => m.PopoverModule),
  },
  {
    path: 'toast',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./toast/toast.module').then(m => m.ToastModule),
  },
  {
    path: 'select',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./select/select.module').then(m => m.SelectModule),
  },
  {
    path: 'input',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./input/input.module').then(m => m.InputModule),
  },
  {
    path: 'dialog',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule),
  },
  {
    path: 'progress',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./progress/progress.module').then(m => m.ProgressModule),
  },
  {
    path: 'sidenav',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./sidenav/sidenav.module').then(m => m.SidenavModule),
  },
  {
    path: 'tab',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./tab/tab.module').then(m => m.TabModule),
  },
  {
    path: 'checkbox',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule),
  },
  {
    path: 'slide-toggle',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./slide-toggle/slide-toggle.module').then(m => m.SlideToggleModule),
  },
  {
    path: 'split',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./split/split.module').then(m => m.SplitModule),
  },
  {
    path: 'scroll',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule),
  },
  {
    path: 'badge',
    resolve: { title: AppRoutingResolver },
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AppRoutingResolver],
})
export class ComponentsRoutingModule { }
