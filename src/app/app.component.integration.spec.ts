import { AppComponentPage } from 'app.component.integration.spec.page';

describe('SUT(Integration): AppComponent', () => {
    let sutPage: AppComponentPage;

    beforeEach(() => {

        sutPage = new AppComponentPage();
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });
});
