import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  username?: string;

  constructor(private sessionService: SessionService) {
    this.username = this.sessionService.getCurrentUser()?.username;
  }

  ngOnInit(): void {}
}
