import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username='MSD'
    let password ='dummy'
    let basicAuthHeaderString = 'Basic '+ username + ':' + password;
    request=request.clone({
      setHeaders : {
          Authorization : basicAuthHeaderString
      }
    })
     return next.handle(request); 
  }
}
