import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from './components/list-user-group/list-user-group.component';



@NgModule({
  declarations: [FormUserGroupComponent, ListUserGroupComponent],
  imports: [CommonModule, SharedModule],
  providers: [
  ],
})
export class ListUserGroupModule { }
