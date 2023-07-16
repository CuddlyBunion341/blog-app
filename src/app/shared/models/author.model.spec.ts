import { Author } from './author.model';

describe('Author model', () => {
  it('should create an instance', () => {
    expect(
      new Author({
        id: 1,
        username: 'test',
        email: 'email@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toBeTruthy();
  });
});
