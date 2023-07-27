import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends AbstractService {
  private url = `${this.baseUrl}/posts`;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Deserializes a post object from the API
   * @param post Post object from the API
   * @returns {Post}
   */
  private deserializePost(post: any): Post {
    return new Post().deserialize(post);
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
        if (!data) return null;
        const postList = data as Array<any>; // TODO: type this
        return postList.map((post) => this.deserializePost(post));
      })
      .catch(this.handleError);
  }

  /**
   * Get a post by id
   * @param {string} id Post id to get
   * @returns {Promise<Post>}
   */
  getPost(id: string): Promise<Post> {
    return this.http
      .get(`${this.url}/${id}`)
      .toPromise()
      .then((data) => {
        if (!data) return null;
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
        if (!data) return null;
        const post = data as any; // TODO: type this
        return this.deserializePost(post);
      })
      .catch(this.handleError);
  }

  /**
   * Creates a post
   * @param post Post to create
   * @returns {Promise<Post>}
   */
  createPost(post: Post) {
    return this.http
      .post(this.url, post.serialize())
      .toPromise()
      .catch(this.handleError);
  }

  /**
   * Updates a post
   * @param post Post to update
   * @returns {Promise<Post>}
   */
  updatePost(post: Post) {
    return this.http
      .put(`${this.url}/${post.id}`, { post })
      .toPromise()
      .catch(this.handleError);
  }

  /**
   * Deletes a post
   * @param postId Post id to delete
   * @returns {Promise<any>}
   */
  deletePost(postId: number) {
    return this.http
      .delete(`${this.url}/${postId}`)
      .toPromise()
      .catch(this.handleError);
  }
}
