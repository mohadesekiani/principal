import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from './components/list-user-group/list-user-group.component';



@NgModule({
  declarations: [
    FormUserGroupComponent,
    ListUserGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListUserGroupModule { }
