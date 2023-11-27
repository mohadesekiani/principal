import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from './components/list-user-group/list-user-group.component';
import { TruncatePipe } from '../core/pipe-custom/truncate.pipe';

@NgModule({
  declarations: [FormUserGroupComponent, ListUserGroupComponent,TruncatePipe],
  imports: [CommonModule, SharedModule],
  providers: [
    // {
    //   provide: AbstractDataService<IUserGroup>,
    //   useClass: UserGroupDataService,
    // },
  ],
})
export class ListUserGroupModule {}
