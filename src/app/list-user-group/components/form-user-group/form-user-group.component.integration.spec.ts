import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { FormUserGroupComponentPage } from './form-user-group.component.integration.spec.page';
import { DataService } from 'src/app/core/services/data.service';

describe('SUT(Integration): FormUserGroupComponent', () => {
    let sutPage: FormUserGroupComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: DataService,
            }
        ],
    };
    beforeEach(() => {
        sutPage = new FormUserGroupComponentPage(additionalConfig);
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
        expect(sutPage.component.form.controls.name).toBe(sutPage.nameCtrl.control);
        expect(sutPage.component.form.controls.description).toBe(sutPage.descriptionCtrl.control);
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
