import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { BaseBuilder } from "src/app/core-test/base-unit-test/base-builder";
import { BaseFormOprCU } from "../../core/base-classes/base-form-opr-c-u";
import { AbstractDataService } from "../../core/services/abstract-data-service";
import { IItem } from "src/app/core/model/interface/user.interface";

class MockDataService<T> extends AbstractDataService{
    getAllData() {
        return of([]);
    }

    deleteData(itemId: string) {
        return of({});
    }

    addedData(newData: IItem){
        return of([])
    }
    getByID(id: string){
        return of({})
    }
    editData(id: string, updatedData: IItem){
        return of([])
    }
    setId(){
        return ''
    }
}

export function BaseFormOprCUTestFunc(sutBuilderFactory: () => BaseBuilder<any>) {
  let sut: BaseFormOprCU<any>;
  let sutBuilder: BaseBuilder<any>;  let router: Router;
  let route: ActivatedRoute;
  let dataService: AbstractDataService;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    route = { params: jasmine.createSpyObj('params', ['subscribe']) } as jasmine.SpyObj<ActivatedRoute>;
    dataService = new MockDataService<any>();
    
    sutBuilder = sutBuilderFactory();
});

  it('should create', () => {
    sut = sutBuilder.build();
    expect(sut).toBeTruthy();
  });


}
