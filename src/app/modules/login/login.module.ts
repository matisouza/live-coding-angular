import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthModule } from './routing-login.module';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    SigninComponent,
  ],
  exports:[
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthModule,

    ReactiveFormsModule,
  ]
})
export class LoginModule { }
