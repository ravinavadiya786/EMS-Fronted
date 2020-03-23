import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeboardComponent } from './noticeboard.component'

const routes: Routes = [
  {
    path: '',
    component: NoticeboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeboardRoutingModule { }
