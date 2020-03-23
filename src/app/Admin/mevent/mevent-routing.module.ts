import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeventComponent } from './mevent.component';

const routes: Routes = [
  {
    path: '',
    component: MeventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MeventRoutingModule { }
export const routedComponents = [MeventComponent];
