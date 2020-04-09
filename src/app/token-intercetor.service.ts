import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable()
export class TokenIntercetorService implements HttpInterceptor {

  constructor(private injector: Injector) {}
  intercept(req, next) {
    // tslint:disable-next-line:prefer-const
    let authService = this.injector.get(AuthService);
    // tslint:disable-next-line:prefer-const
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    );
    return next.handle(tokenizedReq);
  }
}
