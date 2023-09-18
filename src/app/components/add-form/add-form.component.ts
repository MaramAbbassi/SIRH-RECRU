import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faUser, faLock, faEyeSlash, faEye, faBuilding, faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { UsernameService } from 'src/app/services/username.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  
  public users:any=[];
  public fullName : string="";
  public role : string="";
  user !: User;
  userFormData!: User
  userToUpdate!: User;
  

  userIcon = faUser;
  lockIcon = faLock;
  eyeSlashIcon = faEyeSlash;
  eyeIcon = faEye;
  buildingIcon = faBuilding;
  keyIcon = faKey ; 
  whichEyeIcon = faEyeSlash;

  type: string = "password";
  isText: boolean = false;

  signUpForm!: FormGroup;

  constructor(protected username:UsernameService,protected api:ApiService,private fb: FormBuilder, private auth: AuthService,private userr:UserService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      id:0,
      Identite: ['', Validators.required],
      Etablissement: ['', Validators.required],
      Matricule: ['', Validators.required],
      Privilege:['', Validators.required],
      utilisateur: [''],
      dateMvt: ['']
    });
    
    this.auth.user= {
      id:0,
      matricule: '',
      identite: '',
      etablissement: '',
      privilege: '',
      utilisateur: '',
      dateMvt: new Date(),
      token: '',
    };

    this.api.getAllTsirhUsers();

    this.username.getFullName().subscribe(val =>{
      const fullNameFromToken = this.auth.getFullNameFromToken();
       this.fullName = val || fullNameFromToken;
    });

    this.username.getRole().subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })


    const etablissementControl = this.signUpForm.get('Etablissement');
    const matriculeControl = this.signUpForm.get('Matricule');

    etablissementControl?.valueChanges.subscribe(() => {
      this.updateUtilisateurField();
    });

    matriculeControl?.valueChanges.subscribe(() => {
      this.updateUtilisateurField();
    });
  }

  updateUtilisateurField() {
    const etablissement = this.signUpForm.get('Etablissement')?.value;
    const matricule = this.signUpForm.get('Matricule')?.value;
    if (etablissement && matricule) {
      const utilisateurValue = `${etablissement}\\${matricule}`;
      this.signUpForm.get('utilisateur')?.setValue(utilisateurValue);
    } else {
      this.signUpForm.get('utilisateur')?.setValue('');
    }
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.whichEyeIcon = faEye : this.whichEyeIcon = faEyeSlash;
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp() {
    if (this.auth.user.id == 0) {
      console.log(this.signUpForm.value)
      if (this.signUpForm.valid) {
        this.signUpForm.get('DateMvt')?.setValue(new Date());

        this.auth.signUp(this.signUpForm.value).subscribe({
          next: (res) => {
            alert(res.message);
            this.signUpForm.reset();
            //this.api.getAllTsirhUsers();
            window.location.reload();
          },
          error: (err) => {
            alert(err?.error.message);
          }
        });
      } else {
        this.validateAllFormFields(this.signUpForm);
        alert("Your form is invalid");
      }
    } 
  }

  onEdit(){
    if (this.auth.user && this.auth.user.id !== 0){
      console.log('user id is',this.auth.user.id);
      this.userToUpdate = this.signUpForm.value as User;
      this.userToUpdate.dateMvt= new Date();
      console.log(this.userToUpdate);
      this.auth.putUser(this.auth.user.id, this.userToUpdate).subscribe(res => {
        //this.api.getAllTsirhUsers();
        this.signUpForm.reset();
        window.location.reload();
        console.log('User data updated successfully:', res);
        
      },
      err => {
        console.log(err);
      })
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  } 

  async sendEmail(){
    emailjs.init("vuv2YDwnp9qTGXaMv");
    let response = await emailjs.send("service_3e3rv9g","template_sl72yr6",{
      message: " Nom & Prénom: " + this.signUpForm.value.Identite
      + "\nEtablissement: " + this.signUpForm.value.Etablissement ,
      });
  }
  updateData(item: User) {
    this.auth.user.id = item.id; // Set the id to the selected user's id
    this.auth.user.matricule = item.matricule;
    this.auth.user.identite = item.identite;
    this.auth.user.etablissement = item.etablissement;
    this.auth.user.privilege = item.privilege;
  
    // Update the form fields
    this.signUpForm.patchValue({
      id: item.id,
      Identite: item.identite,
      Etablissement: item.etablissement,
      Matricule: item.matricule,
      Privilege: item.privilege,
    });
  }
  

 
}
