import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formLogin): void {
    console.log(this.user);

    if (formLogin.valid) {

    }
  }

}
