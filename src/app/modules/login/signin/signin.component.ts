import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserForm } from '../interfaces/user-form.interface';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    ) {

    this.signinForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  redirect(){
    this.router.navigate(['dashboard'])

    const name: string = this.signinForm.value.name;
    const lastName: string = this.signinForm.value.lastName;

    let user: IUserForm = {
      name: name,
      lastName: lastName
    }

    this.dataService.setSubjectForm( user );
    this.dataService.setBoolean( true )
  }

}
