import { Component } from '@angular/core';
import { Comment } from '../../../shared/models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  comment: Comment = new Comment();

  onSubmit() {
    console.log(this.comment);

    // TODO: call service to save comment
  }
  constructor() {} // TODO: inject comment service
}
