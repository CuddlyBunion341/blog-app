import { Author } from './author.model';
import { Post } from './post.model';
import { Comment } from './comment.model';

/**
 * User model
 */
export class User extends Author {
  comments!: Comment[];
  posts!: Post[];
  admin!: boolean;

  constructor(input?: any) {
    super(input);
  }

  override serialize(): Object {
    let user: any = Object.assign({}, this);

    delete user.comments;
    delete user.posts;
    delete user.createdAt;
    delete user.updatedAt;

    return { user };
  }

  override deserialize(input: any): this {
    super.deserialize(input);

    if (input.comments)
      this.comments = input.comments.map((comment: any) => {
        new Comment().deserialize(comment);
      });

    if (input.posts)
      this.posts = input.posts.map((post: any) => {
        new Post().deserialize(post);
      });
    return this;
  }
}
