import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { FormUserComponentPage } from './form-user.component.integration.spec.page';
import { UserDataService } from '../../services/user-data.service';

describe('SUT(Integration): FormUserComponent', () => {
    let sutPage: FormUserComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: UserDataService,
            }
        ],
    };
    beforeEach(() => {
        sutPage = new FormUserComponentPage(additionalConfig)
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });

    it('should be binding formControlName,form', () => {
        // arrange
        sutPage.detectChanges()

        // assert
        expect(sutPage.component.form).toBe(sutPage.formEl.form);
        expect(sutPage.component.form.controls.lastName).toBe(sutPage.lastNameCtrl.control);
        expect(sutPage.component.form.controls.firstName).toBe(sutPage.firstNameCtrl.control);
        expect(sutPage.component.form.controls.email).toBe(sutPage.emailCtrl.control);
        expect(sutPage.component.form.controls.name).toBe(sutPage.nameCtrl.control);
        expect(sutPage.component.form.controls.description).toBe(sutPage.descriptionCtrl.control);
    });

    it('should be binding', () => {
        // arrange 
        sutPage.detectChanges()

        // assert 
        expect(sutPage.emailEl.placeholder).toBe('pat@example.com')
    });

    it('should be called the submit function when the button is clicked', () => {
        // arrange
        sutPage.detectChanges()

        // act
        sutPage.submitEl.click();

        // assert
        expect(sutPage.component.submit).toHaveBeenCalled();
    });

});
