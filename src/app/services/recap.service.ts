import { Injectable } from '@angular/core';
import { Recap } from '../models/recap.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecapService {
  url:string="https://localhost:7114/api/PcontroleRecap"

  recaps : Recap [] = [];


  constructor(private http:HttpClient) { }
  getAllRecaps(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.recaps = res  as Recap[];
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
