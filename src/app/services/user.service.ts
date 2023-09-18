import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="https://localhost:7114/api/TsirhUser"
  users: User[]= [];
  user!: User;
  
  constructor(private http:HttpClient) { }

  postUser(){
    return this.http.post(this.url, this.user);
  }
/*
  putUser(){
    return this.http.put(this.url + "/"+this.user.id, this.user);
  }*/

  putUser(id: number, user: User) {
    const url = `${this.url}/${id}`;
    return this.http.put(url, user);
  }
}
