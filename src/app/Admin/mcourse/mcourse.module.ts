import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McourseRoutingModule } from './mcourse-routing.module'
import { McourseComponent } from './mcourse.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({

  imports: [
    CommonModule,
    McourseRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  declarations: [
    McourseComponent,

  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class McourseModule { }
