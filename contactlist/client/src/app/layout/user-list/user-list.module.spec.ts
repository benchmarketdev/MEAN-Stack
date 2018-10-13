import { UserListModule } from './user-list.module';

describe('UserListModule', () => {
  let userListModule: UserListModule;

  beforeEach(() => {
    userListModule = new UserListModule();
  });

  it('should create an instance', () => {
    expect(userListModule).toBeTruthy();
  });
});
