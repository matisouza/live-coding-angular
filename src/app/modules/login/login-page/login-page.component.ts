import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HolaService } from '../../shared/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent{

  constructor(private router: Router, public holaService: HolaService) { }

  redirect() {
    this.router.navigate(['dashboard/gif']);
  }


}
