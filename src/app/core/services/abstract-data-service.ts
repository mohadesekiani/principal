import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IItem } from '../model/interface/user.interface';

@Injectable({ providedIn: 'root' })
export abstract class AbstractDataService{
  abstract getAllData(): Observable<any>;
  abstract deleteData(id: string): Observable<any>;
  abstract addedData(newData:IItem): Observable<any>;
  abstract getByID(id: string): Observable<any>;
  abstract editData(id: string, updatedData: IItem): Observable<any>;
  abstract setId(): string;
}
