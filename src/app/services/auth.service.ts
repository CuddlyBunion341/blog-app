import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login as LoginModel } from '../shared/models/login.model';
import { Author as User } from '../shared/models/author.model';
import { Registration } from '../shared/models/registration.model';
import { SessionService } from './session.service';
import { SessionUser } from '../shared/models/session-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/api/v1/users';

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  /**
   * Deserializes a user object from the API
   * @param user User object from the API
   * @returns {User}
   */
  private deserializeUser(user: any): User {
    console.log({ user });

    return new User().deserialize(user);
  }

  /**
   * Logs in a user
   * @param loginModel Login credentials
   */
  login(loginModel: LoginModel): Promise<User> {
    // TODO: type this
    return this.http
      .post(`${this.url}/sign_in`, loginModel.serialize())
      .toPromise()
      .then((res: any) => this.deserializeUser(res))
      .then((user: User) => {
        this.sessionService.setCurrentUser(new SessionUser(user));
        console.log(this.sessionService.getCurrentUser());

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
      .get(`${this.url}/current`)
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
      .post(this.url, registration.serialize())
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
      .get(`${this.url}/sign_out`, {})
      .toPromise()
      .then(() => {
        this.sessionService.clearCurrentUser();
      });
  }

  // TODO: refactor this to a shared service
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    // TODO: refactor this
    if (error.error.error) {
      return Promise.reject(error.error.error);
    }

    return Promise.reject(error.error || error);
  }
}
