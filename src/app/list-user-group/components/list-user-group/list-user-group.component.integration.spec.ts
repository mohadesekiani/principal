import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TestUtil } from 'src/app/core-test/test-util';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserGroupDataService } from '../../services/user-group-data.service';
import { ListUserGroupComponent } from './list-user-group.component';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';
describe('SUT(Integration): ListUserGroupComponent', () => {
    let sut: ListUserGroupComponent;
    let fixture: ComponentFixture<ListUserGroupComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule],
            declarations: [ListUserGroupComponent],
            providers: [
                {
                    provide: AbstractDataService,
                    useClass: UserGroupDataService,
                }
            ],
        });
        fixture = TestBed.createComponent(ListUserGroupComponent);
        sut = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        // assert
        expect(sut).toBeTruthy();
    });

    it('should be called the addedUserGroup function when the button is clicked', () => {
        // arrange
        const addEl: HTMLButtonElement = TestUtil.nativeElement(fixture, '#add')
        spyOn(sut, 'addedUserGroup');

        // action
        addEl.click();

        // assert
        expect(sut.addedUserGroup).toHaveBeenCalled();
    });

    it('should be called the deletedUserGroup function when the button is clicked', () => {
        // arrange
        const deleteEl: HTMLButtonElement = TestUtil.nativeElement(fixture, '#delete')
        spyOn(sut, 'deletedUserGroup');

        // action
        deleteEl.click();

        // assert
        expect(sut.deletedUserGroup).toHaveBeenCalled();
    });

    it('should be called the editUserGroup function when the button is clicked', () => {
        // arrange
        const editEl: HTMLButtonElement = TestUtil.nativeElement(fixture, '#edit')
        spyOn(sut, 'editUserGroup');

        // action
        editEl.click();

        // assert
        expect(sut.editUserGroup).toHaveBeenCalled();
    });

    it('should be true when the value of allData is greater than zero', () => {
        expect(sut.isAllData).toBeTruthy()
    });
});
