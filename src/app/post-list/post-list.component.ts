import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  title = 'all posts';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  // parseMarkdown(markdownContent: string): string {
  //   return this.markdownService.compile(markdownContent);
  // }
}
