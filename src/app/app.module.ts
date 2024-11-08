import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    LoginComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'music', component: MusicComponent },
      { path: 'sign', component: SignComponent },
      { path: '', redirectTo: '/sign', pathMatch: 'full' },
      { path: '**', redirectTo: '/sign' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
