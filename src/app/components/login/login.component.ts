import { Matricule } from './../../models/matricule.model';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faUser , faLock, faEyeSlash , faEye} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userIcon = faUser;
  lockIcon=  faLock ;
  eyeSlashIcon = faEyeSlash;
  eyeIcon=faEye;

  whichEyeIcon=faEyeSlash;
 
  type:string="password";
  isText:boolean=false;

  loginForm!: FormGroup;


  constructor(private fb:FormBuilder , private auth: AuthService , private router:Router, private username : UsernameService ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Identite:['', Validators.required],
      Matricule:['',Validators.required]
    })


    throw new Error('Method not implemented.');
  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.whichEyeIcon=faEye : this.whichEyeIcon=faEyeSlash ;
    this.isText ? this.type="text" : this.type="password";
  }

  onLogin(){
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=> {
          //alert(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          const tokenPayload = this.auth.decodedToken();
          this.username.setFullName(tokenPayload.name);
          this.username.setRole(tokenPayload.role);
          this.router.navigate(['/home']);
        },
        error:(err)=> {
          alert (err?.error.message);
          this.loginForm.reset();
          
        }
      })
    }else {
      this.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
  }

  private validateAllFormFields (formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }


}




