import { Registration } from './registration.model';
import { SessionUser } from './session-user.model';

describe('SessionUserModel', () => {
  it('should create an instance', () => {
    expect(
      new SessionUser({
        username: 'test',
        email: 'test@example.com',
      })
    ).toBeTruthy();
  });
});
