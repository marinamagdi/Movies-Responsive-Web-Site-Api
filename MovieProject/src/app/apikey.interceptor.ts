import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let apikeyrequest=request.clone({
      url:request.url.replace('api_key=','api_key=6259bea135feb4f41abcc8533bfc1aff')
    })
    return next.handle(apikeyrequest);
  }
}
