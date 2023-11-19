
import { FormBuilder, Validators } from '@angular/forms';
import { FormNewUserComponent } from './form-new-user.component';
import { Router } from '@angular/router';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { of } from 'rxjs';
import * as fakeData from '../../services/mock-data/index';
import { IUser } from 'src/app/core/model/interface/user.interface';
describe('SUT: FormNewUserComponent', () => {
  let sut: FormNewUserComponent;
  let fb: FormBuilder;
  let router: jasmine.SpyObj<Router>;
  let userDataService: jasmine.SpyObj<AbstractUserDataService>;

  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractUserDataService>({
      addedUserData: of(fakeData)
    });
    fb = new FormBuilder();
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    sut = new FormNewUserComponent(fb, router, userDataService);
    sut.ngOnInit()
  });

  it('should create', () => {
    // assert 
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null FormBuilder and router', () => {
    // assert
    expect(() => new FormNewUserComponent(null as any, router, userDataService)).toThrow('FormBuilder is empty')
    expect(() => new FormNewUserComponent(fb, null as any, userDataService)).toThrow('router is empty')
    expect(() => new FormNewUserComponent(fb, router, null as any)).toThrow('userDataService is empty')
  });

  it('should be create properly', () => {
    // assert
    expect(sut.form).toBeTruthy();
    expect(sut.form.value).toEqual({ id: null, lastName: null, firstName: null, email: null });
  });

  it(`should be have an error 'required' when the value is null`, () => {
    // assert
    expect(sut.form.controls.id.hasError('required')).toBeTruthy()
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

  it('should be when submitting,the new user added to the entire data and return to the previous page', () => {
    // arrange
    sut.form.setValue({ id: '', lastName: 'm4', firstName: 'k4', email: 'm4@gmail.com' })
    
    // act
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).not.toBe('')
    expect(userDataService.addedUserData).toHaveBeenCalledWith(sut.form.value as IUser);
    expect(router.navigate).toHaveBeenCalledWith(['/user']);
  });


});
