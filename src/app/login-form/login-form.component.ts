import { Component } from '@angular/core';
import { Login } from '../shared/models/login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  login: Login = new Login({ email: '', password: '' });
  submited: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .login(this.login)
      .then(() => {
        alert('User logged in successfully.');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.submited = true;
      });
  }
}
