import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/model/interface/user.interface';

export abstract class AbstractUserDataService {
  abstract getAllUserData(): Observable<any>;
  abstract deleteUserData(userId: string): Observable<any>;
  abstract addedUserData(newUser:IUser): Observable<any>;
  abstract editUserData(userId: string,updatedUserData:IUser): Observable<any>;
}
