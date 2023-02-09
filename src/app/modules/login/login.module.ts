import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthModule } from './routing-login.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports:[
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class LoginModule { }
