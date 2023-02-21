import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Entro en el interceptor')

    let apiKey = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';

    // armar el header usando HttpParams
    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', 5)
      .set('q', 'nice');


    // Solo tiene un uso, por eso lo clonamos.
    const clone = req.clone({
      params
    })


    /**
     * como retornamos un observable,
     * podemos usar el pipe para capturar el error de la petición
     */
    return next.handle(clone).pipe(
      catchError(this.handlerError)
    )
  }

  handlerError(err: HttpErrorResponse) {
    if (err.status == 0) return throwError(() => new Error('error'))
    return throwError(() => new Error('Error'))
  }
}
