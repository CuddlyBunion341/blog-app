import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<PostService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postService = new PostService(httpClientSpy as any);
  });

  it('should list posts', () => {
    // TODO: implement this test
  });
});
