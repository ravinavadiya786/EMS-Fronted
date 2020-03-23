import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NoticeBoardComponent } from './noticeboard.component';

const routes: Routes = [
  {
    path: '',
    component: NoticeBoardComponent,

  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeBoardRoutingModule { }
export const routedComponents = [NoticeBoardComponent];
