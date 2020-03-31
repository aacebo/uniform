import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/components/button',
    pathMatch: 'full',
  },
  {
    path: 'components',
    loadChildren: () => import('./features/components/components.module')
                        .then(m => m.ComponentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
