import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { McourseComponent } from './mcourse.component'

const routes: Routes = [
  {
    path: '',
    component: McourseComponent,
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McourseRoutingModule { }
export const routedComponents = [McourseComponent];