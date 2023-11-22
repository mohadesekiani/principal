import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from './components/list-user-group/list-user-group.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FormUserGroupComponent, ListUserGroupComponent],
  imports: [CommonModule, SharedModule]
})
export class ListUserGroupModule { }
