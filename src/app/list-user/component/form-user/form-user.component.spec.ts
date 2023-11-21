
import { FormBuilder, Validators } from '@angular/forms';
import { FormUserComponent } from './form-user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { of } from 'rxjs';
import * as fakeData from '../../services/mock-data/index';
import { IUser } from 'src/app/core/model/interface/user.interface';
describe('SUT: FormUserComponent', () => {
  let sut: FormUserComponent;
  let fb: FormBuilder;
  let router: jasmine.SpyObj<Router>;
  let route: jasmine.SpyObj<ActivatedRoute>;
  let userDataService: jasmine.SpyObj<AbstractUserDataService>;

  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractUserDataService>({
      addedUserData: of(fakeData),
      getByID: of({ id: '123', lastName: 'Doe', firstName: 'John', email: 'john.doe@example.com' }),
      editUserData: of({ id: '123', lastName: 'm3', firstName: 'k3', email: 'john.doe@example.com' })
    });
    fb = new FormBuilder();
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    route = { params: jasmine.createSpyObj('params', ['subscribe']) } as jasmine.SpyObj<ActivatedRoute>;
    sut = new FormUserComponent(fb, router, userDataService, route);
    sut.ngOnInit()
  });

  it('should create', () => {
    // assert 
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null FormBuilder and router and userDataService and route', () => {
    // assert
    expect(() => new FormUserComponent(null as any, router, userDataService, route)).toThrow('FormBuilder is empty')
    expect(() => new FormUserComponent(fb, null as any, userDataService, route)).toThrow('router is empty')
    expect(() => new FormUserComponent(fb, router, null as any, route)).toThrow('userDataService is empty')
    expect(() => new FormUserComponent(fb, router, userDataService, null as any)).toThrow('route is empty')
  });

  it('should be create properly', () => {
    // assert
    expect(sut.form).toBeTruthy();
    expect(sut.form.value).toEqual({ id: null, lastName: null, firstName: null, email: null });
    expect(sut.isEditMode).toBeFalsy();
  });

  it(`should be have an error 'required' when the value is null`, () => {
    // assert
    expect(sut.form.controls.lastName.hasError('required')).toBeTruthy()
    expect(sut.form.controls.firstName.hasError('required')).toBeTruthy()
    expect(sut.form.controls.email.hasError('required')).toBeTruthy()
  });

  it(`should be have an error 'email' if it doesn't have the email format`, () => {
    // act
    sut.form.patchValue({ email: 'kkkk' })

    // assert
    expect(sut.form.controls.email.hasError('email')).toBeTruthy()
  });

  it('should set isEditMode to true and load data when id is provided in params', () => {
    // arrange
    route.params = of({ id: '123' });

    // act
    sut.ngOnInit()

    // assert
    expect(sut.isEditMode).toBe(true);
    expect(sut.itemId).toBe('123');
    expect(sut.form.value).toEqual({ id: '123', lastName: 'Doe', firstName: 'John', email: 'john.doe@example.com' });
  });

  it(`should be when submitting,if there is no ID and the form is valid added new user 
      and return to the previous page`, () => {
    // arrange
    sut.isEditMode = false
    sut.form.setValue({ id: '', lastName: 'm4', firstName: 'k4', email: 'm4@gmail.com' })

    // act
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).not.toBe('')
    expect(userDataService.addedUserData).toHaveBeenCalledWith(sut.form.value as IUser);
    expect(router.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should not call addedUserData when form is not valid', () => {
    //arrange
    sut.form.patchValue({ email: 'm@gmail.com' })

    // act
    sut['addedUser']();

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userDataService.addedUserData).not.toHaveBeenCalled();
  });

  it(`should be when submitting,if there is ID and the form updated and return to the previous page`, () => {
    // arrange
    route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ lastName: 'm4', firstName: 'k4' })
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).toBe('123')
    expect(sut.form.controls.lastName.value).toBe('m4')
    expect(userDataService.editUserData).toHaveBeenCalledWith('123', sut.form.value as IUser);
    expect(router.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should not call editUserData when form is not valid', () => {
    //arrange
    sut.form.patchValue({ email: 'm@gmail.com' })

    // act
    sut['editUser']();

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userDataService.editUserData).not.toHaveBeenCalled();
  });
});
