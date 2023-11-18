import { MenuComponent } from './menu.component';

describe('SUT: MenuComponent', () => {
  let sut: MenuComponent;

  beforeEach(() => {
    sut = new MenuComponent();
    sut.ngOnInit();
  });

  it('should create', () => {
    // assert
    expect(sut).toBeTruthy();
  });

  it('should be create properly', () => {
    // assert
    expect(sut.listMenu).toEqual([
      {route: '/user',value: 'user',title: 'user',active: true,},
      {route: '/user-group',value: 'userGroup',title: 'user Group',active: false,},
    ]);
  });
});
