import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JournaliereService } from 'src/app/services/journaliere.service';

@Component({
  selector: 'app-journaliere',
  templateUrl: './journaliere.component.html',
  styleUrls: ['./journaliere.component.css']
})
export class JournaliereComponent implements OnInit {
  constructor(protected service:JournaliereService, private auth : AuthService){}
  ngOnInit(): void {
    this.service.getAllJournalieres();
    throw new Error('Method not implemented.');
  }
  logOut(){
    this.auth.signOut() ;
  }

}
