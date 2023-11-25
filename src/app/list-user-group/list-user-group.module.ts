import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserGroupComponent } from './components/form-user-group/form-user-group.component';
import { ListUserGroupComponent } from './components/list-user-group/list-user-group.component';
import { IUserGroup } from '../core/model/interface/user-group.interface';
import { AbstractDataService } from '../core/base-services/abstract-data-service';
import { UserGroupDataService } from './services/user-group-data.service';



@NgModule({
  declarations: [FormUserGroupComponent, ListUserGroupComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: AbstractDataService<IUserGroup>,
      useClass: UserGroupDataService,
    },
  ],
})
export class ListUserGroupModule { }
