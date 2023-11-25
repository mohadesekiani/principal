import { FormUserGroupComponentPage } from './form-user-group.component.integration.spec.page';

describe('SUT(Integration): FormUserGroupComponent', () => {
    let sutPage: FormUserGroupComponentPage;

    beforeEach(() => {
        sutPage = new FormUserGroupComponentPage();
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

        // action
        sutPage.submitEl.click();

        // assert
        expect(sutPage.component.submit).toHaveBeenCalled();
    });
});
