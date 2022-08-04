import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string =  '';
  errorMessage: string = '';

  constructor(private auth: AuthFacadeService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.userName.trim().length === 0){
      this.errorMessage = 'User name is required!';
    }
    else if(this.password.trim().length === 0){
      this.errorMessage = 'Password is required!';
    }
    else{
      this.errorMessage = "";
      let response = this.auth.login(this.userName, this.password);
      if (response === 200){
         this.router.navigate(['home']);  
      }
      if (response === 403){
        this.errorMessage = 'Credentials Invalid!';  
     }
    }
    
  }

}
