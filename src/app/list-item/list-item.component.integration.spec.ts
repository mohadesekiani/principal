import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { DataService } from 'src/app/core/services/data.service';
import { ListItemComponentPage } from './list-item.component.integration.spec.page';


describe('SUT(Integration): ListItemComponent', () => {
    let sutPage: ListItemComponentPage;
    const additionalConfig = {
        providers: [
            {
                provide: AbstractDataService,
                useClass: DataService,
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


    it('should trigger menu when button is clicked', () => {
        // act
        sutPage.addButtonEl.click();
        sutPage.detectChanges();

        // assert
        expect(sutPage.menuElement).toBeTruthy();
    });

    it('should be called the navigatePath function when the button #user is clicked', () => {
        // act
        sutPage.addButtonEl.click();
        sutPage.userButtonEl.click()

        // assert
        expect(sutPage.component.navigatePath).toHaveBeenCalled();
    });

    it('should be called the navigatePath function when the button #user-group is clicked', () => {
        // act
        sutPage.addButtonEl.click();
        sutPage.userGroupButtonEl.click()

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
        expect(sutPage.component.hasData).toBeTruthy()
    });


});
