import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../list-user/list-user.module').then((m) => m.ListUserModule),
      },
      {
        path: 'user-group',
        loadChildren: () =>
          import('../list-user/list-user.module').then((m) => m.ListUserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
