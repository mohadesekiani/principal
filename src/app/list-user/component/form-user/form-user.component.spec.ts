
import { of } from 'rxjs';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { formUserConst } from 'src/app/core-test/model/form-user.spec.const';
import { IUser } from 'src/app/core/model/interface/user.interface';
import * as fakeData from '../../services/mock-data/index';
import { FormUserComponent } from './form-user.component';
import { FormUserFormBuilder } from './form-user.component.spec.builder';
describe('SUT: FormUserComponent', () => {
  let sut: FormUserComponent;
  let userDataService: jasmine.SpyObj<AbstractDataService<IUser>>;
  let sutBuilder: FormUserFormBuilder


  beforeEach(() => {
    userDataService = jasmine.createSpyObj<AbstractDataService<IUser>>({
      addedData: of(fakeData),
      getByID: of(formUserConst.FormUserWithParams),
      editData: of(formUserConst.FormUserWithParams),
      setId: 'user_123_y'
    });
    sutBuilder = new FormUserFormBuilder(userDataService)
  });

  it('should create', () => {
    // assert 
    sut = sutBuilder.build()
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null router and userDataService and route', () => {
    // assert
    expect(() => new FormUserComponent(null as any, sutBuilder.route, userDataService)).toThrowError('router is null')
    expect(() => new FormUserComponent(sutBuilder.router, sutBuilder.route, null as any)).toThrowError('dataService is null')
    expect(() => new FormUserComponent(sutBuilder.router, null as any, userDataService)).toThrowError('route is null')
  });

  it('should be create properly', () => {
    // arrange
    sut = sutBuilder.build();

    // assert
    expect(sut.form).toBeTruthy();
    expect(sut.form.value).toEqual(formUserConst.defaultFormUser);
    expect(sut.isEditMode).toBeFalsy();
  });

  it(`should be have an error 'required' when the value is null`, () => {
    // arrange
    sut = sutBuilder.build();

    // assert
    expect(sut.form.controls.lastName.hasError('required')).toBeTruthy()
    expect(sut.form.controls.firstName.hasError('required')).toBeTruthy()
    expect(sut.form.controls.email.hasError('required')).toBeTruthy()
    expect(sut.form.controls.name.hasError('required')).toBeTruthy()
    expect(sut.form.controls.description.hasError('required')).toBeTruthy()
  });

  it(`should be have an error 'email' if it doesn't have the email format`, () => {
    // arrange
    sut = sutBuilder.build();

    // act
    sut.form.patchValue({ email: 'kkkk' })

    // assert
    expect(sut.form.controls.email.hasError('email')).toBeTruthy()
  });

  it('should set isEditMode to true and load data when id is provided in params', () => {
    // arrange
    sut = sutBuilder.build();
    sutBuilder.route.params = of({ id: '123' });

    // act
    sut.ngOnInit()

    // assert
    expect(sut.isEditMode).toBe(true);
    expect(sut.itemId).toBe('123');
    expect(sut.form.value).toEqual(formUserConst.FormUserWithParams);
  });

  it(`should be when submitting,if there is no ID and the form is valid added new user 
      and return to the previous page`, () => {
    // arrange
    sut = sutBuilder.with_some_valid_data_for_form(formUserConst.SomeFormUser).build();
    sut.isEditMode = false

    // act
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).not.toBe('')
    expect(userDataService.addedData).toHaveBeenCalledWith(sut.form.value as IUser);
    expect(sutBuilder.router.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should not call addedUserData when form is not valid', () => {
    // arrange
    sut = sutBuilder.with_some_invalid_data_for_form(formUserConst.SomeInvalidFormUser).build();

    // act
    sut.addedItem()

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userDataService.addedData).not.toHaveBeenCalled();
  });

  it(`should be when submitting,if there is ID and the form updated and return to the previous page`, () => {
    // arrange
    sut = sutBuilder.build();
    sutBuilder.route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ lastName: 'm4', firstName: 'k4' })
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).toBe('123')
    expect(sut.form.controls.lastName.value).toBe('m4')
    expect(userDataService.editData).toHaveBeenCalledWith('123', sut.form.value as IUser);
    expect(sutBuilder.router.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should not call editUserData when form is not valid', () => {
    // arrange
    sut = sutBuilder.with_some_invalid_data_for_form(formUserConst.SomeInvalidFormUser).build();

    // act
    sut.editItem()

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userDataService.editData).not.toHaveBeenCalled();
  });

  it('should be invalid for no navigate', () => {
    // arrange
    sut = sutBuilder.build()
    sutBuilder.route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ lastName: null, firstName: 'k4' })
    sut.submit()

    // assert
    expect(sut.form.invalid).toBeTruthy()
    expect(sutBuilder.router.navigate).not.toHaveBeenCalledWith(['/user'])
    expect(sut.form.dirty).toBeTrue()
    expect(sut.form.touched).toBeTrue();
  });

});
