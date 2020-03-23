import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatProgressBarModule
} from '@angular/material';
import { AppComponent } from 'app/app.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule

  ]
})
export class MaterialModule { }
