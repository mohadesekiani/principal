
import { ListUserComponent } from './list-user.component';

describe('SUT: ListUserComponent', () => {
  let sut: ListUserComponent;

  beforeEach(() => {
    sut = new ListUserComponent()
  });

  it('should create', () => {
    // assert 
    expect(sut).toBeTruthy();
  });
});
