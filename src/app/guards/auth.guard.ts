import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService , private router:Router) {}
  canActivate():boolean{
      if(this.auth.isLoggedIn()){
        return true;
      } else {
        alert("S'il vous plait Connectez-vous d'abord!");
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
