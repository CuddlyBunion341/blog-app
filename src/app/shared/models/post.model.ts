import { Author } from './author.model';
import { Comment } from './comment.model';
import { Deserializable } from './deserializable.model';

/**
 * Post model
 */
export class Post implements Deserializable {
  id!: number;
  title!: string;
  content!: string;
  createdAt!: Date;
  updatedAt!: Date;
  comments!: Comment[];
  author!: Author;

  constructor(data?: Partial<Post>) {
    Object.assign(this, data);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    this.comments = input.comments.map((comment: any) =>
      new Comment().deserialize(comment)
    );
    this.author = new Author().deserialize(input.author);

    return this;
  }
}
