import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardRoutingModule } from './standard-routing.module';
import { StandardComponent } from '../standard/standard.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class StandardModule { }
