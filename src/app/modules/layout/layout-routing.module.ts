import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, children:[
    { path: '', redirectTo: 'dashboard/dashboard', pathMatch: 'full'},
    { path: 'dashboard/dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
    { path: 'ejemplo/ejemplo', loadChildren: '../ejemplo/ejemplo.module#EjemploModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
