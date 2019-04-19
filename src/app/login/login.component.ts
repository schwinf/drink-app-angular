import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user= new User();
  message: string;

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) {
    this.setMessage();
   }

  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.message = 'Tryng to log in...';

    if(this.loginForm.get("email").value === "tuna@tuna.com" && this.loginForm.get("password").value === "fish"){
      this.router.navigate(['dashboard']);
    }
    else{
      console.log("Error");
    }
  }
}
