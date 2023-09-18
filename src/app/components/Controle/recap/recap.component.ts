import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RecapService } from 'src/app/services/recap.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit{
  constructor(protected service:RecapService , private auth : AuthService) {}
  ngOnInit(): void {
    this.service.getAllRecaps();
    throw new Error('Method not implemented.');
  }

  logOut(){
    this.auth.signOut() ;
  }

}
