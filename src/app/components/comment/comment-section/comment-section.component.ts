import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/comment.model';
import { Author } from '../../../shared/models/author.model';
import { DateService } from '../../../services/date.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit {
  @Input() postId!: number;

  constructor(
    public dateFormater: DateService,
    private service: CommentService
  ) {}

  ngOnInit(): void {
    this.service.getComments(this.postId).then((comments) => {
      this.comments = comments;
    });
  }

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
