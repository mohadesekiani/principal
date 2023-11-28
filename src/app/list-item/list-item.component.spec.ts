
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { listUserConst } from 'src/app/core-test/model/list-user.spec.const';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';
import { IItem } from 'src/app/core/model/interface/user.interface';
import { ListItemComponent } from './list-item.component';

describe('SUT: ListItemComponent', () => {
  let sut: ListItemComponent;
  let router: jasmine.SpyObj<Router>;
  let userDataService: jasmine.SpyObj<AbstractDataService>;
  const fakeUsers: IItem[] = listUserConst.fakeUser;

  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractDataService>({
      getAllData: of(fakeUsers),
      deleteData: of(fakeUsers),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListItemComponent(router, userDataService);
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be create properly', () => {
    // assert
    expect(sut.loading).toBeFalsy()
    expect(sut.allData).toEqual(fakeUsers)
    expect(sut.itemHeader).toEqual([{ title: 'Name', value: UserTableHeaderEnum.Name }, { title: 'Description', value: UserTableHeaderEnum.Description }, { title: 'First Name', value: UserTableHeaderEnum.FirstName }, { title: 'Last Name', value: UserTableHeaderEnum.LastName }, { title: 'Email', value: UserTableHeaderEnum.Email }, { title: 'Type', value: UserTableHeaderEnum.Type }, { title: 'Opr', value: UserTableHeaderEnum.Opr }])
  });



  it('should be throw exception with null router,dataService', () => {
    // assert
    expect(() => new ListItemComponent(router, null as any)).toThrowError('dataService is null')
    expect(() => new ListItemComponent(null as any, userDataService)).toThrowError('router is null')
  });
  it('should be all data returned when the data service is called', () => {
    // assert
    expect(userDataService.getAllData).toHaveBeenCalled()
    expect(sut.allData).toEqual(fakeUsers)
    expect(sut.loading).toBe(false)
  });

  it('should be the desired line deleted when the delete button is click', () => {
    // arrange
    userDataService.getAllData.and.returnValues(of([fakeUsers[0]]));

    // act
    sut.deleteItem('315768d5');

    // assert
    expect(userDataService.deleteData).toHaveBeenCalledWith('315768d5')
    expect(userDataService.getAllData).toHaveBeenCalled();
    expect(sut.allData).toEqual([fakeUsers[0]]);
    expect(sut.loading).toBe(false);
  });

  it('should be when the edit button is clicked, it will go to the edit form with the user ID and type === user', () => {
    // act
    sut.editItem('315768d5', 'user')

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/', '315768d5']);
  });

  it('should be when the edit button is clicked, it will go to the edit form with the user ID and type === user_group', () => {
    // act
    sut.editItem('userGroup_26_t', 'user_group')

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user-group/', 'userGroup_26_t']);
  });

  it('should be when the add button is clicked ,go to the add new user form', () => {
    // act
    sut.navigatePath(sut.urlAddNewUser)

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/new']);
  });

  it('should be when the add button is clicked ,go to the add new userGroup form', () => {
    // act
    sut.navigatePath(sut.urlAddNewUserGroup)

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user-group/new']);
  });

});
