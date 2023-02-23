import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url   : string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';

  result: Gif[] = []

  constructor( private http: HttpClient ) {}

  getGifs( consulta: string = '' ){

    // sacar espacios y sacar mayusculas
    consulta = consulta.trim().toLocaleLowerCase();

    // armar el header usando HttpParams
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 5)
      .set('q', consulta);

    // la consulta
    this.http
      .get<SearchGifsResponse>( `${ this.url }/search`, { params } )
      .subscribe( ( resp )=> ( this.result = resp.data ))
  }

}
