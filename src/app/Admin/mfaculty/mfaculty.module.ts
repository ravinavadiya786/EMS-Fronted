import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfacultyRoutingModule } from './mfaculty-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import  { MfacultyComponent }  from './mfaculty.component'

@NgModule({
  declarations: [MfacultyComponent],
  imports: [
    CommonModule,
    MfacultyRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class MfacultyModule { }
