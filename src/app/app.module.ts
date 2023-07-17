import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  AngularMarkdownEditorComponent,
  AngularMarkdownEditorModule,
} from 'angular-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { HeaderComponent } from './header/header.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRandomComponent } from './post-random/post-random.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    HeaderComponent,
    PostDetailComponent,
    PostFormComponent,
    PostListComponent,
    PostRandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    AngularMarkdownEditorModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
