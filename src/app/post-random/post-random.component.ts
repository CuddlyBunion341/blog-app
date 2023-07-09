import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-random',
  templateUrl: './post-random.component.html',
  styleUrls: ['./post-random.component.scss'],
})
export class PostRandomComponent implements OnInit {
  post?: Post;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getRandomPost().then((post) => {
      this.post = post;
    });
  }
}
