import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormNewUserComponent } from './component/form-user/form-user.component';
import { ListUserComponent } from './component/list-user/list-user.component';

@NgModule({
  declarations: [ListUserComponent, FormNewUserComponent],
  imports: [CommonModule,SharedModule],
})
export class ListUserModule {}
