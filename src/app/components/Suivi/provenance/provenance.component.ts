import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProvenanceService } from 'src/app/services/provenance.service';

@Component({
  selector: 'app-provenance',
  templateUrl: './provenance.component.html',
  styleUrls: ['./provenance.component.css']
})
export class ProvenanceComponent implements OnInit{
  constructor(protected service:ProvenanceService, private auth : AuthService){}
  ngOnInit(): void {
    this.service.getAllProvenances();
    throw new Error('Method not implemented.');
  }

  logOut(){
    this.auth.signOut() ;
  }

}
