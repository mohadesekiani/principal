import { Observable } from "rxjs";

export abstract class AbstractDataService<T> {
    abstract getAllData(): Observable<any>;
    abstract deleteData(id: string): Observable<any>;
    abstract addedData(newData: T): Observable<any>;
    abstract getByID(id: string): Observable<any>;
    abstract editData(id: string, updatedData: T): Observable<any>;
    abstract setId(): Observable<any>;
}