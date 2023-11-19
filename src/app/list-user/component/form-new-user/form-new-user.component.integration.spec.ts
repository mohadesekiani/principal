import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { UserDataService } from '../../services/user-data.service';
import { FormNewUserComponent } from './form-new-user.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TestUtil } from 'src/app/core-test/test-util';
import { isEmpty } from 'rxjs';

describe('SUT(Integration): FormNewUserComponent', () => {
    let sut: FormNewUserComponent;
    let fixture: ComponentFixture<FormNewUserComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule],
            declarations: [FormNewUserComponent],
            providers: [
                {
                    provide: AbstractUserDataService,
                    useClass: UserDataService,
                }
            ],
        });
        fixture = TestBed.createComponent(FormNewUserComponent);
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

        // assert
        expect(sut.form).toBe(formEl.form);
        expect(sut.form.controls.lastName).toBe(lastNameCtrl.control);
        expect(sut.form.controls.firstName).toBe(firstNameCtrl.control);
        expect(sut.form.controls.email).toBe(emailCtrl.control);
    });

    it('should be binding', () => {
        // arrange 
        const emailEl: HTMLInputElement = TestUtil.nativeElement(fixture, '#email');

        // assert 
        expect(emailEl.placeholder).toBe('pat@example.com')
    });

});
