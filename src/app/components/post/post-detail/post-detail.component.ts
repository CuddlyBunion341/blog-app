import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post.model';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../../../services/date.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post?: Post;

  constructor(
    public dateFormater: DateService,
    public sessionService: SessionService,
    private service: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.service
      .getPost(id)
      .then((post) => {
        this.post = post;
      })
      .catch((err) => {
        console.error(err);
        alert('Post not found!');
        this.router.navigate(['/posts']);
      });
  }
}
