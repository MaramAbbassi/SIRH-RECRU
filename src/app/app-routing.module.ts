import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompComponent } from './components/home/homecomp/homecomp.component';
import { RecapComponent } from './components/Controle/recap/recap.component';
import { JournaliereComponent } from './components/Notation/journaliere/journaliere.component';
import { MatriculeComponent } from './components/Suivi/matricule/matricule.component';
import { TdbcompComponent } from './components/TDB/tdbcomp/tdbcomp.component';
import { MensuelleComponent } from './components/Notation/mensuelle/mensuelle.component';
import { AnnuelleComponent } from './components/Notation/annuelle/annuelle.component';
import { BesoinComponent } from './components/Suivi/besoin/besoin.component';
import { ProvenanceComponent } from './components/Suivi/provenance/provenance.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { admingGuard } from './guards/adming.guard';
import { AddFormComponent } from './components/add-form/add-form.component';

const routes: Routes = [
  { path: 'home', component: HomecompComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'controle', component: RecapComponent, canActivate: [AuthGuard] },
  { path: 'notation', component: JournaliereComponent, canActivate: [AuthGuard] },
  { path: 'notation-journaliere', component: JournaliereComponent, canActivate: [AuthGuard] },
  { path: 'notation-mensuelle', component: MensuelleComponent, canActivate: [AuthGuard] },
  { path: 'notation-annuelle', component: AnnuelleComponent, canActivate: [AuthGuard] },
  { path: 'suivi', component: MatriculeComponent, canActivate: [AuthGuard] },
  { path: 'suivi-matricule', component: MatriculeComponent, canActivate: [AuthGuard] },
  { path: 'suivi-besoin', component: BesoinComponent, canActivate: [AuthGuard] },
  { path: 'suivi-provenance', component: ProvenanceComponent, canActivate: [AuthGuard] },
  //{ path: 'tdb', component: TdbcompComponent, canActivate: [AuthGuard] },
  { path: 'tdb', component: TdbcompComponent, canActivate: [admingGuard] },
  { path: 'add-Form', component: AddFormComponent, canActivate: [admingGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
