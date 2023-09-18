import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { UsernameService } from './username.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public role: string = "";

  constructor(protected api: ApiService, private auth: AuthService, protected username: UsernameService) {
    this.username.getRole().subscribe(val => {
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    });
  }

  isAdmin(): boolean {
    return this.role === "Admin";
  }
}
