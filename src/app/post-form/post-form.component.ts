import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { MarkdownService } from 'ngx-markdown';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  bsEditorInstance!: EditorInstance;
  markdownText = '';
  showEditor = true;
  templateForm!: FormGroup;
  editorOptions!: EditorOption;

  constructor(
    private fb: FormBuilder,
    private markdownService: MarkdownService
  ) {}

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => (this.bsEditorInstance = e),
      parser: (val) => this.parse(val), // TODO: type this
    };
    this.buildForm(this.markdownText);
  }

  buildForm(markdownText: string) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true],
    });
  }

  onChange(e: any) {
    console.log(e.getContent());
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
    content: `
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

`,
  });
}
