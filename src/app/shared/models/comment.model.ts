import { Author } from './author.model';
import { Post } from './post.model';
import { Serializable } from './serializable.model';

/**
 * Comment model
 */
export class Comment implements Serializable {
  id!: number;
  body!: string;
  createdAt!: Date;
  updatedAt!: Date;
  author!: Author;
  post!: Post;

  constructor(data?: Partial<Comment>) {
    Object.assign(this, data);
  }

  serialize(): Object {
    let comment: any = Object.assign({}, this);

    delete comment.createdAt;
    delete comment.updatedAt;
    delete comment.author;
    delete comment.post;

    comment.post_id = this.post.id;

    return { comment };
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    if (input.author) this.author = new Author({}).deserialize(input.author);
    // this.post = new Post({ id: input.post.id }).deserialize(input.post); // TODO: fix recursion
    return this;
  }
}
