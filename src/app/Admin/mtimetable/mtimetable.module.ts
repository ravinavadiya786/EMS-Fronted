import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtimetableComponent } from './mtimetable.component';
import { MtimetableRoutingModule } from './mtimetable-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/auth/token-interceptor.service';

@NgModule({
  declarations: [MtimetableComponent],
  imports: [
    CommonModule,
    MtimetableRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgbModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class MtimetableModule { }
