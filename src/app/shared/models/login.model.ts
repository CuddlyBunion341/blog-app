import { Serializable } from './serializable.model';

/**
 * Login model
 */
export class Login implements Serializable {
  email!: string;
  password!: string;

  constructor(data?: Partial<Login>) {
    Object.assign(this, data);
  }

  serialize(): Object {
    return { user: this };
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
