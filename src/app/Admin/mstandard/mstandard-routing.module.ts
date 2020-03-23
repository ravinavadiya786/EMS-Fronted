import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MstandardComponent } from '../mstandard/mstandard.component';

const routes: Routes = [
  {
    path: '',
    component: MstandardComponent,

  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MstandardRoutingModule { }
export const routedComponents = [MstandardComponent];