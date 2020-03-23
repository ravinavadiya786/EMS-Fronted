import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MstudentComponent } from './mstudent.component';

const routes: Routes = [
  {
    path: '',
    component: MstudentComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MstudentRoutingModule { }
export const routedComponents = [MstudentComponent];
