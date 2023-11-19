import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './component/list-user/list-user.component';
import { SharedModule } from '../shared/shared.module';
import { FormNewUserComponent } from './component/form-new-user/form-new-user.component';

@NgModule({
  declarations: [ListUserComponent, FormNewUserComponent],
  imports: [CommonModule,SharedModule],
})
export class ListUserModule {}
