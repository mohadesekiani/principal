import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { ListUserComponentPage } from './list-user.component.integration.spec.page';
import { UserDataService } from '../../services/user-data.service';

describe('SUT(Integration): ListUserComponent', () => {
    let sutPage: ListUserComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: UserDataService,
            }
        ],
    };
    beforeEach(() => {
        sutPage = new ListUserComponentPage(additionalConfig);
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });

    it('should be called the addedUser function when the button is clicked', () => {
        // action
        sutPage.addEl.click();

        // assert
        expect(sutPage.component.addedItem).toHaveBeenCalled();
    });

    it('should be called the deletedUser function when the button is clicked', () => {
        // action
        sutPage.deleteEl.click();

        // assert
        expect(sutPage.component.deletedItem).toHaveBeenCalled();
    });

    it('should be called the editUser function when the button is clicked', () => {
        // action
        sutPage.editEl.click();

        // assert
        expect(sutPage.component.editItem).toHaveBeenCalled();
    });

    it('should be true when the value of allData is greater than zero', () => {
        expect(sutPage.component.isAllData).toBeTruthy()
    });
});
