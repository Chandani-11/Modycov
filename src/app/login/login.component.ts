import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {AuthService} from '../auth.service';
import { logging } from 'protractor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   myForm: FormGroup;
   message: string= "";
   usererror: any;

  constructor( public fb: FormBuilder, public authService: AuthService
    , public router:Router) {
      this.myForm= this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]] 
    })
   }

  ngOnInit() {
  }
  
  onsubmit(form){
     this.authService.login(form.value.email, form.value.password)
     .then((data) => {
       console.log(data);
       this.message= "You have been logged in successfully."
       this.router.navigate(['/myblogs'])

     }).catch((error) =>{
       console.log(error);
       this.usererror= error;
     })
  }

}
