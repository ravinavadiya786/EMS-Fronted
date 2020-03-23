import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfacultySubRoutingModule { }
export const routedComponents = [DashboardComponent];
