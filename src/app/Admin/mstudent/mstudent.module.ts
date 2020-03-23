import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MstudentComponent } from './mstudent.component';
import { MstudentRoutingModule } from './mstudent-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  declarations: [MstudentComponent],
  imports: [
    CommonModule,
    MstudentRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class MstudentModule { }
