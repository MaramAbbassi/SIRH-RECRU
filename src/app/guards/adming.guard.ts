import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class admingGuard implements CanActivate {
  constructor(private admins: AdminService, private router: Router, private auth : AuthService) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn() && this.admins.isAdmin()) {
      return true;
    } else if (this.auth.isLoggedIn() && !this.admins.isAdmin()) {
      alert("Vous devez être un admin");
      this.router.navigate(['home']);
      return false;
    }else {
      alert("Vous devez être connecté tant qu'un admin");
      this.router.navigate(['login']);
      return false;
    }
  }

}


/*
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
*/
