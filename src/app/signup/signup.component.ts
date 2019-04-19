import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

//import { User } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  
    signupForm = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  

  signUp() {
    this.authService.createAccount(this.signupForm.getRawValue()).subscribe( result => {
      if(result.body.data){
        this.router.navigate(['/', 'dashboard']);
      }
      else
        console.log("NOPE");
    });
  }
}
