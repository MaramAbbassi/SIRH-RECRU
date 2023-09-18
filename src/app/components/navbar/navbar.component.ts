import { Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public users:any=[];
  public fullName : string="";
  public role : string="";

  constructor(protected api: ApiService, private auth: AuthService , protected username : UsernameService) { }

  ngOnInit():void{
   /* this.api.getAllTsirhUsers().subscribe(res=> {
      this.users=res;
    })*/
    this.api.getAllTsirhUsers();
    //throw new Error('Method not implemented.');

    this.username.getFullName().subscribe(val =>{
      const fullNameFromToken = this.auth.getFullNameFromToken();
       this.fullName = val || fullNameFromToken;
    });

    this.username.getRole().subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })

    }

  logOut() {
    this.auth.signOut();
  }
}
