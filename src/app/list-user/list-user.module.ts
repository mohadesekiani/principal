import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserComponent } from './component/form-user/form-user.component';

@NgModule({
  declarations: [FormUserComponent],
  imports: [CommonModule, SharedModule],
  providers: [

  ],
})
export class ListUserModule {}
