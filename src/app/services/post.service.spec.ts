import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PostService', () => {
  let postService: PostService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [postService],
    });
  });

  it('should list posts', () => {
    // TODO: implement tests
  });
});
