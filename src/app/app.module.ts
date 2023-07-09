import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HeaderComponent } from './header/header.component';
import { PostRandomComponent } from './post-random/post-random.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [AppComponent, PostListComponent, PostDetailComponent, HeaderComponent, PostRandomComponent, CommentListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
