import { Injectable } from '@angular/core';
import { Besoin } from '../models/besoin.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  url:string="https://localhost:7114/api/PsuiviBesoin"

  besoins: Besoin[] = [];


  constructor(private http:HttpClient) { }
  getAllBesoins(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.besoins = res  as Besoin[];
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

