import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from '../list-user/component/form-user/form-user.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListUserComponent } from '../list-user/component/list-user/list-user.component';
import { FormUserGroupComponent } from '../list-user-group/components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from '../list-user-group/components/list-user-group/list-user-group.component';

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
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user-group',
        component: ListUserGroupComponent
      },
      { path: 'user-group/new', component: FormUserGroupComponent },
      { path: 'user-group/:id', component: FormUserGroupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
