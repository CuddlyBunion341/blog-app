import { Post } from './post.model';

describe('PostModel', () => {
  it('should create an instance', () => {
    expect(
      new Post('Hello World!', 'Lorem Ipsum', new Date(), new Date())
    ).toBeTruthy();
  });
});
