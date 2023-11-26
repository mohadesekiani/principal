import { FormBuilder } from "@angular/forms";
import { FormUserGroupComponent } from "./form-user-group.component";
import { ActivatedRoute, Router } from "@angular/router";
import * as fakeData from '../../services/mock-data/index';
import { of } from "rxjs";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";
import { FormUserGroupFormBuilder } from "./form-user-group.component.spec.builder";
import { formUserGroupConst } from "src/app/core/model/interface/form-user-group.spec.const";

describe('SUT: FormUserGroupComponent', () => {
  let sut: FormUserGroupComponent;
  let userGroupDataService: jasmine.SpyObj<AbstractDataService<IUserGroup>>;
  let sutBuilder: FormUserGroupFormBuilder;

  beforeEach(() => {
    userGroupDataService = jasmine.createSpyObj<AbstractDataService<IUserGroup>>({
      addedData: of(fakeData),
      getByID: of({
        id: '123', description: 'test for description', name: 'Doe John'
      }),
      editData: of({
        id: '123', description: 'test for description', name: 'm3 k3'
      }),
      setId: 'userGroup_123_y'

    });
    sutBuilder = new FormUserGroupFormBuilder(userGroupDataService);
  });

  it('should create', () => {
    // assert
    sut = sutBuilder.build()
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null FormBuilder and router and userGroupDataService and route', () => {
    // assert
    expect(() => new FormUserGroupComponent(null as any, sutBuilder.route, userGroupDataService)).toThrowError('router is null')
    expect(() => new FormUserGroupComponent(sutBuilder.router, sutBuilder.route, null as any)).toThrowError('dataService is null')
    expect(() => new FormUserGroupComponent(sutBuilder.router, null as any, userGroupDataService)).toThrowError('route is null')
  });

  it('should be create properly', () => {
    // arrange
    sut = sutBuilder.build()

    // assert
    expect(sut.form).toBeTruthy();
    expect(sut.form.value).toEqual(formUserGroupConst.defaultFormUserGroup);
    expect(sut.isEditMode).toBeFalsy();
  });

  it(`should be have an error 'required' when the value is null`, () => {
    // arrange
    sut = sutBuilder.build()

    // assert
    expect(sut.form.controls.name.hasError('required')).toBeTruthy()
    expect(sut.form.controls.description.hasError('required')).toBeTruthy()
  });

  it('should set isEditMode to true and load data when id is provided in params', () => {
    // arrange
    sut = sutBuilder.build()
    sutBuilder.route.params = of({ id: '123' });

    // act
    sut.ngOnInit()

    // assert
    expect(sut.isEditMode).toBe(true);
    expect(sut.itemId).toBe('123');
    expect(sut.form.value).toEqual({
      id: '123', description: 'test for description', name: 'Doe John'
    });
  });

  it(`should be when submitting,if there is no ID and the form is valid added new userGroup
  and return to the previous page`, () => {
    // arrange
    sut = sutBuilder.with_some_valid_data_for_form(formUserGroupConst.SomeFormUserGroup).build()
    sut.isEditMode = false


    // act
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).not.toBe('')
    expect(userGroupDataService.addedData).toHaveBeenCalledWith(sut.form.value as IUserGroup);
    expect(sutBuilder.router.navigate).toHaveBeenCalledWith(['/user-group']);
  });

  it('should not call addedData when form is not valid', () => {
    //arrange
    sut = sutBuilder.with_some_invalid_data_for_form(formUserGroupConst.SomeInvalidFormUserGroup).build()

    // act
    sut.addedItem();

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userGroupDataService.addedData).not.toHaveBeenCalled();
  });

  it(`should be when submitting,if there is ID and the form updated and return to the previous page`, () => {
    // arrange
    sut = sutBuilder.build()
    sutBuilder.route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ name: 'm4 k4' })
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).toBe('123')
    expect(sut.form.controls.name.value).toBe('m4 k4')
    expect(userGroupDataService.editData).toHaveBeenCalledWith('123', sut.form.value as IUserGroup);
    expect(sutBuilder.router.navigate).toHaveBeenCalledWith(['/user-group']);
  });

  it('should not call editData when form is not valid', () => {
    //arrange
    sut = sutBuilder.with_some_invalid_data_for_form(formUserGroupConst.SomeInvalidFormUserGroup).build();

    // act
    sut.editItem()

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userGroupDataService.editData).not.toHaveBeenCalled();
  });


  it('should be invalid for no navigate', () => {
    // arrange
    sut = sutBuilder.build()
    sutBuilder.route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ name: null })
    sut.submit()

    // assert
    expect(sut.form.invalid).toBeTruthy()
    expect(sutBuilder.router.navigate).not.toHaveBeenCalledWith(['/user-group'])
    expect(sut.form.dirty).toBeTrue()
    expect(sut.form.touched).toBeTrue();
  });
});
