import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { UserDataService } from '../../services/user-data.service';
import { FormUserComponent } from './form-user.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TestUtil } from 'src/app/core-test/test-util';
import { isEmpty } from 'rxjs';

describe('SUT(Integration): FormUserComponent', () => {
    let sut: FormUserComponent;
    let fixture: ComponentFixture<FormUserComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule],
            declarations: [FormUserComponent],
            providers: [
                {
                    provide: AbstractUserDataService,
                    useClass: UserDataService,
                }
            ],
        });
        fixture = TestBed.createComponent(FormUserComponent);
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
        const lastNameCtrl = TestUtil.formControl(fixture, '#lastName')
        const firstNameCtrl = TestUtil.formControl(fixture, '#firstName')
        const emailCtrl = TestUtil.formControl(fixture, '#email')
        const nameCtrl = TestUtil.formControl(fixture, '#name')
        const descriptionCtrl = TestUtil.formControl(fixture, '#description')

        // assert
        expect(sut.form).toBe(formEl.form);
        expect(sut.form.controls.lastName).toBe(lastNameCtrl.control);
        expect(sut.form.controls.firstName).toBe(firstNameCtrl.control);
        expect(sut.form.controls.email).toBe(emailCtrl.control);
        expect(sut.form.controls.name).toBe(nameCtrl.control);
        expect(sut.form.controls.description).toBe(descriptionCtrl.control);
    });

    it('should be binding', () => {
        // arrange 
        const emailEl: HTMLInputElement = TestUtil.nativeElement(fixture, '#email');

        // assert 
        expect(emailEl.placeholder).toBe('pat@example.com')
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
