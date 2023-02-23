import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { IUserForm } from '../../login/interfaces/user-form.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  valueForm!: IUserForm;
  value!: boolean;

  constructor( private dataService: DataService){
    dataService.subjectForm$.subscribe( data => this.valueForm = data )
    dataService.subjectBoolean$.subscribe( data => this.value = data )
  }

}
