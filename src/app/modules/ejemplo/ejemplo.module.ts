import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EjemploRoutingModule } from './ejemplo-routing.module';

import { EjemploComponent } from './ejemplo.component';

@NgModule({
  declarations: [
    EjemploComponent,
    FormsModule
  ],
  imports: [
    CommonModule,
    EjemploRoutingModule
  ]
})
export class EjemploModule { }
