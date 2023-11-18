import { Observable } from 'rxjs';

export abstract class AbstractUserDataService {
  abstract getAllUserData(): Observable<any>;
  abstract deleteUserData(userId: string): Observable<any>;
  abstract addedUserData(): Observable<any>;
  abstract editUserData(userId: string): Observable<any>;
}
