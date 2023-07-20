import { Serializable } from './serializable.model';

/**
 * Registration model
 */
export class Registration implements Serializable {
  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(partial?: Partial<Registration>) {
    Object.assign(this, partial);
  }

  deserialize(input: any): this {
    // deserializer not necessary for registration
    throw new Error('Method not implemented.');
  }

  serialize(): any {
    let user = {
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirmation: this.confirmPassword,
    };

    return { user };
  }
}
