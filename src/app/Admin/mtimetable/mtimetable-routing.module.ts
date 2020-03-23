import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtimetableComponent } from './mtimetable.component';

const routes: Routes = [
  {
    path: '',
    component: MtimetableComponent,
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MtimetableRoutingModule { }
export const routedComponents = [MtimetableComponent];