import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../shared/models/post.model';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  title = 'all posts';
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    public dateFormater: DateService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().then((posts) => {
      // Sort posts by createdAt date descending
      this.posts = posts.sort((a, b) => {
        return a.createdAt > b.createdAt ? -1 : 1;
      });
    });
  }
}
