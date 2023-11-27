import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
import { UserGroupDataService } from '../../services/user-group-data.service';
import { ListUserGroupComponentPage } from './list-user-group.component.integration.spec.page';
import { ListUserGroupModule } from '../../list-user-group.module';
xdescribe('SUT(Integration): ListUserGroupComponent', () => {
    let sutPage: ListUserGroupComponentPage;
    const additionalConfig = {
        imports: [
            ListUserGroupModule,
        ],
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
        // act
        sutPage.addEl.click();

        // assert
        expect(sutPage.component.addedItem).toHaveBeenCalled();
    });

    it('should be called the deletedUserGroup function when the button is clicked', () => {
        // act
        sutPage.deleteEl.click();

        // assert
        expect(sutPage.component.deletedItem).toHaveBeenCalled();
    });

    it('should be called the editUserGroup function when the button is clicked', () => {
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
