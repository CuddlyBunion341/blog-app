import { Component } from '@angular/core';
import { Comment } from '../../../shared/models/comment.model';
import { Author } from '../../../shared/models/author.model';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  constructor(public dateFormater: DateService) {}

  comments = [
    new Comment({
      body: 'Hello World!',
      author: new Author({ username: 'test' }),
      createdAt: new Date('2023-07-18'),
    }),
    new Comment({
      body: 'Lorem ipsum',
      author: new Author({ username: 'test' }),
      createdAt: new Date('2023-07-18'),
    }),
    new Comment({
      body: 'What a wonderful world!',
      author: new Author({ username: 'test' }),
      createdAt: new Date('2023-07-18'),
    }),
  ];
}
