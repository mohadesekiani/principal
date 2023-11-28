import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { ListItemComponentPage } from './list-item.component.integration.spec.page';
import { UserDataService } from 'src/app/list-user/services/user-data.service';


describe('SUT(Integration): ListItemComponent', () => {
    let sutPage: ListItemComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: UserDataService,
            },
        ],
    };
    beforeEach(() => {
        sutPage = new ListItemComponentPage(additionalConfig);
    });

    it('should create', () => {
        // assert
        expect(sutPage.detectChanges()).toBeTruthy();
    });

    it('should be called the addedUser function when the button is clicked', () => {
        // act
        sutPage.addEl.click();
        sutPage.userButtonEl.click()

        // assert
        expect(sutPage.component.navigatePath).toHaveBeenCalled();
    });

    it('should be called the deletedUser function when the button is clicked', () => {
        // act
        sutPage.deleteEl.click();

        // assert
        expect(sutPage.component.deletedItem).toHaveBeenCalled();
    });

    it('should be called the editUser function when the button is clicked', () => {
        // act
        sutPage.editEl.click();

        // assert
        expect(sutPage.component.editItem).toHaveBeenCalled();
    });

    it('should be true when the value of allData is greater than zero', () => {
        expect(sutPage.component.isAllData).toBeTruthy()
    });


});
