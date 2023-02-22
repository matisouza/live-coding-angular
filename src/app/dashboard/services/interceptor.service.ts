import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Entro en el interceptor")

    let apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';

    // armar el header usando HttpParams
    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', 5)
      .set('q', 'hola');

    const copia = req.clone({
      params
    })

    return next.handle(copia).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response){
          console.log(event.status)
          console.log(event.body)
        }
      }),
      catchError(this.handlerError)
    )
  }
  handlerError(error: HttpErrorResponse) {
    console.warn(error)
    if (error.status === 401) return throwError(() => new Error('Error en las credenciales'))
    return throwError(() => new Error('Ocurrio un error'))
  }
}
