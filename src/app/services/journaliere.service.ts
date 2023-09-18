import { Injectable } from '@angular/core';
import { Journaliere } from '../models/journaliere.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JournaliereService {
  url:string="https://localhost:7114/api/PnotationJournaliere"

  journalieres : Journaliere [] = [];


  constructor(private http:HttpClient) { }
  getAllJournalieres(){
    this.http.get(this.url).toPromise().then(
      res=> {
         this.journalieres = res  as Journaliere[];
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

