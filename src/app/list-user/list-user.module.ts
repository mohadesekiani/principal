import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './component/list-user/list-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListUserComponent],
  imports: [CommonModule,SharedModule],
})
export class ListUserModule {}
