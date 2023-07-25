import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Author } from '../../../shared/models/author.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user?: User;

  constructor(
    public sessions: SessionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser().then((user) => {
      this.user = user;
    });
  }
}
