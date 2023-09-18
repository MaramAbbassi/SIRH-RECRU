import { Injectable } from '@angular/core';
import { Provenance } from '../models/provenance.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProvenanceService {
  url:string="https://localhost:7114/api/PsuiviProvenance"

  provenances : Provenance [] = [];


  constructor(private http:HttpClient) { }
  getAllProvenances(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.provenances = res  as Provenance[];
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
