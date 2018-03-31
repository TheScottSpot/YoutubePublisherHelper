// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private router: Router) {}

  canActivate() {

    if(!this.auth.isLoggedIn())
    {
       this.router.navigate(['/account/login']);
       return false;
    }

    return true;
  }
}
