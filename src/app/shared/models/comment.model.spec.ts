import { Comment } from './comment.model';

describe('CommentModel', () => {
  it('should create an instance', () => {
    expect(
      new Comment({
        id: 1,
        body: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ).toBeTruthy();
  });
});
