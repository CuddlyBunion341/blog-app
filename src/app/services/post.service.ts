import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  /**
   * Deserializes a post object from the API
   * @param post Post object from the API
   * @returns {Post}
   */
  private deserializePost(post: any): Post {
    return new Post(
      post.id,
      post.title,
      post.content,
      new Date(post.created_at),
      new Date(post.updated_at)
    );
  }

  /**
   * Get a list of posts
   * @returns {Promise<Post[]>}
   */
  getPosts(): Promise<Post[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        if (!data) return;

        const postList = data as Array<any>; // TODO: type this

        return postList.map((post) => this.deserializePost(post));
      })
      .catch(this.handleError);
  }

  /**
   * Get a post by id
   * @param {string} id
   * @returns {Promise<Post>}
   */
  getPost(id: string): Promise<Post> {
    return this.http
      .get(`${this.url}/${id}`)
      .toPromise()
      .then((data) => {
        if (!data) return;

        const post = data as any; // TODO: type this

        return this.deserializePost(post);
      })
      .catch(this.handleError);
  }

  /**
   * Gets a random post
   * @returns {Promise<Post>}
   */
  getRandomPost(): Promise<Post> {
    return this.http
      .get(`${this.url}/random`)
      .toPromise()
      .then((data) => {
        if (!data) return;

        const post = data as any; // TODO: type this

        return this.deserializePost(post);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
