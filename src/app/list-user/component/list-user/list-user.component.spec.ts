
import { IUser } from 'src/app/core/model/interface/user.interface';
import { ListUserComponent } from './list-user.component';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('SUT: ListUserComponent', () => {
  let sut: ListUserComponent;
  let router: jasmine.SpyObj<Router>;

  const fakeUsers: IUser[] = [
    {
      id: '315768d5',
      firstName: 'm1',
      lastName: 'k1',
      email: 'm1@gmail.com'
    },
    {
      id: 'a096aae1',
      firstName: 'm2',
      lastName: 'k2',
      email: 'm2@gmail.com'
    },
  ];
  const userDataService = jasmine.createSpyObj<AbstractUserDataService>({
    getAllUserData: of(fakeUsers),
    deleteUserData: of(fakeUsers),
  })
  beforeEach(() => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListUserComponent(userDataService, router);
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null userDataService', () => {
    // assert
    expect(() => new ListUserComponent(null as any,router)).toThrow('userDataService is empty')
  });

  it('should be throw exception with null router', () => {
    // assert
    expect(() => new ListUserComponent(userDataService,null as any)).toThrow('router is empty')
  });
  it('should be all data returned when the data service is called', () => {
    // assert
    expect(userDataService.getAllUserData).toHaveBeenCalled()
    expect(sut.allUser).toEqual(fakeUsers)
    expect(sut.loading).toBe(false)
  });

  it('should be the desired line deleted when the delete button is click', () => {
    // act
    sut.deletedUser('315768d5')

    // assert
    expect(userDataService.deleteUserData).toHaveBeenCalledWith('315768d5')
    expect(userDataService.getAllUserData).toHaveBeenCalled()
    expect(sut.allUser).toEqual([{ id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com' }])
    expect(sut.loading).toBe(false)
  });

  it('should be when the edit button is clicked, it will go to the edit form with the user ID', () => {
    // act
    sut.editUser('315768d5')

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/','315768d5']);
  });

  it('should be when the add button is clicked ,go to the add new user form', () => {
    // act
    sut.addedUser()

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/new-user']);
  });
});
