import { Author } from './author.model';
import { Deserializable } from './deserializable.model';
import { Post } from './post.model';

/**
 * Comment model
 */
export class Comment implements Deserializable {
  id!: number;
  body!: string;
  createdAt!: Date;
  updatedAt!: Date;
  author!: Author;
  post!: Post;

  constructor(data?: Partial<Comment>) {
    Object.assign(this, data);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    this.author = new Author({}).deserialize(input.author);
    // this.post = new Post({ id: input.post.id }).deserialize(input.post); // TODO: fix recursion
    return this;
  }
}
