import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventGalleryRoutingModule } from './event-gallery-routing.module';
import { EventGalleryComponent } from './event-gallery.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [EventGalleryComponent],
  imports: [
    CommonModule,
    EventGalleryRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class EventGalleryModule { }
