import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VattendaceRoutingModule } from './vattendace-routing.module';
import { VattendaceComponent } from './vattendace.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  declarations: [VattendaceComponent],
  imports: [
    CommonModule,
    VattendaceRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class VattendaceModule { }
