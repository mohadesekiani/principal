import { Router } from "@angular/router";
import { ListUserGroupComponent } from "./list-user-group.component";
import { AbstractUserGroupDataService } from "../../services/abstract-user-group-data.service";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { of } from "rxjs";
import { UserGroupTableHeaderEnum } from "src/app/core/model/enum/user-group-table-heder";

describe('SUT: ListUserGroupComponent', () => {
  let sut: ListUserGroupComponent;
  let router: jasmine.SpyObj<Router>;
  let userGroupDataService: jasmine.SpyObj<AbstractUserGroupDataService>;
  const fakeUserGroups: IUserGroup[] = [
    {
      id: 'userGroup_23_k', description: 'test for description', name: 'm1 k1'
    },
    {
      id: 'userGroup_26_t', description: 'test for description', name: 'm2 k2'
    },
  ];
  beforeEach(() => {
    userGroupDataService = jasmine.createSpyObj<AbstractUserGroupDataService>({
      getAllUserGroupData: of(fakeUserGroups),
      deleteUserGroupData: of(fakeUserGroups),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListUserGroupComponent(userGroupDataService, router);
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be create properly', () => {
    // assert
    expect(sut.loading).toBeFalsy()
    expect(sut.allUserGroup).toEqual(fakeUserGroups)
    expect(sut.itemHeader).toEqual([{ title: 'Name', value: UserGroupTableHeaderEnum.Name }, { title: 'Description', value: UserGroupTableHeaderEnum.Description }, { title: 'Opr', value: UserGroupTableHeaderEnum.Opr }])
  });

  it('should be throw exception with null userGroupDataService', () => {
    // assert
    expect(() => new ListUserGroupComponent(null as any, router)).toThrow('userGroupDataService is empty')
    expect(() => new ListUserGroupComponent(userGroupDataService, null as any)).toThrow('router is empty')
  });

  it('should be all data returned when the data service is called', () => {
    // assert
    expect(userGroupDataService.getAllUserGroupData).toHaveBeenCalled()
    expect(sut.allUserGroup).toEqual(fakeUserGroups)
    expect(sut.loading).toBe(false)
  });

  it('should be the desired line deleted when the delete button is click', () => {
    // arrange
    userGroupDataService.getAllUserGroupData.and.returnValues(of([fakeUserGroups[0]]));

    // act
    sut.deletedUserGroup('userGroup_23_k');

    // assert
    expect(userGroupDataService.deleteUserGroupData).toHaveBeenCalledWith('userGroup_23_k')
    expect(userGroupDataService.getAllUserGroupData).toHaveBeenCalled();
    expect(sut.allUserGroup).toEqual([fakeUserGroups[0]]);
    expect(sut.loading).toBe(false);
  });

  
  it('should be when the edit button is clicked, it will go to the edit form with the userGroup ID', () => {
    // act
    sut.editUserGroup('userGroup_23_k')

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user-group/', 'userGroup_23_k']);
  });

  it('should be when the add button is clicked ,go to the add new userGroup form', () => {
    // act
    sut.addedUserGroup()

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user-group/new']);
  });
});
