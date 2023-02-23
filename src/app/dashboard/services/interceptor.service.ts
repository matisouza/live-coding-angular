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


    const copia = req.clone()

    return next.handle(copia).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response){
          console.log(event.status)
          // console.log(event.body)
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
