import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';
import { IUser } from 'src/app/core/model/interface/user.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent {
  loading = false;
  allUser!: IUser[];
  itemHeader = Object.values(UserTableHeaderEnum).map((value) => ({
    title: value.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value,
  }));


  constructor(private userDataService: AbstractDataService<IUser>, private router: Router) {
    if (!userDataService) {
      throw 'userDataService is empty'
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
    this.userDataService.getAllData().subscribe({
      next: (res) => {
        this.allUser = res
        this.loading = false
      },
      error: (err) => {
        this.loading = false
      }

    })
  }

  deletedUser(userId: string) {
    this.loading = true;
    this.userDataService.deleteData(userId).subscribe({
      next: () => {
        this.receivedAllData();
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }

  editUser(userId: string) {
    this.router.navigate(['/user/', userId]);
  }

  addedUser() {
    this.router.navigate(['/user/new']);
  }

  isAllData() {
    return this.allUser.length > 0
  }
}
