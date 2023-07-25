import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Registration } from '../../../shared/models/registration.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  user: Registration = new Registration();
  errors = {
    username: null,
    email: null,
    password: null,
    confirm_password: null,
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .register(this.user)
      .then(() => {
        alert('User created successfully.');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert('There was an error creating the user.');
        this.errors = error.errors;
      });
  }
}
