import { Injectable } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { IItem } from 'src/app/core/model/interface/user.interface';
import * as fakeData from './mock-data';

@Injectable({ providedIn: 'root' })
export class UserDataService extends AbstractDataService {
  private myData: IItem[] = [...fakeData.users];

  constructor() {
    super();
  }

  getAllData(): Observable<any> {
    return of(this.myData);
  }

  deleteData(userId: string): Observable<any> {
    const index = this.myData.findIndex((user) => user.id === userId);
    this.myData.splice(index, 1);
    return of(this.myData);
  }

  addedData(newUser: IItem): Observable<any> {
    this.myData.push(newUser);
    return of(this.myData);
  }

  editData(userId: string, updatedUserData: IItem): Observable<any> {
    // const userIndex = this.myData.findIndex((user) => user.id === userId);
    let newData = this.myData.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          ...updatedUserData,
          id: user.id,
        };
      } else return user;
    });

    this.myData = newData;

    return of(this.myData);
  }

  getByID(userId: string): Observable<any> {
    return of(this.myData.find((data) => data.id === userId)).pipe(first());
  }

  setId(): string {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const timestamp = new Date().getTime();
    return `userGroup_${randomNumber}_${randomChar}_${timestamp}`;
  }
}
