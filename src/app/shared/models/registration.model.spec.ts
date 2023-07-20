import { Registration } from './registration.model';

describe('RegistrationModel', () => {
  it('should create an instance', () => {
    expect(
      new Registration({
        username: 'test',
        email: 'test@example.com',
        password: '123456',
        confirmPassword: '123456',
      })
    ).toBeTruthy();
  });
});
