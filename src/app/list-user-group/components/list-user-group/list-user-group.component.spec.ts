import { Router } from "@angular/router";
import { of } from "rxjs";
import { listUserGroupConst } from "src/app/core-test/model/list-user-group.spec.const";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";
import { UserGroupTableHeaderEnum } from "src/app/core/model/enum/user-group-table-heder";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { ListUserGroupComponent } from "./list-user-group.component";

xdescribe('SUT: ListUserGroupComponent', () => {
  let sut: ListUserGroupComponent;
  let router: jasmine.SpyObj<Router>;
  let userGroupDataService: jasmine.SpyObj<AbstractDataService<IUserGroup>>;
  const fakeUserGroups: IUserGroup[] = listUserGroupConst.fakeUserGroups;
  beforeEach(() => {
    userGroupDataService = jasmine.createSpyObj<AbstractDataService<IUserGroup>>({
      getAllData: of(fakeUserGroups),
      deleteData: of(fakeUserGroups),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListUserGroupComponent(router, userGroupDataService);
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be create properly', () => {
    // assert
    expect(sut.loading).toBeFalsy()
    expect(sut.allData).toEqual(fakeUserGroups)
    expect(sut.itemHeader).toEqual([{ title: 'Name', value: UserGroupTableHeaderEnum.Name }, { title: 'Description', value: UserGroupTableHeaderEnum.Description }, { title: 'Opr', value: UserGroupTableHeaderEnum.Opr }])
  });

  it('should be throw exception with null userGroupDataService', () => {
    // assert
    expect(() => new ListUserGroupComponent(router, null as any)).toThrowError('dataService is null')
    expect(() => new ListUserGroupComponent(null as any, userGroupDataService)).toThrowError('router is null')
  });

  it('should be all data returned when the data service is called', () => {
    // assert
    expect(userGroupDataService.getAllData).toHaveBeenCalled()
    expect(sut.allData).toEqual(fakeUserGroups)
    expect(sut.loading).toBe(false)
  });

  it('should be the desired line deleted when the delete button is click', () => {
    // arrange
    userGroupDataService.getAllData.and.returnValues(of([fakeUserGroups[0]]));

    // act
    sut.deletedItem('userGroup_23_k');

    // assert
    expect(userGroupDataService.deleteData).toHaveBeenCalledWith('userGroup_23_k')
    expect(userGroupDataService.getAllData).toHaveBeenCalled();
    expect(sut.allData).toEqual([fakeUserGroups[0]]);
    expect(sut.loading).toBe(false);
  });


  // it('should be when the edit button is clicked, it will go to the edit form with the userGroup ID', () => {
  //   // act
  //   sut.editItem('userGroup_23_k')

  //   // assert
  //   expect(router.navigate).toHaveBeenCalledWith(['/user-group/', 'userGroup_23_k']);
  // });

  it('should be when the add button is clicked ,go to the add new userGroup form', () => {
    // act
    // sut.addedItem()

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user-group/new']);
  });
});
