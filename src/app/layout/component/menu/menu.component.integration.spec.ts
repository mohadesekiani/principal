import { MenuComponentPage } from './menu.component.integration.spec.page';
describe('SUT(Integration): MenuComponent', () => {
  let sutPage: MenuComponentPage;

  beforeEach(() => {
    sutPage = new MenuComponentPage()
  });

  it('should create', () => {
    // assert
    expect(sutPage.detectChanges()).toBeTruthy();
  });

  it('should be binding', () => {
    // act
    sutPage.matListItemUser.click()
    sutPage.matListItemUserGroup.click()
    sutPage.fixture.detectChanges();

    // assert
    expect(sutPage.allRouterLinkDir[0].attributes['ng-reflect-router-link']).toEqual('/user');
    expect(sutPage.allRouterLinkDir[1].attributes['ng-reflect-router-link']).toEqual('/user-group');
    expect(sutPage.matListItemUser.getAttribute('routerLinkActive')).toBe('active-bg');
  });
});
