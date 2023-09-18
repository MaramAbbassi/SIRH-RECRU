import { Injectable } from '@angular/core';
import { Annuelle } from '../models/annuelle.model';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AnnuelleService {
  url:string="https://localhost:7114/api/PnotationAnnuelle"

  annuelles: Annuelle[] = [];

  constructor(private http:HttpClient) { }
  
  getAllAnnuelles(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.annuelles = res  as Annuelle[];
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

