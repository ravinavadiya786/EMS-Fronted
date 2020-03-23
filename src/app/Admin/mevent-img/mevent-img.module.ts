import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeventImgComponent } from './mevent-img.component';
import { MeventImgRoutingModule } from './mevent-img-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  declarations: [MeventImgComponent],
  imports: [
    CommonModule,
    MeventImgRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class MeventImgModule { }
