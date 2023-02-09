import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sing-in', component: LoginPageComponent },
      { path: '**', redirectTo: 'sing-in' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthModule {}
