import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PieComponent } from './componentes/pie/pie.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EstudiosComponent,
    AcercaDeComponent,
    FormularioComponent,
    PieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
