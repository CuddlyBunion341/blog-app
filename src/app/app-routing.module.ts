import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { SignupFormComponent } from './components/auth/signup-form/signup-form.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'new', component: PostFormComponent },
  { path: 'random', redirectTo: '/posts/random', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit/:id', component: PostFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
