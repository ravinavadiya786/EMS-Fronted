import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationaComponent} from './registrationa.component'
const routes: Routes = [
  {
    path: '',
       component: RegistrationaComponent,
      data: {
        title: 'adminregister'
            },
  }
  
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class RegistrationaRoutingModule { }
export const routedComponents = [RegistrationaComponent];