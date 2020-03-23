import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashbord.component';
import { MfacultySubRoutingModule } from './dashbord-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    MfacultySubRoutingModule
  ],
  declarations: [DashboardComponent],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]

})
export class DashbordModule { }
