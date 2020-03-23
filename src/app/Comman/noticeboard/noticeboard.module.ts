import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeboardRoutingModule } from './noticeboard-routing.module';
import { NoticeboardComponent } from '../noticeboard/noticeboard.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  declarations: [NoticeboardComponent],
  imports: [
    CommonModule,
    NoticeboardRoutingModule,
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class NoticeboardModule { }
