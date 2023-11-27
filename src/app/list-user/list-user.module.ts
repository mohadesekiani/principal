import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserComponent } from './component/form-user/form-user.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { TruncatePipe } from '../core/pipe-custom/truncate.pipe';

@NgModule({
  declarations: [ListUserComponent, FormUserComponent,TruncatePipe],
  imports: [CommonModule, SharedModule],
  providers: [

  ],
})
export class ListUserModule {}
