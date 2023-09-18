import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecapComponent } from './components/Controle/recap/recap.component';
import { JournaliereComponent } from './components/Notation/journaliere/journaliere.component';
import { MensuelleComponent } from './components/Notation/mensuelle/mensuelle.component';
import { AnnuelleComponent } from './components/Notation/annuelle/annuelle.component';
import { MatriculeComponent } from './components/Suivi/matricule/matricule.component';
import { BesoinComponent } from './components/Suivi/besoin/besoin.component';
import { ProvenanceComponent } from './components/Suivi/provenance/provenance.component';
import { HomecompComponent } from './components/home/homecomp/homecomp.component';
import { TdbcompComponent } from './components/TDB/tdbcomp/tdbcomp.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecapComponent,
    JournaliereComponent,
    MensuelleComponent,
    AnnuelleComponent,
    MatriculeComponent,
    BesoinComponent,
    ProvenanceComponent,
    HomecompComponent,
    TdbcompComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS , useClass : TokenInterceptor  , multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
