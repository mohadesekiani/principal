import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestUtil } from 'src/app/core-test/utils/test-util';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './menu.component';
describe('SUT(Integration): MenuComponent', () => {
  let sut: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule, SharedModule, BrowserModule],
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
    const matListItemUser = TestUtil.debugElement(fixture, 'mat-list-item[item-id="user"]').nativeElement
    const matListItemUserGroup = TestUtil.debugElement(fixture, 'mat-list-item[item-id="userGroup"]').nativeElement;
    const allRouterLinkDir = TestUtil.directiveAllElement(fixture, RouterLink)
    spyOn(matListItemUser, 'click');

    // act
    matListItemUser.click()
    matListItemUserGroup.click()
    fixture.detectChanges();

    // assert
    expect(allRouterLinkDir[0].attributes['ng-reflect-router-link']).toEqual('/user');
    expect(allRouterLinkDir[1].attributes['ng-reflect-router-link']).toEqual('/user-group');
    expect(matListItemUser.getAttribute('routerLinkActive')).toBe('active:bg-violet-700');
  });
});
