import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormOprRD } from 'src/app/core/base-classes/base-form-opr-r-d';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserGroupTableHeaderEnum } from 'src/app/core/model/enum/user-group-table-heder';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';

@Component({
  selector: 'app-list-user-group',
  templateUrl: './list-user-group.component.html',
  styleUrls: ['./list-user-group.component.sass'],
})
export class ListUserGroupComponent extends BaseFormOprRD<IUserGroup>{

  protected override resultUrlNewItem = '/user-group/new'
  protected override resultUrlUpdateItem: string = '/user-group/'
  itemHeader = Object.values(UserGroupTableHeaderEnum).map((value) => ({
    title: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value,
  }));

  constructor(router: Router, dataService: AbstractDataService<IUserGroup>) {
    super(router, dataService);
  }


}
