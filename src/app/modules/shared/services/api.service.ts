import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  constructor() { }

  hola2: boolean = true

  hola():string{
    return "hola"
  }
}
