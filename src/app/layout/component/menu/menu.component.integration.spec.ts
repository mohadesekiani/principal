import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatListItem } from "@angular/material/list";
import { BrowserModule, By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/shared/shared.module";
import { MenuComponent } from "./menu.component";
import { TestUtil } from "src/app/core-test/test-util";

describe('SUT(Integration): MenuComponent', () => {
    let sut: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SharedModule, BrowserModule],
            declarations: [MenuComponent],
            providers: [],
        });
        fixture = TestBed.createComponent(MenuComponent);
        sut = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // assert
        expect(sut).toBeTruthy();
    });

    it('should be binding', () => {
        // arrange
        const matListItem = TestUtil.directiveNativeElement(fixture, MatListItem);

        // assert
        expect(matListItem.getAttribute('routerLink')).toBe("/")
    });

});

