import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from '../timetable/timetable.component';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [TimetableComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    Ng2SmartTableModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class TimetableModule { }
