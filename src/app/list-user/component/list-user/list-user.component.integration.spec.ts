import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
import { ListUserComponent } from './list-user.component';
import { UserDataService } from '../../services/user-data.service';

describe('SUT(Integration): ListUserComponent', () => {
    let sut: ListUserComponent;
    let fixture: ComponentFixture<ListUserComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule],
            declarations: [ListUserComponent],
            providers: [
                {
                    provide: AbstractUserDataService,
                    useClass: UserDataService,
                }
            ],
        });
        fixture = TestBed.createComponent(ListUserComponent);
        sut = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // assert
        expect(sut).toBeTruthy();
    });
});
