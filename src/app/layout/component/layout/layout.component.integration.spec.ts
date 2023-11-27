import { LayoutComponentPage } from './layout.component.integration.spec.page';

describe('SUT(Integration): LayoutComponent', () => {
    let sutPage: LayoutComponentPage;

    beforeEach(() => {
        sutPage = new LayoutComponentPage()
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });
});
