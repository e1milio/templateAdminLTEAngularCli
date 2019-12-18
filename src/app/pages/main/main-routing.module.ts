import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BlankComponent } from './pages/blank/blank.component';

const routes: Routes = [
  { path: '', component: MainComponent, children:[
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: InicioComponent },
    { path: 'blank', component: BlankComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
