import { Component , OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatriculeService } from 'src/app/services/matricule.service';

@Component({
  selector: 'app-matricule',
  templateUrl: './matricule.component.html',
  styleUrls: ['./matricule.component.css']
})
export class MatriculeComponent implements OnInit {
  constructor(protected service:MatriculeService, private auth : AuthService){}
  ngOnInit(): void {
    this.service.getAllMatricules();
    throw new Error('Method not implemented.');
  }
  logOut(){
    this.auth.signOut() ;
  }

}
