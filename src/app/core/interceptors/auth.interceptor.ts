import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.shouldInterceptRequest()) {
      return next.handle(request);
    }
    
    const authRequest = request.clone({
      setHeaders: {
        'Authorization' : this.cookieService.get('Authorization')
      }
    });

    return next.handle(authRequest);
  }

  private shouldInterceptRequest()
  {
    return this.cookieService.check('Authorization');
  }
}
