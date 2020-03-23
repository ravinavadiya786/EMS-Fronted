import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  // token: string;

  constructor(private Router: Router) { }

  logout() {
    localStorage.removeItem('token')
    this.Router.navigate(['/login'])
  }

  getRole(){
    return jwt_decode(localStorage.getItem('token')).role
  }
}
