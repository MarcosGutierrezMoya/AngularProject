import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesComponent } from './pages/pages.component';

import { AccionComponent } from './pages/accion/accion.component';
import { AventurasComponent } from './pages/aventuras/aventuras.component';
import { IsekaiComponent } from './pages/isekai/isekai.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MisterioComponent } from './pages/misterio/misterio.component';
import { MilitarComponent } from './pages/militar/militar.component';
import { PeleasComponent } from './pages/peleas/peleas.component';
import { PoliciacasComponent } from './pages/policiacas/policiacas.component';
import { PsicologicasComponent } from './pages/psicologicas/psicologicas.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AccionComponent,
    AventurasComponent,
    IsekaiComponent,
    JuegosComponent,
    MisterioComponent,
    MilitarComponent,
    PeleasComponent,
    PoliciacasComponent,
    PsicologicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
