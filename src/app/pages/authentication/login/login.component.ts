import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formLogin): void {

    if (formLogin.valid) {
      this.auth.login(this.user.login, this.user.password);
    }
  }

}
