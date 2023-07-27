import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post.model';
import { MarkdownService } from 'ngx-markdown';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  isEditForm = false;

  bsEditorInstance!: EditorInstance;
  templateForm!: FormGroup;
  editorOptions!: EditorOption;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private markdownService: MarkdownService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      console.log(id);

      this.postService
        .getPost(id)
        .then((post) => {
          this.post = post;
          this.isEditForm = true;
          this.buildForm(this.post.body);
        })
        .catch((err) => {
          console.error(err);
          alert('Post not found!');
          this.router.navigate(['/posts']);
        });
    }

    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      hideable: false,
      language: 'en',
      footer: false,
      resize: 'none',
      hiddenButtons: ['Preview', 'TogglePreview'],
      onShow: (e) => (this.bsEditorInstance = e),
      parser: (val) => this.parse(val), // TODO: type this
    };
    this.buildForm(this.post.body);
  }

  onSubmit() {
    // TODO: validate form

    if (this.isEditForm) {
      this.postService.updatePost(this.post).then((res) => {
        alert('Post updated successfully!');
      });
    } else {
      this.postService.createPost(this.post).then((res) => {
        alert('Post created successfully!');
        this.router.navigate(['/edit', res.id]);
      });
    }
  }

  onDelete() {
    if (!this.isEditForm) return;

    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(this.post.id).then((res) => {
        alert('Post deleted successfully!');
        this.router.navigate(['/posts']);
      });
    }
  }

  buildForm(markdownText: string) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true],
    });
  }

  parse(inputValue: string) {
    const output = this.markdownService.parse(inputValue.trim());
    this.highlight();

    return output;
  }

  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  post = new Post({
    title: '',
    body: postBody,
  });
}

const postBody = `
# Hello World!
## This is a sub-heading...
### And here's some other cool stuff:

This is a paragraph, and you can add some **bold text**.
Or even some _italicized text_. Or even some ~~strikethrough text~~.
Or even some \`inline code\`.
Here's a link to [my portfolio](http://www.cb341.net).
What about a quote?
> To be, or not to be. That is the question. - William Shakespeare

Or maybe a list of JavaScript frameworks?
- Angular
- React
- Vue
- Ember
- Backbone
- Svelte
- ...

\`\`\`typescript
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return \`\${this.firstName} \${this.lastName}\`;
  }
}
\`\`\`
`;
