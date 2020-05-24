import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxTextEditorModule } from 'ngx-text-editor';
import { from } from 'rxjs';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let Config = {
  apiKey: "AIzaSyCc7P0JUbOp6yImq4J7dUiS62N49dpm6as",
  authDomain: "modycov.firebaseapp.com",
  databaseURL: "https://modycov.firebaseio.com",
  projectId: "modycov",
  storageBucket: "modycov.appspot.com",
  messagingSenderId: "42405669496",
  appId: "1:42405669496:web:68c935d6ed43bdf17d1b8d",
  measurementId: "G-NWBM6R74RD"
};
firebase.initializeApp(Config);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
