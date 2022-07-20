import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message: string = '';
  constructor(private routes: Router) {}
  
  ngOnInit(): void {}
  
  check(uname: string, password: string) {
    localStorage.setItem('token','');

    if (uname === 'admin' && password === 'admin123') {
      this.routes.navigate(['/home']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
