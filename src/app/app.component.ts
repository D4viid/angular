import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pierre et Vacances';

  user: any = {};

  logout(): void {
    this.user = null;
  }
}