import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faUser, faLock, faEyeSlash, faEye, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userIcon = faUser;
  lockIcon = faLock;
  eyeSlashIcon = faEyeSlash;
  eyeIcon = faEye;
  buildingIcon = faBuilding;

  whichEyeIcon = faEyeSlash;

  type: string = "password";
  isText: boolean = false;

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      Identite: ['', Validators.required],
      Etablissement: ['', Validators.required],
      Matricule: ['', Validators.required],
      utilisateur: [''],
      DateMvt: ['']
    });

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
    console.log(this.signUpForm.value)
    if (this.signUpForm.valid) {
      this.signUpForm.get('DateMvt')?.setValue(new Date());

      this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
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

  
}
