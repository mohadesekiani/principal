import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/core/base-classes/base-list-component';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';
import { IItem } from 'src/app/core/model/interface/user.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent extends BaseListComponent<IItem> {
  urlAddNewUser = '/user/new';
  urlAddNewUserGroup = '/user-group/new';
  protected override resultUrlUpdateUser: string = '/user/';
  protected override resultUrlUpdateUserGroup: string = '/user-group/';
  itemHeader = Object.values(UserTableHeaderEnum).map((value) => ({
    title: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value,
  }));

  constructor(router: Router, dataService: AbstractDataService) {
    super(router, dataService);
  }
}