import { Component } from '@angular/core';
import { User } from './models/user.model';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pierre et Vacances';

  user: User = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(
      data => {
        this.user = data;
      }
    );
  }

  logout(): void {
    this.user = null;
  }
}
