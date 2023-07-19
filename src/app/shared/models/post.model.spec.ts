import { Post } from './post.model';

describe('PostModel', () => {
  it('should create an instance', () => {
    expect(
      new Post({
        id: 1,
        title: 'Hello World!',
        body: 'Lorem Ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toBeTruthy();
  });
});
