import { Serializable } from './serializable.model';

/**
 * Author model
 */
export class Author implements Serializable {
  id!: number;
  username!: string;
  email!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(data?: Partial<Author>) {
    Object.assign(this, data);
  }

  serialize(): string {
    let author: any = Object.assign({}, this);

    delete author.createdAt;
    delete author.updatedAt;

    return JSON.stringify({ author });
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    return this;
  }
}
