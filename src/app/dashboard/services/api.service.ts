import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url   : string = 'https://apiasdas.sda.com/v1/giasdafs';

  result: Gif[] = []

  constructor( private http: HttpClient ) {}

  getGifs( consulta: string = '' ){

    // sacar espacios y sacar mayusculas
    consulta = consulta.trim().toLocaleLowerCase();



    // la consulta
    this.http
      .get<SearchGifsResponse>( `${ this.url }/search`, )
      .subscribe( ( resp )=> ( this.result = resp.data ))
  }

}
