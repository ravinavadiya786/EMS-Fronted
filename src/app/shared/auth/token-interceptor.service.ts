import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  constructor(private Router: Router, private toast: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headertoken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return next.handle(headertoken).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
        } else {
          //Token Is Invlaid Erro catch,
          if (error.status === 501) {
            this.toast.clear()
            this.toast.error(error.error.Error, 'Error', {
              closeButton: true,
              tapToDismiss: true,
              timeOut: 0
            });
            localStorage.clear()
            this.Router.navigate(['/'])
          }
        }
        return EMPTY;
      })
    );
  }
}
