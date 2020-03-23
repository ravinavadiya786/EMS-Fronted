import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfacultyComponent } from './mfaculty.component';

const routes: Routes = [
  {
  path: '',
  component: MfacultyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MfacultyRoutingModule { }
export const routedComponents = [MfacultyComponent];