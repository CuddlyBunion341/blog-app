import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Gets all comments for a post
   * @param postId  Post ID to get comments for
   * @returns {Promise<Comment[]>}
   */
  getComments(postId: number) {
    return this.http
      .get(`${this.baseUrl}/posts/${postId}/comments`)
      .toPromise()
      .then((res: any) => res.map((comment: any) => new Comment(comment)))
      .catch(this.handleError);
  }
}
