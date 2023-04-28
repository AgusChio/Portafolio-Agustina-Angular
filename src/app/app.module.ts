import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SobreMiComponent,
    ServiciosComponent,
    CertificacionesComponent,
    ProyectosComponent,
    ContactoComponent,
    MainComponent,
    ScrollToTopComponent,
    RedesSocialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
