import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventGalleryComponent } from './event-gallery.component'


const routes: Routes = [
  {
    path: '',
    component: EventGalleryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventGalleryRoutingModule { }
