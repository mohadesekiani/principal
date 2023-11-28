import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';
import * as fakData from './mock-data/index';

@Injectable({ providedIn: 'root' })
export class UserGroupDataService extends AbstractDataService {
  private myData = [...fakData.userGroups];

  constructor() {
    super();
  }

  getAllData(): Observable<any> {
    return of(this.myData);
  }

  deleteData(userGroupId: string): Observable<any> {
    const index = this.myData.findIndex(
      (userGroup) => userGroup.id === userGroupId
    );
    this.myData.splice(index, 1);
    return of(this.myData);
  }

  addedData(newUserGroup: IUserGroup): Observable<any> {
    this.myData.push(newUserGroup);
    return of(this.myData);
  }

  editData(userGroupId: string, updatedUserData: IUserGroup): Observable<any> {
    const userIndex = this.myData.findIndex(
      (userGroup) => userGroup.id === userGroupId
    );
    this.myData[userIndex] = {
      ...this.myData[userIndex],
      ...updatedUserData,
      id: this.myData[userIndex].id,
    };
    return of(this.myData);
  }

  getByID(userGroupId: string): Observable<any> {
    return of(this.myData.find((data) => data.id === userGroupId)).pipe(
      first()
    );
  }

  setId(): string {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const timestamp = new Date().getTime();
    return `userGroup_${randomNumber}_${randomChar}_${timestamp}`;
  }
}
