import { Component, OnInit } from '@angular/core';
import { AnnuelleService } from 'src/app/services/annuelle.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annuelle',
  templateUrl: './annuelle.component.html',
  styleUrls: ['./annuelle.component.css']
})
export class AnnuelleComponent implements OnInit {

  constructor(protected service: AnnuelleService, private auth: AuthService) { }
  ngOnInit(): void {
    this.service.getAllAnnuelles();
    throw new Error('Method not implemented.');
  }

  logOut() {
    this.auth.signOut();
  }


}
