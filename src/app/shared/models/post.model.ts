import { Author } from './author.model';
import { Comment } from './comment.model';
import { Serializable } from './serializable.model';

/**
 * Post model
 */
export class Post implements Serializable {
  id!: number;
  title!: string;
  body!: string;
  createdAt!: Date;
  updatedAt!: Date;
  comments!: Comment[];
  author!: Author;

  constructor(data?: Partial<Post>) {
    Object.assign(this, data);
  }

  serialize(): Object {
    let post: any = Object.assign({}, this);

    delete post.createdAt;
    delete post.updatedAt;
    delete post.author;
    delete post.comments;

    return { post };
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    if (input.comments)
      this.comments = input.comments.map((comment: any) =>
        new Comment().deserialize(comment)
      );
    if (input.author) this.author = new Author().deserialize(input.author);

    return this;
  }
}
