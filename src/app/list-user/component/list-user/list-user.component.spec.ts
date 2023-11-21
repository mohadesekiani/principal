
import { IUser } from 'src/app/core/model/interface/user.interface';
import { ListUserComponent } from './list-user.component';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';

describe('SUT: ListUserComponent', () => {
  let sut: ListUserComponent;
  let router: jasmine.SpyObj<Router>;
  let userDataService: jasmine.SpyObj<AbstractUserDataService>;
  const fakeUsers: IUser[] = [
    { id: '315768d5', firstName: 'm1', lastName: 'k1', email: 'm1@gmail.com', description: 'test for description', name: 'm1 k1' },
    { id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2' },
  ];

  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractUserDataService>({
      getAllUserData: of(fakeUsers),
      deleteUserData: of(fakeUsers),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListUserComponent(userDataService, router);
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be create properly', () => {
    // assert
    expect(sut.loading).toBeFalsy()
    expect(sut.allUser).toEqual(fakeUsers)
    expect(sut.itemHeader).toEqual([{ title: 'Name', value: UserTableHeaderEnum.Name }, { title: 'Description', value: UserTableHeaderEnum.Description }, { title: 'First Name', value: UserTableHeaderEnum.FirstName }, { title: 'Last Name', value: UserTableHeaderEnum.LastName }, { title: 'Email', value: UserTableHeaderEnum.Email }, { title: 'Opr', value: UserTableHeaderEnum.Opr }])
  });

  it('should be throw exception with null userDataService', () => {
    // assert
    expect(() => new ListUserComponent(null as any, router)).toThrow('userDataService is empty')
  });

  it('should be throw exception with null router', () => {
    // assert
    expect(() => new ListUserComponent(userDataService, null as any)).toThrow('router is empty')
  });
  it('should be all data returned when the data service is called', () => {
    // assert
    expect(userDataService.getAllUserData).toHaveBeenCalled()
    expect(sut.allUser).toEqual(fakeUsers)
    expect(sut.loading).toBe(false)
  });

  it('should be the desired line deleted when the delete button is click', () => {
    // arrange
    userDataService.getAllUserData.and.returnValues(of([fakeUsers[0]]));

    // act
    sut.deletedUser('315768d5');

    // assert
    expect(userDataService.deleteUserData).toHaveBeenCalledWith('315768d5')
    expect(userDataService.getAllUserData).toHaveBeenCalled();
    expect(sut.allUser).toEqual([fakeUsers[0]]);
    expect(sut.loading).toBe(false);
  });

  it('should be when the edit button is clicked, it will go to the edit form with the user ID', () => {
    // act
    sut.editUser('315768d5')

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/', '315768d5']);
  });

  it('should be when the add button is clicked ,go to the add new user form', () => {
    // act
    sut.addedUser()

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/new']);
  });
});
