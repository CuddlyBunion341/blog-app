import { Deserializable } from './deserializable.model';

/**
 * Author model
 */
export class Author implements Deserializable {
  id!: number;
  username!: string;
  email!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(data?: Partial<Author>) {
    Object.assign(this, data);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
    return this;
  }
}
