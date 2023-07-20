import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'new', component: PostFormComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'random', redirectTo: '/posts/random', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
