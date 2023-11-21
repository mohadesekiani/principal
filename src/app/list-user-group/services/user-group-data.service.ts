import { Observable, first, of } from 'rxjs';
import * as fakData from './mock-data/index'
import { AbstractUserGroupDataService } from './abstract-user-group-data.service';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';

export class UserGroupDataService extends AbstractUserGroupDataService {
    private myData = [...fakData.userGroups];

    constructor() {
        super();
    }

    getAllUserGroupData(): Observable<any> {
        return of(this.myData)
    }

    deleteUserGroupData(userGroupId: string): Observable<any> {
        const index = this.myData.findIndex(userGroup => userGroup.id === userGroupId);
        this.myData.splice(index, 1)
        return of(this.myData);
    }

    addedUserGroupData(newUserGroup: IUserGroup): Observable<any> {
        this.myData.push(newUserGroup);
        return of(this.myData)
    }

    editUserGroupData(userGroupId: string, updatedUserData: IUserGroup): Observable<any> {
        const userIndex = this.myData.findIndex(userGroup => userGroup.id === userGroupId);
        this.myData[userIndex] = { ...this.myData[userIndex], ...updatedUserData, id: this.myData[userIndex].id };
        return of(this.myData);
    }

    getByID(userGroupId: string): Observable<any> {
        return of(this.myData.find(data => data.id === userGroupId)).pipe(
            first()
        );
    }
}