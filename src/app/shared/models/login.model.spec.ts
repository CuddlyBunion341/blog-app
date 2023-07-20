import { Login } from './login.model';

describe('LoginModel', () => {
  it('should create an instance', () => {
    expect(
      new Login({
        email: 'test@example.com',
        password: '123456',
      })
    ).toBeTruthy();
  });
});
