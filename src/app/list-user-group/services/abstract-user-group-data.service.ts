import { Observable } from 'rxjs';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';

export abstract class AbstractUserGroupDataService {
  abstract getAllUserGroupData(): Observable<any>;
  abstract deleteUserGroupData(userGroupId: string): Observable<any>;
  abstract addedUserGroupData(newUserGroup: IUserGroup): Observable<any>;
  abstract getByID(userGroupId: string): Observable<any>;
  abstract editUserGroupData(userId: string, updatedUserGroupData: IUserGroup): Observable<any>;
}
