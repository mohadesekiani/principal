import { Component } from '@angular/core';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { IUser } from 'src/app/core/model/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent {
  loading = false;
  allUser!: IUser[];

  constructor(private userDataService: AbstractUserDataService, private router: Router) {
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
    this.userDataService.getAllUserData().subscribe({
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
    this.userDataService.deleteUserData(userId).subscribe({
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
    this.router.navigate(['/new-user']);
  }
}
