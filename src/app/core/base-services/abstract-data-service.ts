import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class AbstractDataService<T> {
  abstract getAllData(): Observable<any>;
  abstract deleteData(id: string): Observable<any>;
  abstract addedData(newData: T): Observable<any>;
  abstract getByID(id: string): Observable<any>;
  abstract editData(id: string, updatedData: T): Observable<any>;
  abstract setId(): string;
}
