import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
 
import { AttendanceComponent } from './attendance.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';
import { MaterialModule } from '../../material/material.module'

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AttendanceComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})

export class AttendanceModule { }
