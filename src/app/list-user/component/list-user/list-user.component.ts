import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormOprRD } from 'src/app/core/base-classes/base-form-opr-r-d';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';
import { IUser } from 'src/app/core/model/interface/user.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent extends BaseFormOprRD<IUser> {

  protected override resultUrlNewItem = '/user/new'
  protected override resultUrlUpdateItem: string = '/user/'
  itemHeader = Object.values(UserTableHeaderEnum).map((value) => ({
    title: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value,
  }));

  constructor(router: Router, dataService: AbstractDataService<IUser>) {
    super(router, dataService);
  }

}
