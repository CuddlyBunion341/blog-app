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

  getPosts() {
    return this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        if (!data) return;

        const postList = data as {
          title: string;
          content: string;
          created_at: string;
          updated_at: string;
        }[];

        return postList.map(
          (post) =>
            new Post(
              post.title,
              post.content,
              new Date(post.created_at),
              new Date(post.updated_at)
            )
        );
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
