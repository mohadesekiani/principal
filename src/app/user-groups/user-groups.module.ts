import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';

@NgModule({
  declarations: [FormUserGroupComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
})
export class UserGroupsModule { }
