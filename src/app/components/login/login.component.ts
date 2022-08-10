import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupLoginForm();
  }

  setupLoginForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.auth
      .login(
        this.loginForm.get('userName').value,
        this.loginForm.get('password').value
      )
      .subscribe((response) => {
        if (response['status'] === 200) {
          this.router.navigate(['home']);
        } else if (response['status'] === 201) {
          this.router.navigate(['home-teacher']);
        } else if (response['status'] === 202) {
          this.router.navigate(['admin-dashboard']);
        } else if (response['status'] === 403) {
        }
      });
  }
}
