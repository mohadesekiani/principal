import { FormBuilder } from "@angular/forms";
import { FormUserGroupComponent } from "./form-user-group.component";
import { ActivatedRoute, Router } from "@angular/router";
import * as fakeData from '../../services/mock-data/index';
import { of } from "rxjs";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";

describe('SUT: FormUserGroupComponent', () => {
  let sut: FormUserGroupComponent;
  let fb: FormBuilder;
  let router: jasmine.SpyObj<Router>;
  let route: jasmine.SpyObj<ActivatedRoute>;
  let userGroupDataService: jasmine.SpyObj<AbstractDataService<IUserGroup>>;

  beforeEach(() => {
    userGroupDataService = jasmine.createSpyObj<AbstractDataService<IUserGroup>>({
      addedData: of(fakeData),
      getByID: of({
        id: '123', description: 'test for description', name: 'Doe John'
      }),
      editData: of({
        id: '123', description: 'test for description', name: 'm3 k3'
      })
    });
    fb = new FormBuilder();
    router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    route = { params: jasmine.createSpyObj('params', ['subscribe']) } as jasmine.SpyObj<ActivatedRoute>;
    sut = new FormUserGroupComponent(fb, router, userGroupDataService, route);
    sut.ngOnInit()
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be throw exception with null FormBuilder and router and userGroupDataService and route', () => {
    // assert
    expect(() => new FormUserGroupComponent(null as any, router, userGroupDataService, route)).toThrow('FormBuilder is empty')
    expect(() => new FormUserGroupComponent(fb, null as any, userGroupDataService, route)).toThrow('router is empty')
    expect(() => new FormUserGroupComponent(fb, router, null as any, route)).toThrow('userGroupDataService is empty')
    expect(() => new FormUserGroupComponent(fb, router, userGroupDataService, null as any)).toThrow('route is empty')
  });

  it('should be create properly', () => {
    // assert
    expect(sut.form).toBeTruthy();
    expect(sut.form.value).toEqual({
      id: null, description: null, name: null
    });
    expect(sut.isEditMode).toBeFalsy();
  });

  it(`should be have an error 'required' when the value is null`, () => {
    // assert
    expect(sut.form.controls.name.hasError('required')).toBeTruthy()
    expect(sut.form.controls.description.hasError('required')).toBeTruthy()
  });

  it('should set isEditMode to true and load data when id is provided in params', () => {
    // arrange
    route.params = of({ id: '123' });

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
    sut.isEditMode = false
    sut.form.setValue({
      id: '', description: 'test for description', name: 'm4 k4'
    })

    // act
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).not.toBe('')
    expect(userGroupDataService.addedData).toHaveBeenCalledWith(sut.form.value as IUserGroup);
    expect(router.navigate).toHaveBeenCalledWith(['/user-group']);
  });

  it('should not call addedData when form is not valid', () => {
    //arrange
    sut.form.patchValue({ name: 'm3 k3' })

    // act
    sut['addedUserGroup']();

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userGroupDataService.addedData).not.toHaveBeenCalled();
  });

  it(`should be when submitting,if there is ID and the form updated and return to the previous page`, () => {
    // arrange
    route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ name: 'm4 k4' })
    sut.submit()

    // assert
    expect(sut.form.controls.id.value).toBe('123')
    expect(sut.form.controls.name.value).toBe('m4 k4')
    expect(userGroupDataService.editData).toHaveBeenCalledWith('123', sut.form.value as IUserGroup);
    expect(router.navigate).toHaveBeenCalledWith(['/user-group']);
  });

  it('should not call editData when form is not valid', () => {
    //arrange
    sut.form.patchValue({ description: 'test for des' })

    // act
    sut['editUserGroup']();

    // assert
    expect(sut.form.valid).toBeFalsy()
    expect(userGroupDataService.editData).not.toHaveBeenCalled();
  });


  it('should be invalid for no navigate', () => {
    // arrange
    route.params = of({ id: '123' });
    sut.isEditMode = true;

    // act
    sut.ngOnInit()
    sut.form.patchValue({ name: null })
    sut.submit()

    // assert
    expect(sut.form.invalid).toBeTruthy()
    expect(router.navigate).not.toHaveBeenCalledWith(['/user-group'])
    expect(sut.form.dirty).toBeTrue()
    expect(sut.form.touched).toBeTrue();
  });
});
