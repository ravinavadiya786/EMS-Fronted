import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBoardComponent } from './noticeboard.component';
import { NoticeBoardRoutingModule } from './noticeboard-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    NoticeBoardRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [NoticeBoardComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]

})
export class NoticeBoardModule { }
