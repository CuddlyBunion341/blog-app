import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login as LoginModel } from '../shared/models/login.model';
import { User } from '../shared/models/user.model';
import { Registration } from '../shared/models/registration.model';
import { SessionService } from './session.service';
import { SessionUser } from '../shared/models/session-user.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AbstractService {
  constructor(
    private sessionService: SessionService,
    private http: HttpClient
  ) {
    super();
  }

  /**
   * Deserializes a user object from the API
   * @param user User object from the API
   * @returns {User}
   */
  private deserializeUser(user: any): User {
    return new User().deserialize(user);
  }

  /**
   * Logs in a user
   * @param loginModel Login credentials
   */
  login(loginModel: LoginModel): Promise<User> {
    // TODO: type this
    return this.http
      .post(`${this.baseUrl}/login`, loginModel.serialize())
      .toPromise()
      .then((res: any) => this.deserializeUser(res))
      .then((user: User) => {
        this.sessionService.setCurrentUser(new SessionUser(user));
        return user;
      })
      .catch(this.handleError);
  }

  /**
   * Gets the current session user from the API
   * @returns {Promise<User>}
   */
  currentUser(): Promise<User> {
    return this.http
      .get(`${this.baseUrl}/user`)
      .toPromise()
      .then((res: any) => this.deserializeUser(res))
      .then((user: User) => {
        this.sessionService.setCurrentUser(new SessionUser(user));
        return user;
      })
      .catch(this.handleError);
  }

  /**
   * Registers a user
   * @param user The user to register
   */
  register(registration: Registration) {
    // TODO: type this
    return this.http
      .post(`${this.baseUrl}/signup`, registration.serialize())
      .toPromise()
      .catch(this.handleError);
  }

  /**
   * Logs out a user
   * @returns {Promise<any>}
   */
  logout() {
    // TODO: type this
    return this.http
      .delete(`${this.baseUrl}/logout`, {})
      .toPromise()
      .finally(() => {
        // Clear the current user from the session even if the API call fails
        this.sessionService.clearCurrentUser();
      });
  }
}
