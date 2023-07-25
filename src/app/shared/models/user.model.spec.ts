import { User } from './user.model';

describe('UserModel', () => {
  it('should create an instance', () => {
    expect(
      new User({
        id: 1,
        username: 'test',
        email: 'test@example.com',
        admin: false,
      })
    ).toBeTruthy();
  });
});
