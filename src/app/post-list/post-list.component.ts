import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  title = 'all posts';

  posts: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
