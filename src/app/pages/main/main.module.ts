import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routes */
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainSidebarControlComponent } from './main-sidebar-control/main-sidebar-control.component';
import { MainContentComponent } from './main-content/main-content.component'; 
import { MainFooterComponent } from './main-footer/main-footer.component';

/* Pages Components */
import { InicioComponent } from './pages/inicio/inicio.component';
import { BlankComponent } from './pages/blank/blank.component';

@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainSidebarControlComponent,
    MainContentComponent,
    MainFooterComponent,
    InicioComponent,
    BlankComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
