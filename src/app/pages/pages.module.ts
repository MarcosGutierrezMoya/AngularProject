import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { AccionComponent } from './accion/accion.component';
// import { AventurasComponent } from './aventuras/aventuras.component';
// import { IsekaiComponent } from './isekai/isekai.component';
// import { JuegosComponent } from './juegos/juegos.component';
// import { MisterioComponent } from './misterio/misterio.component';
// import { MilitarComponent } from './militar/militar.component';
// import { PeleasComponent } from './peleas/peleas.component';
// import { PoliciacasComponent } from './policiacas/policiacas.component';
// import { PsicologicasComponent } from './psicologicas/psicologicas.component';

@NgModule({
  declarations: [
    // AccionComponent,
    // AventurasComponent,
    // IsekaiComponent,
    // JuegosComponent,
    // MisterioComponent,
    // MilitarComponent,
    // PeleasComponent,
    // PoliciacasComponent,
    // PsicologicasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ]
})
export class PagesModule {}
