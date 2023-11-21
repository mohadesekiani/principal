import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from '../list-user/component/form-user/form-user.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListUserComponent } from '../list-user/component/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        component: ListUserComponent
      },
      { path: 'user/new', component: FormUserComponent },
      { path: 'user/:id', component: FormUserComponent },
    ],
  },
  {
    path: 'user-group',
    component: LayoutComponent,
    children: [
      {
        path: 'user-group',
        loadChildren: () =>
          import('../list-user/list-user.module').then((m) => m.ListUserModule),
      },
      { path: 'user-group/new', component: FormUserComponent },
      { path: 'user-group/:id', component: FormUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
