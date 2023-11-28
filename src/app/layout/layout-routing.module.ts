import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserGroupComponent } from '../list-user-group/components/form-user-group/form-user-group.component';
import { FormUserComponent } from '../list-user/component/form-user/form-user.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      {
        path: 'user',
        component: ListItemComponent,
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
        component: ListItemComponent,
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
export class LayoutRoutingModule {}
