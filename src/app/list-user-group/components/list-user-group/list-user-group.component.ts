import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserGroupTableHeaderEnum } from 'src/app/core/model/enum/user-group-table-heder';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';

@Component({
  selector: 'app-list-user-group',
  templateUrl: './list-user-group.component.html',
  styleUrls: ['./list-user-group.component.sass']
})
export class ListUserGroupComponent {
  loading = false
  allUserGroup: IUserGroup[] = []
  itemHeader = Object.values(UserGroupTableHeaderEnum).map((value) => ({
    title: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value,
  }));


  constructor(private userGroupDataService: AbstractDataService<IUserGroup>, private router: Router) {
    if (!userGroupDataService) {
      throw 'userGroupDataService is empty'
    }
    if (!router) {
      throw 'router is empty'
    }
  }

  ngOnInit(): void {
    this.receivedAllData()
  }

  private receivedAllData() {
    this.loading = true;
    this.userGroupDataService.getAllData().subscribe({
      next: (res) => {
        this.allUserGroup = res
        this.loading = false
      },
      error: (err) => {
        this.loading = false
      }
    })
  }

  deletedUserGroup(userGroupId: string) {
    this.loading = true;
    this.userGroupDataService.deleteData(userGroupId).subscribe({
      next: () => {
        this.receivedAllData();
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }

  editUserGroup(userGroupId: string) {
    this.router.navigate(['/user-group/', userGroupId]);
  }

  addedUserGroup() {
    this.router.navigate(['/user-group/new']);
  }

  isAllData() {
    return this.allUserGroup.length > 0
  }
}
