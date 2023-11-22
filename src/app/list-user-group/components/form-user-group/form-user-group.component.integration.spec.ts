import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormUserGroupComponent } from './form-user-group.component';
import { UserGroupDataService } from '../../services/user-group-data.service';
import { TestUtil } from 'src/app/core-test/test-util';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
describe('SUT(Integration): FormUserGroupComponent', () => {
    let sut: FormUserGroupComponent;
    let fixture: ComponentFixture<FormUserGroupComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule],
            declarations: [FormUserGroupComponent],
            providers: [
                {
                    provide: AbstractDataService,
                    useClass: UserGroupDataService,
                }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(FormUserGroupComponent);
        sut = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // assert
        expect(sut).toBeTruthy();
    });

    it('should be binding formControlName,form', () => {
        // arrange
        const formEl = TestUtil.formGroup(fixture, 'form')
        const nameCtrl = TestUtil.formControl(fixture, '#name')
        const descriptionCtrl = TestUtil.formControl(fixture, '#description')

        // assert
        expect(sut.form).toBe(formEl.form);
        expect(sut.form.controls.name).toBe(nameCtrl.control);
        expect(sut.form.controls.description).toBe(descriptionCtrl.control);
    });

    it('should be called the submit function when the button is clicked', () => {
        // arrange
        const submitEl: HTMLButtonElement = TestUtil.nativeElement(fixture, '#submit')
        spyOn(sut, 'submit');

        // action
        submitEl.click();

        // assert
        expect(sut.submit).toHaveBeenCalled();
    });
});
