import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post?: Post;

  constructor(
    public dateFormater: DateService,
    private service: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.service.getPost(id).then((post) => {
      this.post = post;
    });
  }
}
