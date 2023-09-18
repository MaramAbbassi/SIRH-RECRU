import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BesoinService } from 'src/app/services/besoin.service';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {
  constructor(protected service:BesoinService, private auth : AuthService){}
  ngOnInit(): void {
    this.service.getAllBesoins();
    throw new Error('Method not implemented.');
  }

  logOut(){
    this.auth.signOut() ;
  }

}
