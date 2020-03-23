import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (!!localStorage.getItem('token')) {
      if (this.authService.getRole() == route.data.roles) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false
      }
    } else {
      this.router.navigate(['/login'])
      return false
    }

  }
}
