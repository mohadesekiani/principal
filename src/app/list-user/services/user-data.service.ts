import { Observable, of } from "rxjs";
import { AbstractUserDataService } from "./abstract-user-data.service";
import * as fakeData from './mock-data';
import { IUser } from "src/app/core/model/interface/user.interface";


export class UserDataService extends AbstractUserDataService {
    private myData = [...fakeData.users];

    constructor() {
        super();
    }

    getAllUserData(): Observable<any> {
        return of(this.myData)
    }

    deleteUserData(userId: string): Observable<any> {
        const index = this.myData.findIndex(user => user.id === userId);
        this.myData.splice(index, 1)
        return of(this.myData);
    }

    addedUserData(newUser: IUser): Observable<any> {
        this.myData.push(newUser);
        return of(this.myData)
    }

    editUserData(userId: string, updatedUserData: IUser): Observable<any> {
        const userIndex = this.myData.findIndex(user => user.id === userId);
        this.myData[userIndex] = { ...this.myData[userIndex], ...updatedUserData };
        return of(this.myData);
    }

    getByID(userId: string): Observable<any> {
        return of(this.myData.filter(data => data.id === userId))

    }
}