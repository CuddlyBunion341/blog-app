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

  private deserializePost(post: any) {
    return new Post(
      post.id,
      post.title,
      post.content,
      new Date(post.created_at),
      new Date(post.updated_at)
    );
  }

  getPosts() {
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

  getPost(id: string) {
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
