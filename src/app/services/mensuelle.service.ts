import { Injectable } from '@angular/core';
import { Mensuelle } from '../models/mensuelle.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MensuelleService {
  url:string="https://localhost:7114/api/PnotationMensuelle"

  mensuelles : Mensuelle [] = [];


  constructor(private http:HttpClient) { }
  getAllMensuelles(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.mensuelles = res  as Mensuelle[];
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
