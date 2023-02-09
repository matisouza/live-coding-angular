import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent {

  get result(){
    return this.gifService.result;
  }

  constructor(private gifService: ApiService){}
}
