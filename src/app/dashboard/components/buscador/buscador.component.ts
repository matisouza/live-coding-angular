import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {

  valorInput!: string;

  // @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: ApiService){}

  buscar(){
    // const valor = this.txtBuscar.nativeElement.value;

    if(this.valorInput.trim().length === 0) alert("mi rey debe escribir algo");

    this.gifService.getGifs(this.valorInput);

  }
}
