import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashbord.component';
import { MfacultySubRoutingModule } from './dashbord-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    MfacultySubRoutingModule,
    NgbModule,
    SwiperModule
  ],
  declarations: [DashboardComponent],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]

})
export class DashbordModule { }
