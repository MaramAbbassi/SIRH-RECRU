import { Injectable } from '@angular/core';
import { Matricule } from '../models/matricule.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MatriculeService {
  url:string="https://localhost:7114/api/PsuiviMatricule"

  matricules : Matricule [] = [];


  constructor(private http:HttpClient) { }
  getAllMatricules(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.matricules = res  as Matricule[];
       }
    )
    .catch(
      (error) => {
        console.error("Error fetching data:", error);
        // Handle the error appropriately.
      }
    );
  } 
}

