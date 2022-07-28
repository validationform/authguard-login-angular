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
  
  ngOnInit(): void {
    localStorage.setItem('token','true');
  }
  
  check(userName: string, password: string) {
   
    if (userName === 'admin' && password === 'admin123') {
      this.routes.navigate(['/home']);
      localStorage.setItem('token','false');
    } 
    else {
      this.message = 'Invalid username or password';
    }
  }
}
