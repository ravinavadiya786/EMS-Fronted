import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VattendaceComponent } from './vattendace.component'

const routes: Routes = [
  {
    path: '',
    component: VattendaceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VattendaceRoutingModule { }
export const routedComponents = [VattendaceComponent];

