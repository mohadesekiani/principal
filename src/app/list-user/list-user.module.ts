import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormUserComponent } from './component/form-user/form-user.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { AbstractDataService } from '../core/base-services/abstract-data-service';
import { UserDataService } from './services/user-data.service';
import { IUser } from '../core/model/interface/user.interface';

@NgModule({
  declarations: [ListUserComponent, FormUserComponent],
  imports: [CommonModule,SharedModule],
  providers: [
    {
      provide: AbstractDataService<IUser>,
      useClass: UserDataService,
    },
  ],
})
export class ListUserModule {}
