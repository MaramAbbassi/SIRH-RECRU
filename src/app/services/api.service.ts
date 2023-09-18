import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string="https://localhost:7114/api/TsirhUser/";
  users : User [] = [];
  user : User | undefined;
  constructor(private http:HttpClient) { }

  getAllTsirhUsers(){
   // return this.http.get<any>(this.baseUrl);
   this.http.get(this.baseUrl).toPromise().then(
    res=> {
       this.users = res  as User[];
     }
  )
  .catch(
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}



  
}
