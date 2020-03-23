import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeventImgComponent } from './mevent-img.component';

const routes: Routes = [
  {
    path: '',
    component: MeventImgComponent,

  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class MeventImgRoutingModule { }

export const routedComponents = [MeventImgComponent];
