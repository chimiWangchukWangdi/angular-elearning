import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  uname: any;
  pword: any;

  constructor(private fb:FormBuilder, private auth: AuthFacadeService, private router: Router) { }

  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  })

  ngOnInit(): void {
  }



  login() {
     this.uname = this.loginForm.get('userName')?.value;
     this.pword = this.loginForm.get('password')?.value;
    if (this.uname.trim().length === 0) {
      this.errorMessage = 'User name is required!';
    }
    else if (this.pword.trim().length === 0) {
      this.errorMessage = 'Password is required!';
    }
    else {
      this.errorMessage = "";
      let response = this.auth.login(this.uname, this.pword);
      if (response === 200) {
        this.router.navigate(['home']);
      }
      else if (response === 201) {
        this.router.navigate(['home-teacher']);
      }
      else if (response === 202) {
        this.router.navigate(['admin-dashboard']);
      }
      else if (response === 403) {
        this.errorMessage = 'Credentials Invalid!';
      }
    }

  }
}
