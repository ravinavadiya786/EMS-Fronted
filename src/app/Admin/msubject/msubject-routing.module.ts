import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsubjectComponent } from './msubject.component'

const routes: Routes = [
  {
    path: '',
    component: MsubjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MsubjectRoutingModule { }
export const routedComponents = [MsubjectComponent];