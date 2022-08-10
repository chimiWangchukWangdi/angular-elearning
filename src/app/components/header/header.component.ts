import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthFacadeService) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['home']);
  }

  logout(): void{
    this.router.navigate(['login']);
  }

}
