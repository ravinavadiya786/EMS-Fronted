import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { RegistrationaRoutingModule } from './registrationa-routing.module'
import {RegistrationaComponent} from 'app/registrationa/registrationa.component'

@NgModule({
  declarations: [RegistrationaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RegistrationaRoutingModule,
  ]
})
export class RegistrationaModule { }
