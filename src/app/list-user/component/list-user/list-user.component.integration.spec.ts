import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { ListUserModule } from '../../list-user.module';
import { UserDataService } from '../../services/user-data.service';
import { ListUserComponentPage } from './list-user.component.integration.spec.page';

describe('SUT(Integration): ListUserComponent', () => {
    let sutPage: ListUserComponentPage;
    const additionalConfig = {
        imports: [
            ListUserModule,
        ],
        providers: [
            {
                provide: AbstractDataService,
                useClass: UserDataService,
            },
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
        // act
        sutPage.addEl.click();

        // assert
        expect(sutPage.component.addedItem).toHaveBeenCalled();
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

    it('should be render truncated description in cell with matching tooltip', () => {
        // assert
        expect(sutPage.tdDescriptionWithId.attributes['ng-reflect-message'].value).toBe('test for description');
        expect(sutPage.tdDescriptionWithId.attributes['ng-reflect-position'].value).toBe('right');
    });

});
