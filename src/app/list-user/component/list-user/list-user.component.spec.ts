
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserTableHeaderEnum } from 'src/app/core/model/enum/user-table-heder';
import { IUser } from 'src/app/core/model/interface/user.interface';
import { ListUserComponent } from './list-user.component';
import { listUserConst } from 'src/app/core-test/model/list-user.spec.const';

xdescribe('SUT: ListUserComponent', () => {
  let sut: ListUserComponent;
  let router: jasmine.SpyObj<Router>;
  let userDataService: jasmine.SpyObj<AbstractDataService<IUser>>;
  const fakeUsers: IUser[] =listUserConst.fakeUser;

  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractDataService<IUser>>({
      getAllData: of(fakeUsers),
      deleteData: of(fakeUsers),
    });
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new ListUserComponent(router, userDataService);
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
    expect(() => new ListUserComponent(router, null as any)).toThrowError('dataService is null')
    expect(() => new ListUserComponent(null as any, userDataService)).toThrowError('router is null')
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
    sut.deletedItem('315768d5');

    // assert
    expect(userDataService.deleteData).toHaveBeenCalledWith('315768d5')
    expect(userDataService.getAllData).toHaveBeenCalled();
    expect(sut.allData).toEqual([fakeUsers[0]]);
    expect(sut.loading).toBe(false);
  });

  // it('should be when the edit button is clicked, it will go to the edit form with the user ID', () => {
  //   // act
  //   sut.editItem('315768d5')

  //   // assert
  //   expect(router.navigate).toHaveBeenCalledWith(['/user/', '315768d5']);
  // });

  it('should be when the add button is clicked ,go to the add new user form', () => {
    // act
    // sut.addedItem()

    // assert
    expect(router.navigate).toHaveBeenCalledWith(['/user/new']);
  });
});
