import { Observable, first, of } from "rxjs";
import * as fakeData from './mock-data';
import { IUser } from "src/app/core/model/interface/user.interface";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";


export class UserDataService extends AbstractDataService<IUser> {
    private myData:IUser[] = [...fakeData.users];

    constructor() {
        super();
    }

    getAllData(): Observable<any> {
        return of(this.myData)
    }

    deleteData(userId: string): Observable<any> {
        const index = this.myData.findIndex(user => user.id === userId);
        this.myData.splice(index, 1)
        return of(this.myData);
    }

    addedData(newUser: IUser): Observable<any> {
        this.myData.push(newUser);
        return of(this.myData)
    }

    editData(userId: string, updatedUserData: IUser): Observable<any> {
        const userIndex = this.myData.findIndex(user => user.id === userId);
        this.myData[userIndex] = { ...this.myData[userIndex], ...updatedUserData, id: this.myData[userIndex].id };
        console.log('mmm', this.myData[userIndex]);
        
        return of(this.myData);
    }

    getByID(userId: string): Observable<any> {
        return of(this.myData.find(data => data.id === userId)).pipe(
            first()
        );
    }
    // استفاده نشده todo
    setId(): Observable<any> {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        const timestamp = new Date().getTime();
        return of(`userGroup_${randomNumber}_${randomChar}_${timestamp}`);

    }
}