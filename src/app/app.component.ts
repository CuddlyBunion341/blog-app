import { Component, OnInit } from '@angular/core';
import { ConnectionTestService } from './services/connection-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  constructor(private service: ConnectionTestService) {}

  ngOnInit(): void {
    this.service.testConnection().catch((error) => {
      // q: how do I notify the user, that the API is not available?
      // a: you can use a service to do that
      // q: how do I use a service to do that?
      // a: you can use the session service
      // q: No! thats a bad idea! The session service is for the session!
      // a: ok, then you can use the notification service
      // q: It doesn't exist!
      // q: who do you think you are?
      // a: I am the one who knocks
      // q: what does that mean?
      // a: it means that I am the one who knocks
      // q: no, what are you trying to say?
      // a: I am the one who knocks
      // q: I don't understand
      // a: I am the one who knocks
      // q: Who are you? Really?
    });
  }
}
