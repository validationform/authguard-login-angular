import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguradServiceService {

  constructor(private routes: Router) {}

  isUserLogin(): boolean {
    //return !!this.routes.navigate(['/home']);
    return localStorage.getItem('token') === 'true';
  }
}
