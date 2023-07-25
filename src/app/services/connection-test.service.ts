import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionTestService {
  private url = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Tests the connection to the API
   * @returns {Promise<any>}
   */
  testConnection(): Promise<any> {
    return new Promise(() => {});
    return this.http
      .get(`${this.url}/test`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  /**
   * Handles promise errors
   * @param error Error
   * @returns {Promise<any>}
   */
  private handleError(error: any): Promise<any> {
    if (error.status === 0) {
      alert(
        'Could not connect to the API, check the console for more information.'
      );
    }
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
