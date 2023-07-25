import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class AbstractService {
  protected baseUrl = 'http://localhost:3000/api/v1';

  /**
   * Handles promise errors
   * @param error Error
   * @returns {Promise<any>}
   */
  protected handleError(error: any): Promise<any> {
    if (error.status === 0) {
      alert(
        'Could not connect to server. Please try again later. Check console for more details.'
      );
    }

    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
