import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MensuelleService } from 'src/app/services/mensuelle.service';

@Component({
  selector: 'app-mensuelle',
  templateUrl: './mensuelle.component.html',
  styleUrls: ['./mensuelle.component.css']
})
export class MensuelleComponent implements OnInit {
  constructor(protected service:MensuelleService, private auth : AuthService){}
  ngOnInit(): void {
    this.service.getAllMensuelles();
    throw new Error('Method not implemented.');
  }
  logOut(){
    this.auth.signOut() ;
  }


}
