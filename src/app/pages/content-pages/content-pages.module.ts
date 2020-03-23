import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";




@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
      
    ]
})
export class ContentPagesModule { }
