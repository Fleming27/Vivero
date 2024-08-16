import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuculentasComponent } from './suculentas/suculentas.component';
import { AnturiosComponent } from './anturios/anturios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SuculentasComponent,
    AnturiosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PlantasModule { }
