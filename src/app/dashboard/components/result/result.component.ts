import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../../modules/shared/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit{

  get result(){
    return this.gifService.result;
  }

  constructor(
    private gifService: ApiService,
    private dataService: DataService,
    ){}

  ngOnInit(): void {
    this.dataService.bhsubject$
      .subscribe( data => this.gifService.getGifs( data ))
  }
}
