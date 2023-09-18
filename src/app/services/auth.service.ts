import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { User } from '../models/user.model';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string="https://localhost:7114/api/TsirhUser/";
  private userPayload:any;
   user!:User;

  constructor(private http:HttpClient, private router : Router) {
    this.userPayload=this.decodedToken();
  }

  putUser(id: number, user: User) {
    const url = `${this.baseUrl}${id}`;
    return this.http.put(url, user);
  }
  deleteUser(id: number) {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete(url);
  }

  signUp (userObj:any) {
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  login (loginObj:any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }

  signOut (){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  storeToken (tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken (){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwthelper = new JwtHelperService();
    const token=this.getToken()!;
    return jwthelper.decodeToken(token);
  }

  getFullNameFromToken(){
    if (this.userPayload)
    return this.userPayload.name;

  }
  getRoleFromToken(){
    if (this.userPayload)
    return this.userPayload.role;
  }

}
