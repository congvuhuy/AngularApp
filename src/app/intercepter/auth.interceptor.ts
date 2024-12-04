import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('access_token');
    if (token != null) {
      req = this.addTokenHeader(req, token);
    }
    return handler.handle(req);
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        "Content-Type":'application/json',
      }
    });
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
