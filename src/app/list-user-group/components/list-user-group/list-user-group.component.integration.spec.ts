import { TestUtil } from 'src/app/core-test/utils/test-util';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserGroupDataService } from '../../services/user-group-data.service';
import { ListUserGroupComponentPage } from './list-user-group.component.integration.spec.page';
describe('SUT(Integration): ListUserGroupComponent', () => {
    let sutPage: ListUserGroupComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: UserGroupDataService,
            }
        ],
    };
    beforeEach(() => {
        sutPage = new ListUserGroupComponentPage(additionalConfig)
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });

    it('should be called the addedUserGroup function when the button is clicked', () => {
        // action
        sutPage.addEl.click();

        // assert
        expect(sutPage.component.addedItem).toHaveBeenCalled();
    });

    it('should be called the deletedUserGroup function when the button is clicked', () => {
        // action
        sutPage.deleteEl.click();

        // assert
        expect(sutPage.component.deletedItem).toHaveBeenCalled();
    });

    it('should be called the editUserGroup function when the button is clicked', () => {
        // action
        sutPage.editEl.click();

        // assert
        expect(sutPage.component.editItem).toHaveBeenCalled();
    });

    it('should be true when the value of allData is greater than zero', () => {
        expect(sutPage.component.isAllData).toBeTruthy()
    });
});
