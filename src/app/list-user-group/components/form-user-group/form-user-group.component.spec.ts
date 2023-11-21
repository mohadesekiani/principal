import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserGroupComponent } from './form-user-group.component';

describe('FormUserGroupComponent', () => {
  let component: FormUserGroupComponent;
  let fixture: ComponentFixture<FormUserGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserGroupComponent]
    });
    fixture = TestBed.createComponent(FormUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
