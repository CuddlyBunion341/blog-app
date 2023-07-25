import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostRandomComponent } from './components/post/post-random/post-random.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommentSectionComponent } from './components/comment/comment-section/comment-section.component';
import { CommentFormComponent } from './components/comment/comment-form/comment-form.component';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { SignupFormComponent } from './components/auth/signup-form/signup-form.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogoutComponent } from './components/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    HeaderComponent,
    PostDetailComponent,
    PostFormComponent,
    PostListComponent,
    PostRandomComponent,
    FooterComponent,
    CommentSectionComponent,
    CommentFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    WelcomeComponent,
    ProfileComponent,
    NotFoundComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    LMarkdownEditorModule,
    AngularMarkdownEditorModule.forRoot({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
