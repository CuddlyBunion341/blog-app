/**
 * Model for the session user.
 */
export class SessionUser {
  id!: number;
  email!: string;
  username!: string;
  admin!: boolean;

  constructor(partial?: Partial<SessionUser>) {
    Object.assign(this, partial);
  }
}
