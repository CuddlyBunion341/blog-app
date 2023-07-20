import { Injectable } from '@angular/core';
import { Author as User } from '../shared/models/author.model';
import { SessionUser } from '../shared/models/session-user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly USER_KEY = 'currentUser';

  constructor() {}

  /**
   * Sets the current user in session storage
   * @param user The user to set
   */
  setCurrentUser(user: SessionUser): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Gets the current user from session storage
   * @returns The current user
   */
  getCurrentUser(): SessionUser | null {
    const user = sessionStorage.getItem(this.USER_KEY);
    if (!user) return null;
    return JSON.parse(user);
  }

  /**
   * Clears the current user from session storage
   */
  clearCurrentUser(): void {
    sessionStorage.removeItem(this.USER_KEY);
  }
}
