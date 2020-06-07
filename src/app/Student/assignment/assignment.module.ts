import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';
import { AssignmentRoutingModule } from './assignment-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AssignmentComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AssignmentImgModule { }
